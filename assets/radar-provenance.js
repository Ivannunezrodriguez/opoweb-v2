// Procedencia editorial, no acreditación de admisión ni de vigencia legal.
// Una fuente verificable puede ofrecer únicamente un extracto o anuncio.
export const RADAR_ORIGIN_NAMES=Object.freeze({
 DIRECT:'Sede o web institucional',
 BOE:'Boletín Oficial del Estado (BOE)',
 'BOP Toledo':'Boletín Oficial de la Provincia de Toledo (BOP)',
 DOCM:'Diario Oficial de Castilla-La Mancha (DOCM)',
 BOCM:'Boletín Oficial de la Comunidad de Madrid (BOCM)',
 PAG:'Punto de Acceso General de empleo público (PAG)'
});
const clean=v=>String(v??'').trim();
export function sourceReference(source,url){
 const origin=clean(source),value=clean(url);
 if(!Object.hasOwn(RADAR_ORIGIN_NAMES,origin))return null;
 let parsed;
 try{parsed=new URL(value)}catch{return null}
 if(parsed.protocol!=='https:'||parsed.username||parsed.password)return null;
 return {source:origin,label:RADAR_ORIGIN_NAMES[origin],url:parsed.href};
}
export function uniqueSourceReferences(items,cap=8){
 const seen=new Set(),out=[];
 for(const raw of items||[]){
  const ref=sourceReference(raw?.source,raw?.url);
  if(!ref)continue;
  const key=ref.source+'|'+ref.url;
  if(seen.has(key))continue;
  seen.add(key);out.push(ref);
  if(out.length>=cap)break;
 }
 return out;
}
// 'Documento leído' significa extracción técnica de texto, no revisión
// humana integral de bases, plazos o requisitos.
export function assessOpportunityEvidence(o){
 const references=uniqueSourceReferences([
  ...(Array.isArray(o?.sourceReferences)?o.sourceReferences:[]),
  {source:o?.source,url:o?.officialUrl}
 ]);
 const hasBulletin=references.some(x=>['BOE','BOP Toledo','DOCM','BOCM'].includes(x.source));
 const hasDirect=references.some(x=>x.source==='DIRECT');
 const hasPAG=references.some(x=>x.source==='PAG');
 const documentRead=o?.detailsStatus==='LEIDO';
 const requirementsMissing=[];
 if(!clean(o?.position))requirementsMissing.push('puesto');
 if(!clean(o?.qualification)||/revisar bases|sin verificar|por confirmar/i.test(o.qualification))requirementsMissing.push('titulación');
 if(!clean(o?.group)||o.group==='REVISAR')requirementsMissing.push('subgrupo');
 if(!clean(o?.deadlineIso)&&!clean(o?.deadline)&&!clean(o?.applicationTerm))requirementsMissing.push('plazo');
 const level=!documentRead?'ANUNCIO_SIN_LECTURA':requirementsMissing.length?'DOCUMENTO_CON_DATOS_PARCIALES':'DOCUMENTO_CON_DATOS_PRINCIPALES';
 const sourceDescription=hasBulletin&&!hasDirect?'Localizado en boletín oficial; sede municipal no cotejada para este expediente':
  hasBulletin&&hasDirect?'Existen referencias a boletín y sede institucional':
  hasDirect?'Localizado en sede o web institucional':
  hasPAG?'Localizado en el Punto de Acceso General':
  'Origen oficial pendiente de identificar';
 const label=level==='ANUNCIO_SIN_LECTURA'?'Anuncio o extracto · datos parciales':
  level==='DOCUMENTO_CON_DATOS_PARCIALES'?'Documento leído · faltan datos':
  'Documento leído · datos principales detectados';
 return {references,level,label,sourceDescription,requirementsMissing,documentRead,
  caution:'La lectura automática no acredita la vigencia ni sustituye el examen de las bases, sus rectificaciones y el anuncio que abre el plazo.'};
}
