import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const root='content/diputacion-toledo/tema-';
const manifest=json('data/programa-diputacion-administrativo-2026.json');
assert.deepEqual(manifest.temas.filter(t=>t.numero<=11 && t.estado==='AUDITADO').map(t=>t.numero),[1,2,3,4,5,6,7,8,9,10,11]);
assert.ok(manifest.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal<=110);
const expected=[["DIP-T08-001",3,"En cualquier momento"],["DIP-T08-002",0,"Dictamen favorable del Consejo de Estado u órgano consultivo equivalente"],["DIP-T08-003",2,"6 meses"],["DIP-T08-004",1,"Actos favorables anulables"],["DIP-T08-005",0,"Dentro de 4 años"],["DIP-T08-006",3,"Errores materiales, de hecho o aritméticos"],["DIP-T08-007",1,"Alzada"],["DIP-T08-008",0,"1 mes"],["DIP-T08-009",2,"El mismo órgano que dictó el acto"],["DIP-T08-010",1,"Transcurrido un mes desde la entrada de la solicitud en el registro electrónico de la Administración competente sin resolución dictada y notificada"],["DIP-T08-011",2,"4 años"],["DIP-T08-012",3,"No, por la prohibición de reformatio in peius"],["DIP-T08-013",2,"Tres meses"],["DIP-T08-014",1,"Un mes"],["DIP-T08-015",0,"El Pleno de la Corporación o, en su defecto, su órgano colegiado superior"],["DIP-T08-016",2,"Puede entenderse estimado salvo materias expresamente exceptuadas"],["DIP-T08-017",3,"Caducidad del procedimiento"],["DIP-T08-018",3,"Tres meses"],["DIP-T08-019",1,"Desestimación presunta"],["DIP-T08-020",0,"Audiencia previa de los interesados conforme al artículo 82"],["DIP-T09-001",0,"Las personas jurídicas"],["DIP-T09-002",1,"Solo en trámites vinculados al ejercicio profesional"],["DIP-T09-003",0,"La identificación acredita identidad y la firma además voluntad y consentimiento"],["DIP-T09-004",1,"Interponer un recurso"],["DIP-T09-005",3,"La dirección electrónica cuya titularidad corresponde a una Administración, órgano o entidad"],["DIP-T09-006",0,"Todos los días del año durante las 24 horas"],["DIP-T09-007",3,"La primera hora del primer día hábil siguiente"],["DIP-T09-008",0,"Cuando se accede a su contenido"],["DIP-T09-009",1,"10 días naturales"],["DIP-T09-010",3,"No invalida la notificación"],["DIP-T09-011",2,"Realizarse íntegramente por medios electrónicos sin intervención directa de empleado público"],["DIP-T09-012",2,"Interoperabilidad"],["DIP-T09-013",1,"Sí, salvo que estén obligadas a relacionarse electrónicamente"],["DIP-T09-014",3,"En el Boletín Oficial de la Provincia y en el directorio del Punto de Acceso General electrónico correspondiente"],["DIP-T09-015",2,"La fecha de la subsanación mediante presentación electrónica"],["DIP-T09-016",3,"Sello electrónico o código seguro de verificación en los términos legales"],["DIP-T09-017",2,"Los órganos responsables de especificaciones, programación, mantenimiento, supervisión y control y el responsable a efectos de impugnación"],["DIP-T09-018",2,"La comprobación de integridad del documento accediendo a la sede electrónica correspondiente"],["DIP-T09-019",1,"RD 4/2010"],["DIP-T09-020",0,"A una Administración u organismo o entidad de Derecho público en ejercicio de sus competencias"],["DIP-T10-001",1,"La fuerza mayor"],["DIP-T10-002",3,"Efectivo, evaluable económicamente e individualizado"],["DIP-T10-003",1,"Normal o anormal"],["DIP-T10-004",2,"Año"],["DIP-T10-005",0,"Desde la curación o determinación del alcance de las secuelas"],["DIP-T10-006",1,"10 días"],["DIP-T10-007",2,"50.000 euros"],["DIP-T10-008",0,"Desestimada"],["DIP-T10-009",2,"30 días"],["DIP-T10-010",3,"A la Administración correspondiente"],["DIP-T10-011",2,"Dolo, culpa grave o negligencia grave"],["DIP-T10-012",0,"Solidaria"],["DIP-T10-013",1,"No: deben concurrir los requisitos de responsabilidad patrimonial y lesión indemnizable"],["DIP-T10-014",2,"El particular lesionado si reúne los requisitos legales"],["DIP-T10-015",3,"15"],["DIP-T10-016",3,"15 días"],["DIP-T10-017",3,"10 días"],["DIP-T10-018",0,"5 días"],["DIP-T10-019",0,"Pone fin a la vía administrativa"],["DIP-T10-020",1,"Se tramita por procedimiento ordinario"],["DIP-T11-001",0,"La Ley 39/2015"],["DIP-T11-002",0,"Las 24 horas de todos los días del año"],["DIP-T11-003",1,"En la primera hora del primer día hábil siguiente"],["DIP-T11-004",2,"10 días"],["DIP-T11-005",0,"La de la subsanación electrónica"],["DIP-T11-006",3,"10 días desde que el acto fue dictado"],["DIP-T11-007",1,"10 días naturales"],["DIP-T11-008",1,"14 años"],["DIP-T11-009",3,"Dentro de los 3 días siguientes"],["DIP-T11-010",3,"El Boletín Oficial del Estado"],["DIP-T11-011",0,"No invalida la notificación"],["DIP-T11-012",0,"Tienen la misma validez y eficacia que los originales"],["DIP-T11-013",2,"En el medio indicado por la propia convocatoria"],["DIP-T11-014",2,"En las oficinas de Correos en la forma reglamentaria"],["DIP-T11-015",3,"Digitalizarlos para incorporarlos al expediente administrativo electrónico y devolver los originales salvo excepciones"],["DIP-T11-016",2,"La entrada de documentos recibidos y la salida de los despachados definitivamente"],["DIP-T11-017",1,"Sí, según las características de los servicios de la entidad"],["DIP-T11-018",2,"El número de orden correlativo y la fecha de ingreso"],["DIP-T11-019",3,"En las representaciones diplomáticas u oficinas consulares españolas en el extranjero"],["DIP-T11-020",1,"Un recibo automático con copia autenticada, fecha, hora y número de entrada"]];
let count=0,options=0;
const report=read('content/diputacion-toledo/cierre-editorial-08-11-2026-11-05.md');
for(let n=8;n<=11;n++){
 const folder=root+String(n).padStart(2,'0')+'/';
 const m=read(folder+'manual.md'),s=read(folder+'fuentes.md'),q=json(folder+'preguntas.json'),x=json(folder+'matriz.json');
 assert.equal(q.estado,'AUDITADO');assert.equal(x.estado,'AUDITADO');
 assert.equal(q.cierreEditorialBloque20261105.certificacionIntegral,false);
 assert.equal(x.cierreEditorialBloque20261105.certificacionIntegral,false);
 assert.equal(q.preguntas.length,20);
 assert.match(m,/Cierre de auditoría jurídica y pedagógica/);
 assert.match(m,/¡Foco Examen!/);
 assert.match(m,/\|---/);
 assert.match(s,/cierre-editorial-08-11-2026-11-05/);
 for(const it of q.preguntas){
  const [id,key,literal]=expected[count++];
  assert.equal(it.id,id);assert.equal(it.correcta,key,it.id);assert.equal(it.opciones[key],literal,it.id);assert.equal(it.respuestaLiteral,literal,it.id);
  assert.equal(it.opciones.length,4);assert.equal(new Set(it.opciones).size,4,it.id);
  options+=4;
  assert.match(it.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/);
  assert.ok(it.justificacion.length>=28,it.id);assert.ok(it.trampa.length>=28,it.id);
  assert.ok(report.includes(it.id),'No aparece en informe: '+it.id);
 }
}
assert.equal(count,80);assert.equal(options,320);
const get=(n,id)=>json(root+String(n).padStart(2,'0')+'/preguntas.json').preguntas.find(q=>q.id===id);
assert.match(get(8,'DIP-T08-010').pregunta,/117\.3/);
assert.match(get(8,'DIP-T08-010').respuestaLiteral,/registro electrónico/);
assert.match(get(9,'DIP-T09-014').pregunta,/10\.2/);
assert.match(get(9,'DIP-T09-014').respuestaLiteral,/Boletín Oficial de la Provincia/);
assert.match(get(10,'DIP-T10-013').pregunta,/32\.1/);
assert.match(get(10,'DIP-T10-013').respuestaLiteral,/No:/);
assert.match(get(11,'DIP-T11-013').respuestaLiteral,/medio indicado/);
assert.match(get(11,'DIP-T11-003').pregunta,/días hábiles/);
assert.match(get(11,'DIP-T11-007').pregunta,/obligatoria o se eligió expresamente/);
assert.match(read(root+'10/manual.md'),/solidaria en todo caso/);
assert.match(read(root+'09/manual.md'),/Boletín Oficial de la Provincia/);
assert.match(report,/320 alternativas/);
console.log('DIP_C1_T08_T11_80_320_AUDITADO_EDITORIAL_AND_LEGAL_EXCEPTIONS_OK');
