# Diputación Toledo Auxiliar C2 · Tema 16 · Cotejo focal de Windows 11 Pro

**Fecha:** **05/11/2026**. **Estado:** **REVISIÓN FOCAL**, no cierre integral. **Programa oficial:** BOP Toledo **197, 14/10/2026**, Anexo XI, CSV **2026.00004759**. Se conservaron **20 preguntas** y **80 alternativas** (cuatro por ítem). **Cuatro preguntas intervenidas**; **16** no cuentan con cotejo individual íntegro de distractores.

## 1. Problemas del banco original

| Pregunta | Defecto | Acción |
|---|---|---|
| **T16-007** | Repetía la diferencia copiar/mover de **T16-002** | Sustitución por extensiones de archivo |
| **T16-008** | Repetía el significado de ruta UNC de **T16-005** | Sustitución por crear carpetas con atajos |
| **T16-010** | Repetía vista del Explorador de **T16-004** | Sustitución por propiedades del archivo |
| **T16-014** | Tres distractores absurdos («BIOS», navegador, Papelera) | Sustitución por rutas de Configuración verdaderamente confundibles |

No se han cambiado IDs, claves ni número de preguntas. Distribución tras edición: **A:5 / B:4 / C:6 / D:5**.

## 2. DT-C2-T16-007 · Renombrar no convierte

**Pregunta:** En Windows 11, se cambia el nombre «informe.docx» a «informe.pdf» desde el Explorador, sin utilizar ninguna conversión de documentos. ¿Qué sucede?

| Alternativa | Literal del banco | Análisis |
|---|---|---|
| A | Windows convierte el contenido al formato PDF al cambiar la extensión. | **Falsa**: cambiar la extensión solo altera el nombre. |
| B | La extensión no se puede modificar desde el Explorador de archivos. | **Falsa**: puede editarse, aunque pueda mostrar advertencias. |
| **C** | **Solo cambia el nombre o extensión; el contenido no se transforma automáticamente en PDF.** | **Correcta**, según documentación Microsoft. |
| D | Se crean automáticamente dos archivos válidos: el DOCX y el PDF. | **Falsa**: renombrar no crea una segunda copia. |

**Fuente:** [Microsoft — Extensiones comunes en Windows](https://support.microsoft.com/es-es/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).

> ⚠️ **¡Foco Examen!:** **Renombrar .docx a .pdf no crea un PDF real**. Hay que convertir o exportar el contenido con una aplicación que lo permita.

## 3. DT-C2-T16-008 · Nueva carpeta

**Pregunta:** ¿Qué combinación crea una carpeta nueva en la ubicación actual del Explorador de archivos de Windows 11?

| Alternativa | Literal del banco | Análisis |
|---|---|---|
| **A** | **Ctrl + Mayús + N** | **Correcta**: carpeta nueva. |
| B | Ctrl + N | **Falsa**: otra ventana del Explorador. |
| C | F2 | **Falsa**: renombrar elemento seleccionado. |
| D | Alt + Entrar | **Falsa**: propiedades del elemento. |

**Fuente:** [Microsoft — Métodos abreviados del Explorador](https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows).

> ⚠️ **¡Foco Examen!:** **Ctrl+Mayús+N = carpeta** y **Ctrl+N = ventana**. La diferencia es únicamente **Mayús**, pero cambia la acción.

## 4. DT-C2-T16-010 · Propiedades

**Pregunta:** En el Explorador de archivos de Windows 11, ¿qué hace Alt + Entrar cuando hay un archivo seleccionado?

| Alternativa | Literal del banco | Análisis |
|---|---|---|
| A | Cambia su nombre, como hace F2. | **Falsa**: corresponde a F2. |
| B | Abre una segunda ventana del Explorador, como hace Ctrl + N. | **Falsa**: corresponde a Ctrl + N. |
| **C** | **Muestra las propiedades del elemento seleccionado.** | **Correcta**: función de Alt + Entrar. |
| D | Crea una carpeta nueva, como hace Ctrl + Mayús + N. | **Falsa**: corresponde a Ctrl + Mayús + N. |

**Fuente:** [Microsoft — Métodos abreviados de Windows](https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows).

> ⚠️ **¡Foco Examen!:** **Alt+Entrar** no abre un archivo ni lo renombra: muestra sus **propiedades**.

## 5. DT-C2-T16-014 · Impresoras y escáneres

**Pregunta:** En Windows 11, ¿en qué apartado de Configuración se busca y agrega una impresora o un escáner?

| Alternativa | Literal del banco | Análisis |
|---|---|---|
| A | Sistema > Almacenamiento > Sensor de almacenamiento | **Falsa**: se refiere a gestión de almacenamiento. |
| B | Cuentas > Opciones de inicio de sesión | **Falsa**: configuración de autenticación del usuario. |
| **C** | **Bluetooth y dispositivos > Impresoras y escáneres** | **Correcta**, según la ruta Microsoft. |
| D | Red e Internet > Configuración de proxy | **Falsa**: configura proxy de red, no instala impresoras. |

**Fuentes:** [Microsoft — Agregar impresora](https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows) y [Microsoft — Instalar escáner](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows).

> ⚠️ **¡Foco Examen!:** **Bluetooth y dispositivos > Impresoras y escáneres** se usa tanto para equipos locales como de red; no confundir el uso de red con la sección **Proxy**.

## 6. Estado verificable y pendientes

- Las **4 claves** y los **12 distractores** nuevos se contrastaron con documentación oficial de Microsoft; se mantuvieron los índices correctos originales.
- El manual recibió tabla de confusiones frecuentes y estado editorial actualizado sin atribuirle una certificación inexistente.
- El resto de **16 preguntas / 64 alternativas** conserva su estado anterior y requiere un cotejo individual posterior.
- **No** se ha efectuado prueba de Windows 11 Pro en un equipo real, navegador, dispositivos de impresión/escaneo, accesibilidad ni PWA. **No** hay base para decir «tema auditado integralmente».

**Siguiente acción:** revisión de las **16 preguntas restantes** (plausibilidad de distractores y eliminación de vacíos de examen) y examen práctico de la ruta de uso en Windows 11 Pro; continuar la auditoría documental pendiente del T15 y T14.
