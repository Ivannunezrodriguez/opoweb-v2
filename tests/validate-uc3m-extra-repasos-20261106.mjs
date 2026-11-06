import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const load = file => JSON.parse(readFileSync(file, 'utf8'));
const content = file => readFileSync(file, 'utf8');

const supplemental = load('data/uc3m-repasos-complementarios-20261106.json');
const legacyRepaso = load('data/uc3m-repaso-temas-13-20-20261106.json');
const budgetRepaso = load('data/uc3m-presupuesto-supuestos-20261106.json');

assert.equal(supplemental.paquetes.length, 7, 'Se esperan siete bancos nuevos desde Markdown');
assert.equal(supplemental.paquetes.reduce((n, p) => n + p.preguntas.length, 0), 86);
assert.equal(legacyRepaso.preguntas.length, 24);
assert.equal(budgetRepaso.preguntas.length, 16);

const packs = [
  ...supplemental.paquetes,
  { id: legacyRepaso.id, preguntas: legacyRepaso.preguntas },
  { id: budgetRepaso.id, preguntas: budgetRepaso.preguntas }
];
assert.equal(packs.length, 9);
const ids = new Set();
for (const pack of packs) {
  assert.ok(pack.id, 'Cada repaso necesita identificador estable');
  assert.ok(pack.preguntas.length > 0, 'No se muestran bloques sin preguntas');
  for (const q of pack.preguntas) {
    assert.ok(q.id && !ids.has(q.id), 'ID repetido: ' + q.id);
    ids.add(q.id);
    assert.ok(Number.isInteger(q.tema) && q.tema >= 1 && q.tema <= 20, q.id);
    assert.ok(q.pregunta && q.pregunta.trim().length > 10, q.id);
    assert.ok(Array.isArray(q.opciones) && q.opciones.length === 4, q.id);
    assert.ok(q.opciones.every(x => typeof x === 'string' && x.trim()), q.id);
    assert.ok(Number.isInteger(q.correcta) && q.correcta >= 0 && q.correcta < 4, q.id);
    assert.equal(q.respuestaLiteral, q.opciones[q.correcta], q.id);
    assert.ok(q.justificacion && q.justificacion.trim().length > 8, q.id);
    assert.ok(q.referencia && q.referencia.trim(), q.id);
  }
}
assert.equal(ids.size, 126, 'El catálogo UC3M debe mostrar 126 preguntas adicionales sin duplicados');

let historical = 0;
for (let i = 1; i <= 20; i += 1) {
  const file = 'content/uc3m/tema-' + String(i).padStart(2, '0') + '/preguntas.json';
  const payload = load(file);
  historical += payload.preguntas.length;
  for (const question of payload.preguntas) assert.ok(!ids.has(question.id), 'ID principal reutilizado: ' + question.id);
}
assert.ok(historical >= 200, 'Los bancos principales no deberían haber sido reemplazados');

const practice = content('assets/practice.js');
assert.doesNotThrow(() => new vm.Script(practice, { filename: 'assets/practice.js' }));
for (const marker of [
  'async function loadExtraRepasos()',
  'function renderExtraRepasos()',
  'data/uc3m-repasos-complementarios-20261106.json',
  'data/uc3m-repaso-temas-13-20-20261106.json',
  'data/uc3m-presupuesto-supuestos-20261106.json',
  "document.querySelectorAll('[data-extra-repaso]')",
  'extraRepasos = await loadExtraRepasos();',
  '${renderExtraRepasos()}'
]) assert.ok(practice.includes(marker), 'Falta integración práctica: ' + marker);

assert.ok(content('practice.html').includes('assets/practice.js?v=2026.11.06.2'), 'Caché JS no actualizado');
assert.ok(content('content/uc3m/COTEJO_LAGUNAS_MATRICES_20_TEMAS_20261106.md').includes('24 bloques'));
console.log('UC3M_COMPLEMENTARY_9_PACKS_126_QUESTIONS_JSON_AND_PRACTICE_WIRING_OK');
