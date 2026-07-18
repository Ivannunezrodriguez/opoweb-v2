# La Puebla de Montalbán · Tema 18 · Manual modular

**Estado:** EN REVISIÓN DEL USUARIO  
**No publicado como tema aprobado.**  
**Fecha de revisión técnica:** 18 de julio de 2026.

> **Tema 18. LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Criterio de producto y versión

El epígrafe exige conocer dos aplicaciones de hoja de cálculo:

- **Microsoft Excel**, tomando como referencia funcional Excel para Microsoft 365 y Excel 2024 en Windows;
- **LibreOffice Calc**, tomando como referencia la ayuda oficial vigente de LibreOffice y su comportamiento estándar en Windows.

Se priorizan conceptos estables, resultados de las órdenes y diferencias estructurales. No se memoriza una posición exacta de botones que pueda variar con las actualizaciones.

## 2. Qué es una hoja de cálculo

Una hoja de cálculo organiza información en una cuadrícula de filas y columnas. Permite introducir datos, realizar cálculos mediante fórmulas y funciones, ordenar y filtrar, resumir información, representar resultados mediante gráficos y preparar una salida impresa o PDF.

Elementos básicos:

- **libro o documento de hoja de cálculo**: archivo que puede contener una o varias hojas;
- **hoja**: cuadrícula individual dentro del libro;
- **fila**: disposición horizontal, normalmente identificada por números;
- **columna**: disposición vertical, normalmente identificada por letras;
- **celda**: intersección de una fila y una columna;
- **celda activa**: celda seleccionada en la que se introducen o editan datos;
- **rango**: conjunto de una o varias celdas, por ejemplo `A1:C10`;
- **referencia**: dirección utilizada para identificar una celda o rango;
- **fórmula**: expresión que calcula un resultado;
- **función**: fórmula predefinida que recibe argumentos.

## 3. Estructura del manual

1. [Entorno, libros, hojas, celdas, datos y formatos](bloque-01-entorno-datos-formatos.md)
2. [Fórmulas, operadores, referencias, funciones y errores](bloque-02-formulas-funciones.md)
3. [Formato, estilos, tablas, validación y organización visual](bloque-03-formato-validacion.md)
4. [Ordenación, filtros, análisis, subtotales y tablas dinámicas](bloque-04-datos-analisis.md)
5. [Gráficos, impresión, PDF, revisión, protección y accesibilidad](bloque-05-graficos-salida.md)
6. [Trazabilidad de fuentes oficiales](fuentes.md)
7. [Informe para revisión](feedback.md)

## 4. Mapa del epígrafe

| Inciso oficial | Contenido exigible |
|---|---|
| LibreOffice y Microsoft Office | identificar Calc y Excel, sus entornos, formatos nativos y diferencias operativas |
| Elaboración de hojas de cálculo | crear libros, introducir datos, usar fórmulas, aplicar formato y organizar hojas |
| Uso de hojas de cálculo | ordenar, filtrar, validar, resumir, analizar, representar e imprimir información |
| Microsoft Excel | cinta, vista Archivo, tablas de Excel, fórmulas, tablas dinámicas, gráficos y protección |
| LibreOffice Calc | menús, barras, barra lateral, ODS, intervalos, funciones, tablas dinámicas y exportación |

## 5. Diferencias esenciales

| Materia | Microsoft Excel | LibreOffice Calc |
|---|---|---|
| Formato nativo habitual | `.xlsx` | `.ods` |
| Plantilla habitual | `.xltx` | `.ots` |
| Libro con macros | `.xlsm` | `.ods` puede contener macros, pero la compatibilidad no es equivalente |
| Interfaz principal | cinta de opciones y vista Archivo/Backstage | menús, barras de herramientas, barra lateral y diálogos |
| Referencia a otra hoja | habitualmente `Hoja2!A1` | habitualmente `Hoja2.A1` o con signos `$` según el tipo de referencia |
| Tabla estructurada | objeto Tabla con encabezados y referencias estructuradas | intervalo de datos; no debe equipararse automáticamente a una Tabla de Excel |
| Tabla dinámica | Tabla dinámica | Tabla dinámica, denominada históricamente Piloto de datos/DataPilot |
| Formato de intercambio | puede abrir y guardar ODS con posibles diferencias | puede abrir y guardar XLSX con posibles diferencias |

Los nombres de funciones, separadores de argumentos y atajos pueden variar con el idioma, la configuración regional, el sistema operativo y la versión.

## 6. Flujo de trabajo administrativo correcto

1. crear el libro o partir de una plantilla;
2. guardar pronto en el formato editable adecuado;
3. definir encabezados claros y una estructura tabular coherente;
4. introducir datos con tipos homogéneos por columna;
5. usar fórmulas con referencias correctas;
6. aplicar formatos numéricos sin alterar innecesariamente el valor;
7. validar entradas cuando deban limitarse;
8. ordenar o filtrar sin romper la correspondencia entre columnas;
9. resumir mediante subtotales o tablas dinámicas cuando proceda;
10. comprobar fórmulas, errores, totales y fechas;
11. preparar impresión o exportación a PDF;
12. conservar el libro editable y verificar el archivo final.

## 7. Principios de calidad

- No confundir el valor almacenado con su apariencia.
- No escribir cifras calculadas manualmente cuando deben obtenerse mediante fórmula.
- Evitar celdas combinadas dentro de listas destinadas a ordenar o filtrar.
- Mantener una fila de encabezado única y sin huecos innecesarios.
- No ordenar una sola columna aislada si pertenece a una tabla de registros.
- Diferenciar ocultar, filtrar y eliminar.
- Documentar criterios, unidades, fechas y porcentajes.
- Revisar referencias al copiar fórmulas.
- No confundir protección de hoja con cifrado o seguridad completa.
- Revisar compatibilidad al intercambiar `.xlsx` y `.ods`.
- Tratar CSV como texto tabular de una sola hoja, no como un libro completo.

## 8. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Fuentes oficiales de Microsoft y LibreOffice: trazadas.
- Comparación Excel/Calc: integrada.
- Banco de preguntas: vacío.
- Revisión del usuario: pendiente.
- Tema cerrado: **NO**.
- Publicación como aprobado: **NO**.

El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 18 aprobado»**.
