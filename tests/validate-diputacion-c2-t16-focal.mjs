import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const dir = 'content/diputacion-toledo-auxiliar-c2/tema-16/';
const data = JSON.parse(readFileSync(dir + 'preguntas.json', 'utf8'));
const questions = data.preguntas;
assert.equal(questions.length, 20, 'La convocatoria mantiene 20 preguntas en T16');
assert.equal(new Set(questions.map(q => q.id)).size, 20, 'IDs de T16 duplicados');
assert.equal(questions.reduce((n, q) => n + q.opciones.length, 0), 80);
assert.deepEqual(questions.reduce((a, q) => { a[q.respuestaCorrecta]++; return a; }, [0,0,0,0]), [5,4,6,5]);
for (const q of questions) {
  assert.equal(q.opciones.length, 4, q.id);
  assert.ok(Number.isInteger(q.respuestaCorrecta) && q.respuestaCorrecta >= 0 && q.respuestaCorrecta <= 3, q.id);
  assert.ok(q.enunciado && q.justificacion && q.trampaExamen && q.referencia, q.id);
}
const q = id => {
  const item = questions.find(x => x.id === 'DT-C2-T16-' + id);
  assert.ok(item, 'Pregunta perdida: ' + id);
  return item;
};
assert.match(q('007').enunciado, /informe\.docx.*informe\.pdf/s);
assert.equal(q('007').respuestaCorrecta, 2);
assert.match(q('007').opciones[2], /contenido no se transforma automáticamente/i);
assert.match(q('007').referencia, /common-file-name-extensions-in-windows/);
assert.equal(q('008').opciones[0], 'Ctrl + Mayús + N');
assert.equal(q('008').respuestaCorrecta, 0);
assert.ok(q('008').opciones.includes('Ctrl + N'));
assert.ok(q('008').opciones.includes('Alt + Entrar'));
assert.equal(q('010').respuestaCorrecta, 2);
assert.match(q('010').opciones[2], /propiedades del elemento/i);
assert.ok(q('010').opciones.includes('Crea una carpeta nueva, como hace Ctrl + Mayús + N.'));
assert.equal(q('014').respuestaCorrecta, 2);
assert.match(q('014').opciones[2], /Bluetooth y dispositivos.*Impresoras y escáneres/);
assert.ok(q('014').opciones.some(x=>/Configuración de proxy/.test(x)));
assert.ok(!q('014').opciones.some(x=>/BIOS|Papelera/.test(x)), 'Distractores absurdos regresaron');
const distinct = ['007','008','010','014'].map(id=>q(id).enunciado);
assert.equal(new Set(distinct).size, 4, 'Se repitieron preguntas intervenidas');

const report = readFileSync(dir + 'cotejo-focal-2026-11-05.md', 'utf8');
const manual = readFileSync(dir + 'manual.md', 'utf8');
const sources = readFileSync(dir + 'fuentes.md', 'utf8');
for (const id of ['007','008','010','014']) assert.ok(report.includes('DT-C2-T16-'+id), 'Falta análisis: '+id);
assert.match(report, /16 preguntas \/ 64 alternativas/);
assert.match(report, /no cierre integral|no.*certificaci[oó]n integral/i);
assert.match(manual, /ESTADO ACTUAL: EN_AUDITORIA/);
assert.match(manual, /Ctrl\+Mayús\+N/);
assert.match(manual, /Cambiar la extensión no transforma/);
assert.match(sources, /common-file-name-extensions-in-windows/);
assert.equal(data.auditoria20261105?.certificacionIntegral, false, 'No certificar antes de probar');
console.log('DIPUTACION_C2_T16_COTEJO_FOCAL_CUATRO_PREGUNTAS_OK');
