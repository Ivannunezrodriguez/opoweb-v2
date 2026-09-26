import fs from 'node:fs/promises';
import {boeEntries,bocmEntries,merge} from './radar-core.mjs';

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
   entries.push(...boeEntries(j).map(x=>({...x,source:'BOE'})));
  }
  return entries;
 })(),
 (async()=>bocmEntries(await (await get('https://www.bocm.es/ultimo-boletin.xml','application/rss+xml')).text()).map(x=>({...x,source:'BOCM'})))()
]);
const successes=results.filter(x=>x.status==='fulfilled');
for(const [i,result] of results.entries())if(result.status==='rejected')console.error(['BOE','BOCM'][i],result.reason);
if(successes.length!==results.length)throw new Error('Una fuente oficial no respondió. Se conserva el radar anterior para evitar una actualización incompleta.');
const entries=successes.flatMap(x=>x.value);
if(!entries.length)throw new Error('Las fuentes respondieron sin anuncios; se conserva el radar anterior.');
const opportunities=merge(previous,entries,date);
await fs.writeFile(out,JSON.stringify({...previous,generatedAt:date,opportunities},null,2)+'\n');
console.log(`Radar: ${entries.length} anuncios consultados; ${opportunities.length} candidatos; ${opportunities.filter(x=>x.isNew).length} nuevos`);
