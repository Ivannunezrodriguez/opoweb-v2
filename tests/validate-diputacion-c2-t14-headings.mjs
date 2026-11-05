import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const manual = readFileSync(new URL('../content/diputacion-toledo-auxiliar-c2/tema-14/manual.md', import.meta.url), 'utf8');
const headings = [...manual.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((m) => ({ level: m[1].length, title: m[2] }));
assert.ok(headings.length >= 100, 'El manual T14 ha perdido encabezados inesperadamente');
assert.equal(headings[0].level, 1);
const expected = ['3. conceptos usos', '4. tipos certificados', '5. soportes', '6. prestadores servicios', '7. administraciones'];
for (const title of expected) {
  const start = headings.findIndex((h) => h.level === 2 && h.title === title);
  assert.ok(start >= 0, 'Falta sección principal: ' + title);
  const end = headings.findIndex((h, i) => i > start && h.level <= 2);
  const children = headings.slice(start + 1, end < 0 ? undefined : end);
  assert.ok(children.length >= 5, 'Faltan subsecciones: ' + title);
  assert.equal(children[0].level, 3, 'Primera subsección mal anidada: ' + title);
  assert.ok(children.every((h) => h.level >= 3), 'Subsección al nivel de sección principal: ' + title);
}
for (let i = 1; i < headings.length; i++) {
  assert.ok(headings[i].level <= headings[i - 1].level + 1,
    'Salto de nivel Markdown: ' + headings[i - 1].title + ' -> ' + headings[i].title);
}
assert.match(manual, /EN_AUDITORIA/);
assert.match(manual, /sin certificación integral/);
console.log('OK: jerarquía de encabezados T14 y estado editorial coherentes (' + headings.length + ' encabezados)');
