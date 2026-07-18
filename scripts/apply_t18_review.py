from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-18'
BASE.mkdir(parents=True, exist_ok=True)
DATE = '2026-07-18'


def write(path, content):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + '\n', encoding='utf-8')


manual = r'''
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
'''

block1 = r'''
# Tema 18 · Bloque 1 · Entorno, libros, hojas, celdas, datos y formatos

**Estado:** EN REVISIÓN DEL USUARIO

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

La notación habitual A1 combina:

- letra de columna;
- número de fila.

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

Copiar o cortar puede trasladar:

- contenido;
- fórmulas;
- formato;
- comentarios;
- validación;
- dimensiones u otras propiedades según la orden.

**Pegado especial** permite elegir componentes como:

- valores;
- fórmulas;
- formatos;
- transposición de filas y columnas;
- operaciones aritméticas sobre el destino.

Pegar solo valores elimina la fórmula del resultado pegado. Es útil para fijar resultados, pero destruye la trazabilidad del cálculo en la copia.

## 7. Guardar y formatos

### Excel

Formatos relevantes:

- `.xlsx`: libro estándar Open XML sin macros VBA;
- `.xlsm`: libro habilitado para macros;
- `.xls`: formato binario heredado;
- `.xltx`: plantilla;
- `.csv`: texto delimitado, normalmente de una sola hoja;
- `.pdf`: salida de distribución, no formato editable equivalente.

### Calc

Formatos relevantes:

- `.ods`: formato OpenDocument de hoja de cálculo;
- `.ots`: plantilla;
- `.xlsx`: formato de Excel que Calc puede abrir y guardar con posibles avisos;
- `.csv`: texto delimitado;
- `.pdf`: exportación de salida.

### CSV

CSV no conserva un libro completo. Normalmente guarda:

- una sola hoja;
- texto y valores visibles;
- separadores de campos;
- sin múltiples hojas, gráficos, formato complejo ni fórmulas reutilizables como tales.

El delimitador real puede ser coma, punto y coma, tabulación u otro, según la configuración y el proceso de importación/exportación.

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
'''

