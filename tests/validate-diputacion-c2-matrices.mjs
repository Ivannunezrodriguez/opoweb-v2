import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const base='content/diputacion-toledo-auxiliar-c2/tema-';
const programme=read('data/programa-diputacion-auxiliar-c2-2026.json');
const covered=programme.temas.filter(t=>t.matriz).map(t=>t.numero);
assert.deepEqual(covered,[1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20],'Nineteen matrices are documentary only; T6 OAPGT remains last');
let checked=0;
for(const n of covered){
 const topic=programme.temas.find(t=>t.numero===n);
 assert(topic,'Missing official topic '+n);
 const file=base+String(n).padStart(2,'0')+'/matriz.json';
 assert.equal(topic.matriz,file,'Manifest must route to the actual matrix');
 const map=read(file);
 assert.equal(map.epigrafeOficial,topic.titulo,'Official wording must be exact: '+n);
 assert.equal(map.tema,n);
 if([1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20].includes(n)){
   assert.equal(map.estadoEditorial,'AUDITADO','Cierre documental exclusivo del bloque 17–20');
   if(n<=5){
     assert.match(map.estadoControl,/AUDITADO_DOCUMENTAL_20261106_FUNCIONAL_PENDIENTE/);
     assert.equal(map.cierreEditorialC2_01_05_20261106.certificacionIntegral,false);
   }else if(n>=7 && n<=10){
     assert.match(map.estadoControl,/AUDITADO_DOCUMENTAL_20261106_FUNCIONAL_PENDIENTE/);
     assert.equal(map.cierreEditorialC2_07_10_20261106.certificacionIntegral,false);
   }else if(n>=11 && n<=13){
     assert.match(map.estadoControl,/AUDITADO_DOCUMENTAL_20261106_FUNCIONAL_PENDIENTE/);
     assert.equal(map.cierreEditorialC2_11_13_20261106.certificacionIntegral,false);
   }else if(n>=14 && n<=16){
     if(n===16)assert.match(map.estadoControl,/AUDITADO_TECNICO_PEDAGOGICO_20261106_FUNCIONAL_PENDIENTE/);
     else assert.match(map.estadoControl,/AUDITADO_DOCUMENTAL_20261106_FUNCIONAL_PENDIENTE/);
     assert.equal(map.cierreEditorialC2_14_16_20261106.certificacionIntegral,false);
   }else{
     assert.match(map.estadoControl,/AUDITADO_TECNICO_PEDAGOGICO_20261106_FUNCIONAL_PENDIENTE/);
     assert.equal(map.cierreEditorialC2_17_20_20261106.certificacionIntegral,false);
   }
  }else{
   assert.ok(map.estadoControl?.includes('PENDIENTE_COTEJO_INTEGRAL'),'Otros temas aún no auditados');
  }
 assert.ok(map.cobertura.length>=5,'Coverage rows missing: '+n);
 for(const part of map.cobertura){
  for(const field of ['inciso','norma','articulos','contenidoExigible']){
   assert.equal(typeof part[field],'string','Missing '+field+' in topic '+n);
   assert.ok(part[field].trim().length>=1,'Empty '+field+' in topic '+n);
  }
 }
 checked++;
}
assert.equal(checked,19);
console.log('DIPUTACION_C2_19_OFFICIAL_SOURCE_MATRICES_PRESENT_AND_PENDING_LEGAL_REVIEW_OK');
