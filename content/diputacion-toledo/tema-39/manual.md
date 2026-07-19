# Tema 39 · Conceptos generales del ordenador personal I

## El ordenador personal y sus componentes más comunes

## 1. Concepto de ordenador personal

Un **ordenador personal** es un sistema electrónico programable capaz de recibir datos, procesarlos conforme a instrucciones, almacenarlos y producir resultados.

Sus funciones básicas son:

- **entrada** de datos;
- **procesamiento**;
- **almacenamiento**;
- **salida** de información;
- **comunicación** con otros dispositivos y redes.

| Función | Ejemplos |
|---|---|
| Entrada | Teclado, ratón, micrófono |
| Procesamiento | CPU y GPU |
| Almacenamiento | SSD, HDD, memoria USB |
| Salida | Monitor, impresora, altavoces |
| Comunicación | Ethernet, Wi‑Fi, Bluetooth |

> ⚠️ **¡Foco Examen!:** el ordenador no es únicamente la CPU. Es el conjunto formado por hardware, software y datos, coordinados para realizar tareas.

## 2. Hardware, software y firmware

### 2.1. Hardware

El **hardware** es el conjunto de componentes físicos y tangibles del sistema.

Ejemplos:

- placa base;
- procesador;
- memoria RAM;
- unidades de almacenamiento;
- tarjeta gráfica;
- fuente de alimentación;
- teclado, monitor y otros periféricos.

### 2.2. Software

El **software** es el conjunto de programas, instrucciones y datos que permiten utilizar el hardware.

Se distingue entre:

| Tipo | Finalidad | Ejemplos |
|---|---|---|
| Software de sistema | Gestiona el hardware y ofrece servicios básicos | Windows 11, controladores |
| Software de aplicación | Permite realizar tareas concretas | Writer, Calc, navegador |
| Software de programación | Facilita crear programas | Compiladores, IDE |

### 2.3. Firmware

El **firmware** es software de bajo nivel almacenado normalmente en memoria no volátil y estrechamente ligado al dispositivo.

Ejemplos:

- UEFI de la placa base;
- firmware de una impresora;
- firmware de un SSD.

> ⚠️ **¡Foco Examen!:** firmware no es hardware. Es software integrado en el dispositivo y destinado a controlar funciones básicas.

## 3. La placa base

La **placa base** o placa madre es el circuito principal que conecta y coordina los componentes internos.

Integra o incorpora conectores para:

- CPU;
- memoria RAM;
- almacenamiento;
- tarjetas de expansión;
- alimentación;
- puertos internos y externos;
- firmware UEFI.

### 3.1. Elementos habituales

| Elemento | Función |
|---|---|
| Zócalo de CPU | Aloja el procesador |
| Bancos DIMM | Alojan módulos RAM |
| Ranuras PCI Express | Admiten tarjetas de expansión |
| Conectores SATA | Conectan determinadas unidades |
| Conectores M.2 | Admiten SSD y otros módulos |
| Chipset | Gestiona comunicaciones entre subsistemas |
| UEFI | Inicializa el equipo y configura el arranque |

> ⚠️ **¡Foco Examen!:** la compatibilidad entre placa base y CPU depende, entre otros factores, del zócalo, chipset y firmware.

## 4. Unidad central de proceso

La **CPU** o procesador ejecuta instrucciones y coordina gran parte del funcionamiento del sistema.

Sus componentes lógicos principales son:

- **unidad de control**, que interpreta y dirige la ejecución;
- **unidad aritmético-lógica**, que realiza operaciones;
- **registros**, que almacenan datos de trabajo inmediatos;
- **memoria caché**, que reduce el tiempo de acceso a datos frecuentes.

### 4.1. Frecuencia, núcleos e hilos

- La frecuencia se expresa habitualmente en **GHz**.
- Un **núcleo** puede ejecutar instrucciones de forma independiente.
- Un **hilo de ejecución** es una secuencia de instrucciones gestionada por el procesador y el sistema operativo.

Más frecuencia no implica por sí sola más rendimiento. También influyen:

- arquitectura;
- número de núcleos;
- memoria caché;
- consumo y temperatura;
- eficiencia del software.

### 4.2. Caché

| Nivel | Característica general |
|---|---|
| L1 | Muy rápida y pequeña |
| L2 | Mayor y algo más lenta |
| L3 | Compartida habitualmente entre núcleos y de mayor capacidad |

> ⚠️ **¡Foco Examen!:** la memoria caché de la CPU es más rápida y de menor capacidad que la RAM. No sustituye al almacenamiento permanente.

## 5. Memoria principal

### 5.1. Memoria RAM

