# Tema 16 · Bloque 3 · Privacidad, cookies, permisos y seguridad

**Estado:** APROBADO POR EL USUARIO

## 1. Datos de navegación

El navegador puede conservar:

- historial de páginas visitadas;
- historial de descargas;
- cookies y otros datos de sitios;
- imágenes y archivos en caché;
- contraseñas;
- datos de formularios y pago;
- permisos concedidos;
- pestañas abiertas;
- preferencias del perfil.

La ubicación de estos datos puede ser:

- local en el dispositivo;
- sincronizada con la cuenta;
- almacenada por el propio sitio o servicio remoto.

Borrar una categoría local no garantiza borrar la información que el sitio conserva en sus servidores.

## 2. Cookies

Una cookie es un dato que un sitio guarda a través del navegador. Puede utilizarse para:

- mantener una sesión iniciada;
- recordar preferencias;
- conservar el contenido de una cesta;
- medir uso;
- personalizar contenido;
- realizar seguimiento.

### Cookies propias y de terceros

- **Propias:** establecidas por el sitio visitado.
- **De terceros:** asociadas a otro dominio incorporado en la página.

Bloquear cookies de terceros puede reducir seguimiento, pero también alterar funciones de inicio de sesión, vídeos, pagos o contenidos integrados.

### Borrar cookies

Puede provocar:

- cierre de sesiones;
- pérdida de preferencias;
- repetición de avisos de consentimiento;
- necesidad de volver a autenticar el dispositivo.

## 3. Caché

La caché conserva copias de recursos como imágenes, hojas de estilo o scripts para acelerar visitas posteriores.

Borrar caché:

- puede solucionar contenido desactualizado o archivos dañados;
- aumenta temporalmente el tiempo y tráfico de carga;
- no equivale a borrar cookies;
- no elimina necesariamente contraseñas o historial.

## 4. Contraseñas y autorrelleno

Edge puede guardar:

- nombres de usuario y contraseñas;
- direcciones;
- teléfonos;
- datos de formularios;
- información de pago, según configuración.

Buenas prácticas:

- no guardar credenciales en equipos compartidos;
- usar bloqueo del dispositivo;
- revisar contraseñas expuestas o repetidas cuando Edge lo advierta;
- comprobar el dominio antes de aceptar autorrelleno;
- no confundir guardar contraseña con mantener una sesión abierta.

## 5. Permisos de sitio

Los sitios pueden solicitar acceso a:

- ubicación;
- cámara;
- micrófono;
- notificaciones;
- ventanas emergentes y redirecciones;
- descargas automáticas;
- portapapeles;
- controladores MIDI, USB u otros dispositivos compatibles;
- reproducción automática;
- sensores.

La decisión puede ser:

- permitir una vez;
- permitir mientras se usa;
- permitir siempre;
- bloquear;
- preguntar cada vez.

Los permisos se revisan desde la información del sitio o desde **Configuración > Cookies y permisos del sitio**.

## 6. Ventanas emergentes y redirecciones

Las ventanas emergentes pueden ser legítimas, por ejemplo para autenticación o documentos, pero también utilizarse para publicidad o engaño.

El bloqueo general puede mantenerse y autorizarse una excepción concreta cuando el sitio sea confiable y la función sea necesaria.

Una redirección cambia de una dirección a otra. Debe comprobarse el dominio final, especialmente tras iniciar sesión o realizar pagos.

## 7. HTTPS y certificados

HTTPS proporciona:

- cifrado durante el tránsito;
- integridad de la comunicación;
- autenticación del servidor mediante certificado.

No garantiza:

- que la entidad sea honesta;
- que el contenido sea correcto;
- que el archivo descargado sea necesario;
- que el usuario no haya entrado en un dominio parecido pero falso.

### Advertencias de certificado

Pueden deberse a:

- certificado caducado;
- nombre de dominio no coincidente;
- autoridad no confiable;
- reloj del equipo incorrecto;
- interceptación o configuración corporativa;
- error del servidor.

