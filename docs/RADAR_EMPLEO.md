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


## Auditoría de fuentes y reparación focal — 09/11/2026

Se analizó [`data/radar-direct-latest.json`](../data/radar-direct-latest.json) como **instantánea previa**, no como nueva ejecución tras los cambios. De **206 estados**: **42 READABLE**, **118 PARTIAL** y **46 ERROR**. Las **46 incidencias ERROR** se agrupan orientativamente por el primer error de cada fuente:

| Causa registrada | Fuentes afectadas | Ejemplo |
|---|---:|---|
| **HTTP 403** | **5** | Alcorcón (ruta antigua) |
| **HTTP 404** | **6** | Valdemoro, SERMAS y bolsas Madrid (rutas antiguas) |
| **Redirecciones / bucle** | **7** | Griñón, Torrejón de la Calzada |
| **SSL certificado** | **1** | Sede de Getafe |
| **Bloqueo anti-bot** | **4** | UC3M empleo y bolsas |
| **HTML sin enlaces procesables / JavaScript** | **2** | GEACAM, Escalona |
| **HTTP 5xx** | **3** | Algunos ayuntamientos de Toledo |
| **Otros errores** | **18** | Pinto, Bargas y otras fuentes |
| **TOTAL** | **46** | Clasificación basada en error guardado, no diagnóstico de red completo |

### Correcciones realizadas

Se sustituyeron **cuatro URLs iniciales**, verificadas por consulta pública de las páginas oficiales; **los ID de fuente no cambiaron** para no romper la relación con el historial `radar-direct-state.json`.

