import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const ui = read('assets/practice.js');
const sims = JSON.parse(read('content/la-puebla/simulacros.json'));
const guide = read('audit/LA_PUEBLA_BAREMO_BOLSA_2026-11-09.md');

const f = sims.criterios.formatoExamen2026;
assert.equal(f.preguntasPuntuables, 50);
assert.equal(f.reserva, 5);
assert.equal(f.duracionMinutos, 60);
assert.equal(f.opciones, 4);
assert.equal(f.acierto, 0.2);
assert.equal(f.error, -0.05);
assert.equal(f.blanco, 0);
assert.equal(f.minimoAprobado, 5);

// El cálculo operativo debe usar solo titulares; las reservas no forman parte
// de correct/answered, definidos en la rama no-reserva del corrector.
assert.match(ui, /if \(isReserve\) \{/);
assert.match(ui, /const examGrade = officialExam \? Number\(Math\.max\(0, correct \* 0\.2 - errors \* 0\.05\)/);

// La etiqueta de aptitud de un simulacro no debe afirmar que se ha aprobado
// todo el concurso-oposición: el práctico es eliminatorio y posterior.
assert.ok(ui.includes('La Puebla · primer ejercicio (simulacro)'));
assert.ok(ui.includes('MÍNIMO DEL TEST SUPERADO'));
assert.ok(ui.includes('MÍNIMO DEL TEST NO SUPERADO'));
assert.ok(ui.includes('no supone superar la oposición completa ni obtener plaza'));
assert.ok(guide.includes('al menos el primer ejercicio'));
assert.ok(guide.includes('Grado en Derecho o Arquitectura'));

const score = (hits, misses) => Math.max(0, Number((hits * f.acierto + misses * f.error).toFixed(2)));
assert.equal(score(50, 0), 10);
assert.equal(score(25, 0), 5);
assert.equal(score(30, 20), 5);
assert.equal(score(24, 0), 4.8);
assert.equal(score(0, 50), 0);
assert.equal(score(30, 0), 6); // 20 blancos no penalizan
console.log('La Puebla: nota, reservas y etiqueta del primer ejercicio verificadas');
