import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const m14 = json('content/uc3m/tema-14/matriz.json');
const m15 = json('content/uc3m/tema-15/matriz.json');
const bank14 = json('content/uc3m/tema-14/preguntas.json').preguntas;
const bank15 = json('content/uc3m/tema-15/preguntas.json').preguntas;
const packs = json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const extras = new Set(packs.flatMap(pack => pack.preguntas.filter(q => q.tema === 14).map(q => q.id)));
const originals = new Set(bank14.map(q => q.id));

assert.equal(bank14.length, 14);
assert.equal(bank15.length, 21);
assert.equal(m14.cobertura.length, 12);
assert.equal(m15.cobertura.length, 7);

for (const block of m14.cobertura) {
  const ids = block.preguntas || [];
  const supplemental = block.preguntasComplementarias || [];
  assert.ok(ids.length + supplemental.length > 0, 'T14 sin cobertura: ' + block.bloque);
  for (const id of ids) assert.ok(originals.has(id), 'T14 pregunta original inexistente ' + id);
  for (const id of supplemental) {
    assert.ok(extras.has(id), 'T14 complemento no encontrado ' + id);
    assert.equal(block.fuentePreguntasComplementarias, 'data/uc3m-repasos-complementarios-20261106.json');
  }
}
assert.equal(m14.controlTrazabilidad20261109.seccionesConPreguntas, 12);
assert.equal(m14.controlTrazabilidad20261109.certificacionIntegral, false);
const nature = m15.cobertura.find(row => row.bloque === 'Naturaleza de los Estatutos');
assert.ok(nature);
assert.deepEqual(nature.preguntas, []);
assert.equal(nature.microtestManual.cantidad, 2);
assert.equal(nature.microtestManual.enBancoJson, false);
const manual = read(nature.microtestManual.ruta);
assert.ok(manual.includes('### 1.2. Microtest de dos preguntas sobre la naturaleza de los Estatutos'));
assert.ok(manual.includes('**Pregunta A.**'));
assert.ok(manual.includes('**Pregunta B.**'));
assert.equal(m15.controlTrazabilidad20261109.bloquesConPreguntasBanco, 6);
assert.equal(m15.controlTrazabilidad20261109.bloquesConMicrotestManual, 1);
assert.equal(m15.controlTrazabilidad20261109.certificacionIntegral, false);

console.log('UC3M T14: 12 bloques con preguntas existentes. T15: 6 bloques de banco y 1 microtest solo de manual.');
