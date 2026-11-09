import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const json = file => JSON.parse(readFileSync(file, 'utf8'));
const matrix = json('content/uc3m/tema-09/matriz.json');
const historic = json('content/uc3m/tema-09/preguntas.json').preguntas;
const packs = json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const additional = packs.find(pack => pack.id === 'UC3M-ADIC-20261106-T09');
assert.ok(additional, 'No se encuentra el repaso oficial de elaboración propia T09');
const bankIds = new Set(historic.map(q => q.id));
const extraIds = new Set(additional.preguntas.map(q => q.id));
assert.equal(historic.length, 12);
assert.equal(additional.preguntas.length, 12);
assert.equal(matrix.cobertura.length, 13);

for (const block of matrix.cobertura) {
  const originals = block.preguntas || [];
  const extras = block.preguntasComplementarias || [];
  assert.ok(originals.length + extras.length > 0, 'Bloque sin test o repaso: ' + block.bloque);
  for (const id of originals) assert.ok(bankIds.has(id), 'Pregunta histórica ajena: ' + id);
  for (const id of extras) {
    assert.ok(extraIds.has(id), 'Repaso complementario inexistente: ' + id);
    assert.equal(block.fuentePreguntasComplementarias, 'data/uc3m-repasos-complementarios-20261106.json');
  }
}
const mail = matrix.cobertura.find(x => x.bloque.includes('correspondencia'));
const excel = matrix.cobertura.find(x => x.bloque.includes('gestión y análisis'));
assert.equal(mail.preguntasComplementarias.length, 3);
assert.equal(excel.preguntasComplementarias.length, 4);
assert.equal(matrix.controlTrazabilidadExamen20261109.bloquesConPreguntasHistoricasOComplementarias, 13);
assert.equal(matrix.controlTrazabilidadExamen20261109.certificacionIntegral, false);
console.log('UC3M T09: 13/13 bloques trazados, 12 preguntas originales conservadas, 12 complementarias existentes.');
