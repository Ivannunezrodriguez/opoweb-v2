# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 20

**BORRADOR ADAPTADO — AUDITORÍA TÉCNICA PENDIENTE.** Base de La Puebla revisada en julio de 2026.

## Epígrafe oficial literal

> **Tema 20. Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.**

**Fuente del programa:** BOP de Toledo **n.º 197, 14/10/2026**, **Anexo XI**, código **2026.00004759**.

## Matriz del epígrafe

| Inciso | Material |
|---|---|
| Ordenador personal y componentes | CPU, RAM, placa base, firmware, almacenamiento, buses |
| Periféricos del ordenador | Entrada, salida, multifunción, puertos y controladores |
| Impresoras | Tecnologías, resolución, consumibles, colas |
| Escáneres | Digitalización, resolución, formatos, alimentadores |
| Discos duros externos y USB | Unidades, sistemas de archivos, extracción y protección |
| Lectores y grabadores CD/DVD | Soportes ópticos, lectura y grabación |

> ⚠️ **¡Foco Examen!:** No confundir **RAM** (memoria de trabajo) con **SSD/HDD** (almacenamiento), ni el conector **USB** con un tipo de memoria necesariamente.

---

## 1. ordenador componentes

**Estado:** APROBADO POR EL USUARIO

## 1. Ordenador personal

Un ordenador personal es un sistema electrónico programable destinado al uso individual o de un pequeño puesto de trabajo. Puede adoptar forma de sobremesa, portátil, equipo todo en uno o miniordenador.

No debe confundirse:

- el **equipo físico** con el sistema operativo instalado;
- el **hardware** con los programas;
- el **almacenamiento** con la memoria de trabajo;
- la potencia de un componente aislado con el rendimiento global del sistema.

## 2. Hardware, software, firmware y controladores

- **Hardware**: elementos físicos, como placa base, procesador, RAM, disco o impresora.
- **Software**: instrucciones y datos, como sistema operativo y aplicaciones.
- **Firmware**: software almacenado en el propio dispositivo para controlar funciones básicas.
- **Controlador o driver**: software que permite al sistema operativo comunicarse con un dispositivo concreto.

Un periférico puede estar correctamente conectado y, sin embargo, no funcionar si falta el controlador adecuado o existe incompatibilidad.

## 3. Placa base

La placa base o placa madre es la tarjeta principal que interconecta los componentes. Incluye o aloja:

- zócalo del procesador;
- ranuras de memoria;
- conectores de almacenamiento;
- ranuras de expansión;
- firmware UEFI;
- puertos externos;
- controladores integrados;
- conexiones de alimentación.

La compatibilidad depende del zócalo, chipset, tipo de memoria, formato físico y firmware. No cualquier procesador o módulo RAM sirve para cualquier placa.

## 4. Procesador o CPU

La unidad central de procesamiento ejecuta instrucciones y coordina operaciones. Parámetros frecuentes:

- **arquitectura**: conjunto de instrucciones y diseño general;
- **núcleos**: unidades de ejecución dentro del procesador;
- **hilos**: flujos de ejecución que el sistema puede planificar;
- **frecuencia**: ciclos por segundo, expresados normalmente en GHz;
- **memoria caché**: memoria rápida próxima al procesador;
- **consumo y temperatura**: condicionan alimentación y refrigeración.

Una frecuencia mayor no garantiza por sí sola mejor rendimiento. También influyen arquitectura, núcleos, caché, memoria, almacenamiento y tarea ejecutada.

## 5. Memoria RAM

La RAM almacena temporalmente datos e instrucciones que se están utilizando. Es **volátil**: pierde su contenido cuando deja de recibir alimentación.

Aspectos esenciales:

- **capacidad**, expresada en GB;
- **tipo o generación**, que debe ser compatible;
- **velocidad** y latencia;
- **formato DIMM** habitual en sobremesa;
- **formato SO-DIMM** habitual en portátiles y equipos compactos;
- número de canales y ranuras disponibles.

Más RAM permite mantener más datos activos, pero no sustituye a la CPU ni convierte automáticamente un disco lento en rápido.

### RAM y memoria virtual

La memoria virtual utiliza espacio de almacenamiento para complementar la RAM. Es mucho más lenta que la RAM física y no debe presentarse como equivalente.

