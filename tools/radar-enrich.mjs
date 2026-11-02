import {spawnSync} from 'node:child_process';
import {normalizeOpportunity} from '../assets/radar-quality.js';

// Extraction of observable facts, not an eligibility ruling. Only public HTTPS documents.
const months={enero:1,febrero:2,marzo:3,abril:4,mayo:5,junio:6,julio:7,agosto:8,septiembre:9,setiembre:9,octubre:10,noviembre:11,diciembre:12};
function clean(s){return String(s||'').replace(/\s+/g,' ').trim();}
function decodeHtml(s){
 return String(s||'').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ')
 .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ')
 .replace(/&nbsp;|&#160;/gi,' ').replace(/&aacute;/gi,'á').replace(/&eacute;/gi,'é')
 .replace(/&iacute;/gi,'í').replace(/&oacute;/gi,'ó').replace(/&uacute;/gi,'ú')
 .replace(/&ntilde;/gi,'ñ').replace(/&quot;/gi,'"').replace(/&amp;/gi,'&')
 .replace(/&#(\d+);/g,(_,c)=>String.fromCodePoint(Number(c)));
}
function isoDay(day,month,year){
 const d=Number(day),m=Number(month),y=Number(year);
 if(d<1||d>31||m<1||m>12||y<2020||y>2100)return null;
 const date=y+'-'+String(m).padStart(2,'0')+'-'+String(d).padStart(2,'0');
 const test=new Date(date+'T12:00:00Z');
 return Number.isNaN(test.getTime())||test.toISOString().slice(0,10)!==date?null:date;
}
export function extractFacts(text,old={}){
 const body=clean(text).slice(0,80000);
 const evidence={};
 // Retain relative terms literally. Do not invent a calendar calculation for Spanish business days.
 const term=body.match(/(?:plazo\s+(?:para\s+la\s+)?(?:de\s+)?presentaci[oó]n\s+de\s+solicitudes|presentaci[oó]n\s+de\s+instancias)[^.;]{0,250}/i);
 if(term)evidence.applicationTerm=clean(term[0]).slice(0,235);
 const absolute=term?.[0]?.match(/(?:hasta|finalizar[aá]\s+el|concluir[aá]\s+el|fecha\s+l[ií]mite\s+del)\s+(?:d[ií]a\s+)?(\d{1,2})\s*(?:\/|-|\s+de\s+)(\d{1,2}|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)\s*(?:\/|-|\s+de\s+)(20\d{2})/i);
 if(absolute){
  const key=absolute[2].toLowerCase();
  const value=isoDay(absolute[1],months[key]||key,absolute[3]);
  if(value)evidence.deadline=value;
 }
 // A single unambiguous group; more than one is deliberately not inferred.
 const groups=[...body.slice(0,8500).matchAll(/(?:subgrupo|grupo\s+de\s+clasificaci[oó]n|grupo)\s*[:\-]?\s*(A1|A2|B|C1|C2|AP)\b/gi)]
 .map(x=>x[1].toUpperCase());
 const distinct=[...new Set(groups)];
 if(distinct.length===1)evidence.group=distinct[0];
 const access=body.slice(0,10000);
 if(/\bconcurso\s*[-–]\s*oposici[oó]n\b/i.test(access))evidence.access='Concurso-oposición';
 else if(/\b(?:sistema\s+de\s+)?oposici[oó]n\s+(?:libre|en\s+turno\s+libre)|sistema\s+de\s+oposici[oó]n\b/i.test(access))evidence.access='Oposición';
 else if(/\bconcurso\s+de\s+m[eé]ritos\b/i.test(access))evidence.access='Concurso de méritos';
 const req=body.match(/(?:estar\s+en\s+posesi[oó]n|estar\s+en\s+condiciones\s+de\s+obtener|titulaci[oó]n\s+exigida)\s+(?:del?\s+)?(?:t[ií]tulo\s+(?:de\s+)?)?((?:Graduad[oa]\s+en\s+Educaci[oó]n\s+Secundaria\s+Obligatoria|ESO|Bachiller(?:ato)?|T[eé]cnic[oa]\s+Superior\s+en\s+[^.;]{4,85}|Formaci[oó]n\s+Profesional\s+de\s+Grado\s+(?:Medio|Superior)|Graduad[oa]\s+Universitari[oa]\s+en\s+[^.;]{4,85}))\b/i);
 if(req)evidence.qualification=clean(req[1]).slice(0,115);
 return evidence;
}
function safeOfficial(url){
 try{
  const u=new URL(url);
  if(u.protocol!=='https:'||u.username||u.password||u.hostname==='localhost'||/^\d+\.\d+\.\d+\.\d+$/.test(u.hostname))return null;
  return u.href;
 }catch{return null;}
}
async function documentText(url){
 const r=await fetch(url,{headers:{'User-Agent':'OpoWeb Radar (public recruitment source reader)','Accept':'text/html,application/xhtml+xml,application/pdf,text/plain'},signal:AbortSignal.timeout(12000)});
 if(!r.ok)throw new Error('HTTP '+r.status);
 const ct=(r.headers.get('content-type')||'').toLowerCase();
 const buf=Buffer.from(await r.arrayBuffer());
 if(buf.length>6_000_000)throw new Error('DOCUMENTO_DEMASIADO_GRANDE');
 if(ct.includes('pdf')||buf.subarray(0,4).toString('ascii')==='%PDF'){
  const out=spawnSync('pdftotext',['-layout','-','-'],{input:buf,encoding:'utf8',timeout:12000,maxBuffer:2_000_000});
  if(out.error||out.status!==0)throw new Error('PDF_NO_EXTRAIBLE_EN_EL_ENTORNO');
  return {text:out.stdout,format:'PDF'};
 }
 if(ct.includes('html')||/<(?:html|body|div|p)\b/i.test(buf.subarray(0,300).toString('utf8'))){
  return {text:decodeHtml(buf.toString('utf8')),format:'HTML'};
 }
 if(ct.includes('text/plain'))return {text:buf.toString('utf8'),format:'TEXTO'};
 throw new Error('FORMATO_NO_LEIBLE');
}
export async function enrichRadar(opportunities,date,{limit=25,fetchDocument=documentText}={}){
 const items=opportunities.map(x=>({...x}));
 // Enrich recently detected, recognizable calls first; follow-up lists are excluded.
 const candidates=items.map((x,i)=>({x,i})).filter(({x})=>
  x.actionable && x.state!=='CERRADA' && !x.phaseFollowup &&
  (!x.detailsCheckedAt || (x.detailsStatus!=='LEIDO' && Date.parse(date)-Date.parse(x.detailsCheckedAt)>=7*86400000)) && safeOfficial(x.officialUrl) &&
  Number.isFinite(Date.parse(x.firstSeen)) && Date.parse(date)-Date.parse(x.firstSeen)<=30*86400000)
  .sort((a,b)=>Number(b.x.isNew)-Number(a.x.isNew)||String(b.x.firstSeen).localeCompare(String(a.x.firstSeen)))
  .slice(0,limit);
 let read=0,withDetails=0,failures=0;
 const groups=[];for(let i=0;i<candidates.length;i+=5)groups.push(candidates.slice(i,i+5));
 for(const group of groups){
  await Promise.all(group.map(async ({x,i})=>{
   let updated={...x,detailsCheckedAt:date};
   try{
    const doc=await fetchDocument(x.officialUrl);
    if(clean(doc.text).length<150)throw new Error('TEXTO_INSUFICIENTE');
    const facts=extractFacts(doc.text,x);
    updated={...updated,applicationTerm:facts.applicationTerm||x.applicationTerm||null,
     group:x.group!=='REVISAR'?x.group:facts.group||x.group,
     qualification:x.knownQualification?x.qualification:facts.qualification||x.qualification||null,
     access:x.access||facts.access||null,
     deadline:x.deadline||facts.deadline||null,
     detailSource:'Lectura automática '+doc.format,
     detailsStatus:'LEIDO'};
    read++;
    if(Object.keys(facts).length)withDetails++;
   }catch(e){
    updated.detailsStatus=String(e.message||e).slice(0,100);
    failures++;
   }
   items[i]=normalizeOpportunity(updated,date);
  }));
 }
 return {opportunities:items,summary:{attempted:candidates.length,read,withDetails,failures,asOf:date,explanation:'Extracción automática orientativa: sólo el anuncio original y las bases son vinculantes.'}};
}
