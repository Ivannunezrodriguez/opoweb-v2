import {createHash} from 'node:crypto';

const roles=/auxiliar(?:es)? administrativ|administrativ[oa]s?|inform[aá]tic|programador|desarrollador|sistemas|soporte inform[aá]tic|t[eé]cnic[oa] auxiliar|t[eé]cnic[oa] superior|gesti[oó]n administrativa/i;
const hiring=/convoc|plazas?|procesos? selectiv|bolsa|lista de espera|interin|oposici[oó]n|concurso.oposici[oó]n/i;
const followup=/admitid|excluid|subsanaci[oó]n|tribunal|calificaci[oó]n|resultado|fecha de examen|nombramiento/i;
const excluded=/promoci[oó]n interna|turno interno|provisi[oó]n de puestos|concurso de traslados|libre designaci[oó]n|comisi[oó]n de servicios|oposiciones? a notari|cuerpo de magistrad/i;
const madrid=/getafe|legan[eé]s|fuenlabrada|m[oó]stoles|alcorc[oó]n|parla|pinto|valdemoro|aranjuez|humanes|griñ[oó]n|torrej[oó]n de la calzada|torrej[oó]n de velasco|ciempozuelos|navalcarnero/i;
const toledo=/toledo|illescas|seseña|talavera|puebla de montalb[aá]n|ventas con peña aguilera/i;
export function classify(title, context='') {
 const s=`${title} ${context}`;
 if(!roles.test(title)||!hiring.test(title)||excluded.test(s)||followup.test(title))return null;
 // An autonomous-community-wide or national call needs verified workplace, not just its headquarters.
 const zone=madrid.test(s)?'MADRID_SUR':toledo.test(s)?'TOLEDO':null;
 if(!zone)return null;
 const group=/\bC1\b/i.test(title)?'C1':/\bC2\b/i.test(title)?'C2':/grupo B|subgrupo B/i.test(title)?'B':'REVISAR';
 return {zone,group,state:'REVISAR',compatibility:'REVISAR',reason:'Coincidencia en un anuncio oficial. Comprueba destino, acceso, titulación y plazo en las bases.'};
}
export function boeEntries(json){
 const found=[];
 function visit(v,ctx=''){
  if(Array.isArray(v)){v.forEach(x=>visit(x,ctx));return}
  if(!v||typeof v!=='object')return;
  const next=[ctx,typeof v.nombre==='string'?v.nombre:''].filter(Boolean).join(' · ');
  if(/^BOE-A-/.test(v.identificador||'')&&typeof v.titulo==='string')found.push({id:v.identificador,title:v.titulo,url:v.url_html,context:next});
  for(const [k,x] of Object.entries(v))if(k!=='url_pdf'&&k!=='url_html'&&k!=='url_xml')visit(x,next);
 }
 visit(json.data?.sumario||json);
 return found;
}
function decode(s){return s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
export function bocmEntries(xml){
 return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([,item])=>{
  const field=n=>item.match(new RegExp(`<${n}>([\\s\\S]*?)<\\/${n}>`))?.[1]||'';
  const url=decode(field('link'));
  return {id:url.split('/').pop(),url,title:decode(field('description')),context:''};
 }).filter(x=>x.id&&x.title);
}
export function fingerprint(x){return createHash('sha256').update(`${x.source}:${x.id}`).digest('hex').slice(0,20)}
export function merge(previous,entries,date){
 const byId=new Map((previous.opportunities||[]).map(x=>[x.id,{...x,isNew:false}]));
 for(const entry of entries){
  const match=classify(entry.title,entry.context);
  if(!match)continue;
  const id=fingerprint(entry),old=byId.get(id);
  byId.set(id,{id,title:entry.title,organism:entry.context||'Consultar anuncio',location:match.zone==='TOLEDO'?'Toledo (verificar destino)':'Madrid sur (verificar destino)',...match,category:'Empleo público',vacancies:null,deadline:null,access:'Revisar bases',qualification:'Revisar bases',source:entry.source,officialUrl:entry.url,verifiedAt:date,firstSeen:old?.firstSeen||date,isNew:!old});
 }
 return [...byId.values()].sort((a,b)=>b.firstSeen.localeCompare(a.firstSeen));
}
