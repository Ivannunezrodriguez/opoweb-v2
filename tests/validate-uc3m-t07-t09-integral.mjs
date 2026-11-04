import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root='content/uc3m/';
let optionCount=0,questionCount=0;
for(const n of [7,8,9]){
  const dir=root+'tema-'+String(n).padStart(2,'0')+'/';
  const read=file=>readFileSync(dir+file,'utf8');
  const qs=JSON.parse(read('preguntas.json')).preguntas;
  const matrix=JSON.parse(read('matriz.json'));
  const report=read('cotejo-integral-2026-11-04.md');
  const check=matrix.controlIntegralBanco20261104;
  assert.equal(check?.estado,'COTEJO_BANCO_COMPLETO','Missing editorial evidence T'+n);
  assert.equal(check?.alternativasVerificadas,48,'Wrong options count T'+n);
  assert.equal(check?.aprobadoPorUsuario,false,'False approval T'+n);
  assert.equal(check?.certificacionWeb,'PENDIENTE_PRUEBA_NAVEGADOR_REAL');
  assert(read('manual.md').includes('cotejo-integral-2026-11-04.md'),'Missing manual backlink T'+n);
  assert(read('fuentes.md').includes('cotejo-integral-2026-11-04.md'),'Missing source backlink T'+n);
  assert.equal(qs.length,12,'Must have twelve questions T'+n);
  assert.equal(new Set(qs.map(q=>q.id)).size,12,'Duplicate IDs T'+n);
  let keys=[0,0,0,0];
  for(const q of qs){
    const k=q.correcta;
    assert(Number.isInteger(k)&&k>=0&&k<=3,'Bad answer '+q.id);
    assert.equal(q.opciones.length,4,'Not four options '+q.id);
    assert.equal(new Set(q.opciones).size,4,'Options duplicated '+q.id);
    assert.equal(q.respuestaLiteral,q.opciones[k],'Key/literal drift '+q.id);
    assert(q.justificacion&&q.trampa&&q.referencia,'Missing reasoning '+q.id);
    keys[k]++;
    const anchor='### '+q.id+' — '+q.pregunta;
    const start=report.indexOf(anchor);
    assert(start>=0,'Missing audited stem '+q.id);
    const next=report.indexOf('\n### ',start+6);
    const block=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
    assert(block.includes('**Respuesta: '+'ABCD'[k]+'**'),'Wrong audit answer '+q.id);
    assert(block.includes(q.respuestaLiteral),'Wrong audit correct literal '+q.id);
    assert(block.includes('> ⚠️ **¡Foco Examen!:**'),'Missing exam trap '+q.id);
    for(let i=0;i<4;i++){
      const literal='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
      assert(block.includes(literal),'Missing exact option '+q.id+' '+i);
      optionCount++;
    }
    questionCount++;
  }
  assert.deepEqual(keys,[3,3,3,3],'Key position distribution changed T'+n);
}
assert.equal(questionCount,36);
assert.equal(optionCount,144);
const t7=readFileSync(root+'tema-07/manual.md','utf8');
assert(t7.includes('cinco días hábiles')&&t7.includes('artículo 41')&&t7.includes('veinte días'),'T7 20/5 deadline distinction lost');
const t8=readFileSync(root+'tema-08/manual.md','utf8');
assert(t8.includes('31 de enero de 2029')&&t8.includes('138 medidas')&&t8.includes('6 ejes'),'T8 university plan scope missing');
const t9=readFileSync(root+'tema-09/manual.md','utf8');
assert(t9.includes('### Permisos y herencia de carpetas')&&t9.includes('Comentador'),'T9 Drive permissions guide lost');
console.log('UC3M_T07_T09_36_QUESTIONS_144_EXACT_OPTIONS_AND_KEY_FACTS_OK');
