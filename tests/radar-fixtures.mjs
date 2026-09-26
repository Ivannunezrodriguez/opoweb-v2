import assert from 'node:assert/strict';
import fs from 'node:fs';
import {classify,boeEntries,bocmEntries,bopEntries,docmEntries,boeBody,pagEntries,merge} from '../tools/radar-core.mjs';
const profile=JSON.parse(fs.readFileSync('data/radar-profile.json','utf8'));
assert.deepEqual(profile.targetGroups,['B','C1','C2']);
assert.equal(profile.zones.toledo.mode,'PROVINCIA_COMPLETA');
const titles=[
 ['Resolución del Ayuntamiento de La Puebla de Montalbán (Toledo), referente a la convocatoria para proveer cuatro plazas de Auxiliar Administrativo.',true],
 ['Resolución de la Diputación Provincial de Toledo, referente a la convocatoria para proveer plazas de Administrativo.',true],
 ['Resolución de la Universidad Carlos III de Madrid, por la que se convocan plazas de Técnico Auxiliar de Informática en Getafe.',true],
 ['Convocatoria para proveer plazas de Administrativo C1 en Toledo por promoción interna.',false],
 ['Resolución de aprobados y lista de admitidos en plazas de Administrativo C1 en Toledo.',false],
 ['Convocatoria para plazas del Cuerpo de Abogados A1 en Toledo.',false],
 ['Convocatoria para plazas de Administrativo C1 en Zaragoza.',false]
];
for(const [title,expected] of titles)assert.equal(Boolean(classify(title)),expected,title);
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
assert.equal(classify(ventas),null);
assert.equal(classify(`${ventas} ${ventasBody}`)?.zone,'TOLEDO');
const pagXml=`<convocatorias>\n    <convocatorias><id>123</id><descripcion>Getafe</descripcion><disposiciones><documento>https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14274</documento></disposiciones><plazos><fechafin>30/09/2026</fechafin></plazos><titulo>AUXILIAR ADMINISTRATIVO</titulo><viagrupo>ACCESO LIBRE</viagrupo><provinciaId>28</provinciaId><organo>Universidad Carlos III de Madrid</organo><titulacion>ESO</titulacion><plazaslibres>2</plazaslibres>\n    </convocatorias>\n</convocatorias>`;
const pag=pagEntries(pagXml,'28');
assert.equal(pag.length,1);assert.equal(pag[0].deadline,'30/09/2026');assert.equal(pag[0].qualification,'ESO');
assert.equal(pagEntries(pagXml.replace('Getafe','Madrid'),'28').length,0);
assert.equal(pagEntries('<?xml version="1.0"?><convocatorias/>','45').length,0);
const found=merge({opportunities:[]},[{...boe[0],source:'BOE'},{...bocm[0],source:'BOCM'}],'2026-09-26');
assert.equal(found.length,2);assert(found.every(x=>x.isNew&&x.compatibility==='REVISAR'&&x.state==='REVISAR'));
assert(merge({opportunities:found},[{...boe[0],source:'BOE'}],'2026-09-27').every(x=>!x.isNew));
console.log('Radar fixtures OK');
