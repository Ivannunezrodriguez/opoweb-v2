import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const base='content/la-puebla/';
for(const id of [1,8,9]){
 const root=base+'tema-'+String(id).padStart(2,'0')+'/';
 const j=name=>JSON.parse(readFileSync(root+name,'utf8'));
 const txt=name=>readFileSync(root+name,'utf8');
 const matrix=j('matriz.json'),bank=j('preguntas.json'),report=txt('cotejo-integral-2026-11-04.md');
 assert.equal(matrix.controlIntegralEditorial20261104?.estado,'AUDITADO','Not legal-audited '+id);
 assert.equal(matrix.controlIntegralEditorial20261104?.opcionesVerificadas,48,'Incomplete bank audit '+id);
 assert.equal(matrix.controlIntegralEditorial20261104?.controlFuncionalWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert.equal(bank.preguntas.length,12);
 assert(txt('manual.md').includes('cotejo-integral-2026-11-04.md'));
 assert(txt('fuentes.md').includes('cotejo-integral-2026-11-04.md'));
 assert.equal(new Set(bank.preguntas.map(x=>x.id)).size,12);
 const counts=[0,0,0,0];
 for(const q of bank.preguntas){
  const k=q.respuestaCorrecta??q.correcta;counts[k]++;
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  assert.equal(q.opciones[k],q.respuestaLiteral,'Answer drift '+q.id);
  const anchor='### '+q.id+' — '+q.enunciado;
  assert(report.includes(anchor),'No audit text for '+q.id);
  const segment=report.split(anchor)[1].split('\n### ')[0].split('\n## ')[0];
  for(let i=0;i<4;i++)assert(segment.includes('| **'+'ABCD'[i]+'** | '+q.opciones[i]),'Missing distractor '+q.id+':'+i);
 }
 assert.deepEqual(counts,[3,3,3,3]);
 if(id===1)assert.equal(matrix.filas.length,6);
 if(id===8)assert.equal(matrix.incisosOficiales.length,2);
 if(id===9)assert.equal(matrix.cobertura.length,8);
}
const t1=JSON.parse(readFileSync(base+'tema-01/preguntas.json','utf8')).preguntas;
assert(t1.find(q=>q.id==='LP-T01-003').enunciado.includes('4 de noviembre de 2026'));
assert(t1.find(q=>q.id==='LP-T01-011').justificacion.includes('objeción de conciencia'));
const t9=JSON.parse(readFileSync(base+'tema-09/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T09-007');
assert(t9.enunciado.includes('integridad de personas, bienes o instalaciones'));
assert(t9.justificacion.includes('72 horas'));
const t8=JSON.parse(readFileSync(base+'tema-08/preguntas.json','utf8')).preguntas;
assert(t8.find(q=>q.id==='LP-T08-006').justificacion.includes('Consejo Escolar'));
assert(t8.find(q=>q.id==='LP-T08-007').justificacion.includes('Presidencia de la Junta'));
console.log('PUEBLA_T1_T8_T9_144_CHOICES_AUDIT_DOCUMENTED_AND_ANSWER_MAPPING_VALID');