| Fuente | URL oficial nueva | Evidencia |
|---|---|---|
| **Alcorcón** | [Portal de Empleo Público](https://www.ayto-alcorcon.es/es/servicios/empleo-publico) | Ayuntamiento de Alcorcón, procesos y bolsas |
| **SERMAS** | [Bolsas de contratación temporal](https://www.comunidad.madrid/salud/bolsas-contratacion-temporal-servicio-madrileno-salud) | Comunidad de Madrid, bolsas de centros sanitarios |
| **Madrid bolsas** | [Trámites de Bolsa de Empleo](https://sede.comunidad.madrid/bolsa-empleo) | Sede electrónica de la Comunidad de Madrid |
| **Valdemoro** | [Ofertas de empleo público municipal](https://www.valdemoro.es/ope) | Ayuntamiento de Valdemoro, sustitución de tablón con HTTP 404 |

Configuración: [`data/radar-sources.json`](../data/radar-sources.json). Prueba de regresión: [`tests/radar-fixtures.mjs`](../tests/radar-fixtures.mjs), que verifica **ID estables**, URL esperada y alias municipales compartidos sin colisión. La prueba puede validar **estructura y configuración**, pero no que un servidor externo responda siempre a un robot en GitHub Actions.

### Reservas y acciones futuras

- Esta corrección **no convierte automáticamente 3 fuentes ERROR en READABLE**: hace falta ejecución del rastreador, observar `pagesRead`, `errors`, `unvisitedListingLinks` y confirmar si hay enlaces de nuevas oportunidades correctamente identificados.
- **HTTP 403 y anti-bot:** no sortear controles de acceso ni páginas con CAPTCHA; buscar canales oficiales alternativos, RSS o datos abiertos autorizados.
- **Error de SSL de Getafe:** **no** desactivar verificación de certificados como arreglo general. Buscar portal alternativo oficial o resolver la cadena de confianza.
- **Redirección en bucle y 404:** revisar ruta pública estable y comprobar HTTP desde el runner, sin borrar la fuente ni su historial de deduplicación.
- **118 PARTIAL:** se asocian a páginas no recorridas, límite de rutas o fallos parciales; son cobertura incompleta, no necesariamente rotura total.
- `entries: []` de la última instantánea **no demuestra ausencia de convocatorias**; solo indica que esa pasada no registró nuevas entradas directas.
- Sin prueba de entrega real de correo ni verificación de secretos de GitHub. **No** declarar detección exhaustiva de oportunidades ni cobertura del 100 %.

> ⚠️ **¡Foco Examen!:** El radar de empleo es un sistema de descubrimiento, **no una fuente jurídica de admisión**. Cada oportunidad debe contrastarse con la convocatoria y las bases oficiales.


### Colisiones de identificadores por pedanías — 09/11/2026

Una prueba inicial de unicidad de ID descubrió **205 entradas configuradas, pero solo 200 IDs distintos**. No eran necesariamente 5 fuentes maliciosas: cuatro grupos de pedanías compartían **la misma web oficial** y el ID estaba calculado como `digest(url)`:

| ID compartido (prefijo) | Ámbitos que comparten la sede |
|---|---|
| `2971cd0e...` | Alcolea de Tajo / El Bercial |
| `a61041d2...` | Arisgotas / Orgaz |
| `1ec2a9a1...` | Las Hunfrías / Navaltoril / Piedraescrita |
| `d11a16bc...` | Robledillo / Robledo del Mazo |

El problema técnico real era que `run()` enviaba todas las fuentes al grupo de hilos, por lo que **la misma URL y el mismo ID podían escanearse varias veces simultáneamente** y sobrescribir el estado común. Se ha añadido deduplicación **antes del rastreo concurrente**: si un ID se repite con igual URL se consulta solo una vez; si se repite con URL distinta se detiene con `SOURCE_ID_COLLISION` en lugar de mezclar historiales. **No se alteraron los IDs históricos ni se eliminaron las entradas originales de configuración.**

**Pruebas:** `tests/radar-fixtures.mjs` tolera exactamente **5 alias adicionales** cuando comparten URL y rechaza reutilizar un ID para URL distinta; `tests/radar-direct-test.py` simula sedes duplicadas y colisiones. [**GitHub Actions del commit 51a11e2**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42579595924) finalizó correctamente.

**Efectos esperados, todavía no medidos en rastreo real:** menos solicitudes duplicadas y eliminación de una carrera de escritura del estado. **No** se ha demostrado que mejore el número de fuentes READABLE ni que aparezcan nuevas oportunidades. El inventario de **206 estados** corresponde a la pasada **anterior** a este cambio.

> ⚠️ **¡Foco Examen!:** Un ayuntamiento con varias entidades menores puede tener una sola web institucional. **Una fuente publicada varias veces** no equivale a varias convocatorias distintas.


### Saneamiento del directorio municipal y validación de URL — 09/11/2026

El inventario municipal importado desde el directorio de Diputación contenía cuatro registros con sintaxis defectuosa y/o espacios alrededor de la dirección. La inspección de fuentes primarias de [**Diputación Toledo, Robledo del Mazo y Robledillo**](https://www.diputoledo.es/global/11/50/169/dir-municipios/R/45148) y del [**Ayuntamiento de Los Yébenes, apartado Empleo**](https://ayuntamiento.losyebenes.es/ofertas-de-empleo) permitió sustituirlas sin inventar fuentes.

| Registro del radar | URL anterior | URL corregida |
|---|---|---|
| **Robledillo** | `http:// http://valledelgevalo.es/` | `http://valledelgevalo.es/` |
| **Robledo del Mazo** | `http:// http://valledelgevalo.es/` | `http://valledelgevalo.es/` |
| **Los Yébenes** | `http:// www.turismo.losyebenes.es` | [**Empleo del Ayuntamiento**](https://ayuntamiento.losyebenes.es/ofertas-de-empleo) |
| **Santa Cruz del Retamar** | `http://santacruzdelretamar.es ` (espacio final) | `http://santacruzdelretamar.es` (sin espacio) |

**Robledillo y Robledo del Mazo comparten la misma URL**, como recoge el directorio; la deduplicación de §Colisiones evita escanearla dos veces. Los identificadores `id` originales se han conservado para no desasociar el historial de entradas, incluso si fueron calculados a partir de una URL mal formada.

**Prevención:** `tests/radar-fixtures.mjs` comprueba **las 205 fuentes configuradas**, exige `http://` o `https://`, rechaza espacios y nombres de host no válidos, y conserva los identificadores de los cuatro registros saneados. La [**ejecución GitHub Actions 42580541661**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42580541661) superó ese conjunto de pruebas en el commit `cef7a333ac7c`.

**Reserva de cobertura:** URL sintácticamente válida **no implica** respuesta HTTP correcta ni extracción de anuncios. No hay una pasada del radar posterior contrastada; no modificar las cifras históricas **42 READABLE / 118 PARTIAL / 46 ERROR**.

> ⚠️ **¡Foco Examen!:** Un enlace inválido de un directorio oficial es un problema técnico del dato de origen; debe repararse contrastándolo con el directorio o el ayuntamiento, **no inventando otra web**.


## Trazabilidad temporal de cada nueva pasada — 09/11/2026

Se ha incorporado una mejora al [**rastreador directo**](../tools/radar-direct.py) para que, **a partir de su próxima ejecución efectiva con red**, `data/radar-direct-latest.json` contenga:

| Campo nuevo | Significado |
|---|---|
| `checkedAtUtc` | Hora de finalización de la pasada en **UTC**, ISO 8601 y con desplazamiento explícito `+00:00` |
| `configuredSources` | Número de entradas originales de configuración, incluyendo pedanías que comparten URL |
| `uniqueSources` | Número de identificadores distintos realmente enviados a la piscina concurrente |
| `sharedSourceAliases` | Entradas que comparten ID y URL, deduplicadas antes del rastreo |

Los estados `READABLE`, `PARTIAL`, `ERROR` se siguen registrando por fuente. Los nuevos campos permiten atribuir un recuento a **una pasada concreta**, sin confundir cantidad de municipios declarados con webs consultadas. El test offline [**radar-direct-test.py**](../tests/radar-direct-test.py) verifica el sello UTC y los denominadores con **dos alias de la misma sede**.

**Límite explícito:** la instantánea anteriormente guardada con **42 legibles, 118 parciales y 46 errores** todavía **no** incluye estos campos ni constituye prueba de ejecución posterior a las reparaciones de URLs. La actualización documental y CI **no ejecutan una lectura real del total de webs ni prueban envío de alertas**.


## Aviso público de cobertura incompleta en radar.html — 09/11/2026

Se ha detectado una brecha de transparencia de interfaz: [**radar.html**](../radar.html) mostraba `Fuentes que respondieron` basándose únicamente en las **seis fuentes agregadas** del módulo general (`BOE`, `BOCM`, `BOP Toledo`, `DOCM`, `PAG`, `DIRECT`), pero no advertía que la lectura de las fuentes municipales y autonómicas de `DIRECT` podía ser incompleta.

Se ha actualizado [**assets/radar.js**](../assets/radar.js) para mostrar un aviso de cobertura que resume directamente `data/radar.json.directSourceStatus`: **READABLE, PARTIAL, ERROR y número total de estados de fuente**. El aviso aparece cuando existen fuentes parciales/con error, o cuando el desglose de fuentes directas no está disponible; evita dar a entender que `DIRECT: ok` equivale a **todos los ayuntamientos leídos**.

Se ha protegido el mensaje en [**tests/radar-fixtures.mjs**](../tests/radar-fixtures.mjs) para que no desaparezca inadvertidamente. El comportamiento se comprobará en GitHub Actions; **no es una prueba E2E real de navegador**. La última instantánea almacenada antes de un nuevo rastreo continúa reflejando **42 legibles, 118 parciales y 46 con error**; estos números proceden del archivo previo, no de una ejecución posterior a las reparaciones de URLs.

> ⚠️ **¡Foco Examen!:** **Fuente principal DIRECT operativa** no es lo mismo que **todas las fuentes locales operativas**. Verificar bases y boletines oficiales sigue siendo imprescindible.
