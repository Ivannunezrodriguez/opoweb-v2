# La Puebla de Montalbán C2 · Repaso focal de temas 17–19 · 07/11/2026

**Programa de referencia:** BOP Toledo **82/2026**, anexo I, anuncio **1965**. **Tipo de pieza:** material didáctico complementario para los temas **17 Word y Writer**, **18 Excel y Calc**, **19 ordenador y periféricos**. **No son preguntas oficiales ni nuevos reactivos interactivos**. Los bancos de **12 preguntas por tema**, cotejados en **04/11/2026**, no se modifican.

## Tema 17 · Word y LibreOffice Writer

### Formatos y estructura documental

| Operación o concepto | Microsoft Word | LibreOffice Writer |
|---|---|---|
| Formato editable predeterminado habitual | **DOCX** | **ODT** |
| Plantilla habitual | **DOTX** | **OTT** |
| Cambiar orientación de solo parte del documento | **Salto de sección** y orientación de sección | **Estilos de página** y saltos con cambio de estilo |
| Cambiar títulos uniformemente | **Estilos** | **Estilos** |
| Salida estable para impresión/intercambio | Exportación o guardado **PDF** | Exportación **PDF** |

**Fuentes primarias:** [Microsoft, saltos de sección](https://support.microsoft.com/es-es/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document), [Microsoft, numeración por secciones](https://support.microsoft.com/es-es/word/customize-page-numbers-and-their-formats-in-different-word-document-sections), [LibreOffice, ayuda Writer](https://help.libreoffice.org/latest/es/text/swriter/main0000.html).

> ⚠️ **¡Foco Examen!:** Un **salto de página** no es necesariamente un **salto de sección**: en Word, para que una parte tenga orientación distinta debe definirse la sección; en Writer importan los **estilos de página**. Guardar el editable no es lo mismo que exportar una copia en PDF.

### Casos de aplicación

1. **17-A.** Las dos primeras páginas deben estar en vertical y el anexo en horizontal. En Word, ¿qué elemento es clave? **Salto de sección**, no simples líneas vacías ni salto de página aislado.
2. **17-B.** ¿Un documento ODT es inherentemente un archivo PDF? **No**; ODT mantiene estructura editable y PDF es otro formato de salida.
3. **17-C.** Para cambiar el formato de todos los encabezados de nivel 1, ¿resulta más robusto editar cada uno manualmente o actualizar el estilo? **Actualizar el estilo**.

## Tema 18 · Excel y LibreOffice Calc

### Referencias al copiar fórmulas

Ejemplo de partida: fórmula escrita en **C2** y copiada a **D3**, desplazamiento de **1 columna a la derecha y 1 fila hacia abajo**.

| Referencia en C2 | Resultado al copiar a D3 | Tipo |
|---|---|---|
| `A1` | `B2` | **Relativa** |
| `$A$1` | `$A$1` | **Absoluta** |
| `$A1` | `$A2` | **Mixta, columna fija** |
| `A$1` | `B$1` | **Mixta, fila fija** |

**Fuentes primarias:** [Microsoft Excel: referencias relativas y absolutas](https://support.microsoft.com/es-es/excel/switch-between-relative-absolute-and-mixed-references), [LibreOffice Calc: referencias](https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html).

> ⚠️ **¡Foco Examen!:** El signo **$** inmoviliza únicamente lo que precede: **$A1** fija columna; **A$1** fija fila; **$A$1** fija ambas. No confundir una referencia fija con una cifra escrita manualmente.

### Filtrar, ordenar y formatos

| Acción | Efecto |
|---|---|
| **Filtrar** | Oculta temporalmente los registros no coincidentes, sin eliminarlos |
| **Ordenar** | Reorganiza registros según criterio; deben conservarse filas completas |
| **Cambiar formato numérico** | Generalmente modifica presentación, no el valor subyacente |
| **CSV** | Texto delimitado, sin fórmulas, hojas múltiples ni estilos de libro como tales |

**Fuentes:** [Microsoft Excel, soporte general](https://support.microsoft.com/es-es/excel/), [LibreOffice Calc, ayuda](https://help.libreoffice.org/latest/es/text/scalc/main0503.html).

> ⚠️ **¡Foco Examen!:** Ordenar solo una columna de una tabla, ignorando las demás, puede romper las relaciones entre los datos. **CSV** no equivale a un libro **XLSX/ODS**.

### Casos de aplicación

4. **18-A.** Se copia `=$A1*B$2` de C3 a D4. Nueva fórmula: **`=$A2*C$2`**.
5. **18-B.** Se filtran los registros de expedientes de un mes. ¿Los demás registros se han borrado? **No**, quedan ocultos por el filtro.
6. **18-C.** Se exporta una hoja a CSV. ¿Conserva un gráfico incrustado y todas las pestañas del libro como estructura? **No**.

## Tema 19 · Componentes y periféricos

### Tabla de distinciones habituales

| Conceptos confundibles | Distinción correcta |
|---|---|
| **RAM / SSD / HDD** | La **RAM** es memoria de trabajo volátil; el almacenamiento conserva información sin alimentación |
| **CPU / GPU** | CPU ejecuta instrucciones generales; GPU está optimizada para procesamiento gráfico y paralelo |
| **USB-C / USB4** | **USB-C** identifica el tipo de conector; no garantiza por sí solo velocidad, vídeo ni potencia concretos |
| **Escáner / OCR** | Escáner digitaliza; **OCR** intenta reconocer caracteres |
| **Lector / grabador de CD/DVD** | Lector lee; grabador escribe en soportes compatibles |
| **CD-ROM / CD-R / CD-RW** | Solo lectura / grabable / regrabable |
| **Impresora / cola de impresión** | Dispositivo físico / gestión de trabajos |
| **Copia de seguridad / traslado a USB** | Una copia existe si se conserva otro ejemplar válido del original |

**Fuentes primarias:** [USB-IF: especificaciones USB Type-C](https://www.usb.org/usb-type-cr-cable-and-connector-specification), [Microsoft: extracción segura](https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows), [Microsoft: escáneres](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows), [Microsoft: grabar y copiar CD](https://support.microsoft.com/es-es/windows/apps/windowsmediaplayer/burn-and-rip-cds).

> ⚠️ **¡Foco Examen!:** Conector **USB-C** no significa **USB4**. Un documento escaneado puede no tener texto seleccionable; **OCR** no equivale a mera digitalización. **CD-R** y **CD-RW** no son sinónimos.

### Casos de aplicación

7. **19-A.** Dos puertos tienen la misma forma USB-C. ¿Deben transmitir datos a idéntica velocidad? **No**.
8. **19-B.** Se obtiene una imagen PDF desde el escáner. ¿Se garantiza búsqueda de palabras en su interior? **No**; requiere reconocimiento o una capa de texto previa.
9. **19-C.** ¿Puede una grabadora de DVD escribir en un disco de solo lectura DVD-ROM? **No**, el soporte DVD-ROM es de solo lectura.

## Estado de esta pieza

**Control focal:** **07/11/2026**. Se reutilizan la cobertura y cotejos históricos de bancos correspondientes al **04/11/2026**; el presente documento agrega **9 casos didácticos**, **3 conjuntos de tablas** y fuentes primarias de producto. **No se sustituyen las preguntas aprobadas ni los simulacros**, ni se afirma que sean exámenes oficiales. **Pendientes:** prueba real web/móvil, persistencia, accesibilidad, integración continua del commit final y recertificación técnica completa de las versiones de productos en la fecha del examen. **No es cierre integral de fiabilidad.**
