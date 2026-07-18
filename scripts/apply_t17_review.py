from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-17'
BASE.mkdir(parents=True, exist_ok=True)

files = {}

files['manual.md'] = r'''# La Puebla de Montalbán · Tema 17 · Manual modular

**Estado:** EN REVISIÓN DEL USUARIO  
**No publicado como tema aprobado.**  
**Fecha de revisión técnica:** 18 de julio de 2026.

> **Tema 17. LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Criterio de producto y versión

El epígrafe exige conocer dos familias de procesadores de texto:

- **Microsoft Word**, tomando como referencia funcional Word para Microsoft 365 y Word 2024 en Windows;
- **LibreOffice Writer**, tomando como referencia la ayuda oficial vigente de LibreOffice y su comportamiento estándar en Windows.

El examen puede preguntar operaciones comunes sin identificar una versión concreta. Por ello, el manual prioriza conceptos estables, resultados de las órdenes y diferencias estructurales entre ambos programas. No depende de una captura puntual de interfaz ni de la posición exacta de un botón que pueda variar por actualización.

## 2. Qué es un procesador de textos

Un procesador de textos permite crear, editar, dar formato, revisar, guardar, imprimir y exportar documentos. A diferencia de un editor de texto plano, administra estructura documental, estilos, páginas, tablas, imágenes, encabezados, pies, campos, comentarios y otros elementos de composición.

El documento no es solo una sucesión de caracteres. Contiene, entre otros:

- texto y marcas de párrafo;
- formato directo y estilos;
- propiedades de página;
- saltos y secciones o estilos de página;
- tablas, imágenes, formas y objetos;
- encabezados, pies y numeración;
- metadatos, comentarios y cambios controlados;
- vínculos y campos;
- configuración de impresión y exportación.

## 3. Estructura del manual

1. [Entorno, documentos, formatos y compatibilidad](bloque-01-entorno-formatos.md)
2. [Edición, selección, navegación, búsqueda y corrección](bloque-02-edicion-busqueda.md)
3. [Formato de caracteres, párrafos, estilos y listas](bloque-03-formato-estilos.md)
4. [Páginas, secciones, encabezados, tablas e imágenes](bloque-04-paginas-objetos.md)
5. [Revisión, combinación, impresión, exportación y comparación](bloque-05-revision-salida.md)
6. [Trazabilidad de fuentes oficiales](fuentes.md)
7. [Informe para revisión](feedback.md)

## 4. Mapa del epígrafe

| Inciso oficial | Contenido exigible |
|---|---|
| LibreOffice y Microsoft Office | identificar Writer y Word, sus entornos, formatos y diferencias operativas |
| Procesamiento de texto | crear, abrir, guardar, editar, seleccionar, buscar, corregir y organizar contenido |
| Microsoft Word | cinta de opciones, Backstage, estilos, secciones, revisión, combinación y salida |
| LibreOffice Writer | menús, barras, barra lateral, Navegador, estilos de página, ODF y exportación |
| Uso administrativo | documentos uniformes, plantillas, tablas, encabezados, correspondencia, impresión y PDF |

## 5. Diferencias esenciales que deben quedar claras

| Materia | Microsoft Word | LibreOffice Writer |
|---|---|---|
| Formato nativo habitual | `.docx` | `.odt` |
| Plantilla habitual | `.dotx` | `.ott` |
| Interfaz principal | cinta de opciones y vista Archivo/Backstage | menús, barras de herramientas, barra lateral y Navegador |
| Organización de páginas diferentes | saltos de sección | estilos de página y saltos que aplican estilos |
| Estilos | estilos de carácter, párrafo, tabla y otros | estilos de párrafo, carácter, marco, página, lista y tabla |
| Seleccionar todo en configuración española habitual | `Ctrl + A` en Word para Windows según la documentación actual | `Ctrl + E` en Writer según la ayuda española |
| Guardar en configuración española habitual | `Ctrl + S` según la documentación actual de Word | `Ctrl + G` según la ayuda española de LibreOffice |
| PDF | guardar o exportar a PDF | Exportar a PDF o Exportar directamente a PDF |

Los atajos pueden depender del idioma, del sistema, de la edición y de personalizaciones. En examen debe atenderse al programa y al contexto indicados.

## 6. Flujo de trabajo correcto

Un flujo administrativo razonable es:

1. crear desde documento en blanco o plantilla;
2. guardar pronto con nombre, ubicación y formato adecuados;
3. redactar y estructurar mediante párrafos y estilos;
4. insertar tablas, imágenes, encabezados o campos cuando sean necesarios;
5. revisar ortografía, formato, saltos y datos;
6. controlar cambios o comentarios si intervienen varias personas;
7. comprobar vista previa, páginas, márgenes y numeración;
8. guardar el editable en formato nativo;
9. generar PDF cuando se necesite una salida estable;
10. verificar el archivo final antes de enviarlo, registrarlo o imprimirlo.

## 7. Principios de calidad documental

- Usar estilos para mantener uniformidad.
- No alinear texto mediante series de espacios.
- No crear nuevas páginas pulsando repetidamente Intro.
- Usar tablas solo cuando exista estructura tabular.
- Mantener contraste, jerarquía de títulos y texto alternativo.
- Comprobar encabezados, pies, numeración y saltos.
- Conservar una copia editable y una salida final cuando proceda.
- Revisar pérdida de formato al cambiar entre `.docx` y `.odt`.
- No confundir guardar, guardar como, exportar e imprimir.

## 8. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Fuentes oficiales de Microsoft y LibreOffice: trazadas.
- Comparación Word/Writer: integrada.
- Banco de preguntas: vacío.
- Revisión del usuario: pendiente.
- Tema cerrado: **NO**.
- Publicación como aprobado: **NO**.

El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 17 aprobado»**.
'''

files['bloque-01-entorno-formatos.md'] = r'''# Tema 17 · Bloque 1 · Entorno, documentos, formatos y compatibilidad

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
'''

