import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/';
const expected={4:[4,5,6,5],5:[5,6,5,4]};
let totalQuestions=0;
let totalAlternatives=0;
for(const [num,distribution] of Object.entries(expected)){
  const n=Number(num);
  const dir=base+'tema-'+String(n).padStart(2,'0')+'/';
  const read=(name)=>readFileSync(dir+name,'utf8');
  const bank=JSON.parse(read('preguntas.json')).preguntas;
  const matrix=JSON.parse(read('matriz.json'));
  const report=read('cotejo-integral-2026-11-04.md');
  assert.equal(bank.length,20,'Expected twenty questions T'+n);
  assert.equal(new Set(bank.map(q=>q.id)).size,20,'Duplicate question IDs T'+n);
  assert.equal(matrix.controlIntegralBanco20261104?.estado,'COTEJO_BANCO_COMPLETO','Missing bank control T'+n);
  assert.equal(matrix.controlIntegralBanco20261104.preguntasVerificadas,20);
  assert.equal(matrix.controlIntegralBanco20261104.alternativasVerificadas,80);
  assert.equal(matrix.controlIntegralBanco20261104.aprobadoPorUsuario,false);
  assert.equal(matrix.controlIntegralBanco20261104.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
  for(const file of ['manual.md','fuentes.md']){
    assert(read(file).includes('cotejo-integral-2026-11-04.md'),'Broken report reference in '+file+' T'+n);
  }
  const actual=[0,0,0,0];
  for(const q of bank){
    assert.equal(q.opciones?.length,4,'Not four alternatives '+q.id);
    assert.equal(new Set(q.opciones).size,4,'Duplicated alternatives '+q.id);
    assert(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<=3,'Key invalid '+q.id);
    assert(q.justificacion&&q.trampaExamen&&q.referencia,'Missing bank basis '+q.id);
    actual[q.respuestaCorrecta]++;
    totalQuestions++;
    const heading='### '+q.id+' — '+q.enunciado;
    const index=report.indexOf(heading);
    assert(index>=0,'Question omitted from report '+q.id);
    const next=report.indexOf('\n### ',index+heading.length);
    const block=report.slice(index,next>=0?next:undefined).split('\n## ')[0];
    assert(block.includes('**Respuesta: '+'ABCD'[q.respuestaCorrecta]+'**'),'Wrong key in report '+q.id);
    assert(block.includes('**Literal correcto:** '+q.opciones[q.respuestaCorrecta]),'Answer changed in report '+q.id);
    assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'Missing focus '+q.id);
    for(let i=0;i<4;i++){
      const literal='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
      assert(block.includes(literal),'Missing exact alternative '+q.id+' '+i);
      const label='**'+(i===q.respuestaCorrecta?'Correcta':'Incorrecta')+'**';
      assert(block.includes(label),'Missing correctness explanation '+q.id);
      totalAlternatives++;
    }
  }
  assert.deepEqual(actual,distribution,'Answer distribution changed T'+n);
}
assert.equal(totalQuestions,40);
assert.equal(totalAlternatives,160);
const t4=readFileSync(base+'tema-04/cotejo-integral-2026-11-04.md','utf8');
assert(t4.includes('**4 años**')&&t4.includes('**6 meses**')&&t4.includes('**Pleno**'),'T4 legal thresholds missing');
const t5manual=readFileSync(base+'tema-05/manual.md','utf8');
const t5sources=readFileSync(base+'tema-05/fuentes.md','utf8');
const t5report=readFileSync(base+'tema-05/cotejo-integral-2026-11-04.md','utf8');
for(const phrase of ['**LO 2/2024**','cinco días','un tercio de dichos concejales','tres suplentes','40 %','alternativa']){
  assert(t5manual.includes(phrase),'Missing amended LOREG 206.1 detail in T5: '+phrase);
}
assert(t5sources.includes('BOE-A-2024-15936'),'T5 2024 electoral reform source missing');
assert(t5report.includes('500.001–1.000.000')&&t5report.includes('**27**'),'T5 LOREG 204 population tranche lost');
console.log('DIPUTACION_C2_T4_T5_40_QUESTIONS_160_EXACT_OPTIONS_PARITY_2024_OK');
