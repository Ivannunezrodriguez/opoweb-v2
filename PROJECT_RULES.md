# Reglas vinculantes de OpoWeb v2

OpoWeb es la **fuente editorial única** de estudio. La web debe permitir preparar cada convocatoria sin depender de resúmenes externos, sin sustituir nunca la norma oficial por contenido inventado.

## Reglas editoriales

1. Cada convocatoria parte del **programa oficial literal**, conservado con su publicación, fecha y código de verificación.
2. Cada tema comienza con el **epígrafe oficial literal**.
3. Debe existir una matriz `inciso → norma → artículos → contenido exigible`.
4. El desarrollo explica reglas, órganos, competencias, plazos, mayorías, cuantías, requisitos, excepciones y efectos.
5. Se separa materia obligatoria, complemento imprescindible, ampliación útil y contenido ajeno.
6. Las fuentes principales serán oficiales, consolidadas y vigentes en la fecha de auditoría.
7. No se completan lagunas con invenciones, recuerdos inseguros ni inferencias presentadas como hechos.
8. Las definiciones jurídicas clave mantienen la literalidad necesaria para examen.
9. Se destacan en **negrita** plazos, fechas, mayorías, cuantías y órganos competentes.
10. Los conceptos confundibles incorporan tablas comparativas.
11. Cada subapartado clave termina con un bloque `> ⚠️ **¡Foco Examen!:**` cuando exista una trampa real de test.
12. Las preguntas y supuestos deben ser trazables a una norma y, cuando proceda, a un artículo concreto.
13. Los documentos personales del opositor no se publican nunca en el repositorio.
14. Los documentos oficiales reutilizables pueden conservarse en `docs/oficiales/<convocatoria>/`, junto con metadatos de procedencia y verificación.

## Flujo de auditoría

- La auditoría se realiza de forma continua, sin solicitar confirmación después de cada tema.
- El **estado editorial operativo, su evidencia, el bloqueo activo y el siguiente paso** se registran exclusivamente en [`AUDITORIA_CONTINUA.md`](AUDITORIA_CONTINUA.md) y en Git. `AUDIT_STATUS.md` es únicamente un acceso de compatibilidad, nunca una segunda fuente de verdad.
- Un tema puede publicarse cuando supera la revisión de estructura, vigencia, literalidad, trazabilidad y maquetación OpoWeb.
- Una corrección posterior no borra el historial: incrementa la versión editorial y deja constancia de la norma y fecha comprobadas.
- La integración continua valida estructura e integridad técnica, pero no sustituye la revisión jurídica y pedagógica.

## Estados permitidos

- `PENDIENTE_AUDITORIA`
- `EN_AUDITORIA`
- `AUDITADO`
- `PUBLICADO`
- `REQUIERE_ACTUALIZACION`

Cada cambio de estado debe quedar documentado. Los **valores heredados de los manifiestos** (como `APROBADO_USUARIO`, `EN_REVISION_USUARIO`, `BORRADOR` o `GENERACION_DESDE_CERO`) no son intercambiables con este flujo de auditoría. `GENERACION_DESDE_CERO` describe el método de elaboración, **no** un tema aprobado; la disponibilidad en la web no prueba validación jurídico-editorial. Un cierre de fase anterior se preserva como hito fechado y **no** acredita automáticamente la vigencia de noviembre de 2026. La reanudación siempre toma la **TAREA ACTIVA** del registro principal.