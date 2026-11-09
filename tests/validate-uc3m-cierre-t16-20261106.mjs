import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const root='content/uc3m/',dir=root+'tema-16/';
const manual=read(dir+'manual.md'),sources=read(dir+'fuentes.md'),matrix=json(dir+'matriz.json'),bank=json(dir+'preguntas.json'),report=read(dir+'cotejo-integral-2026-11-04.md');
const acta=read(root+'CIERRE_DOCUMENTAL_T16_20261106.md');
const pack=json('data/uc3m-repasos-complementarios-20261106.json').paquetes.find(p=>p.id==='UC3M-ADIC-20261106-T1617');
assert.equal(matrix.estado,'EN_REVISION_USUARIO');
assert.equal(matrix.cobertura.length,7);
assert.equal(bank.preguntas.length,21);
assert.ok(manual.includes('CIERRE_DOCUMENTAL_T16_20261106.md'));
assert.ok(sources.includes('CIERRE_DOCUMENTAL_T16_20261106.md'));
assert.ok(manual.includes('## 15 bis.')&&manual.includes('### 15 ter.'));
assert.ok(manual.includes('40 %')&&manual.includes('60 %'));
assert.ok(manual.includes('**90 días**'));
assert.ok(acta.includes('BOE-A-2026-22083')&&acta.includes('BOE-A-2021-15781'));
assert.ok(sources.includes('BOE-A-2026-22083')&&sources.includes('BOE-A-2021-15781'));
const ids=new Set();
for(const q of bank.preguntas){
 assert.ok(q.id&&!ids.has(q.id));ids.add(q.id);
 assert.equal(q.opciones.length,4);assert.equal(new Set(q.opciones).size,4);
 assert.ok(q.opciones.every(s=>typeof s==='string'&&s.trim()));
 assert.ok(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<=3);
 assert.equal(q.opciones[q.correcta],q.respuestaLiteral);
 assert.ok(q.justificacion&&q.trampa&&q.referencia);
 assert.ok(report.includes('### '+q.id+' — '),'Falta cotejo '+q.id);
 for(const opcion of q.opciones) assert.ok(report.includes('| '+opcion+' |'),'Falta alternativa documentada '+q.id+': '+opcion);
}
const qs=pack?.preguntas.filter(q=>q.tema===16);
assert.ok(qs&&qs.length===6);
const arts=['14.3','15','16.3','19.2','19.1','4.5'];
for(const [i,q] of qs.entries()){
 assert.ok(!ids.has(q.id));ids.add(q.id);
 assert.equal(q.opciones.length,4);assert.equal(q.opciones[q.correcta],q.respuestaLiteral);
 assert.ok(q.justificacion&&q.trampaExamen&&q.fuenteEditorial);
 assert.ok(q.referencia.includes('art. '+arts[i])&&q.referencia.includes('sede.uc3m.es/boel/anexo/11307/'));
}
const closure=matrix.cierreDocumentalT16_20261106;
assert.equal(closure?.resultado,'CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS');
assert.equal(closure?.bloquesMatriz,7);assert.equal(closure?.preguntasOriginales,21);
assert.equal(closure?.alternativasOriginales,84);assert.equal(closure?.preguntasComplementarias,6);
assert.equal(closure?.alternativasComplementarias,24);assert.equal(closure?.aprobacionUsuario,false);
assert.equal(closure?.certificacionIntegral,false);assert.equal(closure?.inspeccionVisualPDF,false);
assert.ok(read(root+'GUIA_EXAMEN_2026.md').includes('CIERRE_DOCUMENTAL_T16_20261106.md'));
assert.ok(read('AUDITORIA_CONTINUA.md').includes('CIERRE_DOCUMENTAL_T16_20261106.md'));
assert.equal(ids.size,27);
console.log('UC3M T16 DOCUMENTAL: 7 BLOQUES, 27 PREGUNTAS, 108 ALTERNATIVAS, RD 822 + BOEL 2026; RESERVAS EXPLICITAS');

const normativaPermanenciaPDF='https://e-archivo.uc3m.es/bitstreams/8bca1962-a6f6-487b-9f11-e73f3f97477d/download';
for(const id of ['008','010','011','012','013']){
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert.ok(q?.referencia.includes(normativaPermanenciaPDF), 'Cita normativa UC3M T16 con URL no verificable: '+id);
 assert.ok(!q.referencia.includes('/rest/api/core/bitstreams/'),'No reintroducir ruta REST previamente bloqueada: '+id);
}
for(const [id,correct] of [['010','30 ECTS'],['011','12'],['012','Dos años consecutivos'],['013','Cuatro']]){
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert.equal(q.respuestaLiteral,correct,'Dato de permanencia UC3M inconsistente: '+id);
}
console.log('UC3M_T16_CINCO_ENLACES_NORMA_PERMANENCIA_OFICIAL_OK');

const q240=bank.preguntas.find(q=>q.id==='UC3M-T16-003');
assert(q240.referencia.includes('art. 14.1') && !q240.referencia.includes('art. 14.2'),
  '240 ECTS Grado debe citar art 14.1 RD 822/2021, no art 14.2');
assert.equal(q240.respuestaLiteral,'240 ECTS');
assert(q240.justificacion.includes('14.1')&&q240.justificacion.includes('14.2'));
console.log('UC3M_T16_003_ART14_1_240_ECTS_OK');
