import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const json = (path) => JSON.parse(read(path));
const doc = read('content/diputacion-toledo-auxiliar-c2/tema-06/oapgt-contratacion-bop-2023.md');
const c1 = json('data/programa-diputacion-administrativo-2026.json').temas.find(t => t.numero === 22);
const c2 = json('data/programa-diputacion-auxiliar-c2-2026.json').temas.find(t => t.numero === 6);

assert.equal(c1.estado, 'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
assert.equal(c2.estado, 'BORRADOR');

for (const term of [
  '16/05/2023', '2023.00002824', '11/05/2023',
  '2023-069365', '16_2021', '5_2023',
  'Consejo Rector', 'Presidencia', 'Dirección',
  'art. 9', 'art. 10', '10 %', '5 %',
  'NO', 'no pudo completarse'
]) {
  assert.ok(doc.includes(term), 'Falta control de fuente o reserva: ' + term);
}
assert.ok(doc.includes('https://bop.diputoledo.es/webEbop/DocGet?'));
assert.ok(doc.includes('no queda') || doc.includes('no como reglas'));
for (const source of [
  'content/diputacion-toledo/tema-22/fuentes.md',
  'content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md'
]) {
  const txt = read(source);
  assert.ok(txt.includes('oapgt-contratacion-bop-2023.md'));
  assert.ok(txt.includes('discordancia de numeración'));
  assert.ok(txt.includes('Mantener el bloqueo documental'));
}

console.log('OAPGT: acto 2023 contrastado documentalmente y reservas C1/C2 conservadas; sin certificación completa');
