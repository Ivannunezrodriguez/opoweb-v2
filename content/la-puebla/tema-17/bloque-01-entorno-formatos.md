# Tema 17 · Bloque 1 · Entorno, documentos, formatos y compatibilidad

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Procesador de textos, documento y archivo

El **documento** es la unidad lógica de trabajo; el **archivo** es su representación guardada en un soporte. Un documento nuevo puede existir temporalmente en memoria antes de guardarse. Al guardar se le asignan nombre, ubicación y formato.

Debe distinguirse:

- **crear**: iniciar un documento nuevo;
- **abrir**: cargar un archivo existente;
- **guardar**: actualizar el archivo actual;
- **guardar como**: crear otra copia, cambiar nombre, ubicación o formato;
- **cerrar**: cerrar el documento, no necesariamente el programa;
- **salir**: cerrar la aplicación;
- **exportar**: generar una salida en otro formato, normalmente sin cambiar el archivo editable de trabajo.

Si hay cambios no guardados, Word y Writer suelen advertir antes de cerrar. Cancelar evita el cierre; guardar conserva cambios; no guardar los descarta.

## 2. Microsoft Word: entorno principal

En Word para Windows aparecen normalmente:

- barra de título;
- barra de herramientas de acceso rápido;
- cinta de opciones;
- pestañas como Inicio, Insertar, Diseño, Disposición, Referencias, Correspondencia, Revisar y Vista;
- grupos de comandos dentro de cada pestaña;
- área del documento y punto de inserción;
- reglas horizontal y vertical cuando están activadas;
- barras de desplazamiento;
- barra de estado;
- controles de vista y zoom;
- paneles, como Navegación, Estilos o Comentarios.

### Cinta de opciones

Organiza comandos por pestañas y grupos. Algunas pestañas son **contextuales** y solo aparecen al seleccionar una tabla, imagen, encabezado u otro objeto.

### Vista Archivo o Backstage

La pestaña Archivo no edita directamente el texto. Reúne operaciones sobre el documento: Nuevo, Abrir, Guardar, Guardar como, Imprimir, Compartir, Exportar, Información, Opciones y cuenta, según la edición.

### Barra de estado

Puede mostrar número de página, recuento de palabras, idioma, estado de revisión, vistas y zoom. Sus elementos pueden personalizarse.

## 3. LibreOffice Writer: entorno principal

Writer presenta habitualmente:

- barra de título;
- barra de menús;
- barra Estándar;
- barra Formato;
- reglas;
- área del documento;
- barras de desplazamiento;
- barra de estado;
- barra lateral;
- Navegador;
- menús contextuales y barras contextuales para tablas u objetos.

### Barra lateral

Agrupa paneles como Propiedades, Estilos, Galería, Navegador y otros. Permite modificar formato sin abrir continuamente cuadros de diálogo.

### Navegador

Se abre normalmente con `F5`. Permite desplazarse por títulos, tablas, imágenes, secciones, marcadores, comentarios, campos y otros elementos. Es especialmente útil en documentos largos.

### Menús y barras

Writer mantiene una interfaz tradicional de menús y barras, aunque puede configurarse con variantes. El examen debe centrarse en la función de las órdenes, no en una disposición personalizada.

## 4. Crear documentos

En ambos programas puede crearse:

- un documento en blanco;
- un documento basado en plantilla;
- una copia de otro documento;
- un documento desde contenido importado.

Una **plantilla** contiene estructura, estilos, diseño, textos repetidos, campos y otras configuraciones reutilizables. Crear desde plantilla no equivale a editar la plantilla original.

Ejemplos administrativos:

- oficio;
- informe;
- certificado;
- acta;
- carta;
- instancia;
- etiqueta o sobre;
- formulario imprimible.

## 5. Abrir documentos

Al abrir debe comprobarse:

- formato y extensión;
- ubicación y permisos;
- si se abre en solo lectura;
- si existe vista protegida o advertencia de seguridad;
- si faltan fuentes;
- si hay elementos no compatibles;
- si el documento procede de Internet o correo;
- si requiere contraseña.

Abrir no modifica por sí mismo el archivo. Los cambios se consolidan al guardar.

## 6. Guardar y Guardar como

### Guardar

Actualiza el archivo en su ubicación y formato actuales. En un documento nuevo, la primera operación Guardar suele abrir Guardar como.

### Guardar como

Permite:

- cambiar nombre;
- elegir carpeta o unidad;
- crear una copia;
- cambiar formato;
- establecer opciones adicionales, como contraseña cuando el formato lo admite.

Guardar como un archivo existente puede pedir confirmación de reemplazo.

### Copias de seguridad y recuperación

El guardado automático, la autorrecuperación y el historial de versiones reducen riesgo, pero no sustituyen una política de copias de seguridad. Debe diferenciarse:

- autoguardado en servicios compatibles;
- información de autorrecuperación tras un fallo;
- copia de seguridad;
- historial de versiones en almacenamiento colaborativo.

## 7. Formatos de Microsoft Word

Formatos relevantes:

| Extensión | Significado práctico |
|---|---|
| `.docx` | documento estándar moderno de Word, basado en XML |
| `.doc` | formato binario heredado de Word 97-2003 |
| `.docm` | documento moderno que puede contener macros |
| `.dotx` | plantilla sin macros |
| `.dotm` | plantilla con macros |
| `.rtf` | texto enriquecido con compatibilidad amplia pero limitada |
| `.txt` | texto plano, sin estructura de formato compleja |
| `.pdf` | salida de distribución o impresión, no formato normal de edición |

El formato `.docx` es el nativo habitual. Convertir a formatos antiguos puede limitar características.

## 8. Formatos de LibreOffice Writer

Formatos relevantes:

| Extensión | Significado práctico |
|---|---|
| `.odt` | texto OpenDocument, formato nativo habitual de Writer |
| `.ott` | plantilla OpenDocument de texto |
| `.fodt` | OpenDocument en XML plano |
| `.docx` | formato de Word que Writer puede abrir y guardar mediante filtros |
| `.doc` | formato heredado de Word |
| `.rtf` | texto enriquecido |
| `.txt` | texto plano |
| `.pdf` | salida exportada |
| `.epub` | libro electrónico exportado |

LibreOffice recomienda conservar primero una copia en formato propio antes de guardar en un formato externo, porque pueden perderse parámetros de formato.

## 9. Compatibilidad entre `.docx` y `.odt`

Compatibilidad no significa identidad total. Pueden variar:

- fuentes;
- saltos de página;
- estilos;
- numeración;
- tablas complejas;
- cuadros de texto y formas;
- campos;
- índices;
- comentarios y control de cambios;
- macros;
- anclaje y ajuste de imágenes;
- encabezados o pies por secciones o estilos de página.

Procedimiento prudente:

1. conservar el original;
2. guardar una copia en el formato de destino;
3. revisar visualmente todo el documento;
4. comprobar páginas, tablas, numeración y campos;
5. generar PDF solo después de validar.

## 10. PDF y editable

Un PDF busca conservar apariencia y facilitar lectura o impresión. No debe considerarse sustituto del archivo editable.

- `.docx` o `.odt`: trabajo, modificación y reutilización;
- `.pdf`: entrega, publicación, registro o impresión cuando se necesita estabilidad visual.

Exportar a PDF no elimina automáticamente metadatos, comentarios ocultos o información sensible del archivo de origen. Debe revisarse la copia que se distribuye.

## 11. Propiedades y metadatos

Los documentos pueden almacenar:

- autor;
- título y asunto;
- palabras clave;
- fechas;
- estadísticas;
- comentarios;
- rutas o vínculos;
- historial o propiedades personalizadas.

Antes de publicar, conviene inspeccionar el documento para evitar información innecesaria.

## 12. Modos de trabajo y solo lectura

Un archivo puede abrirse:

- en edición;
- en visualización;
- en revisión;
- en solo lectura;
- protegido;
- bloqueado por permisos o por otro usuario.

Solo lectura no impide necesariamente crear una copia con otro nombre. Los permisos del sistema de archivos y las restricciones internas del documento son controles distintos.

## 13. Errores frecuentes

1. Confundir Guardar con Guardar como.
2. Pensar que PDF es el formato editable principal.
3. Cambiar de `.odt` a `.docx` sin revisar compatibilidad.
4. Creer que la extensión escrita manualmente convierte realmente el formato.
5. Cerrar sin comprobar cambios pendientes.
6. Editar una plantilla cuando se pretendía crear un documento basado en ella.
7. Confiar exclusivamente en autorrecuperación.
8. Abrir documentos desconocidos y habilitar contenido activo sin comprobar origen.
