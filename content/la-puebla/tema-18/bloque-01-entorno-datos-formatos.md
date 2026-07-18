# Tema 18 · Bloque 1 · Entorno, libros, hojas, celdas, datos y formatos

**Estado:** APROBADO POR EL USUARIO

## 1. Entorno de trabajo

### Microsoft Excel

Elementos habituales:

- barra de título;
- barra de herramientas de acceso rápido;
- cinta de opciones organizada en pestañas y grupos;
- vista **Archivo** o Backstage para abrir, guardar, imprimir, exportar y configurar;
- cuadro de nombres;
- barra de fórmulas;
- encabezados de filas y columnas;
- cuadrícula de celdas;
- pestañas de hojas;
- barras de desplazamiento;
- barra de estado y control de zoom.

### LibreOffice Calc

Elementos habituales:

- barra de título;
- barra de menús;
- barras de herramientas;
- cuadro de nombres;
- línea de entrada o barra de fórmulas;
- encabezados de filas y columnas;
- cuadrícula;
- pestañas de hojas;
- barra lateral;
- barra de estado y zoom.

La apariencia puede configurarse. Debe reconocerse la función de cada zona, no solo su posición.

## 2. Libro, hoja y celda

Un archivo de Excel o Calc es un **libro** o documento de hoja de cálculo. Puede contener varias hojas. Cada hoja tiene nombre propio y puede:

- insertarse;
- eliminarse;
- renombrarse;
- moverse o copiarse;
- ocultarse o mostrarse;
- cambiar de posición mediante sus pestañas.

Eliminar una hoja puede destruir datos y fórmulas. Debe revisarse si otras hojas dependen de ella.

### Dirección de una celda

La notación habitual A1 combina la letra de columna y el número de fila.

Ejemplos:

- `A1`: columna A, fila 1;
- `D25`: columna D, fila 25;
- `B2:E8`: rango rectangular;
- `A:A`: columna completa, cuando la aplicación admite esa sintaxis en el contexto;
- `1:1`: fila completa, igualmente dependiente del contexto.

El cuadro de nombres permite ver o escribir una referencia y desplazarse hasta ella.

## 3. Selección

Puede seleccionarse:

- una celda;
- un rango contiguo;
- rangos no contiguos;
- una fila o columna completa;
- varias filas o columnas;
- toda la hoja.

Una selección no equivale a la celda activa: en un rango seleccionado existe una celda desde la que comienza la entrada.

## 4. Introducción y edición de datos

Una celda puede contener principalmente:

- texto;
- número;
- fecha u hora;
- valor lógico;
- fórmula;
- error.

La aplicación interpreta la entrada según el contenido, el formato y la configuración regional.

### Valor almacenado y valor mostrado

No siempre coinciden visualmente:

- una fecha se almacena internamente como número de serie y se muestra con formato de fecha;
- `0,25` puede mostrarse como `25 %`;
- un número puede mostrarse redondeado a dos decimales aunque conserve más precisión;
- una celda puede mostrar `#####` porque la columna es demasiado estrecha, no porque la fórmula sea errónea.

### Editar y sustituir

- escribir sobre una celda seleccionada sustituye su contenido;
- entrar en modo de edición permite modificar parte del contenido;
- borrar contenido no siempre elimina formato, comentarios o validación;
- **Eliminar celdas** puede desplazar otras celdas, filas o columnas;
- **Borrar contenido** deja la estructura en su sitio.

## 5. Autorrelleno y series

El controlador de relleno permite copiar contenido o continuar series.

Ejemplos:

- copiar una fórmula hacia abajo;
- continuar `1, 2, 3…`;
- continuar fechas;
- repetir un texto;
- copiar solo formato o seleccionar otra opción de autorrelleno.

El resultado depende de la selección inicial. Arrastrar una sola celda con el número 1 puede copiar 1; seleccionar 1 y 2 antes de arrastrar permite inferir una serie.

## 6. Portapapeles y pegado especial

Copiar o cortar puede trasladar contenido, fórmulas, formato, comentarios, validación y otras propiedades según la orden.

**Pegado especial** permite elegir componentes como:

- valores;
- fórmulas;
- formatos;
- transposición de filas y columnas;
- operaciones aritméticas sobre el destino.

Pegar solo valores elimina la fórmula del resultado pegado. Es útil para fijar resultados, pero destruye la trazabilidad del cálculo en la copia.

## 7. Guardar y formatos

### Excel

- `.xlsx`: libro estándar Open XML sin macros VBA;
- `.xlsm`: libro habilitado para macros;
- `.xls`: formato binario heredado;
- `.xltx`: plantilla;
- `.csv`: texto delimitado, normalmente de una sola hoja;
- `.pdf`: salida de distribución, no formato editable equivalente.

### Calc

- `.ods`: formato OpenDocument de hoja de cálculo;
- `.ots`: plantilla;
- `.xlsx`: formato de Excel que Calc puede abrir y guardar con posibles avisos;
- `.csv`: texto delimitado;
- `.pdf`: exportación de salida.

### CSV

CSV no conserva un libro completo. Normalmente guarda una sola hoja, texto y valores visibles y separadores de campos. No conserva múltiples hojas, gráficos, formato complejo ni fórmulas reutilizables como tales.

El delimitador real puede ser coma, punto y coma, tabulación u otro, según la configuración y el proceso de importación o exportación.

## 8. Compatibilidad

Al cambiar entre `.xlsx` y `.ods` pueden variar o perderse:

- formatos condicionales complejos;
- tablas estructuradas;
- gráficos;
- funciones no equivalentes;
- macros;
- validaciones;
- conexiones externas;
- estilos o formatos personalizados.

Debe conservarse una copia en el formato nativo cuando el documento contenga características importantes.

## 9. Errores frecuentes de examen

1. Confundir libro con hoja.
2. Creer que una celda solo contiene lo que se ve.
3. Confundir borrar contenido con eliminar celdas.
4. Suponer que `.csv` conserva todas las hojas y fórmulas.
5. Confundir `.xlsx` con `.xlsm`.
6. Considerar PDF como formato editable nativo.
7. Pensar que guardar en otro formato nunca altera funciones o diseño.
