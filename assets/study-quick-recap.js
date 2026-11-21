// Resumen extractivo: no inventa conceptos ni modifica el manual de origen.
export function extractQuickConcepts(markdown,limit=7){
 const lines=String(markdown||'').replace(/\r/g,'').split('\n');
 const items=[];let section=null;
 function flush(){
  if(section && section.summary && !/ep[ií]grafe oficial|fuente|estado editorial|bibliograf[ií]a/i.test(section.title)){
   items.push({title:section.title,summary:section.summary.slice(0,230)});
  }
 }
 for(let i=0;i<lines.length;i++){
  const line=lines[i].trim();
  const heading=line.match(/^#{2,4}\s+(?:\d+[.\s-]*)?(.+)$/);
  if(heading){flush();section={title:heading[1].replace(/\*\*/g,'').trim(),summary:''};continue;}
  if(!section||section.summary||!line||/^(?:[|>#\-*]|\d+\.|\[)/.test(line))continue;
  if(/^\*\*Estado editorial|^Edici[oó]n|^Programa oficial/i.test(line))continue;
  const clean=line.replace(/\*\*/g,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\x60/g,'').trim();
  if(clean.length>=45&&!/^(?:Ver|Fuente|Documento|Vigencia|Enlace):/i.test(clean)){
   section.summary=clean.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ])/)[0].slice(0,230);
  }
 }
 flush();
 return items.filter(x=>x.title&&x.summary).slice(0,Math.max(0,Math.min(10,limit)));
}
