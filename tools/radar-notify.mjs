import fs from 'node:fs/promises';

const apiKey=process.env.RESEND_API_KEY;
const to=process.env.RADAR_EMAIL;
if(!apiKey||!to){console.log('Email desactivado: faltan RESEND_API_KEY/RADAR_EMAIL');process.exit(0)}
const data=JSON.parse(await fs.readFile('data/radar.json','utf8'));
const fresh=(data.opportunities||[]).filter(x=>x.isNew);
if(!fresh.length){console.log('Sin novedades para notificar');process.exit(0)}
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rows=fresh.map(x=>`<li><strong>${esc(x.title)}</strong> — ${esc(x.organism)} · ${esc(x.location)} · ${esc(x.group||'grupo por revisar')}<br><strong>${x.state==='PREVISTA'?'Oferta prevista; todavía no hay plazo de solicitud':'Convocatoria o anuncio: consultar plazo y requisitos'}</strong><br>${esc(x.reason)}<br><a href="${esc(x.officialUrl)}">Abrir fuente oficial</a></li>`).join('');
const body={from:process.env.RADAR_FROM||'OpoWeb Radar <onboarding@resend.dev>',to:[to],subject:`OpoWeb Radar: ${fresh.length} nuevo(s) anuncio(s) por revisar`,html:`<h1>Nuevos anuncios oficiales por revisar</h1><ul>${rows}</ul><p>La detección es automática. Comprueba siempre requisitos y plazo en las bases oficiales.</p>`};
const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
if(!r.ok)throw new Error(`Email HTTP ${r.status}: ${await r.text()}`);
console.log('Notificación enviada:',fresh.length);
