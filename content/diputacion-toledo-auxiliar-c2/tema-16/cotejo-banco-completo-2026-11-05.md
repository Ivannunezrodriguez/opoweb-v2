# Diputación Toledo · Auxiliar Administrativo C2 · Tema 16 — cotejo completo de preguntas

**Fecha de la auditoría documental:** **05/11/2026**. **Fuente del programa:** BOP Toledo **197/2026**, **14/10/2026**, Anexo XI (CSV **2026.00004759**). **Objeto verificado:** **20 preguntas y 80 alternativas**, no el manual completo ni el funcionamiento del sitio en un navegador real.

## 1. Método y alcance verificable

Se examinaron las cuatro opciones de **cada ítem** con el contenido del epígrafe **«Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos»**, usando la documentación oficial de **Microsoft Support / Microsoft Learn**. Las claves se mantuvieron en sus posiciones: **A5 / B4 / C6 / D5**.

Los **15 enunciados/alternativas** que seguían siendo superficiales se reescribieron; los **5 ítems** previamente corregidos (T16-007, 008, 010, 014, 015) también se cotejaron en la misma pasada. Se anotaron razones distintas de aceptación y rechazo de **cada distractor**, no solo la clave. Se excluye del alcance cualquier test de interfaz de Windows 11 Pro, impresión física, conectividad real, accesibilidad y navegación.

## 2. Tabla diferencial de operaciones

| Concepto | Operación correcta | No equivale a |
|---|---|---|
| **Ctrl+X / Ctrl+V** | Mover archivo | **Ctrl+C / Ctrl+V**, que copia |
| **Supr** | Eliminar; Papelera si es compatible | **Mayús+Supr**, que la omite |
| **Ctrl+Mayús+N** | Crear carpeta | **Ctrl+N** (nueva ventana) |
| **F2** | Renombrar | **Alt+Entrar** (propiedades) |
| **UNC** | `\\servidor\recurso` | Unidad asignada `Z:` |
| **ADF** | Alimentar páginas para escanear | **OCR**, que reconoce caracteres |
| **Dúplex impresión** | Ambas caras de una hoja | Dos páginas por una cara |
| **Impresora PDF** | Salida electrónica de documento digital | Escanear papel |

> ⚠️ **¡Foco Examen!:** En un test de Windows, la diferencia entre **vista**, **ordenación**, **atributos** y **permisos** suele aparecer en opciones aparentemente similares. Nunca se gana permiso de escritura por hacer visible un archivo ni por cambiar la letra de una unidad.

## 3. Cotejo por pregunta y alternativa literal

### Archivos, carpetas y eliminación

#### DT-C2-T16-001 · Atajo de apertura de Explorador

**Enunciado:** ¿Qué combinación de teclas abre el Explorador de archivos de Windows 11 desde cualquier aplicación?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Windows + R | **Incorrecta**: Windows+R abre Ejecutar; no es el Explorador. |
| **B** | Windows + I | **Incorrecta**: Windows+I abre Configuración, no carpetas. |
| **C ✓** | Windows + E | **Correcta**: Windows+E abre Explorador de archivos. |
| **D** | Windows + D | **Incorrecta**: Windows+D alterna la vista del escritorio, no abre Explorador. |

**Referencia técnica:** Microsoft, atajos de teclado de Windows · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows

> ⚠️ **¡Foco Examen!:** **E** de Explorador: **Windows+E**. No confundas el acceso a **Ejecutar (Windows+R)** con el Explorador.

#### DT-C2-T16-002 · Cortar y pegar

