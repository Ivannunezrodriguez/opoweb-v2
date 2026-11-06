import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const filename='data/la-puebla-repaso-practico-20261106.json';
const bundle=json(filename);
const manual=read('content/la-puebla/REPASO_FINAL_T10_T14_20261106.md');
assert.equal(bundle.preguntas.length,20);
assert.equal(bundle.certificacionFuncional,false);
assert.deepEqual(bundle.formatoBases,{preguntas:50,reserva:5,minutos:60,puntosAcierto:0.2,puntosFallo:-0.05,puntosBlanco:0,notaMinima:5});
const expect=(a,e,b)=>Math.round((0.2*a-0.05*e)*100)/100===b;
for(const [a,e,b] of [[25,0,5],[26,4,5],[30,10,5.5],[24,4,4.6]])assert.ok(expect(a,e,b));
assert.ok(manual.includes('20 ejercicios (80 alternativas)'));
assert.ok(manual.includes('50 preguntas titulares y 5 de reserva'));
assert.ok(manual.includes('El 4 %'));
assert.ok(manual.includes('07/10/2026'));
const all=new Set(),distribution=[0,0,0,0];
let count=0;
for(let n=10;n<=14;n++){
 const q=bundle.preguntas.filter(z=>z.tema===n);
 assert.equal(q.length,4);
 const path='content/la-puebla/tema-'+n+'/manual.md';
 assert.ok(read(path).includes('../REPASO_FINAL_T10_T14_20261106.md'));
 for(const item of q){
  count++;
  assert.equal(item.id,'LP-REP-NOV26-'+String(count).padStart(3,'0'));
  assert.ok(!all.has(item.id));all.add(item.id);
  assert.equal(item.opciones.length,4);assert.equal(new Set(item.opciones).size,4);
  assert.equal(item.correcta,(count-1)%4);
  assert.ok(item.pregunta.length>20 && item.explicacion.length>30);
  assert.ok(item.fuente.startsWith('https://'));
  assert.ok(manual.includes(item.id));
  assert.ok(manual.includes(item.opciones[item.correcta]));
  distribution[item.correcta]++;
 }
 const bank=json('content/la-puebla/tema-'+n+'/preguntas.json');
 assert.equal(bank.preguntas.length,12,'No sobrescribir bancos históricos de 12 preguntas');
}
assert.deepEqual(distribution,[5,5,5,5]);
const official=json('content/la-puebla/tema-12/preguntas.json');
const article104=official.preguntas.find(q=>q.id==='LP-T12-010');
assert.equal(article104.respuestaCorrecta,3);
assert.ok(article104.referencia.endsWith('#a104'));
assert.ok(!article104.referencia.includes('p=20261002'));
const mat=json('content/la-puebla/tema-12/matriz.json');
assert.equal(mat.controlTransversalPreExamen20261106.nuevoCierreIntegral,false);
assert.equal(mat.controlTransversalPreExamen20261106.fechaUltimaConsolidacionTRLRHL,'2026-10-07');
console.log('LA_PUEBLA_T10_T14_20_EXTRA_CASES_80_OPTIONS_EXAM_SCORING_LP12_LINK_FIXED_OK');
