# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 16

**ESTADO EDITORIAL: BORRADOR ADAPTADO, AUDITORÍA FINAL PENDIENTE.** Fecha de incorporación **25/10/2026**. Material de base tomado de La Puebla (revisado en julio de 2026).

## 1. Epígrafe oficial literal

> **Tema 16. Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos.**

**Fuente del programa:** BOP Toledo **n.º 197, 14/10/2026, Anexo XI**, código de verificación **2026.00004759**.

## 2. Fuentes y alcance

- **Documentación oficial Microsoft de Windows 11; comprobar diferencias de Windows 11 Pro frente a explicaciones generales**.
- Fuente primaria: https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows

**Revisión editorial pendiente:** comprobar precisión de versiones, nomenclatura, órganos, plazos y excepciones y depurar cualquier referencia a la convocatoria anterior. Los apartados siguientes forman el cuerpo de estudio y proceden de los bloques desarrollados para La Puebla; **no están certificados para esta convocatoria**.

| Inciso del programa | Bloque incorporado |
|---|---|
| 1. explorador rutas | Bloque 1 |
| 2. operaciones archivos | Bloque 2 |
| 3. unidades locales red | Bloque 3 |
| 4. impresion | Bloque 4 |
| 5. digitalizacion | Bloque 5 |

> ⚠️ **¡Foco Examen!:** El examen se ajusta al epígrafe y la versión concreta del programa. No confundir la terminología de otros temarios ni asumir que una operación o un órgano se rige por reglas de otro producto o norma.

---

## 3. explorador rutas

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


---

## 4. operaciones archivos

**Estado:** APROBADO POR EL USUARIO

## 1. Crear carpetas

Formas habituales:

- botón **Nuevo** del Explorador;
- menú contextual → **Nuevo → Carpeta**;
- `Ctrl + Mayús + N`.

Tras crearla se introduce un nombre. Si se confirma sin escribir, Windows asigna uno genérico que después puede cambiarse.

Una carpeta se crea dentro de la ubicación actualmente abierta. Conviene comprobar la barra de direcciones antes de crearla.

## 2. Crear archivos

Puede crearse un archivo:

- desde una aplicación mediante **Archivo → Nuevo** y **Guardar como**;
- desde el menú contextual, cuando existe una plantilla registrada;
- mediante otras herramientas autorizadas.

Al guardar se decide:

- ubicación;
- nombre;
- tipo o formato;
- opciones adicionales de la aplicación.

No debe confundirse **Guardar** con **Guardar como**:

- Guardar actualiza el archivo actual;
- Guardar como permite elegir otro nombre, ubicación o formato y puede generar una copia independiente.

## 3. Copiar

Copiar crea otro ejemplar en el destino y conserva el original.

Procedimiento por portapapeles:

1. seleccionar;
2. `Ctrl + C` o **Copiar**;
3. abrir destino;
4. `Ctrl + V` o **Pegar**.

Hasta que se pega, no existe la copia en el destino.

## 4. Cortar y mover

Cortar prepara el elemento para trasladarlo:

1. seleccionar;
2. `Ctrl + X`;
3. abrir destino;
4. `Ctrl + V`.

El resultado esperado es que el elemento deje la ubicación original y aparezca en el destino. En operaciones entre unidades, Windows puede realizar internamente copia y eliminación, por lo que el proceso puede tardar más.

Si hay un error, debe comprobarse el estado real en origen y destino antes de repetir.

## 5. Arrastrar y soltar

El resultado depende del contexto.

| Situación habitual | Resultado ordinario |
|---|---|
| misma unidad | mover |
| unidad diferente | copiar |
| mantener `Ctrl` | copiar |
| mantener `Mayús` | mover |
| mantener `Alt` | crear acceso directo |

El indicador junto al puntero informa de la acción prevista. Esta señal es más fiable que memorizar una regla sin contexto.

Arrastrar con botón derecho suele mostrar un menú al soltar para elegir copiar, mover o crear acceso directo.

