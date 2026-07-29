# Estado de auditoría · OpoWeb v2

Última actualización: **29 de julio de 2026**.

## Fase 2

Estado: **EN_AUDITORIA**. La pasada transversal de La Puebla alcanza **19/19 temas**, pero ningún tema está todavía marcado como `CERRADO_FASE_2`.

## Cambios verificados

### La Puebla de Montalbán

- Tema 1: vigencia constitucional reconfirmada tras la reforma del artículo 69.3 publicada el **20 de mayo de 2026**.
- Tema 1: matriz actualizada y banco de **12 preguntas** normalizado a `APROBADO_USUARIO`; no se detectan respuestas incorrectas.
- Tema 2: vigencia de la Ley 39/2015 reconfirmada; el BOE mantiene como última actualización consolidada la publicada el **6 de noviembre de 2024**.
- Tema 2: matriz actualizada y banco de **12 preguntas** normalizado a `APROBADO_USUARIO`; no se detectan respuestas incorrectas.
- Tema 10: corregida la contradicción que declaraba inexistente un banco de **12 preguntas** ya aprobado; portada, jerarquía y llamadas principales normalizadas.
- Tema 12: título y estado editorial normalizados; vigencia del TRLRHL reconfirmada a **3 de junio de 2026**.
- Tema 16: manual, matriz y banco de **12 preguntas** verificados contra documentación oficial de Microsoft.
- Tema 16: confirmados el fin de soporte de IE11 el **15 de junio de 2022**, el soporte del modo IE al menos hasta **2029** y los atajos diferenciales de Edge.
- Tema 16: cerrada la incidencia de contrato frontend; el lector admite tanto `pregunta` como `enunciado`.
- Tema 17: portada y estado editorial normalizados; eliminados metadatos históricos y el apartado interno de cierre.
- Tema 17: matriz y banco de **12 preguntas** revisados; vigencia técnica de Word 2024 y LibreOffice Writer reconfirmada.
- Tema 18: portada y estado editorial normalizados; eliminados metadatos históricos y el apartado interno `Estado real`.
- Tema 18: matriz y banco de **12 preguntas** revisados; vigencia técnica de Excel 2024 y LibreOffice Calc reconfirmada.
- Tema 19: portada y estado editorial normalizados; matriz y banco de **12 preguntas** verificados.
- Tema 19: precisadas la distinción entre USB-C y prestaciones del enlace, y las directivas de retirada de soportes externos de Windows.
- Temas 10–19: portada y estado visibles ya normalizados.

Estado de La Puebla: **19/19 revisados; 10 manuales conservan todavía elementos históricos o jerarquía editorial pendiente**.

### Incidencias abiertas

- Normalización editorial de los manuales de los Temas 1 y 2: títulos históricos, metadatos de migración y reglas internas.
- Homogeneización de llamadas al patrón `> ⚠️ **¡Foco Examen!:**`.
- Validación automatizada y visual de enlaces internos y esquemas finales.
- Verificación específica del contrato frontend del Tema 6.
- Normalización editorial de los Temas 3–9 y controles residuales.

## Seguimiento oficial de convocatorias

Comprobación realizada el **29 de julio de 2026**:

- **Diputación de Toledo · Administrativo C1:** solicitudes abiertas hasta el **31 de julio de 2026**; no consta lista provisional de esta convocatoria.
- **UC3M · Auxiliar Administrativa C2:** convocatoria abierta hasta el **5 de agosto de 2026**; el ejercicio del **21 de noviembre de 2026 a las 10:00** mantiene carácter **previsible**, no definitivo.
- **CPEIS Toledo:** se mantiene en solo seguimiento; no se ha verificado una nueva lista provisional.
- **La Puebla de Montalbán:** no se ha verificado una nueva publicación oficial que altere el estado registrado.

`data/convocatorias.json` queda actualizado a **29 de julio de 2026**.

## Estado por proyectos

| Proyecto | Cobertura | Estado |
|---|---:|---|
| La Puebla | **19/19** | Revisión transversal completa; cierre editorial pendiente |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente de fuente íntegra |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Orden de trabajo

1. Normalizar editorialmente los Temas 1–9.
2. Validar enlaces, esquemas y llamadas de los Temas 10–19.
3. Verificar el contrato frontend del Tema 6.
4. Continuar UC3M y Diputación.
