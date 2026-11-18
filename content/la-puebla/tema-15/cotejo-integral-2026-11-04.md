# La Puebla de Montalbán · Tema 15 · Cotejo técnico-editorial integral del test

**Fecha de contraste: 04/11/2026.** Programa oficial: **BOP Toledo n.º 82, 05/05/2026, anuncio 2026-1965**, Anexo I, tema 15: «Microsoft Windows I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos».

## 1. Alcance y fuentes primarias

- **Manual y cinco bloques** publicados de Windows I; correspondencia con los **5 incisos exigidos** en `matriz.json`.
- **12 preguntas, 48 alternativas** del banco `preguntas.json`, comprobadas una a una contra las explicaciones, claves y atajos de teclado.
- Microsoft: [atajos de teclado de Windows](https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows), [uso compartido y unidad de red](https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows), [escáner de Windows](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows), [soporte de Windows 10](https://support.microsoft.com/es-es/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025), [directorio de perfiles predeterminado](https://learn.microsoft.com/es-es/windows/win32/shell/knownfolderid).
- El fin de soporte **ordinario** de Windows 10 fue el **14/10/2025**. El programa **ESU** puede proporcionar actualizaciones de seguridad a dispositivos elegibles; no equivale a restaurar el soporte ordinario.

| Inciso BOP | Desarrollo | Contraste |
|---|---|---|
| Crear/copiar/borrar | Bloques 1–2 | Comandos, efectos, seleccion, renombrado, Papelera y excepciones |
| Unidades locales | Bloque 3 | Disco físico, partición, volumen, letra y rutas |
| Unidades de red | Bloque 3 | UNC, recurso compartido, unidad asignada y permisos |
| Impresión | Bloque 4 | Controlador, cola, PDF, opciones y seguridad |
| Digitalización | Bloque 5 | Alimentador/plano, formatos, destino, OCR y comprobación |

> ⚠️ **¡Foco Examen!:** **Ctrl + arrastrar = copiar**, **Mayús + arrastrar = mover**, **Alt + arrastrar = acceso directo**. El comportamiento predeterminado del arrastre depende de la unidad origen y destino. **Mayús + Supr** evita la Papelera en vez de enviarla allí.

## 2. Inspección de las 12 preguntas y 48 alternativas

### LP-T15-001 · ¿Qué efecto produce normalmente la operación Copiar y pegar sobre un archivo en Windows?

**Respuesta correcta: D**. **Texto exacto:** Crea otro ejemplar y conserva el original. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartados 6 y 8.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Traslada el archivo y elimina el original | **Incorrecta.** Confunde copiar con cortar/mover: al copiar permanece el archivo origen. |
| **B** | Crea únicamente un acceso directo | **Incorrecta.** Un acceso directo no es una segunda copia del archivo. |
| **C** | Cambia la extensión del archivo | **Incorrecta.** El cambio de extensión es una operación de nombre, no de copia. |
| **D** | Crea otro ejemplar y conserva el original | **Correcta.** La copia conserva el original y crea otro ejemplar en destino. |

> ⚠️ **¡Foco Examen!:** Copiar no equivale a mover ni a crear un acceso directo; son operaciones diferentes.

### LP-T15-002 · ¿Qué hace normalmente el atajo Ctrl + Mayús + N en el Explorador de archivos?

**Respuesta correcta: C**. **Texto exacto:** Crea una carpeta nueva. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 7.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Abre las propiedades del elemento | **Incorrecta.** Alt+Intro abre Propiedades; no crea carpeta. |
| **B** | Elimina sin pasar por la Papelera | **Incorrecta.** Mayús+Supr solicita borrar sin Papelera. |
| **C** | Crea una carpeta nueva | **Correcta.** Ctrl+Mayús+N crea una carpeta nueva en el Explorador. |
| **D** | Selecciona todos los archivos | **Incorrecta.** Ctrl+A selecciona todos los elementos. |

> ⚠️ **¡Foco Examen!:** No debe confundirse con Ctrl + N de algunas aplicaciones ni con Mayús + Supr.

### LP-T15-003 · Al arrastrar un archivo desde una unidad local a otra unidad distinta, ¿qué operación realiza Windows normalmente?

**Respuesta correcta: B**. **Texto exacto:** Lo copia. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 8.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Lo mueve | **Incorrecta.** Mover es lo ordinario dentro de una misma unidad; entre unidades suele copiar. |
| **B** | Lo copia | **Correcta.** Correcta como comportamiento predeterminado entre unidades diferentes, sin modificadores. |
| **C** | Lo elimina | **Incorrecta.** Arrastrar no equivale a eliminar. |
| **D** | Crea siempre un acceso directo | **Incorrecta.** Crear un acceso directo no es siempre el resultado; Alt lo fuerza. |

> ⚠️ **¡Foco Examen!:** Dentro de la misma unidad suele mover; hacia otra unidad suele copiar. La regla depende del destino.

### LP-T15-004 · ¿Qué modificador fuerza normalmente la creación de un acceso directo al arrastrar un elemento?

**Respuesta correcta: A**. **Texto exacto:** Alt. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 8.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Alt | **Correcta.** Alt+arrastrar crea un acceso directo al original. |
| **B** | Ctrl | **Incorrecta.** Ctrl+arrastrar fuerza copia. |
| **C** | Mayús | **Incorrecta.** Mayús+arrastrar fuerza movimiento. |
| **D** | Tab | **Incorrecta.** Tab no es el modificador para crear accesos directos. |

> ⚠️ **¡Foco Examen!:** Ctrl fuerza copia y Mayús fuerza movimiento; Alt es el modificador del acceso directo.

### LP-T15-005 · ¿Qué consecuencia tiene cambiar manualmente la extensión .jpg de un archivo por .pdf?

**Respuesta correcta: B**. **Texto exacto:** Cambia el nombre, pero no transforma realmente el formato. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartados 4 y 13.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Convierte siempre la imagen en un PDF válido | **Incorrecta.** Renombrar no transforma los bytes en un documento PDF. |
| **B** | Cambia el nombre, pero no transforma realmente el formato | **Correcta.** Cambiar .jpg por .pdf modifica el nombre, pero no convierte el contenido. |
| **C** | Comprime automáticamente el archivo | **Incorrecta.** La compresión no deriva automáticamente de renombrar. |
| **D** | Digitaliza el documento | **Incorrecta.** La digitalización requiere un dispositivo de captura. |

> ⚠️ **¡Foco Examen!:** Extensión y formato no son equivalentes; renombrar no realiza una conversión de archivo.

### LP-T15-006 · ¿Qué acción solicita normalmente Mayús + Supr sobre un archivo?

**Respuesta correcta: C**. **Texto exacto:** Eliminarlo sin pasar por la Papelera. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartados 6 y 7.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Moverlo a la Papelera | **Incorrecta.** Supr suele enviar a Papelera cuando el tipo de unidad y configuración lo permiten. |
| **B** | Restaurarlo | **Incorrecta.** Restaurar recupera un elemento ya enviado a Papelera. |
| **C** | Eliminarlo sin pasar por la Papelera | **Correcta.** Mayús+Supr solicita eliminar sin utilizar la Papelera. |
| **D** | Renombrarlo | **Incorrecta.** F2 cambia el nombre, no elimina. |

> ⚠️ **¡Foco Examen!:** Supr suele enviar a Papelera cuando procede; Mayús + Supr evita ese paso.

### LP-T15-007 · ¿Cuál de las siguientes es una ruta UNC válida de red?

**Respuesta correcta: A**. **Texto exacto:** \\servidor\recurso\expedientes. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartados 4 y 10.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | \\servidor\recurso\expedientes | **Correcta.** Es la sintaxis UNC: doble barra invertida, servidor y recurso compartido. |
| **B** | C:\Usuarios\Ana\Documentos | **Incorrecta.** Es una ruta local con letra de volumen, no UNC. |
| **C** | Z:\expedientes | **Incorrecta.** Puede designar una unidad mapeada, pero no expresa la ruta UNC. |
| **D** | https://servidor/recurso | **Incorrecta.** Es una URL HTTP(S), no la sintaxis UNC de archivos de Windows. |

> ⚠️ **¡Foco Examen!:** Z: puede ser una unidad de red asignada, pero no es la forma UNC del recurso.

### LP-T15-008 · Asignar el recurso compartido \\servidor\documentos a la letra Z: significa que:

**Respuesta correcta: A**. **Texto exacto:** Sigue siendo un recurso remoto dependiente de red y permisos. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 10.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Sigue siendo un recurso remoto dependiente de red y permisos | **Correcta.** Es un acceso al recurso de red; no cambia de ubicación los datos. |
| **B** | Se convierte físicamente en un disco local | **Incorrecta.** Asignar Z: no transforma el servidor en un disco físico local. |
| **C** | Se copia automáticamente todo su contenido al equipo | **Incorrecta.** La asignación de letra no copia automáticamente el recurso. |
| **D** | Deja de necesitar credenciales | **Incorrecta.** El acceso puede seguir exigiendo autenticación y autorización. |

> ⚠️ **¡Foco Examen!:** La letra de unidad no demuestra que el almacenamiento sea local ni que exista una copia offline.

### LP-T15-009 · ¿Qué función cumple Microsoft Print to PDF?

**Respuesta correcta: D**. **Texto exacto:** Genera un archivo PDF mediante una impresora virtual. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 11.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Digitaliza un documento físico | **Incorrecta.** Escanear parte de un documento físico y un escáner; aquí hay impresión virtual. |
| **B** | Reconoce texto mediante OCR | **Incorrecta.** OCR reconoce texto a partir de una imagen, no es función propia de imprimir a PDF. |
| **C** | Envía el documento obligatoriamente a una impresora de papel | **Incorrecta.** La impresora virtual no imprime papel. |
| **D** | Genera un archivo PDF mediante una impresora virtual | **Correcta.** La salida de Microsoft Print to PDF es un archivo PDF. |

> ⚠️ **¡Foco Examen!:** Imprimir en PDF no es escanear ni aplicar OCR a un documento físico.

### LP-T15-010 · Si un trabajo no sale por la impresora, ¿qué actuación es más adecuada antes de reenviarlo varias veces?

**Respuesta correcta: D**. **Texto exacto:** Revisar la cola de impresión. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartados 11 y 13.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Cambiar la extensión del documento | **Incorrecta.** Cambiar extensión no resuelve necesariamente incidencias de cola. |
| **B** | Eliminar el controlador sin comprobar nada | **Incorrecta.** Eliminar el controlador sin diagnóstico puede agravar el problema. |
| **C** | Digitalizar el documento | **Incorrecta.** Escanear es independiente de los trabajos de impresión pendientes. |
| **D** | Revisar la cola de impresión | **Correcta.** Revisar primero la cola evita crear duplicados y permite ver bloqueos. |

> ⚠️ **¡Foco Examen!:** Reenviar repetidamente un trabajo atascado puede provocar impresiones duplicadas cuando se resuelva el bloqueo.

### LP-T15-011 · ¿Qué proceso convierte un original físico en un archivo digital mediante un escáner?

**Respuesta correcta: B**. **Texto exacto:** Digitalización. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 12.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | Impresión virtual | **Incorrecta.** Impresión virtual crea PDF a partir de una fuente digital; no captura papel. |
| **B** | Digitalización | **Correcta.** Un escáner convierte un original físico en representación digital. |
| **C** | Compresión | **Incorrecta.** La compresión reduce o codifica datos; no define la captura del original. |
| **D** | Asignación de unidad | **Incorrecta.** Asignar unidad modifica el acceso a un recurso remoto; no digitaliza. |

> ⚠️ **¡Foco Examen!:** Digitalizar no es imprimir en PDF, aunque ambas operaciones puedan terminar en un archivo PDF.

### LP-T15-012 · Tras escanear una página como imagen, ¿qué afirmación es correcta respecto al OCR?

**Respuesta correcta: C**. **Texto exacto:** El OCR es un proceso distinto que reconoce texto dentro de la imagen. **Fuente del manual:** content/la-puebla/tema-15/manual.md · apartado 12.

| Opción | Alternativa literal | Verificación |
|---|---|---|
| **A** | La digitalización convierte siempre el texto en editable | **Incorrecta.** Un escaneo puede generar imagen sin texto editable. |
| **B** | El OCR solo sirve para imprimir | **Incorrecta.** OCR no es una función limitada a imprimir. |
| **C** | El OCR es un proceso distinto que reconoce texto dentro de la imagen | **Correcta.** OCR intenta reconocer caracteres; pueden existir errores y requiere comprobación. |
| **D** | El OCR sustituye al escáner físico | **Incorrecta.** OCR necesita una imagen/captura u otra entrada; no sustituye al hardware de captura. |

> ⚠️ **¡Foco Examen!:** Escanear crea una imagen o archivo digital, pero el reconocimiento de texto requiere OCR.

## 3. Incidencias, decisiones y cautelas

- **Precisión corregida en los ejemplos de rutas:** la carpeta física predeterminada de perfiles en Windows suele ser `C:\Users`, aunque el Explorador localizado pueda mostrar **Usuarios**. `%USERPROFILE%` identifica la carpeta personal sin presuponer la ruta física de un equipo concreto. La documentación española de Microsoft usa ocasionalmente la traducción `C:\Usuarios` al explicar rutas, pero el identificador del sistema `FOLDERID_UserProfiles` documenta `%SystemDrive%\Users`.
- **Exactitud de claves:** las **12** claves numéricas del JSON señalan literalmente la alternativa declarada en `respuestaLiteral`. Los distractores no crean una segunda respuesta defendible dentro del supuesto del enunciado.
- **Cautela de entorno:** los atajos y comandos se verifican en Windows y Explorador actuales; interfaz, permisos, impresora, controlador o políticas corporativas pueden alterar opciones disponibles. No son garantías universales.
- **Sin extrapolación jurídica:** una digitalización no implica por sí sola copia auténtica, firma electrónica ni validez administrativa. Eso exige atender a su normativa específica, fuera del núcleo de este tema.
- **Prueba funcional de interfaz pendiente:** este cotejo verifica contenido y estructura del banco, **no** demuestra una ejecución completa de la web en móvil/escritorio, modo sin red, simulacros, almacenamiento o accesibilidad.

**Resultado editorial:** **Tema 15 revisado en manual, cinco bloques y 48 alternativas**. Puede señalarse como *cotejo técnico-editorial completado*, no como certificación funcional global de OpoWeb.
