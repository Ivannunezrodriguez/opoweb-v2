import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.18.0');
assert.equal(packageJson.version, '0.18.0');
assert.ok(index.includes('v0.18.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
assert.equal(review.length, 0);
assert.deepEqual(pending.map(t => t.numero), [19]);
assert.ok(!programme.temas[18].manual);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t18 = programme.temas[17];
const base18 = 'content/la-puebla/tema-18';
const matrix18 = json(`${base18}/matriz.json`);
const questions18 = json(`${base18}/preguntas.json`);
assert.equal(t18.capitulos.length, 5);
assert.equal(t18.aprobadoEl, '2026-07-18');
assert.equal(t18.aprobacion, `${base18}/aprobacion.md`);
assert.equal(matrix18.estado, 'APROBADO_USUARIO');
assert.equal(matrix18.aprobadoEl, '2026-07-18');
assert.equal(matrix18.cobertura.length, 5);
assert.equal(matrix18.atajosComparados.length, 12);
assert.equal(matrix18.diferenciasClave.length, 5);
assert.equal(questions18.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions18.preguntas, []);
assert.ok(read(`${base18}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base18}/aprobacion.md`).includes('Tema 18 aprobado'));
assert.ok(read(`${base18}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base18}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

const files18 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-datos-formatos.md','bloque-02-formulas-funciones.md',
  'bloque-03-formato-validacion.md','bloque-04-datos-analisis.md',
  'bloque-05-graficos-salida.md'
];
for (const file of files18) {
  assert.ok(exists(`${base18}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base18}/${file}`), `No precargado ${file}`);
}

const joined18 = files18.filter(f => f.endsWith('.md')).map(f => read(`${base18}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft excel','libreoffice calc','xlsx','ods','csv','referencia relativa',
  'referencia absoluta','referencia mixta','formato condicional','validación de datos',
  'tabla de excel','tabla dinámica','piloto de datos','gráfico','área de impresión',
  'proteger hoja','texto alternativo'
]) {
  assert.ok(joined18.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Excel','Información general sobre fórmulas en Excel',
  'Direcciones y referencias, absolutas y relativas','Crear tablas dinámicas',
  'Calc Guide 24.2 · Gráficos'
]) {
  assert.ok(read(`${base18}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.18.0'"));
assert.equal(exists('.github/workflows/apply-t18-approval.yml'), false);
assert.equal(exists('scripts/publish_t18.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme18Questions: questions18.preguntas.length,
  status: 'TEMA_18_APROBADO_VALIDADO'
}, null, 2));
