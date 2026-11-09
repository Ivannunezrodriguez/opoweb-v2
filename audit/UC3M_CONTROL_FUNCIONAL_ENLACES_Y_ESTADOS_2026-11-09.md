# UC3M — control funcional de enlaces profundos y estados de auditoría (09/11/2026)

## Incidencia corregida

En `assets/practice.js`, `loadCall(id)` ejecutaba `history.replaceState` para reducir la URL a `?convocatoria=...`; después intentaba leer `?tema=N` de `location.search`, que **ya no lo contenía**. Los enlaces a tests específicos, incluidos los de las convocatorias distintas de UC3M, terminaban en el centro de entrenamiento en vez del tema esperado.

### Solución publicada

- `loadCall(id, requestedTheme = null)` recibe el tema **antes** de normalizar la URL.
- Se admite únicamente un **entero de 1 a themeCount**, conservado en `?tema=N`.
- La función `boot()` captura `params.get('tema')` antes de llamar a `loadCall`.
- Los cambios de convocatoria con el selector llaman a `loadCall(id)` sin tema, de modo que **no se hereda** un tema de la convocatoria anterior.
- Si el tema carece de banco evaluable por reserva legal, se conserva el aviso de que **no se ha iniciado ni calificado ningún ejercicio**.

El panel de UC3M muestra ahora el número **dinámico** de temas `AUDITADO` y los números de los que siguen `EN_REVISION_USUARIO`, mediante el manifiesto realmente cargado. Cada tarjeta señala **AUDITADO documental** o **EN REVISIÓN jurídica**. La práctica no presenta las preguntas pendientes como legalmente certificadas, pero permite entrenarlas con advertencia. Se ha incrementado el identificador de versión del script a `2026.11.09.3` para evitar caché antigua.

## Pruebas y evidencia

- [**Validación de deep links**](../tests/validate-practice-deeplink-20261109.mjs): URLs válidas, tema inexistente, cero, decimal, ausencia de tema y no-herencia entre convocatorias.
- [**Validación del estado editorial visible**](../tests/validate-practice-uc3m-editorial-status-20261109.mjs): aviso dinámico de UC3M, reservas T18–T19 y versión de caché.
- Ambas comprobaciones se han añadido al [**workflow de CI**](../.github/workflows/validate.yml).
- Durante esta sesión se **ejecutaron las aserciones de ambos tests en memoria sobre el código recuperado de GitHub**, con resultado satisfactorio, y se comprobó que `assets/practice.js` se puede analizar sintácticamente. **No se ha confirmado todavía una ejecución del workflow en GitHub Actions ni realizado E2E en un navegador real**.

## Límites jurídicos y datos pendientes

El manifiesto tiene **15/20 `AUDITADO`** y **5/20 `EN_REVISION_USUARIO`** (**T10, T15, T16, T18 y T19**). La [**fecha oficial de publicación de la resolución definitiva de admitidos**](https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026) sigue sin fecha primaria comprobada. El **Volumen I de Normas Básicas de Gestión 2026**, al que apunta la [colección de presupuestos oficial UC3M](https://www.uc3m.es/conocenos/informacion-economica), no se ha podido leer desde el acceso público utilizado; por ello **T18 y T19 no se promueven** pese a la corroboración secundaria de algunos artículos.

> ⚠️ **¡Foco Examen!:** Una tarjeta **EN REVISIÓN jurídica** permite practicar de forma orientativa, pero **no** garantiza que su respuesta sea la exigible en la fecha de corte oficial de las bases. **AUDITADO** no equivale a `CERTIFICADO_INTEGRAL`.
