# Estado de auditoría · OpoWeb v2

Última actualización: **23 de julio de 2026**.

## Cambios reales de esta revisión

### UC3M · Tema 17 auditado y activado

Se ha completado la auditoría jurídica y editorial del Tema 17:

> Real Decreto 534/2024 sobre acceso y admisión a Grado; regulación y normativa de acceso y admisión en estudios oficiales de la UC3M.

El tema pasa de `BORRADOR` a `EN_REVISION_USUARIO` y dispone ya de:

- `content/uc3m/tema-17/manual.md`;
- `content/uc3m/tema-17/fuentes.md`;
- `content/uc3m/tema-17/matriz.json`;
- `content/uc3m/tema-17/preguntas.json` con **12 preguntas**.

#### Actualización normativa detectada

El texto consolidado del **Real Decreto 534/2024** indica como última actualización la publicada el **2 de julio de 2026**. El **Real Decreto 535/2026, de 30 de junio**, modifica el artículo **23.2**, con redacción vigente desde el **22 de julio de 2026**.

La actualización afecta a la admisión de quienes poseen títulos de Técnico Superior. El manual y el banco de preguntas incorporan expresamente:

- acceso sin prueba general;
- calificación de acceso igual a la nota media del título;
- asignación de **5 puntos** cuando no exista nota media por homologación o equivalencia;
- posible consideración de la correspondencia entre títulos y ámbitos de conocimiento.

#### Error o indeterminación editorial corregida

El borrador del Tema 17 indicaba que el cambio de universidad o estudios «suele requerir reconocimiento de un mínimo de créditos», sin concretar la cifra.

La regla correcta es:

- procedimiento específico si se reconocen al menos **30 créditos ECTS**;
- procedimiento general de admisión cuando se reconocen menos de **30 ECTS**.

También se ha diferenciado este umbral de los **6 ECTS** exigidos para reanudar estudios en el mismo centro tras un abandono temporal.

#### Información UC3M 2026/2027 incorporada

La página oficial de preinscripción de la UC3M establece para las universidades públicas de Madrid:

- una única solicitud conjunta;
- hasta **12 estudios** ordenados por preferencia;
- convocatoria ordinaria del **5 al 26 de junio de 2026**;
- plazo para determinados sistemas extranjeros hasta el **6 de julio de 2026 a las 14:00**;
- convocatoria extraordinaria del **20 al 24 de julio de 2026 a las 23:59**.

Para Doctorado, la UC3M mantiene para el primer semestre 2026/2027 el plazo general del **1 de febrero al 31 de agosto de 2026**, salvo calendario específico del programa.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

Programa oficial de **19 temas**. Estado editorial general completo, con una incidencia fuente todavía abierta:

- `content/la-puebla/tema-06/manual.md` conserva la cifra errónea de **2 años** para programas temporales;
- la regla vigente aplicable en Castilla-La Mancha es un máximo total de **4 años**;
- la interfaz pública, el banco de preguntas, el supuesto práctico y la auditoría ya aplican la cifra correcta mediante corrección transitoria.

La sustitución directa del Markdown fuente y la retirada posterior de `assets/tema6-interinidad-correction.js` continúan pendientes.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes: del **6 al 31 de julio de 2026**.
- Estado editorial: **40 de 40 temas** con manual, fuentes, matriz y banco inicial.
- Seguimiento vigente: no consta en el registro una lista provisional posterior.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT para cerrar definitivamente el Tema 22.
- Tema 31: banco actualizado a eIDAS 2; ampliación pendiente de integración en el manual principal.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Estado editorial: **17 de 20 temas** en `EN_REVISION_USUARIO`.
- Pendientes: temas **18, 19 y 20**.
- Último bloque completado: Tema 17, con control de vigencia a **23 de julio de 2026**.

### CPEIS Toledo

Se mantiene en `SOLO_SEGUIMIENTO`, pendiente de decisión del usuario:

- **4 plazas** de Auxiliar Administrativo C2;
- **1 plaza** de Administrativo C1;
- plazo hasta el **6 de agosto de 2026**.

No se inicia desarrollo editorial específico sin confirmación de interés.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado jurídico |
|---|---:|---|
| La Puebla | **19/19** | Completa con rectificación fuente pendiente en Tema 6 |
| Diputación C1 | **40/40** | Auditoría continua; OAPGT y ampliación eIDAS 2 pendientes |
| UC3M C2 | **17/20** | Tema 17 actualizado al texto consolidado de **2 de julio de 2026** |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.10`.
- Caché del servicio: `opoweb-v2-0.27.10`.
- Precarga offline de UC3M ampliada hasta el **Tema 17**.

## Orden de trabajo vigente

1. Desarrollar y auditar el **Tema 18 de UC3M**.
2. Sustituir en el Markdown fuente del **Tema 6 de La Puebla** las menciones incorrectas a **2 años** por el régimen aplicable de hasta **4 años**.
3. Retirar `assets/tema6-interinidad-correction.js` cuando la fuente esté corregida.
4. Incorporar al manual principal del **Tema 31 de Diputación** la ampliación de servicios de confianza de eIDAS 2.
5. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
6. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
7. Cerrar el bloque OAPGT únicamente con fuente oficial íntegra y verificable.