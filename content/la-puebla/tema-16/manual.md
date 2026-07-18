# La Puebla de Montalbán · Tema 16 · Manual modular

**Estado:** EN REVISIÓN DEL USUARIO  
**No publicado como tema aprobado.**  
**Fecha de revisión técnica:** 18 de julio de 2026.

> **Tema 16. Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Criterio temporal y de producto

El epígrafe menciona expresamente **Internet Explorer** y **Microsoft Edge**, pero ambos no tienen hoy la misma situación:

- Microsoft Edge es el navegador actual de Microsoft y la referencia principal del tema.
- La aplicación de escritorio Internet Explorer 11 terminó su soporte para determinadas versiones de Windows 10 el 15 de junio de 2022 y fue deshabilitada permanentemente en esas versiones.
- Internet Explorer se estudia como producto heredado y por sus funciones clásicas aún preguntables.
- La compatibilidad con sitios antiguos se canaliza mediante el **modo Internet Explorer de Microsoft Edge**, que Microsoft mantiene al menos hasta 2029 y para el que anuncia un preaviso mínimo de un año antes de su retirada.

No se presenta Internet Explorer como navegador recomendable para uso ordinario ni se enseña a forzar su instalación en sistemas actuales.

## 2. Estructura del manual

1. [Conceptos de Internet, web, navegador y navegación](bloque-01-conceptos-navegacion.md)
2. [Pestañas, favoritos, historial, búsqueda y descargas](bloque-02-pestanas-favoritos-historial-descargas.md)
3. [Privacidad, cookies, permisos y seguridad](bloque-03-privacidad-seguridad.md)
4. [Microsoft Edge: configuración, perfiles y herramientas](bloque-04-edge-configuracion-herramientas.md)
5. [Internet Explorer 11 y modo Internet Explorer](bloque-05-ie-modo-ie.md)
6. [Trazabilidad de fuentes oficiales](fuentes.md)
7. [Informe para revisión](feedback.md)

## 3. Mapa del epígrafe

| Inciso oficial | Contenido exigible |
|---|---|
| Navegación por Internet | navegador, página, sitio, URL, enlace, protocolo, dominio, barra de direcciones, búsqueda y navegación |
| Microsoft Edge | pestañas, ventanas, favoritos, historial, descargas, perfiles, sincronización, privacidad, seguridad, impresión y PDF |
| Internet Explorer | funciones clásicas aún examinables, situación de soporte, diferencias con Edge y limitaciones actuales |
| Compatibilidad | modo IE, motor moderno frente a motor heredado y uso organizativo controlado |

## 4. Conceptos fundamentales

### Internet y web

**Internet** es la infraestructura mundial de redes interconectadas. La **World Wide Web** es uno de los servicios que funciona sobre Internet y utiliza páginas enlazadas accesibles mediante navegadores.

No son sinónimos absolutos: correo electrónico, transferencia de archivos o conexión remota también usan Internet.

### Navegador

Aplicación que solicita, interpreta y muestra recursos web. Permite introducir direcciones, seguir enlaces, abrir pestañas, descargar archivos y conservar datos como favoritos o historial.

### Página y sitio web

- **Página web:** documento o recurso concreto.
- **Sitio web:** conjunto organizado de páginas y recursos bajo uno o varios dominios relacionados.
- **Página de inicio:** página configurada para abrirse al iniciar el navegador o al pulsar el botón Inicio, según configuración.
- **Nueva pestaña:** página especial del navegador; no tiene que coincidir con la página de inicio.

### URL

Una URL identifica la ubicación de un recurso. Ejemplo:

`https://sede.ejemplo.es/tramites/registro?anio=2026#requisitos`

Elementos habituales:

- `https`: esquema o protocolo;
- `sede.ejemplo.es`: nombre de host o dominio;
- `/tramites/registro`: ruta;
- `?anio=2026`: consulta;
- `#requisitos`: fragmento dentro del recurso.

La barra de direcciones de Edge también puede realizar búsquedas. Es importante distinguir introducir una URL completa de escribir términos para un motor de búsqueda.

