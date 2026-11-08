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
