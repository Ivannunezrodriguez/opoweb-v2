const app=document.querySelector('#radar-app');
const THEME_KEY='opoweb-theme';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function setTheme(theme){document.documentElement.dataset.theme=theme;localStorage.setItem(THEME_KEY,theme);const b=document.querySelector('#theme-toggle');if(b)b.textContent=theme==='dark'?'☀️ Claro':'🌙 Oscuro'}
setTheme(localStorage.getItem(THEME_KEY)||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
document.querySelector('#theme-toggle')?.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

let data={opportunities:[]};
let filters={q:'',status:'ACTIVA',zone:'TODAS',compat:'TODAS'};

function compatibilityLabel(v){return v==='CUMPLE'?'🟢 Titulación compatible':v==='REVISAR'?'🟡 Revisar bases':'⚪ No compatible'}
function stateLabel(v){return ({PLAZO_ABIERTO:'Plazo abierto',REVISAR:'Anuncio por revisar',BASES_PUBLICADAS:'Bases publicadas',PREVISTA:'Próximamente',SEGUIMIENTO:'Seguimiento',CERRADA:'Plazo cerrado'})[v]||v}
function visible(o){
 const hay=norm([o.title,o.organism,o.location,o.group,o.category].join(' ')).includes(norm(filters.q));
 const active=filters.status==='TODAS'||(filters.status==='ACTIVA'?o.state!=='CERRADA':o.state===filters.status);
 return hay&&active&&(filters.zone==='TODAS'||o.zone===filters.zone)&&(filters.compat==='TODAS'||o.compatibility===filters.compat);
}
function card(o){
 const official=/^https:\/\//.test(o.officialUrl||'')?o.officialUrl:'#';
 return `<article class="radar-card">
 <div class="radar-tags"><span class="radar-tag ${o.compatibility==='CUMPLE'?'ok':'review'}">${compatibilityLabel(o.compatibility)}</span><span class="radar-tag">${esc(stateLabel(o.state))}</span>${o.isNew?'<span class="radar-tag new">NUEVA</span>':''}</div>
 <div><h3>${esc(o.title)}</h3><p class="radar-note">${esc(o.organism)}</p></div>
 <div class="radar-meta">
  <div><span>Ubicación</span><strong>${esc(o.location)}</strong></div><div><span>Grupo</span><strong>${esc(o.group||'—')}</strong></div>
  <div><span>Plazas</span><strong>${esc(o.vacancies??'—')}</strong></div><div><span>Fin de plazo</span><strong>${esc(o.deadline||'Por determinar')}</strong></div>
  <div><span>Acceso</span><strong>${esc(o.access||'Por revisar')}</strong></div><div><span>Titulación</span><strong>${esc(o.qualification||'Revisar bases')}</strong></div>
 </div>
 ${o.reason?'<p class="radar-note">'+esc(o.reason)+'</p>':''}
 <div class="radar-actions"><a class="btn" href="${esc(official)}" target="_blank" rel="noopener">Fuente oficial ↗</a></div>
 <div class="radar-source">Fuente: ${esc(o.source||'oficial')} · Detectado: ${esc(o.firstSeen||'pendiente')}</div>
 </article>`;
}
function render(){
 const all=data.opportunities||[], list=all.filter(visible);
 const open=all.filter(x=>x.state==='PLAZO_ABIERTO').length, compatible=all.filter(x=>x.compatibility==='CUMPLE'&&x.state!=='CERRADA').length;
 app.innerHTML=`<section class="panel radar-hero"><div><p class="eyebrow">Actualización automática</p><h2>Oportunidades detectadas</h2><p>Se priorizan procesos públicos de Toledo y sur de Madrid compatibles con titulaciones de Técnico Superior, C1/C2 y perfiles vinculados con DAM. La decisión final se comprueba siempre contra las bases oficiales.</p></div>
 <div class="radar-stats"><div class="radar-stat"><strong>${compatible}</strong><span>compatibles activas</span></div><div class="radar-stat"><strong>${open}</strong><span>con plazo abierto</span></div><div class="radar-stat"><strong>${all.length}</strong><span>procesos vigilados</span></div><div class="radar-stat"><strong>${esc(data.generatedAt||'—')}</strong><span>última consulta completada</span></div></div></section>
 <section class="panel"><div class="radar-controls">
 <label><span>Buscar</span><input id="rq" type="search" value="${esc(filters.q)}" placeholder="Auxiliar, informática, universidad…"></label>
 <label><span>Estado</span><select id="rs"><option value="ACTIVA">Activas</option><option value="TODAS">Todas</option><option value="PLAZO_ABIERTO">Plazo abierto</option><option value="REVISAR">Por revisar</option><option value="BASES_PUBLICADAS">Bases</option><option value="PREVISTA">Próximamente</option><option value="CERRADA">Cerradas</option></select></label>
 <label><span>Zona</span><select id="rz"><option value="TODAS">Todas</option><option value="TOLEDO">Toledo</option><option value="MADRID_SUR">Madrid sur</option></select></label>
 <label><span>Compatibilidad</span><select id="rc"><option value="TODAS">Todas</option><option value="CUMPLE">Compatible</option><option value="REVISAR">Revisar</option></select></label>
 </div></section>
 <section class="radar-grid">${list.length?list.map(card).join(''):'<div class="panel radar-empty">No hay resultados con estos filtros.</div>'}</section>`;
 document.querySelector('#rs').value=filters.status;document.querySelector('#rz').value=filters.zone;document.querySelector('#rc').value=filters.compat;
 document.querySelector('#rq').addEventListener('input',e=>{filters.q=e.target.value;render()});
 document.querySelector('#rs').addEventListener('change',e=>{filters.status=e.target.value;render()});
 document.querySelector('#rz').addEventListener('change',e=>{filters.zone=e.target.value;render()});
 document.querySelector('#rc').addEventListener('change',e=>{filters.compat=e.target.value;render()});
}
try{const r=await fetch('data/radar.json',{cache:'no-cache'});if(!r.ok)throw new Error('HTTP '+r.status);data=await r.json();render()}catch(e){app.innerHTML='<section class="panel"><h2>Radar temporalmente no disponible</h2><p>'+esc(e.message)+'</p></section>'}