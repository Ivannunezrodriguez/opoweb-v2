import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const main='content/uc3m/';
const expected={13:{total:12,keys:[3,3,3,3]},14:{total:14,keys:[4,4,3,3]},15:{total:21,keys:[6,5,5,5]}};
let questionTotal=0,optionTotal=0;
for(const [key,exp] of Object.entries(expected)){
 const n=Number(key);const dir=main+'tema-'+n+'/';
 const read=name=>readFileSync(dir+name,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json'));
 const report=read('cotejo-integral-2026-11-04.md');
 assert.equal(bank.length,exp.total,'Wrong questions T'+n);
 assert.equal(new Set(bank.map(q=>q.id)).size,exp.total,'Duplicate question IDs T'+n);
 const control=matrix.controlIntegralBanco20261104;
 assert.equal(control?.estado,'COTEJO_BANCO_COMPLETO','Audit registry missing T'+n);
 assert.equal(control?.preguntasVerificadas,exp.total);
 assert.equal(control?.alternativasVerificadas,exp.total*4);
 assert.equal(control?.aprobadoPorUsuario,false,'False user approval T'+n);
 assert.equal(control?.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'Missing manual crossref T'+n);
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'Missing source crossref T'+n);
 const distribution=[0,0,0,0];
 for(const q of bank){
  assert.equal(q.opciones.length,4,'Wrong alternatives '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Repeated alternatives '+q.id);
  assert(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4,'Bad correct position '+q.id);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta],'Answer/literal mismatch '+q.id);
  assert(q.referencia&&q.justificacion&&q.trampa,'Explanation gap '+q.id);
  distribution[q.correcta]++;questionTotal++;
  const head='### '+q.id+' — '+q.pregunta;
  const from=report.indexOf(head);
  assert(from>=0,'Missing audited stem '+q.id);
  const to=report.indexOf('\n### ',from+head.length);
  const block=report.slice(from,to<0?undefined:to).split('\n## ')[0];
  assert(block.includes('**Respuesta: '+'ABCD'[q.correcta]+'**'),'Wrong report key '+q.id);
  assert(block.includes(q.respuestaLiteral),'Missing correct literal '+q.id);
  assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'Missing focus '+q.id);
  for(let i=0;i<4;i++){
   const value='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
   assert(block.includes(value),'Missing exact answer in report '+q.id+' index '+i);
   optionTotal++;
  }
 }
 assert.deepEqual(distribution,exp.keys,'Answer distribution drift T'+n);
}
assert.equal(questionTotal,47);assert.equal(optionTotal,188);
const t13=readFileSync(main+'tema-13/manual.md','utf8');
assert(t13.includes('### Diferencia jurídica entre ley, informe, autorización y garantía de calidad'),'T13 art 4/5 comparison removed');
const t14=readFileSync(main+'tema-14/manual.md','utf8');
const t14src=readFileSync(main+'tema-14/fuentes.md','utf8');
const t14q=JSON.parse(readFileSync(main+'tema-14/preguntas.json','utf8')).preguntas.find(q=>q.id==='UC3M-T14-002');
assert.equal(t14q.correcta,1);assert.equal(t14q.respuestaLiteral,'El 25 %');
assert(t14.includes('El **51 %** del Claustro corresponde al conjunto docente señalado por el **artículo 45.3**'),'T14 51% article wrong');
assert(t14src.includes('La clave correcta **es B**')&&!t14src.includes('La clave pasa de **B** a **C**'),'T14 historical key error returned');
const t15=readFileSync(main+'tema-15/manual.md','utf8');
assert(t15.includes('Decreto 95/2009')&&t15.includes('**dos vías de cese**'),'T15 Defender amendment missing');
const t15q=JSON.parse(readFileSync(main+'tema-15/preguntas.json','utf8')).preguntas.find(q=>q.id==='UC3M-T15-003');
assert(t15q.pregunta.includes('reformado en 2009')&&t15q.opciones[t15q.correcta].includes('petición propia'),'T15 amended question lost');
console.log('UC3M_T13_T15_47_QUESTIONS_188_LITERAL_OPTIONS_AND_KEY_CORRECTIONS_OK');
