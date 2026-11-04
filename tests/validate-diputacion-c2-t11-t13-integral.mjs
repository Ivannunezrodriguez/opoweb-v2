import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/';
const expectedDistribution={11:[5,5,5,5],12:[5,5,5,5],13:[5,4,6,5]};
const upgrades={
 11:{'DT-C2-T11-015':['artículo 104.1','Seis meses',3],'DT-C2-T11-019':['artículo 7.2','boletines oficiales de la provincia y de la comunidad autónoma',3],'DT-C2-T11-020':['artículo 9.1','cinco por ciento',0]},
 12:{'DT-C2-T12-010':['artículo 62.3','1 de septiembre al 20 de noviembre',2],'DT-C2-T12-013':['artículo 167.3','extinción total de la deuda o prescripción',1],'DT-C2-T12-014':['artículo 32.2','Sin necesidad de solicitarlo',2],'DT-C2-T12-017':['artículo 72.1','período voluntario de pago como en período ejecutivo',1]},
 13:{'DT-C2-T13-009':['artículo 59.2','ICIO e IIVTNU',1],'DT-C2-T13-010':['artículo 61.1','Concesión administrativa',2],'DT-C2-T13-018':['artículo 104.2','No están sujetos',2]}
};
let totalQ=0,totalChoices=0,totalReplaced=0;
for(const [n,distribution] of Object.entries(expectedDistribution)){
 const dir=base+'tema-'+n+'/';
 const read=name=>readFileSync(dir+name,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json')).controlIntegralBanco20261105;
 const report=read('cotejo-integral-2026-11-05.md');
 assert.equal(bank.length,20,'Question count T'+n);
 assert.equal(new Set(bank.map(q=>q.id)).size,20,'Question duplicates T'+n);
 assert.equal(matrix?.estado,'COTEJO_BANCO_COMPLETO','Bank status T'+n);
 assert.equal(matrix.preguntasVerificadas,20);
 assert.equal(matrix.alternativasVerificadas,80);
 assert.equal(matrix.aprobadoPorUsuario,false);
 assert.equal(matrix.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert.equal(matrix.certificacionLegalGlobal,'PENDIENTE_MANUAL_COMPLETO');
 assert.equal(matrix.respuestaCorrectaConservada,true);
 assert.equal(matrix.preguntasReemplazadasPorRedundancia.length,Object.keys(upgrades[n]).length);
 assert(read('manual.md').includes('cotejo-integral-2026-11-05.md'),'Missing report link in manual '+n);
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-05.md'),'Missing report link in sources '+n);
 const actual=[0,0,0,0];
 for(const q of bank){
  assert.equal(q.opciones?.length,4,'Question requires four choices '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Repeated alternative '+q.id);
  assert(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<4,'Invalid answer key '+q.id);
  assert(q.justificacion&&q.trampaExamen&&q.referencia,'Missing legal explanation '+q.id);
  actual[q.respuestaCorrecta]++;
  totalQ++;
  const heading='### '+q.id+' — '+q.enunciado;
  const start=report.indexOf(heading);
  assert(start>=0,'Not in report '+q.id);
  const next=report.indexOf('\n### ',start+heading.length);
  const block=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
  assert(block.includes('**Respuesta: '+'ABCD'[q.respuestaCorrecta]+'**'),'Wrong answer letter report '+q.id);
  assert(block.includes('**Literal correcto:** '+q.opciones[q.respuestaCorrecta]),'Correct literal mismatched '+q.id);
  assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'Missing focus '+q.id);
  for(let k=0;k<4;k++){
   const literal='| **'+'ABCD'[k]+'** | '+q.opciones[k].replaceAll('|','\\|')+' |';
   assert(block.includes(literal),'Literal alternative missing '+q.id+' '+k);
   assert(block.includes('**'+(k===q.respuestaCorrecta?'Correcta':'Incorrecta')+'**'),'Alternative justification missing '+q.id+' '+k);
   totalChoices++;
  }
 }
 assert.deepEqual(actual,distribution,'Correct-answer distribution changed T'+n);
 for(const [id,[questionPart,correctPart,key]] of Object.entries(upgrades[n])){
  const q=bank.find(x=>x.id===id);
  assert(q?.enunciado.includes(questionPart),'New legal question missing '+id);
  assert.equal(q.respuestaCorrecta,key,'Answer key changed for upgrade '+id);
  assert(q.opciones[key].toLowerCase().includes(correctPart.toLowerCase()),'New legal answer missing '+id);
  assert(matrix.preguntasReemplazadasPorRedundancia.includes(id),'Matrix upgrade not traced '+id);
  totalReplaced++;
 }
}
assert.equal(totalQ,60);
assert.equal(totalChoices,240);
assert.equal(totalReplaced,10);
const t11=readFileSync(base+'tema-11/manual.md','utf8');
const t12=readFileSync(base+'tema-12/manual.md','utf8');
const t13=readFileSync(base+'tema-13/manual.md','utf8');
assert(t11.includes('tema 12')&&!t11.includes('recaudación voluntaria y ejecutiva en profundidad, reservada al tema 11'),'T11 wrong cross-topic reference');
assert(t11.includes('**seis meses**')&&t11.includes('**Hasta 5 %'),'LGT104/TRLRHL9 issue returned');
assert(t12.includes('**1 septiembre–20 noviembre**')&&t12.includes('**5 % / 10 % / 20 %**'),'LGT62.3 or recargos distinction lost');
assert(!t12.includes('## 1. voluntaria'),'T12 stale duplicate heading');
assert(t13.includes('**Concesión administrativa → derecho de superficie → usufructo → propiedad**'),'IBI precedence removed');
assert(t13.includes('**No sujeto**')&&t13.includes('**art.104.2**'),'Rural non-liability contrast missing');
console.log('DIP_C2_T11_T13_60_QUESTIONS_240_EXACT_ALTERNATIVES_10_DEDUP_2026_OK');
