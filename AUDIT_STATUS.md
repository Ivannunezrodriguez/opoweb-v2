# Estado de auditoría · OpoWeb v2

Última actualización: **23 de julio de 2026**.

## Cambios reales de esta revisión

### UC3M · Tema 19 auditado y activado

Se ha completado la auditoría jurídica y editorial del Tema 19:

> Presupuesto de la UC3M (II): ejecución de gastos, gestión presupuestaria y económico-financiera, ordenación, documentos contables, liquidación y cierre.

El tema pasa de `BORRADOR` a `EN_REVISION_USUARIO` y dispone ya de:

- `content/uc3m/tema-19/manual.md`;
- `content/uc3m/tema-19/fuentes.md`;
- `content/uc3m/tema-19/matriz.json`;
- `content/uc3m/tema-19/preguntas.json` con **12 preguntas**.

#### Fuente oficial específica incorporada

Se ha utilizado el **Presupuesto UC3M 2026**, aprobado por el Consejo de Gobierno y por el Consejo Social el **11 de diciembre de 2025**, especialmente el Volumen I y sus Normas Básicas de Gestión.

#### Errores e indeterminaciones corregidos

El borrador anterior:

- no distinguía con precisión retención, autorización, disposición, obligación, ordenación y pago material;
- no identificaba los documentos contables habituales RC, A, D, O, P y mixtos;
- trataba de forma genérica pagos a justificar y anticipos de caja fija;
- no desarrollaba operaciones no presupuestarias;
- no diferenciaba liquidación, resultado presupuestario, remanente de tesorería y cuentas anuales.

La versión auditada incorpora:

- secuencia completa de ejecución del gasto;
- expedientes, facturas y conformidad;
- gastos de personal, contratación, subvenciones y transferencias;
- pagos a justificar, anticipos, plurianualidad y tramitación anticipada;
- ordenación, tesorería, conciliación y control;
- liquidación, resultado presupuestario, remanente, cierre y cuentas anuales.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Pendiente sustituir en `content/la-puebla/tema-06/manual.md` la cifra incorrecta de **2 años** por el máximo vigente de **4 años** y retirar después la corrección transitoria de interfaz.
- No consta todavía lista provisional oficial verificada.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes abiertas hasta el **31 de julio de 2026**.
- Estado editorial: **40 de 40 temas**.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT.
- Tema 31: ampliación eIDAS 2 pendiente de integrar en el manual principal.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Estado editorial: **19 de 20 temas** en `EN_REVISION_USUARIO`.
- Pendiente únicamente el **Tema 20**, sobre contratación pública y contratación en la UC3M.

### Carranque · Auxiliar Administrativo C2

- Usuario inscrito.
- Seguimiento en mantenimiento.
- No consta publicación posterior oficial verificada en el registro.

### CPEIS Toledo

Se mantiene en `SOLO_SEGUIMIENTO`, pendiente de decisión del usuario:

- **4 plazas** de Auxiliar Administrativo C2;
- **1 plaza** de Administrativo C1;
- plazo hasta el **6 de agosto de 2026**.

### Las Ventas con Peña Aguilera

Convocatoria archivada porque el usuario confirmó que no se presentará.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado jurídico |
|---|---:|---|
| La Puebla | **19/19** | Completa con rectificación fuente pendiente en Tema 6 |
| Diputación C1 | **40/40** | Auditoría continua; OAPGT y ampliación eIDAS 2 pendientes |
| UC3M C2 | **19/20** | Tema 19 contrastado con Presupuesto UC3M 2026 |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.12`.
- Caché del servicio: `opoweb-v2-0.27.12`.
- Precarga offline de UC3M ampliada hasta el **Tema 19**.

## Orden de trabajo vigente

1. Desarrollar y auditar el **Tema 20 de UC3M**.
2. Corregir el Markdown fuente del **Tema 6 de La Puebla** y retirar la corrección transitoria.
3. Integrar la ampliación eIDAS 2 en el **Tema 31 de Diputación**.
4. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
5. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
6. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.