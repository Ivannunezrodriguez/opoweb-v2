# Tema 19 · Bloque 4 · Discos duros externos y memorias USB

**Estado:** APROBADO POR EL USUARIO

## 1. Almacenamiento externo

Un dispositivo de almacenamiento externo conserva datos fuera de la unidad interna principal y puede conectarse o desconectarse. El epígrafe menciona expresamente discos duros externos y memorias USB.

No todo almacenamiento externo es extraíble del mismo modo. Un disco de red, una nube o una tarjeta SD son conceptos relacionados, pero no equivalen a una memoria USB.

## 2. HDD externo

Un HDD externo contiene un disco magnético y una carcasa con interfaz. Características:

- gran capacidad;
- coste por GB generalmente reducido;
- partes móviles;
- sensibilidad a golpes y vibraciones durante uso;
- mayor consumo que muchas memorias flash;
- posible alimentación por USB o adaptador propio.

Puede ser portátil o de sobremesa. Los modelos de sobremesa suelen usar fuente externa.

## 3. SSD externo

Un SSD externo utiliza memoria no volátil sin partes mecánicas móviles. Suele ofrecer:

- menor latencia;
- mayor velocidad, si interfaz y controlador lo permiten;
- menor ruido;
- mejor tolerancia al movimiento ordinario;
- coste diferente según capacidad y tecnología.

La velocidad real queda limitada por el elemento más lento: memoria, controlador, puerto, cable, protocolo, cifrado o sistema.

## 4. Memoria USB

Una memoria USB o pendrive integra memoria flash, controlador y conector. No contiene un disco giratorio.

Características:

- tamaño reducido;
- alimentación por el puerto;
- fácil transporte;
- capacidad y velocidad variables;
- ciclos de escritura finitos;
- riesgo elevado de pérdida física;
- facilidad para transportar malware o datos sensibles.

No debe usarse como única copia de información importante.

## 5. Conector e interfaz

Una unidad puede usar USB-A o USB-C. Debe distinguirse:

- forma del conector;
- protocolo de datos;
- velocidad anunciada;
- compatibilidad del cable;
- alimentación disponible.

Un adaptador cambia la forma de conexión, pero no garantiza aumentar la velocidad. Un cable de carga puede no ofrecer las mismas prestaciones de datos que otro cable USB-C.

## 6. Capacidad y rendimiento

### Capacidad

Se expresa en GB o TB. La capacidad útil puede ser menor por:

- diferencias de unidades decimales y binarias;
- sistema de archivos;
- particiones;
- software incluido;
- áreas reservadas.

### Rendimiento

Depende de:

- lectura y escritura secuencial;
- operaciones aleatorias;
- tamaño de archivo;
- caché;
- temperatura;
- ocupación;
- puerto y cable;
- cifrado;
- calidad del dispositivo.

Copiar miles de archivos pequeños puede ser más lento que copiar un archivo grande con igual tamaño total.

## 7. Inicialización, partición, volumen y formato

Un dispositivo nuevo puede requerir:

1. inicialización;
2. creación de particiones;
3. creación o asignación de volumen;
4. elección de sistema de archivos;
5. asignación de letra o punto de montaje.

Formatear prepara el sistema de archivos. Puede destruir la estructura anterior. Antes debe comprobarse el dispositivo correcto y existir copia de la información necesaria.

## 8. Sistemas de archivos habituales

### FAT32

- amplia compatibilidad;
- limitaciones de tamaño de archivo y funciones;
- útil en dispositivos heredados.

### exFAT

- diseñado para almacenamiento flash y archivos grandes;
- buena compatibilidad entre sistemas modernos;
- menos funciones de seguridad que NTFS.

### NTFS

- sistema habitual de Windows;
- permisos, registro y otras funciones avanzadas;
- compatibilidad de escritura limitada en algunos dispositivos o sistemas ajenos.

No existe un sistema universalmente mejor. La elección depende de tamaño de archivo, seguridad y compatibilidad.

## 9. Conexión y reconocimiento

Al conectar una unidad:

- Windows detecta el dispositivo;
- carga el controlador;
- monta el volumen;
- puede asignar una letra;
- aparece en el Explorador si el volumen es accesible.

Si no aparece, pueden existir problemas de cable, puerto, alimentación, controlador, partición, letra, sistema de archivos o daño físico.

## 10. Caché y expulsión segura

Windows puede usar políticas de **extracción rápida** o **mejor rendimiento**. Con caché de escritura, retirar el dispositivo antes de completar operaciones puede provocar:

- pérdida de archivos;
- corrupción del sistema de archivos;
- documentos incompletos;
- necesidad de reparación.

Práctica segura:

1. cerrar archivos abiertos;
2. esperar a que termine la copia;
3. usar Expulsar o Quitar hardware de forma segura;
4. esperar confirmación;
5. desconectar sin forzar el conector.

Aunque una política permita extracción rápida, expulsar sigue siendo una práctica prudente y ayuda a detectar operaciones pendientes.

## 11. Copia, sincronización y copia de seguridad

- **copiar**: crear otra instancia de datos;
- **mover**: cambiar ubicación y eliminar el origen tras completar;
- **sincronizar**: mantener ubicaciones coordinadas según reglas;
- **copia de seguridad**: copia gestionada para recuperación ante pérdida o alteración.

Una memoria USB que contiene la única versión no constituye una copia de seguridad.

## 12. Seguridad

Riesgos:

- pérdida o robo;
- acceso no autorizado;
- malware;
- manipulación de archivos;
- dispositivos falsificados;
- capacidad anunciada incorrecta;
- conectores dañados.

Medidas:

- cifrado cuando proceda;
- control de dispositivos autorizados;
- análisis antimalware;
- no ejecutar archivos desconocidos;
- inventario y etiquetado;
- borrado seguro antes de reutilizar o desechar;
- no conectar dispositivos encontrados o de origen incierto.

## 13. Errores frecuentes de examen

1. Confundir memoria USB con disco duro externo.
2. Afirmar que USB-C determina siempre la velocidad.
3. Confundir formato y borrado ordinario.
4. Creer que una letra equivale a un disco físico.
5. Retirar el dispositivo mientras se escribe.
6. Considerar una única copia externa como respaldo.
7. Suponer que un adaptador mejora el rendimiento.
8. Elegir FAT32, exFAT o NTFS sin atender a compatibilidad y tamaño.
