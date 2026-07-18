# Tema 15 · Bloque 2 · Creación, copiado, movimiento, renombrado y borrado

**Estado:** EN REVISIÓN DEL USUARIO

## 1. Crear carpetas

Formas habituales:

- botón **Nuevo** del Explorador;
- menú contextual → **Nuevo → Carpeta**;
- `Ctrl + Mayús + N`.

Tras crearla se introduce un nombre. Si se confirma sin escribir, Windows asigna uno genérico que después puede cambiarse.

Una carpeta se crea dentro de la ubicación actualmente abierta. Conviene comprobar la barra de direcciones antes de crearla.

## 2. Crear archivos

Puede crearse un archivo:

- desde una aplicación mediante **Archivo → Nuevo** y **Guardar como**;
- desde el menú contextual, cuando existe una plantilla registrada;
- mediante otras herramientas autorizadas.

Al guardar se decide:

- ubicación;
- nombre;
- tipo o formato;
- opciones adicionales de la aplicación.

No debe confundirse **Guardar** con **Guardar como**:

- Guardar actualiza el archivo actual;
- Guardar como permite elegir otro nombre, ubicación o formato y puede generar una copia independiente.

## 3. Copiar

Copiar crea otro ejemplar en el destino y conserva el original.

Procedimiento por portapapeles:

1. seleccionar;
2. `Ctrl + C` o **Copiar**;
3. abrir destino;
4. `Ctrl + V` o **Pegar**.

Hasta que se pega, no existe la copia en el destino.

## 4. Cortar y mover

Cortar prepara el elemento para trasladarlo:

1. seleccionar;
2. `Ctrl + X`;
3. abrir destino;
4. `Ctrl + V`.

El resultado esperado es que el elemento deje la ubicación original y aparezca en el destino. En operaciones entre unidades, Windows puede realizar internamente copia y eliminación, por lo que el proceso puede tardar más.

Si hay un error, debe comprobarse el estado real en origen y destino antes de repetir.

## 5. Arrastrar y soltar

El resultado depende del contexto.

| Situación habitual | Resultado ordinario |
|---|---|
| misma unidad | mover |
| unidad diferente | copiar |
| mantener `Ctrl` | copiar |
| mantener `Mayús` | mover |
| mantener `Alt` | crear acceso directo |

El indicador junto al puntero informa de la acción prevista. Esta señal es más fiable que memorizar una regla sin contexto.

Arrastrar con botón derecho suele mostrar un menú al soltar para elegir copiar, mover o crear acceso directo.

## 6. Renombrar

Formas habituales:

- seleccionar y pulsar `F2`;
- menú contextual → **Cambiar nombre**;
- clic pausado sobre el nombre.

Renombrar no modifica el contenido. Si las extensiones están visibles, debe evitarse alterar accidentalmente la extensión.

Dos elementos de la misma carpeta no pueden compartir exactamente el mismo nombre y extensión.

## 7. Conflictos de nombre

Cuando el destino ya contiene un elemento con el mismo nombre, Windows puede ofrecer alternativas como:

- reemplazar;
- omitir;
- comparar información;
- conservar ambos mediante renombrado.

La decisión debe basarse en:

- fecha de modificación;
- tamaño;
- versión;
- contenido;
- necesidad de conservar evidencia o histórico.

En expedientes administrativos, reemplazar sin control puede destruir una versión relevante.

## 8. Borrar hacia la Papelera

En unidades locales compatibles:

- `Supr` o **Eliminar** suele mover el elemento a la Papelera;
- el espacio puede seguir ocupado hasta vaciarla;
- el elemento puede restaurarse a su ubicación original.

Restaurar:

1. abrir Papelera;
2. seleccionar;
3. elegir **Restaurar**.

Si la ubicación original ya no existe, puede ser necesario recrearla o elegir otro destino mediante operaciones manuales.

## 9. Eliminación sin Papelera

`Mayús + Supr` solicita eliminar sin pasar por la Papelera.

También puede no utilizarse Papelera en:

- recursos de red;
- algunas unidades extraíbles;
- elementos demasiado grandes para la configuración disponible;
- vaciado de Papelera;
- operaciones realizadas por determinadas aplicaciones o servicios.

“No aparece en la Papelera” no significa que nunca pueda recuperarse, pero ya exige copias de seguridad, historial, sistemas corporativos o herramientas especializadas. No debe darse por segura la recuperación.

## 10. Deshacer

`Ctrl + Z` puede revertir algunas operaciones recientes, como mover, copiar, renombrar o borrar, según el contexto.

No es una garantía universal. Puede dejar de estar disponible por:

- cierre de la ventana;
- nuevas operaciones;
- aplicación utilizada;
- origen o destino remoto;
- eliminación permanente.

## 11. Permisos y confirmación administrativa

Una operación puede fallar porque el usuario no tenga:

- permiso de lectura;
- permiso de escritura;
- permiso de modificación;
- permiso de eliminación;
- privilegio administrativo.

La elevación mediante Control de cuentas de usuario no sustituye permisos que no se poseen sobre un recurso de red o carpeta protegida.

## 12. Archivos en uso y sincronización

Un archivo abierto por otra aplicación o usuario puede estar bloqueado. Antes de forzar acciones:

- cerrar aplicaciones;
- comprobar usuarios conectados;
- esperar sincronización;
- confirmar que no haya una operación de copia en curso.

Con carpetas sincronizadas, el icono de estado puede indicar disponible localmente, solo en línea, sincronizando o error. Una copia local y un recurso en la nube no deben confundirse.

## 13. Copiar frente a copia de seguridad

Copiar un archivo manualmente no constituye por sí solo una estrategia de respaldo. Una copia de seguridad exige, según el caso:

- periodicidad;
- versiones;
- almacenamiento separado;
- control de acceso;
- restauración comprobada.

## 14. Casos prácticos

### Duplicar un expediente sin alterar el original

Usar copiar y pegar, verificar el destino y renombrar la copia de forma inequívoca.

### Trasladar documentación a otra carpeta del mismo proyecto

Usar cortar y pegar o arrastre controlado, comprobar el destino y validar que el origen quedó vacío solo de los elementos previstos.

### Borrar por error

Detener nuevas operaciones, revisar Papelera y restaurar. Si era red o eliminación permanente, acudir al sistema de copias o al administrador.

## 15. Errores frecuentes

1. Cortar y creer que el elemento ya se ha movido antes de pegar.
2. Repetir una copia porque tarda y crear duplicados.
3. Sustituir un archivo sin comparar versiones.
4. Suponer que toda eliminación pasa por Papelera.
5. Confiar en `Ctrl + Z` como copia de seguridad.
6. Cambiar una extensión al renombrar.
7. Confundir acceso directo con copia.
8. Forzar una operación sobre archivo bloqueado sin investigar la causa.