## 6. Renombrar

Formas habituales:

- seleccionar y pulsar `F2`;
- menú contextual → **Cambiar nombre**;
- clic pausado sobre el nombre.

Renombrar no modifica el contenido. Si las extensiones están visibles, debe evitarse alterar accidentalmente la extensión.

Dos elementos de la misma carpeta no pueden compartir exactamente el mismo nombre y extensión.

## 7. Conflictos de nombre

Cuando el destino ya contiene un elemento con el mismo nombre, Windows puede ofrecer alternativas como:

- reemplazar;
- omitir;
- comparar información;
- conservar ambos mediante renombrado.

La decisión debe basarse en:

- fecha de modificación;
- tamaño;
- versión;
- contenido;
- necesidad de conservar evidencia o histórico.

En expedientes administrativos, reemplazar sin control puede destruir una versión relevante.

## 8. Borrar hacia la Papelera

En unidades locales compatibles:

- `Supr` o **Eliminar** suele mover el elemento a la Papelera;
- el espacio puede seguir ocupado hasta vaciarla;
- el elemento puede restaurarse a su ubicación original.

Restaurar:

1. abrir Papelera;
2. seleccionar;
3. elegir **Restaurar**.

Si la ubicación original ya no existe, puede ser necesario recrearla o elegir otro destino mediante operaciones manuales.

## 9. Eliminación sin Papelera

`Mayús + Supr` solicita eliminar sin pasar por la Papelera.

También puede no utilizarse Papelera en:

- recursos de red;
- algunas unidades extraíbles;
- elementos demasiado grandes para la configuración disponible;
- vaciado de Papelera;
- operaciones realizadas por determinadas aplicaciones o servicios.

“No aparece en la Papelera” no significa que nunca pueda recuperarse, pero ya exige copias de seguridad, historial, sistemas corporativos o herramientas especializadas. No debe darse por segura la recuperación.

## 10. Deshacer

`Ctrl + Z` puede revertir algunas operaciones recientes, como mover, copiar, renombrar o borrar, según el contexto.

No es una garantía universal. Puede dejar de estar disponible por:

- cierre de la ventana;
- nuevas operaciones;
- aplicación utilizada;
- origen o destino remoto;
- eliminación permanente.

## 11. Permisos y confirmación administrativa

Una operación puede fallar porque el usuario no tenga:

- permiso de lectura;
- permiso de escritura;
- permiso de modificación;
- permiso de eliminación;
- privilegio administrativo.

La elevación mediante Control de cuentas de usuario no sustituye permisos que no se poseen sobre un recurso de red o carpeta protegida.

## 12. Archivos en uso y sincronización

Un archivo abierto por otra aplicación o usuario puede estar bloqueado. Antes de forzar acciones:

- cerrar aplicaciones;
- comprobar usuarios conectados;
- esperar sincronización;
- confirmar que no haya una operación de copia en curso.

Con carpetas sincronizadas, el icono de estado puede indicar disponible localmente, solo en línea, sincronizando o error. Una copia local y un recurso en la nube no deben confundirse.

## 13. Copiar frente a copia de seguridad

Copiar un archivo manualmente no constituye por sí solo una estrategia de respaldo. Una copia de seguridad exige, según el caso:

- periodicidad;
- versiones;
- almacenamiento separado;
- control de acceso;
- restauración comprobada.

## 14. Casos prácticos

### Duplicar un expediente sin alterar el original

Usar copiar y pegar, verificar el destino y renombrar la copia de forma inequívoca.

### Trasladar documentación a otra carpeta del mismo proyecto

Usar cortar y pegar o arrastre controlado, comprobar el destino y validar que el origen quedó vacío solo de los elementos previstos.

### Borrar por error

Detener nuevas operaciones, revisar Papelera y restaurar. Si era red o eliminación permanente, acudir al sistema de copias o al administrador.

## 15. Errores frecuentes

