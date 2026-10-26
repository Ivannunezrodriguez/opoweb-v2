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


---

## 8. Auditoría de Ley 39/2015, tema 2 — 26/10/2026

**Fuente contrastada:** [Ley 39/2015, BOE-A-2015-10565](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), última actualización del texto consolidado publicada **06/11/2024**.

| Pregunta | Precepto | Resultado |
|---|---|---|
| **T2-001** | **4.1.b** | Sustituida pregunta de número de artículo por quién es interesado sin haber iniciado procedimiento |
| **T2-002** | **13.b y 53** | Sustituida pregunta de número de artículo por derecho de asistencia electrónica y diferenciación entre derechos generales y derechos del interesado |
| **T2-003** | **14.2.a** | Personas jurídicas: relación electrónica obligatoria |
| **T2-004** | **30.2** | Plazos por días hábiles salvo previsión distinta: exclusión de sábados, domingos y festivos |
| **T2-005** | **30.5** | Último día inhábil: **primer día hábil siguiente** |
| **T2-006** | **32.1** | Ampliación hasta **la mitad** del plazo, condiciones y notificación |
| **T2-007** | **32.3** | Solicitud y decisión antes del vencimiento; no se amplía un plazo vencido |
| **T2-008** | **21.2–21.3** | Si no se fija plazo de resolución: **tres meses**. No confundir con máximo ordinario **seis meses**, salvo excepción |

**Correcciones técnicas del banco:** eliminadas las **8** referencias que contenían la cadena literal `undefined`. Las ocho respuestas se cotejaron con los artículos indicados.

### Incidencia transversal corregida

La búsqueda adicional localizó otras **23 referencias defectuosas** (tema **1: 7**, tema **3: 8**, tema **4: 8**). Se repararon las referencias y se recolocó la indicación del artículo en el campo adecuado **sin variar las soluciones**, pero **estas 23 reparaciones NO constituyen auditoría jurídica individual de esos temas**.

> ⚠️ **¡Foco Examen!:** Cuando la norma no fija plazo para notificar resolución expresa rige **tres meses** (art. **21.3**); el máximo general que pueden establecer las normas del procedimiento es **seis meses**, salvo norma con rango de ley o Derecho de la UE (art. **21.2**). No confundir los conceptos.

### Balance de auditoría

**38 / 138 preguntas** cotejadas individualmente con fuente legal: temas **2, 11, 12, 13 y 15**. **100** pendientes de cotejo sustantivo. La auditoría integral de los manuales permanece abierta.


---

## 9. Auditoría individual tema 3 — 26/10/2026

**Fuente jurídica:** [Ley 39/2015, texto consolidado del BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), última actualización publicada el **06/11/2024**.

| Pregunta | Referencia | Resultado del contraste |
|---|---|---|
| **T3-001** | **53.1.a** | Reemplazada pregunta de número de artículo por derecho del interesado a conocer el estado de tramitación |
| **T3-002** | **54 y 58** | Reemplazada por las dos formas de iniciación: **de oficio** y **a solicitud del interesado** |
| **T3-003** | **82.2 y 82.4** | Audiencia ordinaria: **10–15 días**, con supuesto legal en el que puede omitirse |
| **T3-004** | **96.2 y 96.5** | Reemplazada por oposición expresa a la simplificación de oficio, señalando excepción sancionadora |
| **T3-005** | **96.6 y 96.7** | **30 días desde el día siguiente a la notificación** del acuerdo, salvo que reste menos en ordinario; otros trámites requieren ordinaria |
| **T3-006** | **86.1** | Reemplazada por condiciones de la **terminación convencional**, incluidas materias no susceptibles de transacción |
| **T3-007** | **94.4–94.5** | Reemplazada por plazo de **10 días** para terceros personados y supuestos de continuación |
| **T3-008** | **97.1–97.2** | Resolución previa y notificación antes de actuaciones materiales de ejecución limitativas |

**Cinco enunciados sustituidos** (**001, 002, 004, 006 y 007**), más precisión de justificaciones y trampas de examen. Las **ocho respuestas** se han revisado individualmente; el fichero conserva ocho preguntas y sus referencias al BOE.

