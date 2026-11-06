import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const text=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(text(p));
const data=json('data/uc3m-repaso-temas-13-20-20261106.json');
const manual=text('content/uc3m/REPASO_FINAL_T13_T20_20261106.md');
const guide=text('content/uc3m/GUIA_EXAMEN_2026.md');
assert.equal(data.fecha,'2026-11-06');
assert.equal(data.certificacionIntegral,false);
assert.equal(data.preguntas.length,24);
assert.deepEqual(data.tipos,[13,14,15,16,17,20]);
assert.deepEqual(data.reglas,{titulares:70,reservas:5,minutos:60,acierto:1,fallo:'-1/3',blanco:0,minimoOficialTransformado:35,notaDirectaMinimaTribunal:'M_PENDIENTE'});
assert.equal(40-15/3,35);
assert.equal(50-18/3,44);
assert.ok(manual.includes('40 aciertos, 15 errores y 15 blancos'));
assert.ok(manual.includes('no prueban que la persona esté aprobada'));
assert.ok(guide.includes('REPASO_FINAL_T13_T20_20261106.md'));
assert.ok(manual.includes('fecha de publicación de la resolución de listas definitivas'));
assert.ok(manual.includes('**no automáticamente el 21/11/2026**'));
const correct=[0,0,0,0];const ids=new Set();
const originalSizes={13:12,14:14,15:21,16:21,17:12,20:12};
let idx=0;
for(const n of data.tipos){
 const qs=data.preguntas.filter(x=>x.tema===n);
 assert.equal(qs.length,4,'Four distinct scenarios per topic '+n);
 const dir='content/uc3m/tema-'+n+'/';
 assert.ok(text(dir+'manual.md').includes('../REPASO_FINAL_T13_T20_20261106.md'));
 const bank=json(dir+'preguntas.json').preguntas;
 assert.equal(bank.length,originalSizes[n],'Original bank must remain unchanged');
 for(const q of qs){
  idx++;assert.equal(q.id,'UC3M-REP-20261106-'+String(idx).padStart(3,'0'));
  assert.ok(!ids.has(q.id));ids.add(q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones.map(x=>x.trim().toLowerCase())).size,4);
  assert.equal(q.correcta,(idx-1)%4);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
  assert.ok(q.pregunta.length>20&&q.justificacion.length>35&&q.trampaExamen.length>25);
  assert.ok(q.referencia.startsWith('https://www.boe.es/'));
  assert.ok(manual.includes(q.id));
  assert.ok(manual.includes(q.respuestaLiteral));
  correct[q.correcta]++;
 }
}
assert.equal(ids.size,24);
assert.deepEqual(correct,[6,6,6,6]);
for(const term of ['**≥25 %**','**≥10 %**','**51 %**','**≥5 %**','**6 ECTS**','**30 ECTS**','**<15.000 €**','**>100.000 €**','**≥216.000 €**'])assert.ok(manual.includes(term),'Missing high-risk figure '+term);
console.log('UC3M_REPASO_24_QUESTIONS_96_ALTERNATIVES_EXAM_M_RULE_AND_6_BANKS_UNCHANGED_OK');
