# UC3M C2 · Tema 9 — Auditoría técnica y editorial con reservas (09/11/2026)

## Dictamen y límite de alcance

**AUDITADO técnico-editorial:** materia de **Word 2019, Excel 2019 y herramientas Google** cotejada con documentación oficial de los fabricantes, manual del tema, matriz completa de **13 apartados**, cotejo histórico de **12 preguntas y 48 opciones** y refuerzo complementario de **12 preguntas y 48 opciones**.

**No es una certificación integral**: siguen pendientes la inspección real de las distintas versiones instaladas, la ejecución del navegador, la accesibilidad y el corte de la base **primera.7** para los posibles aspectos jurídicos. El estado **AUDITADO** no presupone aprobación del usuario ni la certificación de las interfaces dinámicas de Google.

## Banco histórico y sus referencias

| Pregunta | Confusión examinada | Documentación de fabricante |
|---|---|---|
| **UC3M-T09-001** | Guardar / Guardar como | [Fuente técnica](https://support.microsoft.com/es-es/word) |
| **UC3M-T09-002** | Salto de sección | [Fuente técnica](https://support.microsoft.com/es-es/word/insert-a-section-break) |
| **UC3M-T09-003** | Sangría francesa | [Fuente técnica](https://support.microsoft.com/es-es/word) |
| **UC3M-T09-004** | Referencia absoluta | [Fuente técnica](https://support.microsoft.com/es-es/excel/switch-between-relative-absolute-and-mixed-references) |
| **UC3M-T09-005** | #¡REF! | [Fuente técnica](https://support.microsoft.com/es-es/excel/how-to-correct-a-ref-error) |
| **UC3M-T09-006** | CCO | [Fuente técnica](https://support.google.com/mail/) |
| **UC3M-T09-007** | Archivar Gmail | [Fuente técnica](https://support.google.com/mail/answer/9259770?hl=es) |
| **UC3M-T09-008** | Editor Drive | [Fuente técnica](https://support.google.com/drive/answer/2494822?hl=es) |
| **UC3M-T09-009** | Sugerencias Docs | [Fuente técnica](https://support.google.com/docs/answer/6239410?hl=es) |
| **UC3M-T09-010** | Compatibilidad Excel/Sheets | [Fuente técnica](https://support.google.com/docs/) |
| **UC3M-T09-011** | Respuesta provisional Calendar | [Fuente técnica](https://support.google.com/calendar/) |
| **UC3M-T09-012** | Revisión de permisos antes de compartir | [Fuente técnica](https://support.google.com/drive/answer/2494822?hl=es) |

El razonamiento del banco histórico, las **48 alternativas** y los distractores se documentan con detalle en [**cotejo integral del 04/11/2026**](../content/uc3m/tema-09/cotejo-integral-2026-11-04.md), que no se reemplaza. Las fuentes genéricas de algunos conceptos requieren revisar la interfaz de la versión concreta; no se declaran capturas E2E.

## Refuerzo y verificación cruzada

El paquete **UC3M-ADIC-20261106-T09** conserva **12 preguntas**, cada una con un enlace directo a documentación de **Microsoft** o **Google**: combinación de correspondencia, vista previa, títulos, validación, formato condicional, filtros, protección de hojas, búsqueda Gmail, vistas de filtros Sheets, protección de rangos y permisos de Calendar. Esas referencias están registradas en [el JSON complementario](../data/uc3m-repasos-complementarios-20261106.json).

Contrastes puntuales directos en documentación oficial realizados en esta revisión:

| Pareja confundible | Distinción técnica |
|---|---|
| **Referencia absoluta** / **mixta** | **$A$1** fija columna y fila; **$A1** fija columna; **A$1** fija fila. [Excel 2019](https://support.microsoft.com/es-es/excel/switch-between-relative-absolute-and-mixed-references) |
| **Error #¡REF!** / error de nombre | **#¡REF!** significa que una fórmula apunta a una referencia inválida, frecuentemente una celda eliminada. [Microsoft](https://support.microsoft.com/es-es/excel/how-to-correct-a-ref-error) |
| **Archivar** / **eliminar** | En **Gmail**, archivar retira de Recibidos, conservando el mensaje; no equivale a enviarlo a la papelera. [Google](https://support.google.com/mail/answer/9259770?hl=es) |
| **Sugerir** / **editar directamente** | **Google Docs** permite aceptar o rechazar las modificaciones propuestas. [Google](https://support.google.com/docs/answer/6239410?hl=es) |
| **Protección de intervalo** / **cifrado** | **Sheets** restringe o advierte sobre edición, pero Google indica expresamente que **no es una medida de seguridad**. [Google](https://support.google.com/docs/answer/1218656?hl=es) |

> ⚠️ **¡Foco Examen!:** **Office 2019** no debe contestarse utilizando funciones exclusivas de **Microsoft 365**. En **Sheets**, la **protección de celdas** no cifra el contenido; en **Excel**, **#¡REF!** no significa división por cero.

## Matriz y pruebas

Los **13 apartados** están asociados a preguntas originales o complementarias mediante IDs existentes y verificables. Controles del repositorio: `tests/validate-uc3m-t09-cobertura-real-20261109.mjs`, `tests/validate-uc3m-t08-t10-trazabilidad-20261109.mjs` y `tests/validate-uc3m-trazabilidad-7-temas-20261109.mjs`.

La documentación del tema se considera **AUDITADA técnico-editorialmente**; **no** se declara verificación legal total ni ejecución satisfactoria del flujo completo. El cambio de estado está respaldado por esta acta, el cotejo previo de ítems y la matriz de cobertura, no por la mera existencia de los archivos.
