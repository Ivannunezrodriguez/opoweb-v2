import fs from 'node:fs/promises';
import {normalizeOpportunity} from '../assets/radar-quality.js';

const apiKey=process.env.RESEND_API_KEY;
const to=process.env.RADAR_EMAIL;
if(!apiKey||!to){console.log('Email desactivado: faltan RESEND_API_KEY/RADAR_EMAIL');process.exit(0)}
const data=JSON.parse(await fs.readFile('data/radar.json','utf8'));
// Anuncios sin puesto, actas, listas y ofertas de grupo A1/A2 no deben generar emails.
const fresh=(data.opportunities||[])
  .filter(x=>x.isNew)
  .map(x=>normalizeOpportunity(x,data.generatedAt||new Date().toISOString().slice(0,10)))
  .filter(x=>x.actionable && x.state!=='CERRADA' && !x.phaseFollowup)
  // Evitar emails que solo dicen localidad y «consultar bases» en todas las filas.
  // Se exige un puesto reconocible y al menos un dato adicional contrastable.
  .filter(x=>Boolean(x.position) && (
    Number.isInteger(x.vacancies) || x.group!=='REVISAR' ||
    Boolean(x.qualification) || Boolean(x.deadlineIso) ||
    Boolean(x.access) || x.detailsStatus==='LEIDO'
  ))
  .slice(0,30);
if(!fresh.length){console.log('Sin novedades para notificar');process.exit(0)}
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const formatDate=value=>{
 const raw=String(value||'');
 const match=raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:T|$)/);
 return match?`${match[3]}/${match[2]}/${match[1]}`:raw;
};
const fields=x=>{
 const title=String(x.title||'');
 const place=title.match(/Ayuntamiento de ([^,.(]+)(?:\s*\(([^)]+)\))?/i);
 const town=title.match(/^\s*[—–-]?\s*([^.;]+)\.\s*Ofertas de empleo/i);
 const role=title.match(/plazas? de\s+(.+?)(?=\s+a tiempo|\s+de la plantilla|\s+por el sistema|\s*—|\s*\[|[.;]|$)/i);
 const labor=/personal laboral fijo/i.test(title)?'Personal laboral fijo':/personal laboral/i.test(title)?'Personal laboral':null;
 const group=x.group&&x.group!=='REVISAR'?x.group:null;
 const states={PREVISTA:'OEP publicada; convocatoria aún pendiente',REVISAR:'Anuncio de puesto; plazo pendiente de verificar',PLAZO_ABIERTO:'Plazo con fecha límite identificada: verificar bases',CERRADA:'Plazo vencido'};
 return [
 ['Fecha',x.publishedAt?formatDate(x.publishedAt):x.firstSeen?`${formatDate(x.firstSeen)} (detección; publicación no confirmada)`:'No consta'],
 ['Lugar',place?`${place[1].trim()}${place[2]?' ('+place[2]+')':''}`:town?town[1].trim():x.location||'No consta'],
 ['Puesto',x.position||role?.[1]?.trim()||'Pendiente de identificar'],
 ['Categoría del puesto',[group,labor].filter(Boolean).join(' · ')||'No verificada'],
 ['Plazas',x.vacancies||'No consta'],
 ['Titulación',x.qualification||'No consta: ver bases'],
 ['Plazo de solicitudes',x.deadline?formatDate(x.deadline):x.applicationTerm||'No hay fecha acreditada'],
 ['Estado',states[x.state]||x.state||'Pendiente de verificar'],
 ['Previsión',x.forecast|| (x.state==='PREVISTA'?'Pendiente de convocatoria y apertura de solicitudes; sin fecha confirmada.':x.deadline?`Plazo de solicitud indicado: ${formatDate(x.deadline)}. Examen: sin fecha confirmada.`:'Sin fecha confirmada para los siguientes pasos; consultar plazo y bases.')]
 ];
};
const cards=fresh.map(x=>{
 const rows=fields(x).map(([label,value])=>`<tr><th scope="row" style="text-align:left;vertical-align:top;padding:7px 10px 7px 0;width:105px;color:#475569">${esc(label)}</th><td style="padding:7px 0;overflow-wrap:anywhere">${esc(value)}</td></tr>`).join('');
 const url=/^https?:\/\//i.test(x.officialUrl||'')?x.officialUrl:null;
 return `<div style="margin:0 0 18px;padding:16px;border:1px solid #dbe2ea;border-radius:10px;background:#ffffff"><table role="table" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.45">${rows}<tr><th scope="row" style="text-align:left;vertical-align:top;padding:7px 10px 7px 0;color:#475569">Enlace</th><td style="padding:7px 0">${url?`<a href="${esc(url)}">Abrir anuncio oficial</a>`:'No consta'}</td></tr></table></div>`;
}).join('');
const plain=fresh.map(x=>[...fields(x).map(([label,value])=>`${label}: ${value}`),`Enlace: ${/^https?:\/\//i.test(x.officialUrl||'')?x.officialUrl:'No consta'}`].join('\n')).join('\n\n');
const body={from:process.env.RADAR_FROM||'OpoWeb Radar <onboarding@resend.dev>',to:[to],subject:`OpoWeb Radar: ${fresh.length} nuevo(s) anuncio(s) por revisar`,text:plain,html:`<div lang="es" style="max-width:620px;margin:auto;font-family:Arial,sans-serif;color:#182230"><h1 style="font-size:22px">Novedades de empleo público</h1>${cards}<p style="font-size:13px;color:#475569">La detección es automática. Comprueba requisitos y plazos en la fuente oficial. «Sin fecha confirmada» no es una estimación.</p></div>`};
const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
if(!r.ok)throw new Error(`Email HTTP ${r.status}: ${await r.text()}`);
console.log('Notificación enviada:',fresh.length);
