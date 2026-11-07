import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'), j=p=>JSON.parse(read(p));
const dir='content/uc3m/tema-16/';
const matrix=j(dir+'matriz.json'), bank=j(dir+'preguntas.json');
const byTitle=t=>matrix.cobertura.find(x=>x.epigrafe===t);
const u='https://www.uc3m.es/ss/Satellite/UC3MInstitucional/en/ListadoNormativas/1371206706530/Estudios_de_Grado';
const e='https://www.uc3m.es/grado/informacion-practica/normativa-academica/normas-evaluacion';
assert.equal(byTitle('Matrícula y dedicación').fuente,u);
assert.equal(byTitle('Permanencia UC3M').fuente,u);
assert.equal(byTitle('Evaluación UC3M').fuente,e);
for(const x of matrix.cobertura){
 assert(x.fuente?.startsWith('https://'),'Fuente ausente en '+x.epigrafe);
}
assert.equal(matrix.controlFocal20261107.incisosCorregidos,3);
assert.equal(matrix.controlFocal20261107.cambiaClaves,false);
assert.equal(matrix.controlFocal20261107.certificacionIntegral,false);
assert.equal(matrix.controlFocal20261107.corteLegislativoConfirmado,false);
assert(bank.preguntas.length>=20,'El banco histórico no debe desaparecer');
assert(read(dir+'fuentes.md').includes('BOE-A-2026-22083'),'Conservar la alerta sobre anulación de RD 905/2025');
console.log('UC3M tema 16: atribución de tres incisos a fuentes institucionales; corte legislativo aún no certificado.');
