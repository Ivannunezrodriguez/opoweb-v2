import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));

const programme = json('data/programa.json');
const matrix = json('content/la-puebla/tema-01/matriz.json');
const questions = json('content/la-puebla/tema-01/preguntas.json');
const rules = read('PROJECT_RULES.md');
const approval = read('content/la-puebla/tema-01/aprobacion.md');
const manual = read('content/la-puebla/tema-01/manual.md');
const app = read('assets/app.js');
const serviceWorker = read('sw.js');

assert.equal(programme.project, 'opoweb-v2');
assert.equal(programme.version, '0.1.0');
assert.equal(programme.temas.length, 19, 'El programa debe contener exactamente 19 temas');
assert.deepEqual(programme.temas.map(item => item.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');
assert.equal(approved.length, 1, 'Solo el tema 1 está aprobado');
assert.equal(approved[0].numero, 1);
assert.equal(approved[0].aprobadoEl, '2026-07-17');
assert.equal(pending.length, 18, 'Los temas 2-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(1).every(item => !item.manual && !item.preguntas), 'Los temas pendientes no deben heredar teoría ni preguntas');

assert.equal(matrix.tema, 1);
assert.equal(matrix.estado, 'APROBADO_USUARIO');
assert.equal(matrix.filas.length, 6);
for (const key of ['inciso', 'norma', 'articulos', 'contenidoExigible']) {
  assert.ok(matrix.filas.every(row => String(row[key] || '').trim()), `La matriz necesita ${key} en todas las filas`);
}

assert.equal(questions.estado, 'PENDIENTE_REVISION');
assert.deepEqual(questions.preguntas, []);
assert.ok(questions.nota.includes('No se migran automáticamente'));

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(approval.includes('«Tema 1 aprobado»'));
assert.ok(approval.includes('17 de julio de 2026'));

assert.ok(manual.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual.includes('Migrado a OpoWeb v2 tras aprobación expresa del usuario'));
assert.ok(manual.split('\n').length >= 800, 'La copia aprobada del manual parece truncada');
assert.ok(manual.includes('Matriz epígrafe–norma–artículos'));
assert.ok(manual.includes('Materia deliberadamente excluida del núcleo'));
assert.ok(manual.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));

for (let article = 10; article <= 55; article += 1) {
  assert.ok(
    manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`) || manual.includes(`Artículo ${article}.`),
    `Falta el artículo ${article}`
  );
}
for (let article = 166; article <= 169; article += 1) {
  assert.ok(manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`), `Falta el artículo ${article}`);
}

assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(app.includes('Este tema no contiene teoría heredada'));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.1.0'"));
assert.ok(serviceWorker.includes("'./content/la-puebla/tema-01/manual.md'"));

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
  pendingThemes: pending.length,
  inheritedQuestions: questions.preguntas.length,
  manualLines: manual.split('\n').length,
  status: 'BASE_LIMPIA_VALIDADA'
}, null, 2));