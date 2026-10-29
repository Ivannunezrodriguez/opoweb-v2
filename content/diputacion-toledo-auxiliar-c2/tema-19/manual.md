# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 19

**ESTADO EDITORIAL: CONTENIDO COMPLETO — AUDITORÍA DOCUMENTAL 29/10/2026. Prueba de interfaz pendiente.**

## 1. Epígrafe oficial literal

> **Tema 19. LibreOffice 24 II. Utilización de documentos de hoja de cálculo con LibreOffice 24 Calc.**

**Fuente:** BOP Toledo **n.º 197, 14/10/2026**, **Anexo XI**, CSV **2026.00004759**.

## 2. Producto y documentación de versión

Calc es el componente de hojas de cálculo de LibreOffice. El formato abierto nativo es **ODS** y el de plantilla **OTS**. Una fórmula comienza con **=** y puede utilizar referencias relativas, absolutas y mixtas.

**Guía oficial de Calc para LibreOffice 24.2:** https://books.libreoffice.org/en/CG24/CG24.html

Se utiliza como referencia **LibreOffice 24.2**, de la rama **24**. El epígrafe no especifica subversión. **No** se incorpora como materia principal Microsoft Word ni Excel. El presente material desarrolla los aspectos de uso de **Calc 24** del epígrafe de examen mediante contenidos y casos prácticos, apoyados en la guía oficial **24.2**.

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


## 4. Diferencias de versión y límites de las instrucciones

La guía de la versión **24.2** constituye la referencia técnica reproducible para este programa. Los nombres y separadores de fórmulas dependen de la **configuración regional**; las rutas de menús dependen de la **interfaz seleccionada**. Se utilizan, por tanto, los conceptos y ejercicios contrastables sin presentar como universal una ruta que puede variar.


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

**Alcance de la práctica:** los ejemplos corresponden a la configuración española indicada y deben interpretarse según idioma de funciones y separadores del equipo.


## 8. Funciones y casos prácticos de Calc 24.2

### 8.1. Funciones habituales

Los nombres de funciones dependen del idioma configurado. En una interfaz española son habituales los siguientes:

| Función | Ejemplo | Resultado |
|---|---|---|
| **SUMA** | `=SUMA(A1:A3)` | Total del rango |
| **PROMEDIO** | `=PROMEDIO(A1:A3)` | Media de valores numéricos |
| **MAX** y **MIN** | `=MAX(A1:A3)` | Valor máximo o mínimo |
| **CONTAR** | `=CONTAR(A1:A3)` | Cuenta números |
| **CONTARA** | `=CONTARA(A1:A3)` | Cuenta celdas no vacías |
| **SI** | `=SI(A1>=5;"APTO";"NO APTO")` | Condición lógica |
| **HOY** | `=HOY()` | Fecha actual del sistema |

El separador de argumentos del ejemplo es **punto y coma**; puede depender de la configuración. Las cadenas de texto se introducen entre comillas dobles.

> ⚠️ **¡Foco Examen!:** **CONTAR** no es **CONTARA**; la primera cuenta celdas numéricas y la segunda celdas no vacías.

### 8.2. Referencias al copiar

| Celda B2 | Copiar a B3 | Justificación |
|---|---|---|
| `=A2` | `=A3` | Referencia relativa |
| `=$A$2` | `=$A$2` | Fila y columna absolutas |
| `=$A2` | `=$A3` | Solo columna fija |
| `=A$2` | `=A$2` | Solo fila fija |

> ⚠️ **¡Foco Examen!:** El signo **$** antes de la letra fija columna y antes del número fija fila.

### 8.3. Supuestos resueltos

**Caso A — suma:** con **20, 30 y 40** en `B2:B4`, `=SUMA(B2:B4)` devuelve **90**; `=PROMEDIO(B2:B4)` devuelve **30**.

**Caso B — porcentaje:** `A2=100`, `B2=21%`; la fórmula `=A2*(1+B2)` devuelve **121**.

**Caso C — condición:** con `C2=6`, `=SI(C2>=5;"APTO";"NO APTO")` devuelve **APTO** en configuración española con separador de punto y coma.

**Caso D — tasa fija:** `=A2*$F$1` copiada de la fila **2** a la **3** da `=A3*$F$1`.

> ⚠️ **¡Foco Examen!:** **21 % = 0,21**, no **21**, cuando participa en una multiplicación.


## 9. Trabajo de oficina con datos: filtro, tabla dinámica y gráficos