**Enunciado:** Un auxiliar selecciona un archivo en el Explorador, pulsa Ctrl + X, entra en otra carpeta y pulsa Ctrl + V. Si la operación se completa, ¿cuál es su efecto habitual?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Crea solo un acceso directo en destino, dejando el archivo de origen. | **Incorrecta**: Un acceso directo requiere otra operación; cortar+pegar no lo crea. |
| **B** | Crea una segunda copia independiente y conserva siempre la de origen. | **Incorrecta**: Duplicar manteniendo el origen es copiar, no cortar. |
| **C** | Cambia únicamente la ruta mostrada sin trasladar datos ni archivo. | **Incorrecta**: El archivo se traslada realmente; no solo cambia la ruta mostrada. |
| **D ✓** | Mueve el archivo a la carpeta de destino y deja de estar en su ubicación original. | **Correcta**: Se completa el traslado al destino y desaparece de la ubicación anterior. |

**Referencia técnica:** Microsoft, Explorador de archivos en Windows · https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows

> ⚠️ **¡Foco Examen!:** **Cortar+pegar = mover**; **copiar+pegar = duplicar**. Los mecanismos internos entre unidades no cambian el efecto final esperado.

#### DT-C2-T16-003 · Mayús + Supr y Papelera

**Enunciado:** Al seleccionar un archivo local en el Explorador, ¿qué diferencia a Mayús + Supr del uso ordinario de Supr?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A ✓** | Elimina el elemento sin enviarlo a la Papelera de reciclaje. | **Correcta**: Mayús+Supr evita la Papelera en la eliminación habitual del Explorador. |
| **B** | Mueve el elemento a la Papelera, como Supr, pero pide confirmación adicional. | **Incorrecta**: Supr puede usar Papelera; Mayús+Supr no se comporta igual. |
| **C** | Vacía por completo la Papelera de reciclaje, incluidos los demás archivos. | **Incorrecta**: Vaciar toda la Papelera es una orden distinta y no afecta solo a la selección. |
| **D** | Corta el archivo para que pueda pegarse en otra carpeta. | **Incorrecta**: Cortar para pegar sería Ctrl+X, que no elimina directamente el elemento. |

**Referencia técnica:** Microsoft, atajos del Explorador · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows

> ⚠️ **¡Foco Examen!:** **Mayús+Supr** evita la Papelera, pero no garantiza destruir copias, instantáneas o respaldos. La recuperación posterior no se realiza con «Restaurar» de Papelera.

#### DT-C2-T16-004 · Vistas del Explorador

**Enunciado:** ¿Qué comando del Explorador de Windows 11 permite cambiar entre iconos grandes, lista y detalles sin modificar los archivos?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Ordenar | **Incorrecta**: Ordenar cambia el criterio de orden, no entre lista/iconos/detalles. |
| **B ✓** | Ver | **Correcta**: Ver es el menú específico de modos de visualización. |
| **C** | Mostrar | **Incorrecta**: Mostrar activa visibilidad de elementos/paneles, no la vista Lista/Detalles. |
| **D** | Propiedades | **Incorrecta**: Propiedades consulta información del elemento, no el modo de vista. |

**Referencia técnica:** Microsoft, Explorador de archivos en Windows · https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows

> ⚠️ **¡Foco Examen!:** **Ver ≠ Ordenar**. Los dos aparecen en la interfaz y modifican la presentación, pero solo **Ver** elige **Detalles/Lista/Iconos**.

#### DT-C2-T16-006 · Captura de originales físicos

**Enunciado:** Una solicitud solo existe en papel y se necesita capturar su contenido como archivo digital. ¿Qué operación es imprescindible para obtener la imagen electrónica del original?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Imprimir a PDF un documento digital distinto que ya estaba guardado. | **Incorrecta**: Imprimir a PDF actúa sobre datos digitales ya existentes, no captura papel. |
| **B** | Fotocopiar el papel sin usar ningún dispositivo de captura digital. | **Incorrecta**: Fotocopiar solo produce otra hoja física, sin archivo digital. |
| **C** | Cambiar la extensión de un archivo vacío para que aparezca como .pdf. | **Incorrecta**: Renombrar un archivo vacío no captura el original. |
| **D ✓** | Escanear el original y guardar la digitalización en un archivo. | **Correcta**: El escáner convierte el contenido del papel en una imagen electrónica. |

