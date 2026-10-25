# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 19

**ESTADO EDITORIAL: BORRADOR ESPECÍFICO PARCIAL, PENDIENTE DE AMPLIACIÓN Y AUDITORÍA FUNCIONAL.**

## 1. Epígrafe oficial literal

> **Tema 19. LibreOffice 24 II. Utilización de documentos de hoja de cálculo con LibreOffice 24 Calc.**

**Fuente:** BOP Toledo **n.º 197, 14/10/2026**, **Anexo XI**, CSV **2026.00004759**.

## 2. Producto y documentación de versión

Calc es el componente de hojas de cálculo de LibreOffice. El formato abierto nativo es **ODS** y el de plantilla **OTS**. Una fórmula comienza con **=** y puede utilizar referencias relativas, absolutas y mixtas.

**Guía oficial de Calc para LibreOffice 24.2:** https://books.libreoffice.org/en/CG24/CG24.html

Se utiliza como referencia **LibreOffice 24.2**, de la rama **24**. El epígrafe no especifica subversión. **No** se incorpora como materia principal Microsoft Word ni Excel. El contenido que sigue es un **núcleo inicial**, no reemplaza la guía del fabricante ni el desarrollo práctico completo.

## 3. Libro, hojas y celdas en Calc 24

- **Libro/documento**: archivo que contiene una o varias hojas.
- **Hoja**: cuadrícula de filas y columnas.
- **Celda**: intersección de una fila y una columna, identificable por referencia como `B3`.
- **Rango**: conjunto de celdas, por ejemplo `A1:C10`.
- **Fórmula**: expresión que calcula un resultado, normalmente comenzando por `=`.
- **Función**: operación predefinida con argumentos, por ejemplo `SUMA`, según nombres e idioma de instalación.

### 3.1. Referencias y fórmulas

| Referencia | Tipo | Al copiar una fórmula |
|---|---|---|
| `A1` | Relativa | Cambia fila y columna según desplazamiento |
| `$A$1` | Absoluta | Mantiene fila y columna |
| `$A1` | Mixta | Columna fija, fila relativa |
| `A$1` | Mixta | Columna relativa, fila fija |

La formulación exacta de funciones, separadores y formatos puede depender de la configuración regional de Calc. No se deben trasladar automáticamente convenciones de Excel.

### 3.2. Datos, formato y validación

- Introducir texto, números, fechas y fórmulas.
- Distinguir **valor almacenado** y **formato mostrado** (porcentaje, moneda, fecha).
- Utilizar formatos de celda, alineación, bordes, estilos y formato condicional.
- Aplicar validación para limitar entradas, cuando corresponda.

### 3.3. Organización y análisis

- **Ordenar** reorganiza registros por los criterios establecidos.
- **Filtrar** limita las filas visibles sin equivaler a su borrado.
- Utilizar subtotales, funciones estadísticas y tablas dinámicas en los términos de la guía Calc 24.2.
- Crear gráficos partiendo de rangos seleccionados.

### 3.4. Impresión y documentos

- Configurar áreas de impresión, orientación, escala, encabezados, pies y saltos de página.
- Guardar en formato **ODS**, exportar a **PDF** e importar o exportar **CSV**, identificando diferencias entre archivos de hoja de cálculo y archivos de texto delimitado.

### 3.5. Protección, errores y revisión

- Distinguir protección de hoja, protección de celdas y seguridad del archivo.
- Reconocer errores de fórmulas por su código, tras cotejar el mensaje exacto con la guía de la versión 24.

> ⚠️ **¡Foco Examen!:** **Filtrar** no elimina registros y **formatear como porcentaje** no cambia por sí mismo la fórmula de cálculo. La referencia `$A$1` conserva columna y fila cuando se copia.


## 4. Auditoría y ampliaciones pendientes

1. Verificar rutas exactas de menús, botones y atajos en **LibreOffice 24** bajo Windows.
2. Desarrollar apartados avanzados documentados en la guía **24.2** sin reutilizar instrucciones específicas de Microsoft Office.
3. Elaborar ejercicios resueltos y preguntas vinculadas a los capítulos del fabricante.
4. Comprobar formatos, valores y opciones dependientes de la configuración de idioma, tipo de archivo y plataforma.

**No marcar este tema PUBLICADO hasta completar estos controles.**


---

## 6. Desarrollo ampliado según la Guía Calc 24.2

