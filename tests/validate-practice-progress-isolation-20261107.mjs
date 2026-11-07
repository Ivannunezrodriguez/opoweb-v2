import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// Ejecuta las funciones originales de practice.js en un entorno de almacenamiento
// controlado; no replica la lógica de negocio en el test.
const src=readFileSync('assets/practice.js','utf8');
const start=src.indexOf('function emptyProgress()');
const end=src.indexOf('\nfunction progressSummary()',start);
assert(start>=0&&end>start,'No se encuentra el bloque de progreso original');
const storage=new Map();
const localStorage={
 getItem(key){return storage.has(key)?storage.get(key):null;},
 setItem(key,value){storage.set(key,String(value));}
};
const activeCall={progressKey:'opoweb-la-puebla-practice-progress-v2',legacyProgressKey:null};
const make=new Function('localStorage','activeCall',src.slice(start,end)+
 '\nreturn {readProgress,writeProgress,saveAttempt,themeFromQuestion};');
const {readProgress,saveAttempt,themeFromQuestion}=make(localStorage,activeCall);
const item=(id,tema)=>({id,tema});
const result=(question,answered,correct,reserve=false)=>({question,answered,correct,reserve});
const attempt=(id)=>({exerciseId:id,completedAt:'2026-11-07T19:00:00Z',percentage:50});
assert.equal(themeFromQuestion({id:'LP-T13-001'}),13);
assert.equal(themeFromQuestion({id:'DIP-T03-001'}),3);
assert.equal(themeFromQuestion({id:'UC3M-T05-001',tema:5}),5);

saveAttempt(attempt('LP-01'),[
 result(item('LP-T13-001',13),true,false),
 result(item('LP-T13-002',13),false,false),
 result(item('LP-T13-003',13),true,false,true),
 result(item('LP-T13-004',13),true,true)
]);
let lp=readProgress();
assert.equal(lp.attempts.length,1);
assert.equal(lp.themeStats['13'].answered,2,'Los blancos y reservas no deben entrar al denominador');
assert.equal(lp.themeStats['13'].correct,1);
assert.equal(lp.errors['LP-T13-001'].count,1);
assert.equal(lp.errors['LP-T13-002'],undefined,'El blanco no debe convertirse en error');
assert.equal(lp.errors['LP-T13-003'],undefined,'La reserva no debe convertirse en error');

// Una respuesta correcta posterior reduce el error existente sin crear otro.
saveAttempt(attempt('LP-02'),[result(item('LP-T13-001',13),true,true)]);
lp=readProgress();
assert.equal(lp.attempts.length,2);
assert.equal(lp.themeStats['13'].answered,3);
assert.equal(lp.themeStats['13'].correct,2);
assert.equal(lp.errors['LP-T13-001'],undefined);

activeCall.progressKey='opoweb-uc3m-practice-progress-v1';
saveAttempt(attempt('UC3M-01'),[
 result(item('UC3M-T05-001',5),true,false),
 result(item('UC3M-T05-002',5),false,false)
]);
const uc3m=readProgress();
assert.equal(uc3m.attempts.length,1);
assert.equal(uc3m.themeStats['5'].answered,1);
assert.equal(uc3m.errors['UC3M-T05-001'].count,1);
assert.equal(uc3m.errors['LP-T13-001'],undefined);
assert.equal(uc3m.themeStats['13'],undefined);

activeCall.progressKey='opoweb-diputacion-auxiliar-c2-practice-progress-v1';
saveAttempt(attempt('DT-C2-01'),[
 result(item('DT-C2-T08-001',8),true,false),
 result(item('DT-C2-T08-002',8),true,true)
]);
const dt=readProgress();
assert.equal(dt.attempts.length,1);
assert.equal(dt.themeStats['8'].answered,2);
assert.equal(dt.themeStats['8'].correct,1);
assert.equal(dt.errors['DT-C2-T08-001'].count,1);

// Volver a la primera convocatoria debe restaurar exactamente su información.
activeCall.progressKey='opoweb-la-puebla-practice-progress-v2';
const restored=readProgress();
assert.deepEqual(restored,lp,'Pérdida o contaminación de progreso al cambiar de convocatoria');
assert.equal(storage.size,3,'Se esperan tres espacios separados en el almacenamiento');
assert.notEqual(storage.get('opoweb-uc3m-practice-progress-v1'),
 storage.get('opoweb-la-puebla-practice-progress-v2'));
console.log('PROGRESO AISLADO: 3 convocatorias; blancos, reservas, aciertos y errores conservados.');
