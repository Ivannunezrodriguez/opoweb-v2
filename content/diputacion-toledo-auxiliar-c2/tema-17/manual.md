# Diputación Toledo · Auxiliar Administrativo C2 · Tema 17

**ESTADO EDITORIAL: BORRADOR ESPECÍFICO EN DESARROLLO — NO CERTIFICADO.**
Fecha de consulta de documentación técnica: **25/10/2026**.

## 1. Epígrafe oficial literal

> **Tema 17. Microsoft Windows 11 Pro II. Navegación por Internet con Microsoft Edge. Uso del correo electrónico con Microfocus GroupWise 24.**

**Fuente:** BOP de Toledo **n.º 197, 14/10/2026, Anexo XI**, código **2026.00004759**.

**Alcance:** **Microsoft Edge** y **GroupWise 24**. Internet Explorer, Microsoft Outlook, Gmail y GroupWise 25 no sustituyen ninguno de los productos exigidos. Se incluye Windows 11 Pro como entorno funcional.

## 2. Microsoft Edge: navegación por Internet

### 2.1. Internet, web y navegador

- **Internet**: red global de redes y servicios.
- **Web**: servicio de acceso a contenidos enlazados mediante tecnologías web y protocolos como HTTPS.
- **Navegador**: aplicación cliente que interpreta y presenta contenido web.
- **URL**: dirección que identifica un recurso; permite distinguir protocolo, dominio, ruta y parámetros.
- **Barra de direcciones**: sirve para introducir una URL y, si el navegador lo permite, búsquedas de texto.
- **Pestaña**: muestra una página dentro de una ventana de navegador.

### 2.2. Operaciones que deben estudiarse

- Abrir una **ventana** y una **pestaña** nuevas; distinguir una de otra.
- Utilizar **Atrás**, **Adelante**, **Actualizar** y **Detener carga**.
- Guardar una página en **Favoritos** y organizar las carpetas de favoritos.
- Consultar y borrar **Historial**; diferenciarlo de favoritos y descargas.
- Descargar archivos y localizar su carpeta de destino.
- Imprimir contenido web o seleccionar un destino de impresión PDF cuando esté disponible.
- Usar perfiles del navegador y distinguir cuentas, permisos y sincronización según configuración.

### 2.3. Privacidad, navegación y seguridad

| Concepto | Qué significa |
|---|---|
| **HTTPS** | Cifrado de comunicaciones entre navegador y servicio; por sí solo no acredita legitimidad comercial de una página |
| **Historial** | Registro de páginas visitadas, sujeto a configuración y limpieza |
| **Cookies** | Datos que el sitio guarda o lee según reglas y consentimientos aplicables |
| **InPrivate** | Sesión que limita la conservación local de ciertos rastros tras el cierre; no garantiza anonimato ante redes o servicios |
| **Descargas** | Archivos guardados localmente, distintos de las entradas de historial |
| **Permisos del sitio** | Acceso a ubicación, cámara, micrófono y otros recursos, según autorización |

> ⚠️ **¡Foco Examen!:** **InPrivate no equivale a anonimato**; tampoco es lo mismo borrar historial que eliminar los archivos descargados.

**Fuente técnica a verificar para cada ruta de menú:** https://support.microsoft.com/es-es/microsoft-edge

## 3. GroupWise 24: correo electrónico

### 3.1. Producto y documentación exacta

**GroupWise 24** es un producto de colaboración y mensajería de **OpenText**, con cliente de correo, agenda, contactos y otras funciones. El temario exige **uso del correo electrónico**, no la administración de servidores ni el despliegue de GroupWise Mobility Service.

**Documentación del fabricante:**
- https://www.novell.com/documentation/groupwise24/
- https://www.novell.com/documentation/groupwise24/gw_guide_userwin/
- https://www.novell.com/documentation/groupwise24/pdfdoc/gw_guide_userwin/gw_guide_userwin.pdf

La guía oficial de la rama **24** enumera las ediciones **24.1, 24.2 y 24.3**. El epígrafe no especifica actualización secundaria. Las opciones pueden variar con configuración y políticas de la organización; no debe inventarse una secuencia de menús única sin identificar versión y modalidad de cliente.

### 3.2. Conceptos de correo

| Elemento | Función |
|---|---|
| **Remitente** | Persona o cuenta que envía el mensaje |
| **Para** | Destinatarios principales |
| **CC** | Destinatarios en copia, visibles en el mensaje |
| **CCO** | Destinatarios en copia oculta; no visibles para el resto en la información habitual del mensaje |
| **Asunto** | Descripción del contenido |
| **Cuerpo** | Texto y contenido del mensaje |
| **Adjunto** | Archivo incluido con el mensaje |
| **Borrador** | Mensaje redactado y todavía no enviado |
| **Responder** | Contestar al remitente según opciones del cliente |
| **Responder a todos** | Contestar a los destinatarios incluidos conforme al comando |
| **Reenviar** | Remitir el mensaje a otra persona |

### 3.3. Flujo funcional que exige examen práctico

1. Abrir el cliente o servicio GroupWise autorizado e identificar la **cuenta** y **buzón**.
2. Acceder a la **Bandeja de entrada** y visualizar remitente, asunto y recepción.
3. Crear un mensaje, completar **Para**, **CC** o **CCO** y el **Asunto**.
4. Redactar contenido y agregar **adjuntos**.
5. Comprobar destinatarios y archivos antes de **Enviar**.
6. Distinguir mensajes **enviados**, **recibidos**, **borradores** y elementos eliminados.
7. Usar **Responder**, **Responder a todos** y **Reenviar** según destinatarios y propósito.
8. Localizar mensajes mediante opciones de **búsqueda** disponibles.
9. Utilizar carpeta o categorías de organización del correo cuando proceda.
10. Reconocer destinatarios internos, direcciones externas y uso de la **libreta de direcciones**.

**Control de verificación pendiente:** mapear estos flujos uno por uno a las etiquetas exactas, pestañas, opciones, reglas de archivo y recuperación en el **cliente GroupWise 24** y en **GroupWise Web 24**. Las dos interfaces no deben confundirse.

### 3.4. Prácticas seguras de correo en la Administración

- Comprobar **destinatarios**, en particular los campos **CC** y **CCO**, antes de enviar datos personales.
- No abrir adjuntos o enlaces inesperados sin validación.
- Diferenciar **correo electrónico** de **registro administrativo oficial**: que un correo se haya enviado no demuestra por sí solo la presentación de una instancia en un registro.
- Distinguir **borrador** y **mensaje enviado**.
- No asumir que borrar un correo equivale a su destrucción en copias de seguridad o sistemas de archivo corporativos.

> ⚠️ **¡Foco Examen!:** **CC** y **CCO** no son equivalentes. Tampoco lo son **Responder** y **Responder a todos**.

## 4. Matriz de auditoría pendiente

| Apartado | Documento oficial | Pendiente |
|---|---|---|
| Windows 11 Pro | Soporte Microsoft Windows 11 | Identificar variaciones propias del entorno |
| Edge | Ayuda oficial Microsoft Edge | Revisar rutas de menús, descargas, privacidad y perfiles |
| GroupWise 24: correo | Manual oficial GroupWise Client 24 | Revisar botones y operaciones concretas, carpeta enviados, búsqueda y adjuntos |
| GroupWise 24: web | Manual oficial GroupWise Web 24 | Distinguir interfaz web de cliente local |
| Test y supuestos | Material derivado de los anteriores | Redactar y comprobar soluciones oficiales |

**No certificar** este tema como terminado sin el cotejo del manual de GroupWise **24**; un tutorial genérico de correo no basta.
