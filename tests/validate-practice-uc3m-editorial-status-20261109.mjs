import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = f => readFileSync(f, 'utf8');
const src = read('assets/practice.js');
const p = JSON.parse(read('data/programa-uc3m-auxiliar-administrativa-2026.json'));
assert.equal(p.temas.length, 20);
const waiting = p.temas.filter(t => t.estado !== 'AUDITADO').map(t => t.numero);
assert.ok(waiting.includes(18) && waiting.includes(19), 'No borrar reservas del presupuesto sin cotejo primario');
assert.ok(src.includes("programme.temas.filter(theme => theme.estado !== 'AUDITADO')"));
assert.ok(src.includes("uc3mPending.join(', ')"));
assert.ok(src.includes("' · AUDITADO documental'"));
assert.ok(src.includes("' · EN REVISIÓN jurídica'"));
assert.ok(src.includes("Las preguntas son entrenamiento provisional") || src.includes("Sus preguntas son entrenamiento provisional"));
assert.ok(src.includes("día del examen.</p>' + uc3mAuditNote + '<p>Fuente:"));
assert.ok(!src.includes("día del examen.</p>${uc3mAuditNote}<p>Fuente:"));
assert.ok(read('practice.html').includes('assets/practice.js?v=2026.11.09.3'));
console.log('UC3M: estado real de 20 temas mostrado, reservas 18/19 visibles, versión de caché actualizada.');
