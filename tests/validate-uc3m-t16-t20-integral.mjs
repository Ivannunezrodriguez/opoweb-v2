import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root='content/uc3m/';
const expected={16:{count:21,letters:[6,5,5,5]},17:{count:12,letters:[3,3,3,3]},18:{count:12,letters:[3,3,3,3]},19:{count:12,letters:[3,3,3,3]},20:{count:12,letters:[3,3,3,3]}};
let questions=0,alternatives=0;
for(const [key,rule] of Object.entries(expected)){
 const n=Number(key),dir=root+'tema-'+n+'/';
 const read=name=>readFileSync(dir+name,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json'));
 const report=read('cotejo-integral-2026-11-04.md');
 const flag=matrix.controlIntegralBanco20261104;
 assert.equal(flag?.estado,'COTEJO_BANCO_COMPLETO','Missing bank report flag T'+n);
 assert.equal(flag.preguntasVerificadas,rule.count,'Question count error T'+n);
 assert.equal(flag.alternativasVerificadas,rule.count*4,'Option count error T'+n);
 assert.equal(flag.aprobadoPorUsuario,false,'Unapproved falsely certified T'+n);
 assert.equal(flag.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
 assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'Manual link missing T'+n);
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'Sources link missing T'+n);
 assert.equal(bank.length,rule.count,'Wrong bank size T'+n);
 assert.equal(new Set(bank.map(q=>q.id)).size,rule.count,'Duplicate question ID T'+n);
 const tally=[0,0,0,0];
 for(const q of bank){
  assert.equal(q.opciones?.length,4,'Question not multiple choice '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Duplicate alternatives '+q.id);
  assert(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4,'Wrong answer index '+q.id);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta],'Wrong correct answer literal '+q.id);
  assert(q.trampa&&q.justificacion&&q.referencia,'Missing explanation '+q.id);
  tally[q.correcta]++;questions++;
  const headingPrefix='### '+q.id+' — ';
  const start=report.indexOf(headingPrefix);
  assert(start>=0,'Question omitted from report '+q.id);
  const next=report.indexOf('\n### ',start+headingPrefix.length);
  const piece=report.slice(start,next===-1?undefined:next).split('\n## ')[0];
  assert(piece.includes('**Respuesta: '+'ABCD'[q.correcta]+'**'),'Incorrect report key '+q.id);
  assert(piece.includes(q.respuestaLiteral),'Missing report literal '+q.id);
  assert(piece.includes('> ⚠️ **¡Foco Examen!:**'),'Missing test trap '+q.id);
  for(let i=0;i<4;i++){
   const expectedLine='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
   assert(piece.includes(expectedLine),'Missing literal alternative '+q.id+' '+i);
   alternatives++;
  }
 }
 assert.deepEqual(tally,rule.letters,'Answer-position distribution drift T'+n);
}
assert.equal(questions,69);assert.equal(alternatives,276);
const t17=readFileSync(root+'tema-17/manual.md','utf8');
assert(t17.includes('**una segunda lengua extranjera**')&&t17.includes('**3 materias**'),'T17 foreign-language refinement absent');
const t18=readFileSync(root+'tema-18/manual.md','utf8');
const t18src=readFileSync(root+'tema-18/fuentes.md','utf8');
assert(t18.includes('**No existe un segundo Capítulo VI autónomo**'),'T18 duplicate budget chapter returned');
assert(t18src.includes('BOCM-20251230-28.PDF')&&t18src.includes('300.468.067,59'),'T18 original budget primary evidence lost');
for(const n of [18,19]){
 const f=JSON.parse(readFileSync(root+'tema-'+n+'/matriz.json','utf8')).controlIntegralBanco20261104;
 assert.equal(f.controlFuentePrimaria20261104?.estado,'VERIFICADO_EN_PDF_INSTITUCIONAL_ORIGINAL','T'+n+' missing primary Vol I checks');
 assert(f.reservaFuentePrimaria?.includes('Volumen I'),'T'+n+' lacks primary source traceability');
 assert(f.controlFuentePrimaria20261104.sinCertificacionIntegral===true,'T'+n+' falsely claims global certification');
}
const t19=readFileSync(root+'tema-19/manual.md','utf8');
const t19source=readFileSync(root+'tema-19/fuentes.md','utf8');
const t19questions=JSON.parse(readFileSync(root+'tema-19/preguntas.json','utf8')).preguntas;
const q19_5=t19questions.find(q=>q.id==='UC3M-T19-005');
const q19_6=t19questions.find(q=>q.id==='UC3M-T19-006');
assert(q19_5.pregunta.includes('propuesta de pago')&&q19_5.correcta===1&&q19_5.respuestaLiteral==='O','T19-005 missing primary budget terminology');
assert(q19_6.respuestaLiteral==='Permite registrar conjuntamente autorización, compromiso de gasto y propuesta de pago'&&q19_6.correcta===3,'T19-006 ADO literal wrong');
assert(t19.includes('**O**: **propuesta de pago**')&&t19.includes('**Máximo 12.000 €**'),'T19 institutional O and anticipo values missing');
assert(t19source.includes('**15.2.1, pág. 98**')&&t19source.includes('**16.3, pág. 102**'),'T19 document citations missing');
assert(t18src.includes('**Art. 14.2, pág. 94/150**')&&t18src.includes('**Art. 5, pág. 78/150**'),'T18 former primary-source gaps not closed');
const t20=readFileSync(root+'tema-20/manual.md','utf8');
assert(t20.includes('216.000 €')&&t20.includes('140.000 €')&&t20.includes('5.404.000 €'),'T20 2026 harmonized figures missing');
assert(t20.includes('**igual o superior a 15.000 €**'),'T20 minor-services strict threshold missing');
console.log('UC3M_T16_T20_69_QUESTIONS_276_EXACT_OPTIONS_BUDGET_CAVEAT_2026_THRESHOLDS_OK');