files['bloque-02-edicion-busqueda.md'] = r'''# Tema 17 · Bloque 2 · Edición, selección, navegación, búsqueda y corrección

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Punto de inserción y selección

El **punto de inserción** indica dónde se introducirá texto. La **selección** identifica el contenido sobre el que actuará la orden siguiente.

Operaciones básicas:

- clic para situar el cursor;
- doble clic para seleccionar una palabra;
- selección mediante arrastre;
- `Mayús` más flechas para ampliar selección;
- `Ctrl` más flechas para desplazarse por palabras o párrafos;
- `Inicio` y `Fin` para extremos de línea;
- `Ctrl + Inicio` y `Ctrl + Fin` para extremos del documento;
- selección de bloques, filas o celdas en contextos específicos.

Una orden de formato con texto seleccionado afecta a la selección. Sin selección, puede afectar al punto de inserción, a la palabra actual o al párrafo actual según la orden.

## 2. Modos de inserción y sobrescritura

En modo inserción, el texto nuevo desplaza al existente. En sobrescritura, reemplaza caracteres. Writer documenta la tecla `Insert` para alternar el modo cuando está habilitado. En Word moderno la sobrescritura puede requerir activación en opciones.

No debe confundirse sobrescribir caracteres con reemplazar un archivo al guardar.

## 3. Marcas no imprimibles

Las marcas de formato muestran elementos que normalmente no se imprimen:

- marca de párrafo;
- espacios;
- tabulaciones;
- saltos de línea;
- saltos de página;
- saltos de sección;
- texto oculto u otras marcas según configuración.

Sirven para diagnosticar espacios duplicados, párrafos vacíos, tabulaciones indebidas y saltos. Mostrar marcas no significa que vayan a imprimirse.

## 4. Párrafo, salto de línea y salto de página

- `Intro`: finaliza el párrafo y crea otro.
- `Mayús + Intro`: salto de línea dentro del mismo párrafo.
- `Ctrl + Intro`: salto de página manual en ambos programas.

Un salto de página es preferible a pulsar Intro repetidamente. Los párrafos vacíos añaden contenido estructural y pueden alterar el documento al cambiar márgenes o fuentes.

## 5. Cortar, copiar y pegar

- **cortar**: retira la selección y la coloca en el Portapapeles;
- **copiar**: mantiene el original y coloca una copia;
- **pegar**: inserta el contenido del Portapapeles;
- **arrastrar**: puede mover o copiar según contexto y teclas modificadoras.

Atajos comunes:

- `Ctrl + X`: cortar;
- `Ctrl + C`: copiar;
- `Ctrl + V`: pegar;
- `Ctrl + Z`: deshacer;
- `Ctrl + Y`: rehacer o repetir según aplicación y contexto.

### Pegado especial

Permite decidir cómo se inserta el contenido:

- conservar formato de origen;
- adaptar al formato de destino;
- pegar solo texto;
- pegar como imagen;
- crear vínculo;
- seleccionar un formato disponible.

Pegar solo texto evita trasladar estilos, enlaces o formatos no deseados.

## 6. Deshacer, rehacer y repetir

**Deshacer** revierte acciones recientes. **Rehacer** recupera una acción deshecha. **Repetir** ejecuta de nuevo una acción cuando la aplicación lo permite.

El historial puede perderse al cerrar. No sustituye el guardado ni el historial de versiones.

## 7. Mover y duplicar texto

Procedimientos:

- cortar y pegar para mover;
- copiar y pegar para duplicar;
- arrastrar una selección;
- usar teclas específicas para mover párrafos o elementos en esquemas y listas.

Antes de mover contenido debe comprobarse si se incluyen marcas de párrafo, porque contienen formato del párrafo.

## 8. Buscar

Buscar localiza texto u otros elementos. Puede incluir:

- coincidencia exacta;
- mayúsculas y minúsculas;
- palabras completas;
- formato;
- caracteres especiales;
- expresiones o comodines según programa;
- navegación por resultados.

En Word, el panel Navegación permite buscar y desplazarse por títulos, páginas y resultados. En Writer, la barra Buscar y el Navegador complementan la búsqueda.

## 9. Reemplazar

Reemplazar modifica coincidencias localizadas. Puede hacerse:

- una a una;
- todas de una vez;
- con formato;
- usando caracteres especiales.

**Reemplazar todo** debe usarse con prudencia. Puede modificar partes no previstas. Es recomendable revisar resultados o trabajar sobre una copia.

Ejemplos:

- sustituir una denominación antigua;
- eliminar dobles espacios;
- cambiar un formato aplicado de forma incorrecta;
- reemplazar saltos o marcas mediante códigos especiales.

## 10. Navegación en documentos largos

Herramientas:

- panel Navegación de Word;
- Navegador de Writer;
- títulos con estilos;
- Ir a;
- marcadores;
- referencias cruzadas;
- búsqueda;
- miniaturas o páginas según vista.

Un documento con títulos correctamente estilizados permite saltar entre apartados y generar una tabla de contenido.

## 11. Ortografía y gramática

El corrector puede detectar:

- palabras no reconocidas;
- errores ortográficos;
- determinadas construcciones gramaticales;
- repeticiones o sugerencias de estilo, según producto y configuración.

Opciones habituales:

- cambiar;
- cambiar todo;
- omitir;
- omitir todo;
- agregar al diccionario;
- seleccionar idioma;
- desactivar revisión para una selección.

Una palabra subrayada no es necesariamente incorrecta. Puede ser un nombre propio, tecnicismo o idioma mal asignado. Agregar términos erróneos al diccionario perpetúa fallos.

## 12. Idioma del texto

El idioma controla diccionarios, separación silábica y revisión. No depende solo del idioma de la interfaz.

En documentos con varias lenguas debe asignarse el idioma correcto a cada parte. La opción “no revisar ortografía ni gramática” no corrige el problema: solo oculta la revisión.

## 13. Autocorrección y texto automático

La autocorrección puede:

- corregir errores frecuentes;
- sustituir secuencias;
- aplicar mayúsculas;
- crear listas automáticamente;
- convertir comillas o símbolos.

El texto automático o bloques reutilizables insertan contenido predefinido. Debe revisarse que el texto insertado siga vigente.

## 14. Guiones, espacios y tabulaciones

Elementos especiales:

- guion normal;
- guion no separable;
- guion discrecional;
- espacio normal;
- espacio no separable;
- tabulación;
- sangría.

No debe usarse una cadena de espacios para alinear columnas. Deben emplearse tabuladores, tablas, sangrías o estilos.

## 15. Atajos y diferencias lingüísticas

La documentación oficial puede mostrar atajos localizados. Ejemplos importantes:

| Acción | Word para Windows, documentación española | Writer, ayuda española |
|---|---|---|
| seleccionar todo | `Ctrl + A` | `Ctrl + E` |
| guardar | `Ctrl + S` | `Ctrl + G` |
| buscar y reemplazar | `Ctrl + H` | `Ctrl + H` |
| ortografía | `F7` | `F7` |
| salto de página | `Ctrl + Intro` | `Ctrl + Intro` |
| mostrar Navegador | panel mediante Vista o búsqueda | `F5` |

Los atajos pueden personalizarse. En preguntas tipo test debe leerse si se refiere a Word, Writer, interfaz española o versión web.

## 16. Errores frecuentes

1. Pulsar Intro varias veces para ir a otra página.
2. Confundir salto de línea con nuevo párrafo.
3. Pegar contenido web conservando formato no deseado.
4. Ejecutar Reemplazar todo sin revisar.
5. Añadir una palabra mal escrita al diccionario.
6. Usar espacios para alinear.
7. Confundir borrar la lista de descargas con borrar archivos, analogía aplicable al contenido enlazado.
8. Creer que Deshacer permanece después de cerrar.
9. No seleccionar el idioma correcto.
10. Memorizar atajos de otro idioma o aplicación.
'''

