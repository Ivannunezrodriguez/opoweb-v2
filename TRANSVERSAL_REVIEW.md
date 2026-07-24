# Seguimiento de la revisión transversal · Fase 2

Última actualización: **24 de julio de 2026**.

Este documento registra el avance verificable de la fase 2. Un tema solo se marca como cerrado cuando supera todos los controles definidos en `EDITORIAL_GUIDE.md`.

## Criterios de control

- [ ] epígrafe oficial literal y fuente identificada;
- [ ] jerarquía de encabezados homogénea;
- [ ] estado editorial normalizado;
- [ ] tablas consistentes y sin repeticiones innecesarias;
- [ ] esquema final de repaso;
- [ ] enlaces internos válidos;
- [ ] preguntas y supuestos trazables;
- [ ] ausencia de duplicidades relevantes;
- [ ] revisión jurídica vigente.

## La Puebla de Montalbán

| Tema | Estado fase 2 | Hallazgos principales | Próxima acción |
|---|---|---|---|
| 1 | EN_REVISION | Contenido jurídico completo; encabezados de partes usan varios `#`; metadatos históricos y texto interno del proyecto no deben aparecer en el manual de estudio | Normalizar portada, jerarquía y metadatos sin alterar el contenido jurídico |
| 2 | EN_REVISION | Repite el mismo patrón de portada histórica y encabezados de parte con `#`; mapa normativo correcto y útil | Aplicar la misma normalización editorial del Tema 1 |
| 3 | EN_REVISION | Cobertura jurídica correcta de los arts. 53–105 LPAC; matriz y preguntas trazables; persisten portada histórica, varios `#`, llamadas de examen no homogéneas y estado antiguo en `preguntas.json` | Normalizar manual y metadatos preservando numeración y referencias |
| 4 | EN_REVISION | Cobertura correcta de los arts. 106–126 LPAC y complemento local de los arts. 52–53 LRBRL; preguntas trazables; persisten portada histórica, varios `#`, llamadas destacadas no homogéneas y estado antiguo en `preguntas.json` | Normalizar manual y metadatos sin alterar referencias internas |
| 5 | EN_REVISION | Cobertura coherente de municipio, provincia, competencias y régimen electoral local; 12 preguntas trazables; persisten portada histórica, varios `#`, llamadas no homogéneas y estado antiguo en `preguntas.json` | Aplicar normalización editorial sin alterar contenido ni referencias |
| 6 | EN_REVISION | Cobertura coherente de personal, OEP, selección, carrera, promoción y provisión; incorpora la reforma de 2026 del art. 70.2; persisten portada histórica, varios `#`, estados y fechas desalineados y un esquema JSON distinto al de otros temas | Verificar contrato del frontend antes de unificar claves; después normalizar manual y metadatos |
| 7–19 | PENDIENTE | Pendientes de pasada transversal sistemática | Revisar en orden numérico |

### Hallazgo transversal confirmado en los temas 1 a 6

Los seis primeros manuales conservan elementos de reconstrucción interna que no aportan contenido de examen:

- el sufijo «Manual reconstruido» en el título;
- estados en mayúsculas no alineados con los estados permitidos del proyecto;
- mensajes internos sobre el proceso de reconstrucción;
- encabezados de parte con nivel `#`, pese a que debe existir un único título principal.

En los temas 3 a 6 se añade una falta de homogeneidad en las llamadas destacadas (`Trampa de examen`, `Idea clave`, `Diferencia esencial`, `Idea de examen`, `Importancia para esta oposición` y fórmulas equivalentes) frente al patrón `> ⚠️ **¡Foco Examen!:**`.

El Tema 6 añade una incidencia técnica: su banco usa las claves `pregunta`, `correcta` y `trampa`, mientras otros temas usan `enunciado`, `respuestaCorrecta` y `trampaExamen`. La normalización debe esperar a verificar el contrato real del frontend.

La corrección se aplicará como patrón al resto de La Puebla, preservando íntegramente el contenido jurídico y la trazabilidad normativa.

## UC3M

| Bloque | Estado |
|---|---|
| Temas 1–13 | PENDIENTE_DE_CIERRE_TRANSVERSAL |
| Temas 14–17 | REVISADOS_CON_CORRECCIONES_ACUMULADAS |
| Tema 18 | PENDIENTE_DE_CIERRE_TRANSVERSAL |
| Tema 19 | REVISADO_CON_CORRECCION_JURIDICA |
| Tema 20 | PENDIENTE_DE_CIERRE_TRANSVERSAL |

## Diputación de Toledo

| Bloque | Estado |
|---|---|
| Temas 1–30 | PENDIENTE_DE_CIERRE_TRANSVERSAL |
| Tema 31 | REVISADO_Y_ACTUALIZADO_A_EIDAS_2 |
| Temas 32–40 | PENDIENTE_DE_CIERRE_TRANSVERSAL |
| OAPGT | BLOQUEADO_POR_FUENTE_OFICIAL_INTEGRA |

## Regla de cierre

La fase 2 no se cerrará por porcentaje estimado. Solo quedará completada cuando todos los temas activos estén marcados como `CERRADO_FASE_2` y no queden incidencias editoriales o jurídicas abiertas.
