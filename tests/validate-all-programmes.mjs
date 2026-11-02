import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
// Structural checks only. Legal accuracy requires separate official-source review.
const base = path.resolve(import.meta.dirname, '..');
const exists = p => existsSync(path.join(base, p));
const read = p => JSON.parse(readFileSync(path.join(base, p), 'utf8'));
const configs = [
 ['La Puebla C2', 'data/programa.json','content/la-puebla',19],
 ['Diputación C2', 'data/programa-diputacion-auxiliar-c2-2026.json','content/diputacion-toledo-auxiliar-c2',20],
 ['UC3M C2','data/programa-uc3m-auxiliar-administrativa-2026.json','content/uc3m',20],
 ['Diputación C1','data/programa-diputacion-administrativo-2026.json','content/diputacion-toledo',40],
];
const summary = {temas:0,bancos:0,preguntas:0,convocatorias:[],avisos:[]};
for (const [name, manifest, folder, count] of configs) {
 const data=read(manifest);
 assert.equal(data.temas.length,count,name + ': recuento del programa');
 let questions=0, matrices=0, fuentes=0;
 const numbers=new Set();
 for(const t of data.temas){
  assert.ok(Number.isInteger(t.numero) && !numbers.has(t.numero),name + ': tema duplicado o inválido');
  numbers.add(t.numero);
  const dir=folder+'/tema-'+String(t.numero).padStart(2,'0');
  const manual=t.manual||dir+'/manual.md';
  const bankPath=t.preguntas||dir+'/preguntas.json';
  assert.ok(exists(manual),name+': falta '+manual);
  assert.ok(exists(bankPath),name+': falta '+bankPath);
  const matrix=t.matriz||dir+'/matriz.json';
  const src=t.fuentes||dir+'/fuentes.md';
  if(exists(matrix)){read(matrix);matrices++;} else summary.avisos.push(name+' tema '+t.numero+': sin matriz.json independiente');
  if(exists(src))fuentes++; else summary.avisos.push(name+' tema '+t.numero+': sin fuentes.md independiente; revisar fuentes modulares');
  const j=read(bankPath);const q=j.preguntas;
  assert.ok(Array.isArray(q) && q.length>0,bankPath+': banco vacío');
  const ids=new Set();
  for(let i=0;i<q.length;i++){
   const a=q[i],id=a.id||bankPath+':'+i;
   assert.ok(!ids.has(id),bankPath+': ID repetido '+id);ids.add(id);
   const title=a.enunciado??a.pregunta;
   assert.ok(typeof title==='string' && title.trim(),bankPath+': pregunta sin texto '+id);
   assert.ok(Array.isArray(a.opciones)&&a.opciones.length===4&&a.opciones.every(v=>typeof v==='string'&&v.trim()),bankPath+': opciones incorrectas '+id);
   const answer=a.respuestaCorrecta??a.correcta;
   assert.ok(Number.isInteger(answer)&&answer>=0&&answer<=3,bankPath+': respuesta fuera de rango '+id);
   assert.ok(typeof a.justificacion==='string'&&a.justificacion.trim(),bankPath+': sin justificación '+id);
   assert.ok(typeof a.referencia==='string'&&a.referencia.trim(),bankPath+': sin referencia '+id);
  }
  questions+=q.length;
  summary.bancos++;
 }
 summary.temas+=count;summary.preguntas+=questions;
 summary.convocatorias.push({nombre:name,temas:count,preguntas:questions,matricesIndependientes:matrices,fuentesIndependientes:fuentes});
}
console.log(JSON.stringify(summary,null,2));
console.log('VALIDACION_ESTRUCTURAL_99_TEMAS_OK');
