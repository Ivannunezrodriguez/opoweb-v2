import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {join,dirname,normalize} from 'node:path';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const root='content/la-puebla/';
const name='REPASO_FOCAL_T09_T12_20261107.md';
const repaso=read(root+name);
const acta=read(root+'CIERRE_FOCAL_T09_T12_20261107.md');
const programa=json('data/programa.json');
assert.equal(programa.temas.length,19);
assert.ok(repaso.includes('**07/11/2026**'));
for(const source of ['BOE-A-2018-16673','DOUE-L-2016-80807','BOE-A-2003-23186','BOE-A-2004-4214']){
 assert.ok(repaso.includes(source),'Falta normativa '+source);
}
assert.ok(repaso.includes('REPASO_FINAL_T10_T14_20261106.md'));
assert.ok(repaso.includes('**72 horas**')&&repaso.includes('**10 días**'));
assert.ok(repaso.includes('**1 % fijo + 1 % adicional')&&repaso.includes('**20 %**'));
assert.ok(repaso.includes('05/11/2026')&&repaso.includes('05/10/2026'));
assert.ok(repaso.includes('**1.000.000 € exactos**'));
const sections=repaso.split(/^### Caso [1-8] · Tema (?:9|10|11|12)\s*$/m);
assert.equal(sections.length,9,'Deben existir ocho microcasos');
const keys=['B','A','C','D','D','A','B','C'];
for(let i=0;i<8;i++){
 const sec=sections[i+1];
 assert.ok(sec,'Falta microcaso '+(i+1));
 const choices=[...sec.matchAll(/^- \*\*([ABCD])\.\*\* /gm)].map(m=>m[1]);
 assert.deepEqual(choices,['A','B','C','D'],'Opciones faltantes caso '+(i+1));
 const match=sec.match(/^\*\*Respuesta: ([ABCD])\.\*\*/m);
 assert.ok(match,'Sin clave del caso '+(i+1));
 assert.equal(match[1],keys[i],'Clave incorrecta caso '+(i+1));
 assert.ok(sec.includes('> ⚠️ **¡Foco Examen!:**'),'Sin foco '+(i+1));
}
const counts={9:8,10:8,11:7,12:5},ids=new Set();
for(let n=9;n<=12;n++){
 const t=programa.temas[n-1];
 assert.equal(t.numero,n);
 const manual=read(t.manual),sources=read(t.fuentes),matrix=json(t.matriz),bank=json(t.preguntas);
 assert.equal(bank.estado,'APROBADO_USUARIO');
 assert.equal(matrix.estado,'AUDITADO');
 assert.equal(matrix.cobertura.length,counts[n]);
 assert.equal(bank.preguntas.length,12);
 assert.ok(manual.includes(name),'Falta enlace al repaso en T'+n);
 assert.ok(sources.includes(name),'Falta enlace en fuentes T'+n);
 assert.ok(existsSync(normalize(join(dirname(t.manual),'../'+name))),'Enlace relativo roto T'+n);
 assert.ok(sources.includes('cotejo-integral-2026-11-04.md'),'Falta registro histórico T'+n);
 const focal=matrix.controlFocal20261107;
 assert.equal(focal?.resultado,'INCIDENCIAS_DOCUMENTALES_FOCALES_CORREGIDAS_CON_RESERVAS');
 assert.equal(focal?.bloquesHistoricos,counts[n]);
 assert.equal(focal?.preguntasHistoricas,12);
 assert.equal(focal?.alternativasHistoricas,48);
 assert.equal(focal?.referenciasPrecisadas,12);
 assert.equal(focal?.microcasosMarkdown,2);
 assert.equal(focal?.alternativasMicrocasos,8);
 assert.equal(focal?.certificacionIntegral,false);
 assert.equal(focal?.ejecucionGitHubActionsVerificada,false);
 assert.equal(focal?.pruebaNavegadorReal,false);
 for(const q of bank.preguntas){
  assert.ok(q.id&&!ids.has(q.id),'ID duplicado '+q.id);ids.add(q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  const k=q.correcta??q.respuestaCorrecta,trap=q.trampa??q.trampaExamen;
  assert.ok(Number.isInteger(k)&&k>=0&&k<=3,'Índice inválido '+q.id);
  assert.equal(q.opciones[k],q.respuestaLiteral,'Clave no corresponde '+q.id);
  assert.ok(q.justificacion.length>=30);
  assert.ok(typeof trap==='string'&&trap.length>15);
  assert.ok(q.referencia.includes('Fuente oficial: '),'Referencia sin artículo '+q.id);
  assert.ok(q.referencia.includes('https://www.boe.es/'),'Referencia sin BOE '+q.id);
 }
}
assert.equal(ids.size,48);
assert.ok(acta.includes('48 preguntas/192 alternativas'));
assert.ok(acta.includes('pruebas reales de navegador'));
assert.ok(read('AUDITORIA_CONTINUA.md').includes('CIERRE_FOCAL_T09_T12_20261107.md'));
console.log('LA PUEBLA T09–T12: 28 BLOQUES, 48 PREGUNTAS Y 192 ALTERNATIVAS ORIGINALES; 8 CASOS / 32 OPCIONES DE LECTURA, ESTADOS Y RESERVAS PRESERVADOS');
