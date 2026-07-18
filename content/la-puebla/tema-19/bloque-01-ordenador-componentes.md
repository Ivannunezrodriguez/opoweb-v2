# Tema 19 · Bloque 1 · Ordenador personal y componentes habituales

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
