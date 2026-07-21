import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const read = file => fs.readFileSync(file, 'utf8');
const json = file => JSON.parse(read(file));
const exists = file => fs.existsSync(file);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');
const practiceHtml = read('practice.html');
const practiceJs = read('assets/practice.js');
const practiceRouteJs = read('assets/practice-route.js');
const practiceReviewJs = read('assets/practice-review.js');
const themeTestLinkJs = read('assets/theme-test-link.js');
const tema6CorrectionJs = read('assets/tema6-interinidad-correction.js');

assert.equal(programme.version, '0.19.0');
assert.equal(packageJson.version, '0.20.6');
assert.equal(programme.temas.length, 19);
assert.ok(index.includes('href="practice.html"'));
assert.ok(index.includes('assets/theme-test-link.js'));
assert.ok(index.includes('assets/tema6-interinidad-correction.js'));

const approved = programme.temas.filter(theme => theme.estado === 'APROBADO_USUARIO');
assert.deepEqual(approved.map(theme => theme.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
const externalOrAnchor = target => /^(https?:|mailto:|#)/i.test(target);

for (const theme of approved) {
  assert.ok(exists(theme.manual), `Falta manual del tema ${theme.numero}`);
  assert.ok(exists(theme.matriz), `Falta matriz del tema ${theme.numero}`);
  assert.ok(exists(theme.preguntas), `Falta banco del tema ${theme.numero}`);

  const bank = json(theme.preguntas);
  assert.ok(Array.isArray(bank.preguntas), `Banco inválido del tema ${theme.numero}`);
  assert.equal(bank.preguntas.length, 12, `El tema ${theme.numero} no tiene 12 preguntas`);

  for (const question of bank.preguntas) {
    assert.equal(question.opciones.length, 4, `${question.id} no tiene cuatro opciones`);
    const correct = Number(question.correcta ?? question.respuestaCorrecta);
    assert.ok(Number.isInteger(correct) && correct >= 0 && correct < 4, `${question.id} tiene respuesta inválida`);
    assert.ok((question.justificacion || '').length > 30, `${question.id} tiene justificación insuficiente`);
    assert.ok((question.trampa ?? question.trampaExamen ?? '').length > 20, `${question.id} carece de trampa`);
  }

  const manual = read(theme.manual);
  const baseDir = path.dirname(theme.manual);
  for (const match of manual.matchAll(markdownLinkRegex)) {
    const target = match[1].trim().split('#')[0];
    if (!target || externalOrAnchor(target)) continue;
    assert.ok(exists(path.normalize(path.join(baseDir, target))), `Enlace roto en tema ${theme.numero}: ${target}`);
  }
}

const practicalCases = json('content/la-puebla/supuestos-practicos.json');
assert.equal(practicalCases.estado, 'GENERACION_DESDE_CERO');
assert.equal(practicalCases.version, '2026-07-21');
assert.equal(practicalCases.supuestos.length, 20);
assert.deepEqual(
  practicalCases.supuestos.map(item => item.id),
  Array.from({ length: 20 }, (_, index) => `LP-SP-${String(index + 1).padStart(2, '0')}`)
);

for (const practicalCase of practicalCases.supuestos) {
  assert.equal(practicalCase.opciones.length, 4, `${practicalCase.id} no tiene cuatro opciones`);
  assert.ok(Number.isInteger(practicalCase.respuestaCorrecta), `${practicalCase.id} carece de respuesta correcta`);
  assert.ok(practicalCase.respuestaCorrecta >= 0 && practicalCase.respuestaCorrecta < 4, `${practicalCase.id} tiene índice inválido`);
  assert.ok(practicalCase.justificacion.length > 40, `${practicalCase.id} tiene justificación insuficiente`);
  assert.ok(practicalCase.trampaExamen.length > 25, `${practicalCase.id} carece de trampa`);
  assert.ok(exists(practicalCase.referencia), `${practicalCase.id} referencia un archivo inexistente`);
}

const interinidadCase = practicalCases.supuestos.find(item => item.id === 'LP-SP-05');
assert.ok(interinidadCase, 'Falta LP-SP-05');
assert.equal(interinidadCase.opciones[interinidadCase.respuestaCorrecta], 'Cuatro años');
assert.equal(interinidadCase.respuestaCorrecta, 3);
assert.ok(interinidadCase.justificacion.includes('máximo total de cuatro años'));
assert.ok(interinidadCase.trampaExamen.includes('dos años de servicio activo'));
assert.equal(interinidadCase.referencia, 'content/la-puebla/tema-06/auditoria-2026-07-18.md');

const mockExams = json('content/la-puebla/simulacros.json');
assert.equal(mockExams.simulacros.length, 3);
assert.deepEqual(mockExams.simulacros.map(item => item.id), ['LP-SIM-01', 'LP-SIM-02', 'LP-SIM-03']);

assert.ok(exists('practice.html'));
assert.ok(exists('assets/practice.js'));
assert.ok(exists('assets/practice-route.js'));
assert.ok(exists('assets/practice-review.js'));
assert.ok(exists('assets/practice-progress.css'));
assert.ok(practiceHtml.includes('assets/practice-route.js'));
assert.ok(practiceHtml.includes('assets/practice.js'));
assert.ok(practiceHtml.includes('assets/practice-review.js'));

assert.ok(practiceJs.includes("progressKey: 'opoweb-la-puebla-practice-progress-v2'"));
assert.ok(practiceJs.includes("progressKey: 'opoweb-diputacion-practice-progress-v1'"));
assert.ok(practiceJs.includes('practice-call-selector'));
assert.ok(practiceJs.includes('data-theme-test'));
assert.ok(practiceJs.includes('saveAttempt({'));
assert.ok(practiceJs.includes('themeStats'));
assert.ok(practiceJs.includes('errors'));
assert.ok(practiceRouteJs.includes('practiceUrl'));
assert.ok(practiceRouteJs.includes('practice-call-selector'));
assert.ok(practiceReviewJs.includes('Errores y temas débiles'));
assert.ok(practiceReviewJs.includes('data-review-theme'));
assert.ok(themeTestLinkJs.includes('Hacer test del tema'));

const tema6 = read('content/la-puebla/tema-06/manual.md');
assert.ok(tema6.includes('Duración máxima del programa: **dos años**.'), 'La fuente antigua ya cambió: retirar el módulo transitorio y actualizar esta prueba');
assert.ok(tema6CorrectionJs.includes("replaceText(node, 'dos años', 'cuatro años')"));
assert.ok(tema6CorrectionJs.includes('máximo básico de <strong>tres años</strong>'));
assert.ok(tema6CorrectionJs.includes('<strong>doce meses más</strong>'));
assert.ok(tema6CorrectionJs.includes('máximo total de <strong>cuatro años</strong>'));
assert.ok(tema6CorrectionJs.includes("TARGET_ROUTE = /^#la-puebla-auxiliar-administrativo-2026\\/tema-6$/"));

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.21.8'"));
for (const asset of [
  './practice.html',
  './assets/theme-test-link.js',
  './assets/tema6-interinidad-correction.js',
  './assets/practice-route.js',
  './assets/practice.js',
  './assets/practice-review.js',
  './assets/practice-progress.css',
  './content/la-puebla/supuestos-practicos.json',
  './content/la-puebla/simulacros.json'
]) {
  assert.ok(serviceWorker.includes(`'${asset}'`), `No está precargado ${asset}`);
}

console.log(JSON.stringify({
  editorialVersion: programme.version,
  applicationVersion: packageJson.version,
  approved: approved.length,
  generatedQuestions: approved.length * 12,
  practicalCases: practicalCases.supuestos.length,
  mockExams: mockExams.simulacros.length,
  multiCallPractice: 'VALIDATED',
  segregatedProgress: 'VALIDATED',
  tema6Interinidad: '4_YEARS_RUNTIME_CORRECTION_VALIDATED',
  sourceCorrectionPending: true,
  status: 'LA_PUEBLA_VALIDATOR_UPDATED'
}, null, 2));