files['bloque-03-formato-estilos.md'] = r'''# Tema 17 · Bloque 3 · Formato de caracteres, párrafos, estilos y listas

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Contenido y formato

El contenido es la información; el formato determina su presentación. Debe distinguirse:

- **formato de carácter**: afecta a caracteres seleccionados;
- **formato de párrafo**: afecta al párrafo completo;
- **formato de página**: afecta a la página, sección o estilo de página;
- **estilo**: conjunto nombrado de propiedades reutilizables;
- **formato directo**: propiedades aplicadas manualmente a una selección.

## 2. Formato de carácter

Propiedades habituales:

- familia tipográfica;
- tamaño;
- negrita;
- cursiva;
- subrayado;
- tachado;
- color;
- resaltado;
- mayúsculas y versalitas;
- superíndice y subíndice;
- espaciado entre caracteres;
- efectos;
- idioma;
- texto oculto.

No todas las propiedades son adecuadas para documentos administrativos. Debe priorizarse legibilidad, sobriedad y uniformidad.

### Quitar formato directo

Restaura el aspecto definido por el estilo o valores base. Es útil cuando un texto copiado arrastra formatos. No elimina el contenido.

## 3. Formato de párrafo

Propiedades:

- alineación izquierda, derecha, centrada o justificada;
- sangría izquierda y derecha;
- sangría de primera línea;
- sangría francesa;
- espacio antes y después;
- interlineado;
- tabulaciones;
- bordes y sombreado;
- control de líneas y saltos;
- nivel de esquema;
- numeración o viñetas.

La marca de párrafo almacena muchas de estas propiedades. Si se copia o elimina, puede afectar al formato.

## 4. Alineación

- izquierda: borde izquierdo uniforme;
- derecha: borde derecho uniforme;
- centrada: texto centrado;
- justificada: ajusta espacios para alinear ambos bordes.

La justificación puede producir espacios excesivos en columnas estrechas. No debe confundirse con centrado vertical de la página.

## 5. Sangrías

- **izquierda**: separa todo el párrafo del margen izquierdo;
- **derecha**: separa del margen derecho;
- **primera línea**: desplaza solo la primera línea;
- **francesa**: primera línea más próxima al margen y restantes líneas desplazadas.

La regla permite modificar sangrías visualmente, pero el cuadro de diálogo ofrece precisión.

## 6. Espaciado e interlineado

- espacio antes/después: distancia entre párrafos;
- interlineado: distancia entre líneas del mismo párrafo.

No debe crearse separación entre párrafos introduciendo párrafos vacíos. Los estilos permiten aplicar espaciado consistente.

## 7. Tabulaciones

Una tabulación posiciona el texto en una parada definida. Tipos habituales:

- izquierda;
- derecha;
- centrada;
- decimal;
- barra.

Puede incluir relleno de puntos. Es útil en listados sencillos, pero para datos con filas y columnas suele ser preferible una tabla.

## 8. Estilos

Un estilo agrupa propiedades. Ventajas:

- uniformidad;
- cambios globales;
- estructura;
- navegación;
- generación de índices;
- accesibilidad;
- menor uso de formato directo.

### Word

Incluye estilos como Normal, Título 1, Título 2 y otros. El panel Estilos permite aplicar, modificar, crear y administrar estilos.

### Writer

Distingue estilos de:

- párrafo;
- carácter;
- marco;
- página;
- lista;
- tabla.

La barra lateral Estilos se activa habitualmente con `F11` según la configuración documentada.

## 9. Jerarquía de títulos

Los títulos no deben crearse solo aumentando tamaño y negrita. Deben aplicarse estilos de título con nivel de esquema.

Esto permite:

- Navegador o panel Navegación;
- tabla de contenido automática;
- esquema;
- referencias;
- reorganización;
- accesibilidad para lectores de pantalla.

No se debe saltar arbitrariamente de Título 1 a Título 4 sin estructura lógica.

## 10. Modificar estilos

Al modificar un estilo cambian los elementos vinculados a él. Debe comprobarse:

- alcance del estilo;
- documento o plantilla donde se guarda;
- herencia o estilo siguiente;
- si existe formato directo que oculta parte del cambio;
- actualización automática, cuando esté disponible.

## 11. Plantillas

Una plantilla puede contener:

- estilos;
- márgenes;
- encabezados y pies;
- logotipos;
- textos fijos;
- campos;
- macros en formatos que las admitan;
- configuración de idioma.

En administración, una plantilla reduce errores y asegura identidad corporativa. Debe mantenerse controlada y actualizada.

## 12. Listas con viñetas y numeración

Tipos:

- viñetas;
- numeración;
- lista multinivel;
- numeración de títulos.

Las listas deben crearse con funciones de lista, no escribiendo manualmente guiones y números. Así pueden:

- continuar o reiniciar numeración;
- cambiar nivel;
- modificar formato global;
- mantener sangrías;
- integrarse con estilos.

## 13. Listas multinivel

Relacionan niveles jerárquicos, por ejemplo:

1. nivel principal;
   1. subnivel;
   2. subnivel;
2. siguiente principal.

En Word conviene vincular niveles a estilos de título cuando se numera un documento formal. En Writer pueden usarse estilos de lista y numeración de títulos.

## 14. Copiar formato

Word dispone de Copiar formato; Writer de Clonar formato. Copian propiedades, no el texto. Debe comprobarse si se aplica a carácter, párrafo u objeto.

## 15. Bordes, sombreado y fondo

Pueden aplicarse a párrafos, páginas, tablas y objetos. Un borde de párrafo no es una forma dibujada. El sombreado no equivale al resaltado de caracteres.

## 16. Columnas

Las columnas periodísticas distribuyen texto verticalmente. Pueden aplicarse al documento, sección o parte según programa. No deben confundirse con columnas de tabla.

## 17. Formato directo frente a estilos

| Formato directo | Estilos |
|---|---|
| rápido para una excepción | adecuado para estructura repetida |
| difícil de mantener en documentos largos | permite cambios globales |
| puede producir incoherencias | mejora uniformidad |
| no aporta por sí solo jerarquía semántica | puede definir niveles y navegación |

La buena práctica es usar estilos para la estructura y formato directo para excepciones justificadas.

## 18. Atajos seleccionados

Los atajos varían por aplicación e idioma. Según documentación española:

### Word para Windows

- `Ctrl + N`: negrita;
- `Ctrl + I`: cursiva;
- `Ctrl + U`: subrayado en la documentación de escritorio;
- `Ctrl + J`: justificar;
- `Ctrl + E`: centrar;
- `Ctrl + M`: aumentar sangría;
- `Ctrl + Mayús + M`: quitar sangría;
- `Ctrl + Alt + 1/2/3`: aplicar Título 1/2/3.

### Writer

- `Ctrl + J`: justificar;
- `Ctrl + T`: centrar según la ayuda española;
- `Ctrl + L`: alinear a la izquierda;
- `Ctrl + R`: alinear a la derecha;
- `Ctrl + 1/2/3`: aplicar Título 1/2/3;
- `Ctrl + 0`: aplicar Cuerpo de texto;
- `F11`: estilos;
- `F12`: lista ordenada;
- `Mayús + F12`: lista no ordenada.

No deben mezclarse atajos de Word en inglés con los localizados en español ni con los de Writer.

## 19. Errores frecuentes

1. Crear títulos solo con negrita y tamaño.
2. Separar párrafos con líneas vacías.
3. Usar espacios en lugar de sangrías o tabuladores.
4. Aplicar formato directo a cientos de títulos.
5. Confundir interlineado y espacio entre párrafos.
6. Confundir lista multinivel y numeración manual.
7. Borrar la marca de párrafo sin comprender el formato que contiene.
8. Usar demasiadas fuentes y colores.
9. Suponer que un estilo tiene el mismo nombre y efecto exacto en Word y Writer.
10. Memorizar atajos sin atender a la aplicación.
'''

