# Auditoría transversal · La Puebla de Montalbán · Tema 6

**Fecha:** 24 de julio de 2026  
**Estado fase 2:** EN_REVISION

## Alcance revisado

- `manual.md`
- `matriz.json`
- `preguntas.json`
- coherencia entre epígrafe, cobertura normativa, banco de preguntas y metadatos editoriales

## Resultado jurídico y de cobertura

La estructura del tema cubre los incisos oficiales mediante la Ley 4/2011, de 10 de marzo, del Empleo Público de Castilla-La Mancha:

- clases de personal empleado público: artículos 4 a 15;
- oferta de empleo público: artículo 19, con contexto de los artículos 16 a 18;
- selección: artículos 37 a 55;
- carrera profesional: artículos 62 a 64 y 66;
- promoción interna: artículos 62 y 65;
- provisión y movilidad: artículos 67 a 82.

El manual y la matriz incorporan expresamente la modificación del artículo 70.2 efectuada por la Ley 2/2026, vigente desde el 6 de mayo de 2026. No se aprecia, en esta pasada interna, una contradicción material entre el manual, la matriz y las preguntas.

## Trazabilidad

Las doce preguntas incluyen cuatro opciones, solución, justificación, advertencia de examen y referencia al apartado correspondiente del manual. La cobertura se concentra en conceptos de alta probabilidad de examen: clases de personal, interinidad, OEP, discapacidad, sistemas selectivos, promoción, carrera y provisión.

## Incidencias editoriales y técnicas

1. El título conserva el sufijo `Manual reconstruido`.
2. Se mantiene visible un mensaje interno sobre el proceso de reconstrucción.
3. Las partes del manual utilizan encabezados de nivel `#`, aunque debe existir un único título principal.
4. Persisten llamadas destacadas no homogéneas, como `Trampa` o `Importancia para esta oposición`, junto al patrón normalizado de foco de examen.
5. `preguntas.json` utiliza el estado `GENERACION_DESDE_CERO`, no incluido en los estados editoriales normalizados.
6. El esquema de claves de `preguntas.json` (`pregunta`, `correcta`, `trampa`) difiere del empleado en otros temas (`enunciado`, `respuestaCorrecta`, `trampaExamen`). Debe comprobarse qué contrato consume actualmente la aplicación antes de normalizarlo.
7. La fecha de revisión normativa de `matriz.json` figura como 17 de julio de 2026, mientras que el manual indica 23 de julio de 2026.

## Próxima acción

Normalizar portada, jerarquía, llamadas destacadas, estado y fechas. Unificar el esquema JSON solo después de verificar el contrato del frontend para evitar romper la carga de preguntas. Preservar la cobertura jurídica y las anclas internas.