> ⚠️ **¡Foco Examen!:** No confundir **audiencia de 10 a 15 días** (art. **82.2**), **alegaciones iniciales de cinco días** en simplificada (art. **96.6.c**) y **30 días de resolución simplificada** (art. **96.6**).

### Balance actualizado

**46 / 138 preguntas** con cotejo sustantivo individual documentado: temas **2, 3, 11, 12, 13 y 15**. **92** preguntas pendientes. Los **20 manuales** siguen siendo borradores y el **tema 6** no dispone todavía de test específico.


---

## 10. Auditoría jurídica tema 4 — 26/10/2026

**Fuente primaria:** [Ley 39/2015, texto consolidado del BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) (última actualización publicada **06/11/2024**).

| Pregunta | Referencia | Resultado |
|---|---|---|
| **T4-001** | **112.1 y 121.1** | Alzada contra resoluciones y actos de trámite cualificados que no agotan la vía administrativa; delimitado que no todo trámite es recurrible |
| **T4-002** | **122.1** | Alzada contra acto expreso: **un mes** |
| **T4-003** | **122.2 y 24.1** | Resolución de alzada: **tres meses**; silencio generalmente negativo, con excepción legal |
| **T4-004** | **123.1** | Reposición potestativa contra actos que ponen fin a la vía administrativa, ante el mismo órgano |
| **T4-005** | **107.1, 107.2, 107.5** | **Sustituida** pregunta redundante por competencia del **Pleno de la Corporación** en lesividad de actos locales; límite **cuatro años** |
| **T4-006** | **106.1 y 106.5** | **Sustituida** pregunta redundante por revisión de oficio: iniciada de oficio, **caducidad a seis meses**; a instancia, silencio desestimatorio |
| **T4-007** | **125.1 y 125.2** | Error de hecho: **cuatro años** desde notificación; otras causas: **tres meses** desde conocimiento del documento o firmeza judicial |
| **T4-008** | **109.2** | Rectificación en cualquier momento de errores materiales, de hecho o aritméticos, distinta de nulidad y lesividad |

**Incidencia de fondo corregida:** la antigua justificación **T4-007** decía que los tres meses de las causas restantes se contaban «desde los hechos o conocimiento de documentos». Esa descripción era inexacta: el artículo **125.2** exige **conocimiento de documentos** o **firmeza de la sentencia judicial**, según corresponda.

> ⚠️ **¡Foco Examen!:** **Lesividad**: **cuatro años** para declararla desde el acto, órgano local **Pleno**; si transcurren **seis meses** sin declaración, caduca el procedimiento. **Revisión de oficio de nulidad**: iniciada de oficio, **seis meses → caducidad**; iniciada a solicitud, silencio desestimatorio. No confundirlas con el recurso extraordinario de revisión por error de hecho (**cuatro años desde notificación**).

### Balance acumulado tras tema 4

- **54 / 138** preguntas con auditoría individual registrada: temas **2, 3, 4, 11, 12, 13 y 15**.
- **84** preguntas aún pendientes de auditoría individual.
- Los manuales completos continúan en **BORRADOR**. El tema 6 sigue sin banco por falta de cotejo íntegro de sus Estatutos.


---

## 11. Auditoría jurídica tema 1 — 26/10/2026

**Fuente primaria:** [Constitución Española, BOE-A-1978-31229, texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), última actualización publicada el **20/05/2026**.

| Pregunta | Referencia | Resultado |
|---|---|---|
| **T1-001** | Estructura constitucional | **169 artículos**; se completó la explicación de la estructura |
| **T1-002** | **167.1–167.2** | Reforma ordinaria: **3/5** de cada Cámara; salida alternativa condicionada de **mayoría absoluta del Senado y 2/3 del Congreso** |
| **T1-003** | **167.3** | Referéndum ordinario solicitado por **1/10** de cualquiera de las Cámaras en **15 días** |
| **T1-004** | **168.1–168.2** | Reforma agravada: **2/3** de cada Cámara, disolución inmediata, ratificación por nuevas Cámaras y **2/3** para el nuevo texto |
| **T1-005** | **168.3** | Referéndum obligatorio en la reforma agravada |
| **T1-006** | **53.2** | Amparo ante el **Tribunal Constitucional**, con ámbito de derechos delimitado |
| **T1-007** | **55.1–55.2** | **Pregunta sustituida** por suspensión de derechos en **excepción o sitio**; no equivale a estado de alarma |
| **T1-008** | **169** | No se puede **iniciar** reforma en guerra ni durante vigencia de los estados del art. **116** |