**Referencia técnica:** Microsoft, instalación y uso de escáner en Windows · https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows

> ⚠️ **¡Foco Examen!:** **Escanear papel ≠ imprimir a PDF**. Además, una digitalización corriente no acredita por sí sola la condición de **copia auténtica**.

#### DT-C2-T16-007 · Extensiones de archivo

**Enunciado:** En Windows 11, se cambia el nombre «informe.docx» a «informe.pdf» desde el Explorador, sin utilizar ninguna conversión de documentos. ¿Qué sucede?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Windows convierte el contenido al formato PDF al cambiar la extensión. | **Incorrecta**: Cambiar nombre no transforma datos DOCX en formato PDF. |
| **B** | La extensión no se puede modificar desde el Explorador de archivos. | **Incorrecta**: El Explorador sí permite renombrar extensiones, con advertencias posibles. |
| **C ✓** | Solo cambia el nombre o extensión; el contenido no se transforma automáticamente en PDF. | **Correcta**: La extensión cambia; la codificación y el contenido permanecen. |
| **D** | Se crean automáticamente dos archivos válidos: el DOCX y el PDF. | **Incorrecta**: Renombrar no duplica ni genera una versión convertida. |

**Referencia técnica:** Microsoft, extensiones de archivos (Windows 11) · https://support.microsoft.com/es-es/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows

> ⚠️ **¡Foco Examen!:** **Cambiar .docx por .pdf ≠ convertir a PDF.** La extensión afecta a la asociación y a cómo Windows intenta abrirlo; no cambia su estructura interna.

#### DT-C2-T16-008 · Creación de carpetas

**Enunciado:** ¿Qué combinación crea una carpeta nueva en la ubicación actual del Explorador de archivos de Windows 11?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A ✓** | Ctrl + Mayús + N | **Correcta**: Ctrl+Mayús+N crea una carpeta nueva dentro de la ubicación actual. |
| **B** | Ctrl + N | **Incorrecta**: Ctrl+N abre una nueva ventana del Explorador. |
| **C** | F2 | **Incorrecta**: F2 renombra el elemento seleccionado. |
| **D** | Alt + Entrar | **Incorrecta**: Alt+Entrar abre sus propiedades. |

**Referencia técnica:** Microsoft, métodos abreviados del Explorador · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows

> ⚠️ **¡Foco Examen!:** No confundir **Ctrl+Mayús+N (nueva carpeta)** con **Ctrl+N (nueva ventana)**, **F2 (renombrar)** ni **Alt+Entrar (propiedades)**.

#### DT-C2-T16-010 · Propiedades del archivo

**Enunciado:** En el Explorador de archivos de Windows 11, ¿qué hace Alt + Entrar cuando hay un archivo seleccionado?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Cambia su nombre, como hace F2. | **Incorrecta**: F2 es renombrar; Alt+Entrar no modifica el nombre. |
| **B** | Abre una segunda ventana del Explorador, como hace Ctrl + N. | **Incorrecta**: Ctrl+N abre ventana nueva, distinto de Alt+Entrar. |
| **C ✓** | Muestra las propiedades del elemento seleccionado. | **Correcta**: Alt+Entrar muestra las propiedades del elemento seleccionado. |
| **D** | Crea una carpeta nueva, como hace Ctrl + Mayús + N. | **Incorrecta**: Ctrl+Mayús+N crea carpeta y no abre propiedades. |

**Referencia técnica:** Microsoft, métodos abreviados del Explorador · https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows

> ⚠️ **¡Foco Examen!:** **Alt + Entrar = Propiedades**; **F2 = Cambiar nombre**. Ambos operan sobre la selección, pero no realizan la misma acción.

#### DT-C2-T16-011 · Elementos ocultos

