# Tema 19 · Bloque 2 · Periféricos e impresoras

**Estado:** APROBADO POR EL USUARIO

## 1. Concepto de periférico

Un periférico es un dispositivo que permite entrada, salida, almacenamiento o comunicación con el ordenador. Puede ser externo o estar integrado físicamente.

### Clasificación funcional

- **entrada**: teclado, ratón, escáner, cámara, micrófono;
- **salida**: monitor, impresora, altavoces;
- **entrada y salida**: pantalla táctil, impresora multifunción, auriculares con micrófono;
- **almacenamiento**: disco externo, memoria USB, unidad óptica;
- **comunicación**: adaptador de red, módem, Bluetooth.

La clasificación depende de la función, no solo del aspecto. Una impresora multifunción puede ser entrada y salida.

## 2. Conexión, reconocimiento y controlador

Un dispositivo puede conectarse mediante:

- USB;
- red Ethernet;
- Wi‑Fi;
- Bluetooth;
- interfaces específicas.

**Plug and Play** permite que el sistema detecte y configure muchos dispositivos automáticamente. Esto no elimina la necesidad de controladores, firmware o configuración de red.

Debe distinguirse:

- dispositivo conectado;
- dispositivo reconocido;
- controlador instalado;
- dispositivo disponible para la aplicación;
- dispositivo configurado como predeterminado.

## 3. Impresora física, virtual y multifunción

- **impresora física**: produce salida sobre papel u otro soporte;
- **impresora virtual**: genera un archivo, como Microsoft Print to PDF;
- **multifunción**: combina impresión, escáner y copia, y a veces fax.

Una impresora virtual no es un periférico físico aunque aparezca en la lista de impresoras.

## 4. Tecnologías de impresión

### Inyección de tinta

Deposita gotas de tinta líquida mediante un cabezal. Características habituales:

- buena versatilidad en color y fotografía;
- coste inicial frecuentemente contenido;
- uso de cartuchos o depósitos;
- riesgo de secado o atascos si permanece mucho tiempo sin uso;
- coste por página dependiente del sistema de tinta.

### Láser o LED

Utiliza tóner en polvo, tambor y fijación mediante calor y presión. Características habituales:

- rapidez en documentos de texto;
- idoneidad para volúmenes elevados;
- consumibles de mayor rendimiento en muchos modelos;
- existencia de equipos monocromos y en color.

### Térmica

Aplica calor sobre papel térmico o cinta de transferencia. Es común en tickets y etiquetas. Su estudio es complementario porque el epígrafe no limita las tecnologías, pero el núcleo debe centrarse en inyección y láser.

### Impacto

Las impresoras matriciales golpean una cinta contra el papel. Son tecnología heredada, útil para formularios multicopia en determinados entornos.

## 5. Parámetros de una impresora

- **resolución**, expresada normalmente en dpi;
- **velocidad**, en páginas por minuto o imágenes por minuto;
- **monocromo o color**;
- **impresión a doble cara o dúplex**;
- **capacidad de bandejas**;
- **tamaños y tipos de papel admitidos**;
- **ciclo de trabajo**;
- **memoria interna**;
- **conectividad**;
- **coste por página**;
- **consumibles**.

Una resolución nominal elevada no garantiza por sí sola mejor resultado. Influyen el motor, el papel, la tinta o tóner y el procesamiento.

## 6. Consumibles

### Inyección

- cartuchos de tinta;
- depósitos rellenables;
- cabezal integrado o separado;
- mantenimiento y limpieza.

### Láser

- tóner;
- tambor o unidad de imagen;
- fusor;
- recipiente de tóner residual, según modelo.

No debe confundirse tóner con tinta líquida. Tampoco debe suponerse que todos los consumibles están integrados en un único cartucho.

## 7. Impresora local y de red

### Local

Se conecta directamente a un equipo, normalmente por USB. Puede compartirse, aunque dependería del equipo anfitrión y de la configuración.

### De red

Dispone de conexión propia a la red, por cable o Wi‑Fi. Varios equipos pueden enviar trabajos sin depender de un PC anfitrión concreto.

Para una impresora inalámbrica, el equipo y la impresora deben estar accesibles en la misma red o mediante el servicio configurado.

## 8. Controlador, puerto y cola

- **controlador**: traduce órdenes del sistema a instrucciones compatibles con la impresora;
- **puerto de impresora**: ruta lógica de comunicación;
- **cola**: lista de trabajos pendientes;
- **spooler**: servicio que administra la cola y entrega trabajos;
- **trabajo de impresión**: documento enviado con una configuración concreta.

Cancelar un documento en la aplicación no siempre elimina un trabajo que ya está en la cola.

## 9. Impresora predeterminada

La impresora predeterminada es la seleccionada automáticamente cuando una aplicación no elige otra. No es necesariamente la única instalada ni la físicamente más próxima.

Antes de imprimir debe comprobarse:

- impresora seleccionada;
- páginas;
- orientación;
- tamaño de papel;
- color o escala de grises;
- copias;
- doble cara;
- bandeja;
- vista previa.

## 10. Incidencias habituales

### Sin conexión

Puede deberse a:

- impresora apagada;
- cable desconectado;
- pérdida de red;
- dirección o puerto incorrectos;
- controlador defectuoso;
- cola detenida.

### Atasco de papel

Debe seguirse la ruta indicada por el fabricante, retirar el papel sin forzar mecanismos y comprobar fragmentos, guías y bandejas.

### Trabajos bloqueados

Orden razonable:

1. comprobar la cola;
2. pausar o cancelar el trabajo problemático;
3. verificar estado físico y conexión;
4. reiniciar impresora o servicio cuando proceda;
5. reenviar tras confirmar configuración.

### Mala calidad

Puede relacionarse con consumibles, cabezales, tambor, fusor, alineación, suciedad, papel o configuración.

## 11. Seguridad y administración

En entornos administrativos:

- evitar dejar documentación sensible en la bandeja;
- utilizar impresión segura con PIN cuando exista;
- revisar destinatario y dispositivo;
- no instalar controladores de origen desconocido;
- borrar trabajos o almacenamiento interno según la política del organismo;
- limitar acceso a funciones de escaneado o libreta de direcciones.

## 12. Errores frecuentes de examen

1. Confundir impresora física y Microsoft Print to PDF.
2. Confundir tóner y tinta.
3. Afirmar que una multifunción solo es dispositivo de salida.
4. Equiparar cola de impresión con impresora.
5. Creer que una impresora de red debe estar conectada por USB a cada PC.
6. Confundir dpi con páginas por minuto.
7. Suponer que cancelar en Word vacía siempre la cola.
8. Considerar el controlador como componente físico.