## 6. Almacenamiento interno

### HDD

El disco duro magnético utiliza platos giratorios y cabezales mecánicos. Suele ofrecer:

- gran capacidad por coste reducido;
- menor velocidad de acceso que un SSD;
- sensibilidad a golpes durante el funcionamiento;
- ruido, vibración y consumo superiores a muchos SSD.

### SSD

La unidad de estado sólido utiliza memoria no volátil y no posee las partes móviles de un HDD. Suele proporcionar:

- menor latencia;
- arranque y carga más rápidos;
- menor ruido;
- mejor resistencia a movimientos ordinarios;
- coste por capacidad diferente según tecnología y mercado.

### SATA y NVMe

- **SATA** es una interfaz utilizada por HDD y SSD.
- **NVMe** es un protocolo optimizado para almacenamiento no volátil sobre PCI Express.
- **M.2** describe principalmente un formato y conector; una unidad M.2 puede usar distintas interfaces. No debe identificarse automáticamente M.2 con NVMe.

## 7. Disco, partición, volumen y sistema de archivos

- **disco físico**: dispositivo real;
- **partición**: división lógica de un disco;
- **volumen**: unidad lógica que el sistema puede montar y gestionar;
- **sistema de archivos**: estructura usada para organizar archivos y carpetas;
- **letra de unidad**: identificador asignado por Windows a determinados volúmenes.

Un único disco puede contener varias particiones. Del mismo modo, ver `C:` y `D:` no demuestra que existan dos discos físicos.

## 8. GPU y salida gráfica

La unidad de procesamiento gráfico genera y acelera imágenes. Puede ser:

- **integrada**, compartiendo recursos con el sistema;
- **dedicada**, con procesador gráfico y memoria propia o VRAM.

En un puesto administrativo, la GPU integrada suele cubrir tareas ordinarias. La GPU no sustituye a la CPU: están optimizadas para cargas diferentes.

## 9. Fuente de alimentación y batería

La fuente de alimentación convierte la corriente eléctrica y suministra tensiones adecuadas a los componentes. Debe ofrecer potencia, conectores y calidad suficientes.

En portátiles, la batería almacena energía. Su capacidad se degrada con ciclos, temperatura y tiempo. El adaptador de corriente debe ser compatible en tensión, potencia y protocolo.

## 10. Refrigeración

El calor se evacua mediante disipadores, ventiladores, conductos y, en algunos sistemas, refrigeración líquida. La acumulación de polvo o una ventilación deficiente puede causar:

- aumento de temperatura;
- reducción automática de rendimiento;
- ruido;
- inestabilidad;
- reducción de vida útil.

## 11. Puertos y conectividad

### USB

USB permite datos, alimentación y conexión de numerosos periféricos. Debe distinguirse:

- **USB-A, USB-B, Micro-USB o USB-C**: formas de conector;
- **USB 2.0, USB 3.x o USB4**: familias de prestaciones;
- **USB Power Delivery**: negociación de energía en configuraciones compatibles.

Un puerto USB-C no garantiza por sí solo una velocidad concreta, salida de vídeo ni una potencia determinada.

### Otros conectores

- HDMI y DisplayPort: vídeo y audio digital;
- Ethernet: red cableada;
- conectores de audio: entrada o salida analógica;
- Wi‑Fi: red inalámbrica;
- Bluetooth: conexión inalámbrica de corto alcance;
- lectores de tarjetas: acceso a SD o microSD cuando existen.

## 12. UEFI, POST y arranque

Al encender el equipo:

1. el firmware inicia y comprueba hardware básico mediante el POST;
2. identifica dispositivos de arranque;
3. carga el gestor de arranque;
4. se inicia el sistema operativo.

UEFI es la plataforma de firmware habitual en equipos actuales y sustituye funcionalmente al BIOS clásico en muchos sistemas. Modificar firmware sin conocimiento puede impedir el arranque.

## 13. Unidades de información

- 1 byte contiene 8 bits;
- las capacidades se expresan en KB, MB, GB o TB;
- fabricantes y sistemas pueden usar criterios decimales o binarios distintos;
- por ello, la capacidad mostrada puede ser menor que la cifra comercial sin que falte necesariamente espacio físico.