block2 = r'''
# Tema 18 · Bloque 2 · Fórmulas, operadores, referencias, funciones y errores

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Fórmulas

Una fórmula calcula un resultado a partir de valores, referencias, operadores y funciones. Normalmente comienza con `=`.

Ejemplos conceptuales:

- `=A1+B1`
- `=SUMA(A1:A10)`
- `=SI(C2>=5;"Apto";"No apto")`

El separador de argumentos puede ser punto y coma o coma según la configuración regional. Los nombres de funciones también pueden aparecer localizados.

## 2. Operadores

### Aritméticos

- `+` suma;
- `-` resta o negación;
- `*` multiplicación;
- `/` división;
- `^` potencia;
- `%` porcentaje.

### Comparación

- `=` igual;
- `>` mayor que;
- `<` menor que;
- `>=` mayor o igual;
- `<=` menor o igual;
- `<>` distinto.

### Texto

El operador `&` concatena textos en Excel y Calc.

### Referencia

Los dos puntos suelen indicar un rango contiguo: `A1:C10`.

## 3. Prioridad de cálculo

Las aplicaciones respetan un orden de operaciones. Los paréntesis permiten hacerlo explícito.

No es lo mismo:

- `=A1+B1*C1`
- `=(A1+B1)*C1`

Cuando una fórmula administrativa es importante, los paréntesis mejoran la legibilidad aunque el orden implícito produzca el mismo resultado.

## 4. Referencias relativas, absolutas y mixtas

### Relativa

`A1` se ajusta al copiar la fórmula. Si una fórmula situada en C1 contiene `=A1+B1` y se copia a C2, pasará normalmente a `=A2+B2`.

### Absoluta

`$A$1` mantiene fija columna y fila al copiar.

Ejemplo: si el tipo de IVA está en `F1`, una fórmula copiada puede usar `=B2*$F$1`.

### Mixta

- `$A1`: columna fija y fila variable;
- `A$1`: columna variable y fila fija.

La tecla `F4`, durante la edición de una referencia, alterna habitualmente entre tipos de referencia en Excel y Calc.

## 5. Referencias a otras hojas

La sintaxis no es idéntica:

- Excel usa habitualmente `Hoja2!A1`;
- Calc usa habitualmente `Hoja2.A1`, pudiendo mostrar signos `$` para referencias absolutas.

Los nombres con espacios requieren una sintaxis específica de cada aplicación. Lo importante es reconocer que la fórmula depende de otra hoja y que renombrar o eliminar hojas puede afectar las referencias.

## 6. Rangos y nombres

Un rango puede utilizarse directamente o recibir un nombre.

Ventajas de un nombre:

- mejora la lectura;
- reduce referencias crípticas;
- facilita validaciones y fórmulas;
- centraliza determinados parámetros.

Un nombre mal definido o con ámbito equivocado puede producir errores o resultados inesperados.

## 7. Funciones básicas

### Agregación

- `SUMA`: suma valores;
- `PROMEDIO`: media aritmética;
- `MAX`: máximo;
- `MIN`: mínimo;
- `CONTAR`: cuenta celdas numéricas;
- `CONTARA`: cuenta celdas no vacías.

### Condicionales y lógicas

- `SI`: devuelve un resultado u otro según una condición;
- `Y`: verdadero si todas las condiciones son verdaderas;
- `O`: verdadero si alguna condición es verdadera;
- `SUMAR.SI`: suma según un criterio;
- `CONTAR.SI`: cuenta según un criterio.

### Matemáticas y fechas

- `REDONDEAR`: redondea a un número de decimales;
- `HOY`: fecha actual;
- `AHORA`: fecha y hora actuales.

No debe confundirse el redondeo visual del formato con `REDONDEAR`: el primero cambia la apariencia; la función cambia el resultado calculado.

## 8. Copiar fórmulas

Antes de copiar debe determinarse qué referencias:

- deben desplazarse;
- deben permanecer fijas;
- deben fijar solo fila o columna.

Errores típicos:

- olvidar fijar una tasa situada en una única celda;
- fijar toda la referencia cuando solo debía fijarse la fila;
- incluir una fila de encabezado en un rango;
- dejar fuera la última fila;
- copiar una fórmula sobre datos que no siguen la misma estructura.

## 9. Cálculo automático y recálculo

Normalmente las fórmulas se recalculan cuando cambian sus precedentes. Puede existir modo de cálculo automático o manual.

Si el cálculo está en modo manual, una hoja puede mostrar resultados antiguos hasta forzar el recálculo. En Calc, el cálculo automático también afecta a la actualización ordinaria de fórmulas y gráficos.

## 10. Errores de fórmula

En Excel son frecuentes:

- `#¡DIV/0!`: división entre cero o celda vacía usada como divisor;
- `#¡VALOR!`: tipo de dato inadecuado;
- `#¡REF!`: referencia no válida, a menudo tras eliminar celdas;
- `#¿NOMBRE?`: nombre de función o rango no reconocido;
- `#N/A`: valor no disponible;
- `#¡NUM!`: problema numérico;
- `#¡DESBORDAMIENTO!`: resultado matricial dinámico bloqueado, en versiones compatibles.

Calc puede mostrar errores simbólicos o códigos como `Err:509`, dependiendo del problema y de la versión. Debe interpretarse la causa, no memorizar que ambos productos presentan exactamente el mismo texto.

### `#####`

No es necesariamente un error de fórmula. Suele indicar que la columna no permite mostrar el número o la fecha, o que existe un valor temporal no representable con ese formato.

## 11. Auditoría básica

Herramientas útiles:

- mostrar fórmulas;
- rastrear precedentes y dependientes;
- comprobar referencias;
- evaluar partes de una fórmula;
- localizar errores;
- revisar totales mediante un cálculo independiente.

## 12. Errores frecuentes de examen

1. Confundir fórmula con función.
2. Olvidar el signo `=`.
3. Confundir `A1` con `$A$1`.
4. Creer que el formato de dos decimales modifica siempre el valor real.
5. Confundir `CONTAR` y `CONTARA`.
6. Pensar que `#####` equivale a `#¡VALOR!`.
7. Suponer que Excel y Calc usan siempre idéntica sintaxis entre hojas.
8. No distinguir modo automático y manual de cálculo.
'''

