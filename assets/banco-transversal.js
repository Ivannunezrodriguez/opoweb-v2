const root=document.querySelector('#transversal-app');
const $=s=>root.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='opoweb-banco-transversal-intentos-v1';
let bank=null,questions=[],shown=0,answers=new Map();
function sample(){return questions[shown];}
function listQuestions(){
 const subject=$('#f-materia').value,scope=$('#f-ambito').value,origin=$('#f-origen').value;
 questions=bank.preguntas.filter(q=>(subject==='TODAS'||q.materia===subject)&&
 (scope==='TODOS'||q.ambitos.includes(scope))&&
 (origin==='TODOS'||q.procedencia.tipo===origin));
 shown=0;answers=new Map();renderQuestion();
}
function renderQuestion(){
 const q=sample();
 const header='<section class="panel"><h2>Banco de preguntas reutilizables</h2><p><strong>'+questions.length+'</strong> preguntas en este filtro. Los ámbitos indican materias potencialmente reutilizables; comprueba siempre el programa específico de cada oposición.</p><p class="notice">Las 20 preguntas actuales proceden de bancos internos de OpoWeb. <strong>No son transcripciones del examen de La Puebla.</strong> Las preguntas de examen real se incorporarán solo tras contrastar su plantilla.</p></section>';
 if(!q){$('#question-area').innerHTML=header+'<section class="panel"><p>No existen preguntas con esta combinación de filtros.</p></section>';return;}
 const choice=answers.get(q.id);
 const options=q.opciones.map((o,i)=>'<button type="button" class="btn secondary" data-answer="'+i+'"'+(choice!==undefined?' disabled':'')+' style="text-align:left;white-space:normal;width:100%;margin:.25rem 0">'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('');
 const result=choice===undefined?'':('<div class="notice"><strong>'+(choice===q.respuestaCorrecta?'Respuesta acertada':'Respuesta incorrecta')+'</strong><p>Solución: '+esc(q.opciones[q.respuestaCorrecta])+'</p><p>'+esc(q.explicacion)+'</p>'+(q.trampa?'<p>⚠️ Foco examen: '+esc(q.trampa)+'</p>':'')+'<p><small>Referencia original: '+esc(q.referencia)+'</small></p></div>');
 $('#question-area').innerHTML=header+'<article class="panel"><p>Pregunta '+(shown+1)+' de '+questions.length+' · '+esc(q.materia.replaceAll('_',' '))+'</p><h3>'+esc(q.enunciado)+'</h3><div>'+options+'</div>'+result+'<p><small>Origen: banco temático de OpoWeb · '+esc(q.procedencia.origenId)+' · revisión editorial interna, no pregunta oficial.</small></p><div style="display:flex;gap:.6rem;flex-wrap:wrap"><button type="button" class="btn secondary" id="prev-question"'+(shown===0?' disabled':'')+'>Anterior</button><button type="button" class="btn" id="next-question"'+(shown===questions.length-1?' disabled':'')+'>Siguiente</button></div></article>';
 root.querySelectorAll('[data-answer]').forEach(el=>el.addEventListener('click',()=>{
  if(answers.has(q.id))return;
  const v=Number(el.dataset.answer);answers.set(q.id,v);
  try{
   const ledger=JSON.parse(localStorage.getItem(KEY)||'{}');
   ledger[q.id]={intentos:(ledger[q.id]?.intentos||0)+1,aciertos:(ledger[q.id]?.aciertos||0)+Number(v===q.respuestaCorrecta)};
   localStorage.setItem(KEY,JSON.stringify(ledger));
  }catch{}
  renderQuestion();
 }));
 $('#prev-question')?.addEventListener('click',()=>{shown--;renderQuestion()});
 $('#next-question')?.addEventListener('click',()=>{shown++;renderQuestion()});
}
try{
 const res=await fetch('data/banco-transversal.json',{cache:'no-cache'});
 if(!res.ok)throw new Error('HTTP '+res.status);
 bank=await res.json();
 const subjects=[...new Set(bank.preguntas.map(q=>q.materia))].sort();
 $('#f-materia').innerHTML='<option value="TODAS">Todas las materias</option>'+subjects.map(s=>'<option value="'+esc(s)+'">'+esc(s.replaceAll('_',' '))+'</option>').join('');
 $('#f-ambito').innerHTML='<option value="TODOS">Todas las administraciones</option>'+Object.entries(bank.criterios.categorias).map(([k,v])=>'<option value="'+esc(k)+'">'+esc(v)+'</option>').join('');
 $('#f-origen').innerHTML='<option value="TODOS">Todos los orígenes revisados</option><option value="BANCO_OPOWEB">Banco OpoWeb (no examen oficial)</option><option value="EXAMEN_OFICIAL">Examen oficial contrastado</option>';
 for(const selector of ['#f-materia','#f-ambito','#f-origen'])$(selector).addEventListener('change',listQuestions);
 listQuestions();
}catch(e){$('#question-area').textContent='No se ha podido cargar el banco de preguntas: '+e.message}
