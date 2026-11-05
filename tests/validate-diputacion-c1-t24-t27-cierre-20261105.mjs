import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const prog=json('data/programa-diputacion-administrativo-2026.json');
const audited=prog.temas.filter(t=>t.estado==='AUDITADO').map(t=>t.numero);
assert.deepEqual(audited,[...Array.from({length:21},(_,i)=>i+1),23,24,25,26,27]);
assert.equal(prog.temas[21].estado,'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
assert.equal(prog.cierreEditorialC1Bloques20261105.temasConCierreEditorialDemostrado,26);
assert.equal(prog.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal,95);
const expected=[["DIP-T24-001",2,"Una disposición aparentemente neutra que ocasiona una desventaja particular salvo justificación objetiva y proporcional"],["DIP-T24-002",1,"Discriminación directa por razón de sexo"],["DIP-T24-003",1,"No superen el 60 % ni sean menos del 40 %"],["DIP-T24-004",3,"El primero exige naturaleza sexual y el segundo se basa en el sexo de la persona"],["DIP-T24-005",1,"Razonables, proporcionadas y temporales mientras subsista la desigualdad"],["DIP-T24-006",0,"Integrar la perspectiva de género en todas las políticas y actuaciones públicas"],["DIP-T24-007",1,"Nulos y pueden generar reparación o indemnización"],["DIP-T24-008",0,"Justificar objetiva y razonablemente la medida y su proporcionalidad"],["DIP-T24-009",0,"Autonómica de Castilla-La Mancha"],["DIP-T24-010",2,"Los efectos diferenciados de una medida sobre mujeres y hombres"],["DIP-T24-011",0,"Objetivos, estrategias, medidas y seguimiento a partir de un diagnóstico"],["DIP-T24-012",3,"Exige también remover obstáculos y corregir desigualdades reales"],["DIP-T24-013",2,"Artículo 15"],["DIP-T24-014",2,"No menos del 40 % ni más del 60 % de cada sexo"],["DIP-T24-015",1,"Ley 12/2010, artículo 6.3"],["DIP-T24-016",0,"La Comisión de Igualdad prevista en el artículo 15"],["DIP-T24-017",3,"Inclusivo de mujeres y hombres, eliminando sesgos sexistas, incluso indirectos"],["DIP-T24-018",3,"Frente a represalias o trato adverso por su queja, reclamación, denuncia, demanda o recurso"],["DIP-T24-019",2,"Unidades de igualdad de género"],["DIP-T24-020",3,"Promover la presencia equilibrada de mujeres y hombres en órganos de selección y valoración"],["DIP-T25-001",1,"Cuando se realiza el hecho imponible"],["DIP-T25-002",1,"En la exención se realiza el hecho imponible y en la no sujeción no"],["DIP-T25-003",0,"Realiza el hecho imponible"],["DIP-T25-004",0,"Aplicando a la base imponible las reducciones previstas legalmente"],["DIP-T25-005",1,"No"],["DIP-T25-006",2,"4 años"],["DIP-T25-007",3,"IBI, IAE e IVTM"],["DIP-T25-008",2,"No altera la titularidad del tributo"],["DIP-T25-009",3,"Comprobación limitada"],["DIP-T25-010",0,"Tiene un alcance propio y limitado por la ley"],["DIP-T25-011",1,"El sujeto pasivo que, por imposición de la ley, cumple la obligación principal en lugar del contribuyente"],["DIP-T25-012",2,"Revisión de actos nulos de pleno derecho"],["DIP-T25-013",3,"20 de abril o siguiente hábil"],["DIP-T25-014",2,"5 de mayo o siguiente hábil"],["DIP-T25-015",2,"Del 1 de septiembre al 20 de noviembre"],["DIP-T25-016",3,"Un mes desde el día siguiente a la notificación"],["DIP-T25-017",0,"El órgano de la entidad local que dictó el acto"],["DIP-T25-018",3,"Se entiende desestimado, sin desaparecer el deber de resolver"],["DIP-T25-019",1,"Diez días"],["DIP-T25-020",0,"No"],["DIP-T26-001",2,"El día 20 del mes siguiente"],["DIP-T26-002",3,"El día 5 del segundo mes siguiente"],["DIP-T26-003",0,"2 meses"],["DIP-T26-004",0,"Impide el inicio del periodo ejecutivo, pero no el interés de demora"],["DIP-T26-005",2,"Un crédito reconocido a favor del obligado"],["DIP-T26-006",3,"4 años"],["DIP-T26-007",0,"5 %"],["DIP-T26-008",1,"10 %"],["DIP-T26-009",1,"La providencia de apremio"],["DIP-T26-010",3,"El día 20 del mismo mes"],["DIP-T26-011",2,"No suspende automáticamente, salvo que concurran los requisitos legales"],["DIP-T26-012",0,"1 mes"],["DIP-T26-013",3,"20 %"],["DIP-T26-014",3,"Cuando corresponde el recargo de apremio ordinario del 20 %"],["DIP-T26-015",0,"Hasta el 5 del mes siguiente o hábil posterior"],["DIP-T26-016",2,"No, los recargos ejecutivo, reducido y ordinario son incompatibles entre sí"],["DIP-T26-017",1,"Prescripción del derecho a exigir el pago"],["DIP-T26-018",1,"Tanto en voluntaria como en ejecutiva, salvo deudas legalmente excluidas"],["DIP-T26-019",1,"La de deudas tributarias en período ejecutivo con créditos reconocidos a favor del obligado, en los términos legales"],["DIP-T26-020",2,"La misma fuerza ejecutiva que una sentencia judicial para proceder contra bienes y derechos del obligado"],["DIP-T27-001",3,"El año natural"],["DIP-T27-002",2,"El presupuesto de la entidad, sus organismos autónomos y las previsiones de sociedades íntegramente locales"],["DIP-T27-003",3,"Adaptar la normativa presupuestaria a la organización de la entidad sin contradecir normas superiores"],["DIP-T27-004",2,"15 de septiembre"],["DIP-T27-005",1,"La Presidencia"],["DIP-T27-006",3,"15 de octubre"],["DIP-T27-007",2,"15 días"],["DIP-T27-008",2,"Se considera definitivamente aprobado"],["DIP-T27-009",0,"1 mes"],["DIP-T27-010",0,"31 de diciembre del año anterior"],["DIP-T27-011",0,"Se prorroga automáticamente el presupuesto anterior"],["DIP-T27-012",1,"Los destinados a programas que debían concluir o financiados con ingresos específicos o afectados"],["DIP-T27-013",3,"El anexo de personal de la entidad local"],["DIP-T27-014",3,"A seis meses del ejercicio corriente"],["DIP-T27-015",1,"Cuatro años"],["DIP-T27-016",2,"Mediante un acuerdo único que detalle los presupuestos integrantes, sin aprobación separada"],["DIP-T27-017",0,"La omisión del crédito necesario para atender obligaciones exigibles de la entidad"],["DIP-T27-018",1,"Resumido por capítulos en el Boletín Oficial de la Provincia, con las demás publicaciones legalmente exigidas"],["DIP-T27-019",1,"Una vez publicado en la forma legalmente prevista"],["DIP-T27-020",0,"Recurso contencioso-administrativo"]];
const report=read('content/diputacion-toledo/cierre-editorial-24-27-2026-11-05.md');
let idx=0,alternatives=0;
for(const n of [24,25,26,27]){
 const base='content/diputacion-toledo/tema-'+n+'/';
 const bank=json(base+'preguntas.json'),matrix=json(base+'matriz.json'),manual=read(base+'manual.md'),sources=read(base+'fuentes.md');
 assert.equal(bank.estado,'AUDITADO');assert.equal(matrix.estado,'AUDITADO');
 assert.equal(bank.cierreEditorialC1_24_27_20261105.certificacionIntegral,false);
 assert.equal(matrix.cierreEditorialC1_24_27_20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,20);
 assert.match(manual,/Cierre jurídico-pedagógico/);
 assert.match(manual,/¡Foco Examen!/);
 assert.match(manual,/\|---/);
 assert.match(sources,/cierre-editorial-24-27-2026-11-05/);
 if(n>=25)assert.equal(matrix.ultimaActualizacionTRLHL,'2026-10-07');
 for(const q of bank.preguntas){
  const [id,k,literal]=expected[idx++];
  assert.equal(q.id,id);assert.equal(q.correcta,k,id);assert.equal(q.opciones[k],literal,id);assert.equal(q.respuestaLiteral,literal,id);
  assert.equal(q.opciones.length,4,id);assert.equal(new Set(q.opciones.map(z=>z.toLowerCase().trim())).size,4,id);
  assert.ok(q.justificacion.length>25&&q.trampa.length>20,id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/);
  assert.ok(report.includes(id),'Missing report id '+id);
  alternatives+=4;
 }
}
assert.equal(idx,80);assert.equal(alternatives,320);
const get=(n,k)=>json('content/diputacion-toledo/tema-'+n+'/preguntas.json').preguntas.find(q=>q.id==='DIP-T'+n+'-'+String(k).padStart(3,'0'));
assert.match(get(24,17).respuestaLiteral,/Inclusivo/);
assert.match(get(24,18).pregunta,/artículo 9/);
assert.match(get(24,19).respuestaLiteral,/Unidades de igualdad/);
assert.match(get(25,11).pregunta,/36\.3/);
assert.match(get(26,14).respuestaLiteral,/recargo de apremio ordinario/);
assert.match(get(26,16).respuestaLiteral,/incompatibles/);
assert.match(get(26,19).pregunta,/73\.1/);
assert.match(get(27,16).respuestaLiteral,/acuerdo único/);
assert.match(get(27,17).pregunta,/170\.2/);
assert.match(get(27,18).respuestaLiteral,/Boletín Oficial de la Provincia/);
assert.match(report,/320 alternativas/);
console.log('DIP_C1_T24_T27_80Q_320A_16_DUPLICATES_REPLACED_OK');