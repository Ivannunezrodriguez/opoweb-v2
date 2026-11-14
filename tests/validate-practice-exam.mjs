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


// Validación de renderizado lógico (sin navegador): las cinco reservas deben aparecer en pantalla.
const renderStart = src.indexOf('function renderExercise(');
const renderEnd = src.indexOf('function finishExercise(', renderStart);
assert.ok(renderStart >= 0 && renderEnd > renderStart, 'No se encuentra renderExercise');
const renderFactory = new Function(
  'app', 'document', 'escapeHtml', 'scrollTo', 'setInterval', 'clearInterval',
  'finishExercise', 'renderHub',
  src.slice(renderStart, renderEnd) + '\nreturn renderExercise;'
);
const visible = { innerHTML: '' };
let clockText = '';
const simpleButton = { addEventListener() {} };
const renderDocument = {
  querySelector(selector) {
    if (selector === '#timer') {
      return { set textContent(value) { clockText = value; }, classList: { add() {} } };
    }
    return simpleButton;
  }
};
const render = renderFactory(
  visible, renderDocument, value => String(value), () => {},
  () => 1, () => {}, () => {}, () => {}
);
render(questions, 'Modelo 14/11/2026', 'LP-SIM-EXAM-01', 'simulacro', 60, 50);
assert.equal((visible.innerHTML.match(/data-question="/g) || []).length, 55,
  'La web debe dibujar las 50 preguntas más las 5 reservas');
assert.match(visible.innerHTML, /Preguntas de reserva \(R1–R5\)/, 'Falta separación visual de reservas');
assert.match(visible.innerHTML, /<span>R5<\/span>/, 'No aparece la última reserva');
assert.match(clockText, /60:00/, 'La cuenta atrás debe empezar en 60 minutos');

console.log('SIMULACROS_PUEBLA_50_MAS_5_NOTA_Y_BLANCOS_OK');


const practical = JSON.parse(readFileSync('content/la-puebla/simulacros.json', 'utf8'));
assert.equal(practical.simulacrosPracticos.length, 3, 'Deben existir tres modelos distintos del segundo ejercicio');
const practicalIds = new Set();
for (const model of practical.simulacrosPracticos) {
  assert.equal(model.modalidad, 'SIMULACRO_SEGUNDO_EJERCICIO');
  assert.ok(!practicalIds.has(model.id), 'Identificador práctico repetido: ' + model.id);
  practicalIds.add(model.id);
  assert.equal(model.cuestiones.length, 5, 'Cada modelo debe tener cinco apartados');
  assert.ok(model.enunciado.length > 100 && model.titulo.length > 15);
  assert.ok(Number.isInteger(model.tiempoSugeridoMinutos));
  for (const issue of model.cuestiones) {
    assert.ok(issue.pregunta.length > 40);
    assert.ok(issue.respuesta.length > 100, 'Solución de desarrollo insuficiente');
    assert.ok(issue.trampa.length > 30);
    assert.ok(Array.isArray(issue.referencias) && issue.referencias.length >= 2);
  }
}
assert.match(src, /data-practical-sim/, 'Los modelos prácticos deben estar visibles en el centro de entrenamiento');
assert.match(src, /renderOpenCase\(model\)/, 'El botón debe abrir el modelo de respuesta libre');
assert.match(src, /no asigna una nota automática/, 'No debe inventarse una nota para desarrollo escrito');
assert.match(src, /Formato y duración definitivos pendientes del Tribunal/, 'Debe distinguirse práctica de formato oficial');
console.log('PUEBLA_SEGUNDO_EJERCICIO_3_MODELOS_15_CUESTIONES_VISIBLES_OK');
