import {classifyRadarEntries} from './radar-quality.js?v=2026.11.25.1';
import {assessOpportunityEvidence} from './radar-provenance.js';
import {matchTrackedCall,trackingState,decorateTracking} from './radar-tracking.js?v=2';
import {orderRadar,deadlineAlert} from './radar-sort.js?v=1';

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

let data={opportunities:[]}, entries=[], trackedCalls=[];
const PERSONAL_KEY='opoweb-radar-local-tracking-v1';
const TRACKING_OPTIONS=[
 ['','Sin indicar'],['SOLICITUD_REGISTRADA_PENDIENTE_ADMISION','Solicitud presentada'],
 ['ADMITIDO_PROVISIONALMENTE','Admitido provisionalmente'],
 ['ADMITIDO_DEFINITIVAMENTE','Admitido definitivamente'],
 ['PENDIENTE_INSCRIPCION','Inscripción pendiente'],
 ['DESCARTADO','Descartada']
];
function readLocalTracking(){
 try{
  const raw=JSON.parse(localStorage.getItem(PERSONAL_KEY)||'{}');
  return raw && typeof raw==='object' && !Array.isArray(raw)?raw:{};
 }catch{return {};}
}
let localTracking=readLocalTracking();
function saveLocalTracking(id,state){
 if(!id || !TRACKING_OPTIONS.some(x=>x[0]===state))return;
 if(state)localTracking[id]=state;
 else delete localTracking[id];
 localStorage.setItem(PERSONAL_KEY,JSON.stringify(localTracking));
}
let filters={q:'',view:'OPORTUNIDADES',state:'TODAS',zone:'TODAS',kind:'TODAS',vacancies:'TODAS',sort:'RELEVANCIA'};
let shown=40;
let searchTimer=null;
const searchCache=new WeakMap();
const searchableText=o=>{
 if(!searchCache.has(o))searchCache.set(o,norm([o.title,o.position,o.organism,o.location,o.group,o.kind].join(' ')));
 return searchCache.get(o);
};
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
 return {PLAZO_ABIERTO:'Plazo con fecha publicada',REVISAR:'Plazo sin comprobar',PREVISTA:'OEP, aún sin convocatoria',CERRADA:'Plazo cerrado',CIERRE_PROBABLE:'Cierre probable · comprobar',SEGUIMIENTO:'Seguimiento / no es nueva oferta'}[v]||'Estado pendiente';
}
function matchView(o){
 const asOf=new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'});
 if(filters.view==='MIS_PROCESOS')return !!o.trackedCall;
 if(filters.view==='CADUCADAS')return o.state==='CERRADA'||o.state==='CIERRE_PROBABLE';
 if(filters.view==='OEP_FUTURAS')return o.offerWithoutCall===true;
 if(filters.view==='RECIENTES')return o.actionable&&o.state!=='CERRADA'&&o.state!=='CIERRE_PROBABLE'&&ageDays(o.firstSeen,asOf)<=30;
 if(filters.view==='OPORTUNIDADES')return (o.actionable&&o.state!=='CERRADA'&&o.state!=='CIERRE_PROBABLE') || (!!o.trackedCall&&(o.state==='CERRADA'||o.state==='CIERRE_PROBABLE'));
 if(filters.view==='INCOMPLETAS')return !o.actionable&&!o.phaseFollowup&&!o.offerWithoutCall;
 if(filters.view==='SEGUIMIENTO')return o.phaseFollowup;
 return true;
}
function matchesVacancies(o){
 const count=Number(o.vacancies);
 const valid=Number.isInteger(count)&&count>0;
 if(filters.vacancies==='TODAS')return true;
 if(filters.vacancies==='SIN_DATO')return !valid;
 if(!valid)return false;
 if(filters.vacancies==='UNA')return count===1;
 const minimum=Number(filters.vacancies);
 return Number.isInteger(minimum)&&count>=minimum;
}
function visible(o,query){
 return matchView(o)&&
  (filters.state==='TODAS'||o.state===filters.state)&&
  (filters.zone==='TODAS'||o.zone===filters.zone)&&
  (filters.kind==='TODAS'||o.kind===filters.kind)&&
  matchesVacancies(o)&&
  (!query||searchableText(o).includes(query));
}
function meta(label,value){return '<div><span>'+esc(label)+'</span><strong>'+esc(value??missing)+'</strong></div>';}
function qualificationEvidenceMarkup(o){
 const r=o.qualificationEvidence;
 if(!r||typeof r.literal!=='string'||!r.literal.trim()||r.qualification!==o.qualification)return '';
 let link='';
 try{const url=new URL(r.sourceUrl);if(url.protocol==='https:'&&!url.username&&!url.password)link='<a href="'+esc(url.href)+'" target="_blank" rel="noopener noreferrer">Documento de procedencia</a>';}catch{}
 return '<details class="radar-source"><summary><strong>Procedencia de la titulación</strong></summary><p>'+esc(r.literal)+'</p><p>'+link+' · Lectura automática parcial; comprobar el apartado íntegro y sus equivalencias.</p></details>';
}
function additionalRequirementsMarkup(o){
 const requirements=Array.isArray(o.additionalRequirements)?o.additionalRequirements:[];
 const rows=requirements.filter(r=>r&&typeof r.literal==='string'&&r.literal.trim()&&['PERMISO_CONDUCIR','EXPERIENCIA_MINIMA'].includes(r.type)).slice(0,12).map(r=>{
  let link='';
  try{const u=new URL(r.sourceUrl);if(u.protocol==='https:'&&!u.username&&!u.password)link='<a href="'+esc(u.href)+'" target="_blank" rel="noopener noreferrer">Documento de procedencia</a>';}catch{}
  return '<li><strong>'+esc(r.type==='PERMISO_CONDUCIR'?'Permiso de conducir':'Experiencia mínima')+':</strong> '+esc(r.literal)+(link?' · '+link:' · Procedencia pendiente de comprobar')+'</li>';
 });
 return rows.length?'<details class="radar-source"><summary><strong>Requisitos adicionales detectados</strong></summary><ul>'+rows.join('')+'</ul><p>Extracción automática parcial. No acredita el cumplimiento ni sustituye la lectura íntegra de las bases.</p></details>':'';
}
function card(o){
 const heading=o.position||'Puesto no identificado en el anuncio';
 const detail=o.title===heading?'':o.title;
 const tracked=o.trackedCall?trackingState(o.trackedCall):null;
 const publicationDay=/^\d{4}-\d{2}-\d{2}$/.test(o.publishedAt||'')?o.publishedAt:null;
 const oldUnconfirmed=!o.deadlineIso&&publicationDay&&ageDays(publicationDay,new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'}))>30;
 const trackingTag=tracked?'<span class="radar-tag radar-tracking '+esc(tracked.className)+'">'+esc(tracked.label)+'</span>':'';
 const trackControl=o.matchedCallId?'<label class="radar-local-control">Mi estado en esta convocatoria <select data-radar-track="'+esc(o.matchedCallId)+'" aria-label="Estado personal en '+esc(o.organism)+'">'+TRACKING_OPTIONS.map(([value,label])=>'<option value="'+esc(value)+'"'+(localTracking[o.matchedCallId]===value?' selected':'')+'>'+esc(label)+'</option>').join('')+'</select></label>':'';
 const oldTag=oldUnconfirmed?'<span class="radar-tag review">Más de 30 días · revisar cierre</span>':'';
 const evidence=assessOpportunityEvidence(o);
 const originBadge=evidence.label;
 const sourceLinks=evidence.references.map(ref=>
   '<a href="'+esc(ref.url)+'" target="_blank" rel="noopener noreferrer">'+esc(ref.label)+'</a>'
 ).join(' · ');
 const missingEvidence=evidence.requirementsMissing.length
   ?' · Pendiente: '+evidence.requirementsMissing.join(', ')
   :' · Datos principales encontrados, sin revisión jurídica integral';
 const confirmation=o.applicationRuleConflict
   ? 'ALERTA DE DISCREPANCIA: las reglas de plazo extraídas de fuentes del mismo expediente no coinciden (días hábiles/naturales o publicación de inicio). Sin fecha de cierre confirmada hasta cotejo oficial.'
   : o.offerWithoutCall
   ? 'Oferta de empleo público: todavía no acredita convocatoria ni plazo de solicitudes. Consulta la resolución de convocatoria posterior.'
   : o.deadlineDisputed
   ? 'Discrepancia entre BOP y BOE: no se confirma la fecha exacta de cierre hasta aclaración oficial.'
   : o.deadlineIso
   ? 'Fecha límite asentada en el anuncio o la ficha de convocatoria; comprueba posibles rectificaciones oficiales.'
   : o.applicationTerm
     ? 'Hay una regla de plazo publicada, pero no una fecha de cierre acreditada. Se debe comprobar la publicación de inicio y el calendario aplicable.'
     : 'No se ha podido extraer ni una fecha de cierre ni una regla de plazo. Consulta las bases oficiales antes de solicitar.';
 const alert=deadlineAlert(o,new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'}));
 const tags=[
  trackingTag,
  alert?'<span class="radar-tag urgent">'+esc(alert)+'</span>':'',
  oldTag,
  '<span class="radar-tag '+(o.state==='PLAZO_ABIERTO'?'ok':o.state==='CERRADA'?'closed':'review')+'">'+esc(stateLabel(o.state))+'</span>',
  '<span class="radar-tag">'+esc(o.kind)+'</span>',
  o.isNew?'<span class="radar-tag new">NUEVA EN RADAR</span>':'',
  o.informationPending?'<span class="radar-tag">Datos pendientes</span>':''
 ].join('');
 const official=o.officialUrl?'<a class="btn" href="'+esc(o.officialUrl)+'" target="_blank" rel="noopener noreferrer">Ver anuncio oficial ↗</a>':'<span class="radar-note">Sin enlace oficial utilizable</span>';
 return '<article class="radar-card" data-quality="'+esc(o.actionable?'PUESTO':'SIN_PUESTO')+'">'+
  '<div class="radar-tags">'+tags+'</div>'+
  '<div><h3>'+esc(heading)+'</h3><p class="radar-org">'+esc(o.organism)+'</p>'+
  (detail?'<p class="radar-excerpt">'+esc(detail.slice(0,320))+'</p>':'')+'</div>'+
  '<div class="radar-meta">'+
   meta('Localidad / destino',o.location)+meta('Tipo',o.kind)+
   (o.vacancies?meta('Plazas',o.vacancies):'')+
   (o.group&&o.group!=='REVISAR'?meta('Grupo',o.group):'')+
   (o.deadline?meta('Fecha límite de solicitudes',day(o.deadline)):o.trackingDeadline?.disputed?meta('Fecha de cierre','Discrepancia entre fuentes: sin fecha confirmada'):'')+
   (o.applicationTerm?meta('Cómputo publicado',o.applicationTerm):'')+
   (o.access?meta('Forma de acceso',o.access):'')+
   (o.qualification?meta('Titulación requerida',o.qualification):'')+meta('Evaluación académica',o.qualificationAssessment==='NO_CUMPLE'?'NO CUMPLE · titulación universitaria identificada':o.qualificationAssessment==='SIN_ACREDITAR'?'SIN ACREDITAR · falta titulación':'REVISAR · cotejar titulación y equivalencias')+meta('Requisitos adicionales',o.additionalAdmissionPending?'REVISAR · requisitos obligatorios detectados':'No identificados automáticamente · consultar bases')+meta('Compatibilidad global',o.compatibility==='NO_CUMPLE'?'NO CUMPLE · incompatibilidad académica identificada':'REVISAR · comprobar bases completas')+
   (o.publishedAt?meta('Publicación de origen',day(o.publishedAt)):'')+meta('Detectado por Radar',day(o.firstSeen))+
  '</div>'+ 
  '<p class="radar-note">'+esc([!o.deadline?'Fecha límite sin acreditar':null,!o.qualification?'Titulación pendiente':null,o.group==='REVISAR'?'Grupo pendiente':null].filter(Boolean).join(' · ')||'Datos principales extraídos; revisar posibles rectificaciones oficiales.')+'</p>'+
  '<p class="radar-note">'+esc(confirmation)+'</p>'+
  qualificationEvidenceMarkup(o)+
  additionalRequirementsMarkup(o)+
  trackControl+
  '<div class="radar-actions">'+official+'</div>'+
  '<div class="radar-source"><strong>Información disponible: '+esc(originBadge)+'</strong>'+esc(missingEvidence)+'</div>'+
  '<div class="radar-source">Procedencia: '+esc(evidence.sourceDescription)+'</div>'+
  '<div class="radar-source">Fuentes consultables: '+(sourceLinks||'Enlace oficial pendiente de recuperar')+'</div>'+
  '<div class="radar-source">'+esc(evidence.caution)+'</div>'+
  '</article>';
}
function render(){
 const all=entries;
 const asOf=new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'});
 const recent=all.filter(x=>x.actionable&&x.state!=='CERRADA'&&x.state!=='CIERRE_PROBABLE'&&ageDays(x.firstSeen,asOf)<=30);
 const actionable=all.filter(x=>x.actionable&&!x.phaseFollowup);
 const confirmed=actionable.filter(x=>x.state==='PLAZO_ABIERTO');
 const discarded=all.filter(x=>x.phaseFollowup);
 const tracked=all.filter(x=>x.trackedCall);
 const query=norm(filters.q.trim());
 const list=orderRadar(all.filter(o=>visible(o,query)),filters.sort);
 const stale=ageDays(data.generatedAt,new Date().toISOString().slice(0,10))>3;
 const statuses=(data.sourceStatus||[]).filter(x=>x.ok===true).length;
 // Overall feed success does not imply each municipal or regional source was read.
 const directStatuses=Array.isArray(data.directSourceStatus)?data.directSourceStatus:[];
 const directReadable=directStatuses.filter(x=>x.status==='READABLE').length;
 const directPartial=directStatuses.filter(x=>x.status==='PARTIAL').length;
 const directErrors=directStatuses.filter(x=>x.status==='ERROR').length;
 const directHasGaps=directPartial+directErrors>0;
 const directCrawl=data.directCrawl||{};
 const crawlDate=typeof directCrawl.checkedAtUtc==='string' ? directCrawl.checkedAtUtc.slice(0,10) : '';
 const crawlOld=!crawlDate||ageDays(crawlDate,new Date().toISOString().slice(0,10))>3;
 const crawlUnavailable=directCrawl.available!==true;
 const directCoverage=directStatuses.length
   ?'Rastreo directo: '+directReadable+' legibles, '+directPartial+' parciales y '+directErrors+' con error ('+directStatuses.length+' estados).'
   :'El estado del rastreo municipal directo no está disponible.';
 const blockedSources=directStatuses.filter(x=>x.status==='ERROR');
 const linkOfficialSource=x=>{
   const url=String(x.url||'');
   if(!/^https?:\/\/[^\s/?#]+(?:[/?#]|$)/i.test(url))return esc(x.source||'Fuente sin identificar');
   return '<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.source||'Fuente sin identificar')+'</a>';
 };
 const unreadableSources=blockedSources.length
   ?'<details class="radar-source-errors"><summary>Fuentes no comprobadas individualmente ('+blockedSources.length+')</summary>'+
    '<p>El rastreador no pudo leer estos portales. Esto <strong>no significa que no existan convocatorias</strong>. Consulta la fuente oficial directamente cuando necesites comprobar una oportunidad.</p>'+
    '<ul>'+blockedSources.map(x=>'<li>'+linkOfficialSource(x)+'</li>').join('')+'</ul></details>'
   :'';
 const scopeFallback={
  'DIRECT':'Sedes configuradas y directorio municipal; cobertura desigual',
  'BOE':'Sumarios de los últimos siete días',
  'BOCM':'Sumarios XML de siete días localizados mediante el RSS oficial',
  'BOP Toledo':'Sumarios de los últimos siete días',
  'DOCM':'Sumarios fechados de los últimos siete días',
  'PAG':'Exportación de convocatorias con plazo incluido en la fuente'
 };
 const coverageDescription=x=>{
  const c=x.coverage;
  if(!c)return '';
  if(x.source==='BOCM'){
   const fail=(c.failedIssues||[]).map(e=>e.date).join(', ');
   return ' · Números leídos: '+Number(c.issuesRead||0)+' de '+Number(c.issuesIdentified||0)+
    (fail?' · Número no accesible: '+fail:'')+
    (Number(c.issuesIdentified||0)<7?' · Los días sin número no se contabilizan como boletines.':'');
  }
  if(x.source==='DOCM'){
   const fail=(c.failedDates||[]).map(e=>e.date).join(', ');
   return ' · Días con sumario leído: '+(c.readDates||[]).length+
    ' · Sin número localizado: '+(c.emptyDates||[]).length+
    (fail?' · Sin consultar: '+fail:'');
  }
  return '';
 };
 const sourceScopes=(data.sourceStatus||[])
  .filter(x=>x&&typeof x.source==='string')
  .map(x=>'<li><strong>'+esc(x.source)+'</strong> · '+
   (x.ok?(x.coverage?.partial?'Cobertura parcial':'Disponible'):'No disponible')+
   ': '+esc(x.scope||scopeFallback[x.source]||'Alcance no identificado')+
   esc(coverageDescription(x))+'</li>').join('');
 const docsAttempted=Number(data.enrichmentStatus?.attempted)||0;
 const docsRead=Number(data.enrichmentStatus?.read)||0;
 const docsWithDetails=Number(data.enrichmentStatus?.withDetails)||0;
 const docsWithCoreDetails=Number(data.enrichmentStatus?.withCoreDetails)||0;
 const docsFailed=Number(data.enrichmentStatus?.failures)||0;
 const historicalDocRead=all.filter(x=>x.detailsStatus==='LEIDO').length;
 const historicalDocPending=all.length-historicalDocRead;
 const historicalDocPct=all.length?Math.round(historicalDocRead/all.length*1000)/10:0;
 const recentWithoutDocument=all.filter(x=>x.detailsStatus!=='LEIDO' && (()=>{const d=ageDays(x.firstSeen,asOf);return Number.isFinite(d)&&d>=0&&d<=21})()).length;

 const metricForCoverage=data.enrichmentStatus?.withCoreDetails==null?docsWithDetails:docsWithCoreDetails;
 const lowDocumentCoverage=docsAttempted>=10 && metricForCoverage/docsAttempted<0.5;
 const cards=list.length?list.slice(0,shown).map(card).join(''):'<div class="panel radar-empty">No hay fichas que cumplan los filtros. Prueba «Todos los puestos detectados» o cambia la zona.</div>';
 app.innerHTML=[
 '<section class="panel radar-hero"><div><p class="eyebrow">Detección automatizada · no equivale a solicitud abierta</p><h2>Radar de empleo público</h2>',
 '<p>Por defecto se ocultan los plazos vencidos que no forman parte de tus procesos seguidos; puedes consultar el histórico en «Plazos cerrados» o «Todos los registros». Primero se muestran <strong>puestos concretos con enlace oficial</strong>, priorizados por relevancia; puedes cambiar la ordenación para destacar plazas, fechas de cierre y publicaciones. Si no se conoce el destino exacto, no se supone que esté cerca. Las fichas sin puesto identificado se guardan en «Sin puesto identificable» y no provocan correos inútiles. Se muestran únicamente los requisitos y plazos que la extracción ha encontrado; el resto queda indicado como pendiente.</p>',
 stale?'<p class="notice warning">La última actualización tiene más de 3 días. Revisa los plazos en la fuente oficial.</p>':'',
 historicalDocPending>0?'<p class="notice warning">Cobertura documental acumulada: <strong>'+historicalDocRead+' de '+all.length+' registros ('+historicalDocPct+'%)</strong> tienen constancia de lectura automática; <strong>'+historicalDocPending+'</strong> no la tienen, incluidos <strong>'+recentWithoutDocument+'</strong> detectados en los últimos 21 días. Una lectura automática no certifica que el anuncio sea una convocatoria nueva, ni que se hayan comprobado sus requisitos y plazos. Comprueba siempre las bases oficiales.</p>':'',
 lowDocumentCoverage?'<p class="notice warning">Extracción documental limitada: se obtuvo texto de '+docsRead+' de '+docsAttempted+' documentos, pero solo '+docsWithDetails+' aportaron algún dato estructurado. Lectura técnica no equivale a requisitos y plazos comprobados; consulta las bases oficiales.</p>':'',
 directHasGaps?'<p class="notice warning">'+esc(directCoverage)+' El radar no cubre de forma completa todas estas fuentes; contrasta también las sedes y boletines oficiales.</p>':'',
 unreadableSources,
 !directStatuses.length?'<p class="notice warning">'+esc(directCoverage)+' No se puede certificar cobertura municipal.</p>':'',
 (crawlOld||crawlUnavailable)?'<p class="notice warning">Rastreo local: '+esc(crawlDate?day(crawlDate):'fecha no disponible')+'. '+(crawlUnavailable?'No consta una ejecución directa válida en la última actualización. ':'')+(crawlOld?'La medición local no está fechada o tiene más de 3 días. ':'')+'Verifica anuncios y plazos en sedes oficiales.</p>':'',
 '</div><div class="radar-stats">',
 '<div class="radar-stat"><strong>'+recent.length+'</strong><span>puestos detectados en 30 días</span></div>',
 '<div class="radar-stat"><strong>'+confirmed.length+'</strong><span>plazos con fecha publicada</span></div>',
 '<div class="radar-stat"><strong>'+actionable.length+'</strong><span>fichas con puesto identificado</span></div>',
 '<div class="radar-stat"><strong>'+tracked.length+'</strong><span>procesos marcados en este navegador</span></div>',
 '<div class="radar-stat"><strong>'+historicalDocRead+'/'+all.length+'</strong><span>registros con lectura documental histórica (no certificación jurídica)</span></div>',
 '<div class="radar-stat"><strong>'+all.filter(x=>!x.actionable&&!x.phaseFollowup).length+'</strong><span>anuncios incompletos por investigar (no enviados por email)</span></div></div>',
 '<p class="radar-source">Lectura histórica: <strong>'+historicalDocRead+'/'+all.length+'</strong> ('+historicalDocPct+'%). Lecturas realizadas solo en este rastreo: <strong>'+docsRead+'/'+docsAttempted+'</strong>. Los dos indicadores no son equivalentes. Datos generados: <strong>'+esc(day(data.generatedAt))+'</strong>. Fuentes que respondieron: <strong>'+statuses+'/'+(data.sourceStatus||[]).length+'</strong>. Rastreo directo: <strong>'+esc(crawlDate?day(crawlDate):'fecha no disponible')+'</strong>. Webs únicas consultadas: <strong>'+esc(directCrawl.uniqueSources??'sin verificar')+'</strong>. Documentos con texto: <strong>'+docsRead+'/'+docsAttempted+'</strong>. Con algún dato extraído: <strong>'+docsWithDetails+'/'+docsAttempted+'</strong>. Con puesto, titulación y regla/fecha de plazo extraídos del documento: <strong>'+(data.enrichmentStatus?.withCoreDetails==null?'sin medir':docsWithCoreDetails+'/'+docsAttempted)+'</strong>. Fallos técnicos: <strong>'+docsFailed+'</strong>. Son registros detectados, no plazas abiertas ni solicitudes.</p></section>',
 sourceScopes?'<details class="panel"><summary><strong>Qué cubre realmente cada fuente oficial</strong> · ver límites del rastreo</summary><p>Una fuente que responde no garantiza que se haya consultado todo su histórico ni todas las sedes municipales.</p><ul>'+sourceScopes+'</ul></details>':'',
 '<section class="panel"><div class="radar-controls">',
 '<label><span>Buscar puesto, localidad u organismo</span><input id="rq" type="search" value="'+esc(filters.q)+'" placeholder="Auxiliar, administrativo, Getafe, Toledo…"></label>',
 '<label><span>Ver</span><select id="rv"><option value="MIS_PROCESOS">Mis procesos (inscrito, pendiente o en seguimiento)</option><option value="CADUCADAS">Plazos cerrados / por revisar</option><option value="RECIENTES">Puestos recientes (30 días)</option><option value="OPORTUNIDADES">Oportunidades sin plazo vencido</option><option value="OEP_FUTURAS">OEP futuras · sin inscripción</option><option value="INCOMPLETAS">Anuncios pendientes de verificar</option><option value="SEGUIMIENTO">Actas y listas (ocultas)</option><option value="TODAS">Todos los registros</option></select></label>',
 '<label><span>Plazo / estado</span><select id="rs"><option value="TODAS">Todos</option><option value="PLAZO_ABIERTO">Plazo con fecha publicada</option><option value="REVISAR">Plazo sin verificar</option><option value="PREVISTA">OEP sin convocatoria</option><option value="CERRADA">Plazo cerrado</option><option value="CIERRE_PROBABLE">Cierre probable (discrepancia)</option></select></label>',
 '<label><span>Zona</span><select id="rz"><option value="TODAS">Todas</option><option value="TOLEDO">Provincia de Toledo</option><option value="MADRID_SUR">Sur de Madrid</option></select></label>',
 '<label><span>Tipo</span><select id="rk"><option value="TODAS">Cualquiera</option><option value="Oposición / proceso selectivo">Oposición / proceso selectivo</option><option value="Bolsa">Bolsas de empleo</option><option value="Interinidad">Interinidad</option><option value="Sustitución">Sustitución</option><option value="Temporal">Otra contratación temporal</option><option value="Laboral fijo">Laboral fijo</option><option value="Funcionario de carrera">Funcionario de carrera</option><option value="Oferta de empleo (sin convocatoria)">OEP sin convocatoria</option></select></label>',
 '<label><span>Número de plazas</span><select id="rp"><option value="TODAS">Todas las cantidades</option><option value="UNA">Exactamente 1 plaza</option><option value="2">2 o más plazas</option><option value="3">3 o más plazas</option><option value="5">5 o más plazas</option><option value="10">10 o más plazas</option><option value="SIN_DATO">Plazas sin verificar</option></select></label>',
 '<label><span>Ordenar por</span><select id="ro"><option value="RELEVANCIA">Relevancia para el opositor</option><option value="CIERRE">Fecha de cierre más próxima</option><option value="PLAZAS">Mayor número de plazas</option><option value="PUBLICACION">Publicación oficial más reciente</option><option value="DETECCION">Última detección</option></select></label>',
 '</div><p class="radar-note">Los estados de «Mis procesos» se guardan <strong>solo en este navegador</strong>; no se sincronizan entre dispositivos. Si faltan el plazo, grupo o titulación, Radar <strong>no los ha comprobado</strong>. No se confirma compatibilidad con DAM sin leer los requisitos.</p></section>',
 '<div class="radar-results-summary"><strong>'+list.length+'</strong> registros coinciden; se muestran '+Math.min(shown,list.length)+'.</div>',
 '<section class="radar-grid">'+cards+'</section>',
 shown<list.length?'<div class="radar-more"><button id="radar-more" class="btn secondary" type="button">Mostrar 40 fichas más</button></div>':''
 ].join('');
 for(const [id,key] of [['rv','view'],['rs','state'],['rz','zone'],['rk','kind'],['rp','vacancies'],['ro','sort']]){
  const select=document.querySelector('#'+id);if(!select)continue;
  select.value=filters[key];
  select.addEventListener('change',e=>{filters[key]=e.target.value;shown=40;render()});
 }
 document.querySelector('#rq')?.addEventListener('input',e=>{
  filters.q=e.target.value;
  shown=40;
  // El DOM se reemplaza al renderizar; no hacerlo en cada pulsación.
  // Un temporizador único evita ordenar más de mil fichas repetidamente.
  if(searchTimer!==null)clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>{
    searchTimer=null;
    render();
    const input=document.querySelector('#rq');
    input?.focus({preventScroll:true});
    input?.setSelectionRange?.(input.value.length,input.value.length);
  },180);
 });
 document.querySelector('#radar-more')?.addEventListener('click',()=>{shown+=40;render()});
 document.querySelectorAll('[data-radar-track]').forEach(select=>select.addEventListener('change',event=>{
    const id=event.target.dataset.radarTrack;
    saveLocalTracking(id,event.target.value);
    entries=entries.map(o=>o.matchedCallId===id?{...o,trackedCall:event.target.value?{...(o.trackedCall||trackedCalls.find(c=>c.id===o.matchedCallId)),estadoUsuario:event.target.value}:null}:o);
    render();
 }));
}
try{
 const r=await fetch('data/radar.json',{cache:'no-cache'});
 if(!r.ok)throw new Error('HTTP '+r.status);
 data=await r.json();
 try {
   const t=await fetch('data/convocatorias.json',{cache:'no-cache'});
   if(t.ok){const body=await t.json();trackedCalls=Array.isArray(body.convocatorias)?body.convocatorias:[];}
 }catch(e){console.warn('Seguimiento no disponible',e);}
 entries=classifyRadarEntries(data.opportunities||[],new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'}))
   .filter(o=>!o.navigationOnly)
   .map(o=>{
     const match=matchTrackedCall(o,trackedCalls);
     const personalStatus=match?localTracking[match.id]:null;
     const decorated=decorateTracking(o,match?{...match,estadoUsuario:personalStatus||''}:null,new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'}));
     return {...decorated,matchedCallId:match?.id||null,trackedCall:personalStatus?{...match,estadoUsuario:personalStatus}:null};
   });
 render();
}catch(e){
 app.innerHTML='<section class="panel"><h2>Radar temporalmente no disponible</h2><p>'+esc(e.message)+'</p></section>';
}
