import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.13.0');
assert.equal(packageJson.version, '0.13.0');
assert.ok(index.includes('v0.13.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13]);
assert.deepEqual(review.map(t => t.numero), [14]);
assert.deepEqual(pending.map(t => t.numero), [15,16,17,18,19]);
assert.ok(programme.temas.slice(14).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t13 = programme.temas[12];
const base13 = 'content/la-puebla/tema-13';
assert.equal(t13.capitulos.length, 5);
assert.equal(json(`${base13}/matriz.json`).estado, 'APROBADO_USUARIO');
assert.ok(serviceWorker.includes(`./${base13}/manual.md`));

const t14 = programme.temas[13];
const base14 = 'content/la-puebla/tema-14';
const matrix14 = json(`${base14}/matriz.json`);
const questions14 = json(`${base14}/preguntas.json`);
assert.equal(t14.capitulos.length, 5);
assert.equal(matrix14.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix14.cobertura.length, 5);
assert.equal(matrix14.cifras.length, 8);
assert.equal(questions14.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions14.preguntas, []);
assert.ok(read(`${base14}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base14}/feedback.md`).includes('Tema 14 aprobado'));

const files14 = [
  'manual.md',
  'matriz.json',
  'feedback.md',
  'preguntas.json',
  'articulos.md',
  'bloque-01-organos-competencia.md',
  'bloque-02-colegiados-abstencion.md',
  'bloque-03-age-estructura-ministerios.md',
  'bloque-04-age-organos-ministeriales.md',
  'bloque-05-age-territorial-exterior.md'
];
for (const file of files14) {
  assert.ok(exists(`${base14}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base14}/${file}`), `Tema 14 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined14 = files14.filter(f => f.endsWith('.md')).map(f => read(`${base14}/${f}`)).join('\n').toLowerCase();
for (const term of ['competencia es irrenunciable','encomienda de gestión','delegación de firma','órganos colegiados','abstención','recusación','presencia equilibrada','delegados del gobierno','servicios integrados','servicio exterior']) {
  assert.ok(joined14.includes(term), `Falta ${term}`);
}
for (const term of ['| 5 |','| 24 |','| 54 |','| 55 bis |','| 80 |']) {
  assert.ok(read(`${base14}/articulos.md`).includes(term), `Falta trazabilidad ${term}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.13.0'"));
console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme14Questions: questions14.preguntas.length,
  status: 'TEMA_14_EN_REVISION_VALIDADO'
}, null, 2));
