import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const m=json('data/programa-diputacion-administrativo-2026.json');
const closed=m.temas.filter(t=>t.numero<=23 && t.estado==='AUDITADO').map(t=>t.numero);
assert.deepEqual(closed,[...Array.from({length:21},(_,i)=>i+1),23]);
assert.equal(m.temas[21].estado,'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
assert.ok(m.cierreEditorialC1Bloques20261105.temasConCierreEditorialDemostrado>=22);
assert.ok(m.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal<=99);
const expected=[["DIP-T20-001",2,"Gratuidad"],["DIP-T20-002",3,"Indefinido y a jornada completa"],["DIP-T20-003",2,"El 30 %"],["DIP-T20-004",3,"1 mes"],["DIP-T20-005",3,"6 meses en 1 año u 8 meses en 2 años"],["DIP-T20-006",1,"30 días"],["DIP-T20-007",1,"12 mensualidades"],["DIP-T20-008",2,"15 días"],["DIP-T20-009",0,"Interrupción temporal de trabajo y salario"],["DIP-T20-010",2,"33 días por año, máximo 24 mensualidades"],["DIP-T20-011",0,"15 días"],["DIP-T20-012",1,"6 horas semanales"],["DIP-T20-013",3,"Diecinueve semanas"],["DIP-T20-014",0,"El fijado en convenio colectivo o por la costumbre del lugar"],["DIP-T20-015",0,"Veinte días hábiles"],["DIP-T20-016",1,"Las previstas en el artículo 45 del Estatuto de los Trabajadores"],["DIP-T20-017",1,"Diez días leves, veinte días graves y sesenta días muy graves"],["DIP-T20-018",2,"Cinco días desde la notificación de la sentencia"],["DIP-T20-019",3,"Veinte días por año, máximo nueve mensualidades"],["DIP-T20-020",0,"La reducción de vacaciones o la multa de haber"],["DIP-T21-001",2,"Por tiempo indefinido"],["DIP-T21-002",0,"Indefinida"],["DIP-T21-003",0,"6 meses"],["DIP-T21-004",0,"90 días en el año natural"],["DIP-T21-005",1,"3 meses"],["DIP-T21-006",1,"3 meses y 2 años"],["DIP-T21-007",3,"Única y vitalicia"],["DIP-T21-008",1,"La Tesorería General de la Seguridad Social"],["DIP-T21-009",0,"Antes del inicio de la prestación de servicios"],["DIP-T21-010",2,"6 días naturales"],["DIP-T21-011",2,"La empresa"],["DIP-T21-012",3,"4 años"],["DIP-T21-013",2,"Por escrito u otro medio que permita dejar constancia de la notificación"],["DIP-T21-014",3,"Entre seis meses y un año"],["DIP-T21-015",0,"Ciento veinte días en los supuestos legales"],["DIP-T21-016",3,"Con el inicio del trabajo, incluido el período de prueba"],["DIP-T21-017",1,"Empresarios y personas trabajadoras, según los conceptos de cotización"],["DIP-T21-018",3,"No, la obligación subsiste mientras continúe trabajando"],["DIP-T21-019",2,"El diez por ciento"],["DIP-T21-020",1,"Es nulo, según el artículo 143 LGSS"],["DIP-T22-001",1,"Debe respetar la Constitución, las leyes y las competencias de los órganos"],["DIP-T22-002",0,"Un organismo autónomo de la Diputación Provincial de Toledo"],["DIP-T22-003",2,"No altera por sí misma la titularidad del tributo"],["DIP-T22-004",1,"Gestionar y recaudar ingresos de derecho público"],["DIP-T22-005",3,"31 de diciembre de 2027, prorrogado automáticamente hasta nuevo acuerdo"],["DIP-T22-006",3,"No; la inspección requiere atribución competencial suficiente"],["DIP-T22-007",3,"Al Presidente de la Diputación Provincial de Toledo"],["DIP-T22-008",1,"Con carácter supletorio cuando proceda respecto de la normativa tributaria especial"],["DIP-T22-009",3,"La titularidad de sus recursos y las competencias no delegadas"],["DIP-T22-010",2,"Se integra en el presupuesto general de la entidad local"],["DIP-T22-011",0,"Ponen fin a la vía administrativa cuando las adoptan sus órganos de gobierno, dirección y administración"],["DIP-T22-012",1,"97,45 euros"],["DIP-T22-013",0,"Aprobación expresa y formal por los órganos de gobierno"],["DIP-T22-014",0,"El Pacto se limita a competencia del órgano que lo suscribe; el Acuerdo versa sobre competencia de órganos de gobierno"],["DIP-T22-015",0,"Remisión a oficina pública y publicación en boletín oficial correspondiente"],["DIP-T22-016",2,"Determinar partes, ámbito personal, funcional, territorial y temporal, preaviso y denuncia"],["DIP-T22-017",1,"Las entidades locales, sin perjuicio de las delegaciones legales"],["DIP-T22-018",2,"Las ordenanzas fiscales"],["DIP-T22-019",2,"1.327,80 euros"],["DIP-T22-020",3,"La identidad de los titulares de los órganos instructores en el BOP de Toledo"],["DIP-T23-001",0,"La empresa o Administración empleadora"],["DIP-T23-002",2,"La protección colectiva sobre la individual"],["DIP-T23-003",0,"Teórica y práctica, suficiente y adecuada"],["DIP-T23-004",3,"Interrumpir su actividad y abandonar el lugar"],["DIP-T23-005",2,"24 horas"],["DIP-T23-006",2,"Requiere consentimiento de la persona trabajadora"],["DIP-T23-007",3,"Adaptar las condiciones o el tiempo de trabajo"],["DIP-T23-008",2,"Servicio de prevención ajeno"],["DIP-T23-009",1,"1"],["DIP-T23-010",1,"50 trabajadores"],["DIP-T23-011",0,"Trimestralmente"],["DIP-T23-012",3,"Tienen carácter confidencial"],["DIP-T23-013",1,"Dos"],["DIP-T23-014",0,"Tres"],["DIP-T23-015",0,"15 días o el tiempo imprescindible ante riesgos inminentes"],["DIP-T23-016",1,"Órgano paritario y colegiado de participación"],["DIP-T23-017",3,"Primeros auxilios, lucha contra incendios y evacuación"],["DIP-T23-018",3,"No poner fuera de funcionamiento los dispositivos de seguridad existentes"],["DIP-T23-019",2,"El conjunto de medios humanos y materiales necesarios para las actividades preventivas"],["DIP-T23-020",1,"Con más de 500 trabajadores"]];
const report=read('content/diputacion-toledo/cotejo-bloque-20-23-2026-11-05.md');
let total=0,alternatives=0;
for(const n of [20,21,22,23]){
 const path='content/diputacion-toledo/tema-'+n+'/';
 const b=json(path+'preguntas.json'),x=json(path+'matriz.json'),manual=read(path+'manual.md'),sources=read(path+'fuentes.md');
 const state=n===22?'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES':'AUDITADO';
 assert.equal(b.estado,state);assert.equal(x.estado,state);
 assert.equal(b.controlBloque20261105.certificacionIntegral,false);
 assert.equal(x.controlBloque20261105.certificacionIntegral,false);
 assert.equal(b.preguntas.length,20);
 assert.match(manual,/¡Foco Examen!/);assert.match(manual,/\|---/);
 assert.match(sources,/cotejo-bloque-20-23-2026-11-05/);
 for(const q of b.preguntas){
   const [id,key,literal]=expected[total++];
   assert.equal(q.id,id);assert.equal(q.correcta,key,id);assert.equal(q.opciones[key],literal,id);assert.equal(q.respuestaLiteral,literal,id);
   assert.equal(q.opciones.length,4);alternatives+=4;
   assert.equal(new Set(q.opciones.map(x=>x.toLowerCase().trim())).size,4,id);
   assert.ok(q.justificacion.length>25&&q.trampa.length>20,id);
   assert.match(q.referencia,/https:\/\/(?:www\.boe\.es|bop\.diputoledo\.es)\//,id);
   assert.ok(report.includes(q.id),id);
 }
}
assert.equal(total,80);assert.equal(alternatives,320);
const get=(n,k)=>json('content/diputacion-toledo/tema-'+n+'/preguntas.json').preguntas.find(q=>q.id==='DIP-T'+n+'-'+String(k).padStart(3,'0'));
assert.equal(get(21,10).respuestaLiteral,'6 días naturales');
assert.equal(get(20,13).respuestaLiteral,'Diecinueve semanas');
assert.equal(get(21,19).respuestaLiteral,'El diez por ciento');
assert.equal(get(22,12).respuestaLiteral,'97,45 euros');
assert.equal(get(22,19).respuestaLiteral,'1.327,80 euros');
assert.match(get(22,11).respuestaLiteral,/vía administrativa/);
assert.match(read('content/diputacion-toledo/tema-22/manual.md'),/Estatutos completos/);
assert.match(report,/PENDIENTE Estatutos íntegros consolidados/);
console.log('C1_20_23_80Q_320A_22_CLOSED_T22_UNCERTIFIED_OK');