// Shared, deterministic presentation rules for the public-employment radar.
// No title/location/group/deadline/eligibility is considered verified unless present in an official source.
const followup = /\b(?:acta(?:s)?(?:\s+(?:final|de|del))?|lista(?:do)?s?\s+(?:provisional(?:es)?|definitiv[ao]s?|de\s+(?:personas?\s+)?admitid[oa]s?|de\s+(?:personas?\s+)?excluid[oa]s?)|resoluci[oó]n\s+de\s+aprobados|calificacion(?:es)?|resultado(?:s)?|propuesta\s+de\s+adjudicaci[oó]n|adjudicaci[oó]n|nombramiento(?:s)?|toma\s+de\s+posesi[oó]n|plantilla\s+(?:correctora|de respuestas)|correcci[oó]n\s+de\s+errores|subsanaci[oó]n|tribunal\s+calificador|fecha\s+de\s+examen|aviso\s+de\s+celebraci[oó]n\s+de\s+pruebas)\b/i;
// Una actualización de funcionamiento de bolsa ya constituida no es una nueva inscripción.
const existingBagStatus=/\b(?:estado\s+(?:actual\s+)?de\s+(?:la\s+)?bolsa|diligencia\s+(?:de\s+)?activaci[oó]n\s+(?:de\s+)?(?:la\s+)?bolsa|relaci[oó]n\s+de\s+integrantes\s+de\s+(?:la\s+)?bolsa|bolsa\s+(?:ya\s+)?constituida|orden\s+de\s+llamamiento\s+(?:de\s+)?(?:la\s+)?bolsa)\b/i;
const qualificationDefault=/^(?:revisar bases|por revisar|pendiente|no consta|—)$/i;
const amendNotice=/\b(?:acumulaci[oó]n\s+de\s+(?:una\s+)?plaza|ampliaci[oó]n\s+del\s+plazo|modificaci[oó]n\s+de\s+(?:bases|convocatoria)|rectificaci[oó]n\s+de\s+(?:bases|convocatoria)|ampliaci[oó]n\s+de\s+bolsa)\b/i;
const roleNames=/\b(?:auxiliar(?:es)?(?:\s+administrativ[oa]s?)?|administrativ[oa]s?|limpiador(?:a|es|as)?|conserje(?:s)?|ordenanza(?:s)?|subaltern[oa]s?|pe[oó]n(?:es)?|oficial(?:es)?\s+(?:de|primera|segunda)|t[eé]cnic[oa]s?(?:\s+(?:auxiliar|de apoyo|inform[aá]tic[oa]|de sistemas|de mantenimiento))?|programador(?:a|es)?|inform[aá]tic[oa]s?|electronic[oa]s?|jardiner[oa]s?|electricista(?:s)?|socorrista(?:s)?|personal\s+de\s+(?:limpieza|mantenimiento)|operari[oa]s?|trabajador(?:a|es|as)?\s+social(?:es)?)\b/i;
const numbers={un:1,uno:1,una:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6,siete:7,ocho:8,nueve:9,diez:10,once:11,doce:12,quince:15,veinte:20};
const generic=/^(?:resoluci[oó]n|anuncio|convocatoria|oferta de empleo p[uú]blico|aprobaci[oó]n de bases|plazas?\s+(?:de|para)\s+(?:personal|la plantilla))\b/i;