No debe elegirse “continuar” de forma automática. En una sede electrónica debe verificarse el dominio oficial y, si persiste el aviso, detener la operación.

## 8. SmartScreen de Microsoft Defender

SmartScreen ayuda a identificar:

- sitios de phishing;
- páginas maliciosas;
- descargas peligrosas;
- archivos con reputación insuficiente.

Puede mostrar una advertencia o bloquear el acceso o descarga.

La actuación prudente es:

1. cancelar o detener;
2. comprobar origen y necesidad;
3. confirmar dominio y editor;
4. consultar al responsable técnico si es un entorno de trabajo;
5. evitar desactivar la protección como primera medida.

## 9. Phishing e ingeniería social

Indicadores frecuentes:

- urgencia o amenaza;
- petición inesperada de credenciales;
- dominio parecido al oficial;
- faltas o diseño imitado;
- archivo no solicitado;
- petición de desactivar seguridad;
- código QR o enlace acortado sin contexto;
- promesa desproporcionada.

La presencia de candado no descarta phishing. Debe leerse el dominio completo.

## 10. Descargas seguras

Antes de abrir:

- comprobar extensión real;
- revisar editor o firma cuando exista;
- analizar con seguridad del sistema;
- evitar ejecutables no solicitados;
- guardar en una ubicación conocida;
- no habilitar macros sin necesidad justificada;
- no cambiar la extensión para eludir bloqueos.

Eliminar una advertencia no convierte un archivo en seguro.

## 11. InPrivate

En Edge se abre con `Ctrl + Mayús + N`.

Al cerrar todas las ventanas InPrivate se eliminan del dispositivo los datos temporales indicados por Microsoft, entre ellos historial, cookies, caché y datos de formularios de esa sesión.

Permanecen:

- archivos descargados;
- favoritos creados;
- actividad visible para el sitio, red corporativa, centro educativo o proveedor;
- registros del servicio remoto.

InPrivate mejora privacidad local, no anonimato total ni seguridad absoluta.

## 12. Prevención de seguimiento

Edge puede aplicar niveles de prevención de seguimiento. Un nivel más estricto puede bloquear más rastreadores, pero también provocar fallos funcionales.

Debe distinguirse:

- rastreo publicitario;
- cookies necesarias para sesión;
- permisos de sitio;
- bloqueo de ventanas emergentes;
- SmartScreen.

Son controles distintos.

## 13. Perfiles compartidos y modo Invitado

En equipos compartidos:

- un perfil personal puede exponer favoritos, historial o contraseñas;
- InPrivate limita persistencia local de la sesión, pero permite acceso a algunos datos del perfil de origen según configuración;
- modo Invitado crea una sesión separada sin iniciar sesión en el navegador;
- cerrar la ventana no borra archivos descargados.

## 14. Actualizaciones

Edge se actualiza con frecuencia. Mantenerlo actualizado corrige vulnerabilidades y mejora compatibilidad.

No debe confundirse:

- actualizar una página (`F5`);
- actualizar el navegador;
- actualizar Windows.

Son procesos distintos.

## 15. Errores frecuentes

1. Confundir cookies y caché.
2. Creer que borrar datos locales elimina datos del servidor.
3. Guardar contraseñas en un equipo compartido.
4. Conceder permisos sin revisar el dominio.
5. Desbloquear ventanas emergentes para todos los sitios cuando solo hace falta una excepción.
6. Pensar que HTTPS garantiza honestidad.
7. Ignorar una advertencia de certificado en una sede electrónica.
8. Desactivar SmartScreen para abrir una descarga dudosa.
9. Creer que InPrivate proporciona anonimato.
10. Confundir prevención de seguimiento con antivirus.
11. Pensar que cerrar una ventana privada borra los archivos descargados.
12. Confundir recargar la página con actualizar Edge.
