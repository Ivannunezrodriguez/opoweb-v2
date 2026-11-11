import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const json=p=>JSON.parse(read(p));
const root='content/uc3m/',dir=root+'tema-15/';
const manual=read(dir+'manual.md'),sources=read(dir+'fuentes.md');
const matrix=json(dir+'matriz.json'),bank=json(dir+'preguntas.json');
const report=read(dir+'cotejo-integral-2026-11-04.md');
const acta=read(root+'CIERRE_DOCUMENTAL_T15_20261106.md');
const guide=read(root+'GUIA_EXAMEN_2026.md');
const audit=read('AUDITORIA_CONTINUA.md');
const packs=json('data/uc3m-repasos-complementarios-20261106.json').paquetes;
const extra=packs.find(x=>x.id==='UC3M-ADIC-20261106-T15');
assert.equal(matrix.estado,'EN_REVISION_USUARIO');
assert.equal(matrix.cobertura.length,7);
assert.equal(bank.preguntas.length,21);
const headings=[...manual.matchAll(/^## (\d+)\. /gm)].map(m=>+m[1]).filter(x=>x<=14);
assert.deepEqual([...new Set(headings)],Array.from({length:14},(_,i)=>i+1));
assert.ok(manual.includes('### 3.1. Quejas ante la Defensoría'));
assert.ok(manual.includes('**un mes desde que tuvo conocimiento de los hechos**'));
assert.ok(sources.includes('CIERRE_DOCUMENTAL_T15_20261106.md'));
assert.ok(manual.includes('CIERRE_DOCUMENTAL_T15_20261106.md'));
assert.ok(manual.includes('art. 178.3'));
assert.ok(acta.includes('art. 178.3')&&acta.includes('179.1'));
assert.ok(!report.includes('**Estatutos art. 179.1**'));
assert.ok(report.includes('**Estatutos art. 178.3**'));
assert.ok(extra&&extra.preguntas.length===8);
const expected={'008':'178.1','009':'178.3','010':'179.3','011':'179.4','012':'180','017':'128.1','018':'128.4','019':'130','020':'132.3','021':'132.1'};
const extraArticles=['158.1','159.1','161.4','169.1','170.2','174.2','177','171.2'];
const ids=new Set();
for(const q of bank.preguntas){
 assert.ok(q.id&&!ids.has(q.id),'Duplicate '+q.id);ids.add(q.id);
 assert.equal(q.opciones.length,4);
 assert.equal(new Set(q.opciones).size,4);
 assert.ok(q.opciones.every(v=>typeof v==='string'&&v.trim().length>0));
 assert.ok(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<=3);
 assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
 assert.ok(q.justificacion&&q.trampa&&q.referencia);
 // El cotejo del 04/11 es una fotografía histórica; los enunciados T15-013..016
 // se precisaron el 11/11 para distinguir los Estatutos refundidos de la LOSU.
 const historicalHeading='### '+q.id+' — ';
 const exactHistoricalText=report.includes(historicalHeading+q.pregunta);
 if(!exactHistoricalText) {
   const controlled=bank.controlPrecaucionLOSU20261111;
   assert.ok(controlled?.itemsAclarados?.includes(q.id),
      'Cambio no documentado respecto al cotejo histórico: '+q.id);
   assert.ok(report.split('\\n').some(line=>line.startsWith(historicalHeading)),
      'Falta ID en el cotejo histórico: '+q.id);
   assert.ok(q.pregunta.includes('Estatutos UC3M refundidos de 2003/2009'),
      'Falta delimitación de norma histórica tras la revisión: '+q.id);
   assert.equal(controlled.cambiosClave,0,'Cambio de clave sin auditoría: '+q.id);
   assert.equal(controlled.cambiosAlternativas,0,'Cambio de opciones sin auditoría: '+q.id);
 }

 const id=q.id.match(/-(\d{3})$/);
 if(id&&expected[id[1]])assert.ok(q.referencia.includes('art. '+expected[id[1]]),'Wrong reference '+q.id);
}
assert.equal(bank.preguntas.find(q=>q.id==='UC3M-T15-009').correcta,0);
for(const [i,q] of extra.preguntas.entries()){
 assert.ok(!ids.has(q.id));ids.add(q.id);
 assert.equal(q.tema,15);assert.equal(q.opciones.length,4);
 assert.equal(q.opciones[q.correcta],q.respuestaLiteral);
 assert.ok(q.justificacion&&q.trampaExamen&&q.fuenteEditorial);
 assert.ok(q.referencia.includes('artículo '+extraArticles[i]),'Missing extra article '+q.id);
 assert.ok(q.referencia.includes('BOE-A-2003-17782'));
}
const micro=manual.slice(manual.indexOf('### 1.2. Microtest'),manual.indexOf('## 2.'));
assert.ok(micro.startsWith('### 1.2.'));
assert.equal((micro.match(/\*\*Pregunta [AB]\./g)||[]).length,2);
assert.equal((micro.match(/^- \*\*[ABCD]\.\*\* /gm)||[]).length,8);
assert.equal((micro.match(/\*\*Respuesta: [BD]\./g)||[]).length,2);
const c=matrix.cierreDocumentalT15_20261106;
assert.equal(c?.resultado,'CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS');
assert.equal(c?.bloquesMatriz,7);
assert.equal(c?.bancoHistorico,21);
assert.equal(c?.alternativasHistoricas,84);
assert.equal(c?.bancoComplementario,8);
assert.equal(c?.alternativasComplementarias,32);
assert.equal(c?.microtestManual,2);
assert.equal(c?.alternativasMicrotest,8);
assert.equal(c?.aprobacionUsuario,false);
assert.equal(c?.certificacionIntegral,false);
assert.ok(guide.includes('CIERRE_DOCUMENTAL_T15_20261106.md'));
assert.ok(audit.includes('CIERRE_DOCUMENTAL_T15_20261106.md'));
assert.equal(ids.size,29);
console.log('CIERRE DOCUMENTAL UC3M T15: 21+8 INTERACTIVAS, 2 MICROTEST, 124 ALTERNATIVAS, 7 BLOQUES, CORRECCION ART 178.3, RESERVAS');

const boeDirecto={ '001':'127','004':'157','005':'170','006':'170','007':'175','013':'127','014':'127','015':'128','016':'128' };
for (const [id,articulo] of Object.entries(boeDirecto)) {
 const q=bank.preguntas.find(q=>q.id==='UC3M-T15-'+id);
 assert.ok(q,'Pregunta UC3M T15 ausente: '+id);
 assert.ok(q.referencia.includes('BOE-A-2003-17782#a'+articulo), 'Falta ancla de artículo fuente en '+q.id);
}
const q2009=bank.preguntas.find(q=>q.id==='UC3M-T15-003');
assert.ok(q2009.referencia.includes('2009/12/04') && q2009.referencia.includes('95/2009'), 'Cese defensor requiere fuente de reforma art 127.2');
console.log('UC3M_T15_NUEVE_ENLACES_BOE_PRECISOS_Y_REFORMA_2009_OK');

let fuentesPrimariasEnlazadas=0;
for (const q of bank.preguntas) {
 assert.match(q.referencia,/https:\/\/(?:www\.boe\.es|www\.bocm\.es|www\.uc3m\.es)\//,
   'T15 referencia sin URL primaria institucional: '+q.id);
 fuentesPrimariasEnlazadas++;
}
assert.equal(fuentesPrimariasEnlazadas,21);
console.log('UC3M_T15_21_REFERENCIAS_INSTITUCIONALES_DIRECTAS_OK: enlaces verificados estructuralmente, no respuesta jurídica global');

const organosT15=[
 ['157.2','Rector'],
 ['158.1','Consejo de Gobierno'],
 ['159.1','Rector'],
 ['170.1','anual, único, público y equilibrado'],
 ['170.2','Gerente'],
 ['170.2','Consejo Social'],
 ['175','Rector']
];
for(const [art,needle] of organosT15) {
 assert(new RegExp('(?:\\*\\*Art\\. |art\\. )'+art.replace('.', '\\.')+'(?:\\*\\*|\\b)', 'i').test(manual),
   'Falta artículo en cuadro de competencias UC3M T15: '+art);
 assert(manual.includes(needle), 'Falta órgano o regla de UC3M T15: '+needle);
}
assert(manual.includes('Consejo de Gobierno crea servicios') && manual.includes('Consejo Social aprueba el presupuesto'));
console.log('UC3M_T15_SERVICIOS_PRESUPUESTO_ARTS_157_159_170_175_COTEJADOS');
