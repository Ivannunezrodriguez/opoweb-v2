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


## Segunda intervención: mejora de estudio y control de regresión

Se ha revisado de nuevo el [catálogo primario del INE](https://www.ine.es/prodyser/callejero/) y el [BOE de la convocatoria UC3M, base primera.7](https://boe.es/diario_boe/txt.php?id=BOE-A-2026-14624). La [página UC3M del proceso 2026](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) sí muestra **RESOLUCIÓN DEFINITIVA DE SOLICITUDES ADMITIDAS Y EXCLUIDAS**, pero la recuperación disponible **no incluye su documento con fecha de publicación primaria**. El dato **01/10/2026** de ADAMS sigue en calidad de indicio.

| Archivo modificado | Corrección efectiva |
|---|---|
| [Olías T13 — manual](../content/olias-auxiliar-edificios/tema-13/manual.md) | Nueva tabla oficial de **VIAS/PSEU/TRAM/UP-SECC**, fecha **30/06/2026** y protocolo de cotejo, con distinción explícita entre selección de direcciones y listado íntegro |
| [UC3M — guía](../content/uc3m/GUIA_EXAMEN_2026.md) | Tabla de decisión para **T10 TREBEP**, **T15 Estatutos/LOSU** y **T16 RD 822/2021 y nulidad del RD 905/2025**, con reserva de corte |
| [Test preventivo](../tests/validate-olias-uc3m-pendientes-20261109.mjs) | Comprueba que la guía documenta los hechos sensibles y que **T13 Olías/T10-T15-T16 UC3M** no se marquen como auditados sin cierre |
| [CI](../.github/workflows/validate.yml) | Ejecuta test preventivo para futuras modificaciones |

**Commits:** Olías `a3847ec9`; guía UC3M `ae31f6e2`; test `5d17d8fd`; CI `d3f79100`.

**Pendiente efectivo:** obtener el ZIP íntegro del INE para Olías **45122**, extraer y cotejar vías; obtener el documento primario de listas definitivas UC3M y resolver íntegramente normativa/bancos. **No se acredita ejecución E2E ni resultado de GitHub Actions del último SHA.** La mejora editorial no debe confundirse con un cambio de estado.


## Tercera intervención: impedir falsos cierres y facilitar cierre demostrable (09/11/2026)

**Búsqueda primaria repetida:** el [portal UC3M para 34 plazas 2026](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) anuncia relación definitiva, pero **no deja comprobar desde el contenido público recuperado su fecha de publicación**. La búsqueda devuelve un [**PDF auténtico de resolución definitiva UC3M**](https://www.uc3m.es/ss/Satellite?blobcol=urldata&blobheadername1=Content-Disposition&blobheadername2=Cache-Control&blobheadervalue1=inline%3B+filename%3D%22Resoluci%C3%B3n_Definitiva_de_Admitidos_y_Excluidos.pdf%22&blobheadervalue2=private&blobkey=id&blobtable=MungoBlobs&blobwhere=1371617534582&ssbinary=true) **de otra convocatoria, la resolución de 02/09/2024, con listas provisionales de marzo 2025**. Se excluye expresamente como prueba del corte 2026. Continúa el dato **01/10/2026** como secundario de ADAMS.

**Callejero:** [INE, Callejero Electoral](https://www.ine.es/prodyser/callejero/) confirma **VIAS, PSEU, TRAM, UP y SECC**, referencia **30/06/2026** en su edición de julio. No se recuperó el ZIP de Toledo; no se crea un inventario sin datos.

**Cambio funcional de validación:**
- [Registro machine-readable de pruebas pendientes](evidencias-cierre-olias-uc3m-2026.json), commit `a5799da9`: define para los cuatro temas fuente índice, documento primario, publicación, acta y lista de comprobaciones; campos primarios no acreditados se conservan como **null**.
- [Gate de cierre](../tests/validate-olias-uc3m-pendientes-20261109.mjs), commit `7d5a5e42`: deja de prohibir de forma rígida cualquier ascenso. Si un tema cambia a `AUDITADO`, exige `estadoEvidencia=VERIFICADO`, fuente primaria URL, fecha primaria con formato 2026 y acta existente. Esto **no sustituye la auditoría jurídica**, pero impide promocionar un tema sin documentación.
- [Sincronizador dinámico de fichas](../tests/validate-convocatorias-editorial-sync-20261109.mjs), commit `fd6f7ebb`: cuando se cierre Olías o UC3M con prueba, podrá comprobar el nuevo recuento y ficha sin mantener cifras obsoletas codificadas en test. Diputación C1/C2 conserva sus expectativas históricas.
- Ambos controles ya están incluidos en el [workflow `validate.yml`](../.github/workflows/validate.yml). **La ejecución CI de los últimos commits no está acreditada**.

**Estado jurídico sin cambios**: Olías **21/22**, UC3M **17/20**. No se declara cierre de los cuatro temas. Tampoco se atribuye publicación en 2026 al PDF de 2025.
