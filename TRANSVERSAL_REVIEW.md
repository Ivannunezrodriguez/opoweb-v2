# Seguimiento de la revisión transversal · Fase 2

Última actualización: **30 de julio de 2026**.

La fase 2 continúa en `EN_REVISION`. Un tema solo se cerrará cuando supere vigencia jurídica o técnica, trazabilidad, jerarquía editorial, enlaces, preguntas, esquema final y ausencia de duplicidades.

## La Puebla de Montalbán

| Tema | Estado | Situación verificada | Pendiente principal |
|---|---|---|---|
| 1 | EN_REVISION | Vigencia constitucional, matriz, banco, portada y jerarquía principal normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 2 | EN_REVISION | Ley 39/2015, matriz, banco, portada y jerarquía principal normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 3 | EN_REVISION | Ley 39/2015, matriz, banco, portada y jerarquía principal normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 4 | EN_REVISION | Ley 39/2015, especialidad local, matriz, banco, portada y jerarquía normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 5 | EN_REVISION | LRBRL, LOREG, matriz, banco, portada y jerarquía normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 6 | EN_REVISION | Ley 4/2011, modificación de 2026, matriz, banco, portada, jerarquía y contrato frontend verificados | Validación CI, llamadas residuales, enlaces y esquema final |
| 7 | EN_REVISION | LPRL, Reglamento, matriz, banco, portada y jerarquía normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 8 | EN_REVISION | Ley 12/2010, LO 3/2007, matriz, banco, portada y jerarquía normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 9 | EN_REVISION | LOPDGDD, RGPD, matriz, banco, portada y jerarquía normalizados | Validación CI, llamadas residuales, enlaces y esquema final |
| 10 | EN_REVISION | Manual, matriz y 12 preguntas verificados; sin incidencia jurídica abierta | Comprobación visual y control transversal final |
| 11 | EN_REVISION | Portada y estado normalizados; 12 preguntas trazables | Enlaces, esquema final y llamadas destacadas |
| 12 | EN_REVISION | Portada y estado normalizados; TRLRHL vigente a **03/06/2026**; 12 preguntas trazables | Enlaces de cinco bloques, `articulos.md`, `feedback.md`, esquema y llamadas |
| 13–15 | EN_REVISION | Portadas y estados normalizados | Enlaces, esquemas y llamadas destacadas |
| 16 | EN_REVISION | Vigencia técnica, manual, matriz, banco y contrato frontend verificados | Homogeneización de llamadas y revisión visual final |
| 17 | EN_REVISION | Portada, matriz, banco y vigencia técnica verificados | Revisión visual de bloques, llamadas y enlaces externos |
| 18 | EN_REVISION | Portada, matriz, banco y vigencia técnica verificados | Revisión visual de bloques, llamadas y enlaces internos |
| 19 | EN_REVISION | Portada, matriz y banco verificados; retirada segura y USB-C actualizados | Enlaces, llamadas y esquema final |

### Hallazgos transversales

- Los **Temas 1–19** tienen portada y estado visibles normalizados.
- Los bancos de preguntas de los **Temas 1–19** están alineados con el flujo editorial vigente.
- Los manuales **1–9** tienen un único encabezado `H1`; los antiguos encabezados de parte o bloque se han rebajado a `H2`.
- Se eliminaron de los Temas **1–9** el sufijo histórico `Manual reconstruido`, los metadatos de migración y la regla interna del proyecto.
- Las llamadas explícitas `Trampa de examen`, `Trampa examen` y `Clave de examen` de los Temas **1–9** se normalizan al patrón `> ⚠️ **¡Foco Examen!:**`.
- El frontend admite `pregunta/enunciado`, `correcta/respuestaCorrecta` y `trampa/trampaExamen`; la incidencia específica del Tema **6** está cerrada.
- `tests/validate-la-puebla-editorial.mjs` está integrado en `npm test` y comprueba estructura editorial, bancos y enlaces locales. Todavía debe verificarse una ejecución completa en CI antes de cerrar la incidencia.
- Quedan la revisión de esquemas, llamadas residuales y la comprobación visual y técnica final.
- Ningún tema está marcado todavía como `CERRADO_FASE_2`.

## UC3M

- Temas 1–13, 18 y 20: pendientes de cierre transversal.
- Temas 14–17: revisados con correcciones acumuladas.
- Tema 19: revisado con corrección jurídica.

## Diputación de Toledo

- Temas 1–30 y 32–40: pendientes de revisión transversal.
- Tema 31: revisado y actualizado a eIDAS 2.
- OAPGT: pendiente de fuente oficial íntegra y verificable.
