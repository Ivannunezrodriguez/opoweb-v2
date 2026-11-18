# La Puebla de Montalbán · Tema 19 · Cotejo técnico-editorial integral

**Fecha: 04/11/2026.** Fuente oficial: **BOP Toledo n.º 82, 05/05/2026, anuncio 2026-1965**, Anexo I, tema 19: componentes del ordenador personal, periféricos, impresoras, escáneres, discos externos, CD/DVD y memorias USB.

## 1. Alcance y referencias

- Manual y **5 bloques** del tema 19, con correspondencia completa respecto a su programa oficial.
- Banco `preguntas.json`: **12 preguntas, 48 alternativas**, con clave y explicación revisadas individualmente.
- [Microsoft — Quitar hardware de forma segura en Windows](https://support.microsoft.com/es-es/windows/hardware/device-drivers/safely-remove-hardware-in-windows).
- [Microsoft — Especificaciones y compatibilidad del sistema de archivos exFAT](https://learn.microsoft.com/es-es/windows/win32/fileio/filesystem-functionality-comparison).
- [Microsoft — Escáner de Windows](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows).
- Documentación técnica primaria del fabricante: [USB Implementers Forum (USB-IF)](https://usb.org/usb-type-cr-cable-and-connector-specification).

| Conceptos confundibles | Diferencia correcta |
|---|---|
| RAM / SSD / HDD | La **RAM** es volátil; SSD y HDD retienen datos sin alimentación |
| CPU / almacenamiento | La **CPU** ejecuta instrucciones; SSD/HDD almacenan |
| USB-C / USB4 | USB-C identifica un **tipo de conector**, no una velocidad garantizada |
| Dispositivo / unidad lógica | Un mismo disco físico puede albergar **múltiples volúmenes** |
| Impresora / cola de impresión | La impresora es dispositivo; la cola administra trabajos |
| Escáner / OCR / ADF | El escáner captura; OCR reconoce texto; ADF alimenta originales |
| FAT32 / exFAT | FAT32 no admite un archivo de **4 GiB o más**; exFAT permite mayores tamaños |
| CD-R / CD-RW | **CD-R** grabable; **CD-RW** regrabable |

> ⚠️ **¡Foco Examen!:** **USB-C no significa USB4** ni garantiza vídeo, potencia o velocidad; la función depende del **puerto y cable**. En un USB formateado en **FAT32** no cabe un archivo individual de **4 GiB**; **exFAT** suele permitirlo.

## 2. Verificación una a una de las 48 alternativas

### LP-T19-001 — ¿Qué afirmación distingue correctamente la memoria RAM del almacenamiento SSD o HDD?

**Clave correcta: B**. **Literal:** La RAM es memoria de trabajo volátil y el SSD o HDD conserva datos sin alimentación. **Referencia:** manual.md, apartados 2, 5 y 6; bloque-01-ordenador-componentes.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | La RAM conserva los datos sin alimentación y el SSD no | **Incorrecta.** Invierte los conceptos: RAM pierde datos al cortar alimentación; SSD persiste. |
| **B** | La RAM es memoria de trabajo volátil y el SSD o HDD conserva datos sin alimentación | **Correcta.** RAM es memoria volátil de trabajo; HDD y SSD guardan los datos sin corriente. |
| **C** | La RAM solo sirve para guardar copias de seguridad | **Incorrecta.** La RAM se usa para procesamiento temporal, no solo copias de seguridad. |
| **D** | El SSD ejecuta instrucciones y la RAM conecta periféricos | **Incorrecta.** La CPU ejecuta instrucciones; SSD almacena datos y RAM conserva el estado de trabajo. |

> ⚠️ **¡Foco Examen!:** La capacidad de la RAM no debe confundirse con el espacio permanente del disco.

### LP-T19-002 — ¿Cuál es la función principal de la CPU?

**Clave correcta: C**. **Literal:** Ejecutar instrucciones y procesar datos. **Referencia:** manual.md, apartados 2 y 6; bloque-01-ordenador-componentes.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | Almacenar permanentemente todos los archivos | **Incorrecta.** Almacenamiento permanente es función principal de SSD/HDD. |
| **B** | Imprimir documentos pendientes | **Incorrecta.** Imprimir requiere el sistema y la impresora, no es función principal de la CPU. |
| **C** | Ejecutar instrucciones y procesar datos | **Correcta.** CPU interpreta y ejecuta instrucciones y procesa información. |
| **D** | Convertir imágenes escaneadas en texto | **Incorrecta.** Reconocer texto de imágenes es OCR y requiere software; no es la función principal de una CPU. |

> ⚠️ **¡Foco Examen!:** La CPU no es la placa base: esta conecta y coordina físicamente los componentes.

### LP-T19-003 — Respecto de USB-C, ¿qué afirmación es correcta?

**Clave correcta: D**. **Literal:** USB-C identifica principalmente una forma de conector, no una velocidad concreta. **Referencia:** manual.md, apartados 1, 5 y 6; bloque-04-almacenamiento-externo-usb.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | USB-C garantiza siempre velocidad USB4 | **Incorrecta.** USB-C no determina por sí mismo la versión USB admitida por puerto y cable. |
| **B** | USB-C solo puede utilizarse para alimentación eléctrica | **Incorrecta.** Puede transportar datos y alimentación y, según capacidades, vídeo. |
| **C** | USB-C es un sistema de archivos | **Incorrecta.** USB-C describe un conector físico, no estructura de archivos. |
| **D** | USB-C identifica principalmente una forma de conector, no una velocidad concreta | **Correcta.** La forma USB-C es distinta de las prestaciones de USB 2.0, 3.x, USB4 o modos alternativos. |

> ⚠️ **¡Foco Examen!:** No deben equipararse forma del conector y versión o velocidad del estándar USB.

### LP-T19-004 — ¿Qué relación puede existir entre un disco físico y la unidad C:?

**Clave correcta: A**. **Literal:** Un disco físico puede contener varias particiones o volúmenes y varias letras de unidad. **Referencia:** manual.md, apartados 5 y 6; bloque-04-almacenamiento-externo-usb.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | Un disco físico puede contener varias particiones o volúmenes y varias letras de unidad | **Correcta.** Una unidad lógica puede estar en un volumen dentro de un disco con varias particiones. |
| **B** | Siempre son exactamente el mismo objeto | **Incorrecta.** Disco físico y unidad lógica no son necesariamente idénticos. |
| **C** | La unidad C: siempre es un recurso de red | **Incorrecta.** C: suele ser un volumen local de sistema; no siempre red. |
| **D** | Cada partición requiere necesariamente un disco físico distinto | **Incorrecta.** Es posible crear diversas particiones en un solo disco físico. |

> ⚠️ **¡Foco Examen!:** La letra de unidad identifica una unidad lógica, no necesariamente un disco físico completo.

### LP-T19-005 — ¿Qué diferencia existe entre una impresora y la cola de impresión?

**Clave correcta: B**. **Literal:** La impresora produce la salida y la cola administra los trabajos pendientes. **Referencia:** manual.md, apartados 4, 5 y 6; bloque-02-perifericos-impresoras.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | La cola es el dispositivo físico y la impresora es un archivo | **Incorrecta.** Confunde el dispositivo de impresión con su lista de trabajos. |
| **B** | La impresora produce la salida y la cola administra los trabajos pendientes | **Correcta.** La impresora produce la salida; la cola gestiona trabajos en espera. |
| **C** | Ambas expresiones designan siempre el mismo controlador | **Incorrecta.** Cola, dispositivo y controlador son entidades diferentes. |
| **D** | La cola solo existe en impresoras de inyección | **Incorrecta.** Las colas existen con tecnologías distintas, incluidas las impresoras láser y de red. |

> ⚠️ **¡Foco Examen!:** Reenviar un trabajo atascado puede duplicar impresiones; primero debe revisarse la cola.

### LP-T19-006 — ¿Cuál es una diferencia característica entre una impresora láser y una de inyección de tinta?

**Clave correcta: D**. **Literal:** La láser utiliza normalmente tóner y la de inyección utiliza tinta líquida. **Referencia:** manual.md, apartado 5; bloque-02-perifericos-impresoras.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | La láser solo puede imprimir en blanco y negro | **Incorrecta.** Existen impresoras láser a color. |
| **B** | La de inyección no necesita consumibles | **Incorrecta.** Inyección de tinta necesita consumibles de tinta. |
| **C** | La de inyección siempre es más rápida en grandes volúmenes | **Incorrecta.** La velocidad no es universalmente mayor; depende de equipo, trabajo y ajustes. |
| **D** | La láser utiliza normalmente tóner y la de inyección utiliza tinta líquida | **Correcta.** Láser emplea normalmente tóner e inyección utiliza tinta líquida. |

> ⚠️ **¡Foco Examen!:** La tecnología no determina por sí sola color, calidad o velocidad en todos los modelos.

### LP-T19-007 — ¿Qué función cumple un alimentador automático de documentos o ADF en un escáner?

**Clave correcta: D**. **Literal:** Alimentar sucesivamente varias hojas para digitalizarlas. **Referencia:** manual.md, apartados 4 y 5; bloque-03-escaneres.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | Reconocer automáticamente el texto mediante OCR | **Incorrecta.** El OCR es un paso lógico separado de la alimentación de originales. |
| **B** | Aumentar la capacidad del disco duro | **Incorrecta.** No altera la capacidad del disco. |
| **C** | Convertir cualquier imagen en PDF editable | **Incorrecta.** El ADF no garantiza generar PDF editable: hace pasar hojas. |
| **D** | Alimentar sucesivamente varias hojas para digitalizarlas | **Correcta.** El ADF introduce automáticamente hojas sucesivas a la ruta de escaneado. |

> ⚠️ **¡Foco Examen!:** ADF es alimentación física de hojas; no equivale a OCR ni garantiza texto editable.

### LP-T19-008 — ¿Qué diferencia hay entre escanear un documento y aplicar OCR?

**Clave correcta: C**. **Literal:** Escanear obtiene una imagen y el OCR intenta reconocer texto dentro de ella. **Referencia:** manual.md, apartados 1, 5 y 6; bloque-03-escaneres.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | El OCR obtiene la imagen y el escáner comprime el texto | **Incorrecta.** El escáner captura imagen; OCR extrae caracteres en software. |
| **B** | Son exactamente la misma operación | **Incorrecta.** Son etapas distintas, aunque puedan integrarse en el mismo flujo. |
| **C** | Escanear obtiene una imagen y el OCR intenta reconocer texto dentro de ella | **Correcta.** Captura física produce imagen; OCR intenta interpretar el texto con posibles errores. |
| **D** | El OCR solo sirve para imprimir | **Incorrecta.** OCR no es solo una función de impresión; se usa para búsquedas y extracción. |

> ⚠️ **¡Foco Examen!:** Una digitalización puede ser solo imagen aunque visualmente contenga texto perfectamente legible.

### LP-T19-009 — ¿Por qué se recomienda expulsar de forma segura una memoria USB antes de desconectarla?

**Clave correcta: A**. **Literal:** Para finalizar escrituras pendientes y reducir el riesgo de corrupción de datos. **Referencia:** manual.md, apartados 5 y 7; bloque-04-almacenamiento-externo-usb.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | Para finalizar escrituras pendientes y reducir el riesgo de corrupción de datos | **Correcta.** Expulsar permite finalizar escrituras o desmontar correctamente el volumen. |
| **B** | Para aumentar su capacidad nominal | **Incorrecta.** La expulsión no incrementa capacidad física. |
| **C** | Para convertir automáticamente FAT32 en NTFS | **Incorrecta.** No convierte sistemas de archivos. |
| **D** | Para borrar el historial del dispositivo | **Incorrecta.** No es un borrado de historial ni datos. |

> ⚠️ **¡Foco Examen!:** Que una copia parezca terminada en pantalla no garantiza que todas las escrituras hayan concluido.

### LP-T19-010 — ¿Qué sistema de archivos suele ser adecuado para una unidad extraíble que debe admitir archivos de más de 4 GB y utilizarse en distintos sistemas actuales?

**Clave correcta: A**. **Literal:** exFAT. **Referencia:** manual.md, apartados 5 y 6; bloque-04-almacenamiento-externo-usb.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | exFAT | **Correcta.** exFAT admite archivos superiores a 4 GiB y tiene amplia compatibilidad moderna. |
| **B** | FAT12 | **Incorrecta.** FAT12 es heredado, con límites muy inferiores. |
| **C** | ISO 9660 de solo lectura | **Incorrecta.** ISO 9660 es formato de soporte óptico con limitaciones, no la opción normal de una unidad USB regrabable. |
| **D** | CDA | **Incorrecta.** CDA representa pistas de audio de CD en Windows, no sistema de archivos útil para USB. |

> ⚠️ **¡Foco Examen!:** FAT32 presenta el conocido límite aproximado de 4 GB por archivo, aunque la unidad tenga más capacidad.

### LP-T19-011 — ¿Cuál de los siguientes soportes ópticos puede borrarse y grabarse de nuevo?

**Clave correcta: B**. **Literal:** CD-RW. **Referencia:** manual.md, apartados 5 y 6; bloque-05-opticos.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | CD-ROM | **Incorrecta.** CD-ROM se suministra como soporte de solo lectura. |
| **B** | CD-RW | **Correcta.** CD-RW es regrabable (borrado y nueva grabación con equipo compatible). |
| **C** | CD-R | **Incorrecta.** CD-R es grabable una vez, no regrabable mediante borrado ordinario. |
| **D** | DVD-ROM | **Incorrecta.** DVD-ROM es soporte de solo lectura. |

> ⚠️ **¡Foco Examen!:** La R significa grabable una vez; la combinación RW identifica el soporte regrabable.

### LP-T19-012 — ¿Qué afirmación describe correctamente una copia de seguridad?

**Clave correcta: C**. **Literal:** Mantener una copia adicional verificable y separada del original. **Referencia:** manual.md, apartados 6 y 7; bloque-04-almacenamiento-externo-usb.md.

| Opción | Texto publicado | Comprobación |
|---|---|---|
| **A** | Mover el único original a una memoria USB | **Incorrecta.** Mover el único original no deja copia adicional de seguridad. |
| **B** | Crear un acceso directo al archivo original | **Incorrecta.** Un acceso directo depende del original: no contiene respaldo independiente. |
| **C** | Mantener una copia adicional verificable y separada del original | **Correcta.** Una copia adicional separada y verificable es la base de una estrategia de respaldo. |
| **D** | Renombrar el archivo sin duplicarlo | **Incorrecta.** Renombrar no crea copia de contenido. |

> ⚠️ **¡Foco Examen!:** Trasladar el original a un USB no crea respaldo; solo cambia la ubicación de la única copia.

## 3. Dictamen

- **12 claves** cotejadas con la opción literal correcta, y **48 alternativas** verificadas contra las funciones y distinciones de los 5 bloques del manual.
- No se detecta segunda respuesta correcta para los enunciados tal como están redactados.
- **Cautela técnica:** expulsar con seguridad es importante cuando existan escrituras pendientes; Windows permite diversas directivas de almacenamiento y no todas requieren idénticos pasos. El consejo del manual es prudente, no una afirmación de que toda extracción corrompe datos.
- **Cautela de compatibilidad:** exFAT es compatible con muchos sistemas actuales, pero no puede garantizarse compatibilidad con todos los dispositivos antiguos.
- **Límite de certificación:** el cotejo editorial es completo en el alcance declarado; **no** constituye prueba de navegador, móvil, accesibilidad, almacenamiento de resultados o publicación de GitHub Pages.
