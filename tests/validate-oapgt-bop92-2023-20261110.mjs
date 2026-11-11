import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = file => fs.readFileSync(file,'utf8');
const json = file => JSON.parse(read(file));
const matrix = read('content/diputacion-toledo/OAPGT_MATRIZ_NORMATIVA_COMPARTIDA_20261110.md');
assert.ok(matrix.includes('Competencia de contratación: BOP 92/2023'), 'Falta acta contratación BOP 2023');
assert.ok(matrix.includes('incongruencia'), 'Falta discrepancia artículo 9/10');
for(const [file, key] of [
 ['content/diputacion-toledo/tema-22/matriz.json','estado'],
 ['content/diputacion-toledo-auxiliar-c2/tema-06/matriz.json','estadoEditorial']
]){
 const data=json(file);
 assert.notEqual(data[key],'AUDITADO', 'No cerrar Estatutos sin consolidado: '+file);
 const block=data.controlContratacionBOP922023;
 assert.ok(block, 'Falta evidencia BOP92: '+file);
 assert.equal(block.umbralPresidenciaPct,10);
 assert.equal(block.umbralDireccionPct,5);
 assert.equal(block.duracionPlurianualPresidenciaAnos,4);
 assert.equal(block.certificacionIntegral,false);
}
for(const file of ['content/diputacion-toledo/tema-22/manual.md','content/diputacion-toledo-auxiliar-c2/tema-06/manual.md']){
 const manual=read(file);
 assert.ok(manual.includes('Contratación OAPGT: órganos y umbrales citados'), 'Falta apartado contractual '+file);
 assert.ok(manual.includes('10 %') && manual.includes('5 %'), 'Falta comparación de límites '+file);
}
assert.ok(matrix.includes('Prueba administrativa de aplicación **2025**'), 'Falta BOP 2025 en matriz');
for(const file of ['content/diputacion-toledo/tema-22/manual.md','content/diputacion-toledo-auxiliar-c2/tema-06/manual.md']){
 const content=read(file);
 assert.ok(content.includes('Expediente OAPGT **2025**'), 'Falta caso 2025 en '+file);
 assert.ok(content.includes('12.2.l.8'), 'Falta atribución estatutaria del decreto '+file);
 assert.ok(content.includes('Dirección propone / Presidencia aprueba'), 'Falta distinción órgano '+file);
}

assert.ok(matrix.includes('Aplicación del artículo 12.2.l.8 en **2026**'), 'Falta prueba 2026 en matriz');
assert.ok(matrix.includes('2025-003964'), 'No se conserva discordancia literal BOP 34/2026');
for(const [file, key] of [
  ['content/diputacion-toledo/tema-22/matriz.json', 'estado'],
  ['content/diputacion-toledo-auxiliar-c2/tema-06/matriz.json', 'estadoEditorial']
]) {
  const block = json(file).controlAplicacionEstatutos20261111;
  assert.ok(block, 'Falta control específico 2026: ' + file);
  assert.equal(block.articuloInvocado, '12.2.l.8');
  assert.equal(block.oepDecreto, '2026-001575');
  assert.equal(block.decretoConvocatoriaLiteralBop, '2025-003964');
  assert.equal(block.certificacionIntegral, false);
}
for(const file of ['content/diputacion-toledo/tema-22/manual.md','content/diputacion-toledo-auxiliar-c2/tema-06/manual.md']) {
  const manual = read(file);
  assert.ok(manual.includes('prueba contemporánea de la competencia de Presidencia en **2026**'), 'Falta prueba 2026: '+file);
  assert.ok(manual.includes('2025-003964'), 'Falta discordancia 2025/2026: '+file);
}
console.log('OAPGT: BOP 2023/2025/2026 acreditados documentalmente; consolidado estatutario pendiente.');

