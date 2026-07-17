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
const matrix3 = json('content/la-puebla/tema-03/matriz.json');
const questions3 = json('content/la-puebla/tema-03/preguntas.json');
const manual3 = read('content/la-puebla/tema-03/manual.md');
const feedback3 = read('content/la-puebla/tema-03/feedback.md');
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
assert.equal(inReview.length, 1, 'Solo el tema 3 puede estar en revisión');
assert.equal(inReview[0].numero, 3);
assert.equal(pending.length, 16, 'Los temas 4-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(3).every(item => !item.manual && !item.preguntas), 'Los temas 4-19 no deben heredar teoría ni preguntas');

assert.equal(matrix1.tema, 1);
assert.equal(matrix1.estado, 'APROBADO_USUARIO');
assert.equal(matrix1.filas.length, 6);
assert.equal(questions1.estado, 'PENDIENTE_REVISION');
assert.deepEqual(questions1.preguntas, []);
assert.ok(approval1.includes('«Tema 1 aprobado»'));
assert.ok(manual1.includes('**Estado:** APROBADO POR EL USUARIO'));

assert.equal(matrix2.tema, 2);
assert.equal(matrix2.estado, 'APROBADO_USUARIO');
assert.equal(matrix2.aprobadoEl, '2026-07-17');
assert.equal(matrix2.cobertura.length, 5);
assert.equal(questions2.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions2.preguntas, []);
assert.ok(approval2.includes('«Tema 2 aprobado»'));
assert.ok(manual2.includes('**Estado:** APROBADO POR EL USUARIO'));

assert.equal(matrix3.tema, 3);
assert.equal(matrix3.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix3.normaPrincipal.referencia, 'BOE-A-2015-10565');
assert.equal(matrix3.cobertura.length, 9);
assert.equal(questions3.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions3.preguntas, []);
assert.ok(manual3.includes('**Estado:** EN REVISIÓN DEL USUARIO'));
assert.ok(manual3.includes('Tema cerrado: **NO**'));
assert.ok(manual3.includes('Artículos 53–105: desarrollados individualmente'));
assert.ok(manual3.includes('Especialidades sancionadoras: integradas transversalmente'));
assert.ok(manual3.includes('Especialidades de responsabilidad patrimonial: integradas transversalmente'));
assert.ok(manual3.includes('Materia deliberadamente excluida del núcleo'));
assert.ok(feedback3.includes('`EN_REVISION_USUARIO`'));
assert.ok(feedback3.includes('Tema 3 aprobado'));
assert.ok(!manual3.includes('APROBADO POR EL USUARIO'));
assert.ok(manual3.split('\n').length >= 600, 'El manual del tema 3 parece truncado');

for (let article = 53; article <= 105; article += 1) {
  assert.ok(
    manual3.includes(`Artículo ${article} `) || manual3.includes(`Artículo ${article} ·`) || manual3.includes(`Artículo ${article}.`),
    `Falta el desarrollo del artículo ${article} en el tema 3`
  );
}

for (const marker of [
  'quince días',
  'diez días',
  'treinta días',
  '50.000 euros',
  'dos meses',
  'veinte días',
  'reducciones de al menos el **20 %**',
  'seis meses',
  'tres meses',
  'multa coercitiva',
  'compulsión sobre las personas',
  'declaración responsable',
  'silencio es desestimatorio'
]) assert.ok(manual3.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 3: ${marker}`);

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.2.0'"));
assert.ok(!serviceWorker.includes('tema-03/manual.md'), 'El borrador del tema 3 no debe estar publicado ni precargado en la PWA');

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
  theme3Questions: questions3.preguntas.length,
  theme3ManualLines: manual3.split('\n').length,
  status: 'TEMA_3_EN_REVISION_VALIDADO'
}, null, 2));