## 5. Navegación básica

Acciones esenciales:

- atrás y adelante;
- recargar o actualizar;
- detener una carga cuando proceda;
- abrir enlace en la pestaña actual, nueva pestaña o nueva ventana;
- cambiar entre pestañas;
- cerrar y reabrir pestañas;
- usar la barra de direcciones;
- buscar texto dentro de una página;
- ampliar o reducir el zoom;
- imprimir o guardar como PDF.

## 6. Pestañas y ventanas

Una pestaña contiene una página dentro de una ventana del navegador. Varias pestañas comparten la misma ventana, pero pueden tener procesos y estados distintos.

Operaciones comunes en Edge:

- `Ctrl + T`: nueva pestaña;
- `Ctrl + N`: nueva ventana;
- `Ctrl + W`: cerrar pestaña activa;
- `Ctrl + Mayús + T`: reabrir la última pestaña cerrada;
- `Ctrl + Tab`: pestaña siguiente;
- `Ctrl + Mayús + Tab`: pestaña anterior;
- `Ctrl + L`: seleccionar la barra de direcciones;
- `Ctrl + R` o `F5`: recargar;
- `Ctrl + F`: buscar en la página.

Cerrar una pestaña no equivale a borrar el historial ni los archivos descargados.

## 7. Favoritos, historial y descargas

### Favoritos

Guardan la dirección de una página para acceder después. Pueden organizarse en carpetas y sincronizarse si el usuario inicia sesión y activa la sincronización.

Guardar una página como favorito no guarda necesariamente una copia completa para uso sin conexión.

### Historial

Registra páginas visitadas y datos temporales asociados. Puede eliminarse por intervalos de tiempo y por categorías.

Eliminar el **historial de descargas** borra la lista que muestra el navegador, pero no elimina los archivos descargados del disco.

### Descargas

Una descarga copia un archivo desde un origen remoto al equipo. Antes de abrirlo deben comprobarse:

- origen;
- nombre y extensión;
- ubicación de destino;
- advertencias de seguridad;
- firma o reputación cuando proceda.

## 8. Datos de navegación y privacidad

Los datos habituales incluyen:

- historial de navegación;
- historial de descargas;
- cookies y otros datos de sitios;
- imágenes y archivos en caché;
- contraseñas guardadas;
- datos de autorrelleno;
- permisos concedidos a sitios.

Una **cookie** es información que un sitio almacena en el navegador para mantener sesión, preferencias u otras funciones. La **caché** conserva copias de recursos para acelerar cargas posteriores.

Borrar cookies puede cerrar sesiones. Borrar caché obliga normalmente a descargar de nuevo recursos. No son la misma operación.

## 9. Navegación InPrivate

En Edge se abre normalmente con `Ctrl + Mayús + N`.

Al cerrar todas las ventanas InPrivate, Edge elimina del dispositivo datos como historial de navegación, historial de descargas, cookies, caché y datos de formularios de esa sesión.

Sin embargo:

- los archivos descargados permanecen;
- los favoritos creados permanecen;
- no oculta la actividad al centro de trabajo, centro educativo, proveedor de Internet o sitios visitados;
- no convierte automáticamente una página peligrosa en segura;
- no sustituye antivirus, SmartScreen ni una conducta prudente.

En Internet Explorer 11, el acceso histórico a InPrivate utilizaba `Ctrl + Mayús + P`, no el atajo actual de Edge.

## 10. Seguridad de navegación

### HTTPS

HTTPS cifra la comunicación entre navegador y servidor y permite autenticar el servidor mediante certificados. No garantiza por sí solo que el contenido, la empresa o la oferta sean legítimos.

Ante una advertencia de certificado no debe continuarse automáticamente. Hay que comprobar dirección, fecha y hora del equipo, identidad esperada y contexto.

### SmartScreen de Microsoft Defender

Edge utiliza SmartScreen para comprobar la reputación de sitios y descargas y advertir o bloquear contenido asociado a phishing o malware.

