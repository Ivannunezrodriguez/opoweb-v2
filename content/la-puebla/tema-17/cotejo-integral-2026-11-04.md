# La Puebla de Montalbán · Tema 17 · Cotejo técnico-editorial del banco de preguntas

**Fecha: 04/11/2026.** Programa oficial BOP Toledo n.º 82, de **05/05/2026**, Anexo I, tema 17: Microsoft Word y LibreOffice Writer.

## 1. Fuentes y alcance

**Alcance contrastado:** manual modular y cinco bloques temáticos descritos en `matriz.json`; **12 preguntas** y las **48 opciones** del JSON publicado. Se cotejan conceptos y distractores con fuentes primarias de fabricantes:

- [Atajos y saltos de Writer](https://help.libreoffice.org/latest/es/text/swriter/04/01020000.html).
- [Estilos de página Writer](https://help.libreoffice.org/latest/es/text/swriter/guide/pagestyles.html).
- [Saltos de sección Word](https://support.microsoft.com/es-es/word/insert-a-section-break).
- [Saltos de página Word](https://support.microsoft.com/es-es/word/insert-a-page-break-in-word).

| Confusión | Regla verificable |
|---|---|
| Documento frente a plantilla | **Writer:** `.odt` documento; `.ott` plantilla. **Word:** `.docx` documento; `.dotx` plantilla. |
| Salto de línea frente a párrafo | **Mayús + Intro**: salto de línea, no termina el párrafo. |
| Salto manual de página | **Ctrl + Intro**, tanto en Word como en Writer (Windows, configuración usual). |
| Diseño de páginas diferentes | **Word**: secciones; **Writer**: estilos de página. |
| Documento editable frente a PDF | Exportar/guardar a PDF crea salida; no exige destruir el editable. |

> ⚠️ **¡Foco Examen!:** En Writer, **Ctrl + Mayús + Intro** es salto de **columna** en contextos pertinentes, mientras que **Ctrl + Intro** es salto de **página**. No son equivalentes.

## 2. Revisión de las 48 alternativas

### LP-T17-001 — ¿Cuál es el formato nativo habitual de LibreOffice Writer?

**Clave: D** — .odt. **Referencia:** manual.md, apartado 5 · Diferencias esenciales.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | .docx | **Incorrecta.** DOCX es formato nativo habitual de Word, no de Writer. |
| **B** | .dotx | **Incorrecta.** DOTX es una plantilla de Word, no el documento Writer. |
| **C** | .ott | **Incorrecta.** OTT es plantilla de Writer; ODT es documento. |
| **D** | .odt | **Correcta.** ODT es el formato nativo habitual de documentos de texto de Writer. |

> ⚠️ **¡Foco Examen!:** No debe confundirse el formato de documento .odt con la plantilla de Writer, cuya extensión habitual es .ott.

### LP-T17-002 — En Microsoft Word, ¿qué recurso permite aplicar de forma uniforme formato y estructura a títulos y párrafos?

**Clave: D** — Los estilos. **Referencia:** manual.md, apartados 2 y 7 · Estructura documental y calidad.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | El Portapapeles | **Incorrecta.** Portapapeles guarda fragmentos para copiar/pegar, no estilos estructurales. |
| **B** | La vista preliminar | **Incorrecta.** Vista preliminar muestra impresión, no establece estructura. |
| **C** | Las marcas no imprimibles | **Incorrecta.** Marcas no imprimibles ayudan a detectar caracteres, no formatean jerarquías. |
| **D** | Los estilos | **Correcta.** Los estilos aplican propiedades uniformes a títulos y párrafos. |

> ⚠️ **¡Foco Examen!:** El formato directo puede cambiar la apariencia, pero no aporta la misma coherencia estructural que los estilos.

### LP-T17-003 — ¿Qué combinación inserta un salto de página manual tanto en Word como en Writer?

**Clave: B** — Ctrl + Intro. **Referencia:** bloque-02-edicion-busqueda.md, apartado 4 · Párrafo, salto de línea y salto de página.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Mayús + Intro | **Incorrecta.** Mayús+Intro crea salto de línea dentro del párrafo. |
| **B** | Ctrl + Intro | **Correcta.** Ctrl+Intro inserta salto de página manual en Word y Writer para Windows. |
| **C** | Alt + Intro | **Incorrecta.** Alt+Intro no es el salto estándar de página. |
| **D** | Ctrl + Mayús + Intro | **Incorrecta.** Ctrl+Mayús+Intro se usa para salto de columna en Writer; no salto de página. |

> ⚠️ **¡Foco Examen!:** Mayús + Intro crea un salto de línea dentro del mismo párrafo, no un salto de página.

### LP-T17-004 — ¿Qué efecto produce Mayús + Intro en un procesador de textos?

**Clave: C** — Inserta un salto de línea dentro del mismo párrafo. **Referencia:** bloque-02-edicion-busqueda.md, apartado 4 · Párrafo, salto de línea y salto de página.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Crea un nuevo párrafo | **Incorrecta.** Intro sin Mayús termina párrafo; Mayús+Intro no crea uno nuevo. |
| **B** | Inserta un salto de página | **Incorrecta.** Ctrl+Intro es salto de página manual. |
| **C** | Inserta un salto de línea dentro del mismo párrafo | **Correcta.** Mayús+Intro hace salto de línea sin nuevo párrafo. |
| **D** | Abre un documento nuevo | **Incorrecta.** Ctrl+N crea nuevo documento en muchos contextos; no es la función de Mayús+Intro. |

> ⚠️ **¡Foco Examen!:** Intro y Mayús + Intro no son equivalentes: el primero crea un nuevo párrafo y el segundo no.

### LP-T17-005 — ¿Para qué sirve principalmente la opción Pegar solo texto?

**Clave: A** — Para insertar el contenido sin formatos ni enlaces no deseados. **Referencia:** bloque-02-edicion-busqueda.md, apartado 5 · Pegado especial.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Para insertar el contenido sin formatos ni enlaces no deseados | **Correcta.** Pegar solo texto descarta gran parte del formato de origen y vínculos codificados, aunque detectores de URL pueden crear enlaces nuevos después. |
| **B** | Para conservar todos los estilos de origen | **Incorrecta.** El pegado solo texto no mantiene los estilos ricos del origen. |
| **C** | Para convertir el texto en imagen | **Incorrecta.** Pegar solo texto no convierte automáticamente el contenido en imagen. |
| **D** | Para crear automáticamente una tabla | **Incorrecta.** Tampoco convierte de manera automática el contenido en una tabla. |

> ⚠️ **¡Foco Examen!:** Pegado especial no significa necesariamente pegar como imagen; ofrece varias modalidades, incluida solo texto.

### LP-T17-006 — ¿Qué afirmación sobre las marcas no imprimibles es correcta?

**Clave: C** — Permiten diagnosticar espacios, tabulaciones y saltos. **Referencia:** bloque-02-edicion-busqueda.md, apartado 3 · Marcas no imprimibles.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Siempre aparecen en el documento impreso | **Incorrecta.** Las marcas no imprimibles se muestran en edición; no se imprimen normalmente. |
| **B** | Eliminan automáticamente los párrafos vacíos | **Incorrecta.** Mostrar marcas no elimina párrafos ni espacios. |
| **C** | Permiten diagnosticar espacios, tabulaciones y saltos | **Correcta.** Permiten ver tabulaciones, espacios y saltos para corregir maquetación. |
| **D** | Sustituyen a la revisión ortográfica | **Incorrecta.** No equivalen al corrector ortográfico. |

> ⚠️ **¡Foco Examen!:** Que una marca se vea en pantalla no implica que vaya a imprimirse en el documento final.

### LP-T17-007 — ¿Qué riesgo presenta usar Reemplazar todo sin revisar previamente las coincidencias?

**Clave: B** — Que se alteren partes del documento no previstas. **Referencia:** bloque-02-edicion-busqueda.md, apartado 9 · Reemplazar.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Que solo se modifique la primera coincidencia | **Incorrecta.** Reemplazar todo puede modificar varias apariciones, no solo la primera. |
| **B** | Que se alteren partes del documento no previstas | **Correcta.** Puede afectar términos en contextos que no se pretendían alterar. |
| **C** | Que el documento se convierta automáticamente a PDF | **Incorrecta.** No convierte automáticamente un documento en PDF. |
| **D** | Que se desactive el corrector ortográfico | **Incorrecta.** No desactiva por sí mismo el corrector ortográfico. |

> ⚠️ **¡Foco Examen!:** La rapidez de Reemplazar todo no elimina la necesidad de revisar criterios y resultados o trabajar sobre una copia.

### LP-T17-008 — ¿Cuál es la práctica correcta cuando una pregunta de examen plantea un atajo de Word o Writer?

**Clave: B** — Atender al programa, versión, idioma y configuración indicados. **Referencia:** manual.md, apartado 5 · Diferencias esenciales.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Suponer que todos los idiomas usan el mismo atajo | **Incorrecta.** El idioma/configuración puede afectar los atajos, por eso no debe presumirse universalidad. |
| **B** | Atender al programa, versión, idioma y configuración indicados | **Correcta.** Hay que atender al programa y su versión/idioma/configuración concreta. |
| **C** | Aplicar siempre el atajo de Word a Writer | **Incorrecta.** Word y Writer no comparten necesariamente todos los atajos. |
| **D** | Ignorar el contexto del enunciado | **Incorrecta.** El contexto del enunciado importa para que el resultado sea correcto. |

> ⚠️ **¡Foco Examen!:** No existe una equivalencia universal para todos los atajos localizados de Word y Writer.

### LP-T17-009 — ¿Qué diferencia existe entre guardar un documento y exportarlo a PDF?

**Clave: A** — Guardar conserva el documento editable; exportar genera una salida en otro formato. **Referencia:** manual.md, apartados 5, 6 y 7.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Guardar conserva el documento editable; exportar genera una salida en otro formato | **Correcta.** Guardar mantiene el documento editable; exportar crea salida con otro formato y características. |
| **B** | No existe ninguna diferencia | **Incorrecta.** Guardar y exportar no son idénticos. |
| **C** | Exportar elimina siempre el original | **Incorrecta.** Exportar PDF no elimina por definición el editable original. |
| **D** | Guardar convierte siempre el archivo en PDF | **Incorrecta.** Guardar no implica convertir siempre a PDF. |

> ⚠️ **¡Foco Examen!:** Guardar, Guardar como y Exportar son operaciones distintas; cambiar la extensión tampoco convierte el formato.

### LP-T17-010 — ¿Qué diferencia estructural existe entre Word y Writer para organizar páginas con configuraciones distintas?

**Clave: D** — Word usa saltos de sección y Writer estilos de página. **Referencia:** manual.md, apartado 5 · Diferencias esenciales.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Word usa exclusivamente tablas y Writer columnas | **Incorrecta.** No existe esa diferencia; ambos ofrecen texto y tablas. |
| **B** | Word usa favoritos y Writer marcadores | **Incorrecta.** Marcadores y favoritos no describen la paginación de documentos. |
| **C** | No existe ninguna diferencia | **Incorrecta.** Sí existen mecanismos de paginación diferentes. |
| **D** | Word usa saltos de sección y Writer estilos de página | **Correcta.** Word organiza diseños por secciones; Writer por estilos de página y saltos que los aplican. |

> ⚠️ **¡Foco Examen!:** No debe buscarse en Writer una equivalencia literal de las secciones de Word; la lógica principal son los estilos de página.

### LP-T17-011 — ¿Qué afirmación sobre la corrección ortográfica es correcta?

**Clave: A** — El idioma asignado al texto influye en la revisión. **Referencia:** bloque-02-edicion-busqueda.md, apartados 11 y 12 · Ortografía e idioma.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | El idioma asignado al texto influye en la revisión | **Correcta.** El idioma asignado al texto determina las reglas del corrector. |
| **B** | Toda palabra subrayada es necesariamente incorrecta | **Incorrecta.** Los subrayados incluyen nombres, lenguaje técnico o palabras válidas no reconocidas. |
| **C** | Agregar una palabra al diccionario siempre la corrige | **Incorrecta.** Agregar al diccionario no equivale a corregir todas las apariciones ni demuestra ortografía. |
| **D** | La revisión depende únicamente del idioma de la interfaz | **Incorrecta.** El idioma de interfaz y el idioma de corrección del texto son propiedades distintas. |

> ⚠️ **¡Foco Examen!:** Agregar al diccionario una palabra mal escrita no la corrige: consolida el error para futuras revisiones.

### LP-T17-012 — ¿Cuál es la práctica adecuada para obtener una salida estable destinada a envío o registro?

**Clave: C** — Conservar el editable y generar un PDF verificado. **Referencia:** manual.md, apartados 6 y 7 · Flujo de trabajo y calidad documental.

| Opción | Literal | Contraste |
|---|---|---|
| **A** | Renombrar el archivo .docx como .pdf | **Incorrecta.** Cambiar extensión no crea PDF válido. |
| **B** | Eliminar el documento editable | **Incorrecta.** No es necesario eliminar el original editable para generar una copia final. |
| **C** | Conservar el editable y generar un PDF verificado | **Correcta.** Conservar editable y exportar a PDF permite futuras correcciones y salida estable. |
| **D** | Sustituir todos los saltos por párrafos vacíos | **Incorrecta.** Párrafos vacíos no sustituyen los saltos estructurados. |

> ⚠️ **¡Foco Examen!:** Guardar, Guardar como, Exportar e Imprimir son operaciones distintas; cambiar la extensión no convierte el formato.

## 3. Resultado y límites

- **12/12 claves coherentes** con la alternativa correcta y con `respuestaLiteral`; **48/48 distractores y respuestas** revisados en contexto.
- **No se ha identificado** una respuesta alternativa igualmente válida dentro de la lectura literal de los 12 enunciados.
- Los atajos se expresan en su **contexto Windows**; la propia ayuda de LibreOffice también documenta variaciones para macOS. Los menús pueden cambiar según versión o idioma.
- Esta revisión documenta precisión de banco y coherencia de manual. **No certifica** la navegación en móviles, las rutas de publicación, almacenamiento de resultados ni la accesibilidad integral del portal.
