import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = f => readFileSync(f, 'utf8');
const src = read('assets/practice.js');
const p = JSON.parse(read('data/programa-uc3m-auxiliar-administrativa-2026.json'));
assert.equal(p.temas.length, 20);
const waiting = p.temas.filter(t => t.estado !== 'AUDITADO').map(t => t.numero);
assert.ok(!waiting.includes(18) && !waiting.includes(19), 'El presupuesto T18/T19 ya se auditó contra Volumen I primario');
assert.ok(waiting.includes(10) && waiting.includes(15) && waiting.includes(16), 'Mantener reservas jurídicas pendientes');
assert.ok(src.includes("programme.temas.filter(theme => theme.estado !== 'AUDITADO')"));
assert.ok(src.includes("uc3mPending.join(', ')"));
assert.ok(src.includes("' · AUDITADO documental'"));
assert.ok(src.includes("' · EN REVISIÓN jurídica'"));
assert.ok(src.includes("Las preguntas son entrenamiento provisional") || src.includes("Sus preguntas son entrenamiento provisional"));
assert.ok(src.includes("día del examen.</p>' + uc3mAuditNote + '<p>Fuente:"));
assert.ok(!src.includes("día del examen.</p>${uc3mAuditNote}<p>Fuente:"));
assert.ok(read('practice.html').includes('assets/practice.js?v=2026.11.09.4'));
console.log('UC3M: temas 18/19 auditados y reservas 10/15/16 visibles, versión de caché actualizada.');
