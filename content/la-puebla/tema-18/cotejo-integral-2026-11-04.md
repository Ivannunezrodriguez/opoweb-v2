# La Puebla de Montalbán · Tema 18 · Cotejo técnico-editorial completo del banco

**Fecha: 04/11/2026.** Programa oficial BOP Toledo n.º 82, de **05/05/2026**, Anexo I, tema 18: Excel y LibreOffice Calc.

## 1. Fuentes primarias y alcance

- Manual modular y cinco bloques sobre entorno, referencias y fórmulas, formatos, tratamiento de datos e impresión/gráficos.
- **12 preguntas, 48 alternativas** de `preguntas.json`, con clave, justificación y referencia.
- [Microsoft: REDONDEAR](https://support.microsoft.com/es-es/excel/functions/round-function) y [distinción de valor frente a formato](https://support.microsoft.com/es-es/excel/stop-rounding-numbers).
- [Microsoft: exportar Excel a CSV](https://support.microsoft.com/es-es/excel/save-a-workbook-to-text-format-txt-or-csv) y [LibreOffice: CSV exporta solo hoja actual](https://help.libreoffice.org/latest/es/text/scalc/guide/csv_files.html).
- [Microsoft: qué se pierde con CSV](https://support.microsoft.com/es-es/excel/excel-formatting-and-features-that-are-not-transferred-to-other-file-formats).

| Concepto | Comportamiento correcto |
|---|---|
| Rango | `A1:C10` abarca un rectángulo contiguo de celdas |
| Relativa vs. absoluta | `A1` se ajusta al copiar; `$A$1` fija columna y fila |
| Contar vs. CONTARA | **CONTAR**: solo números; **CONTARA**: celdas no vacías |
| Formato vs. REDONDEAR | Formato cambia visualización; REDONDEAR devuelve resultado calculado |
| Filtrar vs. eliminar | Filtrar oculta temporalmente; eliminar modifica o suprime registros |
| CSV vs. libro | CSV **no** es hoja o libro; contiene texto tabular y exporta solo datos de hoja activa |

> ⚠️ **¡Foco Examen!:** Mostrar **2 decimales** con formato no significa que se calcule utilizando solo dos: Excel usa el valor almacenado, salvo funciones/opciones específicas que modifiquen el valor de cálculo.

## 2. Las 48 alternativas

### LP-T18-001 — ¿Cuál es el formato nativo habitual de un libro de Microsoft Excel?

**Correcta: C**. **Literal:** .xlsx. **Manual:** manual.md, apartado 5 · Diferencias esenciales.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | .ods | **Incorrecta.** ODS es el formato de Calc, no nativo de Excel. |
| **B** | .odt | **Incorrecta.** ODT corresponde a documentos de texto Writer. |
| **C** | .xlsx | **Correcta.** XLSX es formato habitual de libro Excel sin macros. |
| **D** | .xlt | **Incorrecta.** XLT es plantilla Excel heredada; no formato típico de libro actual. |

> ⚠️ **¡Foco Examen!:** No debe confundirse el formato de libro de Excel con el formato nativo de Calc.

### LP-T18-002 — ¿Qué representa la referencia A1:C10 en una hoja de cálculo?

**Correcta: A**. **Literal:** Un rango contiguo de celdas. **Manual:** manual.md, apartado 2 · Elementos básicos.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Un rango contiguo de celdas | **Correcta.** A1:C10 es una zona rectangular contigua. |
| **B** | Una fórmula matricial | **Incorrecta.** No indica que la fórmula sea matricial. |
| **C** | Una hoja completa | **Incorrecta.** No representa toda la hoja sino columnas A-C y filas 1-10. |
| **D** | Una referencia absoluta | **Incorrecta.** No contiene signos $, por tanto no describe referencia absoluta. |

> ⚠️ **¡Foco Examen!:** Un rango no es una fórmula ni implica por sí mismo que las referencias sean absolutas.

### LP-T18-003 — Al copiar una fórmula, ¿qué ocurre normalmente con una referencia relativa como A1?

**Correcta: D**. **Literal:** Se ajusta según el desplazamiento. **Manual:** bloque-02-formulas-funciones.md, apartado 4 · Referencias relativas.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Permanece siempre fija | **Incorrecta.** Una referencia relativa se desplaza al copiar la fórmula. |
| **B** | Se convierte automáticamente en $A$1 | **Incorrecta.** La sintaxis $A$1 designa fijación doble, no se introduce al copiar sin más. |
| **C** | Se elimina de la fórmula | **Incorrecta.** La referencia no desaparece por el mero hecho de copiar. |
| **D** | Se ajusta según el desplazamiento | **Correcta.** A1 es relativa, se ajusta por desplazamiento de fila/columna. |

> ⚠️ **¡Foco Examen!:** La referencia relativa no permanece fija; para ello debe emplearse una referencia absoluta o mixta.

### LP-T18-004 — ¿Qué indica la referencia $A$1?

**Correcta: B**. **Literal:** Columna y fila absolutas. **Manual:** bloque-02-formulas-funciones.md, apartado 4 · Referencia absoluta.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Solo columna absoluta | **Incorrecta.** Solo columna absoluta sería $A1. |
| **B** | Columna y fila absolutas | **Correcta.** $A$1 fija columna A y fila 1. |
| **C** | Solo fila absoluta | **Incorrecta.** Solo fila absoluta sería A$1. |
| **D** | Referencia a otra hoja | **Incorrecta.** Referencia a otra hoja exige un identificador de hoja aparte. |

> ⚠️ **¡Foco Examen!:** $A1 y A$1 son referencias mixtas; únicamente $A$1 fija columna y fila.

### LP-T18-005 — ¿Qué función cuenta únicamente celdas que contienen valores numéricos?

**Correcta: D**. **Literal:** CONTAR. **Manual:** bloque-02-formulas-funciones.md, apartado 7 · Funciones básicas.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | CONTARA | **Incorrecta.** CONTARA incluye otros contenidos no vacíos, no solo números. |
| **B** | SUMA | **Incorrecta.** SUMA añade valores, no cuenta celdas numéricas. |
| **C** | PROMEDIO | **Incorrecta.** PROMEDIO calcula media, no el recuento de números. |
| **D** | CONTAR | **Correcta.** CONTAR cuenta celdas con valores numéricos. |

> ⚠️ **¡Foco Examen!:** CONTAR y CONTARA no son equivalentes: la segunda también contabiliza texto y otros valores no vacíos.

### LP-T18-006 — ¿Qué diferencia existe entre aplicar formato de dos decimales y utilizar la función REDONDEAR?

**Correcta: B**. **Literal:** El formato cambia la apariencia; REDONDEAR cambia el resultado calculado. **Manual:** bloque-02-formulas-funciones.md, apartado 7 · Matemáticas y fechas.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Ambos modifican siempre el valor almacenado | **Incorrecta.** El formato normalmente no altera el valor almacenado; REDONDEAR devuelve resultado numérico distinto. |
| **B** | El formato cambia la apariencia; REDONDEAR cambia el resultado calculado | **Correcta.** Es la distinción entre presentación y cálculo. |
| **C** | El formato elimina decimales del cálculo | **Incorrecta.** Formato a dos decimales no elimina automáticamente la precisión del cálculo. |
| **D** | REDONDEAR solo cambia la apariencia | **Incorrecta.** REDONDEAR sí cambia el resultado de la fórmula, no solo aspecto. |

> ⚠️ **¡Foco Examen!:** Mostrar menos decimales no significa que el valor real utilizado en los cálculos haya cambiado.

### LP-T18-007 — ¿Qué suele significar el error #¡DIV/0!?

**Correcta: A**. **Literal:** División entre cero o divisor vacío. **Manual:** bloque-02-formulas-funciones.md, apartado 10 · Errores de fórmula.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | División entre cero o divisor vacío | **Correcta.** #¡DIV/0! denota división por cero o divisor vacío tratado como cero. |
| **B** | Referencia eliminada | **Incorrecta.** La referencia eliminada genera típicamente #¡REF!. |
| **C** | Nombre de función desconocido | **Incorrecta.** Un nombre de función no reconocido produce típicamente #¿NOMBRE?. |
| **D** | Columna demasiado estrecha | **Incorrecta.** Ancho insuficiente suele provocar ##### en pantalla. |

> ⚠️ **¡Foco Examen!:** Una columna estrecha suele mostrar #####, no el error #¡DIV/0!.

### LP-T18-008 — ¿La aparición de ##### en una celda indica necesariamente que la fórmula es incorrecta?

**Correcta: B**. **Literal:** No; puede deberse a que la columna es demasiado estrecha. **Manual:** bloque-02-formulas-funciones.md, apartado 10 · #####.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Sí; siempre es un error de referencia | **Incorrecta.** ##### no prueba un fallo de referencia. |
| **B** | No; puede deberse a que la columna es demasiado estrecha | **Correcta.** La columna estrecha puede provocar ##### aunque el valor sea válido. |
| **C** | Sí; siempre existe división entre cero | **Incorrecta.** Dividir por cero genera #¡DIV/0!, no ese símbolo. |
| **D** | No; indica que la celda está protegida | **Incorrecta.** La protección de celda no se anuncia normalmente con #####. |

> ⚠️ **¡Foco Examen!:** No debe equipararse ##### a un error de fórmula como #¡VALOR! o #¡REF!.

### LP-T18-009 — ¿Qué riesgo existe al ordenar solo una columna de una tabla de registros?

**Correcta: D**. **Literal:** Romper la correspondencia entre los datos de cada fila. **Manual:** manual.md, apartado 6 · Flujo de trabajo administrativo.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Convertir las fórmulas en valores | **Incorrecta.** Ordenar una columna no convierte automáticamente las fórmulas en valores. |
| **B** | Eliminar automáticamente los duplicados | **Incorrecta.** Ordenar no equivale a eliminar duplicados. |
| **C** | Bloquear el libro | **Incorrecta.** Ordenar no bloquea el libro. |
| **D** | Romper la correspondencia entre los datos de cada fila | **Correcta.** Se desalinean columnas con los campos de cada registro si solo se ordena una por separado. |

> ⚠️ **¡Foco Examen!:** La ordenación debe aplicarse al conjunto de la tabla, no a un campo aislado sin ampliar la selección.

### LP-T18-010 — ¿Cuál es la diferencia correcta entre filtrar y eliminar datos?

**Correcta: C**. **Literal:** Filtrar oculta temporalmente filas que no cumplen el criterio; eliminar borra contenido o registros. **Manual:** manual.md, apartado 7 · Principios de calidad.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Ambas acciones borran definitivamente | **Incorrecta.** Filtrar no borra definitivamente los registros. |
| **B** | Filtrar cambia el valor de las celdas | **Incorrecta.** Filtrar oculta filas de la vista, no altera por sí el valor. |
| **C** | Filtrar oculta temporalmente filas que no cumplen el criterio; eliminar borra contenido o registros | **Correcta.** Filtrado es selección temporal; eliminación modifica o quita datos. |
| **D** | Eliminar solo modifica la vista | **Incorrecta.** Eliminar no significa solo ocultar. |

> ⚠️ **¡Foco Examen!:** Ocultar, filtrar y eliminar son operaciones distintas y no deben tratarse como sinónimos.

### LP-T18-011 — ¿Qué afirmación es correcta sobre una tabla dinámica?

**Correcta: C**. **Literal:** Resume y reorganiza datos sin sustituir necesariamente a la tabla de origen. **Manual:** manual.md, apartado 5 · Diferencias esenciales.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Convierte automáticamente el libro en PDF | **Incorrecta.** Crear tabla dinámica no exporta necesariamente a PDF. |
| **B** | Solo existe en Excel | **Incorrecta.** Calc también dispone de tablas dinámicas. |
| **C** | Resume y reorganiza datos sin sustituir necesariamente a la tabla de origen | **Correcta.** La tabla dinámica resume y reagrupa origen; no lo sustituye necesariamente. |
| **D** | Elimina los datos originales al actualizarse | **Incorrecta.** Actualizar tabla dinámica no elimina por definición el origen. |

> ⚠️ **¡Foco Examen!:** Calc también dispone de tabla dinámica, denominada históricamente Piloto de datos o DataPilot.

### LP-T18-012 — ¿Cuál es la naturaleza correcta de un archivo CSV respecto de una hoja de cálculo?

**Correcta: A**. **Literal:** Es texto tabular sin estructura de libro ni varias hojas. **Manual:** manual.md, apartado 7 · Principios de calidad.

| Opción | Literal | Dictamen |
|---|---|---|
| **A** | Es texto tabular sin estructura de libro ni varias hojas | **Correcta.** CSV es texto delimitado con datos tabulares; no contiene libro o varias hojas. |
| **B** | Puede almacenar varias hojas y gráficos | **Incorrecta.** No representa un documento multih oja con gráficos. |
| **C** | Conserva todas las fórmulas y formatos | **Incorrecta.** CSV no conserva fórmulas/formatos como funcionalidad del libro. |
| **D** | Es el formato nativo de Calc | **Incorrecta.** ODS es formato nativo Calc, no CSV. |

> ⚠️ **¡Foco Examen!:** CSV no es una hoja de cálculo nativa: al exportar se limita a los datos de la hoja activa y se pierden las demás hojas y funcionalidades del libro.

## 3. Cambios y cautelas

- **Corrección de precisión en LP-T18-012**: se sustituye «una sola hoja» por «texto tabular sin estructura de libro ni varias hojas». Al **exportar**, sí se utilizan **los datos de la hoja activa**; el CSV resultante no tiene hojas como objetos.
- El mismo matiz se ha corregido en `manual.md` y `bloque-01-entorno-datos-formatos.md`.
- **Resultado:** **12/12** respuestas y **48/48** alternativas cotejadas; no se ha detectado otra clave igualmente defendible con el enunciado actual.
- **Límite:** cotejo de contenidos y banco; la certificación de la ejecución real del test y de la web en móvil/PC sigue pendiente.
