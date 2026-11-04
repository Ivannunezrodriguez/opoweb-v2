import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const dir='content/diputacion-toledo-auxiliar-c2/tema-07/';
const read=name=>readFileSync(dir+name,'utf8');
const bank=JSON.parse(read('preguntas.json')).preguntas;
const matrix=JSON.parse(read('matriz.json'));
const report=read('cotejo-integral-2026-11-04.md');
assert.equal(bank.length,20);
assert.equal(new Set(bank.map(q=>q.id)).size,20);
assert.equal(matrix.controlIntegralBanco20261104?.estado,'COTEJO_BANCO_COMPLETO');
assert.equal(matrix.controlIntegralBanco20261104.preguntasVerificadas,20);
assert.equal(matrix.controlIntegralBanco20261104.alternativasVerificadas,80);
assert.equal(matrix.controlIntegralBanco20261104.aprobadoPorUsuario,false);
assert.equal(matrix.controlIntegralBanco20261104.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
for(const name of ['manual.md','fuentes.md']){
 assert(read(name).includes('cotejo-integral-2026-11-04.md'),'Missing legal report link: '+name);
}
const expected=[3,4,7,6];
const actual=[0,0,0,0];
let alternativeCount=0;
for(const q of bank){
 assert.equal(q.opciones?.length,4,'Wrong options '+q.id);
 assert.equal(new Set(q.opciones).size,4,'Duplicated distractor '+q.id);
 assert(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<=3,'Bad key '+q.id);
 assert(q.justificacion&&q.trampaExamen&&q.referencia,'Missing citation '+q.id);
 actual[q.respuestaCorrecta]++;
 const heading='### '+q.id+' — '+q.enunciado;
 const start=report.indexOf(heading);
 assert(start>=0,'Question missing from report '+q.id);
 const next=report.indexOf('\n### ',start+heading.length);
 const block=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
 const letter='ABCD'[q.respuestaCorrecta];
 assert(block.includes('**Respuesta: '+letter+'**'),'Incorrect key '+q.id);
 assert(block.includes('**Literal correcto:** '+q.opciones[q.respuestaCorrecta]),'Wrong answer literal '+q.id);
 assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'No test trap '+q.id);
 for(let k=0;k<4;k++){
   const line='| **'+'ABCD'[k]+'** | '+q.opciones[k].replaceAll('|','\\|')+' |';
   assert(block.includes(line),'Option changed in report '+q.id+' '+k);
   assert(block.includes('**'+(k===q.respuestaCorrecta?'Correcta':'Incorrecta')+'**'),'No option rationale '+q.id+' '+k);
   alternativeCount++;
 }
}
assert.deepEqual(actual,expected);
assert.equal(alternativeCount,80);
assert(report.includes('**Tres años improrrogables**')||report.includes('**tres años improrrogables**'),'OEP three-year limit missing');
assert(report.includes('**dos años**'),'Promoción internal seniority missing');
assert(report.includes('Ley 2/2026'),'2026 amending law omitted');
const source=read('fuentes.md');
assert(source.includes('DOCM-q-2026-90086'),'Primary 2026 CLM amendment missing');
assert(source.includes('21/03/2024'),'Consolidation date caveat absent');
console.log('DIPUTACION_C2_T7_20_QUESTIONS_80_EXACT_CHOICES_OEP_PROMOCION_2026_OK');
