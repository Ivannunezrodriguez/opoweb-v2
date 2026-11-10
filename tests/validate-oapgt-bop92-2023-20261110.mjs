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
console.log('OAPGT: prueba de contrato BOP92/2023 y reserva de vigencia conservadas.');
