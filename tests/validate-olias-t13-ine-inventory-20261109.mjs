import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = p => readFileSync(p, 'utf8');
const text = read('content/olias-auxiliar-edificios/tema-13/callejero-ine-2026-06-30.md');
const lines = text.split(/\r?\n/);
const records = lines.filter(l => /^\| 45122\d{5} \| /.test(l));
assert.equal(records.length, 280, 'Relación íntegra VIAS INE 45122');
const parsed = records.map(l => l.split('|').slice(1,4).map(x => x.trim()));
assert.equal(new Set(parsed.map(x => x[0])).size, 280, 'Códigos VIAS duplicados');
assert.equal(new Set(parsed.map(x => x[1] + '|' + x[2])).size, 280, 'Tipo y denominación duplicados');
assert.equal(new Set(parsed.map(x => x[2])).size, 263, 'Denominaciones distintas');
const counts = Object.create(null);
for (const [,type] of parsed) counts[type] = (counts[type] ?? 0) + 1;
assert.equal(counts.CALLE, 202, 'Calles tipo CALLE');
assert.equal(counts.CMNO, 15);
assert.equal(counts.URB, 13);
assert.equal(counts.TRVA, 13);
assert.equal(counts.AVDA, 8);
assert.equal(Object.values(counts).reduce((a,b)=>a+b,0),280);
const fprints = text.match(/\x60[a-f0-9]{64}\x60/g) ?? [];
assert.equal(fprints.length,5,'Cinco SHA-256 originales');
for (const code of ['4512200019','4512200042','4512200122','4512200171','4512200198','4512200213','4512200261'])
 assert.ok(parsed.some(x=>x[0]===code), 'Falta vía de control ' + code);
const bank = JSON.parse(read('content/olias-auxiliar-edificios/tema-13/preguntas.json'));
assert.equal(bank.preguntas.length,21);
assert.equal(bank.estado,'AUDITADO');
for (const q of bank.preguntas) {
 assert.equal(q.opciones.length,4);
 assert.equal(q.opciones[q.respuestaCorrecta],q.respuestaLiteral,q.id);
}
const program = JSON.parse(read('data/programa-olias-auxiliar-edificios-2026.json'));
assert.equal(program.temas.find(t=>t.numero===13).estado,'AUDITADO');
console.log('OLIAS_T13_INE_280_VIAS_21_PREGUNTAS_OK — validación documental, no navegador E2E');
