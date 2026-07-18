# Tema 15 · Bloque 4 · Impresión de documentos

**Estado:** EN REVISIÓN DEL USUARIO

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