block3 = r'''
# Tema 18 · Bloque 3 · Formato, estilos, tablas, validación y organización visual

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Formato de celdas

El formato cambia la presentación y, en algunos casos, la interpretación de la entrada, pero no debe confundirse con el valor almacenado.

Categorías habituales:

- general;
- número;
- moneda o contabilidad;
- porcentaje;
- fecha;
- hora;
- texto;
- fracción;
- científico;
- formatos personalizados.

### Porcentajes

Si una celda contiene `0,21` y se aplica formato de porcentaje, mostrará `21 %`. Escribir `21` y aplicar porcentaje produciría normalmente `2100 %`.

### Fechas

Una fecha válida puede mostrarse como `18/07/2026`, `18-jul-26` u otra apariencia sin cambiar el valor temporal subyacente.

## 2. Formato de carácter y alineación

Puede configurarse:

- tipo y tamaño de letra;
- negrita, cursiva, subrayado;
- color de fuente y fondo;
- bordes;
- alineación horizontal y vertical;
- orientación del texto;
- ajuste de texto;
- sangría;
- combinación de celdas.

Combinar celdas puede ser útil para un título, pero dificulta ordenación, filtrado, selección y accesibilidad dentro de listas de datos.

## 3. Filas y columnas

Operaciones:

- insertar y eliminar;
- cambiar ancho o alto;
- autoajustar;
- ocultar y mostrar;
- agrupar o esquematizar;
- inmovilizar paneles o filas/columnas para mantener encabezados visibles.

Ocultar no elimina datos. Una fila oculta manualmente no es lo mismo que una fila excluida por un filtro.

## 4. Estilos

Los estilos permiten aplicar conjuntos coherentes de formato.

Ventajas:

- uniformidad;
- cambios globales;
- menor número de formatos directos distintos;
- mejor mantenimiento;
- mayor accesibilidad visual.

Excel incluye estilos de celda y formatos de tabla. Calc dispone de estilos de celda y otros recursos de estilo. Las categorías concretas no son idénticas.

## 5. Formato condicional

Aplica formato cuando se cumple una regla.

Usos:

- resaltar vencimientos;
- detectar duplicados;
- señalar importes superiores a un límite;
- aplicar escalas de color;
- usar barras de datos o conjuntos de iconos cuando estén disponibles;
- destacar fórmulas que devuelven verdadero.

El formato condicional no cambia por sí mismo el valor. Una regla mal referenciada puede desplazarse o aplicarse a un rango incorrecto.

En Calc debe estar activo el cálculo automático para que el comportamiento ordinario del formato condicional se actualice como se espera.

## 6. Tablas y rangos de datos

### Tabla de Excel

Una Tabla de Excel es un objeto estructurado que puede aportar:

- fila de encabezado;
- filtros automáticos;
- expansión al agregar registros;
- fila de totales;
- estilos propios;
- referencias estructuradas en fórmulas.

No es simplemente un rango con bordes.

### Calc

Calc trabaja con intervalos de datos, intervalos con nombre, autofiltros y rangos de base de datos. Aunque ofrece funciones comparables, no debe darse por hecho que cada Tabla de Excel se transforma sin cambios en una estructura idéntica.

## 7. Validación de datos

Restringe o guía la entrada en celdas.

Criterios habituales:

- número entero;
- decimal;
- fecha;
- hora;
- longitud de texto;
- lista de valores;
- fórmula o criterio personalizado.

Puede incluir:

- mensaje de entrada;
- aviso;
- advertencia;
- rechazo o detención del dato no válido.

La validación reduce errores, pero no garantiza por sí sola la integridad total. Copiar y pegar, importar datos o usar configuraciones permisivas puede introducir valores no válidos.

## 8. Listas desplegables

Una validación de tipo lista permite elegir entre valores autorizados.

Buenas prácticas:

- conservar la lista origen en un rango controlado;
- evitar valores ambiguos;
- definir si se permiten celdas vacías;
- no mezclar códigos y descripciones sin criterio;
- revisar el comportamiento al copiar la celda.

## 9. Protección de celdas y formato

En muchos flujos se desbloquean las celdas de entrada y se protege después la hoja. La propiedad bloqueada no produce efecto real hasta aplicar la protección correspondiente.

La protección de hoja sirve principalmente para evitar cambios accidentales o limitar operaciones. No equivale a cifrar el archivo ni garantiza confidencialidad frente a un atacante.

## 10. Errores frecuentes de examen

1. Confundir formato con valor.
2. Creer que porcentaje convierte automáticamente 21 en 21 %.
3. Usar celdas combinadas dentro de una base de datos.
4. Confundir ocultar con eliminar.
5. Considerar una Tabla de Excel como un simple dibujo de bordes.
6. Creer que validación impide cualquier dato incorrecto en todos los casos.
7. Confundir formato condicional con una fórmula que altera el valor.
8. Pensar que una celda bloqueada queda protegida sin proteger la hoja.
'''

block4 = r'''
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

Buscar y reemplazar puede actuar sobre:

- contenido;
- fórmulas;
- formatos, según la aplicación;
- una hoja o todo el libro.

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

Pueden utilizar funciones como:

- suma;
- promedio;
- cuenta;
- máximo;
- mínimo.

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
'''