La **RAM** almacena temporalmente datos e instrucciones que están siendo utilizados.

Características:

- es de acceso rápido;
- normalmente es **volátil**;
- su contenido se pierde al apagar el equipo;
- se mide habitualmente en **GB**.

Cuanta más RAM disponible, mayor capacidad para mantener programas y datos activos, aunque el rendimiento también depende del resto del sistema.

### 5.2. Memoria ROM y memoria no volátil

La expresión **ROM** designa memoria de solo lectura o no destinada a modificación ordinaria. En los equipos actuales, el firmware suele almacenarse en memoria flash reprogramable.

### 5.3. Memoria virtual

La **memoria virtual** utiliza espacio de almacenamiento para complementar la RAM.

No es equivalente a ampliar físicamente la RAM porque:

- el almacenamiento es más lento;
- su uso intensivo reduce el rendimiento;
- sirve como mecanismo de apoyo, no como sustituto ideal.

| Memoria | Volatilidad | Velocidad relativa | Uso |
|---|---|---|---|
| Caché | Volátil | Muy alta | Datos inmediatos de la CPU |
| RAM | Volátil | Alta | Programas y datos activos |
| SSD/HDD | No volátil | Inferior | Conservación permanente |

> ⚠️ **¡Foco Examen!:** la RAM es volátil. El SSD y el HDD conservan la información al apagar el equipo.

## 6. Almacenamiento interno

### 6.1. HDD

El **disco duro magnético** utiliza platos giratorios y cabezales.

Ventajas habituales:

- alta capacidad;
- menor coste por gigabyte.

Inconvenientes:

- partes mecánicas;
- menor velocidad;
- mayor sensibilidad a golpes durante el funcionamiento.

### 6.2. SSD

La **unidad de estado sólido** utiliza memoria flash y carece de partes mecánicas móviles.

Ventajas habituales:

- menor latencia;
- mayor velocidad;
- funcionamiento silencioso;
- menor sensibilidad a vibraciones.

### 6.3. Interfaces y formatos

| Tecnología | Descripción |
|---|---|
| SATA | Interfaz habitual para HDD y SSD SATA |
| NVMe | Protocolo optimizado para almacenamiento sobre PCIe |
| M.2 | Formato físico que puede alojar dispositivos SATA o PCIe/NVMe |

> ⚠️ **¡Foco Examen!:** M.2 es un formato o conector; NVMe es un protocolo. Un dispositivo M.2 no tiene que ser necesariamente NVMe.

## 7. Tarjeta gráfica

La **GPU** procesa gráficos, vídeo y otras cargas paralelas.

Puede ser:

- **integrada**, incluida en el procesador o plataforma y normalmente compartiendo memoria del sistema;
- **dedicada**, instalada como componente independiente y con memoria gráfica propia.

### 7.1. Memoria gráfica

La **VRAM** almacena texturas, búferes y otros datos gráficos. No debe confundirse con la RAM principal, aunque una GPU integrada puede reservar parte de esta.

> ⚠️ **¡Foco Examen!:** GPU integrada no significa que el equipo carezca de procesamiento gráfico. Significa que no utiliza necesariamente una tarjeta dedicada independiente.

## 8. Fuente de alimentación

La **fuente de alimentación** convierte la corriente de la red eléctrica en tensiones adecuadas para los componentes internos.

Aspectos relevantes:

- potencia nominal en **vatios**;
- eficiencia energética;
- conectores disponibles;
- protecciones eléctricas;
- calidad y estabilidad.

Una fuente de mayor potencia no obliga al equipo a consumir continuamente esa cantidad; indica la capacidad máxima de suministro dentro de sus especificaciones.

> ⚠️ **¡Foco Examen!:** vatios expresan potencia. Voltios expresan diferencia de potencial y amperios intensidad de corriente.

## 9. Refrigeración

Los componentes producen calor y requieren disipación.

Métodos comunes:

- disipadores metálicos;
- ventiladores;
- pasta térmica;
- refrigeración líquida;
- control automático de velocidad.

La **pasta térmica** mejora la transferencia de calor entre el componente y el disipador; no actúa como refrigerante por sí sola.

La reducción automática de frecuencia por exceso de temperatura se denomina habitualmente **thermal throttling**.

## 10. Puertos y conectores

### 10.1. USB

USB permite conectar periféricos, transmitir datos y, según el estándar, suministrar energía.

El conector físico y la velocidad no son conceptos idénticos.

- USB-A y USB-C describen formatos de conector.
- USB 2.0, USB 3.x y USB4 describen generaciones o capacidades.

### 10.2. Vídeo y audio