### 9.1. Datos tabulares correctos

Una relación administrativa puede representarse mediante columnas **N.º de expediente**, **Unidad**, **Fecha**, **Importe** y **Estado**. Conviene utilizar una fila por expediente y encabezados de columna claros. No deben mezclarse filas de subtotales dentro del rango principal cuando se pretende ordenar, filtrar o construir una tabla dinámica.

| Operación | Acción y efecto |
|---|---|
| **Ordenar** | Reordena los registros según uno o varios campos; seleccionar todas las columnas preserva su correspondencia |
| **Autofiltro** | Muestra solo los registros que cumplen criterios; no elimina los ocultos |
| **Validación** | Permite limitar la entrada a valores o intervalos configurados |
| **Formato condicional** | Aplica un formato visual si se cumple una condición |
| **Tabla dinámica** | Resume registros por categorías, por ejemplo suma de importes por unidad y trimestre |

Para una tabla dinámica, partir de una lista continua con encabezados, definir los campos de filas y columnas y la operación de agregación (por ejemplo, suma). **Actualizar** la tabla dinámica cuando los datos fuente hayan cambiado y el resultado aún no los refleje.

> ⚠️ **¡Foco Examen!:** **Ordenar** puede cambiar el orden de las filas; **filtrar** solo su visibilidad. Una **tabla dinámica** no equivale a aplicar bordes ni al simple autofiltro.

### 9.2. Gráficos, impresión e intercambio

A partir de un rango de datos se puede crear un gráfico de **columnas** para comparar categorías, **líneas** para evolución temporal o **sectores** para proporciones de un total. Se distinguen **serie de datos**, **leyenda**, **títulos** y **ejes**. Una selección errónea de filas o columnas altera el gráfico.

Antes de imprimir deben comprobarse la **orientación**, el **área de impresión**, el **escalado**, los **saltos de página**, los encabezados y la vista previa. Al exportar a **PDF** se obtiene un documento de difusión que no es equivalente al libro de trabajo en **ODS**.

| Formato | Empleo principal | Límite característico |
|---|---|---|
| **ODS** | Libro de Calc editable | Mantiene hojas, fórmulas y formato del documento |
| **OTS** | Plantilla de hoja de cálculo | Sirve como base para crear documentos |
| **CSV** | Intercambio de datos tabulares en texto | No conserva un libro completo con hojas, gráficos y estilos |
| **PDF** | Publicación e impresión | No sustituye la edición del documento Calc |
| **XLSX** | Intercambio con Microsoft Excel | Debe comprobarse la compatibilidad de funciones y formatos |

> ⚠️ **¡Foco Examen!:** **CSV** no conserva las hojas y fórmulas como un libro **ODS**. Exportar **PDF** tampoco equivale a guardar un ODS editable.

### 9.3. Protección y errores

La protección de determinadas **celdas**, la protección de una **hoja** y la protección con contraseña de **apertura del archivo** son mecanismos distintos. Un error en una fórmula puede deberse a **división por cero**, **referencia no válida**, **nombre desconocido** o **tipo de dato incompatible**. Los códigos exactos para la versión estudiada se recogen en el [apéndice B de la Guía Calc 24.2](https://books.libreoffice.org/en/CG24/CG2418-CalcErrorCodes.html).

> ⚠️ **¡Foco Examen!:** **Proteger una hoja** no convierte automáticamente sus datos en información cifrada, y una fórmula errónea no implica necesariamente que el archivo esté dañado.

## 10. Fuentes verificables y situación del temario

- [Guía oficial LibreOffice Calc 24.2](https://books.libreoffice.org/en/CG24/CG24.html), publicada en **marzo de 2024**.
- [Capítulo 8: fórmulas y funciones](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html).
- [Capítulo 9: tablas dinámicas](https://books.libreoffice.org/en/CG24/CG2409-PivotTables.html).
- [Capítulo 14: Calc como base de datos](https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html).
- [Apéndice B: códigos de error](https://books.libreoffice.org/en/CG24/CG2418-CalcErrorCodes.html).

**Cobertura editorial:** se desarrollan todos los aspectos de utilización de hojas de cálculo previstos por el epígrafe oficial del **tema 19** y se dispone de **20 preguntas** documentadas. Las rutas o etiquetas de los menús y los separadores de funciones pueden variar con idioma y personalización; para datos dependientes del equipo debe comprobarse la instalación utilizada. **La prueba de interacción real en navegador no se ha ejecutado**.
