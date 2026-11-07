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
