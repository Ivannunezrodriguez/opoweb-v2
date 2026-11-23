// Seleccion inteligente de preguntas REALES: nunca inventa, duplica o
// reincorpora cuestiones retiradas de questionMap.
export const SMART_SIZES=Object.freeze([10,20,50]);
export function smartPool(questions,{theme=null,mode='mix',errors={}}={}){
 const seen=new Set();
 return questions.filter(q=>{
  if(!q||typeof q.id!=='string'||!q.id||seen.has(q.id))return false;
  if(!Number.isInteger(q.correcta)||q.correcta<0||q.correcta>=q.opciones?.length)return false;
  if(theme!==null&&Number(q.tema)!==Number(theme))return false;
  if(mode==='errors'&&!(Number(errors[q.id]?.count)>0))return false;
  seen.add(q.id);return true;
 });
}
export function smartSizeOptions(available){
 if(!Number.isInteger(available)||available<=0)return [];
 const sizes=SMART_SIZES.filter(size=>size<=available);
 // Las convocatorias con pocos errores siguen permitiendo repasarlos.
 if(!sizes.length)sizes.push(available);
 return sizes;
}
export function chooseSmartQuestions(pool,{size,mode='mix',errors={}}={},random=Math.random){
 const count=Number(size);
 if(!Number.isInteger(count)||count<1||count>pool.length)throw new RangeError('No hay suficientes preguntas reales');
 const shuffled=[...pool];
 for(let i=shuffled.length-1;i>0;i--){
  const n=Math.min(i,Math.max(0,Math.floor(random()*(i+1))));
  [shuffled[i],shuffled[n]]=[shuffled[n],shuffled[i]];
 }
 if(mode==='errors'){
  // Priorizar fallos repetidos; aleatoriedad solo como desempate.
  shuffled.sort((a,b)=>(Number(errors[b.id]?.count)||0)-(Number(errors[a.id]?.count)||0));
 }
 return shuffled.slice(0,count);
}
export function smartScore(callId,{correct,wrong,total}){
 if(!Number.isInteger(total)||total<1||correct<0||wrong<0||correct+wrong>total)
  throw new RangeError('Resultado inconsistente');
 if(['la-puebla-auxiliar-administrativo-2026','diputacion-toledo-administrativo-c1-2026'].includes(callId)){
  const points=Math.max(0,(correct-wrong/4)*10/total);
  return {label:'Nota orientativa proporcional',value:Number(points.toFixed(2)),maximum:10,
    explanation:'Aciertos menos 1/4 de los errores, escalados al número de preguntas. No es la nota de un examen oficial de 50 preguntas.'};
 }
 if(['uc3m-auxiliar-administrativa-c2-2026','olias-del-rey-auxiliar-edificios-c2-2026'].includes(callId)){
  return {label:'Puntuación directa orientativa',value:Number((correct-wrong/3).toFixed(2)),maximum:total,
    explanation:'Aciertos menos 1/3 de los errores. No equivale a nota transformada ni acredita el aprobado de pruebas oficiales.'};
 }
 return {label:'Aciertos',value:correct,maximum:total,
   explanation:'No se aplica penalización no contrastada para esta convocatoria.'};
}
