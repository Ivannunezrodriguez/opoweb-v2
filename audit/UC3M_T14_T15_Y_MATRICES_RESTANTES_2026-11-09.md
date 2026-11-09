# UC3M C2 — segundo lote de revisión estructural y contraste jurídico focal (09/11/2026)

## 1. Alcance

Se han leído las matrices de los **13 temas no incluidos en el lote anterior de trazabilidad**: **T1–T7, T14–T17, T19 y T20**. Las matrices usan diferentes modelos: unas listan **apartados, artículos y contenido**, mientras otras referencian preguntas por ID. **Un apartado sin campo `preguntas` no prueba ausencia de contenido**; no convertirlo automáticamente en incidencia.

### Hallazgos que requieren atención

| Tema | Hallazgo | Intervención |
|---|---|---|
| **T14 · LOSU** | **2 de 12 bloques** sin referencia a preguntas originales | Enlazados a preguntas complementarias reales de movilidad, acciones positivas y conciliación; **12/12** bloques trazados |
| **T15 · Estatutos UC3M** | **1 de 7 bloques** («Naturaleza») sin pregunta en el banco JSON, pero con **2 preguntas de microtest** publicadas en el manual | Identificado el microtest como **recurso de estudio no evaluable en el banco JSON**; **6 bloques** con banco y **1** con microtest |
| **T1–T7, T16–T17, T19–T20** | Matrices con cobertura normativa y esquemas de apartados de diferentes tipos | Leídas estructuralmente; **sin certificación jurídica global** ni alteraciones de claves o manifiestos |

## 2. Contraste de norma primaria

**T14.** [**Ley Orgánica 2/2023, LOSU, texto consolidado BOE**](https://www.boe.es/eli/es/lo/2023/03/22/2):

| Artículo | Dato comprobado | Trampa |
|---|---|---|
| **64.3** | Profesorado laboral temporal: techo general del **8 %**, con exclusiones legales de cómputo | No confundir «temporal» con todo el profesorado laboral |
| **65.1** | Las acciones positivas **se podrán establecer** y operan en **igualdad de condiciones de idoneidad** | La preferencia no es absoluta ni automática |
| **65.4** | Criterios para igualdad y ejercicio de derechos de conciliación y corresponsabilidad | La movilidad no puede excluir estos criterios |
| **66.2** | En movilidad temporal el PDI **mantiene la adscripción** a su universidad | Movilidad no es cambio definitivo de universidad |
| **78** | Si situaciones protegidas reducen jornada de ayudante doctor, la prórroga puede corresponder al **tiempo equivalente a jornada reducida** | No confundir prórroga proporcional con contrato indefinido |

**T15.** [**Decreto 1/2003, Estatutos UC3M, art. 1**](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782): **entidad de Derecho público**, personalidad jurídica y patrimonio propio; potestades y prerrogativas que **reconozca el ordenamiento jurídico**. El manual contiene **2 preguntas de repaso** dentro del apartado **1.2**. La [**página institucional de los Estatutos**](https://www.uc3m.es/about-uc3m/regulations/statutes-uc3m) distingue el texto inicial y la reforma por **Decreto 95/2009**.

**Discordancia detectada:** el preámbulo de la [**convocatoria BOE-A-2026-14624**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) cita **«Decreto 05/2009»**, frente al **Decreto 95/2009** del catálogo UC3M y la referencia expresa en [**BOE-A-2026-3848**](https://boe.es/diario_boe/txt.php?id=BOE-A-2026-3848&lang=es). La [**guía de examen**](../content/uc3m/GUIA_EXAMEN_2026.md) distingue la discordancia de la norma correcta. **No** confundir un número erróneo del preámbulo con derogación o nueva reforma.

> ⚠️ **¡Foco Examen!:** **Entidad de Derecho público** no significa órgano sin personalidad; **Decreto 95/2009** (reforma), no **05/2009** (referencia discordante en anuncio).

## 3. Conservación de los bancos y automatización

- **T14:** **14 preguntas** del banco original sin modificación; cuatro preguntas complementarias ya existentes, de las cuales se enlazan por ID las aplicables a los dos apartados sin cobertura.
- **T15:** **21 preguntas** originales sin alteración; **2 preguntas del manual** no se añaden de forma encubierta a `preguntas.json`.
- Se añadió [**prueba de T14/T15**](../tests/validate-uc3m-t14-t15-trazabilidad-20261109.mjs) al [**CI**](../.github/workflows/validate.yml): verifica 12 bloques de T14, 7 de T15, existencia de IDs y tipología correcta del microtest.
- **No** se altera el estado **EN_REVISION_USUARIO** de ningún tema. **No** se ha confirmado aún GitHub Actions completo ni efectuado E2E del navegador.
- Persisten reservas de fecha de corte legal **base primera.7**, cotejo de cada distractor y publicación de resolución definitiva.

## 4. Dictamen

**Mejora real publicada en matrices, guía y pruebas.** Se ha hecho un **contraste jurídico focal**, no una auditoría legal íntegra de los 13 temas pendientes ni certificación integral de los 20. Los apartados y bancos tienen diversos niveles de desarrollo; no deben igualarse artificialmente por cambiar un estado.

> ⚠️ **¡Foco Examen!:** Una **referencia en matriz** demuestra dónde practicar, pero **no** que todas las respuestas sean jurídicamente correctas, ni que el examen use la versión legal vigente el día de la prueba cuando las bases fijan otro corte.
