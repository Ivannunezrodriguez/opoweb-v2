import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const dir='content/diputacion-toledo-auxiliar-c2/tema-15/';
const bank=JSON.parse(readFileSync(dir+'preguntas.json','utf8'));
const matrix=JSON.parse(readFileSync(dir+'matriz.json','utf8'));
const report=readFileSync(dir+'cotejo-focal-2026-11-05.md','utf8');
const manual=readFileSync(dir+'manual.md','utf8');
const sources=readFileSync(dir+'fuentes.md','utf8');
const ids=['003','007','008','009','011','014','019','020'];
const questions=bank.preguntas;
assert.equal(questions.length,20,'Deben conservarse veinte preguntas');
assert.equal(new Set(questions.map(q=>q.id)).size,20,'IDs repetidos');
assert.equal(questions.reduce((n,q)=>n+q.opciones.length,0),80,'No deben perderse alternativas');
assert.deepEqual(questions.reduce((a,q)=>(a[q.respuestaCorrecta]++,a),[0,0,0,0]),[5,5,5,5],'No cambiar claves A-D');
assert.equal(bank.auditoriaFocal20261105?.verificadas,8);
assert.equal(bank.auditoriaFocal20261105?.alternativasVerificadas,32);
assert.equal(bank.auditoriaFocal20261105?.certificarManual,false);
assert.equal(matrix.controlFocalBanco20261105?.manualCompleto,'PENDIENTE');
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/,'No certificar matriz');
assert.match(manual,/Auditoría focal del banco de preguntas/);
assert.match(manual,/40 %.*60 %/s);
assert.match(manual,/22\/08\/2024/);
assert.match(sources,/cotejo-focal-2026-11-05.md/);
for(const id of ids){
 const name='DT-C2-T15-'+id;
 const q=questions.find(q=>q.id===name);
 assert.ok(q,'ID ausente '+name);
 assert.equal(q.opciones.length,4);
 assert.ok(q.enunciado && q.justificacion && q.trampaExamen && q.referencia,name);
 assert.ok(q.referencia.includes('www.boe.es'),name+' sin BOE');
 assert.equal(report.split('### '+name+' · ').length-1,1,name+' sin sección única');
 assert.ok(report.includes('**Enunciado:** '+q.enunciado),name+' enunciado desincronizado');
 for(let n=0;n<4;n++){
   const letter='ABCD'[n]+(n===q.respuestaCorrecta?' ✓':'');
   const option=q.opciones[n].replaceAll('|','\\|').replaceAll('\n',' ');
   const prefix='| **'+letter+'** | '+option+' | **'+(n===q.respuestaCorrecta?'Correcta':'Incorrecta')+':**';
   // El informe documenta la fundamentación de cada opción. Acepta negrita
   // editorial en la frase de clasificación sin aceptar que falte la alternativa.
   assert.ok(report.includes('| **'+letter+'** | '+option+' |'),name+' alternativa '+letter+' no cotejada');
 }
 assert.ok(report.includes(q.trampaExamen),name+' sin foco examen');
}
assert.equal((report.match(/^### DT-C2-T15-\d{3} · /gm)||[]).length,8);
assert.ok(report.includes('**8 preguntas y 32 alternativas**'));
const a=questions.find(q=>q.id==='DT-C2-T15-014');
assert.equal(a.respuestaCorrecta,0);
assert.match(a.opciones[0],/40 %.*60 %/);
assert.match(a.justificacion,/5 años/);
assert.match(a.referencia,/BOE-A-2024-15936/);
const b=questions.find(q=>q.id==='DT-C2-T15-007');
assert.equal(b.respuestaCorrecta,1);
assert.match(b.opciones[1],/no necesita publicación/);
const c=questions.find(q=>q.id==='DT-C2-T15-020');
assert.equal(c.respuestaCorrecta,0);
assert.match(c.opciones[0],/nivel de Subdirector General/);
console.log('DIPUTACION_C2_T15_8_PREGUNTAS_32_BOE_ALTERNATIVAS_40_60_TRANSITORIO_OK');