function clean(s){return String(s??'').replace(/\s+/g,' ').trim()}
function rawRole(title){
  const t=clean(title);
  let match=t.match(/(?:\b(?:\d+|un[ao]?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)\s+)?plazas?\s+(?:de|para)\s+(.{2,110}?)(?=\s+(?:de la plantilla|de personal|por el sistema|con car[aá]cter|mediante|en turno|en acceso|a tiempo|por concurso|,|\.|;|—)|$)/i);
  if(match){
    const value=clean(match[1]).replace(/^(?:personal\s+(?:laboral|funcionario)\s+de\s+)/i,'').replace(/\s+(?:por\s+(?:turno|el|concurso)|en\s+turno|en\s+(?:Getafe|Toledo)|adscrit[oa]\s+al|del\s+Ayuntamiento).*$/i,'').trim();
    if(roleNames.test(value) && !/^(?:personal|puestos|trabajo)$/i.test(value))return value.slice(0,90);
  }
  match=t.match(/\bbolsa(?:\s+(?:de\s+)?trabajo|\s+de\s+empleo)?\s+(?:de|para)\s+(.{2,100}?)(?=[,.;—]|\s+(?:del|de la|por|con|en el|para sustituciones)\b|$)/i);
  if(match && roleNames.test(match[1]))return clean(match[1]).replace(/^personal\s+laboral\s+temporal\s+para\s+/i,'').replace(/\s+por\s+(?:turno|el).*$/i,'').slice(0,90);
  match=t.match(/\b(?:contrataci[oó]n|selecci[oó]n|convocatoria)\s+(?:urgente\s+)?(?:temporal\s+)?(?:de|para)\s+((?:personal\s+)?(?:auxiliar|administrativ|limpiador|conserje|ordenanza|t[eé]cnic|pe[oó]n|jardiner|electricista|inform[aá]tic|socorrista)[\wÀ-ÿ /-]{0,80})/i);
  if(match)return clean(match[1]).replace(/\s+(?:adscrit[oa]|de la plantilla|por|mediante|en Getafe|en Toledo)\b.*$/i,'').slice(0,90);
  // A named, short call can be sufficient even when its title does not use "plaza".
  if(t.length<120 && roleNames.test(t) && /\b(?:bolsa|selecci[oó]n|contrataci[oó]n|convocatoria)\b/i.test(t)){
    const start=t.search(roleNames);
    return t.slice(start).replace(/[.;,].*$/,'').slice(0,90);
  }
  return null;
}
function countVacancies(title){
  const m=clean(title).match(/\b(\d+|un[ao]?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|quince|veinte)\s+plazas?\b/i);
  return m? (/^\d+$/.test(m[1])?Number(m[1]):numbers[m[1].toLowerCase()]||null):null;
}
function dateISO(value){
 const raw=clean(value);
 if(/^\d{4}-\d{2}-\d{2}$/.test(raw)){
  const d=new Date(raw+'T12:00:00Z');
  return Number.isNaN(d.getTime())||d.toISOString().slice(0,10)!==raw?null:raw;
 }
 const m=raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
 if(!m)return null;
 const iso=m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');
 const d=new Date(iso+'T12:00:00Z');
 return Number.isNaN(d.getTime())||d.toISOString().slice(0,10)!==iso?null:iso;
}
function municipality(o){
 const t=clean(o.title), org=clean(o.organism);
 const m=t.match(/\b(?:del|de la)\s+(?:Ayuntamiento de|Diputaci[oó]n Provincial de|Universidad de)\s+([^,(.;—]+)/i);
 if(m)return clean(m[1]);
 if(/^AYUNTAMIENTO DE\s+/i.test(org))return org.replace(/^AYUNTAMIENTO DE\s+/i,'');
 const l=clean(o.location);
 if(l && !/\b(?:verificar destino|comprobar destino)\b/i.test(l))return l;
 return o.zone==='TOLEDO'?'Provincia de Toledo (municipio por comprobar)':'Sur de Madrid (centro por comprobar)';
}
function institution(o){
 const org=clean(o.organism);
 const m=clean(o.title).match(/\b(?:Ayuntamiento de|Diputaci[oó]n Provincial de|Universidad Carlos III de Madrid|Universidad de)\s+([^,(.;—]+)/i);
 if(/^II\.\s*Autoridades|^Consultar anuncio$/i.test(org) && m){
   if(/Ayuntamiento/i.test(o.title))return 'Ayuntamiento de '+clean(m[1]);
   if(/Diputaci[oó]n/i.test(o.title))return 'Diputación Provincial de '+clean(m[1]);
   return 'Universidad '+clean(m[1]);
 }
 return org||'Organismo por identificar';
}
export function normalizeOpportunity(o,asOf){
 const title=clean(o.title);
 const navigationOnly=o.source==='DIRECT'&&/^(?:contrataci[oó]n(?:\s+p[uú]blica)?|selecci[oó]n(?:\s+de\s+personal)?|personal|recursos\s+humanos)$/i.test(title);
 const phaseFollowup=followup.test(title)||amendNotice.test(title)||existingBagStatus.test(title)||/\b(?:composici[oó]n\s+de\s+(?:la\s+)?(?:ampliaci[oó]n\s+de\s+)?bolsa|bolsa\s+[uú]nica\s+provisional|exclusi[oó]n\s+temporal\s+o\s+alta\s+de\s+la\s+bolsa)\b/i.test(title);
 const role=clean(o.position)||rawRole(title);
 const knownRole=!!role && roleNames.test(role);
 const officialUrl=/^https:\/\//i.test(o.officialUrl||'')?o.officialUrl:null;
 // Discrepancias entre reglas documentadas bloquean la fecha automática hasta cotejo oficial.
 const deadlineConflict=Boolean(o.applicationRuleConflict||o.deadlineDisputed);
 const vacancyConflict=Boolean(o.vacanciesDisputed||o.vacancyConflict);
 const iso=deadlineConflict?null:dateISO(o.deadline);
 // Una OEP anuncia plazas futuras: no abre solicitudes. Ni una fecha importada,
 // ni un estado heredado del feed pueden convertirla en plazo abierto.
 const offersMention=/\bOEP\b|oferta\s+de\s+empleo\s+p[uú]blico/i.test(title);
 const explicitCall=/\bconvocatori[ao]s?\s+(?:para\s+proveer|de\s+plazas|de\s+proceso|del\s+proceso)|\bse\s+convoca(?:n)?\b|\bconvocatoria\s+de\s+acceso\b/i.test(title);
 const isOffer=o.tipoPublicacion==='OFERTA_EMPLEO_PUBLICO_NO_CONVOCATORIA' || (offersMention&&!explicitCall);
 const closed=!!iso && iso<asOf;
 const status=isOffer?'PREVISTA':phaseFollowup?'SEGUIMIENTO':closed?'CERRADA':iso?'PLAZO_ABIERTO':'REVISAR';
 const vacancies=vacancyConflict?null:((Number.isInteger(o.vacancies)&&o.vacancies>0)?o.vacancies:countVacancies(title));
 const qualification=clean(o.qualification);
 const knownQualification=qualification&&!qualificationDefault.test(qualification);
 const group=/^(?:AP|B|C1|C2|A1|A2)$/.test(o.group||'')?o.group:(clean(o.organism).match(/(?:^|[·|,;])\s*(A1|A2|B|C1|C2|AP)(?=\s*(?:[·|,;]|$))/i)?.[1]||'REVISAR');
 const specificDegree=/^Grado\s+en\s+/i.test(qualification)&&!/\b(?:t[eé]cnic[oa]|formaci[oó]n\s+profesional|bachiller|ESO)\b/i.test(qualification);
 // El grupo es una señal de revisión, nunca prueba literal de un requisito.
 const explicitUniversity= /\b(?:t[ií]tulo\s+de\s+grado\s+universitario|licenciatura|diplomatura|doctorado|graduad[oa]\s+universitari[oa])\b/i.test(qualification)||specificDegree;
 const alternativeFP=/\b(?:o|alternativamente)\s+(?:(?:el|la|un|una)\s+)?(?:t[ií]tulo\s+de\s+)?(?:t[eé]cnic[oa](?:\s+superior)?|formaci[oó]n\s+profesional|bachiller|ESO|graduad[oa]\s+en\s+educaci[oó]n\s+secundaria)\b/i.test(qualification);
 const ineligible=knownQualification&&explicitUniversity&&!alternativeFP&&o.detailsStatus==='LEIDO';
 const compatibility=ineligible?'NO_CUMPLE':'REVISAR';
 const access=clean(o.access);
 const kind=isOffer?'Oferta de empleo (sin convocatoria)':/\b(?:bolsa|lista\s+de\s+espera)\b/i.test(title)?'Bolsa':/\bsustituci[oó]n(?:es)?\b|\bsuplencia(?:s)?\b/i.test(title)?'Sustitución':/\binterin(?:o|a|os|as|idad|idades)\b/i.test(title)?'Interinidad':/contrataci[oó]n\s+temporal|personal\s+laboral\s+temporal|contrato\s+temporal/i.test(title)?'Temporal':/personal\s+laboral\s+fijo|contrato\s+indefinido/i.test(title)?'Laboral fijo':/funcionari[oa]\s+de\s+carrera/i.test(title)?'Funcionario de carrera':/plazas?|convocatoria|bases/i.test(title)?'Oposición / proceso selectivo':'Por determinar';
 const actionable=!navigationOnly && !isOffer && !phaseFollowup && !ineligible && !deadlineConflict && !vacancyConflict && knownRole && !!officialUrl;
 return {
  ...o,title,navigationOnly,position:knownRole?role:null,organism:institution(o),
  location:municipality(o),vacancies,deadlineConflict,vacancyConflict,deadline:isOffer?null:(iso?o.deadline:null),
  deadlineIso:isOffer?null:iso,group,qualification:knownQualification?qualification:null,
  access:access&&!qualificationDefault.test(access)?access:null,
  kind,state:ineligible?'NO_ACCESIBLE':(vacancyConflict&&!isOffer&&!phaseFollowup?'REVISAR':status),phaseFollowup,offerWithoutCall:isOffer,notAccessible:!!ineligible,actionable,knownQualification:!!knownQualification,
  completeness:(knownRole?1:0)+(vacancies!=null?1:0)+(iso?1:0)+(knownQualification?1:0)+(group!=='REVISAR'?1:0),
  informationPending:!knownRole||!iso||!knownQualification,
  compatibility,
  officialUrl
 };
}
// Prefer verified vacancy counts and grounded locality, never invent distances.
const nearToledo=new Set(['toledo','olias del rey','bargas','cobisa','argas','nambroca','burguillos de toledo','mocejon','magán','magan','layos','guadamur','polan','polán']);
function localityTier(o){
 const location=clean(o.location).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 if(!location || /por comprobar|sin verificar|provincia de|sur de madrid/.test(location))return 0;
 if(location==='toledo'||/^toledo[, (]/.test(location))return 4;
 for(const place of nearToledo)if(location===place||location.startsWith(place+',')||location.startsWith(place+' ('))return 3;
 // Named destination in province: geographic closeness cannot be inferred from the province alone.
 return o.zone==='TOLEDO'?2:o.zone==='MADRID_SUR'?1:0;
}
function priorityScore(o){
 const vacancyScore=o.vacancies==null?0:Math.min(40,40*Math.log1p(o.vacancies)/Math.log(35));
 const locationScore=localityTier(o)*7.5;
 // Only official-source-confirmed C2/AP and named administrative/technical roles receive a fit signal.
 const fitScore=o.group==='C2'?12:o.group==='AP'?9:o.group==='C1'?10:0;
 const roleScore=/auxiliar|administrativ|informat|electr[oó]nic|mantenimiento/i.test(o.position||'')?8:0;
 const urgency=o.state==='PLAZO_ABIERTO'?10:o.state==='REVISAR'?5:0;
 return vacancyScore+locationScore+fitScore+roleScore+urgency;
}
export function classifyRadarEntries(items,asOf){
 return items.map(x=>normalizeOpportunity(x,asOf)).sort((a,b)=>{
  const pri=x=>x.state==='PLAZO_ABIERTO'?3:x.state==='REVISAR'?2:x.state==='PREVISTA'?1:0;
  return Number(b.actionable)-Number(a.actionable)||pri(b)-pri(a)||
    priorityScore(b)-priorityScore(a)||b.completeness-a.completeness||
    String(b.firstSeen||'').localeCompare(String(a.firstSeen||''));
 });
}
