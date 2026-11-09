import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const json = file => JSON.parse(readFileSync(file, 'utf8'));
const allPacks = json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const packIds = new Map(allPacks.map(pack => [pack.id, pack]));

for (const [tema, count, extraPack] of [
  [8, 13, 'UC3M-ADIC-20261106-T08'],
  [9, 13, 'UC3M-ADIC-20261106-T09'],
  [10, 11, 'UC3M-ADIC-20261106-LOTE']
]) {
  const prefix = String(tema).padStart(2, '0');
  const matrix = json('content/uc3m/tema-' + prefix + '/matriz.json');
  const originals = json('content/uc3m/tema-' + prefix + '/preguntas.json').preguntas;
  const pack = packIds.get(extraPack);
  assert.ok(pack, 'No existe paquete complementario T' + tema);
  const originalsSet = new Set(originals.map(q => q.id));
  const extrasSet = new Set(pack.preguntas.filter(q => q.tema === tema).map(q => q.id));
  assert.equal(matrix.cobertura.length, count);
  let filled = 0;
  for (const block of matrix.cobertura) {
    const oldIds = block.preguntas || [];
    const extraIds = block.preguntasComplementarias || [];
    if (oldIds.length + extraIds.length) filled++;
    for (const id of oldIds) assert.ok(originalsSet.has(id), 'ID de banco original no encontrado ' + id);
    for (const id of extraIds) {
      assert.ok(extrasSet.has(id), 'ID complementario no encontrado ' + id);
      assert.equal(block.fuentePreguntasComplementarias, 'data/uc3m-repasos-complementarios-20261106.json');
    }
  }
  assert.equal(filled, count, 'Bloque sin pregunta asociada: T' + tema);
  assert.equal(matrix.controlTrazabilidadExamen20261109.certificacionIntegral, false);
  assert.equal(originals.length, 12, 'No alterar los bancos originales de T' + tema);
  console.log('UC3M T' + tema + ': ' + filled + '/' + count + ' bloques con referencias a preguntas existentes');
}
