import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/';
const expected={1:[4,6,6,4],2:[3,8,7,2],3:[5,5,6,4]};
let totalQuestions=0,totalOptions=0;
for(const [number,distribution] of Object.entries(expected)){
 const n=Number(number),dir=base+'tema-'+String(n).padStart(2,'0')+'/';
 const read=name=>readFileSync(dir+name,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json'));
 const report=read('cotejo-integral-2026-11-04.md');
 assert.equal(bank.length,20,'T'+n+' question count');
 assert.equal(new Set(bank.map(q=>q.id)).size,20,'T'+n+' duplicated identifiers');
 assert.equal(matrix.controlIntegralBanco20261104?.estado,'COTEJO_BANCO_COMPLETO');
 assert.equal(matrix.controlIntegralBanco20261104?.preguntasVerificadas,20);
 assert.equal(matrix.controlIntegralBanco20261104?.alternativasVerificadas,80);
 assert.equal(matrix.controlIntegralBanco20261104?.aprobadoPorUsuario,false);
 assert.equal(matrix.controlIntegralBanco20261104?.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'T'+n+' missing manual reference');
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'T'+n+' missing sources reference');
 const actual=[0,0,0,0];
 for(const q of bank){
  assert(q.opciones?.length===4,'Wrong number of answers '+q.id);
  assert(new Set(q.opciones).size===4,'Duplicate options '+q.id);
  assert(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<4,'Key outside bounds '+q.id);
  assert(q.justificacion&&q.trampaExamen&&q.referencia,'Missing rationale '+q.id);
  actual[q.respuestaCorrecta]++;totalQuestions++;
  const heading='### '+q.id+' — '+q.enunciado;
  const start=report.indexOf(heading);
  assert(start>=0,'Report missing question '+q.id);
  const next=report.indexOf('\n### ',start+heading.length);
  const block=report.slice(start,next<0?undefined:next).split('\n## ')[0];
  const letter='ABCD'[q.respuestaCorrecta];
  assert(block.includes('**Clave: '+letter+'**')||block.includes('**Respuesta: '+letter+'**'),'Wrong letter in report '+q.id);
  assert(block.includes('**Literal correcto:** '+q.opciones[q.respuestaCorrecta]),'Wrong correct literal '+q.id);
  assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'No focus '+q.id);
  for(let i=0;i<4;i++){
   const exact='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
   assert(block.includes(exact),'T'+n+' wrong choice at '+q.id+' '+i);
   assert(block.includes('**'+(i===q.respuestaCorrecta?'Correcta':'Incorrecta')+'**.'),'Missing explicit choice judgment '+q.id);
   totalOptions++;
  }
 }
 assert.deepEqual(actual,distribution,'Answer-key distribution drift T'+n);
}
assert.equal(totalQuestions,60);assert.equal(totalOptions,240);
const t1=readFileSync(base+'tema-01/cotejo-integral-2026-11-04.md','utf8');
assert(t1.includes('BOE-A-2026-10881')&&t1.includes('20/05/2026')&&t1.includes('eficacia electoral diferida'),'2026 constitutional reform not covered');
const t2=readFileSync(base+'tema-02/cotejo-integral-2026-11-04.md','utf8');
assert(t2.includes('**3 meses**')&&t2.includes('**6 meses**')&&t2.includes('**solicitudes y recursos**'),'LPAC deadlines comparison missing');
const t3=readFileSync(base+'tema-03/cotejo-integral-2026-11-04.md','utf8');
assert(t3.includes('**Audiencia 10–15**')&&t3.includes('**prueba 10–30**')&&t3.includes('**simplificada 30 días**'),'LPAC T3 traps missing');
console.log('DIP_TOLEDO_C2_T1_T3_60_QUESTIONS_240_EXACT_LAW_OPTIONS_OK');
