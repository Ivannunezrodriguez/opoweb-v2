import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const load=p=>JSON.parse(readFileSync(p,'utf8'));
const program=load('data/programa-olias-auxiliar-edificios-2026.json');
const banks=program.temas.map(t=>load(t.preguntas));
const ids=new Set();const distribution=[0,0,0,0];let total=0;
for(const bank of banks){for(const q of bank.preguntas){
 assert(!ids.has(q.id),'duplicate ID '+q.id);ids.add(q.id);total++;
 assert(q.opciones.length===4 && q.opciones.every(x=>typeof x==='string'&&x.trim()),q.id);
 assert(Number.isInteger(q.respuestaCorrecta) && q.respuestaCorrecta>=0 && q.respuestaCorrecta<4,q.id);
 distribution[q.respuestaCorrecta]++;
}}
assert.equal(total,264);
for(const count of distribution)assert(count>=45&&count<=75,'Question key bias '+JSON.stringify(distribution));
const psycho=load('content/olias-auxiliar-edificios/psicotecnicos.json').preguntas;
assert.equal(psycho.length,40);
assert.equal(new Set(psycho.map(x=>x.id)).size,40);
const areas=new Set(psycho.map(x=>x.area));assert.equal(areas.size,4);
for(const p of psycho){assert.equal(p.opciones.length,4);assert(p.correcta>=0&&p.correcta<=3);}
const sims=load('content/olias-auxiliar-edificios/simulacros.json').simulacros;
assert.equal(sims.length,2);
for(const sim of sims){
 assert.equal(sim.tipoPuntuacion,'EXAMEN_OLIAS_2026');assert.equal(sim.preguntas.length,70);
 assert.equal(sim.preguntas.filter(q=>typeof q==='string').length,50);
 assert.equal(sim.preguntas.filter(q=>typeof q!=='string').length,20);
 assert.equal(new Set(sim.preguntas.map(q=>typeof q==='string'?q:q.id)).size,70);
 assert.equal(sim.duracionMinutos,null,'The tribunal has not yet set the duration');
 for(const ref of sim.preguntas.slice(0,50))assert(ids.has(ref),'Missing theory question '+ref);
}
const src=readFileSync('assets/practice.js','utf8');
assert.match(src,/olias-del-rey-auxiliar-edificios-c2-2026/);
assert.match(src,/EXAMEN_OLIAS_2026/);
assert.match(src,/oliaPart\(0, 50, 1\)/);
assert.match(src,/oliaPart\(50, 70, 2\.5\)/);
const start=src.indexOf('function finishExercise(items,');
const end=src.indexOf('\nasync function loadCall(',start);
assert(start>=0&&end>start);
const factory=new Function('document','simulacros','saveAttempt','escapeHtml','scrollTo',src.slice(start,end)+'\nreturn finishExercise;');
function verify(label,answers,expectTheory,expectPsych,expectPass){
 const cards=answers.map(answer=>({classList:{add(){}},querySelector(sel){
   if(sel==='input:checked')return answer===null?null:{value:String(answer)};
   if(sel==='.solution')return {hidden:true,innerHTML:''};
   return null;},querySelectorAll(){return []}}));
 let captured,html='';const finish={disabled:false,textContent:''};
 const doc={querySelector(sel){
   if(sel==='#finish')return finish;
   if(sel==='#exercise-form')return {prepend(node){html=node.innerHTML}};
   const m=/data-question="(\d+)"/.exec(sel);
   return m?cards[Number(m[1])]:null;
 },createElement(){return {className:'',innerHTML:''}}};
 const handler=factory(doc,{simulacros:sims},(a,r)=>{captured={a,r}},v=>String(v),()=>{});
 const fake=answers.map((_,i)=>({id:'TEST-'+i,correcta:0,opciones:['A','B','C','D'],justificacion:'Explanation',trampa:'Trap',referencia:'BOP 4833'}));
 handler(fake,null,{exerciseId:'OLIAS-SIM-EXAM-01',title:label,type:'simulacro',primaryCount:70});
 assert.equal(captured.a.notaOliasTeoria,expectTheory,label+' theory');
 assert.equal(captured.a.notaOliasPsico,expectPsych,label+' psych');
 assert.equal(/SUPERADOS ambos mínimos/.test(html),expectPass,label+' qualification');
 assert.match(html,/psicotécnico/);
}
verify('all correct',Array(70).fill(0),50,50,true);
verify('just pass both',Array(25).fill(0).concat(Array(25).fill(null),Array(10).fill(0),Array(10).fill(null)),25,25,true);
verify('fail theory',Array(25).fill(0).concat(Array(25).fill(1),Array(20).fill(0)),16.67,50,false);
console.log('OLIAS_PRACTICE_2026_OK',JSON.stringify({themes:22,questions:total,positions:distribution,psychometric:psycho.length,simulators:sims.length}));
