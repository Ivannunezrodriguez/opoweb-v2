import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p => readFileSync(p,'utf8');
const json = p => JSON.parse(read(p));
const supplemental = json('data/uc3m-repasos-complementarios-20261106.json');
const acta = read('content/uc3m/CIERRE_DOCUMENTAL_T09_T12_20261106.md');
const expectations = [
  {n:9,sections:14,package:'UC3M-ADIC-20261106-T09',extra:'REPASO_OFIMATICA_T09_20261106.md',source:'support.microsoft.com',gaps:2},
  {n:12,sections:17,package:'UC3M-ADIC-20261106-T12',extra:'REPASO_PRL_T12_20261106.md',source:'BOE-A-1995-24292',gaps:4}
];
for(const x of expectations){
  const dir='content/uc3m/tema-'+String(x.n).padStart(2,'0')+'/';
  const manual=read(dir+'manual.md'),sources=read(dir+'fuentes.md');
  const cotejo=read(dir+'cotejo-integral-2026-11-04.md');
  const bank=json(dir+'preguntas.json');
  const matrix=json(dir+'matriz.json');
  const extra=read('content/uc3m/'+x.extra);
  const originalSections=[...manual.matchAll(/^## (\d+)\. [^\n]+$/gm)].map(m=>Number(m[1])).filter(i=>i<=x.sections);
  assert.deepEqual([...new Set(originalSections)],[...Array(x.sections)].map((_,i)=>i+1),'Manual sin bloques completos T'+x.n);
  assert.ok(sources.includes(x.source),'Falta fuente primaria T'+x.n);
  assert.ok(bank.preguntas.length===12,'Banco histórico debe conservar 12 preguntas T'+x.n);
  const ids=new Set();
  for (const q of bank.preguntas){
    assert.ok(q.id && !ids.has(q.id),'Identificador original duplicado');
    ids.add(q.id);
    assert.ok(q.opciones.length===4 && q.opciones.every(Boolean),'Cuatro alternativas literales por pregunta');
    assert.ok(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4,'Indice de clave incorrecto');
    assert.equal(q.respuestaLiteral,q.opciones[q.correcta],'Respuesta literal incorrecta: '+q.id);
    assert.ok(q.justificacion&&q.trampa&&q.referencia,'Falta justificacion / trampa / referencia: '+q.id);
    assert.ok(cotejo.includes('### '+q.id+' '),'Sin cotejo independiente de distractores: '+q.id);
  }
  const questionnaire=extra.slice(extra.indexOf('## Cuestionario'),extra.indexOf('## Plantilla'));
  assert.equal((questionnaire.match(/^### Pregunta \d+/gm)||[]).length,12,'No hay 12 preguntas adicionales');
  assert.equal((questionnaire.match(/^- \*\*[A-D]\.\*\* /gm)||[]).length,48,'No hay 48 opciones adicionales');
  assert.equal((extra.match(/^> ⚠️ \*\*¡Foco Examen!:/gm)||[]).length,12,'No hay 12 focos examen');
  const pack=supplemental.paquetes.find(p=>p.id===x.package);
  assert.ok(pack && pack.preguntas.length===12,'No está convertido al catálogo interactivo');
  for(const q of pack.preguntas){
    assert.equal(q.tema,x.n);
    assert.ok(!ids.has(q.id),'Se ha reutilizado ID del banco original');
    assert.equal(q.opciones.length,4);
    assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
    assert.ok(q.justificacion&&q.referencia);
  }
  assert.equal(matrix.estado,'AUDITADO','Cierre editorial T9/T12 debe estar sincronizado');
  // AUDITADO significa revisión editorial; aprobación individual del usuario sigue siendo false.
  assert.equal(matrix.cierreDocumental20261106?.aprobacionUsuario,false,'No fingir aprobación del usuario');
  assert.equal(matrix.cierreDocumental20261106?.resultado,'CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS');
  assert.equal(matrix.cierreDocumental20261106?.bloquesHistoricosSinPreguntaReforzados,x.gaps);
  assert.equal(matrix.cierreDocumental20261106?.aprobacionUsuario,false);
  assert.ok(acta.includes('Tema '+x.n) || acta.includes('tema '+x.n),'No consta en acta');
}
console.log('UC3M_CIERRE_DOCUMENTAL_T09_T12: 2 TEMAS / 24 HISTORICAS / 24 COMPLEMENTARIAS / 96 OPCIONES EN CADA CONJUNTO / RESERVAS EXPLICITAS OK');