1. Cortar y creer que el elemento ya se ha movido antes de pegar.
2. Repetir una copia porque tarda y crear duplicados.
3. Sustituir un archivo sin comparar versiones.
4. Suponer que toda eliminación pasa por Papelera.
5. Confiar en `Ctrl + Z` como copia de seguridad.
6. Cambiar una extensión al renombrar.
7. Confundir acceso directo con copia.
8. Forzar una operación sobre archivo bloqueado sin investigar la causa.


---

## 5. unidades locales red

**Estado:** APROBADO POR EL USUARIO

## 1. Conceptos previos

### Disco físico

Dispositivo de almacenamiento, por ejemplo SSD, disco duro o memoria USB.

### Partición y volumen

Una partición divide lógicamente un soporte. Un volumen es una unidad de almacenamiento formateada y utilizable por el sistema. Un mismo disco físico puede contener varios volúmenes.

### Unidad lógica

Windows suele representar un volumen mediante una letra seguida de dos puntos:

- `C:`
- `D:`
- `E:`

La letra no demuestra por sí sola qué dispositivo físico hay detrás.

## 2. Unidades locales

Son accesibles directamente por el equipo sin depender de un servidor remoto. Pueden ser:

- volumen del disco interno;
- partición secundaria;
- disco externo;
- memoria USB;
- tarjeta de memoria;
- unidad óptica;
- unidad virtual montada.

En **Este equipo** se muestran normalmente:

- etiqueta;
- letra;
- capacidad;
- espacio libre;
- tipo de unidad.

## 3. Rutas locales

Ejemplo:

`C:\Usuarios\Laura\Documentos\Registro\entrada.pdf`

