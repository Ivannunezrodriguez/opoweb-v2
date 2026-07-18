# La Puebla de Montalbán · Tema 15 · Manual modular

**Estado:** EN REVISIÓN DEL USUARIO  
**No publicado como tema aprobado.**  
**Fecha de revisión técnica:** 18 de julio de 2026.

> **Tema 15. Microsoft Windows I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Criterio de versión

El desarrollo utiliza **Windows 11** como referencia visual y funcional vigente. Se mantienen las operaciones comunes con Windows 10 cuando siguen siendo equivalentes, pero no se construye el tema alrededor de una versión cuyo soporte ordinario finalizó el 14 de octubre de 2025.

El examen puede formular operaciones de forma genérica o mostrar interfaces distintas. Por ello se priorizan:

- conceptos estables;
- consecuencias de cada acción;
- rutas alternativas por menú, teclado y arrastre;
- diferencias entre copiar, mover, eliminar y crear accesos directos;
- interpretación de mensajes de conflicto, permisos y dispositivos.

## 2. Estructura

1. [Explorador, archivos, carpetas, rutas y selección](bloque-01-explorador-rutas.md)
2. [Creación, copiado, movimiento, renombrado y borrado](bloque-02-operaciones-archivos.md)
3. [Unidades locales y de red](bloque-03-unidades-locales-red.md)
4. [Impresión de documentos](bloque-04-impresion.md)
5. [Digitalización de documentos](bloque-05-digitalizacion.md)
6. [Trazabilidad de fuentes oficiales](fuentes.md)
7. [Informe de revisión](feedback.md)

## 3. Mapa rápido

| Inciso oficial | Contenido operativo |
|---|---|
| Creación de archivos y carpetas | nuevo elemento, nombre, extensión, ubicación, permisos |
| Copiado | duplicar conservando el original; portapapeles, arrastre y conflictos |
| Borrado | Papelera, restauración, eliminación permanente y límites en red/removibles |
| Unidades locales | volumen, letra, ruta, capacidad, sistema de archivos y extracción segura |
| Unidades de red | recurso compartido, ruta UNC, unidad asignada, credenciales y permisos |
| Impresión | impresora, controlador, predeterminada, cuadro de impresión, cola y PDF |
| Digitalización | escáner, origen, resolución, color, formato, destino y OCR como proceso distinto |

## 4. Conceptos esenciales

### Archivo

Unidad lógica de información identificada por nombre, normalmente con extensión. La extensión orienta sobre el tipo de contenido y la aplicación asociada, pero cambiarla no convierte realmente el formato.

### Carpeta

Contenedor jerárquico de archivos y otras carpetas. Su finalidad es organizar; no es una copia del contenido que muestra un acceso directo.

### Ruta

Localización de un elemento dentro del sistema de archivos.

- Local: `C:\Usuarios\Nombre\Documentos\informe.docx`
- Red: `\\servidor\recurso\expedientes\2026`
- Unidad de red asignada: `Z:\expedientes\2026`

### Unidad

Representación lógica de un volumen local, dispositivo extraíble o recurso de red. La letra no identifica necesariamente un disco físico completo.

## 5. Explorador de archivos

Se abre desde Inicio, barra de tareas o `Windows + E`. Permite navegar, buscar, ordenar, cambiar la vista, consultar propiedades y ejecutar operaciones sobre archivos, carpetas, unidades y ubicaciones de red.

Elementos habituales:

- panel de navegación;
- Inicio o Acceso rápido;
- Este equipo;
- barra de direcciones;
- cuadro de búsqueda;
- zona de contenido;
- menú contextual;
- panel de vista previa o detalles.

## 6. Operaciones fundamentales

| Acción | Resultado |
|---|---|
| Crear | genera un elemento nuevo en la ubicación actual |
| Copiar y pegar | crea otro ejemplar y conserva el original |
| Cortar y pegar | traslada el elemento; si falla, el original no debe darse por perdido sin comprobar |
| Arrastrar | puede copiar, mover o crear acceso directo según origen, destino y modificadores |
| Renombrar | cambia el nombre, no el contenido; modificar extensión puede romper la asociación |
| Eliminar | normalmente envía a Papelera en unidades locales compatibles |
| Mayús + Supr | solicita eliminación sin pasar por Papelera |
| Restaurar | devuelve desde Papelera a la ubicación original |