**Resultado:** ocho preguntas cotejadas, una sustituida por cuestión sustantiva y precisadas mayorías, plazos y excepciones. La pregunta reemplazada se refería al número del título constitucional dedicado a la reforma; el contenido permanece en el manual.

> ⚠️ **¡Foco Examen!:** En el artículo **167** puede aparecer la alternativa **mayoría absoluta del Senado + 2/3 del Congreso**; la reforma **agravada** del **168** requiere disolución de las Cortes, nuevas Cámaras, **2/3** y referéndum obligatorio. El artículo **169** prohíbe **iniciar** la reforma durante **guerra, alarma, excepción o sitio**.

### Balance actualizado

- **62 / 138** preguntas cotejadas individualmente: temas **1, 2, 3, 4, 11, 12, 13 y 15**.
- **76 / 138** restantes con auditoría jurídica o técnica de fondo pendiente.
- El manual del tema 1, como los demás manuales de la convocatoria, continúa en estado **BORRADOR**.


---

## 12. Auditoría jurídica tema 5 — 26/10/2026

**Fuentes primarias cotejadas:**

- **Ley 7/1985, de Bases del Régimen Local**, texto consolidado BOE actualizado **03/10/2026**: https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
- **Ley Orgánica 5/1985, Régimen Electoral General**, texto consolidado BOE actualizado **02/07/2026**: https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672
- **Constitución Española**, art. **140**, utilizada como contraste adicional: https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229

| Pregunta | Artículo cotejado | Resultado |
|---|---|---|
| **T05-001** | **LRBRL 11.2** | Tres elementos municipales: **territorio, población y organización** |
| **T05-002** | **LRBRL 20.1.a y e** | **Comisión Especial de Cuentas** en todos los municipios, y órganos municipales necesarios |
| **T05-003** | **LRBRL 20.1.b** | **Junta de Gobierno Local** en municipios de población **superior a 5.000**; posibilidad de creación en menores bajo las condiciones legales |
| **T05-004** | **LRBRL 32.1–32.2** | **SUSTITUIDA** pregunta memorística por órganos provinciales necesarios: **Presidente, Vicepresidentes, Junta de Gobierno y Pleno** |
| **T05-005** | **LOREG 207.1–207.2** | **SUSTITUIDA** pregunta sobre quién elige al presidente de la Diputación por las mayorías exactas: **absoluta en primera votación y simple en segunda** |
| **T05-006** | **LRBRL 36.1.b** | Cooperación y asistencia jurídica, económica y técnica a los municipios; garantía específica de secretaría e intervención en municipios de **menos de 1.000** habitantes |

**Resultado:** **6 preguntas cotejadas**; **2** mejoradas sustantivamente y **4** con justificaciones y trampas de examen más precisas. Se mantiene la advertencia de que el manual completo y el funcionamiento concreto de la Diputación requieren revisión independiente.

> ⚠️ **¡Foco Examen!:** **Superior a 5.000** no es igual a **5.000 o más**. En la elección del **Presidente de la Diputación** se exige **mayoría absoluta en primera votación** y **simple en segunda**. No confundir con la elección del Alcalde.

### Balance de la auditoría

- **68 / 138 preguntas** sometidas a revisión jurídica individual documentada: temas **1, 2, 3, 4, 5, 11, 12, 13 y 15**.
- **70 / 138 preguntas** pendientes de auditoría de fondo.
- Los manuales de Diputación C2 permanecen en **BORRADOR**, incluido el tema 5.


---

## 13. Auditoría jurídica del tema 7 — **26/10/2026**

**Fuente base:** [Ley 4/2011, Empleo Público de Castilla-La Mancha, BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752). La página de **texto consolidado** muestra última integración del **21/03/2024**, pero su **apartado de análisis jurídico** registra cambios posteriores:

- [Ley 1/2026, de **26/03/2026**](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90065): modificación del **artículo 121** y de la **disposición adicional séptima**.
- [Ley 2/2026, de **09/04/2026**](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90086): modificación del **artículo 70.2** (libre designación), con entrada en vigor el **06/05/2026**.

**Advertencia fundamental:** no tratar el consolidado BOE de **2024** como una integración completa de estas reformas de **2026**.

| Pregunta | Fundamento | Resultado |
|---|---|---|
| **T07-001** | **Art. 4.2** | Clases de empleado público: funcionario de carrera, interino, laboral y eventual |
| **T07-002** | **Art. 65.2** | **Sustituida** pregunta definitoria por promoción interna: al menos **dos años** de servicio activo, con reglas legales de cómputo |
| **T07-003** | **Art. 12.1** | Personal eventual: funciones de confianza o asesoramiento especial |
| **T07-004** | **Art. 12.4–12.5** | El desempeño eventual **no constituye mérito** para acceso o promoción interna |
| **T07-005** | **Art. 19.4** | **Sustituida** pregunta básica por ejecución total de OEP en plazo **improrrogable de tres años** desde el día siguiente al de su publicación |
| **T07-006** | **Art. 67.2** | El **concurso** es procedimiento normal de provisión; la libre designación requiere convocatoria pública |

**Resultado:** **6 respuestas revisadas** y **2 preguntas sustituidas** por plazos relevantes. La pregunta **006** no exige memorizar las categorías específicas de puestos del artículo **70.2** reformado en **2026**.

> ⚠️ **¡Foco Examen!:** No confundir **provisión de puestos (concurso)**, **promoción interna (antigüedad mínima de dos años)** y **ejecución de OEP (tres años improrrogables)**. Son institutos distintos.

### Balance tras la revisión

- **74 de 138 preguntas** con auditoría individual documentada: temas **1–5, 7, 11–13 y 15**.
- **64 preguntas** pendientes de revisión de fondo.
- Los **20 manuales** siguen en estado **BORRADOR**; el tema 7 requiere una auditoría separada de las reformas autonómicas y del texto íntegro.


---

## 14. Auditoría jurídica tema 8 — **26/10/2026**

**Fuente:** [Ley 31/1995, de Prevención de Riesgos Laborales](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292), versión consolidada del BOE con última actualización publicada **09/04/2026**.

| Pregunta | Fundamento | Verificación |
|---|---|---|
| **T08-001** | **Art. 14.1** | Derecho a protección eficaz y deber empresarial correlativo |
| **T08-002** | **Art. 14.5** | El coste de la prevención **no recae sobre trabajadores** |
| **T08-003** | **Art. 15.1.c y h** | Combatir riesgos en origen y priorizar **protección colectiva** |
| **T08-004** | **Art. 31.2** | **SUSTITUIDA** la cuestión anterior por definición de **servicio de prevención**: medios humanos y materiales para prevención y asesoramiento |
| **T08-005** | **Art. 38.2 y 38.3** | Comité de Seguridad y Salud desde **50 trabajadores**, **paritario**, reuniones **trimestrales** y a petición de representación |
| **T08-006** | **Art. 35.2 y 35.4** | **SUSTITUIDA** la pregunta de reuniones por **delegados de prevención**: **50–100: dos**; **101–500: tres**, con sistemas alternativos de designación permitidos |

**Resultado:** seis preguntas contrastadas con la LPRL, dos sustituidas para cubrir todos los incisos del epígrafe oficial (derechos y obligaciones, servicios, consulta y participación) y justificaciones precisadas.

> ⚠️ **¡Foco Examen!:** El **Comité** empieza en **50 trabajadores**; para **50–100** corresponden **2 delegados**, pero el Comité es **paritario**, formado por esos delegados y el mismo número de representantes empresariales. Se reúne **trimestralmente** y a solicitud de una de sus representaciones.

### Balance acumulado

- **80 / 138 preguntas** con contraste jurídico individual documentado: temas **1–5, 7, 8, 11–13 y 15**.
- **58 preguntas** pendientes de revisión jurídica o técnica de fondo.
- Los manuales completos de la convocatoria siguen en **BORRADOR** y el **tema 6** continúa sin test específico por falta de cotejo íntegro estatutario.


