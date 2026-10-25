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
