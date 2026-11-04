import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root='content/la-puebla/';
const topics=[2,4,14];
for(const topic of topics){
 const folder=root+'tema-'+String(topic).padStart(2,'0')+'/';
 const bank=JSON.parse(readFileSync(folder+'preguntas.json','utf8'));
 const matrix=JSON.parse(readFileSync(folder+'matriz.json','utf8'));
 const manual=readFileSync(folder+'manual.md','utf8');
 const sources=readFileSync(folder+'fuentes.md','utf8');
 const report=readFileSync(folder+'cotejo-integral-2026-11-04.md','utf8');
 assert.equal(matrix.controlIntegralEditorial20261104?.estado,'AUDITADO','Audit not closed topic '+topic);
 assert.equal(matrix.controlIntegralEditorial20261104?.opcionesVerificadas,48);
 assert.equal(matrix.controlIntegralEditorial20261104?.controlFuncionalWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert.equal(bank.preguntas.length,12);
 assert(matrix.cobertura.length>=5);
 assert(manual.includes('cotejo-integral-2026-11-04.md'));
 assert(sources.includes('cotejo-integral-2026-11-04.md'));
 const keys=[0,0,0,0];
 for(const q of bank.preguntas){
  const key=q.respuestaCorrecta??q.correcta;
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  assert.equal(q.opciones[key],q.respuestaLiteral,q.id+' answer not preserved');
  const label='### '+q.id+' — '+q.enunciado;
  assert(report.includes(label),'Missing individualized audit '+q.id);
  const body=report.split(label)[1].split('\n### ')[0].split('\n## ')[0];
  for(const [i,opt] of q.opciones.entries()){
    assert(body.includes('| **'+'ABCD'[i]+'** | '+opt),'No exact source option in legal audit '+q.id+' '+i);
  }
  keys[key]++;
 }
 assert.deepEqual(keys,[3,3,3,3]);
}
const p4=JSON.parse(readFileSync(root+'tema-04/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T04-001');
assert(p4.enunciado.includes('no fue recurrido en plazo'));
assert(p4.justificacion.includes('dictamen favorable'));
assert(readFileSync(root+'tema-14/cotejo-integral-2026-11-04.md','utf8').includes('art. 24.4'));
console.log('LA_PUEBLA_T2_T4_T14_144_OPTIONS_DOCUMENTED_AND_ANSWER_ANCHORED_OK');
