# OpoWeb v2

Nueva plataforma de estudio para oposiciones administrativas, reconstruida desde cero tras archivar el repositorio legado `opoweb`.

## Regla principal

> **«Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.»**

Las reglas completas están en [`PROJECT_RULES.md`](PROJECT_RULES.md).

## Estado editorial actual — **10/11/2026**, cinco manifiestos

**Registro principal y limitaciones de certificación:** [AUDITORIA_CONTINUA.md](AUDITORIA_CONTINUA.md). Los informes históricos no sustituyen los estados del manifiesto actual. **Total: 121 temas**.

| Convocatoria | Temas | `AUDITADO` | `APROBADO_USUARIO` histórico | Aún pendientes | Progreso editorial declarado |
|---|---:|---:|---:|---:|---:|
| La Puebla de Montalbán C2 | **19** | **8** | **11** | **0** | **100 %** (8 auditados, 11 históricos) |
| Olías del Rey Auxiliar edificios C2 | **22** | **22** | **0** | **0** | **100 %** |
| Diputación Toledo Administrativo C1 | **40** | **39** | **0** | **1** (T22 OAPGT) | **97,5 %** |
| Diputación Toledo Auxiliar C2 | **20** | **19** | **0** | **1** (T6 OAPGT) | **95 %** |
| UC3M Auxiliar Administrativa C2 | **20** | **17** | **0** | **3** (T10/T15/T16) | **85 %** |
| **TOTAL** | **121** | **105** | **11** | **5** | **116/121 = 95,9 % de estados editoriales combinados** |

**Interpretación:** la barra de **95,9 %** **no es fiabilidad jurídica ni certificación integral**. El total desagregado es **105/121 (86,8 %) en estado AUDITADO**, **11/121 (9,1 %) con aprobación histórica de La Puebla**, **5/121 (4,1 %) en revisión/borrador**. El proyecto **no acredita certificación integral de extremo a extremo de ninguno de los 121 temas (0/121)**: faltan en distinto grado contraste actualizado, pruebas reales de navegador, móvil, accesibilidad y aceptación exigida por sus reglas.

**Bloqueos editoriales exactos:** **UC3M T10/T15/T16** siguen a la espera de la acreditación primaria de fecha de publicación de definitivos y cotejos jurídicos/transitorios integrales; **Diputación C1 T22 y C2 T6** requieren prueba de eficacia definitiva de reforma OAPGT anunciada inicialmente en **2004**, posibles normas posteriores y acabar régimen laboral. **El PDF estatutario íntegro hasta 2011 YA ha sido aportado y trabajado**: no presentarlo como ausente. **Olías T13** tiene inventario INE de **280 entradas VIAS** verificado documentalmente, sin prueba completa E2E.

**CI verificado:** [GitHub Actions del commit `47fe9db7`](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42772686384) con **90/90 pasos satisfactorios** y despliegue GitHub Pages de ese commit finalizado con éxito. **No** equivale a validación jurídica/funcional completa de todo lo expuesto.

**Riesgos conocidos adicionales:** discrepancia **BOP/BOE** sobre plazas y días de solicitud en Olías; día primario preciso de publicación de definitivos UC3M sin diligencia localizada (dato **01/10/2026** secundario, evidencia de existencia antes de **07/10/2026**); y `sw.js` configurado para baja/caché, sin garantía de estudio **offline**. Mantener priorizados los exámenes de **La Puebla 14/11/2026** y **UC3M 21/11/2026**.

**Migración documental del 10/11/2026:** La Puebla **T01–T08** pasan a `AUDITADO` sobre los cotejos individuales de **04/11** y controles posteriores; quedan **11** aprobaciones históricas. Se conservan las aprobaciones originales del usuario de julio y sigue sin acreditarse certificación integral E2E. [Registro de evidencia](AUDITORIA_CONTINUA.md).

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
