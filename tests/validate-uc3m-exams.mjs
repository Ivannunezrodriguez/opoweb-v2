import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const json = path => JSON.parse(readFileSync(path, 'utf8'));
const exams = json('content/uc3m/simulacros.json').simulacros;
const allQuestions = new Set(Array.from({ length: 20 }, (_, index) => index + 1)
  .flatMap(num => json('content/uc3m/tema-' + String(num).padStart(2, '0') + '/preguntas.json')
    .preguntas.map(q => q.id)));

assert.equal(exams.length, 3, 'Deben existir 3 simulacros de entrenamiento UC3M');
const seen = new Set();
for (const exam of exams) {
  assert.equal(exam.tipoPuntuacion, 'EXAMEN_UC3M_2026');
  assert.equal(exam.duracionMinutos, 60);
  assert.equal(exam.preguntas.length, 70);
  assert.equal(exam.preguntasReserva.length, 5);
  for (const id of [...exam.preguntas, ...exam.preguntasReserva]) {
    assert.ok(allQuestions.has(id), 'La pregunta no existe en bancos UC3M: ' + id);
    assert.ok(!seen.has(id), 'La pregunta aparece repetida entre modelos: ' + id);
    seen.add(id);
  }
}
assert.equal(seen.size, 225);

const js = readFileSync('assets/practice.js', 'utf8');
const begin = js.indexOf('function finishExercise(items,');
const end = js.indexOf('\nasync function loadCall(', begin);
assert.ok(begin > 0 && end > begin);
const makeHandler = new Function(
  'document', 'simulacros', 'saveAttempt', 'escapeHtml', 'scrollTo',
  js.slice(begin, end) + '\nreturn finishExercise;'
);

function testDirect(label, answerAt, expected, blankCount) {
  const questions = Array.from({ length: 75 }, (_, i) => ({
    id: 'TEST-UC3M-' + i,
    correcta: 0, opciones: ['A', 'B', 'C', 'D'],
    justificacion: 'Cotejo del supuesto', trampa: 'Corte depende del tribunal',
    referencia: 'BOE-A-2026-14624'
  }));
  const cards = questions.map((_, i) => ({
    classList: { add() {} },
    querySelector(selector) {
      if (selector === 'input:checked') {
        const value = answerAt(i);
        return value === null ? null : { value: String(value) };
      }
      if (selector === '.solution') return { hidden: true, innerHTML: '' };
      return null;
    },
    querySelectorAll() { return []; }
  }));
  let saved, html = '';
  const button = { disabled: false, textContent: '' };
  const document = {
    querySelector(selector) {
      if (selector === '#finish') return button;
      if (selector === '#exercise-form') return { prepend(node) { html = node.innerHTML; } };
      const match = /data-question="(\d+)"/.exec(selector);
      return match ? cards[Number(match[1])] : null;
    },
    createElement() { return { className: '', innerHTML: '' }; }
  };
  const handler = makeHandler(
    document,
    { simulacros: [{ id: 'UC3M-SIM-2026-01', tipoPuntuacion: 'EXAMEN_UC3M_2026' }] },
    (attempt, results) => { saved = { attempt, results }; },
    value => String(value),
    () => {}
  );
  handler(questions, null, { type: 'simulacro', exerciseId: 'UC3M-SIM-2026-01', title: label, primaryCount: 70 });
  assert.equal(saved.attempt.notaDirecta, expected, label + ': puntuación directa');
  assert.equal(saved.attempt.total, 70);
  assert.equal(saved.results.filter(r => r.reserve).length, 5);
  assert.equal(saved.results.filter(r => !r.reserve && !r.answered).length, blankCount);
  assert.equal(saved.attempt.notaExamen, null, 'No se puede calcular nota transformada');
  assert.match(html, /corte pendiente del tribunal/, 'No debe inventarse el corte directo');
  assert.match(html, /este simulacro NO declara APTO/, 'La simulación no acredita aprobado');
}
testDirect('70 correctas + 5 reservas erradas', i => i < 70 ? 0 : 1, 70, 0);
testDirect('35 correctas y 35 fallidas', i => i < 35 ? 0 : i < 70 ? 1 : 0, 23.33, 0);
testDirect('35 correctas y 35 blancos', i => i < 35 ? 0 : null, 35, 35);
testDirect('42 correctas, 18 fallidas y 10 blancos', i => i < 42 ? 0 : i < 60 ? 1 : null, 36, 10);
testDirect('70 errores y 5 reservas correctas', i => i < 70 ? 1 : 0, -23.33, 0);

console.log('UC3M_3_SIMULACROS_70_5_225_IDS_Y_SCORE_DIRECTO_OK');
