# La Puebla · Temas 9–12 · Cierre focal de trazabilidad legal y consistencia editorial

**Fecha de auditoría:** **07/11/2026**. **Programa:** BOP Toledo **82/2026**, anuncio **2026-1965**, categoría **Auxiliar Administrativo C2**. **Alcance del resultado:** **INCIDENCIAS DOCUMENTALES CORREGIDAS CON RESERVAS**, **NO** nueva certificación integral ni una nueva aprobación del usuario.

## 1. Inventario: qué se ha comprobado y qué ya existía

| Tema oficial | Cobertura documentada antes del lote | Trabajo efectivo ahora | Fuentes |
|---|---|---|---|
| **9**. **LOPDGDD 3/2018** | **8 bloques**; **12 preguntas/48 alternativas**, cotejadas individualmente el **04/11** | **12 referencias de banco** ancladas a preceptos LOPDGDD/RGPD; diferenciación de cuatro relojes: derechos **1 mes (+2)**, DPD **10 días**, dos supuestos de **72 h** | [**LOPDGDD**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), [**RGPD**](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) |
| **10**. **Tributación y gestión tributaria** | **8 bloques**; **12 preguntas/48 alternativas**, cotejadas el **04/11**; ya existía [repaso T10–T14 de 20 casos](REPASO_FINAL_T10_T14_20261106.md) | **12 referencias oficiales** precisadas y tabla **LGT 27 (1 % + meses)** frente a **28 (5/10/20 %)** sin duplicar el repaso | [**LGT**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186), [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) |
| **11**. **Recaudación de tributos locales** | **7 bloques**; **12 preguntas/48 alternativas**, cotejadas el **04/11** | **12 referencias oficiales**, especialmente separación de **62.2.a** (liquidación) y **62.5.b** (apremio); tabla de cuatro notificaciones | [**LGT 62**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186#a62), [**LGT 161 y 167**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) |
| **12**. **Impuestos municipales** | **5 bloques**; **12 preguntas/48 alternativas**; controles de cambios TRLRHL de **octubre 2026** ya existentes | **12 referencias oficiales**, comparación **no sujeción/exención**, IAE **< 1.000.000 €**, y **IIVTNU 106.1–2** | [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) |

**Conservación de bancos:** **48 preguntas/192 alternativas** de estos cuatro temas siguen en estado histórico `APROBADO_USUARIO`. En los cuatro `preguntas.json` se ha actualizado **solo el campo de referencia jurídica**: **no se han modificado IDs, enunciados, opciones, claves, justificaciones ni trampas**. El cotejo de **04/11/2026** no se suplanta ni se reescribe.

**Práctica adicional:** [**Repaso focal T9–T12 (07/11)**](REPASO_FOCAL_T09_T12_20261107.md) tiene **8 microcasos con 32 opciones** y focos de examen, **solo en Markdown**, no añadidos al banco interactivo ni simulacros. El [**repaso T10–T14 previo**](REPASO_FINAL_T10_T14_20261106.md) conserva sus **20 casos** y no se duplica.

## 2. Hallazgos de precisión legal

| Tema y trampa | Respuesta jurídicamente contrastada |
|---|---|
| T9, cámaras frente a incidente | **LOPDGDD 22.3**: **72 horas desde conocimiento de existencia de grabación** en el supuesto probatorio; **RGPD 33.1**: notificación de brecha sin dilación y, si es posible, **72 horas desde conocimiento de brecha**, salvo riesgo improbable |
| T9, nombramiento DPD | **LOPDGDD 34.3**: **10 días** para comunicar nombramiento y cese a **AEPD** o autoridad autonómica competente |
| T9, solicitud de acceso, rectificación, etc. | **RGPD 12.3**: **1 mes**, ampliable **otros 2 meses** por complejidad o número de solicitudes, informando oportunamente |
| T10, autoliquidación extemporánea sin requerimiento | **LGT 27.2**: **1 % más 1 % por cada mes completo**, régimen diferente si transcurren **12 meses** (**15 %** y reglas de intereses) |
| T10–11, recargos del ejecutivo | **LGT 28**: **5 %** antes de providencia notificada; **10 %** si deuda y recargo se ingresan dentro del **62.5**; **20 %** demás supuestos, con intereses cuando procedan |
| T11, liquidación vs providencia | **LGT 62.2**: liquidación notificada **16–fin → 5 del segundo mes posterior**; **62.5**: providencia notificada **16–fin → 5 del mes siguiente** |
| T11, dos comienzos | **LGT 161.1**: inicio período ejecutivo tras vencer pago voluntario; **167.1**: procedimiento de apremio mediante **providencia notificada** |
| T12, IAE por cifra de negocio | **TRLRHL 82.1.c**: exención para sujetos que cumplan requisitos con INCN **estrictamente inferior a 1.000.000 €**; con **1.000.000 € exactos**, no por esta causa |
| T12, IIVTNU y no residentes | **TRLRHL 106.1.a**: lucrativa, contribuyente **adquirente**; **106.1.b**: onerosa, contribuyente **transmitente**; **106.2**: adquirente **sustituto** cuando transmitente es **persona física no residente** |

> ⚠️ **¡Foco Examen!:** **Dos 72 horas diferentes**, **artículo 27 frente a 28 LGT**, **62.2 frente a 62.5** y **contribuyente frente a sustituto**. Son cruces entre conceptos, no cifras para memorizar sin su hecho desencadenante.

## 3. Incidencias del repositorio corregidas

- [**Tema 9 fuentes**](tema-09/fuentes.md): la nota del **02/11** «contraste de todas las respuestas pendiente» se concilia con el [cotejo por ID de **04/11**](tema-09/cotejo-integral-2026-11-04.md). Queda pendiente E2E, no ese cotejo histórico.
- [**Tema 10 fuentes**](tema-10/fuentes.md): la reserva del **02/11** «banco sin revisión completa» se sustituye por registro del cotejo **04/11** y del historial de cambios **TRLRHL**.
- [**Tema 11 fuentes**](tema-11/fuentes.md): igual corrección de reserva obsoleta sobre **recargos, apremio y distractores**. El origen del plazo de **LP-T11-002** está en **62.2.a** y **LP-T11-003** en **62.5.b**: no atribuir a ambas preguntas las dos normas indiscriminadamente.
- [**Tema 12 fuentes**](tema-12/fuentes.md): la reserva inicial sobre «cotejo del banco pendiente» se explica como antecedente superado en **04/11**, sin borrar reservas de cambios normativos.
- [**Manuales 9–12**](tema-09/manual.md): los cuatro enlazan un cuadro común de datos y test con **8 microcasos**; el enunciado de los dos ejemplos de recaudación se ha depurado y se usan vencimientos hábiles del calendario **2026**.

## 4. Qué no permite certificar esta actuación

[**Validador de regresión**](../../tests/validate-la-puebla-repaso-t09-t12-20261107.mjs): comprueba las **48 preguntas históricas/192 opciones**, artículos legales y presencia de citas, opciones y claves de los **8 casos/32 opciones**, estados de matrices y bancos, enlaces y reservas. Su inclusión en GitHub Actions **no acredita éxito de ejecución hasta verificar un run sobre el commit final**.

Las **pruebas reales de navegador, usabilidad móvil, WCAG, PWA, progreso, tiempos y funcionamiento de tests**, y la revisión integral de todas las frases de las cuatro normas hasta la fecha aplicable del examen, **siguen pendientes**. Se conservan las aprobaciones históricas y los contadores **58/121 documentales históricos, 0/121 integrales** sin incrementar por cierres duplicados.

**Resultado:** cierre focal de referencias e incoherencias documentales de **T9–T12**, **no certificación jurídica ni funcional integral**. **Siguiente bloque:** La Puebla **T13–T16**, comprobando normativas, preguntas y casos, y ejecutando controles técnicos si pueden verificarse.
