// Ordenación de fichas Radar: sin fechas o cantidades inventadas.
const date=v=>/^\d{4}-\d{2}-\d{2}$/.test(String(v||''))?v:null;
const count=o=>Number.isInteger(o.vacancies)&&o.vacancies>0?o.vacancies:null;
export function orderRadar(items,by='RELEVANCIA'){
 if(by==='RELEVANCIA')return [...items]; // Conservar el algoritmo de clasificación del radar.
 const sorted=[...items];
 sorted.sort((a,b)=>{
  if(by==='PLAZAS'){
   const av=count(a),bv=count(b);
   return (bv??-1)-(av??-1);
  }
  if(by==='CIERRE'){
   // Cierre documentado primero, no mezclar fechas hipotéticas.
   const av=date(a.deadlineIso),bv=date(b.deadlineIso);
   if(!av)return bv?1:0;
   if(!bv)return -1;
   return av.localeCompare(bv);
  }
  if(by==='PUBLICACION'){
   const av=date(a.publishedAt),bv=date(b.publishedAt);
   if(!av)return bv?1:0;
   if(!bv)return -1;
   return bv.localeCompare(av);
  }
  if(by==='DETECCION')return String(b.firstSeen||'').localeCompare(String(a.firstSeen||''));
  return 0;
 });
 return sorted;
}
export function deadlineAlert(o,asOf){
 const dateValue=date(o.deadlineIso);
 if(!dateValue || o.deadlineDisputed || o.state==='CERRADA' || o.state==='CIERRE_PROBABLE')return null;
 const days=Math.round((Date.parse(dateValue+'T12:00:00Z')-Date.parse(asOf+'T12:00:00Z'))/86400000);
 if(days<0)return null;
 if(days===0)return 'Último día de inscripción (fecha registrada)';
 if(days<=7)return 'Cierra en '+days+' día'+(days===1?'':'s')+' (fecha registrada)';
 return null;
}
