import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const json = file => JSON.parse(readFileSync(file, 'utf8'));
const packs = json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const additionalByTopic = new Map();
for (const pack of packs) for (const q of pack.preguntas) {
  if (!additionalByTopic.has(q.tema)) additionalByTopic.set(q.tema, new Set());
  additionalByTopic.get(q.tema).add(q.id);
}

const counts = new Map([[8,13],[9,13],[10,11],[11,12],[12,17],[13,12],[18,8]]);
let sections = 0, extraReferences = 0;
for (const [n, expected] of counts) {
  const name = String(n).padStart(2,'0');
  const matrix = json('content/uc3m/tema-' + name + '/matriz.json');
  const originalQuestions = json('content/uc3m/tema-' + name + '/preguntas.json').preguntas;
  const originals = new Set(originalQuestions.map(q => q.id));
  assert.equal(matrix.cobertura.length, expected, 'Recuento de apartados T' + n);
  assert.equal(originalQuestions.length, 12, 'Conservar 12 preguntas originales en T' + n);
  for (const section of matrix.cobertura) {
    const local = section.preguntas || [];
    const extra = section.preguntasComplementarias || [];
    assert.ok(local.length || extra.length, 'Apartado sin pregunta asociada T' + n + ': ' + section.bloque);
    for (const id of local) assert.ok(originals.has(id), 'Pregunta original ausente: ' + id);
    for (const id of extra) {
      assert.ok(additionalByTopic.get(n)?.has(id), 'Pregunta complementaria ajena: ' + id);
      assert.equal(section.fuentePreguntasComplementarias, 'data/uc3m-repasos-complementarios-20261106.json');
      extraReferences++;
    }
    sections++;
  }
  assert.equal(matrix.controlTrazabilidadExamen20261109.certificacionIntegral, false);
  assert.equal(matrix.controlTrazabilidadExamen20261109.bloquesConPreguntasHistoricasOComplementarias, expected);
}
assert.equal(sections, 86);
assert.ok(extraReferences >= 25);
console.log('UC3M: 86 apartados en 7 temas con preguntas reales, bancos originales intactos, sin certificación legal fingida.');
