# Tema 15 · Trazabilidad de fuentes oficiales

**Estado:** APROBADO POR EL USUARIO

Este tema no contiene un bloque jurídico articulado. La trazabilidad sustituye `norma → artículo` por `inciso oficial → documentación primaria de Microsoft → operación exigible`.

## 1. Explorador, archivos y carpetas

| Fuente oficial | Secciones utilizadas | Contenido exigible |
|---|---|---|
| [Explorador de archivos en Windows](https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows) | apertura, navegación, Acceso rápido, mover, vistas y búsqueda | interfaz, `Windows + E`, navegación, cortar/pegar, organización |
| [Métodos abreviados de teclado de Windows](https://support.microsoft.com/es-es/windows/m%C3%A9todos-abreviados-de-teclado-de-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) | métodos generales y del Explorador | selección, copiar, cortar, pegar, borrar, propiedades, navegación |
| [Sistemas de archivos locales](https://learn.microsoft.com/windows/win32/fileio/file-systems) | volúmenes, directorios y jerarquía | concepto técnico de sistema de archivos, volumen y directorio |

## 2. Unidades y red

| Fuente oficial | Secciones utilizadas | Contenido exigible |
|---|---|---|
| [Uso compartido de archivos a través de una red en Windows](https://support.microsoft.com/windows/map-a-network-drive-in-windows-7-f5529cc1-5d09-89e5-c666-11e5d96229b0) | compartir carpetas, conectar unidad de red y quitar acceso | recurso compartido, ruta, letra, reconexión y permisos |
| [Proveedor FileSystem de PowerShell](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_filesystem_provider) | unidades lógicas, físicas, directorios y recursos asignados | distinción entre unidad, ruta y recurso de red |

## 3. Impresión

| Fuente oficial | Secciones utilizadas | Contenido exigible |
|---|---|---|
| [Agregar o instalar una impresora en Windows](https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows) | detección, instalación y controladores | impresora local o de red y configuración básica |
| [Establecer una impresora predeterminada](https://support.microsoft.com/es-es/windows/hardware/printer/set-a-default-printer-in-windows) | selección manual y administración automática | significado de impresora predeterminada |
| [Ver la cola de impresión](https://support.microsoft.com/es-es/windows/hardware/printer/view-a-printer-s-print-queue-in-windows) | trabajos pendientes y apertura de cola | cola, estados y gestión de trabajos |
| [Solucionar problemas de conexión e impresión](https://support.microsoft.com/es-es/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows) | impresora no encontrada, cola y servicio | diagnóstico básico y orden prudente de actuación |
| [Imprimir un documento en Word](https://support.microsoft.com/word/print-a-document-in-word) | vista previa, páginas, copias y configuración | flujo genérico del cuadro de impresión |

## 4. Digitalización

| Fuente oficial | Secciones utilizadas | Contenido exigible |
|---|---|---|
| [Instalar y usar un escáner en Windows](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows) | instalación local y de red, aplicación Escáner, origen, formato y destino | flujo completo de digitalización |

## 5. Criterio temporal

La documentación de Microsoft indica que el soporte técnico ordinario de Windows 10 finalizó el **14 de octubre de 2025**. Por ello:

- Windows 11 es la referencia principal del manual;
- se conservan operaciones comunes con Windows 10 cuando la propia documentación las mantiene;
- no se memoriza una disposición visual concreta si la función puede cambiar de posición;
- se prioriza el resultado de la operación y sus consecuencias.

## 6. Contenido complementario explicado

Algunas explicaciones no proceden de una única pantalla de soporte, sino de conceptos técnicos necesarios para resolver preguntas prácticas:

- diferencia entre copiar, mover y acceso directo;
- rutas locales y UNC;
- permisos efectivos;
- volumen frente a disco físico;
- resolución, formatos y OCR;
- confidencialidad en impresión y escaneado.

Se incluyen como complemento imprescindible y se evitan cifras o rutas de interfaz no respaldadas.

## 7. Exclusiones

No forman parte central del epígrafe:

- administración avanzada de discos;
- comandos de PowerShell o símbolo del sistema;
- permisos NTFS avanzados y herencia completa;
- arquitectura SMB;
- administración de servidores de impresión;
- perfiles de color profesionales;
- normativa de documento electrónico y copia auténtica;
- firma electrónica y certificado, tratados en el tema 13.

La trazabilidad fue aprobada junto con el manual mediante la expresión **«Tema 15 aprobado»** el 18 de julio de 2026.
