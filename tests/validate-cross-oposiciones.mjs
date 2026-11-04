import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = file => JSON.parse(readFileSync(file, 'utf8'));
const checks = [
  { name: 'La Puebla T14', file: 'content/la-puebla/tema-14/preguntas.json', count: 12, style: 'enunciado', sample: 'LP-T14-008' },
  { name: 'UC3M T15', file: 'content/uc3m/tema-15/preguntas.json', count: 21, style: 'pregunta', sample: 'UC3M-T15-021' },
  { name: 'UC3M T16', file: 'content/uc3m/tema-16/preguntas.json', count: 21, style: 'pregunta', sample: 'UC3M-T16-021' },
  { name: 'Diputacion C1 T29', file: 'content/diputacion-toledo/tema-29/preguntas.json', count: 20, style: 'pregunta', sample: 'DIP-T29-018' },
  { name: 'Diputacion C2 T13', file: 'content/diputacion-toledo-auxiliar-c2/tema-13/preguntas.json', count: 20, style: 'enunciado', sample: 'DT-C2-T13-001' },
];
const results = {};
for (const item of checks) {
  const bank = read(item.file);
  assert.equal(bank.preguntas.length, item.count, item.name + ': expected item count');
  assert.equal(new Set(bank.preguntas.map(q => q.id)).size, item.count, item.name + ': duplicate IDs');
  for (const q of bank.preguntas) {
    assert.equal(typeof q[item.style], 'string', q.id + ': wrong rendered stem field');
    assert(q[item.style].trim().length > 8, q.id + ': empty stem');
    assert.equal(q.opciones.length, 4, q.id + ': expected four alternatives');
    const correct = item.style === 'pregunta' ? q.correcta : q.respuestaCorrecta;
    assert(Number.isInteger(correct) && correct >= 0 && correct < 4, q.id + ': missing correct option');
    assert(q.opciones[correct].trim(), q.id + ': empty correct option');
    assert(q.justificacion?.trim(), q.id + ': missing rationale');
  }
  assert(bank.preguntas.some(q => q.id === item.sample));
  results[item.name] = bank.preguntas.length;
}
const c1 = read('content/diputacion-toledo/tema-29/preguntas.json').preguntas.find(q => q.id === 'DIP-T29-018');
assert.match(c1.pregunta, /grupo de control.*art\. 42/);
assert.match(c1.opciones[c1.correcta], /conjunto|suma/i);
assert(!('enunciado' in c1), 'C1 bank must not retain a second stale question field');
const lp = read('content/la-puebla/tema-14/preguntas.json').preguntas.find(q => q.id === 'LP-T14-008');
assert.match(lp.enunciado, /superior/);
assert.match(lp.opciones[lp.respuestaCorrecta], /Tres d[ií]as/);
for (const n of [15, 16]) {
  const bank = read('content/uc3m/tema-' + n + '/preguntas.json');
  const matrix = read('content/uc3m/tema-' + n + '/matriz.json');
  const covered = new Set(matrix.cobertura.flatMap(c => c.preguntas || []));
  for (let i = 17; i <= 21; i++) {
    const id = 'UC3M-T' + n + '-' + String(i).padStart(3,'0');
    assert(bank.preguntas.some(q => q.id === id), 'Missing UC3M question ' + id);
    assert(covered.has(id), 'Question missing from matrix ' + id);
  }
}
const sizes = [
  ['La Puebla', read('data/programa.json').temas.length, 19],
  ['UC3M', read('data/programa-uc3m-auxiliar-administrativa-2026.json').temas.length, 20],
  ['Diputacion C1', read('data/programa-diputacion-administrativo-2026.json').temas.length, 40],
  ['Diputacion C2', read('data/programa-diputacion-auxiliar-c2-2026.json').temas.length, 20],
  ['Olias C2', read('data/programa-olias-auxiliar-edificios-2026.json').temas.length, 22],
];
for(const [name,n,expected] of sizes) assert.equal(n,expected,name+' theme inventory changed');
assert.equal(sizes.reduce((sum,record)=>sum+record[1],0),121);
console.log('CROSS_CONVOCATORIAS_OK',JSON.stringify({totalTemas:121,controlados:results}));
