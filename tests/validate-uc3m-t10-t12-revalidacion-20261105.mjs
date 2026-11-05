import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p=>readFileSync(p,'utf8');
const json = p=>JSON.parse(read(p));
const expected = [
  [
    "UC3M-T10-001",
    1,
    "Funcionario de carrera"
  ],
  [
    "UC3M-T10-002",
    0,
    "Funciones de confianza o asesoramiento especial"
  ],
  [
    "UC3M-T10-003",
    0,
    "No"
  ],
  [
    "UC3M-T10-004",
    3,
    "Dos años"
  ],
  [
    "UC3M-T10-005",
    1,
    "Libre arbitrariedad"
  ],
  [
    "UC3M-T10-006",
    0,
    "Ponerla en conocimiento de los órganos de inspección"
  ],
  [
    "UC3M-T10-007",
    2,
    "16 años"
  ],
  [
    "UC3M-T10-008",
    3,
    "Concurso"
  ],
  [
    "UC3M-T10-009",
    3,
    "Proceso selectivo, nombramiento, acatamiento y toma de posesión"
  ],
  [
    "UC3M-T10-010",
    2,
    "Debe ser aceptada expresamente"
  ],
  [
    "UC3M-T10-011",
    2,
    "No se devengan retribuciones ni computa para carrera y trienios"
  ],
  [
    "UC3M-T10-012",
    1,
    "Pérdida del puesto de trabajo"
  ],
  [
    "UC3M-T11-001",
    0,
    "Oposición"
  ],
  [
    "UC3M-T11-002",
    3,
    "Solo valora méritos y no puede sustituir la superación de la oposición"
  ],
  [
    "UC3M-T11-003",
    2,
    "Concurso"
  ],
  [
    "UC3M-T11-004",
    0,
    "Exige convocatoria pública y apreciación de idoneidad entre quienes reúnen los requisitos"
  ],
  [
    "UC3M-T11-005",
    1,
    "Para cubrir temporalmente un puesto por urgente e inaplazable necesidad"
  ],
  [
    "UC3M-T11-006",
    0,
    "Se relaciona con el desempeño de puestos del nivel correspondiente durante el tiempo legal"
  ],
  [
    "UC3M-T11-007",
    3,
    "Tener titulación, antigüedad y superar las pruebas"
  ],
  [
    "UC3M-T11-008",
    2,
    "Dedicación a un solo puesto en el sector público"
  ],
  [
    "UC3M-T11-009",
    3,
    "Autorización previa"
  ],
  [
    "UC3M-T11-010",
    1,
    "No"
  ],
  [
    "UC3M-T11-011",
    2,
    "Administración del patrimonio personal o familiar"
  ],
  [
    "UC3M-T11-012",
    1,
    "No modifica la jornada ni el horario del puesto principal"
  ],
  [
    "UC3M-T12-001",
    2,
    "Promover la seguridad y la salud mediante la prevención de riesgos"
  ],
  [
    "UC3M-T12-002",
    2,
    "La posibilidad de sufrir un daño derivado del trabajo"
  ],
  [
    "UC3M-T12-003",
    3,
    "Protección colectiva sobre individual"
  ],
  [
    "UC3M-T12-004",
    2,
    "Nunca puede recaer sobre la persona trabajadora"
  ],
  [
    "UC3M-T12-005",
    0,
    "Cuando cambien condiciones o se produzcan daños, entre otros supuestos"
  ],
  [
    "UC3M-T12-006",
    0,
    "Suficiente, adecuada, teórica y práctica"
  ],
  [
    "UC3M-T12-007",
    1,
    "Interrumpir la actividad y abandonar el lugar si es necesario"
  ],
  [
    "UC3M-T12-008",
    1,
    "Voluntaria, salvo excepciones legales"
  ],
  [
    "UC3M-T12-009",
    0,
    "Usar correctamente equipos y protecciones"
  ],
  [
    "UC3M-T12-010",
    3,
    "Comité disciplinario preventivo"
  ],
  [
    "UC3M-T12-011",
    3,
    "Representantes de los trabajadores con funciones específicas preventivas"
  ],
  [
    "UC3M-T12-012",
    1,
    "Desde 50 trabajadores"
  ]
];
const report=read('content/uc3m/cotejo-bloque-t10-t12-2026-11-05.md');
const requirements={
 10:['Precisión de vigencia del TREBEP','03/10/2026','23/10/2026','corte normativo UC3M'],
 11:['Particularidad universitaria y compatibilidad','art. 17.2','Rector','2 meses'],
 12:['Garantías de vigilancia de la salud','informe previo','voluntariedad','Comité']
};
let total=0;
for (const topic of [10,11,12]){
 const root='content/uc3m/tema-'+topic+'/';
 const bank=json(root+'preguntas.json');
 const manual=read(root+'manual.md');
 const sources=read(root+'fuentes.md');
 const matrix=json(root+'matriz.json');
 assert.equal(bank.preguntas.length,12,'12 preguntas tema '+topic);
 assert.equal(matrix.tema,topic,'Matriz de tema incorrecta');
 for(const key of requirements[topic])assert.ok(manual.includes(key),'Falta matiz '+key+' del T'+topic);
 assert.ok(manual.includes('|---'),'Falta tabla tema '+topic);
 assert.match(manual,/¡Foco Examen!/);
 assert.ok(sources.includes('boe.es'),'Falta BOE '+topic);
 assert.equal(bank.controlRevalidacionBloque20261105?.certificacionIntegral,false,'Certificación indebida '+topic);
 for(const q of bank.preguntas){
  const [id,index,literal]=expected[total++];
  assert.equal(q.id,id);
  assert.equal(q.correcta,index,'Clave cambiada '+q.id);
  assert.equal(q.opciones[index],literal,'Literal cambiada '+q.id);
  assert.equal(q.respuestaLiteral,literal);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones.map(x=>x.trim().toLowerCase())).size,4,'Alternativas duplicadas '+q.id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-/,'Referencia no oficial '+q.id);
  assert.match(q.justificacion,/Descarte de (las )?alternativas:/,'No explica distractores '+q.id);
  assert.ok(q.justificacion.length>=130,'Fundamentación insuficiente '+q.id);
  assert.ok(report.includes(q.id),'Sin trazabilidad del ID '+q.id);
 }
}
assert.equal(total,36);
assert.equal(expected.length,36);
assert.match(report,/144 alternativas/);
assert.match(report,/corte UC3M/i);
assert.match(report,/no se acumulan como/i);
console.log('UC3M_T10_T12_36_144_REVALIDACION_BOE_DISTRACTORES_Y_CORTE_OK');
