import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/';
const expected={8:[5,6,5,4],9:[4,5,6,5],10:[5,6,5,4]};
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
assert.equal(totalQuestions,60);
assert.equal(totalAlternatives,240);

const t8=readFileSync(base+'tema-08/cotejo-integral-2026-11-04.md','utf8');
const t9=readFileSync(base+'tema-09/cotejo-integral-2026-11-04.md','utf8');
const t10=readFileSync(base+'tema-10/cotejo-integral-2026-11-04.md','utf8');
const t9bank=JSON.parse(readFileSync(base+'tema-09/preguntas.json','utf8')).preguntas;
const t10bank=JSON.parse(readFileSync(base+'tema-10/preguntas.json','utf8')).preguntas;
const t10manual=readFileSync(base+'tema-10/manual.md','utf8');
assert(t8.includes('**31–49**')&&t8.includes('**15 días**'),'T08 delegates and 15 day consultation deadline lost');
assert(t8.includes('**50 trabajadores**')&&t8.includes('**trimestrales**'),'T08 committee formation/meetings lost');
const new9={
 'DT-C2-T09-011':['artículo 13','procesos penales',1],
 'DT-C2-T09-012':['artículo 7.4','discriminación',2],
 'DT-C2-T09-016':['artículo 9.1','anteproyecto',2],
 'DT-C2-T09-018':['artículo 45.2','cincuenta',0]
};
for(const [id,[questionToken,answerToken,key]] of Object.entries(new9)){
  const q=t9bank.find(x=>x.id===id);
  assert(q&&q.enunciado.includes(questionToken),'T09 repeated question restored '+id);
  assert(q.respuestaCorrecta===key&&q.opciones[key].toLowerCase().includes(answerToken.toLowerCase()),'T09 revised key lost '+id);
}
assert(t9.includes('**50 trabajadores**')&&t9.includes('**procesos penales**'),'T09 special equality law traps missing');
const new10={
 'DT-C2-T10-008':['artículo 12.3','Un mes',2],
 'DT-C2-T10-015':['artículo 22.3','72 horas',1],
 'DT-C2-T10-020':['artículo 33.1','72 horas',2]
};
for(const [id,[questionToken,answerToken,key]] of Object.entries(new10)){
  const q=t10bank.find(x=>x.id===id);
  assert(q&&q.enunciado.includes(questionToken),'T10 repeated question restored '+id);
  assert(q.respuestaCorrecta===key&&q.opciones[key].includes(answerToken),'T10 revised key lost '+id);
}
assert(t10.includes('**1 mes**')&&t10.includes('72 h desde'),'T10 two GDPR deadlines missing');
assert(t10manual.includes('**no existe un fichero `articulos.md` en esta carpeta**'),'T10 phantom article file reference not repaired');
for(const n of [8,9,10]){
 const matrix=JSON.parse(readFileSync(base+'tema-'+String(n).padStart(2,'0')+'/matriz.json','utf8')).controlIntegralBanco20261104;
 const count=n===8?0:n===9?4:3;
 assert.equal(matrix.preguntasReemplazadasPorRedundancia.length,count,'T'+n+' dedup count drift');
 assert.equal(matrix.respuestaCorrectaConservada,true,'T'+n+' changed answer positions');
}
console.log('DIP_C2_T08_T10_60_QUESTIONS_240_EXACT_OPTIONS_SEVEN_DUPLICATES_CORRECTED_OK');
