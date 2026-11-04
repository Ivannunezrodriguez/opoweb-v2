import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root='content/la-puebla/tema-07/';
const read=n=>readFileSync(root+n,'utf8');
const q=JSON.parse(read('preguntas.json'));
const m=JSON.parse(read('matriz.json'));
const rep=read('cotejo-integral-2026-11-04.md');
assert.equal(q.preguntas.length,12);
assert.equal(m.controlIntegralEditorial20261104?.estado,'AUDITADO');
assert.equal(m.controlIntegralEditorial20261104?.opcionesVerificadas,48);
assert.equal(m.cobertura.length,7);
const counts=[0,0,0,0];
for(const it of q.preguntas){
 assert.equal(it.opciones.length,4);assert.equal(new Set(it.opciones).size,4);
 assert.equal(it.respuestaLiteral,it.opciones[it.respuestaCorrecta]);counts[it.respuestaCorrecta]++;
 const anchor='### '+it.id+' — '+it.enunciado;
 assert(rep.includes(anchor),'Missing cotejo '+it.id);
 const part=rep.split(anchor)[1].split('\n### ')[0].split('\n## ')[0];
 for(let i=0;i<4;i++)assert(part.includes('| **'+'ABCD'[i]+'** | '+it.opciones[i]),'Missing distractor '+it.id+' '+i);
}
assert.deepEqual(counts,[3,3,3,3]);
const q5=q.preguntas.find(x=>x.id==='LP-T07-005');
assert(q5.enunciado.includes('representantes legales')&&q5.enunciado.includes('art. 21.3'));
assert(q5.respuestaLiteral==='24 horas');
assert(read('manual.md').includes('**autoridad laboral** ratifica/anula en **24 horas**'));
assert(read('manual.md').includes('## 60. Control jurídico-editorial'));
console.log('TEMA_7_PUEBLA_48_OPTION_LPRL_EDITORIAL_AUDIT_COMPLETE');