## 14. Errores frecuentes de examen

1. Afirmar que la RAM conserva datos sin corriente.
2. Confundir SSD con memoria RAM.
3. Identificar M.2 siempre con NVMe.
4. Creer que USB-C define por sí solo la velocidad.
5. Confundir una letra de unidad con un disco físico.
6. Afirmar que la GPU ejecuta todas las funciones de la CPU.
7. Considerar firmware y controlador como sinónimos.
8. Suponer que mayor GHz siempre implica mejor equipo.


---

## 2. perifericos impresoras

**Estado:** APROBADO POR EL USUARIO

## 1. Concepto de periférico

Un periférico es un dispositivo que permite entrada, salida, almacenamiento o comunicación con el ordenador. Puede ser externo o estar integrado físicamente.

### Clasificación funcional

- **entrada**: teclado, ratón, escáner, cámara, micrófono;
- **salida**: monitor, impresora, altavoces;
- **entrada y salida**: pantalla táctil, impresora multifunción, auriculares con micrófono;
- **almacenamiento**: disco externo, memoria USB, unidad óptica;
- **comunicación**: adaptador de red, módem, Bluetooth.

La clasificación depende de la función, no solo del aspecto. Una impresora multifunción puede ser entrada y salida.

## 2. Conexión, reconocimiento y controlador

Un dispositivo puede conectarse mediante:

- USB;
- red Ethernet;
- Wi‑Fi;
- Bluetooth;
- interfaces específicas.

**Plug and Play** permite que el sistema detecte y configure muchos dispositivos automáticamente. Esto no elimina la necesidad de controladores, firmware o configuración de red.

Debe distinguirse:

- dispositivo conectado;
- dispositivo reconocido;
- controlador instalado;
- dispositivo disponible para la aplicación;
- dispositivo configurado como predeterminado.

## 3. Impresora física, virtual y multifunción

- **impresora física**: produce salida sobre papel u otro soporte;
- **impresora virtual**: genera un archivo, como Microsoft Print to PDF;
- **multifunción**: combina impresión, escáner y copia, y a veces fax.

Una impresora virtual no es un periférico físico aunque aparezca en la lista de impresoras.

## 4. Tecnologías de impresión

### Inyección de tinta

Deposita gotas de tinta líquida mediante un cabezal. Características habituales:

- buena versatilidad en color y fotografía;
- coste inicial frecuentemente contenido;
- uso de cartuchos o depósitos;
- riesgo de secado o atascos si permanece mucho tiempo sin uso;
- coste por página dependiente del sistema de tinta.

### Láser o LED

Utiliza tóner en polvo, tambor y fijación mediante calor y presión. Características habituales:

- rapidez en documentos de texto;
- idoneidad para volúmenes elevados;
- consumibles de mayor rendimiento en muchos modelos;
- existencia de equipos monocromos y en color.

### Térmica

Aplica calor sobre papel térmico o cinta de transferencia. Es común en tickets y etiquetas. Su estudio es complementario porque el epígrafe no limita las tecnologías, pero el núcleo debe centrarse en inyección y láser.

### Impacto

Las impresoras matriciales golpean una cinta contra el papel. Son tecnología heredada, útil para formularios multicopia en determinados entornos.

## 5. Parámetros de una impresora

- **resolución**, expresada normalmente en dpi;
- **velocidad**, en páginas por minuto o imágenes por minuto;
- **monocromo o color**;
- **impresión a doble cara o dúplex**;
- **capacidad de bandejas**;
- **tamaños y tipos de papel admitidos**;
- **ciclo de trabajo**;
- **memoria interna**;
- **conectividad**;
- **coste por página**;
- **consumibles**.

Una resolución nominal elevada no garantiza por sí sola mejor resultado. Influyen el motor, el papel, la tinta o tóner y el procesamiento.

## 6. Consumibles

### Inyección

- cartuchos de tinta;
- depósitos rellenables;
- cabezal integrado o separado;
- mantenimiento y limpieza.

### Láser

- tóner;
- tambor o unidad de imagen;
- fusor;
- recipiente de tóner residual, según modelo.

No debe confundirse tóner con tinta líquida. Tampoco debe suponerse que todos los consumibles están integrados en un único cartucho.

