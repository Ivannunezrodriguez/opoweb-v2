# La Puebla de Montalbán · Tema 16 · Cotejo técnico-editorial del test

**Fecha: 04/11/2026.** Programa: **BOP Toledo n.º 82, 05/05/2026, anuncio 2026-1965, Anexo I**, «Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge».

## Alcance y referencias primarias

Se cotejan **12 preguntas y 48 alternativas** del banco publicado, su clave, la justificación y su correspondencia con el manual de cinco bloques. **Fuentes Microsoft**: [atajos de Edge](https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge), [InPrivate](https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge), [modo IE](https://learn.microsoft.com/es-es/deployedge/edge-ie-mode), [ciclo de vida de IE/Edge](https://learn.microsoft.com/es-es/lifecycle/faq/internet-explorer-microsoft-edge).

| Trampa frecuente | Regla que debe memorizarse |
|---|---|
| InPrivate Edge frente a IE11 | **Ctrl + Mayús + N** en Edge; **Ctrl + Mayús + P** en IE11 clásico (en Edge ese segundo atajo abre la impresión del sistema) |
| Modo IE frente a IE de escritorio | Modo IE es una función de **Microsoft Edge** que carga sitios heredados con **Trident/MSHTML**, no otro navegador actual |
| Final de soporte IE11 y modo IE | IE11 de escritorio terminó soporte para determinadas versiones de Windows 10 el **15/06/2022**; modo IE tiene compromiso de soporte **al menos hasta 2029**, en sistemas compatibles |
| HTTPS frente a legitimidad | Cifra y autentica la conexión; **no** garantiza que la empresa o contenido sean fiables |
| Historial de descargas frente a ficheros | Borrar la lista de descargas **no** elimina los archivos descargados |

> ⚠️ **¡Foco Examen!:** La fecha de **2029** afecta al **modo Internet Explorer de Edge**, no significa que la antigua aplicación de escritorio IE11 tenga soporte general hasta ese año.

## Cotejo alternativa por alternativa

### LP-T16-001 · ¿Qué relación existe entre Internet y la World Wide Web?

**Clave: B — La Web es un servicio que funciona sobre Internet.** content/la-puebla/tema-16/manual.md · apartados 3 y 4.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Son términos completamente sinónimos | **Incorrecta.** Internet es infraestructura; la Web es un servicio y no sinónimo completo. |
| **B** | La Web es un servicio que funciona sobre Internet | **Correcta.** La Web usa Internet como infraestructura para documentos y recursos enlazados. |
| **C** | Internet es una página web de Microsoft | **Incorrecta.** Internet no es una página ni pertenece a una sola empresa. |
| **D** | La Web incluye Internet y todas las redes privadas | **Incorrecta.** La Web no contiene Internet como parte subordinada; se apoya en Internet. |

> ⚠️ **¡Foco Examen!:** No debe confundirse la infraestructura Internet con uno de sus servicios, la World Wide Web.

### LP-T16-002 · En la URL https://sede.ejemplo.es/tramites?anio=2026#requisitos, ¿qué representa '#requisitos'?

**Clave: C — El fragmento dentro del recurso.** content/la-puebla/tema-16/manual.md · apartado 4 · URL.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | El protocolo | **Incorrecta.** El protocolo/esquema es https, situado antes de los dos puntos. |
| **B** | El dominio | **Incorrecta.** El dominio/host es sede.ejemplo.es, no la parte tras #. |
| **C** | El fragmento dentro del recurso | **Correcta.** # introduce el fragmento del recurso. |
| **D** | La consulta | **Incorrecta.** La consulta se introduce mediante ?anio=2026. |

> ⚠️ **¡Foco Examen!:** La consulta empieza por '?' y el fragmento por '#'; suelen intercambiarse en preguntas de estructura de URL.

### LP-T16-003 · ¿Qué atajo reabre en Microsoft Edge la última pestaña cerrada?

**Clave: C — Ctrl + Mayús + T.** content/la-puebla/tema-16/manual.md · apartado 6.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Ctrl + T | **Incorrecta.** Ctrl+T crea una pestaña nueva, no restaura la cerrada. |
| **B** | Ctrl + N | **Incorrecta.** Ctrl+N abre una ventana nueva. |
| **C** | Ctrl + Mayús + T | **Correcta.** Ctrl+Mayús+T recupera la última pestaña cerrada en Edge. |
| **D** | Ctrl + W | **Incorrecta.** Ctrl+W cierra la pestaña activa. |

> ⚠️ **¡Foco Examen!:** La combinación añade Mayús al atajo de nueva pestaña; Ctrl + T por sí solo no restaura nada.

### LP-T16-004 · Al borrar en Edge el historial de descargas, ¿qué ocurre con los archivos ya descargados?

**Clave: C — Permanecen en el disco y solo se borra la lista.** content/la-puebla/tema-16/manual.md · apartado 7.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Se eliminan también del disco | **Incorrecta.** Borrar el registro no suprime el archivo ya guardado. |
| **B** | Se envían a la Papelera | **Incorrecta.** No se envía a la Papelera por limpiar el historial del navegador. |
| **C** | Permanecen en el disco y solo se borra la lista | **Correcta.** El historial de descargas es la lista; los ficheros físicos permanecen. |
| **D** | Se cifran automáticamente | **Incorrecta.** La eliminación del historial no implica cifrar archivos. |

> ⚠️ **¡Foco Examen!:** Historial de descargas y archivos descargados son elementos distintos; borrar la lista no borra el contenido.

### LP-T16-005 · ¿Cuál es la diferencia correcta entre cookies y caché?

**Clave: D — Las cookies guardan datos de sesión o preferencias y la caché conserva recursos.** content/la-puebla/tema-16/manual.md · apartado 8.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Las cookies aceleran imágenes y la caché mantiene sesiones | **Incorrecta.** Invierte funciones: las cookies gestionan sesión/preferencias y la caché guarda recursos. |
| **B** | Son exactamente el mismo dato | **Incorrecta.** Son categorías diferentes con efectos distintos al borrarlas. |
| **C** | La caché solo guarda contraseñas | **Incorrecta.** La caché guarda recursos web, no solo contraseñas. |
| **D** | Las cookies guardan datos de sesión o preferencias y la caché conserva recursos | **Correcta.** Es la diferencia funcional que explica también efectos distintos al limpiar datos. |

> ⚠️ **¡Foco Examen!:** Borrar cookies puede cerrar sesiones; borrar caché obliga a descargar recursos de nuevo. No producen el mismo efecto.

### LP-T16-006 · ¿Qué atajo abre una ventana InPrivate en Microsoft Edge?

**Clave: A — Ctrl + Mayús + N.** content/la-puebla/tema-16/manual.md · apartado 9.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Ctrl + Mayús + N | **Correcta.** Ctrl+Mayús+N abre InPrivate en Edge para Windows. |
| **B** | Ctrl + Mayús + P | **Incorrecta.** Ctrl+Mayús+P era el atajo histórico de InPrivate de Internet Explorer; en Edge es impresión del sistema. |
| **C** | Ctrl + Alt + N | **Incorrecta.** Ctrl+Alt+N no es el atajo documentado para Edge InPrivate. |
| **D** | Ctrl + I | **Incorrecta.** Ctrl+I no es el atajo de apertura de InPrivate. |

> ⚠️ **¡Foco Examen!:** Edge e Internet Explorer usan atajos distintos para la navegación privada.

### LP-T16-007 · Tras cerrar todas las ventanas InPrivate de Edge, ¿qué elemento permanece en el dispositivo?

**Clave: B — Los archivos descargados.** content/la-puebla/tema-16/manual.md · apartado 9.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | El historial de navegación de la sesión | **Incorrecta.** El historial local de esa sesión se descarta al cerrar todas las ventanas privadas. |
| **B** | Los archivos descargados | **Correcta.** Las descargas se conservan como archivos, al igual que favoritos creados. |
| **C** | Las cookies de la sesión | **Incorrecta.** Las cookies de la sesión InPrivate se descartan al cerrar sus ventanas. |
| **D** | Los datos de formularios de la sesión | **Incorrecta.** Los datos de formularios de esa sesión no permanecen en el historial local. |

> ⚠️ **¡Foco Examen!:** InPrivate no convierte las descargas en temporales ni elimina automáticamente los archivos guardados.

### LP-T16-008 · ¿Qué garantiza principalmente HTTPS?

**Clave: D — Cifrado de la comunicación y autenticación del servidor mediante certificados.** content/la-puebla/tema-16/manual.md · apartado 10 · HTTPS.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Que la empresa es honesta | **Incorrecta.** Cifrado y certificados no prueban honradez de la empresa. |
| **B** | Que la oferta comercial es verdadera | **Incorrecta.** HTTPS no comprueba la veracidad material de ofertas. |
| **C** | Ausencia total de malware en la página | **Incorrecta.** HTTPS no certifica que toda la página esté libre de malware. |
| **D** | Cifrado de la comunicación y autenticación del servidor mediante certificados | **Correcta.** TLS cifra y protege la conexión y autentica el servidor que presenta certificado válido. |

> ⚠️ **¡Foco Examen!:** El candado no garantiza que una web sea honesta; solo informa sobre la protección técnica de la conexión.

### LP-T16-009 · ¿Cuál es la función principal de Microsoft Defender SmartScreen en Edge?

**Clave: A — Comprobar reputación de sitios y descargas y advertir sobre phishing o malware.** content/la-puebla/tema-16/manual.md · apartado 10 · SmartScreen.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Comprobar reputación de sitios y descargas y advertir sobre phishing o malware | **Correcta.** SmartScreen verifica reputación y previene frente a sitios y descargas maliciosas. |
| **B** | Aumentar el zoom | **Incorrecta.** El zoom es función de visualización del navegador, no de SmartScreen. |
| **C** | Guardar favoritos | **Incorrecta.** Guardar favoritos es función de marcadores, no reputación de seguridad. |
| **D** | Convertir páginas en PDF | **Incorrecta.** Convertir/imprimir a PDF no es función de SmartScreen. |

> ⚠️ **¡Foco Examen!:** Desactivar SmartScreen no es la respuesta ordinaria ante un bloqueo; primero debe verificarse la fuente.

### LP-T16-010 · Respecto a los perfiles de Edge, ¿qué afirmación es correcta?

**Clave: D — Un perfil separa favoritos, historial, contraseñas y configuración.** content/la-puebla/tema-16/manual.md · apartado 11.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Cerrar sesión elimina siempre el perfil y todos sus datos | **Incorrecta.** Cerrar sesión no equivale automáticamente a eliminar perfil y datos locales. |
| **B** | Todos los perfiles comparten obligatoriamente contraseñas | **Incorrecta.** Los perfiles pueden separar credenciales y contraseñas. |
| **C** | La sincronización funciona sin iniciar sesión ni activarla | **Incorrecta.** Sin inicio de sesión y habilitación no existe la sincronización ordinaria de cuenta. |
| **D** | Un perfil separa favoritos, historial, contraseñas y configuración | **Correcta.** El perfil organiza y separa datos locales y configuración. |

> ⚠️ **¡Foco Examen!:** Cerrar sesión no equivale a borrar el perfil ni necesariamente todos los datos locales.

### LP-T16-011 · ¿Cómo funciona el modo Internet Explorer de Microsoft Edge?

**Clave: A — Usa el motor heredado solo para sitios configurados específicamente.** content/la-puebla/tema-16/manual.md · apartado 12.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | Usa el motor heredado solo para sitios configurados específicamente | **Correcta.** Modo IE usa Trident/MSHTML para ubicaciones configuradas para compatibilidad. |
| **B** | Abre todos los sitios con el motor heredado | **Incorrecta.** Por defecto Edge usa Chromium para páginas modernas. |
| **C** | Ejecuta la antigua aplicación IE como navegador general | **Incorrecta.** Modo IE no relanza IE11 como navegador general independiente. |
| **D** | Instala automáticamente Internet Explorer 11 | **Incorrecta.** Modo IE es una función de Edge, no instala automáticamente la aplicación de escritorio IE11. |

> ⚠️ **¡Foco Examen!:** Modo IE no es la aplicación clásica de Internet Explorer ni se aplica automáticamente a toda web antigua.

### LP-T16-012 · ¿Hasta qué año indica Microsoft que mantendrá al menos el modo Internet Explorer de Edge?

**Clave: B — 2029.** content/la-puebla/tema-16/manual.md · apartado 1.

| Opción | Literal del banco | Valoración |
|---|---|---|
| **A** | 2026 | **Incorrecta.** 2026 no es la duración mínima publicada por Microsoft. |
| **B** | 2029 | **Correcta.** Microsoft asegura compatibilidad del modo IE al menos hasta 2029 en sistemas admitidos. |
| **C** | 2027 | **Incorrecta.** 2027 es un año demasiado temprano respecto de lo anunciado. |
| **D** | 2035 | **Incorrecta.** 2035 no es la fecha mínima prometida oficialmente; no debe inventarse prórroga. |

> ⚠️ **¡Foco Examen!:** La retirada de la aplicación IE no implica que el modo IE de Edge haya desaparecido simultáneamente.

## Dictamen del tema 16

- **12/12 claves** coinciden exactamente con `respuestaLiteral`; **48/48 opciones** contrastadas, sin detectar una segunda respuesta válida en el contexto de cada enunciado.
- Los conceptos de navegación, URL, pestañas, historial, cookies, caché, InPrivate, HTTPS, SmartScreen, perfiles y modo IE quedan cubiertos.
- El texto **«al menos hasta 2029»** no se debe simplificar a «retirada en 2029». La fecha concreta de retirada no está fijada por esa declaración.
- Esta comprobación es **editorial/técnica** del temario y test, **no equivale** a prueba automatizada de navegación ni certificación funcional integral de la web.