---

## 15. Auditoría jurídica del tema 9 — **26/10/2026**

**Fuentes:** [Ley Orgánica 3/2007, BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115) (última actualización publicada **02/08/2024**) y [Ley 12/2010, Castilla-La Mancha](https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708) (última actualización publicada **30/06/2021**).

| Pregunta | Fundamento | Resultado |
|---|---|---|
| **T09-001** | **LO 3/2007, art. 6.1** | Discriminación directa: trato menos favorable por razón de sexo en situación comparable |
| **T09-002** | **LO 3/2007, art. 6.2** | Indirecta: disposición o criterio aparentemente neutro, desventaja particular y posible justificación objetiva |
| **T09-003** | **Ley 12/2010, art. 8.1–8.2** | **SUSTITUIDA** pregunta sobre orden de discriminar por **transversalidad** en todas las políticas y fases de la acción pública |
| **T09-004** | **LO 3/2007, disposición adicional primera** | Composición equilibrada: presencia de cada sexo de **40 % a 60 %**, sin exigir exactamente 50/50 |
| **T09-005** | **Ley 12/2010, art. 4.g** | **SUSTITUIDA** pregunta sobre título de la ley autonómica por obligación de **lenguaje no sexista** en ámbito administrativo |
| **T09-006** | **LO 3/2007, arts. 7.1–7.3** | **SUSTITUIDA** por diferencia entre **acoso sexual** y **acoso por razón de sexo**, ambos discriminatorios |

**Resultado:** **6 respuestas cotejadas**. Tres preguntas sustituidas y fundamentación individual ampliada. Se corrige el desequilibrio de cobertura que dejaba la **Ley 12/2010** reducida a memorizar su título: ahora se preguntan los artículos **4 y 8** de dicha ley.

> ⚠️ **¡Foco Examen!:** **Discriminación directa** y **discriminación indirecta** no son sinónimos. **Acoso sexual** puede ser verbal o físico y tiene naturaleza sexual; **acoso por razón de sexo** no requiere contenido sexual. En ambos casos hay discriminación. La **composición equilibrada** es **40–60 %**, no 50/50 obligatorio.

### Balance tras tema 9

- **86 / 138 preguntas** con auditoría jurídica individual documentada: temas **1–5, 7–9, 11–13 y 15**.
- **52 preguntas** pendientes de auditoría jurídica o técnica individual.
- Manuales completos aún en **BORRADOR** y **tema 6** todavía sin test específico.


---

## 16. Auditoría jurídica tema 10 — **26/10/2026**

**Fuente primaria:** [LO 3/2018, texto consolidado del BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673), última actualización publicada **27/12/2025**.

| Pregunta | Artículo cotejado | Resultado |
|---|---|---|
| **T10-001** | **7.1–7.2** | Consentimiento de menores: umbral general **14 años**, con salvedades para actos o negocios que requieren asistencia |
| **T10-002** | **8.2** | **SUSTITUIDA** pregunta genérica por requisito de **competencia atribuida por norma con rango de ley** para tratar datos en interés público o ejercicio de poderes públicos |
| **T10-003** | **88.1–88.3** | **SUSTITUIDA** pregunta de exactitud por el **derecho a desconexión digital** de trabajadores y empleados públicos |
| **T10-004** | **5.1–5.3** | Deber de confidencialidad también después de concluir la relación con responsable o encargado |
| **T10-005** | **13** | Acceso a datos: remisión a RGPD; posible solicitud repetitiva **más de una vez en seis meses**, salvo causa legítima |
| **T10-006** | **14** | Rectificación: concretar datos, corrección solicitada y, cuando proceda, justificantes |

**Resultado:** seis preguntas contrastadas, dos sustituidas para incorporar derechos digitales y fundamento legal del tratamiento por Administraciones, cuatro explicaciones ampliadas. **El banco de preguntas** queda revisado; **el manual completo** mantiene su estado **BORRADOR**.