block5 = r'''
# Tema 18 · Bloque 5 · Gráficos, impresión, PDF, revisión, protección y accesibilidad

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Gráficos

Un gráfico representa visualmente datos de una hoja.

Elementos habituales:

- área del gráfico;
- área de trazado;
- series de datos;
- categorías;
- ejes;
- títulos;
- leyenda;
- etiquetas de datos;
- líneas de cuadrícula;
- tabla de datos, cuando esté disponible.

## 2. Elección del tipo de gráfico

### Columnas o barras

Adecuados para comparar categorías. Las barras horizontales facilitan etiquetas largas.

### Líneas

Adecuadas para evolución temporal o secuencial. El eje debe respetar el orden cronológico.

### Circular o sectores

Muestra partes de un total. Debe usarse con pocas categorías y un único conjunto de valores. Demasiados sectores dificultan la comparación.

### Dispersión XY

Representa pares numéricos y permite analizar relación entre dos variables. No debe confundirse con un gráfico de líneas basado en categorías.

### Área, combinado y otros

Pueden ser útiles, pero deben elegirse según el mensaje. Los efectos 3D pueden distorsionar la percepción.

## 3. Origen y actualización

El gráfico depende de un rango o estructura de datos. Deben comprobarse:

- encabezados;
- filas y columnas usadas como series;
- categorías;
- celdas vacías;
- filtros;
- actualización al modificar el origen.

Un gráfico puede ignorar o tratar de forma distinta las filas ocultas o filtradas según la configuración.

## 4. Edición del gráfico

Operaciones:

- cambiar tipo;
- seleccionar datos;
- intercambiar filas y columnas;
- agregar o quitar series;
- modificar títulos y leyenda;
- dar formato a ejes;
- cambiar escala;
- agregar etiquetas;
- mover o redimensionar;
- copiar a otro documento.

Un eje truncado puede exagerar diferencias. Debe revisarse la escala, especialmente en informes públicos.

## 5. Configuración de página

Antes de imprimir se revisan:

- tamaño de papel;
- orientación vertical u horizontal;
- márgenes;
- encabezado y pie;
- área de impresión;
- saltos de página;
- escala;
- ajuste a un número de páginas;
- repetición de filas o columnas de títulos;
- impresión de cuadrícula, encabezados, comentarios u objetos según necesidad.

## 6. Área de impresión y saltos

Definir un área de impresión limita qué celdas se envían a la impresora o PDF. No elimina el resto del libro.

Los saltos manuales fuerzan divisiones. La escala puede alterar la distribución final; por ello debe comprobarse la vista previa.

## 7. Impresión

Flujo correcto:

1. seleccionar hoja o rango cuando proceda;
2. definir área de impresión;
3. comprobar orientación y papel;
4. revisar escala;
5. configurar encabezados y títulos repetidos;
6. comprobar vista previa;
7. elegir impresora y copias;
8. imprimir o generar PDF;
9. revisar el resultado.

Normalmente se imprimen los resultados de las fórmulas. Mostrar fórmulas es una vista específica que puede utilizarse para auditoría.

## 8. Exportación a PDF

PDF produce una salida estable para consulta, archivo o envío. No sustituye al libro editable.

Debe comprobarse:

- páginas incluidas;
- orientación;
- escala;
- enlaces;
- etiquetas o marcadores cuando proceda;
- accesibilidad;
- metadatos;
- calidad del archivo final.

## 9. Comentarios, notas y revisión

Excel distingue actualmente entre comentarios orientados a conversación y notas de estilo clásico. Calc utiliza comentarios de celda. La terminología puede variar por versión.

Los comentarios no forman parte del valor de la celda y pueden no imprimirse salvo configuración expresa.

También pueden existir:

- seguimiento de cambios;
- compartir o coeditar;
- historial de versiones en servicios compatibles;
- comparación manual o mediante herramientas disponibles.

## 10. Protección

Niveles conceptuales:

- bloquear determinadas celdas;
- proteger hoja;
- proteger estructura del libro;
- marcar archivo como solo lectura;
- cifrar con contraseña, cuando la función esté disponible;
- controlar permisos mediante el sistema de almacenamiento.

La protección de hoja no es una garantía criptográfica. Su finalidad principal es impedir cambios no deseados en la interfaz ordinaria.

## 11. Accesibilidad

Buenas prácticas:

- encabezados claros y únicos;
- evitar depender solo del color;
- contraste suficiente;
- texto alternativo para gráficos e imágenes;
- títulos de gráfico descriptivos;
- orden lógico de hojas y datos;
- nombres de hoja significativos;
- no abusar de celdas combinadas;
- indicar unidades;
- usar formatos de número coherentes;
- ejecutar el comprobador de accesibilidad cuando esté disponible.

## 12. Macros y contenido activo

Las macros automatizan tareas, pero pueden contener código malicioso.

Criterios:

- no habilitar macros de origen desconocido;
- diferenciar `.xlsx` y `.xlsm`;
- comprobar firmas y ubicación de confianza cuando proceda;
- no asumir compatibilidad directa entre VBA y LibreOffice Basic.

La programación de macros queda fuera del núcleo del epígrafe.

## 13. Errores frecuentes de examen

1. Confundir categorías con series.
2. Usar gráfico circular con demasiadas categorías.
3. Creer que definir área de impresión borra lo no impreso.
4. Confundir ajustar a una página con reducir el contenido real.
5. Considerar PDF el archivo editable principal.
6. Confundir comentarios con valores de celda.
7. Confundir protección de hoja con cifrado.
8. Habilitar macros solo porque el archivo parece una hoja de cálculo.
9. Omitir vista previa antes de imprimir.
'''

