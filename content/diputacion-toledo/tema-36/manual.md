# Tema 36. LibreOffice 24 II. Elaboración y uso de hojas de cálculo con LibreOffice 24 Calc

## 1. Concepto y finalidad

LibreOffice Calc es la aplicación de hoja de cálculo de LibreOffice. Permite **introducir, calcular, analizar, ordenar, filtrar y representar datos** mediante tablas, fórmulas, funciones y gráficos.

El formato nativo de Calc es **ODS**.

| Elemento | Función |
|---|---|
| Libro | Archivo completo de Calc |
| Hoja | Cada pestaña incluida en el libro |
| Celda | Intersección de fila y columna |
| Rango | Conjunto de celdas |
| Fórmula | Expresión que calcula un resultado |
| Función | Fórmula predefinida |

> ⚠️ **¡Foco Examen!:** El libro puede contener varias hojas. Una hoja no es un archivo independiente salvo que se exporte o copie a otro libro.

## 2. Interfaz de Calc

La ventana incluye:

- barra de menús;
- barras de herramientas;
- cuadro de nombre;
- barra de fórmulas;
- encabezados de filas y columnas;
- área de celdas;
- pestañas de hojas;
- barra de estado.

El **cuadro de nombre** muestra la referencia de la celda activa o del rango seleccionado. La **barra de fórmulas** permite introducir o modificar datos y fórmulas.

> ⚠️ **¡Foco Examen!:** La barra de fórmulas muestra la fórmula almacenada; la celda muestra normalmente su resultado.

## 3. Filas, columnas, celdas y rangos

Las columnas se identifican con letras y las filas con números. La referencia `B4` designa la celda situada en la columna B y fila 4.

Un rango continuo se expresa con dos referencias separadas por dos puntos, por ejemplo `A1:C5`.

### Selección

- una celda: clic;
- rango continuo: arrastre o **Mayús + clic**;
- rangos no contiguos: **Ctrl + selección**;
- toda la hoja: cuadro de la esquina superior izquierda o **Ctrl + A** según el contexto.

> ⚠️ **¡Foco Examen!:** `A1:C5` incluye todas las celdas comprendidas entre ambas referencias, no solo A1 y C5.

## 4. Introducción y edición de datos

Una celda puede contener:

- texto;
- número;
- fecha;
- hora;
- porcentaje;
- moneda;
- fórmula.

Para editar el contenido puede utilizarse doble clic, la barra de fórmulas o **F2**.

### Relleno automático

El controlador de relleno permite copiar valores, fórmulas o continuar series. Al arrastrarlo sobre una fórmula, las referencias relativas se ajustan.

> ⚠️ **¡Foco Examen!:** El controlador de relleno no siempre copia literalmente: puede continuar series o adaptar referencias.

## 5. Fórmulas y operadores

Todas las fórmulas comienzan con el signo **=**.

Ejemplos:

- `=A1+B1`
- `=A1*10%`
- `=(A1+B1)/2`
- `=SUMA(A1:A10)`

El orden ordinario de cálculo respeta:

1. paréntesis;
2. potencias;
3. multiplicación y división;
4. suma y resta.

| Operador | Significado |
|---|---|
| `+` | Suma |
| `-` | Resta |
| `*` | Multiplicación |
| `/` | División |
| `^` | Potencia |
| `=` | Igual |
| `<>` | Distinto |
| `>` / `<` | Mayor / menor |

> ⚠️ **¡Foco Examen!:** `=1+2*3` devuelve 7, mientras que `=(1+2)*3` devuelve 9.

## 6. Referencias relativas, absolutas y mixtas

| Tipo | Ejemplo | Comportamiento al copiar |
|---|---|---|
| Relativa | `A1` | Cambia fila y columna |
| Absoluta | `$A$1` | No cambia |
| Mixta | `$A1` | Columna fija |
| Mixta | `A$1` | Fila fija |

La tecla **F4** alterna los distintos tipos de referencia mientras se edita una fórmula.

> ⚠️ **¡Foco Examen!:** El signo `$` fija únicamente la fila o columna a la que precede.

## 7. Funciones esenciales

### Matemáticas y estadísticas

- `SUMA(rango)`
- `PROMEDIO(rango)`
- `MAX(rango)`
- `MIN(rango)`
- `CONTAR(rango)`
- `CONTARA(rango)`
- `REDONDEAR(número; decimales)`

### Condicionales

- `SI(prueba; valor_si_verdadero; valor_si_falso)`
- `CONTAR.SI(rango; criterio)`
- `SUMAR.SI(rango; criterio; rango_suma)`

### Texto y fechas

- `CONCATENAR(...)` o unión mediante `&`;
- `HOY()`;
- `AHORA()`;
- funciones de año, mes y día.

El separador habitual de argumentos en la configuración española es el **punto y coma (`;`)**.

> ⚠️ **¡Foco Examen!:** `CONTAR` cuenta celdas numéricas; `CONTARA` cuenta celdas no vacías.

## 8. Errores frecuentes

| Error | Significado habitual |
|---|---|
| `#DIV/0!` | División entre cero |
| `#NOMBRE?` | Nombre o función no reconocida |
| `#VALOR!` | Tipo de dato incompatible |
| `#REF!` | Referencia no válida |
| `#N/A` | Valor no disponible |

