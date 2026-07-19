# Tema 32 · Microsoft Windows 11 Pro I

## Epígrafe oficial

**Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de discos locales y de red.**

**Estado editorial:** `GENERACION_DESDE_CERO`

## 1. Explorador de archivos

El **Explorador de archivos** permite localizar, abrir, organizar y administrar archivos, carpetas, unidades locales, ubicaciones de red y contenidos sincronizados en la nube.

Puede abrirse mediante:

- icono de la barra de tareas;
- menú Inicio;
- combinación **Windows + E**.

La ventana incluye normalmente:

- panel de navegación;
- barra de direcciones;
- cuadro de búsqueda;
- área de contenido;
- barra de comandos;
- vistas y opciones de ordenación.

> ⚠️ **¡Foco Examen!:** **Windows + E** abre directamente el Explorador de archivos.

## 2. Archivos y carpetas

Un **archivo** es una unidad de información almacenada con un nombre y, normalmente, una extensión. Una **carpeta** es un contenedor lógico que puede incluir archivos y otras carpetas.

### Nombres y extensiones

Ejemplos:

| Nombre | Extensión | Tipo habitual |
|---|---|---|
| `informe.docx` | `.docx` | Documento de texto |
| `datos.xlsx` | `.xlsx` | Hoja de cálculo |
| `imagen.png` | `.png` | Imagen |
| `archivo.pdf` | `.pdf` | Documento PDF |

Windows no permite en nombres de archivo los caracteres:

```text
\ / : * ? " < > |
```

> ⚠️ **¡Foco Examen!:** La extensión ayuda a identificar el tipo de archivo, pero puede estar oculta en la vista del Explorador.

## 3. Crear archivos y carpetas

### Crear una carpeta

Procedimiento habitual:

1. Abrir la ubicación de destino.
2. Seleccionar **Nuevo > Carpeta**.
3. Escribir el nombre.
4. Confirmar con **Enter**.

Atajo frecuente: **Ctrl + Mayús + N**.

### Crear un archivo

Puede crearse desde:

- la aplicación correspondiente;
- el menú contextual **Nuevo**;
- la opción **Guardar como** de una aplicación.

> ⚠️ **¡Foco Examen!:** **Ctrl + Mayús + N** crea una carpeta nueva en la ubicación activa.

## 4. Seleccionar elementos

| Operación | Método |
|---|---|
| Seleccionar un elemento | Clic |
| Seleccionar varios contiguos | **Mayús + clic** |
| Seleccionar varios no contiguos | **Ctrl + clic** |
| Seleccionar todo | **Ctrl + A** |

## 5. Copiar y mover

### Copiar

Copiar crea un duplicado y mantiene el original.

- Copiar: **Ctrl + C**.
- Pegar: **Ctrl + V**.

### Mover

Mover cambia la ubicación del elemento.

- Cortar: **Ctrl + X**.
- Pegar: **Ctrl + V**.

También puede usarse arrastrar y soltar. Como regla práctica:

- dentro de la misma unidad, suele mover;
- entre unidades distintas, suele copiar.

El comportamiento puede modificarse con teclas y opciones contextuales.

| Operación | Original | Resultado |
|---|---|---|
| Copiar | Permanece | Se crea duplicado |
| Mover | Cambia de ubicación | No queda copia en origen |

> ⚠️ **¡Foco Examen!:** **Copiar** conserva el original; **mover** cambia su ubicación.

## 6. Renombrar

Puede renombrarse mediante:

- comando **Cambiar nombre**;
- menú contextual;
- tecla **F2**.

No debe modificarse arbitrariamente la extensión, porque puede impedir que la aplicación asociada reconozca el archivo.

## 7. Eliminar y Papelera de reciclaje

### Eliminación normal

La tecla **Supr** o la opción **Eliminar** suele enviar el elemento a la **Papelera de reciclaje** cuando procede.

Desde la Papelera puede:

- restaurarse el elemento;
- eliminarse definitivamente;
- vaciarse la Papelera.

### Eliminación permanente

**Mayús + Supr** elimina sin pasar por la Papelera, previa confirmación según la configuración.

Los archivos eliminados desde determinadas unidades de red, soportes extraíbles o ubicaciones especiales pueden no pasar por la Papelera.

> ⚠️ **¡Foco Examen!:** **Supr** suele enviar a la Papelera; **Mayús + Supr** elimina directamente.

## 8. Deshacer y rehacer

- Deshacer: **Ctrl + Z**.
- Rehacer: **Ctrl + Y**.

