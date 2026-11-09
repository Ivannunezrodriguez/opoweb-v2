import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = p => readFileSync(resolve(root, p), 'utf8');
const load = p => JSON.parse(read(p));

const ol = load('data/programa-olias-auxiliar-edificios-2026.json').temas;
const uc = load('data/programa-uc3m-auxiliar-administrativa-2026.json').temas;
assert.deepEqual(ol.filter(t => t.estado !== 'AUDITADO').map(t => t.numero), [13]);
assert.deepEqual(uc.filter(t => t.estado !== 'AUDITADO').map(t => t.numero), [10, 15, 16]);

const calles = read('content/olias-auxiliar-edificios/tema-13/manual.md');
assert.match(calles, /VIAS\/PSEU|VIAS y PSEU/);
assert.match(calles, /TRAM no cuenta calles distintas/);
assert.match(calles, /no se ha descargado ni leído íntegramente/i);
assert.match(calles, /30\/06\/2026/);

const guia = read('content/uc3m/GUIA_EXAMEN_2026.md');
assert.match(guia, /Tabla de decisión normativa T10, T15 y T16/);
assert.match(guia, /01\/10\/2026[\s\S]{0,180}indicio secundario/);
assert.match(guia, /RD 822\/2021 no fue anulado/);
assert.match(guia, /adaptación de \*\*3 años\*\*/);

console.log('OLIAS_UC3M_RESERVAS_Y_MATERIAL_OK; auditoría documental parcial, no certificación integral');
