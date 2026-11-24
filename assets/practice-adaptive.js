// Scheduler for actual answered questions; no synthetic history.
export function nextReview(previous,correct,at){
 const streak=correct?Math.min(6,(previous?.streak||0)+1):0;
 const days=correct?[0,1,3,7,14,30,60][streak]:0;
 return {streak,lastAt:at,dueAt:new Date(Date.parse(at)+days*86400000).toISOString()};
}
export function adaptiveQuestions(pool,progress,mode,now=Date.now()){
 const stats=progress.themeStats||{}, schedule=progress.schedule||{},errors=progress.errors||{};
 const due=q=>schedule[q.id]?Date.parse(schedule[q.id].dueAt)<=now:Number(errors[q.id]?.count)>0;
 const score=q=>{
  const s=stats[q.tema]||{},n=Number(s.answered)||0;
  return (due(q)?100:0)+(schedule[q.id]?0:25)+20*(1-((Number(s.correct)||0)+2)/(n+4))+Math.min(10,Number(errors[q.id]?.count)||0);
 };
 return [...pool].filter(q=>mode!=='spaced'||due(q)).sort((a,b)=>score(b)-score(a)||a.id.localeCompare(b.id));
}
export function cleanSchedule(input){
 const out=Object.create(null);
 for(const [id,v] of Object.entries(input||{}).slice(0,10000)){
  if(!/^[A-Za-z0-9._:-]{1,100}$/.test(id)||['__proto__','constructor','prototype'].includes(id)||!v||!Number.isInteger(v.streak)||v.streak<0||v.streak>6||!Number.isFinite(Date.parse(v.lastAt))||!Number.isFinite(Date.parse(v.dueAt)))continue;
  out[id]={streak:v.streak,lastAt:v.lastAt,dueAt:v.dueAt};
 }
 return out;
}
