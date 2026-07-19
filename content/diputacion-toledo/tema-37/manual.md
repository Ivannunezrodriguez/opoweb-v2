# Tema 37. LibreOffice 24 III. Elaboración y uso de bases de datos con LibreOffice 24 Base

## 1. Concepto de base de datos

Una base de datos es un conjunto organizado de datos relacionados que permite almacenar, consultar, actualizar y presentar información de forma estructurada.

LibreOffice Base es el componente de LibreOffice destinado a trabajar con bases de datos. Puede:

- crear bases de datos nuevas;
- abrir bases de datos existentes;
- conectarse a fuentes externas;
- diseñar tablas, consultas, formularios e informes;
- ejecutar operaciones de búsqueda, filtrado y ordenación.

> ⚠️ **¡Foco Examen!:** Base no es una hoja de cálculo. Calc organiza información en celdas; Base trabaja con tablas relacionadas, registros, campos y consultas.

## 2. El archivo de Base

El formato nativo de LibreOffice Base es **ODB**.

El archivo ODB puede contener:

- la definición de tablas;
- consultas;
- formularios;
- informes;
- configuración de la conexión;
- macros y otros objetos auxiliares.

Cuando Base se conecta a una base externa, el archivo ODB puede actuar principalmente como contenedor de la conexión y de los objetos de trabajo, mientras que los datos permanecen en el sistema gestor externo.

| Situación | Ubicación principal de los datos |
|---|---|
| Base de datos incrustada | Dentro del archivo **ODB** |
| Conexión a base externa | En el servidor o archivo externo |
| Fuente registrada | En la fuente original |

> ⚠️ **¡Foco Examen!:** Guardar un archivo ODB conectado a una base externa no significa que todos los datos del servidor se copien dentro del archivo.

## 3. Objetos principales de Base

La ventana principal organiza el trabajo en cuatro objetos esenciales:

| Objeto | Función |
|---|---|
| Tabla | Almacena datos en campos y registros |
| Consulta | Selecciona, combina, filtra, calcula u ordena datos |
| Formulario | Facilita la introducción y edición de datos |
| Informe | Presenta datos con formato para consulta o impresión |

### 3.1. Tablas

Las tablas constituyen la estructura básica de almacenamiento.

### 3.2. Consultas

Las consultas recuperan datos según criterios definidos y pueden combinar varias tablas.

### 3.3. Formularios

Los formularios proporcionan una interfaz más cómoda que la tabla para introducir, revisar o modificar registros.

### 3.4. Informes

Los informes organizan los datos para su lectura, agrupación, impresión o distribución.

> ⚠️ **¡Foco Examen!:** La tabla almacena; la consulta selecciona; el formulario introduce o edita; el informe presenta.

## 4. Tablas, campos y registros

Una tabla está formada por:

- **campos**, que corresponden a columnas;
- **registros**, que corresponden a filas.

Ejemplo:

| id_empleado | nombre | departamento | fecha_alta |
|---:|---|---|---|
| 1 | Ana | Intervención | 2026-01-15 |
| 2 | Luis | Recaudación | 2026-02-01 |

En este ejemplo:

- `nombre` es un campo;
- la fila de Ana es un registro;
- `id_empleado` puede actuar como clave primaria.

> ⚠️ **¡Foco Examen!:** Campo equivale a columna; registro equivale a fila.

## 5. Tipos de datos

Cada campo debe tener un tipo de dato adecuado.

| Tipo | Uso habitual |
|---|---|
| Texto | Nombres, códigos, descripciones |
| Número | Cantidades y valores calculables |
| Fecha | Fechas sin componente de hora |
| Hora | Horas |
| Fecha/hora | Instantes completos |
| Sí/No | Valores lógicos |
| Decimal | Importes y medidas |
| Imagen u objeto binario | Contenido binario, si el motor lo admite |

Elegir bien el tipo de dato:

- evita errores;
- reduce espacio;
- mejora búsquedas y ordenación;
- permite aplicar validaciones correctas.

> ⚠️ **¡Foco Examen!:** Un teléfono o un código postal suele almacenarse como texto, porque no se utiliza para operaciones aritméticas y puede contener ceros iniciales.

## 6. Clave primaria

La clave primaria identifica de forma única cada registro de una tabla.

Debe cumplir:

- unicidad;
- ausencia de duplicados;
- estabilidad;
- valor no nulo.

Puede ser:

- simple, si utiliza un solo campo;
- compuesta, si utiliza varios campos.

Una práctica habitual es utilizar un campo numérico autoincremental.

