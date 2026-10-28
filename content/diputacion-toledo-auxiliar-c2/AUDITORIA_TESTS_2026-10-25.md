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


---

## 20. Auditoría técnica tema 18 — **26/10/2026**

**Epígrafe oficial:** «LibreOffice 24 I. Utilización de documentos de texto con LibreOffice 24 Writer».

**Fuente primaria:** [Guía Writer 24.2, The Document Foundation](https://books.libreoffice.org/en/WG24/WG24.html), capítulos **8** (estilos), **14** (combinación de correspondencia), **15** (tablas de contenido) y **17** (campos).

| Pregunta | Materia | Resultado |
|---|---|---|
| **T18-001** | Programas de la suite | **Writer** es procesador de textos; no confundir con Calc, Impress o Base |
| **T18-002** | Formatos | **ODT** es documento editable; se distingue de **OTT**, plantilla |
| **T18-003** | Estilos | Formato reutilizable, diferencia respecto al formato directo |
| **T18-004** | Diseño de página | Salto de página frente a estilo de página |
| **T18-005** | Combinación de correspondencia | Documento modelo y registros de datos para cartas, etiquetas o sobres |
| **T18-006** | **Guía Writer 24.2, cap. 14** | **MODIFICADA** por caso práctico: **Ver > Fuentes de datos / Ctrl + Mayús + F4** |
| **T18-007** | Exportar y guardar | Guardar documento **ODT** no equivale a exportar **PDF** |
| **T18-008** | **Guía Writer 24.2, cap. 15** | **SUSTITUIDA** por necesidad de **Actualizar índice** después de cambiar títulos o paginación |
| **T18-009** | Campos | Numeración de página mediante campo dinámico |
| **T18-010** | Estilos | Formato directo aplicado a selección, frente a estilos reutilizables |

**Hallazgo de interés:** el índice de Writer es de **generación automática**, pero su **actualización no se realiza automáticamente** tras editar encabezados o mover páginas; requiere **Actualizar índice** en el menú contextual. Fuente: [capítulo 15](https://books.libreoffice.org/en/WG24/WG2415-TOCsIndexesBiblios.html).

**Resultado:** **10 preguntas** contrastadas individualmente con guías del fabricante; dos reformuladas para evaluar operaciones prácticas. El manual completo continúa **BORRADOR**; no consta comprobación real en una instalación de Writer 24.2.

> ⚠️ **¡Foco Examen!:** **Generar automáticamente** una tabla de contenido no significa que se **actualice sola**. Tras editar títulos o paginación hay que ejecutar **Actualizar índice**. **Ctrl + Mayús + F4** permite mostrar las **fuentes de datos** para combinación de correspondencia en Writer 24.2 para Windows.

### Balance actualizado

- **122 / 138 preguntas** individualmente auditadas: temas **1–5, 7–18**.
- **16 preguntas** pendientes: temas **19 y 20**.
- **Tema 6** aún no dispone de test propio. Los manuales completos siguen con estado **BORRADOR**.


---

## 21. Auditoría técnica tema 19 — **26/10/2026**

**Epígrafe oficial:** «LibreOffice 24 II. Utilización de documentos de hoja de cálculo con LibreOffice 24 Calc».

**Fuente primaria del fabricante:** [Guía Calc 24.2, The Document Foundation](https://books.libreoffice.org/en/CG24/CG24.html); capítulos [8: fórmulas y funciones](https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html), [9: tablas dinámicas](https://books.libreoffice.org/en/CG24/CG2409-PivotTables.html) y [14: Calc como base de datos](https://books.libreoffice.org/en/CG24/CG2414-CalcAsADatabase.html).

| Pregunta | Aspecto auditado | Conclusión |
|---|---|---|
| **T19-001** | Referencias absolutas | **$B$3** fija columna y fila |
| **T19-002** | Copia de fórmulas | `=A1+B1` de C1 a C2 se convierte en `=A2+B2` |
| **T19-003** | Referencias mixtas | **$A1** fija únicamente la columna |
| **T19-004** | Tecla **F4** | Alterna tipos de referencia durante la edición de fórmulas |
| **T19-005** | Rangos | **A2:B4** abarca **6 celdas**, con extremos incluidos |
| **T19-006** | AutoFiltro | Oculta filas que incumplen condiciones, **sin eliminarlas** |
| **T19-007** | Activación AutoFiltro | **Datos > AutoFiltro**, también **Ctrl + Mayús + L** |
| **T19-008** | Ordenación y filtros | Ordenar reorganiza; filtrar afecta a visibilidad |
| **T19-009** | Tabla dinámica | **SUSTITUIDA** pregunta sobre capítulo del manual por obligación de **actualizar manualmente** después de cambiar datos de origen |
| **T19-010** | Porcentajes | **200 × 10 % = 20** |

**Resultado:** **10 preguntas contrastadas** con documentación de Calc 24.2; una reformulada por un supuesto práctico, nueve ampliadas con detalles y trampas relevantes.

> ⚠️ **¡Foco Examen!:** **F4** alterna referencias relativas, absolutas y mixtas; **$A1** fija columna, **A$1** fija fila. Una **tabla dinámica** no actualiza automáticamente sus resultados cuando se modifican sus datos de origen: se usa **Datos > Tabla dinámica > Actualizar**.

### Balance acumulado

- **132 / 138 preguntas** con revisión individual documentada: temas **1–5 y 7–19**.
- **6 preguntas** pendientes de auditoría técnica: **tema 20**.
- **Tema 6** continúa sin banco específico. Los manuales siguen marcados como **BORRADOR**.


---

## 22. Auditoría técnica tema 20 — **26/10/2026**

**Epígrafe oficial:** «Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB».

**Fuentes consultadas:** documentación general de [CPU (Intel)](https://www.intel.com/content/www/es/es/products/docs/processors/what-is-a-cpu.html), [RAM (IBM)](https://www.ibm.com/think/topics/ram), [SSD (IBM)](https://www.ibm.com/think/topics/solid-state-drives), [medios ópticos (Verbatim)](https://www.verbatim-europe.com/en/disc-types), y [uso de escáneres en Windows (Microsoft)](https://support.microsoft.com/es-es/windows/hardware/printer/install-and-use-a-scanner-in-windows).

| Pregunta | Contenido | Resultado |
|---|---|---|
| **T20-001** | **CPU** | Ejecuta instrucciones y operaciones; se diferencia de memoria y almacenamiento |
| **T20-002** | **RAM** | Memoria de trabajo **volátil** |
| **T20-003** | **Escáner / ADF** | **SUSTITUIDA** pregunta genérica por caso práctico de **alimentador automático de documentos (ADF)** para expedientes de múltiples hojas |
| **T20-004** | **SSD externo** | Almacenamiento de estado sólido **no volátil** |
| **T20-005** | **DVD-RW** | Medio óptico **regrabable**, distinto de DVD-R y DVD-ROM |
| **T20-006** | **Impresora dúplex** | **SUSTITUIDA** pregunta redundante de almacenamiento por **impresión a doble cara** automática o manual |

**Resultado:** **6 preguntas cotejadas** y **2 convertidas en casos prácticos**; se cubren procesador, RAM, almacenamiento, lectores/grabadores ópticos, escáner y la impresión. El manual completo sigue sin certificación editorial.

> ⚠️ **¡Foco Examen!:** **RAM** es volátil y **SSD** no volátil; **DVD-RW** es regrabable frente a **DVD-R**. En escáneres, **ADF** alimenta hojas pero **no presupone digitalización automática a doble cara**. **Dúplex de impresora** y **dúplex de escáner** son funciones distintas.

## 23. Cierre de la primera auditoría del banco existente

- **138 / 138 preguntas disponibles** han pasado **revisión documental individual** en **19 temas** (temas **1–5** y **7–20**).
- **Tema 6** carece todavía de preguntas propias y **no se cuenta como auditado**.
- Este **100 %** mide únicamente **la cobertura de auditoría del banco existente**, **no** la cobertura integral del programa oficial, la exhaustividad de los tests, ni una certificación jurídica y técnica definitiva.
- Permanecen **20 manuales** con estado editorial **BORRADOR** y trabajos pendientes de revisión integral, mejora de profundidad, puesta a prueba de la interfaz y resolución de normativa específica del **OAPGT**.


---

## 24. Tema 6: creación de test provisional de alcance limitado — **27/10/2026**

**Seis preguntas documentales provisionales** creadas en `tema-06/preguntas.json` y enlazadas desde el programa principal, sin modificar `estado: BORRADOR`.

**Fuentes institucionales:** [Transparencia de la Diputación](https://transparencia.diputoledo.es/p/2221-convenios-colectivos-y-acuerdos-laborales-vigentes), [normativa de sede del OAPGT](https://sede.oapgt.es/Paginas/Normativa.aspx), [sede electrónica](https://sedeelectronica.oapgt.es/) y [noticia oficial de la Diputación de **2015**](https://www.diputoledo.es/noticias_ampliada/1148).

**Advertencia editorial crítica:** la existencia de estas preguntas **NO acredita** la verificación de los **Estatutos vigentes del OAPGT** ni la consolidación del **Acuerdo Regulador de 2023 con reformas de 2025 y 2026**. La pregunta sobre organización y alta dirección del Consejo Rector está fechada expresamente en **2015** y **no prueba** la situación exacta en **2026**.

| Indicador | Situación comprobada |
|---|---|
| Test con revisión previa documental de temas 1–5 y 7–20 | **138 preguntas** |
| Banco adicional provisional del tema 6 | **6 preguntas**, no certificado |
| Preguntas disponibles en el repositorio | **144** |
| Temas con banco de preguntas | **20/20** |
| Temas con manual finalizado y certificado | **0/20**; todos continúan **BORRADOR** |

> ⚠️ **¡Foco Examen!:** Una fuente que demuestra la existencia de un órgano o la fecha de publicación de un acuerdo **no demuestra el quórum, la mayoría exigida ni las competencias exactas**. Es obligatorio cotejar cada extremo con los **Estatutos completos y vigentes** antes de declararlo materia cerrada.


---

## 25. Avance de cotejo estatutario del tema 6 — **27/10/2026**

**Hallazgo primario decisivo:** publicación oficial de la modificación de Estatutos del **OAPGT**, aprobada por el **Pleno de la Diputación el 28/11/2011**, en el **[BOP Toledo n.º 284, de 14/12/2011](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011)**, anuncio **11024**. Texto del anuncio cotejado directamente.

**Artículos expresamente reformados o añadidos:**

- **Art. 1.1 y 1.2:** carácter administrativo del organismo y **adscripción al Presidente de la Diputación** (modifica la adscripción al Área de Hacienda indicada en documento de **2004**).
- **Art. 4.a:** servicios de información, asistencia, gestión, inspección y recaudación de tributos e ingresos de derecho público, así como procedimiento sancionador, actuaciones catastrales y revisión administrativa, dentro de las competencias delegadas o confiadas.
- **Art. 8 bis:** las resoluciones de órganos de gobierno, dirección y administración **ponen fin a la vía administrativa**.
- **Art. 14.d.1:** actos y resoluciones de Dirección en ámbitos administrativos, tributarios y sancionadores atribuidos.
- **Disposición adicional:** instrucción de procedimientos sancionadores según organigrama aprobado por el **Consejo Rector**, con publicación de la identidad por la **Presidencia del OAPGT**.

**Cambios de banco:** T06-001 y T06-006 sustituidas por preguntas de **arts. 1.2 y 8 bis** con cita del BOP. Se elimina la pregunta histórica de 2015. Conservadas **6 preguntas provisionales** (144 en total en los 20 bancos), todas con cuatro alternativas y solución única.

> ⚠️ **¡Foco Examen!:** Un documento que cita los **Estatutos de 2004** no debe prevalecer sobre una **modificación oficial expresa de 2011** en el mismo precepto. Diferenciar la fecha de aprobación (**28/11/2011**) de publicación (**14/12/2011**).

**Pendiente crítico:** comprobar aprobación definitiva en **2004**, identificar reformas posteriores a **2011**, integrar el **Acuerdo Regulador** y modificaciones hasta **2026**. El estado del tema 6 sigue **BORRADOR, NO CERTIFICADO**; el hallazgo no acredita una consolidación estatutaria completa.


---

## 26. Acuerdo Regulador Diputación: cifras y modificaciones 2025–2026 — **27/10/2026**

**Fuentes oficiales:**
- [BOP Toledo n.º **8**, 14/01/2025, anuncio **223**](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=8&insert_year=2025&publication_date=14012025): actualización económica con efectos **01/01/2025**; guardia presencial de Técnicos Superiores **24,64 €/hora** en 2025.
- [BOP Toledo n.º **10**, 16/01/2026, anuncio **228**](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=10&insert_year=2026&publication_date=16012026): nueva tabla anual de grados; conceptos especiales del artículo **18.III** y Fondo de Acción Social del artículo **28**, efectos económicos y administrativos declarados **01/01/2026**.
- [BOP Toledo n.º **34**, 20/02/2026, anuncio **821**](https://bop.diputoledo.es/webEbop/DocGet?id=26020790%3B0&insert_number=821&insert_year=2026): complemento que fija **nocturnidad especial: 97,45 €**.

**Datos test contrastados de la modificación de enero de 2026 (subgrupo C2):** grados I–IV **712,08 € / 1.151,40 € / 1.655,76 € / 2.457,24 € anuales**; guardia de localización del C2 **212,30 €**; guardia de presencia física de Técnicos Superiores **28,64 €/hora**; Fondo de Acción Social **292.790,00 €**. El anuncio modifica el artículo **18.III.d**, añade **18.III.g** y revisa importes del artículo **28**.

**Cambios del banco del tema 6:** T06-002 ahora pregunta por importe anual **C2, grado I: 712,08 €** y T06-003 por **nocturnidad especial: 97,45 €**, con referencias al anuncio y distinción de cuantías próximas. Se conservan **seis preguntas provisionales** en total (144 en la colección).

> ⚠️ **¡Foco Examen!:** **2025: 24,64 €/hora** de guardia presencial de Técnicos Superiores; **2026: 28,64 €/hora**. **Nocturnidad ordinaria C2/AP: 29,30 €**, **nocturnidad especial: 97,45 €**. No confundir el **Fondo de Acción Social**, cuantía global **292.790,00 €**, con ayuda individual.

**Límites:** no se ha reconstruido el articulado íntegro del Acuerdo de 2023 ni verificado exhaustivamente la ausencia de modificaciones posteriores; tampoco los Estatutos completos del OAPGT. El tema mantiene **BORRADOR**, y las 6 preguntas siguen siendo **PROVISIONALES**.


---

## 27. Cotejo del Acuerdo Regulador original de **2023** — **27/10/2026**

**Fuente oficial completa:** [Acuerdo Regulador, BOP Toledo **n.º 246, 28/12/2023**, texto del anuncio publicado por la Diputación](https://www.diputoledo.es/archivos/transparencia/pdf/61586-acuerdo-marco-2023.pdf). **Aprobación: 21/12/2023**, **entrada en vigor: 01/01/2024**.

**Artículos originales cotejados individualmente** (sin equipararlos todavía a texto consolidado tras reformas):

| Artículo | Cuestiones de examen | Resultado del texto de 2023 |
|---|---|---|
| **2–3** | Ámbito y vigencia | Diputación/organismos autónomos, exclusiones; duración inicial hasta **31/12/2027** y **prórroga automática** |
| **14** | Jornada general y horarios | **No inferior a 35 horas semanales de promedio anual**; **9:00–14:00** fijo en Palacio Provincial y **OAPGT Toledo**, con tramos flexibles |
| **19** | Vacaciones | **22 días hábiles**, escala total por antigüedad **23–26**, calendario antes del **01/05**, conocimiento de fechas con **2 meses** |
| **20** | Permisos | Asuntos particulares **6 días laborables**, disfrute hasta **31/01**; distinciones de días **naturales/hábiles**, requisitos según supuesto |

**Advertencia de vigencia:** las modificaciones conocidas **2025–2026** se han analizado separadamente en el manual. La tabla de permisos del art. 20 procede de **2023**, y su aplicabilidad en **2026** requiere contraste adicional con **TREBEP y Ley 4/2011 CLM** vigentes y, si procede, otras disposiciones imperativas. No interpretar ausencia de reforma expresa en los anuncios examinados como certificación integral de vigencia.

**Preguntas nuevas:** T06-007 a T06-012 sobre art. **14** (jornada y horario), **19** (vacaciones y antelación), **20** (asuntos particulares) y **3** (vigencia). Se añaden sin eliminar el resto; tema 6 pasa de **6 a 12 preguntas provisionales**.

| Indicador de OpoWeb2 | Situación |
|---|---|
| Bancos de preguntas | **20 de 20 temas** |
| Preguntas existentes totales | **150 = 138 anteriormente auditadas + 12 provisionales del tema 6** |
| Preguntas del tema 6 | **12**, aún en **BORRADOR**, no certificadas |
| Manuales con auditoría completa certificada | **0 de 20** |

> ⚠️ **¡Foco Examen!:** **22 días hábiles de vacaciones** no son **22 naturales**. **23, 24, 25 y 26 días** por antigüedad son **totales**. **6 días laborables de asuntos particulares** no son vacaciones. El **horario fijo de 9:00–14:00** es solo el núcleo presencial administrativo del art. 14.1.a.

**Pendiente:** consolidar todos los artículos del acuerdo inicial con reformas y legislación vigente; cotejar todas las reformas de Estatutos del **OAPGT**. **No marcar PUBLICADO**.


---

## 28. Permisos y conciliación: contraste del Acuerdo 2023 con TREBEP 2026 — **27/10/2026**

**Fuentes:** [Acuerdo Regulador BOP 246/2023](https://www.diputoledo.es/archivos/transparencia/pdf/61586-acuerdo-marco-2023.pdf), [TREBEP, arts. 48–50, actualización 03/10/2026](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719) y [Ley 4/2011 CLM, arts. 101–108, consolidación BOE publicada hasta 21/03/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752).

**Advertencia:** la ficha BOE de la **Ley 4/2011** señala una «última actualización en proceso». Existen modificaciones autonómicas de **2026** no integradas completamente en esa vista; el cotejo no equivale a un texto autonómico plenamente consolidado a **27/10/2026**.

| Hecho causante | TREBEP vigente | Riesgo de test |
|---|---|---|
| **Accidente/enfermedad grave, hospitalización e intervención con reposo**: cónyuge, pareja, primer grado o conviviente necesitado de cuidados | **5 días hábiles** (art. **48.a**) | No confundir con fallecimiento |
| Idéntico supuesto, familiar **segundo grado** | **4 días hábiles** (art. **48.a**) | No exigir cambio de localidad para esta duración |
| **Fallecimiento**: cónyuge, pareja o primer grado | **3 días hábiles** misma localidad; **5** distinta | Se distingue localidad |
| **Fallecimiento**: segundo grado | **2 días hábiles** misma localidad; **4** distinta | Se distingue parentesco y localidad |
| **Lactancia** de menor de **12 meses** | **1 hora** de ausencia divisible en **dos fracciones**, **derecho individual no transferible** (art. **48.f**) | No usar reglas autonómicas históricas ligadas exclusivamente a la madre |
| **Asuntos particulares** | **6 días** (art. **48.k**) | Consultar condiciones de disfrute propias del acuerdo |
| **Matrimonio o pareja formalizada** | **15 días** (art. **48.l**), incluyendo constitución formalizada por **documento público** | No reducirlo al único supuesto de inscripción registral |
| **Permiso por nacimiento de la madre** | **19 semanas**, o **32 semanas en monoparentalidad** (art. **49.a**), con régimen transitorio del RDL **9/2025** | **16 semanas** del art. **102** de la vieja consolidación de Ley 4/2011 no es regla general aplicable de 2026 |
| **Donación de órganos/tejidos: actos preparatorios** | **Tiempo indispensable**, desde **03/03/2025** (art. **48.m**) | Puede no aparecer en textos locales anteriores |
| **Vacaciones** | **22 días hábiles** (art. **50**) | No confundir con días naturales |

**Nuevo hallazgo adicional:** el **art. 49.e TREBEP** fue modificado por la **Ley 4/2026, de 1 de octubre**, publicada el **03/10/2026**, con entrada en vigor señalada por el BOE para **23/10/2026**. **Corrección tras auditoría de 27/10/2026:** el **49.e** es reducción de jornada por cuidado de menor con cáncer u otra enfermedad grave, **NO** el permiso parental, que figura en **49.g**. Ver §29.

**Cambios de test:** incorporadas **4 preguntas nuevas**, **T06-013–016**, de los arts. **48.a, 48.f y 49.a TREBEP**. Quedan **16 preguntas provisionales de tema 6** y **154 preguntas en total en OpoWeb2** (138 de los otros temas y 16 provisionales). La comparación normativa **no da por cerrados los Estatutos del OAPGT ni el manual completo**.

> ⚠️ **¡Foco Examen!:** **5/4** días por **hospitalización** según grado frente a **3/5 y 2/4** por **fallecimiento** según grado y localidad. El permiso por nacimiento general es **19 semanas** según el TREBEP reformado, no **16** de la redacción autonómica antigua.

**Estado final: BORRADOR PARCIAL, no certificado.**


---

## 29. Reforma TREBEP octubre de 2026: corrección **49.e frente a 49.g** — **27/10/2026**

**Fuente primaria:** [Ley 4/2026, BOE-A-2026-20528](https://www.boe.es/buscar/act.php?id=BOE-A-2026-20528), **disposición final undécima**, publicada el **03/10/2026**, en vigor desde **23/10/2026**; [TREBEP actualizado, art. 49](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719).

**Fe de erratas editorial:** en el apartado 13.2 del manual se había identificado erróneamente el **49.e** como «permiso parental». **CORREGIDO EN ORIGEN** y documentado en nueva sección 14 del manual.

| Norma | Objeto correcto | Datos determinantes |
|---|---|---|
| **49.e TREBEP**, reformado por **Ley 4/2026** | Reducción de jornada para cuidado de persona con **cáncer u otra enfermedad grave** | Regla ordinaria de **al menos media jornada**, edades generales **23** y **26 años** bajo condiciones; **prórroga excepcional** por **gran discapacidad o gran dependencia** más allá de límites de edad con acreditación de cuidados directos, continuos, permanentes y convivencia |
| **Nuevo párrafo del 49.e** | Reducción simultánea compartida | Hasta **100 % conjunto** entre dos progenitores o figuras asimiladas, en supuestos excepcionales de asistencia intensa, sin implicar doble remuneración íntegra automática |
| **49.g TREBEP**, reformado por **RDL 9/2025**, no por Ley 4/2026 | Permiso parental | **Hasta 8 semanas**, **no retribuido**, hasta que el menor cumpla **8 años**, derecho individual e intransferible y **15 días** de preaviso en los términos del precepto |
| **49.a–c TREBEP** | Permisos por nacimiento, adopción o progenitor diferente | **19 semanas** en régimen general, incluyendo **2 semanas** disfrutables hasta **8 años** bajo las reglas de esos permisos; **no equivalentes** al 49.g |

**Preguntas incorporadas:** T06-017, T06-018, T06-019 y T06-020 sobre identificación del precepto modificado, requisitos de prolongación, máximo compartido **100 %** y diferencia con el permiso parental de **8 semanas**. Revisión documental con cita específica del BOE.

> ⚠️ **¡Foco Examen!:** La **Ley 4/2026** añadió **dos párrafos al 49.e**, **no al 49.g**. **100 % de reducción es máximo conjunto**, no de cada progenitor. **8 semanas no retribuidas** del permiso parental no deben confundirse con las **2 semanas** adicionales del nacimiento.

**Balance de repositorio:** **158 preguntas disponibles** (138 auditadas documentalmente en temas **1–5, 7–20** y **20 provisionales** del **tema 6**). El tema 6 y todos los manuales siguen en **BORRADOR**; la cobertura de preguntas no implica certificación del programa.


---

## 30. Ley 4/2011 CLM: delimitación real de reformas de **2026** — **27/10/2026**

**Fuentes oficiales consultadas:** [ficha BOE de Ley 4/2011](https://www.boe.es/eli/es-cm/l/2011/03/10/4); [Ley 1/2026, de 26/03, DOCM 61 de 30/03/2026](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90065); y [Ley 2/2026, de 09/04, DOCM de 16/04/2026](https://www.boe.es/buscar/doc.php?id=DOCM-q-2026-90086).

| Norma modificativa | Artículos de la **Ley 4/2011** afectados | Materia |
|---|---|---|
| **Ley 1/2026**, art. **16** | **121.1** | Excedencia voluntaria por prestación de servicios en el sector público |
| **Ley 1/2026**, art. **16** | **Disposición adicional 7.ª.6** | Abono de determinados complementos mientras se mantiene relación de servicios con JCCM o entes vinculados |
| **Ley 2/2026**, disposición final **3.ª** | **70.2**, nueva letra **e)** | Libre designación en determinados puestos de personal estatutario del **SESCAM** por referencia a **Ley 55/2003** y desarrollo |

**Conclusión verificable:** estas reformas **no modifican directamente** los **arts. 101–108** de la Ley 4/2011, aunque esos preceptos **no pueden enseñarse aisladamente como derechos de 2026** sin confrontarlos con las reformas del **TREBEP**.

**Aviso de fuente:** la versión consolidada en BOE informa de **última actualización integrada de 21/03/2024** y de «última actualización en proceso». Para las modificaciones de **2026** se consultan sus publicaciones autónomas. No presentar la página consolidada desactualizada como reproducción literal íntegramente vigente.

**Cambios de repositorio:**
- **Tema 6 manual**, nueva sección **15**: matriz de reforma con separación de empleo público, permisos y legislación básica estatal.
- **Tema 7 manual**, bloque adicional sobre **art. 70.2.e Ley 4/2011**, sin alterar el carácter normal del **concurso** (art. 67.2).
- **Tema 7 preguntas.json**, nueva **T07-007** sobre la reforma de libre designación.

> ⚠️ **¡Foco Examen!:** **Ley 1/2026 → 121.1 y DA 7.ª.6**; **Ley 2/2026 → 70.2.e**. Ninguna de ellas reformó directamente **101–108**. **Concurso** sigue siendo forma normal de provisión, y la nueva libre designación **no es general para todos los puestos**.

**Balance acumulado del banco:** **159 preguntas**: **139** en temas **1–5 y 7–20** (incluye la nueva pregunta de tema 7), más **20 provisionales del tema 6**. Manuales **BORRADOR** hasta auditoría íntegra.


---

## 31. OAPGT: cotejo de órganos y competencias con BOP **2023–2026** — **27/10/2026**

**Fuentes originales:** [BOP Toledo **92/2023**, 16/05/2023, anuncio 2824](https://bop.diputoledo.es/webEbop/DocGet?id=23058163%3B0&insert_number=2824&insert_year=2023); [BOP **46/2026**, 10/03/2026, anuncio 999](https://bop.diputoledo.es/webEbop/DocGet?id=26030965%3B0&insert_number=999&insert_year=2026); [BOP **216/2025**, 11/11/2025, anuncio 5523](https://bop.diputoledo.es/webEbop/DocGet?id=25113534%3B0&insert_number=5523&insert_year=2025).

| Órgano | Función documentada | Control de fiabilidad |
|---|---|---|
| **Consejo Rector** | Contratación en materias no atribuidas a otros órganos, posible delegación (**art. 10.k citado en 2023**) | Función específica citada; no constituye listado completo vigente |
| **Presidencia** | Representación del OAPGT (**art. 12.1 citado en 2023**) | Los actos por delegación de representación deben indicarlo |
| **Dirección** | Gestión y representación administrativa (**art. 14 y 14.d.17**), incluida representación en fiscalización y responsabilidad contable por delegación publicada | Delegación concreta **2023** |
| **Consejo Rector**, a propuesta de **Presidencia** | Aceptación de delegaciones tributarias de municipios según informe reproducido en **BOP 46/2026** | Menciona **art. 12.2.m**, numeración que precisa contraste estatutario íntegro |
| **Dirección General** | Calendario de días inhábiles del registro electrónico para **2026**, por atribuciones y habilitación | Resolución publicada en **2025**, no enumeración completa de competencias |

**Cuestión editorial crítica:** una publicación de **2023** invoca **art. 10.k** para Consejo Rector y un informe municipal de **2026** cita **art. 12.2.m** al referirse a la aceptación por el Consejo. No inferir sistemáticamente qué dice la totalidad del art. 12 ni **corregir la cita de oficio** sin los Estatutos definitivos y todas las modificaciones.

**Banco actualizado:** T06-021 a T06-023, tres cuestiones originales sobre contratación de Consejo Rector, efectos jurídicos de delegar representación en Dirección y aceptación de delegaciones municipales. **Tema 6: 23 preguntas provisionales; repositorio: 162 preguntas**, las **139** de otros temas y **23** del tema 6. Las 3 nuevas quedan expresamente referidas a los **actos publicados**, no a una certificación íntegra de Estatutos.

> ⚠️ **¡Foco Examen!:** **Dirección** puede ejercer **representación por delegación** sin que desaparezca la titularidad del **órgano delegante**. En el caso de **Tembleque (2026)** la **aceptación de la delegación municipal** se atribuye al **Consejo Rector**, **a propuesta de Presidencia**. El **30/10** citado es un plazo de **convenio concreto** y no debe generalizarse a todas las delegaciones.

**Pendiente bloqueante:** localizar la aprobación definitiva de la reforma de **2004** y la cadena de cambios posteriores a **2011**, para acreditar quórums, mayorías, composición y régimen de sesiones a fecha de **2026**. **Manual en BORRADOR NO CERTIFICADO**.


---

## 32. BOP oficiales de 2011, 2017 y 2019: cotejo de genealogía y sede del OAPGT — **27/10/2026**

**Nuevas fuentes primarias contrastadas:**
- [BOP Toledo **225, 27/11/2017**, anuncio **5876**](https://bop.diputoledo.es/webEbop/DocGet?id=17110192%3B0&insert_number=5876&insert_year=2017): acuerdo del **Consejo Rector del 22/11/2017** que crea sede electrónica **https://sede.oapgt.es**, atribuye **titularidad al OAPGT**, gestión administrativa a **órganos competentes conforme a Estatutos**, gestión tecnológica a **unidad de sistemas**, habilita a **Dirección** para instrucciones de desarrollo y **revoca el acuerdo de 10/04/2015**.
- [BOP Toledo **284, 14/12/2011**, anuncio **11024**](https://bop.diputoledo.es/webEbop/DocGet?id=11121715%3B0&insert_number=11024&insert_year=2011), ordinal **quinto**: añade una **disposición adicional** sobre instructores de procedimientos sancionadores; **Consejo Rector** aprueba el organigrama y **Presidencia** publica la identidad de los titulares instructores.
- [BOP Toledo **188, 03/10/2019**, anuncio **5164**, pág. 2](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=188&insert_year=2019&publication_date=03102019): aplicación de dicha disposición en nombramiento de una instructora; el anuncio atribuye la disposición adicional a los Estatutos originarios de **1996**, lo que **contradice la adición expresa publicada en 2011**.

**Resolución de discrepancia de fuentes:** el acto normativo de **2011** es fuente preferente para determinar **cuándo se añade la disposición**; el anuncio de **2019** demuestra su aplicación, pero no acredita su origen en **1996**. Queda registrada la inconsistencia y no se incorpora la fecha incorrecta a preguntas.

**Pregunta T06-024:** gestión tecnológica de la sede: unidad de **sistemas de información y comunicación** del OAPGT, según acuerdo de **2017**. **Pregunta T06-025:** organigrama de instructores sancionadores aprobado por **Consejo Rector**, conforme disposición adicional de **2011**. Dos preguntas con cuatro opciones, explicación y documento primario.

**Límite:** no se ha encontrado todavía la publicación **definitiva** de los Estatutos inicialmente modificados en **2004** ni texto consolidado integral vigente a **2026**. Composición del **Consejo Rector**, quórum y mayorías **NO CERTIFICADOS**.

**Balance:** **164 preguntas** en OpoWeb2: **139** de temas **1–5 y 7–20**, y **25 provisionales** del tema 6. Temas y manuales continúan en estado **BORRADOR**.

> ⚠️ **¡Foco Examen!:** **Titular de sede = OAPGT**, **gestión tecnológica = sistemas**, **gestión administrativa = órganos competentes**. La disposición adicional sobre instructores fue **añadida oficialmente en 2011**, aunque un acto de **2019** la sitúe erróneamente en **1996**.


---

## 33. Verificación de competencia de Dirección del OAPGT en acto oficial de **2026** — **28/10/2026**

**Fuente original visualmente contrastada:** [**BOP Toledo n.º 36, 24/02/2026, página 3**, Resolución **3902/2026**](https://bop.diputoledo.es/webEbop/DocGet?anexo=0&bop=36&insert_year=2026&publication_date=24022026), dictada **17/02/2026** por la **Dirección General del OAPGT**.

**Hallazgos de examen:**
- El **Director General** invoca el **art. 14 de los Estatutos** para aprobar los **padrones del IVTM 2026** en municipios que delegaron su gestión.
- El anuncio establece **30 días hábiles** de **exposición** del padrón; **1 mes** para el **recurso de reposición**, contado **desde el día siguiente al final de la exposición** (art. **14.2 TRLRHL**).
- El período de pago del **IVTM de ese padrón 2026** es **01/03/2026–04/05/2026**, ambos inclusive: **dato del caso**, no plazo estatutario general.
- El **art. 14 de los Estatutos OAPGT** invocado en la aprobación es diferente del **art. 14.2 TRLRHL** citado para el recurso de reposición.

**Contraste histórico de fuentes:** la reproducción de los Estatutos iniciales publicada el **11/10/1996** señala **Plaza de la Merced 4** como domicilio de esa versión histórica; el proyecto inicialmente aprobado el **21/12/2004** menciona **Calle Real 4**. El **[directorio oficial DIR3, unidad LA0000580](https://administracion.gob.es/espanaadmon/quienesquien/ficha-unidad-organica?selectorServicio=organigramasEstructurasDirectorios&selectorget=LA0000580)** documenta hoy **Calle Real 4** como dirección administrativa, **sin demostrar por sí mismo la aprobación definitiva de la reforma de 2004**.

**Cambios de banco:** añadidas **T06-026** (órgano que aprueba padrones IVTM según **BOP 36/2026**) y **T06-027** (**30 días hábiles** de exposición frente a **1 mes** de reposición). **Tema 6: 27 preguntas provisionales. OpoWeb2: 166 preguntas en total** (139 de los demás temas y 27 del tema 6).

> ⚠️ **¡Foco Examen!:** **Dirección General OAPGT: art. 14 Estatutos, aprobación de padrón IVTM 2026.** **Recurso de reposición: art. 14.2 TRLRHL, 1 mes** tras exposición de **30 días hábiles**. Coinciden en el **número del artículo (14)** pero se refieren a **normas y funciones distintas**.

**Investigación estatutaria no cerrada:** continúa sin aparecer publicación definitiva comprobada del expediente de reforma **2004**, ni cadena exhaustiva de reformas posteriores. No certificar composición, quórums ni mayorías. El tema permanece **BORRADOR**.


---

## 34. Hallazgo institucional independiente: Tribunal de Cuentas sobre OAPGT — **28/10/2026**

**Fuente oficial:** [BOE-A-2025-6457, **31/03/2025**, Informe de fiscalización de la gestión tributaria delegada, apartado **II.1.7 Diputación de Toledo**, p. **43585**](https://www.boe.es/boe/dias/2025/03/31/pdfs/BOE-A-2025-6457.pdf). **Período fiscalizado: ejercicio 2019**. Informe aprobado por el Tribunal de Cuentas **27/10/2022**; resolución de la Comisión Mixta **19/12/2024**.

**Organización descrita para el período fiscalizado:** **Consejo Rector** integrado por **Presidencia, dos Vicepresidencias y cinco vocales**; **Consejo Asesor** compuesto por los miembros del Consejo Rector más **diez alcaldes** elegidos por el **Pleno de la Diputación**, con funciones **consultivas**, **sin funciones ejecutivas**. El informe menciona oficina central y **nueve oficinas territoriales**.

**Importante:** aunque su publicación sea de **2025**, el informe presenta resultados referidos a **2019**. **NO se certifica con esta fuente la composición en 2026**. La fuente ofrece corroboración independiente de la separación **Consejo Rector / Consejo Asesor**, pero no sustituye el texto definitivamente aprobado de los Estatutos ni sus modificaciones.

**Resultado:** añadido el bloque **19** al manual del tema 6, con matriz de jerarquía y límites probatorios. **No se añaden preguntas que presenten cifras de 2019 como estatutos vigentes**. El banco permanece en **166 preguntas totales**, **27 provisionales del tema 6**, y el manual continúa **BORRADOR NO CERTIFICADO**.

> ⚠️ **¡Foco Examen!:** **Consejo Rector** con funciones ejecutivas frente a **Consejo Asesor** consultivo según la fiscalización. No trasladar el número de integrantes documentado en **2019** al examen de **2026** sin cotejar la disposición estatutaria vigente.
