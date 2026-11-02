# OpoWeb v2

Nueva plataforma de estudio para oposiciones administrativas, reconstruida desde cero tras archivar el repositorio legado `opoweb`.

## Regla principal

> **«Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.»**

Las reglas completas están en [`PROJECT_RULES.md`](PROJECT_RULES.md).

## Estado editorial actual — consulta obligatoria

**Punto único de verdad:** [AUDITORIA_CONTINUA.md](AUDITORIA_CONTINUA.md) (última conciliación **02/11/2026**). Incluye la **tarea activa exacta**, historial verificable y puertas de calidad. No empezar una nueva auditoría desde cero leyendo este README o un informe antiguo.

La plataforma contiene **cuatro programas activos y 99 temas registrados**: **La Puebla C2 (19)**, **Diputación Toledo Auxiliar C2 (20)**, **UC3M C2 (20)** y **Diputación Toledo Administrativo C1 (40)**. **Tema registrado no significa tema auditado.**

- **La Puebla C2:** **19/19** temas `APROBADO_USUARIO` con cierre **histórico de fase 2** en julio de 2026; las reformas y cambios posteriores requieren controles de vigencia.
- **Diputación Auxiliar C2:** **19 temas EN_REVISION_USUARIO** y **tema 6 BORRADOR**; el tema 6 del **OAPGT** queda **aplazado hasta el final** según decisión documentada del **29/10/2026**, sin considerarse terminado.
- **UC3M C2:** **20 EN_REVISION_USUARIO**. **250 preguntas temáticas** y, desde el **02/11/2026**, **3 simulacros de entrenamiento de 70 titulares + 5 reservas / 60 minutos**. Muestran **puntuación directa A − E/3**, nunca un aprobado simulado sin el corte del tribunal. [Guía de examen y fuentes](content/uc3m/GUIA_EXAMEN_2026.md).
- **Diputación Administrativo C1:** **40 con origen GENERACION_DESDE_CERO** en manifiesto heredado, **sin equivaler a APROBADO/PUBLICADO**; auditoría progresiva.

**No hay certificación integral actual de los 99 temas a 02/11/2026.** Las métricas de archivos, preguntas y validadores se deben interpretar en su **fecha/commit**, no como porcentajes de fiabilidad jurídica.

**Bloque urgente activo a 02/11/2026:** `PUEBLA-EXAM-2026-11-14` — controles por bloques de plazos, respuestas y simulacros conforme al primer examen del **14/11/2026**; después `UC3M-EXAM-2026-11-21`. El bloque `DT-C2-A` (**temas 1–5 de Diputación Auxiliar C2**) queda **conservado y temporalmente aplazado**, no reiniciado. El **tema 6 OAPGT** permanece al final del programa C2. Consultar siempre el registro principal y su marcador antes de cada ejecución. **Los avisos al usuario se reservan a incidencias significativas que requieran atención.**

## Fuente del programa

BOP de Toledo número 82, de 5 de mayo de 2026, código de verificación `2026.00001965`.

El programa literal está registrado en [`data/programa.json`](data/programa.json).

## Arquitectura inicial de La Puebla (esquema histórico, no inventario actual)

```text
opoweb-v2/
├─ assets/
│  ├─ app.js
│  ├─ icon.svg
│  └─ styles.css
├─ content/
│  └─ la-puebla/
│     ├─ tema-01/
│     ├─ tema-02/
│     ├─ tema-03/
│     ├─ tema-04/
│     ├─ tema-05/
│     ├─ tema-06/
│     ├─ tema-07/
│     ├─ tema-08/
│     ├─ tema-09/
│     ├─ tema-10/
│     ├─ tema-11/
│     ├─ tema-12/
│     ├─ tema-13/
│     ├─ tema-14/
│     ├─ tema-15/
│     ├─ tema-16/
│     ├─ tema-17/
│     ├─ tema-18/
│     └─ tema-19/
│        ├─ manual.md
│        ├─ cinco capítulos
│        ├─ matriz.json
│        ├─ aprobacion.md
│        ├─ fuentes.md
│        └─ preguntas.json
├─ data/
│  └─ programa.json
├─ tests/
│  └─ validate.mjs
├─ PROJECT_RULES.md
├─ index.html
├─ manifest.json
└─ sw.js
```

