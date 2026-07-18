import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');
const app = read('assets/app.js');
const styles = read('assets/styles.css');

assert.equal(programme.version, '0.19.0');
assert.equal(packageJson.version, '0.19.0');
assert.ok(index.includes('v0.19.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
assert.equal(review.length, 0);
assert.equal(pending.length, 0);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
}

const t1 = programme.temas[0];
const base1 = 'content/la-puebla/tema-01';
const questions1 = json(`${base1}/preguntas.json`);
assert.equal(questions1.tema, 1);
assert.equal(questions1.tipo, 'TEST_TEMA');
assert.equal(questions1.estado, 'EN_REVISION_USUARIO');
assert.equal(questions1.reglas.numeroPreguntas, 12);
assert.equal(questions1.reglas.opcionesPorPregunta, 4);
assert.equal(questions1.reglas.unaRespuestaCorrecta, true);
assert.equal(questions1.preguntas.length, 12);
assert.ok(exists(`${base1}/revision-preguntas.md`));
assert.ok(read(`${base1}/revision-preguntas.md`).includes('Preguntas del Tema 1 aprobadas'));

const ids = new Set();
const correctPositions = new Set();
for (const question of questions1.preguntas) {
  assert.match(question.id, /^LP-T01-\d{3}$/);
  assert.equal(ids.has(question.id), false, `ID duplicado: ${question.id}`);
  ids.add(question.id);
  assert.ok(['basica', 'intermedia', 'alta'].includes(question.dificultad));
  assert.ok(question.enunciado.length >= 20);
  assert.equal(question.opciones.length, 4);
  assert.deepEqual(question.opciones.map(option => option.id), ['A', 'B', 'C', 'D']);
  assert.ok(['A', 'B', 'C', 'D'].includes(question.correcta));
  correctPositions.add(question.correcta);
  assert.ok(question.justificacion.length >= 40);
  assert.ok(question.fuente?.norma);
  assert.ok(question.fuente?.articulos);
  assert.ok(question.fuente?.manual);
}
assert.ok(correctPositions.size >= 3, 'Las respuestas correctas deben variar de posición');

for (const t of programme.temas.slice(1)) {
  assert.deepEqual(json(t.preguntas).preguntas, [], `El Tema ${t.numero} no debe recibir preguntas todavía`);
}

for (const required of [
  'renderQuestionnaire', 'correctQuestionnaire', 'Test en revisión',
  'Respuesta correcta', 'questionSource', 'aria-live'
]) {
  assert.ok(app.includes(required), `Falta función o texto del motor: ${required}`);
}
for (const required of ['.question-card', '.test-option.correct', '.test-option.incorrect', '.test-result.passed']) {
  assert.ok(styles.includes(required), `Falta estilo del motor: ${required}`);
}

const articleCoverage = questions1.preguntas.map(question => question.fuente.articulos).join(' ');
for (const article of ['166', '167.1', '167.2', '167.3', '168.1', '17.2', '21.2', '53.2', '53.3', '55.1']) {
  assert.ok(articleCoverage.includes(article), `Falta trazabilidad del artículo ${article}`);
}

assert.ok(serviceWorker.includes(`./${base1}/preguntas.json`));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.19.0'"));
assert.equal(exists('.github/workflows/apply-t01-questions.yml'), false);
assert.equal(exists('scripts/apply_t01_questions.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  theoreticalThemesApproved: approved.length,
  questionBankInReview: 1,
  theme1Questions: questions1.preguntas.length,
  uniqueQuestionIds: ids.size,
  correctAnswerPositions: [...correctPositions],
  status: 'PREGUNTAS_TEMA_01_EN_REVISION_VALIDADO'
}, null, 2));
