import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const read=p=>readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const acta=read('content/uc3m/CIERRE_DOCUMENTAL_T10_T11_20261106.md');
const lote=json('data/uc3m-repasos-complementarios-20261106.json').paquetes.find(p=>p.id==='UC3M-ADIC-20261106-LOTE');
assert.ok(lote&&lote.preguntas.length===18);
const expected=[{n:10,blocks:11,extra:6,sha:'12f6dae5d981e27dbb9f6e34c3a17b07e05e434c',source:'BOE-A-2015-11719'},{n:11,blocks:12,extra:4,sha:'9971fe70caddf07b797ee148468012dbbcfb4313',source:'BOE-A-1995-8729'}];
const ids=new Set();let nOriginal=0,nExtra=0;
for(const x of expected){
 const p='content/uc3m/tema-'+String(x.n).padStart(2,'0')+'/';
 const manual=read(p+'manual.md'),sources=read(p+'fuentes.md'),cotejo=read(p+'cotejo-integral-2026-11-04.md'),raw=read(p+'preguntas.json'),bank=JSON.parse(raw),matrix=json(p+'matriz.json');
 const sections=[...manual.matchAll(/^## (\d+)\. /gm)].map(m=>+m[1]).filter(n=>n<=13);
 assert.deepEqual([...new Set(sections)],Array.from({length:13},(_,i)=>i+1));
 assert.equal(matrix.cobertura.length,x.blocks);assert.equal(bank.preguntas.length,12);
 assert.equal(createHash('sha1').update('blob '+Buffer.byteLength(raw)+'\0'+raw).digest('hex'),x.sha,'SHA banco historico T'+x.n);
 assert.ok(sources.includes(x.source));
 for(const q of bank.preguntas){
  assert.ok(q.id&&!ids.has(q.id));ids.add(q.id);
  assert.equal(q.opciones.length,4);assert.ok(q.opciones.every(v=>typeof v==='string'&&v.trim()));
  assert.ok(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
  assert.ok(q.justificacion&&q.trampa&&q.referencia&&cotejo.includes('### '+q.id+' '));nOriginal++;
 }
 const extra=lote.preguntas.filter(q=>q.tema===x.n);assert.equal(extra.length,x.extra);
 for(const q of extra){
  assert.ok(!ids.has(q.id));ids.add(q.id);
  assert.equal(q.opciones.length,4);assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
  assert.ok(q.justificacion&&q.trampaExamen&&q.fuenteEditorial);
  assert.ok(/^https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-[0-9-]+#a/.test(q.referencia),'Referencia precisa '+q.id);nExtra++;
 }
 const closure=matrix.cierreDocumentalT10T11_20261106;
 assert.equal(matrix.estado, x.n === 10 ? 'EN_REVISION_USUARIO' : 'AUDITADO', 'Estado editorial actualizado T'+x.n);
 assert.equal(closure?.resultado,'CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS');
 assert.equal(closure?.bloquesMatriz,x.blocks);assert.equal(closure?.preguntasComplementarias,x.extra);
 assert.equal(closure?.aprobacionUsuario,false);assert.equal(closure?.certificacionIntegral,false);
 assert.ok(manual.includes('CIERRE_DOCUMENTAL_T10_T11_20261106.md')&&acta.includes('Tema '+x.n));
}
assert.equal(nOriginal,24);assert.equal(nExtra,10);assert.equal(ids.size,34);
assert.ok(read('content/uc3m/GUIA_EXAMEN_2026.md').includes('CIERRE_DOCUMENTAL_T10_T11_20261106.md'));
console.log('CIERRE DOCUMENTAL UC3M T10/T11: 24 preguntas historicas, 10 complementarias, 23 bloques, claves y SHA preservados; E2E y corte legal pendientes');

const fuentesTREBEP=read('content/uc3m/tema-10/fuentes.md');
assert(fuentesTREBEP.includes('03/10/2026') && fuentesTREBEP.includes('23/10/2026'),
  'Distinguir publicación y entrada en vigor Ley 4/2026');
assert(fuentesTREBEP.includes('20 días') && fuentesTREBEP.includes('art. 49.e'),
  'La reforma T10 exige precisión de vacatio y artículo');
const t10Bank=json('content/uc3m/tema-10/preguntas.json').preguntas;
const renuncia=t10Bank.find(q=>q.id==='UC3M-T10-010');
assert.equal(renuncia.respuestaLiteral,'Debe ser aceptada expresamente');
assert(renuncia.referencia.includes('BOE-A-2015-11719#a64'));
assert(read('content/uc3m/tema-10/manual.md').includes('auto de procesamiento o de apertura de juicio oral'));
console.log('UC3M_T10_FUENTES_2026_ENTRADA_VIGOR_Y_TREBEP_64_OK');
