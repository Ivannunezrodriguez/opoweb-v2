import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/uc3m/';
let verifiedOptions=0;
for (const n of [1,2,3]) {
  const path=base+'tema-'+String(n).padStart(2,'0')+'/';
  const read=file=>readFileSync(path+file,'utf8');
  const bank=JSON.parse(read('preguntas.json')).preguntas;
  const matrix=JSON.parse(read('matriz.json'));
  const report=read('cotejo-integral-2026-11-04.md');
  const manual=read('manual.md');
  const fuentes=read('fuentes.md');
  const tag=matrix.controlIntegralJuridico20261104;
  assert.equal(tag?.estado,'COTEJO_BANCO_COMPLETO','Audit missing T'+n);
  assert.equal(tag?.opcionesVerificadas,48,'Wrong option count T'+n);
  assert.equal(tag?.validacionFuncional,'PENDIENTE_NAVEGADOR_REAL');
  assert.equal(matrix.aprobadoPorUsuario,false,'Do not silently approve topics');
  assert.equal(bank.length,12,'Expected 12 questions T'+n);
  assert.equal(new Set(bank.map(q=>q.id)).size,12,'Duplicate IDs T'+n);
  assert(manual.includes('cotejo-integral-2026-11-04.md'),'No manual link T'+n);
  assert(fuentes.includes('cotejo-integral-2026-11-04.md'),'No sources link T'+n);
  let keys=[0,0,0,0];
  for (const q of bank) {
    const key=q.correcta;
    assert(Number.isInteger(key) && key>=0 && key<=3,'Key invalid '+q.id);
    assert.equal(q.opciones.length,4,'Options count '+q.id);
    assert.equal(new Set(q.opciones).size,4,'Duplicate alternatives '+q.id);
    assert.equal(q.opciones[key],q.respuestaLiteral,'Literal/key mismatch '+q.id);
    assert(q.justificacion && q.trampa && q.referencia,'Missing explanation '+q.id);
    keys[key]++;
    const start=report.indexOf('### '+q.id+' — '+q.pregunta);
    assert(start>=0,'Missing audit section '+q.id);
    const next=report.indexOf('\n### ',start+5);
    const section=report.slice(start,next>=0?next:undefined).split('\n## ')[0];
    assert(section.includes('**Respuesta: '+'ABCD'[key]+'**'),'Wrong audit key '+q.id);
    assert(section.includes(q.respuestaLiteral),'Wrong audit literal '+q.id);
    assert(section.includes('> ⚠️ **¡Foco Examen!:**'),'Missing exam focus '+q.id);
    for (let i=0;i<4;i++) {
      const literal='| **'+'ABCD'[i]+'** | '+q.opciones[i].replaceAll('|','\\|')+' |';
      assert(section.includes(literal),'Missing audited option '+q.id+' '+i);
      verifiedOptions++;
    }
  }
  assert.deepEqual(keys,[3,3,3,3],'Keys changed distribution T'+n);
}
assert.equal(verifiedOptions,144,'Expected 144 audited options');
const t1=readFileSync(base+'tema-01/manual.md','utf8');
const t2=readFileSync(base+'tema-02/manual.md','utf8');
const t3=readFileSync(base+'tema-03/manual.md','utf8');
const f3=readFileSync(base+'tema-03/fuentes.md','utf8');
assert(t1.includes('mayoría absoluta del Senado')&&t1.includes('mayoría de dos tercios'),'CE167 fallback lost');
assert(t2.includes('artículo 31.2.c') && t2.includes('hora real'),'LPAC registry nuance lost');
assert(t3.includes('día siguiente a aquel en que se notifique'),'LPAC simplified start lost');
assert(f3.includes('no') && f3.includes('fecha del examen'),'UC3M cutoff clarification lost');
console.log('UC3M_T01_T03_36_KEYS_144_EXACT_OPTIONS_AND_LEGAL_FIXES_OK');
