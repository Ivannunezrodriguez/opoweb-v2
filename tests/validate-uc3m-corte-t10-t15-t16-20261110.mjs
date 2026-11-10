import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const programme = json('data/programa-uc3m-auxiliar-administrativa-2026.json');
const dossier = read('content/uc3m/CONTROL_CORTE_T10_T15_T16_20261110.md');

for (const number of [10, 15, 16]) {
  const topic = programme.temas.find(item => item.numero === number);
  assert.ok(topic, 'Falta tema UC3M ' + number);
  assert.equal(topic.estado, 'EN_REVISION_USUARIO', 'No promover sin fecha primaria: T' + number);
  const matrix = json('content/uc3m/tema-' + number + '/matriz.json');
  assert.equal(matrix.estado, 'EN_REVISION_USUARIO', 'Estado matriz indebido: T' + number);
  const cutoff = matrix.controlCorteNormativo20261110;
  assert.ok(cutoff, 'Falta trazabilidad del corte: T' + number);
  assert.equal(cutoff.fechaPublicacionPrimaria, 'NO_ACREDITADA');
  assert.equal(cutoff.fuenteRegla, 'BOE-A-2026-14624 base primera.7');
  assert.equal(cutoff.certificacionIntegral, false);
  assert.ok(cutoff.documentoCotejo.includes('CONTROL_CORTE_T10_T15_T16_20261110.md'));
}
assert.ok(dossier.includes('23/10/2026'), 'Falta vigencia de TREBEP Ley 4/2026');
assert.ok(dossier.includes('08/06/2026'), 'Falta corroboración estatutaria UC3M 2026');
assert.ok(dossier.includes('RD 905/2025'), 'Falta sentencia que afecta RD 822/2021');
assert.ok(dossier.includes('fecha oficial exacta de publicación sigue sin certificarse'));
console.log('UC3M T10/T15/T16: corte provisional documentado; fecha primaria NO acreditada; estados preservados.');
