import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const manifest=json('data/programa-diputacion-administrativo-2026.json');
assert.deepEqual(manifest.temas.filter(t=>t.numero<=19 && t.estado==='AUDITADO').map(t=>t.numero),Array.from({length:19},(_,i)=>i+1));
assert.ok(manifest.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal<=102);
const expected=[["DIP-T16-001",2,"La Ley 9/2017, de Contratos del Sector Público"],["DIP-T16-002",2,"El 10 % de los recursos ordinarios y, en todo caso, 6.000.000 €"],["DIP-T16-003",0,"Es un órgano de asistencia técnica especializada"],["DIP-T16-004",1,"El valor estimado del contrato"],["DIP-T16-005",2,"La mejor relación calidad-precio"],["DIP-T16-006",3,"5 % del precio final ofertado, excluido el IVA"],["DIP-T16-007",0,"15 días hábiles"],["DIP-T16-008",3,"El 20 % del precio inicial"],["DIP-T16-009",0,"20 % ejecutado y 1 año"],["DIP-T16-010",0,"Debe documentarse en acta y puede generar indemnización"],["DIP-T16-011",2,"Cumplimiento o resolución"],["DIP-T16-012",3,"30 días"],["DIP-T16-013",1,"El 3 % del presupuesto base de licitación, excluido el IVA"],["DIP-T16-014",2,"El Pleno, conforme a la disposición adicional segunda de la LCSP"],["DIP-T16-015",1,"Responder a supuestos legales tasados sin alterar la naturaleza global del contrato"],["DIP-T16-016",3,"Intereses de demora y compensación por costes de cobro según la normativa"],["DIP-T16-017",1,"Con su formalización, salvo las excepciones que establece la ley"],["DIP-T16-018",3,"El procedimiento abierto"],["DIP-T16-019",0,"Se calcula sin IVA, teniendo en cuenta prórrogas y modificaciones previstas en los términos legales"],["DIP-T16-020",1,"La muerte o incapacidad sobrevenida del contratista individual, con las salvedades legales"],["DIP-T17-001",0,"16 años"],["DIP-T17-002",3,"Igualdad, mérito, capacidad y publicidad"],["DIP-T17-003",0,"Oposición y concurso-oposición"],["DIP-T17-004",3,"Al finalizar el plazo de solicitudes y mantenerse hasta la toma de posesión o contrato"],["DIP-T17-005",3,"No, sus funciones son de confianza o asesoramiento especial"],["DIP-T17-006",0,"Solo una expectativa hasta completar nombramiento, acatamiento y toma de posesión"],["DIP-T17-007",0,"Cambio de puesto por concurso"],["DIP-T17-008",1,"Es firme en vía administrativa"],["DIP-T17-009",1,"Pérdida respecto de todos los empleos o cargos públicos"],["DIP-T17-010",3,"No, puede ingresarse de nuevo superando el proceso selectivo correspondiente"],["DIP-T17-011",0,"No, quedan exceptuados determinados empleos vinculados al ejercicio del poder público o salvaguarda de intereses generales"],["DIP-T17-012",1,"Es excepcional y requiere previsión legal"],["DIP-T17-013",2,"Adquirir simultáneamente otra nacionalidad legalmente habilitante"],["DIP-T17-014",2,"La separación es sanción disciplinaria y la inhabilitación deriva de resolución judicial firme"],["DIP-T17-015",3,"Mientras exista expediente disciplinario o auto de procesamiento o apertura de juicio oral por delito"],["DIP-T17-016",1,"Por escrito y con aceptación expresa de la Administración"],["DIP-T17-017",1,"La jubilación total"],["DIP-T17-018",2,"Produce pérdida de condición respecto de empleos o cargos especificados en la sentencia"],["DIP-T17-019",2,"Por pérdida de nacionalidad o jubilación por incapacidad permanente para el servicio"],["DIP-T17-020",2,"Excepcional y sujeta a valoración de las circunstancias y entidad del delito"],["DIP-T18-001",3,"El concurso"],["DIP-T18-002",2,"Progresar de tramo sin cambiar de puesto"],["DIP-T18-003",1,"Igualdad, mérito, capacidad y publicidad"],["DIP-T18-004",3,"Exige convocatoria pública"],["DIP-T18-005",3,"Comisión de servicios"],["DIP-T18-006",2,"Carrera, formación, provisión y determinadas retribuciones"],["DIP-T18-007",0,"La negociación colectiva"],["DIP-T18-008",3,"No tiene deber de obedecerla"],["DIP-T18-009",1,"Servicio en otras Administraciones públicas"],["DIP-T18-010",2,"Cautelar"],["DIP-T18-011",2,"La intimidad y los datos personales de la víctima"],["DIP-T18-012",0,"Adscripción provisional"],["DIP-T18-013",0,"Cuatro años"],["DIP-T18-014",3,"Entre tres y cinco"],["DIP-T18-015",1,"No retribuido"],["DIP-T18-016",2,"La aprobación de sistemas objetivos de evaluación del desempeño"],["DIP-T18-017",1,"La antigüedad, sin perjuicio de valorar experiencia o tiempo de adquisición de méritos"],["DIP-T18-018",0,"Audiencia previa de la persona interesada y resolución motivada"],["DIP-T18-019",1,"La conformidad del funcionario titular"],["DIP-T18-020",0,"La expectativa de destino"],["DIP-T19-001",2,"Muy graves, graves y leves"],["DIP-T19-002",3,"Sujeto, hecho y fundamento"],["DIP-T19-003",1,"A los 3 años"],["DIP-T19-004",2,"A los 6 meses"],["DIP-T19-005",0,"Al año"],["DIP-T19-006",1,"Se reanuda el plazo de prescripción"],["DIP-T19-007",0,"2 años"],["DIP-T19-008",0,"No"],["DIP-T19-009",1,"12 meses"],["DIP-T19-010",3,"Separación del servicio"],["DIP-T19-011",3,"No"],["DIP-T19-012",0,"Vinculan a la Administración en el procedimiento disciplinario"],["DIP-T19-013",1,"Desde el cese de su comisión"],["DIP-T19-014",3,"Desde la firmeza administrativa de la resolución sancionadora"],["DIP-T19-015",1,"Procedimiento sumario y simplificado, con audiencia de la persona interesada"],["DIP-T19-016",2,"Se duplica el plazo de cancelación"],["DIP-T19-017",3,"Que instrucción y sanción correspondan a órganos diferentes"],["DIP-T19-018",0,"Cuando sean firmes en vía administrativa"],["DIP-T19-019",2,"Seis meses"],["DIP-T19-020",2,"Imponer una segunda sanción disciplinaria por los mismos hechos y fundamento"]];
const report=read('content/diputacion-toledo/cierre-editorial-16-19-2026-11-05.md');
let total=0,options=0;
for(let n=16;n<=19;n++){
 const base='content/diputacion-toledo/tema-'+n+'/';
 const manual=read(base+'manual.md'),source=read(base+'fuentes.md'),bank=json(base+'preguntas.json'),matrix=json(base+'matriz.json');
 assert.equal(bank.estado,'AUDITADO');assert.equal(matrix.estado,'AUDITADO');
 assert.equal(bank.cierreEditorialC1_16_19_20261105.certificacionIntegral,false);
 assert.equal(matrix.cierreEditorialC1_16_19_20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,20);
 assert.match(manual,/Cierre jurídico-pedagógico del bloque 16–19/);
 assert.match(manual,/¡Foco Examen!/);
 assert.match(manual,/\|---/);
 assert.match(source,/cierre-editorial-16-19-2026-11-05/);
 for(const q of bank.preguntas){
  const [id,key,literal]=expected[total++];
  assert.equal(q.id,id);assert.equal(q.correcta,key,id);
  assert.equal(q.respuestaLiteral,literal,id);
  assert.equal(q.opciones[key],literal,id);
  assert.equal(q.opciones.length,4);options+=4;
  assert.equal(new Set(q.opciones.map(x=>x.trim().toLowerCase())).size,4,id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/);
  assert.ok(q.justificacion.trim().length>25,id);
  assert.ok(report.includes(id),'Falta pregunta en informe '+id);
 }
}
assert.equal(total,80);assert.equal(options,320);
const get=(n,id)=>json('content/diputacion-toledo/tema-'+n+'/preguntas.json').preguntas.find(q=>q.id===id);
assert.match(get(16,'DIP-T16-013').respuestaLiteral,/3 %/);
assert.match(get(16,'DIP-T16-015').pregunta,/205/);
assert.match(get(16,'DIP-T16-016').respuestaLiteral,/Intereses de demora/);
assert.match(get(16,'DIP-T16-017').respuestaLiteral,/formalización/);
assert.match(get(16,'DIP-T16-020').pregunta,/211/);
assert.match(json('content/diputacion-toledo/tema-16/matriz.json').datosTest.revisionPrecios,/1 año/);
assert.doesNotMatch(json('content/diputacion-toledo/tema-16/matriz.json').datosTest.revisionPrecios,/2 años/);
assert.match(get(17,'DIP-T17-013').pregunta,/nacionalidad/);
assert.match(get(17,'DIP-T17-015').pregunta,/renuncia/);
assert.match(get(18,'DIP-T18-017').respuestaLiteral,/antigüedad/);
assert.match(get(19,'DIP-T19-015').respuestaLiteral,/con audiencia/);
assert.match(get(19,'DIP-T19-020').pregunta,/penal condenatoria/);
assert.match(report,/320 alternativas/);
console.log('DIP_C1_T16_T19_EDITORIAL_80Q_320A_10_REPETICIONES_ELIMINADAS_1_ANO_OK');