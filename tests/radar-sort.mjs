import assert from 'node:assert/strict';
import {orderRadar,deadlineAlert} from '../assets/radar-sort.js';
const xs=[
 {id:'unknown',vacancies:null,deadlineIso:null,publishedAt:null,firstSeen:'2026-11-18'},
 {id:'two',vacancies:2,deadlineIso:'2026-11-24',publishedAt:'2026-10-22',firstSeen:'2026-11-16'},
 {id:'ten',vacancies:10,deadlineIso:'2026-11-30',publishedAt:'2026-11-01',firstSeen:'2026-11-17'}
];
assert.deepEqual(orderRadar(xs,'PLAZAS').map(x=>x.id),['ten','two','unknown']);
assert.deepEqual(orderRadar(xs,'CIERRE').map(x=>x.id),['two','ten','unknown']);
assert.deepEqual(orderRadar(xs,'PUBLICACION').map(x=>x.id),['ten','two','unknown']);
assert.deepEqual(orderRadar(xs,'RELEVANCIA').map(x=>x.id),['unknown','two','ten']);
assert.equal(deadlineAlert(xs[1],'2026-11-18'),'Cierra en 6 días (fecha registrada)');
assert.equal(deadlineAlert({...xs[1],deadlineDisputed:true},'2026-11-18'),null);
assert.equal(deadlineAlert(xs[0],'2026-11-18'),null);
assert.equal(deadlineAlert({...xs[1],state:'CERRADA'},'2026-11-18'),null);
console.log('Radar: ordenación y alertas verificadas');
