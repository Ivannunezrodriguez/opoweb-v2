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
assert.equal(t13.estado,'EN_AUDITORIA');

const primary='https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011';
const verified=read('content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-2011-verificado.md');
for(const term of ['28/11/2011','14/12/2011','Art. 1.2','Art. 8 bis','Art. 4.a','Art. 14.d.1','Consejo Rector','Presidencia','NO','cinco']){
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
  [c1Q,7,'correcta','Según el artículo 1'],
  [c2Q,0,'respuestaCorrecta','Según la modificación oficial']
]){
 const q=qs[index];
 assert(q[stem==='Según el artículo 1'?'pregunta':'enunciado'].startsWith(stem));
 assert(q.opciones[q[key]].includes('Presidente de la Diputación'));
 assert(q.referencia.includes('2011'));
}
const olM=json(t13.matriz);
assert.equal(olM.controlFocal20261108.callejeroCompleto,false);
console.log('OAPGT_2011_VISUAL_PRIMARIO: cinco modificaciones trazadas; bloqueos C1/C2/Olías preservados');
