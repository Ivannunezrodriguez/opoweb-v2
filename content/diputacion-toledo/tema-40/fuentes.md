# Fuentes · Tema 40

## Programa oficial

- **Diputación Provincial de Toledo**. ANEXO VII · Administrativo. BOP de Toledo número 118, de **25 de junio de 2026**.

## Documentación técnica principal

- Microsoft Support. Documentación sobre dispositivos, impresoras, escáneres, unidades extraíbles y administración de hardware en Windows.
- USB Implementers Forum. Especificaciones y documentación sobre USB y conectores USB Type-C.
- Optical Storage Technology Association y documentación técnica de fabricantes sobre CD y DVD.
- Documentación técnica general de fabricantes de impresoras, escáneres y unidades de almacenamiento.

## Criterio editorial

El epígrafe es de carácter técnico y no está vinculado a una única norma jurídica. Se han utilizado conceptos estables y documentación técnica primaria o institucional, evitando cifras comerciales variables salvo capacidades nominales clásicas de soportes ópticos.

- Verificación editorial: **19 de julio de 2026**.
- Estado: `GENERACION_DESDE_CERO`.


## Fuentes concretas de la revisión — **29/10/2026**

- [Microsoft Support: instalar y usar escáneres](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows). Detección e instalación de escáneres locales y de red; escáner de cama plana y alimentador de documentos.
- [Microsoft Support: quitar hardware de forma segura](https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows). Expulsión de memorias USB y discos externos para evitar pérdida de datos.
- [USB Implementers Forum](https://www.usb.org/). Diferencia entre conector USB Tipo C y las funcionalidades que admite cada implementación.

**Control editorial:** test de **20 preguntas** y cuadro comparativo añadido al manual. Persisten pendientes de auditoría técnica integral y verificación funcional del sitio.

## Auditoría de cierre C1 tema 40 — **06/11/2026**

- [**Microsoft Learn: límites de FAT32, NTFS y exFAT**](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison): FAT32 admite archivos hasta aproximadamente **4 GiB**; técnicamente **2^32 − 1 bytes = 4 GiB − 1 byte**, distinto de **4 GB decimales**.
- [**Microsoft Learn: directivas de retirada de medios externos**](https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media): **Extracción rápida** vs **Mejor rendimiento** y obligatoriedad de expulsión segura cuando hay caché de escritura.
- [**Microsoft Support: expulsar hardware con seguridad**](https://support.microsoft.com/es-es/windows/hardware/safely-remove-hardware-in-windows): procedimiento y recomendación general para retirar USB/discos externos.
- [**USB-IF: tipo C y USB 2.0**](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf): un cable **USB 2.0 Type-C** alcanza hasta **480 Mb/s** y no soporta señales **USB 3.2/USB4**.
- [**HP Support: resolución en dpi y velocidad en ppm**](https://support.hp.com/pl-pl/document/ish_2281139-2041471-16?fallbackLocale=us-en&validated=true): ambos parámetros miden propiedades diferentes de una impresora.
- [**Epson: impresora matricial de impacto**](https://support.epson.com/select/For-Work/Printers/Impact-Dot-Matrix/LX-300%2B-II-Impact-Printer/p/C11C640001): cabezal de agujas y formularios multicopia.
- [**Microsoft: controladores**](https://support.microsoft.com/es-es/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers) y [**detección automática de hardware**](https://support.microsoft.com/es-es/windows/hardware/add-a-hardware-device-to-a-windows-device): Plug and Play no elimina el controlador.
- [**Microsoft: escáneres en Windows**](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows): cristal plano, alimentador y aplicación de escaneado.

**Banco:** **20 preguntas / 80 alternativas**, **8** ítems repetitivos o imprecisos reformulados (005, 008, 013, 015, 016, 017, 018 y 019), conservando identificadores y posiciones correctas. **Reporte:** [cierre 06/11/2026](../cierre-editorial-40-2026-11-06.md). Estas fuentes técnicas no sustituyen la certificación funcional real de OpoWeb.
