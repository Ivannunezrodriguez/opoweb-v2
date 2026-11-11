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

// El cotejo de noviembre sustituyó la ruta histórica de e-Archivo por un
// PDF institucional UC3M y sus artículos concretos. El cambio está registrado
// en el banco, sin modificación de las claves ni de las alternativas.
const primary2018=bank.controlFuentePrimariaPermanencia20261110;
const expected2018={ '008':'arts. 5–7','010':'art. 7.2–3','011':'arts. 1.1 y 1.3','012':'art. 1.2.a–b','013':'art. 2' };
assert.ok(primary2018,'Falta control de la actualización de fuentes de permanencia');
assert.equal(primary2018.respuestasModificadas,0);
assert.equal(primary2018.corteOficialPrimario,'NO_ACREDITADO');
for(const [id,articulo] of Object.entries(expected2018)){
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert.ok(q && primary2018.items.includes(q.id),'Pregunta sin control de actualización de fuente: '+id);
 assert.ok(q.referencia.includes('www.uc3m.es/ss/Satellite') &&
           q.referencia.includes('1371586017358') &&
           q.referencia.includes(articulo),
           'Referencia UC3M 2018 sin documento o artículo preciso: '+id);
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

const anclasBOE={ '017':'11', '018':'14', '019':'14', '020':'17', '021':'17' };
for(const [id,art] of Object.entries(anclasBOE)){
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert(q?.referencia.includes('BOE-A-2021-15781#a'+art), 'Enlace BOE sin artículo preciso: T16-'+id);
}
const verificacionesNormativas=[
 ['017','Curriculares','11.2'],
 ['018','25 % del total, con excepciones','14.5'],
 ['019','Entre 6 y 24 ECTS','14.6'],
 ['020','Un tercio','17.3'],
 ['021','Entre 6 y 30 ECTS','17.4']
];
for(const [id,answer,article] of verificacionesNormativas){
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert.equal(q.respuestaLiteral,answer,'Clave RD822 incorrecta T16-'+id);
 assert(q.referencia.includes(article),'Precepto de pregunta mal atribuido T16-'+id);
}
console.log('UC3M_T16_ARTS11_14_17_CINCO_CLAVES_VINCULADAS_BOE_OK');

const qParcial=bank.preguntas.find(q=>q.id==='UC3M-T16-010');
assert(qParcial.referencia.includes('art. 7.2–3') &&
       qParcial.referencia.includes('1371586017358'),
       'T16-010: 30 ECTS debe enlazar el art. 7.2 de la norma UC3M de 2018');
assert.equal(qParcial.respuestaLiteral,'30 ECTS');
for(const [id,answer] of [['014','40 %'],['015','100 %']]) {
 const q=bank.preguntas.find(q=>q.id==='UC3M-T16-'+id);
 assert.equal(q.respuestaLiteral,answer);
 assert(q.referencia.includes('1371215097947/'),'Fuente específica de normas evaluación: '+q.id);
}
assert(manual.includes('BOEL UC3M el 20/05/2025')&&manual.includes('extinción del curso correspondiente'));
assert(manual.includes('Dirección del centro')&&manual.includes('Se computan'));
assert(sources.includes('sede.uc3m.es/boel/anexo/10196/'));
assert(sources.includes('Matrícula parcial = 30 ECTS'));
console.log('UC3M_T16_MATRICULA_EVALUACION_TRANSICION_2025: fuentes y excepciones protegidas');