No existen manifiestos con centenares de scripts, módulos versionados superpuestos ni parches de interfaz. La aplicación lee directamente datos y contenido declarativo.

## Temas de La Puebla con aprobación editorial histórica

### Tema 1

Constitución española de 1978: estructura, reforma constitucional, derechos y deberes fundamentales, garantías y suspensión. Cobertura principal de los artículos 10–55 y 166–169 de la Constitución.

### Tema 2

Ley 39/2015: disposiciones generales, interesados, identificación y firma, normas generales de actuación y términos y plazos. Cobertura de los artículos 1–33.

### Tema 3

Ley 39/2015: derechos del interesado, iniciación, ordenación, instrucción, finalización, tramitación simplificada y ejecución. Cobertura de los artículos 53–105, con las especialidades sancionadoras y de responsabilidad patrimonial integradas.

### Tema 4

Ley 39/2015: revisión de oficio y recursos administrativos, artículos 106–126. Incluye la aplicación local de los artículos 52–53 de la Ley 7/1985 y la competencia del Pleno para declarar la lesividad.

### Tema 5

Municipio, organización y funcionamiento, provincia, competencias y régimen electoral local. Incluye Constitución, Ley 7/1985, ROF y LOREG, con la jurisprudencia constitucional relevante sobre el artículo 197.

### Tema 6

Ley 4/2011 de empleo público de Castilla-La Mancha: clases de personal, OEP, selección, carrera, promoción interna y provisión. Incluye la modificación vigente del artículo 70.2 efectuada por la Ley 2/2026.

### Tema 7

Ley 31/1995 de Prevención de Riesgos Laborales: derechos y obligaciones, servicios preventivos, consulta, Delegados de Prevención, Comité de Seguridad y Salud y colaboración inspectora. Incluye el desarrollo funcional de los artículos 10–22 bis del Real Decreto 39/1997.

### Tema 8

Ley 12/2010 de Igualdad entre Mujeres y Hombres de Castilla-La Mancha y Ley Orgánica 3/2007 para la igualdad efectiva: conceptos antidiscriminatorios, transversalidad, empleo público y privado, planes, acoso, representación equilibrada y políticas sectoriales. Incluye trazabilidad individual de los 65 artículos autonómicos y los 78 artículos de la Ley Orgánica.

### Tema 9

Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales: principios, bases jurídicas, derechos, tratamientos específicos, responsable, encargado, DPD, AEPD, procedimientos, infracciones, régimen de las Administraciones públicas y derechos digitales. Incluye el RGPD como complemento imprescindible y trazabilidad de los artículos 1–97 y 53 bis.

### Tema 10

Principios de tributación local, delegación, colaboración, beneficios fiscales y compensación; obligaciones y obligados tributarios; deuda, extinción y procedimientos de gestión. Incluye los artículos 6–12 del TRLRHL y los bloques 17–48, 58–76 y 117–140 de la LGT, con trazabilidad individual y delimitación respecto de recaudación y tributos locales concretos.

### Tema 11

Recaudación de tributos locales: periodo voluntario, aplazamiento, fraccionamiento, compensación, devoluciones, periodo ejecutivo y procedimiento de apremio. Manual modular en seis capítulos, con trazabilidad del TRLRHL, la LGT, el Reglamento General de Recaudación y el RD 520/2005.

### Tema 12

Tributos municipales y ordenanzas fiscales; naturaleza, hecho imponible, no sujeción y sujetos pasivos del IBI, IAE, IVTM e IIVTNU. Incluye los artículos 15–19, 56–64, 78–83, 92–94 y 104–106 del TRLRHL, con las exenciones imprescindibles para distinguirlas de la no sujeción.

### Tema 13

