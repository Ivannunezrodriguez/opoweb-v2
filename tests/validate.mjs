import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));

const programme = json('data/programa.json');
const matrix1 = json('content/la-puebla/tema-01/matriz.json');
const questions1 = json('content/la-puebla/tema-01/preguntas.json');
const approval1 = read('content/la-puebla/tema-01/aprobacion.md');
const manual1 = read('content/la-puebla/tema-01/manual.md');
const matrix2 = json('content/la-puebla/tema-02/matriz.json');
const questions2 = json('content/la-puebla/tema-02/preguntas.json');
const approval2 = read('content/la-puebla/tema-02/aprobacion.md');
const manual2 = read('content/la-puebla/tema-02/manual.md');
const rules = read('PROJECT_RULES.md');
const app = read('assets/app.js');
const serviceWorker = read('sw.js');
const index = read('index.html');
const packageJson = json('package.json');

assert.equal(programme.project, 'opoweb-v2');
assert.equal(programme.version, '0.2.0');
assert.equal(packageJson.version, '0.2.0');
assert.ok(index.includes('v0.2.0'));
assert.equal(programme.temas.length, 19, 'El programa debe contener exactamente 19 temas');
assert.deepEqual(programme.temas.map(item => item.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(item => item.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');
assert.equal(approved.length, 2, 'Solo los temas 1 y 2 están aprobados');
assert.deepEqual(approved.map(item => item.numero), [1, 2]);
assert.ok(approved.every(item => item.aprobadoEl === '2026-07-17'));
assert.equal(inReview.length, 0, 'No debe quedar ningún tema en revisión tras la aprobación del tema 2');
assert.equal(pending.length, 17, 'Los temas 3-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(2).every(item => !item.manual && !item.preguntas), 'Los temas 3-19 no deben heredar teoría ni preguntas');

assert.equal(matrix1.tema, 1);
assert.equal(matrix1.estado, 'APROBADO_USUARIO');
assert.equal(matrix1.filas.length, 6);
for (const key of ['inciso', 'norma', 'articulos', 'contenidoExigible']) {
  assert.ok(matrix1.filas.every(row => String(row[key] || '').trim()), `La matriz del tema 1 necesita ${key}`);
}
assert.equal(questions1.estado, 'PENDIENTE_REVISION');
assert.deepEqual(questions1.preguntas, []);
assert.ok(approval1.includes('«Tema 1 aprobado»'));
assert.ok(manual1.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual1.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));

assert.equal(matrix2.tema, 2);
assert.equal(matrix2.estado, 'APROBADO_USUARIO');
assert.equal(matrix2.aprobadoEl, '2026-07-17');
assert.equal(matrix2.cobertura.length, 5);
assert.equal(matrix2.normaPrincipal.referencia, 'BOE-A-2015-10565');
assert.equal(questions2.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions2.preguntas, []);
assert.ok(questions2.nota.includes('no se crean para inflar métricas'));
assert.ok(approval2.includes('«Tema 2 aprobado»'));
assert.ok(approval2.includes('17 de julio de 2026'));
assert.ok(manual2.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual2.includes('Publicado en OpoWeb v2 tras aprobación expresa del usuario'));
assert.ok(manual2.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
assert.ok(manual2.includes('Artículos 1–33: desarrollados individualmente'));
assert.ok(manual2.includes('Materia deliberadamente excluida del núcleo'));
assert.ok(manual2.split('\n').length >= 850, 'El manual aprobado del tema 2 parece truncado');

for (let article = 1; article <= 33; article += 1) {
  assert.ok(
    manual2.includes(`Artículo ${article} `) || manual2.includes(`Artículo ${article} ·`) || manual2.includes(`Artículo ${article}.`),
    `Falta el desarrollo del artículo ${article} en el tema 2`
  );
}

for (const marker of [
  'diez días',
  'cinco años',
  'tres meses',
  'seis meses',
  'quince días',
  'veinticuatro horas',
  'ciberincidente',
  'solicitudes y recursos',
  'silencio estimatorio',
  'caducidad'
]) assert.ok(manual2.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 2: ${marker}`);

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.2.0'"));
for (const asset of [
  './content/la-puebla/tema-02/manual.md',
  './content/la-puebla/tema-02/matriz.json',
  './content/la-puebla/tema-02/aprobacion.md',
  './content/la-puebla/tema-02/preguntas.json'
]) assert.ok(serviceWorker.includes(asset), `La PWA debe incluir ${asset}`);

const forbiddenFiles = [
  'assets/js/puebla-v68.js',
  'assets/js/ui-v90-pedagogia.js',
  'assets/js/asset-manifest-v83.js',
  'data/oposiciones.js'
];
for (const path of forbiddenFiles) assert.equal(fs.existsSync(path), false, `No debe existir el archivo legado ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  officialThemes: programme.temas.length,
  userApprovedThemes: approved.length,
  themesInUserReview: inReview.length,
  pendingThemes: pending.length,
  theme1Questions: questions1.preguntas.length,
  theme2Questions: questions2.preguntas.length,
  theme2ManualLines: manual2.split('\n').length,
  status: 'DOS_TEMAS_APROBADOS_VALIDADO'
}, null, 2));