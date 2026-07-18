from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-19'
BASE.mkdir(parents=True, exist_ok=True)
DATE = '2026-07-18'


def write(path, content):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + '\n', encoding='utf-8')


manual = r'''
# La Puebla de Montalbán · Tema 19 · Manual modular

**Estado:** EN REVISIÓN DEL USUARIO  
**No publicado como tema aprobado.**  
**Fecha de revisión técnica:** 18 de julio de 2026.

> **Tema 19. Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Criterio técnico y temporal

El epígrafe combina conceptos estables de arquitectura de ordenadores con periféricos concretos. El manual toma como referencia funcional un ordenador personal actual con Windows 11, sin convertir el tema en un catálogo de marcas ni en una guía de montaje profesional.

Se distinguen expresamente:

- función del componente frente a modelo comercial;
- conector físico frente a protocolo o velocidad;
- memoria principal frente a almacenamiento;
- dispositivo físico frente a controlador, cola o unidad lógica;
- capacidad nominal frente a rendimiento real;
- lectura, escritura, grabación, copia y digitalización;
- soporte heredado que sigue siendo exigible porque aparece literalmente en el epígrafe.

## 2. Modelo funcional del ordenador personal

Un ordenador personal recibe datos, los procesa, los almacena, presenta resultados y se comunica con otros dispositivos o redes. Este esquema permite ordenar casi todo el tema:

1. **entrada**: teclado, ratón, escáner, micrófono;
2. **procesamiento**: CPU, memoria RAM y otros controladores;
3. **almacenamiento**: SSD, HDD, disco óptico o memoria USB;
4. **salida**: monitor, impresora, altavoces;
5. **comunicación**: Ethernet, Wi‑Fi, Bluetooth, USB y otros buses.

Un mismo equipo puede integrar funciones que antes requerían varios periféricos. Una impresora multifunción, por ejemplo, combina impresión, escaneado y copia.

## 3. Estructura del manual

1. [Ordenador personal y componentes habituales](bloque-01-ordenador-componentes.md)
2. [Periféricos e impresoras](bloque-02-perifericos-impresoras.md)
3. [Escáneres y digitalización](bloque-03-escaneres.md)
4. [Discos externos y memorias USB](bloque-04-almacenamiento-externo-usb.md)
5. [Lectores y grabadores de CD y DVD](bloque-05-opticos.md)
6. [Trazabilidad de fuentes oficiales](fuentes.md)
7. [Informe para revisión](feedback.md)

## 4. Mapa del epígrafe

| Inciso oficial | Contenido exigible |
|---|---|
| Conceptos generales del ordenador personal | hardware, software, firmware, controladores, entrada, proceso, almacenamiento, salida y comunicación |
| Componentes más comunes | placa base, CPU, RAM, almacenamiento, GPU, fuente, refrigeración, puertos y firmware de arranque |
| Periféricos | clasificación, conexión, instalación, controladores, Plug and Play y diferencias entre dispositivo físico y lógico |
| Impresoras y escáneres | tipos, parámetros, consumibles, cola, resolución, ADF, formatos, OCR y flujo de trabajo |
| Discos externos y memorias USB | HDD, SSD, flash, interfaces, particiones, sistemas de archivos, expulsión segura, copias y seguridad |
| Lectores y grabadores de CD y DVD | lectura, grabación, discos ROM/R/RW, CD de audio, discos de datos, capacidad y compatibilidad |

## 5. Delimitación por niveles

### Obligatorio

- componentes esenciales y función de cada uno;
- diferencias entre RAM y almacenamiento;
- periféricos de entrada, salida, almacenamiento y comunicación;
- impresoras de inyección y láser;
- escáner plano y alimentador automático;
- HDD externo, SSD externo y memoria USB;
- lector frente a grabador;
- CD, DVD, soportes de solo lectura, grabables y regrabables;
- conexión, reconocimiento, controlador y expulsión segura.

### Complemento imprescindible

- UEFI, POST y arranque;
- particiones, volúmenes y sistemas de archivos;
- USB-A y USB-C como formas de conector, no como sinónimos de velocidad;
- cola de impresión, impresora predeterminada y dispositivo de red;
- resolución óptica, profundidad de color y OCR;
- caché de escritura y riesgo de desconexión brusca.

### Ampliación útil

- DIMM y SO-DIMM;
- SATA y NVMe;
- CCD y CIS;
- WIA y TWAIN;
- cifrado de unidades extraíbles;
- ISO 9660 y UDF;
- tarjetas SD como almacenamiento extraíble distinto de una memoria USB.

### Fuera del núcleo

- montaje completo de equipos;
- overclocking;
- reparación electrónica;
- administración de cabinas de discos o RAID empresarial;
- especificaciones exhaustivas de USB4, Thunderbolt o PCI Express;
- duplicación industrial de soportes ópticos;
- recuperación forense de datos.

## 6. Diferencias de alto rendimiento en examen

| No confundir | Distinción correcta |
|---|---|
| RAM y SSD/HDD | la RAM es memoria de trabajo volátil; SSD y HDD conservan datos sin alimentación |
| CPU y placa base | la CPU ejecuta instrucciones; la placa conecta y coordina componentes |
| USB-C y USB 3/USB4 | USB-C describe el conector; la versión o modo determina prestaciones de datos y energía |
| disco físico y unidad `C:` | un disco físico puede contener varias particiones o volúmenes y letras |
| impresora y cola | la impresora es el dispositivo; la cola administra trabajos pendientes |
| escáner y OCR | el escáner obtiene una imagen; el OCR intenta reconocer texto dentro de ella |
| formatear y borrar archivos | formatear prepara un sistema de archivos y puede eliminar la estructura previa; borrar actúa sobre elementos concretos |
| lector y grabador | el lector solo lee los soportes admitidos; el grabador también escribe en soportes compatibles |
| CD de audio y CD de datos | el primero sigue una estructura de audio; el segundo almacena archivos |
| copia de seguridad y única copia externa | una copia aislada en un USB no es respaldo si sustituye al original |

## 7. Flujo administrativo seguro

1. identificar el dispositivo y su finalidad;
2. conectarlo mediante una interfaz compatible;
3. comprobar reconocimiento y controlador;
4. seleccionar ubicación, formato o cola correctos;
5. ejecutar la operación;
6. verificar el resultado;
7. cerrar archivos o trabajos pendientes;
8. expulsar de forma segura cuando proceda;
9. conservar copias según la política de la organización;
10. no introducir soportes desconocidos en equipos administrativos sin medidas de seguridad.

## 8. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Fuentes oficiales y de fabricantes: trazadas.
- Banco de preguntas: vacío.
- Revisión del usuario: pendiente.
- Tema cerrado: **NO**.
- Publicación como aprobado: **NO**.

El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 19 aprobado»**.
'''

