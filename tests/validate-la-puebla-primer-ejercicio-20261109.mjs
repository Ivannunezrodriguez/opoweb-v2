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
assert.ok(ui.includes('Umbral real: aciertos − 0,25 × errores ≥ 25'), 'La ficha debe expresar el umbral exacto');
assert.ok(ui.includes('25 aciertos y 25 blancos = 5,00'), 'Ejemplo sin penalización por blancos');
assert.ok(ui.includes('30 aciertos y 20 errores = 5,00'), 'Ejemplo con penalización de errores');
assert.ok(ui.includes('aprobar solo el test puede dar acceso a la bolsa'), 'Distinguir acceso a bolsa de superación del proceso');
assert.ok(guide.includes('al menos el primer ejercicio'));
assert.ok(guide.includes('Grado en Derecho o Arquitectura'));

const score = (hits, misses) => Math.max(0, Number((hits * f.acierto + misses * f.error).toFixed(2)));
assert.equal(score(50, 0), 10);
assert.equal(score(25, 0), 5);
assert.equal(score(30, 20), 5);
assert.equal(score(24, 0), 4.8);
assert.equal(score(0, 50), 0);
assert.equal(score(30, 0), 6); // 20 blancos no penalizan
assert.equal(score(29, 21), 4.75); // 29 aciertos con 21 fallos: suspenso
assert.equal(score(26, 4), 5); // 26 aciertos y 4 fallos: aprobado, 20 blancos
assert.equal(score(0, 0), 0); // Sin respuestas
// El umbral debe equivaler a 4*aciertos - errores >= 100, sin reservas.
for (let hits = 0; hits <= 50; hits++) {
  for (let misses = 0; misses <= 50 - hits; misses++) {
    assert.equal(score(hits, misses) >= 5, 4 * hits - misses >= 100,
      `Umbral inconsistente: ${hits} aciertos, ${misses} errores`);
  }
}
console.log('La Puebla: nota, reservas y etiqueta del primer ejercicio verificadas');
