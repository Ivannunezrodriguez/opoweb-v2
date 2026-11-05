import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/tema-14/';
const read=name=>readFileSync(base+name,'utf8');
const bank=JSON.parse(read('preguntas.json'));
const matrix=JSON.parse(read('matriz.json'));
const source=read('fuentes.md');
const report=read('cotejo-banco-completo-2026-11-05.md');
assert.equal(bank.preguntas.length,20,'T14 needs 20 full questions');
assert.deepEqual(bank.preguntas.map(x=>x.id),Array.from({length:20},(_,i)=>'DT-C2-T14-'+String(i+1).padStart(3,'0')));
assert.equal(bank.preguntas.reduce((n,x)=>n+x.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((arr,x)=>(arr[x.respuestaCorrecta]++,arr),[0,0,0,0]),[5,5,5,5]);
const unique=new Set();
for(const [i,q] of bank.preguntas.entries()){
  assert.ok(!unique.has(q.id));unique.add(q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones.map(x=>x.toLocaleLowerCase('es'))).size,4,'Duplicate options: '+q.id);
  assert.ok(q.enunciado.length>40,'Weak question: '+q.id);
  assert.ok(q.referencia.startsWith('Ley ')||q.referencia.startsWith('Reglamento ')||q.referencia.startsWith('FNMT'),'Legal / source reference missing '+q.id);
  assert.match(q.referencia,/https:\/\//);
  assert.match(q.justificacion,/Cotejo individual de las cuatro alternativas:/);
  for(const key of 'ABCD')assert.ok(q.justificacion.includes(key+': '),'Missing individual '+key+' judgement for '+q.id);
  assert.equal((q.justificacion.match(/CORRECTA/g)||[]).length,1,'Exactly one correct judgement '+q.id);
  assert.ok(q.justificacion.includes('ABCD'[q.respuestaCorrecta]+': CORRECTA'),'Correct explanation mismatches key '+q.id);
  assert.match(q.trampaExamen,/¡Foco Examen!:/);
  assert.ok(report.includes('### Pregunta '+String(i+1).padStart(2,'0')+' — '+q.id),'Source audit lacks '+q.id);
  const section=report.split('### Pregunta '+String(i+1).padStart(2,'0')+' — '+q.id)[1]?.split(/\n### Pregunta|\n## Resultado/)[0]??'';
  for(const key of 'ABCD')assert.ok(section.includes('- **'+key+' —'),'Missing '+key+' in audit report '+q.id);
}
assert.ok(report.includes('FNMT')&&report.includes('910/2014')&&report.includes('Ley 39/2015')&&report.includes('Ley 6/2020'));
assert.ok(source.includes('cotejo-banco-completo-2026-11-05.md'));
assert.equal(matrix.controlBancoCompleto20261105?.preguntas,20);
assert.equal(matrix.controlBancoCompleto20261105?.alternativas,80);
assert.equal(matrix.controlBancoCompleto20261105?.certificacionManualIntegral,false);
assert.equal(matrix.controlBancoCompleto20261105?.navegadorReal,'PENDIENTE');
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(bank.auditoria?.certificacionTemaIntegral,false);
console.log('DIP_C2_T14_BANK_20_80_ALTERNATIVES_SOURCES_AND_BALANCE_OK');
