import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const j=p=>JSON.parse(readFileSync(p,'utf8'));
const data=j('content/la-puebla/simulacros.json');
const c=data.criterios;
assert.equal(data.simulacros.length,5);
assert.equal(c.numeroSimulacros,5);
assert.equal(c.formatoRepaso.simulacros,3);
assert.equal(c.formatoRepaso.preguntasPuntuables,30);
assert.equal(c.formatoRepaso.reserva,0);
assert.equal(c.formatoRepaso.duracionMinutos,45);
assert.equal(c.formatoExamen2026.simulacros,2);
assert.equal(c.formatoExamen2026.preguntasPuntuables,50);
assert.equal(c.formatoExamen2026.reserva,5);
assert.equal(c.formatoExamen2026.duracionMinutos,60);
assert.equal(c.formatoExamen2026.acierto,0.2);
assert.equal(c.formatoExamen2026.error,-0.05);
assert.equal(c.formatoExamen2026.blanco,0);
assert.equal(c.formatoExamen2026.minimoAprobado,5);
assert(!Object.hasOwn(c,'preguntasPorSimulacro'),'Campo global engañoso: un simulacro no tiene necesariamente 30 preguntas');
assert(!Object.hasOwn(c,'duracionMinutos'),'Campo global engañoso: las modalidades tienen duración distinta');
const ids=new Set();
for(const [i,s] of data.simulacros.entries()){
 assert(!ids.has(s.id),'Simulacro duplicado');ids.add(s.id);
 const official=i>=3;
 const expected=official?c.formatoExamen2026:c.formatoRepaso;
 assert.equal(s.preguntas.length,expected.preguntasPuntuables,s.id);
 assert.equal(s.preguntasReserva?.length??0,expected.reserva,s.id);
 assert.equal(s.duracionMinutos,expected.duracionMinutos,s.id);
 assert.equal(new Set([...s.preguntas,...(s.preguntasReserva??[])]).size,
     expected.preguntasPuntuables+expected.reserva,s.id+': preguntas duplicadas');
 if(official) assert.equal(s.tipoPuntuacion,'EXAMEN_LA_PUEBLA_2026');
}
console.log('Metadatos de La Puebla: 3 repasos de 30/45 min y 2 oficiales de 50+5/60 min coherentes.');


// Cierre técnico de integridad de los dos simulacros del primer ejercicio.
// Comprobar los IDs contra los 19 bancos reales, incluidos ambos formatos
// históricos de preguntas (correcta y respuestaCorrecta).
const bank = new Map();
for (let tema=1; tema<=19; tema++) {
 const file = 'content/la-puebla/tema-'+String(tema).padStart(2,'0')+'/preguntas.json';
 const questions = j(file).preguntas;
 assert.equal(questions.length,12,'Banco base alterado T'+tema);
 for (const q of questions) {
   assert(!bank.has(q.id),'ID duplicado entre bancos: '+q.id);
   const key = q.correcta ?? q.respuestaCorrecta;
   assert(Number.isInteger(key)&&key>=0&&key<=3,'Clave no válida: '+q.id);
   assert.equal(q.opciones.length,4,'Alternativas incompletas: '+q.id);
   assert.equal(new Set(q.opciones).size,4,'Alternativas duplicadas: '+q.id);
   assert.equal(q.opciones[key],q.respuestaLiteral,'Literal incorrecto: '+q.id);
   assert(q.justificacion && q.referencia,'Sin explicación o referencia: '+q.id);
   bank.set(q.id,{tema,q});
 }
}
const oficiales = data.simulacros.filter(s=>s.tipoPuntuacion==='EXAMEN_LA_PUEBLA_2026');
assert.equal(oficiales.length,2);
const usados = new Set();
for (const simulacro of oficiales) {
 const ids = [...simulacro.preguntas,...simulacro.preguntasReserva];
 const temas = new Set();
 assert.equal(ids.length,55);
 for (const id of ids) {
   assert(bank.has(id),'Pregunta inexistente en banco de origen: '+id);
   assert(!usados.has(id),'Pregunta repetida entre simulacros oficiales: '+id);
   usados.add(id);
   temas.add(bank.get(id).tema);
 }
 assert.equal(temas.size,19,'Simulacro oficial sin cobertura de los 19 temas: '+simulacro.id);
}
assert.equal(usados.size,110,'Los dos simulacros deben tener 110 preguntas únicas');
console.log('La Puebla EXAM READY: 2 simulacros de 50+5, 110 IDs únicos, 19/19 temas, claves y literales trazables; sin certificar vigencia jurídica integral.');
