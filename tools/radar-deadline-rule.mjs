// Leer literalmente la regla de inscripción. NO calcular fechas ni resolver conflictos normativos.
const words={diez:10,quince:15,veinte:20,treinta:30};
const norm=s=>String(s||'').replace(/\s+/g,' ').trim().toLowerCase();
export function extractApplicationRule(text){
 const body=norm(text);
 const match=body.match(/(?:plazo\s+(?:para\s+la\s+|de\s+)?(?:presentaci[oó]n\s+de\s+(?:solicitudes|instancias)|solicitudes)|presentaci[oó]n\s+de\s+instancias)[^.;]{0,270}/i);
 if(!match)return null;
 const clause=match[0];
 const period=clause.match(/\b(\d{1,2}|diez|quince|veinte|treinta)\s+d[ií]as?\s+(h[aá]biles|naturales)\b/i);
 const count=period?(/^\d+$/.test(period[1])?Number(period[1]):words[period[1]]):null;
 const unit=period?(/h[aá]biles/.test(period[2])?'HABILES':'NATURALES'):null;
 const trigger=/publicaci[oó]n\s+(?:de\s+(?:esta|la)\s+)?(?:resoluci[oó]n|convocatoria|anuncio|extracto)[^.;]{0,95}?\bboe\b|publicaci[oó]n\s+en\s+el\s+boe|publicaci[oó]n\s+en\s+el\s+bolet[ií]n\s+oficial\s+del\s+estado|publicaci[oó]n\s+en\s+el\s+boe|publicaci[oó]n\s+boe/i.test(clause)
  ?'BOE':/publicaci[oó]n[^.;]{0,100}\b(?:bop|bolet[ií]n oficial de la provincia)\b/i.test(clause)
  ?'BOP':/publicaci[oó]n[^.;]{0,100}\b(?:docm|diario oficial de castilla.la mancha)\b/i.test(clause)
  ?'DOCM':'SIN_IDENTIFICAR';
 return {days:count??null,unit,trigger,text:clause,deadlineVerified:false};
}
