# OpoWeb v2 — Estado editorial único y cola de reanudación

## Prioridad de ejecución fijada por el usuario — 08/11/2026

**Orden obligatorio de auditoría y cierre:** **1.º Olías del Rey (Auxiliar de edificios C2) → 2.º Diputación de Toledo (Administrativo C1) → 3.º Universidad Carlos III de Madrid (Auxiliar C2)**. Este orden sustituye las prioridades previas que entren en conflicto. Terminar los controles posibles de una convocatoria antes de pasar a la siguiente; si falta una fuente primaria imprescindible (Olías T13 callejero INE o Diputación C1 T22 Estatutos OAPGT), conservar expresamente el bloqueo sin atribuir 100 % ni insistir indefinidamente y proseguir al siguiente destino. No adelantar La Puebla ni Diputación Auxiliar C2 sobre estas tres por inercia de planes históricos. Seguir exigiendo evidencias jurídicas, pedagógicas y funcionales y no alterar etiquetas de certificación sin pruebas.


**Estado contrastado con los manifiestos y documentos del repositorio:** **02/11/2026**.
**Ámbito:** contenido y fiabilidad para estudiar. No equivale al seguimiento administrativo en tiempo real de convocatorias.
**Este es el ÚNICO documento de estado editorial operativo.** Los restantes informes fechados son **evidencia histórica**, no órdenes de reanudación ni certificados actuales. Conservar su contenido y sus commits.

## 1. Cómo leer el estado sin confusiones

1. **Programa registrado**: el tema existe como entrada del anexo en un manifiesto. No acredita contenido.
2. **Manual disponible**: hay material para leer; puede ser borrador, incompleto o tener errores.
3. **Auditoría documental**: epígrafe, desarrollo, matrices, fuentes y preguntas están cotejados con documentación oficial y fecha.
4. **Prueba técnica**: JSON, enlaces, test, navegación, visualización y versiones de la web superan comprobaciones reproducibles.
5. **Cierre de fiabilidad**: se cumplen los controles jurídicos, pedagógicos, técnicos y editoriales; se conserva evidencia y la aprobación exigida por las reglas del proyecto.

**No sumes estos porcentajes:** son fases distintas. **100 % de archivos disponibles NO significa 100 % fiable**. La etiqueta `PUBLICADO` del código legado llegó a usarse como «contenido visible», sin implicar las fases 3–5. El estado jurídico posterior a la fecha de una validación histórica vuelve a requerir control.

## 2. Estado global verificado contra cinco manifiestos — **10/11/2026**

**Fuente de verdad del contador:** `data/programa.json` (**La Puebla**), `data/programa-olias-auxiliar-edificios-2026.json`, `data/programa-diputacion-administrativo-2026.json`, `data/programa-diputacion-auxiliar-c2-2026.json` y `data/programa-uc3m-auxiliar-administrativa-2026.json`. **No** extrapolar estados de los informes de 02/11/2026 a la rama actual.

| Convocatoria | Temas | `AUDITADO` | `APROBADO_USUARIO` histórico | Pendiente editorial | Progreso de estado registrado |
|---|---:|---:|---:|---:|---:|
| **La Puebla de Montalbán · Auxiliar C2** | **19** | **0** | **19** | **0** | **19/19 = 100 %**, aprobación **histórica**, sin recertificación jurídica de noviembre |
| **Olías del Rey · Auxiliar edificios C2** | **22** | **22** | **0** | **0** | **22/22 = 100 %**, auditoría editorial; E2E pendiente |
| **Diputación Toledo · Administrativo C1** | **40** | **39** | **0** | **1** (T22 OAPGT) | **39/40 = 97,5 %** |
| **Diputación Toledo · Auxiliar C2** | **20** | **19** | **0** | **1** (T6 OAPGT) | **19/20 = 95 %** |
| **UC3M · Auxiliar C2** | **20** | **17** | **0** | **3** (T10/T15/T16) | **17/20 = 85 %** |
| **TOTAL** | **121** | **97** | **19** | **5** | **116/121 = 95,9 % editorial mixto** |

**Barra general (etiquetas editoriales, no calidad certificada):** `[████████████████░░░░] 97 AUDITADO + 19 APROBADO_USUARIO históricos + 5 pendientes`.

**Certificación integral acreditada: 0/121 (0 %)**. Implica legislación y versiones vigentes, cotejo exhaustivo de todas las preguntas y alternativas, E2E real en navegador y móvil, accesibilidad y evidencia/aceptación; **no** equivale a que haya 121 contenidos incorrectos. El porcentaje **95,9 %** tampoco puede interpretarse como exactitud jurídica verificada.

**Cola de cinco temas:** **UC3M T10** (fecha primaria de publicación de listas y cierre jurídico/funcional), **UC3M T15** (Estatutos adaptados a LOSU, corte y cotejo completo), **UC3M T16** (corte y normas académicas, controles E2E), **Diputación C1 T22** y **C2 T6** (Estatutos OAPGT y Acuerdo Regulador, aprobación definitiva de reforma inicialmente anunciada en 2004, vigencia y resto del cotejo). El PDF estatutario completo **hasta 2011 ya se recibió**: **no** describirlo como fuente íntegra todavía inexistente.

**Estado tecnológico de referencia:** el commit `47fe9db7` superó **90/90 pasos de Validar OpoWeb v2** y **GitHub Pages**. Esa validación técnica no equivale a inspección real E2E, accesibilidad ni a certificación legal.

**Prioridad temporal:** examen **La Puebla 14/11/2026**; examen **UC3M 21/11/2026**. Mantener las reservas y priorizar correcciones con impacto directo en sus pruebas.


## 3. Cambios de estado y contradicciones relevantes

| Archivo / fuente | Lectura correcta | Acción para evitar errores |
|---|---|---|
| `data/programa.json` | **19 APROBADO_USUARIO**, aprobación editorial histórica de La Puebla | Mantener hito; **no** presentar como verificación legal de noviembre |
| `audit/PHASE2_CLOSURE.md`, `TRANSVERSAL_REVIEW.md` | Cierre verificable de **fase 2 en julio** sobre un commit, no garantía perpetua | Conservar como **histórico**, remitir aquí |
| `audit/phase2-ci-result.md` | Resultado de una **ejecución/commit determinado**, no de todos los commits siguientes | Conservar evidencia; no usar como prueba CI actual |
| `data/programa-diputacion-auxiliar-c2-2026.json` | El valor anterior `PUBLICADO` no estaba respaldado por una verificación completa; tema 6 sigue incompleto | Normalizar estados a **EN_REVISION_USUARIO** (19) y **BORRADOR** (tema 6) |
| `data/programa-diputacion-administrativo-2026.json` | `GENERACION_DESDE_CERO` es una etiqueta heredada de **método**, no certificación | No traducir automáticamente a publicado en la interfaz; dejar validador legado intacto hasta migración coordinada |
| `data/programa-uc3m-auxiliar-administrativa-2026.json` | 20 temas en revisión, **no 20 temas aprobados** | Conservar revisión transversal |
| `AUDIT_STATUS.md` y `README.md` | Ambos contenían bloques descritos como «actuales» pese a estar redactados desde julio | Hacerlos apuntar a este fichero; archivar extractos fechados |
| `docs/ROADMAP_PRIORIDADES_2026-07-18.md` | Refleja prioridades **antes** de la convocatoria de Diputación C2 | Tratarlo como histórico |
| `content/diputacion-toledo-auxiliar-c2/PLAN_EDITORIAL_Y_AUDITORIA.md` | Guarda una **decisión expresa del 29/10/2026**: **posponer el tema 6 del OAPGT al final** | **Respetar**: avanzar primero 1–5 y 7–20; dejar tema 6 en cola bloqueada |
| `JSON_ERRORS.md` | Antiguo error de tema 34 C1: el archivo concreto vuelve a analizarse como JSON, **sin nueva validación general** | No usar diagnóstico viejo como incidencia actual |
| `data/convocatorias.json` y `data/seguimiento-*.json` | Datos de **tramitación personal y publicaciones**, con fechas de verificación propias | No confundir con progreso editorial ni afirmar «abierto ahora» basándose en instantáneas antiguas |

**Inconsistencia RESUELTA (02/11/2026):** el histórico `audit/phase2-ci-result.md` daba **cuatro años** para programas temporales de interinidad, mientras `QA_FINAL_2026-07-18.md` afirmaba equivocadamente **dos años**. Comprobados **art. 8.1.c de Ley 4/2011 de Castilla-La Mancha** y **art. 10.1.c TREBEP**: el máximo es **cuatro años** en Castilla-La Mancha. Corregida la tabla falsa en `content/la-puebla/tema-06/manual.md`, reparado el informe histórico con errata expresa y actualizada la ficha editorial del tema. El banco de preguntas y el supuesto del tema ya recogían cuatro años. **No reabrir esta incidencia sin una reforma posterior acreditada.**

## 4. Hechos y correcciones ya realizados (no repetir)

- **Diputación C1 Tema 3:** afinada la diferencia **300–400 CE / 350 LOREG**, la elección del **Defensor del Pueblo** y ampliado el banco a **22 preguntas** (commits registrados en Git). **Revisión integral pendiente.**
- **Diputación C1 Tema 4:** ampliada la comparación de figuras de competencia, recusación y test (banco **21 preguntas**). **Revisión integral pendiente.**
- **Diputación C1 Tema 5:** corregida la explicación de los **10 días** de subsanación de representación conforme a los arts. **5.6 y 30.2 de la Ley 39/2015**, en manual y test. **Revisión integral pendiente.**
- **Diputación C2 Tema 6:** ficha de reforma oficial OAPGT **BOP 284/2011** documentada y enlazada; texto íntegro estatutario vigente y acuerdo laboral consolidado **aún pendientes**. **No está terminado y se reserva para el último bloque**.
- **Diputación C2 tests:** informe técnico histórico de **25/10/2026** sobre **138 preguntas / 19 bancos** y revisión normativa parcial; **no extrapolar a aprobación general**.
- **La Puebla fase 2:** cierre histórico y prueba de CI de commit documentados; **no eliminar ni revalidar desde cero**. Revisar únicamente cambios normativos, incidencias puntuales y funcionamiento de la versión actual.

## 5. Plan por BLOQUES (vigente desde 02/11/2026)

**BLOQUE URGENTE ACTIVO (02/11/2026): PUEBLA-EXAM-2026-11-14 — preparación y auditoría focalizada para el primer examen del 14/11/2026; después UC3M-EXAM-2026-11-21.** El bloque DT-C2-A (temas 1–5 de Diputación C2) queda **temporalmente aplazado y preservado**, no reiniciado. OAPGT tema 6 continúa al final.

**Objetivo:** cotejar como un conjunto los epígrafes oficiales, las reglas compartidas, los materiales ya existentes, todos los bancos de preguntas y las pruebas integradas de los temas 1–5. Guardar correcciones legales, matrices de cobertura y evidencias por sublotes. No reabrir por sistema una comprobación ya acreditada. Si un sublote no puede finalizarse, conservar el marcador exacto en esta sección.

**Marcador de reanudación (actualizado 03/11/2026, §24):** controles jurídicos focalizados **La Puebla T14: Ley 40/2015 arts. 10 (avocación excepcional) y 17.2–4 (quórum, constitución sin convocatoria, portavoces, urgencia)**; **UC3M T14: LOSU arts. 45.3 y 46.3 (mínimos 25 %/10 % de estudiantes, 10 % PTGAS en Gobierno, 51 % PDI específico del Claustro)**. En UC3M **T14-002** se sustituyó pregunta genérica por una sobre el **25 % del Claustro**, cambiando deliberadamente respuesta de **B a C**; LP14 T14-004 y T14-005 conservan **B**. **CI de OpoWeb v2: SUCCESS** comprobado en run **41654320401** para commit `a506e967` antes de este registro; **Pages aún en cola** y auditoría jurídica integral no certificada. **Siguiente punto:** examen UC3M **T15–16**, normativa estatutaria/enseñanzas y **corte jurídico exacto de listas definitivas**; La Puebla T14 **abstención y recusación**, más materias residuales relevantes antes de **14/11**. Radar: verificar ciclo, lectores y correos, reparar fuentes solo con alternativas oficiales. **Diputación DT-C2-A** aplazada y **OAPGT T6** al final.

| Bloque | Convocatoria | Alcance | Estado operativo |
|---|---|---|---|
| **DT-C2-A** | Diputación Auxiliar C2 | **1–5**, Constitución, Ley 39/2015, régimen local | **PRESERVADO Y TEMPORALMENTE APLAZADO POR EXÁMENES INMINENTES; cobertura y fiabilidad pendientes** |
| DT-C2-B | Diputación Auxiliar C2 | **7–10**, empleo público, prevención, igualdad y datos | **EN COLA** |
| DT-C2-C | Diputación Auxiliar C2 | **11–15**, tributos, recaudación, administración electrónica, Ley 40/2015 | **EN COLA** |
| DT-C2-D | Diputación Auxiliar C2 | **16–20**, Windows, Edge, GroupWise, LibreOffice y hardware | **EN COLA** |
| DT-C2-E | Diputación Auxiliar C2 | **6**, Acuerdo Regulador y Estatutos OAPGT | **EN COLA, APLAZADO EXPRESAMENTE HASTA EL FINAL; fuente íntegra pendiente** |
| LP-M | La Puebla C2 | **1–6**, **7–14**, **15–19**, control de vigencia posterior al cierre de fase 2 | **MANTENIMIENTO; NO REHACER CIERRE HISTÓRICO** |
| UC3M-A/B/C/D | UC3M C2 | **1–5**, **6–10**, **11–15**, **16–20**; adaptar a materias del programa | **EN COLA** |
| DT-C1-A/B/C/D | Diputación Administrativo C1 | **1–10**, **11–20**, **21–30**, **31–40** | **EN COLA; conservar revisiones parciales temas 3–5** |

**Regla de avance:** en cada ejecución trabajar un conjunto significativo de archivos/temas relacionados; el indicador de progreso es **bloques/subbloques realmente verificados con evidencia**, no el número de comunicaciones al usuario. Puede quedar un bloqueo individual dentro de un bloque; documentarlo, avanzar el resto si es seguro, y conservar la incidencia en su cola sin declarar cerrado el bloque.

**Notificaciones al usuario:** **SOLO INCIDENCIAS SIGNIFICATIVAS** que requieran acción del usuario o no se puedan resolver autónomamente, o errores graves que afecten a la fiabilidad del estudio. No emitir partes diarios, estados por tema ni avisos de cambios normales. Conservar el historial de avances silenciosamente en este mismo archivo.

## 6. Criterios obligatorios de cierre por tema

- [ ] Literalidad del epígrafe oficial y delimitación de todos los subapartados.
- [ ] Fuentes oficiales, fecha de versión, artículos, excepciones, fechas, mayorías, importes y órganos.
- [ ] Manual completo y coherente, tablas comparativas y **¡Foco Examen!**.
- [ ] Banco sin errores sintácticos y con cada respuesta cotejada con norma o documentación técnica oficial.
- [ ] Supuestos prácticos adaptados al formato real de la convocatoria cuando se exijan.
- [ ] Enlaces, navegación, renderizado móvil, corrección de test (blancos incluidos), persistencia de progreso y pruebas técnicas.
- [ ] Evidencia por archivo/commit; estado editorial alcanzado y aprobación del usuario cuando proceda.

**Un criterio sin evidencia permanece PENDIENTE.** La CI automática **no** certifica vigencia legal. La falta de acceso al BOE o a GitHub se registra como **BLOQUEO**, nunca como verificación aprobada.

## 7. Protocolo obligatorio de reanudación

1. Abrir **este fichero primero**; leer también `PROJECT_RULES.md` y el manifiesto de la convocatoria activa.
2. Revisar el **último commit** y los cambios desde la última anotación; no sobreescribir avances de otra ejecución. Resolver contradicciones antes de trabajar.
3. Retomar el **BLOQUE ACTIVO** desde su marcador exacto, sin volver al inicio ni detener toda la auditoría por una incidencia de un tema cuando sea seguro seguir con el resto.
4. Al cerrar cada bloque o subbloque, **editar esta misma sección, su marcador de avance y evidencia**, no crear otros archivos de «estado final» ni informar tema por tema.
5. Cada resumen al usuario debe distinguir **contenido presente, auditoría jurídica, validación técnica, aprobación histórica y progreso pendiente**.
6. No reabrir el tema 6 del OAPGT hasta finalizar el resto de temas de Diputación C2, **salvo nueva instrucción**.

### Registro de control

| Fecha | Acción | Resultado |
|---|---|---|
| **02/11/2026** | Inventario de estados, informes y prioridades; reconciliación con la orden de posponer OAPGT | **Registro principal actualizado; siguiente tarea DT-C2-T01** |
| **02/11/2026** | Normalización de C2 y cabeceras de sus 20 manuales; interfaz ya no convierte `GENERACION_DESDE_CERO` en publicado | **19 EN_REVISION_USUARIO, 1 BORRADOR; T01 todavía no auditado integralmente** |
| **02/11/2026** | Conciliación README, reglas, informes históricos, manifiestos, fichas de convocatorias y cuatro seguimientos administrativos | **Informes históricos preservados; fechas de comprobación separadas del estado actual; todavía sin CI/browsing certificado** |



## 8. Conciliación aplicada a los documentos de estado — **02/11/2026**

**Escrituras confirmadas en GitHub:**

- `README.md`: sustituido «Estado actual» antiguo por resumen de **99 temas** y acceso a este registro; corregidas afirmaciones obsoletas de bancos vacíos y validez de la última CI. **NO** se ha repetido la auditoría jurídica de los manuales.
- `AUDIT_STATUS.md`: reconvertido en **punto de acceso**, no segunda cola activa.
- `PROJECT_RULES.md`: reanudación y decisiones desde este archivo; explicado por qué `GENERACION_DESDE_CERO` no es aprobación.
- `TRANSVERSAL_REVIEW.md`, `QA_FINAL_2026-07-18.md`, `audit/PHASE2_CLOSURE.md` y `audit/phase2-ci-result.md`: señalados como **evidencia histórica**; no alterada su evidencia sustantiva.
- `docs/ROADMAP_PRIORIDADES_2026-07-18.md` y `docs/FORMATO_SIMETRICO_CONVOCATORIAS.md`: diferenciados plan antiguo y cuatro convocatorias actuales.
- `content/diputacion-toledo-auxiliar-c2/PLAN_EDITORIAL_Y_AUDITORIA.md` y `AUDITORIA_TESTS_2026-10-25.md`: enlazados al estado principal; se respeta **OAPGT al final** y no se presentan como cierres vigentes.
- `data/programa-diputacion-auxiliar-c2-2026.json`: **19 EN_REVISION_USUARIO + 1 BORRADOR (tema 6)**, JSON analizado correctamente tras la modificación. **Los 20 manuales C2** llevan una cabecera de estado operativo; los anteriores hitos de revisión se conservan debajo.
- `assets/app.js`: estados desconocidos o `GENERACION_DESDE_CERO` ahora **no** se etiquetan automáticamente como publicados.
- `data/convocatorias.json`: corregidos estados editoriales; los plazos **UC3M** y **CPEIS** que figuraban abiertos pese a haber vencido según las fechas registradas se muestran como **cerrados por fecha**, sin fingir nueva comprobación oficial. JSON analizado correctamente.
- `data/seguimiento-diputacion-c1.json`: fecha de **BOE núm. 162** corregida a **04/07/2026** contra [BOE-A-2026-14527](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14527); la fecha de verificación de listas sigue siendo la original.

**Validación efectivamente realizada en la conciliación inicial:** lectura y análisis JSON de los manifiestos y fichas y comprobación textual de `themeStatus`. **Actualización posterior:** CI multiconvocatoria ejecutada y superada sobre commit `3c2c4067` (apartado 10). Continúan **pendientes las pruebas reales de navegador y auditoría jurídica exhaustiva**. No extrapolar la CI de un commit a otro posterior.

**No considerar auditado ningún bloque por estas normalizaciones.** El siguiente trabajo sustantivo es el **BLOQUE DT-C2-A (temas 1–5)**, con revisión agrupada y preservación del trabajo existente. Actualizar cabeceras/manifiestos solo tras controles pertinentes.

## 9. Inventario estructural completo de GitHub — **02/11/2026**

Se ha leído el **árbol Git recursivo completo** de la rama principal: **723 entradas**, de ellas **608 archivos**. **Esto es un inventario de rutas, no lectura semántica ni validación legal de los 608 contenidos.** Desglose: **201 archivos JSON**, **352 Markdown**, **13 flujos GitHub Actions**. No se ha ejecutado un barrido real de CI/navegador sobre todo el repositorio.

| Programa | Archivos en carpeta de contenido | Temas con manual | Temas con fuentes.md | Temas con matriz.json | Temas con preguntas.json |
|---|---:|---:|---:|---:|---:|
| **La Puebla C2** | **209** | **19/19** | **5/19** | **19/19** | **19/19** |
| **Diputación Auxiliar C2** | **67** | **20/20** | **20/20** | **0/20** | **20/20** |
| **UC3M C2** | **82** | **20/20** | **20/20** | **20/20** | **20/20** |
| **Diputación Administrativo C1** | **164** | **40/40** | **40/40** | **40/40** | **40/40** |

**Interpretación responsable:**
- **Diputación Auxiliar C2:** no hay archivos independientes `matriz.json`. Varios manuales sí contienen matrices en tablas Markdown; revisar su cobertura antes de crear **20 matrices reales y trazables**. Es una **incidencia estructural**, no prueba de que falte toda la materia.
- **La Puebla:** catorce carpetas de tema carecen de `fuentes.md` independiente, pero existen materiales modulares y matrices; **no declarar ausencia de fuentes normativas** sin comprobarlos.
- **Diputación C2 tema 9:** existen `tema-9/manual.md` y `tema-09/manual.md`, con contenido y estados distintos. **La ruta canónica del manifiesto es `tema-09/`**. Verificar enlaces/uso y evitar doble mantenimiento; no borrar automáticamente sin comprobar referencias.
- Los números de archivos/bancos muestran presencia documental, **nunca fiabilidad jurídica**.

### Banco de preguntas de Diputación C2: medición actual

**20 bancos JSON leídos y analizados sintácticamente**, con **409 preguntas** en total (**19 bancos × 20** y **29 preguntas provisionales en tema 6**). En la verificación estructural de estos 409 registros se observaron **0 índices de respuesta fuera del rango 0–3, 0 preguntas sin exactamente cuatro opciones**; la primera mitad de bancos también se comprobó sin identificadores duplicados dentro de cada tema. **No se ha verificado que las 409 respuestas sean jurídicamente correctas.**

El informe `AUDITORIA_TESTS_2026-10-25.md` conserva el histórico de **138 preguntas en 19 bancos**; **esa cifra ya NO representa el banco actual**. La explicación es crecimiento posterior, no necesariamente un error en la auditoría anterior. No destruir el histórico: comparar **fecha y commit**.

**Incidencias registradas para resolución autónoma en los bloques:** ausencia de matrices externas C2, duplicado de ruta T09, desfase de estadísticas históricas y pruebas actuales de interfaz/CI aún pendientes. Ninguna de estas requiere por ahora actuación personal del usuario.

### Prioridad técnica transversal

Antes de elevar el estado de un bloque: comprobar recursos reales, `npm test` (o controles GitHub Actions sobre el commit de que se trate), integridad de JSON, enlaces, móvil, cuestionarios con blancos y persistencia independiente entre convocatorias. Si no se pudo ejecutar alguna prueba, marcarla explícitamente **PENDIENTE**, sin presentar un resultado histórico como actual.


## 10. Validación automatizada multiconvocatoria — **02/11/2026**

**Prueba añadida:** [`tests/validate-all-programmes.mjs`](tests/validate-all-programmes.mjs). Ahora `npm run test:all` ejecuta la validación previa de **La Puebla**, el validador de **Diputación C1** actualizado y una comprobación de los **99 temas y sus 99 bancos**, admitiendo los dos nombres históricos de campos de pregunta/respuesta. Comprueba existencia de archivos, JSON, duplicidades de ID por tema, cuatro opciones, índice 0–3, justificación y referencia **estructurales**, no el significado jurídico.

**CI contrastada:** [Validar OpoWeb v2, ejecución 41475813206](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41475813206): **SUCCESS**, sobre commit `3c2c406713d979a5b78a2619edc65a5a17a02e8c`. También resultaron **SUCCESS** la validación `Validar OpoWeb` y la `Puerta de cierre Fase 2` sobre ese commit. **No extrapolar el éxito a commits futuros ni a corrección jurídica o pruebas en navegador.** El fallo de una ejecución intermedia anterior provenía de una aserción antigua del test de C1 que exigía **12 preguntas por tema** cuando el banco real ya había crecido; el test se corrigió y volvió a pasar.

| Convocatoria | Temas y bancos comprobados | Preguntas actuales | Matrices independientes |
|---|---:|---:|---:|
| La Puebla C2 | **19/19** | **228** | **19** |
| Diputación Auxiliar C2 | **20/20** | **409** | **0** |
| UC3M C2 | **20/20** | **250** | **20** |
| Diputación Administrativo C1 | **40/40** | **803** | **40** |
| **Total** | **99/99** | **1690** | **79/99** |

**Lectura correcta de los porcentajes:** presencia de manuales y bancos **99/99 (100 % estructural)**; matrices independientes **79/99 (79,8 %)**, con cobertura en tablas internas aún sin comprobar; verificación sustantiva y funcional integral **NO CERTIFICADA**. **1.690 preguntas existentes no equivale a 1.690 preguntas jurídicamente auditadas**.

**BLOQUE ACTIVO después de la prueba:** `DT-C2-A` (**temas 1–5**), pendiente de cotejo jurídico integral por materias. **No volver a pasar el inventario inicial sin motivo**: para integridad estructural utilizar el validador y controlar el resultado en el commit actual.


## 11. Hitos oficiales próximos y prioridad por examen — **02/11/2026**

**Esta sección registra el cotejo puntual de fechas**, independiente del progreso editorial. Cada consulta posterior debe actualizar la fecha de verificación o conservar explícitamente la anterior.

| Convocatoria | Última información oficial localizada | Estado de examen a **02/11/2026** | Próximo control |
|---|---|---|---|
| **UC3M C2 · 34 plazas** | [Portal oficial UC3M](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026): anuncia **llamamiento del ejercicio único para 21/11/2026** y publica **listas definitivas** | **21/11/2026** con llamamiento publicado. La hora de **10:00** y Campus de Getafe figuran en anuncios anteriores y fuentes de academias; **resolución de llamamiento PDF no abierta**, confirmar hora, edificio y aula allí | **URGENTE:** comprobar PDF íntegro, distribución por aulas y acceso personal a lista definitiva, sin publicar datos personales |
| **Diputación Toledo Auxiliar C2 (4 plazas, BOE 21/10/2026)** | [Solicitudes oficiales Diputación](https://www.diputoledo.es/global/50/1804/6577/rrhh-seleccion-convocatoria/1): **22/10–19/11/2026** | **No se ha localizado anuncio de fecha de examen de esta convocatoria 2026** | Comprobar fin de plazo y futuras listas; no confundir con **OEP 2025**, con pruebas ya realizadas |
| **Diputación Toledo Administrativo C1 (2 plazas, OEP 2026)** | [Ficha oficial de la Diputación, Administrativo/a](https://www.diputoledo.es/global/50/1964/7099/opcion) publica **LISTA DEFINITIVA y COMPOSICIÓN DEL TRIBUNAL**; documento del **29/09/2026** (anuncio **4390-2026** en índice BOP). Antes: provisional **14/08/2026** | **Sin fecha/hora/lugar del primer ejercicio confirmados** a **02/11/2026** en su ficha oficial. **La admisión individual definitiva no se ha cotejado** | Próxima publicación: **llamamiento del primer ejercicio** para estas **2 plazas C1 oposición libre**. No confundir con **5 plazas de promoción interna** ni con OEP 2025. |
| **La Puebla de Montalbán Auxiliar C2 (4 plazas)** | **Anuncio original del Tribunal firmado**, aportado mediante captura de la sede electrónica el **02/11/2026**: **PRIMER EJERCICIO 14/11/2026, 09:30**, **IES Universidad Laboral de Toledo, Av. de Europa 28**. **50 preguntas + 5 de reserva**, **60 minutos**, DNI. Captura de página **5/7** de relación oficial **ADMITIDOS** fechada **02/09/2026** acredita inclusión del aspirante, sin publicar datos identificativos. | **EXAMEN CONFIRMADO: sábado 14/11/2026 a las 09:30**. El documento aportado no muestra portada de la relación de admitidos, así que su denominación formal como definitiva no puede asegurarse solo por esa imagen. | **PRIORIDAD MÁXIMA:** preparación de 19 temas, 228 preguntas, 20 supuestos y **5 simulacros (3 breves históricos + 2 de formato oficial nuevos)**; revisar correcciones del tablón y ejercitar test **50/60 min** con penalización. |

### Repriorización puntual basada en examen cercano

**URGENCIA CONFIRMADA LA PUEBLA — 14/11/2026** (**12 días** desde 02/11/2026), seguida por **UC3M — 21/11/2026** (**19 días**). Sin cancelar el bloque `DT-C2-A`, se añade **SUBBLOQUE URGENTE PUEBLA-EXAM-2026-11-14** (validar contenido y simulacros para el primer ejercicio) y se conserva **UC3M-EXAM-2026-11-21**: verificar texto del llamamiento y las novedades; revisar de forma transversal los **20 temas**, las **250 preguntas** y diferencias legales universitarias y autonómicas, detectar los errores de mayor impacto de test y corregirlos con fuente. No declarar que el manual está íntegramente certificado. Proteger la condición de aspirante: **solicitud inscrita ≠ admisión definitiva comprobada**.

**Orden temporal revisado (02/11/2026):** (1) **La Puebla**: examen **14/11**, auditoría de alto impacto y simulacros por bloques; (2) **UC3M**: examen **21/11**, revisión urgente en paralelo; (3) seguimiento de **llamamiento C1** después de lista definitiva publicada; (4) retomar bloque `DT-C2-A` pendiente en el marcador previo y mantener **OAPGT T06 al final**. Si no hay nuevos cambios de calendario, no repetir búsquedas exhaustivas ya verificadas sin motivo. Actualizar este registro, no crear informes competidores.

**Evidencia técnica disponible a 02/11/2026:** 99 manuales/99 bancos; **1.690 preguntas**; prueba estructural exitosa sobre commit específico según §10; validación integral jurídica y navegador real **pendientes**. Se considera material utilizable con precauciones, no finalizado como única fuente certificada.

### Rectificación concreta de seguimiento — **02/11/2026**

- **C1 Diputación:** se encontró la lista definitiva publicada el **29/09/2026** en la [ficha oficial](https://www.diputoledo.es/global/50/1964/7099/opcion). Actualizados `data/seguimiento-diputacion-c1.json` y `data/convocatorias.json` sin asumir admisión definitiva individual. **La fecha del examen sigue no localizada**.
- **La Puebla C2:** dos fichas de terceros (28/08 y 02/09) parecen referir documentos de lista definitiva, pero el acceso directo a la sede municipal no permite cotejarlos. Actualizados `data/seguimiento-la-puebla.json` y `data/convocatorias.json` como **indicio no verificado**, nunca fecha oficial de examen. **Bloqueo: acceso al documento original de tablón**.
- **Regla permanente:** en la siguiente comprobación seguir **desde estos hallazgos** y buscar solo nuevos anuncios; evitar reiniciar con la lista provisional de agosto como si no existieran más fases. La presente consulta **no verifica** que no haya otras publicaciones accesibles por vías distintas.

### Evidencia primaria recibida: La Puebla — **02/11/2026**

**Corrección de incidencia crítica:** ya no debe constar que La Puebla carece de llamamiento o fecha de primer ejercicio. El opositor ha aportado **captura de un anuncio oficial firmado**, correspondiente a las **cuatro plazas Auxiliar Administrativo C2 del Ayuntamiento**, con fecha **sábado 14 de noviembre de 2026**, **09:30**, **IES Universidad Laboral de Toledo, Avenida de Europa 28, Toledo**, y exigencia de DNI. Examen **50 preguntas con cuatro opciones**, **5 reservas**, **60 minutos**. **Evidencia: imagen recibida en esta conversación**, no publicada en GitHub por privacidad. Consulta adicional de buscadores no localizó la misma resolución indexada; la captura es la fuente primaria de esta actualización.

**Admisión:** otra imagen oficial muestra al aspirante en una tabla **ADMITIDOS**, página **5/7**, con fecha lateral **02/09/2026**. La portada del decreto no está en el fragmento, por lo que afirmar literalmente que es la «lista definitiva» requiere ver la portada, aunque su **inclusión como admitido** está documentada.

**Guardado:** `data/seguimiento-la-puebla.json` y `data/convocatorias.json` actualizados en GitHub. **No reabrir el seguimiento desde agosto** ni comunicar que la convocatoria carece de fecha. **BLOQUE URGENTE PUEBLA-EXAM-2026-11-14**, sin perder UC3M del 21/11 y el resto de la cola. Priorizar corrección de preguntas engañosas, vigencia normativa, repaso de 19 temas y simulacros, sin repetir el contenido ya auditado en la fase 2.

## 12. Bloque de mejora urgente La Puebla — 02/11/2026 (cambios confirmados)

**Objetivo:** aprovechar el cierre previo de los 19 temas y mejorar la fiabilidad de los puntos que más pueden afectar al examen del **14/11/2026**, sin repetir la auditoría completa de julio por sistema. Trabajo realizado en el repositorio:

1. **Incidencia jurídica resuelta, tema 6 (interinidad):** una fila de memorización indicaba erróneamente **2 años** para el programa temporal de interinidad mientras el texto sustantivo, el test y el supuesto reflejaban **4 años**. Corregida en [manual del tema 6](content/la-puebla/tema-06/manual.md) (commit `df003d3a`), actualizado [control editorial](content/la-puebla/tema-06/feedback.md) (`d48e9955`) y documentada la errata en [QA histórico](QA_FINAL_2026-07-18.md) (`ee0fa80b`). Fuentes: [Ley 4/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752), art. **8.1.c**, y [TREBEP](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), art. **10.1.c**. **No confundir** con los **2 años** necesarios para promoción interna.
2. **Reforma tributaria, tema 12:** incorporada a [manual](content/la-puebla/tema-12/manual.md), [matriz](content/la-puebla/tema-12/matriz.json) y nuevo documento [fuentes](content/la-puebla/tema-12/fuentes.md) la modificación del **TRLRHL publicada 07/10/2026** por RDL 29/2026. Distingue su entrada en vigor de los efectos especiales **IBI (primer período anual ordinario 2027)** e **IIVTNU art.107.4 (01/12/2026)**. **Revisión puntual de vigencia**, no recertificación íntegra ni inclusión artificial de temas extraprograma.
3. **Simulacros de primer ejercicio**: preservados **3 originales de 30 preguntas / 45 minutos**; añadidos **2 simulacros de 50 preguntas puntuables, 5 reservas separadas, 60 minutos** en [simulacros.json](content/la-puebla/simulacros.json), commit `de692caf`. **110 IDs contrastados con los 19 bancos de 12 preguntas: todos existen, ninguno duplicado entre nuevos simulacros ni reutilizado de los tres antiguos.** El banco sigue teniendo **228 preguntas**: los simulacros seleccionan preguntas existentes, **no son preguntas nuevas**. Las reservas quedan documentadas y fuera de la corrección normal. Los dos nuevos simulacros **no** incorporan todavía una simulación interactiva específica de sustitución por anulación.
4. **Corrección de puntuación y blancos en la interfaz:** [assets/practice.js](assets/practice.js) calcula, solo para los nuevos simulacros oficiales, **+0,20 por acierto, −0,05 por error, 0 por blanco** y presenta nota de **0 a 10**, persistiendo la nota en el historial. Los blancos ya no se anotan como errores en las estadísticas por tema. Importación actualizada en [practice.html](practice.html) para invalidar caché del módulo; cambios `3f33129c`, `b75510b4` y `1c73aeb7`.
5. **Control técnico de regresión:** actualizado [tests/validate.mjs](tests/validate.mjs) con comprobaciones de dos simulacros completos, IDs existentes, no duplicados, cálculo penalizado y tratamiento de blancos (commits `c306997b` y `ca8bcb05`). **Validación directa realizada:** sintaxis JSON leída, 110/110 referencias a preguntas existentes en 19 bancos, cero duplicadas, 50+5 por examen. **PENDIENTE:** ejecutar o comprobar GitHub Actions del **último commit** y probar manualmente en navegador móvil y ordenador la puntuación, cronómetro, guardado y carga de recursos. El éxito CI del apartado 10 corresponde a un **commit anterior**.

**Siguiente bloque sustantivo:** revisión jurídica focalizada en plazos, órganos y soluciones de **La Puebla temas 2–5 y 10–14**, con comprobación de fuentes legales vigentes a la fecha del examen. Mantener **UC3M C2 (21/11/2026)** en paralelo. No recrear los simulacros ni repetir correcciones resueltas salvo nueva evidencia; completar pruebas funcionales/CI y corregir incidencias si aparecen. Los **19 temas** mantienen su aprobación histórica, pero todavía no hay **recertificación jurídica integral** de noviembre.


## 13. Bloque urgente La Puebla: bases, test, reservas y pruebas — **02/11/2026**

**Fuente oficial contrastada:** bases de las **4 plazas de Auxiliar Administrativo**, **BOP Toledo n.º 82 de 05/05/2026**, **página 67**, base **undécima**, CSV **2026.00001965** (PDF oficial del proyecto y página revisada visualmente). El llamamiento del tribunal para **14/11/2026 a las 09:30** ya está incorporado en §11.

| Parámetro de examen | Regla literal comprobada |
|---|---|
| Preguntas titulares | **50** de **4 opciones**, **1 correcta** |
| Reserva | **5** adicionales, solo para anulaciones |
| Duración máxima | **60 minutos** |
| Acierto / error / blanco | **+0,20 / −0,05 / 0 puntos** |
| Máximo / corte eliminatorio | **10 puntos / mínimo 5** |
| Segundo ejercicio | Práctico eliminatorio, uno o varios supuestos, forma decidida por el tribunal, **mínimo 5 puntos** |
| Alegaciones a plantilla provisional | **5 días hábiles** desde el siguiente a la publicación |
| Intervalo entre pruebas | Mínimo **72 horas** y máximo **45 días hábiles** |

### Correcciones confirmadas con commits

- **Motor de simulacros — commit 2b4dd44e:** las **5 reservas** estaban almacenadas, pero el navegador solo dibujaba **50 preguntas**. Ahora el ejercicio presenta **55** con titulares 1–50 y reservas R1–R5, todas dentro de los **60 minutos**, con corrección independiente de reservas **sin alterar la nota** ni el progreso ordinario.
- **Cronómetro — commit 2b4dd44e:** se mide el tiempo restante respecto al límite temporal mediante la hora real, evitando alargarlo si el navegador ralentiza los intervalos en segundo plano. **No hay aún prueba real en dispositivo móvil.**
- **Prueba del motor ejecutada directamente:** **5 casos aprobados**: 50 titulares correctos + reservas incorrectas → **10**; 25 bien + 25 mal y reservas bien → **3,75**; 25 bien + 25 blancos → **5**; 30 bien + 20 mal → **5**; 50 mal + reservas bien → **0**. Todos conservaron **50** titulares y **5** reservas separadas. No es una prueba gráfica de navegador.
- **Prueba permanente nueva — commit 1e6fc609:** archivo tests/validate-practice-exam.mjs con los cinco escenarios. Se integró en npm test mediante package.json, commit de7dbcdc, y se ejecutó aisladamente en esta auditoría con resultado **SIMULACROS_PUEBLA_50_MAS_5_NOTA_Y_BLANCOS_OK**.
- **Comprobación ampliada de interfaz en aislamiento — commit fbd8db72:** la prueba automática simula render de **55 fichas**, títulos de **R1–R5** y reloj inicial **60:00**, además de la calificación y los blancos; ejecutada con éxito en el entorno de revisión. **No es una prueba con navegador real.**
- **Accesibilidad de las instrucciones en OpoWeb — commit 3039af89:** el centro de entrenamiento de La Puebla ahora informa del examen **14/11/2026, 9:30, IES Universidad Laboral**, DNI, las **50+5 preguntas**, penalización y umbral de **5 puntos**; invalidada caché del script de práctica en **practice.html**, commit **14a28e63**.
- **CI multiconvocatoria — commit ce2b97ab:** el flujo de validación ahora observa también modificaciones de **practice.html** y **assets/** y ejecuta **npm run test:all**. **Pendiente comprobar un SUCCESS para el último commit**: el éxito histórico del §10 no certifica estos cambios.
- **Correcciones de tres ambigüedades de fecha límite:** preguntas **LP-T02-011**, **LP-T11-002** y **LP-T11-003**, commits **0e7025f3** y **4b8257a0**. Antes no aclaraban qué ocurre si el último día resulta inhábil. El enunciado ahora especifica el supuesto y la justificación explica la prórroga al **primer día hábil siguiente** de la **Ley 39/2015, artículo 30.5**, y de la **LGT, artículos 62.2 y 62.5**. Manuales de temas **2 y 11** actualizados, commits **4cbf7ee7** y **d8548d11**. **No cambió la letra de la respuesta correcta**.
- **Barrido del banco jurídico por bloques:** inspeccionados los enunciados, opciones elegidas y justificaciones de **108 preguntas** de los temas **2–5 y 10–14**. Contrastadas algunas reglas críticas de las leyes **39/2015**, **58/2003**, **40/2015**, **7/1985** y **4/2011** con sus textos oficiales; tres preguntas precisaron edición. **No confundir este barrido y muestreo con 108 respuestas individualmente certificadas en todas sus excepciones**.

**Fuentes oficiales para continuar:** [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [LGT 58/2003](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186), [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), [Ley 7/1985](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) y [Ley 4/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752).

**Siguiente bloque exacto:** profundizar en las excepciones jurídicas de **La Puebla, temas 3–5 y 10–14**, y corregir los casos sensibles que la comparación con normativa oficial demuestre. **Pruebas pendientes:** ejecutar/leer CI sobre el commit actual y comprobar en navegador real, especialmente móvil, que el examen muestre **55 preguntas**, respete el cronómetro y conserve la nota. Después **UC3M, examen 21/11/2026**. Mantener el bloque **DT-C2-A** intacto hasta reanudarlo y **tema 6 OAPGT al final**, conforme a decisión previa.


## 14. Incidencia de CI: fallo en GitHub Actions — 02/11/2026

**Aviso del usuario:** capturas de GitHub Actions `Validar OpoWeb v2`, ejecución **#1766**, resultado **FAILURE** en el paso **«Validar programa, estados y manual aprobado»**; **«Comprobar sintaxis»** había terminado correctamente. Las advertencias de **Node.js 20 deprecated** y migración de `ubuntu-latest` son advertencias del entorno, **no prueban la causa del código de salida 1**. El log desplegado del paso fallido no figura en las capturas, por lo que no puede atribuirse retrospectivamente el error exacto de aquella ejecución sin verlo.

### Desajustes reproducibles detectados en el código actual y reparados

1. **Aserción antigua de respuestas en blanco:** `tests/validate.mjs` buscaba literalmente `if (result.answered === false) return;`, pero `assets/practice.js` había evolucionado a `if (result.answered === false || result.reserve === true) return;`, para excluir también las **5 reservas** de los errores de los 50 titulares. Confrontados ambos ficheros; corregida la aserción conservando el requisito de no penalizar blancos o reservas. **Commit: [ca55e6ef](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/ca55e6ef4bca0c3c1e3bd17634f0b72fa14427d5)**.
2. **Metadatos históricos de revisión:** `tests/validate-la-puebla-editorial.mjs` exigía exactamente `**Fecha de revisión normativa:**` para todos los temas, mientras los **temas 2, 11 y 12** distinguen ahora correctamente su fecha original de julio de la revisión legal focalizada en noviembre mediante `Revisión editorial histórica` o `Cierre editorial original`. Acepta las tres fórmulas con una fecha explícita, sin presentar controles parciales como aprobación integral. **Commit: [64cd7b86](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/64cd7b8674a0719274de5ccb358161a3083a0c6a)**.

### Prevención de errores recurrentes

- El único flujo **automático** en `push`/`pull_request` es [`.github/workflows/validate.yml`](.github/workflows/validate.yml), ahora dividido en pasos nominados: sintaxis de interfaz, contenido La Puebla, estándar editorial La Puebla, motor de simulacros, Diputación C1 y **99 temas**. **Commit [f96a93b7](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/f96a93b7ba6ef935a00d23e738a5d5b0838e7dd8)**.
- El flujo redundante `validate-content.yml` permanece disponible **solo bajo demanda manual** para evitar comprobaciones y correos duplicados. **Commit [5dad72cc](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/5dad72ccab3e321684edc488e6924e499cc727d2)**.
- **Comprobación efectuada:** los **19 manuales** conservan un H1 correcto, `PUBLICADO`, fecha editorial reconocible y un bloque de esquema/repaso; los **19 bancos** conservan estado `APROBADO_USUARIO`, **12 preguntas por tema (228)**, cuatro opciones y justificaciones/trampas de longitud suficiente. **Validación de estructura mediante lecturas directas de GitHub, no ejecución de toda la batería CI de este último commit**.
- **Estado CI actualizado:** **PENDIENTE de confirmar SUCCESS del último commit**. La API de estados consultada no ha devuelto resultados y el método disponible de consulta de ejecuciones solo devuelve acciones por `pull_request`, no las de `push`. **No dar por exitoso GitHub Actions** hasta ver el resultado verde para el commit posterior a estas reparaciones. Una ejecución histórica roja **no cambia de color** tras modificar el código; se requiere ejecución nueva.

**Estabilización adicional del entorno (02/11/2026):** se han actualizado las acciones a `checkout@v5` y `setup-node@v5` (runtime Node 24) y fijado el runner `ubuntu-24.04` en ambos archivos de workflow, para retirar las advertencias del soporte Node 20 y de la migración de `ubuntu-latest` sin confundirlas con el fallo de aserciones. Commits [55326df4](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/55326df452d2d31128f2f982be79b05cede66723) y [a7251646](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/a72516464b792fe8a61145946deb2b3e53defbf3). La consulta de estados del último commit no ofrece comprobaciones visibles, por lo que **sigue pendiente acreditar éxito de GitHub Actions**.

**Siguiente control obligatorio antes de declarar CI saneado:** consultar [Acciones de OpoWeb v2](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/workflows/validate.yml) y verificar la ejecución correspondiente a los últimos commits; si vuelve a fallar, abrir el **paso concreto** y leer la primera aserción fallida. Corregir los test obsoletos en sincronía con el código sin ocultar defectos reales. **No detener las auditorías jurídicas salvo que CI descubra una pérdida de contenido o funcionalidad.**


## 15. Bloque UC3M C2: simulacros ajustados a la convocatoria — **02/11/2026**

**Incidencia detectada y subsanada:** el programa de **UC3M C2 (examen 21/11/2026)** ya tenía **20 manuales** y **250 preguntas**, pero `content/uc3m/simulacros.json` estaba **vacío** y el centro de entrenamiento no ofrecía simulación del ejercicio único. Se ha corregido **sin alterar los bancos ni declarar los temas jurídicamente aprobados**.

### Bases oficiales contrastadas

**Fuente primaria:** [BOE-A-2026-14624](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624), **anexo II.I y anexo III**.

| Criterio | Regla de la convocatoria |
|---|---|
| Ejercicio de oposición | **Único test obligatorio y eliminatorio** |
| Preguntas | **70 titulares + 5 de reserva**, **4 opciones** |
| Duración máxima | **60 minutos** |
| Puntuación directa | **Aciertos − errores/3**; blanco **0** |
| Puntuación transformada | Sobre **70 puntos**; **35** para superar la fase de oposición |
| Corte directo para llegar a 35 transformados | Lo fija el **Tribunal Calificador** en función del examen y se aplica la fórmula del **anexo III**, **NO** es necesariamente 35 puntos directos |
| Reparto del proceso | **70 % oposición** y **30 % concurso de méritos**, solo para aprobados de la fase eliminatoria |

**Regla jurídica especialmente examinable:** la **base primera.7** exige legislación vigente **en la fecha de publicación de la resolución de listas definitivas de admitidos y anuncio del ejercicio**, no necesariamente a **21/11/2026**. No trasladar automáticamente la reforma de otra oposición de noviembre a UC3M sin comprobar esa fecha de corte.

### Trabajo confirmado en GitHub

1. **Tres simulacros nuevos**: `content/uc3m/simulacros.json`, commit [85fa230c](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/85fa230c3be7e21e9ac80d2e977d430ab8749ced). Cada simulacro tiene **70 titulares + 5 reservas / 60 minutos**, con preguntas distribuidas por los **20 temas** y extraídas de los bancos originales. **225 ID únicos** entre los tres modelos: **todos cotejados contra los archivos reales de los 20 bancos**, sin errores de referencias. Las preguntas son **de entrenamiento OpoWeb**, no oficiales ni revalidadas jurídicamente por este hecho. **Las 250 preguntas originales siguen disponibles**.
2. **Corrección de resultados**: `assets/practice.js`, commit [f12e732e](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/f12e732e51474353a4ff391d1e9bb64ee794ce8e). La UC3M muestra **puntuación directa A − E/3**, registra su valor en el historial y **no afirma APTO ni genera nota transformada sin el corte del Tribunal**. Mantiene separadas las 5 reservas y preserva el algoritmo **+0,20 / −0,05** exclusivo de La Puebla. Añadida nota visible sobre la **fecha normativa de corte** en commit [535c8462](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/535c8462255828a33ece256317e7393cd402ed38).
3. **Interfaz**: al escoger UC3M en el centro de entrenamiento, aparecen los tres modelos y sus instrucciones, junto con las reglas oficiales y la advertencia del corte. Los bancos por tema muestran su recuento real (algunos **14** o **16**, no todos **12**). Eliminado el color de «aprobado» de los botones de entrenamiento de convocatorias aún en revisión (commit [086f7d6b](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/086f7d6b83aec60c7aeebcb04d7881c945269dae)). Actualizada referencia de caché en `practice.html`, commit [e0f978b5](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/e0f978b5721f8da1b585513cb3b7991868eebca7).
4. **Guía autocontenida**: `content/uc3m/GUIA_EXAMEN_2026.md` (commit [8a231c03](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/8a231c039c03db4738bf4a32ee653fa3044a879e)), enlazada desde README; recoge todas las reglas anteriores y pendientes.
5. **Prueba de regresión**: `tests/validate-uc3m-exams.mjs` (commits [8fadb786](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/8fadb786fe753365bd8399ef5dd36ac8cd6a651a), [29c7e1b7](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/29c7e1b7436d20610199530fc2863485aa8bc1fd)) verifica **3 simulacros, 225 IDs, cinco casos de puntuación directa y reserva y representación de 75 preguntas con reloj inicial 60:00**. Integrada en `package.json` (`npm test`) y `validate.yml` con paso propio (commits [215dbc5d](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/215dbc5d495be1f0153490cb0faa8503e62b1029) y [9a57eb48](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/9a57eb48891b26aabb2a51635dcffe805a54be61)). **Comprobación aislada realizada con resultado PASS**; validación real de GitHub Actions del último commit y prueba en navegador **pendientes**.

### Precisión adicional: lo que NO falta y lo que no debe repetirse

- **Supuestos UC3M:** `content/uc3m/supuestos-practicos.json` deja de decir `PENDIENTE_CONTENIDO` y marca `NO_APLICA_A_EJERCICIO_UNICO_2026` (commit **cf91d3f0**): el **BOE-A-2026-14624** no exige supuesto práctico separado; la ausencia de casos es correcta. El centro de entrenamiento ya no muestra el bloque vacío cuando no hay supuestos (commit **b9db125e**) y se invalidó la caché de `practice.html` (commit **b196f559**). **No generar supuestos UC3M para cubrir una métrica ficticia**.
- **Constitución y reforma 2026:** cotejados [Constitución BOE vigente](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) y [Ley Orgánica 2/2026 sobre la LOREG](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14329). Los manuales y bancos de **Tema 1 de UC3M y La Puebla ya contienen** el artículo **69.3** reformado y las **4 reformas constitucionales** de **1992, 2011, 2024 y 2026**; comprobación documental sin modificaciones ni segunda auditoría innecesaria. **No confundir** este cotejo puntual con certificación integral del tema.
- **Estado técnico**: el código de práctica se ha analizado sintácticamente sin error en el entorno de revisión, los **225 IDs** se compararon con **20 bancos reales**, y la prueba aislada UC3M de **75 tarjetas, cinco escenarios y reloj 60:00** obtuvo **PASS**. **Sigue pendiente** verificar que GitHub Actions muestre éxito para el último commit y probar navegador real.

### Cotejo jurídico complementario de materias universitarias

- **LOSU 2/2023 y Estatutos UC3M:** se revisaron los preceptos oficiales de [LOSU (BOE-A-2023-7500)](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500) y [Estatutos UC3M (BOE-A-2003-17782)](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782). Se reforzó la **trazabilidad normativa de 21 preguntas** ya existentes: **9 del tema 14** (derechos del estudiante, presupuestos, órganos y 5 % de investigación) y **12 del tema 15** (Defensor Universitario, órgano de contratación y reforma estatutaria), con mención expresa al artículo y documento BOE, **sin modificar sus opciones ni su respuesta correcta**. Commits **ed76c4a7** y **56ba55fb**. La revisión de fuentes y la incorporación de citas no equivale a revisión exhaustiva de todos los distractores.
- **Corte normativo importante UC3M T16:** el [RD 822/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781) aparece en el BOE consolidado con actualización publicada el **23/10/2026**. La **base primera.7** UC3M define como aplicable la norma vigente al publicarse la resolución definitiva/admisión y anuncio de ejercicio, cuya fecha exacta requiere lectura del documento oficial. Por tanto **no trasladar automáticamente** una modificación de **23/10** al examen; [fuentes del tema 16](content/uc3m/tema-16/fuentes.md) actualizadas como **alerta temporal pendiente de cotejo** (commit **a5249f67**). **No se declara por defecto que la reforma sea exigible ni que no lo sea**.
- **Próxima comprobación obligatoria en UC3M:** abrir la **resolución definitiva original** y contrastar su fecha de publicación antes de elegir versión del RD 822/2021, LOSU u otra norma reformada. Priorizar preguntas normativas de temas 14–16 por su proximidad al ejercicio y guardar correcciones verificadas.

### Siguiente paso sin reiniciar

- **La Puebla C2 (14/11):** completar auditoría sustantiva de plazos, órganos, excepciones y preguntas de mayor riesgo; no rehacer los 5 simulacros ni la corrección del tema 6 ya documentados.
- **UC3M C2 (21/11):** profundizar en normativa específica y reforma aplicable a la **fecha de corte de las listas definitivas**, comprobar la página original del llamamiento y auditar las **250 preguntas** conforme al programa exacto.
- **CI:** consultar resultado del workflow `validate.yml` más reciente; en caso de fallo abrir el paso nominativo y corregir **causa verificada**. Sin SUCCESS del último commit, no declararlo saneado.
- **Después:** reanudar `DT-C2-A` de Diputación Auxiliar C2 con tema 6 OAPGT al final, y C1. Mantener **este archivo** como fuente única y la política de avisos solo para incidencias relevantes.


## 16. Cotejo jurídico transversal noviembre: nulidad universitaria y secuencia tributaria

**Fecha de trabajo: 02/11/2026.** Bloque de corrección jurídica transversal que **reutiliza** los manuales y matrices ya existentes. **No implica recertificación integral de 99 temas ni éxito de GitHub Actions.**

### A. UC3M, bloque universitario (especialmente tema 16)

**Novedad jurídica comprobada en BOE:** [Sentencia del **Tribunal Supremo de 6/10/2026**, BOE **23/10/2026**, ref. **BOE-A-2026-22083**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083), que **anula el RD 905/2025**, antes publicado el **08/10/2025** ([BOE-A-2025-20002](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-20002)). El análisis oficial señala la **nulidad de su modificación al art. 22.4 y referencias del RD 822/2021**. **No equivale a derogación del RD 822/2021**.

**Riesgo de examen:** el texto consolidado del RD 822/2021 aparece actualizado el **23/10/2026** debido a la resolución judicial; OpoWeb no debe enseñarlo sin más como la versión de corte del examen UC3M. La **base primera.7 de BOE-A-2026-14624** fija la legislación exigible **en la fecha de publicación de las listas definitivas y anuncio del ejercicio**. La ficha oficial de UC3M confirma que existe resolución definitiva pero el acceso al documento original no ha permitido acreditar su **fecha exacta**; ADAMS indica **01/10/2026**, dato **secundario no validado**. Tampoco se presume el efecto retroactivo concreto de la nulidad sobre una pregunta hipotética sin resolución del tribunal.

**Archivos realmente corregidos:**
- [Tema 16, fuentes](content/uc3m/tema-16/fuentes.md), commit **51789af3**: documento original de nulidad, artículo afectado, cronología y límites de lo verificado.
- [Guía de examen UC3M](content/uc3m/GUIA_EXAMEN_2026.md), commit **696be82f**: separa reforma universitaria de anulación judicial y distingue ventana exigible.
- [Matriz tema 16](content/uc3m/tema-16/matriz.json), commit **a3a84b5e**: riesgo temporal estructurado y pruebas pendientes.
- [Manual tema 16](content/uc3m/tema-16/manual.md), commit **5d0e6a2b**: advertencia visible al estudiar, enlazada a fuentes.

**No se han alterado soluciones por simple actualización de fecha.** Siguiente control universitario concreto: obtener el **PDF original** de resolución definitiva de admisión y llamamiento, confirmar **fecha de publicación** y determinar las normas efectivamente exigibles; revisar los ítems de temas **14–16** que puedan depender de esa temporalidad.

### B. La Puebla, bloque local-tributario (temas 10 y 12)

**Hallazgo real adicional:** el [análisis oficial del TRLRHL, BOE-A-2004-4214](https://boe.es/diario_boe/txt.php?id=BOE-A-2004-4214) señala que el **RDL 26/2026, de 29/09**, modificó inicialmente los **arts. 72 y 107.4**, pero la [**Resolución de 02/10/2026**, BOE-A-2026-20526](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-20526) **dejó sin efecto** esa modificación. Posteriormente, el [**RDL 29/2026 de 06/10**, BOE-A-2026-20823](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-20823) estableció la nueva regulación de los artículos. **No mezclar normas de septiembre sin efecto con el régimen que sigue la actualización del 07/10**. Las reglas temporales del IBI y los coeficientes del IIVTNU siguen consignadas como *complemento ajeno al núcleo del Tema 12*.

**Correcciones:**
- [Manual tema 12](content/la-puebla/tema-12/manual.md), commit **8394ffa0**: anota la sucesión **RDL 26/2026 dejado sin efecto → RDL 29/2026**.
- [Fuentes tema 12](content/la-puebla/tema-12/fuentes.md), commit **4e792e1a**, y [matriz](content/la-puebla/tema-12/matriz.json), commit **ffbe35b8**: añaden las referencias del BOE y el estado temporal de cada norma.
- [Manual tema 10](content/la-puebla/tema-10/manual.md), commits **637912e9** y **c0d185de**: sustituye «última actualización 03/06/2026» presentada como vigente por el registro histórico de julio y el **control puntual de 02/11**. El núcleo de este tema se refiere a delegación, colaboración, beneficios y obligaciones tributarias; la LGT consolidada figura con última actualización publicada **21/12/2024**, mientras la actualización posterior del TRLRHL afecta a tipos/coeficientes de otros epígrafes.

### Puertas de salida y continuación

- **Estructura:** los archivos y JSON modificados fueron analizados al prepararlos, pero **no** se ejecutó la batería completa CI de la última revisión ni una prueba real de navegador móvil. **Estado CI = PENDIENTE**, como en §14.
- **Exactitud legal de preguntas:** verificados los textos BOE de las novedades citadas; **no** se da por certificado el banco completo de La Puebla o de UC3M. No modificar respuestas sin base normativa exacta.
- **Siguiente bloque sustantivo:** completar la revisión de los distractores jurídicos de **La Puebla temas 3–5 y 10–14**, conservar los 5 simulacros existentes, y continuar en paralelo el bloque **UC3M temas 14–16** con fecha de corte por verificar. No reabrir trabajo ya documentado en §12–15. Tras exámenes, reanudar **Diputación C2 DT-C2-A**, manteniendo **tema 6 OAPGT al final**, y luego Diputación C1.



## 17. Incidencias GitHub Actions y Radar de empleo — **02/11/2026**

**Incidencia aportada por el usuario:** las capturas del workflow **«Puerta de cierre Fase 2» #66 y #74** demuestran que los pasos de validación y generación de diagnóstico habían terminado correctamente, pero el paso **«Publicar evidencia»** falló con `[rejected] main -> main (fetch first)` / **non-fast-forward**. **Causa confirmada: colisión entre commits concurrentes**, no una prueba jurídica o JSON fallida. La advertencia sobre Node 20 y `ubuntu-latest` no era la causa.

**Corrección:** [`.github/workflows/phase2-gate.yml`](.github/workflows/phase2-gate.yml), commit **f819fc4d**: desactivado `push` automático de la puerta histórica y conservada únicamente ejecución **manual**; `permissions: contents: read`; validación con `npm run test:all` que falla solo si falla la prueba; diagnóstico guardado como **artefacto de GitHub Actions** (`actions/upload-artifact@v4`) **sin escribir en main**; Node 24 y Ubuntu 24.04. No repetir correcciones de este error si no hay ejecución nueva con fallo genuino. El flujo CI principal `validate.yml` continúa activo.

**Comprobación de CI efectiva:** [«Validar OpoWeb v2» ejecución **1819**, 02/11/2026](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41501154965) completada con **SUCCESS**: sintaxis, La Puebla, simulacros de Puebla y UC3M, Diputación C1 y estructura de **99 temas** aprobadas. Se han observado también **SUCCESS posteriores**: ejecución ligada al commit **6908037f** ([run 41522184321](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41522184321)) para los cambios iniciales de Radar. **Esto prueba controles técnicos, no revisión exhaustiva jurídica ni la ejecución efectiva de los lectores de Radar**.

### Radar: incidencia real de calidad, sin ocultar fuentes fallidas

**Síntoma mostrado por el usuario:** emails con **fecha de detección y localidad**, pero sin puesto, grupo, titulación o plazo. El usuario necesita nuevas oportunidades reales de **Toledo provincia y sur de Madrid**, cualquier puesto accesible, incluidas bolsas y sustituciones. No enviar como oportunidades completas anuncios sin información básica.

**Diagnóstico del código:** `tools/radar-enrich.mjs` únicamente intentaba leer documentos con `actionable === true`, pero `actionable` exige que el puesto ya estuviese identificado desde el título. Los anuncios con **títulos genéricos** quedaban, precisamente por esa condición, **sin consultar**; el usuario recibía o veía filas de escaso valor. Algunas fuentes presentan errores **HTTP 403/404, redirecciones o certificados** en `data/radar-direct-latest.json`. Esas fuentes **no están verificados ni recuperadas** por estas modificaciones.

**Mejoras realizadas en GitHub:**
- [`tools/radar-enrich.mjs`](tools/radar-enrich.mjs), commits **b4d28ab1** y **b5a35fe9**: ahora intenta documentos oficiales también de ofertas con título genérico y **puesto aún no reconocido**, priorizando los que lo necesitan; extrae **puesto y número de plazas** únicamente cuando aparecen expresamente en texto legible, sin inferir grupos o plazos. Orden de extracción corregido.
- [`tools/radar.mjs`](tools/radar.mjs), commit **e17f564c**: límite de lecturas ampliado de **35 a 70** documentos por ejecución (sigue sujeto a disponibilidad de fuentes y tiempo).
- [`tools/radar-notify.mjs`](tools/radar-notify.mjs), commit **ebdaa233**: emails solo de nuevas fichas con **puesto identificado y al menos otro dato útil contrastable**. Añadidos **plazas, titulación y plazo** a los correos, sin simular información ausente. Las ofertas inciertas permanecen en Radar para revisión y **no se envían como si fueran oportunidades suficientes**.
- [`assets/radar.js`](assets/radar.js), commit **43b658dd**: fichas legibles con campos disponibles, pendientes resumidos y distinción entre documento leído y datos solo inferidos del título. Los incompletos quedan en vista específica.
- [`tests/radar-enrich.mjs`](tests/radar-enrich.mjs), commit **6908037f**: prueba de regresión: título genérico de Camarena, cuerpo oficial con dos plazas de Auxiliar Administrativo y grupo C2; comprobar identificación sin inventar fecha. **CI principal SUCCESS de ese commit**.

**Mejora adicional (commit 5b5b7b6a):** las fichas antiguas que se habían marcado como «leídas» pero seguían sin puesto identificado se reprocesan **una sola vez con el extractor actualizado**, identificadas mediante `enrichmentVersion: 2`; evita que esas fichas queden permanentemente incompletas pese a la nueva función. Este reintento no garantiza que el origen publique el dato.\n\n**Estado real:** el sistema es ahora más selectivo y puede enriquecer documentos genéricos, pero **NO se ha acreditado todavía una ejecución programada completa que produzca nuevos registros útiles ni recuperado las fuentes HTTP 403/404**. La ejecución del Radar disparada tras cambios estaba pendiente al comprobarla. **No declarar Radar plenamente fiable ni afirmar que ya identifica todos los anuncios.**

**Siguiente bloque concreto:** observar resultado del próximo workflow Radar (lecturas, `enrichmentStatus.read` y registros realmente completados); revisar las fuentes que devuelven errores 403/404; mejorar extracción de cuerpos que tienen varias plazas distintas sin atribuir una sola categoría a un anuncio mixto; mantener los emails limitados a oportunidades útiles y el resto en cola. Si después de ejecuciones reales la tasa de fichas aprovechables sigue siendo muy baja, **pausar las notificaciones automáticas de Radar antes que seguir enviando ruido** y mantener un buscador manual/curado de fuentes oficiales. No desactivar el temario ni el seguimiento de convocatorias.


## 18. Radar: corrección de regresión y publicación concurrente (capturas del usuario, 02/11/2026)

**Incidencia 1: workflow Radar #76 (captura del usuario):** falló la aserción de lugar del test de fixtures porque se esperaba la cadena `comprobar destino` y el normalizador devolvía `Sur de Madrid (centro por comprobar)`. **La versión actual de `tests/radar-fixtures.mjs` ya tolera ambas expresiones** con `/por comprobar|comprobar destino/`, conservando lo importante: que el destino no se declare confirmado. **Comprobación directa:** en [workflow 41522524710](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41522524710) posterior, el paso `Validar perfil y casos conocidos` terminó en **SUCCESS**, incluidos fixtures, enriquecimiento y prueba Python del radar directo. No repetir un arreglo ya aplicado por el mero aviso antiguo.

**Incidencia 2: workflow Radar del commit 5b5b7b6a, prueba superada pero guardado fallido:** análisis de [logs íntegros de 41522524710](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41522524710): el proceso revisó **739 anuncios**, tenía **1.156 candidatos acumulados**, **0 nuevos** y pudo leer solamente **4/70 documentos** seleccionados. Las pruebas, rastreo y el paso de correo terminaron bien (`Sin novedades para notificar`); **falló la publicación `git push` non-fast-forward** porque otros commits avanzaron `main` durante los ~**4 minutos** de rastreo. Es un fallo de concurrencia, no prueba de temario corrupto ni error de correo.

**Cambios efectivos de este bloque:**

1. [`radar-empleo.yml`](.github/workflows/radar-empleo.yml), commit **4d0e25c6**: elimina disparos automáticos ante cada push de código (originaban decenas de rastreos simultáneos y correos rojos); **mantiene horario programado 05:17 y 15:17 UTC** y lanzamiento manual. El paso de guardado hace hasta **cinco reintentos** y aplica `git fetch origin main` + `git rebase origin/main` ante commits editoriales concurrentes, **sin force push y sin ocultar conflictos reales**. El correo se emite **únicamente después de guardar**; así no notificamos anuncios que no pudieron persistirse.
2. [`radar-enrich.mjs`](tools/radar-enrich.mjs), commits **16105c46** y **7ab97d29**: prioriza URLs específicas de documentos **BOE/BOP/DOCM/PDF** antes que portadas municipales genéricas que devuelven errores; agrupa motivos de fallo de lectura (`HTTP 403`, `HTTP 404`, PDF no extraíble, tiempo agotado, otros) en `enrichmentStatus.failureReasons`. **No inventa plazos** ni califica como leído un documento inaccesible. **No significa que el 4/70 ya haya mejorado:** requiere una nueva ejecución completa.
3. [`tests/radar-enrich.mjs`](tests/radar-enrich.mjs), commits **0fb4e759**, **272cc68e**: regresiones de clasificación `HTTP 403` y de priorización de publicación BOE sobre una portada municipal cuando existe límite de lecturas.
4. [`validate.yml`](.github/workflows/validate.yml), commits **f7d858b6** y **82e3d68e**: pruebas del Radar en **CI principal** de cada commit, incluida sintaxis de interfaz, motor y notificaciones, fixtures JavaScript y pruebas Python. La ejecución del commit **f7d858b6** obtuvo **SUCCESS**, [run 41527149504](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41527149504). Otras ejecuciones posteriores del CI principal también verdes; la correspondiente al último commit debe consultarse aparte.
5. [`assets/radar.js`](assets/radar.js), commit **b647dfcf**: publica en Radar la relación real de **documentos leídos / intentados** y advierte si se han podido leer menos del **20 %** de un lote de **10 o más**. Actualizada caché de la interfaz en [`radar.html`](radar.html), commit **f5c91aad**.

**Estado real:** la **validación técnica principal ha pasado para los cambios del Radar**, pero no se ha visto todavía un ciclo del nuevo workflow programado que complete **lectura, almacenamiento y correo** con el código corregido. Los avisos rojos de ejecuciones anteriores siguen siendo históricos, no desaparecen. Las fuentes municipales que responden **403/404** continúan sin solución automática garantizada. El dato anterior de solo **4/70 lecturas** demuestra que la calidad del buscador requiere auditoría de fuentes, no solo que el workflow salga verde.

**Siguiente paso prioritario:** tras la próxima ejecución programada, consultar su conclusión, la cantidad de documentos realmente leídos, `failureReasons`, el número de fichas con puesto+plazo+requisitos y qué fuentes fallan; si persiste una proporción de fichas útiles muy baja, reparar o sustituir **fuentes oficiales concretas** y valorar pausar **solo** emails de Radar que carezcan de datos. **No perder el seguimiento de convocatorias ni desactivar el temario.** No ejecutar de nuevo en cadena trabajos largos por cada commit.


## 19. Integración visual OpoRadar dentro de OpoWeb — 02/11/2026

**Petición del usuario:** OpoRadar estaba en la misma publicación GitHub Pages, pero apenas era visible; se solicitó incorporarlo a OpoWeb. Tras una primera integración, el usuario indicó que **la presentación visual se veía mal**. No confundir un enlace técnico disponible con una experiencia de navegación terminada.

**Alojamiento real:** estático en **GitHub Pages** bajo el mismo repositorio y dominio que OpoWeb: [portada](https://ivannunezrodriguez.github.io/opoweb-v2/) y [OpoRadar](https://ivannunezrodriguez.github.io/opoweb-v2/radar.html). Los anuncios se leen en el navegador desde `data/radar.json`; el rastreo se ejecuta en GitHub Actions. No hay otro servidor web ni una app independiente que instalar.

**Trabajo realizado:**

- **Navegación común** en `index.html`, `practice.html` y `radar.html`: enlaces a temarios, práctica y OpoRadar; página activa marcada y botón de tema preservado (commits `0a036454`, `9857940b`, `d5c600c4`).
- **Acceso desde portada**: `assets/app.js` incluye bloque de Radar con acceso directo, resumen asíncrono de registros con puesto identificado, fecha de recopilación y advertencia de que registro no equivale a plazo abierto; alternativa a simulacros y sin bloquear el temario. El bloque se situó **después de la introducción del programa** para no relegar las convocatorias (commits `2e314e31`, `0e64ee6c`, `a116ddbb`). No se inventa ningún puesto ni fecha si `data/radar.json` no carga.
- **Corrección de presentación tras incidencia visual**: `assets/styles.css` añade estilos de navegación, estados activos, foco de teclado, tarjetas y variantes móvil con menú compacto **Temarios / Practicar / Radar** y disposición de una columna en pantallas pequeñas. Los tres HTML utilizan versión de caché `styles.css?v=0.27.34`; portada incrementa el import dinámico de `assets/app.js`. Commits `f38ca04c`, `21521439`, `b03b310e`, `a2ce8c8b`.
- **Prueba de regresión:** nuevo `tests/validate-portal-navigation.mjs` verifica presencia de enlaces, página activa, etiquetas cortas, CSS responsive, conexión Radar en portada y orden de secciones (commit `f2226c4e`). Incorporado como paso nombrado en `.github/workflows/validate.yml` (commit `2aaa6b30`). Se comprobaron además las referencias de HTML y JS mediante lectura directa de los archivos del repositorio. **No se ha certificado visualmente el resultado de la versión pública en navegador real**; el CI solo verifica estructura y sintaxis.

**Siguiente paso**: comprobar el despliegue de GitHub Pages asociado al último commit y, si el usuario aprecia nuevamente un problema en móvil, corregirlo en el propio CSS con la anchura exacta observada. Mantener separados los controles de navegación de la auditoría de fiabilidad del Radar (último apartado 18) y de la del temario.


## 20. UC3M llamamiento oficial y reanudación focalizada LP 3–4 — **02/11/2026**

### Actualización del ejercicio UC3M C2

**Fuente nueva aportada directamente por el usuario:** captura legible de **resolución de la Universidad Carlos III de Madrid de llamamiento al ejercicio único** de la Escala Auxiliar Administrativa **C2**, resolución relativa a la convocatoria de **30/06/2026**. **Primero** de su parte dispositiva: personas definitivamente admitidas convocadas al test el **sábado 21/11/2026, a las 10:00 horas, en el Campus de Getafe**, **llamamiento único**; **las aulas se determinarán por resolución posterior**. Fuente pública de contraste: [portal oficial UC3M del proceso 2026](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026). El documento mostrado no permite determinar la **fecha exacta de publicación de la resolución de listas definitivas**, necesaria para el corte normativo de la **base primera.7**; no inventarla. **No se ha comprobado la admisión individual**.

**Archivos modificados en `main`:** `data/convocatorias.json` (`562da15e`), `data/seguimiento-uc3m.json` (`1c7bfc9e`), `data/programa-uc3m-auxiliar-administrativa-2026.json` (`74c49db4`), `content/uc3m/GUIA_EXAMEN_2026.md` (`a8c93992`), `assets/practice.js` (`4ce598d5`) y `practice.html` (invalida caché del módulo en `99977f62`). La fecha, hora y campus pasan de provisionales a **confirmados por resolución**; se mantiene **aula pendiente** y **corte de vigencia sin verificación primaria**. La guía preserva los **70+5 ítems**, **60 minutos** y la distinción entre puntuación directa y corte del tribunal. No se cambia ningún banco de preguntas UC3M ni se confirma aula sin anuncio.

### Auditoría jurídica sustantiva de La Puebla, tema 3

**Fuente contrastada:** [Ley 39/2015, texto consolidado BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), **arts. 58–62 y 96.6**. En el test `LP-T03-003` se atribuía a la **orden superior** una vinculación necesaria e incondicional presentada como respuesta literal, cuando **art. 60.1** la define por el origen jerárquico y **art. 61.2** declara expresamente **no vinculante** la petición razonada. Se conserva la respuesta **C**, se reemplaza el enunciado por una pregunta directamente verificable y se ajusta la justificación y el Foco Examen. También se completa `LP-T03-011`: los **30 días** de tramitación simplificada se cuentan **desde el día siguiente a la notificación del acuerdo de tramitación simplificada**, salvo que reste menos para la vía ordinaria. Se añadieron al **manual** tabla de las cuatro formas de iniciación de oficio, advertencia sobre vinculación, regla de cómputo del art. 96.6 y dos focos de examen. Commits de **manual `2f0d699f`**, **banco `4927040b`**. **12 preguntas conservadas**; las letras correctas de estas dos no cambian. No se ha recertificado íntegramente la totalidad de artículos de T3.

### Auditoría jurídica sustantiva de La Puebla, tema 4

**Fuentes contrastadas:** **arts. 24.1, 121–122 de Ley 39/2015**, especialmente la excepción de **doble silencio positivo** limitada al supuesto de alzada contra desestimación presunta de solicitud inicial y fuera de las materias exceptuadas (petición, facultades de dominio o servicio público, daño ambiental, responsabilidad patrimonial). Añadidos al manual del tema 4 **tabla comparativa**, órganos, **plazo de 3 meses** y Foco Examen para evitar que se aplique automáticamente a una **alzada contra acto expreso** o a **reposición**. **Manual `5ec6963a`**. **No se modificó el banco de T4** (12 ítems existentes) y no se declara recertificación integral de T4.

### Control técnico y siguiente marcador

- **Comprobación directa del repositorio:** las ediciones JSON de convocatoria, seguimiento y programa se analizaron como JSON al grabarse; los bancos de LP tema 3 conservaron **12 preguntas** y las claves de corrección. Se mantuvieron las referencias a normas y el estándar de Foco Examen. **No se pudo ejecutar `npm test:all` localmente**, pues el contenedor de revisión no tiene resolución de red a GitHub. La consulta disponible de estados del último commit no devolvió comprobaciones, por lo que **CI del último commit: sin confirmar**, no afirmar `SUCCESS`.
- **Incidencia visual OpoRadar:** `assets/radar.css` (`01e4a521`) reemplaza variable `--card` inexistente por las superficies ya definidas del tema, y `radar.html` (`76b39f15`) invalida la caché CSS; **el usuario confirma expresamente que ya se ve correctamente**. Este hecho cierra la incidencia visual del §19, **no** demuestra calidad integral de las fuentes del Radar del §18.
- **Próxima auditoría:** La Puebla, continuar **temas 3–5 y 10–14**, pasando de los conceptos ya afinados a **verificación de preguntas sobre plazos, órganos, excepciones y liquidación tributaria**, con contraste en fuentes oficiales. UC3M: localizar el original de la **resolución definitiva con fecha de publicación**, decidir la versión normativa exigible y proseguir materias universitarias 13–17; publicar cualquier actualización futura de aulas **solo con resolución UC3M**. Tras los exámenes urgentes, volver a **Diputación C2 DT-C2-A**, manteniendo **OAPGT tema 6 al final**.


## 21. Auditoría focalizada LOREG, LGT y eIDAS — **02/11/2026**

**Contexto:** continuación del §20 con prioridad del **examen La Puebla de 14/11/2026**, conservando UC3M **21/11/2026**. La revisión de **preguntas y fuentes** no equivale a recertificación íntegra de los **19 temas**, ni a revisar de nuevo los simulacros existentes. Se han mantenido las letras de respuesta, el número de preguntas por banco y la aprobación editorial histórica registrada.

### A. Tema 5 · Excepciones por población en elecciones municipales

**Evidencia jurídica:** [LOREG consolidada, BOE-A-1985-11672, arts. 180, 184, 196](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672). Los enunciados previos de `LP-T05-011` y `LP-T05-012` daban las reglas del **5 %** de votos válidos para reparto de Concejales y del **cabeza de lista más votada** para Alcaldía **sin delimitar que corresponden al régimen de listas**. El **art. 184** establece **voto limitado individual** en municipios de **hasta 250 residentes** que no funcionen en **Concejo Abierto**, y el último párrafo del **art. 196** contiene una regla específica para **100–250** en la elección del Alcalde. Se han delimitado ambos enunciados a **municipios de más de 250 habitantes con listas** y ampliado el manual con tabla comparativa, ejemplos y focos; respuestas **B** y **C** conservadas.

**Commits:** `content/la-puebla/tema-05/manual.md` **`7ba84b7c`**; `preguntas.json` **`77e7fb64`**; `fuentes.md` **`845c219a`**; `matriz.json` **`eba04e7b`**. **No afirmar** que toda elección municipal funciona por listas proporcionales, ni que el umbral del **5 %** sea universal.

### B. Tema 11 · Solicitudes reiteradas y excepción de sanciones

**Evidencia jurídica:** [Ley 58/2003, General Tributaria, art. 161.1–2](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) y [art. 167.1](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186). Una solicitud de aplazamiento/fraccionamiento/compensación en período voluntario impide **en general** iniciar ejecutiva; **no** lo impide otra solicitud de la misma deuda tras **denegación previa** de las figuras enumeradas en el art. 161.2 y **vencimiento sin pago** del nuevo plazo abierto. El recurso en **tiempo y forma contra sanciones** tiene tratamiento propio hasta la **firmeza administrativa** y fin de su plazo voluntario. Se han añadido advertencias al manual y a bloques de aplazamiento/ejecutiva y precisado `LP-T11-006`, con la respuesta **C** conservada.

**Commits:** `bloque-02-aplazamiento-compensacion.md` **`9aed43f3`**; `bloque-04a-ejecutiva-providencia.md` **`a9a00755`**; `manual.md` **`0bc22ec3`**; `preguntas.json` **`7a6bd3d2`**.

### C. Tema 13 · Plazos de certificados y servicios cualificados

**Evidencia jurídica:** [Reglamento eIDAS 910/2014 consolidado (18/10/2024), arts. 20.1, 20.1 bis y 24.3](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18) y [Ley 6/2020, arts. 4.2 y 9.3.a](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). Distinciones: **auditoría ordinaria como máximo cada 24 meses**, **preaviso de la auditoría planificada con al menos 1 mes de antelación**, **informe en 3 días laborables** desde que el prestador lo recibe y **publicación de revocación en un máximo de 24 horas** desde la solicitud, con eficacia desde publicación; además **5 años** de certificado cualificado y **15 años** de conservación. Se ha ampliado el cuadro de plazos y los Focos Examen del manual, las fuentes y las justificaciones de `LP-T13-008` y `LP-T13-012`, conservando respuestas **B** y **C**.

**Commits:** `manual.md` **`591c0d16`**, corrección terminológica del preaviso **`6fd7d41b`**; `fuentes.md` **`54b035a0`**; `preguntas.json` **`32adca60`**. No se asegura cobertura completa de eIDAS ni de todos los distractores.

### D. Precisión menor en tema 3

`LP-T03-003` corregida de «la **instrucción** procede de superior» a «una **orden** emitida por órgano superior», conforme al **art. 60.1 Ley 39/2015**; cuarto distractor también adaptado, respuesta **C** conservada. Commit **`fa4536d7`**. No altera correcciones sustantivas del §20.

### Validación e hito siguiente

**Comprobación directa en GitHub:** **12 archivos** revisados tras su actualización; los **cuatro bancos modificados** (**T3, T5, T11, T13**) conservan **12 preguntas** con **ID únicos**, **4 opciones** y `respuestaCorrecta` en rango. Verificadas la delimitación de T5, excepción de T11, cifras de T13 y precisión de T3 mediante lectura de archivos actualizados. **No es validación de la batería completa `npm run test:all` ni certificación de los 96 ítems del bloque T3–5/T10–14**.

**Siguiente marcador exacto:** auditar críticamente **temas 10 y 12 de La Puebla**, especialmente plazos, obligados tributarios, sujetos pasivos, exenciones y fronteras entre núcleo oficial y ampliación; continuar excepciones residuales de **T3–5, T13–14** y resolver verificaciones de **UC3M 14–16** con la **fecha real de corte normativo** que determinen sus listas definitivas. El **CI del último commit queda pendiente de comprobar**, no declarar que ha terminado en `SUCCESS`. Mantener **Diputación C2 DT-C2-A** en cola y **OAPGT T6 al final**.


## 22. Auditoría sustantiva focalizada: La Puebla temas 10 y 12 — 02/11/2026

**Bloque concluido en su alcance limitado:** lectura de **12 preguntas de T10** y **12 de T12** en GitHub, contraste puntual de respuestas, plazos y excepciones con **LGT (BOE-A-2003-23186)** y **TRLRHL (BOE-A-2004-4214)** consolidados. No son **24 preguntas jurídicamente certificadas de manera integral**: el contraste sustantivo se ha concentrado en disposiciones específicas. Se respeta la aprobación editorial histórica de julio sin elevarla a recertificación de noviembre.

### 22.1 Tema 10: recargos por extemporaneidad, art. 27 LGT

**Fuente oficial:** https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186 (art. **27.2–5**). Además del esquema de **1 % + 1 % por mes completo** y **15 % una vez transcurridos 12 meses** (intereses posteriores), el artículo contiene **no exigencia de recargo por regularización de hechos idénticos en otros períodos si se cumplen todas las condiciones**, **posible concurrencia con recargos de ejecutiva si no se paga**, y **reducción condicionada del 25 % del importe del recargo**. El manual solo desarrollaba el esquema ordinario: se añadió tabla de plazos, condiciones, excepciones y bloque de foco de examen; se acotó expresamente **LP-T10-007** al caso general con respuesta **C** conservada.

**Archivos/commits:** tema 10 **manual.md** `30e3125b`, precisión temporal `f1a9b98c` y metadatos de revisión `d7ffef91`; **preguntas.json** `e9bdb190`; **fuentes.md** `1c160805`; **matriz.json** `a6852012`.

### 22.2 Tema 12: corrección de error efectivo en IBI, arts. 61.5.b y 62.1.b TRLRHL

**Fuente oficial:** https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214. El bloque IBI enseñaba incorrectamente que los bienes **patrimoniales municipales** no estaban sujetos solo «cuando también estén cedidos gratuitamente a otra Administración para un servicio público» y enumeraba «bienes comunales» como una categoría explícita del **61.5.b**. El **art. 61.5.b** no impone la supuesta cesión gratuita: para bienes patrimoniales del **municipio en que están enclavados** prevé **no sujeción**, con excepción de los **cedidos a terceros mediante contraprestación**. El **art. 62.1.b** establece **exención** de bienes comunales y montes vecinales en mano común; no mezclar los dos títulos legales.

**Corrección:** cuadro comparativo + distinción de supuestos, precisión de la justificación de **LP-T12-003** conservando respuesta **B**. Aplicada la misma corrección, al detectarse el texto erróneo duplicado, a **Diputación Auxiliar C2 tema 13**. **No se ha reiniciado la auditoría de Diputación** ni se declara aquel tema certificado.

**Archivos/commits:** tema 12 **bloque-02-ibi.md** `4e61bf22`, **preguntas.json** `538cf984` / refinamiento `eb6b8b9d`, **fuentes.md** `59008387`, **matriz.json** `70f17e02`. **Diputación C2 tema 13 manual.md** `f179eee0` (IBI).

### 22.3 Tema 12: grupo de empresas en exención del IAE, art. 82.1.c TRLRHL

**Fuente:** https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214 (art. **82.1.c**, regla **3.ª**). El **INCN** debe ser **inferior a 1.000.000 €**; no incluye **1.000.000 € exactos** y, cuando exista **grupo de control del art. 42 del Código de Comercio**, se considera el volumen del **conjunto de entidades del grupo** con independencia de obligación de consolidar. Se añadieron tabla y foco de examen al bloque IAE; **LP-T12-006** precisa la regla sin cambiar respuesta **C**. Corrección replicada en el mismo **tema 13 de Diputación C2**, sin rehacer su auditoría.

**Archivos/commits:** **bloque-03-iae.md** `46a931f4`; tema 12 **preguntas.json** `538cf984` / `eb6b8b9d`; **Diputación C2 manual.md** `019d1dd3`.

### 22.4 Pruebas de integridad, límites y siguiente subbloque

**Verificación directa posterior de 10 archivos modificados:** los bancos **T10** y **T12** mantienen **12 ítems** cada uno, ID únicos, **cuatro opciones** y respuestas en rango. Conservados índices de las preguntas afectadas (**LP-T10-007: C; LP-T12-003: B; LP-T12-006: C**). Revisada la consistencia de la sección IBI, la regla de grupo del IAE, las matrices y las fuentes en el repositorio. **No se ha ejecutado** `npm test`/`npm run test:all` localmente porque **GitHub no resuelve desde el contenedor**, y **no hay evidencia de SUCCESS de GitHub Actions del último commit**. Tampoco se ha realizado prueba gráfica en navegador.

**Siguiente marcador exacto:** inspección de **sujetos pasivos del Tema 10 (LGT 35–48) y Tema 12 (TRLRHL 63, 83, 94, 106)** y de las excepciones y distractores jurídicos aún sin cotejo íntegro. En paralelo, **UC3M temas 14–16**, tras verificar la fecha oficial de publicación de la resolución definitiva que fija el corte normativo. Mantener **Diputación C2 DT-C2-A** aplazado y el tema **6 OAPGT al final** según decisión registrada.


## 23. Control Radar publicado y revisión de sujetos pasivos — 03/11/2026

### 23.1 Radar: evidencia disponible, sin dar por validado el ciclo completo

Se leyó primero este registro, `PROJECT_RULES.md` y los commits recientes. El último commit de actualización de datos `9ae290565934871690ff1aace4da75c9329b22d9` modifica `data/radar.json`, `data/radar-direct-state.json` y `data/radar-direct-latest.json`: **hay evidencia de persistencia efectiva en Git**, posterior a las correcciones históricas. La lectura textual de `data/radar.json` mediante el conector GitHub devolvió **contenido vacío** (probable límite de tamaño del conector), por lo que **no se certifica su cobertura actual, los nuevos puestos, los correos ni la tasa de documentos leídos**. Tampoco se obtuvo la conclusión de la ejecución programada completa: el conector permite consultar jobs por ID conocido, pero no enumerar los nuevos runs; la API pública consultada por web no fue accesible. No se confunde la presencia de un commit con el éxito del correo.

Como contraste histórico, el run **41522524710** devuelve job `radar` con conclusión **failure**, coherente con el fallo previo ya documentado; el run **41527149504** devuelve job `validate` con conclusión **success**. El workflow vigente `.github/workflows/radar-empleo.yml` mantiene únicamente disparadores `schedule` y `workflow_dispatch`, rebase y cinco intentos de push, y guarda datos antes del correo: **no modificar sin nuevo error acreditado**.

**Incidencia de fuente identificada por diff real:** el rastreo directo de **Getafe** (`https://sede.getafe.es/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_EMPLEO_EMPLEO`) ha registrado `SSL: CERTIFICATE_VERIFY_FAILED`; **Humanes** (`https://ayto-humanesdemadrid.es/menu-concejalias/empleo-formacion-concejalia/`) ha registrado `BLOCKED`. No desactivar verificación TLS ni sustituir estas fuentes por páginas no contrastadas. Próximo paso: identificar, probar y documentar para cada municipio un destino **oficial** alternativo accesible, y verificar después que devuelve anuncios específicos, no solo una portada.

### 23.2 La Puebla: contraste focalizado de sujetos pasivos

Se cotejaron los **12 enunciados y justificaciones de T10** y los **12 de T12** con los textos consolidados de [LGT, arts. 35–48](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) y [TRLRHL, arts. 63, 83, 94 y 106](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), con atención a contribuyente, sustituto, responsable, sucesor, titular del permiso de circulación, exención de persona física en IAE y sustitución del transmitente no residente en IIVTNU. Los manuales de T10, T12/IBI y T12/IAE contienen ya secciones específicas sobre estas distinciones. **No se detectó en este cotejo focal un error inequívoco que exigiera modificar preguntas**. Se conservan los 24 ítems y sus claves; **no** se declara validación integral de distractores ni certificación jurídica de los temas. El TRLRHL consultado muestra consolidación con actualización publicada **07/10/2026**, la LGT **21/12/2024**.

**Siguiente bloque exacto:** (1) comprobar en GitHub Actions la **última ejecución programada** del Radar y sus logs, `failureReasons`, lectura de documentos y envío; verificar publicación de `data/radar.json` mediante descarga efectiva, no por estadísticas inferidas; (2) corregir fuentes municipales 403/404/TLS solo con sustitutos oficiales probados; (3) proseguir auditoría jurídica de La Puebla (14/11/2026) y UC3M C2 (21/11/2026), especialmente corte normativo UC3M y temas 14–16. Diputación C2 después, con OAPGT tema 6 al final.


## 24. Ley 40/2015 art. 10 y LOSU participación — **03/11/2026**

Se han leído primero este registro, las reglas vinculantes y los commits más recientes, sin reabrir el cotejo de sujetos pasivos de La Puebla (apartado 23) ni repetir las reformas tributarias de apartados 21–22.

### 24.1 La Puebla, tema 14: avocación por delegación sin subordinación jerárquica

**Norma primaria:** [Ley 40/2015, artículo 10.1–2 (BOE-A-2015-10566)](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), texto consolidado con última actualización publicada **02/08/2024**. Un órgano superior puede avocar asuntos de órganos dependientes por las circunstancias legales, pero si se delegó la competencia en un **órgano no dependiente jerárquicamente**, puede avocar **únicamente el órgano delegante**. Acuerdo **motivado**, notificación a los interesados si los hubiere antes o simultáneamente a la resolución final, sin recurso autónomo contra avocación. El **bloque 1 ya recogía de forma sucinta la excepción**: el error editorial consistía en que el **resumen del manual y la justificación del test LP-T14-004** solo resaltaban al superior, con riesgo de extrapolación. Se añadió tabla + Foco Examen y se amplió la pregunta y la trazabilidad; **respuesta B conservada**, banco **12 preguntas**.

**Commits:** `content/la-puebla/tema-14/bloque-01-organos-competencia.md` `5fef929a`; `manual.md` `4cb68435`; `preguntas.json` `2437ef05`; `fuentes.md` `5a29aa93`; `matriz.json` `f8430329`. Ninguno significa que los doce distractores del tema estén recertificados integralmente.

### 24.2 UC3M, tema 14: porcentajes normativos de representación

**Fuente primaria:** [LOSU, Ley Orgánica 2/2023, arts. 45.3 y 46.3 (BOE-A-2023-7500)](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500), texto consolidado con última actualización publicada **02/08/2024**. Porcentajes literales: **Claustro: mínimo 25 % de estudiantado; 51 % de personal de cuerpos docentes universitarios funcionarios y profesorado permanente laboral**. **Consejo de Gobierno: mínimo 10 % de estudiantado, 10 % de PTGAS, y un tercio de los miembros elegido por el Rector, incluyendo miembros natos en ese cupo**. Se incorporó tabla comparativa a manual y Foco Examen para diferenciar **25 % Claustro** de **10 % Consejo**. La pregunta genérica **UC3M-T14-002** fue sustituida por una específica sobre el mínimo del Claustro; **la respuesta correcta cambia intencionadamente de B a C**. Se conservan **14 preguntas** y sus otras claves. Esta actualización es legalmente verificable según versión consultada de LOSU, pero no establece la **fecha de corte normativo** exigible a la convocatoria UC3M, porque no se ha recuperado la resolución definitiva original fechada.

**Commits:** `content/uc3m/tema-14/manual.md` `b0273e30` y corrección exacta de referencia de los porcentajes del Claustro al **art. 45.3** en `fc593423`; `preguntas.json` `5ddfdb87`; `matriz.json` `bc53e95c`; `fuentes.md` `32271045`.

### 24.2 bis La Puebla, tema 14: excepciones del quórum y convocatoria

**Fuente primaria:** [Ley 40/2015, arts. 15.2 y 17.2–4 (BOE-A-2015-10566)](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566). Para **constitución ordinaria** se exigen **Presidente + Secretario + mitad de miembros**, pero existen reglas especiales de representación por **portavoces** en órganos del art. 15.2, régimen propio de **segunda convocatoria**, y **constitución sin convocatoria previa** cuando se reúnen **Secretario y todos los miembros** o suplentes y **todos deciden constituirse**. No confundir esta última unanimidad con la **mayoría** para declarar urgencia y tratar asuntos **fuera del orden del día** con **todos los miembros presentes**.

**Cambios:** `content/la-puebla/tema-14/bloque-02-colegiados-abstencion.md` commit `a962f431`; `manual.md` `e9d002cf`; `preguntas.json` `a6f49d5e` (**LP-T14-005**, respuesta **B** conservada); `fuentes.md` `13054a4f`; `matriz.json` `a506e967`. **Banco conserva 12 preguntas**.

### 24.3 Controles técnicos y restricciones

**Integridad comprobada:** lectura directa posterior en GitHub de **10 archivos** con **8 comprobaciones compuestas**: LP T14 conserva **12** preguntas y UC3M T14 **14**, índices en rango y 4 opciones, respuestas LP-T14-004 **B**, LP-T14-005 **B**, UC3M-T14-002 **C** (nueva), excepciones de artículos 10 y 17, porcentajes 45.3/46.3, fuentes y matrices. **CI real:** GitHub Actions `Validar OpoWeb v2`, [run 41654320401](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41654320401), terminó **SUCCESS** para commit `a506e967bdee1e37d6c27ab0d4c25060c3cd1dd7`. A esa hora, [Pages 41654320659](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41654320659) figuraba **queued**; la regeneración PDF de La Puebla estaba **in_progress**. **No afirmar despliegue o PDF terminado**. El CI no acredita revisión jurídica integral ni prueba de navegador móvil.

**Próximo marcador:** completar **La Puebla 14: abstención/recusación y excepciones aún abiertas**, luego **UC3M T15 y T16**, contrastando Estatutos UC3M [Decreto 1/2003 con modificación 95/2009](https://www.uc3m.es/about-uc3m/regulations/statutes-uc3m) y RD 822/2021 con el **corte normativo** de la convocatoria por fijar. El portal oficial UC3M 2026 confirma lista definitiva publicada y ejercicio el **21/11/2026**, pero su enlace público accesible aquí **no aporta fecha exacta de publicación del documento original**; no atribuir una fecha sin la resolución. Verificar **Radar** por evidencias efectivas de lectura/notificación, y no reabrir Diputación C2 hasta cerrar los exámenes urgentes; OAPGT T6 se conserva al final.

## 25. Radar: errores efectivos de fuentes y codificación de URL; La Puebla 14 art. 23 — 04/11/2026

### 25.1 Evidencia del Radar, límites y corrección concreta

Se leyeron primero este registro y `PROJECT_RULES.md`, así como el workflow vigente, la última captura directa disponible y los archivos de la revisión jurídica; se conservan los arreglos históricos del apartado 18 y los avances 23–24. La captura `data/radar-direct-latest.json` disponible mediante GitHub contiene **206 fuentes**: **40 READABLE, 121 PARTIAL, 45 ERROR**, y **4 entradas nuevas directas** (dos convocatorias UCLM adicionales y otras entradas, que no equivalen por sí solas a ofertas compatibles). Esta es **solo la captura directa**, no el total agregado `data/radar.json` ni una medición de documentos oficiales leídos. Fallos verificables en `sourceStatus`: Alcorcón **403**, Valdemoro **404**, Getafe **TLS/certificado**, múltiples sedes municipales **302 circular**, UC3M **BLOCKED**, y enlaces municipales con **Unicode no codificado** (`ascii codec can't encode character`) en Gálvez, Fuensalida, Méntrida, Santa Cruz de la Zarza, Tembleque, Villacañas y otras. Humanes figura ahora **PARTIAL** (5 páginas leídas), por lo que no se debe seguir describiendo como completamente bloqueado en esta captura.

**Corrección localizada:** `tools/radar-direct.py` codifica los caracteres no ASCII del **path** HTTP con `urllib.parse.quote`, preservando escapes `%XX` existentes; `tests/radar-direct-test.py` añade casos de URL oficial con tildes y ruta ya codificada. Commits **a40fb591**, **5017bef2**. Esta reparación responde a errores acreditados y **no altera** disparadores programados, rebase/push, correo ni verificación TLS. **Pendiente:** constatar mediante ejecución de CI que pasan los nuevos tests y comprobar en el siguiente rastreo si desaparecen esos fallos. No se ha ejecutado Python localmente ni se ha obtenido SUCCESS del CI de estos commits.

**Bloqueo de verificación externa:** la API de GitHub Actions y el JSON de GitHub Pages no fueron accesibles mediante el lector web; el conector de GitHub no enumera ejecuciones nuevas y `data/radar.json` es demasiado grande para la lectura textual actual. Por tanto **no se certifican** conclusión de la última ejecución programada, envío de correos, tasa real documentos leídos/intentos ni número de fichas útiles; la persistencia en Git por sí sola no los acredita. Próxima revisión: acceder a logs/artefactos del run real y estadísticas publicadas; identificar sustitutos **oficiales accesibles** de los 403/404/TLS antes de cambiar URLs, sin inventar datos.

### 25.2 La Puebla 14: ampliación jurídica del artículo 23.2 de Ley 40/2015

Fuente primaria cotejada: [BOE, Ley 40/2015, artículo 23.2–5](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a23), consolidado actualizado el **02/08/2024**. El resumen anterior de las causas de abstención omitía la extensión de **parentesco y amistad/enemistad** a **administradores, asesores, representantes legales y mandatarios** que intervienen, así como el **despacho profesional compartido o asociación** en el supuesto legal. También precisaba distinguir **relación de servicio actual** de **servicios profesionales prestados en los dos últimos años**. Se completaron el bloque 2 (`e47846de`), el manual (`941d1285`) y las fuentes (`b62f0027`) con tabla comparativa y Foco Examen. El banco **LP-T14** conserva sus **12 preguntas** y claves: la revisión mejora el manual, **no** recertifica todos los distractores.

**Próximo bloque operativo:** 1) verificar CI de estos cambios y ejecución Radar programada completa con logs y correo; 2) corregir fuentes 403/404 con alternativas oficiales comprobadas; 3) cerrar La Puebla T14 restantes y UC3M T15–T16, fijando antes el corte normativo UC3M; 4) Diputación C2, tema 6 OAPGT al final, y C1. Exámenes urgentes registrados: **La Puebla 14/11/2026**, **UC3M 21/11/2026**. No confundir CI técnico con certificación jurídica.


## 26. Incidencia CI: error de sintaxis Radar y reparación confirmada — **04/11/2026**

**Notificación del usuario:** dos capturas de GitHub Actions/Gmail del fallo del workflow `Validar OpoWeb v2` en el commit `a97eaa47`, run [41799009034](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41799009034). Paso fallido: **Validar Radar de empleo (sin consultar la red)**; las comprobaciones anteriores de temario y simulacros pasaron.

**Causa raíz comprobada en el archivo fuente:** `tools/radar-direct.py`, líneas **43–44** tras intentar introducir la codificación de caracteres Unicode del path de URL. La llamada a `urllib.parse.quote` quedó con una **cadena sin cerrar**, incorporando una segunda copia textual de una asignación y un `return` roto (`SyntaxError: unterminated string literal`). Esta regresión provino del cambio de URL de §25, no de las preguntas de oposición ni de Gmail.

**Corrección de código, mínima:** commit [`c3fb4256`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/c3fb425623a4349766bb2a2a9efb140d18e5a489), reparada la función `canonical()` para codificar Unicode del path con `urllib.parse.quote(path,safe="/%:@!$&'()*+,;=-._~")` y conservar el `urlunsplit` original. No se modificaron los filtros de oportunidades, el mecanismo de correo ni la política de TLS.

**Validación real confirmada:** workflow [`Validar OpoWeb v2`, run 41813660326](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41813660326), **status completed / conclusion success**, commit **`c3fb425623a4349766bb2a2a9efb140d18e5a489`**. Dado que el mismo paso importa `tools/radar-direct.py` desde `tests/radar-direct-test.py`, su resultado exitoso descarta el error de sintaxis que rompía el job. Este éxito **no prueba** que todas las fuentes web del Radar sean accesibles, que se hayan leído documentos oficiales, que hayan aparecido convocatorias compatibles ni que se hayan enviado correos; la ejecución programada y la calidad de extracción siguen sujetas a evaluación separada.

**Estado operativo:** corregida la **incidencia sintáctica**, no la calidad o cobertura general de Radar. Prioridad siguiente: controlar el workflow programado de Radar, `failureReasons`, documentos leídos, nuevos puestos y emails, y sustituir fuentes rotas solo por enlaces oficiales probados. Continuar **La Puebla / UC3M** por los subbloques pendientes (§25); no reabrir duplicados ni alterar estados editoriales sin nueva evidencia.

## 27. Olías del Rey: alerta efectiva y refuerzo de Radar — 04/11/2026

### Fuentes oficiales y plazo

El [BOE-A-2026-22826](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22826) del **31/10/2026** confirma **3 plazas de Limpiador/a** y **4 de Auxiliar de edificios e instalaciones** de **personal laboral fijo**, **oposición libre**, Ayuntamiento de **Olías del Rey**. Las bases se publicaron en el **BOP Toledo 204 de 23/10/2026**, aún no recuperado íntegramente; por tanto, **tasa, requisitos, modelo de solicitud, pruebas y temario sin certificación primaria**. El [DOCM 18/08/2026, OEP 2026/6010](https://docm.jccm.es/docm/verArchivoHtml.do?ruta=2026%2F08%2F18%2Fhtml%2F2026_6010.html&tipo=rutaDocm) clasifica **C2 para auxiliares** y **AP para limpiadores**.

El BOE fija **20 días hábiles** desde su publicación; al ser **02/11/2026** festivo en Castilla-La Mancha, el cómputo estimado es **30/11/2026**. Una fuente secundaria atribuye a las bases de Auxiliares **20 días naturales**, en aparente conflicto con el BOE, pero no se pudo cotejar el BOP original: **no certificar el día final** hasta aclararlo, recomendar presentar la solicitud antes del **20/11/2026** como precaución.

El [BOE-A-2026-22924](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22924) de Diputación Toledo es **libre designación** de puestos directivos/técnicos y no constituye oposición libre de C2: su exclusión por perfil es correcta.

### Diagnóstico de notificación con pruebas

El [commit de Radar de 31/10/2026](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/bcc19ac15a2e82845557014e47501e395444db78) incorporó **ambas plazas de Olías** separadas. El [run 41194703336](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41194703336) de las 10:55 UTC del **31/10/2026** registró **2 nuevas** y **Notificación enviada: 2**; no hubo pérdida de detección. El 03/11, [run 41638757678](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41638757678) registró 16 nuevas, con 5 notificadas. La ubicación de mensajes en cuentas de correo es **privada**: no registrar direcciones, etiquetas ni identificadores de Gmail en este repositorio.

### Mejora técnica y control

Se añadieron a [tests/radar-fixtures.mjs](https://github.com/Ivannunezrodriguez/opoweb-v2/blob/main/tests/radar-fixtures.mjs) casos reales de **BOE-A-2026-22826** que comprueban los **dos puestos, 3+4 plazas, elegibilidad de aviso y enlace oficial**. El [run 41814781435](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41814781435) acabó **SUCCESS** y mostró ambos puestos en los datos históricos con firstSeen 31/10.

Se detectó un riesgo independiente: el rechazo de una solicitud de detalle de un BOE podía hacer abortar todo el lote (Promise.all). [Commit e41ba33b](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/e41ba33be6666ce26bc00856137b7c48c80b0e60) pasa a **Promise.allSettled**, retiene puestos válidos e identifica anuncios genéricos fallidos sin fingir plazas. [CI 41814920843](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41814920843) **SUCCESS**; [Pages 41814920237](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41814920237) **SUCCESS**. Mejora preventiva, **no causa original de Olías**.

### Continuación

**Temario:** se conserva el punto de reanudación del §25, La Puebla tema 14 y UC3M temas **15–16**, con corte de vigencia UC3M pendiente. La Puebla tiene examen el **14/11/2026**, UC3M el **21/11/2026**. **OAPGT tema 6 de Diputación C2 queda al final**. No se han alterado bancos de preguntas en esta intervención.

**Prioridad siguiente:** obtener BOP Toledo 204 para resolver plazo contradictorio de Auxiliares, carnet/titulación, pruebas y tasa. Seguir la salud del Radar, diferenciando detección, envío y entrega real, y auditar temas urgentes sin duplicar trabajo.

## 28. Olías del Rey · Nuevo programa C2 desde BOP primario — **04/11/2026**

**Cambio de evidencia respecto del §27:** el usuario ha aportado el **PDF auténtico del BOP Toledo 204, 23/10/2026, anuncio 2026/4833**, código de verificación **2026.00004833**, **11 páginas**, con las bases y los anexos completos para **3 Limpiadores/as AP** y **4 Auxiliares de edificios C2**. La fuente oficial de este segundo puesto está en las **páginas 54–59** del BOP. El §27 reflejaba correctamente que aún no se había recuperado entonces el texto; **esta limitación ahora está superada**.

### Discrepancias oficiales abiertas y respuesta editorial

1. **Plazas:** **BOE-A-2026-22826**, OEP **DOCM 2026/6010** y **encabezado BOP página 54** publican **4** puestos C2. Sin embargo, el **apartado 1.1** (p. 54) y el **encabezado de Anexo I** (p. 58) dicen «**una plaza**». Se muestra **4** con advertencia literal, pendiente rectificación/confirmación de **Ayuntamiento de Olías del Rey**.
2. **Plazo:** BOP base **tercera de Auxiliar**, p. 55: **20 días naturales** desde el día posterior a BOE, mientras el **BOE 31/10/2026** publica **20 días hábiles**. **Cierre no certificado**, marcado **INCIDENCIA ALTA**. Fecha prudente interna **20/11/2026**; cómputo orientativo de la regla BOE **30/11/2026**, sujeto a calendario y aclaración de **Ayuntamiento**. **No afirmar que uno de los dos prevalece sin resolverlo formalmente**.
3. **Erratas de referencia jurídica** en bases: por ejemplo «Ley 39/2025 de 1 de octubre» en mención a procedimiento; no reproducir como legislación vigente ni inferir efectos sin fuente oficial.

### Requisitos y examen acreditados por el PDF

- **Personal laboral fijo, grupo C2, oposición libre, jornada partida/fines de semana/festivos.**
- **ESO, Graduado Escolar, FP primer grado o equivalencia acreditada; carné B; certificado negativo de delitos sexuales; DNI/NIE; justificante de tasa de 10 €**. Modelo específico **Anexo I, página 58**; dirigido a la **Concejala de Personal**; registro municipal presencial, sede electrónica o **art. 16.4 de Ley 39/2015**. La dirección impresa en bases es **Plaza de la Constitución, 12**; otra información municipal puede diferir, confirmar desplazamientos.
- **Dos pruebas obligatorias y eliminatorias**, el mismo día: **50 preguntas de temario + 20 psicotécnicas (aptitud verbal, numérica, ortografía y habilidad perceptiva)**, **cuatro alternativas**, penalización de **un tercio del valor de un acierto** por error; **máximo 50 puntos por prueba y mínimo 25 por prueba**. **Duración a fijar por el tribunal**; llamamiento único; DNI y bolígrafo azul. Sin fecha de examen publicada en el PDF.
- **Bolsa temporal** prevista para quienes superen proceso y no obtengan plaza. Llamamientos con **3 intentos de contacto** espaciados **al menos 1 hora**, **24 horas** de respuesta tras localización, y demás condiciones en bases.

### Programa literal, integración y estado real

Se incorpora **data/programa-olias-auxiliar-edificios-2026.json**, con **22 epígrafes oficiales**, **5 generales y 17 específicos** (numeración de web **1–22** y número original de bloque preservado). **Estado PENDIENTE_AUDITORIA** para **19** temas sin desarrollo; **EN_AUDITORIA** para **3** temas ya redactados. **No** se presenta como completo el temario restante.

**Archivos principales:** 
- Programa: `data/programa-olias-auxiliar-edificios-2026.json`.
- Ficha de inscripción: `data/seguimiento-olias-auxiliar-edificios-2026.json`; guía `content/olias-auxiliar-edificios/GUIA_SOLICITUD_EXAMEN_2026.md`.
- Desarrollo inicial **General 1 (web tema 1: Constitución, autonomía, Corona y Gobierno)**, **Específico 1 (web tema 6: seguridad, evacuación, prevención y cargas)** y **Específico 10 (web tema 15: electricidad, ICP, diferenciales, alumbrado, sonería y alarmas)**. Cada uno incluye `manual.md`, `matriz.json`, `fuentes.md` y **12 preguntas**: **36 preguntas** en total, estado **EN_AUDITORIA**, sin certificación jurídica integral.
- Integración de selector `assets/app.js` y aviso específico en la página, caché actualizada en `index.html`. Se registra **Limpiador/a AP** solo en seguimiento general `data/convocatorias.json`, **sin iniciar un segundo temario**.

**Control CI:** nueva comprobación `tests/validate-olias-programme.mjs` (22 epígrafes, fuentes, guías, tres manuales y 36 preguntas, estados editoriales explícitos), añadida a `.github/workflows/validate.yml`. La ejecución del workflow [41821039162](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41821039162) terminó **SUCCESS** para el commit del workflow; **no declarar despliegue posterior terminado** hasta observar Pages de los últimos commits.

### Reanudación precisa

**Prioridades de estudio concurrentes:** La Puebla examen **14/11**, UC3M **21/11**. Mantener el trabajo urgente en curso; continuar Olías en tandas sin desplazar los exámenes inmediatos. **Siguiente generación Olías:** temas **2–5 generales** por reutilización auditada y específicos **2, 3, 5, 8, 12** por relevancia de recepción, accesos, municipio y fontanería, y test psicotécnico de formato **20 preguntas** con corrección proporcional. Confirmar con Ayuntamiento la **fechas del plazo** y la discrepancia de **4/1 plazas** antes de inscribirse. **Diputación C2**, OAPGT tema 6 al final según decisión registrada.

> ⚠️ **¡Foco Examen!:** **4 plazas del BOE**, pero **1 en fragmentos del BOP**; **20 días hábiles del BOE** frente a **20 naturales del BOP**. Las diferencias están documentadas y **no resueltas legalmente**; no convertir cálculos orientativos en plazo confirmado.

## 29. Olías del Rey — primera redacción completa, pruebas separadas y trabajo pendiente — **04/11/2026**

### 29.1 Contenido disponible ≠ temario auditado

**Base literal:** BOP Toledo **204**, 23/10/2026, anuncio **2026/4833**, anexo II, CSV **2026.00004833**; **BOE-A-2026-22826** (31/10/2026). **Olías Auxiliar edificios C2** consta de **22 temas oficiales**, **5 generales y 17 específicos**.

- Se terminó una **primera redacción de los 22 manuales**, con **22 matrices JSON, 22 documentos de fuentes y 230 preguntas** enlazadas a temas en `content/olias-auxiliar-edificios/tema-01` ... `tema-22`. Todos constan como **EN_AUDITORIA** y **ninguno** como `AUDITADO`. El recuento **22/22 disponibles no significa 22/22 jurídico-editorialmente completos**.
- Se integró la convocatoria en el selector general y en `practice.html`, con **22 test por tema**, **2 supuestos prácticos propios**, **40 ejercicios psicotécnicos originales** distribuidos en cuatro ámbitos y **2 simulacros completos de entrenamiento**: **50 preguntas del programa + 20 psicotécnicas cada uno**, respetando la estructura de las bases. Las preguntas son **de OpoWeb, no oficiales del tribunal**.
- Se diversificó el reparto de opciones correctas en los **230** bancos, manteniendo **texto de opción correcta, justificación, referencia y enunciado**. Los modelos extraen identificadores de preguntas desde los bancos del temario.
- El simulador `assets/practice.js` distingue **dos notas independientes**: **teoría (50 preguntas: A − E/3, sobre 50)** y **psicotécnica (20: 2,5 × (A − E/3), sobre 50)**, indicando si **ambos mínimos de entrenamiento son al menos 25**, no un aprobado del examen oficial. Se guardan ambas calificaciones por intento. **No se inventa tiempo oficial**: las bases dejan la duración a decisión del Tribunal.

### 29.2 Controles técnicos reproducibles

- `tests/validate-olias-programme.mjs` exige **22 temas, 22 manuales, 22 matrices/fuentes y 230 preguntas**; comprueba formato y estados.
- `tests/validate-olias-practice.mjs` valida **clave correcta válida y distribución**, **40 psicotécnicos**, **dos modelos de 70 preguntas**, presencia de los 50 IDs teóricos, y prueba la **función real de corrección** de `assets/practice.js` con: 50+20 aciertos; mínimos exactos 25/50 en ambas; caso de teoría suspendida aun con psicotécnico aprobado.
- El nuevo control de prácticas se añadió a `.github/workflows/validate.yml`. [CI GitHub Actions 41826466676](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41826466676) concluyó **SUCCESS** para los dos controles de Olías y para las comprobaciones anteriores. **No extrapolar el CI a exactitud jurídica, didáctica integral o comprobación visual móvil**.

### 29.3 Materia por auditar y prioridades

**Pendiente jurídico y editorial:** cotejar exhaustivamente definiciones, fechas de vigencia, órganos, excepciones, actualizaciones técnicas de RITE, REBT, RD 1311/2012, normativa de riesgos y derechos del personal; mejorar cobertura profunda de materias municipales y **callejero completo**, listado nominal de competencias locales y ordenanzas en sus textos consolidados; revisar distractores de **270 preguntas** (230 temario + 40 psicotécnicos); hacer ensayos de interfaz de móvil. Las páginas de municipio (temas web **5** y **13**) incluyen **solo datos atribuidos a fuentes oficiales enlazadas** y declaran las lagunas; no afirmar inventario exhaustivo de calles o delegaciones.

**Pendiente administrativo personal prioritario:** solicitud de la plaza C2. **BOP p. 55** dice **20 días naturales**, **BOE 31/10** dice **20 días hábiles**; se mantiene **fecha prudente de registro antes del 20/11/2026** y discrepancia abierta. **Cuatro** plazas según encabezado y BOE frente a referencias a **una** en BOP §§1.1/Anexo I. El usuario indicó que planea presentar su solicitud la semana del **09/11/2026**. Debe usar **Anexo I C2, p. 58**, **10 €**, permiso B y certificado sexual negativo; **no se ha presentado ninguna solicitud por él**.

**Reanudación siguiente:** **auditoría jurídica profunda de los 22 temas ya redactados**, empezando por los de más riesgo de error: **1–4 generales, 5 y 13 datos municipales, 15 electricidad, 18 calefacción, 20 fitosanitarios, 17 fontanería**, y perfeccionar preguntas/simulacros sin perder su referencia oficial. Conservar prioridad paralela de **La Puebla 14/11** y **UC3M 21/11**, cuyos exámenes son más próximos; después **Diputación C2** con **OAPGT T6** al final. El siguiente trabajo no es generar otra vez los 22 temas sino **auditar, ampliar y depurar** los existentes.

> ⚠️ **¡Foco Examen!:** La nota **25/50 de teoría** no compensa una nota inferior a **25/50 de psicotécnico**, ni viceversa; se debe superar **cada una de las dos pruebas obligatorias y eliminatorias**.

## 30. Auditoría parcial LO 3/2007, REBT, RITE y fitosanitarios; errores GitHub — **04/11/2026**

**Actualización real de trabajo:** desde el registro §29 (22 manuales / 230 preguntas) se han reforzado **cuatro temas** (**4, 15, 18 y 20**) y corregido mapeo legal erróneo en matrices de **2 y 3**, además de las de **4, 15, 18 y 20**. El banco de estudio pasa a **264 preguntas por tema**, más **40 psicotécnicas originales**, **dos simulacros de 50 + 20** y **dos supuestos**. Todos los temas permanecen **EN_AUDITORIA**; las verificaciones parciales no son sello de contenido exhaustivo.

**Evidencia jurídica consultada en BOE:**

- **Tema 4, General 4, LO 3/2007:** se identificó un defecto de cobertura: el epígrafe pide medidas específicas **AGE** y el manual previo apenas desarrollaba **arts. 51, 53 y 64**. Añadidos **arts. 52, 54–64**, con tablas de competencias y cifras de examen. **Art. 55:** informe impacto salvo **urgencia**; **art. 60.1:** preferencia en formación **1 año**; **60.2:** reservar **al menos el 40 %** de determinadas plazas en cursos a empleadas que cumplan requisitos; **art. 63:** información al menos anual; **art. 64:** Plan AGE al inicio de legislatura, evaluación **anual por Consejo de Ministros**. No extrapolar estas medidas especiales a todos los Ayuntamientos. Fuente [LO 3/2007 consolidada](https://www.boe.es/eli/es/lo/2007/03/22/3/con), título V.
- **Tema 15, Específico 10, REBT:** incorporada **ITC-BT-28**: evacuación mínimo **1 lux** y **1 hora**, equipos manuales contra incendios y cuadros mínimo **5 lux**, ambiente/antipánico **0,5 lux** y **1 hora**, alto riesgo **15 lux o 10 % de alumbrado normal**, el mayor, con duración necesaria para abandono seguro; encendido automático con tensión normal inferior a **70 %**; «cerca» en apdo. 3.3.1 inferior a **2 m**. No aplicar idénticas condiciones a cualquier local municipal. Fuente [REBT consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099).
- **Tema 18, Específico 13, RITE:** añadidos **arts. 25–28** con potencia **5 a 70 kW inclusive** frente a **más de 70 kW (contrato de mantenimiento)**; **art. 27:** registro de mantenimiento al menos **cinco años** desde operación; **art. 28:** certificado **anual en supuestos de contrato obligatorio**, no como regla absoluta. Fuente [RITE](https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820).
- **Tema 20, Específico 15, fitosanitarios:** **RD 1311/2012 arts. 17, 18 y 20**: exigencia carné de usuarios profesionales desde **26/11/2015** en supuestos legales; niveles **básico, cualificado, fumigador y piloto aplicador**; validez **10 años** salvo retirada; plazo de resolución **3 meses salvo norma autonómica diferente**. No atribuir capacitación a personal auxiliar por puesto. Fuente [RD 1311/2012](https://www.boe.es/buscar/act.php?id=BOE-A-2012-11605).

**Preguntas añadidas:** **14 en tema 4**, **8 en tema 15**, **6 en tema 18** y **6 en tema 20** = **34**. IDs anteriores se conservan y ambos simulacros de 70 preguntas siguen válidos. Se amplió la comprobación `tests/validate-olias-programme.mjs` a **264** preguntas, a referencias de matrices y números críticos de estos cuatro temas; `tests/validate-olias-practice.mjs` también espera **264** y mantiene verificación de notas separadas.

**Errores GitHub mostrados por el usuario:** captura Pages #1902: `deploy` con **HTTP 502** aunque `build` correcto, indicio de indisponibilidad externa de GitHub. Captura validación #1968: `Internal server error` de orquestación GitHub, no fallo de test concreto. El **04/11/2026**, a los commits previos de auditoría siguieron ejecuciones correctas: [CI 41829439132](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41829439132) y [Pages 41829438864](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41829438864). El lote RITE/fitosanitarios superó [CI 41829878443](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41829878443); **el despliegue nuevo debe comprobarse por su ejecución exacta antes de declararlo realizado**. No modificar el workflow por errores antiguos de servicio ajeno.

**Pendientes concretos:** auditar otros temas técnicos (6 PRL/cargas, 9 postal, 11 reprografía, 17 fontanería, 19 carpintería, 21 pintura), comprobar correspondencia total de fuentes locales y callejero completo, ampliar preguntas reales de proximidad al test, evitar distractores absurdos. Preservar prioridades La Puebla **14/11** y UC3M **21/11** y la inscripción de Olías prevista la semana **09/11**. **Siguen sin resolver contradicciones del BOP/BOE sobre plazo y número 4/1 de plazas.**

> ⚠️ **¡Foco Examen!:** **1 año / 40 % (LO 3/2007)**; **1 lux / 5 lux / 0,5 lux (ITC-BT-28)**; **70 kW / cinco años (RITE)**; **10 años del carné (RD 1311/2012)**. No mezclar valores de normas diferentes.

## 31. Revisión cruzada de convocatorias urgentes y Diputación — 04/11/2026

**Orden activo confirmado por el usuario:** trabajar los temarios de todas las convocatorias, sin monopolio de Olías. Inventario actual: **La Puebla C2 (19 temas)**, **UC3M Auxiliar C2 (20 temas)**, **Diputación Toledo C2 (20 temas)**, **Diputación Toledo C1 (40 temas)** y **Olías Auxiliar de edificios C2 (22 temas)**; **121 temas** en cinco programas. El encabezado histórico de §2, que registra 99 temas a 02/11, precede la incorporación de Olías: este apartado es el punto de reanudación más reciente. No reabrir Carranque ni Las Ventas, descartadas.

### 31.1 La Puebla de Montalbán C2 — examen 14/11/2026

El **tema 14, Ley 40/2015 art. 24**, incorpora una tabla comparativa en el manual y bloque de colegiados con los siguientes puntos de examen: interesado puede promover recusación **por escrito y en cualquier momento**; recusado manifiesta al superior **al día siguiente**; si acepta causa y superior la aprecia, sustitución **acto seguido**; si niega causa, superior resuelve en **tres días** tras los informes y comprobaciones; **sin recurso autónomo**. La pregunta **LP-T14-008** se precisó conservando su respuesta **«Tres días»** y las **12 preguntas** del tema. Fuente [Ley 40/2015, art. 24](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a24). La aprobación editorial histórica no equivale a recertificación de noviembre.

**Siguiente:** T14 restantes de AGE y órganos territoriales; después T10/T12 de tributos y T13 de administración electrónica. Priorizar la prueba del **14/11**.

### 31.2 UC3M Auxiliar C2 — examen 21/11/2026, 10:00, Getafe

**Tema 15, Estatutos:** contraste focal de [Decreto 1/2003, arts. 127–132](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782) y modificación identificada de Decreto 95/2009. Se amplió cuadro de mayorías/competencias: **Rector** propone, **Claustro** elige por **mitad más uno de todos los miembros**; reelección iniciada por Rector o **al menos un quinto del Claustro**; Adjunto nombrado por **mayoría simple**, memoria **anual** al inicio de curso; reducción de funciones propias hasta **50 %**; asesoría **2 estudiantes + 2 PAS + 2 PDI**. Añadidas **5 preguntas** UC3M-T15-017 a -021; banco pasa de 16 a **21**, matriz y fuentes actualizadas.

**Tema 16, RD 822/2021:** cobertura del vacío de prácticas/TFG/TFM con [arts. 11, 14.5–6 y 17.3–4](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781): prácticas curriculares de **Grado máximo general 25 %** con excepciones, **TFG 6–24 ECTS** en grados de 240, prácticas de **Máster máximo un tercio**, **TFM 6–30 ECTS**; curricular frente a extracurricular. Añadidas **5 preguntas** UC3M-T16-017 a -021; banco de **21**, matriz y fuentes actualizadas. La **fecha primaria de corte normativo** de las listas definitivas y anuncio de ejercicio sigue sin acreditarse; no resolver por suposición el conflicto de nulidad de RD 905/2025 sobre el art. 22.4.

UC3M dispone ahora de **260 preguntas por temas**; sus simulacros **70+5** retienen IDs y estructura. Todos los nuevos tests son originales de OpoWeb, no oficiales.

### 31.3 Diputación Toledo C1 y C2

**Administrativo C1 T29**: contraste cruzado con [TRLRHL arts. 61.5.b, 62.1.b y 82.1.c, regla 3ª](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214). Se añadió la distinción **no sujeción** del inmueble patrimonial propio municipal no cedido a terceros mediante contraprestación frente a **exención** de bienes comunales y montes vecinales; para IAE, INCN **inferior a 1.000.000 €** y cómputo del **grupo de control del art. 42 CCom** incluso sin deber de consolidar. Se sustituyó una pregunta repetida por **DIP-T29-018** sobre cifra conjunta, manteniendo banco de **20 preguntas**. Detectado y corregido un defecto de esquema: pregunta nueva se guardó inicialmente bajo campo enunciado, mientras el render exigía pregunta; corregido en commit **09427ab3**, con verificación posterior del texto visible.

**Auxiliar C2 T13**: manual ya contenía reglas correctas por auditoría anterior. Se revisó y documentó en fuentes sin rehacer manual ni alterar **20 preguntas**. **C2 T6 OAPGT** sigue en BORRADOR, al final por instrucción expresa. Total bancario actual preservado **C1 803** y **C2 409**; no son cifras de certificación legal.

### 31.4 Integridad y cola siguiente

Prueba nueva **tests/validate-cross-oposiciones.mjs** comprueba inventario **121 temas**, formatos diferentes de pregunta/clave, IDs, las nuevas preguntas UC3M y sus matrices, LP-T14-008 y DIP-T29-018. Incorporada al workflow principal. [**GitHub Actions CI 41836152888**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41836152888) confirmó **SUCCESS**; anterior CI y Pages UC3M también concluyeron correctamente ([CI 41835506402](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41835506402), [Pages 41835505345](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41835505345)). El despliegue exacto de la última revisión debe constatarse por su run, sin atribuir al CI un aval jurídico ni prueba visual.

**Secuencia editorial:** 1) **La Puebla** (14/11): T14 resto de AGE, T10/T12/T13; 2) **UC3M** (21/11): resolver fecha de corte, auditar T15/T16 y simulacros 70+5; 3) **Diputación Toledo C2/C1**: materias compartidas, empleo público y tributación, manteniendo OAPGT T6 al final; 4) **Olías C2**: ampliar y auditar borradores de **22 temas**, **264 preguntas temáticas + 40 psicotécnicas**, especialmente T6, T9, T11, T17, T19, T21 y municipio T5/T13, con **inscripción pendiente la semana 09/11** y contradicciones BOE/BOP de plazos/plazas aún abiertas; 5) **Radar de empleo**: vigilar su ejecución y calidad sin desplazar toda la preparación de los exámenes próximos.

> ⚠️ **¡Foco Examen!:** **Recusación: día siguiente/tres días**; **UC3M: mitad más uno frente a mayoría simple**; **IAE: cifra de grupo frente a cifra individual**; **IBI: no sujeción frente a exención**.

## 32. Indicadores medibles, revisión territorial y criterio de avance — **04/11/2026**

### 32.1 Indicadores por convocatoria (manifiestos vivos de main)

| Programa | Entradas del anexo / temas | Sin etiqueta BORRADOR | Proporción de temas fuera de BORRADOR | Etiquetas del manifiesto | Certificación jurídica integral nueva, documentada en noviembre |
|---|---:|---:|---:|---|---:|
| **La Puebla C2** | **19** | **19** | **100 %** | **19 APROBADO_USUARIO** (aprobación de julio, no noviembre) | **0/19** |
| **UC3M C2** | **20** | **20** | **100 %** | **20 EN_REVISION_USUARIO** | **0/20** |
| **Diputación Auxiliar C2** | **20** | **19** | **95 %** | **19 EN_REVISION_USUARIO, 1 BORRADOR (T6 OAPGT)** | **0/20** |
| **Diputación Administrativo C1** | **40** | **40** | **100 %** | **40 GENERACION_DESDE_CERO** (modo de elaboración, no aprobación) | **0/40** |
| **Olías Auxiliar edificios C2** | **22** | **22** | **100 %** | **22 EN_AUDITORIA** | **0/22** |
| **TOTAL** | **121** | **120** | **99,17 % (redondeado 99,2 %)** | Estados heterogéneos, no intercambiables | **0/121** |

**Cómo interpretar el cálculo:** la cifra **120/121** significa únicamente que **120 temas no tienen actualmente la etiqueta BORRADOR**, no que 120 estén completamente listos para estudiar sin fuentes, ni que su exactitud sea **99,2 %**. Hay primera redacción de C1 y Olías y revisión pendiente UC3M/C2. La **cobertura de programa registrado es 121/121 = 100 %**; la **recertificación jurídica total nueva y documentada** de noviembre es **0/121 = 0 %**, sin implicar que los temas sean erróneos. **No** existe un indicador defendible de «% exactitud de contenidos» a partir de CI y estados de archivo. Los **19 APROBADO_USUARIO** de La Puebla son aprobación editorial **histórica de julio**.

**Cifras de práctica conservadas:** La Puebla **228 preguntas temáticas**, UC3M **260**, Diputación C2 **409**, Diputación C1 **803**, Olías **264 + 40 psicotécnicas**. El total de preguntas bancarias de **temario** es **1964**, más **40 psicotécnicas de Olías**; los simulacros reutilizan preguntas y **no se suman** por duplicado. Estos son recuentos de fuentes/registro §31, no recuentos certificados jurídicamente pregunta por pregunta.

### 32.2 Cambio de esta intervención: La Puebla T14 y reutilización prudente en C2

Se contrastaron [**Ley 40/2015, arts. 69–75, especialmente 70, 72.4–5 y 74**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) con bloque territorial del **tema 14 La Puebla**. Nuevas tablas en `manual.md` y `bloque-05-age-territorial-exterior.md` sobre:

- **Delegado:** **Consejo de Ministros** por **Real Decreto**, propuesta del **Presidente del Gobierno** y requisitos de idoneidad;
- **Subdelegado y Director Insular:** nombrados por **Delegado**, libre designación de funcionario de carrera **subgrupo A1**, con requisitos de cada órgano;
- **Art. 72.5:** suple al Delegado el **Subdelegado designado** (o defecto el de provincia sede); en **CCAA uniprovincial sin Subdelegado**, el **Secretario General**;
- **Art. 74:** **Delegado** asume las **competencias ordinarias del Subdelegado** en CCAA uniprovincial sin él; **no confundir con suplir al propio Delegado**.

La matriz y las fuentes de La Puebla documentan esta revisión de normativa; se anotó también en fuentes de **Diputación C2 T15** como cotejo compartido, **sin copiar ni reabrir su manual**. **LP-T14 conserva 12 preguntas**. Se reforzó `tests/validate-cross-oposiciones.mjs` para exigir la presencia de excepciones de arts. 72.5 y 74. **GitHub Actions CI [41837484676](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41837484676) ha finalizado SUCCESS** para el commit de contenido `7efc9829`; no atribuir a ese éxito revisión pedagógica integral, certificación jurídica ni carga visual real.

**Último estado de despliegue cuando se comprobó:** Pages de commit `7efc9829`, [run 41837483222](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41837483222), figuraba **in_progress**; Pages de commit anterior `bf65ee3bc`, [run 41836665502](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41836665502), **SUCCESS**. Actualizar este hecho al disponer de conclusión, no declarar desplegada la última revisión sin comprobarlo.

### 32.3 Prioridad siguiente sin olvidar otras convocatorias

**La Puebla (14/11):** terminar contraste de órganos AGE de T14 y revisar T10/T12/T13; **UC3M (21/11):** fijar por resolución oficial original la fecha de corte de legislación y auditar preguntas de T15/T16, simulacros 70+5; **Diputación C1/C2:** seguir normas compartidas y regulación provincial, **OAPGT tema 6 C2 al final** por prioridad; **Olías:** auditar técnica y jurídica a fondo T6/T9/T11/T17/T19/T21 y municipio T5/T13, mantener inscripción semana 09/11 y discrepancias oficiales BOP/BOE sin resolver; **Radar:** calidad de fuentes/avisos y no solo ejecuciones verdes. **Todos los programas siguen en curso; ninguna etiqueta es un porcentaje de exactitud.**

> ⚠️ **¡Foco Examen!:** **Art. 72.5** (suplencia del Delegado por Secretario General en el supuesto uniprovincial sin Subdelegado) **≠ art. 74** (el Delegado asume competencias del Subdelegado). **120/121 fuera de borrador ≠ 120 temas jurídicamente certificados.**

## 33. La Puebla: pagos LGT y servicios de confianza — 04/11/2026

### 33.1. Auditoría parcial del Tema 10 — [Ley 58/2003 (LGT), arts. 62 y 65](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186)

**Hallazgo:** la primera redacción explicaba pagos voluntarios de liquidaciones, pero faltaba el contraste completo con plazos de **providencia de apremio**, período de **notificación colectiva** y las **siete deudas inaplazables**.

| Notificación | **Art. 62.2** Liquidación en voluntaria | **Art. 62.5** Providencia de apremio |
|---|---|---|
| Entre días **1–15** | **20 del mes siguiente** | **20 del mismo mes** |
| Entre días **16–último** | **5 del segundo mes siguiente** | **5 del mes siguiente** |

En ambos supuestos el vencimiento inhábil pasa al siguiente día hábil. **Art. 62.3:** pago colectivo/periódico sin otro plazo del **1/9 al 20/11**, modificable por Administración competente con duración mínima **2 meses**. Se incorporó también **art. 62.4 y 62.6–7** con sus condiciones. **Art. 65.2**: siete tipos de deudas inaplazables, con atención a **retenedores**, créditos concursales, recuperación de ayudas, resolución de recursos con suspensión, cuotas **repercutidas** con excepción, y pagos fraccionados del **IS**; las solicitudes previstas se inadmiten. Solicitar aplazamiento en voluntaria **no suprime intereses** y rige con excepciones de los **arts. 65.5 y 161.2**.

**Archivos:** manual, matriz, fuentes y trazabilidad por artículos del tema 10; mantiene **12 preguntas**. No es certificación completa.

### 33.2. Auditoría parcial Tema 13 — [Reglamento eIDAS art. 25](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A02014R0910-20241018) y [Ley 6/2020 arts. 9 y 12](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046)

**Hallazgo:** faltaba la distinción explícita entre **firma electrónica no cualificada** (no denegar efectos o admisibilidad solo por su forma electrónica o por no cumplir los requisitos de firma cualificada, **art. 25.1**) y **firma electrónica cualificada** (efecto legal equivalente al de la **firma manuscrita**, **art. 25.2**). No debe confundirse firma **avanzada** con **cualificada**.

En cuanto a **prestadores**, el **art. 9.2** exige servicio de consulta pública de estado de certificados emitidos; el **art. 9.3.a** conservación **15 años**; el **art. 9.3.b** seguro mínimo de **1.500.000 €** más **500.000 € por tipo de servicio cualificado adicional**, con excepción para prestadores pertenecientes al **sector público**. Según **art. 12**, los **prestadores no cualificados** pueden comenzar sin verificación administrativa previa, pero deben **comunicarlo en tres meses**, al igual que cambios o cese. Se conservaron los datos preexistentes sobre **cinco años** de vigencia máxima de certificados cualificados.

**Archivos:** manual, bloque de prestadores, fuentes, matriz y trazabilidad del tema 13. **12 preguntas históricas conservadas**; no se afirma revisión integral.

### 33.3. Integridad, CI y estado de los cinco programas

Nuevo archivo de comprobación **tests/validate-la-puebla-normativa-focal.mjs** integrado en **.github/workflows/validate.yml**. Comprueba cifras/umbrales específicos de LGT y eIDAS, conserva **12 preguntas por tema**, incluye la fecha futura del **IIVTNU (1/12/2026)** ya expuesta en **La Puebla T12** por RDL 29/2026. El [**workflow CI 41839082691**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41839082691) terminó **SUCCESS**, incluyendo el nuevo test. El [**workflow PDF La Puebla 41838882207**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41838882207) terminó **SUCCESS** sobre el commit de ampliación. La [**publicación Pages 41839082488**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41839082488) figuraba **in_progress** al comprobarla, no se presume su conclusión.

**Los porcentajes no se alteran por estas correcciones parciales:** **121/121 temas registrados**, **120/121 fuera de BORRADOR = 99,2 %**, pero **0/121 recertificados jurídicamente de forma íntegra en noviembre**. La Puebla **19 APROBADO_USUARIO** históricos; UC3M **20 EN_REVISION_USUARIO**; Diputación C2 **19 EN_REVISION_USUARIO y T6 BORRADOR**; Diputación C1 **40 GENERACION_DESDE_CERO**; Olías **22 EN_AUDITORIA**. No usar estos estados como medida de exactitud de los contenidos.

**Prioridad a partir de §33:** La Puebla (14/11) T12 IBI/IAE/IVTM/IIVTNU para nuevas comprobaciones y T10/T13 para preguntas, UC3M (21/11) T15–16 y fecha corte normativo, Diputación C1/C2 tributación y empleo, Olías mantenimiento y temas locales; tema OAPGT C2 al final. No reabrir Carranque ni Las Ventas. Mantener vigilancia del Radar y detectar fallos de notificación.

> ⚠️ **¡Foco Examen!:** **LGT 62.2**: plazos voluntarios hasta día **20 siguiente / 5 segundo siguiente**, **62.5**: apremio hasta **20 mismo mes / 5 siguiente**. **eIDAS 25.1** no descarta eficacia de firma no cualificada por su condición; **25.2** equipara expresamente **firma cualificada** a manuscrita.

## 34. La Puebla T12 IIVTNU: precisión de supuestos tasados y cobertura de los cinco programas — **04/11/2026**

### 34.1. Correcciones jurídicas verificables en el Tema 12 (examen **14/11/2026**)

**Fuente oficial primaria revisada:** [TRLRHL consolidado, arts. 104.3–5, 105.1.c y 106.1–2](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214#a104), a fecha **04/11/2026**. Revisión **focal** del IIVTNU; **no** recertificación de los cinco capítulos ni de las 12 preguntas.

- **Artículo 104.3:** se reemplazó una expresión vaga sobre «fallecimiento protegido» por la regla tasada de transmisión lucrativa en beneficio de hijos, menores o personas con discapacidad en el caso de **mujer fallecida como consecuencia de violencia contra la mujer**, en los términos de la reforma de **LO 2/2022**; se añadió comparativa de **donación ordinaria vs. supuestos conyugales y fallecimiento específico**. No confundir parentesco con no sujeción automática.
- **Artículo 104.4:** se precisaron supuestos de **SAREB** a entidades participadas directa o indirectamente en al menos **50 %** y determinadas operaciones de fondos; la transmisión posterior no interrumpe el período de generación en los términos legales. No generalizar a entidades financieras.
- **Artículo 104.5:** ampliadas las condiciones probatorias: **declarar y aportar títulos**, mayor valor entre el declarado/documentado y comprobado en adquisición y transmisión, **sin gastos ni tributos**, proporción de terreno del Catastro; regla de cómputo para la transmisión posterior a una operación no sujeta por inexistencia de incremento, con las excepciones expresas.
- **Artículo 105.1.c:** se explicitó que la **dación en pago/ejecución hipotecaria** de vivienda habitual es supuesto de **exención**, con otros requisitos y empadronamiento ininterrumpido de **al menos dos años**, o desde adquisición más reciente.
- **Artículo 106.2:** la **sustitución del contribuyente por el adquirente** requiere transmisión **onerosa** y contribuyente **persona física no residente en España**; no equiparar todas las compraventas extranjeras ni llamarle contribuyente. Se añadió tabla y aviso de test.

**Archivos editados:** `content/la-puebla/tema-12/bloque-05a-iivtnu-hecho.md`, `bloque-05b-iivtnu-sujetos.md`, `articulos.md`, `fuentes.md` y `matriz.json`. Se amplió **`tests/validate-la-puebla-normativa-focal.mjs`**, sin alterar el banco de **12 preguntas** ni sus IDs o claves. Commits de contenido y pruebas: `3a92a2e4`, `9176e10b`, `12bd7a29`, `0c4ca3ab`, `a334917b` y `e6481eb5`. Validación [**CI 41840561139**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41840561139) y [**Pages 41840560117**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41840560117) **SUCCESS** para el último commit de pruebas jurídicas `e6481eb5`. No acreditar con ello corrección legal integral.

### 34.2. Incongruencia de cobertura estructural y reparación

**Hallazgo:** `tests/validate-all-programmes.mjs` validaba solo **99 temas de 4 programas**; no incluía los **22 temas de Olías** aunque constaban publicados en el selector y disponían de validador propio. El paso de CI también mostraba «99 temas». `package.json` reservaba `npm run test:all` para una selección menor de pruebas; no coincidía con la batería amplia de CI. `README.md` seguía afirmando **4 programas / 99 temas**, una instantánea superada.

**Cambios realizados:**
1. **Validador general ahora verifica 5 programas y 121 temas** con manual, banco, claves, justificación y referencia; imprime `VALIDACION_ESTRUCTURAL_121_TEMAS_OK` y recuerda que es verificación **estructural**, no jurídica.
2. Etiqueta de `.github/workflows/validate.yml` actualizada; `npm run test:all` ampliado a controles de cinco programas, La Puebla focal, navegación y Radar en Node. Los pasos Python y chequeos de sintaxis siguen ejecutándose en CI; no declarar pruebas completas en Windows sin ejecutarlas allí.
3. `README.md` actualizado a **121 temas**, **5 programas**, Olías y **260 preguntas UC3M**; mantiene advertencia de ausencia de certificación integral y de discrepancias abiertas en Olías.

Commits: `de98efe3` (validador), `39c37fc4` (etiqueta de CI), `995b9a45` (scripts) y `4a7348a4` (README). La [**CI 41840778134**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41840778134) del commit `995b9a45` concluyó **SUCCESS** con el validador de **121 temas**; **Pages de 995b9a45** y la CI/Pages de `4a7348a4` continuaban pendientes/en curso en el momento del control, y **no se presentan como finalizadas**.

### 34.3. Estado y próxima tarea

El avance de estas correcciones **no modifica** el indicador de §33: **121/121 temas registrados**, **120/121 fuera de BORRADOR**, **0/121 con recertificación jurídica integral nueva y documentada de noviembre**. Las seis ampliaciones documentadas aquí son **parciales**, pero reales, con fuentes, diffs, controles y commits. Un test verde no equivale a verificación visual, exactitud de cada distractor ni manual completo.

**Siguiente trabajo sin reabrir lo ya hecho:** La Puebla T12 resto de artículos y **banco de preguntas** contrastado de forma integral, luego T10/T13 para el examen del **14/11**; UC3M T15/T16 y fecha oficial de corte (examen **21/11**); Diputación C1/C2 y Olías técnica/local. **C2 OAPGT T6 al final**, y **no reabrir Carranque ni Las Ventas**. Revisar resultado de CI y Pages del último commit antes de declararlo desplegado. El objetivo sigue siendo terminar la auditoría integral de las cinco convocatorias, **sin asignar 100 % a los trabajos no contrastados**.

> ⚠️ **¡Foco Examen!:** **104.3** no sujeción familiar tasada; **104.5** inexistencia de incremento con prueba; **105** exención; **106.2** sustituto solo para **adquirente en onerosa con transmitente persona física no residente**. **121 archivos de temario no son 121 certificaciones jurídicas**.

## 35. Auditoría sustantiva: sesgo real de respuestas y primeras claves verificadas — **04/11/2026**

### 35.1. Detección y reparación de un defecto pedagógico sistémico

**Hallazgo tras leer directamente todos los bancos afectados:** las respuestas correctas estaban concentradas en posiciones fácilmente adivinables. Ejemplo: **La Puebla T18 tenía 12/12 respuestas correctas en A**; otros temas UC3M concentraban sus claves en **B y C**; en **Diputación C1 T19, T24, T29 y T34** había hasta **14 de 20 aciertos con una sola letra**. Un test así no simula correctamente el examen y crea falsos hábitos.

**Corrección hecha en `main`:** para cada pregunta se guardó la **respuesta verdadera literal anterior** en `respuestaLiteral`, se reordenaron exclusivamente las cuatro alternativas y se corrigió el **índice numérico** de respuesta. **No** se alteraron enunciados, justificantes ni referencias durante la redistribución, salvo dos mejoras didácticas posteriores documentadas en §35.2. Se verificó que cada banco mantuviera IDs, cuatro opciones distintas, la misma solución literal y una distribución equilibrada por posiciones. Este control **no comprueba por sí solo la verdad jurídica de una clave previamente equivocada**.

| Programa | Temas corregidos | Preguntas reequilibradas | Distribución final por tema | Commits de contenido |
|---|---:|---:|---|---|
| **La Puebla C2** | **19/19** | **228** | En cada banco de 12: **3 A, 3 B, 3 C, 3 D** | `5dad7345`, `bfc28e26`, `0b042355` |
| **UC3M C2** | **20/20** | **260** | En cada banco, la diferencia entre las cuatro posiciones es **≤1** | `2c206c0f`, `2ad8bde8`, `6190b04b` |
| **Diputación Administrativo C1** | **40/40** | **803** | En bancos de 20: **5 por posición**; bancos de 21/22: diferencia **≤1** | `eed118b3`, `5955f520`, `f49f41a8`, `1fdb801e`, `8ff8053b` |
| **TOTAL REEQUILIBRADO** | **79/79** | **1.291** | **Sesgo sistemático de posición corregido** | Véase historial Git |

**Diputación Auxiliar C2 (409 preguntas)** y **Olías C2 (264 preguntas)** se inspeccionaron separadamente: su distribución ya era razonablemente equilibrada en la gran mayoría de temas; **no se cambiaron sus claves sin necesidad**, y el Tema 6 OAPGT de C2 sigue en **BORRADOR**, aplazado por decisión previa. Ninguna de las 1.291 respuestas puede llamarse «jurídicamente certificada» únicamente por redistribuir las letras.

**Nuevas pruebas persistentes:** `tests/validate-la-puebla-answer-distribution.mjs` (228), `tests/validate-uc3m-answer-distribution.mjs` (260), `tests/validate-diputacion-c1-answer-distribution.mjs` (803). Integradas en `.github/workflows/validate.yml`, `npm test` y `npm run test:diputacion`. Las pruebas exigen posición válida, respuesta literal conservada, cuatro opciones únicas, ID no repetido y distribución equilibrada. **[CI 41843236317](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41843236317) SUCCESS** sobre el commit `8ff8053b`. No atribuir a estos tests verificación en navegador ni de leyes.

### 35.2. Verificación jurídica directa y preguntas ambiguas de La Puebla

**Error legal acreditado:** el **Tema 7**, `manual.md`, expresaba la gravedad del riesgo como **«probabilidad + severidad»**; el **art. 4.2 de la Ley 31/1995** establece que se **valoran conjuntamente** esos factores, sin fórmula matemática obligatoria. Sustituida por la definición legal literal, cuadro comparativo y `> ⚠️ **¡Foco Examen!:` en `content/la-puebla/tema-07/manual.md`. Corregidas fuentes y matriz e incorporado test de regresión `tests/validate-la-puebla-normativa-focal.mjs`; commit **`1896aaa6`**, [**CI 41843681475**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41843681475) **SUCCESS**. Fuente [LPRL consolidada, art. 4](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292#a4).

**Contraste individual de claves:** se revisaron **12/12 preguntas de LP-T07** contra los arts. **14–16, 19, 21, 22, 35, 36 y 38 de LPRL** y **art. 14 del RD 39/1997**, y **12/12 preguntas de LP-T12** contra **arts. 59, 61–62, 78, 82–83, 92, 94, 104 y 106 del TRLRHL**. Se añadió referencia oficial específica por pregunta en el JSON, registro `cotejoLegalBanco20261104` y tabla de auditoría en `fuentes.md`. **24 respuestas correctas contrastadas jurídicamente**; pendiente comprobar todos los distractores de forma completa y el desarrollo del tema completo. La comparación es de la **respuesta jurídica**, no de la validez de todo el manual.

**Dos mejoras de redacción tras cotejo:**
- **LP-T07-008:** ahora especifica «**con independencia de la actividad**» para **más de 500 trabajadores** (RD 39/1997 art. **14.a**), frente a **250–500** si hay actividades del anexo I (art. **14.b**). No se cambió la respuesta verdadera.
- **LP-T12-006:** la pregunta ahora precisa «**estrictamente inferior a 1.000.000 €**» en la exención IAE y recuerda sumar el INCN del **grupo de control** si corresponde (TRLRHL **82.1.c**). No se cambió la respuesta verdadera.

**Commits banco y fuentes:** `531598ac`, `cdcd25af`, `2f2f4009`, `8fe2f535`. Referencias legales: [LPRL](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), [RSP](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853), [TRLRHL](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214). Se mantiene la distribución de soluciones comprobada por CI.

### 35.3. UC3M y otros programas: delimitación de evidencia

Se cotejaron adicionalmente **claves de UC3M T15** sobre Defensor y reforma estatutaria (Estatutos **127–132, 175, 178–180**) y **T16** sobre RD 822/2021 **arts. 11, 14 y 17** y normativas universitarias de evaluación/permanencia. Se preservan todas las claves y la distribución corregida; **no se declara auditoría integral de estas 42 preguntas**, pues algunas remiten a manuales sin un artículo primario individual y todavía falta comprobar determinados efectos y condiciones académicas. La **base primera.7 de convocatoria UC3M (BOE-A-2026-14624)** exige la norma vigente a la fecha de la resolución definitiva de admitidos y anuncio de examen; fuentes comerciales apuntan a **01/10/2026**, pero **no consta documento primario original fechado y revisado**, por lo que **fecha de corte pendiente de acreditar**.

**Estado medible inalterado de integridad editorial**: **121/121 temas registrados**, **120/121 fuera de BORRADOR** y **0/121 con recertificación jurídica integral documentada en noviembre**. Los nuevos resultados son **1.291 preguntas sin patrón de posición, 24 claves verificadas una por una, error jurídico en LPRL corregido**, no «100 %» de exactitud jurídica.

**Siguiente tarea operativa:** auditoría **norma-inciso-pregunta-distractor** de restantes **17 temas La Puebla** antes del **14/11/2026**, UC3M T15–16 y revisión primaria de su fecha de corte antes del **21/11/2026**; después Diputación C2/C1 y Olías, sin abandonar mantenimiento del Radar. Mantener al **final** el T6 OAPGT C2. **No** reabrir Carranque/Las Ventas. En cada intervención leer el **último apartado** de este archivo, no un marcador numérico fijado en un prompt antiguo.

> ⚠️ **¡Foco Examen!:** **Riesgo laboral:** probabilidad **y** severidad valoradas conjuntamente, no suma legal; **servicio propio >500 trabajadores** o **250–500 con anexo I**; **IAE INCN <1.000.000 €** de forma estricta. **1.291 claves reordenadas ≠ 1.291 claves auditadas jurídicamente**.

## 36. PRL cruzada y matrices C2 — **04/11/2026**

### 36.1. Un mismo error de definición jurídica aparecía en dos convocatorias

Se detectó la afirmación incorrecta **«gravedad = probabilidad + severidad»** también en **Diputación Auxiliar C2 T8**, además de **La Puebla T7** (§35). El **art. 4.2 de la [LPRL consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292#a4)** establece la **valoración conjunta** de ambos factores, **sin** fórmula legal de suma. Se sustituyó la definición y añadió tabla literal/FOCO EXAMEN en `content/diputacion-toledo-auxiliar-c2/tema-08/manual.md`, ampliando `fuentes.md`. Commit **`1e9da25b`**; control cruzado de ambos manuales incorporado a `tests/validate-la-puebla-normativa-focal.mjs` en **`f072d078`**. Este caso justifica la auditoría por **normas compartidas**, no solo por carpetas de convocatoria.

### 36.2. Redundancia de preguntas reales corregida en C2 y C1

**Diputación Auxiliar C2 T8 (20 preguntas):** había redundancias sobre composición del Comité y escala de delegados. Se preservaron IDs, estructura de cuatro opciones y respuestas únicas, pero se sustituyeron:

- **DT-C2-T08-011**: reglas **31–49 trabajadores → un Delegado de Prevención elegido por y entre Delegados de Personal**, **Ley 31/1995, art. 35.2**.
- **DT-C2-T08-014**: informe de los Delegados de Prevención **15 días**, excepción de **tiempo imprescindible** para riesgos inminentes, **art. 36.3**.

**Diputación Administrativo C1 T23 (20 preguntas):** cinco preguntas duplicaban enunciados o reglas ya evaluadas en el mismo banco (reunión trimestral del Comité, interrupción por riesgo grave, **24 horas** de confirmación de paralización, vigilancia voluntaria, Comité desde **50**). Conservando IDs y los índices de respuesta para no romper simulacros, sustituidas **DIP-T23-015**, **-017**, **-018**, **-019** y **-020** por comprobaciones originales de:

1. **LPRL 36.3:** informe de **15 días** y riesgo inminente.
2. **LPRL 20:** **primeros auxilios, lucha contra incendios y evacuación**.
3. **LPRL 29.2.3.º:** no inutilizar dispositivos de seguridad.
4. **LPRL 31.2:** definición de servicio de prevención.
5. **RD 39/1997 art. 14:** servicio propio **más de 500 empleados** con independencia de actividad y supuesto **250–500 con actividades de anexo I**.

**Importante error real de integración detectado y reparado durante el cambio:** en C1 el motor de preguntas utiliza la propiedad `pregunta`, no `enunciado`. Una edición inicial había guardado ambas, dando lugar a que el portal mostrase la pregunta antigua con la respuesta nueva. Se corrigió inmediatamente: se escriben `pregunta` y `trampa`, se suprimen `enunciado` y `trampaExamen` solo de esas cinco, y un test exige el texto realmente renderizado. **No** confundir la primera operación defectuosa (commit `34b0dc85`) con el estado corregido `6449a2d0`.

**Commits:** C2 `840265af` y validación/fuentes `fd6fe1c0`; C1 sustitución `34b0dc85`, reparación de esquema `6449a2d0`, trazabilidad y test `345704ca`. Hubo **un fallo CI** en [run **41845733248**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41845733248) **por un fallo de la nueva aserción**: buscaba la frase «15 días» en el **enunciado**, en vez de en su opción correcta. Se reparó la prueba en **`c706c7ac`**, y [**CI 41845924451**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41845924451) finalizó **SUCCESS**. No trasladar al contenido legal una aserción errónea de test. Las tablas de fuente y el estado parcial constan en `fuentes.md` de cada tema.

### 36.3. Carencia real de matrices JSON en Diputación Auxiliar C2

**Hallazgo de conformidad con `PROJECT_RULES.md`:** el programa de **20 temas** C2 sí contaba con manuales, fuentes y bancos, pero **no** con matrices `matriz.json` independientes, a diferencia de C1 y La Puebla. Se han creado y enlazado desde el programa oficial las **primeras cinco matrices**, siguiendo epígrafe literal del **BOP Toledo n.º 197 de 14/10/2026, Anexo XI, CSV 2026.00004759** y sus fuentes de `fuentes.md`:

| Tema C2 | Materia | Incisos/leyes recogidos | Estado |
|---|---|---|---|
| **2** | Ley 39/2015, disposiciones generales, interesados y plazos | **1–33 LPAC** | Matriz creada, no certificación |
| **3** | Procedimiento administrativo y especialidades | **53–105 LPAC**, más **Leyes 39/2015 y 40/2015** para sancionador/patrimonial | Matriz creada, no certificación |
| **4** | Revisión y recursos | **106–126 LPAC**, **52–53 LRBRL** | Matriz creada, no certificación |
| **8** | Prevención de riesgos | **14–40 LPRL** y **10–22 bis RSP**, con definición art. 4 | Matriz creada, no certificación |
| **13** | Tributos municipales | **15–19, 56–64, 78–83, 92–94, 104–106 TRLRHL** | Matriz creada, no certificación |

En **`data/programa-diputacion-auxiliar-c2-2026.json`** se añadieron rutas explícitas `matriz` solo a esos **5 temas**, sin alterar sus estados `EN_REVISION_USUARIO`; los otros **15 temas siguen sin matriz independiente**, entre ellos **T6 OAPGT**, que debe realizarse **al final**. Cada nueva matriz documenta `inciso → norma → artículos → contenido exigible` y advierte expresamente `PENDIENTE_COTEJO_INTEGRAL`. En **`tests/validate-diputacion-c2-matrices.mjs`** se verifica su correspondencia con el literal del programa y cinco matrices. Integrado en CI y `npm run test:all`; commits **`b7d24391`** (matrices) y **`cba0628b`** (control CI). [**CI 41846112691**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41846112691) **SUCCESS** para `b7d24391`; la CI específica del nuevo test todavía estaba en cola al redactar este apartado, **no atribuir éxito hasta observar la ejecución**.

### 36.4. Estado real y reanudación

**Indicadores globales sin manipular:** **121/121 temas registrados** y **120/121 fuera de BORRADOR**, pero **0/121 íntegramente recertificados jurídicamente en noviembre**. **1.291 preguntas reequilibradas** (§35), **24 claves de La Puebla cotejadas una a una**, **7 preguntas duplicadas sustituidas con apoyo jurídico en C1/C2**, **2 manuales con error de definición LPRL corregidos** y **5 matrices estructurales de C2 creadas**. La auditoría pedagógica, legal y visual **no** está terminada: los cambios son útiles, medibles y parciales.

**Siguiente lote autónomo, sin solicitar confirmación:** completar las **14 matrices de Diputación C2 distintas del T6 OAPGT**, mantener T6 reservado al final; revisar **distractores y texto visible** de bancos más urgentes de **La Puebla (examen 14/11)** y **UC3M (21/11)**; cotejar fuentes legales actuales tema a tema, especialmente plazos, órganos, excepciones, y realizar prueba visual de escritorio/móvil cuando se disponga de navegador interactivo. **Olías C2** pendiente de auditoría técnica/local exhaustiva; incidentes de BOE/BOP de 4/1 plazas y 20 hábiles/naturales abiertos. **No reabrir Carranque ni Las Ventas**, no declarar 100 % por pasar CI. Revisar último registro antes de iniciar cada lote.

> ⚠️ **¡Foco Examen!:** **LPRL 4.2** no da una fórmula matemática; **31–49 trabajadores: un Delegado elegido por y entre Delegados de Personal**; **art. 36.3: quince días / tiempo imprescindible**; **RSP 14: más de 500 / 250–500 anexo I**. Nunca presentar matrices recién creadas como auditoría legal cerrada.

## 37. Cierre CI verificable de matrices y ejecución frecuente — **04/11/2026**

**La nueva prueba de matrices C2 se ejecutó y detectó un fallo propio, no del contenido:** `tests/validate-diputacion-c2-matrices.mjs` exigía que cualquier valor del campo `articulos` tuviera **más de tres caracteres**, por lo que rechazaba el valor válido **«1–2»** de la Ley 39/2015. El fallo se constató en [**CI 41846284396**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41846284396) y se reprodujo en [**41846473997**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41846473997). Se corrigió la aserción para aceptar rangos legales breves con contenido **no vacío**, commit **`4012d8fe`**; **no** se modificaron las cinco matrices ni las reglas jurídicas para esquivar el test. La [**validación 41846656498**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41846656498) **finalizó SUCCESS**, y [**GitHub Pages 41846656249**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41846656249) **finalizó SUCCESS** para el **mismo commit `4012d8fe`**. Esto acredita integridad técnica de esos cambios, no revisión jurídico-editorial integral.

**Automatización existente actualizada por la petición expresa «auditoría real de todo sin pausas»:** tarea **Auditoría continua OpoWeb** (misma tarea, sin duplicación) pasa de **diaria** a **cada hora** desde **04/11/2026 a las 16:00, Europe/Madrid**, con instrucciones depuradas para leer el último apartado del registro y avanzar por lotes sustantivos sin pedir confirmaciones ni repetir trabajo. Avisos solo por hitos o incidencias materiales. La tarea deberá detenerse al obtener y documentar el **100 % real**, no al completarse archivos.

**Reanudación siguiente:** conservar estado §36; concluir matrices restantes y auditoría jurídica de La Puebla/UC3M prioritarias; contrastar **pregunta visible, cuatro distractores, justificación y norma consolidada** en cada nueva corrección; validar después de cada lote; mantener **Diputación C2 OAPGT T6 al final**, **Olías discrepancias oficiales abiertas**, no reabrir Carranque/Las Ventas.

> ⚠️ **¡Foco Examen!:** Una cadena corta como **«1–2»** es una referencia correcta de artículos; la validación no debe rechazarla por longitud. **CI verde no equivale a certificación de los 121 temas**.


## 38. Ampliación documental de matrices Diputación Auxiliar C2 — **04/11/2026**

**Punto de partida:** leídos `PROJECT_RULES.md` y último apartado §37; allí constaba CI/Pages **SUCCESS** en SHA `4012d8fe` después de corregir la aserción que rechazaba «1–2». No se repitieron ni alteraron esa reparación, el reequilibrio de 1.291 claves ni la definición legal PRL ya corregida. Se conserva **0/121 temas con recertificación jurídica integral de noviembre**.

**Lote ejecutado en el repositorio:** creadas **7 matrices documentales nuevas** `matriz.json` para **Diputación Auxiliar C2 T1, T5, T7, T9, T10, T11 y T12**. En total pasan de **5 a 12 de 20 temas con matriz independiente**, sin alterar los manuales, bancos, estados editoriales ni el T6 OAPGT reservado para el final. Las matrices contienen epígrafe literal del programa BOP Toledo **197/2026, Anexo XI, CSV 2026.00004759**, correspondencia inciso → norma → artículos → contenido exigible y fuentes primarias, con marca explícita **PENDIENTE_COTEJO_INTEGRAL**. Se apoyan en los `fuentes.md` ya existentes, no constituyen contraste jurídico artículo por artículo.

**Correspondencias incorporadas:** T1 Constitución **10–55 y 166–169 CE**; T5 municipio/provincia **LRBRL 11–38**, LOREG y Reglamento provincial BOP **31/2024**; T7 Ley CLM **4/2011**, incluidos **67–82** y reforma de **70.2** por Ley **2/2026**; T9 Ley **12/2010 CLM** y LO **3/2007**; T10 LO **3/2018** y **RGPD**; T11 LGT **17–48, 58–76, 117–140** y TRLRHL **6–9**; T12 LGT **28, 31–32, 60–65, 71–74, 82, 160–177, 221**, RGR y RD **520/2005**. Fuentes oficiales base: [CE](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [LRBRL](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392), [LOREG](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672), [Ley CLM 4/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752), [LO 3/2007](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115), [LO 3/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), [LGT](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186), [TRLRHL](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214).

**Archivos modificados:** siete `content/diputacion-toledo-auxiliar-c2/tema-XX/matriz.json`, `data/programa-diputacion-auxiliar-c2-2026.json` (rutas) y `tests/validate-diputacion-c2-matrices.mjs` (inventario dinámico y 12 rutas). Commits de creación `d7858696`, `da5f7d73`, `5e47c026`, `b190d60e`, `118d3d2e`, `9929f31f`, `d19e13e4`; manifest `9bbbf859`; test `a0b0029e`. **Validación pendiente:** al consultar el estado de commit `a0b0029e`, GitHub devolvió `statuses: []` y la consulta de workflow runs asociados (limitada a ejecuciones por PR) devolvió lista vacía; esto **no acredita éxito ni fallo** de CI/Pages para el SHA nuevo. No se ejecutó navegador real. Revisar ejecución de `validate.yml` y Pages para el SHA exacto y corregir fallos demostrados.

**Pendientes reales:** **8 matrices C2** sin completar: T14–T20 (7) y T6 OAPGT (1), esta última al final; contraste legal íntegro de las 12 matrices creadas; **0/121** recertificaciones integrales. Priorizar **La Puebla C2 (examen 14/11/2026)** y **UC3M C2 (21/11/2026)** con revisión individual de pregunta visible, cuatro distractores, fundamento, fuentes y fecha de corte; después completar T14–T20 C2, dejar T6 al final y abordar C1/Olías. Radar: mantener seguimiento sin desplazar exámenes inminentes. No reabrir Carranque ni Las Ventas.

**TAREA ACTIVA:** verificar CI/Pages del último SHA; auditoría jurídica profunda y distractores de La Puebla/UC3M antes de seguir con las matrices restantes; mantener la distinción entre integridad técnica, cobertura documental y certificación jurídico-editorial real.

## 39. Dos errores normativos contrastados y matrices C2 completas salvo OAPGT — **04/11/2026**

### 39.1. La Puebla T13 — definición de firma, niveles y sello cualificado

**Problema sustantivo:** el manual y la pregunta **LP-T13-001** afirmaban que cualquier **firma electrónica** acredita necesariamente autoría, voluntad e integridad sin distinguir niveles. La pregunta **LP-T13-003** atribuía a todo **sello electrónico** un efecto sin matizar la presunción legal específica del cualificado. La [versión consolidada del Reglamento (UE) 910/2014 (18/10/2024)](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) establece:

| Precepto eIDAS | Regla que debe estudiar el opositor | Error que había que evitar |
|---|---|---|
| **3.9–10** | **Firmante: persona física**; firma electrónica: **datos electrónicos usados para firmar** | Afirmar que la definición general exige todas las garantías técnicas de avanzada |
| **3.14** | Certificado de firma vincula datos de validación con **persona física** | Confundir un certificado con el acto de firmar |
| **26** | La **firma avanzada** incorpora identificación, vínculo único, control de datos de creación y capacidad de detectar cambios | Equivaler firma simple y avanzada |
| **25.1–2** | No excluir efectos probatorios por mero formato; **solo firma cualificada** tiene equivalencia legal expresa con manuscrita | Dar esa equivalencia a cualquier firma electrónica |
| **3.24–25; 35.1–2; 36** | Creador del sello es **persona jurídica**; **sello cualificado** goza de **presunción legal de integridad y corrección del origen** | Tratar todos los sellos como cualificados |

**Cambios efectivos en GitHub:** `content/la-puebla/tema-13/manual.md` (definiciones, tabla, foco y esquema), `preguntas.json` (revisión jurídica de dos preguntas **LP-T13-001** y **LP-T13-003** conservando sus identificadores y la posición correcta), `fuentes.md` (trazabilidad) y `tests/validate-la-puebla-normativa-focal.mjs` (regresión). **Commit `922b216a`**. Se conservaron **12 preguntas** y **3 respuestas correctas por cada letra**. **[CI 41857792510](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41857792510) SUCCESS** y **[Pages 41857790891](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41857790891) SUCCESS** sobre el mismo SHA. **No se certifican las otras diez preguntas ni el resto del tema.**

> ⚠️ **¡Foco Examen!:** Firma **simple ≠ avanzada ≠ cualificada**. El sello **cualificado**, y no todo sello electrónico indistintamente, disfruta de la presunción del **art. 35.2 eIDAS**.

### 39.2. UC3M T15 — error en el cese del Defensor Universitario por reforma estatutaria de 2009

**Problema jurídico acreditado:** `content/uc3m/tema-15/manual.md` decía que el **Claustro** debía acordar por la misma mayoría tanto **la renuncia voluntaria** como los ceses por incumplimiento o lesión de derechos. **La redacción vigente del art. 127.2** procede del **Decreto 95/2009, de 12 de noviembre**, publicado en **BOCM n.º 288 de 04/12/2009** ([apartado cincuenta y tres, fuente primaria](https://www.bocm.es/boletin/CM_Orden_BOCM/2009/12/04/2009-12-04_02122009_0045.pdf)); distingue **petición propia** de **acuerdo del Claustro** por esas dos causas, con la **misma mayoría exigida para elegir al Defensor**. La [UC3M también publica el texto refundido de los Estatutos](https://www.uc3m.es/about-uc3m/regulations/statutes-uc3m). **Decreto 1/2003 aislado** no es suficiente para describir la redacción reformada de este apartado.

Se corrigió el apartado 2.1, tabla comparativa y foco de `manual.md`; se reemplazó la pregunta genérica **UC3M-T15-003** por un supuesto sobre **renuncia voluntaria vs. cese acordado**, actualizando texto visible `pregunta`, `trampa`, respuesta literal, explicación y referencia. Se ajustó `matriz.json` para atribuirla al bloque 2.1 y `fuentes.md` para documentar el boletín de 2009. **21 preguntas mantenidas**, posiciones equilibradas (6/5/5/5), mismo identificador y ninguna alteración de simulacros. Se añadió `tests/validate-uc3m-statutes-cese.mjs` a CI y `npm test`.

**Commit `721d73fa`**, [**CI 41858266823**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41858266823) **SUCCESS**; [**Pages 41858262628**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41858262628) **SUCCESS**; [**PDF UC3M/Diputación 41858266129**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41858266129) **SUCCESS**. La validación jurídica es **focal**, no integral.

> ⚠️ **¡Foco Examen!:** **Art. 127.2**: **petición propia** no necesita la votación del **Claustro** prevista para el cese por **incumplimiento o lesión**. La mayoría del segundo caso es **mitad más uno de los miembros**.

### 39.3. Diputación C2: siete matrices restantes, T6 OAPGT reservado

Se comprobó que `data/programa-diputacion-auxiliar-c2-2026.json` tenía **12/20 rutas de matrices** documentales. Se añadieron **7 matrices independientes** para **T14 (firma electrónica), T15 (Ley 40/2015 AGE), T16 (Windows 11 I), T17 (Edge/GroupWise 24), T18 (Writer 24), T19 (Calc 24) y T20 (hardware/periféricos)**, cada una con **epígrafe literal del BOP Toledo 197/2026, Anexo XI**, fuentes técnicas/legales ya identificadas y correspondencia `inciso → norma/fuente → artículos/capítulos → contenido exigible`. La **T6 OAPGT** sigue expresamente **sin matriz** y reservada para el final por las fuentes estatutarias/laborales incompletas.

**Estado documental nuevo: 19/20 matrices C2 existentes (95 % de la estructura de matrices), NO 95 % de exactitud jurídica**. Las nuevas contienen sello `MATRIZ_DOCUMENTAL_CREACION_20261104_PENDIENTE_COTEJO_INTEGRAL`. Se ha preservado una incidencia editorial real: las fichas `fuentes.md` de los **temas 14 y 19** dicen aún **BORRADOR**, mientras el programa los registra como **EN_REVISION_USUARIO**; ninguna etiqueta se transformó automáticamente en `AUDITADO` ni `PUBLICADO`.

**Archivos:** siete `content/diputacion-toledo-auxiliar-c2/tema-XX/matriz.json`, el manifiesto de programa y `tests/validate-diputacion-c2-matrices.mjs` para verificar ahora los **19 temas** y no tocar el T6. **Commit `8b08ad68`**, [**CI 41858662208**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41858662208) **SUCCESS**; **Pages 41858661571** seguía `in_progress` al control y **no** se marca como éxito sin confirmación del mismo SHA.

### 39.4. Estado verdadero y reanudación

**No se cambia artificialmente el indicador de certificación integral**: **121/121 temas registrados, 120/121 fuera de BORRADOR; 0/121 recertificados jurídicamente de forma integral en noviembre**. Se suman dos problemas normativos reales corregidos, tres respuestas (dos La Puebla, una UC3M) reconstruidas con fuente primaria, y siete matrices documentales honestas. El control CI acredita integridad estructural, no validez de todos los distractores.

**TAREA ACTIVA:** revisar **LP T10** (art. 27 LGT, art. 7–9 TRLRHL) y **resto de LP T13** a nivel de opción/distractor, **UC3M T16** (RD 822/2021, normativa de permanencia/evaluación y fecha de corte oficial de convocatoria), validar el último Pages por SHA y continuar auditoría jurídica del resto; **T6 OAPGT C2 al final**. Mantener el seguimiento horario sin duplicar tareas. **Carranque/Las Ventas no reabrir**.

> ⚠️ **¡Foco Examen!:** Un **tema publicado** o una **matriz creada** no significa `AUDITADO` integral. En los tests, citar el **precepto concreto en su versión vigente** y verificar que la alternativa correcta lo reproduce sin confundir niveles, órganos ni mayorías.

## 40. Cotejo focal artículo 7.2 TRLRHL — La Puebla T10 — **04/11/2026**

**Arranque y continuidad:** consultados `PROJECT_RULES.md` y último apartado **§39**, sin rehacer las correcciones eIDAS de La Puebla T13, estatutos UC3M T15 ni las 19 matrices C2. Se mantiene **0/121 temas recertificados jurídicamente de forma integral**. La tarea activa de §39 dirige a La Puebla T10 y UC3M T16, con exámenes próximos.

**Fuente primaria comprobada:** [TRLRHL, art. 7.2, texto consolidado BOE con actualización 07/10/2026](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214#a7). El acuerdo de delegación corresponde al **Pleno de la corporación delegante**; la aceptación corresponde al órgano de gobierno receptor y, **si es otra entidad local, a su Pleno**; la publicación posterior debe realizarse en **boletines oficiales de la provincia y de la comunidad autónoma**. El manual y la pregunta LP-T10-002 antes solo expresaban «órgano competente» y «publicación oficial», omitiendo estas distinciones susceptibles de examen.

**Corrección realizada:** `content/la-puebla/tema-10/manual.md` (detalle de los dos Plenos, doble publicación y foco); `preguntas.json` (LP-T10-002 delimitada a delegación entre entidades locales, conservando respuesta correcta y cuatro alternativas; ampliada justificación y trampa); `fuentes.md` (artículo y examen de los tres distractores). Regresión añadida en `tests/validate-la-puebla-normativa-focal.mjs` para impedir perder la precisión. Commits secuenciales **`0197850e`**, **`4cf67646`**, **`10e87ab1`** y **`65251265`**. **La revisión jurídica es focal de un precepto y una pregunta; no certifica el tema ni las otras once preguntas.**

**Validación:** las actualizaciones de archivos han sido aceptadas por GitHub. **CI/Pages del SHA `65251265` aún no comprobados en esta ejecución**; no se atribuye SUCCESS. La revisión anterior §39 sí acreditó CI/Pages del SHA `721d73fa` y CI del SHA `8b08ad68`, con Pages de este último pendiente en el momento del registro. Confirmar resultados por SHA antes de declarar publicación. Sin navegador real, no hay validación visual móvil/escritorio.

**Siguiente bloque prioritario:** confirmar CI/Pages y revisar **UC3M T16** (normativa de permanencia, evaluación y corte de vigencia de convocatoria), después completar revisión de distractores de La Puebla T10/T13 y del resto de La Puebla/UC3M. Diputación C2 T6 OAPGT **reservado para el final**; discrepancias oficiales Olías **sin resolver**. Radar sin desplazar exámenes. No reabrir Carranque ni Las Ventas.

> ⚠️ **¡Foco Examen!:** art. **7.2 TRLRHL**: **Pleno delegante** acuerda; **Pleno de la entidad local delegada** acepta; **BOP + boletín autonómico** publican. Ninguno de estos matices permite afirmar que el resto de La Puebla T10 esté recertificado.


## 41. UC3M T16 — permanencia parcial y Grados Abiertos, revisión focal — **04/11/2026**

**Continuidad:** leídos `PROJECT_RULES.md` y último §40. No se repitieron las correcciones de La Puebla T10, eIDAS T13, UC3M T15 ni las matrices C2. Prioridad por examen UC3M del **21/11/2026**. Estado de certificación integral **0/121**, sin cambiarlo.

**Hallazgo normativo:** la pregunta `UC3M-T16-011` decía «un estudiante UC3M» y respondía **12 créditos** sin delimitar el régimen, omitiendo las excepciones expresas de la normativa de permanencia. **Art. 1.1**: 12 créditos del primer curso en el primer año para régimen general; **art. 1.2.a**: dos años consecutivos para completar primero (tres en ingeniería); **art. 1.2.b**: **Grados Abiertos** con 90 ECTS en dos años (Sociales/Humanidades) o tres (Ingeniería); **art. 1.3**: dedicación **parcial**, al menos una asignatura superada en el primer año y cómputo de cada curso parcial como medio curso. **Art. 2**: cuatro convocatorias generales, seis ingeniería. Fuente institucional: [normativa UC3M de matrícula y permanencia](https://uc3m.es/postgrado/normativa/matricula) y [catálogo oficial de normativa de Grado](https://www.uc3m.es/ss/Satellite/UC3MInstitucional/en/ListadoNormativas/1371206706530/Estudios_de_Grado).

**Cambios efectivos:** `content/uc3m/tema-16/manual.md` añade salvedades de tiempo parcial y Grados Abiertos, sin confundir créditos aprobados con matriculados; `preguntas.json` delimita `UC3M-T16-011` al régimen general y amplía justificación/trampa/referencia conservando las **cuatro opciones, clave 12 e identificador**; `fuentes.md` coteja expresamente los tres distractores. Commits **`da08b952`**, **`43326dd4`**, **`19e03488`**. No se ha modificado `UC3M-T16-012` ni se ha resuelto la fecha exacta de corte normativo UC3M. El resto de preguntas del T16 requiere cotejo individual.

**Validación:** cambios aceptados por GitHub; la consulta de combined commit status del SHA `19e03488396c9e05b8c1b7fec4e8607955b01890` no sustituye comprobación de ejecuciones completas de CI/Pages, que **quedan pendientes de acreditar para ese SHA**. Sin prueba de navegador ni recertificación integral.

**TAREA ACTIVA:** comprobar CI/Pages del SHA exacto y reparar fallos acreditados; buscar la resolución UC3M de listas definitivas y anuncio del ejercicio para fijar fecha de corte; seguir cotejando **UC3M T16** (especialmente evaluación continua, límites de ECTS y distractores), luego La Puebla T10/T13, y el resto por proximidad de exámenes. **Diputación C2 T6 OAPGT al final**. Olías mantiene discrepancias 4/1 plazas y 20 naturales/hábiles sin resolver. Radar sin desplazar exámenes. **0/121 certificados integralmente**.

## 42. Primer lote multipieza de auditoría jurídica y de unicidad — **04/11/2026**

**Petición operativa:** continuar **tema por tema**, con **más de un tema por informe**, priorizando los exámenes más próximos. Se trabajó conjuntamente sobre **La Puebla T10 y T13** y **UC3M T16**, mediante una sola transacción Git documentada, **commit [`06a4f1bf`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/06a4f1bff93696fa55fbc4de4938823085654e54)**, sin prometer certificación integral de ninguno.

### 42.1. La Puebla T13, firma/certificado y unicidad de respuestas

- **LP-T13-004**: el enunciado antiguo preguntaba qué condición **«no basta con que»** exista para la cualificación, aunque el proveedor cualificado, el cumplimiento de anexo o su inclusión en listas de confianza, **cada uno por separado**, tampoco garantizan el certificado cualificado. **Era una pregunta potencialmente multirrespuesta** con clave predeterminada B. Reformulada como **«¿qué afirmación es INCORRECTA?»**; la publicidad comercial del proveedor resulta la única incorrecta y A/C/D son requisitos y mecanismos correctos sin afirmar suficiencia autónoma.
- **LP-T13-009**: el antiguo **«no basta con...»** servía también para verificaciones parciales de integridad, cadena o vigencia. Reformulada como **«¿qué indicio NO constituye comprobación técnica de la validez criptográfica?»**; solo la apariencia de firma manuscrita en el PDF no representa prueba técnica. Los demás distractores son **controles pertinentes**, aunque no suficientes aisladamente.
- Se ampliaron `manual.md` (tabla de cualificación cumulativa y controles técnicos vs. imagen), `preguntas.json` (ambas preguntas y fundamentos) y `fuentes.md` (riesgo y fuente). **Claves y posiciones preservadas** en **12 preguntas, 3 letras de cada tipo**.
- Fuentes primarias: [eIDAS](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822), [reforma UE 2024/1183](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046).

> ⚠️ **¡Foco Examen!:** Un test de **respuesta única** debe excluir enunciados negativos de «suficiencia» si varias opciones son individualmente insuficientes; la clave almacenada no valida un distractor.

### 42.2. La Puebla T10, literalidad del artículo 31.1 CE

- **LP-T10-001** mezclaba en una enumeración indiferenciada **capacidad económica**, **igualdad**, **progresividad** y **no confiscatoriedad** como si el **art. 31.1** usara idéntico verbo para los cuatro elementos. Revisada la [**Constitución española**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229): **se contribuye de acuerdo con la capacidad económica**, el sistema **se inspira en igualdad y progresividad** y **en ningún caso tendrá alcance confiscatorio**.
- Redactada nueva pregunta estrictamente de literalidad y cuatro alternativas unívocas. Manual ampliado con **tabla comparativa** y foco; `fuentes.md` trazable. Identificador y posición correcta B mantenidos. **12 preguntas, 3 de cada letra**.

> ⚠️ **¡Foco Examen!:** **Capacidad económica** no es una forma literal de «**inspirado en**» del art. 31.1 CE, aunque figura entre los principios generales del sistema en el art. 3 LGT.

### 42.3. UC3M T16, excepciones de evaluación continua

- Comprobada la [**página oficial UC3M de Normas de evaluación de Grado**](https://www.uc3m.es/grado/informacion-practica/normativa-academica/normas-evaluacion?idioma=es&site=Grado). **40 %** mínimo evaluación continua; **60 %** máximo examen final ordinario; extraordinaria **100 %** cuando el estudiante no siguió evaluación continua **en asignaturas con esa convocatoria**. La propia UC3M menciona **asignaturas especiales** que pueden carecer de examen final y **de convocatoria extraordinaria**.
- **UC3M-T16-014/015** delimitadas expresamente a **asignaturas ordinarias** y en el segundo caso a una asignatura **que sí tiene extraordinaria**. Ampliados fundamento, trampa, fuentes, tabla y foco en manual. **21 preguntas** conservadas, posiciones de respuesta **6/5/5/5**.
- No se modifica otra pregunta sobre permanencia, ni se suplanta la **fecha de corte normativo** de la base primera.7 de la convocatoria ([BOE-A-2026-14624](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624)), que **sigue pendiente de comprobación documental primaria de la resolución definitiva UC3M**. La ficha institucional de empleo encontrada con fecha de rastreo anterior anunciaba el examen de **21/11/2026** como *previsible* sin mostrar aún la resolución definitiva en el texto accesible; no se dedujo de ella una fecha de corte.

> ⚠️ **¡Foco Examen!:** **40/60/100** no se aplican indiscriminadamente a cualquier asignatura especial sin convocatoria extraordinaria.

### 42.4. Integración y límites del lote

Se modificaron **12 archivos**, incluyendo los tres `manual.md`, tres `preguntas.json`, tres `fuentes.md`, `tests/validate-priority-three-topics.mjs` nuevo y su registro en `.github/workflows/validate.yml` y `package.json`. La prueba **verifica cadenas y estructuras de los 5 enunciados corregidos** (1 T10, 2 T13, 2 UC3M16) y la conservación de **3/3/3/3** y **6/5/5/5**; es una **regresión editorial focal** y no análisis semántico general de todos los distractores.

**Validación externa al escribir este registro:** GitHub confirmó el commit **`06a4f1bf`** en rama `main`. La consulta de runs del mismo SHA solo devolvió **Pages 41881698928**, inicialmente `queued`/`in_progress`; **no devolvió todavía un run `Validar OpoWeb v2` del mismo SHA**. Por ello **no se declara CI ni despliegue exitoso para `06a4f1bf`**, y su comprobación queda como primer siguiente paso. El SHA previo **`638127f2`** sí tenía CI y Pages completados con éxito (runs **41872707374** y **41872707693** respectivamente).

**Estado comprobable:** los tres temas (**LP T10, LP T13, UC3M T16**) avanzan en revisión **focal**, **ninguno se cambia artificialmente a AUDITADO INTEGRAL**. Siguen **121 temas registrados y 0/121 recertificados de forma integral** a noviembre de 2026. No confundir cobertura del banco o éxito CI con corrección jurídica de todas las opciones. La prioridad siguiente es seguir con **La Puebla C2 y UC3M C2** (exámenes del **14 y 21/11/2026**), comprobar por precepto cada opción restante, resolver el corte UC3M con resolución oficial, y después Diputación/Olías. **Diputación C2 T6 OAPGT queda al final**. No reabrir Carranque/Las Ventas.

**TAREA ACTIVA:** validar la ejecución del workflow de `06a4f1bf`; continuar varios temas por lote con cotejo de norma/pregunta/distractor; registrar evidencia de cada tema y no declarar 100 % sin las cinco capas de control.


## 43. UC3M T16 — cotejo de cinco preguntas sobre prácticas y trabajos finales — **04/11/2026**

**Continuidad:** leídos `PROJECT_RULES.md` y §42 (último apartado al iniciar); sin repetir las cinco preguntas de §42 ni las anteriores correcciones de T16. Consulta de ejecuciones por SHA mediante GitHub: el endpoint conectado `fetch_commit_workflow_runs` devolvió lista vacía tanto para el commit de §42 `06a4f1bf` como para la cabeza documental `01f218a4`, por lo que **no se atribuye éxito de CI/Pages a esos SHA**. Debe contrastarse con la lista de runs de Actions cuando esté accesible.

**Fuente jurídica primaria:** [RD 822/2021, arts. 11.2, 14.5–6 y 17.3–4, BOE consolidado actualizado 23/10/2026](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781). También revisada la [Sentencia TS 6/10/2026 publicada 23/10/2026, BOE-A-2026-22083](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083), que **anuló RD 905/2025**, no RD 822/2021. Se mantiene pendiente la fecha de corte normativa de la convocatoria UC3M; no se inventa.

**Auditoría focal realizada:** cotejadas **las cinco preguntas UC3M-T16-017 a 021 y sus 20 alternativas** con el precepto aplicable. En `017` curricular significa integrante del plan (art. 11.2); `018` máximo ordinario prácticas de Grado 25 % con excepciones UE y Mención Dual 20–40 % (arts. 14.5, 22); `019` TFG Grado 240 ECTS 6–24, con máximos 30/36 en Grados de 300/360 (art. 14.6); `020` prácticas Máster hasta un tercio (art. 17.3); `021` TFM obligatorio 6–30 y defensa pública (art. 17.4). **Las cinco claves se conservaron**, y se reforzaron las justificaciones con contraste de cada distractor. El resto del tema no se declara auditado integralmente.

**Archivos y commits:** `content/uc3m/tema-16/preguntas.json` (cinco referencias normativas y justificaciones más metadato de control; commit `c0b5c054`), `content/uc3m/tema-16/fuentes.md` (matriz focal de cinco preguntas; commit `afc2e837`). La escritura JSON conserva 21 preguntas y los identificadores; **no se ejecutaron pruebas locales ni navegador real**. CI/Pages de estos SHA **sin acreditación de conclusión**; no atribuir SUCCESS por aceptar los commits.

**Estado verdadero:** **0/121 temas recertificados integralmente**. El bloque verifica cinco claves y sus distractores, no el resto de UC3M T16 ni la exactitud transversal de los 121 temas. **TAREA ACTIVA:** comprobar CI/Pages por SHA, resolver la fecha de corte de listas definitivas UC3M mediante resolución oficial, seguir por bloques amplios La Puebla y UC3M (exámenes 14 y 21/11/2026); posteriormente Diputación y Olías, con T6 OAPGT al final. Radar no desplaza exámenes. No reabrir Carranque ni Las Ventas.

## 44. Primeros dos temas con **cierre jurídico-editorial completo** — La Puebla T13 y T7 — **04/11/2026**

**Cambio de criterio de trabajo solicitado expresamente:** priorizar **cerrar temas completos** en lugar de acumular retoques aislados y dar por finalizada una fase cuando todas sus preguntas y el programa estén cotejados de forma individual. No mezclar **cierre jurídico-editorial** con **prueba real de interfaz web**.

### 44.1 La Puebla **T13: certificado electrónico** — **AUDITADO jurídico-editorial**

- **Programa oficial completo:** **cinco incisos** del BOP Toledo **82/2026, anuncio 2026-1965**, desglosados en **cinco capítulos** de la web y manual principal. Revisión de terminología, soporte, identidad, firma y sello, prestadores, organismos y servicios.
- **Banco completo:** **12/12 preguntas**, **48/48 alternativas**, **36 distractores** cotejados de manera individual con [Reglamento eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) y [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032).
- **Hallazgo final:** **LP-T13-008** decía revocación «evita uso para nuevas firmas», formulación que podía interpretarse como imposibilidad técnica; se rectifica a **extinción de vigencia del certificado** desde la publicación de la revocación. **Una firma histórica válida** no queda automáticamente invalidada ni desaparece la clave privada. **Arts. 4.1 Ley 6/2020, 24.3 y 32.1 eIDAS**.
- **Trazabilidad completa:** [`content/la-puebla/tema-13/cotejo-integral-2026-11-04.md`](content/la-puebla/tema-13/cotejo-integral-2026-11-04.md), incluye un registro de **las cuatro alternativas exactas**, clave, explicación por artículo y descarte de distractores. En `matriz.json` se registra `controlIntegralEditorial20261104.estado = AUDITADO`, y `controlFuncionalWeb = PENDIENTE_PRUEBA_NAVEGADOR_REAL`.
- **Documentación coherente:** se actualizó `manual.md`, `index.md`, `fuentes.md`, `articulos.md`, `bloque-04-prestadores-servicios.md` y `feedback.md`. La ficha histórica **afirmaba erróneamente que el banco estaba vacío**: ya se corrigió, son **12** preguntas.
- **Prueba automatizada:** [`tests/validate-la-puebla-t13-integral.mjs`](tests/validate-la-puebla-t13-integral.mjs) conectada al workflow y a `npm test`. Primer run sobre **`29eddb5d`** **FAILED** porque **4 referencias de pregunta eran demasiado cortas**: **LP-T13-005, -006, -010 y -011**. Corregidas con artículo concreto en commit **`bca33ab6`**; [**CI 41884375988 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41884375988), [**Pages 41884158658 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41884158658), y [**PDF La Puebla 41884376057 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41884376057), **mismo SHA `bca33ab6`**.

> ⚠️ **¡Foco Examen!:** **5 años** vigencia certificado cualificado; **15 años** conservación de evidencias; **24 meses** auditorías externas; **24 horas** publicación de revocación; datos y órganos distintos para cada cifra.

### 44.2 La Puebla **T7: Prevención de Riesgos Laborales** — **AUDITADO jurídico-editorial**

- **Programa oficial completo:** epígrafe BOP Toledo **82/2026** (derechos/obligaciones, servicios de prevención, consulta/participación) y **siete bloques** de `matriz.json`; manual de **59 secciones** y cuadro final de revisión.
- **Banco completo:** **12/12 preguntas** con **48/48 alternativas** cotejadas individualmente, incluidos los **36 distractores**, contra [LPRL, Ley 31/1995](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [RSP, RD 39/1997](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853). Fuentes por artículo y alternativa en [`content/la-puebla/tema-07/cotejo-integral-2026-11-04.md`](content/la-puebla/tema-07/cotejo-integral-2026-11-04.md).
- **Hallazgo:** **LP-T07-005** preguntaba por ratificación en **24 horas** sin concretar quién acordó la paralización. Se delimita explícitamente al acuerdo de **representantes legales por mayoría cuando el empresario no adopta las medidas necesarias**, con comunicación a empresa y **autoridad laboral** que ratifica/anula en **24 horas** (**art. 21.3 LPRL**). Se han reforzado manual, tabla y referencia. La fila de plantilla hasta 30 se matiza por existencia del Delegado de Personal.
- **Matriz:** `controlIntegralEditorial20261104.estado = AUDITADO`, `controlFuncionalWeb = PENDIENTE_PRUEBA_NAVEGADOR_REAL`, sin falsear aprobación integral técnico-funcional.
- **Commits:** **`852063dd`** (manual, matriz, banco, fuentes, informe) y **`4ceea4a4`** (test [`validate-la-puebla-t07-integral.mjs`](tests/validate-la-puebla-t07-integral.mjs) incluido en CI y `npm test`). [**CI 41884694485 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41884694485) en **`4ceea4a4`**, que incluye ambos tests T7 y T13; **Pages 41884692942** estaba `in_progress` al corte, comprobar antes de atribuirle éxito.

> ⚠️ **¡Foco Examen!:** El **plazo 24 horas** se refiere a la **autoridad laboral** cuando revisa paralización representativa (**art. 21.3 LPRL**). **15 días** es el informe de Delegados (**art. 36.3**); **50 trabajadores** es el Comité (**art. 38.2**).

### 44.3 Resultado global honesto

**Se declaran los dos primeros temas con cierre jurídico-editorial individual respaldado por norma y descarte de las 48 alternativas por tema**: **2/121 AUDITADOS en contenido jurídico-editorial (T7 y T13 La Puebla)**. Son **96 alternativas documentadas, 24 claves**. **NO declarar todavía 2/121 certificados al 100 % funcional/técnico**: navegador real, uso móvil, recorrido completo por materiales y prueba en interfaz publicada quedan **pendientes**. No reinterpretar el contador anterior de **0/121 recertificación integral de cinco capas** como si todas las capas estuvieran concluidas.

**Nuevo criterio operativo permanente:** para cada tema, exigir **una matriz íntegra de las alternativas del banco** y contrastar manual, fuentes, cifras, excepciones, formato, rutas y tests antes de marcar cierre editorial. No confundir el simple éxito CI con la exactitud legal. No acumular más revisiones focales de temas distintos sin avanzar hacia el cierre de uno de ellos.

**TAREA ACTIVA:** verificar Pages del commit **`4ceea4a4`** y, en la medida que las herramientas permitan, control funcional real; continuar cierre completo de La Puebla restantes y después UC3M por cercanía de exámenes (**14/11** y **21/11**); mantener matriz de cinco capas, no inflar certificación final. Diputación C2 T6 OAPGT al final. No reabrir convocatorias descartadas.

## 45. Tres cierres jurídico-editoriales adicionales La Puebla T2, T4 y T14 — **04/11/2026**

**Continuidad:** leído §44 y `PROJECT_RULES.md`; no se repitió el cotejo de T7 y T13, ya **AUDITADOS** jurídico-editorialmente. Según la petición, se priorizó **terminar tres temas enteros** en el mismo lote, no más intervenciones parciales. Se conserva el indicador separado de **certificación integral de cinco capas** sin inflarlo.

**Fuente del programa:** BOP Toledo **82/2026**, anuncio **2026-1965**, **05/05/2026**. Normativa oficial consolidada revisada en [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) (última actualización publicada **06/11/2024**), [**Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) (última actualización publicada **02/08/2024**) y [**LRBRL 7/1985**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) para fin de vía y lesividad local.

### 45.1. **Tema 2 · Ley 39/2015, disposiciones generales, interesados, actividad, términos y plazos**

- **Programa completo:** **5 partes** de la matriz y desarrollo del manual que abarcan **artículos 1–33**. El banco tiene **12 preguntas, 48 alternativas**, con cada opción y motivo exacto de aceptación/rechazo en [`cotejo-integral-2026-11-04.md`](content/la-puebla/tema-02/cotejo-integral-2026-11-04.md).
- Cotejos centrales: reserva legal de trámites adicionales **art. 1.2**; entidad de derecho privado dependiente no es automáticamente Administración Pública **art. 2.2–3**; representación y plazo de subsanación **10 días art. 5.6**; apoderamientos máximo **5 años art. 6.6**; obligación electrónica de persona jurídica **14.2**; plazo supletorio de resolver **3 meses art. 21.3**; silencio general estimatorio con excepciones **24**; mes sin día equivalente **30.4**; urgencia no reduce solicitudes ni recursos **33**.
- **Sin necesidad de cambio de clave:** **12 correctas y 36 distractores** comprobados. Estado `controlIntegralEditorial20261104.estado = AUDITADO` en `matriz.json` y nota de control funcional **PENDIENTE_PRUEBA_NAVEGADOR_REAL**. Manual, fuentes y feedback actualizados (la frase antigua «banco vacío» ya no es actual).
- Commit **`fdb4efb5`**. [**CI 41887238414 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41887238414), [**PDF La Puebla 41887238211 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41887238211), mismo SHA.

> ⚠️ **¡Foco Examen!:** El plazo de **1 mes** desde **31 de enero** no equivale a **30 días hábiles**: si no hay equivalente, vence el **último día de febrero**, salvo prórroga por inhábil.

### 45.2. **Tema 4 · revisión de oficio y recursos**

- Programa desglosado en **7 bloques**, con **Ley 39/2015 arts. 106–126**, LRBRL **52–53** y manual extenso. [**Cotejo individual de las 48 alternativas**](content/la-puebla/tema-04/cotejo-integral-2026-11-04.md) documentado íntegramente, incluidas **12 claves y 36 distractores**.
- **Corrección jurídica de LP-T04-001**: antes afirmaba «en cualquier momento» sin delimitar condiciones; se indica expresamente que es **acto nulo** que **pone fin a la vía** o **no fue recurrido en plazo**, con **causa de art. 47.1** y **dictamen favorable** de órgano consultivo (**art. 106.1**). Manual enriquecido con tabla de requisitos comparados con **lesividad art. 107** y **rectificación art. 109.2**.
- Se actualizaron matriz (`AUDITADO` jurídico-editorial), fuentes, feedback y manual. En el primer cierre faltaba un enlace de cotejo en manual y se mantenía una afirmación histórica «Preguntas trazables: no creadas todavía». **Corregida posteriormente en commit `41c9a3f1`** por un fallo real del test.
- Commits: **`01e99324`** (cotejo y cambios) con [**CI 41886704230 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886704230), [**PDF 41886704183 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886704183), [**Pages 41886702819 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886702819) en ese SHA; ajuste de `manual.md` `41c9a3f1`.

> ⚠️ **¡Foco Examen!:** **Art. 106 revisión de nulidad** exige dictamen favorable y acto elegible; **art. 107 lesividad** es para acto favorable **anulable**, declaración dentro de **4 años**.

### 45.3. **Tema 14 · órganos Ley 40/2015 y Administración General del Estado**

- Revisados **5 incisos** del programa, cinco capítulos, manual y **12 claves + 36 distractores** de su banco, con cotejo literal por opción en [`cotejo-integral-2026-11-04.md`](content/la-puebla/tema-14/cotejo-integral-2026-11-04.md).
- Especial atención a **desconcentración art. 8.2 vs. delegación de firma art. 12**, avocación **10**, quórum y excepciones de órganos colegiados **17**, parentesco en abstención **23**, recusación negada en **3 días art. 24.4**, órganos superiores y directivos **55**, estructura mínima ministerial **58.2**, nombramiento/rango de Delegado del Gobierno **72**.
- Sin cambio de clave. Manual, fuentes, feedback y matriz actualizados (`AUDITADO` jurídico-editorial; navegador pendiente). Commit **`25cee8d8`**, [**CI 41886896685 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886896685), [**PDF 41886896508 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886896508), [**Pages 41886895132 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41886895132), mismo SHA.

> ⚠️ **¡Foco Examen!:** **Ministros y Secretarios de Estado** son órganos **superiores**; **Subsecretarios y Directores generales**, **directivos**. Cada Ministerio incluye Subsecretaría y Secretaría General Técnica, pero no necesariamente Secretaría de Estado.

### 45.4. Prueba transversal y dos fallos de aserción reparados

Se añadió [`tests/validate-la-puebla-three-legal-closures.mjs`](tests/validate-la-puebla-three-legal-closures.mjs) a **GitHub Actions** y `npm test`: comprueba que cada ítem de **T2, T4, T14** figure en informes con las **cuatro alternativas EXACTAMENTE publicadas**, misma clave, **3 respuestas A/B/C/D**, cobertura de programa y estado de pruebas de navegador sin inflar.

- **Primer fallo de CI `e0a54abd`, run 41887348190:** el test detectó que `manual.md` de T4 no enlazaba el informe. Se añadió el enlace y se corrigió el contenido editorial histórico **`41c9a3f1`**.
- **Segundo fallo de CI `41c9a3f1`, run 41887496766:** la aserción buscaba `art. 24.4` en minúscula pero el informe contiene **`Art. 24.4`**, con mayúscula y dato legal correcto. Se corrigió la prueba sin cambiar el fundamento legal en commit **`9131db4a`**. **La validación para el SHA final estaba `in_progress` cuando se hizo esta anotación**: comprobar ejecución y reparar cualquier otro fallo antes de declarar éxito.

### 45.5. Avance acumulado

**5/121 temas con cotejo jurídico-editorial de programa y de TODAS las alternativas del banco:** **La Puebla T2, T4, T7, T13, T14**. Son **60 preguntas, 240 alternativas** justificadas jurídicamente en documentos individualizados. **No se declara todavía 5/121 certificados 100 % en las cinco capas**: prueba de interfaz real (móvil y escritorio), navegación completa, accesibilidad y elementos dinámicos siguen pendientes como control separado. La existencia de informe y tests no elimina necesidad de actualizaciones por cambios legales.

**TAREA ACTIVA:** validar CI/Pages del último SHA que incluye prueba de tres temas; seguir cierres enteros en el orden de exámenes, priorizando **La Puebla (14/11)** y después **UC3M (21/11)**; evitar parciales repetidos. Mantener último tema OAPGT C2 de Diputación para cuando fuentes completas estén disponibles. No volver a Carranque/Las Ventas.

## 46. Tres nuevos cierres jurídico-editoriales: La Puebla T1, T8 y T9 — **04/11/2026**

**Continuidad tras §45:** para no dilatar la recertificación se han cerrado otros **tres temas completos en el nivel jurídico-editorial**, con control de epígrafe, normativa vigente, manual y **12 preguntas / 48 alternativas por tema**, sin repetir T2, T4, T7, T13 y T14, ya cerrados editorialmente. **La prueba real de navegador/móvil continúa siendo un control independiente no acreditado**, por lo que no se declara 100 % de todas las capas.

### 46.1. La Puebla **Tema 1 · Constitución Española de 1978** — AUDITADO jurídico-editorial

- Epígrafe oficial: seis filas de cobertura en `matriz.json`: Constitución, estructura, reforma, derechos/deberes, garantías y suspensión. Manual previo con examen artículo por artículo **CE 10–55**, reforma **166–169** y complemento **116**.
- Normativa contrastada: [**Constitución consolidada BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), publicada actualización del **20/05/2026**, que incorporó reforma del **art. 69.3**. El BOE enumera exactamente **cuatro reformas constitucionales**: **1992 (13.2)**, **2011 (135)**, **2024 (49)** y **2026 (69.3)**.
- Se actualizó `LP-T01-003` con fecha de control **04/11/2026**, preservando clave C (cuatro); `LP-T01-011` añade matiz del [**art. 53.2 CE**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a53): tutela preferente/sumaria de art. 14 y Sección primera del Cap. II; **recurso de amparo ampliado a objeción de conciencia art. 30.2**.
- **12/12 claves, 36/36 distractores**, con texto exacto de cada alternativa, fundamento y descarte en [**cotejo completo de T1**](content/la-puebla/tema-01/cotejo-integral-2026-11-04.md). `matriz.json` incorpora `controlIntegralEditorial20261104.estado = AUDITADO`.
- Commit de edición **`769d9ae1`**, ajuste de texto de pregunta sin caracteres Markdown sin renderizar **`fdef70ad`**, corrección de informe y test **`0b73756f`**. No se alteraron posiciones de respuesta: **3/3/3/3**.

> ⚠️ **¡Foco Examen!:** En el procedimiento **167** el referéndum es facultativo si lo pide **1/10** de cualquiera de las Cámaras en **15 días**; en **168** es obligatorio. **4 reformas** hasta **noviembre de 2026**.

### 46.2. La Puebla **Tema 8 · Igualdad de mujeres y hombres CLM/estatal** — AUDITADO jurídico-editorial

- **Dos incisos oficiales** del BOP Toledo **82/2026**: [**Ley 12/2010 de Castilla-La Mancha**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708), **arts. 1–65** y [**LO 3/2007**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115), **arts. 1–78**. Se crea **`tema-08/matriz.json`**, hasta ahora ausente, con dos incisos literales y **ocho subáreas editoriales** (no afirmarlas como ocho incisos oficiales).
- Se cotejaron los **12 ítems y sus 36 distractores** en [**cotejo de 48 opciones T8**](content/la-puebla/tema-08/cotejo-integral-2026-11-04.md). Sin claves erróneas; se reforzaron `LP-T08-006` y `-007` con artículo y órgano exactos. **Ley 12/2010 art. 13.2**: **Instituto de la Mujer** informa de aplicación de Ley **cada 3 años**; **art. 34.2**: **Consejo Escolar de CLM** informa de iniciativas en igualdad **cada 3 años** (redacción **Ley 4/2021**); **art. 44**: medidas/plan **al menos 2 años**, Distintivo concedido por **Presidencia de la Junta** a propuesta del **Instituto de la Mujer**.
- Se distinguieron el **40–60 %** (LO 3/2007 DA 1.ª), obligación general de plan de igualdad empresarial **desde 50** personas (art. 45) y reserva específica para cursos de promoción AGE **40 %** (art. 60.2). Se corrigió afirmación histórica de `feedback.md` sobre banco vacío y la del manual.
- Commit **`5059e1ad`**. Matriz editorial `AUDITADO`, **48/48 opciones** documentadas, las cuatro claves equidistribuidas.

> ⚠️ **¡Foco Examen!:** Dos informes **trienales**, pero **dos órganos distintos**: el **Instituto de la Mujer** del **art. 13.2** y el **Consejo Escolar de CLM** del **art. 34.2**. No adjudicar al Ayuntamiento competencias específicas de AGE.

### 46.3. La Puebla **Tema 9 · LOPDGDD y RGPD** — AUDITADO jurídico-editorial

- Fuentes: [**LO 3/2018, texto consolidado BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), actualización publicada **27/12/2025**, y [**RGPD (UE) 2016/679**](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa), directamente aplicable. Manual y matriz de **ocho áreas**, incluido art. **53 bis**, 12 preguntas y 48 respuestas.
- **Corrección legal sustantiva `LP-T09-007`**: el enunciado previo decía «imágenes que recogen un posible delito o infracción», demasiado genérico para la excepción del [**art. 22.3 LOPDGDD**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673#a22), que permite conservar imágenes para acreditar **actos que atenten contra la integridad de personas, bienes o instalaciones** y obliga a ponerlas a disposición de la autoridad competente **en 72 horas desde tener conocimiento de su existencia**. Se corrigió enunciado, justificación, trampa, fuente, manual y cuadro de cifras; se separó esta regla del plazo distinto de **72 horas de notificación de brechas del RGPD art. 33.1**.
- Cotejo [**individual de 48 alternativas T9**](content/la-puebla/tema-09/cotejo-integral-2026-11-04.md), 12 respuestas y 36 distractores. Plazos test verificados: **14 años** consentimiento menor (LO art. 7), **1 mes + posible ampliación de 2** para derechos (RGPD 12.3), **1 mes** borrado ordinario videovigilancia, **10 días** comunicación designación/cese DPD (LO 34.3), régimen público sancionador (LO 77).
- Commit **`12a457ad`**, prueba de UI pendiente, matriz `AUDITADO` jurídico-editorial.

> ⚠️ **¡Foco Examen!:** **72 horas** de videovigilancia art. **22.3** se computan desde conocimiento de la existencia de grabación probatoria, mientras **72 horas** de brecha RGPD art. **33.1** desde constancia de la violación notificable. **No son la misma obligación.**

### 46.4. Prueba técnica y estado acumulado

- Añadido [`tests/validate-la-puebla-three-audits-november.mjs`](tests/validate-la-puebla-three-audits-november.mjs) a `.github/workflows/validate.yml` y `npm test`. Verifica en **T1, T8 y T9**: **48 opciones exactas por tema** en informe, clave y `respuestaLiteral` conservados, distribución **3/3/3/3**, cobertura documental, metadato jurídico `AUDITADO` y estado funcional **PENDIENTE**.
- Primer commit del nuevo test `0b73756f` produjo [**CI 41889666085 FAILURE**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41889666085): prueba esperaba equivocadamente **5** filas en matriz de T1, cuando están definidas **6**. Se corrigió **solo el test** en **`05076637`**, preservando contenido y programa. [**CI 41889745140 SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41889745140) sobre SHA **`05076637`**, y **Pages 41889744639** figuraba `in_progress` en la consulta; no atribuirle éxito hasta que termine.
- Otros CI anteriores de T1/T8/T9 individualmente habían acabado **SUCCESS**, pero la evidencia relevante de regresión de las **144 alternativas** es el run del commit **`05076637`**.
- **TOTAL acumulado de cierres jurídicos editoriales: 8/121 temas** (**La Puebla T1, T2, T4, T7, T8, T9, T13, T14**), con **96 preguntas y 384 opciones** individualizadas. **Certificación integral funcional/jurídica de cinco capas: aún 0/121 demostradas**. Este documento justifica el cierre de bancos y cobertura de manual, no la lectura pericial de cada línea de todas las leyes ni pruebas reales de navegador.

**TAREA ACTIVA:** verificar Pages del SHA **`05076637`** y seguir **cierre jurídico-editorial de temas enteros** de La Puebla pendientes (**T3, T5, T6, T10, T11, T12, T15–T19**; verificar T1/T2... sin duplicar). Prioridad examen **14/11/2026**; luego UC3M **21/11/2026**. OAPGT Diputación C2 T6 último por dificultad documental; evitar Carranque y Las Ventas.

## 47. Control jurídico focal de La Puebla T3 y verificación de continuidad — **04/11/2026**

**Inicio obligatorio:** leídos `PROJECT_RULES.md` y el último §46, sin repetir cierres jurídico-editoriales T1, T2, T4, T7, T8, T9, T13 y T14. Inspeccionados los commits recientes: el último al inicio era `fd8e89c8`, registro del §46; el último SHA con CI SUCCESS documentado en §46 es `05076637` (run **41889745140**). El endpoint de estados combinados de GitHub devolvió `statuses: []` para ese SHA: **esto no prueba que Pages esté publicado ni sustituye comprobar la ejecución de Actions por SHA**. No atribuir éxito de Pages a cambios posteriores.

**Lote aplicado, La Puebla T3 (aún NO AUDITADO integralmente):** contrastados con el [texto consolidado oficial de la Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) los requisitos concretos de los artículos **77.2–3** (período de prueba ordinario de **10–30 días**, extraordinario **hasta 10 días**, decisión del instructor a petición del interesado; rechazo motivado de prueba manifiestamente improcedente o innecesaria) y **85.3** (dos reducciones de **al menos 20 %** acumulables en sanciones exclusivamente pecuniarias, especificación en notificación de inicio y renuncia/desistimiento de acción o recurso **en vía administrativa**). La última actualización del texto consolidado publicada por BOE sigue siendo **06/11/2024**.

- En `content/la-puebla/tema-03/preguntas.json`, se ha precisado el enunciado **LP-T03-010** para circunscribir el supuesto al art. 85.3 y ampliado justificación, condiciones y trampa de examen; se conserva respuesta literal **«20 %»** y la clave publicada. En **LP-T03-007** se ha detallado la facultad del instructor y el art. 77.3; respuesta literal **«Entre diez y treinta días»** conservada. Commit **`80d3b841`**.
- No se ha realizado cotejo exhaustivo documentado de los otros **10 ítems / 40 alternativas**, ni validación funcional de navegador/móvil. **T3 sigue PENDIENTE de cierre jurídico-editorial completo**, y la certificación de cinco capas no aumenta.
- **CI y Pages del commit `80d3b841`: no verificados** en este bloque. No convertir la ausencia de estados combinados en resultado SUCCESS.

**Estado acumulado sin inflar:** **8/121** temas con cierre jurídico-editorial documentado por §46, **0/121** certificados íntegramente en las cinco capas. Se mantienen los exámenes de La Puebla **14/11/2026** y UC3M **21/11/2026**.

**TAREA ACTIVA:** verificar **Actions y Pages para SHA exacto `80d3b841`** y corregir solo errores demostrados; completar el cotejo integral **T3** (restantes 10 preguntas, 40 opciones, programa y manual por artículos 53–105) con informe individual, luego cerrar temas enteros T5, T6, T10–T12, T15–T19 antes de pasar a UC3M. Diputación C2 T6 OAPGT al final. No reabrir Carranque/Las Ventas.

## 48. Tres cierres jurídico-editoriales completos adicionales: La Puebla T3, T5 y T6 — **04/11/2026**

**Continuidad y colisión temporal resuelta:** el §47 fue redactado por la tarea automática durante el trabajo de este lote y describía un estado **anterior** de La Puebla T3 (sólo dos preguntas revisadas). Desde entonces se **completó el cotejo íntegro** de T3, T5 y T6, cada uno con **12 preguntas y sus 48 alternativas** justificadas por precepto, sin rehacer T1/T2/T4/T7/T8/T9/T13/T14. Este §48 **sustituye operativamente** la instrucción desactualizada al final del §47; no borra evidencia histórica.

### 48.1. La Puebla T3 · procedimiento administrativo común — **AUDITADO jurídico-editorial**

- Programa oficial BOP Toledo **82/2026**, anuncio **2026-1965**, matriz de **9 áreas**: derechos del interesado (**53**), iniciación (**54–69**), ordenación (**70–74**), instrucción (**75–83**), finalización (**84–95**), simplificada (**96**), ejecución (**97–105**) y especialidades sancionadoras/patrimoniales.
- Contraste con [**Ley 39/2015, BOE consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) y [**cotejo jurídico por pregunta y alternativa**](content/la-puebla/tema-03/cotejo-integral-2026-11-04.md): **12 correctas y 36 distractores** examinados, con artículo y explicación por cada opción.
- Precisiones de **LP-T03-002**: el **art. 56.2** requiere **iniciación en 15 días desde medida provisional previa** y pronunciamiento expreso de confirmación/modificación/levantamiento; la medida cae si falta alguno. **LP-T03-010**: el **art. 85.3** reconoce **dos reducciones de al menos 20 % cada una** en sanciones exclusivamente pecuniarias, acumulables, con condiciones y renuncia/desistimiento a recursos **administrativos**. Se conservan claves y posiciones.
- Comprobaciones sobre **prueba 10–30 días** (**77.2**), **audiencia 10–15 días** (**82.2**), **subsanación 10 días** (**68**) y simplificada **30 días** (**96.6**).
- Commit **`66397739`** con seis archivos actualizados y [**CI SUCCESS 41892832361**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41892832361) y [**PDF SUCCESS 41892832334**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41892832334) para ese SHA. **Navegador real pendiente**.

> ⚠️ **¡Foco Examen!:** Las reducciones del **85.3** son **20 % + 20 % mínimo**, no 20 % total automático; medidas previas **56.2** exigen **15 días y pronunciamiento expreso**.

### 48.2. La Puebla T5 · régimen local y electoral — **AUDITADO jurídico-editorial**

- Ocho bloques del programa, municipal/provincial/electoral, contrastados con [**Constitución**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [**LRBRL 7/1985**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392), [**LOREG 5/1985**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672) y ROF.
- Control imprescindible de cambio legal: [**Ley 4/2026, de 1/10 (BOE-A-2026-20528)**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-20528), publicada **03/10**, vigente **23/10/2026**: añade LRBRL **25.2.q** sobre igualdad de oportunidades/accesibilidad y modifica **69.1** sobre información accesible y diseño universal. El manual existente ya lo recogía y se volvió a verificar.
- [**Informe de 48 alternativas de T5**](content/la-puebla/tema-05/cotejo-integral-2026-11-04.md), 12 claves y 36 distractores. Se explicitó la base legal de **LP-T05-007**: Pleno ordinario **mensual si >20.000**, **bimestral si 5.001–20.000**, **trimestral hasta 5.000** (**46.2.a**); **LP-T05-012** añade cita **LOREG 196**, restringido a régimen de listas de >250 habitantes.
- Regla del quórum **1/3 y nunca menos de 3**, **mayoría simple** de presentes como regla, información pública de ordenanzas **30 días**, umbral electoral para listas **5 % votos válidos**.
- Commit **`96f1c6ff`**, [**CI SUCCESS 41893005966**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41893005966) y [**PDF SUCCESS 41893006040**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41893006040) mismo SHA. **Navegador real pendiente**.

> ⚠️ **¡Foco Examen!:** **25.2.q y 69.1 LRBRL** ya cambiaron en **octubre de 2026**. No confundir **5.000** habitantes (JGL), **20.000** (sesiones y otros servicios) ni **50.000** (transporte colectivo urbano).

### 48.3. La Puebla T6 · empleo público CLM — **AUDITADO jurídico-editorial**

- **6 bloques del programa**, manual y 12 claves más 36 distractores cotejados con [**Ley 4/2011, BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752) y [**TREBEP**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719). [**Informe íntegro de 48 alternativas T6**](content/la-puebla/tema-06/cotejo-integral-2026-11-04.md).
- Cifras contrastadas en norma: programas temporales interinos **4 años, art. 8.1.c**; acumulación **6 meses en 12, 8.1.d**; ejecución OEP **3 años improrrogables, 19.4**; hasta **10 %** plazas adicionales **19.3**; reserva discapacidad mínimo **7 %** y al menos **2 %** intelectual (**41.1**); tribunal **impar, al menos cinco** (**49.2**) y excluidos políticos, interinos, temporales y eventuales; promoción interna **2 años** (**65**); convocatorias de puestos comisionados **cada dos años si concurso** y **cada año si libre designación** (**74.3**).
- Reforma de **art. 70.2 por Ley 2/2026, de 9 de abril**: el [**análisis legislativo del propio BOE**](https://www.boe.es/eli/es-cm/l/2011/03/10/4) reconoce la modificación aunque el texto consolidado servido figure actualizado **21/03/2024**; manual mantiene explicación de reforma de 2026, no se presentan como integradas modificaciones que el consolidado todavía no muestra.
- El banco T6 tiene forma distinta de T3/T5: campos `pregunta`/`correcta` en lugar de `enunciado`/`respuestaCorrecta`. Se han conservado **IDs, claves y las cuatro posiciones de respuesta**, sin forzar una conversión que rompa compatibilidad. Se amplió fundamento del ítem **LP-T06-008** con restricciones **art. 49.2–4**.
- Commit **`8529afca`**; [**CI SUCCESS 41892643632**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41892643632) y [**PDF SUCCESS 41892643730**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41892643730) mismo SHA. **Navegador real pendiente**.

> ⚠️ **¡Foco Examen!:** **4 años** de interinidad temporal no equivalen a **3 años** para ejecutar OEP ni a **2 años** de servicio para promoción interna.

### 48.4. Control técnico transversal y resultado acumulado

- Incorporado el script [`tests/validate-la-puebla-t03-t05-t06-integral.mjs`](tests/validate-la-puebla-t03-t05-t06-integral.mjs) a `npm test` y workflow `Validar OpoWeb v2`. Comprueba para **T3/T5/T6**, sin forzar esquemas incompatibles, la conservación literal de **144 alternativas y 36 claves** en los informes, la correspondencia de respuestas, distribución uniforme **3/3/3/3** por tema, número de bloques y estado distinto de revisión jurídica y navegación.
- Commit **`16f5eca1`**: [**CI SUCCESS run 41893143388**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41893143388), **mismo SHA**. **Pages run 41893142240** figuraba **in_progress** al consultar; no se acredita aún su conclusión.
- **Balance acumulado:** **11/121 temas con cotejo jurídico-editorial del programa y 48 alternativas por tema**: La Puebla **T1, T2, T3, T4, T5, T6, T7, T8, T9, T13, T14**. **132 preguntas y 528 alternativas** documentadas. **0/121 certificado integral de cinco capas** demostrado, porque no se ha realizado prueba real exhaustiva de navegador/móvil y resto de componentes; no confundir con éxito CI/PDF.

**TAREA ACTIVA:** verificar el despliegue Pages del commit **`16f5eca1`**; seguir cerrando **La Puebla T10, T11, T12 y T15–T19**, por proximidad al examen del **14/11/2026**, y después UC3M del **21/11/2026**. No volver a rehacer T3/T5/T6 como revisión focal y no repetir convocatorias descartadas. Diputación C2 T6 OAPGT al final.

## 49. Cierre jurídico-editorial completo de La Puebla T10, T11 y T12 — **04/11/2026**

**Continuidad:** leído §48 y `PROJECT_RULES.md`. Se han completado otros **3 temas enteros** de la convocatoria de **La Puebla**, prioritaria por prueba de **14/11/2026**, sin repetir los once ya cerrados en §48. Cada tema registra fuente y programa oficial, matriz, manual, **12 preguntas y las 48 alternativas literales** con fundamento jurídico para la correcta y **cada uno de sus tres distractores**. El cierre es jurídico-editorial **NO** certificación de interfaz en navegador/móvil.

### 49.1. La Puebla T10 · tributación local y gestión — **AUDITADO jurídico-editorial**

- Programa BOP Toledo **82/2026**, anuncio **2026-1965**. **8 áreas normativas**: principios, delegación, colaboración, beneficios fiscales y compensación, obligaciones, obligados, extinción y gestión tributaria.
- Fuentes oficiales: [**Constitución**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) **31.1,133**, [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) **6–12**, y [**LGT**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) **17–140**. La consolidación de TRLRHL con modificación publicada el **07/10/2026** está contemplada en `fuentes.md` del tema; su efecto sobre tipos y coeficientes no se extrapola indebidamente a los artículos base de este epígrafe.
- **Corrección `LP-T10-005`:** se explicita el fundamento del **art. 9.1 TRLRHL** para bonificación local **hasta el 5 % de la cuota** por domiciliación, anticipación o colaboración recaudatoria **prevista en ordenanza**. **`LP-T10-002`** cita de forma concreta los requisitos de delegación **art. 7.2**: **Pleno delegante**, aceptación por **Pleno de entidad local delegada**, publicación BOP y boletín autonómico.
- Se conserva el control anterior de `LP-T10-001` (**CE 31.1**), recargo extemporáneo (**art. 27**, **1 % + 1 % por mes completo**, tras **12 meses 15 %** con intereses posteriores), recargos ejecutivos (**5/10/20 %**, art. **28**), sanción fuera de deuda tributaria (**58.3**) y prescripción general **4 años** (**66**).
- [**Cotejo de 48 alternativas de T10**](content/la-puebla/tema-10/cotejo-integral-2026-11-04.md). **12 claves y 36 distractores** confrontados uno por uno. Se actualizan manual, `matriz.json`, fuentes y la ficha histórica `feedback.md` que erróneamente decía banco vacío.

> ⚠️ **¡Foco Examen!:** **TRLRHL 9.1** permite hasta **5 %** por ordenanza para colaboración recaudatoria; **LGT 27** recargo de declaración extemporánea no es **LGT 28** recargos del período ejecutivo.

### 49.2. La Puebla T11 · recaudación y apremio — **AUDITADO jurídico-editorial**

- **7 bloques** del programa (voluntaria, aplazamiento/fraccionamiento, compensación, devolución indebida, ejecutiva, apremio/embargo) contrastados con [**LGT**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) **28, 62, 160–177, 221**, [**RGR RD 939/2005**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803) y [**RD 520/2005**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-8662) **14–20**.
- **`LP-T11-012` corregido:** la pregunta se refiere expresamente al **procedimiento de reconocimiento de devolución de ingresos indebidos**, con máximo general para resolver de **6 meses**. Se precisa la **desestimación presunta cuando el interesado lo instó** tras **6 meses sin notificación**, según **RD 520/2005 art. 19.3**, y se diferencia de prescripción general **4 años**. Se conservan clave **B** y literal «Seis meses».
- Diferencia entre **período ejecutivo** (empieza al día posterior al plazo de voluntaria, **LGT 161.1**) y **procedimiento de apremio** (mediante providencia **notificada**, **167.1**). Calendario de ingreso por liquidación **1–15 ⇒ 20 mes siguiente**, **16–fin ⇒ 5 segundo mes siguiente**; providencia **1–15 ⇒ 20 mes actual**, **16–fin ⇒ 5 mes siguiente**, todo condicionado a día hábil (**62.2 y 62.5**).
- [**Cotejo de 48 alternativas T11**](content/la-puebla/tema-11/cotejo-integral-2026-11-04.md). Se corrige ficha de `feedback.md` que afirmaba que el banco estaba vacío, cuando contiene **12 preguntas**.

> ⚠️ **¡Foco Examen!:** **5 %** recargo ejecutivo antes de providencia, **10 %** reducido al pagar en plazo tras providencia, **20 %** ordinario con intereses. **Período ejecutivo y procedimiento de apremio NO comienzan necesariamente juntos**.

### 49.3. La Puebla T12 · IBI, IAE, IVTM e IIVTNU — **AUDITADO jurídico-editorial**

- **5 bloques** del programa: normas tributarias generales, naturaleza/hecho imponible/sujetos pasivos de **IBI, IAE, IVTM e IIVTNU**. Fuente central [**TRLRHL consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), artículos **15–19, 56–64, 78–83, 92–94, 104–106**, con cambios del IBI/IIVTNU publicados en **2026** ya delimitados en su manual y fuentes.
- **`LP-T12-010`**: añadido el presupuesto negativo **art. 104.5 TRLRHL**: **no está sujeta** la transmisión de terreno cuando el interesado acredita **inexistencia de incremento de valor**, regulado desde [**RDL 26/2021**](https://www.boe.es/eli/es/rdl/2021/11/08/26); el **104.1** grava el incremento y no el valor íntegro de la construcción. La opción correcta continúa siendo **D**. **`LP-T12-008`** refuerza el límite de remolques de **750 kg exactos** no sujetos, **art. 92.3.b**.
- Distinciones expresas: **IBI** hecho imponible con prelación concesión/superficie/usufructo/propiedad; **IAE** persona física **sujeta y exenta**, exención de sujetos contemplados con cifra de negocios **inferior estrictamente a 1.000.000 €**; **IVTM** titular del permiso, vehículo matriculado sin baja; **IIVTNU** potestativo, transmisiones lucrativas pagan adquirentes y onerosas transmitentes, con **sustituto adquirente** si transmitente es persona física **no residente** (**art. 106.2**).
- [**Cotejo íntegro de 48 alternativas T12**](content/la-puebla/tema-12/cotejo-integral-2026-11-04.md). Se actualizan fichas editoriales que hablaban de preguntas «vacías».

> ⚠️ **¡Foco Examen!:** **750 kg exactos** es no sujeción IVTM; **1.000.000 € exactos NO cumplen** condición de «inferior» en exención IAE para entidades. **IIVTNU 104.5 no sujeción por ausencia de incremento** no es exención.

### 49.4. Ejecución y resultado — documentación exacta, sin fingir prueba de navegador

- Commit [**`25c0cbe3`**](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/25c0cbe377445f0ca0c2cbae55c3c611b3070de0): **18 archivos** entre manual, banco, matriz, fuentes, feedback e informe individual de cada uno de los **3 temas**. [**CI SUCCESS 41895008501**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41895008501) y [**generación PDF La Puebla SUCCESS 41895008324**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41895008324).
- Commit [**`303018ca`**](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/303018ca33fd1b34c46c6a303385f43939b1adbf): añade [`tests/validate-la-puebla-t10-t11-t12-integral.mjs`](tests/validate-la-puebla-t10-t11-t12-integral.mjs) a workflow GitHub Actions y `npm test`. Comprueba **12 preguntas/48 opciones exactas por tema**, que la clave publicada coincida con `respuestaLiteral`, registro de cada alternativa en informe, fuente legal por ítem, distribución **3 respuestas por A/B/C/D**, y correcciones puntuales **T10-005, T11-012 y T12-010**. [**CI SUCCESS 41895184478**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41895184478) en el **mismo SHA**. **Pages del mismo SHA (41895183795) seguía `in_progress`** en la comprobación; verificar antes de darlo por publicado.
- Acumulado de **cierres jurídico-editoriales documentados: 14 de 121 temas**, todos los de La Puebla **T1–T12** y **T13–T14**. Total **168 preguntas y 672 alternativas** individualizadas en informes. **0/121** con certificación de **todas** las capas completada: navegación real de escritorio/móvil, accesibilidad exhaustiva y pruebas funcionales no demostradas, aunque CI pase.
- **Próxima prioridad:** La Puebla **T15–T19**, que son sus **5 temas restantes**, por examen **14/11/2026**; después **UC3M** por examen **21/11/2026**. No duplicar automatización ni reabrir convocatorias excluidas.

**Definición operativa:** la marca **AUDITADO jurídico-editorial** significa cobertura de programa/manual y análisis documentado de las **48 opciones** del banco; **NO** que cada línea histórica del contenido tenga certificación pericial total ni que la interfaz esté certificada sin prueba real.


## 50. Cierre de los cinco temas técnicos de La Puebla — **04/11/2026**

### 50.1. Programa oficial y profundidad de cotejo

- Fuente exacta: **BOP Toledo n.º 82, de 05/05/2026, anuncio 2026-1965, Anexo I**; epígrafes **15 a 19** (**Microsoft Windows I y II, Word/Writer, Excel/Calc, componentes y periféricos del ordenador**). Se respetan las cinco materias sin introducir nuevos temas ajenos al programa.
- **Los cinco temas T15–T19 disponen de cotejo técnico-editorial íntegro a nivel de banco**: **60 preguntas, 240 alternativas**, identificadas por ID y contrastadas una por una con justificaciones, claves, fuentes y foco examen.
- Cotejos individuales: [**T15**](content/la-puebla/tema-15/cotejo-integral-2026-11-04.md), [**T16**](content/la-puebla/tema-16/cotejo-integral-2026-11-04.md), [**T17**](content/la-puebla/tema-17/cotejo-integral-2026-11-04.md), [**T18**](content/la-puebla/tema-18/cotejo-integral-2026-11-04.md) y [**T19**](content/la-puebla/tema-19/cotejo-integral-2026-11-04.md).
- Cada informe es accesible desde **`manual.md` y `fuentes.md`** de su propio tema. Sus **`matriz.json`** declaran por separado el estado **`AUDITADO_TECNICO_EDITORIAL`** y el campo **`PENDIENTE_PRUEBA_NAVEGADOR_REAL`**. La matriz del T19 se normaliza con rutas a los **5 bloques, manual y fuentes**.

### 50.2. Correcciones editoriales aplicadas

| Tema | Intervención | Distinción de examen |
|---|---|---|
| **15** | Ejemplos físicos de perfil corregidos de `C:\Usuarios` a `C:\Users` en manual y dos bloques; aclarado nombre mostrado/localizado | **Ruta física** no es necesariamente el nombre mostrado en el Explorador |
| **16** | Desglose de atajos de InPrivate y cronología IE clásico frente al modo IE | **15/06/2022** IE11 para ciertas versiones de Windows 10 ≠ modo IE soportado **al menos hasta 2029** |
| **17** | Distractores Word/Writer y saltos de línea, página y secciones desambiguados | **Mayús + Intro** = salto de línea; **Ctrl + Intro** = página; Word usa secciones, Writer estilos de página |
| **18** | **LP-T18-012, manual y bloque 1 corregidos**: CSV es texto tabular, no una hoja u objeto libro | Exportar a CSV guarda los datos de la **hoja activa** pero el fichero no contiene pestañas, fórmulas ni formato complejo |
| **19** | Contraste de USB-C, RAM, CPU, ADF, OCR, exFAT/FAT32, CD-R/CD-RW | **USB-C** ≠ **USB4**; **FAT32** limita archivos individuales a menos de **4 GiB** |

> ⚠️ **¡Foco Examen!:** En La Puebla **T15–T19**, la confusión habitual es intercambiar **contenedor/estructura** (`CSV`, `USB-C`), **función** (OCR/escáner/ADF) o **acción** (copiar/mover/eliminar). Las **240 alternativas** están justificadas para distinguir distractores casi correctos.

### 50.3. Control automatizado y medición honesta

- Script nuevo [**`tests/validate-la-puebla-t15-t19-integral.mjs`**](tests/validate-la-puebla-t15-t19-integral.mjs), incorporado a **`npm test`** y al workflow **Validar OpoWeb v2**; verifica **12 preguntas por tema**, **4 opciones únicas**, correspondencia exacta entre **clave y `respuestaLiteral`**, posición equilibrada **3 correctas por cada A/B/C/D**, coincidencia textual de cada alternativa con el informe, foco examen y rutas de los cinco bloques. Además protege expresamente la corrección del CSV de **LP-T18-012**.
- **Estado CI a la hora de redactar el registro:** pendiente de confirmación de la ejecución del último SHA. **No confundir archivo o workflow creado con CI exitoso**. GitHub Pages y navegación real requieren comprobación independiente.
- **Acumulado documental: 19/121 temas con cotejo íntegro del banco y manual**: **14 revisiones jurídico-editoriales anteriores + 5 técnico-editoriales nuevas**; **228 preguntas y 912 alternativas**. Los **19 temas de La Puebla** tienen ahora informe individual. **Certificación global 100 %:** **NO demostrada**. Las pruebas exhaustivas en navegador real, móvil, accesibilidad y todos los recorridos de usuario siguen pendientes; **0/121** está certificado en todas esas capas simultáneamente.
- **Siguiente frente prioritario:** verificar CI y PDF del último SHA, después abordar **UC3M** por su examen del **21/11/2026** y el resto de temas de convocatorias sin informe, sin dar por superadas pruebas que todavía no se han ejecutado.

**Definición:** *AUDITADO TÉCNICO-EDITORIAL* implica el cotejo individual del banco y la correspondencia de los bloques con el epígrafe, **no** una certificación independiente de cada versión futura del software ni una prueba integral de funcionamiento del portal.


## 51. UC3M: primeros tres temas con banco cotejado — **04/11/2026**

### 51.1. Fuente oficial, fecha de corte y alcance

- **Convocatoria:** [**BOE-A-2026-14624**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-14624), **06/07/2026**, **Universidad Carlos III de Madrid**, **34 plazas** subgrupo **C2**, **20 temas**, ejercicio único de **70 + 5 preguntas** en **60 minutos**, con **−1/3** por fallo y puntuación directa **A − E/3**.
- Se trabaja sobre **los tres primeros temas (T1–T3)** que figuran en el Anexo I, sin tratar la versión resumida del manifiesto como transcripción literal íntegra del programa.
- La base **primera.7** fija legislación exigible a fecha de publicación de la resolución que aprueba las **listas definitivas y anuncia el ejercicio**, **no** al día del examen ni automáticamente al BOE de convocatoria. La fecha exacta de publicación de dicha resolución no se infiere de portales secundarios; **sigue pendiente la lectura primaria**.
- [**Constitución consolidada**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), última actualización publicada el **20/05/2026**; [**Reforma del art. 69.3**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-10881), con eficacia electoral diferida. [**Ley 39/2015 consolidada**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), última actualización publicada **06/11/2024**.

### 51.2. Correcciones concretas del temario

| Tema | Cambio aplicado en fuente editorial | Trampa test |
|---|---|---|
| **T1** · Constitución | Artículo **167.2** desarrollado: si falla el acuerdo ordinario, **Senado mayoría absoluta + Congreso 2/3**; tabla comparativa 167 y advertencia de examen. Reforma **69.3** de **2026** ya estaba incorporada; se vuelve a contrastar con BOE. | **3/5** regla general; **2/3 del Congreso** no es vía sin condicionantes; **1/10 de Cámara** puede pedir referéndum en **15 días** |
| **T2** · Ley 39/2015 I | Artículo **31.2**: presentación en inhábil para plazo de interesado fijado en días hábiles = **primera hora siguiente hábil** y preservación del orden real; se distingue el cómputo de la **Administración**. | Registro disponible **24/7** no hace hábiles los sábados |
| **T3** · Ley 39/2015 II | Artículo **96.6**: plazo **30 días** desde el **día siguiente a la notificación del acuerdo de tramitación simplificada**; precisadas oposición y solicitud, plazos **5 días**. Corregida ficha de fuentes para no tomar el día de examen como fecha normativa de corte. | Simplificada **30 días** ≠ urgencia **mitad del plazo ordinario** |

> ⚠️ **¡Foco Examen!:** La fecha de publicación de **listas definitivas + anuncio** es la de corte normativo UC3M. El artículo **96.6 LPAC** cuenta la simplificada desde el día siguiente a la **notificación**, y el artículo **167.2 CE** requiere **mayoría absoluta del Senado** además de **2/3 del Congreso**.

### 51.3. Tres cotejos completos, 144 alternativas y control CI

- [**T1 · 48 alternativas**](content/uc3m/tema-01/cotejo-integral-2026-11-04.md), [**T2 · 48 alternativas**](content/uc3m/tema-02/cotejo-integral-2026-11-04.md) y [**T3 · 48 alternativas**](content/uc3m/tema-03/cotejo-integral-2026-11-04.md). Cada opción de **12 preguntas por tema** tiene razonamiento individual, identificación de artículo/regla y foco examen.
- Los informes se enlazan desde los **manuales** y sus **fuentes.md**, y las tres **matriz.json** registran **`COTEJO_BANCO_COMPLETO`**, sin atribuir estado **APROBADO_USUARIO** ni afirmar pruebas integrales en navegador.
- Nuevo [**`tests/validate-uc3m-t01-t03-integral.mjs`**](tests/validate-uc3m-t01-t03-integral.mjs): **144 alternativas** textualmente cotejadas con informes, claves, literales, referencias, distribución equilibrada **3 correctas por A/B/C/D y tema**, y regresiones de las tres correcciones. Se incorpora a **`npm test`** y al [workflow **Validar OpoWeb v2**](.github/workflows/validate.yml).
- **CI confirmada:** [**SUCCESS, run 41900084929**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41900084929) en SHA **`62fee00cd5d94faef32d20811b523e33c7b04350`**, ya con la nueva tarea añadida. **Pages en ese SHA estaba pendiente** a la hora de la lectura; no confundir CI con publicación final ni navegación funcional en móvil.

**Acumulado editorial auditable en esta serie:** **22/121 temas** con informes de **banco completo** (los **19** de La Puebla y **UC3M T1–T3**), **264 preguntas y 1.056 alternativas**. Este indicador representa el alcance explícito del **banco y epígrafe contrastado**, **no** la certificación jurídica exhaustiva ni técnica total del sitio; **0/121** certificados simultáneamente en todas las capas.

**Prioridad de continuación:** UC3M **T4–T20**, comenzando por legislación de organismos, protección de datos, normativa universitaria y contratación, y verificación posterior de fecha normativa de corte, CSS, despliegue y accesibilidad.


## 52. UC3M T7 · contraste de plazos especiales de transparencia — 04/11/2026

**Origen y alcance:** continuación desde el apartado 51, sin repetir los cierres de La Puebla T1–T19 ni UC3M T1–T3. Se cotejó el **texto consolidado de la Ley 10/2019 de la Comunidad de Madrid**, [BOE-A-2019-10102](https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102), última actualización publicada **27/12/2024**, en especial **artículos 40.1, 40.2.c, 41 y 42.1–3**. No se sustituye el corte jurídico específico de UC3M por la fecha del examen: queda pendiente el documento primario de listas definitivas y anuncio.

**Hallazgo jurídico verificable:** el banco T7 distinguía bien el plazo ordinario de **20 días**, su ampliación de **otros 20** y el silencio desestimatorio, pero **no enseñaba la excepción temporal**: inadmisión motivada por causas del artículo 40.1 **en cinco días hábiles** desde la recepción por el órgano competente (**42.2**). Distinta es la remisión al órgano competente **en cinco días** (**41**); no equiparar ambos plazos ni afirmar que el artículo 41 diga expresamente «hábiles». La inadmisión por reelaboración exige reelaboración auténtica; **40.2.c** excluye el tratamiento informatizado de uso corriente.

**Archivos modificados y commits:** [manual T7](content/uc3m/tema-07/manual.md), commit [`d044a8b1`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/d044a8b181b88406901817e3db49c89202f6b4a3), nueva tabla conceptual de cuatro plazos; [fuentes T7](content/uc3m/tema-07/fuentes.md), commit [`0b4b46ea`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/0b4b46ead593505d34dd70f687e67ca103271b88), con referencias BOE por artículo; [banco T7](content/uc3m/tema-07/preguntas.json), commit [`72690f8b`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/72690f8b79ed1cec196ba7e8219ca1be72f0652f), justificaciones y referencias reforzadas en **T07-006, T07-007 y T07-008**, sin modificar las opciones, posiciones de clave ni literal de respuesta. Se cotejaron estas **tres preguntas y sus doce alternativas** en relación con los preceptos citados; **no** se declara T7 completo ni se reutilizan informes de otros temas como evidencia.

**Validación y límites:** lectura directa de fuente primaria BOE y comprobación estructural del JSON en la transformación. La consulta de workflows asociados al **SHA exacto `72690f8b79ed1cec196ba7e8219ca1be72f0652f`** devolvió lista vacía (herramienta restringida a runs de pull requests); combined statuses también vacío. Por ello **CI, Pages y prueba real de navegador NO acreditados** para este SHA. No se cambian mecanismos de Radar ni se certifican por inferencia. La corrección del commit `35bbda16` sobre matrices heredadas debe verificarse por CI real cuando esté disponible.

**Siguiente lote activo:** UC3M **T7** completar cotejo individual de las **9 preguntas/36 distractores restantes**, artículo por artículo, con informe y regresiones; después **T8–T20**, con prioridad de examen **21/11/2026**. Revisar CI/Pages del SHA publicado por método que no dependa de la API restringida a PR. Mantener Olías con discrepancia de plazas/plazo sin resolver, OAPGT T6 al final, y **0/121 certificaciones globales** hasta probar todas las capas.

## 52. UC3M: cierre documental T4–T6 — **04/11/2026**

### 52.1. Los tres epígrafes siguientes y sus respuestas

- Fuente del programa: [**BOE-A-2026-14624**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-14624), Anexo I. Se contrastan **T4 Ley 40/2015 (órganos)**, **T5 Ley 40/2015 (funcionamiento electrónico)** y **T6 LO 3/2018 (protección de datos y RGPD)**.
- [**Cotejo individual T4**](content/uc3m/tema-04/cotejo-integral-2026-11-04.md), [**cotejo individual T5**](content/uc3m/tema-05/cotejo-integral-2026-11-04.md) y [**cotejo individual T6**](content/uc3m/tema-06/cotejo-integral-2026-11-04.md): **12 preguntas, 48 alternativas por tema** y evaluación explícita de cada alternativa **A–D**, con artículo y foco de examen. Los **manual.md**, **fuentes.md** y **matriz.json** enlazan o registran el cotejo.
- Cada matriz refleja **`COTEJO_BANCO_COMPLETO`** y **`PENDIENTE_NAVEGADOR_REAL`**; **no** se modificó el estado del manifiesto a aprobado por el usuario.

### 52.2. Hallazgo jurídico relevante y rectificación

| Tema | Incidencia y reparación | Referencia |
|---|---|---|
| **UC3M T4** | Comprobados requisitos de creación de órganos, competencia, delegación, avocación, encomienda, delegación de firma, órganos colegiados y abstención/recusación. **Recusación**: si el recusado niega la causa, el **superior resuelve en tres días**. | **Ley 40/2015**, arts. **5–24** |
| **UC3M T5** | **Error material corregido**: el artículo **46 bis** no ordena alojar en la UE indiscriminadamente *todos* los datos de categoría especial. La obligación específica comprende **censo electoral, padrones municipales, otros registros de población, datos fiscales de tributos propios/cedidos y datos de usuarios del SNS**. Rectificados **manual**, **fuentes** y **UC3M-T05-010**, manteniendo su respuesta **D** porque ahora el supuesto es inequívoco. | [**Ley 40/2015, art. 46 bis**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) |
| **UC3M T6** | **Fuentes.md corregido**: elimina la referencia al día del examen como fecha normativa de corte. Se contrastan derechos RGPD, responsable/encargado, menores (**14 años** como regla española), respuesta a derechos (**1 mes**, ampliable **2**), notificación de brecha (**72 horas** con la condición de riesgo legal). | [**LOPDGDD**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) y [**RGPD**](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa) |

> ⚠️ **¡Foco Examen!:** El **artículo 46 bis** delimita **sistemas y registros concretos**. No basta leer «datos especialmente protegidos» para afirmar que cualquier sistema con esos datos tiene obligatoriamente su infraestructura localizada en la UE. **Localización de sistemas** y **transferencia internacional** son conceptos distintos.

### 52.3. Puerta de calidad automática y despliegue

- Nuevo [**`tests/validate-uc3m-t04-t06-integral.mjs`**](tests/validate-uc3m-t04-t06-integral.mjs), con comparación de las **144 opciones exactas**, sus **36 claves**, `respuestaLiteral`, informes, focos de examen, distribución **3 aciertos por posición A/B/C/D** y preservación del enunciado corregido **T05-010**.
- Nuevo [**`tests/validate-uc3m-t05-46bis-and-t06-cutoff.mjs`**](tests/validate-uc3m-t05-46bis-and-t06-cutoff.mjs), control de regresión del ámbito del **artículo 46 bis** y la fecha de corte normativa UC3M. Ambos están en **`npm test`** y en el workflow `validate.yml`.
- **Incidencia CI resuelta:** la primera ejecución de la puerta nueva falló porque un test daba por supuesto que las matrices legadas incluían `aprobadoPorUsuario:false`; en realidad **el campo estaba ausente**. Se modificó la aserción para prohibir que esté marcado `true` sin inventar una aprobación o forzar un cambio editorial no autorizado.
- **CI definitiva confirmada:** [**run 41901497307 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41901497307), **SHA `35bbda168f8efcc66d7f343c8943d8de2203a8c6`**. **GitHub Pages del mismo SHA: SUCCESS**. Se confirma compilación/despliegue según workflows, **no** recorrido funcional visual ni accesibilidad exhaustiva.
- La generación de PDFs de UC3M y Diputación consta como **SUCCESS** para el SHA previo `7a1be77568a0a9613b43b90ae98236e57f7a3161`; no declarar una regeneración completa posterior a los últimos cambios si no consta el run de ese SHA.

**Cobertura documental acumulada del cotejo individual de bancos:** **25 de 121 temas** (**19 de La Puebla + 6 de UC3M**), con **300 preguntas y 1200 alternativas** cotejadas. La cifra **no** es un porcentaje de corrección jurídica certificado ni una prueba integral de la web. **0/121** han demostrado simultáneamente todas las capas legales, pedagógicas, técnicas y de navegador.

**Siguiente tramo:** **UC3M T7–T20**, con prioridad en normativa de transparencia autonómica y universidad, antes del examen del **21/11/2026**. Verificar documentalmente la **fecha de publicación de listas definitivas** para cerrar la vigencia jurídica exigible por la **base primera.7**.


## 53. UC3M T7–T9 · transparencia, igualdad y ofimática — **04/11/2026**

### 53.1. Avance real frente al apartado anterior

- **UC3M T7 (Ley 10/2019, transparencia de Madrid):** a la revisión focal anterior de **3 preguntas/12 alternativas** se añade el [**cotejo completo de las 12 preguntas/48 alternativas**](content/uc3m/tema-07/cotejo-integral-2026-11-04.md). Se contrasta con [**Ley 10/2019 consolidada**](https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102), artículos **30, 38–43 y 48**, y con [**procedimiento institucional UC3M**](https://uc3m.es/conocenos/transparencia/procedimiento-acceso-informacion-publica): el órgano resolutor es el **Rector**. La sede UC3M admite presentación **telemática o presencial**.
- **UC3M T8 (igualdad):** [**12 preguntas/48 alternativas contrastadas**](content/uc3m/tema-08/cotejo-integral-2026-11-04.md) con [**LO 3/2007**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115) y [**documentación oficial UC3M**](https://www.uc3m.es/igualdad/plan-igualdad). **Manual y fuentes precisados**: III Plan aprobado por **Consejo de Gobierno 27/01/2025**, vigente **01/02/2025–31/01/2029**, con **6 ejes y 138 medidas**, dirigido a **PDI y PTGAS**, complementado por medidas del estudiantado. Diferente del **II Protocolo de acoso y ciberacoso**, aprobado **14/11/2019**.
- **UC3M T9 (Word 2019, Excel 2019 y Google):** [**12 preguntas/48 alternativas contrastadas**](content/uc3m/tema-09/cotejo-integral-2026-11-04.md) contra fuentes de [**Microsoft Word**](https://support.microsoft.com/es-es/word/insert-a-section-break), [**Excel 2019**](https://support.microsoft.com/es-es/excel/switch-between-relative-absolute-and-mixed-references) y [**Google Drive**](https://support.google.com/drive/answer/2494822?hl=es), Gmail y Docs. **Manual enriquecido** con tabla de los roles de Drive, herencia de carpetas y distinción entre enlace restringido y compartido públicamente. **Fuentes** incluyen URLs de fabricantes.

### 53.2. Plazos, fechas, conceptos y trampas

| Materia | Dato de examen confirmado |
|---|---|
| Ley 10/2019 art. **42.1** | **20 días** para resolver y notificar; posible ampliación de **otros 20 días** por volumen/complejidad, informando al solicitante |
| Ley 10/2019 art. **42.2** | **5 días hábiles** para inadmisión motivada por art. 40.1, desde recepción por órgano competente |
| Ley 10/2019 art. **41** | **5 días** de remisión al competente; el precepto no dice textualmente «hábiles», atenerse a reglas generales |
| Ley 10/2019 art. **48.1** | Reclamación potestativa en **1 mes** desde siguiente día a notificación/efectos del silencio |
| III Plan UC3M | **01/02/2025–31/01/2029**, **6 ejes, 138 medidas** |
| II Protocolo UC3M | Consejo de Gobierno **14/11/2019**, también frente a **ciberacoso** |
| Excel 2019 | **`A1` relativa**, **`$A$1` absoluta**, **`$A1` / `A$1` mixtas** |
| Google Drive (Mi unidad) | **Lector / Comentador / Editor**: ver / comentar / modificar; acceso heredado y restricciones del propietario |

> ⚠️ **¡Foco Examen!:** En **T7** no intercambiar **20 días**, **5 días hábiles** de inadmisión y **5 días** de remisión. En **T8** diferenciar **fecha de aprobación** y **entrada en vigor** del III Plan. En **T9**, la capacidad de **comentar** no equivale a **editar** un archivo.

### 53.3. Auditoría rastreable y validación

- Los informes están enlazados en **manual.md**, **fuentes.md** y registrados en **matriz.json** de cada tema con `controlIntegralBanco20261104`: **`COTEJO_BANCO_COMPLETO`**, **12 preguntas/48 opciones**, aprobación usuario **NO**, certificación navegador **PENDIENTE**.
- Nuevo [**`tests/validate-uc3m-t07-t09-integral.mjs`**](tests/validate-uc3m-t07-t09-integral.mjs) integrado en **`npm test`** y GitHub Actions. Exige **36 claves/144 alternativas literales y documentadas**, explicación y foco por cuestión, distribución **3 claves por letra A/B/C/D**, trazabilidad y permanencia de las correcciones.
- **CI confirmada** [**run 41903367345 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41903367345) en SHA **`aa3805b66e4b737a2f5d8bc9c20563f91bec5c52`**, con el nuevo test añadido al workflow. **GitHub Pages del mismo SHA estaba en curso** en la última lectura; no atribuir resultado de despliegue no comprobado. Validación automatizada **no es una prueba de navegador real ni de accesibilidad**.
- **Limitación pedagógica explícita de T9:** ciertos subapartados (p. ej., revisión/correspondencia en Word y análisis avanzado de Excel) están en el manual pero carecen de pregunta específica en este banco. La correspondencia `matriz.cobertura` los identifica. No afirmar cobertura **test** 100 % del programa por el mero conteo de **12 preguntas**.
- **Vigencia UC3M pendiente:** cotejo del documento primario que publica las **listas definitivas y convocatoria de ejercicio**, cuyo día determina el texto normativo exigible según **base primera.7** de BOE-A-2026-14624.

**Acumulado con este lote:** **28/121 temas** con informe individual del banco y epígrafe (**La Puebla 19/19; UC3M 9/20**); **336 preguntas / 1.344 alternativas** analizadas opción por opción. **No** es certificación jurídico-editorial/pericial plena ni homologación de la web. Certificación de todas las capas **0/121** hasta ejecutar pruebas en navegación real, accesibilidad y cotejo exhaustivo de cada apartado.

**Próxima prioridad:** **UC3M T10–T20** (TREBEP, régimen universitario, presupuestos y contratación), con auditoría individual y pruebas de regresión; después controles funcionales globales y resto de convocatorias.


## 54. UC3M T10–T12 · RRHH, incompatibilidades y prevención — **04/11/2026**

### 54.1. Fuentes legales oficiales contrastadas

- [**Programa oficial UC3M, Anexo I**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-14624): temas **10** (TREBEP), **11** (RD 364/1995 + Ley 53/1984) y **12** (Ley 31/1995). La base **primera.7** exige legislación vigente cuando se publica la resolución definitiva de aspirantes y anuncio del ejercicio, **no automáticamente el día del examen**.
- [**TREBEP Real Decreto Legislativo 5/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), [**RD 364/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-8729), [**Ley 53/1984**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-151), [**Ley 31/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), normas primarias de los manuales y bancos.
- **Pendiente jurídico:** la UC3M publica una resolución de listas definitivas en su portal, pero no ha podido verificarse desde el documento primario la fecha exacta de su publicación. ADAMS informa **01/10/2026** como pista no oficial; no se convierte en corte certificado. El texto consolidado del TREBEP sufrió una modificación del **art. 49.e** publicada el **03/10/2026** y vigente desde **23/10/2026**: no incorporarla por defecto al examen si el corte oficial resulta anterior.

### 54.2. Errores y datos incorporados

| Tema | Reparación en el temario | Datos test contrastados |
|---|---|---|
| **T10 · TREBEP** | Se corrigió la **limitación indebida** en la renuncia: el artículo **64.2** no habla solo de delito relacionado con el puesto; prohíbe aceptarla con **expediente disciplinario** o **auto de procesamiento/apertura de juicio oral por algún delito**. Incorporada tabla de interinos y excedencias. | Vacante **3 años**; programa **3 años + hasta 12 meses** por ley de desarrollo; acumulación **9 meses en 18** (**art. 10**). Excedencia particular **5 años** previos salvo ley (**89.2**). Suspensión que **excede 6 meses = pérdida del puesto**, no condición (**90.1**). |
| **T11 · RD 364/1995, Ley 53/1984** | Manual añade plazos que faltaban: **grado personal 2 años continuados / 3 interrumpidos** (art. **70.2**), solicitud de ingreso AGE **20 días naturales** (art. **18.1**) y documentación aprobados **20 días naturales** (art. **23.1**). Distingue convocatoria UC3M de plazos particulares. | Segunda actividad **pública**: autorización previa. Actividad **privada**: reconocimiento previo, **resolución motivada en 2 meses** (Ley **53/1984, art. 14**), decae al cambiar puesto público. |
| **T12 · Ley 31/1995** | Manual incorpora escala completa de **Delegados de Prevención** del art. **35.2**, diferenciada del **Comité de Seguridad y Salud** (art. **38.2**), más particularidad de representación en Administración (art. **34.3.d**). Se repararon **5 enunciados mal redactados** de preguntas **UC3M-T12-004/006/007/008/011**, sin modificar respuestas ni claves. | Delegados: **31–49 → 1**, **50–100 → 2**, **101–500 → 3**; Comité desde **50 trabajadores**, reunión **trimestral**. |

> ⚠️ **¡Foco Examen!:** En **T10**, «renuncia por algún delito» exige **auto procesal específico**, no mera denuncia, y no se limita a delitos funcionales. En **T11**, **2 años/3 años** son de grado, distintos de los **2 años** de promoción interna. En **T12**, **50 trabajadores** activa Comité, pero la escala de Delegados tiene tramos propios.

### 54.3. Cotejos documentales integrales de los bancos

- [**T10 · 12 preguntas y 48 alternativas**](content/uc3m/tema-10/cotejo-integral-2026-11-04.md)
- [**T11 · 12 preguntas y 48 alternativas**](content/uc3m/tema-11/cotejo-integral-2026-11-04.md)
- [**T12 · 12 preguntas y 48 alternativas**](content/uc3m/tema-12/cotejo-integral-2026-11-04.md)

Los **144 distractores/alternativas** de **36 preguntas** tienen motivación individual por artículo o concepto técnico, y advertencia de foco. Las tres **matrices**, **manuales** y **fuentes** registran o enlazan los informes, con estado **`COTEJO_BANCO_COMPLETO`**, **aprobación de usuario = false** y **prueba de navegador = pendiente**.

### 54.4. Control de regresiones, CI, despliegue y siguiente prioridad

- Nuevo [**`tests/validate-uc3m-t10-t12-integral.mjs`**](tests/validate-uc3m-t10-t12-integral.mjs), incorporado a **`npm test`** y [**GitHub Actions `validate.yml`**](.github/workflows/validate.yml): exactitud textual de **144 alternativas**, **36 claves**, `respuestaLiteral`, enunciados, informes, distribución **3/3/3/3 por letra** en cada tema, correcciones de artículos y eliminación de «entre otras» defectuoso en T12.
- **CI confirmada:** [**run 41906460493 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41906460493), SHA **`3d4f6fbb1b856c517414e302681e50085e117fbe`**. **Pages seguía pendiente** en lectura de ese SHA; no confundir la validación automática con despliegue completo ni acceso funcional probado.
- **Cobertura actual de auditoría individual documentada del banco:** **31 de 121 temas** (**19 La Puebla + 12 UC3M**), **372 preguntas / 1.488 alternativas**, que **no** es una certificación total de artículos, pedagogía, navegador y accesibilidad (**0/121** con todas las capas).
- **Próximo tramo:** **UC3M T13–T20**, especial atención a **LOSU**, normativa propia, procesos universitarios, presupuesto y contratos. Identificar fecha de publicación de listas definitivas por fuente primaria y desplegar pruebas reales con navegador si está disponible.



## 55. UC3M T13 · LOSU, creación/reconocimiento y calidad — **04/11/2026**

### 55.1. Trabajo efectivo y fuente primaria

- Leídos **PROJECT_RULES.md** y el apartado final vigente **§54** antes de modificar contenido. Prioridad conforme al registro: UC3M T13–T20, examen previsto 21/11/2026.
- Cotejados con el texto consolidado oficial [**LOSU (BOE-A-2023-7500), arts. 2–5 y 6–9**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500), con foco en **art. 4.1.a y b, 4.2, 4.3 y 5.2–4**.
- **Hallazgo jurídico real:** el manual anterior afirmaba que las privadas se reconocen por ley autonómica sin mencionar la excepción de **ley de Cortes Generales para universidades de especiales características**. El **art. 4.1.b** no restringe esta vía a universidades públicas. Se ha corregido el manual; se han incorporado el **informe preceptivo de la Conferencia General de Política Universitaria**, propuesta del Gobierno y acuerdo del Gobierno autonómico para el supuesto excepcional. Se distingue **ley de creación/reconocimiento** de **autorización autonómica posterior de inicio de actividad**.
- **UC3M-T13-005/006:** se han delimitado sus enunciados y ampliado justificaciones y trampas para que la solución conservada sea jurídicamente defendible sin negar la excepción estatal; **UC3M-T13-012** ahora cita directamente el **art. 5.2–4** (calidad compartida). Las **12 opciones y 3 claves** de estas preguntas se conservan. El resto del banco T13 **no** queda declarado auditado integralmente.
- Archivos modificados: `content/uc3m/tema-13/manual.md`, `preguntas.json`, `fuentes.md`. Commits de contenido: `b5b9745c`, `c52b4ed8`, `945d059c`.

### 55.2. Validación y límites

- Último SHA de contenido consultado: **`945d059c296629c36423f89d0199cf90f847998b`**. Las consultas de estados combinados y de workflow runs asociados a ese SHA devolvieron **listas vacías**, que **no demuestran SUCCESS ni FAILURE**. No afirmar validación de CI/Pages hasta contar con run verificable del SHA. No se ha ejecutado navegación real ni prueba visual móvil en este bloque.
- Se conserva el acumulado previamente acreditado: **31/121** informes de banco individuales (La Puebla 19, UC3M 12); **0/121** con certificación integral de todas las capas. T13 sigue **EN_AUDITORIA**, no AUDITADO.
- **Pendiente relevante:** confirmar mediante publicación primaria la fecha de la resolución definitiva UC3M que determina el corte normativo de la base primera.7; no confundirlo con el día del examen.

**TAREA ACTIVA SIGUIENTE:** completar **UC3M T13** con revisión literal y motivación individual de sus **12 preguntas/48 opciones**, matriz inciso–artículo–contenido, prueba de regresión específica y después T14–T20. Verificar CI y Pages por SHA exacto y controles funcionales en navegador; no repetir la corrección del art. 4 sin un error nuevo. Mantener OAPGT T6 Diputación reservado para el final y no cerrar Olías mientras siga la contradicción documental.


## 56. UC3M T13–T15 · LOSU y Estatutos de UC3M: 188 alternativas — **04/11/2026**

### 56.1. Continuidad del apartado focal 55

- **UC3M T13 · Ley Orgánica 2/2023, parte I:** el contraste focal previo de **T13-005/006/012** se extiende a [**12 preguntas y 48 alternativas exactas**](content/uc3m/tema-13/cotejo-integral-2026-11-04.md). Manual ampliado con tabla jurídica separando **ley autonómica ordinaria**, **ley de Cortes Generales para universidades de especiales características** (**LOSU 4.1.a-b**), **informe preceptivo de Conferencia General de Política Universitaria**, **autorización autonómica de inicio de actividades** (**4.2**) y calidad compartida (**5.2–4**). No reescribir las tres claves ya corregidas ni confundir apertura con creación.
- **UC3M T14 · Ley Orgánica 2/2023, parte II:** [**14 preguntas/56 alternativas**](content/uc3m/tema-14/cotejo-integral-2026-11-04.md). **Error documental corregido**: la ficha `fuentes.md` decía que `UC3M-T14-002` pasó de opción **B a C**, pero la pregunta real tiene **B = El 25 %**, `correcta:1`. El **banco era correcto**; se rectificó la **nota histórica**, sin cambiar su clave. Además, el manual atribuyó equivocadamente el **51 % de PDI del Claustro** al art. **45.2** cuando está en el **45.3**: se reparó la cita.
- **UC3M T15 · Estatutos de la UC3M:** [**21 preguntas/84 alternativas**](content/uc3m/tema-15/cotejo-integral-2026-11-04.md). Fuentes reforzadas con [**catálogo de Estatutos y texto refundido oficial UC3M**](https://www.uc3m.es/about-uc3m/regulations/statutes-uc3m), [**texto original 2003**](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782) y **reforma de 2009** para cese del **art. 127.2**. Se conserva pregunta **T15-003** de vías de cese corregida en una revisión anterior.

### 56.2. Cifras, órganos y mayorías test susceptibles de confusión

| Concepto | Dato y órgano |
|---|---|
| **LOSU, art. 4.1.a** | **Ley autonómica** para crear universidad pública o reconocer privada, previo **informe preceptivo de Conferencia General de Política Universitaria** |
| **LOSU, art. 4.1.b** | Excepcionalmente, **ley de Cortes Generales** para universidad de especiales características; **Gobierno propone**, **Gobierno autonómico acuerda** |
| **LOSU, art. 4.2** | **Autorización autonómica** para empezar actividades, tras verificaciones |
| **Claustro, LOSU art. 45.3** | Estudiantado **≥25 %**; docentes funcionarios y permanentes laborales **51 %** |
| **Consejo de Gobierno, LOSU art. 46.3** | Estudiantado **≥10 %**, PTGAS **≥10 %**, **un tercio** del órgano elegido por **Rector**, incluidos miembros natos |
| **Presupuesto, LOSU art. 57.7** | **≥5 %** para programas propios de investigación, distinto del objetivo agregado de financiación de **≥1 % PIB** a **2030** (**art. 55**) |
| **Defensor, Estatutos art. 127.1** | **Rector propone**, **Claustro elige** por **mitad más uno de todos los miembros** |
| **Defensor, art. 127.2 reformado 2009** | **Renuncia a petición propia** distinta del **cese por Claustro** con mayoría de elección por incumplimiento/lesión |
| **Defensor Adjunto, art. 128.2** | **Claustro** designa por **mayoría simple**, a propuesta del candidato |
| **Defensor, art. 128.1 y 4** | **Mandato 3 años**, **una reelección**; memoria **cada año al inicio del curso** |
| **Reforma de Estatutos, arts. 178–180** | Iniciativa **Consejo de Gobierno** o claustrales **1/5**; toma en consideración **mayoría absoluta de presentes**; aprobación **mayoría absoluta del total de Claustro**; no presentar propuestas en **3 meses finales del mandato** |

> ⚠️ **¡Foco Examen!:** **T14-002** es **B (25 %)**, sin cambios en banco; **51 %** es también **art. 45.3**, no el 45.2. **Mayoría de claustrales presentes** no es **mayoría de todos los miembros**. El **cese voluntario del Defensor** no exige voto del Claustro propio del cese por incumplimiento.

### 56.3. Informes trazables, regresión y despliegue

- Los **manuales** y las **fuentes** de T13–T15 enlazan sus informes y las matrices incluyen el campo **`controlIntegralBanco20261104`** con las cifras respectivas y estado **`COTEJO_BANCO_COMPLETO`**, **`aprobadoPorUsuario:false`**, navegador **pendiente**.
- Nuevo [**`tests/validate-uc3m-t13-t15-integral.mjs`**](tests/validate-uc3m-t13-t15-integral.mjs) en **`npm test`** y [**workflow de CI**](.github/workflows/validate.yml): exige **47 preguntas, 188 opciones literales exactas** y motivadas en informes, claves coincidentes, artículos, focos, distribución de posiciones **T13 3/3/3/3, T14 4/4/3/3, T15 6/5/5/5**, y preserva la corrección material de **LOSU 45.3** y la cuestión **T15-003** de la reforma de 2009.
- **CI verificada**: [**run 41914068423 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41914068423) para SHA **`8b0d7a4ad02669f15076ae1b1d1ad762925e86a1`**. El despliegue de Pages de ese mismo SHA seguía **in_progress** en última comprobación; no afirmar éxito hasta verificarlo, ni confundir CI con navegación real.
- **PDFs**: la regeneración de UC3M y Diputación fue **SUCCESS** para SHA previo **`d9f6bdea56dec9ef7398412d46a745ed9000506c`**. No se acredita PDF nuevo posterior a los últimos cambios sin ejecución confirmada.
- **Corte normativo UC3M, base primera.7:** la [**web oficial del proceso**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) enlaza el listado definitivo, pero falta recuperar la fecha exacta **de la resolución/publicación primaria**. Un tercero sugiere **01/10/2026**; solo puede tratarse como indicio.
- **Límites**: la auditoría individual del banco **no equivale a cobertura íntegra de todo el programa**, ver matriz de cada tema con subapartados sin pregunta directa, ni implica certificación funcional o accesibilidad.

**Acumulado de cotejos individuales del banco:** **34/121 temas**, **La Puebla 19/19**, **UC3M 15/20**; **419 preguntas y 1.676 alternativas** revisadas. **0/121** acreditan simultáneamente todas las capas jurídico-editoriales, pedagógicas, funcionales, navegador y accesibilidad. **Siguiente lote**: **UC3M T16–T20** (normativa UC3M, presupuestos y contratos), luego controles funcionales globales.


## 57. UC3M T16–T20 · Cierre del banco (con reservas primarias expresas) — **04/11/2026**

### 57.1. Continuación de T16 a T20 con fuentes normativas

- **T16 · Enseñanzas y evaluación UC3M:** [**21 preguntas, 84 alternativas**](content/uc3m/tema-16/cotejo-integral-2026-11-04.md), incluyendo [**RD 822/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781), prácticas, TFG y TFM, normativa propia de permanencia y evaluación. Se mantiene la cautela respecto de la **sentencia de 06/10/2026 publicada el 23/10/2026** que anula el RD 905/2025, no el RD 822/2021 íntegro. **Corte UC3M pendiente**.
- **T17 · Acceso y admisión:** [**12 preguntas y 48 alternativas**](content/uc3m/tema-17/cotejo-integral-2026-11-04.md). Manual y fuentes precisados con [**RD 534/2024, arts. 3.5, 7, 22, 23.2, 25**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858): **6 ECTS** para reanudación en el mismo centro, **30 ECTS** para continuación/cambio, **hasta 3 materias y además una segunda lengua extranjera distinta** para mejora de admisión, puntuación **5** para ciertas homologaciones de Técnico Superior sin nota media (reforma julio 2026) y plazos de publicación.
- **T18 · Presupuesto 2026, ingresos:** [**12 preguntas y 48 alternativas**](content/uc3m/tema-18/cotejo-integral-2026-11-04.md). Fuente primaria adicional: [**BOCM de 30/12/2025, anexo Presupuesto 2026 UC3M**](https://www.bocm.es/boletin/CM_Orden_BOCM/2025/12/30/BOCM-20251230-28.PDF) publicada sobre acuerdo del **Consejo Social 11/12/2025**, **total 300.468.067,59 €** en ingresos y gastos. **Error editorial corregido**: no existen dos «Capítulo VI» de gastos; el **concepto 640**, inversiones inmateriales por **55.170.132,65 €**, pertenece al único **Capítulo VI** de inversiones reales.
- **T19 · Ejecución del gasto y cierre:** [**12 preguntas y 48 alternativas**](content/uc3m/tema-19/cotejo-integral-2026-11-04.md). Diferenciadas fases **RC, A, D, O, P**, pago material, **ADO**, pagos a justificar frente a anticipos de caja fija, resultado presupuestario y remanente de tesorería. Se mantiene el marco de la [**Ley 5/2025, Hacienda de Madrid**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-3217).
- **T20 · Contratos del sector público:** [**12 preguntas y 48 alternativas**](content/uc3m/tema-20/cotejo-integral-2026-11-04.md). Manual y fuentes reforzados con la [**Orden HAC/1517/2025**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605) para umbrales desde **01/01/2026**. Corregida la frase que hablaba de suministros/servicios «superiores a 15.000 €» sin incluir igualdad: los contratos menores de servicios requieren **valor estimado estrictamente inferior a 15.000 €, sin IVA**.

### 57.2. Tabla comparativa obligatoria de números confundibles

| Concepto | Dato exacto | Norma |
|---|---|---|
| **TFG de Grado 240 ECTS** | **6 a 24 ECTS** | **RD 822/2021, art. 14.6** |
| **TFM** | **6 a 30 ECTS** | **RD 822/2021, art. 17.4** |
| Prácticas curriculares Grado | Máximo ordinario **25 %** | **RD 822/2021, art. 14.5** |
| Prácticas Máster | Máximo **un tercio** | **RD 822/2021, art. 17.3** |
| Reanudación mismo centro | Mínimo **6 ECTS** | **RD 534/2024, art. 3.5** |
| Cambio de universidad/estudios | Mínimo **30 ECTS** reconocidos | **RD 534/2024, art. 7** |
| Mejora admisión PAU | Hasta **3 materias**, **más posibilidad de otra lengua extranjera** | **RD 534/2024, art. 22.1** |
| Presupuesto UC3M **2026** | **300.468.067,59 €** | **BOCM 30/12/2025** |
| Ingresos capítulo **IV** UC3M | **146.834.705,33 €** | **BOCM 30/12/2025** |
| Gasto concepto **640** | **55.170.132,65 €**, dentro del **capítulo VI** | **BOCM 30/12/2025** |
| Contrato menor servicios/suministros | **< 15.000 €**, sin IVA | **LCSP art. 118.1** |
| Recurso especial servicios/suministros | **> 100.000 €** para actos y contratos legalmente comprendidos | **LCSP art. 44.1.a** |
| SARA servicios/suministros **UC3M** | **≥ 216.000 €** | **LCSP arts. 21–22**, **Orden HAC/1517/2025** |
| SARA servicios/suministros **AGE**, supuestos enumerados | **≥ 140.000 €** | **LCSP arts. 21–22**, **Orden HAC/1517/2025** |
| SARA obras/concesiones generales | **≥ 5.404.000 €** | **LCSP arts. 20 y 23**, **Orden HAC/1517/2025** |

> ⚠️ **¡Foco Examen!:** **15.000 € exactos NO son contrato menor de servicios**. Para **UC3M**, SARA general de servicios/suministros **216.000 €**, **no 140.000 €**. **>100.000 €** es umbral de **recurso especial**, no SARA. No confundir **TFG/TFM** ni **6/30 ECTS** de las dos vías de continuidad de estudios.

### 57.3. Control documental de 276 alternativas y alcance real

- Los cinco informes contienen **69 preguntas y 276 alternativas A–D** comentadas individualmente, con claves y focos. Los cinco **manual.md** y **fuentes.md** remiten a cada informe; las **matrices** contienen `controlIntegralBanco20261104` con `COTEJO_BANCO_COMPLETO`, **aprobación de usuario false** y **pruebas navegador pendientes**.
- **Reserva de fuente primaria explícita en T18:** aunque las cantidades del **anexo BOCM** se verificaron directamente, no se pudo recuperar y leer íntegro el **Volumen I de Normas Básicas UC3M 2026**. Quedan por verificar contra dicho PDF primario **T18-006** (vinculación de créditos), **T18-008** (transferencias capital/corriente) y **T18-012** (grupo de seguimiento de incobrados a 120 días). No se certifica su literalidad estatutaria primaria por inferencia del manual.
- **Reserva de T19:** las fases contables son conceptos contrastados con el manual y marco público; la **particularidad procedimental interna de UC3M** requiere igualmente lectura del **Volumen I**. Los hechos del BOCM no prueban por sí solos procedimientos internos de gestión.
- **Fecha de corte normativo UC3M:** sigue faltando la **publicación primaria de la resolución de listas definitivas y anuncio del ejercicio** requerida por **base primera.7**. No sustituir la fecha oficial por el dato secundario **01/10/2026** sin verificar.
- [**Nueva regresión `tests/validate-uc3m-t16-t20-integral.mjs`**](tests/validate-uc3m-t16-t20-integral.mjs), añadida a **`npm test`** y [.github/workflows/validate.yml](.github/workflows/validate.yml): contrasta **69 preguntas y 276 literales exactos**, posiciones de claves, referencias, errores de capítulos de presupuesto, SARA 2026 y reservas de fuentes internas. **CI SUCCESS** [**run 41917264398**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41917264398) en SHA **`fc080701364fcd99e7985348970d46b846acef24`**. **Pages del mismo SHA estaba in_progress** en la última verificación.
- Ninguno de estos controles automáticos sustituye **pruebas de navegador móvil/escritorio, accesibilidad real**, lectura de cada apartado del programa ni aprobación expresa del usuario.

### 57.4. Acumulado y pendientes siguientes

**Auditoría individual de bancos documentada: 39/121 temas**; **La Puebla 19/19**, **UC3M 20/20**. Total **488 preguntas y 1.952 alternativas** comentadas. Esta cobertura de **bancos** no constituye certificación del **100 % del temario ni de la web**; **0/121** han acreditado simultáneamente todas las capas exigidas.

**Prioridad siguiente:** obtener y leer **Volumen I Presupuesto UC3M 2026** para resolver las reservas de T18/T19; recuperar publicación primaria de **listas definitivas UC3M**, verificar el corte temporal y rectificar si procediera; pruebas de navegación, móvil y accesibilidad; después retomar temas de otras convocatorias aún sin auditoría integral.


## 58. UC3M Volumen I 2026 · Cierre de reservas de T18 y precisión terminológica T19 — **04/11/2026**

### 58.1. Fuente primaria por fin recuperada

Se ha localizado en la [**carpeta institucional UC3M del Presupuesto 2026**](https://drive.google.com/drive/folders/1DjCPXRrGPQqPcMSzUUeUB1AKXBHFSj02) el [**Volumen I: Objetivos, Programa de Gobierno, Normas de ejecución, capítulos y conceptos, clasificaciones y plantillas**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view). Es un **PDF de 150 páginas** y **no una transcripción de academia**. Se ha recuperado el archivo original, extraído su texto y realizado **comprobación visual de las páginas 78, 79, 94, 98 y 101**, y textual de la **102**.

### 58.2. T18: tres reservas primarias resueltas

| Pregunta del banco | Respuesta verificada directamente | Artículo y página del Volumen I |
|---|---|---|
| **T18-006** | Vinculación general **nivel de concepto, dentro de cada centro y programa**. **Capítulos I, II y VI** vinculan a nivel de **capítulo**, con especialidades para atenciones protocolarias/representativas y subvenciones nominativas | **Art. 5, página 78/150** |
| **T18-008** | Transferencia de créditos de **capital a corriente**: **Consejo Social**, **previa autorización del Gobierno de la Comunidad de Madrid** | **Art. 6, página 79/150** |
| **T18-012** | Factura emitida: cobro **30 días**, recordatorio **60**, incobrados **90**, reunión del **Grupo de Seguimiento de Incobrados** **120 días** | **Art. 14.2, página 94/150** |

Se mantienen **las letras de respuesta existentes**, correctas en los tres casos. Se actualizan **`fuentes.md`**, **`cotejo-integral-2026-11-04.md`** y **`matriz.json`** con **`controlFuentePrimaria20261104.estado=VERIFICADO_EN_PDF_INSTITUCIONAL_ORIGINAL`**. Ya no es cierta para esos tres ítems la reserva anterior «no se pudo recuperar el Volumen I». La certificación general del tema y su visualización siguen siendo cuestiones diferentes.

> ⚠️ **¡Foco Examen!:** **90 días** marca **inicio de incobrados**; **120 días** la **reunión del grupo**. Las transferencias **capital → corriente** requieren **Consejo Social y autorización previa del Gobierno autonómico**; no solo **Rector**.

### 58.3. T19: corrección jurídica/contable efectiva de las preguntas **005–006**

La edición anterior de OpoWeb afirmaba sin distinción que **O = reconocimiento de obligación** y que **ADO = autorización, disposición y obligación**. Esa nomenclatura puede tener encaje en contabilidad pública general, pero es **inexacta si se presenta como literalidad de las Normas Básicas UC3M de 2026**.

El **artículo 15.2.1, página 98**, del Volumen I original utiliza:

| Código interno UC3M | Denominación del documento en **art. 15.2.1** |
|---|---|
| **RC** | **Retención de crédito** |
| **A** | **Autorización de gasto** |
| **D** | **Disposición o compromiso de gasto** |
| **O** | **Propuesta de pago** |
| **AD** | **Autorización y compromiso de gasto** |
| **ADO** | **Autorización, compromiso de gasto y propuesta de pago** |

**Actuación real en el repositorio:** se adaptan **`UC3M-T19-005`** (ahora pregunta directamente por **O = propuesta de pago**) y **`UC3M-T19-006`** (literal **ADO** corregido), preservando **IDs**, **cuatro alternativas** y **posiciones correctas B y D**. Se rectifican **manual**, **fuentes**, **informe individual** y **matriz**. La diferencia entre **propuesta de pago**, **ordenación de pago** y **pago material** queda explícita.

Adicionalmente, **arts. 16.2–3, páginas 101–102 del mismo original**:

| Sistema UC3M 2026 | Dato exacto |
|---|---|
| **Sistema asimilado a caja fija** | Gastos que **no excedan de 5.000 € sin IVA** |
| **Anticipos a justificar de compras o servicios** (no viajes) | **Máximo 12.000 €** |
| **Justificación de esos anticipos** | **Plazo máximo 1 mes** |
| **Anticipo para actividad general** | Documento **ADO código 250**, endosado al habilitado, y número del **RC** |

> ⚠️ **¡Foco Examen!:** En la **norma UC3M 2026**, **O = propuesta de pago**. El límite **5.000 €** de caja fija y el de **12.000 €** para anticipos **no** son límites generales de contrato menor de la LCSP. El anticipo debe justificarse en **1 mes**.

### 58.4. Verificación técnica y límites

- [**Test de regresión de UC3M T16–T20**](tests/validate-uc3m-t16-t20-integral.mjs) ampliado para impedir reintroducir los errores en **O/ADO** y para exigir la traza de fuente original en T18 y T19; conserva cotejo de **69 preguntas y 276 alternativas**.
- [**GitHub Actions run 41920022098, SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41920022098) para SHA **`703b0a9da354d1d4c3225853aa76b7c8f5788506`**, que contiene la prueba reforzada.
- GitHub Pages de ese SHA aún estaba **en curso** al redactar esta sección; no dar por completado su despliegue sin confirmación.
- **Corte normativo de la base primera.7 UC3M:** la [**página pública del proceso C2 de 2026**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra listado definitivo, pero el rastreador textual no facilita la **fecha del original de la resolución**; no dar por acreditado el presunto **01/10/2026** de fuentes secundarias.
- **Prueba funcional de navegación y accesibilidad**: aún no realizada de forma real. **No certificar cobertura completa jurídico-funcional** por haber superado validaciones de fichero.

**Cobertura de bancos sin incremento en número de temas:** **39/121** (**La Puebla 19/19; UC3M 20/20**), **488 preguntas / 1.952 alternativas**. Este lote **mejora la validez jurídico-editorial de T18/T19**, no suma temas nuevos ni modifica la cantidad de opciones del banco.

**Siguiente prioridad:** recuperar el documento primario de **lista definitiva UC3M 2026** y la fecha de su publicación, realizar pruebas funcionales de navegador, y después proseguir con el siguiente temario de otra convocatoria que carece de cotejo individual.


## 59. Control de concurrencia y validación por SHA — 04/11/2026, 23:04 CET

- Se han leído primero `PROJECT_RULES.md` y el apartado vigente **58** de este registro, sin reutilizar como estado actual los apartados antiguos del encargo.
- **Trabajo concurrente detectado:** tras el cierre del apartado 58 se añadieron informes de cotejo de **Diputación Auxiliar C2 T1 y T2** y enlaces desde sus manuales/fuentes. Commits observados: `9b573534150fea7a2740581e03db9bf203b04d99`, `c41d484705061d47082530ae9aa4c79d22cbd9a1`, `65721f169cb8bb9fd57d4ca3dc85913728ad4980` y `d3f28bad262dcd9dcc0395ca2375869cdacc6ef9`. No repetir ni adjudicarse el cotejo de esos bancos en este lote; revisar sus informes completos antes de incrementar el acumulado editorial.
- **Verificación CI/Pages del SHA exacto:** para `65721f169cb8bb9fd57d4ca3dc85913728ad4980`, la ejecución [CI 41921955191](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41921955191) y [Pages 41921950439](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41921950439) figuraban **in_progress** en la consulta; para el SHA más reciente `d3f28bad262dcd9dcc0395ca2375869cdacc6ef9`, [CI 41921962572](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41921962572) estaba **queued** y [Pages 41921962284](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41921962284) **pending**. Las ejecuciones anteriores de Pages canceladas por sustitución no son prueba de fallo del contenido ni de publicación del SHA nuevo. **No se certifica despliegue del HEAD.**
- **Hallazgo de proceso:** el registro único estaba aún en el apartado 58 mientras los commits concurrentes ya habían añadido auditorías T1/T2. Se registra aquí la divergencia temporal para impedir duplicación y afirmaciones de cierre sin evidencia.
- **Fuentes legales y límites:** se conservan las fuentes primarias identificadas en §58 (Volumen I UC3M 2026, arts. 5, 6, 14–16, y BOE normativo allí enlazado). En este control no se ha realizado nuevo cotejo artículo-por-artículo ni prueba de navegador; por ello no se incrementa ningún porcentaje de certificación. **0/121** temas acreditados en todas las capas.
- **Siguiente lote:** verificar resultados finales CI/Pages del SHA HEAD y los informes nuevos T1/T2; recuperar resolución primaria de listas definitivas UC3M y fecha de corte, ejecutar navegación móvil/escritorio y accesibilidad, y continuar con **Diputación C2 T3** sin adelantar T6 OAPGT. Registrar hallazgos y cambios por artículo; no declarar AUDITADO por tests.


## 59. Diputación de Toledo C2 T01–T03 · Auditoría de 240 alternativas — **04/11/2026**

### 59.1. Fuente y marco del lote

**Convocatoria C2 de **4 plazas**:** [**BOE-A-2026-21908, 21/10/2026**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-21908), **3 turno libre y 1 reserva discapacidad**. El programa literal procede del **BOP Toledo n.º 197, 14/10/2026, Anexo XI, código 2026.00004759**, ya incorporado al repositorio. No confundir con el programa **C1** u otros procesos de la Diputación.

**Orden editorial conservado:** el **tema 6 sobre Acuerdo Regulador y Estatutos OAPGT sigue aplazado hasta finalizar los demás**, conforme al acuerdo del **29/10/2026**. El aplazamiento no significa aprobación.

### 59.2. Tres cotejos individuales completos del banco

| Tema | Resultado | Norma y particularidad |
|---|---|---|
| [**T01 · Constitución**](content/diputacion-toledo-auxiliar-c2/tema-01/cotejo-integral-2026-11-04.md) | **20 preguntas / 80 alternativas literales** | [**CE consolidada a 20/05/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520), **LOTC**, **Defensor** y **estados excepcionales**. Cotejada la [**Reforma CE 69.3, BOE-A-2026-10881**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10881): **entrada en vigor 20/05/2026** frente a **eficacia de circunscripciones Ibiza y Formentera desde la primera convocatoria electoral posterior**. La clave existente **T01-009 = C** se mantiene |
| [**T02 · Ley 39/2015, interesados y plazos**](content/diputacion-toledo-auxiliar-c2/tema-02/cotejo-integral-2026-11-04.md) | **20/80** | [**Ley 39/2015 consolidada**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), última actualización publicada **06/11/2024**. Diferencias de **3 meses supletorios** (**21.3**) vs **6 meses** máximo fijable salvo excepción (**21.2**); **10 días** representación (**5.6**); **5 años** apoderamientos (**6.6**); **3 meses** suspensión informe preceptivo (**22.1.d**); urgencia **no reduce** plazos de presentación de solicitudes y recursos |
| [**T03 · Procedimiento común, sancionador y simplificado**](content/diputacion-toledo-auxiliar-c2/tema-03/cotejo-integral-2026-11-04.md) | **20/80** | [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): subsanación **10 días**, audiencia **10–15**, período de prueba **10–30**, informes **10**, información pública mínimo **20**, simplificado **30**, responsabilidad patrimonial ordinaria **1 año**; **denuncia** no inicia formalmente por sí sancionador, este se inicia **siempre de oficio** (**63.1**) |

Cada uno de los tres informes preserva la **literalidad de sus 80 opciones**, la **clave correcta**, una **explicación distinta de cada distractor**, la **referencia del artículo** y un bloque **¡Foco Examen!**. Se mantienen todas las posiciones de respuesta anteriores: **T01 A4/B6/C6/D4; T02 A3/B8/C7/D2; T03 A5/B5/C6/D4**. No se fuerza una distribución artificial ni se modifican distractores sin necesidad jurídica.

### 59.3. Tabla para el examen

| Pregunta habitual | No confundir con |
|---|---|
| Reforma CE **167: 3/5 en cada Cámara**; referéndum si lo pide **1/10 dentro de 15 días** | Reforma **168: 2/3**, **disolución**, nuevo proceso y referéndum **obligatorio** |
| Amparo **LOTC arts.42/43/44: 3 meses / 20 días / 30 días** | **Queja al Defensor del Pueblo: 1 año** desde conocimiento |
| Ley 39/2015 **3 meses** sin plazo normativo fijado | Máximo general **6 meses** para plazo fijado por norma reguladora |
| Audiencia **10–15 días** | Prueba **10–30**, información pública **mínimo 20**, simplificación **30** |
| Denuncia **art.62** (pone hechos en conocimiento) | Inicio sancionador por órgano competente **siempre de oficio**, **art.63** |
| Multa coercitiva **art.103** para ejecución | Sanción por infracción: institución diferente |

> ⚠️ **¡Foco Examen!:** **3 meses** del art. **21.3** y **6 meses** del **21.2** no responden a la misma pregunta. La **primera convocatoria electoral posterior** activa eficacia de la reforma de **Ibiza/Formentera** sin afectar elecciones previas.

### 59.4. GitHub y límites demostrables

- Actualizados **`matriz.json`**, **`manual.md`** y **`fuentes.md`** de **T01, T02 y T03** con referencia a informe exhaustivo; campo **`controlIntegralBanco20261104`**, **`COTEJO_BANCO_COMPLETO`**, **`aprobadoPorUsuario:false`**, **`certificacionWeb:PENDIENTE_PRUEBA_NAVEGADOR_REAL`**, y no se marca aprobado el manual íntegro.
- Nuevo [**`tests/validate-diputacion-c2-t1-t3-integral.mjs`**](tests/validate-diputacion-c2-t1-t3-integral.mjs), añadido a **`npm test`** y a [**.github/workflows/validate.yml**](.github/workflows/validate.yml): asegura **60 preguntas, 240 opciones literales**, ausencia de duplicados, consistencia de claves, fundamentos, focos y ausencia de aprobación ficticia. También preserva **CE 2026** y tablas de plazos de LPAC.
- **GitHub CI**: [**run 41922552970 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41922552970) para SHA **`cb9088d013d28b2cb417aae44fcdf0cc72a68f67`**. **GitHub Pages** del mismo commit seguía **in_progress** al redactar; revisar antes de proclamar éxito de despliegue.
- **Fecha de corte UC3M:** la base **primera.7 de BOE-A-2026-14624** exige legislación vigente en publicación de **resolución definitiva**; portal oficial confirma existencia pero el documento original fechado continúa sin descarga comprobada. La fecha **01/10/2026** aparece en fuente secundaria y no se incorpora como dato primario probado.
- **Pruebas funcionales reales y accesibilidad**: no han sido ejecutadas. Auditoría literal de banco no es certificación editorial total del manual, cobertura exhaustiva de cada epígrafe ni validación en móvil.

### 59.5. Avance acumulado

**42/121** temas con cotejo individual del banco: **La Puebla 19/19**, **UC3M 20/20**, **Diputación Toledo C2 3/20**; **548 preguntas y 2.192 alternativas**. El porcentaje de **temas con banco documentado** es aproximadamente **34,7 %**, **NO** porcentaje de certificación jurídico-funcional real de la web. **0/121** tienen todas las capas acreditadas.

**Siguiente lote:** **Diputación Toledo C2 T04 y T05**, y después **T07** y siguientes, manteniendo **T06** al final. Pendientes transversales: fecha de corte UC3M y navegador/accesibilidad reales.


## 60. Diputación Toledo C2 · T04 y T05 (160 alternativas cotejadas) — **04/11/2026**

### 60.1. Temas auditados con evidencia individual

- [**T04 — Revisión de oficio y recursos administrativos**](content/diputacion-toledo-auxiliar-c2/tema-04/cotejo-integral-2026-11-04.md): **20 preguntas, 80 alternativas A–D** cotejadas con [**Ley 39/2015, Título V, arts. 106–126**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565). Concretados plazos, órgano de alzada, reposición, recurso extraordinario y diferenciación entre declaración de **nulidad/lesividad**; la declaración de **lesividad local** corresponde al **Pleno de la Corporación o órgano colegiado superior** según **artículo 107.5**. No se han modificado las claves existentes, distribución **A4/B5/C6/D5**.
- [**T05 — Municipio, provincia, Diputación y elecciones locales**](content/diputacion-toledo-auxiliar-c2/tema-05/cotejo-integral-2026-11-04.md): **20 preguntas y 80 alternativas** revisadas según [**CE arts. 137, 140–141**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [**LRBRL, última actualización 03/10/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) y [**LOREG, última actualización 02/07/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672). Distribución de claves **A5/B6/C5/D4**. Fuente local anteriormente incorporada: [**Reglamento de Organización Administrativa de la Diputación de Toledo, BOP 14/02/2024**](https://www.diputoledo.es/archivos/transparencia/pdf/4e469-06-anuncio-bop-14-02-2024.pdf).

### 60.2. Tabla legal de conceptos confundibles

| Materia | Regla concreta | Precepto |
|---|---|---|
| Recurso de **alzada** | **1 mes** para interponer acto expreso; **3 meses** para resolver | **Ley 39/2015 arts. 121–122** |
| **Reposición potestativa** | **1 mes** para interponer expreso; **1 mes** para resolver; no hay **reposición de reposición** | **Arts. 123–124** |
| **Extraordinario de revisión** | **4 años** por error de hecho, **3 meses** por otras causas; resolución en **3 meses** | **Arts. 125–126** |
| **Revisión de oficio de acto nulo** | Iniciable **en cualquier momento**; exige dictamen consultivo **favorable**; **6 meses**: caducidad si **de oficio**, desestimación por silencio si **a instancia** | **Art. 106** |
| **Lesividad** de acto favorable anulable | Declarar antes de **4 años** desde acto; procedimiento caduca a **6 meses**. En entidad local decide **Pleno** | **Art. 107** |
| Junta de Gobierno **municipal** | Obligatoria en municipios de **más de 5.000** habitantes; otros supuestos art. 20.1.b | **LRBRL art. 20** |
| **Comisión Especial de Cuentas** | Presente en **todos** los municipios | **LRBRL art. 20.1.e** |
| Diputación: elección del **Presidente** | **Mayoría absoluta** en primera votación y **simple** en segunda | **LOREG art. 207.2** |
| Diputación: **Junta de Gobierno** | **Presidente y hasta un tercio** del número legal de diputados | **LRBRL art. 35.1** |
| Diputados provinciales si residentes **500.001–1.000.000** | **27 diputados** | **LOREG art. 204** |
| **Concejales** | Mandato **4 años** | **LOREG art. 194** |

> ⚠️ **¡Foco Examen!:** **Lesividad: cuatro años desde acto** (límite para declarar) frente a **seis meses desde inicio** (duración máxima del expediente). **Junta de Gobierno Local >5.000**, pero **Comisión Especial de Cuentas todos**. Diputación: **27** diputados no significa **27** miembros de la Junta.

### 60.3. Laguna detectada y reparada en el manual T05: **LOREG art. 206.1, LO 2/2024**

En la auditoría del **tema 5** se identificó una **omisión jurídica relevante**: el apartado sobre elección indirecta de diputados provinciales no desarrollaba los requisitos **2024** de **paridad de listas** y convocatoria. Se ha corregido **directamente en el manual y en fuentes** con [**LO 2/2024, de 1 de agosto**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-15936) y [**LOREG art. 206.1 consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672#a206).

| Requisito para elegir **diputados provinciales** | Norma aplicable |
|---|---|
| Convocatoria de **concejales** con puestos atribuidos | **Junta Electoral**, por separado, dentro de **5 días siguientes** |
| Aval de las listas de candidatos | **Al menos un tercio** de los concejales correspondientes |
| Elección de suplentes | **Tres suplentes**, para vacantes |
| Composición de listas | Cada sexo entre **40 % y 60 %**, con **orden alternativo** |
| Fecha de vigencia de la reforma de **art. 206.1** | **22/08/2024** |

Esta información se ha añadido a los [**apartados de elección provincial del manual**](content/diputacion-toledo-auxiliar-c2/tema-05/manual.md) y [**fuentes**](content/diputacion-toledo-auxiliar-c2/tema-05/fuentes.md). El banco existente de **20 preguntas** no contiene aún una pregunta autónoma sobre paridad, circunstancia consignada como **laguna pedagógica parcial del cuestionario**, aunque **sí aparece en el manual completo**.

También se ha subsanado un estado editorial **contradictorio** en T05: el apartado temprano aún decía que había pendiente una tabla de **periodicidad, convocatoria y quórum**, pese a que ya constaba desarrollada en un apartado posterior. Ahora remite al contenido existente y distingue la **revisión documental** de la certificación funcional no realizada.

> ⚠️ **¡Foco Examen!:** **1/3 de avales de concejales** (**LOREG 206**) ≠ **1/3 de diputados como máximo en Junta provincial**, excluyendo a su **Presidente** (**LRBRL 35**).

### 60.4. Pruebas, estados y métricas verificables

- Creados informes exhaustivos de **40 preguntas / 160 alternativas literales**, con fundamento y explicación de cada distractor para **T04 y T05**.
- **Manual.md**, **fuentes.md** y **matriz.json** de ambos temas enlazan la revisión; matrices incorporan `controlIntegralBanco20261104` con **`COTEJO_BANCO_COMPLETO`**, **`aprobadoPorUsuario:false`** y **`certificacionWeb:PENDIENTE_PRUEBA_NAVEGADOR_REAL`**. No se ha declarado aprobación integral ficticia.
- Nueva [**`tests/validate-diputacion-c2-t4-t5-integral.mjs`**](tests/validate-diputacion-c2-t4-t5-integral.mjs) que valida las **160 opciones exactas, claves, fundamentaciones, enlaces** y protege los datos de **LOREG 206.1**. Incluida en **`npm test`** y [.github/workflows/validate.yml](.github/workflows/validate.yml).
- **Primera validación CI del test integrado**, run [**41927043606 — SUCCESS**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41927043606), SHA **`c414dd55cc5d5e47f87468d197a1f992e5d41b83`**. Hubo ajuste posterior de un control de formato y el nuevo commit **`5884c074f6588c44ea30b5aa7519b793a77c798c`** estaba **en ejecución** en la última observación; no atribuirle éxito hasta comprobarlo.
- **Pruebas reales de navegador, móvil y accesibilidad**: pendientes. **Aprobación editorial integral del usuario:** pendiente. No convertir el cotejo de cuestionarios en un **100 % de la web**.

**Cobertura acumulada de bancos individualmente cotejados:** **44/121 temas**: **La Puebla 19/19**, **UC3M 20/20**, **Diputación Toledo C2 5/20**. **588 preguntas / 2.352 alternativas**. Equivale a **36,4 % de los temas con cotejo de banco**, no a certificación funcional/jurídica global, que sigue **0/121 con todas las capas acreditadas**.

**Siguiente prioridad:** **Diputación C2 T07–T09**, sin alterar el acuerdo de que **T06 (Acuerdo Regulador y Estatutos OAPGT)** queda al final de esta secuencia. Las otras convocatorias pendientes y la verificación de corte normativo **UC3M** siguen pendientes de sus propios controles.


## 61. Diputación Toledo C2 T07 · Ley 4/2011 de Empleo Público de Castilla-La Mancha y reformas de **2026** — **04/11/2026**

### 61.1. Banco individual cotejado

- [**Informe T07, 20 preguntas y 80 alternativas**](content/diputacion-toledo-auxiliar-c2/tema-07/cotejo-integral-2026-11-04.md), construido con la literalidad del banco existente, todos los distractores razonados, la respuesta correcta y un bloque de **¡Foco Examen!** individual.
- **Fuentes primarias:** [**Ley 4/2011, Empleo Público de Castilla-La Mancha, BOE-A-2011-7752**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752), [**Ley 2/2026, reforma art. 70.2**](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90086), y [**Ley 1/2026, reforma art. 121 y DA 7.ª**](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90065).
- **Advertencia de vigencia importante:** el BOE mostraba el consolidado de la **Ley 4/2011** con última integración indicada de **21/03/2024**, mientras el análisis normativo recoge expresamente las **modificaciones autonómicas de 2026**. No utilizar el art. 70.2 de esa versión 2024 como si agotara el Derecho vigente.
- **T07-007** mantiene como correcta la alternativa **C**: la **Ley 2/2026** añade supuestos específicos de libre designación referidos a puestos determinados por **Ley 55/2003** y desarrollo del personal estatutario sanitario. **NO** transforma todos los puestos de auxiliares administrativos en puestos de libre designación.
- Las **20 claves** permanecen idénticas; distribución **A3/B4/C7/D6**.

### 61.2. Tabla comparativa de examen

| Materia | Regla verificada |
|---|---|
| Clases de empleado público | **Funcionario de carrera, funcionario interino, personal laboral y personal eventual** (**Ley 4/2011 art. 4.2**) |
| Personal eventual | Funciones de **confianza o asesoramiento especial**; su condición **no es mérito** para acceso/promoción |
| **OEP** | Plazas vacantes **dotadas** cuya cobertura se estime necesaria; convocatoria de procesos ulterior |
| Plazo de **ejecución total** de la OEP | **3 años improrrogables** desde el **día siguiente a publicación** (**art. 19.4**) |
| Promoción interna | Antigüedad ordinaria de **al menos 2 años** en cuerpo/escala de procedencia, con cómputos especiales (**art.65.2**) |
| **Carrera horizontal** | Progresión sin cambio necesario de puesto |
| **Carrera vertical** | Ascenso en la estructura de puestos |
| Provisión ordinaria de puestos funcionariales | **Concurso** (**art.67.2**) |
| Provisión por **libre designación** | Supuestos expresamente previstos, **convocatoria pública** y reforma del **art.70.2 por Ley 2/2026** |
| Comisión de servicios | Desempeño temporal de puesto con requisitos legales |

> ⚠️ **¡Foco Examen!:** **3 años de ejecución OEP** se computan desde el **día siguiente a la publicación**, no desde toma de posesión o desde una convocatoria concreta. **2 años** es regla de promoción interna. **Concurso ordinario** no es sinónimo de **libre designación**.

### 61.3. Evidencia de integración y límites

- [**Manual T07**](content/diputacion-toledo-auxiliar-c2/tema-07/manual.md), [**fuentes**](content/diputacion-toledo-auxiliar-c2/tema-07/fuentes.md) y **`matriz.json`** enlazan el informe y registran **`controlIntegralBanco20261104`** con **`COTEJO_BANCO_COMPLETO`**, **20 preguntas**, **80 alternativas**, **`aprobadoPorUsuario:false`** y **`certificacionWeb:PENDIENTE_PRUEBA_NAVEGADOR_REAL`**.
- Nuevo [**test T07**](tests/validate-diputacion-c2-t7-integral.mjs) comprueba literalmente todas las **80 alternativas**, claves, focos, fechas de integración y ley reformadora **2026**. Integrado en **`npm test`** y [**GitHub Actions**](.github/workflows/validate.yml). **Los resultados del commit de integración estaban pendientes de confirmación** al documentar este apartado; no atribuir éxito anticipado.
- **No** se ha certificado la corrección absoluta de todos los apartados del manual, el funcionamiento real del simulador en dispositivos, la accesibilidad ni la aprobación editorial final del usuario.

### 61.4. Cobertura real

**45/121 temas** tienen ahora sus bancos con informe individual de opciones: **La Puebla 19/19**, **UC3M 20/20** y **Diputación Toledo C2 6/20** (temas **1, 2, 3, 4, 5 y 7**; **tema 6 sigue aplazado al final**). Acumulado **608 preguntas / 2.432 alternativas**. El **37,2 %** es solo **porcentaje de temas con banco auditado**, **NO** porcentaje de certificación total jurídico-funcional. La validación plena de todas las capas permanece **0/121**.

**Próxima prioridad editorial:** **Diputación Toledo C2 T08–T10**, manteniendo **T06 — Acuerdo Regulador y Estatutos OAPGT** para el final de la serie, y continuando el seguimiento del corte normativo de UC3M y controles reales de navegador.


## 62. Verificación CI/Pages del SHA de T07 y cribado inicial T08 — 04/11/2026

### 62.1. Evidencia técnica del commit exacto

- Último SHA observado de `main`: **`c1d6fd66b539efbcf83930f4460af047aa4d0cfd`** (cierre T07, §61).
- [**Validar OpoWeb v2, ejecución 41928007995**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41928007995): **completed / success**, filtrado explícitamente por `head_sha=c1d6fd66b539efbcf83930f4460af047aa4d0cfd`.
- [**GitHub Pages, ejecución 41928008667**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41928008667): **completed / success**, **mismo SHA**. Esto acredita éxito del flujo de despliegue, no pruebas manuales de navegador, móvil o accesibilidad.

### 62.2. Inspección de banco T08 sin recertificación

- Leído el archivo actual `content/diputacion-toledo-auxiliar-c2/tema-08/preguntas.json`: **20 preguntas**, identificadores `DT-C2-T08-001` a `020`. Inspeccionados enunciados y alternativas señaladas como correctas; el banco aborda LPRL arts. 14, 15, 19, 21, 22, 29, 31, 33, 35, 36, 38 y RD 39/1997 arts. 10 y 14.
- Comprobado que permanecen las sustituciones ya documentadas `T08-011` (31–49 trabajadores) y `T08-014` (informe 15 días), por lo que **no se regeneran**.
- **Incidencia editorial a cotejar antes de cierre**: `T08-007` usa en la alternativa correcta «Se imparte por empresa», expresión susceptible de confundir la obligación empresarial de garantizar la formación con la posibilidad de impartirla mediante servicios ajenos. Fuente primaria para la revisión: [LPRL art. 19](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292#a19). No se cambia la clave sin cotejar todas las opciones y el comportamiento de los tests de literalidad.
- **Pendiente:** cotejo jurídico individual de las **80 alternativas**, fundamentos, manual completo, pruebas funcionales y accesibilidad. Este cribado **no añade** T08 a los bancos integralmente cotejados.

### 62.3. Estado y siguiente bloque

Se mantiene **45/121 bancos con cotejo individual documentado**, **608 preguntas y 2.432 alternativas**; **0/121** certificados simultáneamente en todas las capas. Próximo lote: resolver con fuente primaria la redacción de **T08-007**, completar T08 y después T09–T10, sin adelantar T06 OAPGT. Seguir comprobando CI/Pages para **cada SHA nuevo** y evitar confundir éxito de Actions con certificación jurídica o funcional.


## 62. Diputación Toledo C2 · T08, T09, T10: 240 alternativas y siete preguntas redundantes reparadas — **04/11/2026**

### 62.1. Tres bancos cotejados individualmente

| Tema | Informe de 20 preguntas / 80 alternativas | Normas primarias |
|---|---|---|
| [**T08 · Prevención de riesgos laborales**](content/diputacion-toledo-auxiliar-c2/tema-08/cotejo-integral-2026-11-04.md) | **20 / 80** con clave, distractores fundamentados y focos | [**LPRL 31/1995 consolidada 09/04/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [**RSP, RD 39/1997**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853) |
| [**T09 · Igualdad de mujeres y hombres**](content/diputacion-toledo-auxiliar-c2/tema-09/cotejo-integral-2026-11-04.md) | **20 / 80**, tras reparar cuatro redundancias | [**Ley 12/2010 CLM**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708), [**LO 3/2007**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115) |
| [**T10 · Protección de datos**](content/diputacion-toledo-auxiliar-c2/tema-10/cotejo-integral-2026-11-04.md) | **20 / 80**, tras reparar tres redundancias | [**LOPDGDD, LO 3/2018**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), [**RGPD, DOUE-L-2016-80807**](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807), criterios [**AEPD**](https://www.aepd.es/preguntas-frecuentes/1-tus-derechos/2-tus-derechos-de-proteccion-de-datos) |

Los bancos se contrastaron contra los epígrafes del **Anexo XI del BOP Toledo 197, 14/10/2026**. Se incorporó informe individual de **todas las 240 alternativas literales**, con fundamentos distintos para cada distractor y **¡Foco Examen!** por pregunta.

### 62.2. Cuatro preguntas de igualdad reconstruidas sin cambiar claves

El banco de T09 repetía **composición equilibrada** (T09-011 frente a T09-004), **definición general del acoso** (T09-012 frente a T09-006), **transversalidad** (T09-016 frente a T09-003), y **lenguaje no sexista** (T09-018 frente a T09-005). Se han sustituido en [**preguntas.json T09**](content/diputacion-toledo-auxiliar-c2/tema-09/preguntas.json) por:

| ID y posición de clave conservada | Precepto y regla |
|---|---|
| **T09-011 = B** | **Art. 13 LO 3/2007**: carga de probar ausencia de discriminación y proporcionalidad en la **parte demandada** en los supuestos legales, **NO aplicable a procesos penales** |
| **T09-012 = C** | **Art. 7.4 LO 3/2007**: condicionar un derecho o expectativa a aceptar acoso sexual o por sexo también es discriminación |
| **T09-016 = C** | **Arts. 9 y 15 Ley 12/2010**: **informe de impacto de género** del anteproyecto de **Presupuestos de CLM** antes de su aprobación, **Comisión de Igualdad** |
| **T09-018 = A** | **Art. 45.2–4 LO 3/2007**: **plan de igualdad** obligatorio en empresas de **50 o más trabajadores**, también bajo otros supuestos legales |

Estas reglas tienen cita directa y han quedado añadidas al [**manual T09**](content/diputacion-toledo-auxiliar-c2/tema-09/manual.md) y [**fuentes T09**](content/diputacion-toledo-auxiliar-c2/tema-09/fuentes.md). **No** se ha inflado el volumen del banco: sigue habiendo **20 preguntas**.

> ⚠️ **¡Foco Examen!:** **40–60 %** es composición equilibrada, mientras **50 trabajadores** es el umbral empresarial general de **planes de igualdad**. **Cargar al demandado la prueba** no alcanza a procesos **penales**.

### 62.3. Tres preguntas de protección de datos reconstruidas y un enlace fantasma corregido

El banco de T10 duplicaba consentimiento de menores (T10-008), desconexión digital (T10-015) y secreto/confidencialidad (T10-020). Se han reemplazado en [**preguntas.json T10**](content/diputacion-toledo-auxiliar-c2/tema-10/preguntas.json), conservando respuestas **C/B/C**:

| ID | Regla nueva y origen |
|---|---|
| **T10-008 = C** | **RGPD art. 12.3**: contestar derechos en **1 mes desde la recepción**, con eventual prórroga de **2 meses adicionales** y comunicación en el primero |
| **T10-015 = B** | **LOPDGDD art. 22.3**: cuando las imágenes se conservan para acreditar actos contra integridad de personas, bienes o instalaciones, entrega a **autoridad competente dentro de 72 horas** desde **conocer la existencia de grabación** |
| **T10-020 = C** | **RGPD art. 33.1**: notificar brechas pertinentes a **autoridad de control** sin dilación indebida y de ser posible **dentro de 72 horas desde que se tenga constancia**, **salvo** que sea improbable riesgo a derechos y libertades; distinguir del deber de comunicación a interesados en **alto riesgo** del **art. 34** |

Se corrigió además en el [**manual T10**](content/diputacion-toledo-auxiliar-c2/tema-10/manual.md) la afirmación de que existía una trazabilidad completa en **`articulos.md`**: **ese archivo no está presente**, por lo que ahora se declara el control artículo por artículo **pendiente** en vez de sugerir una revisión inexistente.

**Tabla temporal:**

| Obligación | Plazo y dies a quo |
|---|---|
| Respuesta a derechos | **1 mes** desde recepción de solicitud, ampliación **2 meses** si se cumplen condiciones |
| Supresión ordinaria de grabaciones | **1 mes** desde captación de imágenes |
| Entrega excepcional de imágenes a autoridad | **72 horas** desde conocimiento de existencia de la grabación |
| Notificación de brecha a autoridad | De ser posible, **72 horas** desde conocimiento de la brecha, si riesgo no improbable |
| Comunicación a interesados de brecha de **alto riesgo** | Sin dilación indebida; **no** el plazo automático de 72 h del art. 33 |

> ⚠️ **¡Foco Examen!:** **72 horas por vídeo (LOPDGDD art. 22)** no significa **72 horas por brecha (RGPD art. 33)**: tienen hechos, destinatarios y requisitos **diferentes**.

### 62.4. PRL: escala, comité y formación correctamente separados

| Pregunta test | Regla |
|---|---|
| **Hasta 30 trabajadores** | Delegado de Personal también de Prevención |
| **31–49** | **1 Delegado de Prevención** elegido por y entre Delegados de Personal |
| **50–100** | **2 Delegados** |
| **101–500** | **3 Delegados** |
| Comité de Seguridad y Salud | Obligatorio con **50 o más trabajadores**, composición **paritaria**, reunión **trimestral** |
| Consulta de prevención del **art. 33** | Delegados responden en **15 días**; riesgos inminentes, tiempo imprescindible |
| Modalidad preventiva propia | Obligatoria con **más de 500 trabajadores** o demás supuestos reglamentarios |
| Formación preventiva | **Dentro de jornada** si es posible; fuera, se **descuenta tiempo invertido** |

La corrección previa del tema 8 que sustituyó la falsa suma legal de **probabilidad + severidad** por **valoración conjunta** permanece vigente. Fuente: [**Ley 31/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), **arts. 4.2, 14, 19, 35, 36, 38**.

### 62.5. Trazabilidad de CI y límites de acreditación

- Modificados **`manual.md`**, **`fuentes.md`**, **`matriz.json`** de **T08, T09 y T10**, e igualmente **`preguntas.json`** en T09 y T10; los **7 identificadores y posiciones correctas** permanecen estables.
- Cada matriz incluye **`controlIntegralBanco20261104`**, **`COTEJO_BANCO_COMPLETO`**, **`aprobadoPorUsuario:false`**, **`certificacionWeb:PENDIENTE_PRUEBA_NAVEGADOR_REAL`**, y cuenta de preguntas redundantes corregidas: **T08 0 / T09 4 / T10 3**.
- Nuevo [**`tests/validate-diputacion-c2-t08-t10-integral.mjs`**](tests/validate-diputacion-c2-t08-t10-integral.mjs), incorporado a **`npm test`** y a [.github/workflows/validate.yml](.github/workflows/validate.yml). Comprueba correspondencia literal de **60 preguntas y 240 alternativas**, distribución de respuestas, focos, fuentes, ausencia de aprobación ficticia y presencia de las siete reparaciones.
- **Validación automática:** el estado del commit final debe confirmarse con los **runs de GitHub Actions**; no anticipar **SUCCESS** si está pendiente. Los cambios de informes y ficheros del banco ya constan en el repositorio.
- **Pruebas funcionales reales de navegador/móvil y accesibilidad**: sin realizar. Ni cotejo de bancos ni CI estática demuestran certificación plena del portal.

### 62.6. Cobertura acumulada y siguiente prioridad

**48/121 temas** con banco cotejado individualmente: **La Puebla 19/19**, **UC3M 20/20**, **Diputación Toledo C2 9/20** (**T01–T05 y T07–T10**; el **T06 sigue aplazado al final, no aprobado**). Acumulado **668 preguntas y 2.672 alternativas**. **39,7 %** de **temas con banco cotejado**, NO porcentaje de certificación integral. **0/121** con todas las capas jurídico-editoriales, funcionales y de accesibilidad demostradas.

**Siguiente lote:** **Diputación Toledo C2 T11–T13** (tributación local, gestión y recaudación), manteniendo la secuencia acordada y dejando **T06 Acuerdo Regulador/Estatutos OAPGT** para el final. Reserva transversal pendiente: fecha primaria definitiva de corte normativo UC3M, navegador, accesibilidad y pruebas reales de simulacros.


## 63. Diputación de Toledo C2 T11–T13 · 240 alternativas tributarias y 10 preguntas redundantes sustituidas — **05/11/2026**

### 63.1. Programa, fuentes primarias y alcance

**Base oficial:** **BOP Toledo n.º 197, de 14/10/2026, Anexo XI**, programa de **Auxiliar Administrativo C2**, temas **11 a 13**. Las leyes cotejadas son:

- [**Real Decreto Legislativo 2/2004, TRLRHL, texto consolidado última actualización publicada 07/10/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214).
- [**Ley 58/2003, General Tributaria, texto consolidado última actualización publicada 21/12/2024**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186).
- [**RD 939/2005, Reglamento General de Recaudación**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803), y [**RD 520/2005, revisión tributaria**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-8662), como fuentes complementarias de T12.

**Advertencia metodológica:** el consolidado BOE es de carácter **informativo**; se han cotejado sus artículos y se citan normas oficiales. La fecha de actualización de un texto no debe confundirse con la fecha de entrada en vigor de cualquier modificación específica.

| Tema | Informe preciso | Resultado jurídico-editorial del banco |
|---|---|---|
| [**T11 · Tributación local y gestión tributaria**](content/diputacion-toledo-auxiliar-c2/tema-11/cotejo-integral-2026-11-05.md) | **20 preguntas / 80 alternativas** | **LGT 104.1**, **TRLRHL 7.2** y **9.1** añadidos, con tres redundancias sustituidas |
| [**T12 · Recaudación, apremio y devoluciones**](content/diputacion-toledo-auxiliar-c2/tema-12/cotejo-integral-2026-11-05.md) | **20/80** | **LGT 62.3, 167.3, 32.2 y 72.1** incorporados en cuatro preguntas nuevas |
| [**T13 · Impuestos locales IBI, IAE, IVTM, IIVTNU**](content/diputacion-toledo-auxiliar-c2/tema-13/cotejo-integral-2026-11-05.md) | **20/80** | **TRLRHL 59.2, 61.1–2 y 104.2**, tres nuevas preguntas no redundantes |

Cada informe reproduce **las cuatro opciones exactas** de cada ítem, **la clave** y **un motivo distinto para aceptar o descartar cada alternativa**, con un bloque **¡Foco Examen!** individual. **No** equivale a auditoría legal de todas las afirmaciones de los tres manuales.

### 63.2. Diez reemplazos reales de preguntas repetidas

Se han conservado los **IDs, veinte preguntas por tema y las posiciones de respuesta correcta**. Las sustituciones de contenido se registran en sus **`preguntas.json`**, **`matriz.json`** y documentos de fuentes:

| Pregunta | Clave conservada | Materia examinable añadida |
|---|---|---|
| **T11-015** | **D** | **LGT art.104.1:** plazo supletorio tributario **6 meses**; procedimiento de apremio exceptuado |
| **T11-019** | **D** | **TRLRHL art.7.2:** el **Pleno** acuerda la delegación tributaria, el órgano competente receptor la acepta y se publica en los **boletines oficiales provincial y autonómico** |
| **T11-020** | **A** | **TRLRHL art.9.1:** bonificación potestativa en ordenanza **hasta el 5 % de cuota** por domiciliación/anticipo/colaboración |
| **T12-010** | **C** | **LGT art.62.3:** recibos de notificación colectiva y periódica del **1 de septiembre al 20 de noviembre**, salvo regla especial o modificación no inferior a **2 meses** |
| **T12-013** | **B** | **LGT art.167.3:** oposición tasada a providencia de apremio por **extinción total o prescripción** |
| **T12-014** | **C** | **LGT art.32.2:** interés de demora por ingresos indebidos **sin necesidad de petición** desde ingreso hasta orden de pago, con límites legales |
| **T12-017** | **B** | **LGT art.72.1:** compensación solicitada en **período voluntario o ejecutivo** |
| **T13-009** | **B** | **TRLRHL art.59.2:** impuestos potestativos **ICIO e IIVTNU**, frente a **IBI/IAE/IVTM** obligatorios |
| **T13-010** | **C** | **TRLRHL art.61.1–2:** prelación IBI **concesión → superficie → usufructo → propiedad** |
| **T13-018** | **C** | **TRLRHL art.104.2:** no sujeción IIVTNU por **terreno rústico a efectos de IBI**, distinta del caso de inexistencia acreditada de incremento del **104.5** |

Se corrigió además en el [**manual T11**](content/diputacion-toledo-auxiliar-c2/tema-11/manual.md) una referencia cruzada equivocada que decía que la recaudación en profundidad estaba en el propio **T11**: corresponde al **T12**. Se eliminó en [**manual T12**](content/diputacion-toledo-auxiliar-c2/tema-12/manual.md) el encabezado duplicado **«## 1. voluntaria»**.

### 63.3. Tabla diferencial tributaria de uso directo en test

| Regla | Supuesto | Plazo o cuantía |
|---|---|---|
| **LGT art.104.1** | Procedimiento tributario sin duración máxima fijada | **6 meses**, con excepciones |
| **LPAC art.21.3** | Procedimiento administrativo común sin plazo fijado | **3 meses** |
| **LGT art.62.2.a** | Liquidación notificada **1–15** | **20 del mes siguiente** o hábil inmediato |
| **LGT art.62.2.b** | Liquidación notificada **16–último** | **5 del segundo mes siguiente** o hábil inmediato |
| **LGT art.62.3** | Recibo periódico de notificación colectiva sin norma especial | **1 septiembre–20 noviembre** o hábil inmediato; modificación mínimo **2 meses** |
| **LGT art.62.5.a** | Providencia de apremio notificada **1–15** | **20 del mismo mes** o hábil inmediato |
| **LGT art.62.5.b** | Providencia notificada **16–último** | **5 del mes siguiente** o hábil inmediato |
| **LGT art.28.2** | Paga íntegra deuda antes de providencia | **5 %** recargo ejecutivo, sin interés ejecutivo |
| **LGT art.28.3** | Paga deuda y recargo dentro de **62.5** | **10 %** reducido, sin interés ejecutivo |
| **LGT art.28.4–5** | Fuera de los supuestos reducidos | **20 %** ordinario, compatible con intereses |
| **TRLRHL art.9.1** | Ordenanza prevé bonificación por domiciliación, anticipo o colaboración | **Hasta 5 %** de cuota, no automático |
| **TRLRHL art.17.1** | Exposición provisional de ordenanza fiscal | **Mínimo 30 días** |
| **LGT art.66** | Prescripción general tributaria | **4 años**, según derecho y dies a quo |

> ⚠️ **¡Foco Examen!:** **62.2 y 62.5** distinguen **notificación de liquidación** y **notificación de providencia**: una fecha del **día 10** tiene vencimientos diferentes según el documento. **62.3** no es ninguna de las dos, sino recibos de notificación colectiva periódica. **Plazo supletorio tributario = 6 meses**, frente a **3 meses LPAC**.

### 63.4. Evidencia técnica y límites de certificación

- Modificados **`preguntas.json`** de T11–T13 con **10 sustituciones**, sin alterar número de ítems o distribución de claves: **T11 A5/B5/C5/D5; T12 A5/B5/C5/D5; T13 A5/B4/C6/D5**.
- Actualizados **`manual.md`**, **`fuentes.md`**, **`matriz.json`**, cada uno con referencia relativa al nuevo informe **`cotejo-integral-2026-11-05.md`** y comparativas examinables.
- Las tres matrices incluyen **`controlIntegralBanco20261105`**, **`estado:COTEJO_BANCO_COMPLETO`**, recuento **20/80** y listado de cambios; **`aprobadoPorUsuario:false`**, **`certificacionWeb:PENDIENTE_PRUEBA_NAVEGADOR_REAL`** y **`certificacionLegalGlobal:PENDIENTE_MANUAL_COMPLETO`**.
- Nueva prueba [**`tests/validate-diputacion-c2-t11-t13-integral.mjs`**](tests/validate-diputacion-c2-t11-t13-integral.mjs), registrada en **`npm test`** y [.github/workflows/validate.yml](.github/workflows/validate.yml). Valida **60 preguntas, 240 alternativas exactas**, duplicidad, claves, fundamento, preguntas sustituidas y correcciones cruzadas.
- **Estado del último CI y GitHub Pages:** comprobar los runs del **commit final** antes de atribuir un **SUCCESS**. Las ejecuciones previas del repo no son prueba de este lote por sí solas.
- **Prueba funcional de navegador real, móvil y accesibilidad:** pendiente. **Aprobación editorial integral por el usuario:** pendiente. La revisión del banco no equivale a certificado del manual entero ni a un portal autónomo al **100 %**.

### 63.5. Cobertura acumulada

**51/121 temas** con cotejo individual del banco: **La Puebla 19/19**, **UC3M 20/20**, **Diputación Toledo C2 12/20** (**T01–T05, T07–T13**; **T06 sigue aplazado hasta el final**). Acumulado **728 preguntas y 2.912 alternativas cotejadas**. **42,1 %** es el porcentaje de **temas con banco auditado**, no certificación integral técnico-jurídica ni accesibilidad. **0/121** con todas las capas demostradas.

**Próxima prioridad:** **Diputación Toledo C2 T14–T16**, manteniendo la decisión editorial de dejar **T06** para el final. Persisten las reservas transversales de fecha primaria de corte normativo UC3M y prueba real de navegador y accesibilidad.


## 64. Incidencia funcional: práctica de Diputación Auxiliar C2 — 05/11/2026

### 64.1. Problema reproducible localizado

La portada `assets/app.js` incluía la convocatoria **Diputación Toledo Auxiliar Administrativo C2**, con enlace a `practice.html`, pero el selector `CALLS` de `assets/practice.js` **no incluía ese identificador**. Por tanto, `loadCall(id)` aplicaba el fallback `CALLS[0]`, cargando **La Puebla** aun cuando el aspirante entraba desde el programa de **Diputación C2**. Era una mezcla funcional de convocatorias que no se detectaba mediante la sola validación de los bancos JSON.

### 64.2. Corrección aplicada en producción

- Añadido `diputacion-toledo-auxiliar-c2-2026` al catálogo de práctica con programa oficial propio, carpeta de sus **20 temas**, clave de historial independiente y cuestionarios `DT-C2-T*`.
- Los **supuestos prácticos** y **simulacros** de esta convocatoria todavía no existen como ficheros editoriales propios: la carga ahora admite estos recursos **opcionales** en vez de solicitarlos y terminar en error. No se simula disponer de pruebas oficiales inéditas.
- Bloqueadas las **29 preguntas provisionales del T06** (Acuerdo Regulador y Estatutos OAPGT), hasta verificar el texto consolidado; se identifica el motivo de su indisponibilidad y se deshabilita su tarjeta en la práctica.
- Las demás preguntas disponibles se ofrecen como **entrenamiento**, sin presentar el conjunto como certificación jurídico-editorial integral. Los temas sin preguntas utilizables se muestran deshabilitados.
- El panel de **errores y temas débiles** también reconoce la nueva convocatoria y separa su progreso del de La Puebla y Diputación C1.
- Actualizados los parámetros de versión de los scripts en `practice.html` para evitar referencias antiguas almacenadas en caché.

### 64.3. Evidencia automática y limitaciones

- Nueva prueba [`tests/validate-diputacion-c2-practice-route.mjs`](tests/validate-diputacion-c2-practice-route.mjs), integrada en `npm test`: verifica selección correcta, **19 bancos accesibles**, exclusión del **T06**, carga sin recursos inexistentes, historial independiente y versión de scripts.
- Cambio jurídico: **ninguno**; no se alteraron respuestas ni contenidos normativos.
- **51/121** bancos auditados individualmente y **0/121** con certificación integral demostrada: la corrección funcional no incrementa esas métricas.
- La compilación sintáctica aislada del JavaScript se comprobó en el editor. **CI/Pages del último commit: verificar su resultado definitivo**, sin dar por realizada la prueba de navegador real, móvil ni accesibilidad.
- **Próxima auditoría jurídico-editorial:** Diputación Auxiliar C2 T14–T16; T06 permanece aplazado hasta completar sus fuentes oficiales.


## 65. Diputación Toledo C2 T14 · redundancia de certificados y comprobación CI/Pages — 05/11/2026

### Evidencia técnica exacta

Se leyeron primero `PROJECT_RULES.md` y el apartado más reciente (§64) de este registro. Se consultaron commits recientes: al comenzar, HEAD `361b154aaa426bd49afaff87ae1b5a9165f22bba`. Para ese SHA, **CI success** (run **41935030848**) y **Pages success** (run **41935031016**), comprobados en GitHub Actions. No atribuir esos resultados al nuevo commit de esta sección.

### Cotejo jurídico parcial de T14

En `content/diputacion-toledo-auxiliar-c2/tema-14/preguntas.json`, la pregunta **DT-C2-T14-014** repetía la regla de vigencia máxima de cinco años ya evaluada en **T14-004**. Se sustituyó por la **suspensión del certificado**, contrastada con **Ley 6/2020, artículo 5.2 y 5.3** ([BOE, texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a5)); se conservaron ID, cuatro alternativas y posición de la clave correcta **D**. La nueva justificación enumera los supuestos **5.1.a, c, h**, las dudas sobre **5.1.b, g**, la exigencia de previsión en la declaración de prácticas y el efecto de no levantar la suspensión. Se examinaron individualmente los distractores: visita a la sede, plazo inventado de tres años y caducidad definitiva no constituyen esa regla legal.

**Commit de contenido:** `dffd919b3363339901a4924b97e5f9f3721169e2`. **CI/Pages de este commit y del commit de registro:** pendientes de comprobación tras su ejecución. No se han realizado pruebas de navegador, accesibilidad ni cotejo integral de T14–T16; siguen pendientes otras redundancias de T14 (T03/T11, T06/T13, T01/T17), que no deben cambiarse sin contrastar el nuevo fundamento. La fecha de corte normativo y la vigencia particular de cada disposición deben cotejarse antes de cerrar el manual.

### Cobertura y siguiente lote

Se mantiene **51/121 bancos cotejados individualmente** y **0/121 temas certificados en todas las capas**. **Próximo bloque:** revisar y sustituir duplicidades restantes de T14 con preceptos oficiales distintos, cotejar cada alternativa y documentar en informe individual; continuar T15–T16, sin anticipar T06 OAPGT. Verificar CI y Pages del SHA de cada nuevo cambio y probar la ruta real de práctica C2 en navegador/móvil.


## 66. Diputación Toledo C2 T14 · tres redundancias jurídicas sustituidas — 05/11/2026

Se han releído `PROJECT_RULES.md` y el apartado inmediatamente anterior (§65), no el estado histórico del prompt. En `content/diputacion-toledo-auxiliar-c2/tema-14/preguntas.json` se sustituyen **T14-011, T14-013 y T14-017**, manteniendo sus identificadores, 4 alternativas y posiciones correctas **A/C/C**, por reglas diferenciadas de la **Ley 6/2020** (BOE-A-2020-14046, texto consolidado actualizado 09/05/2023):

- **T14-011, art. 6.1.b:** identificación de persona jurídica en certificado cualificado de sello, denominación/razón social y NIF o identificador sustitutivo unívoco y permanente; tres distractores niegan o sustituyen incorrectamente el identificador.
- **T14-013, art. 5.1.e:** extinción o modificación de representación, revocación de certificado de representante y deber de solicitud de **ambas partes**; distractores sobre vigencia indefinida, reserva judicial y navegador descartados.
- **T14-017, art. 7.1:** regla general de personación para identificar al solicitante persona física y excepción de firma en solicitud legitimada en presencia notarial; se advierte de la vía distinta de identificación a distancia del art. 7.2; distractores sin garantías legales descartados.

**Fuente primaria:** https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a5 (arts. 5, 6 y 7). **Commit de contenido:** `18c3e61c746c7dc46e48f606951f5705713ee8b2`. Se ha verificado que el JSON contiene las 20 preguntas y se conservan las claves de los tres ítems; no se han ejecutado `npm test` ni pruebas de navegador en esta ejecución. La consulta de workflow runs para el prefijo `e5b09f24` devolvió **lista vacía**, lo cual **no demuestra éxito ni fracaso**: volver a comprobar por SHA completo y, si procede, estado combinado. CI/Pages del commit nuevo **pendientes**.

**Cobertura:** **51/121** bancos cotejados previamente; el T14 sigue en revisión parcial y **0/121** temas certificados integralmente. **Siguiente lote:** verificar CI/Pages por SHA exacto; cotejar las 20 preguntas y 80 alternativas de T14 y manual/epígrafes/matriz, revisar si quedan redundancias y avanzar a T15–T16. Mantener T06 OAPGT reservado al final. Persisten pruebas funcionales reales de práctica, móvil, PWA y accesibilidad, y fecha primaria de corte normativo UC3M.


## 67. Diputación Toledo C2 T14 · nueve explicaciones y CI/Pages verificadas — 05/11/2026

### Evidencia de origen y validación

Se leyó primero `PROJECT_RULES.md` y el apartado final vigente (§66), se consultó el historial de commits y los workflow runs. El SHA `7a2318435ee5077bbea8d2080211ba99ccb1ce68` obtuvo **CI success** (run **41945999062**) y **GitHub Pages success** (run **41945998793**), ambos con **head_sha exacto** y conclusión `success`. La ejecución Pages del commit intermedio `18c3e61c` fue cancelada por concurrencia; la publicación correcta del commit posterior no equivale a prueba de navegador. **El nuevo SHA de contenido `082f90f450b684ab956e0a0aca1fd8ed7c9acc1e` todavía requiere verificar sus propios runs.**

### Trabajo jurídico-editorial efectivamente realizado

En `content/diputacion-toledo-auxiliar-c2/tema-14/preguntas.json` se reforzaron **nueve preguntas**: **DT-C2-T14-007, 008, 009, 010, 012, 015, 016, 018 y 019**. Se diferenciaron los fundamentos de **Ley 39/2015 arts. 9–11**, **Reglamento (UE) 910/2014 arts. 3.9, 3.24, 3.38, 25, 29, 32 y 35**, **Ley 6/2020 art. 4.1** y FAQ FNMT 1213. Cada explicación distingue explícitamente la opción correcta de los **tres distractores**, con advertencias específicas para examen. **36 alternativas** examinadas editorialmente en este lote, sin cambiar identificadores, posiciones de clave ni número de preguntas. Se sustituyó el bloque repetitivo de «Diferenciar firma, sello...» por focos individualizados. No se afirma haber cotejado jurídicamente todos los manuales ni ejecutado tests de navegador.

**Fuentes primarias:** [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Reglamento eIDAS](https://eur-lex.europa.eu/eli/reg/2014/910/oj/spa) y [FNMT, FAQ 1213](https://www.sede.fnmt.gob.es/ca/preguntas-frecuentes/problemas-y-dudas/-/asset_publisher/fVZppcBHj0oa/content/1213-que-diferencia-hay-entre-solicitar-un-certificado-en-tarjeta-criptografica-y-solicitarlo-en-software-). **Commit de contenido:** `082f90f450b684ab956e0a0aca1fd8ed7c9acc1e`. Los artículos de eIDAS deberán comprobarse asimismo frente a la versión aplicable tras sus modificaciones y fechas de aplicación antes de declarar cierre legal.

### Cobertura, faltantes y siguiente lote

Se mantienen **51/121 bancos previamente cotejados** y **0/121 temas con certificación integral simultánea**. T14 permanece parcial: completar cotejo individual de T14-001–006, 011, 013, 014, 017 y 020 frente a fuentes vigentes, verificar el programa literal, manual, matriz y fuentes, comprobar el render y tests de práctica real. Siguiente lote prioritario: cerrar documentalmente T14 sin inventar certificado y avanzar a **Diputación C2 T15–T16**, con T06 OAPGT al final. Persisten pruebas reales de móvil/PWA/accesibilidad y fecha de corte UC3M.


## 68. Diputación C2 T14 · saneamiento del estado editorial y CI/Pages exactos — 05/11/2026

Se leyeron **PROJECT_RULES.md** y el último apartado vigente (§67) antes de intervenir. HEAD inicial: `78478d8c96320f57d384e931e5d5e3c8ff5a0993`. En GitHub Actions se comprobó **CI success** run **41952827394** y **Pages success** run **41952827739**, ambos con `head_sha=78478d8c96320f57d384e931e5d5e3c8ff5a0993`. Para el SHA anterior de contenido `082f90f450b684ab956e0a0aca1fd8ed7c9acc1e`, **CI success** run **41952802210** y **Pages cancelled** run **41952801415**; el despliegue posterior exitoso corresponde a HEAD y no demuestra prueba funcional de navegador.

Se inspeccionaron el banco de **20 preguntas** de T14, el comienzo del manual y la matriz vigente. El manual mantenía simultáneamente una advertencia de falta de certificación y la cabecera contradictoria **«CONTENIDO COMPLETO Y PUBLICADO»**. Se sustituyó esta segunda por **EN_AUDITORIA — sin certificación integral**, identificando la revisión de octubre como hito histórico y las tareas aún pendientes. Archivo: `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md`; commit de corrección **`fdb6ef722278859393541a7d0996ae9bbfe49b19`**. No se modificaron respuestas, ni se pretende acreditar con esta edición la vigencia de todos los artículos eIDAS.

**Fuentes de cotejo aún necesarias:** [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) y BOP Toledo n.º 197 de 14/10/2026 (Anexo XI, CSV 2026.00004759). El listado de preguntas y la matriz fueron inspeccionados, **no recertificados**. Queda pendiente cotejo artículo por artículo de manual y distractores, auditoría T15–T16, tests de navegador/móvil/PWA/accesibilidad y verificación CI/Pages del nuevo SHA.

**Cobertura sin incremento:** **51/121 bancos cotejados previamente**, **0/121 temas certificados integralmente**. **Siguiente lote:** verificar CI/Pages del commit de registro por SHA exacto, terminar el cotejo del banco T14 y su matriz, seguir con T15 y T16; T06 OAPGT continúa reservado para el final. No reabrir Carranque ni Las Ventas; no dar por resuelta la discrepancia de Olías.


## 69. Diputación C2 T14 · obligación de suspensión y CI/Pages exactos — 05/11/2026

Se han leído primero `PROJECT_RULES.md` y el último apartado (§68). HEAD inicial `46b089c3e20535ada90d9f1244e2bfcaa16f2e90`. GitHub Actions para **ese SHA exacto**: **Validar OpoWeb v2 success** run **41959260741** y **Pages success** run **41959260783**. El commit intermedio `fdb6ef72` tuvo CI success (41959243632) y Pages cancelado por concurrencia (41959242057), por lo que el despliegue acreditado corresponde al commit posterior `46b089c3`, no al intermedio aisladamente.

### Hallazgo jurídico y corrección verificable

En `content/diputacion-toledo-auxiliar-c2/tema-14/preguntas.json`, **DT-C2-T14-014** explicaba la suspensión con el verbo permisivo «permite» y la pregunta «¿cuándo cabe?», susceptible de enseñar discrecionalidad. El texto consolidado oficial de la **Ley 6/2020, art. 5.2**, utiliza **«suspenderán»** ante las causas tasadas del art. 5.1 letras **a), c), h)** y dudas de **b), g)**, siempre que la declaración de prácticas contemple la suspensión. Se han precisado el enunciado, la opción correcta D, la explicación y la trampa para distinguir **obligación condicionada** de facultad libre; A (visitar sede), B (tres años automáticos) y C (caducidad definitiva) siguen siendo distractores falsos. El art. 5.3 prevé comunicación y extinción cuando no se levante al concluir el plazo. **Fuente oficial contrastada:** https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a5 (última actualización del consolidado 09/05/2023). **Commit de contenido:** `5011cead517d88f04616b485b620d89cb4ee5ae0`. Conservados identificador, 20 preguntas y clave D del ítem. La corrección no supone cotejo completo de 80 alternativas.

### Estado y siguiente lote

**51/121 bancos cotejados previamente; 0/121 temas certificados integralmente.** No se han ejecutado pruebas de navegador, móvil, PWA ni accesibilidad, ni se certifica manual/matriz de T14. **CI/Pages de `5011cead` y del commit de este registro: verificar por SHA exacto en el siguiente lote**. Completar contraste documental de las restantes preguntas de T14, cotejar programa literal, manual, fuentes y matriz; avanzar a T15–T16 sin tocar T06 OAPGT hasta el final. Prioridad de estudio general: La Puebla (14/11) y UC3M (21/11). Olías sigue con discrepancia no resuelta; Carranque y Las Ventas descartadas.


## 70. Diputación C2 T15 · encomienda de gestión, CI/Pages exactos — 05/11/2026

Se leyeron primero `PROJECT_RULES.md` y el último apartado vigente (§69); HEAD de partida `d433ea7848ef6e654e053fcee9729e53becd3f92`. En la API de Actions se verificaron para **ese SHA exacto**: **Validar OpoWeb v2 success**, run **41965549583**, y **pages build and deployment success**, run **41965549800**. El commit intermedio `5011cead517d88f04616b485b620d89cb4ee5ae0` tuvo **CI success** run **41965531611**, pero **Pages cancelled** run **41965530749** por concurrencia; no se atribuye éxito individual a esa ejecución cancelada. Estas ejecuciones no equivalen a prueba funcional de navegador.

### Corrección jurídica y pedagógica comprobada

Se inspeccionaron las **20 preguntas** y la matriz del **tema 15** de Diputación Toledo Auxiliar C2. La pregunta **DT-C2-T15-004** preguntaba solo si la encomienda cedía titularidad, duplicando el concepto ya preguntado en T15-010, con tres distractores triviales. Se sustituyó por una pregunta sobre **quién dicta los actos jurídicos de soporte** de la encomienda. El **artículo 11.2 de la Ley 40/2015** asigna esa responsabilidad al **órgano o entidad encomendante** y excluye la cesión de titularidad o de elementos sustantivos del ejercicio. Se cotejaron la clave D y los tres distractores: confusión con órgano encomendado, publicación del instrumento del art. 11.3 y transferencia de titularidad. Se conservan ID, 20 ítems, cuatro opciones y posición D. **Fuente oficial:** https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a11 (consolidado BOE actualizado 02/08/2024). **Archivo:** `content/diputacion-toledo-auxiliar-c2/tema-15/preguntas.json`. **Commit de contenido:** `faba9938810c6b532fbdb753787059b23c5cb0d1`.

**Validación:** se comprobó estructura JSON al serializar y persistir; **no** se ejecutó `npm test` local ni prueba de navegador. CI/Pages del nuevo commit de contenido y del commit de registro **pendientes de resultado**. El manual T15 todavía contiene una cabecera histórica «CONTENIDO COMPLETO Y COTEJO NORMATIVO 29/10/2026», aunque la advertencia inicial indica falta de certificación: revisar y sanear sin confundir hitos históricos con estado actual. La matriz T15 es documental, no evidencia integral; faltan el cotejo individual de las restantes 19 preguntas/76 alternativas, manual completo, fuentes, simulacros, práctica real, móvil/PWA/accesibilidad. T14 también continúa parcial.

**Cobertura sin incremento:** **51/121** bancos previamente cotejados y **0/121** temas certificados en todas las capas. **Siguiente lote:** comprobar CI/Pages del nuevo SHA exacto, continuar T15 (especialmente arts. 8–24 y 54–80), T16 y cierre documental pendiente T14, sin anticipar T06 OAPGT; mantener prioridad temporal La Puebla y UC3M. Olías conserva discrepancia de plazas/plazos; no actuar sobre solicitudes.


## 71. Diputación Toledo C2 T15 · estado editorial y distractores de delegación — 05/11/2026

Se leyó primero `PROJECT_RULES.md` y el apartado final vigente (§70) de este registro. Al inicio, HEAD de `main` era `619655930c75ab019f1f05d76c94017fac154cbf`, comprobado mediante búsqueda de commits. Se inspeccionaron `content/diputacion-toledo-auxiliar-c2/tema-15/manual.md` y las 20 preguntas de `tema-15/preguntas.json`. No se han reabierto convocatorias descartadas ni adelantado el T06 OAPGT.

### Cambios reales

1. **Manual T15:** la cabecera `CONTENIDO COMPLETO Y COTEJO NORMATIVO 29/10/2026` era contradictoria con la advertencia de falta de certificación. Se sustituyó por `EN_AUDITORIA — pendiente de certificación integral`, conservando la fecha de octubre como hito histórico. Commit `a3cdb9467a9c55d8774e7e5687757e1949998001`.
2. **Banco T15-002:** se reemplazaron tres distractores manifiestamente absurdos por confusiones jurídicamente relevantes sobre **titularidad**, **ejercicio**, **delegación de firma** y **desconcentración**. Se precisaron enunciado, justificación de las cuatro alternativas y trampa, conservando ID, posición correcta **B** y 20 ítems. Cotejo normativo de la distinción: **Ley 40/2015, arts. 8.1, 8.2, 9.1 y 12** ([BOE consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a8)). Commit `3ea0f7b0c437a4e4d271ed95967374e99b7202d6`.

### Validación y límites

Se comprobó el parseo JSON del banco antes de persistir y la permanencia de 20 preguntas. La consulta del estado combinado para `619655930c75ab019f1f05d76c94017fac154cbf` devolvió **cero estados** y la consulta de workflow runs del conector devolvió **lista vacía** (el conector solo recupera determinadas ejecuciones PR): **no demuestra ni éxito ni fallo** de CI/Pages. El acceso directo a API pública desde el contenedor falló por DNS. **CI/Pages de los commits nuevos y del commit de registro: no acreditados**. No se ha ejecutado `npm test` ni prueba de navegador real, móvil, PWA o accesibilidad. El cotejo de la pregunta T15-002 no certifica las otras 19 preguntas ni todo el manual; verificar el tenor consolidado oficial y su fecha de corte antes de cerrar integralmente.

**Cobertura sin incremento: 51/121 bancos previamente cotejados y 0/121 temas certificados integralmente.** Siguiente lote: comprobar por SHA exacto las ejecuciones de CI/Pages y corregir cualquier fallo; continuar T15 (arts. 8–24 y 54–80, claves y distractores restantes), T16 y revisión documental T14; priorizar La Puebla y UC3M por exámenes inminentes. T06 OAPGT reservado al final. Olías: discrepancia de plazas y plazo sin resolver, sin presentar solicitudes.


## 72. Diputación de Toledo Auxiliar C2 · Tema 16 Windows 11 Pro — **05/11/2026**

### Auditoría focal y corrección efectiva

**Motivo:** el banco presentaba **tres repeticiones de conceptos** y distractores imposibles, pese a conservar las 20 preguntas regladas. Se inspeccionaron el **programa oficial** del Anexo XI, el **manual T16**, sus **20 preguntas** y la matriz de cobertura. Se contrastaron con fuentes oficiales Microsoft sobre atajos, extensiones y dispositivos.

| ID | Antes | Corrección publicada | Clave |
|---|---|---|---|
| **DT-C2-T16-007** | Duplicaba copiar/mover de T16-002 | Cambiar `.docx` por `.pdf` **no convierte el archivo** | **C** |
| **DT-C2-T16-008** | Duplicaba rutas UNC de T16-005 | **Ctrl+Mayús+N** (carpeta), frente a **Ctrl+N, F2, Alt+Entrar** | **A** |
| **DT-C2-T16-010** | Duplicaba vista del Explorador de T16-004 | **Alt+Entrar** (propiedades), frente a atajos confundibles | **C** |
| **DT-C2-T16-014** | Distractores «BIOS / navegador / Papelera» | Rutas reales de Configuración; válida **Bluetooth y dispositivos > Impresoras y escáneres** | **C** |

Se conservaron las **20 preguntas**, las **80 opciones**, los identificadores y las posiciones de solución; claves **A5/B4/C6/D5**. La revisión de los **cuatro ítems** incluye sus **16 alternativas** exactas, razón individual de aceptación o rechazo y **¡Foco Examen!** en [`cotejo-focal-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-16/cotejo-focal-2026-11-05.md). No se atribuye ese cotejo a las otras **16 preguntas/64 alternativas**.

Actualizados [`preguntas.json`](content/diputacion-toledo-auxiliar-c2/tema-16/preguntas.json), [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-16/manual.md) y [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-16/fuentes.md): se saneó la falsa apariencia de certificación integral heredada del encabezado «CONTENIDO REVISADO Y COMPLETADO», se agregó tabla de diferencias de examen y se enlazaron fuentes oficiales Microsoft.

Fuentes comprobadas:
- [**Métodos abreviados del Explorador de Windows**](https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows).
- [**Extensiones de nombre de archivo en Windows 11**](https://support.microsoft.com/es-es/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).
- [**Agregar impresoras en Windows 11**](https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows).
- [**Instalar y usar un escáner**](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows).

### Control de regresión y alcance

Creada [`tests/validate-diputacion-c2-t16-focal.mjs`](tests/validate-diputacion-c2-t16-focal.mjs) e incorporada a **`npm test`**. Comprueba **20/80**, IDs únicos, **distribución A5/B4/C6/D5**, cuatro claves originales, ausencia de los distractores triviales, fuentes y estado editorial sin cierre anticipado.

**No hay certificación jurídica-editorial ni funcional integral**. Son fuentes técnicas del fabricante, no un texto legal con artículos. **Prueba real de Windows 11 Pro, navegador, impresora/escáner y accesibilidad:** pendiente. **Resultado de CI/Pages del último SHA:** consultar runs de ese commit; no deducirlo de los anteriores. **Cobertura global sin incremento: 51/121 bancos auditados individualmente, 0/121 cerrados en cinco capas.**

**Próximos pasos:** completar las otras **16 preguntas/64 distractores del tema 16**, auditar **T15 Ley 40/2015** y **T14 certificados**, con fuentes oficiales y controles de duplicidad; el **T06 OAPGT** sigue reservado para cuando se disponga de los Estatutos consolidados. La Puebla (examen **14/11**) y UC3M (examen **21/11**) siguen siendo las convocatorias más inmediatas.


## 73. Diputación C2 T16 · instalación manual de impresoras y verificación CI/Pages — 05/11/2026

Se leyeron primero `PROJECT_RULES.md` y el apartado final vigente (§72); HEAD de partida `8b64e7a01aad6c169579b2036cb12d45761b0779`. Consulta directa de GitHub Actions por **SHA exacto**: `Validar OpoWeb v2` **success** run **41984081199** y `pages build and deployment` **success** run **41984080596**, ambos completados para ese SHA. El estado combinado clásico `pending` sin checks no contradice los workflows de Actions verificados. No constituye prueba de navegador.

**Corrección focal nueva:** en `content/diputacion-toledo-auxiliar-c2/tema-16/preguntas.json`, **DT-C2-T16-015** tenía distractores absurdos (formatear ordenador, borrar carpetas, imposibilidad perpetua). Se sustituyeron por tres confusiones plausibles: cambiar predeterminada, vaciar cola, habilitar detección de redes; la clave **D** sigue siendo instalación manual con verificación de conexión, puerto/dirección y controlador. Se actualizó explicación individual de las cuatro alternativas y trampa de examen. **Fuente técnica oficial:** https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows. **Commit de contenido:** `a08b78b2b8e449b2f482366b4854c5f1b1185f30`. No se alteran los otros 19 ítems ni se afirma revisión integral. Comprobación estructural: JSON serializado con 20 preguntas, ID T16-015 y posición D conservados; CI/Pages del nuevo SHA aún por comprobar.

**Cobertura sin incremento:** 51/121 bancos previamente cotejados; **0/121 temas certificados integralmente**. Pendientes las otras preguntas y alternativas de T16, contraste completo de T14–T15, validación funcional real (navegador, móvil, PWA, accesibilidad) y prioridad transversal de La Puebla (14/11) y UC3M (21/11). T06 OAPGT reservado al final; Olías sin resolver y sin presentar solicitudes.


## 74. Diputación de Toledo C2 · T16 Windows 11 Pro — banco 20/80 y regresión resuelta (05/11/2026)

**Origen:** BOP Toledo **197 de 14/10/2026**, Anexo XI, programa oficial literal del Tema 16. Tras los §§72–73, se reescribieron los **15 ítems restantes** (001–006, 009, 011–013, 016–020) con distractores de funciones reales de Windows. Las **5 preguntas** ya corregidas (007, 008, 010, 014 y 015) se revisaron de nuevo. Se conservaron **20 preguntas, 80 alternativas, claves originales y reparto A5/B4/C6/D5**. El cotejo completo está en [`cotejo-banco-completo-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-16/cotejo-banco-completo-2026-11-05.md), con **80 motivos individualizados**. Fuentes técnicas: documentación de Microsoft Support/Learn sobre Explorador, rutas UNC, atajos, papelera, impresión, escáner, dúplex y OCR.

**Archivos modificados:** [`preguntas.json`](content/diputacion-toledo-auxiliar-c2/tema-16/preguntas.json), [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-16/manual.md), [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-16/fuentes.md), [`matriz.json`](content/diputacion-toledo-auxiliar-c2/tema-16/matriz.json), nueva prueba [`validate-diputacion-c2-t16-bank-complete.mjs`](tests/validate-diputacion-c2-t16-bank-complete.mjs), registrada en `npm test`.

**Fallo detectado y reparado:** la primera modificación de `matriz.json` retiró por accidente la marca `PENDIENTE_COTEJO_INTEGRAL` que exige `tests/validate-diputacion-c2-matrices.mjs` (GitHub Actions: error «Never overclaim certification»). Se restituyó la marca, preservando la metadata del banco. Último commit de corrección **`581bc3246ee910dd0c55981fff1dc92fe2e7b1f0`**, workflow «Validar OpoWeb v2» **success**, ejecución **41986503538**; Pages **41986503122** figuraba `in_progress` en la comprobación inicial y exige verificación específica posterior.

**Alcance real:** cotejo técnico-editorial de un banco, **NO** recertificación de las afirmaciones del manual ni prueba funcional real de Windows, navegación, móvil, PWA, impresora/escáner o accesibilidad. Sin elevar unilateralmente la cobertura global de referencia (**51/121 bancos; 0/121 cierres integrales**) hasta recalcular y demostrar sus criterios. **Siguiente trabajo:** banco T15 Ley 40/2015 y pendientes T14, con cotejo BOE consolidado; T06 OAPGT aplazado por fuentes estatutarias aún sin cerrar.


## 75. Diputación Toledo Auxiliar C2 · T15 Ley 40/2015 — ocho preguntas revisadas en BOE (05/11/2026)

### Reanudación, fuentes y alcance

Tras §74, se ha retomado la auditoría del **tema 15**, cuyo programa literal es «Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público: Los órganos de las Administraciones Públicas. Administración General del Estado» (BOP Toledo **197, 14/10/2026**, Anexo XI, CSV **2026.00004759**). Se comprobó que el último consolidado publicado en el BOE de [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) lleva actualización del **02/08/2024**. También se cotejó la [LO 2/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2024-15936), publicada el **02/08/2024** y con entrada en vigor el **22/08/2024**.

**Trabajo ejecutado:** corregidas **8 preguntas** y analizadas **32 alternativas** exactas (T15-003, 007, 008, 009, 011, 014, 019 y 020). Se eliminaron distractores sin relevancia y se introdujeron confusiones sustantivas sobre:

| ID | Fundamento | Regla cotejada |
|---|---|---|
| **T15-003** | **Art. 10.1–2** | **Avocación**: acuerdo motivado y notificación a interesados |
| **T15-007** | **Art. 12** | **Delegación de firma**: no cambia competencia ni requiere publicación |
| **T15-008** | **Art. 13** | **Suplencia**: vacante/ausencia/enfermedad/abstención/recusación, sin publicación necesaria |
| **T15-009** | **Art. 9.2.b** | No se delega la adopción de disposiciones de carácter general |
| **T15-011** | **Art. 17.2** | En general **Presidente + Secretario + mitad** de miembros |
| **T15-014** | **Art. 55 bis, LO 2/2024** | **40–60 %** por departamento; régimen transitorio diferenciado |
| **T15-019** | **Art. 72.4** | **Delegado** nombrado mediante real decreto del **Consejo de Ministros** a propuesta del **Presidente del Gobierno** |
| **T15-020** | **Arts. 55.4 y 74** | **Subdelegado**: AGE, **nivel Subdirector General**, dependencia de **Delegado** |

La pregunta **T15-014** sustituyó otra anterior y ahora cubre una reforma efectiva de **2024** que estaba desarrollada en el manual pero no examinada en el banco. Se mantuvo el contenido del **art. 61** sobre la dirección ministerial en el manual.

**DT 1.3 LO 2/2024:** la regla de **40–60 %** resulta aplicable a los nombramientos y designaciones posteriores a su entrada en vigor (**22/08/2024**). La garantía global del equilibrio en AGE y sector institucional estatal debe alcanzarse en un máximo de **5 años** desde esa fecha (horizonte **22/08/2029**). El plazo global **no** pospone la regla aplicable a nuevos nombramientos hasta **2029**.

### Evidencias preservadas

- [**Banco T15**](content/diputacion-toledo-auxiliar-c2/tema-15/preguntas.json) con **20 preguntas / 80 alternativas**, posiciones originales y distribución **A5/B5/C5/D5**.
- [**Informe de distractores cotejados**](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-focal-2026-11-05.md), análisis literal **8 × 4 = 32** con explicación individual y bloque **¡Foco Examen!**.
- [**Manual**](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md): incorporación de tabla de vigencia y porcentajes de **55 bis**.
- [**Fuentes**](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [**matriz**](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json) con auditoría parcial diferenciada del estado integral.
- Nueva prueba [`validate-diputacion-c2-t15-focal.mjs`](tests/validate-diputacion-c2-t15-focal.mjs), añadida al `npm test`, que exige existencia de **8 IDs**, **32 alternativas literales** en el informe, mismas claves, referencias BOE, **40–60 %**, régimen transitorio y estado **PENDIENTE_COTEJO_INTEGRAL**.

### Verificación de CI y límites

La ejecución **41987477311** de **«Validar OpoWeb v2»** finalizó en **success** para el commit de integración `4dedf311a7b0f0cb5ee5043c17a13b5e26421d28`. La ejecución de despliegue **41987477085** estaba todavía **pending** en esa consulta; no se atribuye éxito hasta verificar el resultado del SHA correspondiente. Se comprobó también que el último commit técnico del T16 `581bc3246ee910dd0c55981fff1dc92fe2e7b1f0` obtuvo **CI success (41986503538)** y **Pages success (41986503122)**.

**No es cierre jurídico del tema 15:** faltan cotejar exhaustivamente **12 preguntas/48 alternativas** restantes y los **1.310 renglones** del manual; no se ha probado navegador real, móvil, PWA ni accesibilidad. No incrementar por esta revisión la cobertura acumulada de certificación integral (**0/121**). Tampoco interpretar los **51/121** bancos de referencia histórica como certificación de cinco capas. **T06 OAPGT** permanece aplazado hasta completar fuentes estatutarias.

**Siguiente tarea:** revisar **T15-001, 002, 004–006, 010, 012–013 y 015–018**, contrastar el manual completo con arts. **5–24** y **54–80**; después volver a T14 certificados. Mantener prioridad de exámenes de **La Puebla (14/11/2026)** y **UC3M (21/11/2026)**.


## 76. Diputación C2 · Tema 15 Ley 40/2015: banco jurídico 20/80 y dos precisiones del manual — 05/11/2026

### Reanudación y contraste primario

Partiendo del §75 y del commit `47e8e090c04484980f649e8616197ec7f920301e`, se examinó el último texto consolidado de la [**Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) (**última actualización publicada el 02/08/2024**, fuente informativa consolidada BOE). Se contrastaron específicamente **arts. 8, 11, 14, 17, 23, 24, 55, 63, 64, 65, 69, 72 y 74**.

**Resultado del banco:** se auditaron individualmente las **12 preguntas y 48 alternativas** que quedaban pendientes del tema 15: **001, 002, 004, 005, 006, 010, 012, 013, 015, 016, 017 y 018**. Se modificaron **10 enunciados y/o alternativas**, conservando **002** y **004** ya cotejados en revisiones previas. La suma de los informes da **20/20 preguntas y 80/80 alternativas** con referencia jurídica y motivos individuales; posiciones de las respuestas **A5/B5/C5/D5**, sin cambios de clave. Archivo: [`preguntas.json`](content/diputacion-toledo-auxiliar-c2/tema-15/preguntas.json); nuevo [informe de **12 preguntas / 48 alternativas**](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-segundo-lote-2026-11-05.md), complementario al [primer informe **8/32**](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-focal-2026-11-05.md).

### Materias mejoradas y datos de examen

| Ítem | Fuente primaria | Trampa cotejada |
|---|---|---|
| **T15-001** | **8.1, 11.2, 13.2** | Competencia **irrenunciable**, técnicas de ejercicio no equivalen a cesión de titularidad |
| **T15-005** | **23.2.b** | **Consanguinidad 4.º** frente a **afinidad 2.º** |
| **T15-006** | **24.3–5** | **Recusado día siguiente** frente a **superior 3 días** cuando se niega la causa |
| **T15-010** | **14.3** | Conflicto de atribuciones: **misma Administración + sin jerarquía + no finalizado** |
| **T15-012** | **17.2, 17.5** | **Constitución** del órgano distinto de **mayoría de votos** para acuerdos |
| **T15-013** | **24.1–2** | Recusación por **interesados**, **por escrito**, en cualquier momento de la tramitación |
| **T15-015–018** | **55.3, 63–65** | **Subsecretario directivo**, **Secretario General categoría Subsecretario**, **SGT categoría Director General** |

Los distractores nuevos se centran en órganos y técnicas jurídicas realmente confundibles, sin la opción absurda que se descarta por lógica básica. Se utilizaron los vínculos a artículos del **BOE consolidado** en el banco y el informe. El contenido se mantiene dentro del epígrafe literal del programa (BOP Toledo **197/2026**, **14/10/2026**, Anexo XI, CSV **2026.00004759**).

### Dos correcciones materiales del manual

1. **Nombramiento del Secretario General, artículo 64.3:** la tabla solo señalaba «propuesta del Ministro». El texto legal incluye **propuesta del titular del Ministerio o del Presidente del Gobierno**; corregida en [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md).
2. **Subdelegaciones y comunidades uniprovinciales:** se aclaró la lectura conjunta de los **arts. 69.4 y 74**: Subdelegado en cada provincia de **CCAA pluriprovinciales**; en **uniprovinciales**, Subdelegación posible por **real decreto** en los supuestos legalmente previstos; si no hay Subdelegado, **Delegado** asume sus funciones provinciales. Se distingue además del **art. 72.5**, donde la **suplencia del propio Delegado** uniprovincial sin Subdelegado corresponde al **Secretario General**. Tabla comparativa y bloque «¡Foco Examen!» incorporados; constan fuentes en [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md).

### Control reproducible y límites

- Nueva prueba [`validate-diputacion-c2-t15-bank-complete.mjs`](tests/validate-diputacion-c2-t15-bank-complete.mjs) incorporada a `npm test`. Verifica **20 IDs únicos**, **80 opciones literales**, informes para los dos lotes, claves inalteradas y estado pendiente del manual. Se reforzó además para vigilar **art. 64.3** y la excepción territorial de **69/72/74**.
- Ejecución de CI **41988336926** para el commit `548d0d205da9485e8287f5668ea97ec0eb5070de`: **success**. Tras la corrección material del manual, CI **41988527901** para `82185f76c3c13f314c92d0039d58b9b8a1967714`: **success**. Los sucesivos despliegues Pages intermedios cancelados por concurrencia **no constituyen errores jurídicos ni acreditan un despliegue individual**.
- **Último SHA de este bloque y su Pages:** comprobar GitHub Actions por SHA, sin dar por verificado un despliegue pendiente. **No** se ejecutó un navegador real, Windows 11, móvil, PWA o auditoría de accesibilidad.

**Estado:** `BANCO_20_80_COTEJADO`, **manual T15 EN_AUDITORIA**, pendientes aún sus aproximadamente **1.310 líneas** de contraste completo, matriz editorial integral y prueba funcional del portal. **No declarar tema `AUDITADO`**, ni recalcular al alza los históricos **51/121 bancos** y **0/121 cierres integrales** sin criterio consistente en todo el repositorio.

**Siguiente tarea prioritaria:** cotejo completo del **manual T15 (Ley 40/2015, arts. 5–24 y 54–80)**, continuando desde errores detectados en estructura AGE; después **Tema 14, certificado electrónico/eIDAS**. **Tema 6 OAPGT** permanece aplazado hasta verificación de sus Estatutos íntegros vigentes. Mantener prioridad temporal de **La Puebla 14/11/2026** y **UC3M 21/11/2026**.


## 77. Diputación C2 T15 — conciliación editorial del banco y comprobación CI/Pages por SHA (05/11/2026)

**Reanudación obligatoria:** consultados `PROJECT_RULES.md`, último §76, commits recientes y Actions del HEAD inicial `2c982791c257424d0459e7a1d89fadb5a670cf53`. Para **ese SHA exacto**, `Validar OpoWeb v2` **success** (run **41988684592**) y `pages build and deployment` **success** (run **41988684841**). Enlaces de evidencia: https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41988684592 y https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41988684841. Son verificaciones de Actions, **no** prueba funcional real en navegador.

**Hallazgo y corrección editorial:** el encabezado del manual T15 todavía decía que **12 preguntas** del banco estaban pendientes, pese a que el §76 y los informes `cotejo-focal-2026-11-05.md` (8/32) y `cotejo-segundo-lote-2026-11-05.md` (12/48) ya acreditan el cotejo **20/80**. Se rectificó exclusivamente esa declaración desactualizada en `content/diputacion-toledo-auxiliar-c2/tema-15/manual.md` para distinguir el historial del primer lote del estado actual del banco, sin fingir cierre del manual. **Commit de corrección:** `c75d7ea172b92c31cc3f2e2850c65543c1d55e1c`. El nuevo SHA requiere comprobación posterior de CI/Pages; no se le atribuye éxito todavía.

**Fuente normativa primaria preservada para la revisión sustantiva:** Ley 40/2015, arts. 5–24 y 54–80, texto consolidado BOE https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566; fuente del epígrafe BOP Toledo 197, 14/10/2026, Anexo XI, CSV 2026.00004759. Esta ejecución **no** constituye nuevo cotejo jurídico de artículos o distractores: solo consistencia editorial y comprobación CI/Pages.

**Faltantes y siguiente lote:** revisar **manual T15 completo** artículo por artículo frente a Ley 40/2015; comprobar CI y Pages de `c75d7ea1`; contrastar luego T14/eIDAS, priorizando en paralelo La Puebla (14/11) y UC3M (21/11). No se realizaron pruebas reales de navegador, móvil, PWA o accesibilidad. Permanecen **51/121 bancos de referencia histórica** y **0/121 temas certificados integralmente**; T06 OAPGT reservado al final; Olías sin resolver. No usar estas cifras como porcentaje de exactitud.


## 78. Diputación C2 T15 — estado operativo coherente y comprobación CI del HEAD (§77) (05/11/2026)

**Inicio obligatorio:** leídos `PROJECT_RULES.md`, último §77 y commits recientes. HEAD inicial `149d20686ac828c6418021f55008367d8cf98593`. Para ese SHA exacto, workflow **Validar OpoWeb v2** `success`, ejecución **41991673719** (https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/41991673719). La consulta de Actions no permite afirmar en este bloque un Pages exitoso del mismo SHA: **Pages por confirmar**. Éxito CI no certifica derecho, pedagogía ni navegador.

**Hallazgo editorial reproducible:** la primera línea operativa del manual T15 todavía anunciaba el valor heredado `EN_REVISION_USUARIO` fechado 02/11, contradictorio con el estado permitido `EN_AUDITORIA` y con el banco 20/80 cotejado en §§75–77. Corregido el encabezado de `content/diputacion-toledo-auxiliar-c2/tema-15/manual.md` para separar **banco cotejado 20/80** de **manual integral sin certificar**; commit **`2ac1ea8a3bfdff61b5272490b711bf7d4308727a`**. No se modificaron preguntas, claves, matrices ni se reclamó nuevo cotejo normativo. Fuente normativa pendiente de contraste integral: Ley 40/2015 arts. 5–24 y 54–80, BOE https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566; programa BOP Toledo 197 de 14/10/2026, Anexo XI, CSV 2026.00004759.

**Validación y pendientes:** CI/Pages del commit de contenido `2ac1ea8a` y del commit de registro posterior aún por comprobar en sus SHA exactos. No se ejecutaron pruebas de navegador, móvil, PWA ni accesibilidad. Cobertura de referencia sin elevar: **51/121 bancos históricos; 0/121 temas certificados integralmente**. Siguiente lote: **cotejar artículo por artículo el manual T15 completo**, con prioridad paralela La Puebla (14/11) y UC3M (21/11); después T14/eIDAS. T06 OAPGT reservado al final; Olías mantiene discrepancias pendientes. No reabrir Carranque ni Las Ventas.


## 79. Diputación de Toledo C2 · Tema 15: cotejo jurídico focal del manual, artículos 17–19, 22–23 — 05/11/2026

**Reanudación:** consultados `PROJECT_RULES.md`, último §78, GitHub HEAD `99da077651f1` y los dos workflows de Actions del SHA: **`Validar OpoWeb v2` success** (run **41999533517**) y **`pages build and deployment` success** (run **41999532884**). Son verificaciones técnicas de Actions, **no** una certificación del contenido ni prueba de navegador real.

Se accedió al texto [**BOE consolidado de la Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), cuya última actualización publicada es **02/08/2024**, y se cotejaron pasajes concretos del manual de Diputación C2 **T15**, correspondientes a los **arts. 17, 18, 19, 22 y 23**. **Fuente del programa:** BOP Toledo **197/2026 de 14/10/2026**, Anexo XI, CSV **2026.00004759**.

### Cambios efectivos frente al BOE

| Precepto | Omisión o imprecisión corregida | Regla comprobada |
|---|---|---|
| **17.2–3** | Cuórum ordinario desarrollado sin la excepción de reunión sin convocatoria | **Secretario + todos los miembros**, o suplentes, con **decisión de todos** de constituirse sin convocatoria previa |
| **17.5–6** | No constaba exención de responsabilidad de miembros que votan en contra o se abstienen | **Mayoría de votos** para acuerdos; exención por voto contrario o abstención, con especialidad del **art. 19.3.c** en la **AGE** |
| **18.1–2** | Grabaciones sin detallar certificado del Secretario; acta «siguiente» sin matiz | La grabación unida al acta debe acompañarse de **certificación del Secretario sobre autenticidad e integridad**; acta en la **misma reunión o inmediata siguiente**, con **visto bueno del Presidente** |
| **19.3.a** | Falta de plazo mínimo específico para convocatoria de órganos colegiados **AGE** | **Al menos 2 días de antelación** y documentación accesible en el mismo plazo |
| **19.5** | Voto particular escrito sin plazo destacado | **2 días** para presentarlo por escrito |
| **22.1–3** | Enumeración de creación sin exigencia de publicación explícita | **Norma específica publicada en BOE** en supuestos tasados; **Real Decreto / Orden conjunta / Orden ministerial** según órgano; grupos de trabajo no tienen efectos directos frente a terceros |
| **23.2.e** | Redacción abreviada de sujetos y servicios profesionales | Relación de servicio con persona **directamente interesada** o prestación de servicios profesionales en **dos últimos años** |

**Documentos:** correcciones incorporadas en [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md); evidencia comparativa BOE, tabla y focos de examen en [`cotejo-manual-colegiados-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-manual-colegiados-2026-11-05.md); ampliadas [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [`matriz.json`](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json) con estado explícito **focal, pendiente de cotejo integral**. Se evitó repetir las tres formas del art. 22.2 tras añadir su tabla. El banco continúa con **20 preguntas y 80 alternativas**, **A5/B5/C5/D5**, sin cambio de claves.

### Control y cola de trabajo

Creada [`tests/validate-diputacion-c2-t15-colegiados-manual.mjs`](tests/validate-diputacion-c2-t15-colegiados-manual.mjs), integrada en `npm test`: exige regla de unanimidad en reunión sin convocatoria, responsabilidad/votación, certificación de grabaciones, dos plazos del art. 19, publicación BOE del art. 22, bienio del art. 23 y preservación de la marca `PENDIENTE_COTEJO_INTEGRAL`.

**Commit de integración:** `688f6b8b0fc0dba683e5ca911037a996aabb8cd7`. **Validar OpoWeb v2 success**, run **42004620218**, comprobado para ese SHA. **Despliegue de Pages** de esa versión: verificar run **42004620592**; no declarar éxito sin confirmación del estado de ese mismo SHA.

**Sin elevar cobertura:** los históricos de referencia siguen siendo **51/121 bancos** y **0/121 temas certificados integralmente**. Este bloque corrige omisiones y ambigüedades de algunos artículos; **no** acredita cotejo artículo por artículo de las **más de 1.300 líneas** del manual ni navegación real, móvil/PWA o accesibilidad.

**Siguiente paso sustantivo:** continuar contraste jurídico por tramos del manual **T15**, especialmente **arts. 5–14 y 54–80**, con foco en órgano competente, cuantías, plazos, mayorías, excepciones y su reflejo exacto en el contenido; después volver a **T14 (eIDAS / certificados electrónicos)**. No anticipar T06 OAPGT sin Estatutos consolidados, ni reabrir convocatorias descartadas. Mantener atención a exámenes de La Puebla (**14/11**) y UC3M (**21/11**).


## 80. Diputación Toledo C2 T15 · contrastes jurídicos AGE arts. 9, 63, 64 y 73 (05/11/2026)

### Punto de partida y fuentes oficiales

Se han comprobado `PROJECT_RULES.md`, el último §79 y los workflows del HEAD inicial `e2ddf94eac4b316af23744fe48e6f23688766b7b`. **CI success**, ejecución **42004794885**, y **Pages success**, ejecución **42004793852**, acreditados por SHA exacto. Se consultó [**BOE consolidado Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), cuya última actualización publicada es **02/08/2024**, y la reforma del **Real Decreto-ley 6/2023** de **20/12/2023**, aplicable desde **21/12/2023** a los arts. 63.3 y 66.2. El texto consolidado es informativo y deben consultarse las publicaciones oficiales para valor jurídico.

### Correcciones reales del manual

| Artículo | Hallazgo comprobado | Corrección integrada |
|---|---|---|
| **9.1 y 9.3** | «Aprobaciones previas según la relación» sin identificar **órganos** | Tabla con **órgano ministerial del delegante**, **superior común** si órganos no jerárquicos del mismo Ministerio, **superior del delegado** si son de distintos Ministerios; reglas especiales de organismos y entidades; se separa **aprobación previa** de **publicación posterior** |
| **63.3** | El manual decía únicamente **funcionarios de carrera A1**, omitiendo jubilación | Redacción vigente permite también **personas que perdieron la condición funcionarial por jubilación**, reforma vigente desde **21/12/2023**; se diferencia del **Secretario General Técnico (65.3)** y de **Director General (66.2)** |
| **64.3** | El cuerpo del manual continuaba diciendo «propuesta del Ministro», pese a que la tabla anterior ya se había corregido | Para **Secretario General**, propuesta del **titular del Ministerio o del Presidente del Gobierno**, mediante **real decreto del Consejo de Ministros** |
| **73.1.b.4.º** | Omisión del informe periódico concreto | **Delegado del Gobierno** eleva **ANUALMENTE** informe sobre funcionamiento de servicios públicos estatales, a través del departamento legalmente indicado |
| **73.1.d.1.º–2.º** | Recursos y suspensión resumidos sin sus condiciones | **Informe previo obligatorio del Ministerio competente por materia** para determinados recursos ante el Delegado; impugnaciones de actos propios no finales corresponden al **Ministerio**; distinción entre **suspender** y **proponer suspensión**; responsabilidad patrimonial la resuelve **titular del Ministerio competente** |
| **73.2–3** | No figuraban con suficiente detalle **potestad expropiatoria** y **jefatura autonómica FFCCSE** | **Delegado**: potestades sancionadora/expropiatoria, **jefatura FFCCSE a nivel autonómico**, bajo dependencia funcional del **Ministerio del Interior**; **Subdelegado** dirige FFCCSE en la provincia (**75.b**) |

**Archivos modificados:** [manual T15](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md), [fuentes T15](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md), [matriz T15](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json). **Informe autónomo con BOE, diferencias y focos:** [`cotejo-manual-competencias-age-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-manual-competencias-age-2026-11-05.md).

**Banco T15:** permanece en **20 preguntas / 80 alternativas**, distribución **A5/B5/C5/D5**, sin cambio de claves ni aumento ficticio del número de preguntas auditadas. **Tema T15** continúa `EN_AUDITORIA`, el banco sí dispone de dos informes de cotejo 20/80 de un lote anterior.

### Validación y límites

Añadida [`tests/validate-diputacion-c2-t15-competencias-age.mjs`](tests/validate-diputacion-c2-t15-competencias-age.mjs) a `npm test`. Comprueba presencia de las distinciones de arts. **9, 63, 64, 73**, referencias BOE, reforma **2023**, conservación de 20/80 y estado editorial pendiente, sin afirmar que el test de estructura sustituya el cotejo jurídico.

**Último commit de contenido e integración:** `00cfb9effd5dd1163274cfb4112aedcfd3d45abd`. **Workflow «Validar OpoWeb v2» completado con success**, ejecución **42005864669**, confirmado para ese SHA. **Pages del último SHA:** comprobar ejecución **42005863334**; no afirmar despliegue hasta tener resultado concreto.

**Queda pendiente:** contraste completo del resto del manual **arts. 5–14 y 54–80**, verificación de cobertura pedagógica y literalidad en todos sus apartados, pruebas de navegador real, móvil, PWA y accesibilidad. No declarar un tema `AUDITADO` por este lote. **Cobertura histórica de referencia inalterada: 51/121 bancos, 0/121 certificaciones integrales.** Prioridades posteriores **T14 certificados/eIDAS**, T06 OAPGT reservado hasta verificar sus Estatutos. Mantener exámenes **La Puebla 14/11** y **UC3M 21/11** como plazos prioritarios.


## 81. Diputación C2 T15 — contraste focal artículos 5–8 y control de estado (05/11/2026)

**Inicio:** leídos PROJECT_RULES.md, último §80 y commits recientes del repositorio; HEAD observado `80e3f148ad2e9eca1b96c6adeb2dabf070ef871d`. Se consultaron los estados combinados y workflow runs vinculados a ese SHA mediante el conector GitHub: devolvieron listas vacías; **CI y Pages de ese SHA no están acreditados** en esta ejecución. No extrapolar éxito de ejecuciones anteriores. El §80 registra CI success para `00cfb9ef` (run 42005864669), pero Pages de ese SHA sigue pendiente de verificación.

**Fuente oficial contrastada:** BOE, Ley 40/2015, texto consolidado con última actualización publicada el 02/08/2024: https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a5 (arts. 5–8, anclas a5, a6, a7 y a8). El consolidado advierte que es informativo, no sustituye la publicación oficial.

**Comprobación puntual contra `content/diputacion-toledo-auxiliar-c2/tema-15/manual.md`:** art. **5.1, 5.3–4**: disyuntiva de efectos a terceros/actuación preceptiva, tres requisitos mínimos de creación y ausencia de duplicación en la misma Administración, territorio y población: coinciden con el BOE; art. **6.1–2**: publicidad condicionada de instrucciones y no invalidez automática por incumplimiento: coinciden; art. **7**: autonomía o servicios jurídicos sin dependencia ni instrucciones del autor del acto, actuación colegiada: coinciden; art. **8.1–3**: irrenunciabilidad, no alteración de titularidad por delegación/encomienda/firma/suplencia, desconcentración y superior común cuando concurren varios órganos inferiores: coinciden. **Sin cambios en el manual** al no detectar error verificable en estos pasajes; no duplicar correcciones ya correctas.

**Alcance estricto:** revisión focal de esos incisos, **no** auditoría completa de los arts. 5–8, ni de las 20 preguntas/80 distractores en esta ejecución; tampoco se ha validado render, navegación, PWA, móvil o accesibilidad. Se mantienen **51/121 bancos históricos** y **0/121 temas certificados integralmente**. Próximo lote: continuar T15 arts. 9–14 y 54–80 con cotejo de excepciones y tabla de órganos; revisar CI/Pages de SHA exacto, después T14. Prioridad transversal de exámenes La Puebla 14/11 y UC3M 21/11. T06 OAPGT sigue reservado al final; Olías sin resolución de discrepancias.


## 82. Diputación C2 T15 · auditoría jurídico-editorial focal de los artículos 5–14 (05/11/2026)

**Punto de partida:** leído `PROJECT_RULES.md` y el registro central hasta §80; después de la revisión se detectó el **§81**, publicado concurrentemente por la tarea automática, y se continuó desde su versión vigente sin sobrescribirlo. La fuente externa de contraste fue la [**Ley 40/2015 consolidada del BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), última actualización publicada el **02/08/2024** (texto informativo, no sustituto de la publicación jurídica oficial). El epígrafe es el del **BOP Toledo 197/2026, 14/10/2026, Anexo XI, CSV 2026.00004759**.

### Cambios publicados en el manual del T15

Se examinaron **los artículos 5 a 14** contra el texto BOE y se modificaron **12 pasajes** del bloque. Los cambios incorporan tablas de conceptos confundibles, excepciones y bloques **¡Foco Examen!**, preservando la estructura del temario y la literalidad de las reglas jurídicas clave.

| Artículos | Antes / hallazgo | Mejoras incorporadas |
|---|---|---|
| **5.1–4** | Explicación de órgano y duplicidad correcta, pero sin cuadro de evaluación | Tabla de las dos condiciones alternativas del órgano y **tres requisitos mínimos**, con foco de duplicidad de **misma Administración, función, territorio y población** |
| **6.1–2** | Resumen sin referencia a difusión de Transparencia | **Ley 19/2013** y distinción entre publicación **condicionada** de instrucción e invalidez del acto por incumplirla |
| **7** | Independencia jurídica ya explicada | Se precisó actuación **colegiada**, sin dependencia ni instrucciones del **órgano autor** del acto o disposición |
| **8.1–3** | Reglas esenciales ya presentes | Foco sobre diferencia entre **delegación** y **desconcentración**, y **superior común** con varios órganos inferiores |
| **9.5** | Mencionaba únicamente informe | Se incorporó **«dictamen o informe preceptivo»** y tabla: previsión del trámite **no impide delegar**; su **emisión en ese procedimiento sí** |
| **10.1–2** | Avocación correcta | Foco para supuesto de **delegación sin jerarquía**: solo avoca el **órgano delegante** |
| **11.1–3** | Formalización de encomienda escueta | Tabla **misma/distintas Administraciones**, publicación del instrumento y resolución para eficacia, **convenio** y excepción de régimen local |
| **12.1–3** | Delegación de firma correcta | Foco sobre falta de publicación necesaria en **firma** versus publicidad de **delegación de competencias** |
| **13.1–4** | Designación AGE del suplente resumida | Se explicaron **real decreto de estructura / estatutos** y **acto de nombramiento inicial o posterior**, con identificación del **suplido y suplente** |
| **14.1–3** | «Los interesados pueden» impreciso | Se exigió la condición literal **«interesados que sean parte en el procedimiento»** para declinación/inhibición y tabla con tres técnicas |

**Evidencias de esta revisión:**
- [Manual T15 corregido](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md).
- [Informe por artículos 5–14, diferencias, trampas y BOE](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-manual-organos-competencias-2026-11-05.md).
- [Fuentes T15 actualizadas](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [matriz T15](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json), con registro **focal** sin certificación integral.
- Nuevo [control de regresión del bloque](tests/validate-diputacion-c2-t15-organos-competencia.mjs), incorporado a `npm test`. Requiere los diez artículos, **al menos 10 focos de examen**, referencias BOE, hitos de precisión, estado pendiente y preservación de **20 preguntas / 80 alternativas**, claves **A5/B5/C5/D5**.

**Control técnico:** commit de integración **`91aab61b94c9a3d5bee5f328fe1d06edd6293e0f`**, `Validar OpoWeb v2` **success**, run **42006904368**. GitHub Pages para ese mismo SHA (run **42006904242**) se encontraba **in_progress** al consultarlo; no atribuirle éxito sin verificación posterior.

**Alcance honesto:** es un contraste de las reglas esenciales de los **arts. 5–14 del manual**, no certificación de todo el tema ni de la práctica real en navegador, móvil, PWA y accesibilidad. No se ha modificado el banco, ya cotejado en los §§75–76. **Cobertura global histórica sin aumento por esta revisión: 51/121 bancos de referencia y 0/121 temas certificados integralmente.** Reanudar con **manual T15 arts. 54–80** y revisión transversal de la cobertura **15–24**, posteriormente **T14 certificados/eIDAS**; **T06 OAPGT** sigue bloqueado hasta Estatutos consolidados. Mantener prioridad temporal de exámenes **La Puebla 14/11** y **UC3M 21/11**.


## 83. Diputación de Toledo C2 · Tema 15 — cotejo focal AGE artículos 54–80 y corrección material del artículo 75 (05/11/2026)

**Reanudación:** se han leído `PROJECT_RULES.md`, el §82 de este documento, el estado del HEAD y GitHub Actions. Al comenzar, el commit `d0a337531057887f2f8fe02e4ddb64edd1490909` tenía **Validar OpoWeb v2 success** (run **42007093134**) y **Pages success** (run **42007092367**) para el SHA exacto. Fuente jurídica contrastada: [**Ley 40/2015 consolidada, BOE-A-2015-10566**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), última actualización publicada **02/08/2024**. La referencia del programa sigue siendo **BOP Toledo 197, 14/10/2026, Anexo XI, CSV 2026.00004759**.

### Auditoría documentada y errores corregidos

Se cotejaron con el BOE las **reglas principales** de los **artículos 54–80**, incluido **55 bis**, comprobando epígrafes, jerarquías, órganos competentes, especialidades y excepciones, sin atribuirse revisión literal profunda de cada inciso. Se modificaron **11 pasajes** del manual en dos commits, incluidos **dos errores materiales**:

1. **Artículo 75, asunción de funciones del Subdelegado por la sede:** se retiró la aseveración heredada «En provincias donde radique la sede del Delegado, este puede asumir funciones del Subdelegado», porque **no figura en el art. 75**. La **asunción** por el **Delegado** se produce en **CCAA uniprovinciales sin Subdelegado (art. 74, párrafo 2.º)**. Distinto es el supuesto de **suplencia del Delegado (art. 72.5)**, en el que a falta de Subdelegado expresamente designado actúa el **Subdelegado de la provincia sede**. Se incorporó cuadro diferenciador **72.5 / 74 / 75** y foco de examen.
2. **Artículo 68.1:** se corrigió «asistencia directa» por la expresión legal **«gestión directa»**, en su caso. Se completó **art. 68.3**, gestión compartida mediante **Real Decreto**, a cargo del departamento organizativo o **organismo autónomo** vinculado/dependiente, o de la **Subsecretaría ministerial** o un **organismo autónomo** ligado a ella, según la modalidad.

**Otros cotejos y precisiones:** **art. 55.8** (órganos directivos de organismos públicos establecidos en **estatutos**) y **55.10** (régimen de **Ministros / Secretarios de Estado** según Ley del Gobierno y Ley 3/2015); **art. 58.2/4** (Subsecretaría y SGT obligatorias vs Secretarías facultativas; dependencia alternativa de Subdirecciones); **art. 72.5** (suplencia por Subdelegado designado, Subdelegado provincial de la sede o Secretario General uniprovincial); **art. 76.1/2** (órgano proponente para estructura, frente a propuesta conjunta en integración/desintegración); **art. 79.1/3** (asistencia exigida a titulares seleccionados y composición de comisiones autonómicas/provinciales).

| Preceptos | Regla test esencial recuperada |
|---|---|
| **55** | Órganos directivos de **organismos públicos**, determinados por sus **estatutos** |
| **58** | **Subsecretaría + Secretaría General Técnica obligatorias**; **Secretarías de Estado/General potestativas** |
| **68** | **Gestión directa** y modalidades de **gestión compartida por Real Decreto** |
| **72.5** | **Suplencia del Delegado**, orden especial |
| **74–75** | **Asunción de competencias del Subdelegado** en comunidad **uniprovincial sin Subdelegado**; **sede** no confiere esa potestad |
| **76** | **Real Decreto** del Consejo de Ministros; estructura con propuesta de **Ministerio organizativo**, integración con **propuesta conjunta organizativo + sectorial** |
| **79** | Comisiones de asistencia: **pluriprovincial, uniprovincial y cada Subdelegación**, integrantes y asistencia |

**Evidencias versionadas:** [manual corregido](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md), [informe jurídico de los arts. 54–80](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-manual-age-54-80-2026-11-05.md), [fuentes](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [matriz](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json). El informe contiene **matriz por artículo** y diferencia **correcciones expresas** de **reglas principales que ya estaban presentes**.

### Verificación y siguiente prioridad

Nueva prueba [`tests/validate-diputacion-c2-t15-age-54-80.mjs`](tests/validate-diputacion-c2-t15-age-54-80.mjs), enlazada a `npm test`: exige presencia de los artículos, proposiciones clave y **afirmación negativa explícita** que impide volver a incorporar el falso efecto de la provincia sede. Verifica enlaces BOE, estado `PENDIENTE_COTEJO_INTEGRAL` y conservación del banco de **20 preguntas / 80 opciones, claves A5/B5/C5/D5**.

**Último commit técnico:** `5f5f6b2e5778999f3cb84c6e9dd18ec11d685e95`. GitHub Actions **Validar OpoWeb v2 success**, run **42009134707**, comprobado para ese SHA. El **despliegue Pages del mismo SHA**, run **42009133596**, estaba en curso en la última comprobación; verificar antes de adjudicar éxito.

**Estado honesto:** banco T15 **20/80 documentado**, **manual EN_AUDITORIA**. Este cotejo **no equivale** a auditar literalmente todas las letras de las competencias ministeriales (**arts. 61–62**) y territoriales (**73–79**), ni comprueba navegador real, móvil, PWA o accesibilidad. Mantener las referencias históricas **51/121 bancos y 0/121 certificaciones integrales** sin recalcularlas por este lote.

**Siguiente tarea activa:** cotejo jurídico pormenorizado de los **arts. 61–62 y 73–79**, incluidas potestades, excepciones y competencias de los órganos; después **T14 certificados electrónicos/eIDAS**. **T06 OAPGT** sigue bloqueado hasta contrastar Estatutos íntegros. Conservar prioridad de exámenes de La Puebla (**14/11/2026**) y UC3M (**21/11/2026**). No reabrir convocatorias descartadas.


## 84. Control de concurrencia y CI del cotejo T15 61–62/73–75 (05/11/2026)

**Inicio obligatorio:** leídos `PROJECT_RULES.md` y el último apartado efectivo (§83) del registro central, además de los commits recientes y ejecuciones de Actions. Tras el §83 existen commits de otro lote que **todavía no están incorporados en este registro**: `937363c4` (fuentes), `62e3afad` (metadatos), `d71e8d3a` (aserciones por letras de arts. 61/62 y excepciones 73/75), `c047de27` (ajuste de aserciones a tipografía real) y `4b9ccde9c75dd83d9a80a83a37f3117c7e5186b7` (integración en npm test). **No se duplicaron estos cambios concurrentes** ni se atribuye aquí cotejo jurídico nuevo de sus alternativas: los informes de evidencia deberán revisarse para acreditar el alcance exacto.

**CI por SHA exacto:** `4b9ccde9c75dd83d9a80a83a37f3117c7e5186b7` → workflow **Validar OpoWeb v2 success**, run **42014534946** (05/11/2026 10:54 UTC). **GitHub Pages** para ese mismo SHA → run **42014534591 in_progress** al consultar; no se declara desplegado. Para `e1b28c9814` sí constan CI success **42014180974** y Pages success **42014177619**, sin extrapolarlo a commits posteriores. Los Pages de `c047de27`, `d71e8d3a`, `62e3afad` y `937363c4` terminaron **cancelled** por sucesión de pushes; sus CI respectivos constan **success**.

**Resultado del control:** evidencia técnica positiva para el último SHA, sin equivalencia con exactitud jurídica ni pruebas reales de navegador. **Cobertura sin incremento:** 51/121 bancos de referencia histórica y **0/121 temas certificados integralmente**. El manual T15 continúa `EN_AUDITORIA`; queda por verificar la correspondencia exacta de cada letra de arts. 61–62 y excepciones de 73–79 con BOE y su trazabilidad en el informe, además de pruebas móvil/PWA/navegación. Después priorizar La Puebla (examen 14/11) y UC3M (21/11) y T14; OAPGT T6 reservado para el final. No reabrir Carranque ni Las Ventas ni dar por resueltas las discrepancias de Olías.


## 85. Diputación Toledo C2 T15 — cotejo BOE de competencias arts. 61, 62, 73 y 75, y prueba por letra (05/11/2026)

**Reanudación con concurrencia controlada:** consultado el §84 incorporado por otra ejecución y actualizado el SHA del registro; se conserva íntegramente ese estado y **no** se duplican sus modificaciones. Se comprobó directamente el [**BOE consolidado de la Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), última actualización publicada **02/08/2024** (informativo), en los artículos [**61**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a61), [**62**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a62), [**73**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a73) y [**75**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a75), dentro del epígrafe del **BOP Toledo 197/2026, 14/10/2026, Anexo XI, CSV 2026.00004759**.

### Cotejo jurídico y correcciones materiales

| Precepto | Hallazgo anterior | Corrección verificable en el manual |
|---|---|---|
| **61.a–t**, incluida **ñ** | Las competencias de los **Ministros** estaban resumidas en cuatro bloques sin correspondencia por letra. | Matriz de **21 letras** con reglas de gastos y nombramientos, **comisiones de servicio g)**, **Conferencias sectoriales h)**, **revisión de oficio j)**, **recursos y lesividad ñ)**, **planes de empleo q)**, **RPT r)** y **separación del servicio s)**. |
| **62.1 y 62.2.a–k** | Las competencias de **Secretarios de Estado** omitían funciones y condiciones. | Matriz de **11 letras** del apartado 2; **autorización previa contratación organismos autónomos e)**, **comisiones de servicio f)**, **recursos de órganos directamente dependientes i)** y límites de subvenciones/gastos. |
| **73.1.c** | Comunicación/cooperación entre Administraciones genérica. | Se precisaron tres subincisos: **intercambio de información** con CCAA y EELL mediante presidentes, **convenios de financiación estatal y seguimiento**, y participación en comisiones mixtas/bilaterales. |
| **73.1.d.3.º** | Referencia indeterminada a acciones. | **Conflictos de jurisdicción, conflictos de atribuciones, recursos y otras acciones**, promovidos o interpuestos según corresponda. |
| **73.1.e.1–4.º** | Políticas públicas sin órgano destinatario ni periodicidad diferenciada. | **Informe anual al Gobierno (73.1.b.4.º)** diferenciado de información **regular y periódica** a Ministerios; propuestas de planes de recursos humanos, antduplicidades y edificios. |
| **75.a.1–2.º** | Comunicación institucional abreviada. | **Comunicar y recibir información** entre Gobiernos; relación con EELL **a través de sus presidentes**; cooperación territorial provincial. |
| **75.d–f y 73.2** | Servicios y sanción sin cuadro comparativo completo. | **Subdelegado: dirección de FFCCSE en provincia y potestad sancionadora**; **Delegado: jefatura en CCAA y potestad sancionadora y expropiatoria**. No deducir para el Subdelegado una potestad expropiatoria general solo por analogía. |

**Informe autónomo verificable:** [`cotejo-funciones-61-62-73-75-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-funciones-61-62-73-75-2026-11-05.md); contiene tablas comparativas, referencias BOE por artículo, advertencias jurídicas y focos de examen. Cambios integrados en [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md), [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [`matriz.json`](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json).

### Regresión, control técnico y límites

Nueva prueba [`tests/validate-diputacion-c2-t15-funciones-61-62-73-75.mjs`](tests/validate-diputacion-c2-t15-funciones-61-62-73-75.mjs), enlazada a `npm test`, que controla **21 filas ministeriales**, **11 filas de Secretarios de Estado**, los subincisos **73/75**, enlaces al BOE, conservación del banco **20 preguntas / 80 alternativas**, claves **A5/B5/C5/D5** y marca `PENDIENTE_COTEJO_INTEGRAL`. Integración: commit **`4b9ccde9c75dd83d9a80a83a37f3117c7e5186b7`**. Para ese **SHA**, CI «Validar OpoWeb v2» **success**, run **42014534946** y GitHub Pages **success**, run **42014534591**, verificados posteriormente al §84.

**Cuestión jurídica pendiente explícita:** el **art. 62.2.e** conserva una remisión histórica a la **DT tercera del RDL 3/2011** en contratación de organismos autónomos. **No se ha inventado una cuantía vigente**; requiere cotejar correspondencia con la **Ley 9/2017** y reglas actuales. No se ha probado navegación real, móvil, PWA ni accesibilidad.

**Estado:** `EN_AUDITORIA`. El banco del T15 mantiene **20/80 cotejado**; **51/121 bancos** históricos y **0/121 temas certificados integralmente**, sin aumento por este lote. Próxima tarea: resolver remisión contractual **62.2.e** y revisar particularidades residuales **73–79**; después **T14/eIDAS**, con prioridad por exámenes de La Puebla (**14/11/2026**) y UC3M (**21/11/2026**). **T06 OAPGT** reservado hasta Estatutos vigentes íntegros, sin reabrir convocatorias descartadas.


## 86. Diputación C2 T15 — remisión contractual vigente del artículo 62.2.e: LCSP 900.000 € condicional vs 12.000.000 € (05/11/2026)

**Continuación del §85 y fuentes primarias:** Se verificó la remisión del [**art. 62.2.e Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a62) a la **DT 3.ª del RDL 3/2011**, texto contractual **derogado**, contra la [**Ley 9/2017, de Contratos del Sector Público, art. 324.1 y 324.5**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a324) y su [**disposición transitoria segunda**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#dt-2), redacciones consolidadas verificadas el **05/11/2026**.

### Dato test vigente y condiciones

| Régimen | Órgano competente | Cuantía | Requisito |
|---|---|---|---|
| **Autorización departamental** de entidades estatales que son poderes adjudicadores, **art. 324.5 LCSP** | **Secretario de Estado** o, en su defecto, **titular del Ministerio de adscripción** | La **que fije ese órgano** como valor estimado umbral | Debe existir el supuesto legal de adscripción y poder adjudicador |
| **Disposición transitoria segunda LCSP** | El mismo órgano departamental | **900.000 €** | Opera **hasta que el órgano competente fije otra cuantía**; calculado por **valor estimado** del **art. 101** |
| **Autorización Consejo de Ministros**, **art. 324.1.a LCSP** | **Consejo de Ministros** | **12.000.000 € o más**, valor estimado | Supuesto distinto, con otros supuestos del art. 324.1 legalmente tasados |

El umbral **900.000 € no es universal ni invariable**: debe comprobarse si se dictó una resolución distinta para la entidad correspondiente conforme al **art. 324.5**. **Tampoco se confunde** con el umbral de autorización del **Consejo de Ministros**, de **12.000.000 €**, bajo los requisitos del **art. 324.1**.

**Ediciones reales:** [`manual.md`](content/diputacion-toledo-auxiliar-c2/tema-15/manual.md), [`cotejo-funciones-61-62-73-75-2026-11-05.md`](content/diputacion-toledo-auxiliar-c2/tema-15/cotejo-funciones-61-62-73-75-2026-11-05.md), [`fuentes.md`](content/diputacion-toledo-auxiliar-c2/tema-15/fuentes.md) y [`matriz.json`](content/diputacion-toledo-auxiliar-c2/tema-15/matriz.json). Tablas comparativas, referencias BOE y **¡Foco Examen!** incorporados; preservada la noticia de la remisión histórica como trampa normativa real.

**Control de regresión:** se reforzó [`tests/validate-diputacion-c2-t15-funciones-61-62-73-75.mjs`](tests/validate-diputacion-c2-t15-funciones-61-62-73-75.mjs), ya enlazada a `npm test`, para exigir ambas cantidades, el carácter supletorio, enlaces al **BOE de la LCSP** y la ausencia de cierre integral. **Commit técnico final:** `3539cbc580da9dd9e1256ee241cfcd5f44f235a9`. **Validar OpoWeb v2: success**, run **42015512476** para ese SHA exacto; Pages **42015510782** estaba **in_progress** al consultarlo. No se afirma despliegue hasta comprobar finalización.

**Límites y siguiente tarea:** no se han auditado resoluciones particulares de cuantía dictadas por cada Secretaría o departamento; se ha cerrado la **explicación general de la remisión contractual**, no un expediente concreto. **Banco T15: 20 preguntas/80 opciones intactas, A5/B5/C5/D5**. **Manual EN_AUDITORIA**, sin certificación integral, prueba funcional real, móvil, PWA o accesibilidad. Cifras históricas no elevadas: **51/121 bancos** y **0/121 temas certificados integralmente**. Siguiente revisión: cerrar incongruencias residuales del T15, luego **T14 eIDAS / certificados electrónicos**, manteniendo la prioridad temporal de los exámenes **La Puebla 14/11/2026** y **UC3M 21/11/2026**. **T06 OAPGT** reservado hasta disponer de Estatutos íntegros vigentes.


## 87. Diputación C2 T14 — bloque Ley 6/2020 certificados (05/11/2026)

Se ha sustituido el método de microcorrecciones del T15 por revisión agrupada del tema 14. El [manual](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md) se amplió con la Ley 6/2020, arts. **4, 5, 6, 7 y 9**: límite **5 años**, **nueve causas** de revocación, suspensión tasada, identidad y representación, conservación **15 años**, seguro **1.500.000 €** más **500.000 €** por servicio cualificado adicional, y preaviso de cese **2 meses**. Se distinguió el estado `EN_AUDITORIA` del estado heredado.

Informe: [cotejo-legal-ley6-2020-2026-11-05.md](content/diputacion-toledo-auxiliar-c2/tema-14/cotejo-legal-ley6-2020-2026-11-05.md); fuentes y matriz T14 actualizadas; regresión [validate-diputacion-c2-t14-ley6-focal.mjs](tests/validate-diputacion-c2-t14-ley6-focal.mjs) integrada en `npm test`. Fuente: [BOE Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). Commit de integración `7fab5fc13102639e4e509ad343a3d20df1122fc0`; CI [success](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42016294212), Pages aún por verificar para ese SHA.

**No certificado:** banco T14 de **20 preguntas/80 alternativas** no cotejado individualmente en este lote, manual integral y navegador pendientes; cifras históricas sin cambio **51/121 bancos, 0/121 temas integrales**. Siguiente lote: eIDAS reformado y cotejo del banco T14, con cambios agrupados; T06 OAPGT pendiente de Estatutos íntegros.


## 88. Diputación de Toledo C2 · T14 — banco completo 20 preguntas / 80 alternativas (05/11/2026)

**Cambio de metodología:** revisión agrupada de las **20 preguntas y 80 alternativas** del banco del T14, en vez de microcorrecciones por artículo. Se han sustituido distractores inverosímiles por errores de **identificación/firma**, **persona física/sello**, **listas de confianza**, **caducidad/revocación/suspensión**, **soportes software/tarjeta**, **representación**, **firma remota**, **web/TLS** y **responsabilidad de prestadores**. Cada pregunta tiene fundamentación separada de las opciones **A, B, C y D**. Conserva las claves **A5/B5/C5/D5**.

**Fuentes cotejadas:** [Ley 39/2015, arts. 9–11](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565); [Ley 6/2020, arts. 4–7 y 10](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046); [eIDAS consolidado 18/10/2024](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa); [FNMT, FAQ 1213](https://www.sede.fnmt.gob.es/ca/preguntas-frecuentes/problemas-y-dudas/-/asset_publisher/fVZppcBHj0oa/content/1213-que-diferencia-hay-entre-solicitar-un-certificado-en-tarjeta-criptografica-y-solicitarlo-en-software-). **Q17** precisa excepción notarial del **art. 7.1**, sin negar métodos a distancia del 7.2; **Q14** recoge suspensión tasada y obligatoria condicionada. Los consolidados son instrumentos informativos.

**Archivos:** [preguntas.json](content/diputacion-toledo-auxiliar-c2/tema-14/preguntas.json), [informe de las 80 opciones](content/diputacion-toledo-auxiliar-c2/tema-14/cotejo-banco-completo-2026-11-05.md), [manual](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md), [fuentes](content/diputacion-toledo-auxiliar-c2/tema-14/fuentes.md) y [matriz](content/diputacion-toledo-auxiliar-c2/tema-14/matriz.json). Estado heredado `BORRADOR/EN_REVISION_USUARIO` conciliado con **`EN_AUDITORIA`**; el banco sí cuenta con cotejo por opción, **el manual íntegro no**.

**Pruebas:** nueva [validate-diputacion-c2-t14-bank-complete.mjs](tests/validate-diputacion-c2-t14-bank-complete.mjs), incorporada a `npm test`; exige 20/80, IDs consecutivos, claves 5/5/5/5, 4 juicios individuales por pregunta, fuentes y matriz, estado pendiente del manual. Integración inicial commit `d5e832c73f0a2775a2a40e5c936a6afc2b2b30e6`; **Validar OpoWeb v2 success** para versiones posteriores como `0de9536d7fe3` (run **42017521171**). **Pages del HEAD final:** comprobar SHA exacto tras este registro.

**Control de alcance:** este lote aumenta la **cobertura de preguntas cotejadas** del T14 a **20/80**; no se ha demostrado certificación funcional ni jurídico-editorial integral del **tema 14**. Cifra de referencia histórica de bancos auditados **51/121** pendiente de recálculo global verificable; **0/121 temas integralmente certificados**. **Siguiente trabajo:** revisión transversal del manual T14 frente a eIDAS reformado y eliminación de contradicciones del marco de prestadores, seguido del siguiente tema sin volver a fragmentar artificialmente.


## 89. Control transversal T14 y precisión de evidencia del banco (05/11/2026)

**Inicio y concurrencia:** leídos `PROJECT_RULES.md`, el último apartado efectivo (§88) y commits recientes de la rama principal. Se inspeccionaron directamente los bloques de identificación, firma, certificados, soportes y prestadores del `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md`, junto a `fuentes.md`. Esta lectura **no constituye cotejo artículo por artículo de todo el manual** y no altera la certificación.

**Hallazgo editorial verificable:** `fuentes.md` describía erróneamente las cuatro opciones de cada pregunta como «cuatro distractores». Un test de cuatro opciones contiene **una correcta y tres distractores**. Corregido en `content/diputacion-toledo-auxiliar-c2/tema-14/fuentes.md` (commit `c8270d93146a8d9c408672c9a7f54f6ccb1a37e7`), sin modificar ninguna clave ni alternativa. El informe anterior §88 documenta el banco 20/80; no se adjudica una nueva comprobación jurídica a esta corrección.

**Fuentes de contraste aún exigibles:** [eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), [Reglamento (UE) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/spa), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) y [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032). No se atribuye en este lote verificación completa de sus artículos.

**Validación:** no hay ejecución local de `npm test` ni prueba de navegador, móvil, PWA o accesibilidad atribuible a este commit. La consulta de estados combinados para `2e41de0c1184af6e1b579d0fdb6cf2744ea26d8a` devolvió lista vacía; **no equivale a CI/Pages success**. Comprobar ejecuciones de Actions y Pages **por SHA exacto** tras este registro. No se inventan identificadores de ejecuciones.

**Cobertura:** referencia histórica **51/121 bancos** pendiente de recálculo y **0/121 temas integrales**; T14 y T15 permanecen `EN_AUDITORIA`. **Siguiente lote sustantivo:** contrastar íntegramente el bloque de prestadores T14 con eIDAS reformado y Ley 6/2020, resolver discrepancias reales en manual, pruebas de regresión y navegador; dar prioridad temporal a La Puebla (14/11) y UC3M (21/11). T6 OAPGT al final, sin reabrir convocatorias descartadas.


## 90. Diputación C2 T14 — contraste agrupado de prestadores Ley 6/2020, arts. 10–18 (05/11/2026)

**Inicio:** leídos `PROJECT_RULES.md` y el último apartado efectivo §89; consultados commits recientes (HEAD previo `1796bf8886f1bb6a60bade14a64969b369247292`). Se mantiene la auditoría jurídica y funcional abierta, sin reabrir descartadas ni alterar el banco ya cotejado.

**Contraste de fuente primaria:** [BOE Ley 6/2020 consolidada, última modificación publicada 09/05/2023](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), artículos [10](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a10), [11](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a11), [12](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a12), [13](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a13), [16](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a16), [17](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a17) y [18](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a18). El manual solo indicaba «plazo legal» para la comunicación de actividad no cualificada, sin cifra ni distinción respecto de los trámites cualificados. **Corrección material** en `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md`: **3 meses** para comunicar inicio, modificación y cese de no cualificados (art. 12), infracción **leve** por incumplimiento (18.4.b), **6 meses** para resolver verificación previa de cualificados y silencio desestimatorio (16.2), informe anual **1 de febrero** (17.3), **un mes** para ampliar notificación de incidente (13.3), responsabilidad por funciones delegadas (10) y límites tasados (11). Se añadió tabla comparativa y foco examen para evitar confundir plazos. **Commit de contenido:** `f41201aff1e862bbb57075a4f57ede3e730b78a4`.

**Validación y límites:** comprobada existencia del commit mediante GitHub conectado. La consulta de workflow runs asociada al SHA devolvió lista vacía (conector limitado a ejecuciones por PR); **no demuestra ni éxito ni fracaso de CI/Pages**. No se ejecutaron `npm test`, pruebas de navegador, móvil, PWA ni accesibilidad. Se conserva íntegro el banco T14 **20/80** y no se cambia su clave. **0/121 temas certificados integralmente**; cifra histórica de **51/121 bancos** pendiente de recálculo trazable, sin atribuir aumento. La reforma eIDAS y los restantes apartados del manual T14 siguen pendientes de contraste exhaustivo.

**Siguiente lote:** verificar Actions/Pages del SHA exacto con fuente que exponga ejecuciones `push`; cotejar eIDAS reformado y art. 24 (prestadores cualificados), comprobar excepciones y reflejar en matriz; añadir regresión técnica y pruebas funcionales reales. Prioridad de exámenes La Puebla 14/11 y UC3M 21/11; OAPGT T6 al final.


## 91. Diputación C2 T14 — eIDAS reformado y nuevos servicios de confianza: capítulo sustantivo (05/11/2026)

**Objetivo:** continuar el tema 14 mediante **un lote temático completo** en vez de añadir microcorrecciones. Se leyó el §90 concurrente y se mantuvo íntegro. El banco T14 **20 preguntas / 80 alternativas** queda sin cambios. La fuente europea cotejada es el [**Reglamento (UE) 910/2014, texto consolidado ES de 18/10/2024**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) tras la reforma [**Reglamento (UE) 2024/1183**](https://eur-lex.europa.eu/eli/reg/2024/1183/oj?locale=es); consolidado de uso informativo, texto auténtico en DOUE.

### Cambios reales en el manual T14

Se sustituyó el resumen de cinco denominaciones del antiguo **apartado 16** por **seis subapartados desarrollados** con artículo, condiciones, órganos, tablas comparativas y Focos Examen; se enlazaron también a las secciones preexistentes de firma y sello remotos.

| Bloque | Datos exigibles contrastados |
|---|---|
| **Cartera EUDI, art. 5 bis** | Al menos **una** cartera por **Estado miembro**, en los **24 meses siguientes a la entrada en vigor de los actos de ejecución de referencia (5 bis.23 y 5 quater.6)**; **uso voluntario** (5 bis.15); **expedición, uso y revocación gratuitos para personas físicas** (5 bis.13); control y divulgación selectiva |
| **Certificación de la cartera, 5 quater.4** | Máximo **5 años** de certificado de conformidad, con evaluación de vulnerabilidades cada **2 años**; distinguir de certificado de firma |
| **Declaraciones electrónicas de atributos, 45 ter–nonies** | Tipo ordinario, cualificado, y atribución de fuente auténtica del sector público; **45 quater** niega sustitución automática de identificación/autenticación exigida sin autorización expresa del Estado miembro; anexo VI menciona edad, títulos, poderes, licencias |
| **Firma y sello cualificados remotos, 29.1 bis, 29 bis, 39 bis** | Gestión cualificada por **prestador cualificado**; duplicación de claves **solo copia de seguridad** bajo seguridad y número mínimos necesarios; **firma remota** no implica **firma cualificada** |
| **Archivo electrónico cualificado, 45 decies/undecies** | Presunción de **integridad y origen** durante la conservación; informes automatizados y preservación |
| **Libro mayor electrónico cualificado, 45 duodecies/terdecies** | Presunción de **unicidad, orden secuencial cronológico exacto e integridad**; distinto de sello de tiempo |
| **Reconocimiento mutuo UE, 24 bis** | Se reconocen los **productos y servicios cualificados** incluidos legalmente; una TSL es de **prestadores y servicios concretos**, no de marcas con todos sus productos automáticamente cualificados |

**Evidencia y trazabilidad:** [manual T14](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md), [informe y matriz de origen por artículo](content/diputacion-toledo-auxiliar-c2/tema-14/cotejo-eidas-reformado-2026-11-05.md), [fuentes](content/diputacion-toledo-auxiliar-c2/tema-14/fuentes.md), [matriz JSON](content/diputacion-toledo-auxiliar-c2/tema-14/matriz.json). Se creó [prueba focal eIDAS](tests/validate-diputacion-c2-t14-eidas-reformado.mjs) y se incorporó a `npm test`. La prueba comprueba los **seis subapartados, las reglas, seis focos, fuentes, estado no cerrado y banco 20/80 con claves 5/5/5/5**. Último commit técnico de integración: `abaa508ec65a6f91a864601261de327ecf9e67c9`.

**Límites:** este es cotejo jurídico del **bloque eIDAS reformado**, no certificación de todos los restantes pasajes del manual, ni de sus funcionalidades en navegador, móvil, PWA o accesibilidad. Se conserva `EN_AUDITORIA` y `PENDIENTE_COTEJO_INTEGRAL`. Los **20/80** del banco ya se documentaron separadamente en el §88. **0/121 temas certificados integralmente**. Priorizar el siguiente bloque real (coherencia de prestadores y uso administrativo con RD 203/2021 / Ley 39/2015) con lotes agrupados; **T06 OAPGT** continúa reservado hasta Estatutos. **GitHub Actions/Pages:** comprobar conclusión de ejecución del HEAD exacto tras el registro, sin extrapolar éxitos de commits anteriores.


## 92. Diputación C2 T14 — cotejo agrupado RD 203/2021: identificación, firma, sedes, sellos y CSV (05/11/2026)

**Objetivo y fuente:** continuidad del tema 14 sin microcorrecciones. Cotejo de [**Ley 39/2015, arts. 9–12**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) (consolidada **06/11/2024**) y [**RD 203/2021, arts. 16–23 y 26–30**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032) (consolidado actualizado **02/04/2025**). Se conserva programa literal BOP Toledo **197, 14/10/2026, Anexo XI, CSV 2026.00004759**. Los textos consolidados son informativos; para efectos jurídicos, publicaciones oficiales.

**Corrección material de ocho apartados del manual T14** (en un solo commit de contenido `04137883784e523f4425a7a96827262d2f499357`):

| Apartado | Datos test y órgano competente incorporados |
|---|---|
| **Identificación/firma, 9–11 LPAC y 26–29 RD** | **Firma válida acredita identidad (10.5)**, mientras que usar identificación como firma necesita **norma expresa y voluntad (10.4)**; atributos mínimos de persona física, representante y sello del **27 RD** |
| **Funcionario habilitado, 12 LPAC y 30 RD** | **Interesado no obligado**, sin medios, **consentimiento expreso escrito** y entrega de **copia**; inscripción y habilitación del trámite en AGE |
| **Sede, art. 18 RD** | **Regla general**: certificado web cualificado **o equivalente**; **AGE**: certificado cualificado de autenticación web, dominio **`.gob.es`** |
| **Sello de órgano, art. 19 RD** | Resolución de **Subsecretaría / Presidencia / Dirección** para creación estatal, publicada en sede, con titular, alcance y validación |
| **CSV y actuación automatizada, arts. 20–21 RD** | **CSV único**, distinto tras alteraciones; verificación **directa y gratuita**; en **AGE**, **dos informes previos CCN y SGAD** y verificación en sede **al menos 5 años (21.4.e)**, salvo plazo especial mayor |
| **Empleado con número profesional, art. 23 RD** | Certificado cualificado en supuestos justificados de **información clasificada, seguridad o defensa**, custodia de identidad y revelación por **petición oficial**; no anonimato absoluto |
| **Plataforma de verificación, art. 16 RD** | **SGAD** responsable; gratuita **para el sector público**, acceso por **adhesión**, prestadores cualificados colaboran |
| **Política estatal de firma, art. 17 RD** | **Secretaría de Estado de Digitalización e Inteligencia Artificial** (denominación literal) aprueba por resolución; publicación **BOE y PAGe** |

**Trampa importante:** **Ley 6/2020, art. 4.2**: período **máximo 5 años** del certificado cualificado; **RD 203/2021, art. 21.4.e**: verificación de CSV estatal **mínimo 5 años**. No son el mismo objeto ni idéntica dirección del límite.

**Documentación vinculada:** [manual](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md), [cotejo por fuentes y ocho apartados](content/diputacion-toledo-auxiliar-c2/tema-14/cotejo-rd203-administraciones-2026-11-05.md), [fuentes](content/diputacion-toledo-auxiliar-c2/tema-14/fuentes.md), [matriz](content/diputacion-toledo-auxiliar-c2/tema-14/matriz.json), [regresión](tests/validate-diputacion-c2-t14-rd203-administraciones.mjs) integrada en `npm test`. Tras ajuste de aserciones a la tipografía real, último commit de prueba `f12207ccf4c478013d63afe4f8faf8aae445db18`; Actions Validar run **42033482948** y Pages run **42033482386**, consultar estados al terminar. Los primeros CI de contenido y matriz finalizaron **success**. No se altera el banco T14 **20 preguntas / 80 alternativas, claves A5/B5/C5/D5**.

**Límites:** tema **EN_AUDITORIA**, sin certificación integral ni prueba real de navegador, móvil, PWA o accesibilidad; no se eleva cobertura global ficticiamente. **Siguiente lote:** cotejo transversal final de coherencia del manual T14, pruebas funcionales reales cuando haya herramienta, después avanzar a otros temas no tratados. T06 OAPGT sigue reservado a Estatutos íntegros.

## 93. Diputación C2 T14 — personal público y entornos cerrados (05/11/2026)

**Reanudación:** preservado íntegro §92 y el cotejo anterior del banco T14. Se amplió de forma agrupada el bloque de administración electrónica del [manual T14](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md), con fuentes oficiales vigentes: [RD 203/2021, arts. 22, 24 y 25](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032), consolidado actualizado **02/04/2025**, y [Ley 40/2015, arts. 43–44](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), consolidado actualizado **02/08/2024**. Los consolidados del BOE son informativos.

**Normas incorporadas al manual:** firma por **titular del órgano o empleado público**; certificado de empleado público **cualificado** (**art. 22.3**) y medios de entidades privadas vinculadas (**22.4**); especialidad **AGE** (**art. 24**) que diferencia identidad interna en repositorios, identificación conforme al **ENS**, firma con certificados cualificados y relación con otras Administraciones **cuando estas lo admitan**. Entornos cerrados (**art. 25**): dentro de **una Administración**, esta fija garantías; entre **Administraciones diferentes**, se requiere **convenio**; para condiciones del **25.2** en el ámbito estatal, **SGAD**. Incorporadas tablas comparativas y **¡Foco Examen!**. No se ha modificado el banco de **20 preguntas/80 alternativas**.

**Archivos y commits confirmados:** manual [a9bc1fd](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/a9bc1fdffcfa803b1ed476bfd34d805a25b4ae6c); [informe jurídico](content/diputacion-toledo-auxiliar-c2/tema-14/cotejo-rd203-personal-entornos-2026-11-05.md) 1d2a368; [fuentes](content/diputacion-toledo-auxiliar-c2/tema-14/fuentes.md) b557566; [matriz](content/diputacion-toledo-auxiliar-c2/tema-14/matriz.json) 7ab9633; [test específico](tests/validate-diputacion-c2-t14-personal-entornos.mjs) 57ed8b7; [integración npm test](package.json) ae45b31.

**CI verificada:** Validar OpoWeb v2 success para commits a9bc1fd (run **42034467454**) y 57ed8b7 (run **42034761152**, antes de integración en npm test). [CI del commit ae45b31](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034790718) observada **in_progress** al consultar, y [Pages](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034790691) **pending**. No se pudo ejecutar npm test local por falta de acceso DNS a GitHub; no se atribuye éxito a la prueba integrada hasta observar su run final.

**Límites:** tema **EN_AUDITORIA**, manual íntegro no certificado, banco 20/80 ya cotejado en lote previo, navegación real/móvil/PWA/accesibilidad pendientes, **0/121** temas certificados integralmente. Próximo trabajo: coherencia restante del T14 y verificación funcional; prioridad temporal exámenes **La Puebla 14/11** y **UC3M 21/11**. Tema 6 **OAPGT** al final.


## 94. Verificación exacta CI/Pages y control estructural T14 (05/11/2026)

**Reanudación:** leídos `PROJECT_RULES.md`, el último §93 y commits recientes. HEAD examinado `3be6630d1f62c9fdbf55a2b2e842b55c1f07e421` (registro del cotejo RD203). Consulta directa al API GitHub `GET /repos/Ivannunezrodriguez/opoweb-v2/actions/runs?head_sha=3be6630d1f62c9fdbf55a2b2e842b55c1f07e421`: **Validar OpoWeb v2** run [42034998950](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034998950) **completed/success** y **pages build and deployment** run [42034997559](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034997559) **completed/success**, ambos con ese SHA exacto. La ejecución intermedia Pages [42034790691](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034790691) de `ae45b314` fue **cancelled** por concurrencia; su CI [42034790718](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42034790718) sí fue **success**. No confundir el éxito del despliegue del HEAD con éxito del despliegue intermedio.

**Control editorial efectuado:** inspeccionados encabezados y epígrafe del [manual T14](content/diputacion-toledo-auxiliar-c2/tema-14/manual.md), así como su [matriz](content/diputacion-toledo-auxiliar-c2/tema-14/matriz.json). El epígrafe conserva la referencia al BOP 197 de 14/10/2026 y CSV 2026.00004759. **Hallazgo estructural pendiente:** las secciones globales `## 3. conceptos usos`, `## 4. tipos certificados`, `## 5. soportes`, `## 6. prestadores servicios` y `## 7. administraciones` contienen subsecciones internas también de nivel `##` numeradas desde 1, lo que impide distinguir jerarquía por Markdown y puede alterar navegación/índice automático. Requiere corrección coordinada con los enlaces y las pruebas de render, sin renumerar epígrafes oficiales ni reescribir contenido jurídicamente ya cotejado. No se modificó el manual ni se certificó su accesibilidad: este control detecta el problema, **no** prueba su impacto en navegador.

**Cobertura:** 0/121 temas certificados integralmente; 51/121 bancos históricos, pendiente recálculo. Banco T14 20/80 y sus claves sin cambios. Sin ejecución local de `npm test`, navegador real, móvil ni PWA; CI es evidencia técnica automatizada, no revisión jurídica. **Siguiente lote sustantivo:** reparar jerarquía del manual T14 con regresión de render; revisar coherencia legal completa y después priorizar La Puebla y UC3M por los exámenes 14/11 y 21/11. OAPGT T6 permanece al final.


## 95. Reparación estructural del manual T14 y comprobación de despliegue (05/11/2026)

**Inicio:** leídos PROJECT_RULES.md y último apartado efectivo §94, además de commits recientes. HEAD inicial `24e5976e32a335b7af5b0cb50b566c6f3f99aaf4`. La consulta GitHub Actions por `head_sha` exacto confirma **Validar OpoWeb v2** run [42040645132](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42040645132) **completed/success**; el resultado Pages debe registrarse separadamente tras consultar su ejecución, sin extrapolar CI.

**Corrección sustantiva de navegación documental:** reparada en `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md` la jerarquía Markdown de las cinco secciones principales 3–7: sus subsecciones numeradas pasan de `##` a `###` y sus subapartados de `###` a `####`. **99 encabezados** ajustados, preservando íntegramente texto, cifras, citas jurídicas, epígrafe oficial, claves, banco y numeración visible. El anexo conserva `##`. Commit de contenido `c8f0e875f94e12dc3d2db08c694c8398222ab9a3`. Esta reparación facilita índice y accesibilidad semántica, pero **no demuestra por sí sola** el comportamiento de navegación real.

**Fuentes jurídicas ya documentadas y no recertificadas en este lote:** [eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032). No se ha rehecho ni ampliado el cotejo legal previo.

**Validación pendiente:** CI y Pages del commit de contenido y de este registro por SHA exacto; pruebas funcionales reales de índice, enlaces, móvil, PWA y accesibilidad; revisión jurídica transversal restante. **0/121 temas certificados integralmente**, referencia histórica **51/121 bancos** pendiente de recálculo; banco T14 20 preguntas/80 alternativas sin cambios. **Siguiente lote:** verificar render de encabezados y CI/Pages, continuar La Puebla y UC3M prioritariamente y cerrar coherencia T14; OAPGT T6 al final.


## 96. Regresión ejecutable de jerarquía T14 y control CI pendiente (05/11/2026)

**Reanudación obligatoria:** leído `PROJECT_RULES.md` y último apartado efectivo §95 antes de escribir. Inspeccionados `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md` (110 encabezados extraídos en lectura) y `package.json`. Se conserva sin modificaciones el banco de 20 preguntas/80 alternativas y el estado `EN_AUDITORIA`.

**Avance técnico verificable:** creada `tests/validate-diputacion-c2-t14-headings.mjs` (commit `1552848fa05fd21b6ab22846666fba1149a6c746`) y enlazada en `npm test` mediante `package.json` (commit `d744f597a61186e1a2ddc68b9922da2e81fb9485`). La regresión exige 100 o más encabezados, título principal H1, las cinco secciones H2 3–7, subsecciones H3, ausencia de saltos de nivel Markdown y la advertencia de falta de certificación integral. **No equivale a prueba de render ni accesibilidad real**.

**Comprobación CI/Pages:** se intentó consultar GitHub Actions por `head_sha=d744f597a61186e1a2ddc68b9922da2e81fb9485`, pero el acceso al endpoint API no fue concluyente. No se atribuye estado success ni despliegue a ese SHA; comprobar ambas ejecuciones y reparar regresión si falla antes de certificar. No se ha ejecutado Node local ni navegador real.

**Fuente normativa:** sin nuevo cotejo jurídico en este lote; siguen vigentes los cotejos documentados de [eIDAS](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) y [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032). **0/121 temas recertificados integralmente**; 51/121 bancos es referencia histórica, no porcentaje jurídico. **Siguiente lote:** verificar CI/Pages del SHA de este registro y de la integración, ejecutar prueba real de navegación/índice si hay navegador, y pasar a cotejos prioritarios de La Puebla y UC3M antes del 14/11 y 21/11. Mantener T6 OAPGT al final; no reabrir descartadas.


## 97. Verificación independiente de jerarquía T14 y límites de CI/Pages (05/11/2026)

**Inicio obligatorio:** leídos `PROJECT_RULES.md` y último apartado efectivo **§96** del registro. Último commit localizado en `main`: `0de9602abdb32d035f1b04230ac2cf74339f8ba3`; revisados commits recientes `d744f597`, `1552848f` y `c8f0e875`. No se duplicaron sus cambios.

**Inspección independiente de archivos actuales:** `content/diputacion-toledo-auxiliar-c2/tema-14/manual.md` (blob `89bed8f1f7ecb982847693b1fb36bee06fdb7e16`) contiene **110 encabezados**: H1 inicial, ocho H2 (epígrafe, fuentes, secciones 3–7 y anexo). Se recorrieron todos los encabezados extraídos y **no se detectaron saltos de más de un nivel**. Las secciones 3–7 están en H2 y sus primeros hijos en H3. Sigue presente la advertencia «sin certificación integral». La prueba `tests/validate-diputacion-c2-t14-headings.mjs` fue leída y `package.json` confirma que se ejecuta en `npm test`. Esta es **inspección de datos y aserciones**, no ejecución de Node ni comprobación de render real.

**CI/Pages del SHA exacto:** `get_commit_combined_status` para `0de9602a...` devolvió lista vacía de estados; `fetch_commit_workflow_runs` devolvió lista vacía, pero esta integración solo expone ejecuciones vinculadas a pull requests. Una consulta adicional a la API pública de GitHub Actions no fue accesible. Por tanto **CI y Pages de ese SHA permanecen NO VERIFICADOS**; la ausencia de resultados no demuestra fallo ni éxito. Repetir comprobación por API de runs filtrada por `head_sha` o interfaz Actions cuando esté disponible.

**Alcance jurídico-editorial:** no se ha cotejado ningún artículo nuevo en este lote, ni alterado las claves. Fuentes del cotejo anterior, **no recertificadas aquí**: [eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032). **0/121 temas certificados integralmente**; 51/121 bancos es cifra histórica, no validación jurídica actual.

**Faltantes y siguiente lote:** verificar CI/Pages de `0de9602a` y del presente registro por SHA; realizar prueba real de render, navegación, móvil y PWA; dedicar el siguiente lote jurídico sustantivo a **La Puebla** (examen 14/11) y **UC3M** (21/11), priorizando errores normativos verificables y distractores antes de nuevas mejoras cosméticas T14. Mantener OAPGT T6 al final, sin reabrir convocatorias descartadas.

## 98. Corrección funcional transversal — enlaces Markdown internos y jerarquía HTML (05/11/2026)

**Inicio:** leídos PROJECT_RULES.md, §97 y commits recientes, sin duplicar el trabajo. El [visor OpoWeb](assets/app.js) convertía títulos Markdown H1–H4 a HTML H2–H4 con tope H4: los niveles H3 y H4 del documento terminaban al mismo nivel, por lo que la jerarquía reparada del **T14 de Diputación C2** (§95–97) **no se conservaba en el HTML**. Además, solo reconocía enlaces externos HTTPS, sin convertir en navegación real los relativos de manuales modulares como **La Puebla T16**.

**Corrección funcional:** [commit 53f9f878](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/53f9f878b8e86d3829bcfbfd237a37e999ff4ccf) de [assets/app.js](assets/app.js). El renderizador admite Markdown H1–H5 y lo presenta como HTML H2–H6 dentro de la página que ya tiene H1 global. Se admiten enlaces relativos únicamente a nombres seguros .md del **directorio de ese tema**; se cargan como HTML dentro del visor con botón **Volver al manual completo**. URLs externas HTTPS retienen protección de apertura; rutas ascendentes y esquemas no autorizados no se convierten en documentos internos. **No se alteraron normas, claves, manuales ni bancos**.

**Regresión reproducible:** [tests/validate-manual-markdown-navigation.mjs](tests/validate-manual-markdown-navigation.mjs), commit 3d209a04e96ff97ed14f595c02acd886395c937d, comprueba niveles H2–H6, dos enlaces Markdown del tema, enlace oficial BOE HTTPS, exclusión de enlaces JavaScript/ruta ascendente y carga de documento con doble de DOM. Añadida a **npm test** en [package.json](package.json), commit 2c3424fd1f5a42b184ed78d8b82b90540f219948. [Validar OpoWeb v2 run 42075807912](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42075807912) **completed/success** sobre ese SHA exacto. [Pages 42075806537](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42075806537) estaba **in_progress** al consultarlo: no afirmar despliegue final hasta comprobar el resultado. Pages intermedios cancelados por concurrencia no significan fallo de código.

**Límites:** validación lógica y de regresión automatizada, no navegador real, móvil, accesibilidad ni certificación integral jurídico-editorial. Históricamente **0/121 temas certificados integralmente**; 51/121 bancos sin recálculo. **Siguiente trabajo:** lote sustantivo jurídico/test de La Puebla (14/11) y UC3M (21/11) y control de Pages del SHA final; evitar rehacer bloques ya cerrados. OAPGT tema 6 permanece al final.

## 99. LOTE GENERAL OLIAS-C2-G01-G04 — bancos jurídicos y pedagógicos en bloque (05/11/2026)

**Instrucción de comunicación:** a petición expresa del usuario se pasa a **bloques de varios temas** y se llevan **DOS cuentas regresivas independientes**: (i) temática/bancos con cotejo jurídicopedagógico efectivamente documentado, y (ii) **certificación integral de 5 capas**. Se comunicará la finalización de **bloques**, no sucesiones de retoques individuales. La automatización existente ya fue actualizada con esta regla, sin duplicar programación ni generar otra cuenta paralela.

**Alcance concreto del lote:** **Olías del Rey auxiliar de edificios C2, temas generales 01, 02, 03 y 04**, conforme al manifiesto del **BOP Toledo 204/2026 (23/10), anuncio 4833, Anexo II**. Cuatro manuales, matrices y fuentes leídos y contrastados puntualmente. **12 + 10 + 10 + 24 = 56 preguntas / 224 alternativas**. Se conservaron todas las respuestas y sus textos y los enunciados originales; **168 distractores** se sustituyeron por alternativas jurídicamente plausibles con un error discriminador, **56 referencias BOE específicas** y **56 focos de examen específicos**. No se ha afirmado que cada alternativa incorrecta tenga una resolución jurídica exhaustiva independiente ni que cada artículo del amplio corpus legal esté cerrado.

| Tema | Materias y normas | Banco revisado | Alcance editorial |
|---|---|---:|---|
| **G01** | **Constitución**: autonomía, estatutos, Corona, refrendo, Gobierno e investidura; CE arts. 1, 56–65, 97–102, 108, 137 y 143–158 | **12/12, 48 opciones** | Banco y focos de examen, manual integral pendiente |
| **G02** | **CE, LRBRL y TRLRHL**: municipio, Alcalde/Pleno/JGL, recursos, contribuciones especiales; art. 20.1.b LRBRL **más de 5.000** | **10/10, 40 opciones** | Banco y focos, manual integral pendiente |
| **G03** | **ET, TREBEP y LPRL**: deberes, contrato laboral escrito, selección, prevención, conducta ética | **10/10, 40 opciones** | Banco y focos, manual integral pendiente |
| **G04** | **LO 3/2007, arts. 3–7, 51–64, DA 1ª**: AGE, órganos, formación y Plan igualdad, 40–60 %, 40 % cursos, año preferencia, evaluación anual | **24/24, 96 opciones** | Banco, focos y matriz del manual precisada; manual integral pendiente |

**Fuentes primarias cotejadas en esta intervención:** [Constitución](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [Ley 7/1985](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392), [RDL 2/2004](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), [RDL 2/2015 ET](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430), [RDL 5/2015 TREBEP](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), [Ley 31/1995](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [LO 3/2007](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115). Consolidaciones oficiales informativas; no sustituir las publicaciones de las normas.

**Archivos y evidencia:** [cotejo por ID, clave, referencia y trampa (56 filas)](content/olias-auxiliar-edificios/cotejo-bloque-general-01-04-2026-11-05.md), [regresión específica](tests/validate-olias-general-01-04-bank.mjs), integrada en [package.json](package.json) por commit **7142033cf48fe4aae0652ec9b1fdb403df3035f2**. Se editaron los **cuatro** bancos de preguntas, los **cuatro** ficheros de fuentes y las **cuatro** matrices con control `controlBloqueGeneral20261105` y `certificacionIntegral:false`. Se reparó además la tabla demasiado genérica de la matriz editorial del [manual G04](content/olias-auxiliar-edificios/tema-04/manual.md), commit **8af86f1a43cda55d76d3928d17a2012bcf9d8fe4**.

**CI/Pages del último commit del lote antes de este registro:** [Validar OpoWeb v2, run **42078725980**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42078725980): **completed/success**, SHA **e830da601d0cd4a73717e8d30dd2e03125158d4f**; [Pages run **42078725761**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42078725761) en estado **pending** al consultar. Al escribirse esta entrada nace un commit distinto; comprobar CI/Pages del SHA final, sin extrapolar éxitos. Esas pruebas automáticas son estructurales y no acreditan navegación real.

**CONTADOR ESTRICTO:** dentro del **lote G01–G04**, **4/4 bancos revisados** (56/56 preguntas, 224 opciones inspeccionadas; 168 distractores reformulados). Respecto al universo **121 temas**, solo se declara **+4 temas con avance de banco jurídico/pedagógico en este lote** y **ningún nuevo tema íntegramente certificado**. El recuento global de bancos antes de este lote (**51/121 históricos**) requiere reconciliación de solapamientos y calidad de evidencia antes de usarlo como contador agregado. **Certificación integral real: 0/121 temas, 121 todavía pendientes**. Esto no significa que no existan manuales o auditorías documentales previas.

**Pendientes de este bloque:** contraste exhaustivo de los cuatro manuales con cada inciso y excepción normativa vigente; razonamiento individual A/B/C/D completo donde falte; formato de simulacros, navegación real, pantalla móvil, accesibilidad y PWA. En temas **01–04** se conserva `EN_AUDITORIA`. **Próximo lote prioritario**: los temas pendientes de cotejo sustantivo en La Puebla (examen **14/11**) y UC3M (**21/11**) y después completar el bloque general Olías **G05** junto con otro bloque (no aisladamente). **Tema 06 de OAPGT** reservado al final de Diputación C2.


## 100. Control de integridad del lote Olías y preservación de cotejos La Puebla (05/11/2026)

**Inicio obligatorio:** leídos `PROJECT_RULES.md` y el apartado más reciente §99 (no §97); comprobado `main` SHA `097f53f86c67735527297b746a8e8585a4bc8486`. Se han inspeccionado también los cotejos existentes de **La Puebla T01, T02 y T03** (`content/la-puebla/tema-0{1,2,3}/cotejo-integral-2026-11-04.md`), que ya contienen tablas de 12 preguntas y 48 alternativas por tema, por lo que **no se recontabilizan ni se regeneran** en este control. Su documentación anterior no se eleva por sí sola a certificación integral de cinco capas.

**CI/Pages del SHA exacto del lote §99:** workflow **Validar OpoWeb v2** [42079143851](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42079143851) `completed/success` para `097f53f8`; workflow **pages build and deployment** [42079144121](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42079144121) `in_progress` al consultar. Los Pages anteriores del lote `e830da60` figuran `cancelled` por concurrencia; no son prueba de despliegue exitoso ni de fallo de código. Verificar Pages de este SHA y del commit presente posteriormente.

**Control de evidencia y contador:** se conserva el bloque **Olías G01–G04, 56 preguntas/224 alternativas**, tal como se documentó en §99, sin repetir sus 168 distractores editados. No se ha realizado aquí nuevo contraste legal de artículos, ni ejecución funcional en navegador, móvil o PWA. **Incremento de temas jurídico-pedagógicos demostrados en este control: 0**; el total global consolidado sigue **sin determinar** hasta reconciliar los 51/121 históricos y los cuatro temas del lote sin doble cómputo. **Certificación integral: 0/121; pendientes 121/121**. Fuente oficial del bloque ya registrada en §99; los cotejos de La Puebla remiten a [CE](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) y [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565); en esta ejecución no se ha repetido su contraste con BOE.

**Siguiente lote sustantivo:** trabajar varios temas aún pendientes de La Puebla y UC3M por exámenes 14/11 y 21/11, verificando cada opción y fuente legal; completar contador jurídico-pedagógico únicamente con trazabilidad por tema; comprobar Pages y realizar pruebas reales de visor/PWA. No reabrir descartadas; OAPGT T6 al final.

## 101. Lote sustantivo UC3M T10–T12 — TREBEP, selección e incompatibilidades, PRL (05/11/2026)

**Reanudación y novedad:** leídos PROJECT_RULES y §100; cotejos previos de los 3 bancos (04/11) preservados sin sumarlos doble. Este lote aumenta la **calidad de tres temas conjuntamente** sin nuevos temas certificados de cinco capas. El usuario requiere avances por bloques y cuenta regresiva honesta.

**Alcance:** tres manuales contrastados, tres bancos completos con **12 preguntas cada uno** y **36 claves literales conservadas / 144 opciones**. Se sustituyeron las referencias genéricas «Manual, apartado» de las **36 preguntas** por los **preceptos oficiales aplicables y URL BOE**, y se añadieron justificaciones específicas de descarte de tres opciones incorrectas por pregunta. No se cambian las 36 respuestas correctas, su índice ni los enunciados. Informe único [cotejo de las 36 claves y 144 opciones](content/uc3m/cotejo-bloque-t10-t12-2026-11-05.md), con matriz por supuesto y fuente. [Regresión ejecutable](tests/validate-uc3m-t10-t12-revalidacion-20261105.mjs) integrada a `npm test` en commit **371bc179edbfea6724c8b22b005a3b095447b79e**. Se vincularon informes en fuentes y matrices de los 3 temas, preservando estado **EN_REVISION_USUARIO** y `certificacionIntegral:false`.

| Tema | Ajuste jurídico documentado | Fuente primaria | Banco revisado |
|---|---|---|---:|
| **UC3M T10 TREBEP** | Artículos **9, 10, 12, 18, 20, 54, 56, 61–64, 89, 90**; nueva distinción entre reforma **49.e** publicada **03/10/2026**, vigente desde **23/10**, y posible **corte de examen anterior**, todavía sin resolución primaria de listas definitivas | [**TREBEP**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), [**Ley 4/2026**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-20528) | **12/48** |
| **UC3M T11** | Contraste **RD 364/1995 arts. 4, 36, 51, 64, 70**; **Ley 53/1984 arts. 3, 12, 14, 17.2, 19**; ejercicio de facultades por **Rector** en el marco del Estatuto universitario; asunto privado **dos últimos años**; resolución de reconocimiento privado **2 meses** | [**RD 364/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-8729), [**Ley 53/1984**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-151) | **12/48** |
| **UC3M T12 PRL** | [**Ley 31/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) actualizada **09/04/2026**; vigilancia sanitaria del **art. 22**: regla voluntaria, excepciones con garantías y **previo informe de representantes**; delegados **art. 35** vs Comité **art. 38**, particularidad administrativa **art. 34.3.d** | [**LPRL**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) | **12/48** |

**Artefactos y avance:** manuales [T10](content/uc3m/tema-10/manual.md), [T11](content/uc3m/tema-11/manual.md), [T12](content/uc3m/tema-12/manual.md) ampliados con **tabla y Foco Examen**. Bancos T10 commit **1efc5e4**, T11 **a5d8b47**, T12 **bf0f748**; informe conjunto **0178dc5**; prueba **9c07fdd**; integración **371bc17**. Las últimas matrices y fuentes referencian el cotejo y sus pendientes.

**Validación verificada durante el lote:** [Validar OpoWeb v2 run **42082450110**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42082450110) **completed/success** sobre commit **69f7b4fcf5b331b75ce6947198503e5c896c0549**, que ya contiene prueba integrada y matrices de los 3 temas; [Pages run **42082448821**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42082448821) **completed/success** para el mismo SHA. Los commits posteriores de cambios de enlaces y este registro deben reconfirmarse **por su propio SHA**. Los workflows `Generate UC3M and Diputacion PDFs` también se disparan, pero **no** equivalen a prueba funcional de navegador.

**Cuenta regresiva sin doble cómputo:** el lote ha **revalidado 3/3 temas en el plano legal-pedagógico del banco**; son **3 temas con mejoras de trazabilidad** ya presentes en los 51 bancos históricos, **incremento neto del contador global de bancos por esta revisión: 0**. Certificación integral cinco capas **0/121 cerrados, 121 pendientes**, hasta resolver corte normativo y validar web en navegador/móvil/PWA/accesibilidad. Mantener aprobación previa de La Puebla T01–T19 y revisiones históricas sin contarlas automáticamente como nuevas. El único registro activo es este fichero.

**Bloque prioritario siguiente:** a) obtener/publicar fecha primaria del **corte UC3M** de bases primera.7; b) comprobar funcionalidades del visor y pruebas en navegador real; c) cotejo agrupado de otros temas de alta prioridad de **La Puebla** por examen **14/11** y **UC3M 21/11**, evitando repetir bancos; después Olías y Diputación. El **tema 6 OAPGT** permanece reservado para el final.

## 102. CIERRE REAL — Diputación Toledo C1 temas 1–3, sin más micro-auditorías (**05/11/2026**)

**3/3 TEMAS AUDITADOS jurídico-pedagógicamente**, con **62 preguntas y 248 alternativas**, en bloque único. [**Informe de cierre**](content/diputacion-toledo/cierre-editorial-01-03-2026-11-05.md), [**test focal**](tests/validate-diputacion-c1-bloque-01-03-20261105.mjs); actualizados manuales, fuentes, matrices, bancos y manifiesto sin alterar los otros 37 temas. Se corrigió **DIP-T01-012** (respuesta: **cuatro reformas constitucionales**, no tres) y se reemplazó **DIP-T03-002** por una pregunta sobre la reforma de mayo de 2026. Se mantuvieron la cantidad de preguntas y la distribución de claves.

**Fuentes y errores reparados:** [**Constitución BOE consolidado 20/05/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [**reforma BOE-A-2026-10881**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-10881): **Ibiza y Formentera** elegibles por separado, con eficacia electoral desde la primera convocatoria posterior; [**art. 8 CE**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a8) conserva denominación literal **Ejército del Aire**, distinto del [**RD 524/2022**](https://www.boe.es/buscar/act.php?id=BOE-A-2022-10787); [**art. 37 Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a37), no Ley 40/2015. Complementos cotejados con [LOTC](https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709), [LO 3/1981](https://www.boe.es/buscar/act.php?id=BOE-A-1981-10325), [LO 2/1982](https://www.boe.es/buscar/act.php?id=BOE-A-1982-11584) y [LOREG](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672).

**CONTADOR QUE SÍ AVANZA:** **3/121 temas cerrados jurídica y pedagógicamente con evidencia agrupada en esta fase, 118/121 pendientes**. Los bancos 51/121 de revisiones históricas se mantienen sin duplicar ni declarar certificados. La validación funcional de navegador, móvil, accesibilidad y PWA es **transversal a la web**: está pendiente, pero **no es motivo para volver a auditar estos tres manuales**. La certificación de cinco capas permanece no acreditada.

**SIGUIENTE BLOQUE:** C1 **temas 4–7**, sin reabrir C1 1–3 salvo reforma legal o error verificable. Evitar reiteraciones y comunicar solo cierres de bloques completos.

## 103. CIERRE DEFINITIVO POR BLOQUE — Diputación C1 temas 04–07 (**05/11/2026**)

**NUEVO CIERRE jurídico-pedagógico:** **4 temas (04, 05, 06, 07) AUDITADOS**; **81 preguntas / 324 alternativas**, conservando todos los índices de clave. Se editaron cuatro manuales, cuatro bancos, cuatro matrices y cuatro fuentes, con **un único informe de cierre** [C1 04–07](content/diputacion-toledo/cierre-editorial-04-07-2026-11-05.md) y [prueba de regresión específica](tests/validate-diputacion-c1-t04-t07-cierre-20261105.mjs) integrada en `npm test`. La corrección incluye la sustitución de un duplicado (**DIP-T04-021**), precisión de caducidad no indispensable (**DIP-T06-009**) y eliminación de ambigüedad de actos posteriores independientes (**DIP-T07-012**).

**Hallazgos verificables en BOE:** [**Ley 40/2015, arts. 9.5 y 24**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566): dictamen preceptivo **ya emitido** impide delegar resolución, y superior tiene **3 días** cuando recusado **niega** causa, mientras recusado informa **al día siguiente**; [**Ley 39/2015, arts. 30–32**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): plazos, registro en inhábiles, ampliación consular por máximo legal; [**Ley 39/2015, arts. 95–96**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): no caducidad de trámite no indispensable, excepción a oposición solo sancionador simplificado **leve**; y [**arts. 40–52**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): notificaciones, efectos y límites de propagación de invalidez.

**CONTADOR EDITORIAL REAL:** **7/121** temas con **cierre jurídico-pedagógico documentado** (C1 1–3 §102 + C1 4–7 §103); **114/121 pendientes**. Es un contador de **cierre editorial**; 51 bancos históricos anteriores no se incorporan sin acreditar su cierre. La **certificación integral de cinco capas** no está acreditada; el control de navegador/móvil/accesibilidad/PWA es **técnico transversal**, nunca ocasión para reabrir temas cerrados. Reabrir C1 4–7 solo por error legal concreto o reforma.

**SIGUIENTE BLOQUE:** **C1 temas 08–11**. Mantener trabajo por bloques de al menos cuatro temas nuevos, un solo commit por cierre y aviso únicamente de bloque concluido.

## 104. CIERRE POR BLOQUE DEFINITIVO — Diputación C1 temas 08–11 (05/11/2026)

**RESULTADO EDITORIAL:** cuatro nuevos temas, **8–11**, revisados en lote único, **80 preguntas y 320 alternativas**, coherencia de 4 manuales, 4 fuentes y 4 matrices. Modificación estructural conjunta [informe C1 8–11](content/diputacion-toledo/cierre-editorial-08-11-2026-11-05.md), [regresión automática](tests/validate-diputacion-c1-t08-t11-cierre-20261105.mjs), y manifiesto de programa. **Seis ítems ajustados**: **DIP-T08-010** suspensión por un mes desde registro competente; **DIP-T09-014** sede local publicada en **BOP** (sustituye duplicado); **DIP-T10-013** anulación no implica indemnización (sustituye duplicado); **DIP-T11-003** presentación inhábil en plazos por **días hábiles**; **DIP-T11-007** rechazo electrónico solo si obligatorio/elegido expresamente; **DIP-T11-013** publicación en **medio de convocatoria** (sustituye duplicado). **Ninguna posición correcta modificada**; 80 IDs preservados.

**FUENTES OFICIALES:** [**Ley 39/2015 arts. 106–126**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): caducidad/silencio revisión de oficio, lesividad, alzada, reposición y art. 117.3; [**Ley 40/2015, arts. 32–42**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566): solidaridad externa del art. 33, regreso con secuencia de plazos **15–15–10–5–5** y sede; [**RD 203/2021 art. 10.2**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032) para sede local; [**ROF arts. 151–153**](https://www.boe.es/buscar/act.php?id=BOE-A-1986-33252); [**RD 4/2010 ENI**](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331). Últimas redacciones consolidadas consultadas y programa C1 según **BOP Toledo 118/2026, 25/06, Anexo VII, CSV 2026.00002934**.

**CONTADOR:** se suman **4** cierres jurídico-pedagógicos al avance **7** anterior, por lo que quedan **11/121 AUDITADOS** y **110/121 PENDIENTES** de este mismo cierre. No se suman los 51 bancos de auditoría histórica sin certificado editorial. Navegador/móvil/accesibilidad/PWA son **controles técnicos transversales** no completados; no se declara certificación íntegra de cinco capas. No reabrir temas C1 **1–11** por más microauditorías, sino solo por **error probado o cambio legislativo posterior**.

**SIGUIENTE BLOQUE:** **C1 temas 12–15**, cada uno nuevo, sin repetición de 1–11. Registro único AUDITORIA_CONTINUA.md y commit único por bloque.

## 105. CIERRE POR BLOQUE DEFINITIVO — Diputación C1 temas 12–15 (**05/11/2026**)

**ALCANCE:** cuatro nuevos temas, **12–15**, con revisión jurídico-pedagógica agrupada de **80 preguntas y 320 alternativas** en sus cuatro manuales, cuatro fuentes, cuatro matrices y cuatro bancos. Informe de cierre [C1 12–15](content/diputacion-toledo/cierre-editorial-12-15-2026-11-05.md); prueba [regresión del lote](tests/validate-diputacion-c1-t12-t15-cierre-20261105.mjs) integrada a `npm test`. **No se alteran las posiciones correctas de las 80 preguntas**. Se precisaron **DIP-T12-010** (delegación mínima **5 años** solo a municipios), **DIP-T13-013** (sustituida duplicada por nueva **competencia 25.2.q** discapacidad/accesibilidad, reforma **03/10** vigente **23/10/2026**), **DIP-T14-008** (Toledo **27 diputados**, fuente institucional), **DIP-T15-007** (municipio matriz) y **DIP-T15-019** (separar nuevos entes sin personalidad y preexistentes).

**CONTRASTE PRIMARIO:** [**LRBRL**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) actualizada **03/10/2026**, [**Constitución**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), [**LOREG**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672), [**Ley 3/1991 CLM**](https://www.boe.es/buscar/act.php?id=BOE-A-1991-10111), [**Ley 27/2013 DT4**](https://www.boe.es/buscar/act.php?id=BOE-A-2013-13756) y [**Diputación Toledo 27/07/2023**](https://www.diputoledo.es/prensa/nAmpliada/4482). Temas 12 régimen local; 13 municipio, padrón y presupuesto; 14 provincia, organización y elecciones; 15 mancomunidades, comarcas, áreas y minor entities.

**CONTADOR EDITORIAL:** **15/121 temas AUDITADOS con evidencia de cierre editorial**, **106/121 pendientes**. Se conserva independiente de la certificación funcional integral web de cinco capas que sigue pendiente, y no se suman automáticamente antiguos bancos sin cierre documentado. No reabrir **C1 temas 1–15** salvo **error legal identificado** o **cambio normativo posterior**.

**SIGUIENTE BLOQUE:** **Diputación C1 temas 16–19**; un único cierre por bloque, sin regenerar C1 1–15.

## 106. CIERRE DEFINITIVO POR BLOQUE — Diputación C1 temas 16–19 (**05/11/2026**)

**Cierre jurídico-pedagógico:** cuatro temas nuevos, **16–19**, 4 manuales, 4 matrices, 4 fuentes, **80 preguntas / 320 alternativas**, sin reabrir C1 1–15. **10 preguntas redundantes** sustituidas, conservando ID y posición de respuesta. Informe [C1 16–19](content/diputacion-toledo/cierre-editorial-16-19-2026-11-05.md) y prueba [regresión C1 16–19](tests/validate-diputacion-c1-t16-t19-cierre-20261105.mjs) integrados en `npm test`.

**Errores de fondo corregidos:** persistía el dato de **2 años** para revisión de precios en **matriz del tema 16**, contrario al [**LCSP art. 103.5**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) (**20 % ejecutado y 1 año** con excepciones). Se cubren supuestos no repetidos de garantía **provisional 3 %** (**106**), modificación **no prevista** (**205**), mora de pago (**198**), perfección por formalización (**36**), resolución (**211**); adquisición simultánea de nacionalidad (**Ley 4/2011 art. 58**) y renuncia impedida (**57.2**); exclusión de antigüedad en carrera horizontal (**64.6**); procedimiento por faltas leves **con audiencia** (**143.3**) y vinculación con condena penal (**145.3**).

**Fuentes oficiales actuales:** [Ley 9/2017, actualización BOE **09/04/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902), [Ley 4/2011 CLM, actualización BOE **21/03/2024**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752), [TREBEP](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719). Los epígrafes proceden del **BOP de Toledo 118/2026, Anexo VII**.

**CONTADOR REAL DEL PROYECTO:** **19/121 temas AUDITADOS jurídico-pedagógicamente** y **102/121 pendientes**. No implica **certificación integral de cinco capas** (navegador real, móvil, accesibilidad y PWA son pruebas técnicas pendientes y transversales). No repetir revisión editorial C1 1–19 salvo error o reforma posterior. **Siguiente bloque: C1 temas 20–23**.

## 107. BLOQUE C1 20–23 — tres cierres editoriales y un tema en espera documental (05/11/2026)

**Trabajo publicado y documentado:** 4 manuales, 4 bancos, 4 matrices, 4 fichas de fuentes; **80 preguntas / 320 alternativas**, **22 ítems reemplazados o corregidos**. Temas **20, 21 y 23 AUDITADOS jurídicamente y pedagógicamente**; tema **22 aún NO plenamente certificado por falta de Estatutos originales y consolidados del OAPGT**. [Informe jurídico-editorial](content/diputacion-toledo/cotejo-bloque-20-23-2026-11-05.md) y [test de regresión](tests/validate-diputacion-c1-t20-t23-cotejo-20261105.mjs) incluidos en `npm test`.

**Errores materiales corregidos:** **DIP-T21-010** afirmaba **3 días naturales** para baja/variación TGSS, frente a **6 días naturales** vigentes desde **01/08/2026** por [RD 84/1996 art. 32.3.2.º](https://www.boe.es/buscar/act.php?id=BOE-A-1996-4447#a32). [ET actualizado **21/10/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430), nuevos plazos de suspensiones, reclamación judicial y faltas. [LGSS](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724), recargos y aportaciones. [LPRL](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), Comité/servicios prevención.

**Avance de fuente primaria T22:** [Acuerdo BOP 246/2023](https://bop.diputoledo.es/webEbop/DocGet?id=23122632%3B0&insert_number=7344&insert_year=2023) vigencia **2024–2027** y prórroga; [BOP 10/2026](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=97&insert_year=2026&publication_date=16012026) **C1 grado II 1.327,80 €/año**; [BOP 34/2026](https://bop.diputoledo.es/webEbop/DocGet?id=26020790%3B0&insert_number=821&insert_year=2026) nocturnidad especial **97,45 €**; [BOP 284/2011 Estatutos OAPGT](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011), arts. **1,4,8 bis,14**. **Pendiente:** Estatutos originales íntegros y todas sus modificaciones para composición/quórums/competencias completas. No inferir ni inventar.

**CUENTA REGRESIVA:** **22/121** temas jurídico-editoriales cerrados, **99 pendientes** incluido C1 T22. Certificación integral de navegador real/móvil/accesibilidad/PWA no acreditada. **PRÓXIMO BLOQUE: C1 temas 24–27**. No reabrir C1 1–21 y 23 sin reforma o error probado.

## 108. CIERRE JURÍDICO-PEDAGÓGICO POR BLOQUE — Diputación C1 temas 24–27 (05/11/2026)

**Bloque REAL terminado en un único lote:** **4 temas (24, 25, 26 y 27)**, 4 manuales, 4 bancos, 4 fuentes, 4 matrices, **80 preguntas y 320 alternativas**. Se sustituye el contenido redundante de **16 preguntas**, manteniendo todos los IDs y posiciones de respuesta correctas. Informe [C1 24–27](content/diputacion-toledo/cierre-editorial-24-27-2026-11-05.md) e integridad [test específico](tests/validate-diputacion-c1-t24-t27-cierre-20261105.mjs), integrados en `npm test`.

**Fuentes oficiales:** [**LO 3/2007**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115) y [**Ley 12/2010 CLM**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708): diferenciación de **Comisión de Igualdad art. 15** y **unidades art. 14**, informe **art. 6**, indemnidad **LO art. 9**. [**LGT 58/2003**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186): sujeto **sustituto 36.3**, recargos **5/10/20 % incompatibles**, apremio y compensación de oficio. [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) última publicación **07/10/2026**, que sustituye la fecha obsoleta de **03/06/2026** en los materiales; contraste de **arts. 14, 59, 162–171**. Presupuesto: **anexo personal, avance 6 meses, planes 4 años, acuerdo único, motivos tasados y entrada en vigor con publicación**.

**Control técnico transversal:** se adaptaron de forma única los **tests históricos de cierre C1 1–23** para verificar la identidad y las claves de SU BLOQUE ORIGINAL, en vez de imponer que el total global de temas auditados nunca pueda aumentar. Así no se reabre ni reedita el contenido de los temas ya cerrados.

**CONTADOR JURÍDICO-EDITORIAL:** antes **22/121**, ahora **26/121 auditados**, **95/121 pendientes**. **C1 tema 22 permanece pendiente de Estatutos OAPGT completos**, no se suma ni se reabre contenido verificado. El cierre integral funcional (móvil, web real, accesibilidad, PDF/PWA) no está demostrado. **SIGUIENTE BLOQUE: C1 temas 28–31**.

## 109. CIERRE JURÍDICO-PEDAGÓGICO DE BLOQUE — Diputación C1 temas 28–31 (**05/11/2026**)

**Resultado:** temas **28,29,30,31**, cuatro manuales y sus cuatro bancos, fuentes y matrices; **80 preguntas y 320 opciones** revisadas. **15 redundancias** sustituidas (tema 28: **6**, tema 29: **5**, tema 30: **0**, tema 31: **4**) conservando los ID y la posición de respuesta. [**Cierre y fuentes**](content/diputacion-toledo/cierre-editorial-28-31-2026-11-05.md) y [**regresión**](tests/validate-diputacion-c1-t28-t31-cierre-20261105.mjs) agregada al `npm test`. La regresión del bloque **24–27** se ajusta solo para admitir el avance incremental del contador sin reabrir sus temas.

**Cambios legales relevantes:** [**RGPD**](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa) arts. 20,33,34; [**Ley 19/2013**](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887) arts. 19,20,24 (**10 días**, **15 días**, **3 meses**); [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) consolidación publicada **07/10/2026** con **art.72.4 bis y 4 ter** por RDL **29/2026**, efectos períodos desde **08/10/2026**, recargo de hasta **150 %** turístico en zona tensionada según requisitos; **art.74.4** bonificación familia numerosa hasta **90 %** mediante ordenanza, **art.86** coeficiente **1,31** sin importe neto de negocios. [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) arts. 4,5,9.3: **15 años** de conservación en **art.9.3.a**, no 11.3.a, certificado máximo **5 años**, seguro privado mínimo **1.500.000 €** más **500.000 €** por tipo adicional.

**CONTADOR EDITORIAL REAL:** **30/121** temas AUDITADOS jurídico-pedagógicamente, **91/121** pendientes. La **certificación integral de la web** requiere todavía navegador real, móvil, accesibilidad y PWA. **C1 tema 22** permanece bloqueado por Estatutos OAPGT completos; no se suma.

**SIGUIENTE BLOQUE:** **Diputación C1 temas 32–35**. No volver a auditar C1 1–21,23–31 salvo error legal probado o reforma posterior.

## 110. CIERRE TÉCNICO-PEDAGÓGICO DE BLOQUE — Diputación Toledo C1 temas 32–35 (**05/11/2026**)

**Cuatro temas incorporados a cierre documental:** C1 **32 Windows 11 y unidades**, **33 Edge/GroupWise 24**, **34 impresión/escaneado**, **35 Writer LibreOffice 24**. Se han cotejado **4 manuales**, **4 matrices** con trazabilidad por incisos, **4 fuentes**, **80 preguntas y 320 alternativas**; **10 ítems redundantes o insuficientemente discriminantes** reemplazados, manteniendo **80 IDs** y la posición de respuesta de todos. [**Informe de cierre**](content/diputacion-toledo/cierre-editorial-32-35-2026-11-05.md), [**test automático**](tests/validate-diputacion-c1-t32-t35-cierre-20261105.mjs) integrado en `npm test` y en los controles del repositorio. El test de **28–31** se adapta para aceptar nuevos cierres sin reabrir ese bloque.

**Fuentes técnicas primarias:** [**Microsoft Explorador**](https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows) y [**asignación de recursos de red**](https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows): menu **Este equipo → Más → Asignar unidad de red**, letra lógica distinta de disco físico y nombre visible **Documentos** distinto de ruta; [**Microsoft Edge InPrivate**](https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge) y [**GroupWise 24**](https://www.novell.com/documentation/groupwise24/): retracción de mensajes internos **no leídos**, **no** correos externos, CCO excluido de Responder a todos; [**Microsoft escáner**](https://support.microsoft.com/en-us/windows/hardware/printer/install-and-use-a-scanner-in-windows): Store, **Imágenes/Scans**, ADF y cola; [**LibreOffice Guía 24.8 española**](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) corrige atajos mezclados, especialmente **Ctrl+G guardar, Ctrl+U nuevo, Ctrl+N negrita, Ctrl+S subrayar, Ctrl+E seleccionar y Ctrl+T centrar**. La ayuda online internacional da distintas combinaciones, por ello se explicita el idioma y configuración.

**CONTADOR EDITORIAL A 05/11/2026:** **34/121** temas con cierre jurídico o técnico-pedagógico agrupado (**87 pendientes**). **No** es certificación integral de navegador real, móvil, accesibilidad o PWA. **C1 tema 22** sigue reservado y bloqueado por Estatutos íntegros del OAPGT. **SIGUIENTE BLOQUE:** **C1 36–39**, sin rehacer C1 1–21 ni 23–35 salvo error material probado.

## 111. CIERRE TÉCNICO-PEDAGÓGICO EN BLOQUE — Diputación C1 temas 36–39 (**05/11/2026**)

**Bloque publicado y revisado:** **C1 T36 Calc**, **T37 Base**, **T38 Impress** de **LibreOffice 24** y **T39 componentes del PC**. Cuatro manuales, cuatro fichas de fuentes, cuatro matrices con trazabilidad por inciso, **80 preguntas / 320 alternativas**. Se sustituyeron **13 duplicaciones o redundancias** (T36 **4**, T37 **3**, T38 **1**, T39 **5**), preservando los **80 ID** y sus índices de respuesta. [**Informe de cierre**](content/diputacion-toledo/cierre-editorial-36-39-2026-11-05.md) y [**regresión específica**](tests/validate-diputacion-c1-t36-t39-cierre-20261105.mjs) integrados en `npm test`.

**Contraste de fabricante:** [**LibreOffice 24.8 español, atajos**](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) — **Ctrl+G guardar**, **Ctrl+U nuevo**, **Ctrl+B buscar**; [**Calc F4**](https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html) — referencias mixtas y fórmulas **SI, CONTAR.SI**; [**Base consultas**](https://help.libreoffice.org/latest/es/text/sdatabase/02010100.html) — **COUNT(*) vs COUNT(campo)**, parámetros **:Departamento** y relaciones con subformularios; [**Impress atajos**](https://help.libreoffice.org/latest/es/text/simpress/04/01020000.html) — **Ctrl+Mayús+G agrupar**, **Ctrl+Mayús+K combinar**; [**Intel memoria gráfica**](https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html), [**fuente de alimentación**](https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html), [**pasta térmica**](https://www.intel.com/content/www/us/en/gaming/resources/how-to-apply-thermal-paste.html) y [**Microsoft Secure Boot**](https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/secure-boot).

**CONTADOR EDITORIAL:** **38/121** temas con cierre documental (**83/121 pendientes**). **Tema 40** continúa pendiente; **tema C1 22** a la espera de Estatutos originales y modificaciones completas del OAPGT. Esta actualización **NO certifica** pruebas end-to-end de navegador, móvil, accesibilidad o PWA; continúan como tarea transversal.

**SIGUIENTE BLOQUE:** cerrar **Diputación C1 tema 40** y estudiar los Estatutos íntegros del OAPGT solo cuando exista documentación oficial suficiente. No reabrir C1 **1–21 ni 23–39** sin error probado o cambio de versión/norma.

## 112. CIERRE TÉCNICO-PEDAGÓGICO — Diputación Toledo C1 tema 40 (**06/11/2026**)

**Tema 40: Periféricos del ordenador personal.** Último bloque técnico pendiente de Diputación C1: manual, ficha de fuentes, matriz con **5 incisos**, banco de **20 preguntas y 80 alternativas** y ocho preguntas reformuladas (**DIP-T40-005, 008, 013, 015, 016, 017, 018 y 019**) preservando identificadores y posiciones de respuestas correctas. [**Informe detallado**](content/diputacion-toledo/cierre-editorial-40-2026-11-06.md), [**regresión**](tests/validate-diputacion-c1-t40-cierre-20261106.mjs) integrada en `npm test`.

**Fuentes cotejadas:** [**Microsoft Learn, FAT32**](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) — máximo **4 GiB menos 1 byte por archivo individual**, distinto de **4 GB decimales**; [**Microsoft Learn, políticas de extracción**](https://learn.microsoft.com/en-us/windows/client-management/client-tools/change-default-removal-policy-external-storage-media) — **Extracción rápida** vs **Mejor rendimiento**; [**USB-IF**](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf) — **USB 2.0 Tipo C** hasta **480 Mb/s**, sin USB4; [**Epson**](https://support.epson.com/select/For-Work/Printers/Impact-Dot-Matrix/LX-300%2B-II-Impact-Printer/p/C11C640001) — matriciales autocopiativas; [**HP Support**](https://support.hp.com/pl-pl/document/ish_2281139-2041471-16?fallbackLocale=us-en&validated=true) — **ppp/dpi** vs **ppm**; [**Microsoft controladores**](https://support.microsoft.com/es-es/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers) — Plug and Play requiere driver. DVD **4,7/8,5 GB** y lectores/grabadores cotejados con los apartados ya publicados.

**Avance editorial total:** **39/121 temas con cierre documental**, **82/121 pendientes**. En **Diputación C1, 39/40** temas auditados documentalmente; queda bloqueado el **tema 22** por Estatutos OAPGT completos y sus reformas. Nuevo rastreo añadido a `content/diputacion-toledo/tema-22/fuentes.md`: reproducción de BOP **11/10/1996**, corrección de errores **04/11/1996**, acuerdo **inicial** de reforma **23/12/2004**; son **pistas de terceros**, no se equiparan a documentos oficiales consolidados ni se certifican órganos y quórums.

**Límite de acreditación:** CI prueba esquema y bancos, pero siguen pendientes las pruebas **reales** de navegador, móvil, accesibilidad y PWA. **Siguiente tarea:** obtención y consolidación primaria de todos los Estatutos OAPGT para auditar **C1 tema 22**; si el texto íntegro sigue inaccesible, avanzar otras convocatorias, sin inventar normas especiales.

## 113. CIERRE DOCUMENTAL TÉCNICO-PEDAGÓGICO — Diputación Auxiliar C2 temas 17–20 (**06/11/2026**)

**Se continúa tras C1 39/40**, manteniendo **OAPGT tema C1 22 / C2 6 pendientes** a falta de Estatutos completos y todas sus reformas. Auditado por bloque **Diputación Auxiliar C2**: **T17 Edge/GroupWise 24, T18 Writer 24, T19 Calc 24 y T20 componentes/periféricos**. Revisión de **4 manuales, 4 matrices de epígrafe oficial, 4 fichas de fuentes, 80 preguntas y 320 alternativas**; **16 preguntas redundantes o insuficientes reformuladas** (T17: **3**, T18: **4**, T19: **4**, T20: **5**) manteniendo todas las claves e IDs. [**Informe completo**](content/diputacion-toledo-auxiliar-c2/cierre-editorial-c2-17-20-2026-11-06.md), [**regresión específica**](tests/validate-diputacion-c2-t17-t20-cierre-20261106.mjs) integrada en `npm test` y adecuación exclusiva del test de matrices para que admita el avance sin certificar los restantes temas C2.

**Fuentes principales:** [**Microsoft Edge**](https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge) — **Ctrl+Mayús+T** pestaña cerrada vs **Ctrl+Mayús+N** InPrivate; [**GroupWise 24 Client**](https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html) — **Bc no se incorpora a Reply to All**, retracción interna limitada; [**LibreOffice 24.8 español**](https://books.libreoffice.org/es/GS248/GS24814-AtajosDeTeclado.html) — **Ctrl+G guardar, Ctrl+N negrita, Ctrl+S subrayar, Ctrl+U nuevo, Ctrl+Mayús+S Guardar como**, en contraste con **Writer/Calc 24.2** internacional; [**Calc**](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html) — referencias mixtas, **CONTAR.SI**, **SI**; [**Intel**](https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html) — GPU integrada y RAM; [**Microsoft FAT32**](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), [**USB-IF**](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf) — **4 GiB - 1 byte**, **USB 2.0 Tipo C hasta 480 Mb/s**, ADF vs dúplex, ppp/dpi vs ppm.

**CÓMPUTO DOCUMENTAL (método uniforme por bloque):** de **39/121** a **43/121** temas con auditoría editorial documentada (**78 pendientes**). **Diputación C1 39/40** (T22 bloqueado); **Diputación Auxiliar C2 4/20** (T6 pospuesto). **0/121** con certificación funcional integral demostrada; quedan pruebas reales de navegador, móvil, accesibilidad y PWA. **Próxima prioridad:** auditoría focal de **La Puebla** por examen del **14/11/2026** y **UC3M** por examen **21/11/2026**, y continuar bloques C2 pendientes sin rehacer lo certificado; preservar aplazamiento OAPGT a último.

## 114. REFUERZO DE EXAMEN LA PUEBLA — temas 10–14 (**06/11/2026**)

**Motivo:** revisión prioritaria de las materias de fiscalidad, recaudación, impuestos, certificados electrónicos y órganos administrativos, para preparar el primer ejercicio cuyos parámetros sí constan en las **bases originales del BOP 82/2026, anuncio 2026.00001965**: **50 titulares + 5 reservas, 60 minutos, +0,20 por acierto, −0,05 por error, 0 por blanco, 5/10 mínimo**. **Fecha concreta de examen**: las bases remiten al tablón de la sede; la previsión de **14/11** es una información de seguimiento y no puede deducirse del anuncio inicial.

**Entregables:** [**20 preguntas originales de repaso con soluciones separadas, 4 opciones y explicación por artículo**](content/la-puebla/REPASO_FINAL_T10_T14_20261106.md), [**JSON de 20 preguntas/80 alternativas**](data/la-puebla-repaso-practico-20261106.json), enlaces al material desde los **cinco manuales T10–T14**, y [**regresión automática**](tests/validate-la-puebla-repaso-t10-t14-20261106.mjs) en `npm test`. El banco original de **12 preguntas por cada uno de esos 5 temas** se conserva con los mismos IDs y claves. **Distribución del repaso**: 5 respuestas correctas por letra A/B/C/D. **No** se incorpora a un simulacro de 50+5 ni modifica su ponderación real.

**Fuentes oficiales revalidadas**: [**LGT**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) arts. **27, 28, 58, 62**, [**TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) arts. **7, 9, 61, 82, 92, 106** y última publicación consolidada **07/10/2026**, [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) art. **11**, [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) arts. **4–5**, [**eIDAS**](https://eur-lex.europa.eu/eli/reg/2014/910/oj/spa) art. **20**, [**Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) arts. **10, 17, 24**. **Corrección puntual verificable:** el enlace de **LP-T12-010** apuntaba a redacción histórica **02/10/2026** (`p=20261002`); sustituido por [**art. 104, texto consolidado vigente**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214#a104), manteniendo íntegro enunciado, respuesta y clave.

**Contadores preservados:** **43/121** cierres documentales de bloque; **78/121** pendientes; **0/121** certificaciones integrales funcionales. Este refuerzo **no aumenta** el número de temas auditados: son **20 ejercicios adicionales**, un enlace corregido y una revisión de fecha fuente. Falta navegador/móvil/WCAG/PWA. Próxima prioridad: exámenes inminentes **La Puebla / UC3M**, después Diputación Auxiliar C2 pendientes con OAPGT C2 tema 6 reservado al final. No reabrir Carranque ni Las Ventas.

## 115. REFUERZO DE EXAMEN UC3M C2 — Temas 13–17 y 20 (**06/11/2026**)

**Fecha y programa:** convocatoria de [**34 plazas UC3M Auxiliar Administrativa C2, BOE-A-2026-14624**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624). [**Portal oficial UC3M**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) confirma el ejercicio el **21/11/2026**; llamamiento aportado: **10:00, campus Getafe**, aula concreta pendiente de nueva resolución (no presumir asignación).

**Nuevo recurso completo:** [**24 preguntas originales, 96 alternativas, soluciones razonadas por artículo, trampas, comparativas y cálculo de nota**](content/uc3m/REPASO_FINAL_T13_T20_20261106.md) y [**JSON de banco complementario**](data/uc3m-repaso-temas-13-20-20261106.json), enlaces directos desde manuales **13,14,15,16,17,20** y desde [**guía de examen**](content/uc3m/GUIA_EXAMEN_2026.md). Preguntas nuevas con reparto de **6 claves A/B/C/D** y **4 por tema**, sin tocar las **92 preguntas existentes** de estos seis temas ni los tres simulacros de 70+5 ya publicados. [**Regresión específica**](tests/validate-uc3m-repaso-t13-t20-20261106.mjs) incorporada a `npm test`.

**Fuentes primarias de las trampas:** [**LOSU**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500) arts. **4,5,12,45,46,57**: **25 % estudiantes del Claustro**, **51 % de PDI funcionarios y permanentes**, **10 % estudiantes/PTGAS en Consejo de Gobierno**, **5 % del presupuesto a investigación propia**; [**Estatutos UC3M**](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782) arts. **127,128,175,178–180**: **Rector propone Defensor y Claustro elige**, mandato **3 años con una reelección**, **mayoría simple** para Adjunto, **mayoría absoluta de presentes vs miembros** en reforma y **Rector** órgano de contratación; [**RD 822/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781) arts. **14 y 17**: **240** ECTS habituales de Grado, TFG **6–24** en Grado de 240 y Máster **60/90/120**; [**RD 534/2024**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858) arts. **3,7,22,25**: **6 vs 30 ECTS**, **3 materias + segunda lengua**, publicidad de admisión; [**LCSP**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) arts. **44,118** y [**Orden HAC/1517/2025**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605): **<15.000 € menor**, **>100.000 € recurso especial**, **≥216.000 € SARA UC3M** en servicios 2026–27, con salvedades legales.

**Formato auténtico del examen, anexo II:** **70 titulares + 5 reservas, 60 minutos, +1 punto directo por acierto, −1/3 por fallo, 0 blanco**. El **Tribunal** determina **M** (nota directa mínima para lograr **35 transformados**): **40 aciertos, 15 fallos, 15 blancos = 35 directos** NO permite declarar apto. **Fecha legal de corte** sigue pendiente de cotejo de la resolución original de listas definitivas, según **base primera.7**, y no se presume que sea la del examen. Se excluyen ejercicios sobre límites internos específicos de presupuesto **UC3M temas 18–19** sin lectura completa del Volumen I original.

**Contador correcto sin doble suma:** **43/121** cierres jurídico/técnico-editoriales de bloque, **78/121 pendientes**, **0/121** certificación funcional integral de navegador, móvil, accesibilidad y PWA. Este recurso es **refuerzo**, no nuevo cierre ni sustituto de los informes integrales de bancos UC3M de **04/11/2026**. Próxima prioridad: UC3M presupuesto **18–19** cuando se recupere fuente institucional integral; en su defecto continuar **Diputación Auxiliar C2** legal pendiente y conservar OAPGT hasta texto estatutario definitivo.

## 116. COTEJO DIRECTO DEL PRESUPUESTO UC3M 2026, VOLUMEN I — TEMAS 18–19 (**06/11/2026**)

**Fuente institucional recuperada y consultada directamente, no solo referenciada:** [**UC3M Presupuesto 2026, Volumen I (150 páginas)**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view), publicada en la [**Dirección Económico Financiera – Presupuestos**](https://www.uc3m.es/economico/presupuestos). Examinados los **arts. 4–11, 14.1–14.2, 15.2.1, 15.2.3 y 16.2–16.3**, con localización de página. [**BOCM 30/12/2025**](https://www.bocm.es/boletin/CM_Orden_BOCM/2025/12/30/BOCM-20251230-28.PDF) comprobado también visualmente y usado para cotejar **300.468.067,59 €** de ingresos y gastos, ingreso principal **cap. IV 146.834.705,33 €** y gastos del **cap. VI 61.808.477,69 €**, cuyo concepto 640 tiene **55.170.132,65 €**. Marco autonómico [**Ley 5/2025 de Hacienda CM, art. 108**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-3217#a108), en vigor **01/01/2026**.

**Resultados editoriales reales:** ampliados [**manual y fuentes T18**](content/uc3m/tema-18/manual.md) con tabla comparativa de vinculación **concepto vs capítulos I, II, VI** (art. 5), modificaciones y órganos **Rector / Consejo de Gobierno / Consejo Social y Gobierno CM** (arts. 6–8), nulidad de compromiso por encima del crédito (art. 10) y facturas **30/60/90/120 días** (art. 14.2); ampliados [**manual y fuentes T19**](content/uc3m/tema-19/manual.md) con tabla **RC/A/D/O/AD/ADO** (art. 15.2.1), unidad gestora por capítulos con excepciones, caja fija **≤5.000 € sin IVA** (art. 16.2), anticipos **≤12.000 €** y **un mes** de justificación (art. 16.3). Se eliminó de la ficha de fuentes T19 la equiparación confusa entre **O** del documento UC3M y el reconocimiento genérico de obligación: **O = propuesta de pago** en el texto institucional.

**Corrección de trazabilidad:** las dos preguntas **UC3M-T19-005 y T19-006** citaban **«pág. 103 aprox.»** para art. 15.2.1; localizado exactamente en **pág. 98/150**. El enunciado, opciones e índices correctos **B y D** siguen inalterados. **24 preguntas históricas / 96 alternativas** permanecen; [**informe de cotejo con 16 preguntas nuevas y 64 alternativas**](content/uc3m/COTEJO_FUENTE_PRIMARIA_PRESUPUESTO_20261106.md) y [**JSON complementario**](data/uc3m-presupuesto-supuestos-20261106.json) enlazados en la [**Guía del examen**](content/uc3m/GUIA_EXAMEN_2026.md). [**Regresión automatizada**](tests/validate-uc3m-presupuesto-t18-t19-20261106.mjs) se agrega a `npm test`; las preguntas nuevas no se mezclan con simulacros 70+5.

**Alcance declarado:** cotejo focal sobre artículos del **original institucional**, **NO** certificación de 150 páginas completas, de todos los reglamentos externos, ni de navegador, móvil, WCAG o PWA. No se ha alterado el estado heredado UC3M `EN_REVISION_USUARIO`, que requiere aprobación y revisión integral independiente. **Contador editorial global conservado: 43/121**, **78/121 pendientes**, **0/121 certificación funcional integral**. La base primera.7 de UC3M sigue exigiendo fijar fecha exacta de publicación de listas definitivas para el corte normativo; no asumir que es la fecha de examen.

**Próximo bloque de creación/revisión:** Diputación Auxiliar C2 temas jurídicos pendientes, preservando la reserva OAPGT tema 6 hasta disponer de los Estatutos completos y modificaciones oficiales; no reabrir temas ya corregidos sin nueva evidencia. Sigue prioritaria la proximidad del examen de la UC3M **21/11/2026**.


## 117. CIERRE DOCUMENTAL REAL, SIN REPASOS REPETIDOS — Diputación Auxiliar C2 temas 1–5 (**06/11/2026**)

**CINCO TEMAS QUE CAMBIAN EFECTIVAMENTE DE ESTADO:** **T1 Constitución**, **T2 Ley 39/2015, interesados y plazos**, **T3 Ley 39/2015, procedimiento, sanciones y simplificación**, **T4 recursos/revisión de oficio** y **T5 municipio, provincia, Diputación de Toledo y LOREG** pasan de `EN_REVISION_USUARIO` a `AUDITADO` documental. [Informe del bloque](content/diputacion-toledo-auxiliar-c2/cierre-editorial-c2-01-05-2026-11-06.md). **Cinco manuales**, **cinco fuentes**, **cinco matrices**, **cinco bancos** con **100 preguntas y 400 alternativas** que ya contaban con informes de cotejo literal y descarte de distractores de **04/11/2026**, preservados íntegramente: **0 cambios en enunciados, opciones, IDs o índices**. El cierre se basa en la consolidación de esa comprobación con nuevos cuadros comparativos de vigencia, plazos, órganos, competencias y supuestos de examen.

**Contraste primario de noviembre:** [Constitución BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) última actualización **20/05/2026**, reforma de **69.3**, mayorías **167/168**, garantías **55/116**, LOTC **3 meses / 20 días / 30 días**; [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) última actualización **06/11/2024**, reglas **3/6 meses** (art. 21), días hábiles/registro (30–31), **sancionador leve simplificado art. 96.5**, audiencia **10–15 días**, información pública mínimo **20 días**, **alzada 1/3 meses**, **reposición 1/1**, **lesividad 4 años** y **6 meses**, petición de suspensión **1 mes art. 117.3**; [LRBRL](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) última actualización **03/10/2026** y [LOREG art. 206](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672#a206) con **5 días, aval 1/3, tres suplentes, listas 40–60 alternadas**; Reglamento de Organización Administrativa Diputación BOP **14/02/2024** previamente contrastado. No se confunden órganos jurídicos con áreas políticas.

**NUEVO CONTROL:** [Test de cierre C2 01–05](tests/validate-diputacion-c2-t01-t05-cierre-20261106.mjs) sobre **100 IDs y 400 opciones**, sus 5 matrices, 5 manuales y referencias legales; el test histórico de matrices permite los **5 cierres nuevos**, sin confundirlos con temas aún pendientes. **Estado general C2:** **9/20 auditados** (1–5 y 17–20), **11 pendientes** (6–16). **Tema 6 OAPGT** permanece `BORRADOR`, sin atribuciones no demostradas a sus Estatutos.

**CONTADOR GENERAL OPOWEB:** **48/121 temas** con cierre jurídico/técnico-editorial documentado, **73 pendientes**. **La certificación funcional integral no está demostrada**: sin pruebas reales de navegación, móvil, WCAG y PWA. **Siguiente tarea efectiva:** cerrar **C2 temas 7–10**, luego **11–16**, sin generar repeticiones de temas ya cerrados ni reabrir Carranque.


## 118. CIERRE JURÍDICO-EDITORIAL REAL — DIPUTACIÓN AUXILIAR C2 TEMAS 7–10 (**06/11/2026**)

**CUATRO TEMAS PENDIENTES CERRADOS:** **T7 empleo público de Castilla-La Mancha**, **T8 prevención de riesgos laborales**, **T9 igualdad entre mujeres y hombres** y **T10 protección de datos y derechos digitales** cambian de `EN_REVISION_USUARIO` a `AUDITADO` en el manifiesto y matrices. [**Informe de cierre 07–10**](content/diputacion-toledo-auxiliar-c2/cierre-editorial-c2-07-10-2026-11-06.md) y [**regresión de 80 preguntas, 320 alternativas e índices de clave**](tests/validate-diputacion-c2-t07-t10-cierre-20261106.mjs). Se actualizan **16 ficheros** de temas (manual, fuentes, matriz y banco de cada uno), más el informe, el manifiesto y las pruebas. Se conserva el **cotejo individual del 04/11/2026**, que ya validó las 80 preguntas/320 alternativas y sus descartes. **0 IDs/enunciados/opciones/claves reescritos**, sin añadir repasos redundantes.

**Verificación legal realizada:** [Ley 4/2011 CLM consolidada BOE a **21/03/2024**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752) **NO integra** por sí sola modificaciones de **2026**, que se contrastan con [Ley 2/2026](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90086) (**art. 70.2**, libre designación específica) y [Ley 1/2026](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90065) (art. **121**, DA); plazo OEP **3 años** desde día siguiente a publicación (**19.4**), promoción interna **2 años** (**65.2**), concurso ordinario **67.2**. [LPRL consolidada **09/04/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [RD 39/1997 **17/10/2025**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853): delegados **31–49: 1**, **50–100: 2**, Comité **desde 50** y reunión **trimestral**, servicio prevención propio **más de 500** (o **250–500** con anexo I y otros supuestos); informes de delegados **15 días** salvo riesgos inminentes. [Ley 12/2010 CLM **30/06/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708) y [LO 3/2007 **02/08/2024**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115): actos discriminatorios, carga de prueba excepto penal, informes presupuestarios, equilibrio **40–60 %**, planes empresas **≥50**. [LOPDGDD **27/12/2025**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) y [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa): **14 años** consentimiento del menor en su ámbito, **1 mes** para derechos y conservación general de vídeo, **72 h** entrega excepcional de imágenes vs **72 h** aviso de brecha con supuestos y cómputos distintos.

**ESTADO GLOBAL SIN DOBLE CONTEO:** **Diputación C2 13/20** temas auditados documentalmente (**1–5,7–10,17–20**); **7** pendientes (**6 y 11–16**). **OpoWeb 52/121** temas con cierre editorial documental, **69/121** pendientes. **0/121** certificación funcional integral demostrada, sin tests E2E de navegador/móvil/WCAG/PWA. Tema **6 OAPGT** sigue `BORRADOR` por falta de fuente íntegra oficial consolidada. El test de matrices se amplía exactamente a 7–10 y continúa exigiendo `PENDIENTE_COTEJO_INTEGRAL` para 11–16.

**SIGUIENTE BLOQUE EFECTIVO:** **Diputación Auxiliar C2 11–13** (obligaciones tributarias, recaudación y tributos municipales), después **14–16**. No gastar turnos en repasos de temas cerrados ni reabrir Carranque.

## 119. CIERRE JURÍDICO-EDITORIAL TRIBUTARIO — DIPUTACIÓN AUXILIAR C2 TEMAS 11–13 (**06/11/2026**)

**TRES TEMAS PENDIENTES CERRADOS:** **11** principios, delegación, colaboración, beneficios, obligaciones, gestión tributaria y extinción; **12** recaudación voluntaria, fraccionamientos, compensación, devolución de ingresos, ejecutiva y apremio; **13** IBI, IAE, IVTM, IIVTNU y normas generales. Pasan de `EN_REVISION_USUARIO` a `AUDITADO` **jurídico-documental**, con [informe de cierre 11–13](content/diputacion-toledo-auxiliar-c2/cierre-editorial-c2-11-13-2026-11-06.md), **3 manuales**, **3 fuentes**, **3 matrices** y **3 bancos de 20 preguntas**. Se protege el [cotejo individual por opción 05/11/2026 del tema 11](content/diputacion-toledo-auxiliar-c2/tema-11/cotejo-integral-2026-11-05.md), [tema 12](content/diputacion-toledo-auxiliar-c2/tema-12/cotejo-integral-2026-11-05.md) y [tema 13](content/diputacion-toledo-auxiliar-c2/tema-13/cotejo-integral-2026-11-05.md). **60 preguntas, 240 alternativas, cero cambios en IDs, enunciados, opciones o claves**; este paso añade el cotejo legal de contenidos del manual frente a fuentes primarias y el cierre documental real, no un repaso redundante.

**Fuentes oficiales de noviembre:** [**TRLRHL (RDL 2/2004)**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), última actualización publicada **07/10/2026**; [**LGT (Ley 58/2003)**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186), última publicación consolidada **21/12/2024**; [**RGR (RD 939/2005)**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803), última publicación consolidada **31/01/2024**; [**RD 520/2005**](https://www.boe.es/buscar/act.php?id=BOE-A-2005-8662). **Hallazgos test:** delegación **Pleno + aceptación + dos boletines**, bonificación potestativa **hasta 5 %** por ordenanza (**TRLRHL 7 y 9**), sanciones **fuera** deuda (**LGT 58**), prescripción ordinaria **4 años** (**LGT 66**), plazo supletorio tributario **6 meses** con **apremio excluido** (**LGT 104.1**); plazos **liquidación 20 mes siguiente / 5 segundo mes**, **colectivos 1 septiembre–20 noviembre** con mínimo alternativo **2 meses**, **providencia 20 mismo mes / 5 mes siguiente** (**LGT 62**); recargos **5/10/20 % incompatibles**, las condiciones de aplazamiento reiterado del **161.2** y oposición al apremio tasada del **167.3**; impuestos **IBI/IAE/IVTM obligatorios** y **ICIO/IIVTNU potestativos**, IBI **concesión–superficie–usufructo–propiedad**, IAE persona física **sujeta pero exenta**, IIVTNU **lucrativa = adquirente / onerosa = transmitente** con sustituto si transmitente persona física no residente.

**Control técnico añadido:** [**test de 60 claves literales y 240 alternativas**](tests/validate-diputacion-c2-t11-t13-cierre-20261106.mjs) ejecutado por el `npm test` y por [`.github/workflows/validate.yml`](.github/workflows/validate.yml), ampliación del test de matrices solo a estos tres temas y adaptación de pruebas históricas **1–5 / 7–10 / 17–20** para permitir crecimiento monótono de cierres sin perder las comprobaciones de sus bloques originales.

**CONTADOR REAL:** **Diputación Auxiliar C2 16/20** auditados documentalmente; faltan **6, 14, 15, 16**. **OpoWeb 55/121** temas con cierre jurídico-editorial probado, **66/121** pendientes; **0/121** certificación funcional integral de navegador/móvil/WCAG/PWA. Tema **6 OAPGT** sigue `BORRADOR` por ausencia de Estatutos oficiales íntegros y modificaciones consolidadas. Próximo bloque **14–16**; no cerrar OAPGT por inferencia ni repetir temario certificado.

## 120. CIERRE DOCUMENTAL DE LOS ÚLTIMOS TRES TEMAS ORDINARIOS DE DIPUTACIÓN AUXILIAR C2 — **14–16** (**06/11/2026**)

**RESULTADO NUEVO:** temas **14** Administración electrónica y certificados, **15** órganos de las Administraciones Públicas y AGE (Ley 40/2015), y **16** operaciones Windows 11 Pro pasan de `EN_REVISION_USUARIO` a **`AUDITADO` documental**. Se integran los numerosos informes de cotejo del **05/11/2026**, los **3 manuales**, **3 fichas de fuentes**, **3 matrices** y **3 bancos de 20 preguntas**, con **60 ítems/240 alternativas** cotejados previamente opción por opción. **Se preservan íntegros IDs, enunciados, alternativas y claves**. [**Informe 14–16**](content/diputacion-toledo-auxiliar-c2/cierre-editorial-c2-14-16-2026-11-06.md) con inventario exacto de respuestas y referencias, [**prueba automatizada de 60 preguntas**](tests/validate-diputacion-c2-t14-t16-cierre-20261106.mjs), `npm test` y paso de [GitHub Actions](.github/workflows/validate.yml).

**T14 primarias:** [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) **9–12**, [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) **arts. 4–10**, último consolidado publicado **09/05/2023**, [**eIDAS 910/2014 consolidado 18/10/2024**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) y [**RD 203/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032). Revisión de firma de persona física/sello de persona jurídica, seguridad de soportes, prestadores y lista de confianza; **5 años** vigencia máxima certificado cualificado, **15 años** conservación del prestador, garantía **1.500.000 €** más **500.000 €** en términos legales y auditoría de prestadores **al menos cada 24 meses**; revocación frente a suspensión y **art. 9.2** consulta pública frente a **art. 10** responsabilidades.

**T15 primarias:** [**Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) consolidada publicada **02/08/2024**, **arts. 5–24 y 54–80**, [**LO 2/2024, art. 55 bis y DT 1.3**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-15936) y [**LCSP 9/2017**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) para la remisión contractual de **62.2.e**: delegación/avocación/encomienda/suplencia diferentes; órgano colegiado **Presidente + Secretario + mitad**, asunto no incluido exige **todos presentes y urgencia por mayoría**; recusado contesta **al día siguiente**, superior decide **3 días** si niega; **Ministros y Secretarios de Estado superiores**, **Subsecretarios y Subdirectores directivos** (estos últimos **no alto cargo**); **40–60 %** con régimen transitorio; umbrales de contratos de **900.000 €** supletorio y **12.000.000 €** para **Consejo de Ministros** en supuestos diferentes.

**T16 primarias de Microsoft:** [**Explorador de Windows 11**](https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows), [**rutas y asignación de unidad en red**](https://support.microsoft.com/es-es/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows), [**instalación de impresora**](https://support.microsoft.com/es-es/windows/hardware/printer/add-or-install-a-printer-in-windows), [**uso de escáner**](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows) y atajos Windows. `Windows+E`, `Ctrl+Mayús+N`, `Alt+Entrar`, papelera vs eliminación directa, `\\servidor\carpeta` vs `Z:`, impresora/cola, digitalización **ADF** vs **OCR** vs **dúplex**.

**COBERTURA CON PRUDENCIA:** **Diputación C2: 19/20** temas auditados documentalmente; único pendiente **6 OAPGT**, bloqueado hasta Estatutos **originales completos y reformas definitivas**. **OpoWeb total: 58/121** temas con cierre documental y **63/121** pendientes. **0/121** temas con certificación funcional integral de navegador, móvil, WCAG o PWA; no convertir la revisión de manual o bancos en certificación de la interfaz. A futuro, concentrar trabajo en **otras convocatorias y lagunas oficiales**, y recuperar el conjunto normativo OAPGT para los temas bloqueados C1 22 y C2 6; evitar repasos redundantes de temas recién cerrados.


## 121. CONTINUACIÓN MANUAL ASISTIDA — OAPGT fuentes históricas y UC3M tema 1 (**06/11/2026**)

**No se revierte el cierre Diputación Auxiliar C2 de los temas 1–5 y 7–20** (sección 120) ni se reabre Carranque. En el tema **6 OAPGT**, la investigación ha localizado el texto íntegro originario de **1996** en reproducción no oficial y el texto de la **aprobación inicial de reforma del 21/12/2004**, igualmente en una fuente secundaria. Las referencias exactas y su jerarquía probatoria quedaron añadidas a [fuentes T6](content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md), commit **b3d648713e92be6a9b1a6db527ad1c30a7e2bd1b**. La reforma **oficial de 2011** y el **BOP oficial de 2023** ya estaban documentados. **BLOQUEO NO RESUELTO:** falta acreditar aprobación definitiva de la reforma de 2004 y cotejar el texto íntegro actualizado contra fuentes oficiales. **T6 permanece BORRADOR**, sin aumentar el contador de auditorías C2 ni fingir un cierre.

**Avance temario examinable, UC3M C2 tema 1:** se amplía [manual](content/uc3m/tema-01/manual.md) de **8.461** a **16.980 caracteres** con contraste de la Constitución oficial consolidada al **20/05/2026**, sobre **artículos 53–55** (protección/amparo/suspensión), **81–91** (proyectos, proposiciones, ley orgánica, decretos legislativos/ley, veto del Senado, plazos **2 meses / 20 días naturales / 15 días**, convalidación **30 días**) y **137–155** (municipio, provincia, comunidades autónomas, reparto competencial, requerimiento y **mayoría absoluta del Senado** del artículo **155**). **No** se modifica la reforma del artículo **69.3** de 2026, ya correcta y trazada. Se actualizan [fuentes T1](content/uc3m/tema-01/fuentes.md) y [matriz T1](content/uc3m/tema-01/matriz.json), commits **afa00b233e1c970e22399a98bc5f6093601d8b63**, **b875ff8f840c89b6ea1a32ba14c0d715825aae68** y **41145daf54a07be5f05382ab3c7d227db121dc20**. Las **12 preguntas/48 alternativas** permanecen intactas y siguen respaldadas por el cotejo de **04/11**; no afirmar una nueva corrección completa sin realizarla.

**Estado honesto:** revisión **jurídico-documental focal** de UC3M T1, **no cierre integral**, no aprobación nueva, ni CI/Pages/navegador/móvil/WCAG/PWA confirmados después de estos commits. Contadores globales conservados: no sumar ni un cierre por esta ampliación. **Próxima acción prioritaria:** resolver el corte de legislación UC3M basado en la publicación de las listas definitivas, y los bloques no cerrados en las convocatorias con examen próximo; OAPGT seguirá con bloqueo documental hasta verificar la fuente definitiva.


## 122. AMPLIACIÓN ESTATUTARIA UC3M TEMA 15 — SERVICIOS, HACIENDA Y REPASO (**06/11/2026**)

**AVANCE EFECTIVO:** ampliado el [manual de **UC3M tema 15**](content/uc3m/tema-15/manual.md) de **14.602 a 22.806 caracteres** con **cinco nuevos apartados analíticos** e información específica verificable de los **Estatutos UC3M Decreto 1/2003**, arts. **157–165, 167–171, 174–175 y 177**. Se introducen tablas **Rector/Consejo de Gobierno/Consejo Social/Gerente/Secretario General**: competencias de creación, supresión, reglamentos y nombramientos de servicios; **Biblioteca 8 % del capítulo bienes y servicios, no del total** (161.4); **inventario Gerente anual/registro Secretario General** (169); anteproyecto, presupuesto y memoria económica (170–171); auditoría externa **anual**, nombramiento **no superior a cinco años** (174); contratación del **Rector** y acuerdo del **Consejo Social** para inversiones **>un año con financiación comprometida de ejercicios futuros** (175–177). Fuente primaria [**BOE Estatutos**](https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782) y referencia complementaria a [**reforma Decreto 95/2009 BOCM**](https://www.bocm.es/boletin/CM_Orden_BOCM/2009/12/04/2009-12-04_02122009_0045.pdf). **Commit del manual inicial** `ab3d9b0d329076ef6d3bc0e2b03ab8d007653c9b` y enlace a nuevo repaso en commit `a696ed48421a6701dd965d40afeadc19a8a334f2`.

**RECURSO PEDAGÓGICO NUEVO:** [**8 preguntas/32 alternativas sobre los mismos artículos**](content/uc3m/REPASO_T15_SERVICIOS_Y_ECONOMIA_20261106.md), con plantilla y explicación por ítem (commit `8c7f4e65bd889afd3da1b897fab257d67adf3267`). Se actualizan [**fuentes T15**](content/uc3m/tema-15/fuentes.md), [**matriz T15**](content/uc3m/tema-15/matriz.json) y [**guía examen UC3M**](content/uc3m/GUIA_EXAMEN_2026.md). Los **21 ítems/84 alternativas** históricos y los **3 simulacros 70+5** permanecen sin editar, evitando impactos en estadísticas y claves. Esta entrega constituye **ampliación jurídico-editorial focal**, no reclasificación a `AUDITADO`, ni certificación integral de reglamentos, banco, interfaz o navegación.

**CORTE LEGAL UC3M:** [**página institucional del proceso**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra apartado de **resolución definitiva de admitidos**, pero el contenido original de la resolución **no ha podido verificarse mediante acceso público independiente**. Calendario de la academia ADAMS indica **01/10/2026**, como **referencia secundaria no concluyente**, no prueba del día jurídico exigible. La **base primera.7 de BOE-A-2026-14624** sigue rigiendo el corte. No atribuir el **23/10/2026** de la anulación judicial de RD 905/2025 a ese corte sin original de la resolución. **Próxima prioridad**: conseguir/resolver el documento institucional primario o continuar los bloques temáticos UC3M de mayor rendimiento sin fingir cierre.

**Contadores globales conservados:** **58/121** cierres jurídico-editoriales documentales y **0/121** certificaciones funcionales integrales probadas al corte anterior; **Diputación Auxiliar C2 19/20**, tema 6 OAPGT bloqueado. Esta ampliación **no** suma nuevos cierres, ni permite afirmar que GitHub Actions / Pages estén verdes sin comprobación efectiva.


## 123. NORMATIVA UC3M DE 2026 RECUPERADA — TEMAS 16 Y 17 (**06/11/2026**)

**NUEVA FUENTE INSTITUCIONAL IDENTIFICADA Y LECTURA DE ARTÍCULOS:** [**Boletín Oficial Electrónico UC3M de 22/01/2026, acta del Consejo de Gobierno 11/12/2025**](https://sede.uc3m.es/boel/anexo/11307/), **Anexo 3, páginas 20–40**, que aprueba una nueva normativa de **reconocimiento/transferencia** de créditos (vigencia desde **23/01/2026**, derogación normativa de 2010), y **Anexo 5, desde pág. 47**, que modifica la normativa UC3M de cambio de estudios y universidad. El contenido textual original se pudo leer y cotejar por artículos. **Precaución:** la operación de captura visual del PDF devolvió error, por tanto **no se certificó su inspección visual**, no atribuirla al cierre.

**TEMA UC3M 16:** [manual](content/uc3m/tema-16/manual.md) ampliado de **13.238 a 18.223 caracteres**. Añadidos reconocimiento de formación básica del mismo campo, excepciones de TFE por movilidad (art. 4), **6 ECTS** ordinarios y tope excepcional del **10 %** del plan por actividades (14), **25 %** como límite de FP superior (15); ventanas mínimas **1 julio–15 septiembre**, resolución **antes de 1 noviembre**, solicitudes posteriores **90 días**, actividades **30 días** (16, 19, 20); **Decano/Director** resuelve reconocimiento, **alzada al Rector** (19, 21); transferencias (27), oficiosidad ligada a admisión parcial (DA1) y transitoriedad. Actualizadas [fuentes](content/uc3m/tema-16/fuentes.md) y [matriz](content/uc3m/tema-16/matriz.json). Commits **a81af0d356f214b3cb7da54ca16cb103abddd867**, **467e2944479fd8dd176b334e818f700248b2eef3**, **43587ba7c11c8933e41888e8803e34b2035a24bc** y enlace final **94eb53bcf292f48b80caf7c943654b3921cc2727**.

**TEMA UC3M 17:** [manual](content/uc3m/tema-17/manual.md) ampliado de **15.966 a 20.205 caracteres**. Reforma interna de traslados: **Rector** fija plazas y reserva del **50 % del cupo de traslado** a alumnado UC3M (art. 1); **30 ECTS reconocibles**, con excepción de solicitar siendo alumno interno con **30 matriculados** (art. 2), **Centro** propone reconocimiento al **Rector** antes del **día 15 del mes siguiente** a recibir expediente (3), adjudicación interna general **antes del 15 junio** (4.1) y para procedentes de otras universidades españolas **60 ECTS pendientes en origen** y resolución **antes del 10 de junio** (4.2). Actualizadas [fuentes](content/uc3m/tema-17/fuentes.md) y [matriz](content/uc3m/tema-17/matriz.json). Commits **076e034dca463cdeb7d7035b96eef18518b39df3**, **abfc8fa7f538686cbd5077ed19aa5142678db48a**, **b3b00b17a5ecbe40aba0074996ea908152d728fe** y enlace final **e22632e093424534d359a534ebb3fdcb7cbb3491**.

**RECURSO DOCENTE NUEVO:** [**12 preguntas originales/48 opciones y 12 soluciones comentadas con 12 bloques de foco**](content/uc3m/REPASO_NORMATIVA_2026_T16_T17_20261106.md), commit **e23a0854ebe1fdbc096ed98d9c6fd84bfdf97200**, enlazado desde los manuales y [guía UC3M 2026](content/uc3m/GUIA_EXAMEN_2026.md) (**1a38dfd4de213d202505dcb6fc5c27774ea3cf61**). Verificado por lectura de archivos GitHub: **12** enunciados, **48** alternativas, **12** soluciones, **12** focos; matrices JSON válidas; los bancos previos de **21 preguntas T16** y **12 preguntas T17**, incluidos sus SHAs existentes, permanecen **sin modificar**. No se ha integrado el repaso en simulacros **70+5**.

**LÍMITES Y SIGUIENTE BLOQUE:** ambos temas siguen **`EN_REVISION_USUARIO`**: no acreditar aprobación integral, E2E/navegador/WCAG/PWA o fecha jurídica exacta de listas definitivas sin evidencia. Se mantiene el problema de corte de la **base primera.7 UC3M**, aunque fuente secundaria ADAMS indique **01/10/2026**. Próximo paso: priorizar lagunas restantes del temario UC3M con documentación primaria y contraste de preguntas sin perder las correcciones de **2026**. **Contadores sin cambios: OpoWeb 58/121 cierre documental / 0/121 certificado integral; Diputación C2 19/20 (tema 6 bloqueado)**.


## 124. REFUERZO REAL DE OFIMÁTICA UC3M — TEMA 9 (06/11/2026)

**Estado anterior comprobado:** el [**tema 9 UC3M**](content/uc3m/tema-09/manual.md) poseía manual (11.946 caracteres), fuentes y banco de **12 preguntas/48 opciones**, cotejados el **04/11/2026**; la **matriz** mostraba **cero preguntas directas** en los apartados de **Word 2019: revisión/correspondencia** y **Excel 2019: gestión y análisis**. No reiniciar el banco ni modificar las preguntas de simulacros.

**NUEVA AMPLIACIÓN PUBLICADA EN GITHUB:** el [**manual T9**](content/uc3m/tema-09/manual.md) añade secciones detalladas **4.1–4.2**, **7.1**, **8.1** y **13.1–13.2** con cuadros y focos de examen: combinación de correspondencia, registros, campos, destinatarios y vista previa **Word 2019**; validación (alerta Detener frente a Advertencia), formato condicional, filtros, ordenación y protección de hoja **Excel 2019**; operadores de búsqueda de **Gmail**; permisos y eventos privados en **Calendar**; filtros, vistas y protección de intervalos en **Sheets**. Manual originalmente actualizado en commit `35d676a1f3150ef02f87064d60602717c6c8d2e1`, y añadido enlace al repaso en `be540252b75d9680c2700fc341d18f67d726b45d`.

**Fuentes técnicas oficiales contrastadas:** [**Word 2019, combinación**](https://support.microsoft.com/es-es/word/set-up-a-new-mail-merge-list-with-word), [**Excel 2019, validación**](https://support.microsoft.com/es-ES/Excel/get-started/apply-data-validation-to-cells), [**Excel 2019, filtros**](https://support.microsoft.com/es-es/excel/get-started/filter-data-in-a-range-or-table-in-excel), [**Gmail, operadores**](https://support.google.com/mail/answer/7190?hl=es), [**Sheets, vistas de filtro**](https://support.google.com/docs/answer/9245556?hl=es), [**Calendar, permisos**](https://support.google.com/calendar/answer/15716974?hl=es). También contrastadas fuentes de protección/formato Microsoft y Sheets. Los enlaces de manuales genéricos no se aplican indiscriminadamente a funciones exclusivas de Microsoft 365. [**Fuentes T9**](content/uc3m/tema-09/fuentes.md) actualizadas en `b7fd81cd42e0f03c218fa0e70ba6a0c420d17e5e`.

**Recurso pedagógico NUEVO:** [**12 preguntas/48 opciones con plantilla, explicaciones y focos individuales**](content/uc3m/REPASO_OFIMATICA_T09_20261106.md), commit inicial `1e3afd813ae29df566ecfcb07c09ba50ec5279d7`; reparación de dos URLs de Microsoft contrastadas en `a7b2db1fc677dda50a6b5d7ddc695fd293a17a5c`. Separado expresamente de las **12 preguntas** históricas del T9 y de los **3 simulacros 70+5**. La [**matriz T9**](content/uc3m/tema-09/matriz.json) registra cobertura complementaria, original inalterado y límites de certificación (commit `02b9a9fea2a3db260a177c1c7a1f29ca4c930795`). Enlace añadido a la [**guía UC3M**](content/uc3m/GUIA_EXAMEN_2026.md), commit `04571023c427ea2e3c22951d0d6332fcd4f4bcab`.

**Resultado y límites:** se ha remediado la **laguna de preguntas directas** sobre dos bloques principales y reforzado el temario complementario, pero **`EN_REVISION_USUARIO` sigue vigente**; no se ha certificado cumplimiento global del sitio en navegador, móvil, WCAG ni PWA; no se ha fijado una nueva fecha exacta del corte normativo UC3M por una fuente primaria que no se tiene. No sumar un tema nuevo al inventario ni convertir ampliación focal en cierre completo. **Contadores preservados de sección 123: 58/121 cierres documentales / 0/121 certificación integral; Diputación C2 19/20, OAPGT T6 pendiente.**

**Siguiente avance sugerido:** revisar las matrices de otros temas UC3M para encontrar bloques todavía sin preguntas directas y estudiar sus normas específicas, manteniendo las fuentes, claves y simulacros de los bloques ya cotejados.


## 125. UC3M TEMA 8 — REFUERZO DE CUATRO LAGUNAS OFICIALES DE IGUALDAD (**06/11/2026**)

**Estado de partida:** [matriz T8](content/uc3m/tema-08/matriz.json) con **13 bloques**, de los que **cuatro carecían de preguntas directas**: consecuencias jurídicas y tutela, empleo público, identidad y expresión de género en UC3M y lenguaje/imagen inclusivos. El banco histórico del tema era de **12 preguntas/48 alternativas**, con cotejo **04/11/2026**. No reabrir innecesariamente sus claves.

**NUEVO AVANCE DOCUMENTAL:** ampliado [manual de T8](content/uc3m/tema-08/manual.md) de **11.630 a 22.773 caracteres** en cinco apartados **5.1, 8.1, 10.1, 13.1** y cierre de repaso (commits `f928f5a10412d208f1c81d4ca37a9c24f4923714`, `7fc9b07de45952114ab463feda3a77a32df5f6c8`): tablas de **LO 3/2007 arts.10–13** (nulidad, tutela, litigios de acoso y excepción de procesos penales en carga probatoria); **51, 55, 61–62** (criterios para todas las Administraciones frente a previsiones expresas para **AGE**); [**resolución institucional 13/07/2017**](https://sede.uc3m.es/boel/anexo/534/) (Unidad de Igualdad, RRHH, servicios académicos, nombre interno vs documentación oficial externa); [**medidas 1.18–1.24 III Plan UC3M**](https://www.uc3m.es/ss/Satellite/Igualdad/es/TextoDosColumnas/1371328944507/Buenas_practicas_en_el_tratamiento_del_lenguaje_en_igualdad) y [**guía de imágenes inclusivas**](https://www.uc3m.es/ss/Satellite/Igualdad/es/TextoDosColumnas/1371328946865/Buenas_practicas_en_el_tratamiento_de_imagenes_en_igualdad). Separados deber legal, medidas del plan y recomendaciones.

**RECURSO PEDAGÓGICO NUEVO:** [**repaso T8 de 12 preguntas/48 alternativas**](content/uc3m/REPASO_IGUALDAD_T08_20261106.md), con plantilla, explicación, fuente enlazada y **12 focos**; commit `3e4e86729f3e46d35bd4dbc9e2f3250156c731cf`. Distribuidas **3 preguntas por cada uno de los cuatro vacíos**, sin alterar banco original, claves ni simulacros. [**Fuentes T8**](content/uc3m/tema-08/fuentes.md) ampliadas (commit `7fe6c0243ad28e1b921fdf5b5b963651044d39ee`); [**matriz T8**](content/uc3m/tema-08/matriz.json) con trazabilidad apartado/artículo/preguntas (commit `6b0841df1355e1f3652b36c523ccaf217d9a8225`); enlace en [**guía examen UC3M**](content/uc3m/GUIA_EXAMEN_2026.md) (commit `4d89bbf43bde9bd5e0aaf897645678440cdb2d44`).

**QA REAL POR LECTURA DE GITHUB:** archivo nuevo con **12 preguntas numeradas 1–12**, exactamente **48 opciones (cuatro por pregunta)**, **12 soluciones** y **12 bloques de foco**; matriz JSON válida, manual/fuentes/guía enlazados; banco histórico [**preguntas T8**](content/uc3m/tema-08/preguntas.json) conserva SHA **5f27398b01fd7d870c9731a2f742140f088afd6e** y **12 ítems**. **No** se ejecutó test E2E ni inspección de navegador. La recuperación textual del **PDF de la resolución 2017** fue posible, pero su captura visual falló; **no afirmar inspección visual del PDF** ni que la instrucción de 2017 prevalezca automáticamente sobre legislación posterior.

**ESTADO HONESTO:** T8 continúa `EN_REVISION_USUARIO`; es una mejora focal, **no** certificación jurídica integral del tema o de normativa posterior, ni aprobación del usuario o validación funcional. El corte legal UC3M de **base primera.7** sigue pendiente del original de listas definitivas. **Contador editorial global conservado: 58/121 cierres documentales, 0/121 temas con certificación integral**; **Diputación Auxiliar C2 19/20**, OAPGT T6 todavía bloqueado. Próxima prioridad de estudio: bloques sin preguntas directas de **UC3M T10–T14** (en especial PRL T12 o LOSU T13), sin duplicar el trabajo de T8/T9/T15–17.


## 126. UC3M TEMA 12 — REFUERZO LEGAL Y PEDAGÓGICO DE CUATRO LAGUNAS (**06/11/2026**)

**Estado de partida:** [matriz T12](content/uc3m/tema-12/matriz.json) contenía cuatro apartados **sin pregunta específica** en un banco original de **12 preguntas y 48 alternativas**: **ámbito** (art. 3), **personas especialmente sensibles** (arts. 25–28), **consulta** (arts. 33 y 36) y **coordinación** (art. 24 y RD 171/2004). Los 12 ítems históricos estaban cotejados desde **04/11/2026**, y su SHA no se ha modificado.

**AMPLIACIÓN EFECTIVA:** [manual T12](content/uc3m/tema-12/manual.md) ampliado de **15.108 a 23.910 caracteres**, incorporando cuadros comparativos y ejemplos de examen en apartados **18–21**. **LPRL art. 3:** personal laboral, funcionario y estatutario cubierto, exclusiones funcionales limitadas; **arts. 25–28:** protección especial, embarazo y lactancia, menores **18 años**, temporales y ETT; **arts. 33 y 36:** deber previo de consulta, **15 días** para informe de **Delegados de Prevención** y **tiempo imprescindible** ante riesgo inminente, deber de motivar el rechazo de una propuesta preventiva; **LPRL 24 y RD 171/2004:** concurrentes cooperan, titular informa, empresario principal vigila, comunicación escrita de riesgos graves o muy graves según el supuesto. Fuentes HTML **BOE consolidadas consultadas directamente**: [Ley 31/1995](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) (última actualización **09/04/2026**) y [Real Decreto 171/2004](https://www.boe.es/buscar/act.php?id=BOE-A-2004-1848). Commits manual **1bb5081be2b0760e9bb32ac3f600e1dd2c38c1f2**, **5dae1d21b14d4413f12ba93f77fd35def378a185**, **d4cb68df1e7c9935d52bd0d29d70591f9f7a77c7**, **3ae88eb7d53cfede48963061ef3ec00636951cbc** y enlace **e84caeef6b8ddee5fbecfe02f809bac05c976018**.

**RECURSO PEDAGÓGICO NUEVO:** [**12 preguntas y 48 opciones con 12 soluciones justificadas y 12 bloques de Foco**](content/uc3m/REPASO_PRL_T12_20261106.md), commit **502ec138ef02f5bf904d7db74c033965657356ba**. Tres preguntas sobre cada laguna. [Fuentes T12](content/uc3m/tema-12/fuentes.md) ampliadas, commit **16ec23b886c6c9e55f2854589497bed58800849a**; [matriz T12](content/uc3m/tema-12/matriz.json) actualizada con trazabilidad inciso→artículo→nuevas preguntas, commit **54d4fee494a633066681ebbb50d1e5e1484c9d3c**; [guía de examen](content/uc3m/GUIA_EXAMEN_2026.md) enlaza el repaso, commit **34cd565c4d0f3f245a6fc9d4d77f5fc356bf13f0**.

**QA realizado por lectura GitHub:** **12 preguntas nuevas**, **48 alternativas** (**cuatro por pregunta**), **12 soluciones**, **12 focos**; **JSON de matriz válido**, cuatro secciones nuevas, fuentes, manual y guía enlazados. [**preguntas originales T12**](content/uc3m/tema-12/preguntas.json) conservan **12 ítems y SHA 346c93855ec3af467cf7fdb2bc678f08ef0c3b9f**. No se han modificado claves originales ni los simulacros **70+5**. No se ejecutó CI ni prueba funcional de navegador, móvil, WCAG/PWA. **No hubo análisis de PDF**: la verificación normativa se basó en HTML oficial consolidado BOE.

**Estado y siguiente:** T12 permanece `EN_REVISION_USUARIO`, refuerzo **focal** y no cierre jurídico-editorial global ni certificación funcional. Sigue pendiente corroborar con resolución primaria la fecha de corte normativo de **base primera.7 UC3M**. Contadores documentales anteriores conservados **58/121** y certificación funcional integral **0/121**; **Diputación C2 19/20, OAPGT T6 pendiente**. Siguiente prioridad: revisar vacíos de **UC3M T13 LOSU** sin duplicar esta ampliación T12.


## 127. UC3M TEMA 13 — LOSU: CUATRO LAGUNAS CON FUENTE PRIMARIA Y REPASO (**06/11/2026**)

**HALLAZGO PREVIO:** la [matriz del tema 13](content/uc3m/tema-13/matriz.json) contenía **cuatro bloques sin pregunta propia en el banco original de 12 ítems**: **coordinación y cooperación institucional**, **estructuras universitarias**, **principios de docencia** y **cooperación universitaria**. Los ítems originales se habían cotejado el **04/11/2026**; no se reescriben ni se alteran sus claves.

**FUENTE PRIMARIA:** [**Ley Orgánica 2/2023, del Sistema Universitario (LOSU), consolidado del BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500), última actualización publicada **02/08/2024**. Comparación focal de los **arts. 6–17 y 40–43** mediante HTML BOE; el propio texto consolidado es informativo, y la publicación oficial prevalece. No se analizaron PDFs en esta revisión.

**MEJORA REAL DEL TEMARIO:** [**manual UC3M T13**](content/uc3m/tema-13/manual.md) ampliado desde **12.163** hasta **25.868 caracteres**, con nuevos **apartados 5.1, 7.1–7.2, 9.1 y 12.1**, tablas y focos:
- **LOSU 14–17**: **Conferencia General de Política Universitaria** (política universitaria, informe preceptivo de creación, oferta general de enseñanzas y plazas, **art. 15.1.e**), **Consejo de Universidades** (coordinación académica y verificación de planes, **art. 16.1.e**) y **CEUNE** (participación y mínimo **40 % de cada sexo**, **17.4**). Se distingue la denominación literal «Ministerio de Universidades» del nombre actual de departamentos, no verificado.
- **LOSU 40–43**: facultades/escuelas se crean por acuerdo de **Comunidad Autónoma** con propuesta/aprobación del **Consejo de Gobierno de la universidad** (**41.1**); departamentos, institutos y escuelas de doctorado corresponden a **universidad** (**41.2**); adscripción (**42**); unidades básicas (**43**, diversidad/discapacidad, igualdad, defensoría e inspección).
- **LOSU 6–9**: docencia **preferentemente presencial**, también virtual/híbrida; participación del **estudiantado** en planes y guías; enseñanza oficial vs propia; inscripción **constitutiva** de títulos oficiales en **RUCT**, no oficialidad automática de título propio.
- **LOSU 11–14**: colaboración con otras universidades y agentes públicos/privados, ciencia abierta, depósito por **PDI** de **versión final aceptada** y datos en la fecha de publicación (**12.2**), límites por propiedad intelectual/industrial y secreto empresarial (**12.11**).

**COMMITS MANUAL:** `8094e7e286a8eb2424a72f24be93e282560ff8f8`, `43e4b842e4307b0ef43d2aec021b579bc2c8090d`, `8d00bb2b2f3950fd0969b5a0a4d33766527ca4c8`, `d9ec357b120cfc9463aa02883865b8d3fbd725ce`, enlace repaso `87cc23e1e913381639748f85b5fb5f1590c626ba`.

**NUEVO RECURSO DIDÁCTICO:** [**repaso de 12 preguntas/48 alternativas, 12 explicaciones y 12 bloques de foco**](content/uc3m/REPASO_LOSU_T13_20261106.md), tres por cada bloque, plantilla de respuestas (creación `f8b41af7e7b7ae86c19e8cfb225777cb8785a6b8`; finalización `6481a0b3550aab1b1fdbf3acd1aaf6594baff997`). [**Fuentes T13**](content/uc3m/tema-13/fuentes.md) ampliadas y trazadas (commit `777863dfe538657c5245b45fd5358e709d8d6500`), [**matriz T13**](content/uc3m/tema-13/matriz.json) con trazabilidad inciso→artículos→preguntas (commit `2f0954794238e76f1e49fa38eb2a0da8e5fe3d39`), y [**guía UC3M**](content/uc3m/GUIA_EXAMEN_2026.md) enlaza el recurso (commit `45b243494c9b41667ac246d2c1d77571c8c7db09`).

**CONTROL QA REAL por lectura GitHub:** **12 preguntas** ordenadas, **48 alternativas (cuatro por pregunta)**, **12 respuestas**, **12 focos**. [**Banco original T13**](content/uc3m/tema-13/preguntas.json): **12 ítems**, SHA **c4b6cf79e447ba6649862f456d8a9e620c4f33b8** inalterado. Matriz JSON válida, manual y guía enlazados. **Sin ejecución CI, navegador real, móvil, WCAG ni pruebas PWA**, sin certificación integral ni incorporación a simulacros.

**LÍMITES/ESTADO:** tema sigue `EN_REVISION_USUARIO` (valor heredado del repositorio): ampliación **focal**, no cierre documental global ni aprobación del usuario. La **base primera.7 UC3M** sigue pendiente de la resolución primaria para fijar fecha exacta de corte normativo; no asumir automáticamente el día del examen **21/11/2026**. Conservar contadores globales precedentes **58/121 cierres documentales**, **0/121 certificados integralmente**, **Diputación C2 19/20** con **OAPGT T6 bloqueado**.

**Próximo bloque sugerido:** examinar las lagunas del **UC3M T14 (LOSU II)**, especialmente PDI e igualdad, sin repetir T13 ni alterar preguntas originales.


## 128. AUDITORÍA TRANSVERSAL UC3M + INTEGRACIÓN DE 126 REPASOS EN LA WEB (**06/11/2026**)

**NECESIDAD DETECTADA POR EL USUARIO:** evitar procesar un tema aislado cada vez y dejar de producir material de repaso que solo existe en Markdown, **sin estar accesible en el motor de práctica**. Se prioriza cerrar el circuito **fuente oficial → pregunta con explicación → recurso estructurado → botón de entrenamiento → test automatizado**.

### A. Diagnóstico conjunto de 20 temas UC3M

Creado [**COTEJO_LAGUNAS_MATRICES_20_TEMAS_20261106.md**](content/uc3m/COTEJO_LAGUNAS_MATRICES_20_TEMAS_20261106.md), commit **d9011b459142cae029cccac30688043b0b560f73**: **20 matrices**, **183 bloques** declarados y **24 bloques en 9 temas** con `preguntas: []` en el banco histórico. Todos los **24** tienen ahora **refuerzo documentado** en manuales o repasos independientes de esta fecha. **No se han falseado las matrices históricas introduciendo IDs inexistentes**, ni esa cobertura complementaria certifica calidad jurídica completa.

### B. Integración de repositorio en motor de tests UC3M

1. [**Nuevo banco JSON complementario**](data/uc3m-repasos-complementarios-20261106.json) creado a partir de **7 repasos Markdown**: **86 preguntas** con **4 opciones**, respuesta correcta, respuesta literal, justificación, trampa, fuente editorial y referencia; commit **827bcef5cc62cabfff7668b545ad4b3d0f8050e0**.
2. Reutilizados **dos bancos JSON preexistentes**: [repaso final T13–T20](data/uc3m-repaso-temas-13-20-20261106.json), **24 preguntas**, y [supuestos económicos T18–19](data/uc3m-presupuesto-supuestos-20261106.json), **16 preguntas**. **Total: 126 preguntas complementarias en 9 paquetes**. Son preguntas de elaboración propia, no modelos oficiales.
3. [**assets/practice.js**](assets/practice.js) ahora carga los tres orígenes, valida la estructura de cada paquete, muestra sección **«Repasos adicionales UC3M»** (solo UC3M), conecta botón de cada paquete al sistema existente `renderExercise`, y registra correcciones en el historial del navegador. La carga es opcional: un error de un archivo complementario **no debe bloquear los tests históricos**. Commit **a053be4ffbf307be89fa6a109feb358976b72014**.
4. [**practice.html**](practice.html) aumenta versión del script a `2026.11.06.2` para invalidar caché, commit **6a9c9b95508942d4e7360317b352f244d68e9c6c**.
5. [**Prueba de integridad**](tests/validate-uc3m-extra-repasos-20261106.mjs) añadida, commit **3720a74a5d05368aa6e08f217f76777037606ebe**, e incorporada a `npm test` en [**package.json**](package.json), commit **338558eeb1b2fc86bd8f15e3fae8f31d0f749f5e**.
6. [**GUIA_EXAMEN_2026.md**](content/uc3m/GUIA_EXAMEN_2026.md) incluye el acceso al entrenamiento adicional y diferencia **repasos** de **simulacros oficiales**, commit **b2c61221bcffe457123487ff5a6fccd432c79965**.

**QA estática realmente realizada por lectura de archivos GitHub:** **9 paquetes**, distribución **12+12+12+12+18+12+8+24+16 = 126**, **126 IDs únicos**, todas las respuestas literales corresponden a una de las cuatro alternativas, cada pregunta tiene respuesta válida, justificación y referencia; `assets/practice.js`, `practice.html` y el guion `npm test` contienen las rutas y enlaces previstos. Los archivos principales `content/uc3m/tema-XX/preguntas.json` y simulacros no se modificaron en esta intervención.

**Límites de certificación:** al registrar este lote, la nueva prueba automatizada estaba incorporada al flujo CI, pero **no debe darse por superada hasta obtener evidencia de resultado de GitHub Actions**. El contenido fue cargado en GitHub; su **visualización real en GitHub Pages, funcionamiento móvil, accesibilidad y PWA siguen pendientes de comprobación E2E**. El **corte normativo UC3M (base primera.7)** continúa pendiente de fecha exacta acreditada en la resolución primaria de listas definitivas/anuncio. Ni este repaso adicional ni su puntuación porcentual acreditan aprobado sobre **70+5**, que depende de la nota directa y conversión del tribunal.

### C. Seguimiento global no inflado

Se conservan los contadores del último registro jurídico sin recalificación automática: **58/121 cierres documentales fechados** (no garantía de vigencia ni de pruebas completas) y **0/121 con certificación integral acreditada**. La **Diputación Auxiliar C2** permanece en **19/20** con **OAPGT tema 6** bloqueado por normas originales y reformas pendientes; no presentar su banco como examen válido mientras no se corrobore.

**Siguiente prioridad:** comprobar que **CI** e interfaz desplegada aceptan los **126** ejercicios, luego extender el enfoque por lotes a los temas con riesgos jurídicos **aunque ya tengan preguntas**, no volver a rellenar mecánicamente solo listas `preguntas: []`.


## 129. RESULTADO CI DE 126 REPASOS UC3M Y ESTADO DE PUBLICACIÓN (**06/11/2026**)

**EVIDENCIA CI VERIFICADA:** [GitHub Actions «Validar OpoWeb v2», ejecución **42265924020**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42265924020), commit de configuración **d0bc46b36fe315504ae7f3f3d8318d127b380f20**, **conclusión success**. El paso añadido **«Validar 126 repasos UC3M y conexión a la interfaz»** terminó también con **conclusión success**, según API de jobs. El flujo ejecuta **node --check** de `assets/practice.js` y la nueva prueba [`tests/validate-uc3m-extra-repasos-20261106.mjs`](tests/validate-uc3m-extra-repasos-20261106.mjs), por tanto existe evidencia positiva de estructura, unicidad, cuatro alternativas, corrección de claves, referencias y rutas de carga. La adición al CI automático consta en [`.github/workflows/validate.yml`](.github/workflows/validate.yml), commit **d0bc46b36fe315504ae7f3f3d8318d127b380f20**.

**Publicación:** [**GitHub Pages, ejecución 42265923052**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42265923052) figuraba **queued** al cierre de esta comprobación, sin conclusión. Por tanto **NO afirmar que el despliegue final haya terminado**. La consulta externa de la URL Pages no fue accesible mediante el navegador de investigación; **no se realizó E2E** ni prueba de móvil, teclado o accesibilidad.

**TAREA ACTIVA (próxima reanudación):** verificar que Pages finalizó en `success`, que la ruta `practice.html?convocatoria=uc3m-auxiliar-administrativa-c2-2026` muestra realmente **9 bloques / 126 adicionales** y que responder, corregir, mostrar fundamento, volver y conservar historial funcionan; después continuar por lotes con la calidad jurídica de los **20 temas UC3M**, no volver a fabricar preguntas del mismo bloque sin revisar su fuente. Mantener pendientes **fecha primaria de corte UC3M base 1.7** y **Diputación C2 T6 OAPGT**. Los contadores de cierre integral **no cambian** por superar CI.


## 130. LOTE JURÍDICO UC3M TEMAS 2–7 Y 150 PREGUNTAS INTERACTIVAS (**06/11/2026**)

**OBJETIVO OPERATIVO:** profundizar **seis temas simultáneamente** de UC3M (T2–T7) mediante artículos legales críticos, sin rellenar de nuevo los 24 huecos de preguntas históricas ya resueltos en el informe anterior. Partida: los **20 manuales UC3M** existían y el motor tenía **126 preguntas complementarias** en **9 paquetes**. GitHub Pages del último lote confirmó **despliegue success**, ejecución [**42266083628**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42266083628); no prueba E2E del navegador.

**FUENTES BOE DIRECTAS VERIFICADAS A 06/11/2026:**
- [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), actualización consolidada publicada **06/11/2024**: T2 arts. **24, 30–31, 43**; T3 arts. **68, 106–107, 125–126**.
- [**Ley 40/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), actualización publicada **02/08/2024**: T4 arts. **9–10 y 17**; T5 arts. **40–46 bis**.
- [**LO 3/2018 LOPDGDD**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), actualización publicada **27/12/2025**: T6 arts. **32, 34, 36–37** y referencia necesaria al RGPD art. **12**.
- [**Ley 10/2019 Transparencia CM**](https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102), actualización publicada **27/12/2024**: T7 arts. **40–46** y cómputo supletorio Ley 39/2015 art. **30**.
Los textos consolidados son informativos; la versión exigible UC3M sigue remitida a base **primera.7** de BOE-A-2026-14624 y **falta documento primario que acredite fecha exacta** de listas definitivas. El portal UC3M publica apartado de lista definitiva, pero la búsqueda pública no permitió recuperar con garantías resolución original y fecha; fuentes comerciales discrepan, por lo que no debe fijarse una fecha sin documento.

**SEIS MANUALES REALMENTE AMPLIADOS:**
1. [**T2 Ley 39/2015 I**](content/uc3m/tema-02/manual.md) sección **18**: silencio estimatorio/desestimatorio, doble silencio de alzada **con excepciones**, certificado **15 días**, rechazo de notificación electrónica **10 días naturales**. Commit inicial **c3e7e3bbfd486e00cab597c0f6fb64277c6c00b1**.
2. [**T3 Ley 39/2015 II**](content/uc3m/tema-03/manual.md) sección **11**: subsanación **10 días**; ampliación hasta **5 días** excluida en selección/concurrencia; fecha de subsanación del obligado electrónico; lesividad **4 años** y caducidad **6 meses**; revisión extraordinaria **4 años / 3 meses** según causa. Commit **4189de36a4bc4b9f9a0ca3512f32c41661cd2429**.
3. [**T4 Ley 40/2015 I**](content/uc3m/tema-04/manual.md) sección **16**: materias indelegables, revocación/publicación, avocación, quórums, orden del día y mayorías. Commit **e9804b048a18cc56cc758a1a05012faaf8f97588**.
4. [**T5 Ley 40/2015 II**](content/uc3m/tema-05/manual.md) sección **13**: actuación automatizada, **CSV / sello**, firma de empleados; alojamiento UE **solo** para categorías expresas del art. **46 bis**. Commit **5ca48b45b0fb5cd656e4ca8f5a9293efecb04896**.
5. [**T6 Protección de datos**](content/uc3m/tema-06/manual.md) sección **13**: bloqueo de datos y conservación, DPD obligatorio en universidades públicas/privadas, comunicación nombramiento/cese **10 días**, reclamación ante DPD **2 meses** frente a remisión de autoridad **1 mes**. Commit **f105115f7ffed8191b4c1019cb71739c23af4048**.
6. [**T7 Transparencia madrileña**](content/uc3m/tema-07/manual.md) sección **11**: respuesta **20 + 20 días**, inadmisión **5 días hábiles**, silencio negativo, acceso gratuito vs copias sujetas a tasas, oposición de terceros. Commit **10639c0ba9fceb5bcb5763266dc3bf30c222cab8**.

**MATRICES Y FUENTES:** seis archivos `fuentes.md` incorporan traza artículo→nuevo desarrollo→práctica; seis `matriz.json` incorporan `controlLoteJuridico20261106` con **4 preguntas nuevas cada una**, manteniendo estados heredados y cobertura histórica sin alteraciones. Se corrigieron los enlaces relativos para apuntar a `../../../data/` desde cada carpeta de tema. Los seis manuales enlazan a [**ficha común de revisión**](content/uc3m/REPASO_JURIDICO_T02_T07_20261106.md), commit **3c498e1ecc747e8aab08bb93775bc6ad5deee607**, y a la pantalla de práctica UC3M.

**NUEVO RECURSO INTERACTIVO:** [**`data/uc3m-repaso-juridico-t02-t07-20261106.json`**](data/uc3m-repaso-juridico-t02-t07-20261106.json) con **24 preguntas / 96 alternativas** (4 por tema), explicaciones y trampa y referencia por precepto; commit **d80777f4a7bde4757b4699ba40c724fb7aee1e52**. [**`assets/practice.js`**](assets/practice.js) lo incorpora como **décimo paquete** complementario; commit **0798c8f22b4e717e3790d39adeefcd626ec048f4**. [**`practice.html`**](practice.html) actualiza caché de JS a **2026.11.06.3**, commit **81c3e213659b909c98afccc9ff71721c1995855f**. [**`tests/validate-uc3m-extra-repasos-20261106.mjs`**](tests/validate-uc3m-extra-repasos-20261106.mjs) amplía comprobaciones a **10 paquetes y 150 preguntas**, con 4 por cada T2–T7, commit **ebd2236e95491c30b36c3a5be591d034d8ce7470**. Se actualizó etiqueta del paso automático CI a **150**. [**Guía UC3M**](content/uc3m/GUIA_EXAMEN_2026.md) distingue fase histórica de **126** y **24** nuevas, total **150**, commit **53885e95b4306e79a7500786de7ffc073a59e659**.

**QA ESTÁTICA HECHA POR LECTURA DE GITHUB:** **10 paquetes**, **150 preguntas**, **150 IDs únicos**, **4 opciones válidas por pregunta**, respuesta literal correspondiente a clave, todas con justificación y referencia. El nuevo paquete contiene **4 preguntas por T2, T3, T4, T5, T6 y T7**. El JS incluye ruta del nuevo JSON, el HTML referencia versión **2026.11.06.3** y el test contempla el total **150**. **No se editaron los bancos históricos `preguntas.json` ni los 3 simulacros 70+5**. El estado CI y Pages para la última versión **se debe consultar al retomar**; no equivale QA estática a test real de navegador/móvil/WCAG.

**ESTADO REAL:** ampliación jurídico-editorial focal, no auditoría integral de los **20** temas ni certificación de **121** unidades. Mantener contadores de cierre precedentes sin aumento artificial: **58/121 cierres documentales históricos, 0/121 certificados integralmente**; Diputación C2 **19/20** con OAPGT T6 bloqueado.

**TAREA ACTIVA PRÓXIMA:** verificar flujo CI de **150 preguntas**, despliegue Pages y prueba de navegación de sus diez paquetes; continuar después en **lotes**, comparando cuestiones de mayor riesgo en temarios restantes, y solucionar la **fecha primaria de corte UC3M** y **OAPGT T6**.


**EVIDENCIA POSTERIOR DEL CI PARA 150 PREGUNTAS** — [**GitHub Actions Validar OpoWeb v2, ejecución 42279208004**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42279208004), commit **86cf4ca63adf36209f6d254d9ad31811adf626d8**, **resultado completed/success** tras corregir dos anclas de artículos LOPDGDD del Tema 6. La prueba `validate-uc3m-extra-repasos-20261106.mjs` está incluida en el flujo; su conteo actualizado exige **10 paquetes / 150 preguntas**. **Despliegue Pages de este mismo commit**: ejecución [**42279208056**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42279208056), **en curso** al comprobar. Se había completado correctamente un despliegue anterior con los **150 ejercicios** en commit **1f45613ad182b23b5424532a0561e4a79be9ebc9**, [**run 42278804458**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42278804458). **No hay evidencia de validación E2E del navegador/móvil**.


## 131. UC3M: PRESUPUESTOS Y CONTRATACIÓN T18–T20 + 162 REPASOS (**06/11/2026**)

**Objetivo y límite:** el lote resuelve distinciones jurídicas **no cubiertas suficientemente por los manuales T18, T19 y T20**, sin reiniciar la auditoría de los **12 ítems originales por tema** ni certificar íntegramente ninguno de los tres. Se prioriza que el opositor aprenda el **ámbito de aplicación, órgano, umbral, carácter de los días y efecto jurídico**, con fuente primaria.

### A. Fuentes principales verificadas

- [**Ley 5/2025 CM, consolidado BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-3217), arts. **10.1, 56.3, 108.1/4/6 y 182.1**: las universidades **elaboran y aprueban** sus presupuestos; sus presupuestos y los de sus entidades dependientes **no integran los presupuestos generales autonómicos** (56.3), pero la normativa autonómica se aplica con especialidades (108); prórroga automática hasta **publicación BOCM**; exclusión expresa de sus fondos de Tesorería General.
- [**LCSP Ley 9/2017, BOE consolidado a 09/04/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902), arts. **44, 118, 153, 154, 159, 198**, disposición adicional **12.ª**; [**Orden HAC/1517/2025, umbrales desde 01/01/2026**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605). **Simplificado ordinario** servicios/suministros **< 140.000 €** porque el art. 159.1.a remite a **21.1.a/22.1.a** (distinto del **SARA UC3M ≥ 216.000 €**); **abreviado < 60.000 €**, sin prestaciones intelectuales. Ofertas de simplificado ordinario **15 días naturales** (obras **20 naturales**) conforme a la **DA 12.ª**; abreviado **10 hábiles**, o **5 hábiles** para compras corrientes disponibles.
- [**Normas Básicas de Gestión del Presupuesto UC3M 2026, Vol. I**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view), arts. **15.2.1, 16.2 y 16.3** documentados en la auditoría primaria anterior: documento **O = propuesta de pago**; caja fija **≤ 5.000 € sin IVA**; anticipos a justificar para compras/servicios extraordinarios **máximo 12.000 €** y justificación en **1 mes**. Diferenciar la **excepción documental del art. 118.5 LCSP** (solo exime informe art. 118.2 en pagos por caja fija con VEC ≤ **5.000 €**) del límite operativo de caja fija UC3M.

### B. Cambios realizados y trazabilidad

- [**T18 manual**](content/uc3m/tema-18/manual.md), sección **21**: comparativa **integración/no integración presupuestaria**, competencias de universidad y Comunidad, Tesorería y vínculo de los temas **18,19,20**. Commit **fbc48098d3506c729655953f25dc49699f22b2e3**.
- [**T19 manual**](content/uc3m/tema-19/manual.md), sección **24**: contratos y pagos, **30 días** para conformidad y **30 días** desde la aprobación para pago en términos del art. 198.4; factura correcta, intereses, suspensión por **>4 meses** con **preaviso 1 mes**, resolución por **>6 meses**. Diferenciar documento interno **O** y pago material. Commit **4c8458266366710910d2de221f6f14dfaa85af5b**.
- [**T20 manual**](content/uc3m/tema-20/manual.md), sección **17.8 y 30–32**: simplificado/abreviado con umbrales y cómputos; formalización en **15 días hábiles** de espera cuando procede recurso especial, penalidad **3 % PBL sin IVA** imputable al adjudicatario, plazos de pago, excepción caja fija art. 118.5. Commits **d6f34be3da29b40420b2791d0a6c4ff96d47004b**, **8008a7f387a43d68716d9080ca37bc2d6a83c679**.
- [**Ficha transversal**](content/uc3m/REPASO_ECONOMIA_CONTRATACION_T18_T20_20261106.md), tablas y focos de tres temas; commit **033ba178e12b9c0166a3a5d06b5537316ca91e03**.
- [**12 preguntas nuevas/48 alternativas**](data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json): **4 T18, 3 T19 y 5 T20**, todas con correcta, literal, fundamento, justificación y trampa; commit **01a72450134057e0374f8ca71eee7b1b6229d7b6**.
- **Fuentes, matrices y enlaces de los tres temas** actualizados con `controlEconomiaLCSP20261106`, sin modificar banco histórico; [**GUIA_EXAMEN_2026.md**](content/uc3m/GUIA_EXAMEN_2026.md) actualizado a **11 paquetes/162 adicionales**; commit **6d08a223c434f7affae4f15ec4f1d2b8b764f6bc**.
- [**assets/practice.js**](assets/practice.js) carga el nuevo recurso como **undécimo paquete** (commit **de8ce53d59b940d7a795b25d933aa30ce82e633e**), [**practice.html**](practice.html) renueva caché a `2026.11.06.4` (commit **6c902f068c8370b807570d39bf55349704d18e5c**), y [**test automatizado**](tests/validate-uc3m-extra-repasos-20261106.mjs) exige **162** preguntas (commit **b421edc2c92ebe9cbbf87160f31e9de003d1c0ba**), con denominación de paso CI actualizada.

### C. Verificación de integridad sin inflar cobertura

**Lectura GitHub real:** **11 paquetes**, distribución **12+12+12+12+18+12+8+24+16+24+12 = 162**, **162 identificadores únicos**, **cuatro opciones válidas por pregunta**, todas con `respuestaLiteral === opciones[correcta]`, justificación y referencia; **4/3/5** casos nuevos por T18/19/20. El JS referencia el JSON, HTML la versión de caché nueva y el test exige **162**. Los bancos principales T18–20 conservan **12 preguntas por tema** y sus SHAs originales, y los simulacros **70+5** no fueron modificados.

**Evidencia CI:** [**«Validar OpoWeb v2», ejecución 42284891221**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42284891221), commit de guía **6d08a223c434f7affae4f15ec4f1d2b8b764f6bc**, **completed / success** con la prueba de los **162**; la ejecución de despliegue [**42284890844**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42284890844) figuraba **in progress** al consultarla. **No hay prueba E2E de navegación real, accesibilidad/móvil o certificación integral de la web**, ni fecha del corte UC3M de **base primera.7** acreditada por la resolución primaria.

**Estado jurídico global conservado:** **58/121 cierres documentales históricos, 0/121 certificados integralmente**, Diputación Auxiliar C2 **19/20** con OAPGT **tema 6** pendiente de primarias. Esta ampliación focal no modifica los contadores. Próximo paso: **verificar Pages**, y después continuar **por lotes** con temario de la convocatoria prioritaria y las fuentes oficiales que puedan cerrarse, en vez de repetir preguntas sin cotejo.


## 132. UC3M T16–T17 — CIFRAS DOCENTES Y CUPOS DE ADMISIÓN (**06/11/2026**)

**Aporte efectivo:** lote focal de **dos temas**, sin duplicar bancos de preguntas ni elevar falsamente cierres. [**T16, manual**](content/uc3m/tema-16/manual.md), nuevo apartado **15 ter**: [**RD 822/2021 arts. 13–14 y 17**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781), **híbrida 40–60 %** de créditos no presenciales y **virtual ≥80 %**; en Grados **240/300/360 ECTS**, formación básica **60/75/90** y TFG mínimo **6** y máximos **24/30/36 ECTS**, defensa pública; distinción con prácticas, menciones y TFM. Commit de manual **aca918dad6200e2cb6ea03ab844453ad8a0e0c96**.

**T16 — riesgo de vigencia:** [**Sentencia TS de 06/10/2026, publicada 23/10/2026 (BOE-A-2026-22083)**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22083) declaró nulo el **RD 905/2025**, modificativo del RD 822/2021. El **RD 822/2021 no fue anulado en su conjunto**. Debe distinguirse la fecha de publicación judicial de la **fecha de corte de bases UC3M, primera.7**, aún sin documento primario fehaciente en el cotejo. No declarar aplicable al examen una redacción posterior al corte.

[**T17, manual**](content/uc3m/tema-17/manual.md), apartado **11.1**: [**RD 534/2024 arts. 38–43, consolidado con actualización 02/07/2026**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858). Reservas en Grado público: mayores de **25 años ≥2 %**; mayores de **40/45 años conjuntamente 1–3 %**; discapacidad **≥5 %** con el alcance del **art. 41**; deportistas **≥3 %** y cupo **adicional ≥5 %** solo en las enseñanzas del **art. 42.3**; titulados **1–3 %**. Análisis de destinos de plazas vacantes con excepciones de **arts. 41–42**. Commit de manual **4cfd6f5a9ab3b048d58256d8030fe492f1143497**.

**Trazabilidad:** dos `fuentes.md` actualizados (**404d2d26cb95333150576ae41a87b087eb7afa74**, **d6e03e22de1a8f495f9e1b4cb9ef9440ec55db14**), dos `matriz.json` con `controlCifras20261106` (**9678ee4bce275fae312607ec50570b44612e621b**, **ac183d57864bb0588428cc6282892d18e3848639**). **Preguntas nuevas: 0**: se priorizó completar definición y excepciones sin replicar material que ya existe. **Bancos originales y simulacros no modificados**.

**Control y pendientes:** cotejo de artículos BOE en HTML con reglas y cifras, NO cierre jurídico integral ni prueba E2E/móvil/WCAG. Temas UC3M permanecen `EN_REVISION_USUARIO`. El estado jurídico del repositorio conserva **58/121 cierres documentales históricos, 0/121 certificados integralmente**, sin recalificar por este lote; **20/20 temas UC3M tienen matriz y manual**, **162 preguntas complementarias** de última integración previa. **Pendiente**: fecha primaria del corte UC3M (base primera.7) y tema **OAPGT 6** del programa de Diputación. Seguimiento siguiente: verificar coherencia normativa entre preguntas históricas y fechas de consolidación; no fabricar cierres.


## 133. CIERRE DOCUMENTAL CONTRASTADO UC3M T9 Y T12 (**06/11/2026**)

**CAMBIO DE ESTRATEGIA:** se dejan de multiplicar ejercicios y se registra **cierre documental de contenido en dos temas**, con criterios y pruebas reproducibles, sin declarar su aprobación por el usuario ni certificación integral.

- [**Acta de cierre T9/T12**](content/uc3m/CIERRE_DOCUMENTAL_T09_T12_20261106.md), commit **d53b62e9cdb3848b3d1f549deddb89a3b4a40c3e**: fija los controles y sus límites. **T9 ofimática:** manual con **14 apartados**, documentación oficial **Microsoft Word/Excel 2019** y **Google Workspace**, banco histórico **12 preguntas y 48 alternativas**, banco suplementario **12/48**, clave correcta y descarte documentado de todas las alternativas originales. Dos lagunas del banco histórico cubiertas por ejercicios nuevos. **T12 PRL:** manual **17 apartados principales + 4 de ampliación**, LPRL **31/1995** (consolidada **09/04/2026**), RD **39/1997** y RD **171/2004**, **12+12 preguntas, 48+48 alternativas**, cuatro bloques del banco original sin pregunta propia reforzados. Escala de Delegados, Comité desde **50**, informe **15 días** contrastados con **arts. 35, 36 y 38**.
- [**Matrices T9 y T12**](content/uc3m/tema-09/matriz.json) con campo independiente `cierreDocumental20261106.resultado = CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS`, commits **a31e45615d47ae9971a9f9b3afc083d5de3e5d6e** y **3f7b109042e01b3946216d5432a117ef013f0abe**. Se mantiene `estado=EN_REVISION_USUARIO`; las **12 preguntas históricas** de cada tema y los simulacros no cambian.
- [**Control automatizado de cierre**](tests/validate-uc3m-cierres-documentales-20261106.mjs), commit **107fd67fbc381c703e67c397a1ecd934691366a1**: comprueba **14/17** apartados, fuentes, **24 ítems históricos** y **96 alternativas**, ids, claves/literales, `justificacion/trampa/referencia`, **24 ítems complementarios** y **96 alternativas**, focos, cotejos independientes por ID, existencia de paquetes en JSON y correcta reserva del estado. Añadido a [**.github/workflows/validate.yml**](.github/workflows/validate.yml), commit **965c946dd16d7eff29f6eb6ff7cf258f5255e2e6**, para ejecutar automáticamente con cada push.
- [**Manuales**](content/uc3m/tema-09/manual.md) enlazados al acta, commits **65b9a6ac422c3ab4276fba53ff0f92f8670f4a29** y **d4b112b4d3837d4aeac2d976a2e534f648dcf25f**; [**guía UC3M**](content/uc3m/GUIA_EXAMEN_2026.md) actualizada, commit **68f435319bd349bd0b907726e97b0907ea7c2055**.

**LIMITACIONES EXPLÍCITAS:** el estado de esta subunidad es **cierre documental con reservas**, no certificación de todo el tema en todas las versiones ni aprobación del usuario. **UC3M base primera.7:** falta acreditación primaria de fecha de corte; en T9 faltan pruebas de comportamiento de interfaz Google/Office institucional y, en T12, evaluación de navegación móvil/WCAG/PWA. El contador previo de **58/121 cierres documentales históricos** no se incrementa sin depurar posibles duplicidades del inventario, y **0/121** integrales permanece correcto. La prueba CI nueva debe acreditarse con ejecución específica antes de declarar su resultado.

**SIGUIENTE LOTE DE CIERRES:** seleccionar temas con banco original cotejado y fuentes primarias comprobables, aplicar esta misma puerta de control y registrar el cierre o el bloqueo concreto **sin inflar contadores**.


**CI DE CIERRE T09/T12 CONFIRMADO** — [**Run 42293171453 de GitHub Actions**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42293171453): `validate` **completed / success**, paso **«Comprobar cierres documentales UC3M T09 y T12» completed / success**. Las matrices T09 y T12 reflejan `ciPendiente=false` y el enlace de la prueba. **Esta evidencia certifica únicamente la puerta automatizada documental**, no lectura visual, navegación E2E ni fecha oficial de corte UC3M; los contadores históricos globales no se alteran.

## 134. CIERRE DOCUMENTAL UC3M TEMAS 10 Y 11 (**06/11/2026**)

**Actuación ejecutada:** [**acta conjunta de cierre con reservas**](content/uc3m/CIERRE_DOCUMENTAL_T10_T11_20261106.md) para **T10 TREBEP** y **T11 ingreso, provisión e incompatibilidades**. Se han cotejado los **13 epígrafes base por tema**, matrices de **11+12=23 bloques**, y los **24 ítems históricos con 96 alternativas**, con informes independientes de **04/11/2026**. Se reutilizan, sin duplicar, **6 preguntas complementarias T10 + 4 T11 (40 alternativas)** del lote interactivo de 18. Se han reemplazado sus **10 referencias genéricas de BOE** por **enlaces precisos al artículo jurídico** en [el JSON de práctica](data/uc3m-repasos-complementarios-20261106.json). Bancos originales y claves inalterados; el test fija SHA T10 `88625fb9...` y T11 `6cd236e0...`.

**Fuentes consolidadas revisadas a 06/11:** [TREBEP](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719) arts. **2, 10, 14, 15, 64 y 87**; [RD 364/1995](https://www.boe.es/buscar/act.php?id=BOE-A-1995-8729) arts. **11, 16.j, 18, 23 y 70.2**; [Ley 53/1984](https://www.boe.es/buscar/act.php?id=BOE-A-1985-151) art. **14**. Se diferencia **72 horas–45 días naturales** (intervalo AGE), **20 días naturales** (AGE), **2 años continuados / 3 interrumpidos** (grado), **renuncia con auto por algún delito** (TREBEP 64), y **autorización de segundo empleo público** frente a **reconocimiento de actividad privada con resolución en 2 meses**.

**Puerta documental implementada:** [**tests/validate-uc3m-cierres-t10-t11-20261106.mjs**](tests/validate-uc3m-cierres-t10-t11-20261106.mjs) incorporada a [CI](.github/workflows/validate.yml), que comprueba **24 preguntas originales, 96 alternativas, 10 complementarias, 40 alternativas, 23 bloques, 13 secciones por manual, claves, cotejos y SHA**, y enlace de guía/manuales/acta. Matrices con `cierreDocumentalT10T11_20261106.resultado=CIERRE_DOCUMENTAL_REGISTRADO_CON_RESERVAS`; estados heredados `EN_REVISION_USUARIO` sin cambios. **No afirmar CI success hasta verificar un run asociado al commit**, ni navegación E2E o accesibilidad.

**Reservas activas:** UC3M **base primera.7** aún requiere localizar el original de la resolución definitiva de admitidos y anuncio del ejercicio, con fecha exacta; por tanto no dar como fecha automática el **21/11/2026**, ni aplicar sin comprobación la actualización TREBEP publicada el **03/10/2026**. La **Diputación C2 T6 OAPGT** sigue bloqueada por Estatutos íntegros. Contadores globales **58/121 cierres documentales históricos** y **0/121 integrales** sin elevar por posible solapamiento. Próximo paso: comprobar CI y Pages de este lote; continuar cerrando bloques con fuentes primarias sin reproducir nuevos bancos innecesarios.


## 135. UC3M T13–T14 · CIERRE DOCUMENTAL LOSU CON RESERVAS (**06/11/2026**)

**Acta única del lote:** [**Cierre T13–T14**](content/uc3m/CIERRE_DOCUMENTAL_T13_T14_20261106.md). Se registra un cierre de los **materiales documentales de estudio**, no certificación de fiabilidad integral.

- **Temas:** T13 LOSU I (**15** secciones base + refuerzo centros/privadas) y T14 LOSU II (**13** secciones base + refuerzo PDI/conciliación). **12 bloques trazados a artículos oficiales en cada matriz**, respetando el programa. Ambos siguen **EN_REVISION_USUARIO**.
- **Banco histórico:** **12+14 = 26 preguntas / 104 alternativas**, con [cotejo individual T13](content/uc3m/tema-13/cotejo-integral-2026-11-04.md) y [T14](content/uc3m/tema-14/cotejo-integral-2026-11-04.md). **Complementarias:** **12+4 = 16 preguntas / 64 alternativas**; refuerzo de **4+2 bloques** sin pregunta histórica.
- **Correcciones reales:** [JSON complementario](data/uc3m-repasos-complementarios-20261106.json) con **16 referencias por artículo LOSU** (en lugar de portada genérica BOE), conservando enunciados, claves y opciones. [T14 preguntas.json](content/uc3m/tema-14/preguntas.json) rectifica el **metadato histórico** contradictorio «B → C»; el ítem **T14-002** **siempre tiene clave B («El 25 %»)**.
- **Evidencia primaria:** [LOSU BOE-A-2023-7500](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500), con cotejo focal de **arts. 4–17, 40–43, 55–57, 64–66, 78, 89–94, 96–97**. [Convocatoria UC3M BOE-A-2026-14624](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) **base primera.7**. [Portal UC3M](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) menciona acceso a listas definitivas; **la fecha oficial de su publicación no ha sido obtenida mediante resolución primaria**. No fijar corte por noticias secundarias ni por día del examen.
- **Prueba de regresión:** [**tests/validate-uc3m-cierres-t13-t14-20261106.mjs**](tests/validate-uc3m-cierres-t13-t14-20261106.mjs), **pendiente de resultado CI comprobado sobre último commit**; verifica estructura, cotejo por ID, **42 claves**, **168 opciones**, referencias a artículo, estado y reservas.
- **Pendientes:** resolución primaria exacta de listas definitivas, navegación navegador real/móvil, WCAG/PWA, certificación jurídica de todos los enunciados a fecha de corte y aprobación del usuario. **Mantener 58/121 documentales históricos y 0/121 integrales** hasta reconciliar inventario sin doble conteo.

**Siguiente sublote**: revisar **UC3M T15** (Estatutos y régimen universitario), con prioridad posterior a cualquier incidencia urgente de preparación **La Puebla 14/11**. **Tema OAPGT 6 Diputación C2** sigue al final por decisión explícita. Evitar duplicar cierres T9–T14; trabajar sobre bloques sin prueba suficiente.


## 136. UC3M T15 — CIERRE DOCUMENTAL DE ESTATUTOS CON RESERVAS (**06/11/2026**)

**Acta de auditoría:** [**CIERRE_DOCUMENTAL_T15_20261106.md**](content/uc3m/CIERRE_DOCUMENTAL_T15_20261106.md). Progreso material: **7 bloques de cobertura**, **21 preguntas históricas/84 alternativas** ya contrastadas individualmente en [informe 04/11](content/uc3m/tema-15/cotejo-integral-2026-11-04.md), **8 preguntas complementarias/32 alternativas** integradas previamente, **2 microtest/8 alternativas** solo en manual. Conservar **29 preguntas interactivas + 2 de lectura**, sin duplicar bancos ni simulacros.

**Hallazgo jurídico corregido:** el informe previo atribuía a **Estatutos 179.1** la mayoría para la toma en consideración de la reforma; el artículo correcto es **178.3** (**mayoría absoluta de claustrales presentes**, sesión extraordinaria); el **179.1** regula la comisión posterior y el **179.3** la aprobación definitiva (**mayoría absoluta de los miembros totales del Claustro**). Fuente primaria: [**Decreto 1/2003, BOE-A-2003-17782, título VII**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2003-17782). Corregidos [cotejo T15](content/uc3m/tema-15/cotejo-integral-2026-11-04.md) y **10 referencias por artículo** del [banco T15](content/uc3m/tema-15/preguntas.json), sin cambiar claves ni opciones; **T15-009 sigue A**.

**Otras mejoras:** [manual T15](content/uc3m/tema-15/manual.md) §3.1 sobre quejas ante Defensoría, **plazo propio de un mes** desde conocimiento de hechos y no suspensión automática de recursos, con fuente [**UC3M oficial**](https://www.uc3m.es/defensoria-universitaria/consultas-quejas). **Decreto 95/2009, anexo 53** separa cese voluntario del Defensor del acuerdo claustral; consultar [**BOCM 04/12/2009**](https://www.bocm.es/boletin/CM_Orden_BOCM/2009/12/04/2009-12-04_02122009_0045.pdf). Mejorada trazabilidad de **8 referencias** del [paquete adicional T15](data/uc3m-repasos-complementarios-20261106.json) con artículos exactos **158.1, 159.1, 161.4, 169.1, 170.2, 174.2, 177 y 171.2**. [Matriz T15](content/uc3m/tema-15/matriz.json) contiene artículos por inciso y estado documental reservado.

**Puerta técnica añadida:** [tests/validate-uc3m-cierre-t15-20261106.mjs](tests/validate-uc3m-cierre-t15-20261106.mjs), verifica **21+8 preguntas**, **2 microtests**, **124 alternativas** y corrección **178.3** junto al registro, opciones, estados y reservas. **Hasta comprobar un GitHub Actions run asociado al último commit no declarar CI success**.

**Reserva:** [**Convocatoria UC3M BOE-A-2026-14624, base primera.7**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) fija el corte jurídico en la fecha oficial de publicación de listas definitivas y anuncio de ejercicio, aún sin resolución primaria fechada acreditada en el repositorio. Quedan E2E real, móvil, WCAG/PWA, comprobación integral de compatibilidad LOSU/Estatutos y aprobación. Conservar estado **EN_REVISION_USUARIO**, contador **58/121 cierres documentales históricos y 0/121 integrales** hasta reconciliar doble cómputo. **Siguiente lote:** UC3M T16 y cohorte de docencia/estudios, sin reabrir los cierres con reservas T9–T15 salvo incidencia probada. **OAPGT Diputación C2 T6 permanece pospuesto**.


## 137. UC3M T16 — CIERRE DOCUMENTAL DE ENSEÑANZAS CON RESERVAS (**06/11/2026**)

**Acta registrada:** [**CIERRE_DOCUMENTAL_T16_20261106.md**](content/uc3m/CIERRE_DOCUMENTAL_T16_20261106.md). **7 bloques** del programa trazados a fuentes; **21 preguntas históricas/84 alternativas** cotejadas previamente en [informe T16 de 04/11](content/uc3m/tema-16/cotejo-integral-2026-11-04.md) y **6 complementarias/24 alternativas** del [paquete UC3M T16/T17](data/uc3m-repasos-complementarios-20261106.json). Se han precisado **6 referencias complementarias por artículo** de la [**normativa UC3M de reconocimiento de créditos (BOEL 22/01/2026)**](https://sede.uc3m.es/boel/anexo/11307/), preservando claves y opciones. Total: **27 ítems / 108 opciones** T16, sin doble contar los del tema 17 ni modificar simulacros.

**Contraste BOE:** [**RD 822/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781), artículos **11, 13, 14, 17**, y [**STC no, sentencia TS 06/10/2026 publicada BOE 23/10/2026, BOE-A-2026-22083**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22083), que **anuló RD 905/2025**, no todo el RD 822/2021. Se mantienen distinciones: **40–60 % híbrida**, **≥80 % virtual**, ECTS **60/75/90** de formación básica, **TFG 6–24/30/36** y **TFM 6–30**, práctica **25 % de Grado** frente a **un tercio de Máster**. La exigibilidad de la sentencia a examen **no se presume** sin corte de bases.

**Fuente UC3M:** lectura textual de [**BOEL 22/01/2026, anexo 3**](https://sede.uc3m.es/boel/anexo/11307/), con arts. **14.3, 15, 16.3, 19.1–2, 20.1 y 4.5** cotejados. **No se obtuvo captura visual** de páginas del PDF mediante el servicio de verificación; no declarar inspección PDF íntegra. [**Matriz T16**](content/uc3m/tema-16/matriz.json) incluye fuente por cada uno de los siete bloques, cierre documental reservado y bloqueos.

**Control CI añadido:** [tests/validate-uc3m-cierre-t16-20261106.mjs](tests/validate-uc3m-cierre-t16-20261106.mjs). **Resultado de GitHub Actions pendiente de comprobar en run de commit**, sin atribuir éxito previo. **Reservas:** fecha primaria exacta de listas definitivas de UC3M (base primera.7), auditoría legal global a esa fecha, pruebas navegador/móvil/WCAG/PWA y aprobación. Mantener **EN_REVISION_USUARIO**, **58/121 cierres documentales históricos y 0/121 integrales** hasta desduplicar recuento. **Siguiente bloque:** T17, con prioridad a normas UC3M de admisión y cupos; OAPGT C2-T6 reservado al final.


## 138. UC3M T17 — CIERRE DOCUMENTAL DE ACCESO Y ADMISIÓN CON RESERVAS (**06/11/2026**)

**Acta:** [**CIERRE_DOCUMENTAL_T17_20261106.md**](content/uc3m/CIERRE_DOCUMENTAL_T17_20261106.md). **Material auditado:** [manual T17](content/uc3m/tema-17/manual.md) en **16 secciones** con ampliación **13.3–13.4**; [matriz T17](content/uc3m/tema-17/matriz.json), **9 bloques** trazados a norma, artículo y epígrafe; **12 preguntas históricas / 48 alternativas** en [banco](content/uc3m/tema-17/preguntas.json), con [cotejo individual histórico de 04/11](content/uc3m/tema-17/cotejo-integral-2026-11-04.md); **6 preguntas complementarias / 24 alternativas** ya incluidas en [paquete T16/T17](data/uc3m-repasos-complementarios-20261106.json); **4 microcasos / 16 alternativas** en manual. **22 ejercicios documentales/88 alternativas**, **18 interactivos**, sin doble contar ni modificar los simulacros.

**Correcciones y hallazgos sustentados:**

- [**RD 534/2024 consolidado, arts. 2–3, 22–25, 32 y 38–45**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858) frente a las claves del banco. Reservas: **≥2 % mayores 25**; **1–3 % conjunto mayores 40/45**; **≥5 % discapacidad** con alcance del art. 41; **≥3 % deportistas**, **≥5 % adicional solo enseñanzas art. 42.3**; **1–3 % titulados**. **6 ECTS reanudación mismo centro ≠ 30 ECTS cambio estudios**.
- **T17-007:** [**RD 535/2026, art. 12, modificación del art. 23.2**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14333); **5 puntos** a Técnico Superior sin nota media por homologación/equivalencia y redacción vigente general desde **22/07/2026**, sin presuponer la fecha de corte de la oposición. **12 referencias originales y 6 complementarias** precisadas por artículo o portal institucional oficial; **claves y alternativas no alteradas**.
- [**BOEL UC3M 22/01/2026, anexo 5**](https://sede.uc3m.es/boel/anexo/11307/) y [**BOEL 18/12/2025**](https://sede.uc3m.es/boel/anexo/11194/firmado/): reforma de normativa de cambio aprobada **11/12/2025**, **50 % cupo específico de traslado interno**, externos españoles **60 ECTS pendientes**, resolución **antes del 10/06**; internos **antes del 15/06**; centro remite propuesta **antes del día 15 del mes siguiente**. Nuevas precisiones: **arts. 4.3 (B2 idiomas con excepciones) y 4.4 (vacantes externas pasan al cupo interno)**.
- **Discrepancia dentro de una fuente primaria:** resumen de acuerdos del **BOEL enero p. 2** señala **25/02/2020** como aprobación original, mientras **encabezado del anexo 5**, BOEL diciembre y [**texto original archivado por UC3M**](https://e-archivo.uc3m.es/bitstream/10016/15713/1/Acceso%20-%20otras%20titulaciones.pdf) confirman **25/02/2010**. La norma se identifica como **2010**, conservando evidencia de la errata **2020**; no trasladar fecha del resumen a examen.
- [**UC3M preinscripción 2026/2027**](https://www.uc3m.es/grado/admision/solicitud/preinscripcion) verifica **12 estudios en una sola solicitud de 6 universidades**. Es dato de curso, no universal.

**Regresión:** [tests/validate-uc3m-cierre-t17-20261106.mjs](tests/validate-uc3m-cierre-t17-20261106.mjs); comprueba **9 bloques, 12+6 preguntas, 4 microcasos, 88 opciones, correspondencia de citas y error 2010/2020**, más estado reservado. **CI no se considera superada sin el run de un commit concreto**. En análisis visual del PDF BOEL, web screenshot devolvió **cache miss**; el texto oficial sí fue leído, pero **no se acredita inspección visual completa**.

**Limitaciones:** [**bases UC3M BOE-A-2026-14624, primera.7**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) remiten a fecha de resolución definitiva de admitidos y anuncio de ejercicio, **sin documento primario fechable recuperado en esta operación**, pese a revisar el portal UC3M; no atribuir fechas de convocatorias diferentes a esta. Pendientes auditoría de vigencia a ese corte, E2E/navegador/móvil/WCAG/PWA, aprobación del usuario. **Estado EN_REVISION_USUARIO**, **cierre documental con reservas** y **0/121 certificaciones integrales**, sin incrementar automáticamente los **58/121 históricos** hasta conciliar inventario.

**Siguiente bloque objetivo:** **UC3M T18**, con prioridad de cerrar material que ya tiene cotejos de preguntas y fuentes, antes de duplicar ejercicios. **Diputación C2 T6 OAPGT** permanece expresamente al final.


## 139. UC3M T18 — CIERRE DOCUMENTAL DEL PRESUPUESTO 2026 CON RESERVAS (**06/11/2026**)

**Acta:** [**CIERRE_DOCUMENTAL_T18_20261106.md**](content/uc3m/CIERRE_DOCUMENTAL_T18_20261106.md). [**Manual T18**](content/uc3m/tema-18/manual.md) de **18 apartados originales** más refuerzos **19–21**, [**matriz**](content/uc3m/tema-18/matriz.json) con **8 bloques** y artículos oficiales. [**Banco original**](content/uc3m/tema-18/preguntas.json) **12 preguntas / 48 alternativas**, con [**cotejo por distractores de 04/11**](content/uc3m/tema-18/cotejo-integral-2026-11-04.md). Se reutilizan sin duplicación **4 preguntas** (16 opciones) del [**lote T10/T11/T14/T18**](data/uc3m-repasos-complementarios-20261106.json) y **4** (16 opciones) del [**repaso T18–T20**](data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json). Total **20 preguntas interactivas / 80 alternativas**. **No** modificar bancos originales en enunciados/claves ni simulacros.

**Mejora concreta:** 12 referencias del banco histórico antes genéricas a Manual se han precisado con fuente [**BOCM 30/12/2025 presupuesto UC3M**](https://www.bocm.es/boletin/CM_Orden_BOCM/2025/12/30/BOCM-20251230-28.PDF), [**Normas Básicas UC3M 2026, Vol. I**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view), [**LOSU**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500) o [**Ley 5/2025 CM**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-3217). **8 referencias de preguntas complementarias** se enlazan al artículo legal exacto de Ley 5/2025 (arts. **10.1, 56.3, 108.2.a, 108.4, 109.2 y 182.1**). Claves y opciones preservadas.

**Cifras focales verificadas de los materiales previos:** Presupuesto UC3M 2026 **300.468.067,59 €**; ingresos cap. **IV 146.834.705,33 €**; **art. 5 UC3M** vinculación por concepto con **I, II, VI a nivel capítulo**; **art. 6 UC3M** transferencia capital a corriente, **Consejo Social** previa autorización **Gobierno CM**; **art. 14.2 UC3M** secuencia **30/60/90/120 días**. **Ley 5/2025**: art. **56.3** universidades **no** integradas en presupuestos generales CM; **108.4** prórroga hasta **publicación BOCM**, **109.2** retención posible **10 %** condicionada a procedimiento de información y **182.1** exclusión de recursos universitarios de Tesorería General.

**Corrección de continuidad editorial:** el manual conservaba una nota histórica de **04/11** diciendo que aún faltaba cotejar el volumen I; se ha marcado expresamente como **resuelta por el cotejo posterior del apartado 19**, sin eliminar historial ni fingir certificación global. [**Prueba documental T18**](tests/validate-uc3m-cierre-t18-20261106.mjs) añadida al flujo de CI; **no declarar éxito de GitHub Actions** antes de comprobar run en commit. Pendientes **fecha primaria de publicación de listas definitivas de UC3M base primera.7**, legalidad completa a esa fecha, navegador E2E/móvil/WCAG/PWA, aprobación. Estado **EN_REVISION_USUARIO**, cierre documental con reservas y **0/121 certificaciones integrales**; no elevar automáticamente el histórico **58/121** sin desduplicar.

**Siguiente lote:** **UC3M T19**, secuencia de gastos, propuesta de pago O y plazos LCSP, reusando material T18–T20 sin duplicar cierres. **OAPGT C2 T6 permanece pospuesto**.


## 140. UC3M T19 — CIERRE DOCUMENTAL DE EJECUCIÓN DE GASTOS Y PAGOS CON RESERVAS (**06/11/2026**)

**Acta:** [**CIERRE_DOCUMENTAL_T19_20261106.md**](content/uc3m/CIERRE_DOCUMENTAL_T19_20261106.md). **Cobertura:** [**manual**](content/uc3m/tema-19/manual.md) con **22 apartados base y refuerzos** sobre documentos y LCSP 198; [**matriz**](content/uc3m/tema-19/matriz.json), **6 bloques**, y [**banco original T19**](content/uc3m/tema-19/preguntas.json) **12 preguntas/48 alternativas**, contrastadas en [informe 04/11](content/uc3m/tema-19/cotejo-integral-2026-11-04.md). [**3 casos complementarios T19**](data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json) **12 alternativas** sobre **O**, anticipos a justificar y demora contractual. Total **15 preguntas / 60 alternativas**. Claves, opciones y simulacros **70+5** inalterados.

**Aporte concreto:** **12 referencias originales** de carácter genérico se precisaron indicando Normas UC3M 2026/BOE y el apartado material, sin asignar arbitrariamente un artículo desconocido. **3 referencias complementarias** con **Normas UC3M arts. 15.2.1 y 16.3** y [**LCSP art. 198.5**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a198). Se preserva la corrección anterior **O = propuesta de pago** y **ADO = autorización, compromiso y propuesta de pago**; no se reproduce como novedad de esta ejecución. Límites UC3M **caja fija 5.000 € sin IVA, anticipos 12.000 €/justificación 1 mes**. **LCSP 198.4–6**: conformidad y pago con plazos de **30 días** separados, suspensión por **>4 meses** de demora previa notificación de **1 mes**, resolución por **>6 meses**.

**Regresión:** [tests/validate-uc3m-cierre-t19-20261106.mjs](tests/validate-uc3m-cierre-t19-20261106.mjs) para **6 bloques, 12+3 preguntas y 60 alternativas**, artículos, citas, reservas y enlace de guía. **No atribuir CI success sin GitHub Actions run** posterior al commit correspondiente. Pendientes **fecha primaria del corte legal UC3M primera.7**, auditoría jurídica frase por frase, navegador E2E/móvil/WCAG/PWA, simulación funcional, aprobación del usuario. Mantener **EN_REVISION_USUARIO**, cierre documental con reservas, contador histórico **58/121 documentales** y **0/121 integrales** sin incremento por posible solapamiento.

**Siguiente lote:** **UC3M T20** contratación; reutilizar refuerzos T18–T20 ya verificados y concentrarse en calidad de banco y vigencia de umbrales. **Diputación C2 T6 OAPGT** continúa pospuesto al final.


## 141. UC3M T20 — CIERRE DOCUMENTAL DE CONTRATACIÓN PÚBLICA CON RESERVAS (**06/11/2026**)

[**Acta T20**](content/uc3m/CIERRE_DOCUMENTAL_T20_20261106.md), con [**manual**](content/uc3m/tema-20/manual.md) de **29 secciones base y refuerzos 30–32**, [**matriz**](content/uc3m/tema-20/matriz.json) **10 bloques**, [**banco original**](content/uc3m/tema-20/preguntas.json) **12 preguntas/48 alternativas** con [**cotejo individual previo 04/11**](content/uc3m/tema-20/cotejo-integral-2026-11-04.md), [**5 casos complementarios / 20 alternativas**](data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json), total **17 preguntas / 68 alternativas**. **17 referencias mejoradas** al artículo LCSP, Estatutos UC3M o perfil de contratación, sin cambiar claves, alternativas o simulacros **70+5**.

**Fuentes primarias:** [**LCSP, BOE-A-2017-12902**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902), [**Orden HAC/1517/2025 sobre umbrales 2026–2027**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605), [**Estatutos UC3M, arts. 175–176**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2003-17782) y [**Normas UC3M 2026 caja fija art. 16.2**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view). Cifras diferenciadas: contrato menor servicios/suministros **VEC <15.000 €**, obras **<40.000 €**, simplificado abreviado **<60.000 €** (no intelectual), simplificado ordinario **<140.000 €**, recurso especial **>100.000 €**, SARA UC3M **≥216.000 €**. **15 días naturales** ofertas simplificado suministros/servicios vs **10 días hábiles** abreviado y **15 días hábiles** espera por recurso especial. **Art. 118.5** exceptúa **solo el informe 118.2** cuando pago por caja fija o equivalente con VEC **≤5.000 €**.

[**Prueba documental T20**](tests/validate-uc3m-cierre-t20-20261106.mjs) incorporada a [CI](.github/workflows/validate.yml) para estructura de banco, **17 claves**, **68 alternativas**, referencias y reservas. No atribuir ejecución exitosa sin run verificable. Quedan pendientes **fecha primaria listas definitivas UC3M (base primera.7)** y corte normativo, lectura jurídica integral de todos los apartados, E2E real navegador/móvil/WCAG/PWA, persistencia, aprobación usuario. **EN_REVISION_USUARIO** y `certificacionIntegral=false`. **58/121 cierres documentales históricos, 0/121 integrales** sin incremento automático por posibles duplicidades.

**Marcador siguiente:** revisar en conjunto el **corte legal de UC3M y fallos de CI**, después priorizar **La Puebla (examen 14/11)** y retomar los bloques aplazados de **Diputación C2 T1–5**. **OAPGT T6** continúa diferido hasta final de programa.


## 142. La Puebla T1–T4 · REVISIÓN JURÍDICA URGENTE Y CIERRE DE INCIDENCIAS DOCUMENTALES (**06/11/2026**)

**Acta:** [**CIERRE_FOCAL_T01_T04_20261106.md**](content/la-puebla/CIERRE_FOCAL_T01_T04_20261106.md) y [**repaso temático autoexplicado T1–T4**](content/la-puebla/REPASO_URGENTE_T01_T04_20261106.md). **Prioridad:** examen **14/11/2026**. No reabrir ni duplicar aprobaciones históricas de **17/07/2026**; [programa BOP Toledo 82/2026](data/programa.json) conserva **19 temas** `APROBADO_USUARIO` y las 4 matrices mantienen sus controles de cotejo documental de **04/11/2026**. **48 preguntas originales/192 opciones** en T1–T4 intactas; **8 nuevos microcasos/32 opciones** solo en el repaso Markdown, **no** incorporadas a práctica interactiva ni simulacros.

**Cambios reales y fuentes oficiales:**

- **Tema 1:** [**manual §4.5**](content/la-puebla/tema-01/manual.md), [**Constitución, art. 69.3**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a69), [**Reforma de 19/05/2026 publicada 20/05/2026**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10881): **Ibiza y Formentera** pasan a circunscripciones senatoriales separadas, pero **la eficacia de su creación se aplaza hasta primera convocatoria de elecciones al Senado posterior a la entrada en vigor** por disposición transitoria única. Antes el manual citaba la reforma pero **no** su efecto transitorio. Cuatro reformas constitucionales **1992/2011/2024/2026**.
- **Tema 2:** [**LPAC arts. 30–33**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a30): cómputo por meses, último día inhábil, registro electrónico, ampliación **≤mitad del plazo y antes del vencimiento** y urgencia **mitad salvo solicitudes/recursos**. La fuente T2 se corrigió para no mantener sin aclaración «distractores pendientes» después de cotejo realizado en **04/11**.
- **Tema 3:** [**LPAC art. 96**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a96), supuestos simplificados con oposición general, excepción sancionadora leve, **30 días** y audiencia si desfavorable. [**Manual T3**](content/la-puebla/tema-03/manual.md) eliminó la nota falsamente vigente «preguntas trazables no creadas todavía» y ahora identifica banco **12/48** con cotejo individual **04/11**.
- **Tema 4:** [**LPAC arts. 106, 122, 124, 125**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565): alzada **1 mes interponer/3 meses resolver**, reposición **1/1**, extraordinario por error de hecho **4 años** versus otras causas **3 meses**, revisión de nulidad del **106.1** con presupuestos y dictamen favorable. Tabla y casos en repaso. Sin alterar claves.

**Prueba técnica añadida:** [**tests/validate-la-puebla-repaso-t01-t04-20261106.mjs**](tests/validate-la-puebla-repaso-t01-t04-20261106.mjs), que comprueba 4 bancos originales aprobados, **48 claves y 192 alternativas**, 8 casos con sus 32 opciones y focos, referencias oficiales, enlace desde cada manual, vigencia transitoria y rectificación de metadatos. [**CI**](.github/workflows/validate.yml) ejecuta el nuevo test por push cuando esté enlazado; **NO confirmar ejecución exitosa hasta verificar run en commit final**. Regresión documental no sustituye E2E real.

**Estado:** **cierre de incidencias específico con reservas**, no nueva certificación integral ni porcentaje de exactitud. Pendientes efectos de cambios normativos hasta el **14/11**, CI, navegador/móvil/WCAG/PWA y pruebas de interactividad. **Contadores históricos 58/121 cierres documentales y 0/121 integrales SIN INCREMENTO**, por solapamiento con auditoría previa. **Siguiente prioridad operativa:** La Puebla **T5–T8**, contraste de órganos, competencias, plazos y normas territoriales CLM, seguido de T9–T12 según riesgo; UC3M necesita además resolución primaria fechada para cortar vigencia conforme a **base primera.7**. **OAPGT Diputación T6 sigue pospuesto**.


## 143. La Puebla T5 · RECTIFICACIÓN DE ESTADO Y REVISIÓN FOCAL DE LRBRL (**06/11/2026**)

**Prioridad:** examen **14/11/2026**. Se ha reexaminado [**manual T5**](content/la-puebla/tema-05/manual.md), [**fuentes**](content/la-puebla/tema-05/fuentes.md), [**matriz de 8 incisos**](content/la-puebla/tema-05/matriz.json) y [**12 preguntas/48 alternativas con cotejo de 04/11**](content/la-puebla/tema-05/cotejo-integral-2026-11-04.md). La **Ley 7/1985 (LRBRL)** registra reformas publicadas **03/10/2026** vigentes desde **23/10/2026**: [**art. 25.2.q**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392#a25), **igualdad de oportunidades, no discriminación y accesibilidad universal de personas con discapacidad** como materia de competencia municipal, y [**art. 69.1**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392#a69), **información local accesible y diseño universal**; [**Ley 4/2026, disposición final 3.ª**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-20528). La distinta letra **25.2.p**, relativa a **comunidades energéticas**, proviene de la reforma de **marzo de 2026**.

**No duplicar trabajo anterior:** el manual ya incluía reforma de octubre, por lo que **no** se ha reescrito. **Correcciones reales de esta ejecución:** frase de julio «preguntas trazables no creadas todavía» sustituida por resultado documentado **12 preguntas/48 opciones auditadas el 04/11**. La [**ficha de fuentes**](content/la-puebla/tema-05/fuentes.md) marca como histórica la reserva sobre distractores pendiente a **02/11**, que había sido levantada en **04/11**. Añadidos **2 microcasos / 8 alternativas** al **manual §107** con claves **A/C** y focos, exclusivamente en Markdown, sin modificar bancos ni simulacros. Se conserva `APROBADO_USUARIO` como aprobación histórica de julio, sin pretender revalidación jurídica integral.

**Puerta de control:** [**tests/validate-la-puebla-reforma-t05-20261106.mjs**](tests/validate-la-puebla-reforma-t05-20261106.mjs) cuenta 8 incisos, 12 preguntas originales, las 8 opciones nuevas, artículos y links; **pendiente de confirmar ejecución CI por commit**, así como navegador real/móvil, WCAG/PWA y pruebas integrales. **No incrementar 58/121 documentales ni 0/121 integrales** por un control focal ya parcialmente solapado. **Siguiente bloque:** La Puebla **T6–T8**, prioridad de legislación autonómica, órganos y baremos; examen 14/11.


## 144. La Puebla T6–T8 · CIERRE FOCAL DE INCIDENCIAS DOCUMENTALES CON RESERVAS (**06/11/2026**)

**Acta y alcance:** [**CIERRE_FOCAL_T06_T08_20261106.md**](content/la-puebla/CIERRE_FOCAL_T06_T08_20261106.md), con [**repaso de normas y 9 microcasos**](content/la-puebla/REPASO_FOCAL_T06_T08_20261106.md). **Programa BOP Toledo 82/2026, CSV 2026.00001965**: T6 empleo público CLM, T7 PRL y T8 igualdad autonómica/estatal. Se conservan **3 manuales y 3 matrices** y **3 bancos históricos de 12 preguntas cada uno (36 preguntas/144 alternativas)** con estado **APROBADO_USUARIO** desde **17/07/2026** y cotejo jurídico-editorial **04/11/2026**. **9 microcasos/36 alternativas SOLO Markdown**, **no** interactivos ni oficiales; no cambiar simulacros. No sumar 3 temas documentales «nuevos» por solapar cierres anteriores.

**Hallazgos jurídicos contrastados:**

- **T6**: [**Ley 4/2011 CLM, art. 8.1.c–d**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752) **4 años** máximo del programa de interinidad y **6 meses dentro de 12** por exceso de tareas; **art. 19.3** hasta **10 %** adicional en convocatoria, **art. 19.4** OEP **3 años improrrogables desde día siguiente a publicación**, **art. 65.2** promoción interna exige **2 años** de servicio activo. [**Ley 2/2026**](https://www.boe.es/buscar/doc.php?id=BOE-A-2011-7752) reforma **70.2** para puestos de libre designación del ámbito estatutario sanitario; el BOE consolidado muestra integración solo hasta **21/03/2024**, lo que requiere mantener fuente modificativa separada, como ya hizo manual. Se ha preservado esta incorporación anterior.
- **T7**: [**LPRL arts. 21.3, 35.2, 36.3 y 38**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292): autoridad laboral **24 horas** para ratificar/anular paralización representativa, Delegados **15 días** para informe ordinario o tiempo imprescindible si inminente, **3 delegados de 101–500**, Comité **50 o más** y reunión **trimestral**; [**RD 39/1997 art. 14**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853) servicio propio por tamaño **más de 500**, además de supuestos por actividad y decisión motivada.
- **T8**: [**Ley 12/2010 arts. 13.2 y 34.2**](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708) informa **cada 3 años** mediante **Instituto de la Mujer** sobre aplicación general a **Cortes regionales** y **Consejo Escolar** sobre iniciativas escolares respectivamente; el 34.2 original **anual** fue modificado en **2021**. **Art. 44.1–2** Distintivo por medidas al menos **2 años**, concesión por **Presidencia de la Junta** a propuesta del Instituto. [**LO 3/2007 art. 45.2**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115) empresas de **50 o más** con plan; **DA1** presencia equilibrada **40–60**.

**Correcciones editoriales reales:** [**manual T6**](content/la-puebla/tema-06/manual.md) y [**manual T7**](content/la-puebla/tema-07/manual.md) decían «preguntas trazables no creadas todavía», contradiciendo bancos y auditoría **04/11**; ahora informan **12/48 cotejadas**. En [**fuentes T6**](content/la-puebla/tema-06/fuentes.md), [**T7**](content/la-puebla/tema-07/fuentes.md), [**T8**](content/la-puebla/tema-08/fuentes.md) se aclaran las reservas formuladas **02/11** ya levantadas por los cotejos posteriores, manteniendo reservas técnicas. [**Manual T8**](content/la-puebla/tema-08/manual.md) solo recibió refuerzo y enlace; no se finge nueva modificación jurídica de reglas correctas existentes.

**Puerta técnica:** [**tests/validate-la-puebla-repaso-t06-t08-20261106.mjs**](tests/validate-la-puebla-repaso-t06-t08-20261106.mjs) verifica los **36 IDs originales/144 alternativas**, las **9 claves y 36 alternativas** de microcasos, campos originales, estados, enlaces y notas corregidas. Enlazado en [.github/workflows/validate.yml](.github/workflows/validate.yml); **NO declarar éxito de GitHub Actions** sin ejecución confirmada por run y commit. Igualmente falta navegador real/móvil/WCAG/PWA, certificación jurídica exhaustiva al **14/11** y revisión última hora. **Resultado: cierre de incidencias focales, NO nueva certificación integral**. Conservar **58/121 documentales y 0/121 integrales históricos sin incrementarlos por solapamiento**.

**Siguiente bloque:** **La Puebla T9–T12**, de mayor urgencia por **examen 14/11**, contrastando órganos, mayorías, plazos y bancos conforme a programa oficial. **Diputación C2 T6 OAPGT** sigue aplazado al final.


**Ampliación focal T7 (06/11/2026):** El [**Consejo de Ministros de 28/04/2026**](https://www.lamoncloa.gob.es/consejodeministros/referencias/Paginas/2026/20260428-referencia-rueda-de-prensa-ministros.aspx) aprobó un **anteproyecto** de reforma de LPRL/RSP; el **CES** dictaminó sobre él en **julio de 2026**. **No se ha tomado ese anteproyecto como ley en vigor** ni se ha modificado el umbral de **más de 500** para servicio de prevención propio por tamaño del [**RD 39/1997 art. 14.a**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853), sin perjuicio de la comprobación normativa obligatoria si existiese publicación posterior. [**Manual T7 §61.1**](content/la-puebla/tema-07/manual.md) y [**fuentes T7**](content/la-puebla/tema-07/fuentes.md). **No implica nueva certificación**.


## 145. La Puebla T9–T12 · CIERRE FOCAL DE TRAZABILIDAD JURÍDICA CON RESERVAS (**07/11/2026**)

**Acta verificable:** [**CIERRE_FOCAL_T09_T12_20261107.md**](content/la-puebla/CIERRE_FOCAL_T09_T12_20261107.md). **Repaso con tabla comparativa y 8 microcasos/32 opciones:** [**REPASO_FOCAL_T09_T12_20261107.md**](content/la-puebla/REPASO_FOCAL_T09_T12_20261107.md). Programa de **La Puebla BOP Toledo 82/2026**: **T9 protección de datos**, **T10 tributación/gestión**, **T11 recaudación** y **T12 impuestos municipales**. Se conservaron **4 matrices históricas aprobadas**, **28 bloques de cobertura (8+8+7+5)**, **4 bancos con 48 preguntas/192 alternativas** y cotejos individuales **04/11/2026**, con `APROBADO_USUARIO` y sin modificar enunciados, claves, alternativas, explicaciones ni simulacros.

**Trabajo material en GitHub:** se precisaron **12 referencias oficiales por banco, 48 en total**, añadiendo fuente por precepto en **LOPDGDD/RGPD**, **CE/LGT/TRLRHL**, **LGT/RGR** o **TRLRHL**. Se corrigieron reservas históricas de **02/11** en [**fuentes T9**](content/la-puebla/tema-09/fuentes.md), [**T10**](content/la-puebla/tema-10/fuentes.md), [**T11**](content/la-puebla/tema-11/fuentes.md) y [**T12**](content/la-puebla/tema-12/fuentes.md), que presentaban como pendientes cotejos que ya figuran completos en **04/11**, manteniendo abiertas las pruebas de interfaz y la recertificación jurídica integral. Los [**manuales T9**](content/la-puebla/tema-09/manual.md), [**T10**](content/la-puebla/tema-10/manual.md), [**T11**](content/la-puebla/tema-11/manual.md) y [**T12**](content/la-puebla/tema-12/manual.md) contienen ahora enlace y resumen con **¡Foco Examen!**. No se duplica el [**repaso anterior T10–T14 de 20 preguntas**](content/la-puebla/REPASO_FINAL_T10_T14_20261106.md).

**Cotejo legal focal confirmado por fuentes BOE/DOUE:**

- **T9**: [**LOPDGDD 22.3**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673#a22) **1 mes** de conservación ordinaria de imágenes y **72 horas** desde conocimiento de grabación para disposición probatoria a autoridad en supuesto legal; [**LOPDGDD 34.3**](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673#a34) **10 días** comunicar designación/cese DPD; [**RGPD 12.3/33.1**](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) **1 mes (+2)** derechos y **72 horas** para brechas notificables si es posible y riesgo no improbable. **Dos supuestos de 72 horas con distinta causa**.
- **T10**: [**LGT 27.2**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186#a27), extemporáneas sin requerimiento **1 % + 1 % por mes completo**, régimen **15 % después de 12 meses**, con excepciones; [**LGT 28**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186#a28), ejecutivo **5/10/20 %**, según providencia e ingreso, sin atribuir intereses a los recargos que no los permiten.
- **T11**: [**LGT 62.2 y 62.5**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186#a62) separa voluntaria de liquidación **16–fin → 5 segundo mes siguiente** frente a providencia **16–fin → 5 mes siguiente**. Ejemplo real de calendario: **18/09/2026** notificación, **05/11/2026** liquidación vs **05/10/2026** providencia. [**LGT 161.1 / 167.1**](https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186) diferencia inicio del período ejecutivo de inicio del procedimiento de apremio.
- **T12**: [**TRLRHL 61/82/92/104/106**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214): IBI prelación y no sujeción, IAE sujeto pero exento y **INCN <1.000.000 €** para sujetos afectados, IVTM remolque **hasta 750 kg** no sujeto, IIVTNU sujeto adquirente en lucrativas y transmitente en onerosas, adquirente **sustituto** en el supuesto legal de transmitente persona física no residente; [**BOE TRLRHL**](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214) incluye cambios de **07/10/2026**, ya tratados en la revisión previa con eficacia diferida según materia.

**Regresión incorporada:** [**tests/validate-la-puebla-repaso-t09-t12-20261107.mjs**](tests/validate-la-puebla-repaso-t09-t12-20261107.mjs), prevista en [.github/workflows/validate.yml](.github/workflows/validate.yml): verifica **48 IDs, 192 alternativas, 8 microcasos/32 opciones, 28 bloques, 48 referencias oficiales, estados y enlaces**. La revisión estructural directa sobre los archivos **no sustituye un run de GitHub Actions en commit confirmado** ni E2E, WCAG/PWA/móvil ni acreditación de completitud jurídica de la totalidad del manual.

**Estado:** **INCIDENCIAS DOCUMENTALES FOCALES CORREGIDAS CON RESERVAS**, sin elevar ninguno de estos temas a nuevo aprobado o certificación integral, y sin modificar los contadores históricos **58/121 documentales** y **0/121 integrales**, por solapamiento de cierres. **Siguiente lote:** La Puebla **T13–T16**, con prioridad al examen previsto, centrándose en normas, mayorías, órganos, plazos y banco, sin duplicar repasos existentes.


## 146. La Puebla T13–T16 · REPASO FOCAL CON FUENTES Y RESERVAS (**07/11/2026**)

**Material nuevo:** [REPASO_FOCAL_T13_T16_20261107.md](content/la-puebla/REPASO_FOCAL_T13_T16_20261107.md), enlazado desde los **cuatro manuales T13–T16**. Repaso centrado en **Ley 6/2020 arts. 4–5/eIDAS**, **Ley 40/2015 arts. 10, 17 y 24**, operaciones generales de **Windows** y ciclo de vida **IE11/Edge**. Incluye **4 tablas comparativas**, **8 microcasos didácticos** y focos de examen, sin alterar los **4 bancos históricos de 12 preguntas/48 alternativas cada uno**, sus claves ni sus simulacros. Se han cotejado focalmente las fuentes primarias citadas para los hechos incluidos, **no** se declara una nueva auditoría jurídica integral de los cuatro manuales.

**Evidencia:** commit inicial de ficha `aadcf3c7` y commits de enlace en cuatro manuales; cotejos jurídicos/editoriales de banco del **04/11/2026** se conservan sin duplicarse. Los **8 casos** son **solo Markdown**, no reactivos y no suman al banco. El contraste de Microsoft sostiene modo IE en sistemas compatibles **hasta al menos 2029** y retiro de la aplicación de escritorio en **determinadas** versiones de Windows; la **Ley 6/2020 art. 4.2** fija máximo de **5 años** para certificado cualificado, y la **Ley 40/2015 art. 24.3–4** distingue manifestación del recusado **al día siguiente** y resolución del superior **en 3 días** si niega causa.

**Estado:** cierre de este **repaso focal**, **NO cierre integral** ni incremento de los contadores históricos **58/121 documentales / 0/121 integrales**. Quedan **pendientes** la comprobación funcional en navegador/móvil, accesibilidad, interacción, regresiones CI en el commit final y auditoría completa de vigencia en fecha de examen. **Siguiente lote prioritario:** La Puebla **T17–T19** y revisión de última hora hasta **14/11**, seguida por UC3M de **21/11**. **OAPGT C2 T6 sigue aplazado**.


## 147. La Puebla T17–T19 · REPASO FOCAL TÉCNICO CON RESERVAS (**07/11/2026**)

**Trabajo material:** [REPASO_FOCAL_T17_T19_20261107.md](content/la-puebla/REPASO_FOCAL_T17_T19_20261107.md) añadido y enlazado en **tres manuales**; cotejo focal documental de **Word/Writer (secciones, estilos, formatos)**, **Excel/Calc (referencias relativas, absolutas y mixtas, filtros y CSV)** y **hardware/periféricos (RAM, USB-C, escáner/OCR y CD/DVD)**. **9 microcasos nuevos no interactivos**, tablas y fuentes primarias [Microsoft](https://support.microsoft.com/es-es/), [LibreOffice](https://help.libreoffice.org/latest/es/) y [USB-IF](https://www.usb.org/). Ficha nueva commit `9c5c4d1`; enlaces en commits posteriores. Se conservan **3 bancos de 12 preguntas/48 alternativas cada uno** y sus cotejos de **04/11/2026**, sin nueva edición de claves ni simulacros.

**Evidencia y límite:** esta es una **revisión focal complementaria** que no sustituye una lectura integral de todas las piezas modulares, ni una recertificación del banco, ni la prueba de CI y navegación real en el commit final. Por solapamiento **no sumar tres cierres documentales nuevos** a los contadores históricos **58/121**, ni alterar **0/121 integrales**. El alcance de La Puebla T1–19 queda cubierto por repasos focales en tandas, **no por garantía técnica 100 %**.

**Siguiente control prioritario:** verificar integralidad transversal de **La Puebla** antes del **14/11/2026**, con tests funcionales, simulacros, corrección de blancos, navegación móvil y vigencia hasta el examen; priorizar después **UC3M C2** con examen previsto para **21/11/2026**. **Tema 6 OAPGT Diputación C2 sigue aplazado al final**.


## 148. La Puebla T13–T19 · REGRESIÓN DOCUMENTAL AUTOMATIZADA (**07/11/2026**)

**Control nuevo realmente escrito:** [tests/validate-la-puebla-repasos-t13-t19-20261107.mjs](tests/validate-la-puebla-repasos-t13-t19-20261107.mjs) verifica sobre los archivos actuales **7 enlaces de manual**, existencia de **2 repasos**, **84 preguntas y 336 alternativas** de bancos históricos, cuatro opciones únicas por pregunta, coherencia de clave literal, fundamentación estructural, aprobación y **17 microcasos Markdown**; también comprueba los desplazamientos explícitos de referencias mixtas de Excel/Calc. Test enlazado a **package.json** (`npm test`) y al flujo [Validar OpoWeb v2](.github/workflows/validate.yml). Commit de prueba `deae5139`, enlazado npm `ca2ee9bc` y workflow `7ab5d1a5`.

**Fuentes externas cotejadas directamente durante esta ronda:** [Ley 6/2020, art. 4.2](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) (**vigencia máxima 5 años**), [Microsoft, referencias relativas, absolutas y mixtas](https://support.microsoft.com/es-es/excel/switch-between-relative-absolute-and-mixed-references) y [LibreOffice Calc, referencias](https://help.libreoffice.org/latest/es/text/scalc/guide/relativ_absolut_ref.html). Las fórmulas mixtas del repaso son coherentes con estas fuentes. **No equivale a auditar todos los demás enunciados del programa en esta ronda**.

**Limitación expresa:** se ha confirmado la escritura del código de pruebas y su enlace al workflow, **NO** una ejecución `npm test` en entorno local ni un `SUCCESS` de GitHub Actions sobre el commit final; el entorno de ejecución no pudo resolver el dominio de GitHub para clonación. No se dispone en este paso de prueba E2E real sobre la web desplegada, dispositivo móvil, WCAG, persistencia ni certificado jurídico de vigencia a fecha de examen. **Contadores históricos: 58/121 documentales y 0/121 integrales, SIN INCREMENTO**; se ha mejorado **cobertura de regresión automatizada**, no un cierre integral. **Siguiente trabajo:** verificar ejecución de CI/resultado y comprobar funcionalmente motor de exámenes y simulacros de La Puebla; luego **UC3M C2** por su convocatoria próxima. Mantener **OAPGT T6** en cola final.


## 149. Práctica multiconvocatoria · AISLAMIENTO DE PROGRESO Y RESERVAS (**07/11/2026**)

**Acción nueva en GitHub:** [tests/validate-practice-progress-isolation-20261107.mjs](tests/validate-practice-progress-isolation-20261107.mjs), que **ejecuta las funciones reales** `readProgress`, `saveAttempt` y `themeFromQuestion` extraídas de `assets/practice.js`, sobre un `localStorage` simulado. Contrasta la separación de historiales y estadísticas de **La Puebla**, **UC3M C2** y **Diputación Auxiliar C2**; una respuesta en blanco no figura como error ni engorda el denominador, y una **reserva** no altera puntuación temática; una respuesta correcta posterior disminuye un error previo. Verifica que volver a la primera convocatoria preserva sus intentos y estadísticas. Incluido el test nuevo en **`npm test`** y [.github/workflows/validate.yml](.github/workflows/validate.yml). Commits: creación `6f3b5e86`, npm `4a00a79b`, workflow `d52186c5`.

**Comprobación efectiva de esta ronda:** además de inspección de archivos, se ejecutó el **cuerpo del test**, adaptando únicamente las importaciones Node `readFileSync` y `assert` al entorno JavaScript disponible y proporcionándole **el código original completo de `assets/practice.js` recuperado por GitHub**. **Resultado: todas las aserciones superadas** en entorno aislado. Esto es evidencia reproducible de lógica de progreso, **no** certificación del test `node` en Actions o navegador. El test ya existente [validate-practice-exam.mjs](tests/validate-practice-exam.mjs) comprueba por ejecución la nota **50 preguntas + 5 reservas**, penalización, blancos y temporizador; no se declara que se haya reejecutado ahora su flujo Node.

**Control pendiente:** verificar un **SUCCESS** del workflow en el último commit, probar manualmente navegador/móvil con persistencia real, accesibilidad, navegación y correspondencia jurídica de materiales a fecha de examen. **Contadores sin cambio: 58/121 cierres documentales históricos, 0/121 cierres integrales**. El control solucionado es transversal de software, no un tema jurídico nuevo. **Próximo bloque:** validación funcional de simulacros La Puebla y corte legislativo UC3M, después avanzar por temas UC3M que aún tengan reservas de contenido, respetando **Diputación C2 T6 OAPGT al final**.


## 150. La Puebla · METADATOS DE SIMULACROS CORREGIDOS (**07/11/2026**)

**Incidencia real detectada y reparada:** `content/la-puebla/simulacros.json` contenía criterios globales **`preguntasPorSimulacro: 30`** y **`duracionMinutos: 45`**, pese a disponer de **2 simulacros de 50 preguntas puntuables + 5 reservas, 60 minutos**. Estos valores podían inducir a interpretar los cinco simulacros como breves. Se sustituyeron los metadatos globales por **`formatoRepaso` (3 × 30/45 minutos)** y el ya existente **`formatoExamen2026` (2 × 50+5/60 minutos)**, conservando IDs, preguntas, reservas, puntuación, instrucciones y orden. Commit `6b754142`.

**Regresión creada:** [tests/validate-la-puebla-simulacro-metadata-20261107.mjs](tests/validate-la-puebla-simulacro-metadata-20261107.mjs), conectada a `npm test` y [.github/workflows/validate.yml](.github/workflows/validate.yml). Exige **3 breves, 2 oficiales**, tiempos, cuatro opciones, bonificación **+0,20**, penalización **−0,05**, blanco **0**, umbral **5**, reservas y ausencia de ID repetidos dentro de cada simulacro; también evita el retorno de campos globales engañosos. Commits: prueba `2f01d346`; npm `11d119bd`; workflow `2a7af621`.

**Comprobación efectivamente ejecutada:** a través de GitHub se leyó y analizó el JSON ya actualizado, y se verificaron programáticamente tamaños, duración y unicidad de **los cinco simulacros** (**5/5 correctos**). No se debe confundir esta verificación estructural con una ejecución completa del nuevo archivo Node en CI, todavía pendiente de confirmación, ni con la ejecución real del motor en navegador.

**Estado:** **INCIDENCIA DE METADATOS CERRADA**, no cierre integral de un tema ni evidencia de inexistencia de otras incidencias. Conservar contadores **58/121 documentales históricos** y **0/121 integrales**. **Siguiente control:** pruebas completas en navegador de los cinco simulacros y comprobación de GitHub Actions, junto con corte normativo del temario UC3M antes del 21/11. No reabrir OAPGT T6 hasta el final.


## 151. UC3M T16 · REFERENCIAS DE NORMATIVA PROPIA RECTIFICADAS (**07/11/2026**)

**Incidencia factual en la matriz:** [tema 16, matriz.json](content/uc3m/tema-16/matriz.json) atribuía al **RD 822/2021 (BOE)** los incisos «**Matrícula y dedicación**», «**Permanencia UC3M**» y «**Evaluación UC3M**», aunque su contenido corresponde a normativa interna de la Universidad. Comprobadas la [**página institucional de normativa de Grado UC3M**](https://www.uc3m.es/ss/Satellite/UC3MInstitucional/en/ListadoNormativas/1371206706530/Estudios_de_Grado), que enlaza la normativa de permanencia y matrícula de **2008/2016/2018**, y las [**Normas de evaluación UC3M**](https://www.uc3m.es/grado/informacion-practica/normativa-academica/normas-evaluacion), que recogen la evaluación continua **mínima 40 %**, examen ordinario para quien no siguió evaluación continua **60 %** y extraordinario **100 %** con salvedades. Se han sustituido esas tres atribuciones en matriz, sin cambiar ni el banco de **21 preguntas** ni claves. Commit **`93b4920c`**.

**Control persistente:** [tests/validate-uc3m-t16-source-attribution-20261107.mjs](tests/validate-uc3m-t16-source-attribution-20261107.mjs), añadido a **`npm test`** y al workflow, comprueba las tres fuentes, presencia del banco y conservación de la alerta de [**BOE-A-2026-22083**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083): el **TS anuló RD 905/2025**, no el RD 822/2021. Commits de prueba **`838725ff`**, enlace `package.json` **`d70bb28a`** y workflow **`691f9037`**.

**Comprobación realmente efectuada:** recuperación de la matriz ya corregida mediante el conector GitHub, parseo JSON, contraste de las **tres URL**, y recuperación del banco (**21 preguntas** conservadas). **No** se ha confirmado la ejecución de CI final ni acceso al navegador real. El portal público de convocatoria UC3M que devuelve la consulta web en esta ronda muestra todavía una versión temprana de la convocatoria, por lo que **la fecha de publicación de la resolución de listas definitivas no se pudo certificar** y no se fija arbitrariamente un corte legislativo. [**BOE-A-2026-22083**](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083) comprueba la sentencia publicada **23/10/2026**, pero su relevancia para el examen exige comprobar la fecha de corte de la base primera.7. **Cierre de incidencia de atribución de fuentes**, NO cierre integral del Tema 16 ni aumento de **58/121 cierres documentales históricos** o **0/121 cierres integrales**. **Próximo control:** fuente primaria fechada de las listas definitivas UC3M y verificaciones CI/E2E. Respetar OAPGT C2 T6 pospuesto al final.


## 152. Olías del Rey T11–T12 · DOS CIERRES DOCUMENTALES REALES (**08/11/2026**)

**Cambio de método solicitado:** prioridad al **desarrollo completo y editorial del temario** y a **cerrar temas**, no al aumento artificial de pruebas o fichas periféricas. Se han tomado **dos temas existentes en estado `EN_AUDITORIA`** de Olías y se han rectificado **manual, matriz, fuentes y banco de preguntas**, dejando dos expedientes concretos auditados. **Programa oficial:** BOP Toledo **204/2026**, anuncio **4833**, materia específica 6 y 7, equivalentes a **T11** y **T12** de la web.

**T11 · Máquinas reproductoras, fotocopiadoras y encuadernadoras** [manual](content/olias-auxiliar-edificios/tema-11/manual.md), [matriz](content/olias-auxiliar-edificios/tema-11/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-11/fuentes.md) y [banco](content/olias-auxiliar-edificios/tema-11/preguntas.json). Corregidas las atribuciones jurídicas de **5 incisos**: ADF y dúplex son conceptos técnicos, la seguridad de desbloqueos y reparación se rige por **RD 1215/1997, art. 3.5 y anexo II**, y la confidencialidad por **RGPD art. 5**. Retiradas exigencias genéricas sin fundamento; añadidos **2 supuestos prácticos resueltos** de atasco con expedientes y tirada/encuadernación. Revisadas **10 preguntas con 40 opciones** y reescritas justificaciones, trampas y referencias; **0 respuestas o alternativas alteradas**. **Estado: AUDITADO DOCUMENTAL**.

**T12 · Máquinas auxiliares, mobiliario, instalaciones y salas** [manual](content/olias-auxiliar-edificios/tema-12/manual.md), [matriz](content/olias-auxiliar-edificios/tema-12/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-12/fuentes.md) y [banco](content/olias-auxiliar-edificios/tema-12/preguntas.json). Corregida matriz de **5 incisos** distinguiendo uso de maquinaria (**RD 1215/1997**) de condiciones de circulación, evacuación y orden de locales (**RD 486/1997**) y custodia documental (**RGPD art. 5**). Sustituido supuesto de relleno por **2 casos resueltos** de aforo insuficiente y documentación olvidada; revisadas **10 preguntas/40 opciones**, conservadas **10 claves**. **Estado: AUDITADO DOCUMENTAL**.

**Referencias cotejadas:** [**RD 1215/1997, art. 3 y anexo II**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824), [**INSST sobre equipos de trabajo**](https://www.insst.es/materias/equipos/equipos-de-trabajo), [**RD 486/1997**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-8669), [**Ley 31/1995**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [**RGPD**](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa). **No** se han inventado procedimientos, máquinas o aforos propios del Ayuntamiento. Los **dos estados de `data/programa-olias-auxiliar-edificios-2026.json`** se han pasado de `EN_AUDITORIA` a `AUDITADO` con fecha **08/11/2026** y reservas expresas.

**Recuento editorial actualizado:** partiendo de **58/121 cierres documentales históricos** no solapados, estos **2 nuevos** elevan el número a **60/121 documentales**. **0/121 certificados integrales**: falta recorrido completo en navegador, ejecución CI y corroboración de especificidades locales; el cierre es **documental y pedagógico** con reservas declaradas. **Siguiente cola de CIERRE DE TEMARIO:** Olías **T13–T22** (los de equipo/suministros con base primaria suficiente antes que datos locales), y completar los otros temas no auditados sin crear nuevas fichas de repaso superfluas. **La Puebla y UC3M** conservan prioridad por su proximidad de examen y corte normativo. **OAPGT T6** permanece pospuesto por la falta de estatutos contrastados.


## 153. Olías T14 · MECÁNICA BÁSICA AUDITADA DOCUMENTALMENTE (**08/11/2026**)

**T14 · Mecánica básica y herramientas** [manual](content/olias-auxiliar-edificios/tema-14/manual.md), [matriz](content/olias-auxiliar-edificios/tema-14/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-14/fuentes.md) y [banco](content/olias-auxiliar-edificios/tema-14/preguntas.json) realmente actualizados. Programa: **BOP 204/2026, anuncio 4833, materia específica n.º 9**. Se precisó la atribución de los **4 incisos**: las definiciones de llaves, anclajes y brocas son **técnicas**; las reglas de seguridad proceden del [**RD 1215/1997 art. 3.5 y anexo II**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824) y [**LPRL arts. 15 y 17**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292). La tabla de programa ya no atribuye erróneamente a leyes de prevención la clasificación técnica de las herramientas. **2 supuestos específicos resueltos** (perforación y conducciones ocultas; herramientas defectuosas), en sustitución del caso de relleno. Revisadas **10 preguntas/40 alternativas**, reescritas todas sus justificaciones, referencias y focos; **0 claves ni opciones cambiadas**. Fecha de auditoría y estado **AUDITADO** consignados en el programa general. 

**Estado final de este lote 08/11/2026:** nuevos cierres documentales verificables **Olías T11, T12 y T14 = 3 temas**, partiendo del último registro histórico de **58/121** y pasando a **61/121 DOCUMENTALES**; **0/121 INTEGRALES** (penden navegador/E2E, CI del último commit, aplicabilidad de procedimientos internos). Los temas **Olías T13, T15–T22** quedan en cola de cierre, así como restantes convocatorias sin cierre documental. **No confundir la revisión del contenido con validación integral de la plataforma**.


## 154. Olías T16, T17 y T19 · TRES NUEVOS CIERRES DE TEMARIO (**08/11/2026**)

**Prioridad del usuario:** cerrar contenido de temario, no acumular pruebas o informes secundarios. Se cerraron **documentalmente** otros tres temas de Olías del Rey, programa **BOP Toledo 204/2026, anuncio 4833**; material real modificado en cada uno: **manual, matriz, fuentes, 10 preguntas y registro del programa**.

- **T16, carpintería metálica y cerrajería:** [manual](content/olias-auxiliar-edificios/tema-16/manual.md), [matriz](content/olias-auxiliar-edificios/tema-16/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-16/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-16/preguntas.json). Separadas definiciones técnicas de prevención laboral en **4 incisos**; **2 casos concretos resueltos**: puerta resistente al fuego que roza y duplicación no autorizada de llave/bombín. **10 preguntas, 40 opciones**, justificaciones y referencias precisadas con claves intactas.
- **T17, fontanería:** [manual](content/olias-auxiliar-edificios/tema-17/manual.md), [matriz](content/olias-auxiliar-edificios/tema-17/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-17/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-17/preguntas.json). **5 incisos** distinguiendo [**CTE DB HS 4 y HS 5**](https://www.boe.es/buscar/act.php?id=BOE-A-2006-5515), [**RD 3/2023 art. 40**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-628) y uso seguro de herramientas [**RD 1215/1997**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824). **2 casos concretos** de cisterna con fuga y desagüe/agua turbia, 10 preguntas/40 opciones justificadas sin cambiar claves.
- **T19, carpintería de madera, cerraduras y persianas:** [manual](content/olias-auxiliar-edificios/tema-19/manual.md), [matriz](content/olias-auxiliar-edificios/tema-19/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-19/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-19/preguntas.json). **5 incisos**, definiciones técnicas desacopladas de falsa fundamentación legal; **2 casos concretos** de persiana bloqueada y puerta resistente al fuego con roce; 10 preguntas/40 opciones explicadas conservando las claves.

**Cotejo material de la ronda:** leídos nuevamente los tres manuales, matrices, fuentes y bancos tras escritura; **3/3** figuran como `AUDITADO` en [programa Olías](data/programa-olias-auxiliar-edificios-2026.json), **6 supuestos resueltos, 14 incisos y 30 preguntas/120 opciones**. **Todas las claves de los bancos conservan coincidencia con su respuesta literal; no quedan supuestos genéricos originales.** Esto no demuestra ni prueba todo el contenido de la plataforma en navegador.

**Contadores actualizados:** de **61/121 documentales históricos** al inicio a **64/121 cierres documentales** tras estos tres temas; **0/121 certificados integrales**. Quedan **57/121** sin cierre documental registrado. Reservas: fabricantes y autorizaciones locales no acreditadas, CI del último commit y pruebas funcionales integrales no verificadas. **Siguiente cola de contenido real:** Olías **T15, T18, T20–T22** y **T13** local con comprobación primaria; luego temas generales **T1–10** aún en auditoría, sin perder urgencia de **La Puebla 14/11** y **UC3M 21/11**. **OAPGT C2 T6** permanece en último lugar por dependencia de estatutos específicos.


## 155. Olías T21 y T22 · CIERRE DE CONTENIDO Y BANCOS (**08/11/2026**)

**Se continúa la prioridad de completar temario, no pruebas accesorias.** Partiendo de **64/121 cierres documentales** de §154, se han completado **2 temas nuevos** de Olías (BOP **204/2026**, anuncio **4833**), editando efectivamente sus **manuales, matrices, fuentes, bancos y el programa general**.

**T21, albañilería y pintura:** [manual](content/olias-auxiliar-edificios/tema-21/manual.md), [matriz](content/olias-auxiliar-edificios/tema-21/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-21/fuentes.md), [banco](content/olias-auxiliar-edificios/tema-21/preguntas.json). **4 incisos** cotejados; se corrige atribución inapropiada de definiciones de útiles a normas preventivas. Contenido: preparación, imprimación, herramientas y riesgos químicos/altura con [**RD 374/2001, art. 3**](https://www.boe.es/buscar/act.php?id=BOE-A-2001-8436) y [**RD 1215/1997, anexo II 4.2**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824). **2 casos prácticos resueltos:** pintar soporte con humedad activa; trabajo en techo con escalera y químicos. **10 preguntas/40 alternativas** reforzadas con justificaciones/fuentes sin alterar claves ni opciones.

**T22, cultura general y ofimática:** [manual](content/olias-auxiliar-edificios/tema-22/manual.md), [matriz](content/olias-auxiliar-edificios/tema-22/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-22/fuentes.md), [banco](content/olias-auxiliar-edificios/tema-22/preguntas.json). **6 incisos** correctamente atribuidos: aritmética y sistema métrico; gramática mediante [**RAE DPD**](https://www.rae.es/dpd/); geografía española y **CE art. 137**; ofimática conforme a documentación [**Microsoft Excel**](https://support.microsoft.com/es-es/excel/overview-of-formulas-in-excel); RGPD solo en su ámbito propio. Se retiran atribuciones falsas de reglas matemáticas o lingüísticas a **Ley 31/1995 o Ley 39/2015**. **2 supuestos resueltos:** porcentajes de dos conjuntos distintos; fórmula SUMA, referencia absoluta, CCO y PDF. **10 preguntas/40 alternativas** justificadas y referenciadas sin cambiar alternativas ni claves. La mención genérica **«cultura general, etc.»** no garantiza cobertura exhaustiva de hechos posibles no delimitados en el programa.

**Verificación posterior a la escritura:** recuperados desde GitHub manifiesto, manuales, matrices, bancos y fuentes. **2/2 temas** constan `AUDITADO`, **10 incisos** en matriz, **4 supuestos concretos**, **20 preguntas y 80 alternativas**, claves coherentes con respuesta literal, sin supuesto genérico anterior. **Cierre documental** de ambos, no integral: E2E, CI y operaciones reales siguen sin certificar. **Nuevo contador histórico: 66/121 cierres documentales (55 pendientes), 0/121 integrales**. Próximo lote principal de contenido: Olías **T15 electricidad, T18 calefacción, T20 jardinería** y **T13** municipio con fuentes primarias; después general **T1–T10**. Prioridad temporal de exámenes La Puebla y UC3M y **OAPGT C2 T6** aplazado se mantienen.


## 156. Olías T15 y T18 · CIERRE DOCUMENTAL DE ELECTRICIDAD Y CALEFACCIÓN (**08/11/2026**)

**T15 · Electricidad básica**: [manual](content/olias-auxiliar-edificios/tema-15/manual.md), [matriz](content/olias-auxiliar-edificios/tema-15/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-15/fuentes.md) y [banco](content/olias-auxiliar-edificios/tema-15/preguntas.json) revisados. **7 incisos**, REBT [**ITC-BT-28**](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099), [**RD 614/2001 art. 4/anexo II**](https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881); nuevas situaciones resueltas de disparo diferencial y alumbrado de evacuación, y **20 preguntas/80 alternativas** con fundamentación, foco y respuesta literal incorporados sin alterar claves ni opciones. Cifras conservadas: **1 lux** eje rutas, **5 lux** puntos de equipos manuales y cuadros, **0,5 lux** antipánico, y **una hora** en evacuación y antipánico. La aplicación en un edificio concreto exige clasificar su uso.

**T18 · Calefacción**: [manual](content/olias-auxiliar-edificios/tema-18/manual.md), [matriz](content/olias-auxiliar-edificios/tema-18/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-18/fuentes.md), [banco](content/olias-auxiliar-edificios/tema-18/preguntas.json) revisados. **5 incisos** y **2 casos concretos resueltos** (radiador con presión baja y dos instalaciones de **70/80 kW**). [**RITE, arts. 26–28**](https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820): hasta **70 kW inclusive** en letra a, **más de 70 kW** contrato de mantenimiento en letra b, registro **no menos de cinco años** desde cada operación, certificado **anual** cuando resulte obligatorio contrato. **16 preguntas/64 alternativas** con justificaciones actualizadas; claves originales conservadas.

**Estados operativos:** los dos temas pasan de `EN_AUDITORIA` a `AUDITADO` en [programa Olías](data/programa-olias-auxiliar-edificios-2026.json), **verificado mediante nueva lectura del manifiesto** (10 temas Olías en `AUDITADO`). Los cambios de cada archivo cuentan con confirmación individual de GitHub. Una lectura múltiple de verificación final falló por desconexión temporal del servicio, por lo que **no se afirma que se haya ejecutado CI ni recorrido navegador**, y no se eleva a certificación integral. El cierre es **documental** y queda sujeto a inventario real y protocolos de las instalaciones municipales.

**Contador consolidado:** desde **66/121** documentales de §155 a **68/121 documentales**; **53 temas pendientes de este nivel** y **0/121 certificados integrales**. **Próximo cierre de contenido:** Olías T20 jardinería y T13 municipio, con especial atención a regulación fitosanitaria/servicios municipales; quedan también T1–10 de Olías. No multiplicar auditorías técnicas no exigidas; priorizar terminar los **manuales y bancos**.


## 157. Olías T20 cerrado; T13 auditado focalmente sin cierre por callejero (**08/11/2026**)

**Olías T20, jardinería y fitosanitarios, NUEVO CIERRE DOCUMENTAL:** revisados [manual](content/olias-auxiliar-edificios/tema-20/manual.md), [matriz](content/olias-auxiliar-edificios/tema-20/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-20/fuentes.md) y [preguntas](content/olias-auxiliar-edificios/tema-20/preguntas.json). **5 incisos**, **3 supuestos concretos** sobre aspersor junto a acera y electricidad, propuesta de insecticida profesional y fertilización/abonado, y banco **16 preguntas/64 opciones** fundamentadas, respuestas conservadas. [**RD 1311/2012, arts. 17, 18 y 20**](https://www.boe.es/eli/es/rd/2012/09/14/1311/con): obligatoriedad desde **26/11/2015**, **cuatro niveles** (básico, cualificado, fumigador, piloto), **10 años** de validez del carné y **3 meses** para resolver **salvo norma autonómica distinta**. La modificación consolidada más reciente que consta en el BOE consultado es la publicada **20/11/2025**. No se presume capacitación fitosanitaria por ocupar un puesto C2. Tema cambiado efectivamente a **AUDITADO documental** en el [programa Olías](data/programa-olias-auxiliar-edificios-2026.json); faltan pruebas E2E, CI y procedimientos locales.

**Olías T13, localización de servicios y callejero, REVISIÓN FOCAL SIN CIERRE:** actualizados [manual](content/olias-auxiliar-edificios/tema-13/manual.md), [matriz](content/olias-auxiliar-edificios/tema-13/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-13/fuentes.md) y [12 preguntas/48 alternativas](content/olias-auxiliar-edificios/tema-13/preguntas.json). **6 incisos**, **2 supuestos concretos**, doble cotejo con fuentes primarias municipales: [directorio](https://www.ayuntamientodeoliasdelrey.com/telefonos-y-correos-de-interes/), [Educación y Cultura](https://www.ayuntamientodeoliasdelrey.com/educacion-y-cultura/) y [Situación y Callejero](https://www.ayuntamientodeoliasdelrey.com/situacion-y-callejero/). Se han identificado discrepancias literales **Casa de la Cultura Flor 2 / s/n**, **Árbol Mágico Camino del Arenal 5 / s/n** y **biblioteca Higares s/n / Higares 4**; las claves conservan coherencia y no dependen de esos números. **Bloqueo que impide nuevo cierre:** el BOP exige callejero y **no está acreditado un listado íntegro de calles**, ni lo aporta el Anexo II. Por rigor el T13 **permanece EN_AUDITORIA**.

**Comprobación real posterior:** recuperados por GitHub los cuatro archivos de ambos temas y manifiesto; T20 **AUDITADO**, T13 **EN_AUDITORIA**, **5+6 incisos**, **3+2 casos**, **28 preguntas/112 alternativas** y correspondencia íntegra de claves y respuestas literales. No se declara ejecución de navegador ni CI.

**Contador actualizado:** §156 **68/121** → **69/121 cierres documentales** (se suma **solo T20**, no T13), **52 pendientes**, **0/121 integrales**. En Olías **11/22** figuran `AUDITADO`; urge continuar por **T1–T10** y T13 con callejero primario, evitando convertir ausencia de fuente en falsa aprobación. **OAPGT C2 T6** permanece al final por estatutos pendientes.


## 158. Olías T6 y T10 · CIERRES DOCUMENTALES DE SEGURIDAD Y ACCESOS (**08/11/2026**)

Se ha priorizado **trabajo sobre contenido editorial del programa oficial** frente a generación de fichas auxiliares. Nuevos cierres documentales de Olías del Rey, convocatoria **BOP Toledo 204/2026, anuncio 4833**:

**T6, seguridad en edificios, emergencia/evacuación y traslado de cargas:** [manual](content/olias-auxiliar-edificios/tema-06/manual.md), [matriz](content/olias-auxiliar-edificios/tema-06/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-06/fuentes.md), [banco](content/olias-auxiliar-edificios/tema-06/preguntas.json). **4 incisos**, **3 supuestos completos** de cajas bloqueando una salida, atención en alarma a visitante que necesita apoyo y falso límite legal de **25 kg**. Normas cotejadas: [**RD 486/1997, anexo I.10**](https://www.boe.es/eli/es/rd/1997/04/14/486/con), [**Ley 31/1995, arts. 14, 19–21 y 29**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), [**RD 487/1997, arts. 2–4**](https://www.boe.es/buscar/act.php?id=BOE-A-1997-8670). **12 preguntas y 48 alternativas** con justificación jurídica y trampa precisa; claves inalteradas. No se inventan planos o instrucciones específicas de un inmueble.

**T10, acceso, apertura y cierre de edificios:** [manual](content/olias-auxiliar-edificios/tema-10/manual.md), [matriz](content/olias-auxiliar-edificios/tema-10/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-10/fuentes.md), [banco](content/olias-auxiliar-edificios/tema-10/preguntas.json). **4 incisos**, **2 casos resueltos** de contratista no autorizado y reunión que continúa al cerrar. Corregida una falsa atribución: **RGPD art. 5** protege datos de visitas; **RD 486/1997 anexo I.10** regula vías de evacuación; **Ley 31/1995 art. 20** obliga a planificar emergencias. Los permisos y horarios reales son procedimientos del centro, no normas de RGPD. **10 preguntas y 40 alternativas** justificadas y referenciadas sin alterar claves.

**Comprobación material posterior:** nueva lectura de **manual, matriz, fuentes, banco y programa** de ambos temas. Estado **AUDITADO** en [programa Olías](data/programa-olias-auxiliar-edificios-2026.json), **8 incisos, 5 casos resueltos, 22 preguntas/88 alternativas** con respuesta literal coherente; **13 temas de Olías** en estado `AUDITADO`. No se ha comprobado el protocolo específico de cada centro, la ejecución de CI ni navegador: **cierre documental, no integral**.

**Contador general:** desde **69/121 documentales** (§157) a **71/121 documentales**, **50 temas pendientes de cierre documental**, **0/121 cierres integrales certificados**. Siguiente bloque principal: **Olías T7–T9 y T1–T5**, con prioridad a los que pueden contrastarse con fuentes primarias, sin declarar cerrado **Olías T13 callejero** hasta disponer de relación municipal exhaustiva; **OAPGT T6** se mantiene en cola final.


## 159. Olías T7–T9 · CIERRE DOCUMENTAL REAL DE ATENCIÓN, RECEPCIÓN Y CORREO (**08/11/2026**)

Se han cerrado documentalmente **tres nuevos temas** de la convocatoria de **Olías del Rey (BOP Toledo 204/2026, anuncio 4833)**, cambiando en GitHub **manual, matriz, fuentes, banco de preguntas y programa general** de cada uno. **Prioridad expresa: terminar temarios, no multiplicar trabajos accesorios**.

**T7 · Atención ciudadana, comunicación, asertividad y conflictos:** [manual](content/olias-auxiliar-edificios/tema-07/manual.md), [matriz](content/olias-auxiliar-edificios/tema-07/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-07/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-07/preguntas.json). **5 incisos**; se separan técnicas de comunicación de [**Ley 39/2015 arts. 13 y 53**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) —personas frente a interesados—, [**TREBEP art. 54.1/54.4**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719) y **RGPD art. 5**. **2 casos** de petición improcedente de expediente y conflicto con datos de terceros. Banco **10 preguntas/40 opciones**, justificado y referenciado, sin cambiar claves.

**T8 · Recepción, vigilancia organizativa y llaves:** [manual](content/olias-auxiliar-edificios/tema-08/manual.md), [matriz](content/olias-auxiliar-edificios/tema-08/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-08/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-08/preguntas.json). **5 incisos**; control de llaves no se atribuye a artículo inexistente del RD 486/1997: requiere **protocolo municipal**. Salidas y vías seguras se fundamentan en **RD 486/1997 anexo I.10**, emergencia en **LPRL art. 20**, registros personales en **RGPD art. 5** y trato en **TREBEP art. 54**. **2 casos** de pérdida de llave maestra y cierre con ocupantes. Banco **10 preguntas/40 opciones** sin cambiar claves.

**T9 · Correspondencia y servicios postales:** [manual](content/olias-auxiliar-edificios/tema-09/manual.md), [matriz](content/olias-auxiliar-edificios/tema-09/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-09/fuentes.md), [preguntas](content/olias-auxiliar-edificios/tema-09/preguntas.json). **4 incisos**; verificación BOE de [**RD 437/2024, art. 14**](https://www.boe.es/buscar/act.php?id=BOE-A-2024-10010) (franqueo) y **art. 20** (certificado firmado), además de **disposición transitoria única** sobre persistencia parcial de normativa de notificaciones del **RD 1829/1999**. El **RGPD** no define entrega certificada, sino confidencialidad. **2 casos** de certificado/solicitud y tarifas/notificaciones. Banco **10 preguntas/40 opciones**, respuestas originales conservadas; tarifas de mercado no se inventan.

**Comprobación efectiva posterior a escritura:** mediante nueva lectura de GitHub de **los doce archivos** y el programa: **3/3 en estado AUDITADO**, matrices **5+5+4 = 14 incisos**, **6 casos concretos**, **30 preguntas/120 alternativas** con correspondencia entre respuestaCorrecta y respuestaLiteral en **30/30**; no persisten los supuestos genéricos sustituidos. **16 de los 22 temas de Olías** están ahora en `AUDITADO` en [programa](data/programa-olias-auxiliar-edificios-2026.json).

**Contador histórico**: de **71/121 documentales** de §158 a **74/121 documentales** (**47 pendientes**), y **0/121 integrales certificados**; validación CI/navegador y protocolos internos municipales siguen pendientes. **Siguiente cola real de contenido:** **Olías T1–T5** y **T13 callejero**, este último bloqueado hasta hallar callejero íntegro oficial. Se mantiene **OAPGT C2 T6** en última posición por falta de estatutos acreditados.


## 160. Olías T1–T4 · CIERRE DOCUMENTAL DEL BLOQUE GENERAL JURÍDICO (**08/11/2026**)

**Cuatro nuevos cierres documentales reales, sin duplicar pruebas preexistentes.** Se han completado o revisado los **manuales, matrices, fuentes y bancos** de los cuatro temas generales del BOP Toledo **204/2026, anuncio 4833**; se añadieron **2 supuestos por tema** y se actualizaron los cuatro estados en [programa Olías](data/programa-olias-auxiliar-edificios-2026.json).

- **T1 Constitución, CCAA, Corona y Gobierno**: [manual](content/olias-auxiliar-edificios/tema-01/manual.md) · [matriz](content/olias-auxiliar-edificios/tema-01/matriz.json) · [fuentes](content/olias-auxiliar-edificios/tema-01/fuentes.md) · [preguntas](content/olias-auxiliar-edificios/tema-01/preguntas.json). **4 incisos, 2 casos, 12 preguntas/48 alternativas**. Cotejados **CE art. 99** (primera mayoría **absoluta**, segunda **48 horas después** por mayoría **simple**, plazo **2 meses desde primera votación**). [CE vigente](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229).
- **T2 Administración, municipio y Hacienda Pública**: [manual](content/olias-auxiliar-edificios/tema-02/manual.md) · [matriz](content/olias-auxiliar-edificios/tema-02/matriz.json) · [fuentes](content/olias-auxiliar-edificios/tema-02/fuentes.md) · [preguntas](content/olias-auxiliar-edificios/tema-02/preguntas.json). **4 incisos, 2 casos, 10 preguntas/40 alternativas**. [LRBRL art. 20.1.b](https://www.boe.es/eli/es/l/1985/04/02/7/con): JGL obligatoria con **más de 5.000 habitantes**; distinción **precio público no tributario** frente a impuestos/tasas/contribuciones especiales.
- **T3 ET, TREBEP y prevención**: [manual](content/olias-auxiliar-edificios/tema-03/manual.md) · [matriz](content/olias-auxiliar-edificios/tema-03/matriz.json) · [fuentes](content/olias-auxiliar-edificios/tema-03/fuentes.md) · [preguntas](content/olias-auxiliar-edificios/tema-03/preguntas.json). **4 incisos, 2 casos, 10 preguntas/40 alternativas**. Personal **laboral fijo** distinto de funcionario; obligaciones de protección del empleador y prevención del trabajador con [LPRL](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292).
- **T4 Igualdad LO 3/2007 para AGE**: [manual](content/olias-auxiliar-edificios/tema-04/manual.md) · [matriz](content/olias-auxiliar-edificios/tema-04/matriz.json) · [fuentes](content/olias-auxiliar-edificios/tema-04/fuentes.md) · [preguntas](content/olias-auxiliar-edificios/tema-04/preguntas.json). **6 incisos, 2 casos, 24 preguntas/96 alternativas**. Cotejada [**LO 3/2007**](https://www.boe.es/eli/es/lo/2007/03/22/3/con/): **40–60 %** presencia equilibrada, preferencia de formación **1 año** (**art. 60.1**), reserva formativa **al menos 40 %** (**art. 60.2**) y Plan AGE **al inicio de cada legislatura**, evaluado **anualmente** (**art. 64**). No proyectar obligaciones AGE automáticamente sobre Olías.

**Comprobación de resultado real:** nueva lectura del [manifiesto general de Olías](data/programa-olias-auxiliar-edificios-2026.json) y de **16 archivos** (cuatro por cada tema), comprobando **4/4 en AUDITADO**, **18 incisos**, **8 supuestos resueltos**, **56 preguntas/224 alternativas**, y coincidencia de **respuestaLiteral** con **respuestaCorrecta** en todas las preguntas. Se conservaron las claves existentes y el banco previo había sido cotejado en el lote **05/11/2026**. **Pendientes:** CI del último commit, ejecución navegador, y límites específicos municipales: cierre documental distinto del integral.

**Contador actualizado:** **74/121** del §159 → **78/121 cierres documentales** (**43 pendientes**); **0/121 integrales** certificados. En Olías **20/22** figuran `AUDITADO`; permanecen **T5 organización y normativa local** y **T13 callejero**, pues dependen de verificaciones municipales que aún no respaldan todo el epígrafe. **Siguiente trabajo de temario:** cerrar los huecos T5/T13 si se obtiene fuente pública íntegra, y continuar sobre las demás convocatorias con material no cerrado, sin inflar cifras por repeticiones.


## 161. UC3M T1–T3 · DESARROLLO TERMINADO Y COTEJADO, CON RESERVA DEL CORTE LEGAL (**08/11/2026**)

**Prioridad: culminar temario UC3M cercano al examen, sin atribuir aprobación del usuario.** Se ha abandonado el trabajo accesorio y se han completado los **manuales, matrices, fuentes y bancos** de **T1, T2 y T3**, y los campos de revisión documental de [manifiesto UC3M](data/programa-uc3m-auxiliar-administrativa-2026.json). La condición formal de cada tema sigue siendo `EN_REVISION_USUARIO`; se añadió `estadoRevisionDocumental: DESARROLLO_COMPLETO_CON_RESERVA_CORTE` sin crear un inexistente `APROBADO_USUARIO`.

**T1 Constitución**: [manual](content/uc3m/tema-01/manual.md), [matriz](content/uc3m/tema-01/matriz.json), [fuentes](content/uc3m/tema-01/fuentes.md), [banco](content/uc3m/tema-01/preguntas.json). **5 apartados**, **2 casos nuevos** de reforma del **art. 69.3 CE** y trámite de ley orgánica. Contrastada la [reforma de 19/05/2026](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10881), vigente desde **20/05/2026**: circunscripciones diferenciadas para Ibiza y Formentera, **1 senador cada una** y eficacia electoral diferida a las próximas elecciones del Senado tras su entrada en vigor. Mayoría **absoluta del Congreso en votación final del conjunto** para la ley orgánica (CE art. 81.2). Banco **12/48** con claves originales.

**T2 Ley 39/2015 I**: [manual](content/uc3m/tema-02/manual.md), [matriz](content/uc3m/tema-02/matriz.json), [fuentes](content/uc3m/tema-02/fuentes.md), [banco](content/uc3m/tema-02/preguntas.json). **4 apartados**, **2 casos nuevos** sobre diferencia entre aviso de sede y notificación (**art. 43: rechazo a los **10 días naturales** en los supuestos pertinentes**) y **doble silencio de alzada** (**art. 24**, con excepciones). Banco **12/48** conservado.

**T3 Ley 39/2015 II**: [manual](content/uc3m/tema-03/manual.md), [matriz](content/uc3m/tema-03/matriz.json), [fuentes](content/uc3m/tema-03/fuentes.md), [banco](content/uc3m/tema-03/preguntas.json). **9 apartados**, **2 casos nuevos** de subsanación selectiva (**art. 68: **10 días**, ampliación de **5** no aplicable a selectivos) y recursos (**alzada 1 mes/3 meses**, **reposición 1 mes/1 mes**, extraordinario **4 años** o **3 meses** según causa). Banco **12/48** intacto. Fuente primaria [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565).

**Verificación material posterior:** recuperación directa de **12 archivos** y [manifiesto UC3M](data/programa-uc3m-auxiliar-administrativa-2026.json); **18 apartados**, **6 casos nuevos resueltos**, **36 preguntas/144 alternativas** intactas, **36/36 claves** coinciden con respuestas literales, tres fichas de fuentes reflejan la reserva y ningún estado `APROBADO_USUARIO` fue inventado.

**Corte normativo UC3M**: [convocatoria BOE-A-2026-14624, base primera.7](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624): legislación exigible a la **fecha de publicación de resolución definitiva de admitidos y anuncio de examen**. El portal de [UC3M](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) confirma publicación de listas definitivas, pero el rastreo no permitió recuperar la **fecha primaria verificable** del documento concreto. Fuente secundaria Adams refiere **01/10/2026**, **NO certificada como fuente primaria**, por lo que no se fija corte legal definitivo sin resolución. La fecha del examen (**21/11/2026**) no es el corte automático.

**Recuento por prudencia:** **se mantienen 78/121 cierres documentales del §160**, pues estos tres temas tienen **desarrollo completo, pero NO cierre integral de corte jurídico**, aprobación del usuario ni prueba real de navegador. Se contabilizan aparte **3 temas UC3M con desarrollo finalizado y reserva expresa**; no inflar las cifras hasta cerrar la dependencia primaria. Próximo frente de contenido: **UC3M T4–T6 y siguientes**, o búsqueda de la resolución original de listas definitivas para desbloquear definitivamente T1–T3. **OAPGT C2 T6** y **Olías T5/T13** permanecen condicionados a fuentes propias.


## 162. UC3M T4–T6 · DESARROLLO COMPLETO CON RESERVA DEL CORTE LEGAL (**08/11/2026**)

**Trabajo sustantivo de temario.** Tras los tres temas de UC3M del §161, se han desarrollado **T4, T5 y T6** con **dos casos jurídicos específicos cada uno** y actualización real de **manual, matriz, fuentes, banco y manifiesto**. Todos conservan el estado formal `EN_REVISION_USUARIO`, mientras su nuevo indicador independiente es `DESARROLLO_COMPLETO_CON_RESERVA_CORTE`; **no** se ha inventado una aprobación del opositor.

**T4, Ley 40/2015 — órganos:** [manual](content/uc3m/tema-04/manual.md), [matriz](content/uc3m/tema-04/matriz.json), [fuentes](content/uc3m/tema-04/fuentes.md), [preguntas](content/uc3m/tema-04/preguntas.json). **7 bloques**. Casos sobre **delegación, avocación, encomienda y firma** (**arts. 9–12**) y **quórum, orden del día y mayorías** (**art. 17**). Fuente: [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566). **12 preguntas/48 opciones** sin cambiar claves.

**T5, Ley 40/2015 — funcionamiento electrónico:** [manual](content/uc3m/tema-05/manual.md), [matriz](content/uc3m/tema-05/matriz.json), [fuentes](content/uc3m/tema-05/fuentes.md), [preguntas](content/uc3m/tema-05/preguntas.json). **10 bloques**. Casos: **sede vs portal, actuación automatizada, sello/CSV** (**arts. 38–42**) y **localización UE** de los sistemas tasados en **art. 46 bis**. **12 preguntas/48 opciones** preservadas.

**T6, LOPDGDD y RGPD:** [manual](content/uc3m/tema-06/manual.md), [matriz](content/uc3m/tema-06/matriz.json), [fuentes](content/uc3m/tema-06/fuentes.md), [preguntas](content/uc3m/tema-06/preguntas.json). **6 bloques**. Casos: **responsable RGPD art. 12: un mes + posible prórroga de dos**, reclamación previa **DPD art. 37.1 LOPDGDD: dos meses**, remisión de autoridad **DPD art. 37.2: un mes**; universidades obligadas a DPD **art. 34.1.b** y brecha notificada en condiciones del **art. 33 RGPD: 72 horas cuando proceda**. Fuentes: [LOPDGDD](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) y [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa). **12 preguntas/48 opciones** preservadas.

**Comprobación de escritura:** releídos los **12 archivos** de tres temas y manifiesto [UC3M](data/programa-uc3m-auxiliar-administrativa-2026.json) desde GitHub: **23 apartados**, **6 casos resueltos**, **36 preguntas/144 alternativas**, **36/36 claves coherentes**, las tres fuentes contienen cierre de desarrollo y ninguno tiene aprobación del usuario falsa. Queda por verificar la **fecha exacta en fuente primaria** de publicación de la resolución UC3M de listas definitivas y anuncio del ejercicio conforme **base primera.7**, además de ejecución real de CI/navegador. Se evita declarar certificación jurídica integral.

**Avance en la barra editorial común: 78/121 = 64,5 %** de cierres documentales acreditados, **43 pendientes**; esta ronda suma **0 cierres documentales sin reservas** y **3 desarrollos adicionales completos con reserva**. Acumulado UC3M **T1–T6** desarrollado en este nuevo lote con corte todavía pendiente. **No elevar el numerador de 78** hasta resolver corte oficial, y no confundir pendientes con falta de manual. **0/121 certificaciones integrales**. Siguiente acción útil: recuperar la resolución oficial del corte UC3M y/o seguir completando **T7–T9**.


## 163. UC3M T7–T9 y desglose real por convocatoria (**08/11/2026**)

**Tres nuevos desarrollos completos con reserva normativa** en UC3M, sin atribuir aprobación del usuario y sin añadirlos al contador estricto de cierre jurídico vigente.

**UC3M T7 — Transparencia**: [manual](content/uc3m/tema-07/manual.md), [matriz](content/uc3m/tema-07/matriz.json), [fuentes](content/uc3m/tema-07/fuentes.md), [banco](content/uc3m/tema-07/preguntas.json). **5 apartados**, **2 casos nuevos** de plazos de acceso/inadmisión y remisión al órgano competente; [**Ley 10/2019, arts. 40–43**](https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102): **20 días**, ampliación **otros 20**, inadmisión en **5 días hábiles** cuando proceda, silencio desestimatorio; **12 preguntas/48 alternativas** sin alterar.

**UC3M T8 — Igualdad, identidad y acoso**: [manual](content/uc3m/tema-08/manual.md), [matriz](content/uc3m/tema-08/matriz.json), [fuentes](content/uc3m/tema-08/fuentes.md), [banco](content/uc3m/tema-08/preguntas.json). **13 bloques**, dos casos sobre **presencia equilibrada 40–60 %**, III Plan [**UC3M 2025–2029**](https://www.uc3m.es/igualdad/plan-igualdad) (**6 ejes, 138 medidas, vigencia 01/02/2025 a 31/01/2029**) y diferencia de acoso sexual/por razón de sexo. Corregido encabezado duplicado del manual. Banco **12/48** conservado; el repaso complementario previo permanece.

**UC3M T9 — Ofimática Word/Excel 2019 y Google Workspace**: [manual](content/uc3m/tema-09/manual.md), [matriz](content/uc3m/tema-09/matriz.json), [fuentes](content/uc3m/tema-09/fuentes.md), [banco](content/uc3m/tema-09/preguntas.json). **13 bloques**, casos nuevos de combinación de correspondencia, filtros/validación/formato condicional, Drive permisos y Gmail/Calendar. El tema ya tenía **cierre documental focal de 06/11** y se amplía sin reclamar un nuevo cierre duplicado. **12/48** históricas intactas, más repaso complementario anterior.

**Comprobación de archivos efectivamente recuperados tras cambios:** **12 archivos y manifiesto**, matrices **5+13+13 = 31 bloques**, **6 supuestos nuevos**, **36 preguntas/144 alternativas** originales conservadas, **36/36** claves correspondientes a texto de respuesta. UC3M ahora tiene **T1–T9 con campo DESARROLLO_COMPLETO_CON_RESERVA_CORTE** y todos los **20 temas** permanecen formalmente `EN_REVISION_USUARIO`; no se inventa aprobación.

**DESGLOSE DEL AVANCE POR MANIFIESTOS, SIN DOBLE CONTAR.** Comprobados los cinco manifiestos oficiales del repositorio en esta ronda:
| Convocatoria | Total | Estado de manifiesto | Qué acredita |
|---|---:|---|---|
| **La Puebla C2** | **19** | **19 APROBADO_USUARIO** (histórico julio) | Contenido previamente aprobado; **revalidación jurídica de noviembre pendiente** |
| **Diputación C1** | **40** | **39 AUDITADO**, **T22 estatutos pendiente** | Documental auditado con reservas funcionales |
| **Diputación C2** | **20** | **19 AUDITADO**, **T6 OAPGT BORRADOR** | Documental auditado con reservas funcionales |
| **UC3M C2** | **20** | **20 EN_REVISION_USUARIO**, **9 desarrollo documental completado bajo reserva** | Sin aprobación usuario ni verificación primaria de fecha corte legal |
| **Olías C2** | **22** | **20 AUDITADO**, **T5 y T13 pendientes** | Documental auditado; dos bloqueos municipales |

**Barra estricta histórica:** `(39 C1 + 19 C2 + 20 Olías)=78/121 = 64,46%`, **43 fuera del contador**. **Importante**: los **19 APROBADO_USUARIO de La Puebla** NO están en ese numerador histórico porque su aprobación es de julio y la revalidación de vigencia a noviembre está pendiente. La barra mezcla así, deliberadamente y con explicación, auditados actuales contra un denominador de todas las convocatorias. **Barra complementaria «aprobados históricos o auditados»**: `78 + 19 La Puebla = 97/121 = 80,17%`; esto **NO significa 97 temas revalidados a noviembre**. Los restantes **24** son **20 UC3M + T22 C1 + T6 C2 + T5/T13 Olías**, entre los cuales **9 UC3M** tienen desarrollo terminado bajo reserva. Para distinguirlos, mostrar barras separadas y no un único porcentaje de «todo acabado».

**No existe certificación integral de los 121 temas** mientras falten navegador/E2E y aprobación cuando proceda. Fecha de corte legislativo **UC3M base primera.7** pendiente de resolución primaria; en el portal [UC3M convocatoria](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) consta resolución definitiva, pero **no se ha certificado fecha de su publicación**, y no se sustituye por **21/11** (fecha de examen). **Próxima prioridad:** UC3M T10–T12 sin distraer recursos con fichas adicionales; desbloquear corte legal cuando se obtenga fuente primaria.



## 164. Prioridad 100 % · Olías T5 cerrado, C1 T22 ampliado y fuente de callejero INE (**08/11/2026**)

**Prioridad ordenada por proximidad al 100 % solicitada por el usuario:** **Diputación C1 39/40** y **Olías 20/22**. El cierre real obtenido en esta ronda es **Olías T5**, que eleva Olías a **21/22 = 95,45 %**. El C1 T22 continúa pendiente de Estatutos completos; no se declara cierre ficticio.

### Olías T5 · ÚNICO NUEVO CIERRE DOCUMENTAL

[Manual](content/olias-auxiliar-edificios/tema-05/manual.md), [matriz](content/olias-auxiliar-edificios/tema-05/matriz.json), [fuentes](content/olias-auxiliar-edificios/tema-05/fuentes.md) y [preguntas](content/olias-auxiliar-edificios/tema-05/preguntas.json) corregidos. Se encontró fuente oficial antes inexistente en el tema:

- [**BOP 137/2023, anuncio 3918**](https://bop.diputoledo.es/webEbop/DocGet?id=23079209%3B0&insert_number=3918&insert_year=2023): composición y organización inicial, Junta, Tenientes, delegaciones.
- [**BOP 99/2024, anuncio 2645**](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=99&insert_year=2024&publication_date=24052024): rectifica la capacidad resolutiva de las delegaciones especiales que figuraba negada en la publicación de 2023.
- [**BOP 49/2025, anuncio 1300**](https://bop.diputoledo.es/webEbop/DocGet?id=25031408%3B0&insert_number=1300&insert_year=2025): nueva distribución de **seis delegaciones especiales**, que desplaza el reparto anterior; [Ayuntamiento, Empleo](https://www.ayuntamientodeoliasdelrey.com/empleo-y-promocion-economica/) confirma en la página disponible en 2026 la cartera de **María Jesús Hernández García**.

El T5 contiene ahora **cinco incisos con fuentes pertinentes, dos casos nuevos de examen, 18 preguntas/72 alternativas** (incluye **seis nuevas** sobre decretos de 2023–2025) y respuestas conservadas. Se pasó de `EN_AUDITORIA` a **`AUDITADO`** con reserva expresa de posible modificación posterior no documentada, y sin certificación de navegador. La normativa municipal que consta en el índice se distingue de la vigencia de sus preceptos particulares. El **callejero completo pertenece al T13**, no a este T5.

### Diputación C1 T22 · fuente jurídica nueva, SIN CIERRE

[Manual](content/diputacion-toledo/tema-22/manual.md), [matriz](content/diputacion-toledo/tema-22/matriz.json), [fuentes](content/diputacion-toledo/tema-22/fuentes.md) y [preguntas](content/diputacion-toledo/tema-22/preguntas.json) ampliados con [**BOP 92/2023 anuncio 2824**](https://bop.diputoledo.es/webEbop/DocGet?id=23058163%3B0&insert_number=2824&insert_year=2023). El BOP acredita **Consejo Rector art. 10.k**, **Presidencia art. 12.1** y **Dirección art. 14** de los Estatutos en la reproducción de ese anuncio, y **delegaciones concretas** en favor de la Dirección para representación y contratación, con acuerdo del Consejo Rector de **11/05/2023**. Se añadieron **dos casos resueltos** y **cuatro preguntas**, pasando de **20/80 a 24 preguntas/96 alternativas**, conservando todas las claves. No se extrapola una delegación para expedientes concretos a contratos futuros ni se declaran como vigentes umbrales estatutarios históricos sin cotejo normativo. Siguen pendientes **texto original oficial de BOP 235/1996**, **corrección BOP 253/1996**, aprobación **definitiva** de la modificación inicialmente publicada en 2004 y demás modificaciones para estatutos íntegros; estado **EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES**.

### Olías T13 · ruta a fuente primaria, SIN CIERRE

Se encontró el [**INE, Callejero del Censo Electoral**](https://www.ine.es/prodyser/callejero/): publica ficheros **VIAS** y **TRAM** por provincia y semestre. Debe descargarse el fichero provincial **Toledo**, corte **30/06/2026**, filtrar código INE **45122** y cotejar vías. Se documentó en [fuentes T13](content/olias-auxiliar-edificios/tema-13/fuentes.md). **No se consiguió extraer el conjunto íntegro**, por lo que T13 no cambia de estado.

### Estado del avance tras la ronda

| Convocatoria | Cierre documental/auditoría | Otros estados relevantes |
|---|---:|---|
| La Puebla C2 | **19/19 APROBADO_USUARIO histórico** | Revalidación de noviembre pendiente |
| Diputación C1 | **39/40** | T22 pendiente de Estatutos OAPGT |
| Diputación C2 | **19/20** | T6 OAPGT borrador |
| Olías | **21/22** | T13 callejero INE pendiente |
| UC3M | **0/20 como auditados/aprobados** | **9/20** desarrollo completo con reserva, 20 en revisión usuario |

**Contador estricto global histórico:** §163 **78/121 = 64,46 %** → **79/121 = 65,29 %** por **un único nuevo cierre Olías T5**, **42 temas fuera del cierre estricto**. **Incluyendo La Puebla aprobada históricamente: 98/121 = 80,99 %**, pero esos 19 no están revalidados a noviembre. **0/121 certificaciones funcionales integrales**. Comprobación posterior: recuperados de GitHub programa y archivos de T5/C1 T22; Olías **21 auditados**, T5 **18/72** con claves íntegras; C1 **39 auditados**, T22 **24/96** con claves íntegras. Prioridad siguiente: **Olías T13 vía callejero INE** para intentar el **22/22**, y **Diputación C1 T22** solo cuando los Estatutos estén reconstruidos con fuentes primarias.


## 165. Cierre del último 5 % de Olías y C1: avances reales con bloqueo documental declarado (**08/11/2026**)

Se ha priorizado **Olías T13, el único pendiente de sus 22 temas**, y después **Diputación C1 T22, el único pendiente de sus 40 temas**, conforme a la instrucción expresa de completar primero las convocatorias cercanas al 100 %. **No se declara ningún cierre nuevo sin lista/cuerpo normativo íntegro.**

**Olías T13 — trabajo material:** [manual](content/olias-auxiliar-edificios/tema-13/manual.md) corregido para no llevar encabezado «AUDITADO» contradictorio con el manifiesto; añadido un bloque nuevo de asociación de vías/servicios (Plaza de la Constitución **1/7**, Camino del Arenal **5/7**, Flor, Higares, Venta de Arriba, Toledo, Cabañuelas, Celinda, Petunia, Cañada de Magán, Halcón, Zorzales y Cedro), con **3.º supuesto** resuelto y tabla de estructura del callejero INE. [Banco](content/olias-auxiliar-edificios/tema-13/preguntas.json) ampliado **12 → 21 preguntas / 84 alternativas** (9 nuevas), verificadas las **21/21 claves**. [Matriz](content/olias-auxiliar-edificios/tema-13/matriz.json) y [fuentes](content/olias-auxiliar-edificios/tema-13/fuentes.md) ahora explican **VIAS/PSEU/TRAM** y la referencia **30/06/2026** de la edición julio 2026 del [**INE**](https://www.ine.es/prodyser/callejero/). Se intentó descargar el **ZIP oficial 2026** desde este entorno, pero falló acceso a selector/enlace y resolución de red; **no se ha leído el fichero de Toledo del municipio 45122**. Por tanto, **no hay inventario completo de calles certificado**. Mantener **T13 EN_AUDITORIA**.

**Diputación C1 T22 — nuevas verificaciones parciales:** [manual](content/diputacion-toledo/tema-22/manual.md) y [fuentes](content/diputacion-toledo/tema-22/fuentes.md) ampliados con dos pruebas primarias adicionales: [**BOP 188 de 03/10/2019, anuncio 5164**](https://bop.diputoledo.es/webEbop/DocGet?id=19092977%3B0&insert_number=5164&insert_year=2019), ejecución de disposición adicional de los Estatutos para instructores; [**BOP 113 de 17/06/2024, anuncio 3152**](https://bop.diputoledo.es/webEbop/DocGet?id=24065870%3B0&insert_number=3152&insert_year=2024), actuación de Presidencia citando **art. 12.2.l), 8)** vigente en esa fecha. Se añadió un supuesto diferenciado entre **actuación que cita un artículo** y **texto consolidado de ese artículo**. Las fuentes comprueban competencias parciales en **2019 y 2024**, pero **no equivalen a todos los Estatutos aprobados en 1996 y sus modificaciones**; **T22 sigue EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES**. Banco C1 T22 conserva **24 preguntas/96 alternativas**, ya ampliado en §164.

**Verificación posterior desde GitHub:** recuperados los dos manifiestos y seis archivos de contenido. **Olías 21/22** `AUDITADO`, T13 `EN_AUDITORIA`, 21 preguntas/84 alternativas claves válidas, estado del encabezado corregido; **C1 39/40** `AUDITADO`, T22 bloqueado, fuentes adicionales guardadas. **Sin prueba de navegador ni CI.**

**Barras consolidadas, sin incrementos artificiales:** auditoría documental estricta **79/121 = 65,29 %**, **42 fuera de ese contador**. Históricos `APROBADO_USUARIO` de La Puebla: **19/19**, y unión no solapada **98/121 = 80,99 %** (sin revalidar noviembre). Diputación **C1 39/40**, **C2 19/20**; Olías **21/22**; UC3M **9/20 desarrollados con reservas y 0/20 aprobados**. **0/121 certificaciones funcionales integrales**. Próxima vía de desbloqueo: obtener realmente **INE VIAS Toledo 07/2026** y reconstruir con publicaciones oficiales completas **Estatutos OAPGT 1996+correcciones+reformas**. Hasta entonces, más preguntas parciales no convierten las dos convocatorias al 100 %.


## 166. Salto de bloqueos: La Puebla T15–T16 y UC3M T10–T12 (**08/11/2026**)

**Instrucción de prioridad del usuario:** cuando la única vía para cerrar un tema exige documentos oficiales que no están disponibles, **dejarlo en cola final** en lugar de iterar indefinidamente. Por eso no se han vuelto a modificar **Olías T13, Diputación C1 T22 ni Diputación C2 T6**. Se ha trabajado en contenido disponible de **La Puebla** y **UC3M**.

**La Puebla T15–T16, revalidación técnica focal de contenido sin doble contar su aprobación:** [T15 manual](content/la-puebla/tema-15/manual.md) y [T16 manual](content/la-puebla/tema-16/manual.md) ampliados con **cuatro casos nuevos** de unidades de red/arrastre, escaneo-OCR-PDF, compatibilidad empresarial mediante modo IE y privacidad/descargas de Edge. Fuentes Microsoft contrastadas: [fin soporte ordinario Windows 10 14/10/2025](https://support.microsoft.com/es-es/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025), [modo IE](https://support.microsoft.com/es-es/edge/internet-explorer-mode-in-microsoft-edge) y [retirada IE11 en versiones afectadas 15/06/2022, compatibilidad hasta al menos 2029](https://learn.microsoft.com/en-us/lifecycle/announcements/internet-explorer-11-end-of-support). Se añadió `controlVigencia20261108` en [programa La Puebla](data/programa.json); se conservan los dos bancos de **12 preguntas/48 alternativas** y el estado histórico `APROBADO_USUARIO`. **No** se afirma que las 19 fichas estén revalidadas completamente a noviembre ni se cuenta un cierre nuevo.

**UC3M T10–T12, desarrollo avanzado real:** [T10 manual](content/uc3m/tema-10/manual.md), [T11 manual](content/uc3m/tema-11/manual.md), [T12 manual](content/uc3m/tema-12/manual.md) ampliados con **seis supuestos nuevos** de interinidad vigente, puestos/situaciones administrativas, ingreso frente a provisión, compatibilidad privada previa, Comité de Seguridad y Salud a partir de **50 trabajadores**, emergencia y riesgo grave e inminente. Se verificaron en BOE [**TREBEP art. 10.1.d: 9 meses en 18**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), [**Ley 53/1984 art. 14**](https://www.boe.es/buscar/act.php?id=BOE-A-1985-151) y [**Ley 31/1995 art. 38**](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292). Actualizados **matrices, fuentes y bancos** de los tres temas con controles de versión y sin tocar claves históricas. Los temas quedan con `estadoRevisionDocumental=DESARROLLO_COMPLETO_CON_RESERVA_CORTE` en [manifiesto UC3M](data/programa-uc3m-auxiliar-administrativa-2026.json), conservando `EN_REVISION_USUARIO` y la ausencia de fecha primaria exacta de corte legal (base primera.7). **No se atribuye aprobación al usuario**.

**Comprobación de escritura desde GitHub:** nueva lectura de manual/matriz/banco/fuentes T10–T12: **40 apartados** (11+12+17), **6 casos nuevos**, **36 preguntas y 144 alternativas** con claves congruentes; programa UC3M muestra **12/20 desarrollados bajo reserva**. La Puebla T15 y T16 tienen cuatro casos incorporados y el control de revisión anotado. Ninguna afirmación de ejecución E2E o CI.

**Barras sin inflación:** se mantienen **79/121 auditados documentalmente estrictos (65,29 %)** y, agregando La Puebla históricamente aprobada sin solapamiento, **98/121 (80,99 %)**; **0/121 certificaciones integrales**. Desglose: **La Puebla 19/19 aprobados históricos**, **Diputación C1 39/40 auditados**, **Diputación C2 19/20 auditados**, **Olías 21/22 auditados**, **UC3M 12/20 desarrollados bajo reserva y 0/20 aprobados formalmente**. Orden de trabajo siguiente: continuar UC3M **T13–T20** solo donde exista material oficial suficiente y revalidaciones específicas de La Puebla; dejar el callejero y los Estatutos íntegros a la última fase.


## 167. Ejecución con prioridad Olías → Diputación C1 → UC3M — **08/11/2026**

Se siguió el orden expresamente fijado: **primero Olías T13**, después **Diputación C1 T22**. Ambas fichas quedaron **sin cierre** por ausencia de fuentes íntegras para certificar, por lo que se respeta la regla de saltar bloqueos antes de proseguir con UC3M.

- **Olías T13:** rectificada la tabla epígrafe/fuente en el [manual](content/olias-auxiliar-edificios/tema-13/manual.md), que atribuía a cada inciso una fuente genérica incongruente. Ahora separa Ayuntamiento, Turismo CLM e INE, especifica qué acredita cada enlace y actualiza el balance a **21 preguntas/84 alternativas y 3 supuestos**. Se intentó descargar el ZIP nacional de **julio 2026** del INE, pero falló la resolución DNS del entorno. **No se ha examinado VIAS/PSEU 45122** ni se declara callejero íntegro. Commit: `08afbfb8984b0603726466668086286092ad556f`.
- **Diputación C1 T22:** cotejada la imagen de la página oficial del [BOP 284/2011, anuncio 11024](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011), aprobada por Pleno **28/11/2011**. Añadida en [manual](content/diputacion-toledo/tema-22/manual.md) una tabla de órganos/competencias/fin de vía administrativa y supuesto sobre delegación, sin modificar respuestas. En [fuentes](content/diputacion-toledo/tema-22/fuentes.md) se documenta alcance exacto del BOP y se corrigen referencias históricas obsoletas de **20/80** a **24/96**. Commits: `318aeda80589200e6b3fd440fda7667efa412ba5`, `c5c4e67c597f4073f0df3e07685601a06c871e61`.

**Estados conservados:** Olías **21/22**, Diputación C1 **39/40**; no se han ejecutado navegador E2E ni CI en esta intervención, ni se ha modificado UC3M todavía. **Próximo bloque de trabajo: UC3M T13–20**, empezando por el primer tema todavía no desarrollado con evidencia completa, manteniendo reserva de corte jurídico de la convocatoria.


## 168. UC3M LOSU I–II y Estatutos T13–T15 — **08/11/2026**

**Orden respetado:** Olías T13 y Diputación C1 T22 conservados con bloqueos documentales del §167. Se ha continuado por **UC3M**. Última revisión de manifiesto **15/20 desarrollados documentalmente bajo reserva de corte**, todos los temas mantienen `EN_REVISION_USUARIO`, ninguno certificado ni aprobado por usuario.

- **T13 LOSU I:** reconocida en el manifiesto la evidencia preexistente de cierre documental `CIERRE_DOCUMENTAL_T13_T14_20261106.md`, sin fabricar una segunda certificación. Incluye **12 bloques**, **12 preguntas originales** y **12 preguntas complementarias**. Reglas cotejadas con [**LOSU BOE, arts. 4, 41–42**](https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500) sobre creación/reconocimiento, facultades y adscripción. Conservado `EN_REVISION_USUARIO`.
- **T14 LOSU II:** ampliado [manual](content/uc3m/tema-14/manual.md), [fuentes](content/uc3m/tema-14/fuentes.md) y [matriz](content/uc3m/tema-14/matriz.json) con **LOSU 44.3 y 45.2.e**: mandato electo **6 años no renovable**, iniciativa de Rector extraordinario **1/3 del Claustro** y participación docente **30 %**, aprobación **2/3**, consecuencias y restricción **1 año** tras rechazo. Incorporados **dos supuestos nuevos**, sin cambiar el banco original de **14 preguntas/56 alternativas**. Commits: `b10581dd9aa53d89e62fcb3f2de52d48535c6725`, `fd3441f2fe44b3ccceb72117e0774401f609ee72`, `7032b82b00424958adccbd40b15cfb1f5176d48a`.
- **T15 Estatutos:** el cierre documental previo `CIERRE_DOCUMENTAL_T15_20261106.md` acreditaba **7 bloques, 21 preguntas originales, 8 complementarias y 2 microtest**; se ha clasificado como **DESARROLLO_COMPLETO_CON_RESERVA_CORTE**, pero **sin nuevo cotejo exhaustivo de compatibilidad LOSU/Estatutos ni fecha primaria de corte**. No equivale a garantía de vigencia. Commit manifiesto: `1db4a3ce248eb0b214f642cf6e12dfe31a0a0817`.
- **Manifiesto**: `data/programa-uc3m-auxiliar-administrativa-2026.json` actualizado para **T13–T14** con reservas de la auditoría previa y fuente. Commit `0a2850dfd84d692077775cecbc134fff6b457c74`.

**Totales sin doble contar:** UC3M **15/20 desarrollados bajo reserva (75 %)**, **0/20 aprobados/recertificados**, con cinco temas `T16–T20` sin marca de desarrollo completo en el manifiesto aunque existan avances previos; se revisarán individualmente a continuación. Global estricto `AUDITADO` contemporáneo **79/121**, sumando históricos La Puebla **98/121**, y **0/121 certificaciones integrales**. Persisten pruebas funcionales E2E, WCAG/PWA y la fecha de publicación de las listas definitivas que exige la **base primera.7 UC3M**. No se ha ejecutado CI en esta intervención.


## 169. UC3M T16–T20 · reconciliación de desarrollo documental y caso judicial — **08/11/2026**

Se recuperaron directamente de GitHub las **cinco actas de cierre documental con reservas** de **06/11/2026**, sus matrices y fuentes por tema. Los temas **16, 17, 18, 19 y 20** constaban con material disponible pero sin el campo `estadoRevisionDocumental` en el manifiesto. Se registran ahora como **DESARROLLO_COMPLETO_CON_RESERVA_CORTE**. **20/20** UC3M alcanzan **desarrollo documental con reservas**; continúan **20/20 EN_REVISION_USUARIO** y **0/20 aprobados/certificados integralmente**. Esto es conciliación de evidencias previas, no nueva auditoría jurídica de cada página. [Commit de manifiesto](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/40dbc6e96a22c156ce4882df733aea733c0eaee4).

| Tema | Evidencia documental de 06/11 | Controles aún pendientes |
|---|---|---|
| **16** | **7 bloques**, **21 originales + 6 complementarias** | Corte normativo; RD 822/2021 y sentencia; navegador |
| **17** | **9 bloques**, **12 originales + 6 complementarias** | Corte y normativa institucional; navegador |
| **18** | **8 bloques**, **12 originales + 8 complementarias** | Corte y presupuesto; navegador |
| **19** | **6 bloques**, **12 originales + 3 complementarias** | Corte y ejecución presupuestaria; navegador |
| **20** | **10 bloques**, **12 originales + 5 complementarias** | Corte y umbrales de contratación; navegador |

**Ampliación nueva real T16:** [manual](content/uc3m/tema-16/manual.md), [fuentes](content/uc3m/tema-16/fuentes.md) y [matriz](content/uc3m/tema-16/matriz.json) incorporan tabla, supuesto y fuente primaria sobre la **Sentencia TS 06/10/2026 publicada BOE 23/10/2026** [BOE-A-2026-22083](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-22083), que **anula RD 905/2025** y su reforma de **art. 22.4 RD 822/2021**, **no RD 822/2021 íntegro**. Commits `f1482abf8036c5eb99a24764b6d2f9eed6c1cd86`, `e5c7f662032f28f34934ffe0ea07db9b86756970`, `2278ba9e729cb0aebeb2c6e9caaab656ebad15f3`.

**Fuente oficial de procedimiento consultada:** [UC3M oposición C2 2026](https://uc3m.es/empleo/en/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra publicación de listas definitivas y llamamiento a ejercicio **21/11/2026**, pero la consulta no permitió verificar la fecha de publicación exacta en el PDF de la resolución definitiva. La **base primera.7** exige esa fecha para determinar la norma exigible. **No convertir fecha de examen en fecha normativa ni aplicar sin control la sentencia de 23/10**.

**Barras preservadas:** Olías **21/22 AUDITADO** y T13 bloqueado; Diputación C1 **39/40 AUDITADO** y T22 bloqueado; UC3M **20/20 DESARROLLO_COMPLETO_CON_RESERVA_CORTE**, pero **0/20 AUDITADO/APROBADO**. Total documental estricto de otros programas **79/121**, suma de La Puebla histórica **98/121**; cero certificaciones integrales de todas las convocatorias. **Próximo punto:** localizar PDF primario de resolución definitiva UC3M; cotejar redacción legal al corte, verificar navegabilidad real y pruebas E2E/CI antes de hablar de 100 % fiable. No repetir edición de material ya comprobado salvo error real o reforma.


## 170. UC3M — auditoría real de fecha de corte jurídico (**08/11/2026**)

Se ha realizado una nueva comprobación en fuentes primarias y secundarias, **sin confundir sus valores probatorios**. La [**base primera.7, convocatoria BOE-A-2026-14624**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) define el corte en la **fecha de publicación** de la resolución de **listas definitivas y anuncio del ejercicio**. [**UC3M, página oficial de la convocatoria**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) anuncia **21/11/2026** como fecha de examen, con referencia a resolución definitiva, pero el PDF primario fechado y su publicación no han quedado accesibles/verificados en esta sesión. [**Adams**](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) sitúa las listas definitivas en **01/10/2026**, **dato secundario no certificado**.

**Conexión normativa crítica:** la [**Sentencia TS de 06/10/2026, publicada en BOE el 23/10/2026 (BOE-A-2026-22083)**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-22083&lang=es) anula el **RD 905/2025**, cuya modificación del art. 22.4 del **RD 822/2021** queda afectada. La norma modificada **no se anula íntegramente**. De resultar acreditado un corte oficial **01/10/2026**, el fallo y su publicación serían **posteriores al corte**; ello impide presumir la sentencia como acontecimiento publicado antes de esa fecha, sin prejuzgar de modo simplista los efectos jurídicos de la nulidad. **No se fija versión exigible definitiva sin PDF primario y cotejo de efectos artículo por artículo**.

**Artefacto nuevo:** [**CONTROL_CORTE_NORMATIVO_20261108.md**](content/uc3m/CONTROL_CORTE_NORMATIVO_20261108.md), tabla de hitos y jerarquía de fuentes, matriz de escenarios, supuesto y cinco puertas de validación. [**Manifiesto**](data/programa-uc3m-auxiliar-administrativa-2026.json) añade `controlCorteNormativo20261108`: `fechaOficialPublicacion=null`, `fechaIndicativaFuenteSecundaria=2026-10-01`, control y reserva, manteniendo **20/20 desarrollo documental, 0/20 aprobaciones y 0 certificaciones integrales**. Commits: `4bd9f98ce296b766f0017d756e38b8948e13ea5f` y `11756b73fb87ca247ebcc19cc0f910256b505034`.

**Siguiente prioridad verificable:** recuperar resolución de listas definitivas desde UC3M y la constancia de fecha de publicación; después auditar versión legal en T16 y restantes temas al corte. Conservan bloqueo Olías T13 **21/22** y Diputación C1 T22 **39/40**; no se han inventado cierres ni ejecutado E2E/CI.


## 171. UC3M · verificación estructural de T16–T20 y reparación de fuentes T16 — **08/11/2026**

**Acción real ejecutada:** lectura directa de **cinco bancos de preguntas originales y cinco matrices** de UC3M T16–T20 desde GitHub; inspección de **69 preguntas y 276 opciones**, comprobando **cuatro opciones por ítem**, índices **0–3**, concordancia exacta de `respuestaLiteral` con `opciones[correcta]`, ausencia de duplicados internos y existencia de `justificacion` y `referencia`. **Sin incidencias estructurales** en esos cinco bancos.

**Incidencia editorial real detectada:** T16 tenía **14/21 referencias sin URL**, a diferencia de T17–20 (**12/12** por tema con enlaces). Se repararon las **14** en [**preguntas T16**](content/uc3m/tema-16/preguntas.json): referencias directas a RD 822/2021, artículos oficiales, normativa de permanencia UC3M y el ejemplo institucional de **25 horas/ECTS** de TFG EPS. Ahora **21/21** tienen URL, sin tocar textos de opciones ni índices correctos. Se anotó límite de fuente del TFG (norma institucional específica, no universalización del RD). Commits: [banco](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/1dd11f50027e695dde3411813c37ae257c3b9663), [fuentes](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/dc98b2799c43df88d718599cbbaf2ff8bad46a14), [matriz](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/663ec4bb5f54f5f259275b894d927b0685d80b50).

**Continuidad de verificación legal:** [convocatoria oficial BOE-A-2026-14624, base 1.7](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) fija fecha de corte por publicación de resolución de **listas definitivas + anuncio del ejercicio**; [portal UC3M del proceso](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra sección definitiva y examen **21/11/2026** pero el texto recuperado no contiene fecha primaria publicable para cerrarlo. [Adams](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) indica **01/10/2026**, **todavía fuente secundaria**. Se buscó el documento mediante buscadores e indexación; **no se localizó resolución primaria definitiva con fecha de publicación acreditada**. Se intentó acceso directo al dominio con entorno de ejecución, falló DNS, por lo que no se ha inspeccionado el PDF UC3M.

**Impacto sobre contadores:** sin nuevos cierres estrictos; UC3M mantiene **20/20 desarrollo documental con reservas, 0/20 certificados/aprobados**, Olías **21/22 auditados** y Diputación C1 **39/40 auditados**. **69 bancos/276 opciones** cuentan como **control estructural**, no verificación jurídica exhaustiva ni prueba automatizada de la web, que siguen pendientes. No declarar CI/E2E ni 100 % de exactitud.


## 172. UC3M T16 — auditoría jurídica de referencias ECTS y TFG (**08/11/2026**)

**Nueva incidencia real detectada en una segunda revisión de los 14 enlaces añadidos en §171:** la pregunta **UC3M-T16-002**, «60 ECTS por curso», citaba el **art. 9 RD 822/2021**, que regula contabilización y calificación del trabajo académico. La regla exacta es [**RD 822/2021 art. 5.2**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781#a5) y también [**RD 1125/2003 art. 4.1**](https://www.boe.es/eli/es/rd/2003/09/05/1125/con). El propio art. 5.2 reconoce la **excepción del Máster de 90 ECTS** con curso de **30 ECTS**.

**Segunda incidencia:** la referencia añadida para **UC3M-T16-009** (25 horas por ECTS) devolvía **403**. Se encontró una [**publicación oficial UC3M sobre organización y evaluación de TFG, aprobada en Consejo de Gobierno el 17/06/2010**](https://www.uc3m.es/ss/Satellite?blobcol=urldata&blobheader=application%2Fpdf&blobheadername1=Content-Disposition&blobheadername2=Cache-Control&blobheadervalue1=attachment%3B+filename%3D%22Normativa_sobre_organizaci%C3%B3n_y_evaluaci%C3%B3n_de_la_asignatura_Trabajo_Fin_de_Grado.pdf%22&blobheadervalue2=private&blobkey=id&blobtable=MungoBlobs&blobwhere=1371553536021&ssbinary=true), que asigna **25 horas/ECTS a los TFG**. Frente a ello, la regla **estatal general** es **25–30 horas/ECTS** ([**RD 1125/2003 art. 4.5**](https://www.boe.es/eli/es/rd/2003/09/05/1125/con)); se acotó el enunciado de T16-009 para preguntar por el contexto del TFG y se actualizó la trampa. La publicación pudo leerse como texto; la captura visual del PDF no se recuperó, por lo que **no se certifica inspección visual**.

**Archivos editados:** [preguntas T16](content/uc3m/tema-16/preguntas.json), [manual T16](content/uc3m/tema-16/manual.md), [fuentes T16](content/uc3m/tema-16/fuentes.md), [matriz T16](content/uc3m/tema-16/matriz.json). Commits `ea481d27873354eabc2a3659efe5a6c12bc26046`, `3ba68237d4a0b598d3c603338fa3131800265ae6`, `f6cb47f9810e975aea0ced59bea07f52ce600dcc`, `af3a67db4ad386aa665971d49bcd2f68147b05bb`. **Sin modificar alternativas ni claves.**

**Intento de desbloqueo de fecha de corte:** [**portal UC3M C2**](https://uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) confirma presencia de apartado «RESOLUCIÓN DEFINITIVA» pero enlaza el listado mediante ACCESO, sin fecha primaria de publicación recuperable en esta sesión. [**Adams**](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) indica **01/10/2026**, **indicio secundario**. El **corte oficial sigue pendiente**. Las demás 67 preguntas de T16–T20 conservan solo el alcance de su comprobación previa, y no se ha ejecutado CI, navegador E2E, WCAG ni PWA.

**Sin cambio de cierre:** UC3M **20/20 desarrollados con reserva, 0/20 certificados**. Olías **21/22 auditados** y Diputación C1 **39/40 auditados** con bloqueos documentales no resueltos.


## 173. CI UC3M T16 — reparación de aserción ante enunciados corregidos (08/11/2026)

Tras leer `PROJECT_RULES.md` y §172, se comprobó HEAD `fdaef661d64bb719ea56391cc751316f5e22db59` y el trabajo GitHub Actions 42482494786: **fallo** en `Comprobar cierre documental UC3M T16 ensenanzas y BOEL 2026`; pasos posteriores omitidos. La prueba `tests/validate-uc3m-cierre-t16-20261106.mjs` exigía que el encabezado histórico del cotejo incluyera el **enunciado exacto actual** de cada pregunta. T16-009 fue acotada jurídicamente en §172 al contexto TFG, mientras el cotejo histórico conserva el enunciado anterior; ese control editorial de identidad literal no toleraba correcciones justificadas del enunciado. Se reemplazó por comprobación del **ID de cada una de las 21 preguntas y presencia literal de sus cuatro alternativas** en el cotejo (84 comprobaciones adicionales), preservando las demás aserciones de banco, claves, matrices y reservas. Commit `7a3eb9c8c19065c37fb2b07480fb2287316bebb5`. **Limitación:** el cotejo histórico de T16-009 aún requiere actualización editorial de título y fuente para reflejar el acotamiento de §172; la reparación técnica no constituye nueva auditoría jurídica. CI/Pages del SHA de esta anotación **pendientes de verificar**, sin declarar éxito. No se reabre el tema como bloque ni se incrementan contadores: **79/121 estrictos, 42 pendientes; integral 0/121, 121 pendientes**. Siguiente intervención: comprobar CI del SHA actual, corregir cualquier fallo residual, conciliar el cotejo T16-009 y recuperar la resolución primaria de fecha de corte UC3M; continuar después con un bloque editorial nuevo de 3–5 temas, sin doble contar.


## 173. UC3M T20 — procedimiento abierto simplificado — **08/11/2026**

**Auditoría real sobre la contratación pública, prioridad examen:** cotejados con [**LCSP art. 159.1, 159.3, 159.4**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a159), [**art. 153.3**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a153) y [**Orden HAC/1517/2025**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605), los importes **2026–2027** y plazos principales de **tema 20 de UC3M**. **No se detectó error** en las cifras ya publicadas: contrato menor de servicios **<15.000 €**, simplificado suministro/servicio **<140.000 €**, abreviado **<60.000 €**, SARA UC3M general **≥216.000 €**, sujetos a condiciones propias. El **plazo de espera de 15 días hábiles** para formalizar contratos susceptibles de recurso especial es distinto del plazo mínimo de **15 días** para presentar ofertas en simplificado.

**Laguna jurídico-pedagógica completada:** [**manual del tema 20**](content/uc3m/tema-20/manual.md), nuevo **§33**, contiene tabla de requisitos especiales **ROLECE** y solicitud previa acreditada (**159.4.a**), valoración con **7 días**, documentación/garantía **7 días hábiles**, justificación de oferta anormal **5 días hábiles**, adjudicación en **5 días**. Tres supuestos nuevos resueltos: ROLECE pendiente, oferta anormal y suministro por **150.000 €** (ni simplificado ni SARA UC3M). Registrado en [**fuentes**](content/uc3m/tema-20/fuentes.md) y [**matriz**](content/uc3m/tema-20/matriz.json). Commits: `9046a2e73bba1caf08a0b006b97e0c9fbf106302` (manual), `645e1beefbfae7c83860b1e1f2305e217cdf094a` (fuentes), `3152727ab76a050ccf337217bee9e62ac443c105` (matriz).

**No se alteran** las **12 preguntas originales / 48 alternativas** ni sus claves ni los simulacros; tampoco se declara cierre jurídico integral ni ejecución CI/E2E. La fecha primaria de corte de **UC3M base primera.7** continúa pendiente de verificación. Estados sin cambio: UC3M **20/20 desarrollo documental con reserva, 0/20 aprobados/certificados**, Olías **21/22 auditados**, Diputación C1 **39/40 auditados**.


## 174. CI La Puebla — versión editorial fechada y aserción obsoleta (08/11/2026)

Se leyó `PROJECT_RULES.md` y el último apartado del registro antes de actuar. HEAD previo `1ab0599eafc188e099768969ca1a3d7ac3356953`. En los logs reales del trabajo `128762262761`, ejecución de validación `42490718738`, el paso `Validar programa y bancos de La Puebla` falla en `tests/validate.mjs:21`: valor real de `data/programa.json.version` **`2026-11-08`**, esperado **`0.19.0`**. El `package.json.version` sigue en **`0.20.6`**, versión técnica distinta. Se cambió únicamente la aserción obsoleta por validación del formato de fecha editorial ISO (`YYYY-MM-DD`) en `tests/validate.mjs`, sin alterar bancos, manuales, distractores ni estados. Commit técnico: `f1875101ec8a014a08a67a583c6a6f699dcedab0`. Esta prueba verifica formato, **no** vigencia ni contenido jurídico. Queda comprobar resultado de CI y Pages del SHA final de esta anotación y reparar fallos posteriores únicamente con evidencia de logs. No se ha completado bloque editorial nuevo ni E2E; se preservan **79/121 cierres estrictos, 42 pendientes; 0/121 integrales, 121 pendientes**, más 19 aprobaciones históricas de La Puebla que no se suman al contador estricto. Próximo lote: atender fallo real posterior de CI si aparece, localizar resolución primaria UC3M de listas definitivas para corte legal, y trabajar 3–5 temas **nuevos** no cerrados; Olías T13, C1 T22 y Diputación C2 T6 continúan sujetos a sus reservas documentales.


## 175. CI UC3M T16–T20 — fallo de identidad de enunciado histórico (08/11/2026)

Leídos PROJECT_RULES.md y §174. HEAD previo `2370f244a9e30fdbe60d06280ed33a9738386631`. GitHub Actions para ese SHA: validación `42497375966` **failure** en el paso «Verificar 276 alternativas jurídicas y presupuestarias UC3M T16-T20»; Pages `42497375396` **success**. En `tests/validate-uc3m-t16-t20-integral.mjs` se exigía encabezado histórico idéntico a la pregunta vigente. El banco UC3M-T16-009 fue acotado al TFG en §172, mientras el cotejo del 04/11 mantiene el enunciado histórico. La comparación literal de encabezados provocaba el fallo. Se sustituyó por localización inequívoca por ID, conservando exigencia de las cuatro alternativas literales, clave, respuesta, trampa, conteos, distribución y comprobaciones presupuestarias. Commit `a593cc0a023f6001a4c2ac8a34d08ec60ada0f6e`. No se han modificado bancos, respuestas ni manuales; el cotejo histórico aún requiere una nota de correspondencia editorial T16-009. **CI del SHA nuevo aún pendiente de comprobación**; no declarar éxito. Sin bloque editorial nuevo de 3–5 temas ni pruebas E2E: **79/121 cierres estrictos, 42 pendientes; 0/121 integrales, 121 pendientes**. Próximo lote: verificar CI/Pages de HEAD, corregir solo fallos concretos y continuar revisión integral de temas nuevos, con prioridad de La Puebla/UC3M y resolución primaria del corte UC3M. Olías T13, Diputación C1 T22 y C2 T6 conservan reservas.


## 176. Reparación estructural de distribución Diputación C1 T22 — 08/11/2026

**Inicio y estado:** leídos `PROJECT_RULES.md` y el apartado final §175 del registro; HEAD anterior `7287e3c343528d2d15b83cc9ff16738ced7dbbf2` (Radar). Pages `42516593454` completó correctamente para ese SHA; no aparece ejecución de validación general para ese SHA. La última validación general identificada `42508122257`, del SHA anterior `9201f835596a01baf7cf1b068d8808ab0514bbc1`, falló en «Comprobar distribución de 803 respuestas de Diputación C1».

**Defecto comprobado y corrección mínima:** `content/diputacion-toledo/tema-22/preguntas.json` tenía 24 preguntas y distribución A7/B7/C5/D5; la prueba exige desviación máxima de 1. Se permutaron exclusivamente las posiciones de alternativas en `DIP-T22-002` (A→C) y `DIP-T22-001` (B→D), preservando las cuatro cadenas literales de cada ítem, `respuestaLiteral`, justificación, trampa, referencia y enunciado. Distribución posterior A6/B6/C6/D6; comprobación local de correspondencia literal para las 24 preguntas. No se altera la aserción de CI ni el contenido jurídico.

**Reserva vinculante:** T22 sigue `EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES`; falta cotejo primario de Estatutos OAPGT originales y modificaciones, por lo que no se cierra jurídicamente. Este ajuste es técnico, **no** auditoría de claves ni distractores contra norma oficial, y no autoriza incremento de contador. Contadores conservados **79/121 estrictos, 42 pendientes; integral 0/121, 121 pendientes**. No se ha realizado un bloque nuevo de 3–5 temas ni E2E de navegador, móvil, accesibilidad o PWA.

**Validación pendiente:** verificar CI/Pages del SHA de este commit después de publicación; si falla otra aserción, obtener evidencia concreta antes de cambiar pruebas. **Siguiente lote editorial:** 3–5 temas NUEVOS pendientes, con programa, manual, preguntas, distractores, vigencia, matriz y fuentes primarias; prioridad La Puebla/UC3M y acreditación primaria de fecha de corte UC3M. Mantener C2 T6 OAPGT para el final.


## 177. CI Diputación C1 — origen documental de cuatro preguntas adicionales (09/11/2026)

Leídos `PROJECT_RULES.md` y §176 antes de actuar. HEAD previo `453b8e66b8f7969639131a4f50bed9dbc36ca3a9`. Para ese SHA, GitHub Actions validación 42528302478 **failure** (aserción de inventario 803 frente a 807), PDF 42528302497 **success**, Pages 42528301610 **success**. La prueba recorre 40 bancos y sus controles previos de claves, literalidad y equilibrio no provocaron el fallo.

**Causa histórica acreditada en Git:** commit [88bd8587c867afaf382ae0d817e8cbeb24af7ebf](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/88bd8587c867afaf382ae0d817e8cbeb24af7ebf) añadió **exactamente cuatro preguntas** al banco C1 T22, identificadores `DIP-T22-021` a `DIP-T22-024`, 16 alternativas, citando BOP Toledo 92 de 16/05/2023, anuncio 2824, sobre competencias y delegación contractual OAPGT. La diferencia 807−803=4 coincide con ese incremento; no se ha borrado contenido ni revalidado jurídicamente cada distractor. El banco T22 permanece **pendiente de Estatutos originales y modificaciones**, por lo que no se certifica su cierre.

**Reparación técnica:** `tests/validate-diputacion-c1-answer-distribution.mjs` exige ahora inventario exacto **807**, banco T22 de **24** ítems y presencia única de los **cuatro ID nuevos**; conserva controles de los 40 bancos sobre literalidad, opciones, claves, duplicados y equilibrio. Se sustituye la constante histórica obsoleta, no se relaja el control. **CI/Pages del nuevo SHA pendientes** hasta que se ejecuten; no afirmar resultado anticipado. Siguiente lote: verificar CI del nuevo SHA y cerrar 3–5 temas NUEVOS pendientes con fuente primaria, manual, matriz, claves y cada distractor; resolver fecha de corte UC3M y reservas Olías T13, C1 T22 y C2 T6 sin falsear cierres. Contadores sin cambios: **79/121 cierres jurídico-editoriales estrictos, 42 pendientes; integral 0/121, 121 pendientes**. Sin pruebas E2E de navegador/móvil/WCAG/PWA.


## 174. UC3M T20 — urgencia y simplificado abreviado — **09/11/2026**

**Trabajo real de contraste primario:** lectura de [**LCSP art. 159.1–6**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a159), [**LCSP art. 326.1**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a326) y de la [**Orden HAC/1517/2025**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605) para los umbrales de **2026**. Se conserva la diferencia entre simplificado ordinario de suministros/servicios **<140.000 €**, abreviado **<60.000 €** y SARA general UC3M **≥216.000 €**, cifras para funciones diferentes, sobre valor estimado sin IVA.

**Ampliación pedagógica nueva de T20:** el [**manual**](content/uc3m/tema-20/manual.md) incluye §34 con comparativa de **159.5–6**: declaración de urgencia **no reduce los plazos conforme al art. 119.2.b**; abreviado excluye prestaciones **intelectuales**, **10 días hábiles** de ofertas (**5** en compras corrientes de bienes disponibles), **mesa potestativa** (**326.1**), exención de acreditación de solvencia, archivo único, **sin garantía definitiva** y formalización posible por aceptación firmada de la adjudicación. Se han incorporado **tres casos prácticos** sobre estas excepciones con foco de examen, sin sustituir banco histórico. Actualizados [**fuentes**](content/uc3m/tema-20/fuentes.md) y [**matriz**](content/uc3m/tema-20/matriz.json). Commits: `ded6aa7b0326fc8b405d675c50dea701eb7f6bb7`, `5f332fa3ba21dad898d2c2204537cefacbfa3929`, `61c34feca92ed327fc0a23acd85b127aac083bc1`.

**Chequeo de bloqueo jurídico UC3M:** [portal oficial](https://uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) aún muestra sección de resolución definitiva sin fecha acreditada en texto recuperado; examen anunciado **21/11/2026**, que **no** es fecha de corte de la base primera.7. No se acredita PDF de listas definitivas ni se actualiza la fecha normativa como hecho. **Sin ejecución de CI ni pruebas de navegador/WCAG/PWA.** Los porcentajes de cierre estricto no cambian: Olías **21/22**, Diputación C1 **39/40**, UC3M **20/20 desarrollo con reserva y 0/20 cierre jurídico-funcional**.


## 175. UC3M T20 — composición, exclusiones y mesa potestativa (**09/11/2026**)

**Auditoría focal con BOE:** [**Ley 9/2017, art. 326.1–6**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a3-38) y [**art. 159.5–6**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a1-71). Confirmados umbrales de 2026 mediante [**Orden HAC/1517/2025**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26605), publicada **26/12/2025**, vigente desde **01/01/2026**. Los umbrales y la reducción por urgencia del §34 mantienen respaldo en fuente primaria; en esta fase no se ha alterado su contenido.

**Vacío del tema 20 identificado y completado:** antes se explicaban **mesa como asistente** y **mesa potestativa en 159.6**, pero no las restricciones personales del **326.5**. Incorporado [**§35 del manual UC3M T20**](content/uc3m/tema-20/manual.md), con tabla y **tres supuestos**: prohibición de **cargos representativos y personal eventual** también para valorar ofertas, **funcionario interino** excepcional solo con acreditación en expediente de ausencia de funcionario de carrera suficientemente cualificado, prohibición de quienes redactaron documentación técnica con salvedad de **DA segunda**; composición de mesa y distinción entre mesa mínima del simplificado ordinario y **mesa potestativa del 159.6**. Referencia del artículo: [**BOE LCSP**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a3-38). Registrado en [**fuentes**](content/uc3m/tema-20/fuentes.md) y [**matriz**](content/uc3m/tema-20/matriz.json).

**Commits comprobados:** manual `dd4945850014457c2e1f5c4b20b3987be86c3c2c`, fuentes `2dfda3ab6968bd99621e72ea6131429869774b8d`, matriz `7f4c2167ccc8c49c9699374640ab748c1bc03602`. Banco original **12 preguntas/48 alternativas sin cambios**, simulacros sin modificación, **sin CI ni E2E ejecutados** y **sin fecha de publicación primaria de listas definitivas UC3M**. Progresos no se inflan: **UC3M 20/20 desarrollados bajo reserva y 0/20 certificados**; **Olías 21/22** y **Diputación C1 39/40** auditados, con bloqueo de fuente completa en sus temas restantes.


## 176. Informe general 121 temas y reparación de CI — **09/11/2026**

**Resultado material de la sesión:** tras consulta de [**GitHub Actions**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions), se detectó que el flujo principal `Validar OpoWeb v2` del commit `d9c468db...` finalizaba **failure**. No debe confundirse el despliegue de Pages con éxito de CI jurídico-editorial. Se inspeccionaron **logs reales** y se corrigieron **dos familias** de pruebas históricas que bloqueaban la continuidad:

1. [**Tests C1 T20–T23**](tests/validate-diputacion-c1-t20-t23-cotejo-20261105.mjs): al ampliar documentalmente OAPGT T22 a **24 preguntas**, seguía asertándose **20**. Se conserva el cotejo de **80 preguntas originales/320 opciones** más los **4 nuevos ítems/16 opciones**: **84/336**; también se actualizaron las expectativas de **posiciones** para T22-001 y T22-002, cuyas **respuestas literales siguen iguales**. Commits `6e780ba11d1daad1459847c8307ff7ff96f86a43`, `7ee10c4fec524655a606de98537544035652f3b8`, `9fe21e47cd7e80c24c1512572727a8cb2b45ceef`.
2. [**Tests de Olías**](tests/validate-olias-programme.mjs) y [**práctica Olías**](tests/validate-olias-practice.mjs): el total histórico **264** no incorporaba las ampliaciones de **T5 (+6)** y **T13 (+9)**. Inventario actual **279 preguntas teóricas**; se conservan **40 psicotécnicas** y validaciones de los dos modelos **50 + 20**. Commits `36ea6be4776ab962ce7cc1cb4e5cfad58f969595`, `518e2326d5f2ac66f761bc1462e01e957afdf3a8`.

**Prueba final verificable del conjunto de correcciones:** [**GitHub Actions 42577252425**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42577252425) para SHA `518e2326d5f2`, estado **success**, **67 pasos/67 correctos**, ningún paso fallido. Esto certifica **los controles automatizados ejecutados por ese workflow**, no la integridad jurídico-normativa de los 121 temas ni un E2E de navegador/móvil. Los commits posteriores requieren su propia ejecución. Se actualizó [**README.md**](README.md) y se creó [**ESTADO_GENERAL_OPOWEB_2026-11-09.md**](ESTADO_GENERAL_OPOWEB_2026-11-09.md) como síntesis verificable.

**Inventario de cinco manifiestos, contrastado hoy:** La Puebla **19/19 `APROBADO_USUARIO` históricos**, Diputación C1 **39/40 `AUDITADO`** (T22 no cerrado), Diputación C2 **19/20 `AUDITADO`** (T6 borrador), Olías **21/22 `AUDITADO`** (T13 sin inventario INE íntegro), UC3M **20/20 `EN_REVISION_USUARIO`** con **`DESARROLLO_COMPLETO_CON_RESERVA_CORTE`**. Cifras agregadas sin mezclar calidades: **79/121 auditados actuales**, **19 aprobados históricos**, **20 desarrollados con reserva**, **3 bloqueados**. **0/121 certificaciones integrales jurídico-funcionales**.

**Tecnología examinada:** repositorio público `main`, **950 ficheros** en árbol GitHub, **96 scripts** `.mjs` de tests, **13 workflows** YAML. Existe `index.html`, `practice.html`, `radar.html`, `manifest.json`; **`sw.js` se desregistra y limpia cachés**, no proporciona offline fiable. No se ha realizado control E2E real de compatibilidad de navegador/móvil ni WCAG de todos los recorridos. El acceso a la web desplegada mediante el lector público externo falló por limitaciones de captura, lo que **no demuestra una avería** del sitio; los resultados de Pages deben consultarse separadamente.

**Siguiente fase:** trabajar en **fuentes oficiales bloqueantes** (INE Olías T13; Estatutos OAPGT para C1 T22 y C2 T6; listas definitivas UC3M y su publicación) y después en **auditoría jurídico-sustantiva por distractor** y **pruebas E2E/WCAG/PWA**. No fabricar un 100 % de fiabilidad usando solo presencia de archivos o CI verde.


## 177. OpoRadar y comprobación de despliegue tras CI — 09/11/2026

**Prueba final con fuentes GitHub:** [**CI del SHA 609ea760979d**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42577745317) terminó **success**. [**Pages del mismo SHA**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42577744307) también terminó **success**. No se ha realizado navegación en browser real; la prueba del despliegue se limita a la ejecución de GitHub Pages.

**Auditoría de cobertura real del radar**, con lectura del [**último estado directo guardado**](data/radar-direct-latest.json): **206 estados de fuente**, desglosados en **42 READABLE**, **118 PARTIAL** y **46 ERROR**. `entries: []` (**0** entradas en esa instantánea), que **no permite concluir que no existan oportunidades nuevas**. [**Workflow radar**](.github/workflows/radar-empleo.yml) programado para **05:17 y 15:17 UTC**; perfil [**Toledo + sur Madrid y oportunidades nuevas**](data/radar-profile.json). La configuración de correo depende de secretos (`RADAR_EMAIL`, `RESEND_API_KEY`) cuyo estado y entrega **no se han comprobado**. Por tanto el radar está implementado, pero su cobertura externa es **parcial** y **no exhaustiva**.

Se ha actualizado el [**informe general de estado**](ESTADO_GENERAL_OPOWEB_2026-11-09.md) con la medición del radar y el resultado Pages. **Pendiente prioritario añadido:** reducir errores por fuente y probar entrega de notificaciones sin fabricar oportunidades ni suponer que `PARTIAL` equivale a fuente cubierta. Los estados editoriales de las cinco convocatorias y contadores **79 AUDITADO + 19 históricos + 20 desarrollados con reserva + 3 bloqueados** permanecen sin alteración.


## 178. OpoRadar — auditoría técnica de 46 fuentes ERROR y reparación de tres rutas (**09/11/2026**)

**Actuación verificada:** lectura directa de [configuración de 205 fuentes iniciales](data/radar-sources.json), [código de rastreo](tools/radar-direct.py), [pruebas](tests/radar-fixtures.mjs) e [instantánea previa](data/radar-direct-latest.json). La última registra **206 estados**, incluyendo directorio: **42 READABLE**, **118 PARTIAL**, **46 ERROR**, **0 entradas nuevas**; no equivale a que no existan convocatorias.

**Clasificación del primer error de las 46 fuentes:** **5 HTTP 403**, **6 HTTP 404**, **7 redirecciones/bucles**, **1 SSL**, **4 anti-bot**, **2 sin HTML enlazable/JavaScript**, **3 HTTP 5xx**, **18 otros**. Los recuentos reflejan el resultado de la pasada guardada, no pruebas nuevas de conectividad externa.

**Reparación focal realmente editada en `main`:** tres URLs de entrada verificadas en los portales públicos oficiales:
- **Alcorcón:** desde una antigua ruta de recursos humanos a [**empleo público municipal**](https://www.ayto-alcorcon.es/es/servicios/empleo-publico).
- **SERMAS:** desde recursos humanos general a [**bolsas de contratación temporal**](https://www.comunidad.madrid/salud/bolsas-contratacion-temporal-servicio-madrileno-salud).
- **Madrid bolsas:** desde página de presentación de bolsas a [**sede electrónica, búsqueda de bolsas**](https://sede.comunidad.madrid/bolsa-empleo).

Se mantienen los **tres IDs históricos** y se sincroniza la procedencia. Cambios en `data/radar-sources.json` (commits `7b7d0b2b0e8e659009671e13333a0e7340628466`, `f655c732a696a606f19295a3a1592a2e83c3beb9`). [`tests/radar-fixtures.mjs`](tests/radar-fixtures.mjs) protege IDs, URLs y unicidad de fuentes (commit `34e12339f37db5bd218d625f4cfa7079504931c6`). Fuentes y reservas documentadas en [**RADAR_EMPLEO.md**](docs/RADAR_EMPLEO.md) y en [**informe general de OpoWeb**](ESTADO_GENERAL_OPOWEB_2026-11-09.md).

**Puertas abiertas:** verificar las respuestas HTTP desde el runner en la **siguiente ejecución del radar**; ni la configuración ni los fixtures permiten declarar fuentes recuperadas todavía. No desactivar TLS o eludir captchas. El flujo de correo sigue sin prueba real de entrega. Sin cambios en bancos de preguntas o estados de cierre (79 AUDITADO actuales, 19 La Puebla históricos, 20 UC3M desarrollados bajo reserva, 3 bloqueos).


## 179. OpoRadar — corrección de carrera de estado en fuentes municipales compartidas (**09/11/2026**)

**Incidencia real descubierta por CI:** el test de URLs del radar encontró **205 entradas en `data/radar-sources.json`, 200 IDs únicos**, con **5 repeticiones adicionales** en **4 grupos de entidades menores** que comparten web municipal oficial: Alcolea del Tajo/Bercial; Arisgotas/Orgaz; Las Hunfrías/Navaltoril/Piedraescrita; Robledillo/Robledo del Mazo. El algoritmo original crea IDs mediante `digest(url)`. Una validación que exigía 205 IDs diferentes era incorrecta; sin embargo, el **rastreador sí tenía una carrera de estado real** al procesar en paralelo los alias con el mismo ID.

**Corrección funcional del rastreador:** [`tools/radar-direct.py`](tools/radar-direct.py), commit `7de0375dd52bc08413cc28e012ecb57d79d9a83a`: **deduplicación del ID antes de lanzar los hilos** si coincide también URL; si hay igual ID y URL diferente, excepción `SOURCE_ID_COLLISION`. Se mantiene el estado previo y los IDs; no se cambian los registros configurados de los núcleos urbanos. No se deben contar los alias como fuentes web independientes.

**Pruebas:** [`tests/radar-fixtures.mjs`](tests/radar-fixtures.mjs) acepta exactamente **5 alias con URL idéntica** y bloquea colisiones de URL distinta, commit `3e29525009eff87b2c3e4d95dcd8180a3c72644e`. [`tests/radar-direct-test.py`](tests/radar-direct-test.py) simula directorio fallido, web compartida, ejecución única y colisión hostil, commit `51a11e2eb8881910b7b979dc04c8cbe400adf366`. Se consultaron logs reales tras el primer test fallido, reparando el requisito sin silenciar la comprobación de conflictos.

**Prueba GitHub obtenida:** [**Validar OpoWeb v2 · 42579595924**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42579595924) terminó **success** en el commit `51a11e2eb888...` con ambos tests de radar incorporados. **No se ha ejecutado aún un rastreo de red posterior** a estas correcciones ni verificado la entrega de avisos. El indicador **42 READABLE, 118 PARTIAL, 46 ERROR**, correspondiente a 206 registros incluyendo el directorio, **no se ha recalculado**, y puede reducirse el número de estados reportados al deduplicar fuentes compartidas.

**Contadores editoriales inalterados:** **121 temas**, **79 AUDITADO** actuales, **19 La Puebla históricos**, **20 UC3M desarrollados con reserva** y **3 bloqueos documentales**. La certificación integral no se presume por CI en verde. [**Informe técnico más detallado del radar**](docs/RADAR_EMPLEO.md).


## 180. OpoRadar — cuarta fuente oficial Valdemoro y test de regresión (**09/11/2026**)

**Seguimiento de §178–179:** se encontró y cotejó en portal municipal el acceso oficial [**Valdemoro — ofertas de empleo público**](https://www.valdemoro.es/ope), para sustituir la ruta antigua `https://sede.valdemoro.es/tablon-de-anuncios` que figuraba como **HTTP 404** en la última instantánea de fuentes. Se conservan `id=6a6895a33405fc78` y el historial de deduplicación. Se actualizó [**data/radar-sources.json**](data/radar-sources.json) en commit `7171de99c0cc63dcc49038ab2ef42d40c6ab51bf`; el nuevo destino está protegido en [**tests/radar-fixtures.mjs**](tests/radar-fixtures.mjs), commit `35a16f1bffd0515b547f37c6959c0f636f071c96`. Ahora hay **cuatro destinos iniciales reparados**: Alcorcón, SERMAS, Madrid bolsas y Valdemoro.

**Alcance:** rutas oficiales contrastadas por consulta pública, **sin medición posterior de respuesta de `radar-direct.py` contra las cuatro URL**. La clasificación **42 READABLE / 118 PARTIAL / 46 ERROR** sigue siendo **instantánea anterior**; **no reducir artificialmente el número de errores**. La deduplicación de sedes compartidas de §179 permanece activa. La salud de CI y Pages debe evaluarse por el SHA del último cambio, no por ejecuciones anteriores. No se tocaron bancos ni estados de los 121 temas.


## 181. OpoRadar — cuatro enlaces municipales inválidos corregidos (**09/11/2026**)

**Continuación de auditoría real del rastreador**, conservando estados editoriales previos. La configuración `data/radar-sources.json` contiene **205 entradas**. Se detectaron cuatro registros municipales cuya URL original incorporaba un protocolo duplicado o espacio: **Robledillo** y **Robledo del Mazo** (`http:// http://valledelgevalo.es/`, misma URL compartida), **Los Yébenes** (`http:// www.turismo.losyebenes.es`) y **Santa Cruz del Retamar** (espacio final). Se cotejó el dominio común `http://valledelgevalo.es/` con [**directorio Diputación Toledo**](https://www.diputoledo.es/global/11/50/169/dir-municipios/R/45148); el destino actual para Los Yébenes con [**apartado Empleo de su Ayuntamiento**](https://ayuntamiento.losyebenes.es/ofertas-de-empleo). La última URL se limpió quitando exclusivamente el espacio final, sin atribuir nueva verificación de conectividad.

**Modificación real del repositorio:** `data/radar-sources.json` corregido sin cambiar IDs históricos ni procedencias municipales, commit `c2de3637cd5c27a56deb783ec0073283579b4073`. El test `tests/radar-fixtures.mjs` añade un control de las **205 URL**: esquema válido, espacio ausente, dominio y cuatro identidades/URLs; commit `cef7a333ac7cf9d0a161aa1e86f20703ce060342`. [**GitHub Actions run 42580541661**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42580541661) terminó **success** para el commit de tests.

**Seguimiento del raster:** última instantánea cargada sigue reflejando **42 READABLE, 118 PARTIAL, 46 ERROR** sobre **206 estados**; la ejecución de radar externo posterior a estas correcciones **no se ha comprobado**. No confundir validador sintáctico de URLs con conectividad real ni detección de todas las oportunidades; el éxito de GitHub Pages es independiente. Más detalles en [**RADAR_EMPLEO.md**](docs/RADAR_EMPLEO.md).

**Estado general sin cambio de categorías:** 121 temas, 79 `AUDITADO` actuales, 19 aprobados históricos La Puebla, 20 UC3M desarrollados bajo reserva, 3 bloqueos documentales (Olías T13, Diputación C1 T22 y Diputación C2 T6). No se modificaron preguntas o manifiestos.


## 182. OpoRadar — sello UTC verificable y OAPGT C1/C2 — hemeroteca oficial (**09/11/2026**)

**OpoRadar, modificación real ejecutada:** se constató que `data/radar-direct-latest.json` no incluía fecha/hora de extracción ni denominador de webs únicas; la última instantánea conserva **42 READABLE, 118 PARTIAL y 46 ERROR** sobre **206 estados**, pero sus URL originales prueban que es **anterior** a las ocho reparaciones de entradas de §178–181. No se declara una mejora de lectura que no ha sido medida.

Se ha actualizado [**tools/radar-direct.py**](tools/radar-direct.py), commit `49d220d239a338a0a645cc73959f35799d54a624`, para incorporar a resultados futuros **`checkedAtUtc`**, **`configuredSources`**, **`uniqueSources`** y **`sharedSourceAliases`**. [**tests/radar-direct-test.py**](tests/radar-direct-test.py), commit `f29c6b27db1cf010e77f68df7fad62ce58c07e73`, prueba timestamp `+00:00` y deduplicación con dos alias. [**CI 42587715159**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42587715159) superado en ese SHA. **No es un rastreo real de red**. Se ha explicado el contrato de salida en [**docs/RADAR_EMPLEO.md**](docs/RADAR_EMPLEO.md).

**Temario (no abandonado):** búsqueda histórica del OAPGT confirmada con fuentes de distinta fuerza probatoria: [**Diputación, hemeroteca de BOP desde 1833**](https://bibliotecadigital.diputoledo.es/pandora/index.vm?lang=es&view=bop) es la vía primaria para obtener **BOP 235 de 11/10/1996** y la **corrección de errores de 04/11/1996**. La [**reproducción del BOP de 23/12/2004**](https://www.dateas.com/es/docs/boletin-oficial-de-la-provincia-de-toledo/2004/12/23) incluye **aprobación inicial** de reforma de **17 artículos** y disposiciones, **no acredita aprobación definitiva**. [**BOP 284 de 14/12/2011**](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=284&insert_year=2011&publication_date=14122011) sí publica modificaciones concretas. Se han enlazado los hitos y las reservas en [**C1 T22, fuentes**](content/diputacion-toledo/tema-22/fuentes.md), commit `85e3401bf662b7fde84f0b929108e3a0dbbb5e2a`, y [**C2 T6, fuentes**](content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md), commit `c9c0c2f9f1aa9c58800ae76801ead2344a4e5e23`. **Se conserva C1 T22 como EN_AUDITORIA y C2 T6 como BORRADOR**, sin atribuir reglas de un borrador histórico a 2026.

**Corte de estado global:** **121 temas**, **79 AUDITADO** actuales (39 C1, 19 C2, 21 Olías), **19 La Puebla APROBADO_USUARIO históricos**, **20 UC3M en revisión con desarrollo documental completo bajo reserva**, **3 bloqueos documentales**; no se realizan cambios ficticios de certificación. Las nuevas modificaciones de documentación no suplen lectura visual del BOP 1996 ni prueba E2E.


## 183. OpoRadar — transparencia de cobertura en interfaz + OAPGT 2021 (**09/11/2026**)

**Radar — reparación funcional publicada:** `assets/radar.js` mostraba solo el indicador de fuentes agregadas `sourceStatus` (BOE, BOCM, BOP, DOCM, PAG, DIRECT), sin exponer que la rama DIRECT contenía muchas fuentes locales inaccesibles o incompletas. Se ha añadido un aviso a la interfaz que resume `data/radar.json.directSourceStatus`: **READABLE/PARTIAL/ERROR**, y avisa de cobertura no exhaustiva cuando hay fallos o no existe el desglose. Commit `9850700a9298b2c2625fbe91f7d612c37905fe5f`; prueba preventiva en `tests/radar-fixtures.mjs` commit `0c3f41def9b94abf76965ce7f90ea092c311effe`. Se ha explicado en `docs/RADAR_EMPLEO.md` commit `6828ebcc63e164bf38329edc2697aaffbf927955`. No proclamar que el radar cubre todas las fuentes por el mero hecho de que `DIRECT` sea una de las fuentes agregadas exitosas. Sin navegador E2E ni rastreo externo nuevo.

**Radar — ejecución real:** [última instantánea directa guardada](data/radar-direct-latest.json) **carece aún de `checkedAtUtc`**, registra **42 legibles, 118 parciales y 46 errores**, sin resultados nuevos. Por tanto es **anterior a la reparación de URLs y a los nuevos campos UTC**; las pruebas de CI no son suficientes para asegurar recuperación externa. El flujo radar es programado y no fue disparado manualmente desde esta sesión.

**Temario — nueva prueba institucional en dos convocatorias:** se ha cotejado el [**certificado de Secretaría General del Pleno de Diputación de 05/02/2021, firmado 08/02/2021**](https://www.diputoledo.es/global/ver-pdf/30613) —65 páginas y CSV `617fhCS7Vz12P1vGWSpe`— que corrobora la aplicación del **art. 4.1.a de los Estatutos OAPGT** en convenios: la Diputación asume delegaciones en materias de **información, asistencia, gestión, inspección y recaudación** de tributos y otros ingresos de derecho público, ejercidas a través del OAPGT. Incorporado como **evidencia corroborativa de aplicación en 2021**, no versión normativa 2026, en [**C1 T22, fuentes**](content/diputacion-toledo/tema-22/fuentes.md) commit `f0a546823a631fbfb4e284a7b0d4df85b1fb6d63` y [**C2 T6, fuentes**](content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md) commit `fce77ab7a365ca04b102373c8ed4e587d91aff8b`. La captura visual del PDF con el visor falló, así que no se acredita inspección visual. Estatutos íntegros de 1996 y consolidación de reformas **siguen pendientes**; ningún tema se ha ascendido artificialmente.

**Resumen de estados sin cambios:** 121 temas registrados: **79 AUDITADO actual**, **19 APROBADO_USUARIO históricos La Puebla**, **20 UC3M desarrollados con reserva**, **3 bloqueados** (Olías T13, C1 T22, C2 T6); corte jurídico primario UC3M pendiente.


## 184. OpoRadar — frescura pública de la lectura directa y control histórico OAPGT (**09/11/2026**)

**OpoRadar, cambio de código real:** se detectó que [**tools/radar.mjs**](tools/radar.mjs) descartaba los campos UTC y número de fuentes únicas emitidos por `tools/radar-direct.py`. Desde el commit `8401b94819e93197a44d21452f2fb09cc83bbdb0`, exporta en `radar.json.directCrawl` las propiedades **`available`**, **`checkedAtUtc`**, **`configuredSources`**, **`uniqueSources`**, **`sharedSourceAliases`**. Si la rama directa falla, **`available=false`** sin ocultarlo tras la lectura de BOE/PAG/BOP.

**Interfaz de usuario:** [**assets/radar.js**](assets/radar.js), commit `030391629d8f98e42b06f45fc1ae6fdc42504104`, muestra cuándo se exploró la rama directa, las fuentes únicas y aviso cuando la medición está **ausente, falla o tiene más de 3 días**, sin eliminar aviso previo de fuentes parciales/fallidas. [**tests/radar-fixtures.mjs**](tests/radar-fixtures.mjs), commit `8eb39c0b2eff1b55a072f1bc04d1dbaf2f789c43`, protege paso de metadatos entre pipeline y UI. [**CI 42589209241: success**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42589209241). **No es una ejecución de `radar-empleo.yml` ni prueba E2E de navegador**. El archivo directo guardado sigue en la instantánea antigua de **42 READABLE / 118 PARTIAL / 46 ERROR**; no declarar recuperación efectiva de URLs nuevas.

**Temario — contraste institucional adicional no vigente por sí solo:** [**Diputación Toledo, noticia de 24/07/2015**](https://www.diputoledo.es/prensa/nAmpliada/1148) describe la composición **en la sesión constitutiva de 2015** del Consejo Rector OAPGT como **Presidencia y 7 vocales designados por el Pleno** y sus funciones de organización y alta dirección. Se ha incorporado con **reserva expresa de historicidad** en [**C1 tema 22**](content/diputacion-toledo/tema-22/fuentes.md), commit `46a67af9e9f6f5d045088a3906133043d73ddb26`, y [**C2 tema 6**](content/diputacion-toledo-auxiliar-c2/tema-06/fuentes.md), commit `48cd65a217438f2f97afb5a7d3b29cd4bcd9f753`. **Prohibido convertir 7 vocales históricos en cifra de examen vigente en 2026** sin comprobar original BOP 1996, corrección, reforma 2004 definitiva y posteriores. Sin cambios en claves de test ni estados.

**Estado de 121 temas inalterado:** 79 `AUDITADO` actuales, 19 La Puebla `APROBADO_USUARIO` históricos, 20 UC3M desarrollados con reserva, 3 bloqueos documentales: Olías T13, Diputación C1 T22 y C2 T6. **Falta** acreditar el corte normativo de UC3M con resolución primaria y pruebas E2E.


## 185. Cierre sectorial verificable — BOP OAPGT 2011, matrices C1/C2 y bloqueo INE (**09/11/2026**)

**Objetivo del turno:** cerrar el temario con pruebas, no subir artificialmente contadores. Se contrastaron los **cinco manifiestos de convocatorias**: **121 temas**; La Puebla **19 APROBADO_USUARIO históricos**, Diputación C1 **39 AUDITADO y T22 pendiente**, Diputación C2 **19 AUDITADO y T6 BORRADOR**, Olías **21 AUDITADO y T13 EN_AUDITORIA**, UC3M **20 EN_REVISION_USUARIO**. El número **79 AUDITADO** actual no equivale al total «100 % certificado».

**Documento oficial realmente leído y visualizado:** [**BOP Toledo 284/2011, 14/12/2011, anuncio I-11024**](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011), **página única** (captura visual recuperada), modificación aprobada por **Pleno de Diputación el 28/11/2011**. Cotejados los **cinco ordinales**: **art. 1.1–1.2**, **8 bis**, **4.a (cuatro materias)**, **14.d.1** y **disposición adicional** sobre instructores. Se distingue rigurosamente **Pleno aprobador**, **Presidencia de Diputación adscripción**, **Consejo Rector organigrama**, **Presidencia OAPGT publicación** y **competencias resolutorias de Dirección**. Reparados/ampliados [**ficha BOP visual**](content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-2011-verificado.md), [**manual C1 T22**](content/diputacion-toledo/tema-22/manual.md) y [**manual C2 T6**](content/diputacion-toledo-auxiliar-c2/tema-06/manual.md), con tablas y supuestos.

**Matriz de cobertura nueva C2 T6** en [**matriz.json**](content/diputacion-toledo-auxiliar-c2/tema-06/matriz.json), enlazada en [**manifiesto C2**](data/programa-diputacion-auxiliar-c2-2026.json); contiene seis bloques con **fuente**, **articulado**, **dato exigible**, **tipo de comprobación** y reserva. [**Matriz C1 T22**](content/diputacion-toledo/tema-22/matriz.json) registra cotejo visual 2011 sin declarar estatutos completos. Se amplió un [**test transversal**](tests/validate-oapgt-fuentes-primarias-20261109.mjs) e integró en [**workflow de validación**](.github/workflows/validate.yml). Se ajustó el antiguo [**test de matrices C2**](tests/validate-diputacion-c2-matrices.mjs) que esperaba solo 19 matrices: ahora exige **20 matrices existentes, 19 AUDITADO y T6 BORRADOR**, preservando el bloqueo legal. [**CI superado (commit 964d44d05f26)**](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42595554756).

**Fuentes aún no superadas y por qué NO cerrar C1 T22 y C2 T6:** (1) **BOP 235/1996** original íntegro en edición oficial, (2) corrección del **art. 8**, noviembre 1996, (3) aprobación **definitiva** de la reforma publicada como **inicial en diciembre 2004**, (4) comparación de todas las modificaciones hasta 2026. La reproducción histórica no oficial de las tres primeras **no justifica composición, quórum ni mayorías actuales**.

**Olías T13:** [**INE Callejero del Censo Electoral**](https://www.ine.es/prodyser/callejero/), publicación **julio 2026** con fecha de referencia **30/06/2026**. Se verificó el catálogo y los ficheros requeridos (**VIAS/PSEU**), pero no fue posible descargar ni interpretar el ZIP de Toledo para municipio **45122** desde el entorno; por tanto T13 **sigue EN_AUDITORIA**. No inventar lista íntegra de vías.

**UC3M:** [**BOE-A-2026-14624, base 1.7**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624): legislación exigible es la vigente al **publicarse la resolución de listas definitivas y convocatoria del ejercicio**, **no el día de examen**. El [**portal oficial**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra el apartado de resolución definitiva, pero no se recuperó su PDF con **fecha primaria acreditada**. Los **20 temas desarrollados** se mantienen en revisión normativa. No cambiar el dato secundario de **01/10/2026** por hecho jurídico hasta fuente primaria.

Se ha creado [**CONTROL_CIERRE_TEMARIOS_2026-11-09.md**](CONTROL_CIERRE_TEMARIOS_2026-11-09.md), con criterios de aceptación por programa. **Cierre sectorial real: sí (cinco cambios publicados en BOP 2011). Certificación completa de tres temas pendientes: no. CI verde: sí para 964d44d.**

## 186. Sincronización controlada de fichas editoriales Diputación C1/C2 (**09/11/2026**)

**Hallazgo real:** `data/convocatorias.json` todavía mostraba etiquetas heredadas (`40_ORIGEN_GENERACION_DESDE_CERO_EN_AUDITORIA` para C1 y `19_EN_REVISION_1_BORRADOR` para C2), pese a que los manifiestos vigentes registran **39 C1 AUDITADO + 1 T22 pendiente** y **19 C2 AUDITADO + 1 T6 BORRADOR**.

**Reparación publicada:** sincronización de `estadoEditorial` y `notaEstadoEditorial` en `data/convocatorias.json`, fecha de actualización **09/11/2026**, commit [`56bc0e32`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/56bc0e32bae24342a0cbd0548ff93a08b6eb92a5). Sin alterar bancos ni promocionar ningún tema.

**Regresión incorporada:** [`tests/validate-convocatorias-editorial-sync-20261109.mjs`](tests/validate-convocatorias-editorial-sync-20261109.mjs), commit `61b9f3d3`, coteja recuentos reales y estados de ambas fichas; conectado a [`validate.yml`](.github/workflows/validate.yml), commit `1cfd7e66`. **Ejecución de GitHub Actions del commit final no verificada en esta sesión**; no proclamar CI verde hasta consultar su resultado.

**Cierre:** resuelta la **desincronización de metadatos** de estas dos fichas. **No** resueltos ni certificados C1 T22/C2 T6 OAPGT; permanecen sus bloqueos de fuentes primarias. Los demás recuentos del proyecto permanecen sin elevación jurídica artificial.

## 187. Olías y UC3M — revisión de cuatro pendientes y sincronización (**09/11/2026**)

**Inventario cotejado contra manifiestos reales:** **Olías 21 AUDITADO + T13 EN_AUDITORIA**; **UC3M 17 AUDITADO + T10/T15/T16 EN_REVISION_USUARIO**. Las actas anteriores que hablaban de 20 UC3M en revisión o 7/20 auditados son fotografías históricas superadas.

**Corrección real:** `data/convocatorias.json` refleja los nuevos recuentos y enumera cada reserva (commit [`d6fe3f6c`](https://github.com/Ivannunezrodriguez/opoweb-v2/commit/d6fe3f6c7542f3ee381822e270f8559d04da8e50)). `tests/validate-convocatorias-editorial-sync-20261109.mjs` ahora protege las cuatro fichas de Diputación C1/C2, Olías y UC3M y verifica los números de temas pendientes (commit `16cf5110`). [**Acta focal de fuentes y pendientes**](audit/OLIAS_UC3M_CIERRE_FOCAL_2026-11-09.md) publicada (commit `adffd494`).

**Fuente primaria UC3M:** [BOE-A-2026-14624, base primera.7](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) fija el corte legal en publicación de listas definitivas y anuncio del ejercicio. [Portal oficial](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) confirma existencia de definitivas pero no se recuperó su PDF con fecha primaria. La fecha **01/10/2026** de la [academia ADAMS](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) es **secundaria**, no sustituye el documento oficial. Prioridad de T10: reforma TREBEP art.49.e; T15: adaptación LOSU y Estatutos; T16: nulidad de RD 905/2025 publicada **23/10/2026** frente al corte.

**Fuente INE Olías:** [catálogo oficial del Callejero Electoral](https://www.ine.es/prodyser/callejero/) identifica **VIAS/PSEU/TRAM**, edición **julio 2026** referencia **30/06/2026**; descarga/lectura íntegra de municipio **45122** no demostrada, por lo que **T13 no puede cerrarse**.

**Dictamen:** metadatos de estas dos convocatorias corregidos, regresión añadida, **cuatro temas jurídicamente abiertos**; **sin cambio ficticio de estados** ni declaración de CI verde del último commit o certificación E2E.


## 188. Olías T13 + UC3M T10/T15/T16 — nueva intervención correctiva (**09/11/2026**)

**Contenido editado y publicado, no solo diagnóstico:** [manual Olías T13](content/olias-auxiliar-edificios/tema-13/manual.md) añade distinción operativa y tabla **VIAS/PSEU/TRAM/UP-SECC**, diseño INE desde julio 2025, referencia **30/06/2026** y protocolo de extracción del municipio **45122** (commit `a3847ec9`). [Guía UC3M](content/uc3m/GUIA_EXAMEN_2026.md) incorpora tabla comparativa sobre corte normativo de **T10/T15/T16**: **TREBEP art.49.e** reformado en octubre, **LOSU** con **3 años** de adaptación estatutaria tras Ley 1/2024, y sentencia que anuló **RD 905/2025** sin anular **RD 822/2021** (commit `ae31f6e2`).

**Fuente oficial UC3M confirmada de nuevo:** [base primera.7](https://boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) establece como corte **la publicación de la resolución definitiva que anuncia el ejercicio**. El [portal oficial](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) muestra el epígrafe de definitivos, pero no se recuperó la resolución primaria fechada; el dato **01/10/2026** de [ADAMS](https://www.adams.es/producto/oposiciones/universidad-carlos-iii-de-madrid/auxiliares-administrativos-universidad-carlos-iii-de-madrid-1219/) es secundario.

**Automatización correctiva:** [test preventivo](tests/validate-olias-uc3m-pendientes-20261109.mjs), commit `5d17d8fd`, comprueba simultáneamente los temas aún pendientes y los avisos críticos en ambos manuales/guías; integrado en [workflow](.github/workflows/validate.yml) commit `d3f79100`. [Acta focal ampliada](audit/OLIAS_UC3M_CIERRE_FOCAL_2026-11-09.md), commit `4ba3b04b`.

**Verificación CI:** el estado combinado consultado para `4ba3b04b` no devolvió checks; **no se declara CI superado**. No se ejecutó navegador E2E y el ZIP INE íntegro no ha podido recuperarse en esta sesión. **Estados jurídicos sin alteración artificial:** Olías **21/22 AUDITADO** (T13 pendiente), UC3M **17/20 AUDITADO** (T10/T15/T16 pendientes). **Cierre de criterios de estudio y regresión: sí; cierre de cuatro temas pendientes: no**.


## 189. Cierre condicionado a fuentes primarias de Olías y UC3M (**09/11/2026**)

**Investigación adicional:** no se obtuvo el ZIP INE 2026 con **VIAS/PSEU** del municipio **45122** ni el documento oficial que pruebe la fecha de publicación de los definitivos UC3M 2026. La búsqueda sí localizó un [PDF de listas definitivas UC3M de la convocatoria 2024 y actuaciones 2025](https://www.uc3m.es/ss/Satellite?blobcol=urldata&blobheadername1=Content-Disposition&blobheadername2=Cache-Control&blobheadervalue1=inline%3B+filename%3D%22Resoluci%C3%B3n_Definitiva_de_Admitidos_y_Excluidos.pdf%22&blobheadervalue2=private&blobkey=id&blobtable=MungoBlobs&blobwhere=1371617534582&ssbinary=true); se **descartó expresamente** como prueba de 2026 por identidad de convocatoria equivocada.

**Reparación del sistema de auditoría publicada:** nuevo [registro de evidencias pendientes](audit/evidencias-cierre-olias-uc3m-2026.json), commit `a5799da9`; [test de promoción condicionada](tests/validate-olias-uc3m-pendientes-20261109.mjs), commit `7d5a5e42`, que exige fuente primaria, fecha y acta cuando se marque un tema AUDITADO; [control dinámico de fichas](tests/validate-convocatorias-editorial-sync-20261109.mjs), commit `fd6f7ebb`, para no impedir cierres legítimos mediante recuentos rígidos. [Acta de trabajo ampliada](audit/OLIAS_UC3M_CIERRE_FOCAL_2026-11-09.md), commit `a41cff7d`.

**Estado:** Olías **21 AUDITADO / 1 EN_AUDITORIA (T13)**; UC3M **17 AUDITADO / 3 EN_REVISION_USUARIO (T10, T15, T16)**. **Ninguna promoción ni certificación E2E declarada.** Falta comprobar GitHub Actions del último SHA. El nuevo gate comprueba trazabilidad mínima pero no la corrección jurídica de los 4 bancos por sí solo.


## 190. Fuente primaria aportada — **Olías T13 cerrado editorialmente**, UC3M anexo firmado (**09/11/2026**)

**Documentación recibida realmente:** cinco ficheros INE provinciales del callejero **P45.D260630.G260702** (VIAS, PSEU, TRAM, SECC, UP), plano municipal de Normas Subsidiarias fechado **enero 1999** y Anexo I de la lista definitiva UC3M (**36 páginas**, firmado **30/09/2026 13:14:31**).

**Olías, análisis reproducible sobre municipio 45122:** **280 VIAS**, **0 PSEU**, **427 TRAM**, **5 SECC**, **13 UP**. Los 280 códigos y parejas tipo/denominación son distintos; **263** nombres sin tipo; **202** entradas CALLE. [Inventario íntegro con cinco huellas SHA-256](content/olias-auxiliar-edificios/tema-13/callejero-ine-2026-06-30.md), commit `e958aa8c`; [acta de cotejo](audit/OLIAS_T13_CIERRE_INE_2026-11-09.md), commit `2101c811`. Las **21 preguntas y 84 alternativas** del banco coinciden en clave literal y se conservan sin alterar soluciones. **Tema 13 ascendido a AUDITADO editorial-documentalmente**, al igual que los 21 restantes: **Olías 22/22 AUDITADO**. Se han actualizado manual, fuentes, matriz, banco, manifiesto y ficha de convocatoria. Se ha **desbloqueado la práctica** del T13, sin modificar los simulacros históricos. [Test de regresión de 280 registros](tests/validate-olias-t13-ine-inventory-20261109.mjs) enlazado en [CI](.github/workflows/validate.yml), commit `4472e650`. No hay certificación E2E ni actualización física de todos los portales de servicios.

**UC3M:** Anexo I de admitidos definitivos, identificador verificable de sede **E6oFKKwKp6** y SHA-256 **087e413d22a0cc3f7f0c69fb6a37f8d8a85c256f704322e0b983475e847f6f85**. Se ha cotejado su fecha de **firma**, pero **no la fecha de publicación de la resolución definitiva** de la **base primera.7**. Se han actualizado [acta de corte](audit/UC3M_ACOTACION_CORTE_OFICIAL_2026-11-09.md) y [guía](content/uc3m/GUIA_EXAMEN_2026.md). **UC3M 17/20 AUDITADO**; T10, T15 y T16 mantienen reserva temporal. No se han reproducido datos de aspirantes en un repositorio público.

**Estado global por manifiestos:** **97 AUDITADO** (**39** Diputación C1 + **19** Diputación C2 + **22** Olías + **17** UC3M); **19** La Puebla APROBADO_USUARIO históricos; **5 pendientes no auditados** (Diputación C1 T22, Diputación C2 T6, UC3M T10/T15/T16). **Total 121 temas**. Ninguna categoría equivale a certificación E2E global. La certificación funcional integral sigue sin acreditarse.

**Validación:** el nuevo control está conectado al workflow, pero un resultado verde del SHA final **no está confirmado**; no confundir publicación de código con ejecución de pruebas reales.


## 191. Reparación del fallo real de GitHub Actions y resolución principal UC3M (09/11/2026)

**Fallo confirmado por evidencias del usuario y run [42680443696](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42680443696):** el job `validate` interrumpe en `node tests/validate-uc3m-audited-gate-20261109.mjs` con `AssertionError: Acta sin reservas explícitas: T1`. El gate solo reconocía dos **frases literales**, aunque varias actas incorporaban límites equivalentes. La condición se ha reemplazado por expresiones jurídicas y funcionales equivalentes **sin suprimir el requisito de reserva explícita de certificación**; cotejada la condición contra **17/17** actas reales de temas `AUDITADO`. Commits de corrección **636933e1** y **d450714c**. La comprobación **17/17 es estática**, no demuestra éxito global de todo GitHub Actions.

**Fuente primaria recibida:** Resolución que aprueba listas definitivas UC3M C2 2026, **una página**, firmada electrónicamente por **Alberto García Martínez, gerente por delegación**, el **30/09/2026 13:14:34**, ID sede `sfLB0IXBSH`, SHA-256 `19e8715c897138747fc9fe71ab0eba4547078a713a36827a67bfd3a4c6575f8e`. Aprueba los **Anexos I y II** y ordena publicación web. **No acredita su fecha efectiva de publicación**: la firma no puede utilizarse automáticamente como corte de la base primera.7. La página UC3M no fecha el evento y ADAMS cita **01/10/2026** como dato secundario. Evidencia actualizada en [registro](audit/evidencias-cierre-olias-uc3m-2026.json), [acta](audit/UC3M_ACOTACION_CORTE_OFICIAL_2026-11-09.md) y [guía](content/uc3m/GUIA_EXAMEN_2026.md); [prueba de regresión](tests/validate-olias-uc3m-pendientes-20261109.mjs) protege la distinción entre firma y publicación.

**Cierre de esta incidencia:** corregido el **defecto lógico conocido del gate de actas UC3M**. **No se declara el workflow completo verde**, porque no se ha podido recuperar la conclusión de una ejecución posterior al commit. Siguen pendientes T10/T15/T16 y los controles E2E, con prioridad por examen **21/11/2026**.
