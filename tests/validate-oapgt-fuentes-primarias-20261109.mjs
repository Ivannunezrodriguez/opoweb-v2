import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(path,'utf8');
const json=path=>JSON.parse(read(path));

const c1=json('data/programa-diputacion-administrativo-2026.json');
const c2=json('data/programa-diputacion-auxiliar-c2-2026.json');
const ol=json('data/programa-olias-auxiliar-edificios-2026.json');
const t22=c1.temas.find(t=>t.numero===22);
const t06=c2.temas.find(t=>t.numero===6);
const t13=ol.temas.find(t=>t.numero===13);
assert.equal(t22.estado,'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
assert.equal(t06.estado,'BORRADOR');
assert.equal(t13.estado,'AUDITADO','Olías T13 acreditado con datos INE a 30/06/2026');

const primary='https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011';
const verified=read('content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-2011-verificado.md');
for(const term of ['28/11/2011','14/12/2011','Art. 1.1 y 1.2','Art. 8 bis','Art. 4.a','Art. 14.d.1','Consejo Rector','Presidencia','cinco']){
  assert(verified.includes(term),'Missing primary-source fact or express reserve: '+term);
}
assert(verified.includes(primary));
for(const path of [t22.manual,t06.manual]){
 const body=read(path);
 assert(body.includes('## Control primario visual de la reforma 2011'),'No primary comparison in '+path);
 for(const phrase of ['Art. 1.2','Art. 8 bis','Art. 4.a','Art. 14.d.1','Consejo Rector','Presidencia','BOP']){
  assert(body.includes(phrase),'Missing 2011 statute concept '+phrase+' in '+path);
 }
 assert(/no cambia|no se considera|no.*certific|sigue.*pendiente|no.*acreditado/i.test(body),'No certification reservation in '+path);
}
for(const t of [t22,t06]){
 const source=read(t.numero===22?'content/diputacion-toledo/tema-22/fuentes.md':'content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md');
 assert(source.includes('1996')&&source.includes('2004')&&source.includes('2011'));
 assert(source.includes('aprobaci')||source.includes('aprobación'));
}
const c1Q=json(t22.preguntas).preguntas;
const c2Q=json(t06.preguntas).preguntas;
for(const [qs,index,key,stem] of [
  [c1Q,6,'correcta','Según el artículo 1'],
  [c2Q,0,'respuestaCorrecta','Según la modificación oficial']
]){
 const q=qs[index];
 assert(q[stem==='Según el artículo 1'?'pregunta':'enunciado'].startsWith(stem));
 assert(q.opciones[q[key]].includes('Presidente de la Diputación'));
 assert(q.referencia.includes('2011'));
}
const olM=json(t13.matriz);
assert.equal(olM.controlINE20261109.vias,280);
assert.equal(olM.controlINE20261109.pseudovias,0);
assert.equal(olM.controlINE20261109.fechaReferencia,'2026-06-30');
console.log('OAPGT_2011_VISUAL_PRIMARIO: cinco modificaciones trazadas; bloqueos OAPGT C1/C2 preservados y Olías INE resuelto');


// Documento íntegro de 20 páginas aportado por el usuario el 09/11/2026.
// No convertir la compilación hasta 2011 en vigencia consolidada hasta 2026.
const guide=read('content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-oapgt-texto-integro-1996-2011.md');
for(const snippet of ['835013e5925a6342178c744449009c431b910d3a82b42000d6dd0aa605f892fb',
  '7 capítulos','30 artículos','8 bis','5 vocales','2 vicepresidentes','10 alcaldes',
  'Mayoría simple','mayoría absoluta','1 hora','3 meses','2004','2011']) {
 assert(guide.toLowerCase().includes(snippet.toLowerCase()),'Falta precisión estatutaria: '+snippet);
}
for(const [t,preguntas] of [[t22,c1Q],[t06,c2Q]]) {
 const ev=t.evidenciaEstatutosAportados20261109;
 assert.equal(ev.paginas,20,'PDF OAPGT no registrado en tema '+t.numero);
 assert.equal(ev.cierreTemaCompleto,false,'No confundir sección estatutaria con tema completo');
 assert.equal(ev.guia,'content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-oapgt-texto-integro-1996-2011.md');
 for(const q of preguntas) {
  const correct=q.correcta??q.respuestaCorrecta;
  assert.equal(q.opciones.length,4,'Alternativas incompletas '+q.id);
  assert.equal(q.opciones[correct],q.respuestaLiteral,'Solución inconsistente '+q.id);
 }
}
assert.equal(c1Q.length,24);
assert.equal(c2Q.length,29);
console.log('ESTATUTOS_OAPGT_20_PAGINAS_53_CLAVES_OK: articulado extraído; tema completo reservado');