files['bloque-04-paginas-objetos.md'] = r'''# Tema 17 · Bloque 4 · Páginas, secciones, encabezados, tablas e imágenes

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Formato de página

Elementos principales:

- tamaño del papel;
- orientación vertical u horizontal;
- márgenes;
- columnas;
- bordes y fondo;
- encabezado y pie;
- numeración;
- disposición de secciones o estilos de página;
- saltos;
- configuración de impresión.

Cambiar el zoom no cambia el tamaño real de impresión.

## 2. Márgenes

Los márgenes son distancias entre el borde del papel y el área de contenido. Pueden ser:

- superior;
- inferior;
- izquierdo;
- derecho;
- interior y exterior en páginas enfrentadas;
- margen de encuadernación.

No debe simularse un margen insertando espacios o saltos.

## 3. Orientación y tamaño

- vertical: altura mayor que anchura;
- horizontal: anchura mayor que altura.

El tamaño puede ser A4, A3, carta u otro. Cambiar orientación o tamaño puede alterar saltos y tablas.

## 4. Saltos

Tipos relevantes:

- salto de línea;
- salto de página;
- salto de columna;
- salto de sección en Word;
- salto manual con cambio de estilo de página en Writer.

Un salto es una marca estructural. No equivale a añadir párrafos vacíos.

## 5. Secciones en Microsoft Word

Una sección permite cambiar dentro del documento:

- orientación;
- márgenes;
- columnas;
- encabezados y pies;
- numeración;
- bordes;
- notas y otras opciones.

Tipos habituales de salto de sección:

- página siguiente;
- continua;
- página par;
- página impar.

### Vincular al anterior

Los encabezados y pies de una nueva sección suelen estar vinculados a la anterior. Para que sean diferentes, debe desactivarse **Vincular al anterior** en el encabezado y, por separado, en el pie.

Eliminar un salto de sección puede transferir o alterar formato de sección.

## 6. Estilos de página en Writer

Writer utiliza **estilos de página** para definir tamaño, márgenes, orientación, encabezado, pie, columnas, bordes y otros atributos.

Para cambiar de diseño se inserta un salto manual que aplica otro estilo de página o se configura la secuencia de estilos.

Diferencia clave:

- Word: la unidad técnica habitual es la **sección**;
- Writer: la unidad de diseño es el **estilo de página**.

No debe buscarse en Writer una equivalencia literal de todas las funciones de sección de Word.

## 7. Encabezados y pies

Son áreas repetidas en la parte superior e inferior. Pueden contener:

- título;
- organismo;
- logotipo;
- fecha;
- número de página;
- código de documento;
- campos;
- texto de confidencialidad.

Opciones:

- primera página diferente;
- páginas pares e impares diferentes;
- diferentes por sección o estilo de página;
- numeración con formatos distintos.

## 8. Números de página

Un número de página suele ser un **campo**, no texto fijo. Puede insertarse en encabezado, pie u otra posición.

Debe distinguirse:

- número visible;
- página física;
- formato romano o arábigo;
- inicio de numeración;
- reinicio por sección o estilo;
- total de páginas.

Escribir manualmente “1, 2, 3” en cada pie no crea numeración automática.

## 9. Campos

Un campo muestra información calculada o vinculada:

- número de página;
- fecha;
- autor;
- nombre de archivo;
- referencias;
- datos de combinación;
- tabla de contenido;
- fórmulas o propiedades.

Puede requerir actualización. Mostrar el resultado no siempre muestra el código o nombre del campo.

## 10. Tablas

Una tabla organiza datos en filas y columnas. Operaciones:

- insertar tabla;
- agregar o eliminar filas y columnas;
- combinar y dividir celdas;
- ajustar ancho y alto;
- alinear contenido;
- aplicar bordes y sombreado;
- repetir fila de encabezado;
- ordenar;
- dividir tabla;
- convertir texto y tabla, cuando esté disponible;
- aplicar estilos.

### Selección en tablas

Puede seleccionarse:

- contenido de una celda;
- celda;
- fila;
- columna;
- tabla completa.

Eliminar contenido no es lo mismo que eliminar la celda, fila o tabla.

### Tablas frente a tabulaciones

- tabla: estructura de filas y columnas;
- tabulación: posición dentro de un párrafo;
- columnas de página: flujo periodístico.

Son conceptos diferentes.

## 11. Imágenes

Operaciones:

- insertar desde archivo;
- copiar y pegar;
- redimensionar;
- recortar;
- girar;
- ajustar brillo o color según herramientas;
- aplicar borde;
- comprimir;
- añadir título y texto alternativo;
- definir posición y ajuste.

Debe conservarse la proporción para evitar deformación.

## 12. Ajuste de texto

Opciones típicas:

- en línea con el texto;
- cuadrado o paralelo;
- estrecho;
- detrás del texto;
- delante del texto;
- superior e inferior;
- sin ajuste.

Los nombres exactos difieren. La idea es determinar cómo fluye el texto alrededor del objeto.

## 13. Anclaje

En Writer, una imagen puede anclarse:

- como carácter;
- al carácter;
- al párrafo;
- a la página, según opciones y versión.

En Word, la imagen en línea se comporta como un carácter; las flotantes se asocian a un párrafo mediante ancla.

Mover o eliminar el párrafo de anclaje puede afectar al objeto.

## 14. Formas, cuadros de texto y otros objetos

Puede insertarse:

- formas;
- cuadros de texto;
- WordArt o Fontwork;
- gráficos;
- ecuaciones;
- símbolos;
- objetos incrustados o vinculados;
- hipervínculos.

Un objeto incrustado se almacena en el documento; uno vinculado depende de un archivo externo. Si cambia la ruta, el vínculo puede romperse.

## 15. Hipervínculos y marcadores

- hipervínculo: apunta a una web, correo, archivo o lugar del documento;
- marcador: identifica una posición o selección interna;
- referencia cruzada: muestra o enlaza información de otro elemento.

Debe comprobarse que los enlaces no revelen rutas internas ni apunten a recursos inaccesibles.

## 16. Tablas de contenido

Se generan a partir de estilos de título o niveles de esquema. Pasos conceptuales:

1. aplicar estilos de título;
2. insertar tabla de contenido;
3. configurar niveles;
4. actualizar cuando cambia el documento.

Escribir manualmente un índice no ofrece actualización automática.

## 17. Notas al pie y notas al final

- nota al pie: aparece al final de la página;
- nota al final: al final del documento o sección.

La llamada y la nota se vinculan. No deben simularse con superíndices escritos manualmente.

## 18. Columnas y secciones

Para que solo una parte tenga columnas en Word suele ser necesaria una sección. En Writer puede utilizarse una sección o un estilo de página según el efecto buscado.

## 19. Errores frecuentes

1. Confundir sección de Word con estilo de página de Writer.
2. No desactivar Vincular al anterior.
3. Escribir números de página manualmente.
4. Crear tablas con espacios.
5. Eliminar contenido pensando que se elimina la fila.
6. Deformar imágenes al cambiar solo una dimensión sin mantener proporción.
7. Confundir ajuste con alineación del párrafo.
8. Desconocer el anclaje del objeto.
9. Crear índice manual en vez de usar títulos.
10. Mezclar saltos y párrafos vacíos.
'''