sources = r'''
# Tema 18 · Fuentes oficiales y trazabilidad

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Criterio

Se emplean fuentes primarias de Microsoft y The Document Foundation. Excel para Microsoft 365 y Excel 2024 son la referencia funcional de Microsoft; para Calc se utiliza la ayuda oficial vigente y la guía oficial de Calc 24.2 como apoyo estable.

## 2. Microsoft Excel

1. **Ayuda y formación de Excel**  
   https://support.microsoft.com/es-es/excel/

2. **Tareas básicas en Excel**  
   https://support.microsoft.com/es-es/excel/basic-tasks-in-excel

3. **Métodos abreviados de teclado de Excel**  
   https://support.microsoft.com/es-es/office/metodos-abreviados-de-teclado-de-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f

4. **Información general sobre fórmulas en Excel**  
   https://support.microsoft.com/es-es/office/informacion-general-sobre-formulas-en-excel-ecfdc708-9162-49e8-b993-c311f47ca173

5. **Introducir y dar formato a datos**  
   https://support.microsoft.com/es-es/excel/enter-and-format-data

6. **Ordenar datos en un rango o tabla en Excel**  
   https://support.microsoft.com/es-es/excel/sort-data-in-a-range-or-table-in-excel

7. **Aplicar la validación de datos a celdas**  
   https://support.microsoft.com/es-es/office/aplicar-la-validacion-de-datos-a-celdas-29fecbcc-d1b9-42c1-9d76-eff3ce5f7249

8. **Usar formato condicional para resaltar información en Excel**  
   https://support.microsoft.com/es-es/excel/use-conditional-formatting-to-highlight-information-in-excel

9. **Información general sobre tablas dinámicas y gráficos dinámicos**  
   https://support.microsoft.com/es-es/excel/overview-of-pivottables-and-pivotcharts

10. **Formatos de archivo que admite Excel**  
    https://support.microsoft.com/es-es/excel/file-formats-that-are-supported-in-excel

11. **Importar o exportar archivos de texto TXT o CSV**  
    https://support.microsoft.com/es-es/excel/get-started/import-or-export-text-txt-or-csv-files

12. **Proteger una hoja de cálculo**  
    https://support.microsoft.com/es-es/excel/protect-a-worksheet

13. **Guardar o convertir a PDF o XPS**  
    https://support.microsoft.com/es-es/office/guardar-o-convertir-a-pdf-o-xps-en-aplicaciones-de-escritorio-de-office

## 3. LibreOffice Calc

1. **Funcionalidades de LibreOffice Calc**  
   https://help.libreoffice.org/latest/es/text/scalc/main0503.html

2. **Combinaciones de teclas en las hojas de cálculo**  
   https://help.libreoffice.org/latest/es/text/scalc/04/01020000.html

3. **Direcciones y referencias, absolutas y relativas**  
   https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html

4. **Funciones de hoja de cálculo**  
   https://help.libreoffice.org/latest/es/text/scalc/01/04060109.html

5. **Datos: ordenar, filtrar, subtotales y tabla dinámica**  
   https://help.libreoffice.org/latest/es/text/scalc/main0112.html

6. **Validez de datos**  
   https://help.libreoffice.org/latest/es/text/scalc/01/12120000.html

7. **Formato condicional**  
   https://help.libreoffice.org/latest/es/text/scalc/01/05120000.html

8. **Crear tablas dinámicas**  
   https://help.libreoffice.org/latest/es/text/scalc/guide/datapilot_createtable.html

9. **Imprimir detalles de hojas**  
   https://help.libreoffice.org/latest/es/text/scalc/guide/print_details.html

10. **Calc Guide 24.2**  
    https://books.libreoffice.org/en/CG24/CG24.html

11. **Calc Guide 24.2 · Fórmulas y funciones**  
    https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html

12. **Calc Guide 24.2 · Gráficos**  
    https://books.libreoffice.org/en/CG24/CG2403-ChartsAndGraphs.html

13. **Calc Guide 24.2 · Tablas dinámicas**  
    https://books.libreoffice.org/en/CG24/CG2409-PivotTables.html

## 4. Trazabilidad por bloque

| Bloque | Fuentes principales |
|---|---|
| Entorno, datos y formatos | ayuda general de Excel, tareas básicas, funcionalidades de Calc y formatos de archivo |
| Fórmulas y funciones | información general sobre fórmulas, referencias de Calc y guía de fórmulas |
| Formato y validación | formato de datos, formato condicional y validez en ambos productos |
| Datos y análisis | ordenar, filtrar, subtotales y tablas dinámicas de Excel y Calc |
| Gráficos y salida | guías de gráficos, impresión, PDF, protección y accesibilidad |

## 5. Delimitación

Quedan fuera del núcleo:

- programación VBA, Office Scripts o LibreOffice Basic;
- Power Query avanzado, Power Pivot y modelos DAX;
- Solver y análisis estadístico avanzado;
- conexión profesional a bases de datos externas;
- funciones financieras o matriciales exhaustivas;
- administración empresarial de Microsoft 365;
- automatización completa mediante macros;
- arquitectura interna de XLSX u ODF;
- diseño profesional de cuadros de mando.
'''

