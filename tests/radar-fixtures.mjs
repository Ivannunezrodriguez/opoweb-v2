import assert from 'node:assert/strict';
import fs from 'node:fs';
import {classify,boeEntries,bocmEntries,merge} from '../tools/radar-core.mjs';
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
const found=merge({opportunities:[]},[{...boe[0],source:'BOE'},{...bocm[0],source:'BOCM'}],'2026-09-26');
assert.equal(found.length,2);assert(found.every(x=>x.isNew&&x.compatibility==='REVISAR'&&x.state==='REVISAR'));
assert(merge({opportunities:found},[{...boe[0],source:'BOE'}],'2026-09-27').every(x=>!x.isNew));
console.log('Radar fixtures OK');
