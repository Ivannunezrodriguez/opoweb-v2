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

### Texto y referencias

El operador `&` concatena textos en Excel y Calc. Los dos puntos suelen indicar un rango contiguo: `A1:C10`.

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

Una **referencia mixta** fija solo la columna o solo la fila:

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
