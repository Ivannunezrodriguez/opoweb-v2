import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root='content/la-puebla/';
for(const n of [10,11,12]){
  const dir=root+'tema-'+n+'/';
  const read=f=>readFileSync(dir+f,'utf8');
  const questions=JSON.parse(read('preguntas.json')).preguntas;
  const matrix=JSON.parse(read('matriz.json'));
  const report=read('cotejo-integral-2026-11-04.md');
  assert.equal(matrix.controlIntegralEditorial20261104?.estado,'AUDITADO','not legally closed T'+n);
  assert.equal(matrix.controlIntegralEditorial20261104?.opcionesVerificadas,48);
  assert.equal(matrix.controlIntegralEditorial20261104?.controlFuncionalWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
  assert.equal(matrix.cobertura.length,n===10?8:n===11?7:5);
  assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'));
  assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'));
  assert.equal(questions.length,12);
  assert.equal(new Set(questions.map(q=>q.id)).size,12);
  const keys=[0,0,0,0];
  for(const q of questions){
    const k=q.respuestaCorrecta??q.correcta;
    const stem=q.enunciado??q.pregunta;
    assert(Number.isInteger(k)&&k>=0&&k<=3,'Bad key '+q.id);
    assert.equal(q.opciones.length,4);
    assert.equal(new Set(q.opciones).size,4,'Duplicate options '+q.id);
    assert.equal(q.respuestaLiteral,q.opciones[k],'Wrong literal '+q.id);
    keys[k]++;
    const anchor='### '+q.id+' — '+stem;
    assert(report.includes(anchor),'No question audit '+q.id);
    const block=report.split(anchor)[1].split('\n### ')[0].split('\n## ')[0];
    for(const [i,option] of q.opciones.entries()){
      assert(block.includes('| **'+'ABCD'[i]+'** | '+option.replace(/\|/g,'\\|')),'Missing legal analysis of '+q.id+' option '+i);
    }
    assert(block.includes('**Artículo:**'),'Missing statutory article '+q.id);
    assert(block.includes('**Respuesta: '+'ABCD'[k]+'**'),'Answer and audit differ '+q.id);
  }
  assert.deepEqual(keys,[3,3,3,3],'Answer distribution changed T'+n);
}
const q10=JSON.parse(readFileSync(root+'tema-10/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T10-005');
assert(q10.justificacion.includes('5 %')&&q10.referencia.includes('art. 9.1'));
const q11=JSON.parse(readFileSync(root+'tema-11/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T11-012');
assert(q11.enunciado.includes('derecho a la devolución'));
assert(q11.justificacion.includes('a instancia de parte')&&q11.justificacion.includes('6 meses'));
const q12=JSON.parse(readFileSync(root+'tema-12/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T12-010');
assert(q12.justificacion.includes('104.5')&&q12.justificacion.includes('inexistencia de incremento'));
console.log('LA_PUEBLA_T10_T11_T12_144_EXACT_OPTIONS_LEGAL_REPORTS_AND_36_KEYS_OK');
