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