feedback = r'''
# Tema 18 · Informe para revisión del usuario

## Estado

`EN_REVISION_USUARIO`

El tema no está publicado como aprobado. La versión pública continúa en `0.17.0` y el banco de preguntas permanece vacío.

## Epígrafe oficial

> LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.

## Cobertura incorporada

### Entorno, datos y formatos

- libro, hoja, fila, columna, celda, rango y celda activa;
- interfaz de Excel y Calc;
- creación, guardado, hojas y selección;
- tipos de datos, valor almacenado y valor mostrado;
- `.xlsx`, `.xlsm`, `.ods`, `.csv`, plantillas y PDF;
- autorrelleno, pegado especial y compatibilidad.

### Fórmulas y funciones

- operadores y prioridad;
- referencias relativas, absolutas y mixtas;
- referencias entre hojas;
- rangos y nombres;
- SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI, Y, O, SUMAR.SI y CONTAR.SI;
- errores de fórmula y cálculo automático.

### Formato y validación

- formatos numéricos, fecha, moneda y porcentaje;
- alineación, bordes, estilos y filas/columnas;
- formato condicional;
- Tabla de Excel frente a intervalos de Calc;
- validación, listas y protección de celdas.

### Datos y análisis

- estructura de listas;
- ordenación multinivel y filtros;
- buscar, reemplazar, duplicados y texto en columnas;
- importación CSV;
- subtotales, esquemas y tablas dinámicas;
- actualización del resumen.

### Gráficos y salida

- elementos y tipos de gráficos;
- selección de datos, series, categorías y ejes;
- configuración de página, área de impresión y saltos;
- impresión y PDF;
- comentarios, protección, accesibilidad y riesgo de macros.

## Delimitaciones

No se desarrolla íntegramente:

- VBA, Office Scripts ni LibreOffice Basic;
- Power Query o Power Pivot avanzados;
- DAX;
- Solver y estadística avanzada;
- conexiones profesionales a bases de datos;
- funciones exhaustivas;
- cuadros de mando profesionales.

## Comprobaciones solicitadas

Revisa especialmente:

1. si distingues libro, hoja, celda y rango;
2. si queda clara la diferencia entre valor y formato;
3. si comprendes `.xlsx`, `.xlsm`, `.ods` y `.csv`;
4. si distingues borrar contenido y eliminar celdas;
5. si comprendes referencia relativa, absoluta y mixta;
6. si sabes por qué se utiliza `$A$1`;
7. si distingues formato visual y función REDONDEAR;
8. si comprendes errores como `#¡REF!` y `#####`;
9. si queda clara la Tabla de Excel frente a un rango de Calc;
10. si entiendes validación y sus límites;
11. si distingues ordenar, filtrar y ocultar;
12. si sabes por qué no debe ordenarse una columna aislada;
13. si comprendes subtotales y tablas dinámicas;
14. si distingues series y categorías de un gráfico;
15. si queda clara la diferencia entre proteger hoja y cifrar;
16. si el nivel es adecuado para un examen C2.

## Cierre

La respuesta debe ser una de estas:

- **«Tema 18 aprobado»**
- **«Tema 18: cambia o amplía…»**

No se fusionará mientras permanezca en `EN_REVISION_USUARIO`.
'''