Administración electrónica y certificados: identificación frente a firma; firma simple, avanzada y cualificada; sellos; tipos y soportes de certificado; prestadores, autoridades raíz y de registro; listas de confianza; validación, revocación, sellado de tiempo, entrega, conservación y sistemas propios de las Administraciones públicas. Incluye eIDAS actualizado, Ley 6/2020, Leyes 39/2015 y 40/2015 y Real Decreto 203/2021.

### Tema 14

Ley 40/2015: órganos administrativos, competencia, órganos colegiados, abstención y recusación; estructura central, ministerial, territorial y exterior de la Administración General del Estado. Incluye los artículos 5–24 y 54–80, el artículo 55 bis sobre presencia equilibrada y la delimitación respecto del sector público institucional.

### Tema 15

Microsoft Windows I: Explorador de archivos; creación, copiado, movimiento, renombrado y borrado; Papelera; unidades locales y de red; rutas UNC y unidades asignadas; impresión, cola y Microsoft Print to PDF; digitalización, resolución, formatos y OCR. Windows 11 es la referencia principal y la trazabilidad se apoya en documentación oficial de Microsoft Support y Microsoft Learn.

### Tema 16

Microsoft Windows II: conceptos de Internet y web; navegación, pestañas, favoritos, historial y descargas; cookies, caché, privacidad, HTTPS, certificados, SmartScreen e InPrivate; configuración, perfiles, sincronización, extensiones y lector PDF de Microsoft Edge; situación heredada de Internet Explorer 11 y compatibilidad mediante el modo Internet Explorer de Edge.

### Tema 17

LibreOffice y Microsoft Office I: procesamiento de textos con Microsoft Word y LibreOffice Writer; entorno y formatos DOCX/ODT; edición, búsqueda y corrección; formato directo, párrafos, estilos y listas; páginas, secciones, encabezados, tablas e imágenes; comentarios, control de cambios, combinación de correspondencia, impresión, PDF y accesibilidad. Incluye las diferencias operativas esenciales entre Word y Writer.

### Tema 18

LibreOffice y Microsoft Office II: hojas de cálculo con Microsoft Excel y LibreOffice Calc; libros, hojas, celdas, rangos y formatos XLSX/ODS/CSV; fórmulas, operadores, referencias y funciones; formato condicional, tablas, validación y protección; ordenación, filtros, subtotales y tablas dinámicas; gráficos, impresión, PDF y accesibilidad. Incluye las diferencias operativas esenciales entre Excel y Calc.

### Tema 19

Conceptos generales del ordenador personal: hardware, software, firmware y controladores; placa base, CPU, RAM, HDD, SSD, GPU, alimentación, refrigeración y UEFI; periféricos; impresoras y colas; escáneres y OCR; discos externos, memorias USB, sistemas de archivos y expulsión segura; lectores y grabadores de CD y DVD. Incluye las diferencias esenciales entre RAM y almacenamiento, USB-C y versión USB, disco físico y volumen, impresora y cola, escáner y OCR, lector y grabador.

La afirmación histórica de que los bancos estaban vacíos **ha quedado superada**: el cierre de fase 2 documentó **228 preguntas (12 por tema), 20 supuestos y 3 simulacros**. **Situación del 02/11/2026:** se mantienen las **228 preguntas** y **20 supuestos**, y hay **5 simulacros**: tres de repaso y dos de **50 preguntas + 5 reservas** con **60 minutos** y corrección penalizada conforme a las bases. Estos recursos no sustituyen la comprobación jurídica y funcional de la versión actual; consultar [AUDITORIA_CONTINUA.md](AUDITORIA_CONTINUA.md).

## Criterio de publicación

Un tema debe aportar epígrafe literal, matriz normativa o técnica, desarrollo sistemático, fuentes oficiales, trazabilidad y aprobación expresa del usuario. Las pruebas automáticas comprueban integridad, pero no sustituyen la revisión humana.

## Desarrollo local

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080`.

## Validación

```bash
npm test
```

Los informes históricos acreditan controles de **La Puebla** en un commit concreto. Ejecutar `npm test` sobre el commit actual y revisar GitHub Actions antes de afirmar que la versión vigente supera las pruebas; no asegurar funcionamiento sin conexión sin comprobarlo.
