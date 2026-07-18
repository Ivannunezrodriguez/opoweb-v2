# Tema 15 · Bloque 3 · Unidades locales y de red

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