## 7. Impresora local y de red

### Local

Se conecta directamente a un equipo, normalmente por USB. Puede compartirse, aunque dependería del equipo anfitrión y de la configuración.

### De red

Dispone de conexión propia a la red, por cable o Wi‑Fi. Varios equipos pueden enviar trabajos sin depender de un PC anfitrión concreto.

Para una impresora inalámbrica, el equipo y la impresora deben estar accesibles en la misma red o mediante el servicio configurado.

## 8. Controlador, puerto y cola

- **controlador**: traduce órdenes del sistema a instrucciones compatibles con la impresora;
- **puerto de impresora**: ruta lógica de comunicación;
- **cola**: lista de trabajos pendientes;
- **spooler**: servicio que administra la cola y entrega trabajos;
- **trabajo de impresión**: documento enviado con una configuración concreta.

Cancelar un documento en la aplicación no siempre elimina un trabajo que ya está en la cola.

## 9. Impresora predeterminada

La impresora predeterminada es la seleccionada automáticamente cuando una aplicación no elige otra. No es necesariamente la única instalada ni la físicamente más próxima.

Antes de imprimir debe comprobarse:

- impresora seleccionada;
- páginas;
- orientación;
- tamaño de papel;
- color o escala de grises;
- copias;
- doble cara;
- bandeja;
- vista previa.

## 10. Incidencias habituales

### Sin conexión

Puede deberse a:

- impresora apagada;
- cable desconectado;
- pérdida de red;
- dirección o puerto incorrectos;
- controlador defectuoso;
- cola detenida.

### Atasco de papel

Debe seguirse la ruta indicada por el fabricante, retirar el papel sin forzar mecanismos y comprobar fragmentos, guías y bandejas.

### Trabajos bloqueados

Orden razonable:

1. comprobar la cola;
2. pausar o cancelar el trabajo problemático;
3. verificar estado físico y conexión;
4. reiniciar impresora o servicio cuando proceda;
5. reenviar tras confirmar configuración.

### Mala calidad

Puede relacionarse con consumibles, cabezales, tambor, fusor, alineación, suciedad, papel o configuración.

## 11. Seguridad y administración

En entornos administrativos:

- evitar dejar documentación sensible en la bandeja;
- utilizar impresión segura con PIN cuando exista;
- revisar destinatario y dispositivo;
- no instalar controladores de origen desconocido;
- borrar trabajos o almacenamiento interno según la política del organismo;
- limitar acceso a funciones de escaneado o libreta de direcciones.

## 12. Errores frecuentes de examen

1. Confundir impresora física y Microsoft Print to PDF.
2. Confundir tóner y tinta.
3. Afirmar que una multifunción solo es dispositivo de salida.
4. Equiparar cola de impresión con impresora.
5. Creer que una impresora de red debe estar conectada por USB a cada PC.
6. Confundir dpi con páginas por minuto.
7. Suponer que cancelar en Word vacía siempre la cola.
8. Considerar el controlador como componente físico.


---

## 3. escaneres

**Estado:** APROBADO POR EL USUARIO

## 1. Función del escáner

Un escáner convierte un documento, fotografía u objeto plano en datos digitales. El resultado inicial es una imagen. Para obtener texto editable o buscable se necesita reconocimiento óptico de caracteres u OCR.

No debe confundirse:

- digitalizar con fotocopiar;
- escanear con reconocer texto;
- resolución óptica con ampliación por software;
- archivo PDF con PDF buscable.

## 2. Tipos de escáner

### Plano

El original se coloca sobre un cristal. Es adecuado para:

- documentos delicados;
- fotografías;
- libros o elementos que no deben pasar por rodillos;
- una o pocas páginas.

### Alimentador automático de documentos

El ADF transporta varias hojas de forma consecutiva. Puede ser:

- **simplex**, una cara por pasada;
- **dúplex**, ambas caras mediante doble sensor o recirculación.

No debe introducirse en un ADF material grapado, deteriorado, de grosor incompatible o con adhesivos sin comprobar las especificaciones.

### Alimentación de hojas

El escáner de producción puede carecer de cristal plano y estar optimizado para lotes. Su capacidad, velocidad y detección de doble alimentación son importantes.

### Portátil o manual

