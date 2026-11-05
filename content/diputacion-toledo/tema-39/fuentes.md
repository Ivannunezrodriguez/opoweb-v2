# Fuentes · Tema 39

## Programa oficial

- **Diputación Provincial de Toledo**. ANEXO VII · Administrativo/a · BOP de Toledo número 118, de 25 de junio de 2026.

## Documentación técnica de referencia

- Microsoft Support. Información general sobre hardware, almacenamiento, memoria, dispositivos y funcionamiento de Windows.
- Microsoft Learn. Arquitectura de equipos, firmware UEFI, almacenamiento y administración de dispositivos.
- Intel. Documentación técnica general sobre procesadores, núcleos, hilos, memoria caché y plataformas.
- AMD. Documentación técnica general sobre procesadores y gráficos integrados.
- NVM Express. Especificaciones y documentación general sobre el protocolo NVMe.
- USB Implementers Forum. Especificaciones generales de USB y conectores.
- PCI-SIG. Documentación general sobre PCI Express.
- JEDEC. Estándares de memoria semiconductora.

## Criterio editorial

El tema se ha elaborado como contenido técnico estable y transversal, evitando asociar capacidades concretas a un conector cuando dependen de la implementación del fabricante.

Se distinguen expresamente:

- hardware, software y firmware;
- CPU, GPU, RAM y almacenamiento;
- M.2 como formato y NVMe como protocolo;
- USB-C como conector y las generaciones USB como capacidades;
- unidades binarias y decimales de información.

## Estado

`GENERACION_DESDE_CERO`

Verificación de integridad editorial: **19 de julio de 2026**.

## Fuentes técnicas verificadas el **29/10/2026**

- [NVM Express: especificaciones oficiales](https://nvmexpress.org/SPECIFICATIONS/). El **protocolo NVMe** admite distintos formatos y transportes; la especificación **NVMe 2.4** se publicó el **04/08/2026**.
- [USB-IF: identificación de USB Tipo C](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf). El **conector USB-C** no garantiza por sí solo USB4, USB 3.2 ni Power Delivery.
- [Microsoft Learn: arranque UEFI y BIOS](https://learn.microsoft.com/es-es/windows-hardware/manufacture/desktop/boot-to-uefi-mode-or-legacy-bios-mode?view=windows-11). Diferencia entre firmware de arranque UEFI y modo BIOS heredado.

**Control editorial:** banco ampliado a **20 preguntas** y manual con tabla comparativa. Quedan pendientes auditoría integral y pruebas funcionales de OpoWeb.

## Cotejo del bloque C1 36–39 — **05/11/2026**

- [**Intel: gráficos integrados y memoria RAM**](https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html): la GPU integrada usa memoria del sistema, sin requerir banco gráfico dedicado.
- [**Intel: elección de fuente de alimentación**](https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html): **750 W** de capacidad no implica consumo continuo de **750 W**.
- [**Intel: pasta térmica**](https://www.intel.com/content/www/us/en/gaming/resources/how-to-apply-thermal-paste.html): transferencia al disipador, relleno de imperfecciones de contacto.
- [**Microsoft Learn: Secure Boot**](https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/secure-boot): revisión de firmas del software de arranque, diferente de UEFI como firmware general.
- Materiales existentes sobre **1 kB = 1.000 bytes**, **1 KiB = 1.024 bytes**, NVMe/M.2 y USB-C permanecen vigentes. **5** preguntas duplicadas sustituidas, **20 preguntas / 80 alternativas**.
- [Informe del bloque](../cierre-editorial-36-39-2026-11-05.md).
