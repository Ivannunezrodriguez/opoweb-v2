import assert from 'node:assert/strict';
import fs from 'node:fs';

const profile=JSON.parse(fs.readFileSync('data/radar-profile.json','utf8'));
assert(profile.targetGroups.includes('C1'));
assert(profile.targetGroups.includes('C2'));
assert(profile.targetGroups.includes('B'));
assert(profile.zones.toledo.mode==='PROVINCIA_COMPLETA');
assert(profile.zones.madridSur.municipalities.includes('Getafe'));

const fixtures=[
 {name:'La Puebla C2',group:'C2',qualification:'ESO',zone:'TOLEDO',expected:true},
 {name:'Diputación Toledo Administrativo',group:'C1',qualification:'Bachiller o Técnico',zone:'TOLEDO',expected:true},
 {name:'UC3M Auxiliar',group:'C2',qualification:'ESO',zone:'MADRID_SUR',expected:true},
 {name:'Promoción interna exclusiva',group:'C1',qualification:'Bachiller',zone:'TOLEDO',promotionOnly:true,expected:false},
 {name:'A1 jurídico',group:'A1',qualification:'Grado en Derecho',zone:'TOLEDO',expected:false}
];
function candidate(x){
 if(x.promotionOnly)return false;
 if(!['TOLEDO','MADRID_SUR'].includes(x.zone))return false;
 return profile.targetGroups.includes(x.group);
}
for(const f of fixtures)assert.equal(candidate(f),f.expected,f.name);
console.log('Radar fixtures OK:',fixtures.length);
