import {createHash} from 'node:crypto';

// Match recruitment, not a closed list of professions: trades and substitutions matter too.
const hiring=/convoc|plazas?|puestos?|procesos? selectiv|bolsa|lista de espera|interin|oposici[oó]n|concurso.oposici[oó]n|oferta de empleo p[uú]blico|\bOEP\b|contrataci[oó]n|selecci[oó]n de personal|sustituci[oó]n|suplencia|relevo|personal temporal|plan(?:es)? de empleo|oferta de empleo/i;
const job=/plazas?|puestos?|empleo|\bOEP\b|bolsa|lista de espera|personal|interin|contrataci[oó]n|proceso selectiv|oposici[oó]n|sustituci[oó]n|suplencia|relevo/i;
// Exclude explicit university-level requirements; never infer them from a job name.
const ineligible=/\bA[12]\b|subgrupo\s+A[12]|(?:titulaci[oó]n|t[ií]tulo)\s+(?:universitari[oa]|de\s+(?:grado universitario|licenciad[oa]|diplomad[oa]))/i;
const followup=/admitid|excluid|subsanaci[oó]n|tribunal|calificaci[oó]n|resultado|fecha de examen|nombramiento/i;
const excluded=/provisi[oó]n de puestos|concurso de traslados|libre designaci[oó]n|comisi[oó]n de servicios|oposiciones? a notari|cuerpo de magistrad|subasta|licitaci[oó]n/i;
const madrid=/getafe|legan[eé]s|fuenlabrada|m[oó]stoles|alcorc[oó]n|parla|pinto|valdemoro|aranjuez|humanes|griñ[oó]n|torrej[oó]n de la calzada|torrej[oó]n de velasco|ciempozuelos|navalcarnero|universidad carlos iii de madrid|universidad rey juan carlos/i;
const toledo=/toledo|illescas|seseña|talavera|puebla de montalb[aá]n|ventas con peña aguilera/i;
export function classify(title, context='', details='') {
 const s=`${title} ${context}`;
 if(!hiring.test(title)||!job.test(title)||excluded.test(s)||followup.test(title)||ineligible.test(title)||/becas?|subvenciones?|premios?/i.test(title))return null;
 if(/promoci[oó]n interna|turno interno/i.test(title)&&!/acceso libre|turno libre/i.test(title))return null;
 // An autonomous-community-wide or national call needs verified workplace, not just its headquarters.
 const zone=madrid.test(s)?'MADRID_SUR':toledo.test(s)?'TOLEDO':null;
 if(!zone)return null;
 const group=/\bC1\b/i.test(title+' '+details)?'C1':/\bC2\b/i.test(title+' '+details)?'C2':/grupo B|subgrupo B/i.test(title+' '+details)?'B':'REVISAR';
 const offer=/oferta de empleo p[uú]blico|\bOEP\b/i.test(title);
 return {zone,group,state:offer?'PREVISTA':'REVISAR',compatibility:'REVISAR',reason:offer?'Plaza incluida en una oferta de empleo. Aún debe publicarse la convocatoria y abrirse el plazo.':'Coincidencia en un anuncio oficial. Comprueba destino, acceso, titulación y plazo en las bases.'};
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
  const context=entry.source==='BOP Toledo'?`${entry.context||''} · Toledo`:entry.context;
  const match=classify(entry.title,context,entry.searchText||'');
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

export function boeVacancyEntries(item,html){
 const block=html.match(/<div id="textoxslt">([\s\S]*?)<\/div>/i)?.[1]||'';
 const paragraphs=[...block.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(([,p])=>decode(p));
 return paragraphs.filter(p=>/\bplazas? de\b/i.test(p)&&!ineligible.test(p)&&!excluded.test(p)&&!/promoci[oó]n interna|turno interno/i.test(p)).map(p=>({
  ...item,
  id:`${item.id}-${createHash('sha256').update(p).digest('hex').slice(0,10)}`,
  title:`${item.title} — ${p.slice(0,240)}`,
  deadline:html.includes('plazo de presentación de solicitudes')? 'Consultar plazo en BOE':null,
  searchText:`${item.title} ${p}`
 }));
}

export function pagEntries(xml,province){
 if(!/<convocatorias(?:\s|>|\/>)/.test(xml))throw new Error('Exportación PAG sin raíz de convocatorias');
 const entries=[];
 const blocks=[...xml.matchAll(/(?:^|\n)\s{4}<convocatorias>([\s\S]*?)\n\s{4}<\/convocatorias>/g)];
 for(const [,block] of blocks){
  const top=block.replace(/<disposiciones>[\s\S]*?<\/disposiciones>/g,'').replace(/<plazos>[\s\S]*?<\/plazos>/g,'');
  const field=(name,source=top)=>decode(source.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`))?.[1]||'');
  if(field('provinciaId')!==String(province)||/PROMOCI[ÓO]N INTERNA|TURNO INTERNO/i.test(field('viagrupo')))continue;
  const id=field('id'),role=field('titulo')||field('cuerpo'),place=[field('unidad'),field('descripcion')].filter(Boolean).join(' · ');
  if(!id||!role)continue;
  if(String(province)==='28'&&!madrid.test(place))continue;
  const doc=field('documento',block),institution=field('organo');
  const url=[doc,field('direccioninternet')].find(x=>/^https:\/\//i.test(x))||'https://administracion.gob.es/empleopublico/resultadosEmpleo';
  entries.push({id,title:`Convocatoria de plazas de ${role} — ${institution}`,context:`${place} · ${institution} · ${field('codigogrupo')}${String(province)==='45'?' · Toledo':''}`,url,deadline:field('fechafin',block)||null,qualification:field('titulacion')||'Revisar bases',vacancies:Number(field('plazaslibres'))||null,access:field('viagrupo')||'Revisar bases'});
 }
 return entries;
}
