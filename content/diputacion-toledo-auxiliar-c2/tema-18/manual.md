# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 18

**ESTADO EDITORIAL: BORRADOR ESPECÍFICO PARCIAL, PENDIENTE DE AMPLIACIÓN Y AUDITORÍA FUNCIONAL.**

## 1. Epígrafe oficial literal

> **Tema 18. LibreOffice 24 I. Utilización de documentos de texto con LibreOffice 24 Writer.**

**Fuente:** BOP Toledo **n.º 197, 14/10/2026**, **Anexo XI**, CSV **2026.00004759**.

## 2. Producto y documentación de versión

Writer es el procesador de textos de LibreOffice. El formato abierto nativo es **ODT** y el de plantilla **OTT**. Puede exportar a PDF y manejar DOCX, sujeto a compatibilidad.

**Guía oficial de Writer para LibreOffice 24.2:** https://books.libreoffice.org/en/WG24/

Se utiliza como referencia **LibreOffice 24.2**, de la rama **24**. El epígrafe no especifica subversión. **No** se incorpora como materia principal Microsoft Word ni Excel. El contenido que sigue es un **núcleo inicial**, no reemplaza la guía del fabricante ni el desarrollo práctico completo.

## 3. Estructura de los documentos de Writer 24

- **Documento**: conjunto de párrafos, tablas, imágenes, secciones y objetos editables.
- **Párrafo**: unidad de texto terminada por una marca de párrafo; sus propiedades afectan a alineación, sangrías y espaciados.
- **Estilo de párrafo**: conjunto de atributos nombrado y reutilizable; facilita coherencia e índices automáticos.
- **Estilo de carácter**: reglas aplicadas a fragmentos de texto.
- **Estilo de página**: rige disposición, tamaño, márgenes, encabezados y pies.
- **Plantilla**: archivo base reutilizable, con formatos y elementos comunes.

### 3.1. Crear, abrir y guardar

Un documento puede crearse, abrirse, editarse y guardarse como **ODT**, o exportarse a **PDF** cuando no se pretende una edición ordinaria posterior. **Guardar como** no equivale a exportar; el resultado depende del formato elegido.

### 3.2. Edición y búsqueda

- Seleccionar caracteres, palabras, párrafos y fragmentos.
- **Cortar** mueve el contenido al portapapeles; **copiar** conserva el original; **pegar** inserta contenido.
- **Buscar y reemplazar** permite localizar y sustituir coincidencias según condiciones elegidas.
- **Deshacer** revierte operaciones recientes cuando estén disponibles; **Rehacer** las restaura.

### 3.3. Formato del documento

| Concepto | Aplicación |
|---|---|
| **Formato directo** | Cambios aplicados a una selección concreta |
| **Estilo** | Conjunto reutilizable de propiedades con nombre |
| **Lista** | Numeración o viñetas administradas como estructura |
| **Tabla** | Filas y columnas con celdas para distribuir contenido |
| **Salto de página** | Fuerza inicio de contenido en la página siguiente |
| **Campo** | Elemento dinámico como número de página o fecha, según configuración |

### 3.4. Diseño de página

- Configurar márgenes, orientación, tamaño de página y columnas según estilos de página.
- Insertar encabezados, pies, numeración y tablas.
- Insertar imágenes y controlar el anclaje y ajuste del texto.
- Emplear estilos de encabezado para crear tablas de contenido automáticas.

### 3.5. Revisión y salida

- Usar comprobación ortográfica, autocorrección y revisión con **control de cambios**.
- Preparar combinación de correspondencia a partir de una fuente de datos compatible.
- Configurar impresión, rangos de páginas y exportación a PDF.

> ⚠️ **¡Foco Examen!:** En **Writer**, la configuración de páginas distintas se apoya en **estilos de página**; no debe responderse con la lógica de **secciones de Microsoft Word**.


## 4. Auditoría y ampliaciones pendientes

1. Verificar rutas exactas de menús, botones y atajos en **LibreOffice 24** bajo Windows.
2. Desarrollar apartados avanzados documentados en la guía **24.2** sin reutilizar instrucciones específicas de Microsoft Office.
3. Elaborar ejercicios resueltos y preguntas vinculadas a los capítulos del fabricante.
4. Comprobar formatos, valores y opciones dependientes de la configuración de idioma, tipo de archivo y plataforma.

**No marcar este tema PUBLICADO hasta completar estos controles.**


---

## 6. Funciones de Writer 24.2 contrastadas con su guía oficial (ampliación)

La **Guía Writer 24.2** de The Document Foundation está organizada en capítulos de edición, páginas, estilos, plantillas, tablas, correspondencia, índices, campos y formularios. Las secciones siguientes explican esos conceptos y enlazan el capítulo que los desarrolla. **No se atribuyen rutas de menú no comprobadas**.

### 6.1. Edición frente a formato y estructura

- **Edición**: insertar, borrar, copiar, mover y sustituir contenido; operaciones que cambian el texto.
- **Formato directo**: establece un atributo concreto sobre un fragmento seleccionado.
- **Estilo de párrafo**: define propiedades repetibles de párrafo; permite mantener consistencia en documentos largos.
- **Estilo de carácter**: aplica propiedades a una secuencia de caracteres sin sustituir el estilo del párrafo.
- **Estilo de página**: define el formato de las páginas asociadas, incluidos elementos como márgenes, encabezados y pies.
- **Plantilla**: documento base con contenido y configuración reutilizables.

