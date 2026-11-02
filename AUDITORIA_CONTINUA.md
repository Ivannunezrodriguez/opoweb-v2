# OpoWeb v2 — Estado editorial único y cola de reanudación

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

## 2. Resumen por convocatoria (99 temas activos)

| Orden editorial | Convocatoria | Programa | Evidencia de contenido / estado | Cierre jurídico y técnico actualizado |
|---|---|---:|---|---|
| **1** | **Diputación Toledo, Auxiliar Administrativo C2** | **20** | **20** entradas y manuales referenciados. El manifiesto anterior indicaba **19 PUBLICADO + 1 BORRADOR**, aunque las notas dicen que siguen pendientes controles. Se normaliza a **en revisión** (tema **6**: borrador incompleto). | **NO CERTIFICADO** |
| **2** | **La Puebla de Montalbán, Auxiliar C2** | **19** | **19 APROBADO_USUARIO**; cierre histórico de fase 2 documentado el **30/07/2026**, con **228 preguntas, 20 supuestos y 3 simulacros** en el informe de la época. | Cierre histórico **válido como hito**, pero **sin recertificación global a 02/11/2026** |
| **3** | **UC3M, Auxiliar C2** | **20** | **20 EN_REVISION_USUARIO** en manifiesto; manual, matriz, fuentes y preguntas declarados. | **NO CERTIFICADO** |
| **4** | **Diputación Toledo, Administrativo C1** | **40** | **40 GENERACION_DESDE_CERO** en esquema/validador heredado: expresa **origen del contenido**, no aprobación. Existen manuales y bancos, con auditorías parciales. | **NO CERTIFICADO** |

**Total: 99 temas registrados.** **19/99 (19,2 %)** tienen aprobación editorial *histórica declarada* en el manifiesto de La Puebla; **0/99** se han recertificado integralmente **en esta auditoría de noviembre** (no significa que todos sean incorrectos). No se calcula un porcentaje de exactitud jurídica sin contar criterios auditados por tema.

**Fuera del alcance editorial activo:** Las Ventas (descartada), Carranque (no reabrir), CPEIS (seguimiento, sin temario activo en esta cola). No reabrir una convocatoria descartada por aparecer en un archivo histórico.

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

**Inconsistencia que requiere investigación independiente:** el registro `audit/phase2-ci-result.md` incluye el valor `tema6Interinidad: 4_YEARS_SOURCE_VALIDATED`; `QA_FINAL_2026-07-18.md` describe otra cifra. **No elegir una versión por intuición:** identificar norma, fecha, ámbito, código y test antes de modificar material de La Puebla.

## 4. Hechos y correcciones ya realizados (no repetir)

- **Diputación C1 Tema 3:** afinada la diferencia **300–400 CE / 350 LOREG**, la elección del **Defensor del Pueblo** y ampliado el banco a **22 preguntas** (commits registrados en Git). **Revisión integral pendiente.**
- **Diputación C1 Tema 4:** ampliada la comparación de figuras de competencia, recusación y test (banco **21 preguntas**). **Revisión integral pendiente.**
- **Diputación C1 Tema 5:** corregida la explicación de los **10 días** de subsanación de representación conforme a los arts. **5.6 y 30.2 de la Ley 39/2015**, en manual y test. **Revisión integral pendiente.**
- **Diputación C2 Tema 6:** ficha de reforma oficial OAPGT **BOP 284/2011** documentada y enlazada; texto íntegro estatutario vigente y acuerdo laboral consolidado **aún pendientes**. **No está terminado y se reserva para el último bloque**.
- **Diputación C2 tests:** informe técnico histórico de **25/10/2026** sobre **138 preguntas / 19 bancos** y revisión normativa parcial; **no extrapolar a aprobación general**.
- **La Puebla fase 2:** cierre histórico y prueba de CI de commit documentados; **no eliminar ni revalidar desde cero**. Revisar únicamente cambios normativos, incidencias puntuales y funcionamiento de la versión actual.

## 5. Plan por BLOQUES (vigente desde 02/11/2026)

**BLOQUE ACTIVO: DT-C2-A — Constitución, procedimiento administrativo y Administración local (temas 1–5).**

**Objetivo:** cotejar como un conjunto los epígrafes oficiales, las reglas compartidas, los materiales ya existentes, todos los bancos de preguntas y las pruebas integradas de los temas 1–5. Guardar correcciones legales, matrices de cobertura y evidencias por sublotes. No reabrir por sistema una comprobación ya acreditada. Si un sublote no puede finalizarse, conservar el marcador exacto en esta sección.

**Marcador de reanudación:** INICIO DE AUDITORÍA SUSTANTIVA MULTITEMA. El inventario estructural global sí está hecho, pero no certifica la fiabilidad jurídica de los cinco temas. Empezar por la verificación agrupada de su Constitución/Ley 39/2015/régimen local; no volver a generar manuales ni bancos existentes.

| Bloque | Convocatoria | Alcance | Estado operativo |
|---|---|---|---|
| **DT-C2-A** | Diputación Auxiliar C2 | **1–5**, Constitución, Ley 39/2015, régimen local | **ACTIVO; cobertura y fiabilidad pendiente de certificar** |
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

**Validación efectivamente realizada aquí:** lectura y análisis JSON de los manifiestos y fichas modificados y comprobación textual de la función `themeStatus`. **No** se ha ejecutado `npm test` para el commit actual ni una nueva prueba real de navegador. La consulta de estados de GitHub para un commit reciente devolvió **0 checks**, lo que **no** prueba por sí solo ni éxito ni fallo de CI. Por tanto, **pruebas funcionales y CI actual pendientes**.

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
