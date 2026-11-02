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

| Prioridad de revisión **a 02/11/2026** | Convocatoria | Programa | Estado efectivo | Certificación integral a esta fecha |
|---|---|---:|---|---|
| **1 · examen 14/11** | **La Puebla de Montalbán C2** | **19** | **19** temas con aprobación editorial histórica; **228 preguntas**, **20 supuestos** y **5 simulacros** actuales (**3 breves + 2 oficiales 50+5**). En revisión urgente de vigencia y test. | **NO RECERTIFICADA** |
| **2 · examen 21/11** | **UC3M Auxiliar C2** | **20** | **20 EN_REVISION_USUARIO**, con manuales, matrices, fuentes y **250 preguntas**. | **NO CERTIFICADO** |
| **3 · sin examen anunciado** | **Diputación Toledo Auxiliar C2** | **20** | **19 EN_REVISION_USUARIO**, **1 BORRADOR** (tema 6 OAPGT incompleto, al final); **409 preguntas**. Bloque DT-C2-A conservado sin reiniciar. | **NO CERTIFICADO** |
| **4 · sin examen anunciado** | **Diputación Toledo Administrativo C1** | **40** | **40** contenidos de origen GENERACION_DESDE_CERO (no es aprobación); **803 preguntas**, auditoría parcial. | **NO CERTIFICADO** |

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