Se desplaza sobre el original o arrastra el documento. Es útil en situaciones concretas, pero ofrece mayor riesgo de inclinación o irregularidad.

## 3. Sensores

- **CCD**: utiliza un sistema óptico con espejos y sensor;
- **CIS**: sensor de contacto, compacto y de menor profundidad de campo.

Esta diferencia es complementaria. Para el examen resulta más importante reconocer función, resolución, alimentación y formato de salida.

## 4. Resolución

La resolución se expresa normalmente en puntos por pulgada o dpi. Una resolución mayor captura más detalle, pero también:

- aumenta el tamaño de archivo;
- ralentiza el proceso;
- exige más almacenamiento;
- no mejora un original que carece de detalle.

### Óptica e interpolada

- **resolución óptica**: detalle captado físicamente por el sensor;
- **resolución interpolada**: píxeles añadidos por software.

No son equivalentes.

## 5. Profundidad de color y modo

Modos habituales:

- blanco y negro;
- escala de grises;
- color.

La profundidad de color indica cuánta información tonal puede representarse. Un documento administrativo de texto no requiere necesariamente la misma configuración que una fotografía.

## 6. Tamaño, velocidad y alimentación

Parámetros frecuentes:

- tamaño máximo del original;
- capacidad del ADF;
- páginas o imágenes por minuto;
- simplex o dúplex;
- gramaje admitido;
- detección de doble alimentación;
- ciclo de trabajo diario.

En dúplex, una hoja puede producir dos imágenes. Por eso páginas por minuto e imágenes por minuto no son siempre equivalentes.

## 7. Conectividad y controladores

Un escáner puede ser:

- USB local;
- de red;
- inalámbrico;
- parte de una impresora multifunción.

Windows puede detectarlo automáticamente o requerir instalación manual. Las aplicaciones pueden comunicarse mediante interfaces como WIA o TWAIN, según dispositivo y programa.

## 8. Flujo de digitalización

1. retirar grapas y clips;
2. ordenar y orientar originales;
3. seleccionar cristal o ADF;
4. elegir color, resolución y tamaño;
5. seleccionar una o dos caras;
6. elegir formato y ubicación;
7. escanear;
8. revisar inclinación, cortes, páginas en blanco y legibilidad;
9. aplicar OCR cuando proceda;
10. comprobar el documento final antes de registrar o enviar.

## 9. Formatos de salida

### PDF

Adecuado para documentos multipágina y distribución. Puede contener:

- solo imágenes;
- imágenes más una capa de texto OCR;
- compresión y metadatos.

### JPEG

Compresión con pérdida, adecuada para fotografías. Repetidas ediciones pueden degradar la imagen.

### PNG

Compresión sin pérdida, útil para capturas, gráficos y documentos de una página.

### TIFF

Formato flexible usado en archivo y flujos documentales; puede generar archivos grandes y admitir varias páginas según configuración.

La extensión no garantiza por sí sola accesibilidad, autenticidad ni conservación a largo plazo.

## 10. OCR

El OCR analiza la imagen e intenta convertir caracteres en texto. Permite:

- búsqueda;
- copia;
- indexación;
- lectura asistida;
- extracción de datos.

Su precisión depende de:

- resolución;
- contraste;
- orientación;
- tipografía;
- idioma;
- manchas o sellos;
- tablas y maquetación;
- calidad del original.

El resultado debe revisarse. Un OCR no transforma automáticamente una copia en documento auténtico ni garantiza exactitud jurídica.

## 11. Mejora de imagen

Funciones frecuentes:

- enderezado;
- recorte;
- eliminación de bordes;
- rotación;
- detección de color;
- eliminación de páginas en blanco;
- reducción de fondo;
- compresión.

Una mejora excesiva puede borrar información, sellos tenues o anotaciones. El original debe conservarse cuando la política documental lo exija.

## 12. Seguridad y protección de datos

- comprobar la carpeta de destino;
- evitar carpetas públicas o personales no autorizadas;
- borrar archivos temporales según política;
- proteger documentos sensibles;
- revisar si el multifunción conserva trabajos en memoria;
- limitar envío directo por correo o nube;
- aplicar reglas de protección de datos y archivo.

## 13. Errores frecuentes de examen

