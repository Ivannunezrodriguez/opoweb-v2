import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const load = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const fichas = load('data/convocatorias.json').convocatorias;
const casos = [
  {
    id: 'diputacion-toledo-administrativo-c1-2026',
    programa: 'data/programa-diputacion-administrativo-2026.json',
    esperado: '39_AUDITADO_1_EN_AUDITORIA_ESTATUTOS',
    estados: { AUDITADO: 39, EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES: 1 },
  },
  {
    id: 'diputacion-toledo-auxiliar-c2-2026',
    programa: 'data/programa-diputacion-auxiliar-c2-2026.json',
    esperado: '19_AUDITADO_1_BORRADOR',
    estados: { AUDITADO: 19, BORRADOR: 1 },
  },
  {
    id: 'uc3m-auxiliar-c2-2026',
    programa: 'data/programa-uc3m-auxiliar-administrativa-2026.json',
    esperado: '17_AUDITADO_3_EN_REVISION_USUARIO',
    estados: { AUDITADO: 17, EN_REVISION_USUARIO: 3 },
    pendientes: [10, 15, 16],
  },
  {
    id: 'olias-del-rey-auxiliar-edificios-c2-2026',
    programa: 'data/programa-olias-auxiliar-edificios-2026.json',
    esperado: '21_AUDITADO_1_EN_AUDITORIA',
    estados: { AUDITADO: 21, EN_AUDITORIA: 1 },
    pendientes: [13],
  },
];

for (const caso of casos) {
  const ficha = fichas.find(c => c.id === caso.id);
  assert.ok(ficha, `Falta ficha ${caso.id}`);
  assert.equal(ficha.estadoEditorial, caso.esperado, `Estado editorial no sincronizado: ${caso.id}`);
  const temas = load(caso.programa).temas;
  const recuentos = Object.create(null);
  for (const tema of temas) recuentos[tema.estado] = (recuentos[tema.estado] ?? 0) + 1;
  assert.deepEqual({ ...recuentos }, caso.estados, `Recuento de manifiesto cambiado: ${caso.id}`);
  assert.match(ficha.notaEstadoEditorial, /no equivale|falta cierre|certificaci[oó]n/i);
  if (caso.pendientes) assert.deepEqual(temas.filter(t => t.estado !== 'AUDITADO').map(t => t.numero).sort((a,b) => a-b), caso.pendientes);
}
console.log('SYNC_EDITORIAL_DIPUTACION_C1_C2_OK: coincide ficha con manifiestos; no certifica vigencia jurídica');