| Acción | Cambia el texto | Cambia el aspecto | Afecta a la estructura |
|---|---|---|---|
| Reemplazar una palabra | Sí | No necesariamente | No necesariamente |
| Aplicar negrita | No | Sí | No necesariamente |
| Aplicar estilo de Título 1 | No | Sí | Sí, al estructurar encabezados |
| Insertar tabla | Sí, el contenido del documento | Puede | Sí |
| Aplicar un estilo de página | No | Sí | Sí, distribución de páginas |

**Referencia:** [Writer 24.2, capítulos 2, 4, 5, 8, 9 y 10](https://books.libreoffice.org/en/WG24/WG24.html).

> ⚠️ **¡Foco Examen!:** Un **título visual** escrito en negrita no equivale necesariamente a un **encabezado estructural** con estilo de título. Esta diferencia influye en la generación automática de índices.

### 6.2. Saltos, páginas y numeración

En Writer deben diferenciarse:

- **Salto de línea:** continúa el texto en la línea siguiente dentro del mismo párrafo.
- **Salto de párrafo:** termina un párrafo e inicia otro.
- **Salto de página:** traslada el contenido siguiente a una nueva página.
- **Estilo de página:** permite establecer características para páginas o secuencias de páginas distintas.
- **Campo de número de página:** contenido dinámico asociado a la paginación.

**Supuesto administrativo:** un documento contiene portada y cuerpo principal con distinta presentación. El usuario debe distinguir entre modificar márgenes en todo el documento y aplicar **estilos de página** adecuados a cada parte.

**Referencia:** [Guía Writer 24.2, capítulos 5 y 6](https://books.libreoffice.org/en/WG24/WG24.html).

> ⚠️ **¡Foco Examen!:** Insertar un **salto de página** no es lo mismo que cambiar el **estilo de página**; un salto no garantiza por sí solo márgenes diferentes.

### 6.3. Tablas, imágenes y objetos

Las **tablas** distribuyen información en filas y columnas con celdas; no son imágenes estáticas. Las imágenes insertadas o vinculadas pueden contar con propiedades de tamaño, posición, anclaje y ajuste del texto según el documento y su configuración. Los **objetos incrustados** tienen comportamiento distinto del texto o de una imagen simple.

| Objeto | Función principal | Riesgo frecuente en test |
|---|---|---|
| Tabla | Distribuir información editable en celdas | Confundir tabla con tabulaciones o imagen |
| Imagen | Insertar elemento gráfico | Confundir anclaje y ajuste del texto |
| Campo | Mostrar información dinámica | Confundir campo con texto fijo |
| Forma | Representar elemento gráfico editable | Confundir forma con imagen de mapa de bits |

**Referencia:** [Guía Writer 24.2, capítulos 11, 13, 17 y 19](https://books.libreoffice.org/en/WG24/WG24.html).

### 6.4. Combinar correspondencia y generar índices

- **Combinar correspondencia** permite producir documentos personalizados a partir de un modelo y una fuente de datos. La fuente puede contener, por ejemplo, nombre, dirección o localidad de cada destinatario.
- **Tabla de contenido** puede construirse a partir de la estructura de encabezados del documento.
- **Índice alfabético** no es equivalente a una tabla de contenido: responde a otras entradas y criterios.
- **Documento maestro** permite organizar proyectos extensos con otros documentos.

**Referencia:** [Guía Writer 24.2, capítulos 14 a 16](https://books.libreoffice.org/en/WG24/WG24.html).

> ⚠️ **¡Foco Examen!:** En una **combinación de correspondencia**, el documento modelo y la **fuente de datos** son elementos distintos. Una tabla de contenido no debe confundirse con un índice alfabético.

### 6.5. Imprimir, publicar y exportar

- **Guardar** mantiene el documento en un formato editable compatible.
- **Guardar como** permite seleccionar otro nombre, ubicación o formato cuando se admita.
- **Exportar a PDF** crea un archivo PDF separado, sin transformar necesariamente el original editable en PDF.
- **Imprimir** envía el contenido a un dispositivo o destino de impresión seleccionado.
- **Firma digital** y **protección por contraseña** no son sinónimos y proporcionan controles diferentes.

**Referencia:** [Guía Writer 24.2, capítulo 7](https://books.libreoffice.org/en/WG24/WG24.html).

## 7. Práctica guiada de examen — Writer 24

**Caso de entrenamiento (ejemplo didáctico propio, no pregunta oficial):** una oficina necesita elaborar 50 cartas con el mismo cuerpo y datos individuales.

1. Crear un modelo de carta en Writer.
2. Definir estilos de título, texto y página de forma consistente.
3. Preparar o vincular una fuente de datos con los destinatarios.
4. Utilizar la función de **combinación de correspondencia** para personalizar cada carta.
5. Revisar datos, formato, encabezado y pie.
6. Preparar salida impresa o exportación PDF cuando proceda.

**Solución conceptual:** se usa **combinación de correspondencia**, no se editan manualmente 50 cartas una por una.

**Cierre pendiente:** cotejar rutas concretas de la interfaz española para cada paso de la versión instalada en el examen.