Estas órdenes pueden revertir operaciones recientes como mover, copiar, eliminar o renombrar, siempre que Windows conserve la acción en el historial de la sesión.

## 9. Rutas y ubicaciones

Una **ruta** identifica la localización de un archivo o carpeta.

Ejemplo local:

```text
C:\Usuarios\Ana\Documentos\Informe.pdf
```

Ejemplo de red UNC:

```text
\\SERVIDOR\Compartido\Informes
```

| Elemento | Significado |
|---|---|
| `C:` | Unidad local |
| `\` | Separador de carpetas |
| `\\SERVIDOR\RECURSO` | Ruta UNC de red |

## 10. Unidades de disco locales

Una unidad local es un dispositivo o volumen accesible directamente desde el equipo.

Ejemplos:

- `C:`: unidad principal del sistema;
- `D:`: otra partición, unidad óptica o volumen;
- memoria USB;
- disco externo.

Conceptos básicos:

- **capacidad total**;
- **espacio usado**;
- **espacio disponible**;
- **sistema de archivos**;
- **letra de unidad**.

Los sistemas de archivos habituales incluyen **NTFS**, **FAT32** y **exFAT**.

> ⚠️ **¡Foco Examen!:** La letra identifica la unidad lógica; no implica necesariamente un disco físico distinto.

## 11. Unidades y recursos de red

Una unidad de red permite acceder a una carpeta compartida de otro equipo o servidor como si fuera una unidad del sistema.

### Ruta UNC

La forma general es:

```text
\\servidor\recurso
```

### Asignar una unidad de red

Procedimiento general:

1. Abrir Explorador de archivos.
2. Acceder a **Este equipo**.
3. Elegir **Conectar a unidad de red**.
4. Seleccionar una letra.
5. Indicar la ruta de red.
6. Elegir, cuando proceda, reconectar al iniciar sesión.
7. Introducir credenciales si se solicitan.

### Desconectar

Puede utilizarse la opción **Desconectar unidad de red**.

| Unidad local | Unidad de red |
|---|---|
| Depende del almacenamiento conectado al equipo | Depende de servidor, red y permisos |
| Puede estar disponible sin red | Requiere conectividad |
| Permisos locales o del dispositivo | Permisos definidos en el recurso compartido |

> ⚠️ **¡Foco Examen!:** Mapear una unidad asigna una letra a un recurso de red; no copia físicamente su contenido al equipo.

## 12. Permisos y acceso

El acceso a archivos y carpetas puede depender de:

- cuenta de usuario;
- permisos NTFS;
- permisos del recurso compartido;
- credenciales de red;
- políticas de la organización.

Poder ver una carpeta no implica necesariamente poder modificar o eliminar su contenido.

## 13. Búsqueda, vistas y ordenación

El Explorador permite:

- buscar por nombre o contenido indexado;
- ordenar por nombre, fecha, tipo o tamaño;
- agrupar elementos;
- cambiar entre iconos, lista, detalles y otras vistas;
- mostrar extensiones y elementos ocultos.

> ⚠️ **¡Foco Examen!:** Ocultar un archivo no equivale a protegerlo mediante permisos o cifrado.

## 14. Atajos esenciales

| Acción | Atajo |
|---|---|
| Abrir Explorador | **Windows + E** |
| Nueva carpeta | **Ctrl + Mayús + N** |
| Copiar | **Ctrl + C** |
| Cortar | **Ctrl + X** |
| Pegar | **Ctrl + V** |
| Seleccionar todo | **Ctrl + A** |
| Renombrar | **F2** |
| Eliminar | **Supr** |
| Eliminar sin Papelera | **Mayús + Supr** |
| Deshacer | **Ctrl + Z** |

## 15. Esquema final

```text
WINDOWS 11 · ARCHIVOS Y CARPETAS
├─ Crear
├─ Seleccionar
├─ Copiar: Ctrl+C / Ctrl+V
├─ Mover: Ctrl+X / Ctrl+V
├─ Renombrar: F2
├─ Eliminar
│  ├─ Supr → Papelera
│  └─ Mayús+Supr → directo
├─ Unidades locales
│  ├─ letras
│  ├─ capacidad
│  └─ sistemas de archivos
└─ Unidades de red
   ├─ ruta UNC
   ├─ letra asignada
   ├─ permisos
   └─ conectividad
```

> ⚠️ **¡Foco Examen!:** Las trampas principales son confundir copiar con mover, eliminación normal con permanente y unidad local con recurso de red asignado.