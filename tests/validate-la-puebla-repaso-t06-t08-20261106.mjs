import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {dirname,join,normalize} from 'node:path';

const read=p=>readFileSync(p,'utf8');
const json=p=>JSON.parse(read(p));
const programme=json('data/programa.json');
const source='content/la-puebla/REPASO_FOCAL_T06_T08_20261106.md';
const acta='content/la-puebla/CIERRE_FOCAL_T06_T08_20261106.md';
const text=read(source),closure=read(acta);

assert.equal(programme.temas.length,19);
assert.ok(text.includes('**06/11/2026**'));
assert.ok(text.includes('BOE-A-2011-7752'));
assert.ok(text.includes('BOE-A-1995-24292'));
assert.ok(text.includes('BOE-A-2011-2708'));
assert.ok(text.includes('BOE-A-2007-6115'));
assert.ok(text.includes('**3 años improrrogables**'));
assert.ok(text.includes('**24 horas**'));
assert.ok(text.includes('**15 días**'));
assert.ok(text.includes('**50 o más trabajadores**'));
assert.ok(text.includes('**2 años**'));
assert.ok(closure.includes('PENDIENTES')&&closure.includes('no** certificación'));
const parts=text.split(/^### Caso [1-9] · Tema [678]\s*$/m);
assert.equal(parts.length,10,'Se esperan 9 microcasos');
const keys=['B','A','C','D','A','B','C','D','B'];
for(let i=0;i<9;i++){
 const part=parts[i+1];
 assert.ok(part, 'Falta caso '+(i+1));
 const choices=[...part.matchAll(/^- \*\*([ABCD])\.\*\* /gm)].map(m=>m[1]);
 assert.deepEqual(choices,['A','B','C','D'],'Opciones del microcaso '+(i+1));
 const match=part.match(/^\*\*Respuesta: ([ABCD])\.\*\*/m);
 assert.ok(match, 'Falta clave del caso '+(i+1));
 assert.equal(match[1],keys[i], 'Clave incorrecta del caso '+(i+1));
 assert.ok(part.includes('> ⚠️ **¡Foco Examen!:**'),'Foco '+(i+1));
}
const allIds=new Set();
for(let n=6;n<=8;n++){
 const t=programme.temas[n-1];
 assert.equal(t.numero,n);
 const bank=json(t.preguntas),manual=read(t.manual),sources=read(t.fuentes),matrix=json(t.matriz);
 assert.equal(bank.estado,'APROBADO_USUARIO');
 assert.equal(matrix.estado,'APROBADO_USUARIO');
 assert.equal(bank.preguntas.length,12);
 assert.ok(manual.includes('REPASO_FOCAL_T06_T08_20261106.md'));
 assert.ok(sources.includes('REPASO_FOCAL_T06_T08_20261106.md'));
 assert.ok(!manual.includes('Preguntas trazables: no creadas todavía'));
 assert.ok(sources.includes('cotejo-integral-2026-11-04.md'));
 assert.ok(existsSync(normalize(join(dirname(t.manual),'../REPASO_FOCAL_T06_T08_20261106.md'))));
 for(const q of bank.preguntas){
  assert.ok(q.id&&!allIds.has(q.id),'ID duplicado '+q.id);allIds.add(q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  const correct=q.correcta ?? q.respuestaCorrecta;
  assert.ok(Number.isInteger(correct)&&correct>=0&&correct<=3);
  assert.equal(q.opciones[correct],q.respuestaLiteral,'Clave '+q.id);
  assert.ok(q.justificacion.length>=30);
  const trap=q.trampa ?? q.trampaExamen;
  assert.ok(typeof trap==='string'&&trap.length>15,'Falta trampa '+q.id);
  assert.ok(q.referencia);
 }
}
assert.equal(allIds.size,36);
assert.ok(read('AUDITORIA_CONTINUA.md').includes('CIERRE_FOCAL_T06_T08_20261106.md'));
console.log('LA PUEBLA T06–T08: 3 BANCOS 36 PREGUNTAS 144 OPCIONES; 9 MICROCASOS 36 OPCIONES; RESERVAS CI/E2E');
