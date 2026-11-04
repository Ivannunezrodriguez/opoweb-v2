import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root='content/uc3m/';
let optionsVerified=0;
for (const n of [4,5,6]) {
 const dir=root+'tema-'+String(n).padStart(2,'0')+'/';
 const read=name=>readFileSync(dir+name,'utf8');
 const bank=JSON.parse(read('preguntas.json')).preguntas;
 const matrix=JSON.parse(read('matriz.json'));
 const report=read('cotejo-integral-2026-11-04.md');
 const status=matrix.controlIntegralJuridico20261104;
 assert.equal(status?.estado,'COTEJO_BANCO_COMPLETO','No audit status T'+n);
 assert.equal(status.opcionesVerificadas,48,'No 48 choice audit status T'+n);
 assert.equal(status.controlFuncional,'PENDIENTE_NAVEGADOR_REAL');
 assert.notEqual(matrix.aprobadoPorUsuario,true,'No user approval is documented T'+n);
 assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'Missing manual link T'+n);
 assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'Missing references link T'+n);
 assert.equal(bank.length,12,'Missing 12 questions T'+n);
 assert.equal(new Set(bank.map(q=>q.id)).size,12,'Duplicate question IDs T'+n);
 const positions=[0,0,0,0];
 for (const q of bank) {
  const k=q.correcta;
  assert(Number.isInteger(k)&&k>=0&&k<=3,'Bad answer key '+q.id);
  assert.equal(q.opciones.length,4,'Not four alternatives '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Repeated alternatives '+q.id);
  assert.equal(q.opciones[k],q.respuestaLiteral,'Mismatch literal '+q.id);
  assert(q.pregunta && q.justificacion && q.trampa,'Missing question fields '+q.id);
  positions[k]++;
  const anchor='### '+q.id+' — '+q.pregunta;
  const start=report.indexOf(anchor);
  assert(start>=0,'Audit question missing '+q.id);
  const next=report.indexOf('\n### ',start+6);
  const section=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
  assert(section.includes('**Respuesta: '+'ABCD'[k]+'**'),'Wrong report answer '+q.id);
  assert(section.includes(q.respuestaLiteral),'Wrong report literal '+q.id);
  assert(section.includes('> ⚠️ **¡Foco Examen!:**'),'No exam focus '+q.id);
  for(let i=0;i<4;i++){
   const expected='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
   assert(section.includes(expected),'No exact audit option '+q.id+' '+i);
   optionsVerified++;
  }
 }
 assert.deepEqual(positions,[3,3,3,3],'Unbalanced correct choices T'+n);
}
assert.equal(optionsVerified,144);
const t5=JSON.parse(readFileSync(root+'tema-05/preguntas.json','utf8')).preguntas.find(q=>q.id==='UC3M-T05-010');
assert(t5.pregunta.includes('censo electoral') && t5.pregunta.includes('padrones municipales'),'T05-010 reverted to overbroad special-data premise');
const t6=readFileSync(root+'tema-06/fuentes.md','utf8');
assert(t6.includes('listas definitivas') && t6.includes('No') && t6.includes('fecha de realización'),'T06 time-cut rule lost');
console.log('UC3M_T04_T06_36_KEYS_144_EXACT_CHOICES_AND_T05_46BIS_FIX_OK');