matrix = {
    "tema": 18,
    "estado": "EN_REVISION_USUARIO",
    "epigrafeOficial": "LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.",
    "fechaRevisionTecnica": DATE,
    "referenciasPrincipales": [
        "Microsoft Excel para Microsoft 365 y Excel 2024",
        "LibreOffice Calc, ayuda oficial vigente"
    ],
    "manual": "content/la-puebla/tema-18/manual.md",
    "capitulos": [
        "content/la-puebla/tema-18/bloque-01-entorno-datos-formatos.md",
        "content/la-puebla/tema-18/bloque-02-formulas-funciones.md",
        "content/la-puebla/tema-18/bloque-03-formato-validacion.md",
        "content/la-puebla/tema-18/bloque-04-datos-analisis.md",
        "content/la-puebla/tema-18/bloque-05-graficos-salida.md"
    ],
    "trazabilidad": "content/la-puebla/tema-18/fuentes.md",
    "cobertura": [
        {
            "inciso": "LibreOffice y Microsoft Office",
            "fuentes": ["Ayuda y formación de Excel", "Funcionalidades de LibreOffice Calc"],
            "secciones": ["interfaz", "libro", "hoja", "celda", "rango", "formatos", "compatibilidad"],
            "contenidoExigible": ["identificar Excel y Calc", "distinguir libro y hoja", "usar formatos nativos", "comprender CSV y PDF"]
        },
        {
            "inciso": "Elaboración de hojas de cálculo",
            "fuentes": ["Tareas básicas en Excel", "Calc Guide 24.2"],
            "secciones": ["entrada de datos", "autorrelleno", "edición", "hojas", "formato"],
            "contenidoExigible": ["crear y guardar", "introducir y editar datos", "organizar hojas", "aplicar formatos"]
        },
        {
            "inciso": "Fórmulas y funciones",
            "fuentes": ["Información general sobre fórmulas en Excel", "Direcciones y referencias, absolutas y relativas"],
            "secciones": ["operadores", "referencias relativas", "referencias absolutas", "funciones", "errores"],
            "contenidoExigible": ["escribir fórmulas", "copiar referencias correctamente", "usar funciones básicas", "interpretar errores"]
        },
        {
            "inciso": "Uso y análisis de datos",
            "fuentes": ["Ordenar datos en un rango o tabla", "Datos: ordenar, filtrar, subtotales y tabla dinámica"],
            "secciones": ["validación", "ordenación", "filtros", "subtotales", "tablas dinámicas", "CSV"],
            "contenidoExigible": ["mantener integridad de registros", "filtrar sin eliminar", "validar entradas", "resumir datos"]
        },
        {
            "inciso": "Representación y salida",
            "fuentes": ["Información general sobre tablas dinámicas y gráficos dinámicos", "Calc Guide 24.2 · Gráficos", "Imprimir detalles de hojas"],
            "secciones": ["gráficos", "configuración de página", "impresión", "PDF", "protección", "accesibilidad"],
            "contenidoExigible": ["elegir gráfico adecuado", "configurar impresión", "exportar a PDF", "distinguir protección y cifrado"]
        }
    ],
    "atajosComparados": [
        {"accion": "guardar", "excel": "Ctrl + G o Ctrl + S según localización/documentación", "calc": "Ctrl + G en configuración española habitual"},
        {"accion": "copiar", "excel": "Ctrl + C", "calc": "Ctrl + C"},
        {"accion": "cortar", "excel": "Ctrl + X", "calc": "Ctrl + X"},
        {"accion": "pegar", "excel": "Ctrl + V", "calc": "Ctrl + V"},
        {"accion": "deshacer", "excel": "Ctrl + Z", "calc": "Ctrl + Z"},
        {"accion": "rehacer", "excel": "Ctrl + Y", "calc": "Ctrl + Y"},
        {"accion": "buscar", "excel": "Ctrl + B o Ctrl + F según localización/contexto", "calc": "Ctrl + B en configuración española habitual"},
        {"accion": "editar celda", "excel": "F2", "calc": "F2"},
        {"accion": "alternar referencias", "excel": "F4 durante edición", "calc": "F4 durante edición"},
        {"accion": "formato de celdas", "excel": "Ctrl + 1", "calc": "Ctrl + 1"},
        {"accion": "insertar fecha actual", "excel": "Ctrl + ;", "calc": "Ctrl + ; según configuración"},
        {"accion": "mostrar fórmulas", "excel": "Ctrl + ` según teclado", "calc": "Ctrl + ` o configuración equivalente según entorno"}
    ],
    "diferenciasClave": [
        {"materia": "formato nativo", "excel": ".xlsx", "calc": ".ods"},
        {"materia": "referencia entre hojas", "excel": "Hoja2!A1", "calc": "Hoja2.A1"},
        {"materia": "tabla estructurada", "excel": "objeto Tabla", "calc": "intervalos y rangos de datos no idénticos"},
        {"materia": "tabla dinámica", "excel": "Tabla dinámica", "calc": "Tabla dinámica, históricamente DataPilot"},
        {"materia": "macros", "excel": "VBA y .xlsm", "calc": "LibreOffice Basic y compatibilidad no equivalente"}
    ],
    "exclusionesDelNucleo": [
        "VBA, Office Scripts y LibreOffice Basic",
        "Power Query avanzado",
        "Power Pivot y DAX",
        "Solver y estadística avanzada",
        "conexiones profesionales a bases de datos",
        "funciones exhaustivas",
        "cuadros de mando profesionales"
    ],
    "criterioDeCierre": "Requiere revisión humana y la expresión Tema 18 aprobado. No se aprueba por extensión, número de funciones ni validación técnica."
}

