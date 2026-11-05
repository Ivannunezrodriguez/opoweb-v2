# Tema 40 · Periféricos del ordenador personal

## Epígrafe oficial

**Conceptos generales del ordenador personal II. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD y memorias USB.**

**Estado editorial:** `AUDITADO`

## Periféricos del ordenador personal

Un **periférico** es un dispositivo que permite introducir, obtener, almacenar o intercambiar información con el ordenador. No forma parte necesariamente del núcleo de procesamiento, aunque puede estar integrado físicamente en el equipo.

| Tipo | Función | Ejemplos |
|---|---|---|
| Entrada | Introducir datos | Teclado, ratón, escáner, micrófono |
| Salida | Mostrar o emitir resultados | Monitor, impresora, altavoces |
| Entrada/salida | Intercambiar datos | Pantalla táctil, tarjeta de red, memoria USB |
| Almacenamiento | Conservar información | Disco externo, memoria USB, CD o DVD |

> ⚠️ **¡Foco Examen!:** Un dispositivo puede pertenecer a más de una categoría. Una pantalla táctil es de **entrada y salida**.

## Impresoras

La impresora transforma información digital en una salida física. Sus parámetros habituales son:

- **Resolución**, medida normalmente en **ppp o dpi**.
- **Velocidad**, expresada en páginas por minuto.
- Capacidad de impresión en color.
- Impresión a una o dos caras.
- Tipo y tamaño de papel.
- Conectividad USB, Ethernet o Wi-Fi.

### Tipos principales

| Tipo | Funcionamiento | Rasgo habitual |
|---|---|---|
| Inyección de tinta | Expulsa microgotas de tinta | Buena reproducción de color |
| Láser | Utiliza tóner y proceso electrofotográfico | Rapidez y rendimiento elevado |
| Térmica | Actúa mediante calor | Tiques y etiquetas |
| Matricial | Golpea una cinta entintada | Formularios autocopiativos |

La **impresora multifunción** integra varias funciones, normalmente impresión, escaneado y copia. Sus indicadores **ppp (dpi)** y **ppm** no miden lo mismo: el primero indica **resolución** y el segundo **velocidad nominal de impresión**, en páginas por minuto.

> ⚠️ **¡Foco Examen!:** El **tóner** corresponde normalmente a la impresora láser; los **cartuchos de tinta**, a la de inyección.

## Escáneres

El escáner digitaliza documentos o imágenes. Convierte una fuente física en un archivo digital.

### Elementos y parámetros

- Resolución en **dpi**.
- Profundidad de color.
- Área máxima de digitalización.
- Fuente: cristal plano o alimentador automático.
- Formato de salida: PDF, JPEG, PNG o TIFF, entre otros.

| Sistema | Uso más adecuado |
|---|---|
| Cama plana | Fotografías, documentos únicos o delicados |
| Alimentador automático | Lotes de varias páginas |
| Dúplex | Digitalización de ambas caras |

El **OCR** reconoce caracteres presentes en una imagen y permite obtener texto editable o susceptible de búsqueda. Un PDF o JPG escaneado **no contiene necesariamente texto seleccionable** hasta que se aplica un proceso de reconocimiento.

> ⚠️ **¡Foco Examen!:** Escanear crea una imagen digital; aplicar **OCR** intenta reconocer el texto contenido en ella.

## Discos duros externos

Un disco externo es una unidad de almacenamiento no volátil conectada al ordenador, normalmente por USB.

| Tecnología | Características |
|---|---|
| HDD externo | Componentes mecánicos, gran capacidad y menor coste por unidad |
| SSD externo | Sin piezas móviles, mayor rapidez y mejor resistencia a golpes |

La **extracción segura** ayuda a evitar pérdidas de datos pendientes de escritura. Windows distingue las políticas **Extracción rápida** (sin caché de escritura en los términos documentados por Microsoft, retirada permitida cuando no hay actividad) y **Mejor rendimiento** (puede utilizar caché de escritura, y exige **Quitar hardware de forma segura**). Aunque se use Extracción rápida, **nunca debe desconectarse durante una copia activa**. Formatear una unidad crea o reorganiza su sistema de archivos y puede eliminar su contenido.

Sistemas de archivos frecuentes:

- **NTFS**: habitual en Windows, admite permisos y archivos grandes.
- **exFAT**: buena compatibilidad entre sistemas y archivos grandes.
- **FAT32**: muy compatible, pero con límite de **4 GiB menos 1 byte (4.294.967.295 bytes) por archivo**.

> ⚠️ **¡Foco Examen!:** La capacidad total del dispositivo no es el límite de tamaño por archivo. En FAT32, el máximo real por archivo es **4 GiB menos 1 byte** (2^32 − 1 bytes), no **4 GB decimales**. Una unidad FAT32 puede tener capacidad total mayor que ese límite de archivo.

## Lectores y grabadores de CD y DVD

Los discos ópticos se leen mediante láser.