files['bloque-05-revision-salida.md'] = r'''# Tema 17 · Bloque 5 · Revisión, combinación, impresión, exportación y comparación

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Comentarios

Un comentario añade una observación sin integrarla como texto normal. Se asocia a una selección o posición.

Operaciones:

- insertar;
- responder;
- resolver;
- reabrir;
- eliminar;
- navegar entre comentarios;
- imprimir o excluir marcas según configuración.

Resolver no equivale siempre a eliminar. El comentario puede seguir formando parte del documento.

## 2. Control de cambios

Registra inserciones, eliminaciones y cambios de formato. Permite:

- activar o desactivar registro;
- mostrar revisiones;
- filtrar por autor o tipo;
- aceptar;
- rechazar;
- comparar versiones.

Desactivar el control no acepta ni elimina los cambios existentes. Ocultar marcas tampoco las elimina.

Antes de distribuir un documento final debe comprobarse si contiene revisiones o comentarios.

## 3. Modos de Word

Word puede diferenciar:

- Visualización;
- Revisión;
- Edición.

La disponibilidad depende de permisos. El modo Revisión permite sugerencias y comentarios; Edición permite cambios directos.

## 4. Coautoría

En almacenamiento compatible, varias personas pueden editar. Conceptos:

- permisos de lectura o edición;
- identidad de autores;
- guardado en nube;
- historial de versiones;
- conflictos;
- comentarios y menciones;
- sincronización.

Coautoría no elimina la necesidad de revisar la versión final. Un enlace compartido no debe conceder más permisos de los necesarios.

## 5. Comparar y combinar documentos

Comparar identifica diferencias entre original y revisado. Combinar integra revisiones de varias copias.

No debe confundirse con combinar correspondencia.

## 6. Combinación de correspondencia

Genera documentos personalizados a partir de:

- documento principal;
- origen de datos;
- campos de combinación;
- reglas o filtros;
- vista previa;
- resultado combinado.

Aplicaciones:

- cartas;
- etiquetas;
- sobres;
- mensajes de correo;
- certificados o comunicaciones repetitivas.

### Flujo

1. preparar el documento principal;
2. conectar el origen de datos;
3. seleccionar y filtrar destinatarios;
4. insertar campos;
5. obtener vista previa;
6. corregir datos y formato;
7. finalizar y combinar;
8. imprimir, enviar o guardar resultados.

Los nombres de columna del origen deben corresponder con los campos. Fechas, códigos postales y números pueden requerir formato específico.

### Word

Usa la pestaña Correspondencia y órdenes como Seleccionar destinatarios, Insertar campo de combinación, Vista previa de resultados y Finalizar y combinar.

### Writer

Dispone de Asistente para combinar correspondencia, fuentes de datos y opciones para imprimir o guardar en un documento único o archivos individuales.

## 7. Impresión

Antes de imprimir:

- seleccionar impresora;
- revisar vista previa;
- comprobar páginas;
- copias;
- orientación;
- tamaño;
- márgenes;
- color o escala de grises;
- una o dos caras;
- intercalado;
- páginas por hoja;
- marcas y comentarios;
- bandeja o papel.

Rangos:

- todo;
- página actual;
- selección;
- páginas concretas;
- pares o impares, según aplicación.

La vista previa es fundamental para detectar páginas en blanco, tablas cortadas o encabezados incorrectos.

## 8. Exportar a PDF

El PDF mantiene presentación con independencia relativa de la aplicación. Opciones posibles:

- rango de páginas;
- calidad de imágenes;
- etiquetas de accesibilidad;
- marcadores;
- hipervínculos;
- protección;
- PDF/A;
- firma, según producto;
- comentarios.

### Word

Puede Guardar como o Exportar a PDF.

### Writer

Ofrece Exportar a PDF, Exportar directamente a PDF y exportación a EPUB.

Exportar directamente usa opciones previamente definidas y reduce pasos; el cuadro completo permite configuración detallada.

## 9. Imprimir a PDF frente a exportar

- imprimir a PDF: usa una impresora virtual y reproduce la salida de impresión;
- exportar a PDF: puede conservar marcadores, enlaces, estructura y opciones específicas.

No son siempre equivalentes.

## 10. Accesibilidad

Buenas prácticas:

- usar estilos de título;
- mantener orden lógico;
- añadir texto alternativo;
- identificar encabezados de tabla;
- usar enlaces descriptivos;
- asegurar contraste;
- no depender solo del color;
- establecer idioma;
- usar listas reales;
- evitar tablas para maquetación;
- comprobar lectura y navegación.

Word incluye Comprobador de accesibilidad. LibreOffice permite exportar PDF etiquetado y ofrece herramientas de revisión, aunque las opciones concretas dependen de versión.

## 11. Protección

Opciones:

- contraseña de apertura;
- restricción de edición;
- solo lectura;
- protección de cambios;
- firma digital;
- cifrado según formato.

Una contraseña perdida puede hacer inaccesible el archivo. Solo lectura no impide siempre crear una copia. Firma digital no equivale a imagen de firma.

## 12. Macros y contenido activo

Word admite macros en `.docm` y `.dotm`; Writer puede ejecutar macros de LibreOffice Basic y otros lenguajes. No deben habilitarse macros de origen desconocido.

El desarrollo de macros queda fuera del núcleo de este tema, pero debe conocerse el riesgo y la diferencia entre formato con y sin macros.

## 13. Tabla comparativa final

| Operación | Word | Writer |
|---|---|---|
| editable nativo | `.docx` | `.odt` |
| plantilla | `.dotx` | `.ott` |
| estilos | panel Estilos | barra lateral Estilos |
| navegación | panel Navegación | Navegador `F5` |
| páginas con diseño distinto | secciones | estilos de página y saltos |
| combinación | pestaña Correspondencia | asistente y fuentes de datos |
| revisión | comentarios y Control de cambios | comentarios y Registrar cambios |
| PDF | Guardar como/Exportar | Exportar a PDF |
| selección total, ayuda española | `Ctrl + A` | `Ctrl + E` |
| guardar, ayuda española | `Ctrl + S` | `Ctrl + G` |

## 14. Supuestos operativos básicos

### Carta masiva

Debe usarse combinación de correspondencia, no copiar y modificar manualmente cada carta.

### Informe con portada horizontal y resto vertical

- Word: secciones y cambios de orientación;
- Writer: estilos de página diferentes aplicados mediante saltos.

### Documento final para registro

Conservar editable, revisar comentarios/cambios, exportar a PDF, abrir el PDF y verificar páginas.

### Texto pegado desde web

Usar pegado especial o solo texto, aplicar estilos propios y revisar enlaces.

### Numeración que empieza después de portada

- Word: salto de sección, desvincular y configurar inicio;
- Writer: estilo de primera página y secuencia de estilos o salto con numeración.

## 15. Errores frecuentes

1. Ocultar cambios creyendo que se eliminaron.
2. Confundir comentarios y control de cambios.
3. Confundir comparar documentos y combinar correspondencia.
4. Generar cientos de cartas manualmente.
5. Imprimir sin vista previa.
6. Entregar PDF sin abrirlo y comprobarlo.
7. Pensar que imprimir a PDF y exportar son idénticos.
8. Distribuir un documento con metadatos, revisiones o comentarios.
9. Usar una imagen de firma como firma digital.
10. Habilitar macros desconocidas.
11. No revisar compatibilidad después de cambiar de formato.
12. Conceder permisos de edición cuando basta lectura.
'''

