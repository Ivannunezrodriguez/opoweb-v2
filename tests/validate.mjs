import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.14.0');
assert.equal(packageJson.version, '0.14.0');
assert.ok(index.includes('v0.14.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
assert.deepEqual(review.map(t => t.numero), [15]);
assert.deepEqual(pending.map(t => t.numero), [16,17,18,19]);
assert.ok(programme.temas.slice(15).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t14 = programme.temas[13];
const base14 = 'content/la-puebla/tema-14';
assert.equal(t14.capitulos.length, 5);
assert.equal(t14.aprobadoEl, '2026-07-18');
assert.ok(read(`${base14}/aprobacion.md`).includes('Tema 14 aprobado'));
assert.ok(serviceWorker.includes(`./${base14}/manual.md`));

const t15 = programme.temas[14];
const base15 = 'content/la-puebla/tema-15';
const matrix15 = json(`${base15}/matriz.json`);
const questions15 = json(`${base15}/preguntas.json`);
assert.equal(t15.capitulos.length, 5);
assert.equal(matrix15.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix15.cobertura.length, 5);
assert.equal(matrix15.atajos.length, 10);
assert.equal(questions15.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions15.preguntas, []);
assert.ok(read(`${base15}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base15}/feedback.md`).includes('Tema 15 aprobado'));

const files15 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-explorador-rutas.md','bloque-02-operaciones-archivos.md',
  'bloque-03-unidades-locales-red.md','bloque-04-impresion.md',
  'bloque-05-digitalizacion.md'
];
for (const file of files15) {
  assert.ok(exists(`${base15}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base15}/${file}`), `Tema 15 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined15 = files15.filter(f => f.endsWith('.md')).map(f => read(`${base15}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'explorador de archivos','acceso directo','ruta unc','unidad de red asignada',
  'papelera','mayús + supr','cola de impresión','microsoft print to pdf',
  'escáner de windows','resolución','ocr','control de calidad'
]) {
  assert.ok(joined15.includes(term), `Falta ${term}`);
}
for (const source of [
  'Explorador de archivos en Windows','Métodos abreviados de teclado de Windows',
  'Uso compartido de archivos a través de una red en Windows',
  'Agregar o instalar una impresora en Windows','Instalar y usar un escáner en Windows'
]) {
  assert.ok(read(`${base15}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.14.0'"));
console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme15Questions: questions15.preguntas.length,
  status: 'TEMA_15_EN_REVISION_VALIDADO'
}, null, 2));