**Enunciado:** En Windows 11 se activa Explorador > Ver > Mostrar > Elementos ocultos. ¿Cuál es el efecto de esa acción?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Quita automáticamente el atributo oculto de cada archivo afectado. | **Incorrecta**: La opción de visualización no borra el atributo Oculto del archivo. |
| **B** | Permite modificar todos los archivos protegidos del sistema sin permisos especiales. | **Incorrecta**: Mostrar no concede privilegios para modificar archivos protegidos. |
| **C** | Convierte los archivos ocultos en accesos directos para no mostrar su ubicación real. | **Incorrecta**: No cambia objetos a accesos directos; únicamente los muestra. |
| **D ✓** | Muestra los elementos configurados como ocultos, sin cambiar por ello sus atributos o permisos. | **Correcta**: Hace visibles los elementos ocultos sin modificar datos ni permisos. |

**Referencia técnica:** Microsoft, Explorador de archivos (mostrar elementos ocultos) · https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows

> ⚠️ **¡Foco Examen!:** **Mostrar ocultos** es una opción de **visualización**, no una orden de **desproteger** ni de **dar permisos**.

#### DT-C2-T16-012 · Recuperación desde Papelera

**Enunciado:** Un usuario elimina con Supr un archivo de una unidad local compatible con Papelera. ¿Dónde suele poder restaurarlo si todavía no se ha vaciado?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A ✓** | En la Papelera de reciclaje, mediante la opción Restaurar. | **Correcta**: En ubicaciones compatibles, Papelera permite restaurar lo eliminado. |
| **B** | En Acceso rápido, que conserva una segunda copia de todos los archivos abiertos. | **Incorrecta**: Acceso rápido muestra accesos; no guarda una copia de todo elemento. |
| **C** | En el panel Detalles, que guarda automáticamente el contenido anterior de los archivos. | **Incorrecta**: El panel Detalles presenta metadatos, no almacena copias de recuperación. |
| **D** | En el menú de vistas del Explorador, porque la eliminación solo los oculta temporalmente. | **Incorrecta**: Las vistas no recuperan elementos eliminados de la unidad. |

**Referencia técnica:** Microsoft, Explorador y eliminación de archivos · https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows

> ⚠️ **¡Foco Examen!:** **Supr** puede enviar a **Papelera** en discos locales; **Mayús+Supr** la evita. No generalizar a unidades de red o ubicaciones que no usen la Papelera.

### Unidades locales y compartidas

#### DT-C2-T16-005 · Rutas UNC

**Enunciado:** En Windows 11, ¿qué representa una ruta UNC como «\\servidor\carpeta»?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Una ruta local absoluta con letra de volumen, como C:\Datos. | **Incorrecta**: C:\Datos es ruta local de volumen, no convención UNC con servidor. |
| **B** | Solo la letra que asigna el usuario a una unidad, como Z:, sin identificar el recurso compartido. | **Incorrecta**: La letra Z: no identifica por sí sola servidor/recurso; puede estar mapeada. |
| **C ✓** | La dirección de un recurso compartido de red identificando servidor y carpeta compartida. | **Correcta**: UNC designa servidor y recurso compartido con dos barras iniciales. |
| **D** | Una dirección web HTTP/HTTPS que se abre necesariamente en el navegador. | **Incorrecta**: HTTP/HTTPS son protocolos web; no equivalen a una ruta de archivo UNC. |

**Referencia técnica:** Microsoft Learn, nombres y rutas UNC · https://learn.microsoft.com/es-es/windows/win32/fileio/naming-a-file

> ⚠️ **¡Foco Examen!:** **UNC = \\servidor\recurso**; **Z:** es una letra asignada y **C:\** una ruta con volumen. No basta con que una unidad se use en red para que su letra sea la ruta UNC.

#### DT-C2-T16-009 · Unidades de red asignadas

