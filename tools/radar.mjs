import fs from 'node:fs/promises';
import path from 'node:path';

const OUT=path.resolve('data/radar.json');
const today=new Date();
const ymd=d=>d.toISOString().slice(0,10);
const compact=ymd(today).replaceAll('-','');
const terms=/auxiliar|administrativ|inform[aá]tic|sistemas|programador|t[eé]cnic|gesti[oó]n|bolsa|interin/i;
const geo=/toledo|castilla-la mancha|madrid|getafe|legan[eé]s|fuenlabrada|m[oó]stoles|alcorc[oó]n|aranjuez|parla|valdemoro|illescas|seseña/i;

function walk(v,out=[]){if(Array.isArray(v))v.forEach(x=>walk(x,out));else if(v&&typeof v==='object'){if(('titulo' in v||'texto' in v)&&('url_html' in v||'url_pdf' in v||'identificador' in v))out.push(v);Object.values(v).forEach(x=>walk(x,out))}return out}
function textOf(x){return [x.titulo,x.texto,x.departamento,x.epigrafe,x.identificador].filter(Boolean).join(' ')}
function officialUrl(x){const u=x.url_html||x.url_pdf||x.url; if(!u)return '';return u.startsWith('http')?u:'https://www.boe.es'+u}
function classify(s){if(/\bC1\b/i.test(s))return'C1';if(/\bC2\b/i.test(s))return'C2';if(/grupo B|subgrupo B/i.test(s))return'B';return'REVISAR'}
function compatibility(s){return /C1|C2|grupo B|auxiliar|administrativ|inform[aá]tic|programador|sistemas/i.test(s)?'REVISAR':'REVISAR'}
function zone(s){if(/madrid|getafe|legan[eé]s|fuenlabrada|m[oó]stoles|alcorc[oó]n|aranjuez|parla|valdemoro/i.test(s))return'MADRID_SUR';return'TOLEDO'}

let previous={opportunities:[]};try{previous=JSON.parse(await fs.readFile(OUT,'utf8'))}catch{}
const byId=new Map((previous.opportunities||[]).map(x=>[x.id,{...x,isNew:false}]));

try{
 const r=await fetch('https://www.boe.es/datosabiertos/api/boe/sumario/'+compact,{headers:{Accept:'application/json','User-Agent':'OpoWeb-Radar/1.0'}});
 if(r.ok){
  const json=await r.json();
  for(const item of walk(json)){
   const s=textOf(item); if(!terms.test(s)||!geo.test(s))continue;
   const id='boe-'+String(item.identificador||item.id||Buffer.from(s).toString('base64url').slice(0,24)).toLowerCase();
   const old=byId.get(id);
   byId.set(id,{id,title:item.titulo||item.texto||'Convocatoria detectada',organism:item.departamento||'Administración Pública',location:zone(s)==='TOLEDO'?'Toledo / ámbito relacionado':'Madrid / ámbito relacionado',zone:zone(s),group:classify(s),category:'Empleo público',vacancies:null,state:'BASES_PUBLICADAS',deadline:null,access:'Revisar bases',qualification:'Revisar bases',compatibility:compatibility(s),reason:'Detección automática. La compatibilidad definitiva requiere revisar las bases.',source:'BOE',officialUrl:officialUrl(item),verifiedAt:ymd(today),firstSeen:old?.firstSeen||ymd(today),isNew:!old});
  }
 }
}catch(e){console.error('BOE:',e.message)}

const opportunities=[...byId.values()].sort((a,b)=>(b.firstSeen||'').localeCompare(a.firstSeen||''));
await fs.writeFile(OUT,JSON.stringify({schemaVersion:1,generatedAt:ymd(today),profile:previous.profile||{qualification:'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',zones:['TOLEDO','MADRID_SUR']},opportunities},null,2)+'\n');
console.log('Radar:',opportunities.length,'procesos; nuevos:',opportunities.filter(x=>x.isNew).length);