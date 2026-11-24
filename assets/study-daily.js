import {dueReviewIds} from './practice-adaptive.js?v=2026.11.24.2';
// Pure daily planning; progress is read from the existing practice history.
// No prediction of examination results. Dates are civil dates in Spain.
export function madridDay(now=new Date()){
 const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const get=k=>parts.find(p=>p.type===k).value;
 return get('year')+'-'+get('month')+'-'+get('day');
}
export function daysUntil(day,exam){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(exam||''))return null;
 const n=(Date.parse(exam+'T00:00:00Z')-Date.parse(day+'T00:00:00Z'))/86400000;
 return Number.isFinite(n)?n:null;
}
export function dailyPlan({themes=[],progress={},minutes=120,day,exam=null,practical=false,previous=[],now=Date.now()}={}){
 const budget=[60,120,180,240].includes(Number(minutes))?Number(minutes):120;
 const available=themes.filter(t=>Number.isInteger(t.numero)&&t.available!==false);
 const dueIds=dueReviewIds(progress,now);
 const stats=available.map(t=>{
  const s=progress.themeStats?.[t.numero]||{};
  const answered=Math.max(0,Number(s.answered)||0);
  const correct=Math.max(0,Math.min(answered,Number(s.correct)||0));
  const due=dueIds.filter(id=>Number(progress.schedule?.[id]?.theme??progress.errors?.[id]?.theme)===t.numero).length;
  return {theme:t.numero,title:t.titulo,answered,accuracy:answered?correct/answered:null,due};
 });
 const weak=stats.filter(s=>s.answered>=5).sort((a,b)=>a.accuracy-b.accuracy||b.due-a.due||a.theme-b.theme);
 const fresh=stats.filter(s=>s.answered<5).sort((a,b)=>a.answered-b.answered||a.theme-b.theme);
 const priority=[...weak.filter(s=>s.accuracy<.8),...fresh,...weak.filter(s=>s.accuracy>=.8)];
 const carried=previous.filter(x=>!x.done&&Number.isInteger(x.theme)&&stats.some(s=>s.theme===x.theme));
 const target=stats.find(s=>s.theme===carried[0]?.theme)||priority[0];
 const testTarget=priority.find(s=>s.theme!==target?.theme)||target;
 const due=dueIds.length;
 const errorCount=Object.values(progress.errors||{}).filter(e=>Number(e.count)>0&&stats.some(s=>s.theme===Number(e.theme))).length;
 const remaining=daysUntil(day,exam);
 // Increase practice share in the last week, without claiming an official exam date.
 const allocations=[['review',target?(remaining!==null&&remaining>=0&&remaining<=7?20:30):0],['test',testTarget?(remaining!==null&&remaining>=0&&remaining<=7?40:30):0],['errors',due?15:0],['practical',practical?25:0]].filter(x=>x[1]>0);
 const weight=allocations.reduce((n,x)=>n+x[1],0);
 let used=0;
 const tasks=allocations.map(([id,w],i)=>{
  const mins=i===allocations.length-1?budget-used:Math.floor(budget*w/weight);used+=mins;
  const chosen=id==='review'?target:id==='test'?testTarget:null;
  return {id,minutes:mins,theme:chosen?.theme??null,title:chosen?.title??null};
 }).filter(t=>(t.id!=='review'&&t.id!=='test')||t.theme!==null);
 return {day,minutes:budget,remaining,due,errorCount,observedThemes:stats.filter(s=>s.answered>=5).length,totalThemes:stats.length,stats,tasks};
}

export const DAILY_STORAGE_PREFIX='opoweb-daily-plan:';
export function readDailyStorage(storage,callId){
 try{const v=JSON.parse(storage.getItem(DAILY_STORAGE_PREFIX+callId)||'null');return v&&Array.isArray(v.tasks)?v:null;}catch{return null;}
}
export function saveDailyStorage(storage,callId,plan){
 try{storage.setItem(DAILY_STORAGE_PREFIX+callId,JSON.stringify(plan));return true;}catch{return false;}
}
export function dailySnapshot(input,saved){
 // Recompute on every visit; preserve completed tasks for the same day.
 const sameDay=saved?.day===input.day;
 const plan=dailyPlan({...input,previous:sameDay?[]:saved?.tasks||[]});
 return {...plan,tasks:plan.tasks.map(t=>({...t,done:!!sameDay&&saved.tasks.some(p=>p.id===t.id&&p.theme===t.theme&&p.done===true)}))};
}
