import assert from 'node:assert/strict';
import {extractFacts,enrichRadar} from '../tools/radar-enrich.mjs';
import {normalizeOpportunity} from '../assets/radar-quality.js';

const legal='AYUNTAMIENTO DE NAVAHERMOSA. Bases de convocatoria para la provisión de dos plazas de Administrativo. '+
 'Grupo de clasificación C1. El proceso se realizará por el sistema de concurso-oposición en turno libre. '+
 'Los aspirantes deberán estar en posesión del título de Bachillerato. '+
 'El plazo de presentación de solicitudes finalizará el día 25 de noviembre de 2026.';
const facts=extractFacts(legal);
assert.equal(facts.group,'C1');
assert.equal(facts.access,'Concurso-oposición');
assert.equal(facts.qualification,'Bachillerato');
assert.equal(facts.deadline,'2026-11-25');
assert.match(facts.applicationTerm,/25 de noviembre de 2026/);

// Un anuncio con título genérico debe poder identificar puesto y plazas al leer el PDF.
const titleOnly='AYUNTAMIENTO DE CAMARENA. Aprobación de las bases de selección.';
const expanded=extractFacts(titleOnly+' Se convoca la provisión de dos plazas de Auxiliar Administrativo. Grupo C2.');
assert.equal(expanded.position,'Auxiliar Administrativo');
assert.equal(expanded.vacancies,2);
assert.equal(expanded.group,'C2');
const withoutRole=normalizeOpportunity({
 id:'generic',title:titleOnly,source:'BOP Toledo',zone:'TOLEDO',
 officialUrl:'https://bop.diputoledo.es/ejemplo',firstSeen:'2026-11-02',state:'REVISAR'
},'2026-11-02');
assert.equal(withoutRole.actionable,false);
const expandedRadar=await enrichRadar([withoutRole],'2026-11-02',{limit:3,
 fetchDocument:async()=>({text:expanded ? (titleOnly+' Se convoca la provisión de dos plazas de Auxiliar Administrativo. Grupo C2. Plazo de presentación de solicitudes veinte días hábiles desde publicación BOE.') : '',format:'PDF'})});
assert.equal(expandedRadar.opportunities[0].position,'Auxiliar Administrativo');
assert.equal(expandedRadar.opportunities[0].vacancies,2);
assert.equal(expandedRadar.opportunities[0].actionable,true);
assert.equal(expandedRadar.opportunities[0].deadline,null,'No inferir una fecha de cierre sin publicación y calendario');

const relative=extractFacts('El plazo de presentación de solicitudes será de veinte días hábiles a contar desde el día siguiente al de la publicación en el BOE.');
assert.match(relative.applicationTerm,/veinte días hábiles/);
assert.equal(relative.deadline,undefined,'No calcular un plazo sin fecha y calendario oficial');

const multi=extractFacts('Para Técnico Superior grupo B y Auxiliar Administrativo grupo C2 se convocan plazas.');
assert.equal(multi.group,undefined,'No elegir un grupo arbitrario si hay varios');
const old=normalizeOpportunity({
 id:'one',title:'Bases para dos plazas de Administrativo por turno libre',
 source:'BOP Toledo',zone:'TOLEDO',firstSeen:'2026-11-02',state:'REVISAR',
 officialUrl:'https://bop.diputoledo.es/ejemplo'
},'2026-11-02');
const updated=await enrichRadar([old],'2026-11-02',{limit:3,
 fetchDocument:async()=>({text:legal,format:'PDF'})});
assert.equal(updated.summary.attempted,1);
assert.equal(updated.summary.read,1);
assert.equal(updated.opportunities[0].group,'C1');
assert.equal(updated.opportunities[0].deadlineIso,'2026-11-25');
assert.equal(updated.opportunities[0].qualification,'Bachillerato');
assert.equal(updated.opportunities[0].state,'PLAZO_ABIERTO');
const ignored=normalizeOpportunity({id:'followup',title:'Acta final de bolsa de Auxiliar Administrativo',
 officialUrl:'https://www.boe.es/a',zone:'TOLEDO',firstSeen:'2026-11-02'},'2026-11-02');
const blocked=await enrichRadar([ignored],'2026-11-02',{limit:3,
 fetchDocument:async()=>{throw new Error('NO DEBE CONSULTARSE');}});
assert.equal(blocked.summary.attempted,0,'No leer actas como convocatorias nuevas');
console.log('RADAR_ENRICH_EXTRACTION_AND_FAIL_SAFE_OK');
