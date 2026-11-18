# Informe de cierre técnico-pedagógico · Diputación Toledo Auxiliar C2 temas 17–20

**Corte documental:** **06/11/2026**. **Programa literal:** **BOP Toledo 197 de 14/10/2026, Anexo XI, CSV 2026.00004759**, extracto BOE de **21/10/2026** ([BOE-A-2026-21908](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-21908)).

**Alcance revisado:** **4 manuales completos** (Edge/GroupWise, Writer, Calc, PC y periféricos), **4 fichas de fuentes**, **4 matrices de trazabilidad de epígrafes**, **80 preguntas / 320 alternativas**, todas con justificación, trampa de examen y fuente. **16 reformulaciones** que eliminan duplicidades e incorporan distinciones evaluables, **sin cambiar ningún ID ni índice de la respuesta correcta**. Hitos históricos de octubre conservados, pero **no equivalen por sí mismos a una recertificación de noviembre**.

**Alcance NO incluido:** pruebas de cliente GroupWise o LibreOffice en una instalación real, ejecución de pruebas end-to-end de la web en navegador/móvil, conformidad WCAG o PWA/offline. Por tanto: **cierre documental técnico-pedagógico**, **no certificación integral de OpoWeb**.

## Cotejo de los cuatro temas

| Tema C2 | Epígrafe de estudio | Fuente primaria | Hallazgo principal | Ítems sustituidos |
|---|---|---|---|---:|
| **17** | Microsoft Edge y GroupWise 24 | [Microsoft, teclado Edge](https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge), [GroupWise 24, composición](https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html) | **Responder a todos no incorpora Bc**, retracción imposible a mensajes externos, **Ctrl+Mayús+T** frente a **Ctrl+Mayús+N** | **3** |
| **18** | Writer LibreOffice 24 | [Guía española de iniciación 24.8](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) y [Writer Guide 24.2](https://books.libreoffice.org/en/WG24/WG24.html) | **Ctrl+G** guardar, **Ctrl+N** negrita, **Ctrl+S** subrayado, **Ctrl+Mayús+S** guardar como; diferencias según instalación/idioma | **4** |
| **19** | Calc LibreOffice 24 | [Calc 24.2, fórmulas](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html), [Ayuda Calc referencias](https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html) | Referencias mixtas, **CONTAR.SI**, **SI** y **Ctrl+G** en guía española | **4** |
| **20** | Componentes del PC y periféricos | [Intel, GPU integrada](https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html), [Microsoft FAT32](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), [USB-IF](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf) | GPU integrada con RAM compartida, **ADF ≠ dúplex**, **ppp ≠ ppm**, **750 W** capacidad y USB 2.0 Tipo C hasta **480 Mb/s** | **5** |

> ⚠️ **¡Foco Examen!:** Para un enunciado de **LibreOffice 24.8 en español** no memorizar automáticamente **Ctrl+S = Guardar** de una distribución internacional: la guía española lo asigna a **Subrayar**, y **Ctrl+G** a **Guardar**. En GroupWise, **Bc** no se incluye en «Responder a todos». El **ADF** por sí solo no prueba que el escáner sea **dúplex**.

## Preguntas reformuladas y respuesta correcta

| ID | Concepto nuevo | Literal de respuesta validada |
|---|---|---|
| **DT-C2-T17-011** | En el cliente GroupWise 24, ¿qué ocurre si alguien responde a todos a un correo que tenía destinatarios en Bc (copia oculta)? | Los destinatarios de Bc del original no reciben automáticamente esa respuesta |
| **DT-C2-T17-015** | ¿Qué limitación de GroupWise 24 impide retirar mediante retractación un correo ya enviado? | El mensaje fue enviado a un sistema de correo externo por Internet |
| **DT-C2-T17-016** | En Microsoft Edge para Windows 11, ¿qué atajo reabre la última pestaña cerrada cuando se puede recuperar? | Ctrl + Mayús + T |
| **DT-C2-T18-014** | Según la Guía oficial de iniciación LibreOffice 24.8 en español para Windows, ¿qué combinación guarda un documento de Writer? | Ctrl + G |
| **DT-C2-T18-015** | ¿Qué atajo aplica negrita a texto seleccionado en la guía española LibreOffice 24.8 para Windows? | Ctrl + N |
| **DT-C2-T18-016** | ¿Qué combinación aplica subrayado en Writer según la guía española LibreOffice 24.8 para Windows? | Ctrl + S |
| **DT-C2-T18-020** | ¿Qué combinación abre el cuadro Guardar como, según la guía oficial española LibreOffice 24.8 para Windows? | Ctrl + Mayús + S |
| **DT-C2-T19-014** | En Calc, al copiar la fórmula =$A2+B$1 desde C2 hasta C3, ¿cuál es la fórmula resultante? | =$A3+B$1 |
| **DT-C2-T19-016** | En Calc, A1:A4 contienen 3, 7, 9 y 5. ¿cuánto devuelve =CONTAR.SI(A1:A4;">5")? | 2 |
| **DT-C2-T19-018** | Si la celda A1 contiene 7, ¿qué devuelve =SI(A1>=5;"APTO";"NO APTO") en Calc? | APTO |
| **DT-C2-T19-020** | Según la Guía oficial LibreOffice 24.8 en español para Windows, ¿qué atajo permite guardar la hoja de cálculo actual? | Ctrl + G |
| **DT-C2-T20-010** | Un ordenador dispone únicamente de gráficos integrados Intel, ¿qué memoria utiliza normalmente su GPU para los datos gráficos? | Memoria RAM del sistema, compartida con otras tareas |
| **DT-C2-T20-012** | ¿Qué afirmación sobre el alimentador automático ADF y la digitalización dúplex es correcta? | El ADF facilita hojas sucesivas; el escaneado por ambas caras requiere capacidad dúplex del equipo |
| **DT-C2-T20-014** | ¿Qué relación describe correctamente resolución y rendimiento de una impresora? | ppp (dpi) expresa resolución; ppm expresa páginas por minuto |
| **DT-C2-T20-018** | En un PC con una fuente de alimentación de potencia nominal 750 W, ¿qué significa esa cifra? | Capacidad de suministro nominal; no implica consumir 750 W en todo momento |
| **DT-C2-T20-019** | Si un cable con conector USB-C solo es compatible con USB 2.0, ¿cuál es su velocidad máxima teórica de datos? | 480 Mb/s (megabits por segundo) |

## Inventario de los 80 ítems documentados

Se ha contrastado la redacción, las cuatro alternativas y la explicación contra la fuente de cada ítem. La comprobación automática protege IDs, claves, alternativas, fuentes, cierres y afirmaciones sensibles; no sustituye las pruebas funcionales de interfaz.

### Tema 17 · 20 ítems

| ID | Respuesta correcta | Fuente |
|---|---|---|
| **DT-C2-T17-001** | New Mail | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-002** | +Bc | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-003** | Los demás destinatarios no reciben información de las copias ocultas | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-004** | Ctrl + Mayús + N | Microsoft Edge, métodos abreviados de teclado · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DT-C2-T17-005** | Al cerrar todas las ventanas InPrivate se eliminan del dispositivo datos de esa sesión como historial y cookies, pero no se garantiza anonimato frente a la red o los sitios | Microsoft Support, exploración InPrivate en Edge · https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge |
| **DT-C2-T17-006** | Sent Items | OpenText GroupWise 24, Working with Sent Items · https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sentmail_workingwithsentmail.html |
| **DT-C2-T17-007** | Ctrl + J | Microsoft Edge, métodos abreviados de teclado · https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DT-C2-T17-008** | La entrega no acredita por sí sola que fuese abierto | GroupWise 24, Sent Items y Status Tracking · https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sentmail_workingwithsentmail.html |
| **DT-C2-T17-009** | Puede permanecer guardado en el dispositivo | https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge |
| **DT-C2-T17-010** | Favoritos | https://support.microsoft.com/es-es/microsoft-edge |
| **DT-C2-T17-011** | Los destinatarios de Bc del original no reciben automáticamente esa respuesta | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-012** | Cifrado de transporte; no verifica por sí mismo legitimidad comercial | https://support.microsoft.com/es-es/microsoft-edge |
| **DT-C2-T17-013** | Add Attachment | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-014** | To | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |
| **DT-C2-T17-015** | El mensaje fue enviado a un sistema de correo externo por Internet | https://www.novell.com/documentation/groupwise24/ |
| **DT-C2-T17-016** | Ctrl + Mayús + T | https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge |
| **DT-C2-T17-017** | No se puede retractar si el destinatario ya lo abrió | https://www.novell.com/documentation/groupwise24/pdfdoc/gw_guide_userwin/gw_guide_userwin.pdf |
| **DT-C2-T17-018** | Properties | https://www.novell.com/documentation/groupwise24/pdfdoc/gw_guide_userwin/gw_guide_userwin.pdf |
| **DT-C2-T17-019** | Preparar un nuevo envío que puede modificarse | https://www.novell.com/documentation/groupwise24/gw_guide_gwweb/data/resending_mail.html |
| **DT-C2-T17-020** | Address / Libreta de direcciones | https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html |

### Tema 18 · 20 ítems

| ID | Respuesta correcta | Fuente |
|---|---|---|
| **DT-C2-T18-001** | Writer | https://books.libreoffice.org/en/WG24/WG24.html |
| **DT-C2-T18-002** | .odt | https://books.libreoffice.org/en/WG24/WG24.html |
| **DT-C2-T18-003** | Estilos | https://books.libreoffice.org/en/WG24/WG2408-IntroStyles.html |
| **DT-C2-T18-004** | El salto decide dónde comienza una nueva página; el estilo controla propiedades de la página | https://books.libreoffice.org/en/WG24/WG24.html |
| **DT-C2-T18-005** | Combinación de correspondencia | https://books.libreoffice.org/en/WG24/WG2414-MailMerge.html |
| **DT-C2-T18-006** | Seleccionar Ver > Fuentes de datos, o pulsar Ctrl + Mayús + F4 | https://books.libreoffice.org/en/WG24/WG2414-MailMerge.html |
| **DT-C2-T18-007** | Guardar conserva el formato editable elegido; exportar crea un documento PDF | https://books.libreoffice.org/en/WG24/WG24.html |
| **DT-C2-T18-008** | Seleccionar Actualizar índice desde el menú contextual de la tabla de contenido | https://books.libreoffice.org/en/WG24/WG2415-TOCsIndexesBiblios.html |
| **DT-C2-T18-009** | Un campo de número de página | https://books.libreoffice.org/en/WG24/WG2417-Fields.html |
| **DT-C2-T18-010** | Se aplica a una selección concreta sin necesariamente reutilizar un estilo | https://books.libreoffice.org/en/WG24/WG2408-IntroStyles.html |
| **DT-C2-T18-011** | El salto de línea no inicia un nuevo párrafo | https://books.libreoffice.org/en/WG24/WG2402-WorkingWithTextBasics.html |
| **DT-C2-T18-012** | Estilo de página | https://books.libreoffice.org/en/WG24/WG2405-FormattingPagesBasics.html |
| **DT-C2-T18-013** | Estilos de título de párrafo | https://books.libreoffice.org/en/WG24/WG2415-TOCsIndexesBiblios.html |
| **DT-C2-T18-014** | Ctrl + G | https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |
| **DT-C2-T18-015** | Ctrl + N | https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |
| **DT-C2-T18-016** | Ctrl + S | https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |
| **DT-C2-T18-017** | Anclaje relaciona posición; ajuste controla el flujo del texto | https://books.libreoffice.org/en/WG24/WG2411-ImagesAndGraphics.html |
| **DT-C2-T18-018** | .ott | https://books.libreoffice.org/en/WG24/WG2410-WorkingWithTemplates.html |
| **DT-C2-T18-019** | Control de cambios | https://books.libreoffice.org/en/WG24/WG2403-WorkingWithTextAdvanced.html |
| **DT-C2-T18-020** | Ctrl + Mayús + S | https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |

### Tema 19 · 20 ítems

| ID | Respuesta correcta | Fuente |
|---|---|---|
| **DT-C2-T19-001** | Absoluta en fila y columna | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-002** | =A2+B2 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-003** | $A1 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-004** | F4 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-005** | Seis celdas | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-006** | Muestra solo las filas que cumplen el criterio y oculta las demás | https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html |
| **DT-C2-T19-007** | Datos > AutoFiltro | https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html |
| **DT-C2-T19-008** | Ordenar reorganiza registros; filtrar cambia cuáles se muestran | https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html |
| **DT-C2-T19-009** | Actualizar manualmente la tabla dinámica mediante Datos > Tabla dinámica > Actualizar o su menú contextual | https://books.libreoffice.org/en/CG24/CG2409-PivotTables.html |
| **DT-C2-T19-010** | 20 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-011** | CONTAR | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-012** | 20 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-013** | =A3*$F$1 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-014** | =$A3+B$1 | https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html |
| **DT-C2-T19-015** | Para agrupar y resumir registros por campos | https://books.libreoffice.org/en/CG24/CG2409-PivotTables.html |
| **DT-C2-T19-016** | 2 | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-017** | ODS | https://books.libreoffice.org/en/CG24/CG24.html |
| **DT-C2-T19-018** | APTO | https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html |
| **DT-C2-T19-019** | Validación de datos | https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html |
| **DT-C2-T19-020** | Ctrl + G | https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |

### Tema 20 · 20 ítems

| ID | Respuesta correcta | Fuente |
|---|---|---|
| **DT-C2-T20-001** | CPU | Arquitectura del ordenador · https://www.intel.com/content/www/es/es/products/docs/processors/what-is-a-cpu.html |
| **DT-C2-T20-002** | RAM | Componentes del ordenador · https://www.ibm.com/think/topics/ram |
| **DT-C2-T20-003** | El alimentador automático de documentos (ADF) | Microsoft Support, instalar y utilizar un escáner en Windows · https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DT-C2-T20-004** | Unidad de almacenamiento no volátil con tecnología de estado sólido | Almacenamiento · https://www.ibm.com/think/topics/solid-state-drives |
| **DT-C2-T20-005** | Disco óptico DVD regrabable | Medios ópticos · https://www.verbatim-europe.com/en/disc-types |
| **DT-C2-T20-006** | Impresión dúplex o a doble cara | Microsoft Support, documentación de impresoras y escáneres Windows · https://support.microsoft.com/es-es/windows |
| **DT-C2-T20-007** | SSD | https://www.ibm.com/think/topics/solid-state-drives |
| **DT-C2-T20-008** | No: M.2 es formato y no determina por sí solo el protocolo | https://www.intel.com/content/www/us/en/support/articles/000025060/memory-and-storage.html |
| **DT-C2-T20-009** | Su forma no garantiza velocidad ni prestaciones concretas | https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf |
| **DT-C2-T20-010** | Memoria RAM del sistema, compartida con otras tareas | https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html |
| **DT-C2-T20-011** | OCR | https://support.microsoft.com/es-es/windows |
| **DT-C2-T20-012** | El ADF facilita hojas sucesivas; el escaneado por ambas caras requiere capacidad dúplex del equipo | https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows |
| **DT-C2-T20-013** | Administrar trabajos pendientes de impresión | https://support.microsoft.com/es-es/windows |
| **DT-C2-T20-014** | ppp (dpi) expresa resolución; ppm expresa páginas por minuto | HP Support: tecnologías y parámetros de impresión · https://support.hp.com/pl-pl/document/ish_2281139-2041471-16?fallbackLocale=us-en&validated=true |
| **DT-C2-T20-015** | El HDD utiliza platos magnéticos y partes móviles | https://www.ibm.com/think/topics/solid-state-drives |
| **DT-C2-T20-016** | FAT32 limita el tamaño de cada archivo a menos de 4 GiB | https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison |
| **DT-C2-T20-017** | exFAT | https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison |
| **DT-C2-T20-018** | Capacidad de suministro nominal; no implica consumir 750 W en todo momento | https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html |
| **DT-C2-T20-019** | 480 Mb/s (megabits por segundo) | https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf |
| **DT-C2-T20-020** | Utilizar la expulsión segura y esperar a que termine la escritura | https://support.microsoft.com/es-es/windows |

## Bloqueos y siguiente etapa

- **C1 tema 22 y C2 tema 6, OAPGT:** se conserva el bloqueo mientras no estén localizados **los Estatutos íntegros originales, correcciones y modificaciones definitivas**. No derivar composiciones, quórums o competencias de una publicación parcial.
- **Resto de temas de Diputación Auxiliar C2:** **16 temas** de los 20 siguen en revisión (incluido el 6 bloqueado). Orden de trabajo: C2 **1–5, 7–16**, priorizando no repetir auditorías focales ya acreditadas.
- **Proximidad de exámenes:** no perder el mantenimiento de **La Puebla C2** y **UC3M C2** documentado en `AUDITORIA_CONTINUA.md` antes del **14/11/2026** y **21/11/2026** respectivamente. Esas fechas deben confirmarse en la documentación específica de cada expediente, no deducirse del banco.
- **Cierre documental general declarado:** antes **39/121** temas, ahora **43/121** con evidencia editorial de bloque (39 C1 y 4 C2). **78/121** no tienen todavía este cierre. **0/121** han alcanzado certificación integral transversal demostrada.
- **Regresión:** `tests/validate-diputacion-c2-t17-t20-cierre-20261106.mjs`, unida a `npm test`. Ajustar test heredado de matrices para aceptar cierre documental en estos cuatro temas sin alterar su alcance sobre los otros **15** revisables y el **tema 6** bloqueado.
