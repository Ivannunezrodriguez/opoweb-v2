# Auditoría técnica de los test — Diputación de Toledo · Auxiliar C2

**Fecha:** **25/10/2026**.

## 1. Alcance ejecutado

Se han inspeccionado **19 bancos de preguntas**, correspondientes a los temas **1–5 y 7–20**. El **tema 6** no tiene banco de preguntas porque falta reconstruir y cotejar las normas institucionales específicas y los Estatutos completos vigentes del **OAPGT**.

| Control | Resultado |
|---|---|
| Preguntas inspeccionadas | **138** |
| Identificadores duplicados | **0** |
| Preguntas sin cuatro opciones | **0** |
| Índices de respuesta fuera de **0–3** | **0** |
| Preguntas sin referencia documental | **0** |
| Temas con banco | **19 de 20** |
| Revisiones legales artículo por artículo | **PENDIENTES** |

## 2. Problema de corrección de preguntas en blanco: resuelto

El código anterior de `assets/app.js` convertía a número el valor `null` devuelto por `FormData.get` en preguntas sin responder. **`Number(null) === 0`**, por lo que una respuesta **en blanco podía contarse erróneamente como acierto** cuando la opción correcta era **A**.

**Cambio aplicado en `assets/app.js`:**
- Comprobar que el formulario contiene una elección **antes** de convertirla a número.
- Registrar por separado **aciertos**, **errores** y **preguntas en blanco**.
- Mostrar la calificación equivalente `10 * (aciertos - errores * 0,25) / total_preguntas`, con suelo en cero. El coeficiente reproduce proporcionalmente las reglas del ejercicio oficial **50 preguntas, +0,20 acierto, −0,05 error y 0 en blanco**; no confundir el minitest de un tema con el examen oficial completo.
- Reutilizar el nodo de resultado al corregir de nuevo, evitando mensajes acumulados.

### Casos que debe superar la prueba manual en navegador

| Supuesto | Resultado esperado |
|---|---|
| Pregunta sin respuesta cuya solución es **A (índice 0)** | **En blanco**, cero puntos |
| Pregunta respondida correctamente | **Acierto** |
| Pregunta respondida mal | **Error**, penalización proporcional |
| Corregir dos veces el mismo test | **Un solo resumen de resultados**, actualizado |

## 3. Sesgo de posición de las respuestas: resuelto

El reparto anterior favorecía sistemáticamente las primeras opciones y perjudicaba la validez pedagógica de los test.

| Opción correcta | Antes | Después |
|---|---:|---:|
| A | **74** | **35** |
| B | **44** | **35** |
| C | **18** | **34** |
| D | **2** | **34** |

Se han **permutado solamente las posiciones de las opciones**, actualizando `respuestaCorrecta` y verificando que la cadena de texto de la solución continúe en la nueva posición. No se ha modificado el enunciado, la solución sustantiva, la explicación ni la referencia documental.

## 4. Verificación jurídica y funcional pendiente

**Este informe NO certifica** la corrección normativa de cada pregunta. La existencia de una URL y un artículo citado **no garantiza** que la cita realmente respalde toda la justificación ni sus excepciones.

- [ ] Abrir y cotejar **los 138 fundamentos** contra el artículo exacto de la norma vigente o guía de fabricante requerida.
- [ ] Controlar especialmente excepciones de **plazos, silencio, órganos, mayorías y sanciones**.
- [ ] Revisar modificación del **TRLRHL publicada el 07/10/2026** y reformas de empleo público de **Castilla-La Mancha en 2026**.
- [ ] Comprobar versión y ruta de comandos de **Windows 11 Pro, GroupWise 24 y LibreOffice 24**.
- [ ] Probar visualmente la corrección en navegador real, con y sin respuestas.
- [ ] Completar tema 6 solo cuando se cuente con textos institucionales vigentes y cotejados.

> ⚠️ **¡Foco Examen!:** La calificación del examen oficial penaliza cada **error** y no penaliza dejar una pregunta **en blanco**. Una web que confunda ambos estados puede dar una falsa impresión del rendimiento.


---

## 5. Auditoría jurídica parcial — 26 de octubre de 2026

**Alcance efectivo:** **16 preguntas** de los temas **11 y 12**; no debe interpretarse como revisión sustantiva de los restantes **122** test.

### Tema 11 — 8 preguntas

Se ha contrastado la legislación consolidada:
- **TRLRHL, arts. 7, 8 y 9:** delegación, colaboración y régimen de beneficios fiscales; actualización consolidada del **07/10/2026**. https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214
- **LGT, arts. 35, 58 y 59:** obligados tributarios, componentes de la deuda y extinción. https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186

**Resultado:** las **8 respuestas** coinciden con los artículos citados. El manual completo del tema 11 continúa en borrador y requiere un cotejo separado.

### Tema 12 — 8 preguntas

| Preguntas | Artículo LGT | Control efectuado |
|---|---|---|
| **001–004** | **28.2–28.5** | Recargos **5 %**, **10 %** y **20 %**, condiciones y compatibilidad con intereses |
| **005** | **167.1** | Inicio del apremio mediante **providencia notificada** |
| **006–007** | **62.2.a y 62.2.b** | Notificación **1–15**: ingreso hasta **20 del mes siguiente**; notificación **16–último día**: hasta **5 del segundo mes posterior**; si es inhábil, inmediato hábil |
| **008** | **161.2** | Solicitud en voluntaria y excepción vinculada a denegación previa, nuevo plazo y falta de ingreso |

