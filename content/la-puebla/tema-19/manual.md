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
