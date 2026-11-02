// Shared, deterministic presentation rules for the public-employment radar.
// No title/location/group/deadline/eligibility is considered verified unless present in an official source.
const followup = /\b(?:acta(?:s)?(?:\s+(?:final|de|del))?|lista(?:do)?s?\s+(?:provisional(?:es)?|definitiv[ao]s?|de\s+admitid|de\s+excluid)|resoluci[oó]n\s+de\s+aprobados|calificacion(?:es)?|resultado(?:s)?|propuesta\s+de\s+adjudicaci[oó]n|adjudicaci[oó]n|nombramiento(?:s)?|toma\s+de\s+posesi[oó]n|plantilla\s+(?:correctora|de respuestas)|correcci[oó]n\s+de\s+errores|subsanaci[oó]n|tribunal\s+calificador|fecha\s+de\s+examen|aviso\s+de\s+celebraci[oó]n\s+de\s+pruebas)\b/i;
const qualificationDefault=/^(?:revisar bases|por revisar|pendiente|no consta|—)$/i;
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
 if(/^\d{4}-\d{2}-\d{2}$/.test(raw))return raw;
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
 const title=clean(o.title), phaseFollowup=followup.test(title);
 const role=clean(o.position)||rawRole(title);
 const knownRole=!!role && roleNames.test(role);
 const officialUrl=/^https:\/\//i.test(o.officialUrl||'')?o.officialUrl:null;
 const iso=dateISO(o.deadline);
 const closed=iso && iso<asOf;
 const status=closed?'CERRADA':iso && iso>=asOf?'PLAZO_ABIERTO':o.state==='PREVISTA'?'PREVISTA':(phaseFollowup?'SEGUIMIENTO':'REVISAR');
 const vacancies=(Number.isInteger(o.vacancies)&&o.vacancies>0)?o.vacancies:countVacancies(title);
 const qualification=clean(o.qualification);
 const knownQualification=qualification&&!qualificationDefault.test(qualification);
 const group=/^(?:AP|B|C1|C2)$/.test(o.group||'')?o.group:'REVISAR';
 const access=clean(o.access);
 const kind=/\b(?:bolsa|lista\s+de\s+espera)\b/i.test(title)?'Bolsa':/sustituci[oó]n|interin|contrataci[oó]n\s+temporal/i.test(title)?'Temporal':/\b(?:OEP|oferta\s+de\s+empleo\s+p[uú]blico)\b/i.test(title)?'Oferta de empleo (sin convocatoria)':/plazas?|convocatoria|bases/i.test(title)?'Oposición / proceso selectivo':'Por determinar';
 const actionable=!phaseFollowup && knownRole && !!officialUrl;
 return {
  ...o,title,position:knownRole?role:null,organism:institution(o),
  location:municipality(o),vacancies,deadline:iso?o.deadline:null,
  deadlineIso:iso,group,qualification:knownQualification?qualification:null,
  access:access&&!qualificationDefault.test(access)?access:null,
  kind,state:status,phaseFollowup,actionable,knownQualification:!!knownQualification,
  completeness:(knownRole?1:0)+(vacancies!=null?1:0)+(iso?1:0)+(knownQualification?1:0)+(group!=='REVISAR'?1:0),
  informationPending:!knownRole||!iso||!knownQualification,
  compatibility:o.compatibility==='CUMPLE' && knownQualification?'CUMPLE':'REVISAR',
  officialUrl
 };
}
export function classifyRadarEntries(items,asOf){
 return items.map(x=>normalizeOpportunity(x,asOf)).sort((a,b)=>{
  const pri=x=>x.state==='PLAZO_ABIERTO'?3:x.state==='REVISAR'?2:x.state==='PREVISTA'?1:0;
  return Number(b.actionable)-Number(a.actionable)||pri(b)-pri(a)||b.completeness-a.completeness||
  String(b.firstSeen||'').localeCompare(String(a.firstSeen||''));
 });
}
