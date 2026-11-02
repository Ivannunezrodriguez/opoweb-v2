import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Comprueba la calificación real del motor, no solo que exista una cadena en practice.js.
const src = readFileSync('assets/practice.js', 'utf8');
const begin = src.indexOf('function finishExercise(items,');
const end = src.indexOf('\nasync function loadCall(', begin);
assert.ok(begin >= 0 && end > begin, 'No se pudo identificar finishExercise');
const makeHandler = new Function(
  'document', 'simulacros', 'saveAttempt', 'escapeHtml', 'scrollTo',
  src.slice(begin, end) + '\nreturn finishExercise;'
);

const questions = Array.from({ length: 55 }, (_, i) => ({
  id: 'TEST-' + (i + 1),
  correcta: 0,
  opciones: ['Correcta', 'Incorrecta', 'C', 'D'],
  justificacion: 'Justificación contrastada',
  trampa: 'Trampa de examen',
  referencia: 'Artículo aplicable'
}));

function check(name, responses, expectedGrade, expectedBlanks) {
  const cards = responses.map(answer => ({
    classList: { add() {} },
    querySelector(selector) {
      if (selector === 'input:checked') return answer == null ? null : { value: String(answer) };
      if (selector === '.solution') return { hidden: true, innerHTML: '' };
      return null;
    },
    querySelectorAll() { return []; }
  }));
  let captured;
  let html = '';
  const finish = { disabled: false, textContent: '' };
  const document = {
    querySelector(selector) {
      if (selector === '#finish') return finish;
      if (selector === '#exercise-form') return { prepend(node) { html = node.innerHTML; } };
      const index = /data-question="(\d+)"/.exec(selector);
      return index ? cards[Number(index[1])] : null;
    },
    createElement() { return { className: '', innerHTML: '' }; }
  };
  const handler = makeHandler(
    document,
    { simulacros: [{ id: 'LP-SIM-EXAM-01', tipoPuntuacion: 'EXAMEN_LA_PUEBLA_2026' }] },
    (attempt, results) => { captured = { attempt, results }; },
    text => String(text),
    () => {}
  );
  handler(questions, null, {
    exerciseId: 'LP-SIM-EXAM-01',
    title: name,
    type: 'simulacro',
    primaryCount: 50
  });
  assert.equal(captured.attempt.notaExamen, expectedGrade, name + ': nota incorrecta');
  assert.equal(captured.attempt.total, 50, name + ': las reservas contaminaron el total');
  assert.equal(captured.results.filter(x => x.reserve).length, 5, name + ': reservas no separadas');
  assert.equal(captured.results.filter(x => !x.reserve && !x.answered).length, expectedBlanks, name + ': blancos incorrectos');
  assert.match(html, /Reservas respondidas:/, name + ': falta desglose independiente');
}

check('50 aciertos + 5 reservas falladas', [...Array(50).fill(0), ...Array(5).fill(1)], 10, 0);
check('25 aciertos, 25 errores + reservas acertadas', [...Array(25).fill(0), ...Array(25).fill(1), ...Array(5).fill(0)], 3.75, 0);
check('25 aciertos y 25 blancos', [...Array(25).fill(0), ...Array(30).fill(null)], 5, 25);
check('30 aciertos y 20 errores', [...Array(30).fill(0), ...Array(25).fill(1)], 5, 0);
check('0 aciertos + 5 reservas acertadas', [...Array(50).fill(1), ...Array(5).fill(0)], 0, 0);

assert.ok(src.includes("if (result.answered === false || result.reserve === true) return;"),
  'El progreso no debe tratar blancos o reservas como errores ordinarios');
assert.ok(src.includes("Date.now() + durationMinutes * 60000"),
  'Cronómetro susceptible de regalar tiempo por restricciones de intervalos en segundo plano');

console.log('SIMULACROS_PUEBLA_50_MAS_5_NOTA_Y_BLANCOS_OK');
