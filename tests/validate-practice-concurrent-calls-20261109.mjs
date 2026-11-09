import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source = readFileSync('assets/practice.js', 'utf8');
const first = source.indexOf('async function loadCall(id) {');
const last = source.indexOf('\nasync function boot()', first);
assert.ok(first > 0 && last > first, 'No se encuentra loadCall original');
const loadCallBody = source.slice(first, last);

const deferred = () => {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
};
const slow = deferred();
const calls = [
  { id: 'a', shortLabel: 'Convocatoria A', programmeUrl: 'a-programme', supuestosUrl: null, simulacrosUrl: null, themeCount: 1 },
  { id: 'b', shortLabel: 'Convocatoria B', programmeUrl: 'b-programme', supuestosUrl: null, simulacrosUrl: null, themeCount: 1 }
];
const records = [];
const localStorage = { setItem: (key, value) => records.push([key, value]) };
const history = { replaceState: () => {} };
const document = { title: '' };
const app = { innerHTML: '' };
const response = name => ({ ok: true, json: async () => ({ marker: name }) });
const fetch = url => url === 'a-programme' ? slow.promise : Promise.resolve(response(url));
const bankCalls = [];
const loadQuestionBanks = async call => {
  bankCalls.push(call.id);
  return new Map([[call.id, { id: call.id }]]);
};
const loadExtraRepasos = async () => ({ packs: [], errors: [] });
const rendered = [];
const renderHub = () => rendered.push('hub');
const startThemeTest = () => rendered.push('theme');
const location = { search: '' };
const setup = new Function(
  'CALLS','localStorage','history','document','app','fetch',
  'loadQuestionBanks','loadExtraRepasos','renderHub','startThemeTest','location','rendered',
  `let latestCallLoad=0, activeCall=null, programme=null, supuestos=null, simulacros=null;
   let questionMap=new Map(), extraRepasos=[], extraRepasoErrors=[];
   const SELECTED_CALL_KEY='test';
   ${loadCallBody}
   return {loadCall, state:()=>({active:activeCall?.id, marker:programme?.marker, keys:[...questionMap.keys()], rendered:[...rendered], errors:extraRepasoErrors})};`
);
const {loadCall, state} = setup(
  calls,localStorage,history,document,app,fetch,
  loadQuestionBanks,loadExtraRepasos,renderHub,startThemeTest,location,rendered
);
const old = loadCall('a');
const latest = loadCall('b');
await latest;
assert.equal(state().active, 'b');
assert.equal(state().marker, 'b-programme');
assert.deepEqual(state().keys, ['b']);
assert.equal(state().rendered.length, 1);
slow.resolve(response('a-programme'));
await old;
assert.equal(state().active, 'b');
assert.equal(state().marker, 'b-programme', 'Una carga antigua sobrescribió el programa actual');
assert.deepEqual(state().keys, ['b'], 'Un banco de preguntas antiguo contaminó la selección');
assert.equal(state().rendered.length, 1, 'Una carga obsoleta volvió a pintar la interfaz');
assert.deepEqual(bankCalls, ['a','b'], 'Cada banco debe cargarse con una convocatoria capturada');

// La carga de packs complementarios conserva los errores localmente para
// impedir que una petición obsoleta escriba sobre los avisos de otra oposición.
assert.ok(source.includes('const errors = [];'));
assert.ok(source.includes('return { packs: results.flat(), errors };'));
assert.ok(source.includes('extraRepasoErrors = loadedRepasos.errors;'));
assert.ok(source.includes('if (requestId !== latestCallLoad) return;'));

console.log('Carrera de carga: prevalece la convocatoria más reciente, sin mezclar bancos ni avisos.');
