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
- negrita, cursiva y subrayado;
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
- inmovilizar paneles o filas y columnas para mantener encabezados visibles.

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
