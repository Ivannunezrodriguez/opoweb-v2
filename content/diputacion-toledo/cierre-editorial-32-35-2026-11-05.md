# Cotejo técnico y pedagógico definitivo por bloque — Diputación C1 temas 32–35

**Fecha:** **05/11/2026**. **Epígrafes:** Anexo VII, BOP de Toledo **118/2026** de **25/06/2026**, CSV **2026.00002934**. **Ámbito:** cuatro manuales, cuatro matrices y fichas de fuentes, y **80 preguntas / 320 opciones**. **10 preguntas** reformuladas para eliminar redundancias y evaluar distinciones que el temario exige, **sin cambiar los 80 índices de respuesta**.

**Alcance del cierre:** documental técnico-pedagógico, con fuentes oficiales especificadas, trazabilidad y regresión de bancos. **No** se ha realizado aquí prueba automatizada de navegador real, móvil, accesibilidad o funcionamiento offline; la certificación integral de la web permanece pendiente.

## Resumen de los cuatro temas

| Tema | Fuente primaria verificada | Incidencia corregida | Preguntas sustituidas |
|---|---|---|---:|
| **32 — Windows 11: ficheros y unidades** | [Microsoft Support: Explorador](https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows) y [unidades de red](https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows) | Nombre visible **Documentos** distinto de ruta física; menú **Más → Asignar unidad de red**; letra lógica distinta de disco físico | **1** |
| **33 — Edge y GroupWise 24** | [Microsoft Edge InPrivate](https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge) y [manual de GroupWise 24](https://www.novell.com/documentation/groupwise24/) | Retracción limitada a mensajes **internos no leídos**, imposible hacia correo externo; CCO excluido de **Responder a todos** | **2** |
| **34 — Impresión y escaneado** | [Microsoft: escanear](https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows) y [cola Print Spooler](https://support.microsoft.com/en-us/windows/hardware/printer/fix-print-spooler-service-not-running-errors-in-windows) | Aplicación Escáner puede requerir Store; guardado predeterminado **Imágenes/Scans**; diferencia entre alimentador **ADF** y dúplex; servicio de cola | **4** |
| **35 — LibreOffice 24 Writer** | [Guía oficial 24.8 española, apéndice A](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) y [Writer Help](https://help.libreoffice.org/latest/es/text/swriter/04/01020000.html) | Error material: mezcla de teclas internacionales y españolas. En guía 24.8: **Ctrl+U** nuevo, **Ctrl+G** guardar, **Ctrl+N** negrita, **Ctrl+S** subrayar, **Ctrl+E** seleccionar y **Ctrl+T** centrar | **3** |

> ⚠️ **¡Foco Examen!:** Los atajos de **LibreOffice 24.8 en español** no se pueden reemplazar sin más por los de **Windows**, **Microsoft Word** o los de una distribución internacional. Comprobar siempre la versión de examen y no confundir **Ctrl + G (guardar)** con **Ctrl + S (subrayar)** en la guía española de referencia.

## Preguntas reformuladas con evidencia

| ID | Nuevo concepto | Respuesta literal |
|---|---|---|
| **DIP-T32-020** | Si un equipo muestra las unidades C: y D:, ¿qué puede deducirse sobre los discos físicos? | Pueden ser dos volúmenes o particiones de un mismo disco físico |
| **DIP-T33-018** | En GroupWise 24, ¿puede retraerse un mensaje enviado a un sistema de correo externo por Internet? | No; la función de retracción no retira mensajes enviados a otros sistemas de correo externos |
| **DIP-T33-020** | ¿Qué condición impide retraer desde GroupWise 24 un mensaje de correo recibido por un usuario interno? | Que el destinatario ya lo haya abierto |
| **DIP-T34-013** | ¿Qué servicio de Windows administra los trabajos enviados a imprimir? | El servicio Cola de impresión (Print Spooler) |
| **DIP-T34-014** | Si la aplicación Escáner de Windows no aparece al buscarla, ¿qué indica Microsoft? | Instalarla desde Microsoft Store |
| **DIP-T34-015** | Cuando no se ha seleccionado una carpeta distinta, ¿dónde guarda por defecto los escaneos la aplicación Escáner de Windows? | En la carpeta Imágenes/Scans del perfil del usuario |
| **DIP-T34-019** | ¿Qué afirmación es correcta sobre el alimentador automático de documentos (ADF) de un escáner? | Permite digitalizar varias hojas, pero no garantiza digitalización a doble cara |
| **DIP-T35-007** | Según la guía oficial española LibreOffice 24.8 (Windows), ¿qué combinación aplica negrita? | Ctrl + N |
| **DIP-T35-017** | Según la Guía oficial LibreOffice 24.8 en español (Windows), ¿qué atajo guarda el documento? | Ctrl + G |
| **DIP-T35-020** | ¿Qué combinación selecciona todo el texto y objetos de una sección según la Guía española LibreOffice 24.8? | Ctrl + E |

## Inventario íntegro del banco (pregunta y respuesta correcta)

En los cuatro `preguntas.json` quedan las **cuatro alternativas**, la **justificación**, la **trampa**, la **respuesta literal** y la **referencia** de cada ítem. El inventario siguiente impide confundir una prueba de estructura con una revisión selectiva.

### Tema 32 — 20 preguntas

| ID | Respuesta correcta | Referencia |
|---|---|---|
| **DIP-T32-001** | Windows + E | content/diputacion-toledo/tema-32/manual.md#1-explorador-de-archivos |
| **DIP-T32-002** | Ctrl + Mayús + N | content/diputacion-toledo/tema-32/manual.md#3-crear-archivos-y-carpetas |
| **DIP-T32-003** | Copiar mantiene el original y mover cambia su ubicación | content/diputacion-toledo/tema-32/manual.md#5-copiar-y-mover |
| **DIP-T32-004** | Ctrl + X y Ctrl + V | content/diputacion-toledo/tema-32/manual.md#5-copiar-y-mover |
| **DIP-T32-005** | F2 | content/diputacion-toledo/tema-32/manual.md#6-renombrar |
| **DIP-T32-006** | Elimina sin pasar por la Papelera | content/diputacion-toledo/tema-32/manual.md#7-eliminar-y-papelera-de-reciclaje |
| **DIP-T32-007** | Una unidad lógica | content/diputacion-toledo/tema-32/manual.md#10-unidades-de-disco-locales |
| **DIP-T32-008** | \\SERVIDOR\Compartido | content/diputacion-toledo/tema-32/manual.md#9-rutas-y-ubicaciones |
| **DIP-T32-009** | Asignar una letra a un recurso compartido | content/diputacion-toledo/tema-32/manual.md#11-unidades-y-recursos-de-red |
| **DIP-T32-010** | Conectividad, servidor y permisos | content/diputacion-toledo/tema-32/manual.md#12-permisos-y-acceso |
| **DIP-T32-011** | Ctrl + A | content/diputacion-toledo/tema-32/manual.md#4-seleccionar-elementos |
| **DIP-T32-012** | No equivale a protegerlo mediante permisos o cifrado | content/diputacion-toledo/tema-32/manual.md#13-búsqueda-vistas-y-ordenación |
| **DIP-T32-013** | Alt + Entrar | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-014** | Alt + D | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-015** | F3 | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-016** | Alt + Flecha arriba | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-017** | Alt + P | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-018** | Mayús + F10 | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-019** | Moverlo a la Papelera de reciclaje | Microsoft Support · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows |
| **DIP-T32-020** | Pueden ser dos volúmenes o particiones de un mismo disco físico | Microsoft Windows 11: gestión de unidades y carpetas; tema 32 apartados 10 y 17 · https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows |

### Tema 33 — 20 preguntas

| ID | Respuesta correcta | Referencia |
|---|---|---|
| **DIP-T33-001** | Ctrl + T | content/diputacion-toledo/tema-33/manual.md#2-navegación-mediante-pestañas |
| **DIP-T33-002** | Ctrl + Mayús + T | content/diputacion-toledo/tema-33/manual.md#2-navegación-mediante-pestañas |
| **DIP-T33-003** | Guardar su dirección para acceder después | content/diputacion-toledo/tema-33/manual.md#3-favoritos |
| **DIP-T33-004** | Ctrl + H | content/diputacion-toledo/tema-33/manual.md#4-historial |
| **DIP-T33-005** | No implica necesariamente borrar el archivo descargado | content/diputacion-toledo/tema-33/manual.md#5-descargas |
| **DIP-T33-006** | Elimina normalmente ciertos datos locales al cerrar todas las ventanas InPrivate | content/diputacion-toledo/tema-33/manual.md#6-navegación-inprivate |
| **DIP-T33-007** | Ocultar esos destinatarios a los demás receptores | content/diputacion-toledo/tema-33/manual.md#11-redacción-y-envío-de-mensajes |
| **DIP-T33-008** | Responder contesta al remitente; reenviar envía el contenido a nuevos destinatarios | content/diputacion-toledo/tema-33/manual.md#12-responder-responder-a-todos-y-reenviar |
| **DIP-T33-009** | Solo afecta al calendario propio | content/diputacion-toledo/tema-33/manual.md#14-calendario-citas-y-reuniones |
| **DIP-T33-010** | Requiere permisos de acceso | content/diputacion-toledo/tema-33/manual.md#16-carpetas-categorías-y-organización |
| **DIP-T33-011** | Eliminarlo definitivamente según configuración | content/diputacion-toledo/tema-33/manual.md#17-eliminación-papelera-y-purga |
| **DIP-T33-012** | Verificar remitente, enlaces, adjuntos y destinatarios antes de actuar | content/diputacion-toledo/tema-33/manual.md#18-seguridad-en-el-correo |
| **DIP-T33-013** | Ctrl + J | Microsoft Edge: atajos · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DIP-T33-014** | Ctrl + Mayús + N | Microsoft Edge: atajos · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DIP-T33-015** | Ctrl + Mayús + B | Microsoft Edge: atajos · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DIP-T33-016** | Ctrl + 0 | Microsoft Edge: atajos · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DIP-T33-017** | Ctrl + Mayús + Supr | Microsoft Edge: atajos · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DIP-T33-018** | No; la función de retracción no retira mensajes enviados a otros sistemas de correo externos | GroupWise 24 Client User Guide, cap. 21 · https://www.novell.com/documentation/groupwise24/ |
| **DIP-T33-019** | Vaciar la Papelera | GroupWise 24: vaciar Papelera · https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/maintaining_trash_emptying.html |
| **DIP-T33-020** | Que el destinatario ya lo haya abierto | GroupWise 24 Client User Guide, cap. 21 · https://www.novell.com/documentation/groupwise24/ |

### Tema 34 — 20 preguntas

| ID | Respuesta correcta | Referencia |
|---|---|---|
| **DIP-T34-001** | Ctrl + P | content/diputacion-toledo/tema-34/manual.md#4-cuadro-de-impresión |
| **DIP-T34-002** | Configuración > Bluetooth y dispositivos > Impresoras y escáneres | content/diputacion-toledo/tema-34/manual.md#2-instalación-de-impresoras |
| **DIP-T34-003** | Crear un archivo PDF | content/diputacion-toledo/tema-34/manual.md#5-impresión-a-pdf |
| **DIP-T34-004** | Gestionar trabajos pendientes, pausados o con error | content/diputacion-toledo/tema-34/manual.md#6-cola-de-impresión |
| **DIP-T34-005** | La última impresora utilizada | content/diputacion-toledo/tema-34/manual.md#3-impresora-predeterminada |
| **DIP-T34-006** | Escáner de Windows | content/diputacion-toledo/tema-34/manual.md#9-aplicación-escáner-de-windows |
| **DIP-T34-007** | Fotografías o documentos únicos y delicados | content/diputacion-toledo/tema-34/manual.md#orígenes-de-digitalización |
| **DIP-T34-008** | Aumentan el detalle y el tamaño del archivo | content/diputacion-toledo/tema-34/manual.md#11-resolución-y-color |
| **DIP-T34-009** | PDF | content/diputacion-toledo/tema-34/manual.md#10-formatos-de-archivo |
| **DIP-T34-010** | Una impresora compartida en red | content/diputacion-toledo/tema-34/manual.md#13-impresión-y-escaneado-en-red |
| **DIP-T34-011** | Intentar imprimir desde otra aplicación | content/diputacion-toledo/tema-34/manual.md#7-problemas-frecuentes-de-impresión |
| **DIP-T34-012** | Retirar inmediatamente documentos confidenciales de la bandeja | content/diputacion-toledo/tema-34/manual.md#14-seguridad-y-protección-de-datos |
| **DIP-T34-013** | El servicio Cola de impresión (Print Spooler) | Microsoft Support · https://support.microsoft.com/en-us/windows/hardware/printer/fix-print-spooler-service-not-running-errors-in-windows |
| **DIP-T34-014** | Instalarla desde Microsoft Store | Microsoft Support · https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DIP-T34-015** | En la carpeta Imágenes/Scans del perfil del usuario | Microsoft Support · https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DIP-T34-016** | Permitir que Windows administre mi impresora predeterminada | https://support.microsoft.com/es-es/windows/hardware/printer/set-a-default-printer-in-windows |
| **DIP-T34-017** | Windows puede detectarlo e instalarlo automáticamente | https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DIP-T34-018** | Que Windows también detecte la función de escáner | https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DIP-T34-019** | Permite digitalizar varias hojas, pero no garantiza digitalización a doble cara | Microsoft Support · https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DIP-T34-020** | Comprobar conexión, disponibilidad y agregarla manualmente si procede | https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows |

### Tema 35 — 20 preguntas

| ID | Respuesta correcta | Referencia |
|---|---|---|
| **DIP-T35-001** | ODT | content/diputacion-toledo/tema-35/manual.md#1-writer-y-el-documento-de-texto |
| **DIP-T35-002** | Ctrl + Mayús + S | content/diputacion-toledo/tema-35/manual.md#3-crear-abrir-guardar-y-cerrar |
| **DIP-T35-003** | El formato directo afecta a una selección concreta y el estilo permite cambios coherentes y globales | content/diputacion-toledo/tema-35/manual.md#5-formato-de-caracteres |
| **DIP-T35-004** | Estilo de página | content/diputacion-toledo/tema-35/manual.md#7-estilos-y-plantillas |
| **DIP-T35-005** | Ctrl + F12 | content/diputacion-toledo/tema-35/manual.md#10-tablas |
| **DIP-T35-006** | Ctrl + F10 | content/diputacion-toledo/tema-35/manual.md#6-formato-de-párrafo |
| **DIP-T35-007** | Ctrl + N | LibreOffice 24.8, Guía de iniciación, apéndice A · https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |
| **DIP-T35-008** | Estilos de título | content/diputacion-toledo/tema-35/manual.md#15-campos-índices-y-combinación-de-correspondencia |
| **DIP-T35-009** | Ctrl + H | content/diputacion-toledo/tema-35/manual.md#13-búsqueda-y-sustitución |
| **DIP-T35-010** | Documento principal, fuente de datos y campos de combinación | content/diputacion-toledo/tema-35/manual.md#15-campos-índices-y-combinación-de-correspondencia |
| **DIP-T35-011** | Genera un archivo de distribución sin sustituir necesariamente el original editable | content/diputacion-toledo/tema-35/manual.md#16-impresión-y-exportación |
| **DIP-T35-012** | El campo Número de página | content/diputacion-toledo/tema-35/manual.md#12-encabezados-pies-y-numeración |
| **DIP-T35-013** | Un salto de página manual | https://help.libreoffice.org/latest/es/text/swriter/guide/page_break.html |
| **DIP-T35-014** | Aplicar estilos de página distintos mediante saltos adecuados | https://help.libreoffice.org/latest/es/text/swriter/guide/pageorientation.html |
| **DIP-T35-015** | El salto de línea cambia de renglón sin crear un párrafo nuevo | https://help.libreoffice.org/latest/es/text/swriter/01/04010000.html |
| **DIP-T35-016** | El número de página con el que comienza la página siguiente | https://help.libreoffice.org/latest/es/text/swriter/01/04010000.html |
| **DIP-T35-017** | Ctrl + G | LibreOffice 24.8, Guía de iniciación, apéndice A · https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |
| **DIP-T35-018** | Seleccionar la página y elegir el estilo correspondiente en el panel Estilos | https://help.libreoffice.org/latest/es/text/swriter/guide/pagestyles.html |
| **DIP-T35-019** | Puede tener un «estilo siguiente» diferente para las páginas posteriores | https://help.libreoffice.org/latest/es/text/swriter/guide/pageorientation.html |
| **DIP-T35-020** | Ctrl + E | LibreOffice 24.8, Guía de iniciación, apéndice A · https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |

## Integridad técnica y asuntos pendientes

- La prueba `tests/validate-diputacion-c1-t32-t35-cierre-20261105.mjs` verifica **80 ID**, **80 claves originales**, **320 opciones distintas**, coherencia de literal, estado y matrices, y hechos corregidos de alta prioridad.
- La validación global `tests/validate-diputacion.mjs` acepta el crecimiento documentado sin invalidar cierres anteriores. El test de temas **28–31** sigue protegiendo exclusivamente ese bloque.
- El programa suma **34/121** temas con cierre técnico o jurídico-pedagógico documentado, y quedan **87/121** pendientes de ese tipo de auditoría; la **certificación funcional integral transversal sigue pendiente**.
- **Tema C1 22:** continúa bloqueado, a falta de Estatutos OAPGT completos. No inventar su contenido.
- **Próximo bloque:** **C1 36–39**, sin reabrir **C1 1–21 y 23–35** salvo incidencia verificable o modificación documental posterior.