block1 = r'''
# Tema 19 · Bloque 1 · Ordenador personal y componentes habituales

**Estado:** EN REVISIÓN DEL USUARIO

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
'''

block2 = r'''
# Tema 19 · Bloque 2 · Periféricos e impresoras

**Estado:** EN REVISIÓN DEL USUARIO

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
'''

block3 = r'''
# Tema 19 · Bloque 3 · Escáneres y digitalización

**Estado:** EN REVISIÓN DEL USUARIO

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
'''

block4 = r'''
# Tema 19 · Bloque 4 · Discos duros externos y memorias USB

**Estado:** EN REVISIÓN DEL USUARIO

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
'''

block5 = r'''
# Tema 19 · Bloque 5 · Lectores y grabadores de CD y DVD

**Estado:** EN REVISIÓN DEL USUARIO

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
'''

sources = r'''
# Tema 19 · Fuentes oficiales y trazabilidad

**Estado:** EN REVISIÓN DEL USUARIO

**Última comprobación:** 18 de julio de 2026.

## 1. Criterio

Se emplean fuentes oficiales de Microsoft, Intel, USB Implementers Forum y documentación técnica de fabricantes. Los conceptos de arquitectura se formulan de manera neutral y estable. Las cifras o menús dependientes de versiones se presentan como referencias funcionales, no como propiedades universales.

## 2. Ordenador y componentes

1. **Requisitos del sistema de Windows 11**  
   https://support.microsoft.com/es-es/windows/experience/compatibility/windows-11-system-requirements  
   CPU, núcleos, RAM, almacenamiento y UEFI como elementos básicos de un PC actual.

2. **How to Build a Gaming PC: PC Parts and Setup Guide — Intel**  
   https://www.intel.com/content/www/us/en/gaming/resources/how-to-build-a-gaming-pc.html  
   Relación funcional entre CPU, placa base, RAM, almacenamiento, GPU, fuente y refrigeración. Se usa solo para conceptos de componentes, no para recomendaciones de compra.

3. **How to Choose RAM for a Gaming PC — Intel**  
   https://www.intel.com/content/www/us/en/gaming/resources/how-much-ram-gaming.html  
   Volatilidad de la RAM, diferencia respecto de HDD/SSD y formatos DIMM/SO-DIMM.

4. **Overview of Disk Management — Microsoft Learn**  
   https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management  
   Discos, particiones, volúmenes, letras y operaciones de administración en Windows 11.

5. **Disk Devices and Partitions — Microsoft Learn**  
   https://learn.microsoft.com/en-us/windows/win32/fileio/disk-devices-and-partitions  
   Estructura básica del HDD y concepto de partición.

## 3. USB y almacenamiento externo

1. **USB Type-C Cable and Connector Specification — USB-IF**  
   https://www.usb.org/usb-type-cr-cable-and-connector-specification  
   USB-C como ecosistema de conector reversible y escalable; no identifica por sí solo velocidad o potencia.

2. **Cables and Connectors — USB-IF**  
   https://www.usb.org/cable_connector  
   Diferencias de capacidad de datos y potencia entre cables y necesidad de identificar prestaciones.

3. **Quitar hardware de forma segura en Windows — Microsoft Support**  
   https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows  
   Procedimiento recomendado para unidades flash y discos externos.

4. **Manage default media removal policy — Microsoft Learn**  
   https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media  
   Extracción rápida, mejor rendimiento, caché de escritura y riesgo de pérdida de datos.

## 4. Impresoras

1. **Agregar o instalar una impresora en Windows — Microsoft Support**  
   https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows  
   Impresoras locales, USB, de red, inalámbricas, reconocimiento y controladores.

2. **Laser Printer vs Inkjet — HP**  
   https://www.hp.com/us-en/shop/tech-takes/laser-printer-vs-inkjet  
   Diferencias tecnológicas entre tinta líquida y tóner. Se utiliza como documentación de fabricante, no como criterio comercial.

## 5. Escáneres

1. **Instalar y usar un escáner en Windows — Microsoft Support**  
   https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows  
   Escáner local, de red, multifunción, cristal plano, alimentador y aplicación Escáner.

2. **WorkForce DS-790WN — Epson Europe**  
   https://www.epson.eu/en_EU/products/scanners/document-scanner/workforce-ds-790wn/p/32136  
   Ejemplo oficial de parámetros: resolución óptica, ADF, tamaño, profundidad de color y salida. No se exige memorizar el modelo.

## 6. CD y DVD

1. **Grabar y copiar CD — Microsoft Support**  
   https://support.microsoft.com/es-es/windows/apps/windowsmediaplayer/burn-and-rip-cds  
   Diferencia entre grabar y copiar, CD de audio, CD de datos, DVD de datos, capacidad aproximada y necesidad de grabadora.

## 7. Trazabilidad por bloque

| Bloque | Fuentes principales |
|---|---|
| Ordenador y componentes | requisitos de Windows 11, guías técnicas de Intel, Disk Management |
| Periféricos e impresoras | Microsoft Support e información técnica de HP |
| Escáneres | Microsoft Support y especificaciones oficiales de Epson |
| Discos externos y memorias USB | Microsoft Learn, Microsoft Support y USB-IF |
| CD y DVD | Microsoft Support sobre grabación y copia |

## 8. Política temporal

- Windows 11 es la referencia operativa actual.
- Las tecnologías CD y DVD se mantienen porque aparecen literalmente en el programa.
- USB-C se trata como conector; sus prestaciones dependen de la implementación.
- No se memorizan nombres comerciales ni velocidades máximas de una generación concreta salvo que sean necesarias para distinguir conceptos.

## 9. Delimitación

Quedan fuera del núcleo:

- montaje profesional y reparación electrónica;
- overclocking;
- RAID empresarial y redes de almacenamiento;
- especificaciones completas de USB4 o Thunderbolt;
- recuperación forense;
- duplicación industrial y elusión de protecciones ópticas;
- recomendaciones de compra de modelos concretos.
'''