## 7. Selección y atajos básicos

- `Ctrl + A`: seleccionar todo.
- `Ctrl + clic`: selección discontinua.
- `Mayús + clic`: rango continuo.
- `Ctrl + C`: copiar.
- `Ctrl + X`: cortar.
- `Ctrl + V`: pegar.
- `Ctrl + Z`: deshacer cuando la operación lo admite.
- `F2`: cambiar nombre.
- `Supr`: eliminar hacia Papelera cuando proceda.
- `Mayús + Supr`: eliminar sin Papelera.
- `Alt + Intro`: propiedades.
- `Ctrl + Mayús + N`: carpeta nueva.

## 8. Copiar, mover y arrastrar

Regla conceptual:

- copiar duplica;
- mover cambia de ubicación;
- un acceso directo solo referencia al original.

El arrastre no debe memorizarse como una regla única. Puede variar según el destino:

- dentro de la misma unidad, normalmente mueve;
- hacia otra unidad, normalmente copia;
- con `Ctrl`, fuerza copia;
- con `Mayús`, fuerza movimiento;
- con `Alt`, crea acceso directo.

Antes de soltar, Windows muestra mediante icono o texto la acción prevista.

## 9. Conflictos y seguridad

Al copiar o mover pueden aparecer:

- archivo con el mismo nombre;
- falta de espacio;
- archivo en uso;
- ruta demasiado problemática para una aplicación;
- permisos insuficientes;
- desconexión de red;
- destino de solo lectura;
- necesidad de confirmación administrativa.

No debe elegirse automáticamente “reemplazar”. Hay que valorar nombre, fecha, tamaño, versión y destino.

## 10. Unidades locales y de red

### Locales

Pueden representar:

- volumen del disco interno;
- partición;
- memoria USB;
- tarjeta;
- unidad óptica;
- disco externo.

Se consultan desde **Este equipo**, donde suelen mostrarse letra, etiqueta, capacidad y espacio disponible.

### Red

Un recurso compartido puede abrirse por ruta UNC o asignarse a una letra. La asignación no convierte el recurso remoto en almacenamiento local; sigue dependiendo de red, servidor, credenciales y permisos.

## 11. Impresión

Flujo básico:

1. comprobar impresora instalada y disponible;
2. abrir vista previa o cuadro **Imprimir**;
3. seleccionar impresora;
4. fijar páginas, copias, orientación, tamaño, color y dúplex cuando exista;
5. enviar el trabajo;
6. revisar la cola si no se imprime.

**Microsoft Print to PDF** genera un archivo PDF mediante una impresora virtual. No produce papel ni digitaliza un documento.

## 12. Digitalización

Digitalizar convierte un original físico en archivo digital mediante escáner o equipo multifunción.

Decisiones principales:

- superficie plana o alimentador;
- color, escala de grises o blanco y negro;
- resolución;
- formato de salida;
- carpeta de destino;
- una o varias páginas.

La aplicación **Escáner de Windows** permite seleccionar dispositivo, origen, tipo de archivo y ubicación. Si no se cambia el destino, Microsoft documenta como ubicación habitual `Imágenes\Digitalizaciones`.

El OCR reconoce texto dentro de una imagen. Digitalizar no garantiza por sí mismo que el contenido sea editable o buscable.

## 13. Errores frecuentes

1. Confundir copiar con mover.
2. Confundir carpeta con acceso directo.
3. Creer que cambiar `.jpg` por `.pdf` convierte el formato.
4. Eliminar sin comprobar si habrá Papelera.
5. Pensar que `Z:` es necesariamente un disco local.
6. Confundir compartir una carpeta con asignar una unidad.
7. Confundir permisos del recurso compartido con disponibilidad de red.
8. Enviar varias veces un trabajo atascado y duplicar impresiones.
9. Confundir imprimir en PDF con escanear.
10. Elegir resolución máxima sin considerar tamaño y finalidad.
11. Creer que una digitalización es automáticamente texto editable.
12. Desconectar una memoria mientras hay escritura pendiente.

## 14. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Fuentes oficiales de Microsoft: trazadas.
- Banco de preguntas: vacío.
- Revisión del usuario: pendiente.
- Tema cerrado: **NO**.
- Publicación como aprobado: **NO**.

El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 15 aprobado»**.
