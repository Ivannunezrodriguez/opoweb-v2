import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = p => readFileSync(resolve(root, p), 'utf8');
const load = p => JSON.parse(read(p));

const ol = load('data/programa-olias-auxiliar-edificios-2026.json').temas;
const uc = load('data/programa-uc3m-auxiliar-administrativa-2026.json').temas;
const evidencia = load('audit/evidencias-cierre-olias-uc3m-2026.json');
assert.equal(evidencia.temas.length, 4, 'Conservar cuatro puertas de cierre documentadas');
const casos = [
  { id: 'OLIAS-T13', numero: 13, temas: ol },
  ...[10, 15, 16].map(numero => ({ id: 'UC3M-T' + numero, numero, temas: uc })),
];
for (const caso of casos) {
  const tema = caso.temas.find(t => t.numero === caso.numero);
  const registro = evidencia.temas.find(t => t.id === caso.id);
  assert.ok(tema && registro, 'Falta tema o evidencia de ' + caso.id);
  assert.ok(Array.isArray(registro.pruebasRequeridas) && registro.pruebasRequeridas.length >= 4);
  if (tema.estado === 'AUDITADO') {
    assert.equal(registro.estadoEvidencia, 'VERIFICADO', caso.id + ': marcado AUDITADO sin cierre verificable');
    assert.match(registro.documentoPrimario ?? '', /^https:\/\//, caso.id + ': falta fuente primaria');
    if (caso.id === 'OLIAS-T13') {
      assert.equal(registro.fechaReferenciaPrimaria, '2026-06-30', 'Olías: fecha de referencia INE');
      assert.match(registro.inventarioVerificado ?? '', /^content\//, 'Olías: inventario oficial ausente');
      assert.ok(existsSync(resolve(root, registro.inventarioVerificado)), 'Olías: no existe inventario');
    } else {
      assert.match(registro.fechaPublicacionPrimaria ?? '', /^2026-\d{2}-\d{2}$/, caso.id + ': falta fecha de publicación');
    }
    assert.match(registro.actaCierre ?? '', /^audit\//, caso.id + ': falta acta individual');
    assert.ok(existsSync(resolve(root, registro.actaCierre)), caso.id + ': acta inexistente');
  } else {
    assert.notEqual(registro.estadoEvidencia, 'VERIFICADO', caso.id + ': fuente verificada pero tema aún no auditado');
  }
}

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
