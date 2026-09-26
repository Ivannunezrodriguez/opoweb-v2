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
  const match=classify(entry.searchText||entry.title,entry.context);
  if(!match)continue;
  const id=fingerprint(entry),old=byId.get(id);
  byId.set(id,{id,title:entry.title,organism:entry.context||'Consultar anuncio',location:match.zone==='TOLEDO'?'Toledo (verificar destino)':'Madrid sur (verificar destino)',...match,category:'Empleo público',vacancies:entry.vacancies??null,deadline:entry.deadline??null,access:entry.access||'Revisar bases',qualification:entry.qualification||'Revisar bases',source:entry.source,officialUrl:entry.url,verifiedAt:date,firstSeen:old?.firstSeen||date,isNew:!old});
 }
 return [...byId.values()].sort((a,b)=>b.firstSeen.localeCompare(a.firstSeen));
}

export function bopEntries(html){
 const entries=[];
 let publisher='BOP Toledo';
 const fragments=html.split(/(<h3 class="publisherBlock">[\s\S]*?<\/h3>|<div id="[^"]+" class="announce">[\s\S]*?<\/ul>)/i);
 for(const fragment of fragments){
  const heading=fragment.match(/<h3 class="publisherBlock">([\s\S]*?)<\/h3>/i);
  if(heading){publisher=decode(heading[1]).replace(/^Anunciante\s*:\s*/i,'');continue}
  if(!/class="announce"/.test(fragment))continue;
  const href=fragment.match(/href="(DocGet\?[^"\s]+)"/i)?.[1]?.replaceAll('&amp;','&');
  const subject=fragment.match(/Resumen\/Asunto\s*:\s*<\/strong>([\s\S]*?)<\/li>/i)?.[1];
  if(!href||!subject)continue;
  const url=new URL(href,'https://bop.diputoledo.es/webEbop/').href;
  entries.push({id:new URL(url).searchParams.get('insert_number')+'-'+new URL(url).searchParams.get('insert_year'),title:decode(subject),context:publisher,url});
 }
 return entries;
}

export function docmEntries(html){
 const entries=[];
 let context='Castilla-La Mancha';
 const parts=html.split(/(<h4 class="tituloOrganismo">[\s\S]*?<\/h4>|<p class = "sumario">[\s\S]*?<\/p>)/i);
 for(const part of parts){
  const heading=part.match(/<h4 class="tituloOrganismo">([\s\S]*?)<\/h4>/i);
  if(heading){context=decode(heading[1]);continue}
  if(!/<p class = "sumario">/.test(part))continue;
  const pdf=part.match(/href="\.\/descargarArchivo\.do\?ruta=(\d{4}\/\d{2}\/\d{2})\/pdf\/(\d{4}_\d+)\.pdf&amp;tipo=rutaDocm"/i);
  if(!pdf)continue;
  entries.push({id:pdf[2],title:decode(part),context,url:`https://docm.jccm.es/docm/verArchivoHtml.do?ruta=${pdf[1]}/html/${pdf[2]}.html&tipo=rutaDocm`});
 }
 return entries;
}

export function boeBody(html){
 const block=html.match(/<div id="textoxslt">([\s\S]*?)<\/div>/i)?.[1]||'';
 return decode(block);
}

export function pagEntries(xml,province){
 if(!/<convocatorias(?:\s|>|\/>)/.test(xml))throw new Error('Exportación PAG sin raíz de convocatorias');
 const entries=[];
 const blocks=[...xml.matchAll(/(?:^|\n)\s{4}<convocatorias>([\s\S]*?)\n\s{4}<\/convocatorias>/g)];
 for(const [,block] of blocks){
  const top=block.replace(/<disposiciones>[\s\S]*?<\/disposiciones>/g,'').replace(/<plazos>[\s\S]*?<\/plazos>/g,'');
  const field=(name,source=top)=>decode(source.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`))?.[1]||'');
  if(field('provinciaId')!==String(province)||field('viagrupo')!=='ACCESO LIBRE')continue;
  const id=field('id'),role=field('titulo')||field('cuerpo'),place=[field('unidad'),field('descripcion')].filter(Boolean).join(' · ');
  if(!id||!role)continue;
  if(String(province)==='28'&&!madrid.test(place))continue;
  const doc=field('documento',block),institution=field('organo');
  const url=[doc,field('direccioninternet')].find(x=>/^https:\/\//i.test(x))||'https://administracion.gob.es/empleopublico/resultadosEmpleo';
  entries.push({id,title:`Convocatoria de plazas de ${role} — ${institution}`,context:`${place} · ${institution} · ${field('codigogrupo')}`,url,deadline:field('fechafin',block)||null,qualification:field('titulacion')||'Revisar bases',vacancies:Number(field('plazaslibres'))||null,access:'Acceso libre'});
 }
 return entries;
}
