import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const manifest=json('data/programa-diputacion-administrativo-2026.json');
assert.deepEqual(manifest.temas.filter(t=>t.estado==='AUDITADO').map(t=>t.numero),Array.from({length:15},(_,i)=>i+1));
assert.equal(manifest.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal,106);
const keys=[["DIP-T12-001",0,"Municipios, provincias y comunidades autónomas"],["DIP-T12-002",2,"Capacidad de gestionar intereses propios dentro de la ley"],["DIP-T12-003",0,"Ley orgánica"],["DIP-T12-004",1,"Los municipios"],["DIP-T12-005",3,"Entidad local, agrupación de municipios y división territorial para actividades del Estado"],["DIP-T12-006",0,"Tributos propios y participación en tributos estatales y autonómicos"],["DIP-T12-007",0,"Ley 7/1985"],["DIP-T12-008",2,"El municipio"],["DIP-T12-009",2,"Solo pueden determinarse por ley"],["DIP-T12-010",3,"5 años"],["DIP-T12-011",1,"Dentro de las competencias y con sujeción a la ley"],["DIP-T12-012",0,"Legalidad"],["DIP-T12-013",3,"Municipio, provincia e isla en los archipiélagos balear y canario"],["DIP-T12-014",2,"Las mancomunidades de municipios"],["DIP-T12-015",1,"Potestad reglamentaria y de autoorganización"],["DIP-T12-016",1,"Que no se comprometa la sostenibilidad financiera ni exista ejecución simultánea del mismo servicio con otra Administración"],["DIP-T12-017",3,"Informe previo y vinculante de la Administración competente por materia y de la que tenga la tutela financiera"],["DIP-T12-018",2,"Se garantiza el derecho a intervenir en asuntos que afecten directamente a sus intereses, según descentralización, proximidad, eficacia y eficiencia"],["DIP-T12-019",3,"Gestionar ordinariamente servicios propios de la Administración autonómica según Estatutos y legislación autonómica"],["DIP-T12-020",1,"Las funciones de coordinación son compatibles con la autonomía local"],["DIP-T13-001",1,"Territorio, población y organización"],["DIP-T13-002",3,"4.000 habitantes"],["DIP-T13-003",0,"En el momento de la inscripción en el padrón"],["DIP-T13-004",3,"Al ayuntamiento"],["DIP-T13-005",0,"Cada 2 años"],["DIP-T13-006",2,"En los de más de 5.000 habitantes"],["DIP-T13-007",3,"Todos los concejales, presididos por el alcalde"],["DIP-T13-008",2,"Un tercio del número legal de miembros"],["DIP-T13-009",1,"Biblioteca pública"],["DIP-T13-010",1,"15 de octubre"],["DIP-T13-011",0,"15 días"],["DIP-T13-012",2,"Se prorroga automáticamente el anterior con los ajustes legales"],["DIP-T13-013",1,"La promoción de igualdad de oportunidades, no discriminación y accesibilidad universal de personas con discapacidad"],["DIP-T13-014",3,"Protección civil"],["DIP-T13-015",1,"Transporte colectivo urbano de viajeros y medio ambiente urbano"],["DIP-T13-016",0,"El Pleno de la corporación"],["DIP-T13-017",3,"Se considera definitivamente aprobado"],["DIP-T13-018",0,"El Pleno dispone de un mes para resolverlas"],["DIP-T13-019",2,"En el ejercicio correspondiente una vez publicado en la forma prevista legalmente"],["DIP-T13-020",2,"Los créditos de servicios o programas que debían terminar el ejercicio anterior o financiados con ingresos específicos o afectados"],["DIP-T14-001",1,"Una entidad local determinada por la agrupación de municipios, con personalidad jurídica propia"],["DIP-T14-002",2,"Ley orgánica"],["DIP-T14-003",1,"Garantizar la solidaridad y el equilibrio intermunicipales"],["DIP-T14-004",3,"20.000 habitantes"],["DIP-T14-005",2,"Junta de Gobierno"],["DIP-T14-006",0,"Un tercio del número legal"],["DIP-T14-007",2,"Presidencia y todos los diputados provinciales"],["DIP-T14-008",3,"27"],["DIP-T14-009",3,"27 diputados"],["DIP-T14-010",2,"Un diputado"],["DIP-T14-011",1,"Indirectamente entre concejales, según los resultados por partido judicial"],["DIP-T14-012",1,"Mayoría absoluta"],["DIP-T14-013",1,"Cuatro años"],["DIP-T14-014",0,"25"],["DIP-T14-015",0,"31"],["DIP-T14-016",3,"La Junta Electoral Provincial"],["DIP-T14-017",3,"Simple"],["DIP-T14-018",0,"Mesa de Edad"],["DIP-T14-019",0,"Presidente, vicepresidentes, Junta de Gobierno y Pleno"],["DIP-T14-020",2,"Secretaría e intervención"],["DIP-T15-001",1,"La asociación voluntaria de municipios para ejecutar obras o servicios comunes"],["DIP-T15-002",2,"No"],["DIP-T15-003",3,"Una ley de la comunidad autónoma"],["DIP-T15-004",1,"Una gran aglomeración urbana con vínculos económicos y sociales intensos"],["DIP-T15-005",3,"La Administración del Estado, los ayuntamientos y las diputaciones afectadas"],["DIP-T15-006",2,"Sus estatutos"],["DIP-T15-007",3,"En el término municipal del municipio al que pertenece"],["DIP-T15-008",0,"No"],["DIP-T15-009",2,"Sí, si lo permiten las normativas autonómicas afectadas"],["DIP-T15-010",0,"La autonomía municipal y los servicios mínimos municipales"],["DIP-T15-011",1,"La Ley 3/1991, de 14 de marzo"],["DIP-T15-012",1,"La población interesada o el Ayuntamiento correspondiente"],["DIP-T15-013",0,"Los concejales de todos los municipios promotores reunidos en asamblea"],["DIP-T15-014",0,"Los Plenos de todos los ayuntamientos integrantes"],["DIP-T15-015",2,"Informe de la Diputación o Diputaciones interesadas"],["DIP-T15-016",0,"Dos quintas partes de los municipios afectados que representen al menos la mitad del censo electoral"],["DIP-T15-017",1,"Informe favorable de las Diputaciones Provinciales correspondientes"],["DIP-T15-018",3,"Mediante ley autonómica, previa audiencia de Administración del Estado y entidades locales afectadas"],["DIP-T15-019",3,"Carecen de personalidad jurídica"],["DIP-T15-020",2,"Que resulte una opción más eficiente para gestionar núcleos separados"]];
let total=0,options=0;
const report=read('content/diputacion-toledo/cierre-editorial-12-15-2026-11-05.md');
for(let n=12;n<=15;n++){
 const base='content/diputacion-toledo/tema-'+n+'/';
 const manual=read(base+'manual.md'),fuentes=read(base+'fuentes.md'),bank=json(base+'preguntas.json'),matrix=json(base+'matriz.json');
 assert.equal(bank.estado,'AUDITADO');assert.equal(matrix.estado,'AUDITADO');
 assert.equal(bank.cierreEditorialC1_12_15_20261105.certificacionIntegral,false);
 assert.equal(matrix.cierreEditorialC1_12_15_20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,20);
 assert.match(manual,/Cierre jurídico-pedagógico/);
 assert.match(manual,/¡Foco Examen!/);assert.match(manual,/\|---/);
 assert.match(fuentes,/cierre-editorial-12-15-2026-11-05/);
 assert.equal(matrix.controlCalidad?.preguntas??20,20);
 for(const q of bank.preguntas){
  const [id,key,literal]=keys[total++];
  assert.equal(q.id,id);assert.equal(q.correcta,key,id);
  assert.equal(q.opciones[key],literal,id);assert.equal(q.respuestaLiteral,literal,id);
  assert.equal(q.opciones.length,4);options+=4;
  assert.equal(new Set(q.opciones.map(s=>s.trim().toLowerCase())).size,4,id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/);
  assert.ok(q.justificacion.length>=25&&q.trampa.length>=25,id);
  assert.ok(report.includes(id),'Falta en informe '+id);
 }
}
assert.equal(total,80);assert.equal(options,320);
const get=(n,id)=>json('content/diputacion-toledo/tema-'+n+'/preguntas.json').preguntas.find(q=>q.id===id);
assert.match(get(12,'DIP-T12-010').pregunta,/Estado o una comunidad autónoma/);
assert.match(get(13,'DIP-T13-013').pregunta,/2026/);
assert.match(get(13,'DIP-T13-013').respuestaLiteral,/accesibilidad universal/);
assert.match(get(14,'DIP-T14-008').justificacion,/27\/07\/2023/);
assert.match(get(15,'DIP-T15-007').respuestaLiteral,/municipio al que pertenece/);
assert.match(get(15,'DIP-T15-019').pregunta,/nuevos entes/);
assert.match(read('content/diputacion-toledo/tema-15/manual.md'),/régimen transitorio/);
assert.match(report,/320 alternativas/);
console.log('DIP_C1_T12_T15_AUDITADO_EDITORIAL_80_Q_320_OPTIONS_OK');