**Corrección sustantiva efectuada:** la pregunta **DT-C2-T12-008** omitía en su formulación la excepción del art. **161.2 LGT**. Se ha delimitado el supuesto y ampliado la justificación para evitar enseñar una regla absoluta falsa.

**Referencia:** https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186

> ⚠️ **¡Foco Examen!:** No confundir los plazos de **liquidación en período voluntario** (art. **62.2**) con los abiertos por **providencia de apremio** (art. **62.5**), ni confundir recargo ejecutivo del **5 %** con apremio reducido del **10 %**.

### Estado posterior a esta revisión

- **16 / 138 preguntas cotejadas individualmente** contra los artículos indicados.
- **122 / 138 pendientes de auditoría sustantiva**.
- **Tema 6:** sin test todavía; falta el texto estatutario íntegro vigente.
- Esta auditoría **no** acredita el funcionamiento visual de la web ni la publicación definitiva de los manuales.


---

## 6. Auditoría jurídica del tema 13 — 26/10/2026

**Fuente primaria consultada:** [RDL 2/2004, TRLRHL consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214), última actualización publicada el **07/10/2026**.

| Pregunta | Artículo | Resultado de contraste |
|---|---|---|
| **T13-001** | **59.1** | Obligatorios: **IBI, IAE e IVTM**. |
| **T13-002** | **60** | IBI: tributo **directo y real** que grava el valor inmobiliario. |
| **T13-003** | **78.1** | IAE: ejercicio de actividades empresariales, profesionales o artísticas en territorio nacional. |
| **T13-004** | **92.1** | IVTM: titularidad de vehículos aptos para circular por vías públicas. |
| **T13-005** | **104.1** | IIVTNU: incremento de valor de terrenos urbanos manifestado en transmisión o derechos reales de goce limitativos del dominio. |
| **T13-006** | **61.1–61.2** | **SUSTITUIDA** la antigua duplicación sobre impuestos obligatorios por prelación de derechos en el IBI. |
| **T13-007** | **104.5** | No sujeción por inexistencia de incremento; deben aportarse la declaración y los títulos pertinentes conforme a la norma. |
| **T13-008** | **106.1–106.2** | **SUSTITUIDA** la antigua repetición del hecho imponible del IAE por sujeto pasivo de transmisiones onerosas del IIVTNU, con advertencia sobre transmisiones gratuitas y sustituto del contribuyente. |

### Dos distinciones de examen incorporadas

- **IBI, artículo 61:** concesión administrativa → superficie → usufructo → propiedad, con la especialidad de los inmuebles de características especiales. **El propietario no es siempre el sujeto pasivo por propiedad**.
- **IIVTNU, artículo 106:** **oneroso → transmitente**; **lucrativo → adquirente**. La figura del **sustituto** aparece cuando el contribuyente del supuesto oneroso es persona física no residente en España.

> ⚠️ **¡Foco Examen!:** No confundir **hecho imponible**, **sujeto pasivo**, **exención** y **no sujeción**. El IIVTNU puede no quedar sujeto si se acredita ausencia de incremento de valor según el **artículo 104.5**.

### Balance acumulado

- **24 de 138 preguntas** con cotejo jurídico individual registrado: temas **11, 12 y 13**.
- **114 preguntas** pendientes de revisión jurídica o técnica individual.
- **20 manuales** continúan como **borradores**, no como material íntegramente certificado.
- El **tema 6** continúa sin banco específico mientras no se disponga de los Estatutos vigentes completos del OAPGT.


---

## 7. Auditoría tema 15 — 26/10/2026

**Seis preguntas cotejadas** con el texto consolidado de la **Ley 40/2015** (última actualización publicada **02/08/2024**): https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566

| Pregunta | Precepto | Comprobación |
|---|---|---|
| 15-001 | **8.1** | Competencia irrenunciable, salvo delegación o avocación legales |
| 15-002 | **8.1 y 9** | Delegar ejercicio no altera la titularidad |
| 15-003 | **10** | Avocación por el superior; supuestos especiales cuando no hay dependencia jerárquica |
| 15-004 | **11.1–11.2** | Encomienda de actividades materiales o técnicas, sin cesión sustantiva |
| 15-005 | **23.2.b** | **Pregunta sustituida**: consanguinidad hasta **cuarto grado**, afinidad hasta **segundo** |
| 15-006 | **24.3–24.5** | **Pregunta sustituida**: manifestación del recusado al **día siguiente** y resolución del superior en **tres días** si niega la causa |

> ⚠️ **¡Foco Examen!:** La **recusación** se plantea por escrito durante la tramitación; no cabe recurso separado contra su resolución, sin perjuicio de invocarla frente al acto final. La **abstención** no determina automáticamente la invalidez de cualquier acto en que haya intervenido la persona afectada.

### Balance actualizado

**30 de 138 preguntas** con revisión normativa individual documentada (temas **11, 12, 13 y 15**). **108** aún pendientes de auditoría de fondo. Los manuales conservan su estado **BORRADOR**.