files['fuentes.md'] = r'''# Tema 17 · Fuentes oficiales y trazabilidad

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Criterio

Se emplean fuentes primarias de Microsoft y The Document Foundation. La ubicación exacta de botones puede cambiar; la cobertura se apoya en funciones estables y ayuda oficial vigente.

## 2. Microsoft Word

1. **Ayuda y aprendizaje de Word**  
   https://support.microsoft.com/es-es/word/

2. **Crear un documento en Word**  
   https://support.microsoft.com/es-es/word/training/create-a-document-in-word

3. **Métodos abreviados de teclado de Word**  
   https://support.microsoft.com/es-es/accessibility/word/keyboard-shortcuts-in-word

4. **Modos de documento en Word**  
   https://support.microsoft.com/es-es/word/document-modes-in-word

5. **Configurar encabezados y pies de página para diferentes secciones**  
   https://support.microsoft.com/es-es/office/configurar-encabezados-y-pies-de-pagina-para-diferentes-secciones-de-un-documento-de-word-94332643-a6e9-46aa-ab29-064f1d356db6

6. **Combinación de correspondencia con una hoja de cálculo de Excel**  
   https://support.microsoft.com/es-es/word/mail-merge-using-an-excel-spreadsheet

7. **Guardar y actualizar documentos con coautoría**  
   https://support.microsoft.com/es-es/word/save-and-refresh-documents

8. **Hacer que un documento sea de solo lectura**  
   https://support.microsoft.com/es-es/word/make-a-document-read-only-in-word

9. **Combinar revisiones de documentos**  
   https://support.microsoft.com/es-es/word/combine-document-revisions

10. **Formatos de archivo para guardar documentos**  
    https://support.microsoft.com/es-es/word/file-formats-for-saving-documents

## 3. LibreOffice Writer

1. **Ayuda de LibreOffice Writer**  
   https://help.libreoffice.org/latest/es/text/swriter/main0000.html

2. **Funcionalidades de LibreOffice Writer**  
   https://help.libreoffice.org/latest/es/text/swriter/main0503.html

3. **Atajos de teclado para LibreOffice Writer**  
   https://help.libreoffice.org/latest/es/text/swriter/04/01020000.html

4. **Guardar documentos**  
   https://help.libreoffice.org/latest/es/text/shared/guide/doc_save.html

5. **Guardar como**  
   https://help.libreoffice.org/latest/es/text/shared/01/01070000.html

6. **Formato**  
   https://help.libreoffice.org/latest/es/text/shared/main_format.html

7. **Navegación y Navegador**  
   https://help.libreoffice.org/latest/es/text/swriter/01/02110100.html

8. **Combinar correspondencia**  
   https://help.libreoffice.org/latest/es/text/swriter/01/01150000.html

9. **Exportar a PDF o EPUB**  
   https://help.libreoffice.org/latest/es/text/shared/01/01070002.html

10. **Writer Guide 24.2**  
    https://books.libreoffice.org/en/WG24/WG24.html

## 4. Trazabilidad por bloque

| Bloque | Fuentes principales |
|---|---|
| Entorno, formatos y compatibilidad | ayuda general de Word, funcionalidades de Writer, formatos de archivo, Guardar como |
| Edición y búsqueda | atajos de Word, atajos de Writer, Navegador |
| Formato y estilos | ayuda de Word, Formato de LibreOffice, Writer Guide |
| Páginas y objetos | encabezados por secciones de Word, Writer Guide y ayuda de Writer |
| Revisión y salida | modos de Word, coautoría, combinación, exportación PDF y protección |

## 5. Delimitación

Quedan fuera del núcleo:

- programación VBA o LibreOffice Basic;
- diseño exhaustivo de macros;
- publicación profesional compleja;
- administración empresarial de Microsoft 365;
- configuración avanzada de servidores colaborativos;
- creación avanzada de índices jurídicos o bibliografías;
- edición técnica de XML interno de `.docx` u ODF;
- firma electrónica avanzada, ya estudiada en el Tema 13.
'''