| Puerto | Uso habitual |
|---|---|
| HDMI | Vídeo y audio digital |
| DisplayPort | Vídeo y audio digital |
| Jack de 3,5 mm | Audio analógico |

### 10.3. Red

El puerto **RJ-45** se utiliza habitualmente para conexiones Ethernet.

### 10.4. Otros conectores

- lector de tarjetas;
- conectores Thunderbolt;
- puertos heredados PS/2, serie o paralelo en determinados equipos.

> ⚠️ **¡Foco Examen!:** USB-C describe la forma del conector. No garantiza por sí solo una velocidad, potencia o salida de vídeo concretas.

## 11. Tarjetas de expansión

Las ranuras PCI Express permiten instalar, entre otras:

- tarjetas gráficas;
- tarjetas de red;
- controladoras de almacenamiento;
- tarjetas de sonido;
- capturadoras.

La notación **x1, x4, x8 o x16** se refiere al número de carriles PCIe disponibles para la conexión.

## 12. Comunicaciones integradas

### 12.1. Ethernet

Conexión cableada de red, habitualmente mediante RJ-45.

### 12.2. Wi‑Fi

Tecnología inalámbrica para redes locales.

### 12.3. Bluetooth

Tecnología inalámbrica de corto alcance utilizada para periféricos, audio y transferencia de datos.

| Tecnología | Uso principal |
|---|---|
| Ethernet | Red cableada |
| Wi‑Fi | Red inalámbrica local |
| Bluetooth | Conexión de corto alcance entre dispositivos |

## 13. Arranque del equipo

Secuencia simplificada:

1. encendido y alimentación;
2. inicialización del firmware UEFI;
3. comprobación básica del hardware;
4. selección del dispositivo de arranque;
5. carga del gestor de arranque;
6. carga del sistema operativo.

### 13.1. BIOS y UEFI

UEFI es el firmware moderno que sustituyó funcionalmente a la BIOS tradicional en la mayoría de equipos actuales.

Puede gestionar:

- orden de arranque;
- fecha y hora;
- activación de dispositivos;
- opciones de seguridad;
- parámetros de hardware.

> ⚠️ **¡Foco Examen!:** UEFI se ejecuta antes que el sistema operativo. Configura e inicializa el hardware y localiza el mecanismo de arranque.

## 14. Unidades de información

La unidad mínima es el **bit**, que puede representar 0 o 1.

Un **byte** está formado por **8 bits**.

| Unidad | Equivalencia binaria habitual |
|---|---:|
| 1 KiB | **1.024 bytes** |
| 1 MiB | **1.024 KiB** |
| 1 GiB | **1.024 MiB** |

En especificaciones comerciales también se usan múltiplos decimales:

- 1 kB = **1.000 bytes**;
- 1 MB = **1.000.000 bytes**;
- 1 GB = **1.000.000.000 bytes**.

> ⚠️ **¡Foco Examen!:** **1 byte = 8 bits**. No deben confundirse MB con Mb: la B mayúscula representa bytes y la b minúscula bits.

## 15. Arquitectura de 32 y 64 bits

Una arquitectura de **64 bits** permite manejar registros y espacios de direccionamiento más amplios que una de **32 bits**.

Para aprovechar plenamente un sistema de 64 bits se requiere compatibilidad entre:

- procesador;
- sistema operativo;
- controladores;
- aplicaciones.

Un sistema operativo de 64 bits suele poder ejecutar muchas aplicaciones de 32 bits, pero la compatibilidad no es absoluta.

## 16. Rendimiento y cuellos de botella

El rendimiento global depende del equilibrio entre componentes.

Ejemplos de cuello de botella:

- CPU insuficiente para una carga de cálculo;
- poca RAM y uso continuo de memoria virtual;
- almacenamiento lento;
- GPU insuficiente para tareas gráficas;
- refrigeración deficiente;
- red limitada.

> ⚠️ **¡Foco Examen!:** sustituir un único componente no garantiza siempre una mejora proporcional. El rendimiento está condicionado por el componente limitante y la carga de trabajo.

## 17. Resumen comparativo

| Componente | Función principal | Conserva datos sin corriente |
|---|---|---|
| CPU | Ejecutar instrucciones | No |
| Caché | Datos inmediatos de CPU | No |
| RAM | Programas y datos activos | No |
| SSD/HDD | Almacenamiento permanente | Sí |
| GPU | Procesamiento gráfico | No en su memoria de trabajo |
| Placa base | Interconectar componentes | No como función principal |
| Fuente | Suministrar energía | No aplica |

> ⚠️ **¡Foco Examen!:** CPU procesa, RAM mantiene temporalmente y SSD/HDD almacena de forma permanente. Esta distinción es una de las preguntas más frecuentes.