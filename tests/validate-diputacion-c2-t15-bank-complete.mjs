import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const dir='content/diputacion-toledo-auxiliar-c2/tema-15/';
const read=p=>readFileSync(dir+p,'utf8');
const bank=JSON.parse(read('preguntas.json'));
const matrix=JSON.parse(read('matriz.json'));
const first=read('cotejo-focal-2026-11-05.md');
const second=read('cotejo-segundo-lote-2026-11-05.md');
const manual=read('manual.md');
const sources=read('fuentes.md');
const qs=bank.preguntas;
const firstIds=['003','007','008','009','011','014','019','020'];
const secondIds=['001','002','004','005','006','010','012','013','015','016','017','018'];
assert.equal(qs.length,20,'T15 must retain 20 questions');
assert.equal(new Set(qs.map(q=>q.id)).size,20,'T15 duplicate IDs');
assert.equal(qs.reduce((n,q)=>n+q.opciones.length,0),80,'T15 must retain 80 answers');
assert.deepEqual(qs.reduce((n,q)=>(n[q.respuestaCorrecta]++,n),[0,0,0,0]),[5,5,5,5],'T15 A-D distribution changed');
assert.equal(new Set([...firstIds,...secondIds]).size,20,'Audited groups must be disjoint');
assert.equal(matrix.controlBancoCompleto20261105?.alternativas,80);
assert.equal(matrix.controlBancoCompleto20261105?.aprobacionIntegral,false);
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/,'Manual must remain pending');
assert.equal(bank.auditoriaBancoCompleto20261105?.certificacionIntegral,false);
assert.equal(bank.auditoriaBancoCompleto20261105?.estadoManual,'EN_AUDITORIA_PENDIENTE_COTEJO_INTEGRAL');
assert.equal(bank.auditoriaBancoCompleto20261105?.loteActual.length,12);
assert.equal(bank.auditoriaBancoCompleto20261105?.loteAnterior.length,8);
assert.match(manual,/Estado del banco de preguntas/);
assert.match(sources,/cotejo-segundo-lote-2026-11-05.md/);
const esc=s=>s.replaceAll('|','\\|').replaceAll('\n',' ');
for(const [ids,report] of [[firstIds,first],[secondIds,second]]){
 for(const id of ids){
  const key='DT-C2-T15-'+id;
  const q=qs.find(q=>q.id===key);
  assert.ok(q, 'Missing '+key);
  assert.equal(q.opciones.length,4,key);
  assert.ok(q.enunciado && q.justificacion && q.trampaExamen && q.referencia,key);
  assert.match(q.referencia,/BOE-A-2015-10566/,key+' no primary source');
  assert.equal(new Set(q.opciones).size,4,key+' duplicate choices');
  assert.equal(report.split('### '+key+' · ').length-1,1,key+' has no unique report section');
  assert.ok(report.includes('**Enunciado:** '+q.enunciado),key+' stale prompt');
  for(let i=0;i<4;i++){
   const option='ABCD'[i]+(i===q.respuestaCorrecta?' ✓':'');
   assert.ok(report.includes('| **'+option+'** | '+esc(q.opciones[i])+' |'),
     key+' option '+option+' does not match audited text');
  }
  assert.ok(report.includes(q.trampaExamen),key+' missing exam warning');
 }
}
assert.equal((second.match(/\*\*Correcta:\*\*/g)||[]).length,12,'second report must explain 12 correct choices');
assert.equal((second.match(/\*\*Incorrecta:\*\*/g)||[]).length,36,'second report must explain 36 distractors');
const q=n=>qs.find(q=>q.id.endsWith('-'+n));
assert.match(q('005').opciones[2],/cuarto grado y afinidad hasta segundo grado/);
assert.match(q('006').opciones[3],/tres días/);
assert.match(q('010').opciones[0],/misma Administración no relacionados jerárquicamente/);
assert.match(q('012').opciones[2],/mayoría de votos/);
assert.match(q('013').opciones[3],/interesados, en cualquier momento/);
assert.match(q('017').opciones[2],/Subsecretario/);
assert.match(q('018').opciones[0],/Director General/);
assert.match(manual,/titular del Ministerio o del Presidente del Gobierno/,
  'Art. 64.3: Secretario general may be proposed by President too');
assert.match(manual,/comunidades autónomas pluriprovinciales/,
  'Art. 69.4 requires a provincial distinction');
assert.match(manual,/uniprovinciales.*real decreto/,
  'Uniprovincial Subdelegation is not always automatic');
assert.match(manual,/Secretario General.*art\. 72\.5/s,
  'Uniprovincial Delegado replacement is separate from Subdelegado competence');
console.log('DIPUTACION_C2_T15_BANCO_20_80_BOE_OPCIONES_COTEJADAS_Y_STATUS_MANUAL_PENDIENTE_OK');
