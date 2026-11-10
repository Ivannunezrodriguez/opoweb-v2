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
assert.match(calles, /280 entradas VIAS únicas/);
assert.match(calles, /callejero-ine-2026-06-30\.md/);
assert.match(calles, /30\/06\/2026/);

const guia = read('content/uc3m/GUIA_EXAMEN_2026.md');
assert.match(guia, /Tabla de decisión normativa T10, T15 y T16/);
assert.match(guia, /01\/10\/2026[\s\S]{0,180}indicio secundario/);
assert.match(guia, /RD 822\/2021 no fue anulado/);
assert.match(guia, /adaptación de \*\*3 años\*\*/);

const anexo = evidencia.temas.find(t => t.id === 'UC3M-T10').anexoAdmitidosDefinitivos;
assert.equal(anexo.fechaFirma, '2026-09-30T13:14:31');
assert.equal(anexo.codigoDocumento, 'E6oFKKwKp6');
const resolucion = evidencia.temas.find(t => t.id === 'UC3M-T10').resolucionDefinitiva;
assert.equal(resolucion.codigoVerificacion, 'sfLB0IXBSH');
assert.equal(resolucion.fechaFirma, '2026-09-30T13:14:34');
assert.equal(resolucion.publicacionAcreditada, false);
assert.match(resolucion.sha256, /^[a-f0-9]{64}$/);
assert.equal(evidencia.temas.filter(t => t.id.startsWith('UC3M-') && t.fechaPublicacionPrimaria !== null).length, 0, 'No inventar fecha de publicación');
assert.match(anexo.sha256, /^[a-f0-9]{64}$/);
console.log('OLIAS_T13_CERRADO_EDITORIAL_UC3M_RESERVAS_OK (no certificación integral)');


for(const path of ['content/uc3m/GUIA_EXAMEN_2026.md','content/uc3m/tema-10/fuentes.md','content/uc3m/tema-16/manual.md']) {
 const editorial=read(path);
 assert(editorial.includes('07/10/2026'),'Falta límite temporal secundario 7 octubre: '+path);
 assert(editorial.includes('23/10/2026'),'Falta vigencia/corte posterior 23 octubre: '+path);
 assert(/secundari|diligencia oficial/i.test(editorial),'No se identifica jerarquía de la evidencia: '+path);
}
const admiss=load('audit/evidencias-cierre-olias-uc3m-2026.json').temas.find(x=>x.id==='UC3M-T10');
assert.equal(admiss.resolucionDefinitiva.publicacionAcreditada,false,'La noticia secundaria no acredita la fecha por documento primario');
assert.equal(admiss.fechaPublicacionPrimaria,null,'No inventar fecha UC3M en matriz');
console.log('UC3M_CORTE_ACOTADO_07_10_SIN_FALSA_FECHA_PRIMARIA_OK');
