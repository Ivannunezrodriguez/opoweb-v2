import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const programme=read('data/programa-olias-auxiliar-edificios-2026.json');
const tracking=read('data/seguimiento-olias-auxiliar-edificios-2026.json');
assert.equal(programme.temas.length,22);
assert.equal(programme.temas.filter(t=>t.bloque==='general').length,5);
assert.equal(programme.temas.filter(t=>t.bloque==='especifica').length,17);
assert.deepEqual(programme.temas.map(t=>t.numero),Array.from({length:22},(_,i)=>i+1));
assert.equal(programme.convocatoria.plazas,4);
assert.equal(programme.convocatoria.fuentePrograma.codigoVerificacion,'2026.00004833');
assert.equal(programme.convocatoria.fuentePrograma.referenciaBOE,'BOE-A-2026-22826');
assert.equal(tracking.inscripcion.tasa,10);
assert.equal(tracking.inscripcion.plazo.discrepancia,'PENDIENTE_ACLARACION_OFICIAL');
assert.equal(tracking.inscripcion.plazo.fechaLimiteConfirmada,null);
assert.equal(programme.examen.pruebaTeorica.preguntas,50);
assert.equal(programme.examen.pruebaPsicotecnica.preguntas,20);
assert.equal(programme.examen.ambasEliminatorias,true);
let ready=0,totalQuestions=0;
for(const t of programme.temas){
 assert.ok(t.titulo&&t.numeroEnBloque>0&&t.estado,'Tema mal definido');
 if(!t.manual){
  assert.equal(t.estado,'PENDIENTE_AUDITORIA','Tema sin desarrollo no puede presentarse como desarrollado');
  continue;
 }
 ready++;
 for(const field of ['manual','matriz','fuentes','preguntas'])assert.ok(existsSync(t[field]),'Falta '+t[field]);
 const manual=readFileSync(t.manual,'utf8');
 assert.match(manual,/Ep[ií]grafe oficial literal/);
 assert.match(manual,/¡Foco Examen!/);
 assert.match(manual,/\|---/);
 const matrix=read(t.matriz),bank=read(t.preguntas);
 assert.equal(matrix.tema,t.numero);
 assert.ok(Array.isArray(bank.preguntas)&&bank.preguntas.length>=10);
 assert.equal(new Set(bank.preguntas.map(q=>q.id)).size,bank.preguntas.length);
 for(const q of bank.preguntas){
  assert.equal(q.opciones.length,4,q.id);
  assert.ok(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<=3,q.id);
  for(const k of ['justificacion','trampaExamen','referencia'])assert.ok(q[k]?.trim(),q.id+': falta '+k);
 }
 totalQuestions+=bank.preguntas.length;
}
assert.equal(ready,22);
assert.equal(totalQuestions,264);
const app=readFileSync('assets/app.js','utf8');
assert.match(app,/olias-del-rey-auxiliar-edificios-c2-2026/);
assert.match(app,/2026\.00004833/);
assert.ok(existsSync('content/olias-auxiliar-edificios/GUIA_SOLICITUD_EXAMEN_2026.md'));

// Controles editoriales concretos: protegen cifras jurídicas y el enlace ley-artículo.
const findTheme = number => programme.temas.find(t => t.numero === number);
for (const [number, requirements, expected] of [
 [4, ['**1 año**','**40 %**','art. 64'], 24],
 [15, ['**1 lux**','**5 lux**','ITC-BT-28'], 20],
 [18, ['**70 kW**','**5 años como mínimo**','art. 28'], 16],
 [20, ['**10 años**','26 de noviembre de 2015','art. 20'], 16],
]) {
 const theme = findTheme(number);
 const manual = readFileSync(theme.manual, 'utf8');
 for (const needle of requirements) assert.ok(manual.includes(needle), 'Falta hito de tema '+number+': '+needle);
 assert.equal(read(theme.preguntas).preguntas.length, expected, 'Banco de tema '+number);
}
const map2 = read(findTheme(2).matriz).filas;
const map3 = read(findTheme(3).matriz).filas;
const map4 = read(findTheme(4).matriz).filas;
assert.ok(map2.find(x => x.inciso.includes('Hacienda')).norma.includes('2/2004'));
assert.ok(map3.find(x => x.inciso.includes('Prevención')).norma.includes('31/1995'));
assert.ok(map4.every(x => x.norma === 'LO 3/2007'), 'Igualdad AGE asociada a otra norma');
console.log('OLIAS_C2_2026_OK: 22 temas y manuales EN_AUDITORIA; 264 preguntas temáticas, 40 psicotécnicas y dos modelos; incidencias de plazo y plazas aún abiertas.');