1. Afirmar que escanear produce siempre texto editable.
2. Confundir ADF con doble cara.
3. Creer que más dpi siempre mejora cualquier documento.
4. Confundir resolución óptica e interpolada.
5. Equiparar PDF con PDF buscable.
6. Confundir páginas por minuto e imágenes por minuto.
7. Introducir originales grapados en el alimentador.
8. Dar por correcto un OCR sin revisión.


---

## 4. almacenamiento externo usb

**Estado:** APROBADO POR EL USUARIO

## 1. Almacenamiento externo

Un dispositivo de almacenamiento externo conserva datos fuera de la unidad interna principal y puede conectarse o desconectarse. El epígrafe menciona expresamente discos duros externos y memorias USB.

No todo almacenamiento externo es extraíble del mismo modo. Un disco de red, una nube o una tarjeta SD son conceptos relacionados, pero no equivalen a una memoria USB.

## 2. HDD externo

Un HDD externo contiene un disco magnético y una carcasa con interfaz. Características:

- gran capacidad;
- coste por GB generalmente reducido;
- partes móviles;
- sensibilidad a golpes y vibraciones durante uso;
- mayor consumo que muchas memorias flash;
- posible alimentación por USB o adaptador propio.

Puede ser portátil o de sobremesa. Los modelos de sobremesa suelen usar fuente externa.

## 3. SSD externo

Un SSD externo utiliza memoria no volátil sin partes mecánicas móviles. Suele ofrecer:

- menor latencia;
- mayor velocidad, si interfaz y controlador lo permiten;
- menor ruido;
- mejor tolerancia al movimiento ordinario;
- coste diferente según capacidad y tecnología.

La velocidad real queda limitada por el elemento más lento: memoria, controlador, puerto, cable, protocolo, cifrado o sistema.

## 4. Memoria USB

Una memoria USB o pendrive integra memoria flash, controlador y conector. No contiene un disco giratorio.

Características:

- tamaño reducido;
- alimentación por el puerto;
- fácil transporte;
- capacidad y velocidad variables;
- ciclos de escritura finitos;
- riesgo elevado de pérdida física;
- facilidad para transportar malware o datos sensibles.

No debe usarse como única copia de información importante.

## 5. Conector e interfaz

Una unidad puede usar USB-A o USB-C. Debe distinguirse:

- forma del conector;
- protocolo de datos;
- velocidad anunciada;
- compatibilidad del cable;
- alimentación disponible.

Un adaptador cambia la forma de conexión, pero no garantiza aumentar la velocidad. Un cable de carga puede no ofrecer las mismas prestaciones de datos que otro cable USB-C.

## 6. Capacidad y rendimiento

### Capacidad

Se expresa en GB o TB. La capacidad útil puede ser menor por:

- diferencias de unidades decimales y binarias;
- sistema de archivos;
- particiones;
- software incluido;
- áreas reservadas.

### Rendimiento

Depende de:

- lectura y escritura secuencial;
- operaciones aleatorias;
- tamaño de archivo;
- caché;
- temperatura;
- ocupación;
- puerto y cable;
- cifrado;
- calidad del dispositivo.

Copiar miles de archivos pequeños puede ser más lento que copiar un archivo grande con igual tamaño total.

## 7. Inicialización, partición, volumen y formato

Un dispositivo nuevo puede requerir:

1. inicialización;
2. creación de particiones;
3. creación o asignación de volumen;
4. elección de sistema de archivos;
5. asignación de letra o punto de montaje.

Formatear prepara el sistema de archivos. Puede destruir la estructura anterior. Antes debe comprobarse el dispositivo correcto y existir copia de la información necesaria.

## 8. Sistemas de archivos habituales

### FAT32

- amplia compatibilidad;
- limitaciones de tamaño de archivo y funciones;
- útil en dispositivos heredados.

### exFAT

- diseñado para almacenamiento flash y archivos grandes;
- buena compatibilidad entre sistemas modernos;
- menos funciones de seguridad que NTFS.

### NTFS

- sistema habitual de Windows;
- permisos, registro y otras funciones avanzadas;
- compatibilidad de escritura limitada en algunos dispositivos o sistemas ajenos.

No existe un sistema universalmente mejor. La elección depende de tamaño de archivo, seguridad y compatibilidad.