> ⚠️ **¡Foco Examen!:** **Consentimiento de menores: 14 años**, con excepciones del art. **7**. La Administración **no depende siempre del consentimiento** para tratar datos: una **competencia atribuida por norma con rango de ley** puede sustentar tratamientos del art. **8.2**. Los empleados públicos también tienen derecho a la **desconexión digital** (art. **88**).

### Balance actualizado

- **92 / 138 preguntas** con revisión jurídica individual registrada: temas **1–5, 7–13 y 15**.
- **46 / 138** pendientes de revisión de fondo (temas **14, 16–20**).
- **Tema 6** no tiene test específico; falta reconstrucción estatutaria del **OAPGT**. Todos los manuales continúan en **BORRADOR**.


---

## 17. Auditoría documental tema 14 — **26/10/2026**

**Fuentes cotejadas:** [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Reglamento eIDAS 910/2014](https://eur-lex.europa.eu/eli/reg/2014/910/oj/spa) y [pregunta frecuente FNMT 1213](https://www.sede.fnmt.gob.es/ca/preguntas-frecuentes/problemas-y-dudas/-/asset_publisher/fVZppcBHj0oa/content/1213-que-diferencia-hay-entre-solicitar-un-certificado-en-tarjeta-criptografica-y-solicitarlo-en-software-).

| Pregunta | Referencia | Resultado de cotejo |
|---|---|---|
| **T14-001** | **Ley 39/2015, art. 11.2** | La firma se exige para interponer recursos y las demás actuaciones previstas por ese artículo |
| **T14-002** | **eIDAS, art. 3 y anexo III** | **SUSTITUIDA:** tipos de certificado: certificado cualificado de **sello electrónico** frente a firma |
| **T14-003** | **eIDAS, art. 22** | **SUSTITUIDA:** **listas de confianza** de prestadores cualificados y sus servicios |
| **T14-004** | **Ley 6/2020, art. 4.2** | Vigencia máxima legal de certificado cualificado: **cinco años**, no duración fija |
| **T14-005** | **FNMT, FAQ 1213** | **SUSTITUIDA:** soporte **software** frente a **tarjeta criptográfica** y exportación de clave privada |
| **T14-006** | **Ley 6/2020, art. 5.1.b** | **Revocación** por secreto de claves comprometido; distinta de **caducidad** |

**Resultado:** seis preguntas revisadas frente a normas y guía oficial; tres sustituidas para cubrir mejor tipos, soportes y prestadores del epígrafe oficial. No se certifica el manual completo ni el funcionamiento visual.

> ⚠️ **¡Foco Examen!:** No confundir **identificación** con **firma**, **firma** de persona física con **sello** de persona jurídica, ni **caducidad** con **revocación**. Un certificado cualificado puede durar **hasta cinco años**, pero no tiene que durar necesariamente cinco.

### Balance tras tema 14

- **98 / 138 preguntas** con revisión jurídica o técnica individual registrada: temas **1–5, 7–15**.
- **40 preguntas pendientes** de revisión individual: temas **16–20**.
- **Tema 6** sigue sin test específico. Todos los manuales continúan como **BORRADOR**.


---

## 18. Auditoría técnica del tema 16 — 26/10/2026

**Programa:** Windows 11 Pro I; creación, copia y borrado de archivos y carpetas; unidades locales/de red; impresión y digitalización.

**Fuentes:** [Explorador de archivos de Microsoft](https://support.microsoft.com/es-es/windows/experience/fileexplorer/file-explorer-in-windows), [atajos de teclado de Windows](https://support.microsoft.com/es-es/accessibility/windows/keyboard-shortcuts-in-windows), [convenciones de rutas UNC, Microsoft Learn](https://learn.microsoft.com/es-es/windows/win32/fileio/naming-a-file).

| Pregunta | Materia | Resultado |
|---|---|---|
| **T16-001** | **Windows + E** | Abre Explorador de archivos, conforme a ayuda Microsoft |
| **T16-002** | Cortar y pegar | Mueve normalmente el archivo; explicación precisada para posibles excepciones |
| **T16-003** | **Mayús + Supr** | **Sustituida** pregunta redundante sobre copiar por eliminación sin enviar a Papelera |
| **T16-004** | Menú **Ver** | Cambiar vista a iconos, lista o detalles no cambia contenido |
| **T16-005** | Ruta **UNC** | Identifica un recurso compartido mediante servidor y nombre del recurso; diferenciado de unidad asignada |
| **T16-006** | Escaneo e impresión | **Sustituida** pregunta de definiciones por caso práctico de digitalización de un documento en papel |

**Resultado:** **6 preguntas revisadas**, **2 sustituidas** y referencias a Microsoft comprobadas. No se ha efectuado prueba en máquina Windows 11 Pro ni revisión editorial integral del manual.

> ⚠️ **¡Foco Examen!:** **Supr** normalmente manda a la **Papelera**; **Mayús + Supr** elimina **sin pasar por la Papelera**. **Imprimir a PDF** no equivale a **digitalizar una hoja de papel**; además, una digitalización ordinaria no es automáticamente una copia auténtica administrativa.

### Balance

- **104 / 138 preguntas** individualmente revisadas en los temas **1–5, 7–16**.
- **34 preguntas** todavía pendientes de auditoría técnica: temas **17–20**.
- **Tema 6** sin banco y manuales en estado **BORRADOR**.


---

## 19. Auditoría técnica tema 17 — **26/10/2026**

**Epígrafe oficial:** «Microsoft Windows 11 Pro II. Navegación por Internet con Microsoft Edge. Uso del correo electrónico con Microfocus GroupWise 24».

**Documentación de fabricante cotejada:** [Microsoft, atajos Edge](https://support.microsoft.com/es-es/edge/keyboard-shortcuts-in-microsoft-edge), [Microsoft, InPrivate](https://support.microsoft.com/es-es/edge/browse-inprivate-in-microsoft-edge), [GroupWise 24, redacción de mensajes](https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sending_composing.html) y [GroupWise 24, mensajes enviados y seguimiento](https://www.novell.com/documentation/groupwise24/gw_guide_userwin/data/email_sentmail_workingwithsentmail.html).

**Hallazgo previo:** las **ocho preguntas** del banco original eran exclusivamente sobre GroupWise; no evaluaban Microsoft Edge, exigido expresamente en el epígrafe. Se mantienen cinco preguntas de GroupWise y se sustituyen tres redundantes por Edge.

| Pregunta | Materia | Resultado |
|---|---|---|
| **T17-001** | **GroupWise 24** | **New Mail** para correo nuevo |
| **T17-002** | **GroupWise 24** | **+Bc** muestra copia oculta y **+Cc** copia visible |
| **T17-003** | **GroupWise 24** | **Bc** no visible para los demás destinatarios |
| **T17-004** | **Edge** | **SUSTITUIDA** por atajo **Ctrl + Mayús + N** para abrir ventana InPrivate |
| **T17-005** | **Edge** | **SUSTITUIDA** por significado de InPrivate: reduce rastros locales, **no es anonimato**, los archivos descargados pueden seguir guardados |
| **T17-006** | **GroupWise 24** | **Sent Items** para enviados; el seguimiento depende de configuración |
| **T17-007** | **Edge** | **SUSTITUIDA** por **Ctrl + J** (Descargas) frente a **Ctrl + H** (Historial) |
| **T17-008** | **GroupWise 24** | **Delivered** no significa necesariamente **Opened**; configuración y sistemas externos condicionan seguimiento |

**Resultado:** ocho preguntas revisadas, tres sustituidas para asegurar la cobertura de los dos productos oficiales. Cotejo documental del fabricante, **sin prueba práctica en cliente GroupWise instalado** ni auditoría íntegra del manual.

> ⚠️ **¡Foco Examen!:** **Edge InPrivate no garantiza anonimato** ni borra automáticamente los archivos descargados. **Ctrl + J** abre **Descargas** y **Ctrl + H**, **Historial**. En **GroupWise**, **entregado** no demuestra **abierto**; el seguimiento se consulta conforme a las opciones de envío y configuración.

### Balance tras el tema 17

- **112 / 138 preguntas** con auditoría jurídica/técnica individual documentada: temas **1–5, 7–17**.
- **26 preguntas** aún pendientes: temas **18, 19 y 20**.
- El **tema 6** sigue sin banco de preguntas propio; los manuales permanecen en estado **BORRADOR**.