feedback = r'''
# Tema 19 · Informe para revisión del usuario

## Estado

`EN_REVISION_USUARIO`

El tema no está publicado como aprobado. La versión pública continúa en `0.18.0` y el banco de preguntas permanece vacío.

## Epígrafe oficial

> Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.

## Cobertura incorporada

### Ordenador y componentes

- hardware, software, firmware y controladores;
- placa base, CPU, RAM, HDD, SSD, GPU, fuente y refrigeración;
- particiones, volúmenes y sistemas de archivos;
- puertos, USB, vídeo, red y firmware UEFI.

### Periféricos e impresoras

- entrada, salida, almacenamiento y comunicación;
- Plug and Play, controlador y dispositivo predeterminado;
- inyección, láser, térmica e impacto;
- resolución, velocidad, dúplex, consumibles, cola y red.

### Escáneres

- plano, ADF, simplex y dúplex;
- resolución óptica, color y velocidad;
- PDF, JPEG, PNG y TIFF;
- OCR, revisión y seguridad documental.

### Almacenamiento externo

- HDD externo, SSD externo y memoria USB;
- USB-A y USB-C, protocolo, cable y rendimiento;
- particiones, formato, FAT32, exFAT y NTFS;
- caché, expulsión segura, copia, respaldo y cifrado.

### CD y DVD

- lector y grabador;
- CD-ROM, CD-R, CD-RW;
- DVD-ROM, DVD±R y DVD±RW;
- audio frente a datos;
- grabar, extraer, sesiones, finalización y conservación.

## Delimitaciones

No se desarrolla íntegramente:

- montaje y reparación profesional;
- overclocking;
- RAID, SAN o NAS empresarial;
- electrónica de impresoras y escáneres;
- especificaciones completas de USB4, Thunderbolt o PCIe;
- recuperación forense;
- duplicación industrial de soportes ópticos.

## Comprobaciones solicitadas

Revisa especialmente:

1. si distingues hardware, software, firmware y controlador;
2. si queda clara la diferencia entre RAM y almacenamiento;
3. si distingues HDD, SSD, partición, volumen y letra;
4. si comprendes que USB-C es un conector y no una velocidad;
5. si identificas los componentes principales y su función;
6. si distingues periférico de entrada, salida, almacenamiento y comunicación;
7. si comprendes impresora física, virtual y multifunción;
8. si distingues tinta y tóner;
9. si queda clara la cola de impresión;
10. si comprendes escáner, ADF, dúplex y resolución óptica;
11. si distingues escaneo y OCR;
12. si entiendes FAT32, exFAT y NTFS sin tratarlos como equivalentes;
13. si queda clara la expulsión segura;
14. si distingues lector y grabador;
15. si comprendes CD/DVD ROM, R y RW;
16. si distingues disco de audio y disco de datos;
17. si el nivel es adecuado para un examen C2.

## Cierre

La respuesta debe ser una de estas:

- **«Tema 19 aprobado»**
- **«Tema 19: cambia o amplía…»**

No se fusionará mientras permanezca en `EN_REVISION_USUARIO`.
'''

