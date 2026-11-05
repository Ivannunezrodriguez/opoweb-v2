import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const dir='content/diputacion-toledo-auxiliar-c2/tema-15/';
const manual=readFileSync(dir+'manual.md','utf8');
const matrix=JSON.parse(readFileSync(dir+'matriz.json','utf8'));
const report=readFileSync(dir+'cotejo-manual-colegiados-2026-11-05.md','utf8');
const required=[
  'sin convocatoria previa',
  'decidan todos sus miembros',
  'exentos de la responsabilidad',
  'certificación expedida por el Secretario',
  'visto bueno del Presidente',
  'inmediata siguiente',
  'antelación mínima de 2 días',
  'voto particular por escrito en el plazo de 2 días',
  'publicación en el Boletín Oficial del Estado',
  'dos últimos años'
];
for(const phrase of required) assert.ok(manual.includes(phrase),'Missing: '+phrase);
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlManualColegiados20261105?.certificacionManualCompleto,false);
assert.equal(matrix.controlManualColegiados20261105?.navegacionReal,'PENDIENTE');
for(const art of ['17','18','19','22','23']) assert.ok(report.includes('BOE-A-2015-10566#a'+art));
const bank=JSON.parse(readFileSync(dir+'preguntas.json','utf8'));
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((n,q)=>n+q.opciones.length,0),80);
console.log('DIP_C2_T15_FOCAL_MANUAL_ARTS_17_18_19_22_23_OK');
