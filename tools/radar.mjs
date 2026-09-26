import fs from 'node:fs/promises';
import {boeEntries,bocmEntries,bopEntries,docmEntries,boeBody,merge} from './radar-core.mjs';

const out='data/radar.json';
const now=new Date();
const date=now.toISOString().slice(0,10);
const previous=JSON.parse(await fs.readFile(out,'utf8'));
async function get(url,accept){
 const response=await fetch(url,{headers:{Accept:accept,'User-Agent':'OpoWeb-Radar/1.1 (public employment monitoring)'},signal:AbortSignal.timeout(20000)});
 if(!response.ok)throw new Error(`${url}: HTTP ${response.status}`);
 return response;
}
const results=await Promise.allSettled([
 (async()=>{
  const entries=[];
  for(let days=0;days<3;days++){
   const d=new Date(now);d.setUTCDate(d.getUTCDate()-days);
   const ymd=d.toISOString().slice(0,10).replaceAll('-','');
   const url=`https://www.boe.es/datosabiertos/api/boe/sumario/${ymd}`;
   const r=await fetch(url,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(20000)});
   if(r.status===404)continue;
   if(!r.ok)throw new Error(`${url}: HTTP ${r.status}`);
   const j=await r.json();if(String(j.status?.code)!=='200')throw new Error(`BOE ${ymd}: ${j.status?.text}`);
   const items=boeEntries(j);
   // Local BOE headlines commonly say only «una plaza»; the job title is inside the notice.
   const generic=items.filter(x=>/convocatoria para proveer/i.test(x.title)&&!/auxiliar|administrativ|inform[aá]tic|programador|sistemas/i.test(x.title)&&/toledo|madrid|universidad/i.test(x.title+' '+x.context));
   for(let i=0;i<generic.length;i+=4){
    const batch=generic.slice(i,i+4);
    await Promise.all(batch.map(async x=>{
     const html=await (await get(x.url,'text/html')).text();
     const body=boeBody(html);
     x.searchText=`${x.title} ${body}`.slice(0,8000);
     const role=body.match(/(?:una|un|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|\d+) plazas? de [^.]{0,100}(?:auxiliar|administrativ|inform[aá]tic|sistemas|programador)[^.,;]{0,100}/i)?.[0];
     if(role)x.title+=` — ${role}`;
    }));
   }
   entries.push(...items.map(x=>({...x,source:'BOE'})));
  }
  return entries;
 })(),
 (async()=>bocmEntries(await (await get('https://www.bocm.es/ultimo-boletin.xml','application/rss+xml')).text()).map(x=>({...x,source:'BOCM'})))(),
 (async()=>{
  const entries=[];
  for(let days=0;days<3;days++){
   const d=new Date(now);d.setUTCDate(d.getUTCDate()-days);
   const day=`${String(d.getUTCDate()).padStart(2,'0')}/${String(d.getUTCMonth()+1).padStart(2,'0')}/${d.getUTCFullYear()}`;
   const params=new URLSearchParams({publication_date:day,publication_date_to:day});
   const html=await (await get(`https://bop.diputoledo.es/webEbop/ebopResumen.jsp?${params}`,'text/html')).text();
   entries.push(...bopEntries(html).map(x=>({...x,source:'BOP Toledo'})));
  }
  return entries;
 })(),
 (async()=>docmEntries(await (await get('https://docm.jccm.es/docm/sumario.do','text/html')).text()).map(x=>({...x,source:'DOCM'})))()
]);
const successes=results.filter(x=>x.status==='fulfilled');
for(const [i,result] of results.entries())if(result.status==='rejected')console.error(['BOE','BOCM','BOP Toledo','DOCM'][i],result.reason);
if(successes.length!==results.length)throw new Error('Una fuente oficial no respondió. Se conserva el radar anterior para evitar una actualización incompleta.');
const entries=successes.flatMap(x=>x.value);
if(!entries.length)throw new Error('Las fuentes respondieron sin anuncios; se conserva el radar anterior.');
const opportunities=merge(previous,entries,date);
await fs.writeFile(out,JSON.stringify({...previous,generatedAt:date,opportunities},null,2)+'\n');
console.log(`Radar: ${entries.length} anuncios consultados; ${opportunities.length} candidatos; ${opportunities.filter(x=>x.isNew).length} nuevos`);
