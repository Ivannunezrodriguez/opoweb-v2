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


const resumenFiles=[
 ['data/programa.json',19,{AUDITADO:19}],
 ['data/programa-olias-auxiliar-edificios-2026.json',22,{AUDITADO:22}],
 ['data/programa-diputacion-administrativo-2026.json',40,{AUDITADO:39,EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES:1}],
 ['data/programa-diputacion-auxiliar-c2-2026.json',20,{AUDITADO:19,BORRADOR:1}],
 ['data/programa-uc3m-auxiliar-administrativa-2026.json',20,{AUDITADO:17,EN_REVISION_USUARIO:3}],
];
let temasTotales=0,temasAuditados=0,temasHistoricos=0,temasPendientes=0;
for(const [path,total,estados] of resumenFiles) {
 const temas=load(path).temas;
 assert.equal(temas.length,total,'Total de temas desactualizado en '+path);
 const reales={};
 for(const tema of temas) reales[tema.estado]=(reales[tema.estado]??0)+1;
 assert.deepEqual(reales,estados,'Contadores editoriales cambiaron; actualizar README y AUDITORIA_CONTINUA antes de dar cifras');
 temasTotales+=total;temasAuditados+=reales.AUDITADO??0;temasHistoricos+=reales.APROBADO_USUARIO??0;
 temasPendientes+=total-(reales.AUDITADO??0)-(reales.APROBADO_USUARIO??0);
}
assert.deepEqual([temasTotales,temasAuditados,temasHistoricos,temasPendientes],[121,97,19,5]);
for(const path of ['README.md','AUDITORIA_CONTINUA.md']) {
 const content=readFileSync(resolve(root,path),'utf8');
 for(const token of ['121','97','19','5','95,9 %','0/121']) {
   assert(content.includes(token),'Falta cifra documentada '+token+' en '+path);
 }
 assert(!content.includes('## 2. Resumen por convocatoria (99 temas activos)'),'Tabla histórica 99 temas mal rotulada como vigente en '+path);
}
console.log('OPOWEB_STATUS_121_TEMAS_CINCO_CONVOCATORIAS_OK: 97 auditados, 19 historicos, 5 pendientes; cero certificados integrales');