**Enunciado:** En el Explorador de Windows 11 se muestra la unidad Z: y el administrador confirma que está asignada a una carpeta compartida del servidor. ¿Qué significa?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Z: es necesariamente una partición física nueva del disco interno. | **Incorrecta**: La letra asignada puede enlazar con servidor; no acredita disco interno. |
| **B ✓** | Z: funciona como una letra de acceso a un recurso de red, sin convertirlo en almacenamiento local. | **Correcta**: La asignación mapea un recurso compartido con una letra de unidad. |
| **C** | Windows ha duplicado automáticamente en el disco local todos los archivos del servidor. | **Incorrecta**: Asignar no replica el contenido del servidor en local automáticamente. |
| **D** | La asignación elimina la necesidad de disponer de conexión y permisos para acceder a ese recurso. | **Incorrecta**: Red y permisos continúan siendo necesarios para acceder al recurso. |

**Referencia técnica:** Microsoft, uso compartido y asignación de unidades de red · https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows

> ⚠️ **¡Foco Examen!:** **Asignar Z: ≠ copiar datos**. Si la red se desconecta o el usuario carece de acceso, la letra puede permanecer visible y no abrir el recurso.

#### DT-C2-T16-020 · Permisos de escritura en red

**Enunciado:** Un usuario puede abrir y leer archivos en una carpeta compartida de red, pero no tiene permisos de escritura. ¿Qué ocurre normalmente si intenta guardar allí un archivo nuevo?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A ✓** | La escritura puede ser denegada porque leer el recurso no implica permiso para crear archivos. | **Correcta**: La autorización de lectura no implica permiso de crear o modificar archivos. |
| **B** | Actualizar el Explorador con F5 concede automáticamente permisos de escritura. | **Incorrecta**: F5 actualiza vista, sin alterar la política de acceso en servidor. |
| **C** | Usar la ruta UNC en lugar de la unidad Z: evita las restricciones de acceso del servidor. | **Incorrecta**: Cambiar Z: por UNC no elude permisos del mismo recurso compartido. |
| **D** | La unidad de red se transforma en una carpeta local con escritura libre al intentar guardar. | **Incorrecta**: No ocurre conversión de unidad remota en disco local al intentar guardar. |

**Referencia técnica:** Microsoft, uso compartido de archivos en red · https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows

> ⚠️ **¡Foco Examen!:** **Leer ≠ escribir**. Tanto **\\servidor\recurso** como su letra asignada, por ejemplo **Z:**, requieren permisos adecuados en el servidor.

### Impresión, escáner y OCR

#### DT-C2-T16-013 · Imprimir frente a escanear

**Enunciado:** ¿Cuál es la diferencia correcta entre imprimir en una impresora física y digitalizar un documento mediante escáner?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Ambas tareas convierten necesariamente documentos en imágenes PDF buscables. | **Incorrecta**: Ni imprimir ni escanear generan por sí mismos siempre PDF con OCR. |
| **B ✓** | La impresora física produce una salida en papel; el escáner captura el contenido de un original en un archivo digital. | **Correcta**: La impresión física produce papel; el escaneo convierte el original en archivo. |
| **C** | La digitalización solo crea copias en papel mientras que la impresión siempre guarda un archivo. | **Incorrecta**: Los sentidos están invertidos; escanear es digitalizar, no fotocopiar. |
| **D** | La impresora física incorpora OCR automáticamente y el escáner no genera archivos. | **Incorrecta**: El OCR no es automático por imprimir y un escáner sí captura datos digitales. |

**Referencia técnica:** Microsoft, escáner en Windows · https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows

> ⚠️ **¡Foco Examen!:** La palabra **impresora física** es esencial: **imprimir a PDF** es una salida digital y **no digitaliza papel**. **Escanear** no implica aplicar OCR.

#### DT-C2-T16-014 · Agregar impresoras y escáneres

**Enunciado:** En Windows 11, ¿en qué apartado de Configuración se busca y agrega una impresora o un escáner?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Sistema > Almacenamiento > Sensor de almacenamiento | **Incorrecta**: Almacenamiento administra espacio, no instala impresoras. |
| **B** | Cuentas > Opciones de inicio de sesión | **Incorrecta**: Opciones de inicio de sesión gestiona autenticación, no dispositivos. |
| **C ✓** | Bluetooth y dispositivos > Impresoras y escáneres | **Correcta**: Bluetooth y dispositivos incluye el apartado Impresoras y escáneres. |
| **D** | Red e Internet > Configuración de proxy | **Incorrecta**: Proxy configura conectividad/intermediarios, no altas de impresoras. |

