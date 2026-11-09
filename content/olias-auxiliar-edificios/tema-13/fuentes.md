# Olías C2 · Tema 13 · Trazabilidad de fuentes locales

**Programa:** **BOP Toledo 204/2026, anuncio 4833, Anexo II, CSV 2026.00004833**. Epígrafe: El término municipal de Olías del Rey y localización de los distintos servicios municipales. Callejero municipal.

| Fuente pública | Qué verifica |
|---|---|
| [Directorio municipal de teléfonos y edificios](https://www.ayuntamientodeoliasdelrey.com/telefonos-y-correos-de-interes/) | direcciones de instalaciones |
| [Educación y Cultura municipal](https://www.ayuntamientodeoliasdelrey.com/educacion-y-cultura/) | centros culturales y biblioteca |
| [Deportes municipal](https://www.ayuntamientodeoliasdelrey.com/actualidad-deportiva/) | instalaciones deportivas |
| [Urbanismo municipal](https://www.ayuntamientodeoliasdelrey.com/urbanismo/) | normativa/planos de Olías |
| [Turismo de Castilla-La Mancha](https://www.turismocastillalamancha.es/es/destinos/encanto-rural/toledo/olias-del-rey) | situación territorial |
| [Instituto Geográfico Nacional](https://www.ign.es/web/rcc-nomenclator-nacional) | cartografía y topónimos |

**Precisión:** nombres de centros y vías están tomados de páginas municipales o de organismo público, **no del BOP**. No constituyen inventario actualizado de todos los edificios, ni reemplazan la cartografía oficial. Las asignaciones nominales completas de concejalías y lista exhaustiva de calles **no se han podido verificar**.

> ⚠️ **¡Foco Examen!:** Diferenciar **hecho municipal comprobado**, **desarrollo normativo general** y **dato aún sin acreditar**. La web debe poder corregirse cuando cambie un servicio.

**Estado EN_AUDITORIA**, revisión focal **08/11/2026**; bloquea el cierre documental la falta de un callejero municipal íntegro acreditado.


## Cotejo municipal de direcciones — **08/11/2026**

La lectura directa del [**directorio de teléfonos y edificios**](https://www.ayuntamientodeoliasdelrey.com/telefonos-y-correos-de-interes/), [**Educación y Cultura**](https://www.ayuntamientodeoliasdelrey.com/educacion-y-cultura/) y [**Situación y Callejero**](https://www.ayuntamientodeoliasdelrey.com/situacion-y-callejero/) permite confirmar la **vía** de varios servicios, pero revela **diferencias de numeración dentro de la web municipal**: **Casa de la Cultura** («Flor, 2» frente a «La Flor, s/n»), **Escuela Infantil Árbol Mágico** («Arenal, 5» frente a «Arenal s/n») y **biblioteca** («Higares s/n» frente a «Camino de Higares, 4»). No resolver estas discrepancias mediante suposición. La sección municipal llamada «Situación y Callejero» no publica en el texto recuperable un inventario completo de calles. Las **12 preguntas existentes** quedan justificadas con fuentes y no preguntan por numeración contradictoria.

**Trabajo material finalizado:** tabla de doble contraste, **2 casos resueltos**, **6 incisos trazados** y **12 preguntas/48 alternativas** cotejadas. **Bloqueo material que impide marcar AUDITADO:** el epígrafe exige **callejero municipal** y aún falta una **relación oficial exhaustiva de vías**; la propia convocatoria no la adjunta. No sumar el T13 a cierres documentales hasta resolverlo.


## Fuente oficial nueva del callejero — **08/11/2026**

Se ha localizado el [**INE · Callejero del Censo Electoral (datos abiertos)**](https://www.ine.es/prodyser/callejero/), también documentado en [**datos.gob.es**](https://datos.gob.es/es/catalogo/ea0042823-callejero-de-censo-electoral). El INE ofrece ficheros por **provincia** y por fecha de referencia (**enero** y **julio**). El conjunto incluye **VIAS** (vías), **PSEU** (pseudovías), **TRAM** (tramos), **UP** (unidades poblacionales) y **SECC** (secciones). La versión de **julio 2026** refleja una fecha de referencia **30/06/2026**, según metodología publicada. Constituye una fuente pública primaria más adecuada que un repertorio comercial o un mapa parcial.

**Trabajo concreto pendiente para T13:** descargar la provincia **Toledo**, seleccionar **municipio Olías del Rey (código INE 45122)**, deduplicar las entradas de **VIAS**, conservar **tipo y nombre oficial** y cotejar los casos de denominaciones o vías sin tramo contra el municipio. Hasta completar esta extracción real y verificar el resultado **NO** se atribuye al temario un callejero exhaustivo ni se cambia el estado **EN_AUDITORIA**. Las direcciones discrepantes del directorio municipal requieren cotejo adicional del portal físico antes de orientar a un usuario.

> ⚠️ **¡Foco Examen!:** **Callejero electoral INE** es una relación de vías/tramos con fecha de referencia; **directorio de servicios** solo incluye lugares seleccionados. Una relación de doce calles importantes **no** cubre por sí sola el epígrafe «callejero».


## Control de callejero íntegro — **08/11/2026**, intento de descarga

Se verificó de nuevo la [**página del callejero electoral del INE**](https://www.ine.es/prodyser/callejero/) y se constató que los ficheros **VIAS**, **PSEU**, **TRAM**, **UP** y **SECC** se publican por provincia y fecha. La publicación de **julio de 2026** tiene referencia **30/06/2026**, no **31/07/2026**. También se comprobó la existencia del municipio **45122 — Olías del Rey** en las tablas provinciales del INE.

**Limitación concreta de esta sesión:** el selector dinámico de ficheros del INE no expone una URL de ZIP directamente recuperable en el navegador de consulta y el entorno de ejecución no puede resolver la dirección para descargarlo. **No se ha accedido ni leído el archivo VIAS de Toledo**, por lo que **no existe un recuento de vías completo verificable**. No se sustituye por datos de otras fechas, listados comerciales o recorridos inferidos.

**Trabajo sí realizado:** tabla de servicios y vías ampliada, distinción entre portales **1/7 de Plaza Constitución**, servicios de **Arenal, Flor, Higares, Cabañuelas, Toledo** y zonas residenciales, así como **21 preguntas y 84 alternativas** centradas en datos municipales o metodología INE. El **manual, matriz y banco** mantienen **EN_AUDITORIA** mientras no exista el listado íntegro y contrastado. **0 certificaciones integrales**.

> ⚠️ **¡Foco Examen!:** Un fichero **TRAM** contiene tramos y una vía puede repetirse en distintas secciones; no contar filas de TRAM como número de calles. El tipo de vía y nombre proceden de **VIAS** y deben depurarse por municipio y código.

## Cierre de fuente primaria INE — 09/11/2026

Se han leído los ficheros originales **VIAS, PSEU, TRAM, SECC y UP** para provincia **45**, municipio **45122**, referencia **30/06/2026**. Resultado: **280 VIAS** con códigos y parejas tipo+denominación únicos, **0 PSEU**, **427 TRAM**, **5 SECC**, **13 UP**. **202** entradas de tipo CALLE. [Inventario íntegro y huellas SHA-256](callejero-ine-2026-06-30.md); [acta de auditoría](../../../audit/OLIAS_T13_CIERRE_INE_2026-11-09.md).

**El bloqueo histórico de descarga del 08/11/2026 queda superado.** Los servicios municipales se atribuyen a directorios contrastados previamente; el INE verifica vías, no números de portales actuales. El plano municipal de ordenación aportado, fechado **1999**, es histórico y no sustituye al callejero electoral de 2026. **Estado editorial AUDITADO**; E2E y WCAG pendientes.

> ⚠️ **¡Foco Examen!:** **427 TRAM** ≠ **280 VIAS** ≠ **202 CALLE**.
