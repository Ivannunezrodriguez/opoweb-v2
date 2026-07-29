# Auditoría transversal · La Puebla · Tema 6

Fecha: **30 de julio de 2026**.

Estado editorial: `EN_REVISION`.

## Comprobaciones realizadas

- Verificada la matriz del tema y actualizada la fecha de revisión normativa.
- Confirmada la incorporación de la modificación del artículo 70.2 de la Ley 4/2011 realizada por la Ley 2/2026, vigente desde el 6 de mayo de 2026.
- Revisado el banco de 12 preguntas y normalizado su estado a `APROBADO_USUARIO`.
- Verificado el contrato real del frontend en `assets/app.js`.

## Contrato frontend

La función `normaliseQuestions` admite simultáneamente:

- `pregunta` o `enunciado`;
- `correcta` o `respuestaCorrecta`;
- `trampa` o `trampaExamen`.

Por tanto, el formato del banco del Tema 6 es compatible con el lector actual y la incidencia específica queda cerrada.

## Pendientes

- Normalización editorial del manual: portada histórica y metadatos internos.
- Homogeneización de llamadas de examen.
- Validación visual de enlaces y esquema final.

El tema no se marca como `CERRADO_FASE_2`.