**Referencia técnica:** Microsoft, instalación de impresoras/escáneres Windows 11 · https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows

> ⚠️ **¡Foco Examen!:** Las impresoras de red **no se agregan desde el apartado Proxy**: también se administran en **Impresoras y escáneres**.

#### DT-C2-T16-015 · Instalación manual de impresoras

**Enunciado:** En Windows 11, una impresora compatible no aparece en la búsqueda automática de «Impresoras y escáneres». ¿Cuál es la actuación adecuada?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Cambiar la impresora predeterminada, lo que fuerza a detectar cualquier impresora ausente. | **Incorrecta**: Predeterminada elige dispositivo instalado; no garantiza hallar uno ausente. |
| **B** | Vaciar la cola de impresión, porque instala automáticamente los controladores de dispositivos no detectados. | **Incorrecta**: Vaciar la cola no instala un controlador para una impresora no detectada. |
| **C** | Activar la detección de redes, que garantiza por sí sola el alta de cualquier impresora USB o de red. | **Incorrecta**: Detección de redes no garantiza alta de cualquier equipo, y menos USB. |
| **D ✓** | Utilizar la opción de agregar manualmente, comprobando conexión, dirección o puerto y controlador compatible. | **Correcta**: Agregar manualmente permite seleccionar conexión/puerto/controlador cuando no aparece. |

**Referencia técnica:** Microsoft, agregar o instalar una impresora en Windows · https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows

> ⚠️ **¡Foco Examen!:** **No detectada ≠ imposible de instalar.** Distinguir detección, instalación manual, controlador y administración de trabajos ya enviados.

#### DT-C2-T16-016 · Cola de impresión

**Enunciado:** Una impresora tiene varios documentos pendientes de imprimir. ¿Qué muestra su cola de impresión en Windows 11?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A ✓** | Los trabajos de impresión pendientes asociados a esa impresora, que pueden consultarse y gestionarse. | **Correcta**: Cola de impresión muestra trabajos pendientes de la impresora seleccionada. |
| **B** | Solo la lista de impresoras instaladas, aunque ninguna tenga trabajos enviados. | **Incorrecta**: Inventario de impresoras instaladas no es la cola de trabajos. |
| **C** | Exclusivamente los últimos archivos escaneados por el equipo multifunción. | **Incorrecta**: Archivos escaneados se guardan aparte y no constituyen trabajos de impresión. |
| **D** | La ubicación predeterminada de los PDF guardados por Microsoft Print to PDF. | **Incorrecta**: La ubicación de PDF guardados es una carpeta del usuario, no la cola. |

**Referencia técnica:** Microsoft, ver cola de impresión en Windows · https://support.microsoft.com/es-es/windows/hardware/printer/view-a-printer-s-print-queue-in-windows

> ⚠️ **¡Foco Examen!:** **Cola de impresión = trabajos pendientes** de una **impresora concreta**; no confundir con lista de impresoras instaladas ni carpeta de archivos.

#### DT-C2-T16-017 · Impresión dúplex

**Enunciado:** En el cuadro de impresión de Word para Windows, ¿qué describe la opción de impresión dúplex?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Imprimir dos copias de cada página en hojas diferentes. | **Incorrecta**: Dos copias no emplean necesariamente las dos caras de una hoja. |
| **B ✓** | Imprimir en ambas caras de una misma hoja, automáticamente o mediante giro manual cuando proceda. | **Correcta**: Dúplex utiliza anverso y reverso; puede ser automático o manual. |
| **C** | Escanear las dos caras del original para crear un PDF. | **Incorrecta**: Escaneo a dos caras es una función de captura diferente de imprimir dúplex. |
| **D** | Colocar dos páginas reducidas en la misma cara de una hoja, sin utilizar el reverso. | **Incorrecta**: Dos páginas por cara es diseño de hoja, no impresión dúplex. |

