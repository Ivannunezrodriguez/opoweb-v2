import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root='content/uc3m/';
let count=0;
for(const n of [10,11,12]) {
 const dir=root+'tema-'+n+'/';
 const read=file=>readFileSync(dir+file,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json'));
 const audit=read('cotejo-integral-2026-11-04.md');
 const flag=matrix.controlIntegralBanco20261104;
 assert.equal(flag?.estado,'COTEJO_BANCO_COMPLETO','Missing audit T'+n);
 assert.equal(flag.alternativasVerificadas,48,'Wrong audited number T'+n);
 assert.equal(flag.aprobadoPorUsuario,false,'No user approval T'+n);
 assert.equal(flag.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'Missing link manual T'+n);
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'Missing link sources T'+n);
 assert.equal(bank.length,12,'Wrong questions T'+n);
 assert.equal(new Set(bank.map(q=>q.id)).size,12,'Duplicate id T'+n);
 const letters=[0,0,0,0];
 for(const q of bank) {
  assert.equal(q.opciones.length,4,'Must have four alternatives '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Duplicate options '+q.id);
  assert(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4,'Invalid answer '+q.id);
  assert.equal(q.opciones[q.correcta],q.respuestaLiteral,'Literal mismatch '+q.id);
  assert(q.justificacion&&q.trampa&&q.referencia,'Missing explanation '+q.id);
  letters[q.correcta]++;
  const anchor='### '+q.id+' — '+q.pregunta;
  const start=audit.indexOf(anchor);
  assert(start>=0,'Missing audited question '+q.id);
  const next=audit.indexOf('\n### ',start+5);
  const chunk=audit.slice(start,next>=0?next:undefined).split('\n## ')[0];
  assert(chunk.includes('**Respuesta: '+'ABCD'[q.correcta]+'**'),'Wrong key in report '+q.id);
  assert(chunk.includes(q.respuestaLiteral),'Wrong literal in report '+q.id);
  assert(chunk.includes('> ⚠️ **¡Foco Examen!:**'),'Missing focus '+q.id);
  for(let i=0;i<4;i++){
   const value='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
   assert(chunk.includes(value),'Option absent from report '+q.id+' '+i);
   count++;
  }
 }
 assert.deepEqual(letters,[3,3,3,3],'Unbalanced keys T'+n);
}
assert.equal(count,144);
const t10=readFileSync(root+'tema-10/manual.md','utf8');
assert(t10.includes('auto de procesamiento o de apertura de juicio oral') && t10.includes('5 años de servicios efectivos'),'T10 critical legal correction absent');
const t11=readFileSync(root+'tema-11/manual.md','utf8');
assert(t11.includes('dos años continuados')&&t11.includes('tres años con interrupción')&&t11.includes('dos meses'),'T11 grade/compatibility times absent');
const t12=readFileSync(root+'tema-12/manual.md','utf8');
assert(t12.includes('31–49')&&t12.includes('50–100')&&t12.includes('artículo 34.3.d'),'T12 delegate public sector special case absent');
const t12bank=JSON.parse(readFileSync(root+'tema-12/preguntas.json','utf8')).preguntas;
assert(t12bank.every(q=>!q.pregunta.includes('entre otras')),'T12 malformed test stems returned');
console.log('UC3M_T10_T12_36_QUESTIONS_144_ALTERNATIVES_AND_LEGAL_FOCUS_OK');
