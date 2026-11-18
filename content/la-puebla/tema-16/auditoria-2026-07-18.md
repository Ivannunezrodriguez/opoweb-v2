# Auditoría técnica · Tema 16 · 18 de julio de 2026

## Epígrafe oficial

> **Tema 16. Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge.**

## Fuentes oficiales contrastadas

- Documentación de ciclo de vida de Microsoft para Internet Explorer 11.
- Preguntas frecuentes oficiales sobre el ciclo de vida de Internet Explorer y Microsoft Edge.
- Documentación oficial del modo Internet Explorer de Microsoft Edge.
- Soporte oficial de Microsoft sobre navegación InPrivate, historial y privacidad.
- Documentación oficial de Microsoft Defender SmartScreen.
- Soporte oficial de Microsoft sobre métodos abreviados de teclado de Edge.

## Resultado

**Estado:** `AUDITADO_TECNOLOGIA_VIGENTE`.

No se detectan errores sustantivos en el manual. El contenido diferencia correctamente:

- Internet y World Wide Web;
- página, sitio, URL y motor de búsqueda;
- favoritos, historial, caché, cookies y descargas;
- navegación ordinaria e InPrivate;
- Microsoft Edge e Internet Explorer 11;
- aplicación clásica de Internet Explorer y modo IE de Edge;
- cifrado HTTPS y legitimidad real del sitio.

## Situación actual de Internet Explorer

La aplicación de escritorio Internet Explorer 11 dejó de estar soportada en determinadas versiones de Windows 10 el **15 de junio de 2022** y fue posteriormente deshabilitada en ellas. Microsoft recomienda utilizar Edge.

El modo Internet Explorer de Edge continúa siendo la vía oficial para aplicaciones web heredadas y Microsoft declara soporte **al menos hasta 2029**, con un preaviso mínimo de **un año** antes de su retirada.

## Datos y comportamientos confirmados

| Materia | Regla vigente |
|---|---|
| Edge: nueva pestaña | `Ctrl + T` |
| Edge: nueva ventana | `Ctrl + N` |
| Edge: ventana InPrivate | `Ctrl + Mayús + N` |
| IE 11: InPrivate | `Ctrl + Mayús + P` |
| Reabrir pestaña cerrada | `Ctrl + Mayús + T` |
| Seleccionar barra de direcciones | `Ctrl + L` |
| Buscar dentro de la página | `Ctrl + F` |
| Modo IE | soportado **al menos hasta 2029** |
| Aviso previo antes de retirar modo IE | mínimo de **un año** |

## Navegación InPrivate

Al cerrar todas las ventanas InPrivate, Edge elimina del dispositivo los datos de esa sesión, incluidos historial, historial de descargas, cookies, caché, formularios y permisos de sitios. Sin embargo:

- los archivos descargados permanecen;
- los favoritos creados permanecen;
- la actividad puede seguir siendo visible para empresa, centro educativo, proveedor de Internet y sitios visitados;
- no neutraliza extensiones autorizadas para funcionar en InPrivate;
- no sustituye SmartScreen ni otras medidas de seguridad.

## SmartScreen

Microsoft Defender SmartScreen aplica comprobaciones de reputación sobre sitios y archivos y puede advertir o bloquear contenidos relacionados con phishing, malware o aplicaciones potencialmente no deseadas. Una advertencia no debe ignorarse automáticamente.

## Precisión editorial

La afirmación de que HTTPS autentica el servidor debe entenderse en términos de validación del certificado y del nombre del sitio. HTTPS aporta cifrado e integridad del canal, pero no demuestra que una oferta, organización o contenido sean legítimos.

> ⚠️ **¡Foco Examen!:** Borrar el **historial de descargas** elimina la lista del navegador, pero no borra los archivos descargados del disco. Del mismo modo, InPrivate conserva las descargas y los favoritos creados.

## Conclusión

El Tema 16 puede mantenerse como material vigente. No requiere corrección sustantiva y queda preparado para la posterior generación de preguntas trazables.