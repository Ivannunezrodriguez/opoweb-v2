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

También pueden existir seguimiento de cambios, compartir o coeditar, historial de versiones en servicios compatibles y comparación manual o mediante herramientas disponibles.

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
