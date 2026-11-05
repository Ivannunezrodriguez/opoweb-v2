# Cierre técnico-pedagógico agrupado · Diputación de Toledo C1 temas 36–39

**Fecha de auditoría:** **05/11/2026**. **Programa de partida:** Anexo VII de la convocatoria de Administrativo/a C1 de Diputación de Toledo, referenciado en OpoWeb al **BOP 118 de 25/06/2026, CSV 2026.00002934**. La literalidad de los cuatro epígrafes coincide con el manifiesto validado en la fase anterior; el presente bloque verifica principalmente documentación técnica del fabricante.

**Objeto:** **4 manuales**, **4 fichas de fuentes**, **4 matrices con trazabilidad y cobertura**, **4 bancos de 20 preguntas = 80 preguntas / 320 alternativas**. **13 ítems redundantes sustituidos**, sin cambiar los **80 identificadores** ni sus índices de respuesta. **No** se incluyen pruebas de navegación real, móviles, accesibilidad o funcionamiento offline, que siguen pendientes a escala transversal.

## Resultados técnicos de cada tema

| Tema | Fuentes primarias técnicas | Cambios y distinciones de examen | Ítems reformulados |
|---|---|---|---:|
| **36 · LibreOffice 24 Calc** | [Ayuda Calc: F4 y referencias](https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html) y [guía española 24.8](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) | Referencias mixtas copiadas, SI, CONTAR.SI; en guía española **Ctrl + G guardar**, frente a internacional **Ctrl + S** | **4** |
| **37 · LibreOffice 24 Base** | [Diseño de consultas](https://help.libreoffice.org/latest/es/text/sdatabase/02010100.html), [formularios](https://help.libreoffice.org/latest/es/text/sdatabase/04000000.html) y [guía 24.8](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) | **COUNT(*)** vs **COUNT(campo)** con nulos, parámetros `:Nombre`, subformularios, filas criterios **AND/OR** y guardar español **Ctrl + G** | **3** |
| **38 · LibreOffice 24 Impress** | [Ayuda de atajos de Impress](https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html), [transiciones](https://help.libreoffice.org/latest/es/text/simpress/01/06040000.html), [guía 24.8](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) | **Ctrl + Mayús + G** agrupa, **Ctrl + Mayús + K** combina; transición de diapositiva vs animación de objeto; **Ctrl + G** guarda en distribución española | **1** |
| **39 · Componentes del ordenador** | [Intel: memoria gráfica integrada](https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html), [Intel: fuentes](https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html), [Intel: interfaz térmica](https://www.intel.com/content/www/us/en/gaming/resources/how-to-apply-thermal-paste.html) y [Microsoft: Secure Boot](https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/secure-boot) | Memoria GPU integrada compartida, **kB vs KiB**, potencia nominal no consumo obligatorio, pasta térmica, **UEFI vs Secure Boot** | **5** |

> ⚠️ **¡Foco Examen!:** **Ctrl + G** guarda en la guía de LibreOffice **24.8 en español**. El **Ctrl + Mayús + G** de Impress agrupa objetos y el **Ctrl + Mayús + K** los combina. En Base **COUNT(*)** cuenta filas, mientras **COUNT(campo)** excluye valores nulos. Y **1 kB = 1.000 bytes**, no **1.024**.

## IDs de preguntas sustituidas

| ID | Pregunta nueva | Respuesta exacta en el banco |
|---|---|---|
| **DIP-T36-014** | Al copiar la fórmula =$A2+B$1 desde C2 a C3, ¿cómo queda? | =$A3+B$1 |
| **DIP-T36-015** | Si A1 contiene 7, ¿qué devuelve =SI(A1>=5;"APTO";"NO APTO") en Calc? | APTO |
| **DIP-T36-016** | En A1:A4 hay 3, 7, 9 y 5. ¿Qué devuelve =CONTAR.SI(A1:A4;">5")? | 2 |
| **DIP-T36-020** | Según la guía oficial de LibreOffice 24.8 en español para Windows, ¿qué atajo guarda el documento de Calc? | Ctrl + G |
| **DIP-T37-015** | En una consulta SQL de Base, ¿qué diferencia existe entre COUNT(*) y COUNT(campo)? | COUNT(*) cuenta filas; COUNT(campo) excluye los valores NULL del campo |
| **DIP-T37-018** | En LibreOffice Base, ¿cómo se representa normalmente un parámetro de consulta que se solicita al ejecutar? | Con dos puntos delante del nombre, por ejemplo :Departamento |
| **DIP-T37-019** | ¿Para qué sirve un subformulario de LibreOffice Base vinculado a un formulario principal? | Para mostrar o editar registros relacionados con el registro del formulario principal |
| **DIP-T38-019** | ¿Qué atajo usa Impress en Windows para combinar los objetos seleccionados en un único objeto (distinto de agruparlos)? | Ctrl + Mayús + K |
| **DIP-T39-013** | En un equipo con gráficos integrados Intel, ¿qué memoria suele utilizar la GPU para sus datos gráficos? | Memoria RAM del sistema, compartida con otras tareas |
| **DIP-T39-014** | ¿Qué cantidad representa exactamente el prefijo decimal 1 kB? | 1.000 bytes |
| **DIP-T39-016** | ¿Qué implica una fuente de alimentación con potencia nominal de 750 W en un PC? | Que puede suministrar esa potencia según especificación, no que consuma siempre 750 W |
| **DIP-T39-018** | ¿Cuál es la función de la pasta térmica colocada entre CPU y disipador? | Mejorar la transmisión térmica al llenar irregularidades microscópicas de contacto |
| **DIP-T39-019** | ¿Qué finalidad principal tiene el arranque seguro (Secure Boot) como función de UEFI? | Comprobar firmas del software de arranque para ejecutar componentes considerados de confianza |

## Inventario completo de bancos y referencias

| Tema | Ítems | Alternativas | Sustituciones | Estado |
|---|---:|---:|---:|---|
| **36** | **20** | **80** | **4** | **AUDITADO** documental |
| **37** | **20** | **80** | **3** | **AUDITADO** documental |
| **38** | **20** | **80** | **1** | **AUDITADO** documental |
| **39** | **20** | **80** | **5** | **AUDITADO** documental |
| **Total** | **80** | **320** | **13** | **Sin certificación funcional integral** |

### Tema 36 — identidades, respuestas y trazabilidad

| Identificador | Respuesta correcta | Fuente/documentación |
|---|---|---|
| **DIP-T36-001** | ODS | content/diputacion-toledo/tema-36/manual.md#1-concepto-y-finalidad |
| **DIP-T36-002** | = | content/diputacion-toledo/tema-36/manual.md#5-fórmulas-y-operadores |
| **DIP-T36-003** | $A$1 | content/diputacion-toledo/tema-36/manual.md#6-referencias-relativas-absolutas-y-mixtas |
| **DIP-T36-004** | Cambia de forma relativa | content/diputacion-toledo/tema-36/manual.md#6-referencias-relativas-absolutas-y-mixtas |
| **DIP-T36-005** | CONTAR | content/diputacion-toledo/tema-36/manual.md#7-funciones-esenciales |
| **DIP-T36-006** | 7 | content/diputacion-toledo/tema-36/manual.md#5-fórmulas-y-operadores |
| **DIP-T36-007** | Alternar tipos de referencia | content/diputacion-toledo/tema-36/manual.md#6-referencias-relativas-absolutas-y-mixtas |
| **DIP-T36-008** | Los oculta temporalmente | content/diputacion-toledo/tema-36/manual.md#10-ordenación-y-filtros |
| **DIP-T36-009** | Una división entre cero | content/diputacion-toledo/tema-36/manual.md#8-errores-frecuentes |
| **DIP-T36-010** | Protegerse también la hoja | content/diputacion-toledo/tema-36/manual.md#15-protección |
| **DIP-T36-011** | Varias hojas y gráficos | content/diputacion-toledo/tema-36/manual.md#16-importación-exportación-y-compatibilidad |
| **DIP-T36-012** | Ctrl + 1 | content/diputacion-toledo/tema-36/manual.md#17-atajos-esenciales |
| **DIP-T36-013** | $A$1 | https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html |
| **DIP-T36-014** | =$A3+B$1 | LibreOffice Calc referencias · https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html |
| **DIP-T36-015** | APTO | LibreOffice Calc, funciones lógicas · https://help.libreoffice.org/latest/es/text/scalc/01/04060100.html |
| **DIP-T36-016** | 2 | LibreOffice Calc, funciones por categoría · https://help.libreoffice.org/latest/es/text/scalc/01/04060100.html |
| **DIP-T36-017** | Cuenta las dos celdas no vacías | https://help.libreoffice.org/latest/es/text/scalc/02/08080000.html |
| **DIP-T36-018** | 9 | https://help.libreoffice.org/latest/es/text/scalc/01/func_sum.html |
| **DIP-T36-019** | Mostrar un valor alternativo | https://help.libreoffice.org/latest/es/text/scalc/01/04060104.html |
| **DIP-T36-020** | Ctrl + G | LibreOffice 24.8, Guía de iniciación, apéndice A · https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html |

### Tema 37 — identidades, respuestas y trazabilidad

| Identificador | Respuesta correcta | Fuente/documentación |
|---|---|---|
| **DIP-T37-001** | ODB | content/diputacion-toledo/tema-37/manual.md#2-el-archivo-de-base |
| **DIP-T37-002** | Una columna | content/diputacion-toledo/tema-37/manual.md#4-tablas-campos-y-registros |
| **DIP-T37-003** | Identificar de forma única cada registro | content/diputacion-toledo/tema-37/manual.md#6-clave-primaria |
| **DIP-T37-004** | La tabla del lado muchos | content/diputacion-toledo/tema-37/manual.md#8-relaciones-entre-tablas |
| **DIP-T37-005** | Consulta | content/diputacion-toledo/tema-37/manual.md#3-objetos-principales-de-base |
| **DIP-T37-006** | Muestra datos según criterios sin alterar el origen | content/diputacion-toledo/tema-37/manual.md#101-consulta-de-selección |
| **DIP-T37-007** | Formulario | content/diputacion-toledo/tema-37/manual.md#12-formularios |
| **DIP-T37-008** | Presentar y preparar datos para lectura o impresión | content/diputacion-toledo/tema-37/manual.md#13-informes |
| **DIP-T37-009** | Oculta temporalmente los registros que no cumplen el criterio | content/diputacion-toledo/tema-37/manual.md#14-ordenación-búsqueda-y-filtrado |
| **DIP-T37-010** | Puede contener la conexión y objetos mientras los datos permanecen en el servidor | content/diputacion-toledo/tema-37/manual.md#2-el-archivo-de-base |
| **DIP-T37-011** | JDBC usa controladores Java y ODBC la infraestructura de conectividad del sistema | content/diputacion-toledo/tema-37/manual.md#15-importación-y-conexión-a-fuentes-externas |
| **DIP-T37-012** | SELECT | content/diputacion-toledo/tema-37/manual.md#11-sql-y-vista-de-diseño |
| **DIP-T37-013** | Herramientas > Relaciones | https://help.libreoffice.org/latest/es/text/sdatabase/05020000.html |
| **DIP-T37-014** | Una base de datos relacional que admita relaciones | https://help.libreoffice.org/latest/es/text/sdatabase/05020000.html |
| **DIP-T37-015** | COUNT(*) cuenta filas; COUNT(campo) excluye los valores NULL del campo | LibreOffice Base, diseño de consulta, recuento · https://help.libreoffice.org/latest/es/text/sdatabase/02010100.html |
| **DIP-T37-016** | Se eliminan también registros relacionados en la tabla dependiente | https://help.libreoffice.org/latest/es/text/sdatabase/05020100.html |
| **DIP-T37-017** | Actualización en cascada | https://help.libreoffice.org/latest/es/text/sdatabase/05020100.html |
| **DIP-T37-018** | Con dos puntos delante del nombre, por ejemplo :Departamento | LibreOffice Base, consulta con parámetros · https://help.libreoffice.org/latest/es/text/sdatabase/02010100.html |
| **DIP-T37-019** | Para mostrar o editar registros relacionados con el registro del formulario principal | LibreOffice Base, formularios y subformularios · https://help.libreoffice.org/latest/es/text/sdatabase/04000000.html |
| **DIP-T37-020** | Ctrl + Mayús + F4 | https://help.libreoffice.org/latest/es/text/shared/guide/database_main.html |

### Tema 38 — identidades, respuestas y trazabilidad

| Identificador | Respuesta correcta | Fuente/documentación |
|---|---|---|
| **DIP-T38-001** | ODP | content/diputacion-toledo/tema-38/manual.md#1-concepto-y-finalidad |
| **DIP-T38-002** | Clasificador de diapositivas | content/diputacion-toledo/tema-38/manual.md#vistas-principales |
| **DIP-T38-003** | Ctrl + M | content/diputacion-toledo/tema-38/manual.md#4-diapositivas-y-diseños |
| **DIP-T38-004** | Se conserva, pero no se muestra en la presentación ordinaria | content/diputacion-toledo/tema-38/manual.md#4-diapositivas-y-diseños |
| **DIP-T38-005** | El patrón de diapositivas | content/diputacion-toledo/tema-38/manual.md#5-patrones-temas-y-plantillas |
| **DIP-T38-006** | El cambio entre diapositivas | content/diputacion-toledo/tema-38/manual.md#9-transiciones-y-animaciones |
| **DIP-T38-007** | F5 | content/diputacion-toledo/tema-38/manual.md#10-presentación-de-diapositivas |
| **DIP-T38-008** | Mayús + F5 | content/diputacion-toledo/tema-38/manual.md#10-presentación-de-diapositivas |
| **DIP-T38-009** | Servir de apoyo privado al expositor | content/diputacion-toledo/tema-38/manual.md#11-notas-comentarios-y-folletos |
| **DIP-T38-010** | Imprimir varias diapositivas por página | content/diputacion-toledo/tema-38/manual.md#11-notas-comentarios-y-folletos |
| **DIP-T38-011** | Crea un archivo apropiado para distribución | content/diputacion-toledo/tema-38/manual.md#12-impresión-y-exportación |
| **DIP-T38-012** | Mostrar una selección de diapositivas en un orden determinado | content/diputacion-toledo/tema-38/manual.md#presentación-personalizada |
| **DIP-T38-013** | Esc | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-014** | B | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-015** | W | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-016** | Número de diapositiva seguido de Intro | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-017** | Editar texto | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-018** | F4 | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-019** | Ctrl + Mayús + K | LibreOffice Impress, atajos de teclado · https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |
| **DIP-T38-020** | Ctrl + Mayús + G | https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html |

### Tema 39 — identidades, respuestas y trazabilidad

| Identificador | Respuesta correcta | Fuente/documentación |
|---|---|---|
| **DIP-T39-001** | Ejecutar instrucciones y coordinar operaciones | content/diputacion-toledo/tema-39/manual.md#4-unidad-central-de-proceso |
| **DIP-T39-002** | Es memoria volátil de trabajo | content/diputacion-toledo/tema-39/manual.md#51-memoria-ram |
| **DIP-T39-003** | 8 bits | content/diputacion-toledo/tema-39/manual.md#14-unidades-de-información |
| **DIP-T39-004** | M.2 es un formato y NVMe un protocolo | content/diputacion-toledo/tema-39/manual.md#63-interfaces-y-formatos |
| **DIP-T39-005** | La placa base | content/diputacion-toledo/tema-39/manual.md#3-la-placa-base |
| **DIP-T39-006** | Describe principalmente la forma del conector | content/diputacion-toledo/tema-39/manual.md#101-usb |
| **DIP-T39-007** | Utiliza almacenamiento como apoyo a la RAM | content/diputacion-toledo/tema-39/manual.md#53-memoria-virtual |
| **DIP-T39-008** | El SSD carece de partes mecánicas móviles | content/diputacion-toledo/tema-39/manual.md#62-ssd |
| **DIP-T39-009** | Inicializa hardware y localiza el mecanismo de arranque | content/diputacion-toledo/tema-39/manual.md#131-bios-y-uefi |
| **DIP-T39-010** | RJ-45 | content/diputacion-toledo/tema-39/manual.md#103-red |
| **DIP-T39-011** | La fuente de alimentación | content/diputacion-toledo/tema-39/manual.md#8-fuente-de-alimentación |
| **DIP-T39-012** | Caché de CPU | content/diputacion-toledo/tema-39/manual.md#42-caché |
| **DIP-T39-013** | Memoria RAM del sistema, compartida con otras tareas | Intel: gráficos integrados y memoria del sistema · https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html |
| **DIP-T39-014** | 1.000 bytes | Manual de componentes, unidades de información · content/diputacion-toledo/tema-39/manual.md#14-unidades-de-información |
| **DIP-T39-015** | Un protocolo de comunicación con almacenamiento no volátil | NVM Express · https://nvmexpress.org/SPECIFICATIONS/ |
| **DIP-T39-016** | Que puede suministrar esa potencia según especificación, no que consuma siempre 750 W | Intel: potencia de fuentes de alimentación · https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html |
| **DIP-T39-017** | 1024 bytes | content/diputacion-toledo/tema-39/manual.md |
| **DIP-T39-018** | Mejorar la transmisión térmica al llenar irregularidades microscópicas de contacto | Intel: funcionamiento de la pasta térmica · https://www.intel.com/content/www/us/en/gaming/resources/how-to-apply-thermal-paste.html |
| **DIP-T39-019** | Comprobar firmas del software de arranque para ejecutar componentes considerados de confianza | Microsoft Learn: Secure Boot · https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/secure-boot |
| **DIP-T39-020** | Está integrada en un procesador o plataforma, en lugar de ser una tarjeta gráfica dedicada independiente | content/diputacion-toledo/tema-39/manual.md |


## Garantías de integración

- Los **80 índices de respuesta** se conservan conforme a los bancos anteriores al lote. Todas las preguntas conservan **4 alternativas diferentes**, justificante, trampa de examen, fuente y literal de la respuesta válida.
- La prueba `tests/validate-diputacion-c1-t36-t39-cierre-20261105.mjs` comprueba los **80 ID**, las **80 claves**, **320 alternativas**, coherencia `correcta`–`respuestaLiteral`, formato OpoWeb y hechos materiales corregidos.
- Los tests históricos de cierre **32–35** y previos aceptan progresos posteriores sin reabrir su contenido ya comprobado.
- El estado global editorial pasa de **34/121** a **38/121 temas documentados**, con **83/121** pendientes. El **tema C1 22** permanece bloqueado por los Estatutos OAPGT originales y modificaciones íntegras. El tema **40** de periféricos también queda pendiente.
- La **certificación integral** no se acredita con estas pruebas: falta comprobación transversal de **navegador real, móvil, accesibilidad y PWA**.

**Bloque siguiente:** por secuencia, **C1 tema 40** y, separado, **C1 tema 22** solo tras obtener el texto oficial completo de los Estatutos OAPGT; después continuar por nuevas convocatorias no cerradas.