questions = {
    'tema': 19,
    'estado': 'NO_CREADAS_HASTA_APROBACION_TEORICA',
    'preguntas': [],
    'nota': 'No se crean preguntas para aumentar métricas. Tras aprobar el manual, cada pregunta deberá vincularse a una función concreta y a una fuente oficial o técnica identificada.'
}

matrix = {
    'tema': 19,
    'estado': 'EN_REVISION_USUARIO',
    'epigrafeOficial': 'Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.',
    'fechaRevisionTecnica': DATE,
    'criterioAdaptacionTecnica': 'La matriz reglamentaria inciso → norma → artículos se adapta a inciso → norma técnica o documentación oficial → secciones → contenido exigible, porque el epígrafe es tecnológico y no remite a una ley.',
    'cobertura': [
        {
            'inciso': 'Conceptos generales del ordenador personal',
            'normaTecnicaODocumentacion': ['Requisitos del sistema de Windows 11', 'How to Build a Gaming PC — Intel'],
            'articulosOSecciones': ['CPU', 'RAM', 'almacenamiento', 'firmware', 'componentes del sistema'],
            'contenidoExigible': ['hardware y software', 'entrada, proceso, almacenamiento, salida y comunicación', 'firmware y controladores']
        },
        {
            'inciso': 'El ordenador personal y sus componentes más comunes',
            'normaTecnicaODocumentacion': ['Intel PC Parts Guide', 'Intel RAM Guide', 'Microsoft Disk Management'],
            'articulosOSecciones': ['placa base', 'CPU', 'RAM', 'HDD', 'SSD', 'GPU', 'fuente', 'refrigeración', 'particiones'],
            'contenidoExigible': ['función y relación de componentes', 'RAM frente a almacenamiento', 'disco, partición, volumen y letra']
        },
        {
            'inciso': 'Periféricos del ordenador personal. Impresoras y escáneres',
            'normaTecnicaODocumentacion': ['Microsoft Support: impresoras', 'Microsoft Support: escáneres', 'documentación técnica HP y Epson'],
            'articulosOSecciones': ['instalación local y de red', 'drivers', 'cola', 'inyección y láser', 'ADF', 'resolución', 'OCR'],
            'contenidoExigible': ['clasificar periféricos', 'instalar y seleccionar dispositivos', 'distinguir tinta y tóner', 'distinguir escaneo y OCR']
        },
        {
            'inciso': 'Discos duros externos y memorias USB',
            'normaTecnicaODocumentacion': ['Microsoft Disk Management', 'Quitar hardware de forma segura', 'Media removal policy', 'USB-IF Type-C'],
            'articulosOSecciones': ['HDD y SSD', 'flash', 'conectores', 'volúmenes', 'sistemas de archivos', 'caché', 'expulsión'],
            'contenidoExigible': ['distinguir HDD, SSD y memoria USB', 'formatear con criterio', 'reconocer USB-C como conector', 'expulsar con seguridad', 'proteger datos']
        },
        {
            'inciso': 'Lectores y grabadores de CD y DVD',
            'normaTecnicaODocumentacion': ['Microsoft Support: Grabar y copiar CD'],
            'articulosOSecciones': ['lector', 'grabador', 'CD de audio', 'CD de datos', 'DVD de datos', 'grabación y copia'],
            'contenidoExigible': ['distinguir ROM, R y RW', 'distinguir audio y datos', 'distinguir leer, grabar y extraer', 'comprender sesiones y compatibilidad']
        }
    ],
    'diferenciasClave': [
        {'materia': 'memoria', 'opcionA': 'RAM: volátil y de trabajo', 'opcionB': 'HDD/SSD: no volátil y de almacenamiento'},
        {'materia': 'USB', 'opcionA': 'USB-C: forma de conector', 'opcionB': 'USB 2/3/USB4: prestaciones del enlace'},
        {'materia': 'almacenamiento', 'opcionA': 'disco físico', 'opcionB': 'partición, volumen o letra lógica'},
        {'materia': 'impresión', 'opcionA': 'dispositivo físico', 'opcionB': 'cola o impresora virtual'},
        {'materia': 'digitalización', 'opcionA': 'escáner produce imagen', 'opcionB': 'OCR reconoce texto'},
        {'materia': 'óptico', 'opcionA': 'lector', 'opcionB': 'grabador'}
    ],
    'materiaObligatoria': [
        'componentes principales', 'RAM frente a almacenamiento', 'periféricos', 'impresoras de inyección y láser',
        'escáner plano y ADF', 'HDD externo, SSD externo y memoria USB', 'lector y grabador', 'CD/DVD ROM, R y RW'
    ],
    'complementoImprescindible': [
        'UEFI y arranque', 'particiones y sistemas de archivos', 'USB-C frente a protocolo', 'cola de impresión',
        'resolución óptica y OCR', 'caché y expulsión segura'
    ],
    'ampliacionUtil': ['DIMM y SO-DIMM', 'SATA y NVMe', 'CCD y CIS', 'WIA y TWAIN', 'ISO 9660 y UDF', 'cifrado de unidades'],
    'fueraDelNucleo': ['montaje profesional', 'overclocking', 'RAID empresarial', 'recuperación forense', 'duplicación industrial'],
    'criterioDeCierre': 'Requiere revisión humana y la expresión Tema 19 aprobado. No se aprueba por extensión ni por validación automática.'
}

