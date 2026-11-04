import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const j=p=>JSON.parse(read(p));
const t10=read('content/la-puebla/tema-10/manual.md');
const t13=read('content/la-puebla/tema-13/manual.md');
const trust=read('content/la-puebla/tema-13/bloque-04-prestadores-servicios.md');
const t12=read('content/la-puebla/tema-12/manual.md');
const p10=[
 ['plazo voluntario día 20 del mes siguiente','día 20 del mes siguiente'],
 ['plazo voluntario día 5 del segundo mes siguiente','día 5 del segundo mes siguiente'],
 ['apremio día 20 del mismo mes','día 20 del mismo mes'],
 ['apremio día 5 del mes siguiente','día 5 del mes siguiente'],
 ['colectivos 1 de septiembre a 20 noviembre','1 de septiembre'],
 ['colectivos terminación 20 noviembre','20 de noviembre'],
 ['mínimo 2 meses período colectivo','2 meses'],
 ['retenciones no aplazables','retenedor'],
 ['pagos IS no aplazables','Impuesto sobre Sociedades'],
 ['repercutidos y excepción','no han sido efectivamente pagadas']
];
for(const [desc,needle] of p10)assert(t10.includes(needle),'LGT art.62/65 missing: '+desc);
assert.match(t10,/art\. \*\*62\.2\*\*/);
assert.match(t10,/art\. \*\*62\.5\*\*/);
assert.match(t10,/art\. 65\.2/);
for(const needle of ['25.1','25.2','firma manuscrita','no cualificada','1.500.000 €','500.000 €','3 meses','15 años']){
 assert(t13.includes(needle),'eIDAS / Ley 6-2020 missing '+needle);
}
for(const needle of ['Ley 6/2020','1.500.000 €','500.000 €','15 años','3 meses']){
 assert(trust.includes(needle),'Trust provider manual missing '+needle);
}
assert(t12.includes('1 de diciembre de 2026'),'Tema 12: preserve post-exam IIVTNU coefficient effective date');
for(const topic of [10,12,13]){
 const bank=j('content/la-puebla/tema-'+topic+'/preguntas.json');
 assert.equal(bank.preguntas.length,12,'Historical La Puebla bank count changed for topic '+topic);
 assert.equal(new Set(bank.preguntas.map(x=>x.id)).size,12);
}
for(const topic of [10,13]){
 const matrix=j('content/la-puebla/tema-'+topic+'/matriz.json');
 const check=topic===10?matrix.controlFocalizado20261104Cobro:matrix.controlFocalizado20261104Efectos;
 assert(check?.grado?.includes('PARCIAL'),'Do not mark localized legal checks as complete');
}
console.log('LA_PUEBLA_LEGAL_2026_OK: checked LGT 62/65, eIDAS 25, Ley 6/2020 9/12, IIVTNU effective date and 12-item banks');