La [Guía Calc 24.2 de The Document Foundation](https://books.libreoffice.org/en/CG24/CG24.html) documenta funciones, análisis de datos, tablas dinámicas, gráficos, impresión, validación y errores. Aquí se organizan esos apartados como temario de estudio. **Los ejemplos numéricos son ejercicios didácticos, no preguntas oficiales.**

### 6.1. Tipo de dato y resultado de una celda

Una celda puede contener **texto**, **números**, **fechas** interpretadas por la configuración regional o **fórmulas**. La visualización no siempre coincide con el valor almacenado.

| Entrada o estado | Interpretación |
|---|---|
| `15` | Valor numérico |
| `=A1+B1` | Fórmula que suma los valores contenidos en dos celdas |
| `A1:C10` | Referencia a un rango rectangular |
| `0,25` mostrado como `25 %` | Formato porcentual aplicado al valor, según configuración regional |
| Texto con apariencia de número | Puede no intervenir en cálculos de la misma manera que un número |

**Fuente:** [Guía Calc 24.2, capítulo 2](https://books.libreoffice.org/en/CG24/CG2402-EnteringandEditingData.html).

> ⚠️ **¡Foco Examen!:** **Formato** y **valor** son distintos. Ver `25 %` no demuestra que la celda almacene el número 25.

### 6.2. Operaciones, referencias y precedencia

Las referencias **relativas, absolutas y mixtas** permiten controlar cómo cambia una fórmula cuando se copia. El orden de las operaciones sigue las reglas de cálculo que implemente el motor de fórmulas. Los paréntesis permiten explicitar agrupaciones.

**Ejemplo didáctico:**

| Celda | Contenido |
|---|---|
| `A1` | `100` |
| `B1` | `21 %` como valor porcentual |
| `C1` | `=A1*(1+B1)` |

La expresión de `C1` calcula **121**. Si la celda `B1` se muestra como 21 %, su valor numérico es **0,21**.

**Ejemplo de copiado:** en `C2` se escribe `=A2*$F$1`. Al copiar hacia `C3`, la referencia **relativa** `A2` pasa a **A3** y la **absoluta** `$F$1` permanece igual.

**Fuente:** [Guía Calc 24.2, capítulo 8](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html).

> ⚠️ **¡Foco Examen!:** La expresión `$A1` fija **la columna A**, no la fila 1. La expresión `A$1` fija **la fila 1**, no la columna A.

### 6.3. Funciones y separadores regionales

Una **función** es un cálculo predefinido cuyos argumentos pueden ser valores o referencias. Funciones habituales son suma, promedio, máximo, mínimo, recuento y condicionales; los **nombres traducidos** y **separadores de argumentos** deben comprobarse en la instalación real de Calc 24 utilizada para el examen.

| Operación conceptual | Ejemplo de aplicación |
|---|---|
| Suma | Totalizar los importes de un rango |
| Promedio | Calcular la media de importes numéricos |
| Máximo y mínimo | Obtener extremos de una serie |
| Contar | Contar celdas con datos de determinado tipo |
| Condicional | Elegir un resultado según una prueba lógica |

**Fuente:** [Guía Calc 24.2, capítulo 8](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html).

### 6.4. Ordenación, filtros y validación

- **Ordenación:** cambia la disposición de los registros según claves ascendentes o descendentes y niveles de orden.
- **Filtro:** permite mostrar un subconjunto conforme a condiciones; los registros ocultos no han sido eliminados.
- **Validación de datos:** impone criterios de entrada en un rango cuando se configura esa función.
- **Formato condicional:** cambia la presentación si se cumple una condición.
- **Tabla dinámica:** reorganiza y resume datos por dimensiones y medidas, y no sustituye necesariamente al origen de datos.

| Acción | Reordena filas | Oculta filas | Destruye datos originales necesariamente |
|---|---|---|---|
| Ordenar | Sí | No | No |
| Filtrar | No necesariamente | Sí | No |
| Aplicar formato condicional | No | No | No |
| Crear tabla dinámica | Produce un resumen | No necesariamente | No |

**Fuente:** [Guía Calc 24.2, capítulos 9 y 10](https://books.libreoffice.org/en/CG24/CG24.html).

> ⚠️ **¡Foco Examen!:** **Ordenar** no es **filtrar**, y **tabla dinámica** no es una tabla normal de celdas con bordes.

### 6.5. Gráficos y salida impresa

- Un gráfico representa información mediante series vinculadas a un conjunto de datos.
- La elección del tipo de gráfico debe responder a la naturaleza de los datos y al propósito de comparación.
- La impresión puede requerir seleccionar un **área de impresión**, configuración de página, orientación, escalado y saltos.
- La exportación a **PDF** crea un formato de difusión, distinto del archivo nativo editable **ODS**.
- **CSV** es un formato de texto delimitado: por sí solo no conserva todas las funciones de un libro ODS, como varios formatos, objetos o estructura de múltiples hojas.

**Fuente:** [Guía Calc 24.2, capítulos 3 y 7](https://books.libreoffice.org/en/CG24/CG24.html).

### 6.6. Errores, revisión y protección

Un fallo en fórmulas puede obedecer a datos incompatibles, referencias no válidas, operaciones imposibles o argumentos inapropiados. La **guía Calc 24.2** contiene un **apéndice B dedicado a códigos de error**. Antes de memorizar sus denominaciones se debe comprobar el texto exacto de ese apéndice.

La **protección de hojas/celdas**, el **control de revisiones** y la **contraseña de apertura de archivo** son mecanismos distintos y no deben presentarse como equivalentes.

**Fuente:** [Guía Calc 24.2, capítulos 12 y apéndice B](https://books.libreoffice.org/en/CG24/CG24.html).

## 7. Práctica resuelta: liquidación sencilla

**Supuesto didáctico propio, no oficial:** en una hoja Calc se introduce un importe de **200** en `A2` y un porcentaje del **10 %** en `B2`. La celda `C2` contiene `=A2*B2`.

- **Resultado:** `20`.
- Si en `D2` se escribe `=A2+C2`, el resultado es **220**.
- Si la fórmula se copia y debe mantener un porcentaje fijo situado en `$B$2`, se utiliza una **referencia absoluta** a esa celda.

**Comprobación de examen:** el porcentaje mostrado debe ser un valor numérico reconocible por Calc, no una cadena textual.

**Pendiente antes de cerrar el tema:** revisión de menús y funciones con la configuración española de una instalación **LibreOffice 24** y elaboración de ejercicios de datos y gráficos completos.
