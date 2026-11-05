import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const dir='content/diputacion-toledo-auxiliar-c2/tema-15/';
const read=(p)=>readFileSync(dir+p,'utf8');
const manual=read('manual.md');
const sources=read('fuentes.md');
const report=read('cotejo-manual-age-54-80-2026-11-05.md');
const matrix=JSON.parse(read('matriz.json'));
const bank=JSON.parse(read('preguntas.json'));

for(const article of [54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]){
  assert.ok(manual.includes('Artículo '+article+' ·'),'Missing art '+article+' from AGE manual');
}
assert.ok(manual.includes('Artículo 55 bis'),'Missing balanced-gender reform');
const rules=[
  'estatutos de cada organismo público',
  'Ley 50/1997',
  'Secretaría General Técnica',
  'gestión directa',
  'Real Decreto',
  'organismo autónomo vinculado o dependiente',
  'Subdelegado del Gobierno que el propio Delegado designe',
  'Subdelegado de la provincia donde tenga sede',
  'comunidades autónomas uniprovinciales sin Subdelegado',
  'no implica',
  'Ministerio competente en el área de actividad',
  'deberán asistir a sus sesiones',
  'Comisión de asistencia al Subdelegado'
];
for(const phrase of rules){
  assert.ok(manual.toLocaleLowerCase('es').includes(phrase.toLocaleLowerCase('es')),'Missing legal rule: '+phrase);
}
const territorial=manual.split('## 7. Artículo 75 · competencias del Subdelegado')[1]?.split('## 8. Artículo 76')[0] ?? '';
assert.ok(!territorial.includes('En provincias donde radique la sede del Delegado, este puede asumir funciones del Subdelegado'),
  'Unsupported rule of art75 must not return');
assert.ok(territorial.includes('artículo 74'),'Required distinction art74 missing from art75');
assert.ok(report.includes('**art. 75 no contempla**') || report.includes('**art. 75**'), 'Report must discuss unsupported claim');
for(const art of [55,58,68,72,74,75,76,79]){
  assert.ok(report.includes('BOE-A-2015-10566#a'+art),'Missing primary article link '+art);
}
assert.ok(sources.includes('cotejo-manual-age-54-80-2026-11-05.md'),'Sources should link report');
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlManualAge54a80_20261105?.pasajesModificados,11);
assert.equal(matrix.controlManualAge54a80_20261105?.certificacionIntegral,false);
assert.equal(matrix.controlManualAge54a80_20261105?.navegadorReal,'PENDIENTE');
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((n,q)=>(n[q.respuestaCorrecta]++,n),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T15_AGE_54_80_BOE_FOCAL_AND_ART75_NEGATIVE_ASSERTION_OK');
