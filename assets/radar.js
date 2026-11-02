import {classifyRadarEntries} from './radar-quality.js?v=2';

const app=document.querySelector('#radar-app');
const THEME_KEY='opoweb-theme';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  localStorage.setItem(THEME_KEY,theme);
  const b=document.querySelector('#theme-toggle');
  if(b)b.textContent=theme==='dark'?'☀️ Claro':'🌙 Oscuro';
}
setTheme(localStorage.getItem(THEME_KEY)||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
document.querySelector('#theme-toggle')?.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

let data={opportunities:[]}, entries=[];
let filters={q:'',view:'RECIENTES',state:'TODAS',zone:'TODAS',kind:'TODAS'};
let shown=40;
const missing='Sin verificar en las bases';
function day(v){
 const s=String(v||'');
 if(/^\d{4}-\d{2}-\d{2}$/.test(s))return s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4);
 return s||'No consta';
}
function ageDays(iso,asOf){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(iso||''))return Infinity;
 const n=(Date.parse(asOf+'T12:00:00Z')-Date.parse(iso+'T12:00:00Z'))/86400000;
 return Number.isFinite(n)?Math.floor(n):Infinity;
}
function stateLabel(v){
 return {PLAZO_ABIERTO:'Plazo con fecha publicada',REVISAR:'Plazo sin comprobar',PREVISTA:'OEP, aún sin convocatoria',CERRADA:'Plazo vencido',SEGUIMIENTO:'Seguimiento / no es nueva oferta'}[v]||'Estado pendiente';
}
function matchView(o){
 const asOf=data.generatedAt||new Date().toISOString().slice(0,10);
 if(filters.view==='RECIENTES')return o.actionable&&o.state!=='CERRADA'&&ageDays(o.firstSeen,asOf)<=30;
 if(filters.view==='OPORTUNIDADES')return o.actionable&&o.state!=='CERRADA';
 if(filters.view==='INCOMPLETAS')return !o.actionable&&!o.phaseFollowup;
 if(filters.view==='SEGUIMIENTO')return o.phaseFollowup;
 return true;
}
function visible(o){
 return matchView(o)&&
  (filters.state==='TODAS'||o.state===filters.state)&&
  (filters.zone==='TODAS'||o.zone===filters.zone)&&
  (filters.kind==='TODAS'||o.kind===filters.kind)&&
  norm([o.title,o.position,o.organism,o.location,o.group,o.kind].join(' ')).includes(norm(filters.q));
}
function meta(label,value){return '<div><span>'+esc(label)+'</span><strong>'+esc(value??missing)+'</strong></div>';}
function card(o){
 const heading=o.position||'Puesto no identificado en el anuncio';
 const detail=o.title===heading?'':o.title;
 const confirmation=o.deadlineIso
   ? 'Fecha límite declarada por la fuente; revisa posibles rectificaciones oficiales.'
   : 'No consta fecha límite verificable. Consulta las bases o el anuncio oficial antes de solicitar.';
 const tags=[
  '<span class="radar-tag '+(o.state==='PLAZO_ABIERTO'?'ok':'review')+'">'+esc(stateLabel(o.state))+'</span>',
  '<span class="radar-tag">'+esc(o.kind)+'</span>',
  o.isNew?'<span class="radar-tag new">NUEVA EN RADAR</span>':'',
  o.informationPending?'<span class="radar-tag">Ficha parcial</span>':''
 ].join('');
 const official=o.officialUrl?'<a class="btn" href="'+esc(o.officialUrl)+'" target="_blank" rel="noopener noreferrer">Ver anuncio oficial ↗</a>':'<span class="radar-note">Sin enlace oficial utilizable</span>';
 return '<article class="radar-card" data-quality="'+esc(o.actionable?'PUESTO':'SIN_PUESTO')+'">'+
  '<div class="radar-tags">'+tags+'</div>'+
  '<div><h3>'+esc(heading)+'</h3><p class="radar-org">'+esc(o.organism)+'</p>'+
  (detail?'<p class="radar-excerpt">'+esc(detail.slice(0,320))+'</p>':'')+'</div>'+
  '<div class="radar-meta">'+
   meta('Localidad / destino',o.location)+meta('Tipo',o.kind)+
   meta('Plazas',o.vacancies??missing)+meta('Grupo',o.group==='REVISAR'?missing:o.group)+
   meta('Plazo de solicitudes',o.deadline?day(o.deadline):missing)+
   (o.applicationTerm?meta('Regla de presentación',o.applicationTerm):'')+
   meta('Forma de acceso',o.access||missing)+meta('Titulación requerida',o.qualification||missing)+
   meta('Detectado por Radar',day(o.firstSeen))+
  '</div>'+
  '<p class="radar-note">'+esc(confirmation)+'</p>'+
  '<div class="radar-actions">'+official+'</div>'+
  '<div class="radar-source">Origen: '+esc(o.source||'Por identificar')+
  (o.detailsStatus==='LEIDO'?' · Documento oficial leído automáticamente; comprueba el texto original.':' · Datos extraídos del título; las bases pueden contener requisitos adicionales.')+'</div>'+
  '</article>';
}
function render(){
 const all=entries;
 const asOf=data.generatedAt||new Date().toISOString().slice(0,10);
 const recent=all.filter(x=>x.actionable&&x.state!=='CERRADA'&&ageDays(x.firstSeen,asOf)<=30);
 const actionable=all.filter(x=>x.actionable&&!x.phaseFollowup);
 const confirmed=actionable.filter(x=>x.state==='PLAZO_ABIERTO');
 const discarded=all.filter(x=>x.phaseFollowup);
 const list=all.filter(visible);
 const stale=ageDays(data.generatedAt,new Date().toISOString().slice(0,10))>3;
 const statuses=(data.sourceStatus||[]).filter(x=>x.ok===true).length;
 const cards=list.length?list.slice(0,shown).map(card).join(''):'<div class="panel radar-empty">No hay fichas que cumplan los filtros. Prueba «Todos los puestos detectados» o cambia la zona.</div>';
 app.innerHTML=[
 '<section class="panel radar-hero"><div><p class="eyebrow">Detección automatizada · no equivale a solicitud abierta</p><h2>Radar de empleo público</h2>',
 '<p>Primero se muestran <strong>puestos identificables</strong> con enlace oficial. Los datos no comprobados figuran como <strong>sin verificar</strong>. Las actas, listas y resultados se separan de nuevas oportunidades.</p>',
 stale?'<p class="notice warning">La última actualización tiene más de 3 días. Revisa los plazos en la fuente oficial.</p>':'',
 '</div><div class="radar-stats">',
 '<div class="radar-stat"><strong>'+recent.length+'</strong><span>puestos detectados en 30 días</span></div>',
 '<div class="radar-stat"><strong>'+confirmed.length+'</strong><span>plazos con fecha publicada</span></div>',
 '<div class="radar-stat"><strong>'+actionable.length+'</strong><span>fichas con puesto identificado</span></div>',
 '<div class="radar-stat"><strong>'+discarded.length+'</strong><span>anuncios de seguimiento separados</span></div></div>',
 '<p class="radar-source">Datos generados: <strong>'+esc(day(data.generatedAt))+'</strong>. Fuentes que respondieron: <strong>'+statuses+'/'+(data.sourceStatus||[]).length+'</strong>. Son registros detectados, no plazas abiertas ni solicitudes.</p></section>',
 '<section class="panel"><div class="radar-controls">',
 '<label><span>Buscar puesto, localidad u organismo</span><input id="rq" type="search" value="'+esc(filters.q)+'" placeholder="Auxiliar, administrativo, Getafe, Toledo…"></label>',
 '<label><span>Ver</span><select id="rv"><option value="RECIENTES">Puestos recientes (30 días)</option><option value="OPORTUNIDADES">Todos los puestos detectados</option><option value="INCOMPLETAS">Sin puesto identificable</option><option value="SEGUIMIENTO">Actas y listas (ocultas)</option><option value="TODAS">Todos los registros</option></select></label>',
 '<label><span>Plazo / estado</span><select id="rs"><option value="TODAS">Todos</option><option value="PLAZO_ABIERTO">Plazo con fecha publicada</option><option value="REVISAR">Plazo sin verificar</option><option value="PREVISTA">OEP sin convocatoria</option><option value="CERRADA">Plazo vencido</option></select></label>',
 '<label><span>Zona</span><select id="rz"><option value="TODAS">Todas</option><option value="TOLEDO">Provincia de Toledo</option><option value="MADRID_SUR">Sur de Madrid</option></select></label>',
 '<label><span>Tipo</span><select id="rk"><option value="TODAS">Cualquiera</option><option value="Oposición / proceso selectivo">Oposición / proceso selectivo</option><option value="Bolsa">Bolsas de empleo</option><option value="Temporal">Temporal / sustitución</option><option value="Oferta de empleo (sin convocatoria)">OEP sin convocatoria</option></select></label>',
 '</div><p class="radar-note">Si faltan el plazo, grupo o titulación, Radar <strong>no los ha comprobado</strong>. No se confirma compatibilidad con DAM sin leer los requisitos.</p></section>',
 '<div class="radar-results-summary"><strong>'+list.length+'</strong> registros coinciden; se muestran '+Math.min(shown,list.length)+'.</div>',
 '<section class="radar-grid">'+cards+'</section>',
 shown<list.length?'<div class="radar-more"><button id="radar-more" class="btn secondary" type="button">Mostrar 40 fichas más</button></div>':''
 ].join('');
 for(const [id,key] of [['rv','view'],['rs','state'],['rz','zone'],['rk','kind']]){
  const select=document.querySelector('#'+id);if(!select)continue;
  select.value=filters[key];
  select.addEventListener('change',e=>{filters[key]=e.target.value;shown=40;render()});
 }
 document.querySelector('#rq')?.addEventListener('input',e=>{
  filters.q=e.target.value;shown=40;render();
  const input=document.querySelector('#rq');
  input?.focus();input?.setSelectionRange?.(input.value.length,input.value.length);
 });
 document.querySelector('#radar-more')?.addEventListener('click',()=>{shown+=40;render()});
}
try{
 const r=await fetch('data/radar.json',{cache:'no-cache'});
 if(!r.ok)throw new Error('HTTP '+r.status);
 data=await r.json();
 entries=classifyRadarEntries(data.opportunities||[],data.generatedAt||new Date().toISOString().slice(0,10));
 render();
}catch(e){
 app.innerHTML='<section class="panel"><h2>Radar temporalmente no disponible</h2><p>'+esc(e.message)+'</p></section>';
}
