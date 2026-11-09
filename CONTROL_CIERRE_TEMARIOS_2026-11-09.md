# Control de cierre jurídico-editorial de los temarios — **09/11/2026**

**Objetivo:** no confundir el desarrollo de archivos y la superación de pruebas automáticas con el cierre jurídico y funcional de OpoWeb. Los estados se han contrastado con los cinco manifiestos de `data/`, no con notas antiguas.

## 1. Inventario exacto

| Oposición | Temas | Estado en manifiesto | Tema y prueba pendientes |
|---|---:|---|---|
| **La Puebla C2** | **19** | **19 APROBADO_USUARIO** (histórico) | Recertificación jurídica transversal actual |
| **Diputación Toledo Administrativo C1** | **40** | **39 AUDITADO**, **1 EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES** | **T22 OAPGT**, original + corrección + reformas |
| **Diputación Toledo Auxiliar C2** | **20** | **19 AUDITADO**, **1 BORRADOR** | **T6 OAPGT**, misma investigación jurídica |
| **Olías del Rey C2** | **22** | **21 AUDITADO**, **1 EN_AUDITORIA** | **T13**, inventario municipal completo de vías |
| **UC3M C2** | **20** | **20 EN_REVISION_USUARIO** (desarrollados con reserva normativa) | Fecha primaria de corte y revalidación integral |

**Resultado agregado:** **121 temas**; **79** con estado `AUDITADO`, **19** con aprobación histórica, **20** en revisión y **3** pendientes de documentación primaria. **Ninguna categoría anterior implica certificación jurídica-funcional integral del conjunto de OpoWeb.**

## 2. Avance demostrado en el OAPGT

### 2.1. Reforma estatutaria de 2011: control parcial terminado

Se leyó el PDF oficial y se comprobó también **visualmente su única página**: [**BOP Toledo n.º 284, 14/12/2011, anuncio I-11024**](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011), modificación aprobada por el **Pleno de Diputación el 28/11/2011**.

| Pieza certificada de **esa publicación de 2011** | Contenido cotejado |
|---|---|
| **Art. 1.1 y 1.2** | Organismo autónomo de la Diputación, adscrito al **Presidente de la Diputación** |
| **Art. 8 bis** | Resoluciones de órganos de gobierno, dirección y administración que ponen fin a la vía administrativa |
| **Art. 4.a** | Delegación/encomienda de funciones: tributos, sanciones, procedimientos catastrales y revisión administrativa |
| **Art. 14.d.1** | Facultades resolutorias y de gestión administrativa en ámbito atribuido |
| **Disposición adicional** | Organigrama aprobado por **Consejo Rector**; identidad de instructores publicada por **Presidencia OAPGT** |

**Efecto comprobable en OpoWeb:**

- [**Ficha literal verificada de 2011**](content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-2011-verificado.md), con tabla y caso práctico.
- [**Manual C1 T22**](content/diputacion-toledo/tema-22/manual.md) y [**Manual C2 T6**](content/diputacion-toledo-auxiliar-c2/tema-06/manual.md) incorporan un apartado de comprobación visual y una trampa de órganos.
- [**Matriz C1 T22**](content/diputacion-toledo/tema-22/matriz.json) actualizada; [**matriz C2 T6**](content/diputacion-toledo-auxiliar-c2/tema-06/matriz.json) **creada** y enlazada en su manifiesto.
- [**Validador OAPGT + bloqueos**](tests/validate-oapgt-fuentes-primarias-20261109.mjs) integrado en [**CI de GitHub**](.github/workflows/validate.yml).

> ⚠️ **¡Foco Examen!:** La atribución al **Consejo Rector** de aprobar el organigrama de instructores y a la **Presidencia** de publicar su identidad son funciones **distintas**. El **Pleno** es el órgano que aprueba la reforma estatutaria de **2011**.

### 2.2. Por qué C1 T22 y C2 T6 siguen abiertos

