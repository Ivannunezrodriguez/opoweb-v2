# Auditoría transversal · La Puebla · Tema 11

**Fecha:** 25 de julio de 2026  
**Estado:** EN_REVISION

## Alcance revisado

- `manual.md`
- seis capítulos modulares enlazados desde el manual
- `matriz.json`
- `preguntas.json`
- trazabilidad normativa declarada

## Resultado jurídico

La cobertura coincide con el epígrafe oficial: recaudación local, periodo voluntario, aplazamiento y fraccionamiento, compensación, devolución de ingresos indebidos, periodo ejecutivo, providencia de apremio, embargo, enajenación, terminación y tercerías.

Se ha contrastado la vigencia de las normas principales en el BOE:

- TRLRHL: texto consolidado con última actualización publicada el **3 de junio de 2026**. La modificación de 2026 afecta a la disposición adicional decimosexta y no altera el núcleo recaudatorio utilizado en este tema.
- Ley 58/2003, General Tributaria: texto consolidado con última actualización publicada el **21 de diciembre de 2024**.
- Reglamento General de Recaudación: texto consolidado con última actualización publicada el **31 de enero de 2024**.
- Real Decreto 520/2005: texto consolidado con última actualización publicada el **5 de abril de 2023**.

No se detecta error jurídico material en las reglas examinadas. Se mantienen correctamente:

- el inicio del periodo ejecutivo al día siguiente del vencimiento voluntario;
- la diferencia entre periodo ejecutivo y procedimiento de apremio;
- los recargos del **5 %**, **10 %** y **20 %**;
- los plazos de pago de liquidaciones y providencias;
- el plazo de **seis meses** para resolver la devolución de ingresos indebidos;
- la prescripción general de **cuatro años**.

## Error editorial corregido

El manual declaraba que el banco de preguntas estaba vacío, aunque `preguntas.json` contenía **12 preguntas completas**. Además, el banco figuraba como `GENERADO_PENDIENTE_REVISION_USUARIO` pese a que el tema estaba aprobado.

Se ha corregido:

- `preguntas.json`: estado `APROBADO_USUARIO` y versión `2026-07-25`;
- `manual.md`: fecha de revisión actualizada y estado real del banco corregido.

## Incidencias pendientes de normalización global

- El título conserva «Manual modular» en vez del patrón editorial definitivo.
- El estado visible del manual usa una fórmula histórica distinta del esquema normalizado.
- Los capítulos deben someterse después a la pasada común de encabezados y llamadas `> ⚠️ **¡Foco Examen!:**`.
- Deben validarse automáticamente todos los enlaces internos del manual modular.

## Conclusión

Tema jurídicamente coherente y con una incidencia editorial real ya corregida. Permanece en `EN_REVISION` hasta la normalización global de estilo, enlaces y metadatos.