# Auditoría técnica · Tema 18 · 18 de julio de 2026

## Epígrafe oficial

> **Tema 18. LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.**

## Fuentes oficiales contrastadas

- Microsoft Learn: ciclo de vida de **Excel 2024**.
- Soporte oficial de Microsoft: fórmulas, referencias relativas, absolutas y mixtas, tablas y referencias estructuradas.
- Ayuda oficial de LibreOffice Calc.
- Notas oficiales de publicación de LibreOffice de **junio de 2026**.

## Resultado

**Estado:** `AUDITADO_TECNICA_VIGENTE`.

No se detectan errores sustantivos en el manual publicado. El contenido distingue correctamente:

- libro, hoja, fila, columna, celda, rango y referencia;
- fórmula y función;
- valor almacenado y formato mostrado;
- referencias relativas, absolutas y mixtas;
- tabla de Excel e intervalo de datos de Calc;
- ordenar, filtrar, ocultar y eliminar;
- guardar, exportar, imprimir y generar PDF;
- formatos `.xlsx`, `.xlsm`, `.xltx`, `.ods` y `.ots`.

## Verificaciones técnicas esenciales

| Materia | Regla confirmada |
|---|---|
| Referencia relativa | `A1`; se adapta al copiar |
| Referencia absoluta | `$A$1`; no se adapta al copiar |
| Referencia mixta | `$A1` o `A$1` |
| Otra hoja en Excel | `Hoja2!A1` |
| Otra hoja en Calc | `Hoja2.A1`, con posibles signos `$` según el tipo de referencia |
| Tabla de Excel | objeto con encabezados, expansión automática y referencias estructuradas |
| CSV | texto tabular de una sola hoja, no un libro completo |
| Formato nativo Excel | `.xlsx` |
| Formato nativo Calc | `.ods` |

## Límites de Excel confirmados

Excel usa por defecto el estilo A1, con:

- **1.048.576 filas**;
- **16.384 columnas**, desde **A** hasta **XFD**.

Estos límites no deben extrapolarse automáticamente a Calc ni presentarse como una propiedad universal de todas las hojas de cálculo.

## Situación de producto en 2026

- **Excel 2024** mantiene soporte hasta el **9 de octubre de 2029**.
- LibreOffice **26.2.4**, publicada el **5 de junio de 2026**, es la rama más reciente.
- LibreOffice **25.8** continúa como rama madura recomendada para entornos empresariales.

## Precisión editorial

Una **Tabla de Excel** no es solo un rango con bordes. Es un objeto específico que incorpora encabezados, expansión automática, estilos, filtros y referencias estructuradas. Calc trabaja con intervalos de datos y tablas dinámicas, pero no debe afirmarse que reproduce de forma idéntica todas las propiedades de las Tablas de Excel.

> ⚠️ **¡Foco Examen!:** Aplicar formato de porcentaje, moneda o fecha cambia la apariencia de la celda, no necesariamente el valor almacenado. Tampoco debe confundirse una referencia absoluta `$A$1` con una referencia mixta `$A1` o `A$1`.

## Conclusión

El Tema 18 puede mantenerse como material de estudio vigente. No requiere corrección sustantiva y queda pendiente únicamente la creación posterior del banco de preguntas trazables.