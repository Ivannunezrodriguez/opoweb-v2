# Certificación funcional parcial — rutas a temas sin preguntas (09/11/2026)

## Incidencia reproducible por lectura de código

**Situación previa:** el banco del **tema 6 de Diputación C2** se excluía deliberadamente en `loadQuestionBanks()` por no existir aún certificación de los **Estatutos OAPGT**. El enlace directo `practice.html?convocatoria=diputacion-toledo-auxiliar-c2-2026&tema=6` sí intentaba lanzar `startThemeTest(6)`; este método enviaba el array vacío a `renderExercise()`. El corrector calculaba `Math.round((correct / primaryCount) * 100)` con **primaryCount = 0**, por lo que podía producir **NaN** y registrar un intento sin preguntas.

## Reparación

`assets/practice.js` ahora interrumpe `startThemeTest()` cuando no existen preguntas, vuelve al centro de entrenamiento e inserta un aviso `role=status` que explica que no se ha realizado ni calificado un examen. Conserva la exclusión jurídica del **tema 6 de Diputación C2**, sin introducir preguntas provisionales.

## Control de regresión

`tests/validate-practice-empty-theme-20261109.mjs` comprueba:

- La reserva formal **BORRADOR** del tema **C2 T6**.
- Que el banco se siga excluyendo de la práctica evaluable.
- Que `startThemeTest()` controle el array vacío antes de invocar `renderExercise()`.
- Que el aviso sea accesible y explícito.

La prueba se ha incorporado a `.github/workflows/validate.yml`.

## Nivel de comprobación

**Comprobación estructural de las fuentes recuperadas en GitHub: correcta**; se constató que el guard precede a la llamada al ejercicio y que el paso de CI está presente.

**No comprobado todavía:** ejecución efectiva del job de GitHub Actions para el commit final, prueba con navegador real (URL directa, teclado, lector de pantalla, móviles y estado de almacenamiento), ni certificado general del portal. La inspección de código no reemplaza E2E.

> ⚠️ **¡Foco Examen!:** Un archivo de preguntas **BORRADOR** no debe aparecer como examen evaluable. **Bloqueo jurídico** y **falta de preguntas** deben producir una información clara, no una nota numérica inválida.

**Estado global:** sin cambio. La certificación integral sigue pendiente de cotejo legal y E2E.