| Medio | Capacidad orientativa |
|---|---:|
| CD | **700 MB** |
| DVD de una capa | **4,7 GB** |
| DVD de doble capa | **8,5 GB** |

### Modalidades

- **ROM**: solo lectura.
- **R**: grabable una vez.
- **RW**: regrabable.

Un lector puede no tener capacidad de grabación. Un grabador suele leer además los formatos compatibles.

> ⚠️ **¡Foco Examen!:** **R** no significa regrabable; esa característica corresponde a **RW**.

## Memorias USB

Una memoria USB utiliza memoria flash no volátil. Se conecta mediante una interfaz USB y aparece normalmente como unidad extraíble.

Debe distinguirse:

| Concepto | Significado |
|---|---|
| USB | Estándar de comunicación y alimentación |
| USB-A o USB-C | Forma física del conector |
| USB 2.0, USB 3.x o USB4 | Generación o prestaciones de la interfaz |

El conector **USB-C** no garantiza por sí solo una velocidad concreta. La velocidad efectiva depende del dispositivo, del puerto, del cable y del protocolo compatible.

> ⚠️ **¡Foco Examen!:** **USB-C** describe el conector, no asegura que el dispositivo funcione a la máxima velocidad disponible.

## Conexión, instalación y controladores

Los periféricos pueden conectarse mediante:

- USB.
- Bluetooth.
- Wi-Fi.
- Ethernet.
- HDMI o DisplayPort para vídeo.
- Conectores de audio.

El **controlador o driver** permite que el sistema operativo se comunique correctamente con el dispositivo. Muchos periféricos son Plug and Play, pero algunos requieren un controlador específico.

> ⚠️ **¡Foco Examen!:** Plug and Play facilita la detección y configuración; no significa que ningún dispositivo necesite controlador.

## Seguridad y conservación

- Expulsar correctamente las unidades extraíbles.
- No desconectar durante una escritura.
- Mantener copias de seguridad.
- Cifrar los soportes con información sensible.
- Desconfiar de memorias USB desconocidas.
- Destruir o borrar de forma segura soportes retirados.

## Esquema final

| Elemento | Idea clave |
|---|---|
| Impresora | Produce salida física |
| Escáner | Convierte documentos físicos en archivos digitales |
| HDD externo | Almacenamiento mecánico no volátil |
| SSD externo | Almacenamiento flash rápido y sin piezas móviles |
| CD-R/DVD-R | Grabación única |
| CD-RW/DVD-RW | Regrabables |
| Memoria USB | Almacenamiento flash extraíble |
| Driver | Comunicación entre sistema y periférico |

> ⚠️ **¡Foco Examen!:** No confundas interfaz, conector y dispositivo: USB es un estándar; USB-C es un tipo de conector; una memoria USB es un periférico de almacenamiento.

## Comparativa final de periféricos y tareas — **29/10/2026**

| Concepto | Función o característica | Trampa de examen |
|---|---|---|
| **Escáner de cama plana** | Digitaliza originales depositados sobre el cristal | Apto para libros u originales delicados |
| **ADF** | Alimentador automático de hojas | Facilita procesar documentos de varias páginas |
| **ADF dúplex** | Digitalización de **ambas caras** si el equipo lo permite | No equivale a imprimir a doble cara |
| **OCR** | Reconocimiento de texto dentro de una imagen | Escanear no garantiza texto editable |
| **Impresora láser** | Impresión normalmente mediante **tóner** | No equivale a tinta líquida |
| **Impresora térmica directa** | Calor sobre papel termosensible | No necesita cartuchos de tinta convencionales |
| **CD-R** | Soporte grabable sin reescritura ordinaria | No equivale a **CD-RW** |
| **CD-RW** | Disco borrable y regrabable en unidades compatibles | Requiere compatibilidad del lector/grabador |
| **USB-C** | Forma física del conector | No garantiza una velocidad ni potencia determinadas |
| **Controlador (driver)** | Permite la comunicación del sistema operativo con el periférico | No sustituye al dispositivo físico |
| **Expulsión segura** | Finaliza el acceso a una unidad extraíble antes de retirarla | Ayuda a evitar **pérdida de datos** |

> ⚠️ **¡Foco Examen!:** El **ADF** alimenta documentos automáticamente, mientras que el **OCR** reconoce caracteres. Un escaneo puede producir exclusivamente una imagen, sin texto seleccionable.

> ⚠️ **¡Foco Examen!:** **CD-R** significa grabable y **CD-RW** regrabable. **USB-C** identifica la geometría del conector: no asegura por sí solo transferencia de alta velocidad, vídeo o carga a determinada potencia.

> ⚠️ **¡Foco Examen!:** Windows recomienda usar **Quitar hardware de forma segura** antes de desconectar una memoria USB o disco externo para disminuir el riesgo de pérdida de datos.

**Documentación:** [Microsoft: instalar y usar un escáner](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows) y [Microsoft: retirar hardware con seguridad](https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows). **20 preguntas**; pendientes auditoría técnica integral y prueba funcional de OpoWeb.

## Auditoría de supuestos prácticos — **06/11/2026**

