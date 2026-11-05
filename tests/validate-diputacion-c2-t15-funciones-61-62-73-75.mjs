import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root='content/diputacion-toledo-auxiliar-c2/tema-15/';
const txt=name=>readFileSync(root+name,'utf8');
const manual=txt('manual.md');
const report=txt('cotejo-funciones-61-62-73-75-2026-11-05.md');
const sources=txt('fuentes.md');
const matrix=JSON.parse(txt('matriz.json'));
const bank=JSON.parse(txt('preguntas.json'));

const minister=manual.split('## 1. Artículo 61 · Ministros')[1]?.split('## 2. Artículo 62 · Secretarios de Estado')[0]??'';
const state=manual.split('## 2. Artículo 62 · Secretarios de Estado')[1]?.split('## 3. Artículo 63 · Subsecretarios')[0]??'';
const delegate=manual.split('## 5. Artículo 73 · competencias del Delegado')[1]?.split('## 6. Artículo 74')[0]??'';
const subdelegate=manual.split('## 7. Artículo 75 · competencias del Subdelegado')[1]?.split('## 8. Artículo 76')[0]??'';
for(const key of 'abcdefghijklmnñopqrst'){
 assert.ok(minister.includes('| **'+key+')** |'),'Art 61 missing letter '+key);
}
for(const key of 'abcdefghijk'){
 assert.ok(state.includes('| **'+key+')** |'),'Art 62.2 missing letter '+key);
}
for(const p of ['61.j','61.ñ','61.q','61.r','61.s']){
 assert.ok(minister.includes(p),'Exam distinction '+p+' absent');
}
for(const p of ['62.2.e','**62.2.f**','**62.2.i**','cuantía numérica']){
 assert.ok(state.includes(p),'Art 62 limitation missing '+p);
}
for(const p of ['**73.1.c.1.º**','**73.1.c.2.º**','**73.1.c.3.º**','**73.1.d.3.º**','**73.1.e.1.º**','**73.1.e.4.º**','carácter anual','regular y periódica']){
 assert.ok(delegate.includes(p),'Art 73 subinciso missing '+p);
}
for(const p of ['**75.a.1.º**','**75.a.2.º**','**Art. 75.d:**','**Art. 75.e:**','**Art. 75.f:**','a través de sus respectivos Presidentes']){
 assert.ok(subdelegate.includes(p),'Art 75 rule missing '+p);
}
assert.ok(!subdelegate.includes('En provincias donde radique la sede del Delegado, este puede asumir funciones del Subdelegado'));
for(const n of [61,62,73,75])assert.ok(report.includes('BOE-A-2015-10566#a'+n),'Missing official legal source '+n);
assert.ok(sources.includes('cotejo-funciones-61-62-73-75-2026-11-05.md'));
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlManualFunciones61627375_20261105?.certificacionIntegral,false);
assert.equal(matrix.controlManualFunciones61627375_20261105?.navegadorReal,'PENDIENTE');
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((n,q)=>(n[q.respuestaCorrecta]++,n),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T15_ART_61_62_73_75_FULL_LETTER_MATRICES_PENDING_MANUAL_OK');
