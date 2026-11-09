import assert from 'node:assert/strict';
import fs from 'node:fs';
import {classify,boeEntries,bocmEntries,bopEntries,docmEntries,boeBody,boeVacancyEntries,pagEntries,merge} from '../tools/radar-core.mjs';
import {normalizeOpportunity} from '../assets/radar-quality.js';
const profile=JSON.parse(fs.readFileSync('data/radar-profile.json','utf8'));
assert.deepEqual(profile.targetGroups,['B','C1','C2','AP']);
assert.equal(profile.zones.toledo.mode,'PROVINCIA_COMPLETA');
const titles=[
 ['Resolución del Ayuntamiento de La Puebla de Montalbán (Toledo), referente a la convocatoria para proveer cuatro plazas de Auxiliar Administrativo.',true],
 ['Resolución de la Diputación Provincial de Toledo, referente a la convocatoria para proveer plazas de Administrativo.',true],
 ['Resolución de la Universidad Carlos III de Madrid, por la que se convocan plazas de Técnico Auxiliar de Informática en Getafe.',true],
 ['Convocatoria para proveer plazas de Administrativo C1 en Toledo por promoción interna.',false],
 ['Resolución de aprobados y lista de admitidos en plazas de Administrativo C1 en Toledo.',false],
 ['Convocatoria de plazas de Administrativo C1 en Toledo, turno libre y promoción interna.',true],
 ['Convocatoria para plazas del Cuerpo de Abogados A1 en Toledo.',false],
 ['Convocatoria para plazas de Administrativo C1 en Zaragoza.',false]
];
for(const [title,expected] of titles)assert.equal(Boolean(classify(title)),expected,title);
assert.equal(classify('Resolución del Ayuntamiento de Las Herencias (Toledo), referente a la convocatoria para proveer una plaza. — Una plaza de Auxiliar de ayuda a domicilio a tiempo parcial, personal laboral fijo, turno libre.')?.zone,'TOLEDO');
assert.equal(classify('Anuncio del Ayuntamiento de Malpica de Tajo (Toledo) sobre aprobación de la Oferta de Empleo Público para una plaza de peón de jardinería','', 'Subgrupo C2')?.state,'PREVISTA');
const boe=boeEntries({data:{sumario:{diario:[{seccion:[{nombre:'Oposiciones y concursos',departamento:[{nombre:'Ayuntamiento de Toledo',epigrafe:[{item:[{identificador:'BOE-A-2026-14274',titulo:titles[0][0],url_html:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14274'}]}]}]}]}]}}});
assert.equal(boe.length,1);assert.match(boe[0].context,/Toledo/);
const bocm=bocmEntries('<rss><channel><item><link>https://www.bocm.es/bocm-20260926-1</link><description>&lt;p&gt;Convocatoria de plazas de Auxiliar Administrativo en Getafe&lt;/p&gt;</description></item></channel></rss>');
assert.equal(bocm.length,1);assert.match(bocm[0].title,/Getafe/);
const bop=bopEntries('<h3 class="publisherBlock">Anunciante : AYUNTAMIENTO DE TALAVERA DE LA REINA</h3><div id="1" class="announce"><ul><li><a href="DocGet?id=123;0&amp;insert_number=4270&amp;insert_year=2026">Ver anuncio</a></li><li><strong>Resumen/Asunto : </strong>Bases de convocatoria de dos plazas de Auxiliar Administrativo</li></ul>');
assert.equal(bop.length,1);assert.equal(bop[0].id,'4270-2026');assert.match(bop[0].url,/DocGet/);
const docm=docmEntries('<h4 class="tituloOrganismo">Universidad de Castilla-La Mancha</h4><p class = "sumario"><a href="./descargarArchivo.do?ruta=2026/09/25/pdf/2026_6816.pdf&amp;tipo=rutaDocm">Convocatoria</a> de plazas de Técnico Auxiliar Informático en Toledo. [NID 2026/6816]</p>');
assert.equal(docm.length,1);assert.match(docm[0].url,/verArchivoHtml/);
const ventas='Resolución de 24 de junio de 2026, del Ayuntamiento de Las Ventas con Peña Aguilera (Toledo), referente a la convocatoria para proveer una plaza.';
const ventasBody=boeBody('<div id="textoxslt"><p>Una plaza de Auxiliar Administrativo-Administrativa, por el sistema de concurso-oposición, en turno libre.</p></div>');
assert.equal(classify(ventas)?.zone,'TOLEDO');
assert.equal(classify(`${ventas} ${ventasBody}`)?.zone,'TOLEDO');
// Published 2026 cases: a generic BOE headline can include several access routes.
const diputacion='Resolución de 26 de junio de 2026, de la Diputación Provincial de Toledo, referente a la convocatoria para proveer varias plazas.';
const mixed=`<div id="textoxslt"><p>Una plaza de Analista Programador, por el sistema de oposición, en turno libre.</p><p>Dos plazas de Administrativo/a, por el sistema de oposición, en turno libre.</p><p>Dos plazas de Técnico/a Administración General, en turno de promoción interna.</p><p>Una plaza de Administrativo/a, en turno de promoción interna.</p></div>`;
const free=boeVacancyEntries({id:'BOE-A-2026-14527',title:diputacion,context:'Administración local'},mixed);
assert.equal(free.length,2);assert(free.every(x=>classify(x.searchText,x.context)));
assert.notEqual(free[0].id,free[1].id);
assert.equal(boeVacancyEntries({id:'BOE-A-2026-14274',title:ventas,context:''},'<div id="textoxslt"><p>Una plaza de Auxiliar Administrativo, en turno libre.</p></div>').length,1);
const uc3m='Resolución de 30 de junio de 2026, de la Universidad Carlos III de Madrid, por la que se convoca proceso selectivo para ingreso, por el sistema general de acceso libre, en la Escala Auxiliar Administrativa.';
assert.equal(classify(uc3m)?.zone,'MADRID_SUR');
const pagXml=`<convocatorias>\n    <convocatorias><id>123</id><descripcion>Getafe</descripcion><disposiciones><documento>https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14274</documento></disposiciones><plazos><fechafin>30/09/2026</fechafin></plazos><titulo>AUXILIAR ADMINISTRATIVO</titulo><viagrupo>ACCESO LIBRE</viagrupo><provinciaId>28</provinciaId><organo>Universidad Carlos III de Madrid</organo><titulacion>ESO</titulacion><plazaslibres>2</plazaslibres>\n    </convocatorias>\n</convocatorias>`;
const pag=pagEntries(pagXml,'28');
assert.equal(pag.length,1);assert.equal(pag[0].deadline,'30/09/2026');assert.equal(pag[0].qualification,'ESO');
assert.equal(pagEntries(pagXml.replace('Getafe','Madrid'),'28').length,0);
assert.equal(pagEntries('<?xml version="1.0"?><convocatorias/>','45').length,0);
const found=merge({opportunities:[]},[{...boe[0],source:'BOE'},{...bocm[0],source:'BOCM'}],'2026-09-26');
assert.equal(found.length,2);assert(found.every(x=>x.isNew&&x.compatibility==='REVISAR'&&x.state==='REVISAR'));
assert(merge({opportunities:found},[{...boe[0],source:'BOE'}],'2026-09-27').every(x=>!x.isNew));
console.log('Radar fixtures OK');
// Broad intake: no profession whitelist; temporary opportunities also count.
for(const title of [
 'Bolsa de trabajo de limpieza en Parla',
 'Contratación temporal de socorrista en Getafe',
 'Oferta de sustitución de electricista en Toledo',
 'Selección de personal de mantenimiento en Leganés',
 'Convocatoria de plazas de bombero C1 en Toledo',
 'Convocatoria de una plaza de técnico de prevención de riesgos laborales en Toledo',
 'Plan de empleo para peones en Toledo'
])assert(classify(title),title);
assert.equal(classify('Lista definitiva de admitidos a bolsa de limpieza en Parla'),null);
const local={source:'BOP Toledo',id:'test-yuncos',title:'Bolsa de trabajo para sustituciones de limpieza',context:'AYUNTAMIENTO DE YUNCOS',url:'https://bop.diputoledo.es/example'};
const initial=merge({opportunities:[]},[local],'2026-09-28');
assert.equal(initial.length,1);assert.equal(initial[0].zone,'TOLEDO');
assert.equal(merge({opportunities:initial},[local],'2026-09-29')[0].isNew,false);
assert.equal(merge({opportunities:initial},[],'2026-09-29')[0].isNew,false);
assert.equal(pagEntries(pagXml.replace('ACCESO LIBRE','PERSONAL TEMPORAL'),'28').length,1);
console.log('Cobertura de bolsas, sustituciones, oficios y avisos solo nuevos OK');
const regional=merge({opportunities:[]},[{source:'DIRECT',id:'regional-test',title:'Convocatoria bolsa de personal de limpieza',context:'Comunidad de Madrid',scopeZone:'MADRID_SUR',location:'Comunidad de Madrid: comprobar destino Madrid sur',url:'https://www.comunidad.madrid/convocatoria-test'}],'2026-09-28');
assert.equal(regional.length,1);assert.match(regional[0].location,/por comprobar|comprobar destino/);
const sameOfficial=merge({opportunities:found},[{...boe[0],source:'DIRECT',id:'another-id'}],'2026-09-28');
assert.equal(sameOfficial.length,found.length);assert(sameOfficial.every(x=>!x.isNew));


const qualityCases=[
 {title:'Resolución del Ayuntamiento de Olías del Rey (Toledo), referente a convocatoria — Tres plazas de Limpiador/a de la plantilla laboral, turno libre.',
  organism:'II. Autoridades y personal. - B. Oposiciones y concursos',location:'Toledo (verificar destino)',zone:'TOLEDO',officialUrl:'https://www.boe.es/test',
  expectedPosition:/Limpiador/,expectedVacancies:3,expectedActionable:true},
 {title:'Acumulación de una plaza de discapacidad al turno libre del proceso de Auxiliar Administrativo',organism:'AYUNTAMIENTO DE TALAVERA DE LA REINA',
  zone:'TOLEDO',officialUrl:'https://bop.diputoledo.es/test',expectedPosition:/Auxiliar Administrativo/,expectedVacancies:1,expectedActionable:false},
 {title:'Acta final del plan de empleo',organism:'AYUNTAMIENTO DE CAMARENA',zone:'TOLEDO',officialUrl:'https://camarena.sedelectronica.es/test',
  expectedPosition:null,expectedVacancies:null,expectedActionable:false},
 {title:'Convocatoria de plazas de Técnico Auxiliar de Informática',organism:'Convocante · A2 · Toledo',
  zone:'TOLEDO',officialUrl:'https://empleo.example.es/test',expectedPosition:/Técnico Auxiliar/,expectedVacancies:null,expectedActionable:false}
];
for(const item of qualityCases){
  const o=normalizeOpportunity(item,'2026-11-02');
  if(item.expectedPosition)assert.match(o.position,item.expectedPosition,item.title);
  else assert.equal(o.position,null,item.title);
  assert.equal(o.vacancies,item.expectedVacancies,item.title);
  assert.equal(o.actionable,item.expectedActionable,item.title);
  if(/Acumulación|Acta final/i.test(item.title))assert(o.phaseFollowup,item.title);
}
const dated=normalizeOpportunity({title:'Convocatoria de una plaza de Auxiliar Administrativo en Getafe',officialUrl:'https://www.bocm.es/a',
  zone:'MADRID_SUR',deadline:'30/11/2026',qualification:'ESO'},'2026-11-02');
assert.equal(dated.state,'PLAZO_ABIERTO');
assert.equal(dated.deadlineIso,'2026-11-30');
const expired=normalizeOpportunity({...dated,deadline:'01/10/2026'},'2026-11-02');
assert.equal(expired.state,'CERRADA');
const unknown=normalizeOpportunity({...dated,deadline:'Consultar plazo en BOE'},'2026-11-02');
assert.equal(unknown.state,'REVISAR');
assert.equal(unknown.deadline,null);
console.log('Radar quality: puestos, convocatorias, seguimiento, A2 y plazos OK');


// OLIAS_REAL_BOE_2026: public notice missed by user-facing notifications.
// Test the actual BOE-A-2026-22826 structure, including multiple distinct positions.
const oliasBoe={
 id:'BOE-A-2026-22826',
 title:'Resolución de 27 de octubre de 2026, del Ayuntamiento de Olías del Rey (Toledo), referente a la convocatoria para proveer varias plazas.',
 context:'II. Autoridades y personal · B. Oposiciones y concursos · Administración Local',
 url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22826'
};
const oliasHtml='<div id="textoxslt"><p>En el Boletín Oficial de la Provincia de Toledo número 204, de 23 de octubre de 2026, se han publicado las bases.</p><p>Tres plazas de Limpiador/a de la plantilla de personal laboral fijo, por el sistema de oposición, en turno libre.</p><p>Cuatro plazas de Auxiliar de edificios e instalaciones de la plantilla de personal laboral fijo, por el sistema de oposición, en turno libre.</p><p>El plazo de presentación de solicitudes será de veinte días hábiles a contar desde el siguiente al de la publicación en el BOE.</p></div>';
const oliasItems=boeVacancyEntries(oliasBoe,oliasHtml);
assert.equal(oliasItems.length,2,'El BOE de Olías debe producir dos plazas distintas');
const oliasOpportunities=merge({opportunities:[]},oliasItems.map(x=>({...x,source:'BOE'})),'2026-11-01');
assert.equal(oliasOpportunities.length,2);
assert(oliasOpportunities.every(x=>x.isNew&&x.actionable&&!x.phaseFollowup&&x.position),'Ambas vacantes deben ser notificables');
assert.deepEqual(oliasOpportunities.map(x=>x.vacancies).sort(),[3,4]);
assert(oliasOpportunities.some(x=>/Auxiliar de edificios e instalaciones/i.test(x.position)));
assert(oliasOpportunities.some(x=>/Limpiador/i.test(x.position)));
console.log('OLIAS_REAL_BOE_2026: dos puestos, 3+4 plazas, dos alertas válidas OK');
// Diagnostic of historical data; do not assert old ingestion because the notice might
// have been missed by previous versions and is no longer "new" when tests run.
const historicalRadar=JSON.parse(fs.readFileSync('data/radar.json','utf8'));
const oliasStored=(historicalRadar.opportunities||[]).filter(x=>/BOE-A-2026-22826/.test(x.officialUrl||''));
console.log('OLIAS_REAL_BOE_2026 HISTORICAL',JSON.stringify(oliasStored.map(x=>({
 position:x.position, vacancies:x.vacancies,firstSeen:x.firstSeen,
 isNew:x.isNew,actionable:x.actionable,state:x.state,officialUrl:x.officialUrl
}))));


// Control de fuentes oficiales reparadas: preservar IDs y prevenir regresiones a URLs fallidas.
const directConfig = JSON.parse(fs.readFileSync('data/radar-sources.json','utf8'));
const expectedOfficialSources = [
  ['Alcorcón', '1c3f9ae28d87abb0', 'https://www.ayto-alcorcon.es/es/servicios/empleo-publico'],
  ['SERMAS', '1b687b37f558575f', 'https://www.comunidad.madrid/salud/bolsas-contratacion-temporal-servicio-madrileno-salud'],
  ['Madrid bolsas', 'e89d3df4d3544dc4', 'https://sede.comunidad.madrid/bolsa-empleo'],
];
// Pedanías distintas pueden compartir exactamente la misma web municipal.
// Los alias con el mismo id deben tener la MISMA URL para evitar colisiones reales.
const sourceUrlsById=new Map();
let sharedCouncilAliases=0;
for(const src of directConfig.sources){
 const existing=sourceUrlsById.get(src.id);
 if(existing){
  assert.equal(src.url,existing,'Different URLs sharing direct-radar source ID: '+src.id);
  sharedCouncilAliases++;
 }else{
  sourceUrlsById.set(src.id,src.url);
 }
}
assert.equal(sharedCouncilAliases,5,'Changes in shared-council aliases must be reviewed');

for (const [name,id,url] of expectedOfficialSources) {
 const matches=directConfig.sources.filter(s => s.name === name);
 assert.equal(matches.length,1,'Expected exactly one direct source: '+name);
 assert.equal(matches[0].id,id,'Direct source id changed; historic deduplication might break: '+name);
 assert.equal(matches[0].url,url,'Official source URL has regressed: '+name);
 assert.equal(new URL(matches[0].url).protocol,'https:');
}
console.log('RADAR_3_OFFICIAL_SOURCES_URLS_IDS_STABLE_OK');
