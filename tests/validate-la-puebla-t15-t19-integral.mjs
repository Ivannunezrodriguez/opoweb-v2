import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root = 'content/la-puebla/';
let totalQuestions = 0, totalOptions = 0;
for (const n of [15,16,17,18,19]) {
  const dir = root + 'tema-' + n + '/';
  const read = path => readFileSync(dir + path, 'utf8');
  const bank = JSON.parse(read('preguntas.json'));
  const questions = bank.preguntas;
  const manual = read('manual.md');
  const matrix = JSON.parse(read('matriz.json'));
  const report = read('cotejo-integral-2026-11-04.md');
  assert.equal(questions.length, 12, 'T'+n+': expected 12 questions');
  assert.equal(new Set(questions.map(q=>q.id)).size, 12, 'T'+n+': duplicate IDs');
  const chapters = Array.isArray(matrix.capitulos) ? matrix.capitulos : (n === 19 ? [
    dir+'bloque-01-ordenador-componentes.md', dir+'bloque-02-perifericos-impresoras.md',
    dir+'bloque-03-escaneres.md', dir+'bloque-04-almacenamiento-externo-usb.md',
    dir+'bloque-05-opticos.md'] : []);
  assert.equal(chapters.length,5,'T'+n+': missing five chapter paths');
  for (const chapter of chapters) {
    assert(chapter.startsWith(dir) && chapter.endsWith('.md'), 'T'+n+': invalid chapter '+chapter);
    assert(readFileSync(chapter,'utf8').length > 1000, 'T'+n+': empty chapter '+chapter);
  }
  assert(manual.includes('## '), 'T'+n+': missing headings');
  assert(report.includes('48 alternativas'), 'T'+n+': audit does not mention 48 alternatives');
  const positions=[0,0,0,0];
  for (const question of questions) {
    const stem=question.enunciado ?? question.pregunta;
    const key=question.respuestaCorrecta;
    assert(typeof stem==='string' && stem.length>20, 'T'+n+': invalid question statement');
    assert(Number.isInteger(key) && key>=0 && key<=3, 'T'+n+': invalid key');
    assert(Array.isArray(question.opciones) && question.opciones.length===4, 'T'+n+': invalid alternatives');
    assert.equal(new Set(question.opciones).size, 4, 'T'+n+': repeated alternatives');
    assert.equal(question.opciones[key],question.respuestaLiteral,'T'+n+': key/literal mismatch '+question.id);
    assert(question.justificacion && question.trampaExamen && question.referencia,'T'+n+': incomplete metadata '+question.id);
    positions[key]++;
    const start=report.indexOf('### '+question.id+' ');
    assert(start>=0,'T'+n+': missing audit entry '+question.id);
    const next=report.indexOf('\n### ',start+6);
    const block=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
    assert(block.includes(stem),'T'+n+': stale stem '+question.id);
    assert(block.includes(question.respuestaLiteral),'T'+n+': stale literal '+question.id);
    for(let i=0;i<4;i++){
      const prefix='| **'+'ABCD'[i]+'** | '+question.opciones[i].replaceAll('|','\\|')+' |';
      assert(block.includes(prefix),'T'+n+': missing choice '+question.id+' '+i);
      totalOptions++;
    }
    assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'T'+n+': missing focus '+question.id);
    totalQuestions++;
  }
  assert.deepEqual(positions,[3,3,3,3],'T'+n+': unbalanced answers');
}
const q18=JSON.parse(readFileSync(root+'tema-18/preguntas.json','utf8')).preguntas.find(q=>q.id==='LP-T18-012');
assert(q18.respuestaLiteral.includes('texto tabular sin estructura de libro'),'T18 CSV correction reverted');
assert(readFileSync(root+'tema-18/manual.md','utf8').includes('hoja activa'),'T18 CSV manual correction reverted');
assert.equal(totalQuestions,60);
assert.equal(totalOptions,240);
console.log('LA_PUEBLA_T15_T19_60_KEYS_240_EXACT_OPTIONS_AND_FIVE_REPORTS_OK');
