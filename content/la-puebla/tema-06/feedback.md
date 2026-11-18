# Tema 6 · Control editorial

## Estado

`APROBADO_USUARIO` (hito histórico); **error puntual de la tabla de plazos corregido el 02/11/2026**. La recertificación jurídica integral sigue pendiente.

**Comprobación del 02/11/2026:** el cuerpo del manual ya decía **cuatro años**, pero el cuadro de memorización «Plazos y cifras esenciales» aún decía «Máximo 2 años». Se corrigió la fila; el supuesto `LP-SP-05` y el test `LP-T06-002` ya utilizan **cuatro años** y el validador comprueba el supuesto. Fuente: [Ley 4/2011, art. 8.1.c](https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752) y [TREBEP, art. 10.1.c](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719).

## Epígrafe oficial

> Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: El Personal al servicio de las Administraciones Públicas. Provisión de puestos de trabajo. La carrera administrativa. Promoción interna. La selección del personal y la oferta pública de Empleo.

## Cobertura incorporada

### Personal empleado público

- artículos 4–15;
- funcionario de carrera e interino;
- personal laboral y eventual;
- funciones reservadas;
- personal directivo profesional.

### Oferta pública de empleo

- artículo 19;
- diferencia entre plantilla, RPT, OEP y convocatoria;
- inclusión de vacantes ocupadas interinamente;
- ejecución en **tres años**;
- hasta **diez por ciento** adicional.

### Selección

- artículos 37–55;
- principios, requisitos y nacionalidad;
- reserva y adaptaciones por discapacidad;
- sistemas selectivos;
- órganos de selección;
- convocatorias y pruebas;
- relación de aprobados, prácticas, destinos y adquisición de la condición.

### Carrera y promoción

- artículos 62–66;
- carrera vertical y horizontal;
- promoción interna vertical y horizontal;
- **dos años** de servicio activo;
- evaluación del desempeño.

### Provisión y movilidad

- artículos 67–82;
- concurso y libre designación;
- remoción y toma de posesión;
- redistribución, comisión de servicios y adscripción provisional;
- movilidad por salud y violencia de género;
- permuta, misiones, atribución temporal de funciones y movilidad interadministrativa.

## Rectificación jurídica prioritaria

La duración de los programas temporales del personal funcionario interino no es de **dos años**.

La regla aplicable es:

| Norma | Duración máxima |
|---|---:|
| TREBEP, artículo 10.1.c) | **tres años** |
| Posible ampliación por ley autonómica | hasta **doce meses más** |
| Ley 4/2011 de Castilla-La Mancha, artículo 8.1.c) | máximo total de **cuatro años** |

**Situación actual:** corregida la tabla resumen del manual. Las menciones a **dos años** que permanecen en otros apartados corresponden a supuestos jurídicos distintos, como la **promoción interna**, y no a la duración del programa temporal. Se conserva `auditoria-2026-07-18.md` como evidencia del hallazgo histórico.

> ⚠️ **¡Foco Examen!:** No confundas los **dos años de servicio activo** exigidos para determinados supuestos de promoción interna con la duración de un programa temporal de interinidad. En Castilla-La Mancha, el máximo total del programa es de **cuatro años**.

## Corrección de vigencia adicional

El texto consolidado del BOE consultado integra modificaciones hasta el 21 de marzo de 2024 y señala actualizaciones en proceso. El manual incorpora separadamente la Ley 2/2026, de 9 de abril, vigente desde el **6 de mayo de 2026**, que modifica el artículo 70.2 sobre puestos susceptibles de libre designación.

No debe estudiarse el artículo 70 únicamente mediante una copia consolidada anterior a esa reforma.

## Contenido excluido

- ordenación completa de puestos, cuerpos y escalas;
- pérdida de la relación de servicio;
- retribuciones;
- derechos, deberes, permisos y situaciones administrativas;
- régimen disciplinario;
- negociación colectiva;
- reglamentos completos de provisión y selección.

Se excluyen porque no aparecen en el epígrafe, salvo las referencias necesarias para entender los bloques exigidos.

## Estado de las acciones originales — **02/11/2026**

- [x] Corregido el cuadro de plazos de `manual.md`: **cuatro años** para programa temporal en Castilla-La Mancha.
- [x] Comprobado que `LP-SP-05` marca **cuatro años** y que `tests/validate.mjs` lo exige.
- [x] Comprobado que el banco del tema 6 pregunta por **cuatro años**, no por dos.
- [ ] Pendiente la **revisión jurídica y funcional completa** de todo el tema, distinta de esta corrección puntual.

> ⚠️ **¡Foco Examen!:** Programa temporal interino **4 años** en Castilla-La Mancha, OEP **3 años** de ejecución, promoción interna **2 años** de servicio activo: **tres números diferentes**.

## Auditoría jurídica de **04/11/2026**

Concluido [cotejo de 12 preguntas y 36 distractores](cotejo-integral-2026-11-04.md) en seis bloques del programa. **AUDITADO contenido**, no prueba funcional real.