files['feedback.md'] = r'''# Tema 17 · Informe para revisión del usuario

## Estado

`EN_REVISION_USUARIO`

El tema no está publicado como aprobado. La versión pública continúa en `0.16.0` y el banco de preguntas permanece vacío.

## Epígrafe oficial

> LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice.

## Cobertura incorporada

### Entorno y archivos

- concepto de procesador de textos;
- interfaz de Word y Writer;
- crear, abrir, guardar, Guardar como, cerrar y exportar;
- `.docx`, `.odt`, plantillas, PDF y compatibilidad.

### Edición

- cursor, selección, Portapapeles, deshacer y rehacer;
- saltos, marcas no imprimibles, búsqueda y reemplazo;
- navegación, ortografía, idioma, autocorrección y tabulaciones.

### Formato

- carácter y párrafo;
- alineación, sangrías, espaciado e interlineado;
- estilos, títulos, plantillas, listas y numeración multinivel;
- diferencias de atajos entre Word y Writer.

### Páginas y objetos

- márgenes, orientación, tamaño y columnas;
- secciones de Word y estilos de página de Writer;
- encabezados, pies, campos y numeración;
- tablas, imágenes, ajuste, anclaje, índices y notas.

### Revisión y salida

- comentarios, control de cambios, comparación y coautoría;
- combinación de correspondencia;
- impresión, PDF, accesibilidad, protección y macros como riesgo.

## Delimitaciones

No se desarrolla íntegramente:

- VBA ni LibreOffice Basic;
- macros y automatización avanzada;
- maquetación editorial profesional;
- administración de Microsoft 365;
- servicios colaborativos de servidor;
- XML interno de formatos;
- bibliografías avanzadas;
- firma electrónica, cubierta en el Tema 13.

## Comprobaciones solicitadas

Revisa especialmente:

1. si distingues documento y archivo;
2. si queda clara la diferencia entre Guardar, Guardar como y Exportar;
3. si comprendes `.docx`, `.odt` y pérdida de compatibilidad;
4. si identificas cinta de Word, Backstage, barra lateral y Navegador de Writer;
5. si distingues salto de línea, párrafo, página y sección;
6. si comprendes formato directo y estilos;
7. si quedan claras sangrías, tabulaciones, interlineado y espaciado;
8. si distingues secciones de Word y estilos de página de Writer;
9. si entiendes encabezados vinculados y numeración;
10. si distingues tabla, tabulación y columnas de página;
11. si comprendes anclaje y ajuste de imágenes;
12. si distingues comentario, control de cambios y comparación;
13. si la combinación de correspondencia está suficientemente explicada;
14. si queda clara la diferencia entre exportar e imprimir a PDF;
15. si el nivel es adecuado para un examen C2.

## Cierre

La respuesta debe ser una de estas:

- **«Tema 17 aprobado»**
- **«Tema 17: cambia o amplía…»**

No se fusionará mientras permanezca en `EN_REVISION_USUARIO`.
'''

files['preguntas.json'] = json.dumps({
    'tema': 17,
    'estado': 'NO_CREADAS_HASTA_APROBACION_TEORICA',
    'preguntas': [],
    'nota': 'No se crean preguntas para aumentar métricas. Tras aprobar el manual, cada pregunta deberá vincularse a una operación concreta y a una fuente oficial de Microsoft o LibreOffice.'
}, ensure_ascii=False, indent=2) + '\n'

