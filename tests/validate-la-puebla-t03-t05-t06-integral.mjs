import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const base='content/la-puebla/';
const topics=[3,5,6];
for(const n of topics){
 const dir=base+'tema-'+String(n).padStart(2,'0')+'/';
 const txt=x=>readFileSync(dir+x,'utf8');
 const bank=JSON.parse(txt('preguntas.json'));
 const matrix=JSON.parse(txt('matriz.json'));
 const report=txt('cotejo-integral-2026-11-04.md');
 assert.equal(bank.preguntas.length,12,'Missing questions in '+n);
 assert.equal(matrix.controlIntegralEditorial20261104?.estado,'AUDITADO');
 assert.equal(matrix.controlIntegralEditorial20261104?.opcionesVerificadas,48);
 assert.equal(matrix.controlIntegralEditorial20261104?.controlFuncionalWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert.equal(matrix.cobertura.length,n===3?9:n===5?8:6);
 assert(txt('manual.md').includes('cotejo-integral-2026-11-04.md'));
 assert(txt('fuentes.md').includes('cotejo-integral-2026-11-04.md'));
 const count=[0,0,0,0];
 for(const q of bank.preguntas){
  const key=q.respuestaCorrecta??q.correcta;
  const stem=q.enunciado??q.pregunta;
  assert(Number.isInteger(key)&&key>=0&&key<4,'Invalid key '+q.id);
  assert(stem?.length>20,'Missing stem '+q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  assert.equal(q.respuestaLiteral,q.opciones[key],'Correct answer mismatch '+q.id);
  count[key]++;
  const anchor='### '+q.id+' — '+stem;
  assert(report.includes(anchor),'Missing audit question '+q.id);
  const seg=report.split(anchor)[1].split('\n### ')[0].split('\n## ')[0];
  for(const [i,opt] of q.opciones.entries())assert(seg.includes('| **'+'ABCD'[i]+'** | '+opt),'Missing option '+q.id+' '+i);
 }
 assert.deepEqual(count,[3,3,3,3]);
}
const q3=JSON.parse(readFileSync(base+'tema-03/preguntas.json','utf8')).preguntas;
assert(q3.find(x=>x.id==='LP-T03-002').enunciado.includes('artículo 56.2'));
assert(q3.find(x=>x.id==='LP-T03-010').enunciado.includes('cada una'));
const m5=readFileSync(base+'tema-05/manual.md','utf8');
assert(m5.includes('25.2.q')&&m5.includes('69.1'));
const q6=JSON.parse(readFileSync(base+'tema-06/preguntas.json','utf8')).preguntas;
assert(q6.every(x=>typeof x.pregunta==='string'&&Number.isInteger(x.correcta)));
assert(q6.find(x=>x.id==='LP-T06-008').justificacion.includes('impar'));
console.log('PUEBLA_T3_T5_T6_144_CHOICES_EXACTLY_CROSSCHECKED_AND_ANSWER_MAPPED_OK');
