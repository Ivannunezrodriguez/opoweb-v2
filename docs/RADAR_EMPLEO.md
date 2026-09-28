# Radar de empleo público OpoWeb

## Objetivo
Detectar oportunidades públicas que puedan ser compatibles con el perfil de Técnico Superior DAM en toda la provincia de Toledo y en municipios del sur de Madrid.

## Fuentes
1. BOE: API REST oficial de sumarios.
2. Punto de Acceso General: buscador de convocatorias, con filtros por provincia y nivel de titulación y exportación XML/CSV.
3. BOP Toledo: buscador oficial por fecha, anunciante, tipo y texto.
4. BOCM: RSS oficiales de boletines/sumarios.
5. DOCM: sumario oficial y lectura de las ofertas de empleo detectadas.

## Regla de compatibilidad
- CUMPLE: solo cuando las bases permiten una titulación que el perfil satisface.
- REVISAR: publicación detectada pero requisitos completos todavía no verificados.
- NO_CUMPLE: requisito incompatible o acceso no libre.
- No se infiere compatibilidad únicamente de C1/C2/B.

## Alertas
El workflow se ejecuta dos veces al día. GitHub Actions no garantiza ejecución al minuto exacto. El correo solo se envía para altas nuevas.

## Secretos
- RADAR_EMAIL: destinatario.
- RESEND_API_KEY: clave privada de Resend.
- RADAR_FROM: remitente verificado opcional.

Nunca guardar correo ni API keys en archivos versionados.

## Alcance solicitado (28/09/2026)
- Solo oportunidades nuevas; sin seguimiento de admitidos, exámenes, resultados o nombramientos.
- Cualquier profesión potencialmente accesible: sin lista cerrada de puestos. Incluye bolsas, sustituciones, suplencias, contratos de relevo, interinidades, planes de empleo y contratación temporal.
- No confundir un anuncio detectado con requisitos cumplidos. Permisos, experiencia, habilitaciones y titulación específica requieren leer las bases.
- El BOP Toledo aporta el ámbito provincial también cuando el municipio no incluye «Toledo» en su nombre.
- Un fallo de una fuente no bloquea las novedades del resto. El JSON registra sourceStatus y conserva las oportunidades anteriores sin volver a notificarlas.
- La deduplicación actual es por identificador de anuncio y fuente; no identifica necesariamente la misma convocatoria publicada en varios boletines.

## Ampliación de fuentes directas (28/09/2026)

- Registro `data/radar-sources.json`: 205 direcciones de partida contrastadas con páginas oficiales, incluyendo 161 webs municipales obtenidas del directorio de la Diputación de Toledo.
- El directorio se consulta de nuevo en cada ejecución; si falla, se usan las direcciones guardadas.
- 23 municipios del sur de Madrid. Sedes/tableros y páginas de empleo municipales, además del BOCM.
- JCCM, SESCAM, SERMAS y bolsas de la Comunidad de Madrid; personal no docente; UC3M, URJC y UCLM; GEACAM, GICAMAN, Tragsa, Correos, Renfe y Adif.
- Las fuentes autonómicas y universitarias se marcan con destino pendiente de comprobar; la existencia de un campus o centro no garantiza que una plaza tenga ese destino.
- En empresas de ámbito nacional, las candidaturas necesitan una mención geográfica de la zona objetivo en el listado. Una oferta sin destino visible puede quedar sin detectar.
- Cada fuente se consulta con concurrencia limitada y hasta cinco páginas enlazadas de empleo, sede o tablón. No se siguen páginas individuales de resultados ni se entra en áreas identificadas.
- BOE y BOP: ventana ampliada de tres a siete días, conservando la deduplicación.

## Solo novedades

La primera lectura correcta de cada página crea una referencia de enlaces existentes. No envía el archivo histórico como novedades. Excepción: anuncios con fecha de publicación explícita desde la activación. En posteriores lecturas, avisa de nuevos enlaces de contratación y descarta seguimiento (admitidos, exámenes, resultados, nombramientos, llamamientos y correcciones). No es un inventario de todas las bolsas antiguas que siguen abiertas.

`data/radar-direct-state.json` conserva las referencias aunque una fuente falle. `data/radar-direct-latest.json` registra lectura, candidatos y errores de la última pasada. El envío continúa exclusivamente por el correo configurado en los secretos existentes.

## Cobertura real y límites

205 direcciones configuradas no significa 205 fuentes completamente cubiertas. `READABLE` indica HTML leído, `PARTIAL` indica errores o enlaces pendientes por el límite de páginas, y `ERROR` indica que no se pudo leer. Cero coincidencias no acredita ausencia de ofertas. Hay sedes con JavaScript, CAPTCHA, documentos cuyo título no identifica el puesto, enlaces reutilizados y municipios sin web propia en el directorio. El lector no interpreta el texto interior de todos los PDF ni realiza trámites. Los cambios dentro de un enlace ya conocido no disparan seguimiento.

No puede garantizarse exhaustividad. Se mantiene el BOP para toda Toledo, también para municipios sin web descubierta. Los avisos de una misma convocatoria en distintos boletines pueden tener identificadores diferentes; solo se fusionan automáticamente coincidencias de URL oficial inequívocas, evitando borrar convocatorias distintas del mismo puesto.

## Validación

- `node tests/radar-fixtures.mjs`
- `python3 tests/radar-direct-test.py`
- La comprobación de red no envía correos ni modifica solicitudes. Sus resultados quedarán en `data/radar-direct-latest.json` al completar una ejecución. La primera comprobación completa de red está pendiente.
