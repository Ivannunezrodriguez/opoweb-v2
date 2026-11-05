import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const root='content/diputacion-toledo/tema-';
const manifest=json('data/programa-diputacion-administrativo-2026.json');
assert.deepEqual(manifest.temas.filter(t=>t.estado==='AUDITADO').map(t=>t.numero),[1,2,3,4,5,6,7]);
assert.equal(manifest.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal,114);
const snapshot=[["DIP-T04-001",2,"El régimen jurídico del sector público"],["DIP-T04-002",1,"Irrenunciable"],["DIP-T04-003",3,"Desconcentración"],["DIP-T04-004",2,"La adopción de disposiciones de carácter general"],["DIP-T04-005",3,"Acuerdo motivado"],["DIP-T04-006",3,"Actividades materiales o técnicas"],["DIP-T04-007",2,"No altera la competencia"],["DIP-T04-008",0,"Vacante, ausencia o enfermedad"],["DIP-T04-009",2,"Presidente, secretario y al menos la mitad de sus miembros"],["DIP-T04-010",3,"Tres días"],["DIP-T04-011",0,"Voluntaria y acordada"],["DIP-T04-012",0,"La conferencia sectorial"],["DIP-T04-013",1,"Sí, si asisten todos los miembros y la mayoría declara la urgencia"],["DIP-T04-014",0,"No"],["DIP-T04-015",1,"En el diario oficial correspondiente"],["DIP-T04-016",3,"Cuando estén reunidos el secretario y todos los miembros (o suplentes) y así lo decidan todos"],["DIP-T04-017",1,"Por mayoría de votos"],["DIP-T04-018",2,"Se abstiene y comunica la causa al superior inmediato"],["DIP-T04-019",0,"Al día siguiente"],["DIP-T04-020",1,"Compromisos voluntarios para una acción común"],["DIP-T04-021",0,"No, una vez emitido ese informe preceptivo no podrá delegarse la competencia para resolver"],["DIP-T05-001",1,"Tres meses"],["DIP-T05-002",3,"Las personas jurídicas"],["DIP-T05-003",2,"Diez días"],["DIP-T05-004",2,"Cinco años"],["DIP-T05-005",1,"Estimatorio, salvo excepciones legales"],["DIP-T05-006",1,"Quince días"],["DIP-T05-007",0,"Sábados, domingos y festivos"],["DIP-T05-008",0,"Se prorroga al primer día hábil siguiente"],["DIP-T05-009",3,"La mitad"],["DIP-T05-010",0,"Los de presentación de solicitudes y recursos"],["DIP-T05-011",2,"Solo cuando lo prevea una norma con rango de ley"],["DIP-T05-012",1,"Tres meses"],["DIP-T05-013",0,"Quien tenga derechos que puedan resultar afectados por la decisión"],["DIP-T05-014",3,"Se incorporan al expediente administrativo electrónico, devolviéndose los originales, salvo excepciones legales"],["DIP-T05-015",0,"Todos los días del año durante las 24 horas"],["DIP-T05-016",2,"Seis meses"],["DIP-T05-017",3,"Caducidad"],["DIP-T05-018",1,"El primer día hábil siguiente, salvo que una norma permita expresamente la recepción en inhábil"],["DIP-T05-019",2,"Concluye el mismo día ordinal en el mes de vencimiento; si no existe equivalente, el último día del mes"],["DIP-T05-020",3,"No: la petición y la decisión de ampliación deben producirse antes del vencimiento"],["DIP-T06-001",1,"Conocer el estado de tramitación del procedimiento"],["DIP-T06-002",1,"15 días"],["DIP-T06-003",3,"No convierte por sí sola al denunciante en interesado"],["DIP-T06-004",3,"10 días"],["DIP-T06-005",0,"10 días"],["DIP-T06-006",2,"De 10 a 30 días"],["DIP-T06-007",1,"De 10 a 15 días"],["DIP-T06-008",3,"20 días"],["DIP-T06-009",1,"No; la omisión solo produce pérdida del derecho al trámite, sin caducidad por esa causa"],["DIP-T06-010",2,"20 % y 20 %, acumulables"],["DIP-T06-011",3,"Año"],["DIP-T06-012",2,"30 días"],["DIP-T06-013",0,"5 días"],["DIP-T06-014",3,"Solo se realiza cuando la resolución vaya a ser desfavorable al interesado"],["DIP-T06-015",2,"5 días"],["DIP-T06-016",0,"Debe seguirse la tramitación ordinaria"],["DIP-T06-017",1,"Facultativos y no vinculantes"],["DIP-T06-018",0,"10 días"],["DIP-T06-019",2,"No se admite esa oposición expresa en el supuesto del artículo 96.5"],["DIP-T06-020",0,"Se continúa por la tramitación ordinaria"],["DIP-T07-001",3,"El acto administrativo produce efectos jurídicos concretos y no tiene carácter normativo general"],["DIP-T07-002",1,"El que produzca indefensión o perjuicio irreparable"],["DIP-T07-003",0,"Materia o territorio"],["DIP-T07-004",1,"Los que limiten derechos subjetivos o intereses legítimos"],["DIP-T07-005",1,"Desde la fecha en que se dicten, salvo que dispongan otra cosa"],["DIP-T07-006",3,"Cuando existieran ya los presupuestos de hecho y no se lesionen derechos de terceros"],["DIP-T07-007",1,"10 días"],["DIP-T07-008",2,"Nulo de pleno derecho"],["DIP-T07-009",1,"Anulabilidad"],["DIP-T07-010",0,"Cuando falten requisitos formales indispensables o se produzca indefensión"],["DIP-T07-011",2,"Convalidación"],["DIP-T07-012",0,"No quedan invalidados automáticamente por la nulidad o anulabilidad del acto anterior"],["DIP-T07-013",3,"Una sola vez, en una hora distinta y dentro de los tres días siguientes"],["DIP-T07-014",3,"Tras diez días naturales desde su puesta a disposición"],["DIP-T07-015",2,"En el Boletín Oficial del Estado"],["DIP-T07-016",3,"La que se realice en el medio indicado por la convocatoria"],["DIP-T07-017",0,"Son nulos de pleno derecho"],["DIP-T07-018",2,"Una incompetencia no determinante de nulidad"],["DIP-T07-019",2,"La indicación de si el acto pone fin a la vía administrativa y los recursos procedentes"],["DIP-T07-020",0,"Los actos y trámites cuyo contenido se habría mantenido igual de no cometerse la infracción"]];
const report=read('content/diputacion-toledo/cierre-editorial-04-07-2026-11-05.md');
let total=0,options=0;
for(let n=4;n<=7;n++){
 const path=root+String(n).padStart(2,'0')+'/';
 const manual=read(path+'manual.md'),source=read(path+'fuentes.md');
 const bank=json(path+'preguntas.json'),matrix=json(path+'matriz.json');
 assert.equal(bank.estado,'AUDITADO'); assert.equal(matrix.estado,'AUDITADO');
 assert.equal(bank.cierreEditorialBloque20261105.certificacionIntegral,false);
 assert.equal(matrix.cierreEditorialBloque20261105.certificacionIntegral,false);
 assert.match(manual,/Cierre jurídico del bloque 4–7/);
 assert.match(manual,/¡Foco Examen!/);
 assert.match(manual,/\|---/);
 assert.match(source,/Cierre editorial agrupado/);
 const expected={4:21,5:20,6:20,7:20}[n];
 assert.equal(bank.preguntas.length,expected);
 for(const q of bank.preguntas){
  const [id,key,literal]=snapshot[total++];
  assert.equal(q.id,id);
  assert.equal(q.correcta,key);
  assert.equal(q.opciones[key],literal);
  assert.equal(q.respuestaLiteral,literal);
  assert.equal(q.opciones.length,4);
  options+=q.opciones.length;
  assert.equal(new Set(q.opciones).size,4);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-2015-/);
  assert.ok(q.trampa.length>=25&&q.justificacion.length>=25,q.id);
  assert.ok(report.includes(q.id),'Not in report '+q.id);
 }
}
assert.equal(total,81);assert.equal(options,324);
const t4=json(root+'04/preguntas.json'),t6=json(root+'06/preguntas.json'),t7=json(root+'07/preguntas.json');
assert.match(t4.preguntas[20].pregunta,/9\.5/);
assert.match(t4.preguntas[20].respuestaLiteral,/una vez emitido/);
assert.match(t6.preguntas[8].pregunta,/no indispensable/);
assert.match(t6.preguntas[8].respuestaLiteral,/pérdida del derecho al trámite/);
assert.match(t7.preguntas[11].pregunta,/49\.1/);
assert.match(t7.preguntas[11].respuestaLiteral,/No quedan invalidados automáticamente/);
assert.match(read(root+'04/manual.md'),/\*\*Solo si niega\*\* la causa/);
assert.match(read(root+'06/manual.md'),/sancionadores por infracción leve/);
assert.match(report,/324 alternativas/);
console.log('DIPUTACION_C1_T04_T07_CIERRE_EDITORIAL_81_PREGUNTAS_324_OPCIONES_OK');
