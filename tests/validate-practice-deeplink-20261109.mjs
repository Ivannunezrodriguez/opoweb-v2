import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const src = readFileSync('assets/practice.js', 'utf8');
assert.match(src, /async function loadCall\(id, requestedTheme = null\)/);
assert.match(src, /const parsedTheme = requestedTheme === null \|\| requestedTheme === '' \? null : Number\(requestedTheme\)/);
assert.match(src, /Number\.isInteger\(parsedTheme\)/);
assert.match(src, /selectedTheme = Number\.isInteger\(parsedTheme\) && parsedTheme >= 1 && parsedTheme <= call\.themeCount/);
assert.match(src, /const themeQuery = selectedTheme === null \? '' : `&tema=\$\{selectedTheme\}`/);
assert.match(src, /history\.replaceState\(null, '', `practice\.html\?convocatoria=\$\{encodeURIComponent\(call\.id\)\}\$\{themeQuery\}`\)/);
assert.match(src, /if \(selectedTheme !== null\) startThemeTest\(selectedTheme\)/);
assert.match(src, /await loadCall\(params\.get\('convocatoria'\) \|\| localStorage\.getItem\(SELECTED_CALL_KEY\) \|\| CALLS\[0\]\.id, params\.get\('tema'\)\)/);
assert.match(src, /loadCall\(event\.target\.value\)/, 'Cambiar de convocatoria no debe arrastrar tema');
assert.ok(!src.includes("Number(new URLSearchParams(location.search).get('tema'))"), 'No leer tema después de replaceState');
const resolve = (raw, themeCount) => {
  const parsed = raw === null || raw === '' ? null : Number(raw);
  return Number.isInteger(parsed) && parsed >= 1 && parsed <= themeCount ? parsed : null;
};
assert.equal(resolve('16', 20), 16);
assert.equal(resolve('6', 20), 6); // también deep-link de banco jurídicamente bloqueado
assert.equal(resolve(null, 20), null);
assert.equal(resolve('', 20), null);
assert.equal(resolve('0', 20), null);
assert.equal(resolve('21', 20), null);
assert.equal(resolve('1.1', 20), null);
assert.equal(resolve('foo', 20), null);
console.log('Enlace tema: se conserva la selección inicial, se validan límites y el selector no hereda tema.');