No debe desactivarse como primera respuesta ante una descarga bloqueada. Primero se verifica la fuente y la necesidad real.

### Permisos de sitio

Los sitios pueden solicitar acceso a:

- ubicación;
- cámara;
- micrófono;
- notificaciones;
- ventanas emergentes;
- descargas automáticas;
- portapapeles u otros recursos.

La concesión puede ser puntual, permanente o denegada. Debe revisarse desde la información del sitio o la configuración de permisos.

## 11. Microsoft Edge

Funciones principales incluidas en este tema:

- barra de direcciones y búsqueda;
- pestañas y ventanas;
- favoritos e historial;
- descargas;
- perfiles;
- sincronización;
- extensiones;
- lector PDF;
- impresión;
- privacidad, cookies y permisos;
- SmartScreen;
- navegación InPrivate;
- modo Internet Explorer para sitios heredados.

### Perfiles y sincronización

Un perfil separa favoritos, historial, contraseñas, configuración y otros datos. Al iniciar sesión y activar sincronización, Edge puede sincronizar favoritos, contraseñas, historial, extensiones, pestañas abiertas, autorrelleno y configuración entre dispositivos.

Cerrar sesión no implica necesariamente borrar todos los datos locales. Eliminar un perfil es una acción distinta.

### Extensiones

Amplían funciones del navegador. Deben revisarse editor, permisos y necesidad. Una extensión puede leer o modificar datos de sitios según los permisos concedidos.

## 12. Internet Explorer y modo IE

Internet Explorer 11 fue el último gran Internet Explorer. Su aplicación de escritorio está retirada y deshabilitada en determinadas versiones de Windows 10.

Para aplicaciones corporativas antiguas, Edge dispone de **modo Internet Explorer**:

- Edge usa su motor moderno basado en Chromium para sitios actuales;
- usa el motor heredado Trident/MSHTML de IE11 para los sitios configurados específicamente en modo IE;
- no todos los sitios se abren en modo IE;
- normalmente la organización decide qué sitios lo requieren mediante directivas;
- el indicador de IE aparece en la barra cuando la página se carga en ese modo.

Modo IE no equivale a ejecutar la antigua aplicación de escritorio como navegador general.

## 13. Diferencias operativas importantes

| Aspecto | Edge | Internet Explorer 11 |
|---|---|---|
| Situación | navegador actual | producto heredado y retirado en gran parte del escritorio Windows |
| Motor principal | Chromium | Trident/MSHTML |
| InPrivate | `Ctrl + Mayús + N` | `Ctrl + Mayús + P` |
| Extensiones | modelo actual de Edge | complementos y barras heredadas |
| Compatibilidad antigua | modo IE controlado | nativa en el producto clásico |
| Recomendación | navegación ordinaria | no usar como navegador general actual |

## 14. Errores frecuentes

1. Confundir Internet con la web.
2. Confundir URL con términos de búsqueda.
3. Pensar que la página de inicio y la nueva pestaña son siempre iguales.
4. Creer que un favorito guarda una copia completa del sitio.
5. Borrar el historial de descargas esperando borrar los archivos.
6. Confundir cookies con caché.
7. Creer que InPrivate oculta la actividad al proveedor o a la empresa.
8. Creer que HTTPS garantiza que una web es honesta.
9. Ignorar advertencias de certificado o SmartScreen.
10. Conceder cámara, micrófono o notificaciones sin revisar el sitio.
11. Confundir cerrar sesión con borrar un perfil.
12. Tratar Internet Explorer como navegador actual recomendado.
13. Confundir Internet Explorer clásico con el modo IE de Edge.
14. Suponer que todo sitio antiguo debe abrirse en modo IE.
15. Memorizar una ubicación exacta de menú ignorando que Edge se actualiza continuamente.

## 15. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Fuentes oficiales de Microsoft: trazadas.
- Situación actual de Internet Explorer: delimitada.
- Banco de preguntas: vacío.
- Revisión del usuario: pendiente.
- Tema cerrado: **NO**.
- Publicación como aprobado: **NO**.

El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 16 aprobado»**.
