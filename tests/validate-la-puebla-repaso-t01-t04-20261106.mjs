import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {join,normalize,dirname} from 'node:path';

const read=p=>readFileSync(p,'utf8');
const j=p=>JSON.parse(read(p));
const ref='REPASO_URGENTE_T01_T04_20261106.md';
const repaso='content/la-puebla/'+ref;
const text=read(repaso);
const programa=j('data/programa.json');
assert.equal(programa.temas.length,19);
assert.ok(text.includes('**06/11/2026**'));
assert.ok(text.includes('BOE-A-2026-10881'));
assert.ok(text.includes('BOE-A-1978-31229'));
assert.ok(text.includes('BOE-A-2015-10565'));
assert.ok(text.includes('**Cuatro**'));
assert.ok(text.includes('**15 días**')||text.includes('15 días'));
assert.ok(text.includes('**30 días**')||text.includes('30 días'));
assert.ok(text.includes('**4 años**')||text.includes('4 años'));
assert.ok(text.includes('**3 meses**')||text.includes('3 meses'));
const parts=text.split(/^### Caso \d+ · Tema [1234]\s*$/m);
assert.equal(parts.length,9,'Deben existir 8 microcasos, separados del banco original');
const correct=['B','C','C','A','B','C','B','C'];
for(let i=0;i<8;i++){
 const section=parts[i+1];
 const letters=[...section.matchAll(/^- \*\*([ABCD])\.\*\*/gm)].map(m=>m[1]);
 assert.deepEqual(letters,['A','B','C','D'],'Opciones incompletas del microcaso '+(i+1));
 const match=section.match(/^\*\*Respuesta: ([ABCD])\.\*\*/m);
 assert.ok(match,'No hay solucion literal del microcaso '+(i+1));
 assert.equal(match[1],correct[i],'Clave modificada microcaso '+(i+1));
 assert.ok(section.includes('> ⚠️ **¡Foco Examen!:**'),'Falta foco '+(i+1));
}
const ids=new Set();
for(let n=1;n<=4;n++){
 const t=programa.temas[n-1];
 assert.equal(t.numero,n);
 const bank=j(t.preguntas),manual=read(t.manual),source=read(t.fuentes);
 assert.equal(bank.estado,'APROBADO_USUARIO');
 assert.equal(bank.preguntas.length,12);
 assert.ok(manual.includes(ref),'Manual sin enlace al repaso T'+n);
 assert.ok(source.includes('BOE-A-')||source.includes('BOE')||source.includes('Constitución'));
 assert.ok(existsSync(t.matriz));
 for(const q of bank.preguntas){
  assert.ok(q.id&&!ids.has(q.id),'Duplicado histórico '+q.id);ids.add(q.id);
  assert.equal(q.opciones.length,4,'Opciones '+q.id);
  assert.equal(new Set(q.opciones).size,4,'Distractores repetidos '+q.id);
  assert.ok(Number.isInteger(q.respuestaCorrecta)&&q.respuestaCorrecta>=0&&q.respuestaCorrecta<=3);
  assert.equal(q.opciones[q.respuestaCorrecta],q.respuestaLiteral);
  assert.ok(q.justificacion.length>=30);
  assert.ok(q.trampaExamen.length>15);
  assert.ok(q.referencia);
 }
 if(n===1){
  assert.ok(manual.includes('### 4.5. Disposición transitoria'));
  assert.ok(manual.includes('20/05/2026'));
  assert.ok(manual.includes('primera convocatoria'));
 }
 if(n===3) assert.ok(!manual.includes('Preguntas trazables: no creadas todavía'));
 const link='../'+ref;
 assert.ok(existsSync(normalize(join(dirname(t.manual),link))),'Enlace local T'+n);
}
assert.equal(ids.size,48);
assert.ok(read('AUDITORIA_CONTINUA.md').includes(ref),'Falta rastro editorial del repaso');
console.log('LA PUEBLA T01–T04: 4 bancos históricos / 48 preguntas y 192 alternativas intactos; 8 microcasos / 32 alternativas; reforma art. 69.3 y plazos LPAC; reserva E2E');
