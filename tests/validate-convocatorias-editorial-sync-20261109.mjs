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
    dinamico: true,
  },
  {
    id: 'olias-del-rey-auxiliar-edificios-c2-2026',
    programa: 'data/programa-olias-auxiliar-edificios-2026.json',
    dinamico: true,
  },
];

for (const caso of casos) {
  const ficha = fichas.find(c => c.id === caso.id);
  assert.ok(ficha, `Falta ficha ${caso.id}`);
  const temas = load(caso.programa).temas;
  const recuentos = Object.create(null);
  for (const tema of temas) recuentos[tema.estado] = (recuentos[tema.estado] ?? 0) + 1;
  if (caso.dinamico) {
    const parts = Object.entries({ ...recuentos })
      .sort(([a], [b]) => (a === 'AUDITADO' ? -1 : b === 'AUDITADO' ? 1 : a.localeCompare(b)))
      .map(([estado, n]) => n + '_' + estado);
    assert.equal(ficha.estadoEditorial, parts.join('_'), 'Ficha desincronizada: ' + caso.id);
  } else {
    assert.equal(ficha.estadoEditorial, caso.esperado, 'Ficha desincronizada: ' + caso.id);
    assert.deepEqual({ ...recuentos }, caso.estados, 'Manifiesto cambió sin revisión: ' + caso.id);
  }
  assert.match(ficha.notaEstadoEditorial, /no equivale|falta cierre|certificaci[oó]n/i);
}
console.log('SYNC_EDITORIAL_CUATRO_FICHAS_OK: coincide ficha con manifiestos; no certifica vigencia jurídica');
