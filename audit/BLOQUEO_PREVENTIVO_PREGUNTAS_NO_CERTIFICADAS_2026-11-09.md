# OpoWeb — bloqueo preventivo de preguntas pendientes de fuente primaria (09/11/2026)

## Problema detectado

La aplicación de entrenamiento excluía de sus bancos solo el **tema 6 de Diputación C2** sobre los Estatutos OAPGT. El **tema 22 de Diputación C1** también dependía de la consolidación íntegra de dichos Estatutos y el **tema 13 de Olías del Rey** carecía del cotejo del listado íntegro de vías del **INE**. Sin embargo, ambos se ofrecían como tests; además, el tema 13 intervenía en los dos simulacros de Olías.

## Reparación y trazabilidad

| Convocatoria | Tema | Estado del manifiesto conservado | Intervención |
|---|---|---|---|
| **Diputación C1** | **22** | `EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES` | Excluir el banco provisional del entrenamiento |
| **Diputación C2** | **6** | `BORRADOR` | Mantener exclusión ya existente |
| **Olías C2** | **13** | `EN_AUDITORIA` | Excluir banco y sustituir **4 referencias** en simulacros |

**Sustituciones exclusivas para simulacros Olías**:

| Simulacro | Pregunta no certificada retirada | Referencia sustituta existente |
|---|---|---|
| **OLIAS-SIM-EXAM-01** | `OLIAS-T13-001` | `OLIAS-T12-003` |
| **OLIAS-SIM-EXAM-01** | `OLIAS-T13-002` | `OLIAS-T14-003` |
| **OLIAS-SIM-EXAM-02** | `OLIAS-T13-004` | `OLIAS-T12-006` |
| **OLIAS-SIM-EXAM-02** | `OLIAS-T13-005` | `OLIAS-T14-006` |

Los nuevos identificadores han sido comprobados contra sus bancos originales; cada simulacro conserva **50 preguntas teóricas + 20 psicotécnicas**, sin duplicados dentro de cada modelo. Los ejercicios son **modelos de elaboración propia**, nunca exámenes oficiales.

La pantalla de práctica informa ahora de los bloqueos. Se actualizó la referencia de caché a `assets/practice.js?v=2026.11.09.2`.

## Evidencia técnica y prueba de regresión

- Se comprobó por inspección de archivos de GitHub que las **tres reglas de exclusión** aparecen en `loadQuestionBanks(call)`.
- Se verificaron **2 simulacros de 70 preguntas**, ambos con **50 identificadores teóricos**, **20 ítems psicotécnicos**, **70 identificadores únicos** y **0 referencias a OLIAS-T13**.
- Se creó `tests/validate-practice-blocked-themes-20261109.mjs` y se añadió al flujo `.github/workflows/validate.yml`.
- Se adaptaron comprobaciones de versión JS de **UC3M** y **Diputación C2**.

**Limitación de evidencia:** no se ha confirmado la conclusión de la ejecución de GitHub Actions del commit actual, ni una prueba E2E completa en navegadores reales. El acceso público a la ejecución por la vía disponible no ha proporcionado resultados verificables. **No marcar CI verde por inferencia.**

**Fuentes documentales pendientes para desbloquear:** BOP oficiales originales y reforma definitiva de los Estatutos OAPGT; paquete **VIAS/PSEU** del INE de municipio **45122** y contrastes de publicación para el tema 13 de Olías.

> ⚠️ **¡Foco Examen!:** Que un banco de preguntas exista como **JSON** no acredita su validez jurídica. Si el tema sigue **BORRADOR** o **EN_AUDITORIA** por falta de fuente primaria, no debe presentarse como entrenamiento certificado.

**Resultado:** mejora editorial y funcional parcial real; **certificación integral del portal no alcanzada**. No se han modificado los estados de los temas ni se ha declarado validado un contenido jurídico no contrastado.
