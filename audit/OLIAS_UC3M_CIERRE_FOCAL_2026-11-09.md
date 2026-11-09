# Olías y UC3M — comprobación de cierres pendientes (09/11/2026)

## Alcance y resultado

Se han cotejado los manifiestos públicos vigentes (no las actas históricas): **Olías 21/22 AUDITADO**, **UC3M 17/20 AUDITADO**. No corresponde pasar los cuatro temas restantes a AUDITADO ni afirmar un cierre jurídico integral sin pruebas adicionales.

| Convocatoria | Tema | Estado de manifiesto | Prueba primaria pendiente |
|---|---|---|---|
| Olías | **T13** | `EN_AUDITORIA` | Extraer y contrastar conjunto oficial **VIAS/PSEU** del INE de julio de 2026, provincia 45, municipio 45122; confrontar topónimos y localización de servicios |
| UC3M | **T10** | `EN_REVISION_USUARIO` | Confirmar fecha de corte en resolución oficial de definitivos y aplicar redacción TREBEP temporalmente exigible, especialmente reforma del art. 49.e |
| UC3M | **T15** | `EN_REVISION_USUARIO` | Resolver concordancia de Estatutos de 2003/2009 con adaptación LOSU, composición y derecho transitorio; confirmar fecha de corte |
| UC3M | **T16** | `EN_REVISION_USUARIO` | Determinar corte para modificación RD 905/2025 de RD 822/2021 y efectos de sentencia publicada 23/10/2026; revisar banco a fecha exigible |

## Evidencia comprobada

- [INE, Callejero del Censo Electoral](https://www.ine.es/prodyser/callejero/): contiene ficheros **VIAS**, **PSEU** y **TRAM**; la edición de julio toma como referencia el **30/06/2026**. El catálogo prueba que existen las series pero **no** la extracción completa de Toledo (45) y Olías (45122). Las direcciones de servicios incluidas en T13 no equivalen a todas las calles.
- [Convocatoria UC3M BOE-A-2026-14624](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624), base **primera.7**: legislación exigible a publicación de **resolución de listas definitivas y anuncio del examen**, no el día de prueba. El [portal oficial UC3M](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) informa de lista definitiva y de **21/11/2026** para el examen, pero no se ha recuperado la resolución original con sello/fecha verificable.
- La [ficha de ADAMS](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) indica **01/10/2026** para listas definitivas. **Dato secundario indicativo, NO prueba primaria del corte.**
- T10: [TREBEP](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719); existen cotejos del banco **12 preguntas/48 alternativas**, pero el corte de la modificación de octubre requiere resolución fechada.
- T15: [Estatutos UC3M](https://www.uc3m.es/about-uc3m/regulations/statutes-uc3m) y [LOSU consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500); plazo de adaptación de **3 años** tras la reforma de 2024. Reglas de representación estatutarias antiguas no pueden convertirse en valores actuales sin interpretar adecuadamente la LOSU.
- T16: [Sentencia TS publicada en BOE 23/10/2026](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083). El RD 822/2021 **no** fue anulado: se anuló el RD 905/2025 modificador. El corte exacto determina qué situación jurídica corresponde analizar para el examen.

> ⚠️ **¡Foco Examen!:** **Fecha de examen** no es **fecha de corte normativo**. Tampoco el número de registros **TRAM** equivale al número de nombres de vía **VIAS/PSEU**.

## Cambios publicados y puerta de cierre

Se han corregido `data/convocatorias.json` para reflejar **17+3 UC3M y 21+1 Olías** (commit `d6fe3f6c`), y ampliado el test `tests/validate-convocatorias-editorial-sync-20261109.mjs` para evitar regresiones (commit `16cf5110`). El test ya estaba invocado por `.github/workflows/validate.yml`; **no se ha confirmado un resultado de GitHub Actions para el último SHA**.

**Cierre verificable de esta fase:** precisión de metadatos e identificación de exactamente cuatro pendientes. **No cierre de T13, T10, T15 o T16**. Ningún estado de manifiesto se ha cambiado sin fuente.