### Escenario 1. Un archivo muy grande no cabe en FAT32

Un pendrive de **64 GB** puede tener espacio libre suficiente y, aun así, rechazar un archivo de **5 GiB** si su sistema de archivos es **FAT32**. El problema es el **límite de tamaño por archivo**, no la capacidad disponible de la memoria. Microsoft documenta el límite máximo de FAT32 como aproximadamente **4 GiB**; exactamente, **4.294.967.295 bytes**.

| Sistema de archivos | Archivo superior a 4 GiB | Precisión de examen |
|---|---|---|
| **FAT32** | **No** | Máximo **4 GiB − 1 byte** por archivo |
| **exFAT** | **Sí**, si el volumen y las condiciones lo permiten | Adecuado para unidades extraíbles y archivos grandes |
| **NTFS** | **Sí**, según límites del sistema | Permisos y otras funciones de Windows |

> ⚠️ **¡Foco Examen!:** **4 GiB = 4.294.967.296 bytes**, frente a **4 GB = 4.000.000.000 bytes**; el máximo FAT32 es **un byte menos que 4 GiB**, no exactamente 4 GB.

### Escenario 2. Cuándo expulsar la memoria USB

Microsoft distingue dos políticas de dispositivo externo: **Extracción rápida**, predeterminada en Windows moderno y diseñada para evitar caché de escritura, y **Mejor rendimiento**, que puede utilizar caché de escritura. En la segunda **es obligatorio expulsar de forma segura** para garantizar la finalización de escrituras pendientes. En ambas políticas es una buena práctica **esperar a que termine toda transferencia**. La guía general de Microsoft recomienda expulsar antes de desconectar un soporte.

| Política de Windows | Caché de escritura | Retirada del soporte |
|---|---|---|
| **Extracción rápida** | Evita la caché de escritura de disco | Puede retirarse sin el proceso de expulsión **si no hay actividad**, según Microsoft |
| **Mejor rendimiento** | Puede utilizar caché de escritura | Exige **Quitar hardware de forma segura** |

> ⚠️ **¡Foco Examen!:** No contestes que **siempre es técnicamente imprescindible expulsar** en ambas políticas, ni que con **Extracción rápida** está permitido retirar mientras se copian archivos.

### Escenario 3. No todo USB-C es USB4

Un cable con conector **USB-C** puede estar limitado a **USB 2.0**, con velocidad teórica máxima de **480 Mb/s**. Según **USB-IF**, un cable de esta categoría **no soporta señales USB 3.2 ni USB4**, aunque tenga el mismo aspecto exterior que otro cable de mayores prestaciones.

| Magnitud | Valor o función | Error típico |
|---|---|---|
| **480 Mb/s** | Tasa teórica de enlace de USB 2.0 | No son **480 MB/s** |
| **USB-C** | Conector físico | No asegura USB4, vídeo o carga de alta potencia |
| **USB 3.2 / USB4** | Capacidades o especificaciones de datos | Su soporte depende de todo el sistema, **incluido el cable** |

> ⚠️ **¡Foco Examen!:** **Mb** son megabits y **MB** son megabytes; **1 byte = 8 bits**. La forma **USB-C** no determina por sí sola la velocidad.

### Escenario 4. Elegir periférico según tarea

| Necesidad | Periférico o función apropiada | Qué NO debe confundirse |
|---|---|---|
| Formularios **autocopiativos** multicapa | **Impresora matricial de impacto** | Impresora virtual PDF o térmica sin impacto |
| Digitalizar muchas hojas sueltas | Escáner con **ADF** | Un ADF por sí solo no garantiza **dúplex** |
| Recuperar texto buscable de imagen escaneada | **OCR** | Digitalizar sin OCR puede generar solo imagen |
| Guardar/copiar en memoria flash | **Memoria USB** | El USB-C del conector no fija velocidad |
| Reproducir DVD | **Lector compatible** | No implica que pueda **grabar** |
| Crear un DVD grabable | **Grabadora** y soporte compatible | No confundir **DVD-R** con **DVD-RW** |

> ⚠️ **¡Foco Examen!:** **ppp/dpi** mide resolución; **ppm** expresa velocidad. Una **grabadora** escribe en soportes compatibles, mientras un **lector** puede limitarse a leerlos.

**Fuentes primarias de esta revisión:** [Microsoft, sistemas de archivos](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), [Microsoft, políticas de retirada](https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media), [Microsoft, extracción segura](https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows), [USB-IF, USB-C](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf), [Epson, matriciales](https://support.epson.com/select/For-Work/Printers/Impact-Dot-Matrix/LX-300%2B-II-Impact-Printer/p/C11C640001), [Microsoft, instalación de controladores](https://support.microsoft.com/es-es/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers) y [Microsoft, escáneres](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows).

**Cierre editorial técnico-pedagógico:** **06/11/2026**, [informe detallado](../cierre-editorial-40-2026-11-06.md). Pendiente certificación funcional transversal en navegador/móvil/PWA y accesibilidad.
