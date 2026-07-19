# Estado de auditoría · OpoWeb v2

Última actualización: **19 de julio de 2026**.

## Convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

Programa oficial: **19 temas**, BOP de Toledo número **82**, de **5 de mayo de 2026**, CSV **2026.00001965**.

Estado: **auditoría y remediación completadas, 19 de 19 temas**.

### Diputación Provincial de Toledo · Administrativo C1

Convocatoria de **2 plazas por oposición libre**. Bases publicadas en el BOP de Toledo número **118**, de **25 de junio de 2026**, código **2026.00002934**. Convocatoria publicada en el BOE número **162**, de **4 de julio de 2026**, referencia **BOE-A-2026-14527**.

El plazo oficial de solicitudes está **abierto del 6 al 31 de julio de 2026**. Esta información se ha incorporado a `data/convocatorias.json`.

Estado editorial: temas **1 a 14** generados con manual, fuentes, matriz y banco inicial de preguntas. El **Tema 14** ha recibido auditoría jurídica adicional y corrección material el **19 de julio de 2026**.

## Resultado global de La Puebla

El temario base queda declarado `AUDITADO_Y_CORREGIDO` para la fase de tests, supuestos prácticos y simulacros. La corrección sustantiva del **Tema 6** ya está aplicada: el nombramiento de personal funcionario interino para programas temporales tiene una duración máxima total de **2 años**, no de **4 años**.

## Estado por bloques · La Puebla

| Bloque | Temas | Estado | Trabajo principal |
|---|---:|---|---|
| Constitución | 1 | `AUDITADO_NORMA_VIGENTE` | Constitución consolidada y reforma del artículo **69.3** publicada el **20 de mayo de 2026** |
| Procedimiento administrativo | 2–4 | `AUDITADO_NORMA_VIGENTE` | Ley 39/2015: plazos, silencio, caducidad, revisión y recursos |
| Régimen local | 5 | `AUDITADO_NORMA_VIGENTE` | Órganos, competencias, mayorías, funcionamiento y elecciones locales |
| Empleo público | 6 | `AUDITADO_Y_CORREGIDO_NORMA_VIGENTE` | Corregido el máximo del programa temporal a **2 años** e incorporado bloque `¡Foco Examen!` |
| Prevención de riesgos laborales | 7 | `AUDITADO_NORMA_VIGENTE` | Derechos, obligaciones, servicios de prevención, Delegados y Comité |
| Igualdad | 8 | `AUDITADO_NORMA_VIGENTE` | Ley 12/2010 de Castilla-La Mancha y Ley Orgánica 3/2007 |
| Protección de datos | 9 | `AUDITADO_NORMA_VIGENTE` | LOPDGDD y RGPD: derechos, videovigilancia, DPD, brechas y AEPD |
| Tributación local | 10 | `AUDITADO_NORMA_VIGENTE` | Principios, delegación, beneficios, obligaciones, obligados y gestión |
| Recaudación local | 11 | `AUDITADO_NORMA_VIGENTE` | Voluntaria, aplazamiento, compensación, ejecutiva, apremio y embargo |
| Impuestos locales | 12 | `AUDITADO_NORMA_VIGENTE` | IBI, IAE, IVTM e IIVTNU; excluido correctamente el ICIO |
| Certificado electrónico | 13 | `GENERADO_Y_AUDITADO_NORMA_VIGENTE` | eIDAS, Ley 6/2020, certificados, soportes y servicios de confianza |
| Ley 40/2015 y AGE | 14 | `AUDITADO_NORMA_VIGENTE` | Artículos **5–24** y **54–80**, incluido el artículo **55 bis** |
| Windows I | 15 | `AUDITADO_TECNICA_VIGENTE` | Explorador, archivos, unidades, impresión y digitalización |
| Navegación web | 16 | `AUDITADO_TECNOLOGIA_VIGENTE` | Edge, Internet Explorer heredado, modo IE, privacidad y seguridad |
| Word y Writer | 17 | `AUDITADO_TECNICA_VIGENTE` | Procesamiento de textos, estilos, revisión, combinación y PDF |
| Excel y Calc | 18 | `AUDITADO_TECNICA_VIGENTE` | Fórmulas, referencias, funciones, tablas, filtros, análisis y gráficos |
| Microinformática | 19 | `AUDITADO_TECNICA_VIGENTE` | Hardware, almacenamiento, periféricos, impresión, escáneres, USB y medios ópticos |

## Auditoría de Diputación de Toledo

| Tema | Estado | Última actuación |
|---:|---|---|
| 1–13 | `GENERADO_CON_FUENTES_Y_PREGUNTAS` | Pendientes de auditoría jurídica final bloque a bloque |
| 14 | `AUDITADO_Y_CORREGIDO_NORMA_VIGENTE` | Precisados Pleno mensual, solicitud extraordinaria por **1/4**, plazo de **15 días hábiles**, quórum de **1/3** y umbral electoral del **5 %** |
| 15–40 | `PENDIENTE_DESARROLLO` | Continuación prioritaria |

Informe: `content/diputacion-toledo/tema-14/auditoria-2026-07-19.md`.

## Mejoras de plataforma

| Mejora | Estado |
|---|---|
| Modo claro/oscuro persistente | Implementado |
| Diseño para móvil y tableta | Implementado |
| Buscador sobre títulos y contenido | Implementado |
| Apartado de plazos y estado personal de la OPE | Implementado |
| Historial y control de versiones Git | Activo |
| Catálogo de documentos oficiales | En preparación |
| Copias oficiales verificables | Pendiente, solo para documentos públicos |
| Tests y supuestos trazables | En desarrollo sobre contenido auditado |

## Orden de trabajo

1. Continuar la auditoría jurídica final de los temas **1 a 13 de Diputación**, priorizando cifras, plazos, mayorías y órganos competentes.
2. Desarrollar los temas **15 a 40** de Diputación con fuente oficial individual.
3. Cerrar el bloque del **OAPGT** únicamente con los Estatutos íntegros, oficiales y vigentes.
4. Ampliar bancos de preguntas y generar supuestos y simulacros con trazabilidad.
5. Mantener el seguimiento de publicaciones oficiales de todas las convocatorias activas.
