# Tema 18 · Bloque 4 · Ordenación, filtros, análisis, subtotales y tablas dinámicas

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Estructura de una lista de datos

Una lista apta para ordenar, filtrar o resumir debe procurar:

- una fila de encabezados única;
- un campo por columna;
- un registro por fila;
- tipos homogéneos en cada columna;
- ausencia de filas y columnas vacías intercaladas;
- ausencia de subtítulos o celdas combinadas dentro del área;
- identificadores claros cuando sean necesarios.

## 2. Ordenación

Ordenar cambia la posición de los registros según uno o varios criterios.

Ejemplos:

- texto A-Z o Z-A;
- números de menor a mayor o viceversa;
- fechas de más antigua a más reciente;
- varios niveles: primero departamento, después fecha, después importe;
- listas personalizadas.

### Integridad de filas

Al ordenar una tabla de registros deben moverse juntas todas las columnas relacionadas. Ordenar solo una columna puede separar nombres, fechas e importes y corromper la información.

Debe indicarse correctamente si el rango tiene encabezados.

## 3. Filtros

Filtrar muestra solo las filas que cumplen condiciones. Las demás quedan ocultas temporalmente; no se eliminan.

Tipos habituales:

- selección por valores;
- filtros de texto;
- filtros numéricos;
- filtros de fecha;
- varios criterios;
- filtros por color en funciones compatibles;
- filtro estándar o avanzado.

Quitar el filtro vuelve a mostrar los registros, salvo que también estén ocultos manualmente.

## 4. Buscar, reemplazar y duplicados

Buscar y reemplazar puede actuar sobre contenido, fórmulas, formatos según la aplicación y una hoja o todo el libro.

Eliminar duplicados es una operación destructiva sobre registros. Antes debe definirse qué columnas determinan la duplicidad y conservar copia si el resultado es importante.

## 5. Texto en columnas e importación

Texto en columnas separa una entrada según:

- delimitador;
- posiciones fijas;
- comas, punto y coma, tabulaciones o espacios;
- reglas de interpretación de fechas y números.

Al importar CSV deben revisarse:

- codificación;
- delimitador;
- separador decimal;
- formato de fechas;
- ceros iniciales;
- columnas que deben tratarse como texto.

Un código postal o identificador puede perder ceros iniciales si se interpreta como número.

## 6. Subtotales

Los subtotales calculan resúmenes por grupos. Normalmente requieren ordenar previamente por el campo de agrupación.

Pueden utilizar funciones como suma, promedio, cuenta, máximo o mínimo.

No deben confundirse con filtros ni con una tabla dinámica.

## 7. Esquemas y agrupación

Agrupar filas o columnas permite contraer y expandir niveles de detalle. Un esquema no elimina datos; cambia la visualización.

Los subtotales pueden generar esquemas automáticamente según la aplicación y la orden utilizada.

## 8. Tablas dinámicas

Una tabla dinámica resume y reorganiza datos sin modificar el origen.

Áreas conceptuales:

- filas;
- columnas;
- valores o datos;
- filtros.

Operaciones:

- sumar, contar, promediar u otra agregación;
- mover campos;
- agrupar fechas o números cuando sea compatible;
- filtrar elementos;
- ordenar resultados;
- mostrar subtotales y totales;
- actualizar cuando cambia el origen.

### Excel

Excel denomina la función **Tabla dinámica** y puede asociarla a gráficos dinámicos. Puede mantener una caché de tabla dinámica dentro del libro.

### Calc

Calc utiliza **Tabla dinámica**; en documentación y versiones históricas puede aparecer **Piloto de datos** o **DataPilot**.

### Actualización

Cambiar el origen no garantiza que el resumen se actualice instantáneamente. Debe ejecutarse la actualización o comprobar el comportamiento configurado.

## 9. Funciones frente a tablas dinámicas

Una función como `SUMAR.SI` calcula en celdas concretas según criterios. Una tabla dinámica crea una estructura de resumen interactiva.

Elección orientativa:

- fórmula: cálculo integrado y controlado dentro del modelo;
- tabla dinámica: exploración y resumen rápido por categorías;
- subtotal: resumen jerárquico dentro de una lista ordenada.

## 10. Errores frecuentes de examen

1. Confundir ordenar con filtrar.
2. Creer que filtrar elimina filas.
3. Ordenar una columna aislada.
4. Importar códigos como números y perder ceros.
5. Eliminar duplicados sin definir las columnas clave.
6. Aplicar subtotales sin agrupar u ordenar adecuadamente.
7. Confundir tabla dinámica con tabla de Excel.
8. Olvidar actualizar la tabla dinámica.
9. Considerar Piloto de datos una función distinta de la tabla dinámica de Calc.
