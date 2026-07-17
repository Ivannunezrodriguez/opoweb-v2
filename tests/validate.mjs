import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const exists = path => fs.existsSync(path);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.11.0');
assert.equal(packageJson.version, '0.11.0');
assert.ok(index.includes('v0.11.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(theme => theme.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(theme => theme.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(theme => theme.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(theme => theme.numero), [1,2,3,4,5,6,7,8,9,10,11]);
assert.deepEqual(review, []);
assert.equal(pending.length, 8);

for (const theme of approved.slice(0, 10)) {
  const base = `content/la-puebla/tema-${String(theme.numero).padStart(2, '0')}`;
  assert.equal(theme.aprobadoEl, '2026-07-17');
  assert.equal(json(`${base}/matriz.json`).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(`${base}/preguntas.json`).preguntas, []);
  assert.ok(read(`${base}/aprobacion.md`).includes(`«Tema ${theme.numero} aprobado»`));
  assert.ok(read(`${base}/manual.md`).includes('**Estado:** APROBADO POR EL USUARIO'));
}

const theme11 = programme.temas[10];
const base11 = 'content/la-puebla/tema-11';
const matrix11 = json(`${base11}/matriz.json`);
const questions11 = json(`${base11}/preguntas.json`);
const manual11 = read(`${base11}/manual.md`);
assert.equal(theme11.estado, 'APROBADO_USUARIO');
assert.equal(theme11.aprobadoEl, '2026-07-17');
assert.equal(theme11.capitulos.length, 6);
assert.equal(theme11.trazabilidadDetallada.length, 4);
assert.equal(matrix11.estado, 'APROBADO_USUARIO');
assert.equal(matrix11.cobertura.length, 7);
assert.equal(matrix11.trazabilidad.length, 5);
assert.equal(questions11.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions11.preguntas, []);
assert.ok(manual11.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
assert.ok(read(`${base11}/aprobacion.md`).includes('«Tema 11 aprobado»'));

const files11 = [
  'manual.md','matriz.json','aprobacion.md','preguntas.json',
  'bloque-01-voluntaria.md','bloque-02-aplazamiento-compensacion.md',
  'bloque-03a-devoluciones-regimen.md','bloque-03b-devoluciones-procedimiento.md',
  'bloque-04a-ejecutiva-providencia.md','bloque-05-embargo.md',
  'articulos.md','articulos-lgt.md','articulos-rgr.md',
  'articulos-rgr-deuda.md','articulos-rgr-apremio.md'
];
for (const file of files11) {
  assert.ok(exists(`${base11}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base11}/${file}`), `PWA incompleta: ${file}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.11.0'"));
assert.ok(read(`${base11}/articulos-lgt.md`).includes('| 167 |'));
assert.ok(read(`${base11}/articulos-rgr-apremio.md`).includes('| 122 |'));
assert.equal(exists('.github/workflows/apply-t11-approval.yml'), false);

console.log(JSON.stringify({ version: programme.version, approved: approved.length, pending: pending.length, questions: questions11.preguntas.length, status: 'TEMA_11_APROBADO_VALIDADO' }, null, 2));
