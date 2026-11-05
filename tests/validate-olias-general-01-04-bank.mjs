import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

// Auditoría por BLOQUE y snapshot editorial de las 56 claves contrastadas.
// Las aserciones NO certifican por sí solas la interpretación jurídica.
const load=p=>JSON.parse(readFileSync(p,'utf8'));
const expected=[
  [
    "OLIAS-T01-001",
    2,
    "Monarquía parlamentaria"
  ],
  [
    "OLIAS-T01-002",
    1,
    "El pueblo español"
  ],
  [
    "OLIAS-T01-003",
    0,
    "Su Estatuto de Autonomía"
  ],
  [
    "OLIAS-T01-004",
    1,
    "El 149"
  ],
  [
    "OLIAS-T01-005",
    3,
    "El Jefe del Estado"
  ],
  [
    "OLIAS-T01-006",
    0,
    "El Presidente del Gobierno o ministros competentes según proceda"
  ],
  [
    "OLIAS-T01-007",
    2,
    "El Presidente del Gobierno"
  ],
  [
    "OLIAS-T01-008",
    2,
    "Mayoría absoluta"
  ],
  [
    "OLIAS-T01-009",
    0,
    "48 horas después y mayoría simple"
  ],
  [
    "OLIAS-T01-010",
    3,
    "Desde la primera votación de investidura"
  ],
  [
    "OLIAS-T01-011",
    1,
    "El Congreso de los Diputados"
  ],
  [
    "OLIAS-T01-012",
    3,
    "Función ejecutiva y potestad reglamentaria"
  ],
  [
    "OLIAS-T02-001",
    0,
    "Art. 103.1"
  ],
  [
    "OLIAS-T02-002",
    2,
    "Territorio, población y organización"
  ],
  [
    "OLIAS-T02-003",
    2,
    "Todos los concejales"
  ],
  [
    "OLIAS-T02-004",
    0,
    "Alcalde"
  ],
  [
    "OLIAS-T02-005",
    3,
    "Más de 5.000 habitantes"
  ],
  [
    "OLIAS-T02-006",
    1,
    "Territorio del municipio"
  ],
  [
    "OLIAS-T02-007",
    3,
    "Autonomía para gestionar intereses propios dentro de la ley"
  ],
  [
    "OLIAS-T02-008",
    2,
    "Precio público"
  ],
  [
    "OLIAS-T02-009",
    1,
    "Beneficio por obra o servicio público en los supuestos legales"
  ],
  [
    "OLIAS-T02-010",
    0,
    "Tributos propios y participaciones estatales y autonómicas"
  ],
  [
    "OLIAS-T03-001",
    1,
    "Ocupación efectiva"
  ],
  [
    "OLIAS-T03-002",
    3,
    "ET, art. 5"
  ],
  [
    "OLIAS-T03-003",
    2,
    "Contrato de trabajo escrito"
  ],
  [
    "OLIAS-T03-004",
    1,
    "Igualdad, mérito y capacidad"
  ],
  [
    "OLIAS-T03-005",
    0,
    "Art. 14"
  ],
  [
    "OLIAS-T03-006",
    1,
    "Arts. 18 y 19 LPRL"
  ],
  [
    "OLIAS-T03-007",
    3,
    "No inutilizar dispositivos de seguridad"
  ],
  [
    "OLIAS-T03-008",
    0,
    "Quien tiene contrato laboral fijo con una Administración"
  ],
  [
    "OLIAS-T03-009",
    2,
    "TREBEP, art. 54"
  ],
  [
    "OLIAS-T03-010",
    2,
    "Evitar riesgos en origen"
  ],
  [
    "OLIAS-T04-001",
    1,
    "Discriminación directa e indirecta por sexo"
  ],
  [
    "OLIAS-T04-002",
    3,
    "Discriminación indirecta"
  ],
  [
    "OLIAS-T04-003",
    0,
    "Art. 51"
  ],
  [
    "OLIAS-T04-004",
    2,
    "Un criterio del artículo 51"
  ],
  [
    "OLIAS-T04-005",
    2,
    "40 a 60 por ciento de cada sexo"
  ],
  [
    "OLIAS-T04-006",
    0,
    "Administración General del Estado y organismos vinculados/dependientes"
  ],
  [
    "OLIAS-T04-007",
    3,
    "Art. 51"
  ],
  [
    "OLIAS-T04-008",
    1,
    "Categorías diferenciadas en el art. 7"
  ],
  [
    "OLIAS-T04-009",
    3,
    "Administración General del Estado y organismos previstos"
  ],
  [
    "OLIAS-T04-010",
    2,
    "Derivar por canal competente sin difundir datos"
  ],
  [
    "OLIAS-T04-011",
    1,
    "Presencia equilibrada en nombramientos de titulares de órganos directivos de la AGE"
  ],
  [
    "OLIAS-T04-012",
    2,
    "Representantes AGE en órganos colegiados y consejos de empresas participadas"
  ],
  [
    "OLIAS-T04-013",
    3,
    "Casos de urgencia"
  ],
  [
    "OLIAS-T04-014",
    0,
    "57"
  ],
  [
    "OLIAS-T04-015",
    1,
    "Licencia por riesgo durante embarazo o lactancia en mutualismo administrativo"
  ],
  [
    "OLIAS-T04-016",
    2,
    "Disfrute de vacaciones en fecha distinta en supuestos de maternidad y situaciones contempladas"
  ],
  [
    "OLIAS-T04-017",
    3,
    "Un año"
  ],
  [
    "OLIAS-T04-018",
    0,
    "40% de ciertas plazas de formación para empleadas que cumplan requisitos"
  ],
  [
    "OLIAS-T04-019",
    1,
    "Estudio y aplicación del principio de igualdad entre mujeres y hombres"
  ],
  [
    "OLIAS-T04-020",
    2,
    "Tratamiento reservado de denuncias e identificación de responsables"
  ],
  [
    "OLIAS-T04-021",
    3,
    "Al menos anualmente"
  ],
  [
    "OLIAS-T04-022",
    0,
    "El Gobierno"
  ],
  [
    "OLIAS-T04-023",
    1,
    "Al inicio de cada legislatura"
  ],
  [
    "OLIAS-T04-024",
    2,
    "El Consejo de Ministros"
  ]
];
const evidence='content/olias-auxiliar-edificios/cotejo-bloque-general-01-04-2026-11-05.md';
assert.ok(existsSync(evidence),'Falta evidencia documental del lote');
const report=readFileSync(evidence,'utf8');
let total=0;
for(let number=1;number<=4;number++){
 const base='content/olias-auxiliar-edificios/tema-'+String(number).padStart(2,'0')+'/';
 const bank=load(base+'preguntas.json');
 const manual=readFileSync(base+'manual.md','utf8');
 const matrix=load(base+'matriz.json');
 const sources=readFileSync(base+'fuentes.md','utf8');
 const count={1:12,2:10,3:10,4:24}[number];
 assert.equal(bank.preguntas.length,count,'Conteo T'+number);
 assert.match(manual,/Ep[ií]grafe oficial literal/);
 assert.match(manual,/¡Foco Examen!/);
 assert.ok(manual.includes('|---'),'Manual sin tabla');
 assert.equal(matrix.tema,number);
 assert.ok(matrix.estado==='EN_AUDITORIA'||bank.estado==='EN_AUDITORIA');
 assert.match(sources,/BOE-A-|boe\.es/);
 assert.equal(bank.controlLote20261105?.certificacionIntegral,false);
 assert.equal(bank.controlFocos20261105?.cierreIntegral,false);
 for(let i=0;i<bank.preguntas.length;i++){
  const q=bank.preguntas[i],want=expected[total++];
  assert.equal(q.id,want[0]);
  assert.equal(q.respuestaCorrecta,want[1],'Índice alterado '+q.id);
  assert.equal(q.opciones[q.respuestaCorrecta],want[2],'Literal de solución alterado '+q.id);
  assert.equal(q.opciones.length,4,q.id);
  assert.equal(new Set(q.opciones.map(x=>x.trim().toLowerCase())).size,4,q.id);
  assert.ok(q.opciones.every(x=>typeof x==='string'&&x.trim().length>2),q.id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/,'Sin BOE '+q.id);
  assert.match(q.trampaExamen,/¡Foco Examen!:/,'Sin foco '+q.id);
  assert.ok(q.trampaExamen.length>=85,'Foco poco explicativo: '+q.id);
  assert.ok(q.justificacion.trim().length>=20,'Falta justificación '+q.id);
  assert.ok(report.includes(q.id),'Falta referencia en cotejo: '+q.id);
 }
}
assert.equal(total,56);
assert.equal(expected.length,56);
assert.match(report,/224 alternativas/);
assert.match(report,/certificaci[oó]n integral/i);
console.log('OLIAS_GENERAL_01_04_BANK_56_224_SOURCE_FOCOS_KEY_SNAPSHOT_OK');
