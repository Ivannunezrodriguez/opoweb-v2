# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 18

**ESTADO EDITORIAL: CONTENIDO COMPLETO — revisión documental Writer 24.2 de 29/10/2026.**

## 1. Epígrafe oficial literal

> **Tema 18. LibreOffice 24 I. Utilización de documentos de texto con LibreOffice 24 Writer.**

**Fuente:** BOP Toledo **n.º 197, 14/10/2026**, **Anexo XI**, CSV **2026.00004759**.

## 2. Producto y documentación de versión

Writer es el procesador de textos de LibreOffice. El formato abierto nativo es **ODT** y el de plantilla **OTT**. Puede exportar a PDF y manejar DOCX, sujeto a compatibilidad.

**Guía oficial de Writer para LibreOffice 24.2:** https://books.libreoffice.org/en/WG24/

Se utiliza como referencia **LibreOffice 24.2**, de la rama **24**. El epígrafe no especifica subversión. **No** se incorpora como materia principal Microsoft Word ni Excel. El material desarrolla el uso de Writer 24 correspondiente al programa y emplea como fuente de control la guía Writer 24.2.

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


## 4. Compatibilidad de versiones e interfaz

Los nombres de comandos pueden variar según idioma o interfaz seleccionada. Se recogen operaciones documentadas para Writer **24.2**, sin sustituirlas por instrucciones de Word. La comprobación visual final de la web se controla de forma separada.


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

**Nota de versión:** la guía base describe Writer **24.2**; la configuración del equipo puede cambiar la presentación de menús y accesos.


## 8. Operaciones prácticas y conceptos de examen

### 8.1. Edición, estilos y estructura

Un documento de texto consta de **caracteres**, **párrafos**, **tablas**, **páginas** y otros objetos. Un **salto de línea** no crea un nuevo párrafo; un **salto de párrafo** crea una unidad con propiedades de párrafo propias. Los estilos permiten mantener coherencia estructural y visual; el formato directo se aplica a selecciones concretas.

| Operación | Resultado | Error típico |
|---|---|---|
| **Copiar** | Conserva original y duplica el contenido en otro lugar | Confundir con cortar |
| **Cortar** | Retira contenido de origen y lo lleva al portapapeles | Confundir con borrar sin portapapeles |
| **Buscar y reemplazar** | Sustituye coincidencias conforme a los criterios | No distingue automáticamente todas las variantes si no se configuran |
| **Estilo de párrafo** | Aplica características reutilizables al párrafo | Confundir con formato directo |
| **Estilo de carácter** | Aplica características a un fragmento | Confundir con estilo de página |
| **Estilo de página** | Determina márgenes, orientación y otros atributos | Confundir con salto de página |
| **Plantilla OTT** | Base reutilizable para otros documentos | Confundir con documento ODT |

> ⚠️ **¡Foco Examen!:** Poner negrita a un encabezado no garantiza que aparezca en la tabla de contenido. Para obtener una estructura automática se emplean los **estilos de título**.

### 8.2. Paginación, campos y tabla de contenido

Los **encabezados** y **pies de página** pueden alojar texto o campos automáticos. El **campo de número de página** varía según la paginación; introducir la cifra «1» manualmente solo produce texto fijo.

La **tabla de contenido** se construye principalmente a partir de títulos con estilos estructurados. Después de modificar títulos o paginación puede necesitar **actualizar índice** desde el menú contextual, pues no se actualiza necesariamente de modo automático. Una **tabla de contenido** y un **índice alfabético** son recursos diferentes.

| Concepto | Utilidad |
|---|---|
| Salto de línea | Pasa a otra línea dentro del mismo párrafo |
| Salto de página | Comienza página nueva |
| Estilo de página | Establece formato de páginas |
| Campo número de página | Inserta la numeración dinámica |
| Tabla de contenido | Lista títulos/encabezados del documento |
| Índice alfabético | Lista términos seleccionados y localizaciones |

> ⚠️ **¡Foco Examen!:** Un **salto de página** no cambia por sí solo los márgenes; la **tabla de contenido automática debe actualizarse** después de cambios significativos.

### 8.3. Tablas, imágenes y listas

Las **tablas** organizan información en filas y columnas; las **listas** aplican viñetas o numeración estructurada; las **imágenes** se insertan o vinculan y tienen opciones de anclaje y ajuste con el texto. **Anclaje** determina la relación de la posición del objeto con la página, párrafo o carácter; **ajuste de texto** determina cómo fluye el texto a su alrededor.

Una tabla con columnas **Expediente**, **Fecha** y **Estado** resulta editable como datos tabulares de Writer. No equivale a una hoja de cálculo Calc ni sustituye automáticamente sus fórmulas.

> ⚠️ **¡Foco Examen!:** **Anclaje** de imagen y **ajuste del texto** son opciones diferentes; una tabla de Writer no es una tabla dinámica Calc.

### 8.4. Correspondencia y datos personalizados

Para emitir cartas personalizadas, se prepara un **documento modelo** y una **fuente de datos** con registros (nombre, dirección, localidad). Se registra o selecciona la fuente, se insertan **campos de combinación**, se previsualizan y se generan las salidas. La guía oficial documenta **Ver > Fuentes de datos** o **Ctrl+Mayús+F4** en Windows para mostrar fuentes registradas; el nombre visible depende del idioma.

**Caso resuelto:** emitir **50 cartas** con idéntico cuerpo y distintos destinatarios exige **combinación de correspondencia**, no modificar manualmente **50** copias. Las salidas pueden enviarse a impresión o conservarse en documentos.

> ⚠️ **¡Foco Examen!:** La **fuente de datos** contiene los registros, mientras que el **modelo Writer** contiene texto fijo y campos variables.

### 8.5. Revisiones, impresión y formatos

**Control de cambios** registra modificaciones para su revisión; **comentarios** añaden observaciones. La **corrección ortográfica** comprueba palabras según diccionarios configurados; no garantiza que el contenido jurídico o factual sea correcto. La **exportación PDF** facilita compartir un documento, mientras **ODT** preserva la edición ordinaria.

| Formato | Tipo | Uso |
|---|---|---|
| **ODT** | Documento de texto OpenDocument | Edición en Writer |
| **OTT** | Plantilla de texto OpenDocument | Generación de nuevos documentos |
| **DOCX** | Formato de Microsoft Word | Intercambio sujeto a compatibilidad |
| **PDF** | Formato de salida | Difusión e impresión |

> ⚠️ **¡Foco Examen!:** **Control de cambios** no es **corrección ortográfica**; **exportar PDF** no significa borrar el documento ODT.

## 9. Bibliografía de fabricante y cierre

- [Guía Writer 24.2](https://books.libreoffice.org/en/WG24/WG24.html), **The Document Foundation**, versión **24.2**.
- [Capítulo 14: combinación de correspondencia](https://books.libreoffice.org/en/WG24/WG2414-MailMerge.html).
- [Capítulo 15: tablas de contenido, índices y bibliografías](https://books.libreoffice.org/en/WG24/WG2415-TOCsIndexesBiblios.html).
- [Capítulo 17: campos](https://books.libreoffice.org/en/WG24/WG2417-Fields.html).

**Alcance:** material de estudio completo para el enunciado oficial de utilización de documentos de texto con **Writer 24**, contrastado con la guía del fabricante y acompañado de ejercicios. La prueba funcional del navegador de OpoWeb es un control transversal separado.
