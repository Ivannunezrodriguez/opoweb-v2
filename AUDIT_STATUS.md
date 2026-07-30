# Estado de auditoría · OpoWeb v2

Última actualización: **30 de julio de 2026**.

## Fase 2 · La Puebla de Montalbán

Estado: **CERRADO_FASE_2**.

La revisión transversal de La Puebla queda cerrada para los **19/19 temas**. El cierre está documentado en `audit/PHASE2_CLOSURE.md` y respaldado por la evidencia automática `audit/phase2-ci-result.md`.

## Resultado verificado

- 19 manuales, 19 matrices y 19 bancos de preguntas disponibles.
- 228 preguntas verificadas, 12 por tema.
- 20 supuestos prácticos y 3 simulacros.
- Portadas y estado editorial normalizados.
- Un único H1 y título normalizado por manual.
- Ausencia de metadatos históricos y llamadas antiguas detectables.
- Enlaces locales existentes.
- Bloque final de esquema o repaso en los 19 temas.
- Contrato frontend compatible con `pregunta/enunciado`, `correcta/respuestaCorrecta` y `trampa/trampaExamen`.
- Navegación, historial, práctica multiconvocatoria y carga progresiva validados.
- Service worker retirado y sin listener `fetch`.
- Carga de portada, apertura de temas y desplazamiento rápido comprobados en el despliegue real por el usuario.

La puerta de cierre ejecutó correctamente `npm test` y registró **VALIDACION_CI_SUPERADA** sobre el commit `6fde256468a8a24c0d775d29172d7fd615d81828`.

## Incidencias cerradas

- Carga masiva de manuales en portada.
- Navegaciones bloqueadas por el service worker.
- Bloques infinitos provocados por `MutationObserver`.
- Duplicación del seguimiento de Diputación.
- Error JSON por escapes UNC en el Tema 34 de Diputación.
- Validador desalineado con la arquitectura de carga diferida.
- Ausencia de esquema final en los Temas 8, 13 y 14 de La Puebla.

## Seguimiento oficial de convocatorias

Comprobación registrada el **30 de julio de 2026**:

- **Diputación de Toledo · Administrativo C1:** seguimiento activo; revisión editorial específica todavía abierta.
- **UC3M · Auxiliar Administrativa C2:** solicitud personal presentada y registrada el 15 de julio de 2026; revisión editorial específica todavía abierta.
- **CPEIS Toledo:** solo seguimiento.
- **Carranque:** seguimiento independiente.

## Estado por proyectos

| Proyecto | Cobertura | Estado |
|---|---:|---|
| La Puebla | **19/19** | **CERRADO_FASE_2** |
| Diputación C1 | **40/40** | Revisión específica abierta |
| UC3M C2 | **20/20** | Revisión específica abierta |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Siguiente fase

Las nuevas reformas normativas, mejoras visuales o ampliaciones de contenidos se tramitarán como una fase posterior o como mantenimiento editorial, conservando este cierre histórico.
