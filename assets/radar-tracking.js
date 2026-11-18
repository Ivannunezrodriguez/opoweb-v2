// Enlace conservador entre oportunidades y convocatorias seguidas.
// No identifica personas ni incorpora credenciales a las fichas del radar.
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const orgKey=s=>{
 const t=norm(s);
 if(/diputacion (provincial )?de toledo/.test(t))return 'diputacion-toledo';
 if(/la puebla de montalban/.test(t))return 'la-puebla';
 if(/olias del rey/.test(t))return 'olias';
 if(/las ventas con pena aguilera/.test(t))return 'las-ventas';
 if(/carranque/.test(t))return 'carranque';
 if(/universidad carlos iii|uc3m/.test(t))return 'uc3m';
 if(/cpeis/.test(t))return 'cpeis';
 return '';
};
const roleKey=s=>{
 const t=norm(s);
 if(/limpiador/.test(t))return 'limpieza';
 if(/auxiliar de edificios|auxiliar edificios|edificios e instalaciones/.test(t))return 'edificios';
 if(/auxiliar administrativ/.test(t))return 'auxiliar-administrativo';
 if(/administrativ/.test(t))return 'administrativo';
 return '';
};
export function matchTrackedCall(o,calls){
 const raw=[o.title,o.position,o.organism,o.location].filter(Boolean).join(' ');
 const org=orgKey(raw), role=roleKey([o.position,o.title].filter(Boolean).join(' '));
 if(!org||!role)return null;
 const candidates=calls.filter(c=>orgKey(c.nombre)===org && roleKey(c.nombre)===role);
 if(candidates.length!==1)return null; // Un solo candidato: no asignar seguimiento a procesos homónimos.
 const call=candidates[0];
 const boe=call.publicacionBOE?.referencia;
 const radarBoe=String(o.officialUrl||'').match(/BOE-A-\d{4}-\d+/i)?.[0];
 if(boe&&radarBoe&&boe.toUpperCase()!==radarBoe.toUpperCase())return null;
 // Comparar grupo si se conoce en ambos extremos.
 if(call.subgrupo&&o.group&&o.group!=='REVISAR'&&o.group!==call.subgrupo)return null;
 // Si la fuente permite conocer un número distinto, no igualar convocatorias diferentes
 // salvo la diferenciación explícita de turnos (4 plazas totales / 3 libres en Diputación).
 const counts=[call.plazas,call.plazasTurnoLibre].filter(x=>Number.isInteger(x));
 if(Number.isInteger(o.vacancies)&&counts.length&&!counts.includes(o.vacancies))return null;
 return call;
}
export function trackingState(call){
 const s=String(call?.estadoUsuario||'');
 if(/ADMITIDO|LISTADO_OFICIAL_ADMITIDOS/.test(s))return {label:/PROVISIONAL/.test(s)?'Admitido provisionalmente':'Admisión registrada en seguimiento',className:'admitted'};
 if(/INSCRITO|SOLICITUD_REGISTRADA/.test(s))return {label:/PENDIENTE_ADMISION/.test(s)?'Solicitud registrada · admisión pendiente':'Inscripción registrada',className:'registered'};
 if(/PENDIENTE_INSCRIPCION/.test(s))return {label:'Inscripción pendiente',className:'pending'};
 if(/DESCARTADO/.test(s))return {label:'Descartada en seguimiento',className:'excluded'};
 if(/PENDIENTE_DECISION/.test(s))return {label:'Decisión pendiente',className:'pending'};
 return {label:'En seguimiento · sin inscripción acreditada',className:'pending'};
}
