import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = p => readFileSync(p, 'utf8'), json = p => JSON.parse(read(p));
const root = 'content/uc3m/';
const filename = 'CIERRE_DOCUMENTAL_T13_T14_20261106.md';
const acta = read(root + filename);
const guide = read(root + 'GUIA_EXAMEN_2026.md');
const status = read('AUDITORIA_CONTINUA.md');
const allPacks = json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const spec = [
 {n:13, sections:15, blocks:12, originals:12, extra:12, untouchedGaps:4, extraId:'UC3M-ADIC-20261106-T13', articles:[15,16,17,41,41,43,6,6,7,14,12,12]},
 {n:14, sections:13, blocks:12, originals:14, extra:4, untouchedGaps:2, extraId:'UC3M-ADIC-20261106-LOTE', articles:[64,66,65,78]}
];
let originalCount=0, supplementalCount=0;
const ids = new Set();
for(const s of spec){
 const dir = root + 'tema-' + String(s.n).padStart(2,'0') + '/';
 const manual=read(dir+'manual.md'), sources=read(dir+'fuentes.md'), cotejo=read(dir+'cotejo-integral-2026-11-04.md');
 const matrix=json(dir+'matriz.json'), bank=json(dir+'preguntas.json');
 const headings=[...manual.matchAll(/^## (\d+)\. /gm)].map(m=>+m[1]).filter(v=>v<=s.sections);
 assert.deepEqual([...new Set(headings)],Array.from({length:s.sections},(_,i)=>i+1),'Apartados base incompletos T'+s.n);
 assert.equal(matrix.cobertura.length,s.blocks,'Matriz no alineada T'+s.n);
 assert.equal(matrix.estado,'AUDITADO','Auditoría editorial pendiente T'+s.n);
 assert.equal(bank.preguntas.length,s.originals,'Banco historico alterado T'+s.n);
 assert.ok(manual.includes(filename),'Falta enlace al cierre desde el manual T'+s.n);
 assert.ok(sources.includes(filename),'Falta enlace al cierre desde las fuentes T'+s.n);
 assert.ok(sources.includes('BOE-A-2023-7500'),'Falta fuente LOSU T'+s.n);
 assert.ok(manual.includes('> ⚠️ **¡Foco Examen!:**'),'Sin focos T'+s.n);
 const close=matrix.cierreDocumentalT13T14_20261106;
 assert.equal(close?.resultado,'CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS');
 assert.equal(close?.bloquesMatriz,s.blocks);
 assert.equal(close?.bancoOriginal,s.originals);
 assert.equal(close?.bancoComplementario,s.extra);
 assert.equal(close?.bloquesReforzados,s.untouchedGaps);
 assert.equal(close?.aprobacionUsuario,false);
 assert.equal(close?.certificacionIntegral,false);
 assert.equal(close?.ciPendiente,true);
 assert.ok(acta.includes('Tema **'+s.n+'**')||acta.includes('Tema '+s.n),'Falta T'+s.n+' en acta');
 for(const q of bank.preguntas){
   assert.ok(q.id&&!ids.has(q.id),'ID historico duplicado '+q.id);ids.add(q.id);
   assert.equal(q.opciones.length,4);assert.equal(new Set(q.opciones).size,4);
   assert.ok(q.opciones.every(v=>typeof v==='string'&&v.trim()));
   assert.ok(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4);
   assert.equal(q.opciones[q.correcta],q.respuestaLiteral);
   assert.ok(q.justificacion&&q.trampa&&q.referencia);
   assert.ok(cotejo.includes('### '+q.id+' — '+q.pregunta),'Sin cotejo literal de enunciado '+q.id);
   originalCount++;
 }
 const pack=allPacks.find(p=>p.id===s.extraId);
 assert.ok(pack,'Paquete extra no hallado '+s.extraId);
 const extra=pack.preguntas.filter(q=>q.tema===s.n);
 assert.equal(extra.length,s.extra,'Total extra incorrecto T'+s.n);
 for(let i=0;i<extra.length;i++){
   const q=extra[i], article=s.articles[i];
   assert.ok(!ids.has(q.id),'ID repetido '+q.id);ids.add(q.id);
   assert.equal(q.opciones.length,4);assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
   assert.ok(q.justificacion&&q.trampaExamen&&q.fuenteEditorial);
   assert.equal(q.referencia,'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500#a'+article,'Enlace articulo no trazado '+q.id);
   supplementalCount++;
 }
}
const q14 = json(root+'tema-14/preguntas.json');
const t14002=q14.preguntas.find(q=>q.id==='UC3M-T14-002');
assert.equal(t14002.correcta,1);
assert.equal(t14002.respuestaLiteral,'El 25 %');
assert.ok(q14.revisionFocalizada.alcance.includes('errata documental'));
assert.ok(!q14.revisionFocalizada.alcance.includes('cambia clave de B a C'));
assert.equal(originalCount,26);assert.equal(supplementalCount,16);assert.equal(ids.size,42);
assert.ok(guide.includes(filename),'Falta indice de la guia');
assert.ok(status.includes(filename),'Falta evidencia en registro editorial principal');
assert.ok(acta.toLowerCase().includes('fecha de corte')&&acta.includes('PENDIENTES')&&acta.includes('NO'));
console.log('UC3M T13/T14 CIERRE DOCUMENTAL: 12+14 historicas, 12+4 complementarias, 168 alternativas, 24 bloques, 16 enlaces legales precisos; sin aprobacion ni E2E');
