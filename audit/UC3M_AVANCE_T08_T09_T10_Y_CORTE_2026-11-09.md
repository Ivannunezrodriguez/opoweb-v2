# UC3M C2 2026 — avances focalizados de cobertura y estado de corte (09/11/2026)

## 1. Datos de examen y fecha jurídica

La [**convocatoria oficial BOE-A-2026-14624**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) establece **34 plazas** (**2** reservadas a discapacidad), **20 temas**, **70 preguntas + 5 de reserva**, **60 minutos** y penalización de **1/3** por error. El llamamiento institucional anuncia examen **21/11/2026 a las 10:00**, campus de **Getafe**.

La **base primera.7** fija la legislación exigible en la fecha **de publicación de la resolución definitiva de admitidos y anuncio de ejercicio**. La página [oficial de UC3M](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) anuncia la resolución, pero la consulta de esta sesión **no ha obtenido PDF fechado y evidencia primaria de su publicación**. Como indicios no primarios, el calendario de [Adams](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) señala **01/10/2026** y su [noticia de 07/10/2026](https://www.adams.es/noticias/oposiciones/examenes/examen-auxiliar-universidad-carlos-iii-madrid/) informa de la publicación de listas. **No elevar 01/10/2026 a fecha certificada sin el documento UC3M original**.

> ⚠️ **¡Foco Examen!:** No confundir la **fecha del ejercicio 21/11/2026** con la **fecha de publicación de la resolución definitiva**, que es la que selecciona la versión legal del temario.

## 2. Auditoría editorial de tres matrices

La trazabilidad de preguntas de tres temas se ha completado **sin crear falsas preguntas**, reutilizando los bancos adicionales publicados en el portal:

| Tema | Apartados del programa con respaldo en matriz | Banco histórico preservado | Banco complementario existente | Tipo de mejora |
|---|---:|---:|---:|---|
| **T08 · Igualdad** | **13/13** | **12 preguntas/48 opciones** | **12 preguntas** del paquete T08 | Vinculadas las de tutela, empleo público, identidad y lenguaje inclusivo |
| **T09 · Word 2019, Excel 2019, Google** | **13/13** | **12 preguntas/48 opciones** | **12 preguntas** del paquete T09 | Vinculadas correspondencia y gestión/análisis de datos |
| **T10 · TREBEP** | **11/11** | **12 preguntas/48 opciones** | **6 preguntas** del paquete LOTE | Vinculados ámbito, derechos y reingreso |
| **Total del foco** | **37/37** | **36 preguntas** | **30 preguntas** | **Enlaces explícitos por ID** |

Las referencias complementarias están en [`data/uc3m-repasos-complementarios-20261106.json`](../data/uc3m-repasos-complementarios-20261106.json). Las tres matrices identifican cada pregunta con su **ID exacto** y especifican el origen; los bancos originales no han sufrido modificación. Se han incorporado dos pruebas [T09](../tests/validate-uc3m-t09-cobertura-real-20261109.mjs) y [T08–T10](../tests/validate-uc3m-t08-t10-trazabilidad-20261109.mjs) al flujo CI.

**Regla editorial:** vincular preguntas complementarias a un apartado **no implica que la matriz esté certificada semánticamente**, ni sustituye comprobar el fundamento de cada distractor en normativa aplicable.

## 3. Contraste de conceptos que suelen confundirse en T09

Se han reconsultado fichas oficiales de **Microsoft Support** aplicables a Word/Excel **2019**:

| Concepto | Afirmación de examen cotejada | Referencia del fabricante |
|---|---|---|
| **Combinación de correspondencia** | Documento principal + origen de datos + campos; previa revisión de resultados y finalización | [Word, datos Excel](https://support.microsoft.com/es-es/word/mail-merge-using-an-excel-spreadsheet) |
| **Vista previa de combinación** | Permite comprobar las cartas para distintos registros **antes de finalizar** | [Word, vista previa](https://support.microsoft.com/es-es/word/mail-merge-preview-results) |
| **Filtro automático de Excel** | **Oculta temporalmente filas** no coincidentes; **no las elimina** | [Microsoft, filtro](https://support.microsoft.com/es-es/excel/get-started/filter-data-in-a-range-or-table-in-excel) |
| **Ordenación de Excel** | **Reorganiza el orden** de filas/valores según criterio | [Microsoft, ordenar](https://support.microsoft.com/es-es/excel/sort-data-in-a-range-or-table-in-excel) |

> ⚠️ **¡Foco Examen!:** **Combinar correspondencia** no significa enviar el documento sin comprobarlo; **vista previa** no finaliza la combinación. **Filtrar** datos **no** los borra y **ordenar** no es seleccionar filas.

## 4. Reservas no levantadas

- **UC3M T08, T09, T10** conservan estado **EN_REVISION_USUARIO** y **certificacionIntegral=false**.
- El resto de **17 temas** no se eleva de estado mediante este contraste focal.
- Para alcanzar **AUDITADO jurídico** faltan contrastes plenos de vigencia, cada distractor y la fecha jurídica de corte; para **CERTIFICADO_INTEGRAL** faltan además validaciones E2E y accesibilidad del portal.
- La ejecución satisfactoria del **CI asociado al último commit** todavía no se ha confirmado en esta auditoría.

**Dictamen:** avance verificable de trazabilidad y cobertura de ejercicios, **no cierre integral de la convocatoria**.
