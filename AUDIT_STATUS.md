# Estado de auditoría · OpoWeb v2

Última actualización: **31 de julio de 2026**.

## Fase 2 · La Puebla de Montalbán

Estado: **CERRADO_FASE_2**.

La revisión transversal de La Puebla permanece cerrada para los **19/19 temas**. El cierre está documentado en `audit/PHASE2_CLOSURE.md` y respaldado por la evidencia automática `audit/phase2-ci-result.md`.

## Auditoría específica · UC3M C2

Estado: **EN_REVISION_TRANSVERSAL · 20/20 temas disponibles**.

### Cambio jurídico real corregido el 31 de julio de 2026

En el **Tema 1** se detectó un error objetivo: el manual y la pregunta `UC3M-T01-012` afirmaban que hasta julio de 2026 se habían aprobado tres reformas constitucionales. Ese dato quedó desactualizado con la reforma del artículo **69.3**, publicada y vigente desde el **20 de mayo de 2026**.

Se han corregido:

- `content/uc3m/tema-01/manual.md`;
- `content/uc3m/tema-01/matriz.json`;
- `content/uc3m/tema-01/preguntas.json`;
- `content/uc3m/tema-01/fuentes.md`.

El material refleja ahora las **cuatro reformas** constitucionales: artículos 13.2, 135, 49 y 69.3. También incorpora la separación de Ibiza y Formentera como circunscripciones senatoriales y la atribución de un senador a cada isla.

Fuentes oficiales verificadas:

- Constitución Española consolidada, última actualización publicada el 20 de mayo de 2026: `BOE-A-1978-31229`.
- Reforma del artículo 69.3, de 19 de mayo de 2026: `BOE-A-2026-10881`.
- Adaptación de la LOREG mediante Ley Orgánica 2/2026, de 30 de junio: `BOE-A-2026-14329`.

## Seguimiento oficial de convocatorias

Comprobación realizada el **31 de julio de 2026**:

- **Diputación de Toledo · Administrativo C1:** el portal oficial mantiene el 31 de julio de 2026 como último día de presentación. No consta lista provisional.
- **UC3M · Auxiliar Administrativa C2:** plazo abierto hasta el 5 de agosto de 2026; sigue figurando como previsible el ejercicio del 21 de noviembre de 2026 a las 10:00. No consta lista provisional.
- **CPEIS Toledo · C1 y C2:** procesos abiertos hasta el 6 de agosto de 2026. No consta lista provisional.
- **Carranque:** sin nueva publicación oficial verificada.
- **La Puebla:** sin nueva publicación oficial que altere el estado registrado.

`data/convocatorias.json` queda actualizado a **31 de julio de 2026**.

## Estado por proyectos

| Proyecto | Cobertura | Estado |
|---|---:|---|
| La Puebla | **19/19** | **CERRADO_FASE_2** |
| Diputación C1 | **40/40** | Revisión específica abierta; OAPGT pendiente de fuente íntegra |
| UC3M C2 | **20/20** | Revisión específica abierta; Tema 1 corregido |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Orden de trabajo vigente

1. Continuar la auditoría jurídica y editorial de UC3M tema a tema.
2. Mantener el seguimiento diario de publicaciones oficiales.
3. Continuar Diputación, priorizando la obtención de una fuente oficial íntegra de los Estatutos del OAPGT.
4. Conservar el cierre histórico de La Puebla y reabrir únicamente ante reformas o incidencias verificadas.
