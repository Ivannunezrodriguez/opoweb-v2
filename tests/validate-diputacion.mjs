import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = file => fs.readFileSync(file, 'utf8');
const json = file => JSON.parse(read(file));
const exists = file => fs.existsSync(file);

const programmePath = 'data/programa-diputacion-administrativo-2026.json';
const programme = json(programmePath);

assert.equal(programme.estado, 'GENERACION_DESDE_CERO');
assert.equal(programme.temas.length, 40, 'El programa debe contener 40 temas');
assert.equal(programme.controlCalidad?.temasConRutasExplicitas, 40);
assert.equal(programme.controlCalidad?.estadosRegularizados, true);

const allIds = new Set();
const legacyFields = [];
let totalQuestions = 0;

for (const theme of programme.temas) {
  const number = String(theme.numero).padStart(2, '0');
  const expectedPrefix = `DIP-T${number}-`;

  assert.equal(theme.estado, theme.numero<=11 ? 'AUDITADO' : 'GENERACION_DESDE_CERO', `Estado inválido en tema ${number}`);
  if (theme.numero<=11) assert.equal(theme.metodo,'GENERACION_DESDE_CERO');

  for (const key of ['manual', 'fuentes', 'matriz', 'preguntas']) {
    assert.ok(theme[key], `Falta ruta ${key} en tema ${number}`);
    assert.ok(exists(theme[key]), `No existe ${theme[key]}`);
  }

  const bank = json(theme.preguntas);
  assert.equal(bank.tema, theme.numero, `Número de tema incoherente en ${theme.preguntas}`);
  assert.ok(Array.isArray(bank.preguntas), `Banco inválido en tema ${number}`);
  assert.ok(bank.preguntas.length >= 12, `El tema ${number} tiene menos de 12 preguntas; requiere revisión`);

  bank.preguntas.forEach((question, index) => {
    const expectedId = `${expectedPrefix}${String(index + 1).padStart(3, '0')}`;
    assert.equal(question.id, expectedId, `ID incorrecto: ${question.id}; esperado ${expectedId}`);
    assert.ok(!allIds.has(question.id), `ID duplicado: ${question.id}`);
    allIds.add(question.id);

    assert.ok(typeof question.pregunta === 'string' && question.pregunta.trim().length > 10, `${question.id}: enunciado insuficiente`);
    assert.ok(Array.isArray(question.opciones), `${question.id}: opciones inválidas`);
    assert.equal(question.opciones.length, 4, `${question.id}: debe tener cuatro opciones`);
    assert.equal(new Set(question.opciones).size, 4, `${question.id}: contiene opciones duplicadas`);

    const hasCurrentField = Object.hasOwn(question, 'correcta');
    const hasLegacyField = Object.hasOwn(question, 'respuestaCorrecta');
    assert.ok(hasCurrentField || hasLegacyField, `${question.id}: falta índice de respuesta`);
    assert.ok(!(hasCurrentField && hasLegacyField), `${question.id}: mezcla correcta y respuestaCorrecta`);

    const correct = Number(hasCurrentField ? question.correcta : question.respuestaCorrecta);
    assert.ok(Number.isInteger(correct) && correct >= 0 && correct < 4, `${question.id}: índice correcto fuera de rango`);
    if (hasLegacyField) legacyFields.push(question.id);

    assert.ok(typeof question.justificacion === 'string' && question.justificacion.trim().length >= 10, `${question.id}: falta justificación suficientemente descriptiva`);
    const trap = question.trampaExamen ?? question.trampa;
    assert.ok(typeof trap === 'string' && trap.trim().length >= 8, `${question.id}: falta trampa de examen`);
    assert.ok(typeof question.referencia === 'string' && question.referencia.trim().length > 5, `${question.id}: referencia ausente`);
  });

  totalQuestions += bank.preguntas.length;
}

assert.equal(allIds.size, totalQuestions, 'Los identificadores de todos los bancos deben ser únicos');

console.log(JSON.stringify({
  programme: programme.id,
  themes: programme.temas.length,
  questions: totalQuestions,
  uniqueIds: allIds.size,
  legacyAnswerFieldQuestions: legacyFields.length,
  legacyAnswerFieldIds: legacyFields,
  status: legacyFields.length ? 'VALIDO_CON_CAMPOS_LEGACY_PENDIENTES_DE_NORMALIZAR' : 'VALIDADO_ESQUEMA_CORRECTA'
}, null, 2));