questions = {
    "tema": 18,
    "estado": "NO_CREADAS_HASTA_APROBACION_TEORICA",
    "preguntas": [],
    "nota": "No se crean preguntas para aumentar métricas. Tras aprobar el manual, cada pregunta deberá vincularse a una operación concreta y a una fuente oficial de Microsoft o LibreOffice."
}

write(BASE / 'manual.md', manual)
write(BASE / 'bloque-01-entorno-datos-formatos.md', block1)
write(BASE / 'bloque-02-formulas-funciones.md', block2)
write(BASE / 'bloque-03-formato-validacion.md', block3)
write(BASE / 'bloque-04-datos-analisis.md', block4)
write(BASE / 'bloque-05-graficos-salida.md', block5)
write(BASE / 'fuentes.md', sources)
write(BASE / 'feedback.md', feedback)
write(BASE / 'matriz.json', json.dumps(matrix, ensure_ascii=False, indent=2))
write(BASE / 'preguntas.json', json.dumps(questions, ensure_ascii=False, indent=2))

programme_path = ROOT / 'data/programa.json'
programme = json.loads(programme_path.read_text(encoding='utf-8'))
for theme in programme['temas']:
    if theme['numero'] == 18:
        theme.clear()
        theme.update({
            "numero": 18,
            "titulo": "LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.",
            "estado": "EN_REVISION_USUARIO",
            "manual": "content/la-puebla/tema-18/manual.md",
            "capitulos": [
                "content/la-puebla/tema-18/bloque-01-entorno-datos-formatos.md",
                "content/la-puebla/tema-18/bloque-02-formulas-funciones.md",
                "content/la-puebla/tema-18/bloque-03-formato-validacion.md",
                "content/la-puebla/tema-18/bloque-04-datos-analisis.md",
                "content/la-puebla/tema-18/bloque-05-graficos-salida.md"
            ],
            "matriz": "content/la-puebla/tema-18/matriz.json",
            "feedback": "content/la-puebla/tema-18/feedback.md",
            "preguntas": "content/la-puebla/tema-18/preguntas.json",
            "trazabilidad": "content/la-puebla/tema-18/fuentes.md"
        })
        break
else:
    raise RuntimeError('No existe el Tema 18')
programme_path.write_text(json.dumps(programme, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

validation = r'''
import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.17.0');
assert.equal(packageJson.version, '0.17.0');
assert.ok(index.includes('v0.17.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
assert.deepEqual(review.map(t => t.numero), [18]);
assert.deepEqual(pending.map(t => t.numero), [19]);
assert.ok(!programme.temas[18].manual);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t18 = programme.temas[17];
const base18 = 'content/la-puebla/tema-18';
const matrix18 = json(`${base18}/matriz.json`);
const questions18 = json(`${base18}/preguntas.json`);
assert.equal(t18.capitulos.length, 5);
assert.equal(matrix18.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix18.cobertura.length, 5);
assert.equal(matrix18.atajosComparados.length, 12);
assert.equal(matrix18.diferenciasClave.length, 5);
assert.equal(questions18.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions18.preguntas, []);
assert.ok(read(`${base18}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base18}/feedback.md`).includes('Tema 18 aprobado'));

const files18 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-datos-formatos.md','bloque-02-formulas-funciones.md',
  'bloque-03-formato-validacion.md','bloque-04-datos-analisis.md',
  'bloque-05-graficos-salida.md'
];
for (const file of files18) {
  assert.ok(exists(`${base18}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base18}/${file}`), `Tema 18 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined18 = files18.filter(f => f.endsWith('.md')).map(f => read(`${base18}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft excel','libreoffice calc','xlsx','ods','csv','referencia relativa',
  'referencia absoluta','referencia mixta','formato condicional','validación de datos',
  'tabla de excel','tabla dinámica','piloto de datos','gráfico','área de impresión',
  'proteger hoja','texto alternativo'
]) {
  assert.ok(joined18.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Excel','Información general sobre fórmulas en Excel',
  'Direcciones y referencias, absolutas y relativas','Crear tablas dinámicas',
  'Calc Guide 24.2 · Gráficos'
]) {
  assert.ok(read(`${base18}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.17.0'"));
assert.equal(exists('.github/workflows/apply-t18-review.yml'), false);
assert.equal(exists('scripts/apply_t18_review.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme18Questions: questions18.preguntas.length,
  status: 'TEMA_18_EN_REVISION_VALIDADO'
}, null, 2));
'''
write(ROOT / 'tests/validate.mjs', validation)

for temp in [ROOT / '.github/workflows/apply-t18-review.yml', ROOT / 'scripts/apply_t18_review.py']:
    if temp.exists():
        temp.unlink()