- `C:`: unidad;
- `\`: separador;
- `Usuarios\Laura\Documentos\Registro`: carpetas;
- `entrada.pdf`: archivo.

Una ruta absoluta permite localizar el elemento sin depender de la carpeta actual.

## 4. Capacidad y espacio disponible

Las propiedades de una unidad muestran espacio usado y libre. Una operación puede fallar por falta de espacio aunque el archivo origen exista y sea legible.

Debe distinguirse:

- tamaño del archivo;
- espacio disponible en destino;
- espacio adicional temporal que pueda requerir la aplicación;
- cuotas impuestas al usuario en sistemas corporativos.

## 5. Sistemas de archivos

El sistema de archivos organiza nombres, carpetas, metadatos y asignación de espacio.

En Windows pueden encontrarse, entre otros:

- NTFS;
- exFAT;
- FAT32.

No se exige memorizar toda su arquitectura, pero sí comprender que pueden diferir en:

- tamaño máximo admitido;
- permisos;
- compatibilidad;
- funciones de seguridad;
- comportamiento ante errores.

Formatear crea una estructura de sistema de archivos y elimina el acceso ordinario a los datos anteriores. No debe utilizarse como respuesta automática a un error.

## 6. Dispositivos extraíbles

Antes de retirar una memoria o disco externo conviene usar **Quitar hardware de forma segura** o expulsar la unidad cuando haya riesgo de escritura pendiente.

Retirar el dispositivo durante una copia puede causar:

- archivo incompleto;
- corrupción del sistema de archivos;
- pérdida de cambios;
- necesidad de comprobación o reparación.

## 7. Recurso compartido de red

Es una carpeta o unidad ofrecida por otro equipo o servidor a través de la red.

Ruta UNC típica:

`\\SERVIDOR01\Administracion`

Puede incluir subcarpetas:

`\\SERVIDOR01\Administracion\Personal\Nominas`

El acceso depende de:

- conectividad;
- disponibilidad del servidor;
- resolución del nombre;
- credenciales;
- permisos del recurso y del sistema de archivos;
- políticas de la organización.

## 8. Unidad de red asignada

Asignar una unidad vincula una letra local a un recurso remoto.

Ejemplo:

- recurso: `\\SERVIDOR01\Administracion`
- letra: `Z:`
- acceso resultante: `Z:\Personal\Nominas`

Procedimiento habitual en Windows 11:

1. abrir Explorador;
2. seleccionar **Este equipo**;
3. abrir **Más**;
4. elegir **Conectar a unidad de red**;
5. seleccionar letra;
6. escribir o buscar la ruta;
7. decidir si se reconecta al iniciar sesión;
8. introducir credenciales si se solicitan.

Asignar no copia los datos ni los vuelve locales.

## 9. Desconectar una unidad

Desconectar elimina la asociación con la letra. No borra el recurso compartido ni sus archivos.

También puede dejar de mostrarse temporalmente por:

- servidor apagado;
- VPN desconectada;
- cambio de credenciales;
- red no disponible;
- política corporativa;
- letra ocupada.

## 10. Compartir frente a asignar

| Acción | Efecto |
|---|---|
| Compartir una carpeta | la ofrece a otros usuarios de red conforme a permisos |
| Asignar una unidad | crea un acceso con letra a un recurso ya compartido |
| Copiar desde red | crea datos en el destino elegido |
| Sincronizar | mantiene relación entre ubicaciones según una aplicación o servicio |

## 11. Permisos

Pueden existir dos niveles combinados:

- permisos del recurso compartido;
- permisos del sistema de archivos.

El permiso efectivo puede ser más restrictivo que cualquiera considerado aisladamente.

Acciones típicas:

- leer;
- crear;
- modificar;
- eliminar;
- cambiar permisos;
- tomar posesión, cuando esté autorizado.

Poder abrir una carpeta no implica poder modificar todo su contenido.

## 12. Copias en red

Riesgos específicos:

- interrupción de conexión;
- latencia;
- conflictos de versión;
- archivos abiertos por otro usuario;
- cuotas;
- rutas largas;
- antivirus o políticas de seguridad;
- pérdida de conexión durante el traslado.

En documentos importantes, comprobar:

1. que la operación terminó;
2. que el tamaño coincide;
3. que el archivo abre;
4. que el destino es el correcto;
5. que no se creó una copia parcial o duplicada.

## 13. Unidad de red y nube

Una unidad de red es un recurso de infraestructura accesible por red. Una carpeta de OneDrive u otro servicio puede sincronizarse y mostrar estados locales y remotos.

No deben tratarse como equivalentes:

- la unidad de red depende del servidor y permisos de red;
- la sincronización puede conservar copias locales, archivos solo en línea, historial y conflictos propios.

## 14. Casos prácticos

### No aparece `Z:`

Comprobar red o VPN, servidor, credenciales, asignación y si la letra ha sido reutilizada.

### Se puede leer pero no guardar

Revisar permiso de escritura, cuota, archivo en uso y política de solo lectura.

### Se desconectó durante un movimiento

No repetir sin comprobar origen y destino. Validar integridad y avisar al administrador si hay datos críticos.

## 15. Errores frecuentes

1. Confundir disco físico, partición y volumen.
2. Pensar que `D:` siempre es lector óptico.
3. Confundir unidad de red con copia local.
4. Desconectar una unidad creyendo que borra datos.
5. Suponer que abrir implica permiso de modificación.
6. Formatear ante cualquier problema de lectura.
7. Retirar un USB durante escritura.
8. Confundir ruta UNC, URL y ruta local.


---

## 6. impresion

**Estado:** APROBADO POR EL USUARIO

## 1. Conceptos

### Impresora física

Dispositivo que produce una salida en papel u otro soporte.

### Impresora virtual

Genera otro tipo de salida, por ejemplo un archivo PDF. **Microsoft Print to PDF** no escanea ni imprime en papel.

### Controlador

Software que permite a Windows y a las aplicaciones comunicarse con la impresora y utilizar sus funciones.

### Cola de impresión

Lista de trabajos enviados y pendientes, en proceso, pausados o con error.

### Administrador de trabajos de impresión

Servicio de Windows que gestiona la cola y entrega los trabajos al controlador o dispositivo.

## 2. Instalación

Windows suele detectar muchas impresoras locales y de red automáticamente.

Ruta habitual:

**Inicio → Configuración → Bluetooth y dispositivos → Impresoras y escáneres → Agregar dispositivo**.

Una impresora puede conectarse mediante:

- USB;
- red Ethernet;
- Wi‑Fi;
- servidor de impresión;
- recurso compartido;
- otros mecanismos admitidos.

La detección física no garantiza que el usuario tenga permiso para imprimir en una impresora corporativa.

## 3. Impresora predeterminada

Windows puede:

- utilizar una impresora elegida manualmente;
- administrar la predeterminada y usar la última impresora utilizada según configuración.

La impresora predeterminada es la propuesta inicial. El usuario puede elegir otra en el cuadro de impresión.

## 4. Flujo de impresión

1. Abrir el documento.
2. Revisar contenido y diseño.
3. Abrir **Archivo → Imprimir** o `Ctrl + P`.
4. Seleccionar impresora.
5. Revisar vista previa.
6. Configurar opciones.
7. Confirmar impresión.
8. Comprobar cola y salida.

## 5. Opciones habituales

Según aplicación, controlador e impresora:

- número de copias;
- páginas: todas, actual, selección o intervalo;
- una o dos caras;
- orientación vertical u horizontal;
- tamaño de papel;
- bandeja;
- color o escala de grises;
- calidad;
- intercalado;
- varias páginas por hoja;
- escala o ajuste al papel;
- grapado u otras funciones de acabado.

No todas las opciones existen en todos los dispositivos.

## 6. Intervalos de páginas

Ejemplos comunes:

- `1-5`: páginas 1 a 5;
- `1,3,8`: páginas concretas;
- `2-4,7,10-12`: combinación.

Debe distinguirse la numeración impresa del documento de la posición real de página que interpreta la aplicación.

## 7. Copias e intercalado

Para un documento de tres páginas y dos copias:

- intercalado: `1-2-3 / 1-2-3`;
- sin intercalar: `1-1 / 2-2 / 3-3`.

## 8. Dúplex

- automático: la impresora gira o procesa ambas caras;
- manual: la aplicación o controlador solicita reinsertar el papel.

Debe verificarse el borde de giro:

- borde largo;
- borde corto.

Una elección incorrecta puede dejar el reverso invertido.

## 9. Vista previa

Permite detectar antes de imprimir:

- páginas en blanco;
- cortes de texto;
- orientación errónea;
- escala inadecuada;
- encabezados o pies incorrectos;
- número excesivo de páginas;
- comentarios o marcas no deseadas.

La vista previa reduce errores, pero el resultado físico también depende del controlador, papel y dispositivo.

## 10. Cola de impresión

Ruta habitual:

**Configuración → Bluetooth y dispositivos → Impresoras y escáneres → impresora → Abrir cola**.

Desde la cola pueden realizarse, según permisos:

- pausar;
- reanudar;
- cancelar;
- consultar estado;
- ordenar o administrar trabajos.

Enviar repetidamente un documento atascado puede multiplicar las copias cuando la impresora se recupere.

## 11. Estados y problemas

### Sin conexión

Posibles causas:

- apagada;
- cable desconectado;
- red no disponible;
- cambio de dirección;
- cola pausada;
- controlador o servicio con error.

### Papel, consumibles y atascos

Comprobar:

- papel disponible y bien colocado;
- tamaño correcto;
- atasco;
- tapas cerradas;
- tóner o tinta;
- bandeja seleccionada.

### Trabajo atascado

Orden prudente:

1. revisar estado y mensajes;
2. comprobar dispositivo y conexión;
3. cancelar el trabajo si procede;
4. evitar reenviarlo varias veces;
5. reiniciar impresora o cola siguiendo el procedimiento autorizado;
6. acudir al soporte si afecta a una impresora compartida.

## 12. Imprimir a PDF

Seleccionar **Microsoft Print to PDF** abre una operación de guardado.

Se debe elegir:

- carpeta;
- nombre;
- confirmación si ya existe.

El resultado es un PDF generado desde el documento digital. No es una fotografía del papel ni incorpora automáticamente firma electrónica, OCR o validez administrativa.

## 13. Seguridad y confidencialidad

En documentación administrativa:

- elegir la impresora correcta;
- evitar dispositivos públicos o no autorizados;
- recoger inmediatamente documentos sensibles;
- usar impresión segura con PIN cuando exista;
- cancelar trabajos enviados por error;
- no abandonar borradores en bandejas;
- comprobar si se imprimen metadatos, comentarios o control de cambios.

## 14. Errores frecuentes

1. Confundir impresora predeterminada con única disponible.
2. Imprimir sin revisar vista previa.
3. Confundir páginas del archivo con numeración visible.
4. Seleccionar borde de dúplex incorrecto.
5. Reenviar un trabajo atascado repetidamente.
6. Creer que cancelar en la aplicación siempre elimina el trabajo ya enviado.
7. Confundir imprimir a PDF con digitalizar.
8. Asumir que toda impresora instalada está accesible o autorizada.


---

## 7. digitalizacion

**Estado:** APROBADO POR EL USUARIO

## 1. Concepto

Digitalizar es convertir un documento o imagen física en un archivo digital mediante un escáner o equipo multifunción.

No debe confundirse con:

- imprimir a PDF;
- fotografiar sin control documental;
- convertir un archivo entre formatos;
- aplicar OCR;
- firmar electrónicamente.

## 2. Tipos de dispositivo

### Escáner plano

El original se coloca sobre un cristal. Es apropiado para:

- documentos delicados;
- libros;
- fotografías;
- originales que no pueden pasar por rodillos.

### Alimentador automático de documentos

Introduce varias hojas consecutivamente. Puede ser:

- una cara;
- dúplex.

Antes de utilizarlo deben retirarse grapas, clips y elementos que puedan atascarlo.

### Equipo multifunción

Integra impresión y escaneado. Windows puede mostrar el dispositivo como impresora y ofrecer también funciones de escáner.

## 3. Instalación

Windows suele detectar escáneres locales y de red. Si no lo hace:

**Inicio → Configuración → Bluetooth y dispositivos → Impresoras y escáneres → Agregar dispositivo**.

Puede ser necesario:

- encender el equipo;
- conectar USB o red;
- instalar controlador;
- utilizar aplicación del fabricante;
- disponer de permisos o credenciales.

## 4. Aplicación Escáner de Windows

Flujo general:

1. encender y seleccionar el escáner;
2. colocar el original;
3. abrir **Escáner de Windows**;
4. elegir escáner;
5. elegir origen;
6. fijar formato y opciones;
7. seleccionar carpeta de destino;
8. previsualizar cuando esté disponible;
9. digitalizar;
10. revisar el archivo resultante.

Microsoft indica como destino predeterminado habitual, cuando no se elige otro, la carpeta `Imágenes\Digitalizaciones` del perfil de usuario.

## 5. Origen

Opciones habituales:

- plano;
- alimentador;
- configuración automática.

El origen seleccionado debe coincidir con la colocación física del original.

## 6. Resolución

Se expresa habitualmente en ppp o dpi.

Mayor resolución produce más detalle, pero también:

- archivos mayores;
- más tiempo de proceso;
- mayor carga de red y almacenamiento.

Orientación práctica, no regla absoluta:

- documentación ordinaria: resolución media suficiente para lectura y OCR;
- texto pequeño o deteriorado: puede requerir más resolución;
- fotografía: depende del uso final;
- archivo a largo plazo: debe seguir la política documental aplicable.

No debe elegirse siempre el máximo disponible.

## 7. Modo de color

- color;
- escala de grises;
- blanco y negro.

La elección depende del original y finalidad. Un sello, anotación o resaltado puede perder información si se digitaliza en blanco y negro.

## 8. Formatos

La aplicación Escáner de Windows documenta formatos de imagen como:

- JPEG;
- PNG;
- TIFF;
- mapa de bits.

Otras aplicaciones o equipos pueden generar PDF.

### JPEG

- compresión con pérdida;
- adecuado para fotografías;
- puede degradar texto fino si se comprime mucho.

### PNG

- compresión sin pérdida;
- útil para gráficos y capturas;
- no es el formato habitual para expedientes multipágina.

### TIFF

- orientado a imagen de alta calidad y archivo;
- puede generar archivos grandes;
- admite variantes y, según herramienta, varias páginas.

### PDF

- adecuado para documentos multipágina;
- puede contener solo imágenes o incluir texto OCR;
- no implica por sí mismo autenticidad, firma o búsqueda.

## 9. Una cara y dúplex

En un alimentador dúplex debe seleccionarse la opción correspondiente si el original tiene información en ambas caras.

Errores típicos:

- omitir reversos;
- páginas invertidas;
- orden incorrecto;
- hojas dobles;
- páginas en blanco no detectadas.

## 10. Orientación, tamaño y recorte

Antes de guardar debe comprobarse:

- vertical u horizontal;
- tamaño completo;
- márgenes;
- ausencia de cortes;
- inclinación;
- sombras;
- legibilidad;
- orden de páginas.

La previsualización permite ajustar el área de captura en escáner plano.

## 11. OCR

El reconocimiento óptico de caracteres analiza la imagen e intenta generar texto.

Puede permitir:

- búsqueda;
- copia de texto;
- indexación;
- accesibilidad;
- extracción de datos.

Limitaciones:

- errores por mala calidad;
- problemas con manuscritos;
- confusión de caracteres;
- pérdida de estructura;
- necesidad de revisión humana.

El OCR no sustituye al original ni certifica la exactitud jurídica de la transcripción.

## 12. Control de calidad

Tras digitalizar:

1. abrir el archivo;
2. comprobar todas las páginas;
3. verificar orientación y orden;
4. comprobar legibilidad de texto, sellos y firmas;
5. confirmar color cuando sea relevante;
6. revisar nombre y carpeta;
7. comprobar tamaño razonable;
8. validar OCR si se ha aplicado;
9. conservar o devolver el original conforme al procedimiento.

## 13. Nombrado y archivo

Usar nombres claros y consistentes:

`2026-07-18_Exp245_Solicitud_Entrada.pdf`

Evitar:

- `scan001.pdf`;
- duplicados ambiguos;
- guardar en Descargas o Escritorio sin clasificación;
- mezclar documentos de expedientes distintos.

## 14. Protección de datos

La digitalización puede tratar datos personales o documentación reservada. Debe:

- utilizarse un dispositivo autorizado;
- guardar en ubicación permitida;
- evitar carpetas personales o servicios externos no autorizados;
- retirar originales y copias temporales;
- revisar destinatario y permisos;
- eliminar borradores conforme a política.

## 15. Problemas frecuentes

### No aparece el escáner

Comprobar alimentación, cable o red, controlador, selección del dispositivo y permisos.

### Imagen borrosa o torcida

Limpiar cristal, recolocar original, ajustar guías y resolución.

### Atasco en alimentador

Detener el proceso, seguir instrucciones del equipo y no tirar del papel de forma brusca.

### Archivo demasiado grande

Revisar resolución, color, formato y compresión sin sacrificar la legibilidad requerida.

### Falta una página

Repetir solo tras identificar el alcance y revisar el orden final. No conservar versiones incompletas con nombres ambiguos.

## 16. Errores frecuentes

1. Confundir escanear con OCR.
2. Creer que PDF significa texto buscable.
3. Digitalizar siempre a máxima resolución.
4. Omitir reversos.
5. Elegir blanco y negro y perder información cromática.
6. Guardar sin revisar.
7. Usar nombres genéricos.
8. Dejar el archivo en una ubicación no autorizada.
9. No comprobar el orden de un documento multipágina.
10. Considerar que la copia digital tiene automáticamente el mismo valor que el original.
