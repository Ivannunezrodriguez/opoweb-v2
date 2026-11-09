import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('assets/practice.js', 'utf8');
const callsHeader = source.slice(source.indexOf('const CALLS = ['), source.indexOf('let activeCall ='));
const calls = new Function(callsHeader + '\nreturn CALLS;')();
const c2 = calls.find(call => call.id === 'diputacion-toledo-auxiliar-c2-2026');
assert.ok(c2, 'Diputación Auxiliar C2 debe ser seleccionable en la práctica');
assert.equal(c2.programmeUrl, 'data/programa-diputacion-auxiliar-c2-2026.json');
assert.equal(c2.contentRoot, 'content/diputacion-toledo-auxiliar-c2');
assert.equal(c2.themeCount, 20);
assert.equal(c2.supuestosUrl, null, 'No inventar supuestos que todavía no están publicados');
assert.equal(c2.simulacrosUrl, null, 'No inventar simulacros que todavía no están publicados');

const bankCode = source.slice(source.indexOf('async function loadQuestionBanks('), source.indexOf('function renderHistory('));
const loadBanks = new Function('activeCall', 'fetch', 'normaliseQuestion',
  bankCode + '\nreturn loadQuestionBanks;'
);
const fetched = [];
const fetchBank = async path => {
  fetched.push(path);
  return { ok: true, json: async () => ({
    preguntas: [{ id: 'DT-C2-T' + path.split('/tema-')[1].slice(0, 2) + '-TEST', respuestaCorrecta: 0 }]
  }) };
};
const banks = await loadBanks(c2, fetchBank, (item, theme) => ({ ...item, tema: theme }))();
assert.equal(banks.size, 19, 'Deben cargarse los 19 bancos no bloqueados');
assert.ok(!fetched.some(path => path.includes('/tema-06/')),
  'El tema 6 provisional OAPGT no puede ofrecerse como test jurídicamente validado');
assert.ok(fetched.includes('content/diputacion-toledo-auxiliar-c2/tema-20/preguntas.json'));
assert.ok([...banks.values()].every(q => Number.isInteger(q.tema) && q.tema !== 6),
  'La trazabilidad por tema debe mantenerse en Diputación C2');

const loadCode = source.slice(source.indexOf('async function loadCall('), source.indexOf('\nasync function boot()'));
const loadCall = new Function(
  'CALLS', 'localStorage', 'history', 'document', 'app', 'fetch', 'loadQuestionBanks',
  'loadExtraRepasos', 'renderHub', 'startThemeTest', 'location',
  'let latestCallLoad=0, activeCall, programme, supuestos, simulacros, questionMap, extraRepasos, extraRepasoErrors; const SELECTED_CALL_KEY="test";\n' +
  loadCode + '\nreturn async id => { await loadCall(id); return {activeCall, programme, supuestos, simulacros, questionMap}; };'
);
const requested = [];
let route = '';
const run = loadCall(calls, { setItem() {} }, { replaceState(_a, _b, url) { route = url; } },
  { title: '' }, { innerHTML: '' },
  async path => {
    requested.push(path);
    return { ok: true, json: async () => ({ temas: [{ numero: 1, titulo: 'Constitución' }] }) };
  },
  async () => banks, async () => ({ packs: [], errors: [] }), () => {}, () => {}, { search: '' }
);
const loaded = await run(c2.id);
assert.equal(loaded.activeCall.id, c2.id, 'La práctica no debe redirigir silenciosamente a La Puebla');
assert.equal(loaded.supuestos.supuestos.length, 0);
assert.equal(loaded.simulacros.simulacros.length, 0);
assert.deepEqual(requested, [c2.programmeUrl], 'La carga no debe solicitar JSON de supuestos inexistentes');
assert.match(route, /convocatoria=diputacion-toledo-auxiliar-c2-2026/);

const review = readFileSync('assets/practice-review.js', 'utf8');
assert.match(review, /'diputacion-toledo-auxiliar-c2-2026':\s*\{\s*progressKey: 'opoweb-diputacion-auxiliar-c2-practice-progress-v1'/,
  'El seguimiento de errores del C2 debe tener su propia clave');
const page = readFileSync('practice.html', 'utf8');
assert.match(page, /assets\/practice\.js\?v=2026\.11\.05\.1/,
  'Bump de versión obligatorio para no mostrar el JS antiguo en caché');
assert.match(source, /Preguntas en revisión jurídica/,
  'Los temas sin preguntas auditadas deben mostrarse deshabilitados');
console.log('DIPUTACION_AUXILIAR_C2_ENTRENAMIENTO_RUTA_Y_BORRADOR_BLOQUEADO_OK');
