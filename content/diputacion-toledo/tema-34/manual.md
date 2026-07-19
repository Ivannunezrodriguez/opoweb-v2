# Tema 34 · Microsoft Windows 11 Pro III. Impresión y escaneado de documentos

## Epígrafe oficial

**Microsoft Windows 11 Pro III. Impresión y escaneado de documentos desde Microsoft Windows 11.**

## 1. Impresión en Windows 11

La impresión consiste en enviar un documento, imagen o contenido digital a una impresora física o virtual mediante el sistema de impresión de Windows.

Elementos básicos:

- aplicación desde la que se imprime;
- impresora seleccionada;
- controlador o sistema de compatibilidad;
- cola de impresión;
- configuración del trabajo;
- dispositivo físico o impresora virtual.

> ⚠️ **¡Foco Examen!:** La aplicación genera el trabajo, pero Windows administra la cola y lo remite a la impresora seleccionada.

## 2. Instalación de impresoras

Ruta habitual:

**Inicio → Configuración → Bluetooth y dispositivos → Impresoras y escáneres → Agregar dispositivo**.

Windows puede detectar:

- impresoras USB;
- impresoras Wi-Fi;
- impresoras de red;
- dispositivos multifunción;
- impresoras compatibles con IPP;
- impresoras virtuales, como Microsoft Print to PDF.

Si la impresora no aparece automáticamente, puede agregarse manualmente mediante:

- nombre del recurso compartido;
- dirección IP o nombre de host;
- detección en red;
- puerto local o TCP/IP;
- controlador proporcionado por Windows o el fabricante.

> ⚠️ **¡Foco Examen!:** Agregar una impresora no equivale a establecerla como predeterminada.

## 3. Impresora predeterminada

La impresora predeterminada es la que Windows propone inicialmente en los cuadros de impresión.

Windows puede:

- permitir elegirla manualmente;
- administrar automáticamente la impresora predeterminada usando la última utilizada, si esa opción está activada.

| Opción | Efecto |
|---|---|
| Predeterminada manual | El usuario fija una impresora concreta |
| Administración automática | Windows puede usar como predeterminada la última impresora utilizada |

> ⚠️ **¡Foco Examen!:** Para fijar manualmente una impresora, puede ser necesario desactivar la administración automática de la impresora predeterminada.

## 4. Cuadro de impresión

El atajo general de impresión es **Ctrl + P**.

Las opciones dependen de la aplicación y de la impresora, pero suelen incluir:

- impresora;
- número de copias;
- intervalo de páginas;
- orientación vertical u horizontal;
- tamaño de papel;
- impresión a una o dos caras;
- color o escala de grises;
- calidad;
- páginas por hoja;
- intercalado;
- vista previa.

### Intervalos habituales

| Selección | Resultado |
|---|---|
| Todo | Imprime todo el documento |
| Página actual | Solo la página activa |
| Selección | Solo el contenido seleccionado, si la aplicación lo admite |
| Intervalo | Páginas concretas, por ejemplo `1-3,5` |

> ⚠️ **¡Foco Examen!:** **Ctrl + P** abre el cuadro de impresión; no envía necesariamente el trabajo sin confirmación.

## 5. Impresión a PDF

**Microsoft Print to PDF** crea un archivo PDF en lugar de enviar el trabajo a una impresora física.

El usuario debe:

1. elegir Microsoft Print to PDF;
2. pulsar Imprimir;
3. seleccionar nombre y ubicación;
4. guardar el archivo.

No debe confundirse con:

- imprimir en papel;
- guardar el documento en su formato original;
- exportar mediante una función propia de la aplicación.

> ⚠️ **¡Foco Examen!:** Imprimir a PDF genera un archivo nuevo; no modifica automáticamente el documento original.

## 6. Cola de impresión

La cola muestra los trabajos pendientes, en curso, pausados o con error.

Desde ella puede:

- pausar un trabajo;
- reanudarlo;
- cancelarlo;
- comprobar su estado;
- identificar bloqueos.

La cancelación puede no ser inmediata si parte del trabajo ya se ha enviado al dispositivo.

| Estado | Significado |
|---|---|
| Imprimiendo | Trabajo en proceso |
| En pausa | Detenido temporalmente |
| Error | Existe una incidencia |
| Eliminando | Windows intenta retirarlo de la cola |

> ⚠️ **¡Foco Examen!:** Cancelar un trabajo en la cola no garantiza que la impresora deje de imprimir instantáneamente si ya recibió datos.

## 7. Problemas frecuentes de impresión

Comprobaciones básicas:

- impresora encendida;
- papel disponible;
- ausencia de atascos;
- tinta o tóner suficiente;
- conexión USB o red;
- impresora correcta seleccionada;
- cola sin trabajos bloqueados;
- controlador actualizado;
- dispositivo no configurado como sin conexión.

Una prueba útil es imprimir una página de prueba o imprimir desde otra aplicación.

> ⚠️ **¡Foco Examen!:** Un fallo al imprimir desde una sola aplicación no demuestra por sí solo que la impresora esté averiada.

## 8. Escáneres y dispositivos multifunción

Un escáner convierte documentos o imágenes en archivos digitales.

Windows 11 puede detectar:

- escáneres USB;
- escáneres de red;
- dispositivos multifunción;
- escáneres compatibles con eSCL o sistemas modernos de digitalización.

Ruta habitual:

**Inicio → Configuración → Bluetooth y dispositivos → Impresoras y escáneres**.

En un dispositivo multifunción, Windows puede mostrar funciones separadas de impresión y escaneado.

> ⚠️ **¡Foco Examen!:** Que Windows detecte una impresora multifunción no implica necesariamente que la función de escáner esté correctamente instalada.

## 9. Aplicación Escáner de Windows

La aplicación **Escáner de Windows** permite digitalizar documentos e imágenes.

Opciones habituales:

- selección del escáner;
- origen: cristal, alimentador o automático;
- tipo de archivo;
- modo de color;
- resolución;
- ubicación de guardado;
- vista previa;
- digitalización final.

### Orígenes de digitalización

| Origen | Uso habitual |
|---|---|
| Cristal o cama plana | Fotografías, documentos únicos o material delicado |
| Alimentador automático | Varias páginas seguidas |
| Automático | El dispositivo decide el origen disponible |

> ⚠️ **¡Foco Examen!:** El alimentador automático facilita varias páginas, pero no todos los modelos admiten doble cara.

## 10. Formatos de archivo

Formatos frecuentes:

| Formato | Uso característico |
|---|---|
| PDF | Documentos, especialmente varias páginas |
| JPEG | Fotografías y archivos de tamaño moderado |
| PNG | Imágenes con buena calidad y sin pérdidas destructivas |
| TIFF | Archivo de alta calidad, a menudo de mayor tamaño |

La disponibilidad depende de la aplicación y del dispositivo.

> ⚠️ **¡Foco Examen!:** JPEG suele reducir tamaño mediante compresión con pérdida; PNG conserva mejor gráficos y texto nítido.

## 11. Resolución y color

La resolución se expresa normalmente en **ppp o dpi**.

- mayor resolución: más detalle y archivo mayor;
- menor resolución: menos detalle y archivo menor.

Modos habituales:

- color;
- escala de grises;
- blanco y negro.

Para documentos de texto, una resolución moderada suele ser suficiente. Para fotografías o ampliaciones, puede requerirse mayor resolución.

> ⚠️ **¡Foco Examen!:** Aumentar los dpi incrementa el detalle potencial, pero también el tamaño del archivo y el tiempo de digitalización.

## 12. Vista previa, recorte y guardado

La vista previa permite:

- comprobar orientación;
- ajustar el área;
- evitar márgenes innecesarios;
- verificar que el documento está recto;
- elegir el encuadre.

Después debe seleccionarse la carpeta y el nombre del archivo.

Una digitalización no queda garantizada hasta que el archivo se guarda correctamente.

## 13. Impresión y escaneado en red

En red intervienen:

- conectividad;
- permisos;
- disponibilidad del dispositivo;
- dirección o nombre del equipo;
- configuración del servidor de impresión, si existe;
- controlador o protocolo compatible.

Una impresora compartida puede instalarse mediante una ruta del tipo:

```text
\\servidor\impresora
```

> ⚠️ **¡Foco Examen!:** Una impresora de red puede estar instalada en el equipo y, aun así, no estar disponible si falla la red o el servidor.

## 14. Seguridad y protección de datos

En entornos administrativos deben evitarse:

- documentos olvidados en la bandeja;
- impresiones confidenciales sin control;
- escaneos guardados en carpetas públicas;
- envío a dispositivos equivocados;
- conservación innecesaria de copias digitales;
- uso de memorias o ubicaciones no autorizadas.

Cuando exista impresión segura, el trabajo puede quedar retenido hasta que el usuario se identifique en el dispositivo.

> ⚠️ **¡Foco Examen!:** La impresión segura protege la retirada física del documento; no sustituye las demás medidas de seguridad.

## 15. Tabla final de atajos y reglas

| Acción | Regla |
|---|---|
| Abrir impresión | **Ctrl + P** |
| Agregar dispositivo | Configuración → Bluetooth y dispositivos → Impresoras y escáneres |
| Impresión virtual | Microsoft Print to PDF |
| Cola de impresión | Gestiona trabajos pendientes y errores |
| Escaneo | Aplicación Escáner de Windows |
| Cama plana | Documento único o delicado |
| Alimentador | Varias páginas |
| Mayor dpi | Más detalle y mayor tamaño |
| Ruta compartida | `\\servidor\impresora` |

## 16. Esquema final

```text
IMPRESIÓN
├─ Instalar impresora
├─ Seleccionar dispositivo
├─ Ctrl + P
├─ Configurar páginas, copias, orientación y color
├─ Cola de impresión
└─ Salida física o Microsoft Print to PDF

ESCANEADO
├─ Instalar o detectar escáner
├─ Abrir Escáner de Windows
├─ Elegir origen
├─ Elegir formato, color y resolución
├─ Vista previa
└─ Digitalizar y guardar
```

> ⚠️ **¡Foco Examen!:** Las trampas más frecuentes son confundir impresora instalada con predeterminada, cancelar con detener instantáneamente, imprimir a PDF con guardar el original y detectar una multifunción con tener operativo el escáner.