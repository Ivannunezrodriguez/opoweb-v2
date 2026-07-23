# Estado de auditoría · OpoWeb v2

Última actualización: **23 de julio de 2026**.

## Cambios reales de esta revisión

### UC3M · Tema 18 auditado y activado

Se ha completado la auditoría jurídica y editorial del Tema 18:

> Presupuesto de la UC3M (I): características, estructura, ingresos, gastos, créditos, financiación, modificaciones y ejecución de ingresos.

El tema pasa de `BORRADOR` a `EN_REVISION_USUARIO` y dispone ya de:

- `content/uc3m/tema-18/manual.md`;
- `content/uc3m/tema-18/fuentes.md`;
- `content/uc3m/tema-18/matriz.json`;
- `content/uc3m/tema-18/preguntas.json` con **12 preguntas**.

#### Fuente oficial específica incorporada

Se ha utilizado el **Presupuesto UC3M 2026**, aprobado por el Consejo de Gobierno y por el Consejo Social el **11 de diciembre de 2025**, especialmente su Volumen I y las Normas Básicas de Gestión.

El presupuesto total asciende a **300.468.067,59 euros**, con un incremento aproximado del **9,25 %** respecto de 2025.

#### Errores e indeterminaciones corregidos

El borrador anterior:

- presentaba una estructura genérica de capítulos de ingresos que no coincidía con el estado real de ingresos de 2026;
- no incluía los importes oficiales por capítulos;
- no concretaba el nivel de vinculación de los créditos;
- describía de forma genérica las modificaciones presupuestarias sin indicar competencias;
- no incorporaba el procedimiento específico de contabilización y seguimiento de ingresos de las Normas Básicas de Gestión 2026.

La versión auditada incorpora:

- capítulos reales de ingresos: III, IV, V, VII y VIII;
- clasificación triple de gastos y doble de ingresos;
- vinculación general a nivel de concepto y excepciones de los capítulos I, II y VI;
- competencias del Rector, Consejo de Gobierno, Consejo Social y Comunidad de Madrid;
- generaciones, rectificaciones, transferencias, incorporaciones y redistribuciones;
- reconocimiento de derechos conforme al principio de devengo;
- seguimiento de facturas pendientes a 60, 90 y 120 días;
- uso de remanentes específicos sin financiación estructural mediante remanentes libres.

### Seguimiento de convocatorias actualizado

#### La Puebla de Montalbán

La inscripción personal ha quedado verificada con la documentación aportada por el usuario:

- pago de la tasa de **7 euros** el 27 de mayo de 2026;
- solicitud registrada el 28 de mayo de 2026;
- justificante electrónico de registro comprobado.

Por privacidad, el repositorio público no incorpora DNI, números de cuenta, copias de documentos ni datos bancarios.

No consta todavía una lista provisional oficial verificada.

#### Carranque

Se han incorporado al registro de seguimiento los datos oficiales de las bases y del BOE:

- una plaza C2;
- concurso-oposición libre;
- BOE-A-2026-1136, de 19 de enero de 2026;
- primer ejercicio de 80 preguntas más 5 de reserva, 90 minutos;
- segundo ejercicio práctico sobre los temas 3 a 20;
- fase de concurso de hasta 8 puntos.

No consta una publicación posterior verificada en las fuentes consultadas.

#### Las Ventas con Peña Aguilera

La convocatoria se mantiene archivada por decisión del usuario, pero se completa su ficha documental:

- una plaza C2;
- BOP de Toledo número 89, de 14 de mayo de 2026;
- BOE-A-2026-14274, de 1 de julio de 2026;
- plazo cerrado el 21 de julio de 2026;
- fase de oposición no antes del 15 de octubre de 2026.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

Programa oficial de **19 temas**. Estado editorial general completo, con una incidencia fuente todavía abierta:

- `content/la-puebla/tema-06/manual.md` conserva la cifra errónea de **2 años** para programas temporales;
- la regla vigente aplicable en Castilla-La Mancha es un máximo total de **4 años**;
- la interfaz pública, el banco de preguntas, el supuesto práctico y la auditoría ya aplican la cifra correcta mediante corrección transitoria.

La sustitución directa del Markdown fuente y la retirada posterior de `assets/tema6-interinidad-correction.js` continúan pendientes.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes: del **6 al 31 de julio de 2026**.
- Estado editorial: **40 de 40 temas** con manual, fuentes, matriz y banco inicial.
- Seguimiento vigente: no consta en el registro una lista provisional posterior.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT para cerrar definitivamente el Tema 22.
- Tema 31: banco actualizado a eIDAS 2; ampliación pendiente de integración en el manual principal.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Estado editorial: **18 de 20 temas** en `EN_REVISION_USUARIO`.
- Pendientes: temas **19 y 20**.
- Último bloque completado: Tema 18, contrastado con el Presupuesto UC3M 2026.

### CPEIS Toledo

Se mantiene en `SOLO_SEGUIMIENTO`, pendiente de decisión del usuario:

- **4 plazas** de Auxiliar Administrativo C2;
- **1 plaza** de Administrativo C1;
- plazo hasta el **6 de agosto de 2026**.

No se inicia desarrollo editorial específico sin confirmación de interés.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado jurídico |
|---|---:|---|
| La Puebla | **19/19** | Completa con rectificación fuente pendiente en Tema 6 |
| Diputación C1 | **40/40** | Auditoría continua; OAPGT y ampliación eIDAS 2 pendientes |
| UC3M C2 | **18/20** | Tema 18 contrastado con presupuesto oficial 2026 |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.11`.
- Caché del servicio: `opoweb-v2-0.27.11`.
- Precarga offline de UC3M ampliada hasta el **Tema 18**.

## Orden de trabajo vigente

1. Desarrollar y auditar el **Tema 19 de UC3M**.
2. Sustituir en el Markdown fuente del **Tema 6 de La Puebla** las menciones incorrectas a **2 años** por el régimen aplicable de hasta **4 años**.
3. Retirar `assets/tema6-interinidad-correction.js` cuando la fuente esté corregida.
4. Incorporar al manual principal del **Tema 31 de Diputación** la ampliación de servicios de confianza de eIDAS 2.
5. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
6. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
7. Cerrar el bloque OAPGT únicamente con fuente oficial íntegra y verificable.