## 9. Conexión y reconocimiento

Al conectar una unidad:

- Windows detecta el dispositivo;
- carga el controlador;
- monta el volumen;
- puede asignar una letra;
- aparece en el Explorador si el volumen es accesible.

Si no aparece, pueden existir problemas de cable, puerto, alimentación, controlador, partición, letra, sistema de archivos o daño físico.

## 10. Caché y expulsión segura

Windows puede usar políticas de **extracción rápida** o **mejor rendimiento**. Con caché de escritura, retirar el dispositivo antes de completar operaciones puede provocar:

- pérdida de archivos;
- corrupción del sistema de archivos;
- documentos incompletos;
- necesidad de reparación.

Práctica segura:

1. cerrar archivos abiertos;
2. esperar a que termine la copia;
3. usar Expulsar o Quitar hardware de forma segura;
4. esperar confirmación;
5. desconectar sin forzar el conector.

Aunque una política permita extracción rápida, expulsar sigue siendo una práctica prudente y ayuda a detectar operaciones pendientes.

## 11. Copia, sincronización y copia de seguridad

- **copiar**: crear otra instancia de datos;
- **mover**: cambiar ubicación y eliminar el origen tras completar;
- **sincronizar**: mantener ubicaciones coordinadas según reglas;
- **copia de seguridad**: copia gestionada para recuperación ante pérdida o alteración.

Una memoria USB que contiene la única versión no constituye una copia de seguridad.

## 12. Seguridad

Riesgos:

- pérdida o robo;
- acceso no autorizado;
- malware;
- manipulación de archivos;
- dispositivos falsificados;
- capacidad anunciada incorrecta;
- conectores dañados.

Medidas:

- cifrado cuando proceda;
- control de dispositivos autorizados;
- análisis antimalware;
- no ejecutar archivos desconocidos;
- inventario y etiquetado;
- borrado seguro antes de reutilizar o desechar;
- no conectar dispositivos encontrados o de origen incierto.

## 13. Errores frecuentes de examen

1. Confundir memoria USB con disco duro externo.
2. Afirmar que USB-C determina siempre la velocidad.
3. Confundir formato y borrado ordinario.
4. Creer que una letra equivale a un disco físico.
5. Retirar el dispositivo mientras se escribe.
6. Considerar una única copia externa como respaldo.
7. Suponer que un adaptador mejora el rendimiento.
8. Elegir FAT32, exFAT o NTFS sin atender a compatibilidad y tamaño.


---

## 5. opticos

**Estado:** APROBADO POR EL USUARIO

## 1. Vigencia del contenido

Los equipos actuales pueden no incorporar unidad óptica. Sin embargo, el epígrafe menciona expresamente lectores y grabadores de CD y DVD, por lo que deben estudiarse sus conceptos estables y su uso básico.

No se enseña a forzar la instalación de hardware obsoleto ni se presupone que todos los equipos lo incluyen.

## 2. Almacenamiento óptico

Un disco óptico almacena información en una pista que se lee mediante láser. La unidad gira el disco y posiciona el sistema óptico.

Diferencias frente a HDD o memoria USB:

- soporte extraíble independiente;
- menor capacidad que unidades actuales;
- acceso más lento;
- sensibilidad a rayaduras y suciedad;
- posibilidad de soportes de solo lectura, una escritura o regrabables.

## 3. Lector y grabador

- **lector**: accede a soportes compatibles;
- **grabador**: además puede escribir en soportes admitidos;
- **unidad combinada**: puede leer un formato y grabar otro;
- **unidad externa**: suele conectarse por USB;
- **unidad interna**: tradicionalmente usa SATA en equipos compatibles.

Un grabador de DVD suele leer CD, pero la compatibilidad exacta depende del modelo. No debe afirmarse que toda unidad admite todos los formatos.

## 4. CD

Capacidad habitual de un CD de datos: aproximadamente **700 MB**. Un CD de audio estándar almacena normalmente hasta unos **80 minutos**.

Tipos principales:

- **CD-ROM**: solo lectura;
- **CD-R**: grabable normalmente una vez;
- **CD-RW**: borrable y regrabable dentro de sus límites.