matrix = {
    'tema': 17,
    'estado': 'EN_REVISION_USUARIO',
    'epigrafeOficial': 'LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice.',
    'fechaRevisionTecnica': '2026-07-18',
    'referenciasPrincipales': ['Microsoft Word para Microsoft 365 y Word 2024', 'LibreOffice Writer, ayuda oficial vigente'],
    'manual': 'content/la-puebla/tema-17/manual.md',
    'capitulos': [
        'content/la-puebla/tema-17/bloque-01-entorno-formatos.md',
        'content/la-puebla/tema-17/bloque-02-edicion-busqueda.md',
        'content/la-puebla/tema-17/bloque-03-formato-estilos.md',
        'content/la-puebla/tema-17/bloque-04-paginas-objetos.md',
        'content/la-puebla/tema-17/bloque-05-revision-salida.md'
    ],
    'trazabilidad': 'content/la-puebla/tema-17/fuentes.md',
    'cobertura': [
        {
            'inciso': 'LibreOffice y Microsoft Office',
            'fuentes': ['Ayuda y aprendizaje de Word', 'Ayuda de LibreOffice Writer'],
            'secciones': ['interfaz', 'Word', 'Writer', 'documentos', 'formatos', 'compatibilidad'],
            'contenidoExigible': ['identificar programas', 'crear y abrir', 'guardar y exportar', 'distinguir DOCX y ODT']
        },
        {
            'inciso': 'Edición y navegación',
            'fuentes': ['Métodos abreviados de teclado de Word', 'Atajos de teclado para LibreOffice Writer', 'Navegador de Writer'],
            'secciones': ['selección', 'Portapapeles', 'saltos', 'buscar', 'reemplazar', 'ortografía'],
            'contenidoExigible': ['editar texto', 'usar búsqueda', 'corregir', 'navegar en documentos largos']
        },
        {
            'inciso': 'Formato y estilos',
            'fuentes': ['Ayuda de Word', 'Formato de LibreOffice', 'Writer Guide'],
            'secciones': ['carácter', 'párrafo', 'sangrías', 'estilos', 'listas', 'plantillas'],
            'contenidoExigible': ['distinguir formato directo y estilos', 'aplicar jerarquía', 'crear listas', 'mantener uniformidad']
        },
        {
            'inciso': 'Diseño de página y objetos',
            'fuentes': ['Encabezados y pies por secciones en Word', 'Writer Guide'],
            'secciones': ['márgenes', 'orientación', 'secciones', 'estilos de página', 'tablas', 'imágenes'],
            'contenidoExigible': ['configurar páginas', 'diferenciar sección y estilo de página', 'trabajar con tablas e imágenes']
        },
        {
            'inciso': 'Revisión y salida',
            'fuentes': ['Modos de documento en Word', 'Combinar revisiones', 'Combinar correspondencia', 'Exportar a PDF'],
            'secciones': ['comentarios', 'control de cambios', 'coautoría', 'combinación', 'impresión', 'PDF'],
            'contenidoExigible': ['revisar', 'combinar datos', 'imprimir', 'exportar y comprobar salida']
        }
    ],
    'atajosComparados': [
        {'accion': 'cortar', 'word': 'Ctrl + X', 'writer': 'Ctrl + X'},
        {'accion': 'copiar', 'word': 'Ctrl + C', 'writer': 'Ctrl + C'},
        {'accion': 'pegar', 'word': 'Ctrl + V', 'writer': 'Ctrl + V'},
        {'accion': 'deshacer', 'word': 'Ctrl + Z', 'writer': 'Ctrl + Z'},
        {'accion': 'buscar y reemplazar', 'word': 'Ctrl + H', 'writer': 'Ctrl + H'},
        {'accion': 'salto de página', 'word': 'Ctrl + Intro', 'writer': 'Ctrl + Intro'},
        {'accion': 'ortografía', 'word': 'F7', 'writer': 'F7'},
        {'accion': 'seleccionar todo, ayuda española', 'word': 'Ctrl + A', 'writer': 'Ctrl + E'},
        {'accion': 'guardar, ayuda española', 'word': 'Ctrl + S', 'writer': 'Ctrl + G'},
        {'accion': 'justificar', 'word': 'Ctrl + J', 'writer': 'Ctrl + J'},
        {'accion': 'centrar, ayuda española', 'word': 'Ctrl + E', 'writer': 'Ctrl + T'},
        {'accion': 'Navegador o navegación', 'word': 'panel Navegación', 'writer': 'F5'}
    ],
    'diferenciasClave': [
        'DOCX frente a ODT',
        'cinta y Backstage frente a menús, barras y barra lateral',
        'secciones de Word frente a estilos de página de Writer',
        'atajos localizados diferentes',
        'exportación y compatibilidad entre formatos'
    ],
    'exclusionesDelNucleo': [
        'programación VBA', 'LibreOffice Basic', 'macros avanzadas', 'maquetación profesional',
        'administración Microsoft 365', 'XML interno de formatos', 'bibliografías avanzadas', 'firma electrónica avanzada'
    ],
    'criterioDeCierre': 'Requiere revisión humana y la expresión Tema 17 aprobado. No se aprueba por extensión ni validación técnica.'
}
files['matriz.json'] = json.dumps(matrix, ensure_ascii=False, indent=2) + '\n'

for name, content in files.items():
    (BASE / name).write_text(content, encoding='utf-8')

programme_path = ROOT / 'data/programa.json'
programme = json.loads(programme_path.read_text(encoding='utf-8'))
for theme in programme['temas']:
    if theme['numero'] == 17:
        theme.clear()
        theme.update({
            'numero': 17,
            'titulo': 'LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice.',
            'estado': 'EN_REVISION_USUARIO',
            'manual': 'content/la-puebla/tema-17/manual.md',
            'capitulos': [
                'content/la-puebla/tema-17/bloque-01-entorno-formatos.md',
                'content/la-puebla/tema-17/bloque-02-edicion-busqueda.md',
                'content/la-puebla/tema-17/bloque-03-formato-estilos.md',
                'content/la-puebla/tema-17/bloque-04-paginas-objetos.md',
                'content/la-puebla/tema-17/bloque-05-revision-salida.md'
            ],
            'matriz': 'content/la-puebla/tema-17/matriz.json',
            'feedback': 'content/la-puebla/tema-17/feedback.md',
            'preguntas': 'content/la-puebla/tema-17/preguntas.json',
            'trazabilidad': 'content/la-puebla/tema-17/fuentes.md'
        })
        break
else:
    raise RuntimeError('No existe Tema 17')
programme_path.write_text(json.dumps(programme, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

validation = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.16.0');
assert.equal(packageJson.version, '0.16.0');
assert.ok(index.includes('v0.16.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
assert.deepEqual(review.map(t => t.numero), [17]);
assert.deepEqual(pending.map(t => t.numero), [18,19]);
assert.ok(programme.temas.slice(17).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t17 = programme.temas[16];
const base17 = 'content/la-puebla/tema-17';
const matrix17 = json(`${base17}/matriz.json`);
const questions17 = json(`${base17}/preguntas.json`);
assert.equal(t17.capitulos.length, 5);
assert.equal(matrix17.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix17.cobertura.length, 5);
assert.equal(matrix17.atajosComparados.length, 12);
assert.equal(matrix17.diferenciasClave.length, 5);
assert.equal(questions17.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions17.preguntas, []);
assert.ok(read(`${base17}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base17}/feedback.md`).includes('Tema 17 aprobado'));

const files17 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-formatos.md','bloque-02-edicion-busqueda.md',
  'bloque-03-formato-estilos.md','bloque-04-paginas-objetos.md',
  'bloque-05-revision-salida.md'
];
for (const file of files17) {
  assert.ok(exists(`${base17}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base17}/${file}`), `Tema 17 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined17 = files17.filter(f => f.endsWith('.md')).map(f => read(`${base17}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft word','libreoffice writer','docx','odt','guardar como','formato directo',
  'estilos de página','saltos de sección','vincular al anterior','combinación de correspondencia',
  'control de cambios','exportar a pdf','texto alternativo','navegador'
]) {
  assert.ok(joined17.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Word','Atajos de teclado para LibreOffice Writer',
  'Funcionalidades de LibreOffice Writer','Combinar correspondencia','Exportar a PDF'
]) {
  assert.ok(read(`${base17}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.16.0'"));
assert.equal(exists('.github/workflows/apply-t17-review.yml'), false);
assert.equal(exists('scripts/apply_t17_review.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme17Questions: questions17.preguntas.length,
  status: 'TEMA_17_EN_REVISION_VALIDADO'
}, null, 2));
'''
(ROOT / 'tests/validate.mjs').write_text(validation, encoding='utf-8')

for temp in [ROOT / '.github/workflows/apply-t17-review.yml', ROOT / 'scripts/apply_t17_review.py']:
    if temp.exists():
        temp.unlink()
