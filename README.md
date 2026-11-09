# OpoWeb v2

Nueva plataforma de estudio para oposiciones administrativas, reconstruida desde cero tras archivar el repositorio legado `opoweb`.

## Regla principal

> **«Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.»**

Las reglas completas están en [`PROJECT_RULES.md`](PROJECT_RULES.md).

## Estado editorial actual — consulta obligatoria (**09/11/2026**)

**Fuente principal de trazabilidad:** [AUDITORIA_CONTINUA.md](AUDITORIA_CONTINUA.md). Para una síntesis pormenorizada, consultar [ESTADO_GENERAL_OPOWEB_2026-11-09.md](ESTADO_GENERAL_OPOWEB_2026-11-09.md). El estado registrado en cada manifiesto tiene prioridad sobre resúmenes antiguos del README. Los cinco programas suman **121 temas**.

| Convocatoria | Temas | Estado documental a 09/11/2026 | Reserva |
|---|---:|---|---|
| La Puebla de Montalbán C2 | **19** | **19 APROBADO_USUARIO** históricos de julio | Falta recertificación jurídica global de noviembre |
| Diputación Toledo Administrativo C1 | **40** | **39 AUDITADO** | **T22 OAPGT** pendiente de estatutos íntegros |
| Diputación Toledo Auxiliar C2 | **20** | **19 AUDITADO** | **T6 OAPGT**, todavía BORRADOR |
| Olías del Rey Auxiliar de edificios C2 | **22** | **22 AUDITADO** | **T13 cerrado editorialmente** con 280 registros VIAS del INE (30/06/2026); E2E pendiente |
| UC3M Auxiliar Administrativa C2 | **20** | **17 AUDITADO**, **3 EN_REVISION_USUARIO** (T10/T15/T16) | Anexo I definitivo firmado 30/09/2026; publicación de resolución pendiente |

**Lectura correcta de contadores (09/11/2026, tras los documentos INE y UC3M aportados):** **97/121** temas con estado **AUDITADO** actual (39 Diputación C1, 19 Diputación C2, 22 Olías y 17 UC3M); **19/121** aprobados históricamente en La Puebla; **5/121** pendientes editoriales (C1 T22, C2 T6 y UC3M T10/T15/T16). Estas categorías **no equivalen** a certificación integral. **0/121** temas cuentan con cierre jurídico-editorial, técnico, funcional y de accesibilidad demostrado de extremo a extremo.

**Bancos y preparación:** UC3M conserva **260 preguntas temáticas** y **3 simulacros de 70 titulares + 5 de reserva**, con corrección de **A − E/3**, según bases. Olías cuenta con **279 preguntas temáticas**, **40 psicotécnicas** y dos simulacros de 50+20. Diputación C1 tiene **807 preguntas**, incluyendo 24 del T22 OAPGT. Los tests automatizados de integridad y coherencia no equivalen a verificar jurídicamente todos los distractores. El estado de la web debe verificarse en navegador real.

**CI:** [validación GitHub Actions completada satisfactoriamente](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42577252425) para commit `518e2326d5f2`: **67 pasos correctos** (incluidos montaje de Node, sintaxis, tests por programas y controles finales). Se han reparado tests antiguos con cifras obsoletas de Diputación C1 y Olías. **No confundir** el resultado del flujo de validación con el de despliegue de GitHub Pages: son ejecuciones distintas.

**Puntos críticos:** Olías tiene discrepancias BOP/BOE sobre **número de plazas** y **20 días naturales/hábiles**; evitar afirmar que están resueltas. UC3M exige fecha primaria de listas definitivas (base 1.7) para fechar qué legislación entra; el **01/10/2026** sigue como dato secundario no certificado. El `sw.js` está configurado para darse de baja y borrar cachés, por lo que **no se garantiza uso sin conexión** pese a disponer de `manifest.json`.

**Prioridades de la siguiente fase:** cerrar documentos oficiales OAPGT; acreditar publicación de resolución UC3M y corte legal T10/T15/T16; controles jurídicos frase a frase; pruebas manuales E2E en móvil/escritorio, WCAG y persistencia; depurar divergencias entre textos informativos y estados formales. No sustituir pruebas por más contenido de repaso.

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
npm test            # batería básica
npm run test:all    # batería extendida: cinco programas, test jurídicos focales y Radar en Node
```

La CI incorpora además comprobaciones Python y sintaxis. Los informes históricos acreditan controles de **La Puebla** en un commit concreto. Ejecutar `npm test` sobre el commit actual y revisar GitHub Actions antes de afirmar que la versión vigente supera las pruebas; no asegurar funcionamiento sin conexión sin comprobarlo.