El CD de audio no es simplemente una carpeta de archivos MP3. Su estructura está diseñada para reproductores de audio compatibles.

## 5. DVD

Un DVD de datos de una capa ofrece habitualmente unos **4,7 GB**. Existen variantes de mayor capacidad y doble capa.

Tipos habituales:

- **DVD-ROM**: solo lectura;
- **DVD-R y DVD+R**: grabables;
- **DVD-RW y DVD+RW**: regrabables;
- **DVD-RAM**: formato regrabable especializado.

Los signos `+` y `-` representan familias técnicas diferentes. Las unidades modernas pueden admitir varias, pero debe comprobarse compatibilidad.

## 6. Leer, copiar, extraer y grabar

- **leer**: acceder al contenido;
- **copiar archivos**: duplicar archivos desde el disco a otra ubicación;
- **extraer o rippear**: convertir contenido de audio o vídeo a archivos, respetando derechos y formato;
- **grabar**: escribir datos en un soporte compatible;
- **duplicar**: crear otra copia del soporte, cuando la protección y la legalidad lo permiten.

Microsoft denomina grabar a copiar contenido del PC a un CD o DVD vacío y copiar o extraer a llevar contenido del disco al equipo.

## 7. Discos de audio y de datos

### CD de audio

- orientado a reproductores de CD;
- usa pistas de audio;
- capacidad expresada frecuentemente en minutos.

### CD o DVD de datos

- contiene archivos y carpetas;
- el reproductor debe admitir los tipos de archivo;
- puede usarse para transporte o archivo de datos.

Un DVD de vídeo comercial tiene estructura y codificación distintas de un DVD que contiene archivos de vídeo sueltos.

## 8. Proceso de grabación

1. comprobar que la unidad es grabadora;
2. elegir soporte compatible y vacío o regrabable;
3. seleccionar audio o datos;
4. añadir archivos;
5. comprobar capacidad;
6. iniciar grabación;
7. evitar interrupciones;
8. finalizar o cerrar la sesión cuando proceda;
9. expulsar y verificar el disco en otra lectura.

## 9. Sesiones y finalización

Un disco puede grabarse en una o varias sesiones si unidad, soporte y software lo permiten. Un disco no finalizado puede no ser legible en otros dispositivos.

- **cerrar sesión**: concluye una sesión de escritura;
- **finalizar disco**: impide añadir nuevas sesiones en muchos flujos;
- **multisesión**: permite añadir contenido posteriormente, con limitaciones de compatibilidad.

## 10. Sistemas de archivos ópticos

Como ampliación útil:

- **ISO 9660**: formato tradicional de CD de datos con amplia compatibilidad;
- **UDF**: usado en DVD y otros soportes ópticos, con soporte para archivos y estructuras más modernas.

No se exige memorizar todas las revisiones de UDF.

## 11. Velocidad

Las unidades utilizan múltiplos `x`. La velocidad real depende de:

- zona del disco;
- calidad del soporte;
- estrategia de grabación;
- interfaz;
- estado de la unidad;
- tamaño y número de archivos.

Grabar a la velocidad máxima no siempre mejora fiabilidad, especialmente con soportes de calidad irregular.

## 12. Conservación y seguridad

- sujetar por bordes o agujero central;
- evitar tocar la superficie de datos;
- guardar en funda;
- proteger de calor, sol y humedad;
- limpiar desde el centro hacia fuera;
- no usar discos agrietados;
- verificar copias importantes;
- no confiar en un único soporte para conservación a largo plazo.

Los discos regrabables y grabables pueden degradarse. Una copia óptica no sustituye por sí sola una política de preservación.

## 13. Protección y legalidad

No todos los discos pueden copiarse libremente. Deben respetarse:

- derechos de autor;
- licencias;
- protección anticopia;
- confidencialidad;
- políticas del organismo.

## 14. Errores frecuentes de examen

1. Confundir lector y grabador.
2. Afirmar que CD-R es regrabable.
3. Confundir CD de audio y CD de datos.
4. Afirmar que todos los DVD tienen la misma capacidad.
5. Suponer compatibilidad universal entre formatos `+` y `-`.
6. Confundir grabar con extraer.
7. Creer que finalizar y expulsar son la misma operación.
8. Considerar el soporte óptico como copia permanente e infalible.