write(BASE / 'manual.md', manual)
write(BASE / 'bloque-01-ordenador-componentes.md', block1)
write(BASE / 'bloque-02-perifericos-impresoras.md', block2)
write(BASE / 'bloque-03-escaneres.md', block3)
write(BASE / 'bloque-04-almacenamiento-externo-usb.md', block4)
write(BASE / 'bloque-05-opticos.md', block5)
write(BASE / 'fuentes.md', sources)
write(BASE / 'feedback.md', feedback)
write(BASE / 'preguntas.json', json.dumps(questions, ensure_ascii=False, indent=2))
write(BASE / 'matriz.json', json.dumps(matrix, ensure_ascii=False, indent=2))

programme_path = ROOT / 'data/programa.json'
programme = json.loads(programme_path.read_text(encoding='utf-8'))
t19 = programme['temas'][18]
t19.update({
    'estado': 'EN_REVISION_USUARIO',
    'manual': 'content/la-puebla/tema-19/manual.md',
    'capitulos': [
        'content/la-puebla/tema-19/bloque-01-ordenador-componentes.md',
        'content/la-puebla/tema-19/bloque-02-perifericos-impresoras.md',
        'content/la-puebla/tema-19/bloque-03-escaneres.md',
        'content/la-puebla/tema-19/bloque-04-almacenamiento-externo-usb.md',
        'content/la-puebla/tema-19/bloque-05-opticos.md'
    ],
    'matriz': 'content/la-puebla/tema-19/matriz.json',
    'feedback': 'content/la-puebla/tema-19/feedback.md',
    'preguntas': 'content/la-puebla/tema-19/preguntas.json',
    'trazabilidad': 'content/la-puebla/tema-19/fuentes.md'
})
programme_path.write_text(json.dumps(programme, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

readme_path = ROOT / 'README.md'
readme = readme_path.read_text(encoding='utf-8')
readme = readme.replace('- Tema 19: `PENDIENTE_RECONSTRUCCION`.', '- Tema 19: `EN_REVISION_USUARIO`.')
readme = readme.replace('│     └─ tema-18/\n│        ├─ manual.md', '│     ├─ tema-18/\n│     └─ tema-19/\n│        ├─ manual.md')
readme = readme.replace('La validación confirma que existen exactamente dieciocho temas aprobados, un tema pendiente y que los archivos modulares de los temas 11, 12, 13, 14, 15, 16, 17 y 18 permanecen enlazados y disponibles sin conexión.', 'La validación confirma que existen exactamente dieciocho temas aprobados y el Tema 19 en revisión; los archivos aprobados permanecen disponibles sin conexión y el Tema 19 no se precarga hasta su aprobación.')
readme_path.write_text(readme, encoding='utf-8')

tests = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.18.0');
assert.equal(packageJson.version, '0.18.0');
assert.ok(index.includes('v0.18.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
assert.deepEqual(review.map(t => t.numero), [19]);
assert.equal(pending.length, 0);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t19 = programme.temas[18];
const base19 = 'content/la-puebla/tema-19';
const matrix19 = json(`${base19}/matriz.json`);
const questions19 = json(`${base19}/preguntas.json`);
assert.equal(t19.capitulos.length, 5);
assert.equal(matrix19.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix19.cobertura.length, 5);
assert.equal(matrix19.diferenciasClave.length, 6);
assert.equal(questions19.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions19.preguntas, []);
assert.ok(read(`${base19}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base19}/feedback.md`).includes('Tema 19 aprobado'));

const files19 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-ordenador-componentes.md','bloque-02-perifericos-impresoras.md',
  'bloque-03-escaneres.md','bloque-04-almacenamiento-externo-usb.md',
  'bloque-05-opticos.md'
];
for (const file of files19) {
  assert.ok(exists(`${base19}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base19}/${file}`), `Tema 19 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined19 = files19.filter(f => f.endsWith('.md')).map(f => read(`${base19}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'hardware','software','firmware','controlador','placa base','cpu','memoria ram','hdd','ssd',
  'usb-c','partición','volumen','impresora','inyección de tinta','tóner','cola','escáner',
  'alimentador automático','resolución óptica','ocr','fat32','exfat','ntfs','expulsión segura',
  'cd-rom','cd-r','cd-rw','dvd-rom','dvd-rw','lector','grabador'
]) {
  assert.ok(joined19.includes(term), `Falta ${term}`);
}
for (const source of [
  'Requisitos del sistema de Windows 11','How to Build a Gaming PC','USB Type-C Cable and Connector Specification',
  'Quitar hardware de forma segura en Windows','Agregar o instalar una impresora en Windows',
  'Instalar y usar un escáner en Windows','Grabar y copiar CD'
]) {
  assert.ok(read(`${base19}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.18.0'"));
assert.equal(exists('.github/workflows/apply-t19-review.yml'), false);
assert.equal(exists('scripts/apply_t19_review.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme19Questions: questions19.preguntas.length,
  status: 'TEMA_19_EN_REVISION_VALIDADO'
}, null, 2));
'''
write(ROOT / 'tests/validate.mjs', tests)

print('Tema 19 preparado para revisión del usuario')
