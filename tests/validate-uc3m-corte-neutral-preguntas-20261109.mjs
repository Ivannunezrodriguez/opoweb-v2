import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = file => readFileSync(file,'utf8');
const json = file => JSON.parse(read(file));
const examples = new Map([[10,12],[15,21],[16,21]]);
let inspected = 0;
for (const [n,expected] of examples) {
 const root = 'content/uc3m/tema-'+String(n).padStart(2,'0')+'/';
 const bank=json(root+'preguntas.json').preguntas;
 const text=read(root+'manual.md');
 assert.equal(bank.length,expected,'Bank quantity changed on UC3M T'+n);
 for(const q of bank) {
  assert.equal(q.opciones.length,4,q.id);
  assert.equal(new Set(q.opciones).size,4,q.id);
  assert.equal(q.opciones[q.correcta],q.respuestaLiteral,'Literal incorrecto: '+q.id);
  assert.match(q.referencia,/^.*https:\/\//,'Falta referencia primaria: '+q.id);
  inspected++;
 }
 if(n===10){
  assert.match(text,/entró en vigor el 23\/10\/2026/);
  const forbidden=/49\.e/i;
  for(const q of bank)assert(!forbidden.test(q.pregunta+' '+q.respuestaLiteral+' '+q.referencia),'Art 49.e sujeto al corte: '+q.id);
 }
 if(n===15){
  assert.match(text,/BOCM de 15\/06\/2026/);
  assert.match(text,/Decreto 95\/2009/);
  assert.match(text,/LOSU art\. 45\.3/);
 }
 if(n===16){
  assert.match(text,/modificado \*\*22\.4\*\*/);
  assert.match(text,/art\. 14\.5/);
  assert.match(text,/no necesita[n]? cambio/i);
  for(const q of bank)assert(!/campo de estudio|art[íi]culo? 22\.4/i.test(q.pregunta+' '+q.respuestaLiteral),'Clave sobre reforma anulada: '+q.id);
  const q18=bank.find(q=>q.id==='UC3M-T16-018');
  assert(q18?.referencia.includes('art. 14.5'),'T16-018 debe enlazar base del límite de prácticas Grado');
  assert.equal(q18.respuestaLiteral,'25 % del total, con excepciones');
 }
}
assert.equal(inspected,54);
console.log('UC3M_T10_T15_T16_54_CLAVES_COTEJO_TEMPORAL_OK; falta evidencia de fecha publicación UC3M y cierre jurídico integral');
