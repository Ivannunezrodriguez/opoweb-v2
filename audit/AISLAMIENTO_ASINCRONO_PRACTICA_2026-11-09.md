# OpoWeb — aislamiento de cargas de convocatorias (09/11/2026)

## Incidencia funcional

El motor `assets/practice.js` utilizaba el objeto global `activeCall` durante operaciones asíncronas de `fetch()`. Si dos convocatorias se seleccionaban mientras sus bancos seguían cargando, una respuesta tardía podía escribir `programme`, `questionMap`, `supuestos` o `simulacros` de una selección anterior sobre el entrenamiento visible de otra convocatoria.

Esto suponía riesgo de **preguntas o datos de convocatoria errónea** y no equivalía a mera diferencia visual.

## Corrección incorporada

- Captura explícita de `call` para la carga de **programa, bancos, supuestos, simulacros y repasos**.
- Contador `latestCallLoad` y comprobación `requestId !== latestCallLoad` tras cada fase asíncrona que pudiera modificar la selección visible.
- Los errores de carga de repasos complementarios se almacenan **localmente** hasta confirmar cuál es la petición actual. Una carga UC3M caducada no puede contaminar los avisos de otra convocatoria.
- Un fallo de una selección anterior no sustituye por error la interfaz de la selección más reciente.
- La página `practice.html` utiliza la versión de recurso **2026.11.09.1**, evitando que el navegador se quede con la versión anterior.

## Regresión y compatibilidad

| Control | Resultado documental |
|---|---|
| Prueba simulada de dos cargas fuera de orden | Añadida `tests/validate-practice-concurrent-calls-20261109.mjs` |
| Inclusión en GitHub Actions | Añadida a `.github/workflows/validate.yml` |
| Integración de **162** preguntas adicionales UC3M | Validador histórico adaptado a `loadExtraRepasos(call)` |
| Diputación C2, exclusión de **T6 OAPGT** | Validador de ruta adaptado a `loadQuestionBanks(call)` |
| Concordancia de versión HTML y pruebas | Actualizadas ambas aserciones |

La prueba nueva ejecuta la función original `loadCall()` en un entorno simulado, retrasa artificialmente la carga de la convocatoria **A** y permite completar antes la **B**. Después entrega la respuesta tardía **A** y verifica que **B** conserve banco, programa e interfaz.

**Límite:** se ha cotejado la presencia y consistencia de los cambios en el repositorio, pero **no se ha obtenido evidencia del resultado final de GitHub Actions ni una ejecución E2E en navegador** de esta versión. No elevar porcentaje de certificación ni declarar éxito del CI hasta recuperar la ejecución de dicho commit.

> ⚠️ **¡Foco Examen!:** Las preguntas deben permanecer asociadas a **su convocatoria**: aunque dos programas compartan materias, eso no autoriza a utilizar inadvertidamente el banco del otro por una respuesta de red tardía.

## Estado

**Corrección publicada. Certificación integral OpoWeb: NO alcanzada.** Las reservas legales ya identificadas de OAPGT, Olías e UC3M permanecen sin cambios.
