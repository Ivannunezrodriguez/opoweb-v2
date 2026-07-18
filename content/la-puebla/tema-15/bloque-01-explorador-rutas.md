# Tema 15 · Bloque 1 · Explorador, archivos, carpetas, rutas y selección

**Estado:** APROBADO POR EL USUARIO

## 1. Explorador de archivos

El Explorador de archivos es la herramienta gráfica principal para localizar, abrir, organizar y administrar archivos, carpetas, unidades y ubicaciones de red.

Formas de apertura:

- icono de la barra de tareas;
- menú Inicio;
- `Windows + E`;
- búsqueda de Windows.

## 2. Zonas principales

### Panel de navegación

Muestra accesos como:

- Inicio o Acceso rápido;
- Escritorio, Documentos, Descargas, Imágenes y otras carpetas conocidas;
- Este equipo;
- unidades locales y extraíbles;
- Red;
- ubicaciones sincronizadas o ancladas.

### Barra de direcciones

Indica la ruta actual mediante segmentos navegables. Puede recibir una ruta escrita directamente, por ejemplo:

- `C:\Usuarios\Ana\Documentos`
- `\\servidor\archivo`
- `Z:\Expedientes`

### Cuadro de búsqueda

Busca en la ubicación actual y sus subcarpetas según la indexación y el alcance disponible.

### Área de contenido

Muestra los elementos de la carpeta. Puede adoptar vistas de iconos, lista, detalles o mosaicos. La vista **Detalles** facilita comparar nombre, fecha, tipo y tamaño.

### Paneles adicionales

- Panel de vista previa: muestra contenido sin abrir completamente el archivo cuando el formato lo permite.
- Panel de detalles: muestra metadatos y propiedades básicas.

## 3. Archivo, carpeta y acceso directo

### Archivo

Contiene información y suele identificarse mediante nombre y extensión.

Ejemplo: `acta_2026.docx`

- nombre base: `acta_2026`;
- extensión: `.docx`.

La extensión ayuda a Windows a asociar el archivo con una aplicación. Cambiarla manualmente no transforma el contenido.

### Carpeta

Contenedor jerárquico. Puede albergar archivos y subcarpetas.

### Acceso directo

Archivo especial que apunta a otro elemento. Eliminar el acceso directo no elimina normalmente el original. Mover el original puede dejar el acceso sin destino válido.

## 4. Nombres

Un nombre debe ser identificativo y evitar caracteres reservados por Windows:

`\ / : * ? " < > |`

También deben evitarse:

- nombres ambiguos;
- espacios finales;
- extensiones duplicadas;
- rutas innecesariamente largas;
- nombres que oculten versión, fecha o expediente.

En gestión administrativa resulta útil una convención consistente, por ejemplo:

`2026-07-18_Expediente-245_Informe-v02.pdf`

## 5. Rutas

### Ruta absoluta

Identifica la ubicación completa desde una raíz:

`C:\Datos\Contratos\2026\contrato.pdf`

### Ruta UNC

Identifica un recurso de red sin letra asignada:

`\\SERVIDOR\Compartida\Contratos\2026`

Componentes:

- servidor: `SERVIDOR`;
- recurso compartido: `Compartida`;
- ruta interna: `Contratos\2026`.

### Unidad asignada

La misma ubicación puede presentarse como:

`Z:\Contratos\2026`

La letra facilita el acceso, pero depende de la asignación realizada para ese usuario o equipo.

## 6. Propiedades y metadatos

`Alt + Intro` o menú contextual **Propiedades** permite consultar según el elemento:

- tipo;
- ubicación;
- tamaño;
- tamaño en disco;
- fechas;
- atributos;
- seguridad y permisos;
- capacidad y sistema de archivos en unidades.

**Tamaño** es la cantidad lógica de datos. **Tamaño en disco** puede ser mayor por la forma en que el sistema asigna espacio.

## 7. Extensiones visibles

Ocultar extensiones puede provocar confusiones, por ejemplo entre:

- `informe.pdf`
- `informe.pdf.exe`

Para trabajo administrativo es recomendable reconocer la extensión real y no basarse solo en el icono.

## 8. Selección

| Acción | Resultado |
|---|---|
| clic | selecciona un elemento |
| `Ctrl + clic` | añade o quita elementos discontinuos |
| `Mayús + clic` | selecciona un intervalo |
| `Ctrl + A` | selecciona todo |
| arrastrar un rectángulo | selecciona los elementos alcanzados |

Una operación sobre varios elementos se aplica al conjunto seleccionado. Antes de borrar o mover, conviene comprobar el número total seleccionado.

## 9. Ordenación, agrupación y vista

Ordenar cambia la presentación, no la ubicación física. Puede ordenarse por:

- nombre;
- fecha;
- tipo;
- tamaño.

Agrupar reúne visualmente elementos por un criterio. Cambiar la vista tampoco modifica archivos.

## 10. Elementos ocultos y protegidos

Windows puede ocultar archivos por configuración o atributo. Mostrar elementos ocultos no elimina su protección ni autoriza a modificarlos. Los archivos del sistema no deben manipularse sin necesidad y conocimiento.

## 11. Errores frecuentes

1. Confundir el panel Inicio con la ubicación real.
2. Creer que anclar una carpeta crea una copia.
3. Identificar el tipo solo por el icono.
4. Cambiar una extensión para convertir el formato.
5. Confundir ruta UNC y unidad local.
6. Interpretar ordenar como mover.
7. Ejecutar una acción múltiple sin revisar la selección.
8. Modificar archivos ocultos o de sistema por el mero hecho de mostrarlos.
