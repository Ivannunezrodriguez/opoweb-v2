import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';

const read = p => readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const root = 'content/la-puebla/';
const first = 'REPASO_FOCAL_T13_T16_20261107.md';
const second = 'REPASO_FOCAL_T17_T19_20261107.md';
const a = read(root + first);
const b = read(root + second);
const programme = json('data/programa.json');
assert.equal(programme.temas.length, 19);

// El BOP exige siete materias en estos dos lotes; no confundir
// fichas de repaso complementarias con preguntas oficiales de los bancos.
for (const s of [a, b]) {
  assert.match(s, /82\/2026/);
  assert.match(s, /1965/);
  assert.match(s, /no (?:preguntas oficiales|son preguntas oficiales)|no interactivos/i);
  assert.match(s, /04\/11\/2026/);
  assert.match(s, /¡Foco Examen!/);
}
for (const required of [
 'www.boe.es/buscar/act.php?id=BOE-A-2020-14046',
 'www.boe.es/buscar/act.php?id=BOE-A-2015-10566',
 '5 años', '3 días', 'Ctrl+C',
 '15/06/2022', '2029'
]) assert(a.includes(required), 'Falta precisión T13–T16: ' + required);
for (const required of [
 'support.microsoft.com', 'help.libreoffice.org', 'www.usb.org',
 'Salto de sección', 'Estilos de página',
 '`$A$1`', '`$A1`', '`A$1`',
 '`=$A2*C$2`', 'USB-C', 'OCR', 'CD-RW'
]) assert(b.includes(required), 'Falta precisión T17–T19: ' + required);

// Controlar ejemplos (no equivale a un corrector funcional de Excel).
const referenceExamples = [
 ['`A1`', '`B2`'],
 ['`$A$1`', '`$A$1`'],
 ['`$A1`', '`$A2`'],
 ['`A$1`', '`B$1`']
];
for (const [from, to] of referenceExamples) {
  assert(b.includes('| '+from+' | '+to+' |'), 'Falta ejemplo de desplazamiento: ' + from);
}
for (const n of [17,18,19]) {
  for (const suffix of ['-A', '-B', '-C']) {
    assert(b.includes('**' + n + suffix + '.**'), 'Falta microcaso ' + n + suffix);
  }
}
for (let i=1; i<=8; i++) {
  assert(a.includes('**Caso ' + i + ' ·'), 'Falta microcaso T13–16 número '+i);
}
let count=0;const ids = new Set();
for (let n=13;n<=19;n++) {
  const topic=programme.temas[n-1];
  assert.equal(topic.numero,n);
  const file = n<=16 ? first : second;
  const manual=read(topic.manual);
  const bank=json(topic.preguntas);
  const matrix=json(topic.matriz);
  assert(manual.includes(file), 'Manual no enlaza repaso del lote T'+n);
  assert(existsSync(normalize(join(dirname(topic.manual), '..', file))), 'Ruta rota de repaso T'+n);
  assert.equal(bank.preguntas.length,12,'Banco no conserva doce preguntas T'+n);
  assert.equal(bank.estado,'APROBADO_USUARIO');
  assert.equal(matrix.estado,'AUDITADO');
  for (const q of bank.preguntas) {
    assert(!ids.has(q.id),'ID duplicado: '+q.id);
    ids.add(q.id);
    assert.equal(q.opciones.length,4,'No hay cuatro opciones: '+q.id);
    assert.equal(new Set(q.opciones).size,4,'Opciones duplicadas: '+q.id);
    const key=q.correcta??q.respuestaCorrecta;
    assert(Number.isInteger(key) && key>=0 && key<=3,'Clave inválida: '+q.id);
    assert.equal(q.opciones[key],q.respuestaLiteral,'Respuesta inconsistente: '+q.id);
    assert(q.justificacion && (q.trampa??q.trampaExamen) && q.referencia,'Falta fundamentación: '+q.id);
    count++;
  }
}
assert.equal(count,84);
assert.equal(ids.size,84);
const audit=read('AUDITORIA_CONTINUA.md');
assert(audit.includes(first) && audit.includes(second),'Registro de avance no actualizado');
console.log('La Puebla T13–T19: 7 manuales, 84 preguntas y 336 alternativas íntegras; 17 microcasos Markdown y enlaces comprobados. No es prueba E2E.');