> ⚠️ **¡Foco Examen!:** Mostrar un error no implica que Calc haya dejado de funcionar; normalmente indica un problema en datos, referencias o fórmula.

## 9. Formato de celdas

Puede configurarse:

- tipo de número;
- decimales;
- porcentaje;
- moneda;
- fecha y hora;
- fuente;
- alineación;
- bordes;
- fondo;
- protección.

El formato modifica la presentación, no necesariamente el valor almacenado.

### Formato condicional

Aplica estilos según reglas, valores, escalas de color o condiciones.

> ⚠️ **¡Foco Examen!:** Formatear un número como porcentaje no equivale a dividirlo manualmente entre 100; el valor subyacente y su visualización deben distinguirse.

## 10. Ordenación y filtros

### Ordenar

Permite reorganizar filas según una o varias claves, en orden ascendente o descendente.

### Filtro automático

Añade listas desplegables a los encabezados para mostrar solo los registros que cumplen determinados criterios.

### Filtro estándar y avanzado

Permiten utilizar varios criterios y condiciones más complejas.

| Operación | Efecto |
|---|---|
| Ordenar | Cambia el orden de los registros |
| Filtrar | Oculta temporalmente los que no cumplen |

> ⚠️ **¡Foco Examen!:** Filtrar no borra los datos; únicamente oculta temporalmente las filas excluidas.

## 11. Validación de datos

La validación restringe lo que puede introducirse en una celda, por ejemplo:

- números dentro de un intervalo;
- fechas válidas;
- listas de valores permitidos;
- longitudes concretas.

Puede mostrar mensajes de ayuda y alertas de error.

> ⚠️ **¡Foco Examen!:** La validación controla la entrada; no sustituye por sí sola la protección de hoja.

## 12. Hojas y libros

Es posible:

- insertar, eliminar, renombrar y mover hojas;
- copiar una hoja dentro del libro o a otro libro;
- ocultar y mostrar hojas;
- referenciar celdas de otras hojas.

Ejemplo de referencia a otra hoja: `Hoja2.A1`.

> ⚠️ **¡Foco Examen!:** Renombrar una hoja puede actualizar referencias internas, pero no convierte la hoja en otro archivo.

## 13. Gráficos

Los gráficos representan visualmente datos seleccionados. Tipos habituales:

- columnas;
- barras;
- líneas;
- sectores;
- áreas;
- dispersión.

Un gráfico puede estar vinculado a los datos y actualizarse cuando estos cambian.

> ⚠️ **¡Foco Examen!:** Un gráfico no sustituye a los datos de origen; los representa.

## 14. Impresión y áreas de impresión

Calc permite:

- definir áreas de impresión;
- repetir filas o columnas como títulos;
- ajustar escala;
- configurar orientación y márgenes;
- insertar encabezados y pies;
- previsualizar saltos de página.

El comando general de impresión se abre con **Ctrl + P**.

> ⚠️ **¡Foco Examen!:** Definir un área de impresión limita qué celdas se imprimen, pero no elimina las restantes.

## 15. Protección

Puede protegerse:

- una hoja;
- la estructura del libro;
- determinadas celdas.

Para que la protección de celdas sea efectiva debe protegerse la hoja correspondiente.

> ⚠️ **¡Foco Examen!:** Marcar una celda como protegida no produce efecto mientras la hoja no esté protegida.

## 16. Importación, exportación y compatibilidad

Calc abre y guarda formatos como:

- **ODS**;
- XLSX;
- XLS;
- CSV;
- PDF mediante exportación.

Al guardar en formatos ajenos puede aparecer un aviso por posibles diferencias de compatibilidad.

> ⚠️ **¡Foco Examen!:** CSV almacena datos tabulares, pero no conserva fórmulas, varias hojas, estilos ni gráficos como un libro ODS.

## 17. Atajos esenciales

| Acción | Atajo |
|---|---|
| Guardar | **Ctrl + S** |
| Guardar como | **Ctrl + Mayús + S** |
| Buscar | **Ctrl + F** |
| Reemplazar | **Ctrl + H** |
| Editar celda | **F2** |
| Alternar referencias | **F4** |
| Insertar función | **Ctrl + F2** |
| Formato de celdas | **Ctrl + 1** |
| Imprimir | **Ctrl + P** |
| Recalcular | **F9** |

## 18. Esquema final

```text
CALC
├─ Libro (.ods)
│  └─ Hojas
├─ Celdas y rangos
├─ Fórmulas (=)
│  ├─ operadores
│  ├─ referencias relativas
│  ├─ referencias absolutas
│  └─ funciones
├─ Datos
│  ├─ ordenar
│  ├─ filtrar
│  └─ validar
├─ Presentación
│  ├─ formato
│  ├─ formato condicional
│  └─ gráficos
└─ Salida
   ├─ impresión
   ├─ PDF
   └─ exportación
```

> ⚠️ **¡Foco Examen!:** Las trampas más frecuentes son distinguir libro y hoja, fórmula y función, valor y formato, referencia relativa y absoluta, ordenar y filtrar, y ODS frente a CSV.