| Concepto | Regla |
|---|---|
| Clave primaria | Identifica unívocamente cada registro |
| Índice único | Impide duplicados, pero no sustituye necesariamente la clave primaria |
| Clave ajena | Referencia la clave de otra tabla |

> ⚠️ **¡Foco Examen!:** Una tabla puede tener una sola clave primaria, aunque esta pueda estar formada por varios campos.

## 7. Propiedades de los campos

Al diseñar una tabla pueden establecerse propiedades como:

- longitud;
- valor predeterminado;
- entrada obligatoria;
- formato;
- autovalor;
- decimales;
- índice;
- descripción.

### Valor predeterminado

Se aplica cuando el usuario no introduce otro valor.

### Entrada obligatoria

Impide guardar registros sin contenido en ese campo, salvo que el motor admita otro comportamiento.

### Autovalor

Genera automáticamente valores, normalmente consecutivos, para campos identificadores.

> ⚠️ **¡Foco Examen!:** Valor predeterminado no equivale a campo obligatorio: un campo puede tener valor predeterminado y, aun así, permitir su modificación.

## 8. Relaciones entre tablas

Las relaciones permiten conectar datos de varias tablas sin repetir información innecesariamente.

Ejemplo:

```text
DEPARTAMENTO
- id_departamento (PK)
- nombre

EMPLEADO
- id_empleado (PK)
- nombre
- id_departamento (FK)
```

Tipos de relación:

| Relación | Ejemplo |
|---|---|
| Uno a uno | Un empleado y una ficha exclusiva |
| Uno a muchos | Un departamento tiene muchos empleados |
| Muchos a muchos | Empleados participan en muchos cursos y cada curso tiene muchos empleados |

Una relación muchos a muchos suele resolverse mediante una tabla intermedia.

> ⚠️ **¡Foco Examen!:** La relación más habitual es uno a muchos. La tabla del lado “muchos” contiene normalmente la clave ajena.

## 9. Integridad referencial

La integridad referencial evita referencias inválidas entre tablas relacionadas.

Puede impedir:

- insertar una clave ajena que no exista en la tabla principal;
- borrar un registro principal que todavía esté referenciado;
- modificar una clave sin actualizar sus referencias.

Según el motor, pueden configurarse acciones en cascada:

- actualizar en cascada;
- eliminar en cascada;
- restringir la operación;
- establecer valores nulos.

> ⚠️ **¡Foco Examen!:** Eliminar en cascada puede borrar automáticamente registros relacionados. No es una simple ocultación.

## 10. Consultas

Las consultas permiten obtener una vista de datos sin alterar necesariamente las tablas de origen.

Pueden:

- seleccionar campos;
- establecer criterios;
- ordenar;
- agrupar;
- calcular;
- combinar tablas;
- eliminar duplicados;
- limitar resultados.

### 10.1. Consulta de selección

Recupera registros que cumplen condiciones.

Ejemplo conceptual:

```sql
SELECT nombre, departamento
FROM empleados
WHERE activo = TRUE
ORDER BY nombre;
```

### 10.2. Criterios

Los criterios pueden utilizar:

- igualdad: `=`;
- desigualdad: `<>`;
- mayor o menor: `>`, `<`, `>=`, `<=`;
- intervalos;
- comodines;
- operadores lógicos `AND`, `OR`, `NOT`;
- comprobación de nulos.

### 10.3. Ordenación

Puede ser:

- ascendente;
- descendente;
- por uno o varios campos.

> ⚠️ **¡Foco Examen!:** Una consulta de selección muestra datos según criterios; no modifica por sí sola los registros de origen.

## 11. SQL y vista de diseño

Base permite trabajar mediante:

- asistente;
- vista de diseño;
- vista SQL.

SQL es el lenguaje utilizado para definir, consultar y manipular datos en sistemas relacionales.

Sentencias básicas:

| Sentencia | Función |
|---|---|
| `SELECT` | Consultar |
| `INSERT` | Insertar |
| `UPDATE` | Actualizar |
| `DELETE` | Eliminar |
| `CREATE TABLE` | Crear una tabla |

> ⚠️ **¡Foco Examen!:** `DELETE` elimina registros; `DROP TABLE` elimina la tabla completa, si el motor lo permite.

## 12. Formularios

Los formularios facilitan la interacción con los datos.

Pueden incluir:

- cuadros de texto;
- cuadros combinados;
- listas;
- botones;
- casillas de verificación;
- etiquetas;
- controles de fecha;
- subformularios.

Un formulario puede estar vinculado a:

- una tabla;
- una consulta;
- una instrucción SQL.

### Subformularios

Permiten mostrar datos relacionados, por ejemplo:

- formulario principal: departamento;
- subformulario: empleados del departamento seleccionado.

> ⚠️ **¡Foco Examen!:** El formulario no sustituye a la tabla. Es una interfaz para visualizar o modificar los datos de una fuente vinculada.

## 13. Informes

Los informes presentan datos de forma estructurada y apta para impresión.

Pueden contener:

- encabezados;
- pies;
- agrupaciones;
- totales;
- campos calculados;
- numeración;
- imágenes;
- ordenación.

Los datos de un informe suelen proceder de una tabla o consulta.

| Formulario | Informe |
|---|---|
| Pensado para interacción | Pensado para presentación |
| Puede permitir edición | Normalmente no edita datos |
| Uso en pantalla | Uso en pantalla o impresión |

> ⚠️ **¡Foco Examen!:** El informe presenta información; el formulario está orientado a la entrada y edición.

## 14. Ordenación, búsqueda y filtrado

En tablas y formularios pueden aplicarse:

- orden ascendente o descendente;
- filtro automático;
- filtro estándar;
- filtro por selección;
- búsqueda de registros.

Filtrar no elimina registros: solo limita temporalmente los visibles.

> ⚠️ **¡Foco Examen!:** El filtro oculta temporalmente los registros que no cumplen el criterio; no los borra.

## 15. Importación y conexión a fuentes externas

Base puede trabajar con distintos orígenes, según controladores y componentes disponibles:

- hojas de cálculo;
- archivos de texto;
- bases de datos relacionales;
- conexiones JDBC u ODBC;
- libretas de direcciones;
- otras fuentes registradas.

### JDBC

Utiliza controladores Java.

### ODBC

Utiliza la infraestructura de conectividad de bases de datos del sistema operativo.

> ⚠️ **¡Foco Examen!:** Conectarse por JDBC u ODBC no convierte automáticamente la base externa en una base incrustada dentro del ODB.

## 16. Registro de bases de datos

Una base registrada puede utilizarse como fuente de datos desde otros componentes de LibreOffice, especialmente Writer.

Esto permite, por ejemplo:

- combinación de correspondencia;
- etiquetas;
- cartas personalizadas;
- inserción de campos de base de datos.

> ⚠️ **¡Foco Examen!:** Registrar una base de datos la hace accesible para LibreOffice; no significa publicarla ni compartirla externamente.

## 17. Seguridad y copias de respaldo

Buenas prácticas:

- realizar copias periódicas del archivo ODB y de la base externa;
- evitar editar simultáneamente una base incrustada sin soporte multiusuario;
- restringir permisos;
- usar contraseñas y cifrado cuando el sistema lo permita;
- cerrar correctamente la base antes de copiarla;
- verificar restauraciones.

En bases externas, la seguridad depende también del gestor, servidor, usuarios, roles y permisos configurados.

> ⚠️ **¡Foco Examen!:** Copiar solo el archivo ODB puede ser insuficiente cuando los datos están alojados en un servidor externo.

## 18. Atajos y operaciones habituales

| Acción | Atajo habitual |
|---|---|
| Nuevo documento | **Ctrl + N** |
| Abrir | **Ctrl + O** |
| Guardar | **Ctrl + S** |
| Buscar | **Ctrl + F** |
| Deshacer | **Ctrl + Z** |
| Rehacer | **Ctrl + Y** |
| Copiar | **Ctrl + C** |
| Cortar | **Ctrl + X** |
| Pegar | **Ctrl + V** |

Los atajos pueden variar según contexto, sistema operativo o configuración.

## 19. Esquema final

```text
LIBREOFFICE BASE
├─ Archivo nativo: ODB
├─ Objetos
│  ├─ Tablas: almacenan
│  ├─ Consultas: seleccionan y calculan
│  ├─ Formularios: introducen y editan
│  └─ Informes: presentan e imprimen
├─ Estructura
│  ├─ Campo = columna
│  ├─ Registro = fila
│  ├─ Clave primaria = identificación única
│  └─ Clave ajena = relación
├─ Relaciones
│  ├─ Uno a uno
│  ├─ Uno a muchos
│  └─ Muchos a muchos
├─ Consultas
│  ├─ Criterios
│  ├─ Ordenación
│  ├─ Agrupación
│  └─ SQL
└─ Conectividad
   ├─ Base incrustada
   ├─ JDBC
   ├─ ODBC
   └─ Fuentes registradas
```

> ⚠️ **¡Foco Examen!:** La secuencia conceptual esencial es tabla para almacenar, consulta para seleccionar, formulario para introducir y editar, e informe para presentar.