Faltan pruebas primarias suficientes y comparables para establecer **composición orgánica, quórums, mayorías y régimen vigente completo en 2026**:

| Documento o comprobación | Evidencia y estado |
|---|---|
| **BOP 235, 11/10/1996**, Estatutos definitivos originarios | Identificado mediante reproducción histórica y referencias posteriores; **no se cotejó visualmente texto oficial íntegro** |
| **BOP 253, 04/11/1996**, corrección del artículo 8 | Existe reproducción histórica; **no se cotejó imagen oficial de la corrección** |
| **BOP de 23/12/2004**, propuesta de reforma amplia | Texto **inicial** localizado; **aprobación definitiva, eficacia y redacción final no acreditadas** |
| **BOP 284/2011** | **Cinco ordinales modificativos comprobados textual y visualmente** |
| Reforma y aplicación **2012–2026** | Existen cotejos parciales oficiales, pero no se ha demostrado exhaustividad de todas las modificaciones |
| Actualización del temario | **No** declarar ningún número de vocales, mayoría o quórum actual a partir únicamente de fuentes históricas |

**Puerta de cierre:** obtener los originales oficiales y sus reformas, componer tabla artículo por artículo con vigencia y corregir/validar las **24 preguntas del C1 T22** y las **29 del C2 T6** frente al texto completo. Solo entonces pasar sus estados a `AUDITADO`.

## 3. Olías del Rey — T13: cierre aún no justificado

Fuente [**INE — Callejero del Censo Electoral**](https://www.ine.es/prodyser/callejero/): desde **julio de 2025** aplica un nuevo diseño de registro; la publicación de **julio de 2026** corresponde a fecha de referencia **30/06/2026**.

- **Necesario:** ZIP oficial **Toledo (45)** con **VIAS** y **PSEU**, filtro INE **45122 Olías del Rey**; depuración de duplicados y comparación con fuentes municipales de servicios.
- **No obtenido/cotejado:** listado íntegro del ZIP de referencia. **No** usar callejeros comerciales o una captura de mapas como sustituto de completitud.
- **Situación:** **21 preguntas/84 alternativas** y manual operativo, pero **T13 EN_AUDITORIA**.

> ⚠️ **¡Foco Examen!:** El número de filas **TRAM** no es el número de calles. Para identificar nombres de vía deben contrastarse **VIAS/PSEU** y su municipio.

## 4. UC3M — 20 temas desarrollados, sin certificación normativa

La [**convocatoria BOE-A-2026-14624, base primera.7**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) fija la legislación exigible en la **fecha de publicación de la resolución de listas definitivas y anuncio del ejercicio**, **no** en el día de examen.

- El [**portal oficial UC3M**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) identifica la resolución definitiva de admitidos, pero **la fecha primaria de publicación de esa resolución no se ha podido acreditar en la documentación recuperada**.
- El dato **01/10/2026** permanece como **indicio secundario**, no como corte confirmado.
- Falta revalidar legislación, bancos de preguntas, simulacros y eficacia normativa de las reformas contrastadas a la fecha oficial.
- **Mantener 20/20 EN_REVISION_USUARIO**.

> ⚠️ **¡Foco Examen!:** La **fecha del examen (21/11/2026)** no es automáticamente el **corte normativo**.

## 5. Condición técnica de cierre

**CI verde** significa integridad estructural de los controles que realmente ejecuta el workflow. No significa que se hayan revisado jurídicamente todos los distractores ni que se hayan ejecutado pruebas **E2E / WCAG** con móvil y escritorio.

**Norma de trabajo:** el estado de un tema solo se eleva después de verificar todas sus partes oficiales, cada norma temporal aplicable y el banco correspondiente; cada cambio debe registrar fuente, fecha, resultado y revisión funcional. Las fuentes secundarias solo orientan la búsqueda, **nunca** sustituyen el BOP o BOE al cerrar.