**Referencia técnica:** Microsoft, imprimir en ambas caras del papel · https://support.microsoft.com/es-es/word/print-on-both-sides-of-the-paper-duplex-printing-in-word

> ⚠️ **¡Foco Examen!:** **Dúplex = dos caras**; no equivale a **2 páginas por cara** ni a **escaneo a doble cara**. Automático y manual dependen de las opciones de impresión.

#### DT-C2-T16-018 · Alimentador ADF

**Enunciado:** Un escáner debe capturar un lote de 30 hojas sin colocarlas una a una sobre el cristal. ¿Qué componente facilita alimentar automáticamente las páginas?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | Cristal plano del escáner | **Incorrecta**: Un cristal plano requiere intervención manual para cada hoja. |
| **B** | Función OCR del software de captura | **Incorrecta**: OCR reconoce caracteres, pero no alimenta físicamente documentos. |
| **C ✓** | Alimentador automático de documentos (ADF) | **Correcta**: ADF introduce hojas sucesivas desde un alimentador del escáner. |
| **D** | Microsoft Print to PDF | **Incorrecta**: La impresora PDF no admite papel ni alimenta originales. |

**Referencia técnica:** Microsoft, instalar y utilizar un escáner · https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows

> ⚠️ **¡Foco Examen!:** **ADF = alimentación de hojas**; **OCR = reconocimiento de texto**. Que un escáner tenga ADF no significa que también admita **dúplex**.

#### DT-C2-T16-019 · Reconocimiento óptico OCR

**Enunciado:** Un archivo escaneado contiene una imagen de texto, pero no permite seleccionar palabras. ¿Qué tecnología reconoce los caracteres de la imagen para convertirlos en texto utilizable?

| Opción | Literal exacto | Cotejo |
|---|---|---|
| **A** | ADF | **Incorrecta**: ADF desplaza hojas por el escáner; no reconoce caracteres. |
| **B** | Guardar como PDF de imagen | **Incorrecta**: PDF puede contener únicamente imágenes sin texto seleccionado. |
| **C** | Impresión dúplex | **Incorrecta**: Dúplex imprime en ambas caras, no convierte imágenes en caracteres. |
| **D ✓** | Reconocimiento óptico de caracteres (OCR) | **Correcta**: OCR extrae caracteres de una imagen, como las acciones de texto de Recortes. |

**Referencia técnica:** Microsoft, OCR y acciones de texto en Recortes · https://support.microsoft.com/es-es/windows/apps/use-snipping-tool-to-capture-screenshots

> ⚠️ **¡Foco Examen!:** **PDF no es sinónimo de OCR**. Un PDF escaneado puede contener exclusivamente imágenes; hay que realizar reconocimiento de texto si se necesita seleccionarlo o buscarlo.

## 4. Cierre del banco y límites documentados

- **20/20** enunciados inspeccionados y **80/80** opciones explicadas individualmente en este documento.
- **15** preguntas reescritas en esta revisión y **5** de la revisión previa reevaluadas. Los IDs, claves y posiciones no cambian.
- **No implica una certificación integral del tema**: el manual extenso necesita su propio contraste de todas las afirmaciones, las fuentes deben seguir vigentes, faltan pruebas de navegador real, móvil, PWA, accesibilidad y el entorno Windows 11 Pro.
- **Estado editorial del banco:** `COTEJO_TECNICO_BANCO_20_80`. **Estado de manual/tema:** `EN_AUDITORIA`. **Aprobación expresa del usuario:** no acreditada para un cierre integral.

**Siguiente prioridad:** terminar T14 y T15 en base a la normativa oficial y realizar pruebas de navegación y fidelidad del tema 16. El T06 del OAPGT queda reservado para cotejo de Estatutos íntegros vigentes.
