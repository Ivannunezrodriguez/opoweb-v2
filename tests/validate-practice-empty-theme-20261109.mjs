import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const src = readFileSync('assets/practice.js', 'utf8');
const c2 = JSON.parse(readFileSync('data/programa-diputacion-auxiliar-c2-2026.json', 'utf8'));
const blocked = c2.temas.find(theme => theme.numero === 6);

// Guard against making the provisional OAPGT T6 bank available merely
// because its JSON file exists.
assert.equal(blocked.estado, 'BORRADOR');
assert.match(src, /activeCall\.id === 'diputacion-toledo-auxiliar-c2-2026' && tema === 6\) return \[\]/);

// Direct links to a blocked theme still invoke startThemeTest, so it must
// exit before renderExercise is called with a zero-length question set.
const start = src.indexOf('function startThemeTest(theme) {');
const next = src.indexOf('function renderOpenCase(', start);
assert.ok(start >= 0 && next > start);
const body = src.slice(start, next);
assert.ok(body.includes('if (!questions.length) {'));
assert.ok(body.includes('renderHub();'));
assert.ok(body.includes("warning.setAttribute('role', 'status')"));
assert.ok(body.includes('No se ha iniciado ni calificado ningún ejercicio.'));
assert.ok(body.indexOf('if (!questions.length)') < body.indexOf('renderExercise(questions,'));

// An empty dataset must not enter the scoring routine (division by zero).
assert.ok(src.includes('Math.round((correct / primaryCount) * 100)'));

console.log('Temas sin preguntas: ruta directa controlada y sin corrección vacía.');
