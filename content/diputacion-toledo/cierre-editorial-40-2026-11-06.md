# Cierre técnico-pedagógico · Diputación de Toledo C1 · Tema 40

**Fecha de revisión:** **06/11/2026**. **Epígrafe fuente:** Anexo VII, convocatoria Administrativo/a C1, BOP Toledo **118 de 25/06/2026**.

**Tema 40:** «Conceptos generales del ordenador personal II. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD y memorias USB».

**Alcance efectivo:** un manual, una ficha de fuentes, una matriz de cobertura y un banco de **20 preguntas / 80 alternativas**. Se reformularon **8** preguntas que estaban repetidas o necesitaban precisión, **sin alterar IDs ni posición de respuesta correcta**. Contrastado técnicamente con fuentes primarias de **Microsoft, USB-IF, Epson y HP**. La auditoría **jurídico-estatutaria del C1 tema 22** sigue pendiente y no se contabiliza.

## Hallazgos corregidos

| Incidencia | Precisión contrastada | Fuente |
|---|---|---|
| FAT32: «4 GB» impreciso | Límite por **archivo individual**: **2^32 − 1 bytes**, es decir **4 GiB menos 1 byte** | [Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) |
| Expulsión USB: falta de políticas | **Extracción rápida** evita caché de escritura; **Mejor rendimiento** puede usarla y exige expulsión segura. Ninguna permite desconectar en mitad de una escritura | [Microsoft Learn](https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media) |
| USB-C: conector vs capacidad | Un cable **USB 2.0 Tipo C** tiene capacidad de datos **hasta 480 Mb/s** y no soporta señales **USB 3.2/USB4** | [USB-IF](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf) |
| Impresión: ppp vs ppm | **ppp** expresa resolución; **ppm** expresa páginas por minuto, no calidad gráfica | [HP Support](https://support.hp.com/pl-pl/document/ish_2281139-2041471-16?fallbackLocale=us-en&validated=true) |
| Tecnología para multicopia | Impresora **matricial de impacto** para formularios en varias capas | [Epson](https://support.epson.com/select/For-Work/Printers/Impact-Dot-Matrix/LX-300%2B-II-Impact-Printer/p/C11C640001) |
| Plug and Play vs controlador | Detección y configuración automática no eliminan la necesidad de **driver compatible** | [Microsoft Support](https://support.microsoft.com/es-es/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers) |
| Lectores y grabadores ópticos | **Leer** un DVD no asegura poder **grabar**; grabadora y soporte deben ser compatibles | Desarrollo del propio tema 40 |
| DVD de una/doble capa | Capacidades nominales típicas **4,7 GB** y **8,5 GB** respectivamente, en convención decimal | Desarrollo y tabla de capacidades del propio tema 40 |

> ⚠️ **¡Foco Examen!:** **4 GB decimales** no son **4 GiB binarios**; **USB-C** no implica **USB4**; **480 Mb/s** no son **480 MB/s**; y la necesidad técnica de expulsar un disco depende de la **política de escritura**, aunque expulsar sea buena práctica general.

## Preguntas nuevas y reemplazos

| ID | Evaluación nueva | Respuesta correcta |
|---|---|---|
| **DIP-T40-005** | ¿Cuál es el tamaño máximo exacto de un archivo individual en FAT32? | 4 GiB menos 1 byte (4.294.967.295 bytes) |
| **DIP-T40-008** | ¿Cuál es la capacidad nominal habitual de un DVD de una sola capa, frente a los 8,5 GB del de doble capa? | 4,7 GB (nominales, en notación decimal) |
| **DIP-T40-013** | ¿Qué tecnología de impresión resulta especialmente adecuada para formularios autocopiativos de varias hojas por impacto? | Impresora matricial de agujas con cinta entintada |
| **DIP-T40-015** | ¿Qué diferencia básica existe entre ppp (dpi) y páginas por minuto (ppm) al describir una impresora? | ppp mide resolución; ppm mide velocidad de impresión |
| **DIP-T40-016** | En Windows 11, ¿qué diferencia principal existe entre las políticas de almacenamiento USB «Extracción rápida» y «Mejor rendimiento»? | Extracción rápida evita caché de escritura; Mejor rendimiento la permite y exige expulsión segura |
| **DIP-T40-017** | ¿Qué diferencia existe entre una unidad lectora de DVD y una unidad grabadora de DVD? | La lectora puede leer discos compatibles; la grabadora también permite escribir en soportes admitidos |
| **DIP-T40-018** | Un periférico compatible con Plug and Play se conecta a Windows 11. ¿Qué afirmación es correcta? | Windows puede detectarlo e instalar el controlador automáticamente, pero sigue siendo necesario un controlador compatible |
| **DIP-T40-019** | Un cable USB-C está especificado únicamente como USB 2.0. ¿Qué capacidad máxima de datos y limitación corresponde a ese cable? | Hasta 480 Mb/s de USB 2.0; no soporta señales USB 3.2 ni USB4 |

## Inventario completo de 20 ítems

| ID | Respuesta correcta | Fuente de trazabilidad |
|---|---|---|
| **DIP-T40-001** | De entrada y salida | content/diputacion-toledo/tema-40/manual.md#periféricos-del-ordenador-personal |
| **DIP-T40-002** | Tóner | content/diputacion-toledo/tema-40/manual.md#impresoras |
| **DIP-T40-003** | Reconocer texto contenido en una imagen | content/diputacion-toledo/tema-40/manual.md#escáneres |
| **DIP-T40-004** | No tiene piezas móviles y suele ser más rápido | content/diputacion-toledo/tema-40/manual.md#discos-duros-externos |
| **DIP-T40-005** | 4 GiB menos 1 byte (4.294.967.295 bytes) | Microsoft Learn, comparativa de sistemas de archivos, tamaño máximo FAT32 · https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison |
| **DIP-T40-006** | 700 MB | content/diputacion-toledo/tema-40/manual.md#lectores-y-grabadores-de-cd-y-dvd |
| **DIP-T40-007** | Regrabable | content/diputacion-toledo/tema-40/manual.md#modalidades |
| **DIP-T40-008** | 4,7 GB (nominales, en notación decimal) | Tema 40, soportes ópticos: capacidades nominales · content/diputacion-toledo/tema-40/manual.md#lectores-y-grabadores-de-cd-y-dvd |
| **DIP-T40-009** | La forma física del conector | content/diputacion-toledo/tema-40/manual.md#memorias-usb |
| **DIP-T40-010** | Permite la comunicación entre el sistema operativo y el dispositivo | content/diputacion-toledo/tema-40/manual.md#conexión-instalación-y-controladores |
| **DIP-T40-011** | Para escanear lotes de varias páginas | content/diputacion-toledo/tema-40/manual.md#escáneres |
| **DIP-T40-012** | Usar la extracción segura | content/diputacion-toledo/tema-40/manual.md#seguridad-y-conservación |
| **DIP-T40-013** | Impresora matricial de agujas con cinta entintada | Epson, impresora matricial de impacto y formularios multicopia · https://support.epson.com/select/For-Work/Printers/Impact-Dot-Matrix/LX-300%2B-II-Impact-Printer/p/C11C640001 |
| **DIP-T40-014** | Escanear ambas caras de las hojas | Conceptos de escáneres · manual tema 40 |
| **DIP-T40-015** | ppp mide resolución; ppm mide velocidad de impresión | HP Support, configuración de impresión y relación dpi/ppm · https://support.hp.com/pl-pl/document/ish_2281139-2041471-16?fallbackLocale=us-en&validated=true |
| **DIP-T40-016** | Extracción rápida evita caché de escritura; Mejor rendimiento la permite y exige expulsión segura | Microsoft Learn, políticas de retirada de medios externos · https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media |
| **DIP-T40-017** | La lectora puede leer discos compatibles; la grabadora también permite escribir en soportes admitidos | Tema 40, lectores/grabadores y modalidades ópticas · content/diputacion-toledo/tema-40/manual.md#lectores-y-grabadores-de-cd-y-dvd |
| **DIP-T40-018** | Windows puede detectarlo e instalar el controlador automáticamente, pero sigue siendo necesario un controlador compatible | Microsoft Support, drivers de hardware y detección automática · https://support.microsoft.com/es-es/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers · https://support.microsoft.com/es-es/windows/hardware/add-a-hardware-device-to-a-windows-device |
| **DIP-T40-019** | Hasta 480 Mb/s de USB 2.0; no soporta señales USB 3.2 ni USB4 | USB-IF, especificaciones USB 2.0 Type-C · https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf |
| **DIP-T40-020** | Puede imprimir mediante calor sobre papel termosensible | Tipos de impresora · manual tema 40 |

## Comprobaciones estructurales

- **20 IDs consecutivos**, desde `DIP-T40-001` hasta `DIP-T40-020`, sin renumeración.
- **80 opciones**: **4** alternativas distintas por pregunta, índice **correcta** preservado en todas las revisiones y coincidencia literal de `respuestaLiteral` con la opción marcada.
- Manual con **epígrafe oficial**, **tablas comparativas**, ejemplos de trabajo y bloques **¡Foco Examen!**; matriz con trazabilidad de cinco incisos técnicos.
- Validación automatizada: `tests/validate-diputacion-c1-t40-cierre-20261106.mjs` integrada en `npm test` y `npm run test:all`.
- **39/40** temas de Diputación **C1** cuentan ahora con un cierre documental editorial; queda excluido el **tema 22**, sobre el acuerdo y estatutos del **OAPGT**.
- **Cómputo global de OpoWeb:** de **38/121** a **39/121** auditorías editoriales documentadas; **82/121** pendientes. **No** certifica la funcionalidad integral en **navegador real, móvil, WCAG ni PWA**, controles aún transversales.

## Tema 22 — investigación, sin atribución indebida de vigencia

Se identificaron reproducciones del [BOP **11/10/1996**, Estatutos originales](https://www.dateas.com/es/docs/boletin-oficial-de-la-provincia-de-toledo/1996/10/11), de la [**corrección del 04/11/1996**](https://www.dateas.com/es/docs/boletin-oficial-de-la-provincia-de-toledo/1996/11/04) y de una [**aprobación inicial en diciembre de 2004**](https://www.dateas.com/es/docs/boletin-oficial-de-la-provincia-de-toledo/2004/12/23). Son **reproducciones de un tercero**, no sustituyen el original del BOP. La [modificación oficial de **2011**](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011) ya está inventariada. Sin **todas las publicaciones definitivas y sus vigencias**, no se pueden fijar composiciones, quórums ni atribuciones actuales. Mantener **EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES**.

**Siguiente tarea editorial:** reunir y consolidar **Estatutos OAPGT** para C1 tema 22 con fuentes oficiales; si no se puede, continuar con otras convocatorias aún no cerradas, evitando presentar una hipótesis estatutaria como norma vigente.
