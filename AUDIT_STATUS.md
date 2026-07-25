# Estado de auditoría · OpoWeb v2

Última actualización: **25 de julio de 2026**.

## Fase 2 · revisión transversal

Estado: **EN_AUDITORIA**.

El patrón editorial común está definido en `EDITORIAL_GUIDE.md` y el avance verificable se registra en `TRANSVERSAL_REVIEW.md`.

La revisión se aplica por bloques para:

- unificar estructura, encabezados y estilo;
- homogeneizar tablas y esquemas;
- eliminar duplicidades relevantes;
- revisar enlaces internos;
- comprobar la trazabilidad de preguntas y supuestos;
- mantener la vigencia jurídica de cada tema.

La fase 2 no se considerará cerrada hasta que todos los proyectos activos superen el control editorial y jurídico transversal.

## Cambios reales de esta revisión

### La Puebla · Temas 10–12

- Tema 10: revisados `manual.md`, `matriz.json` y `preguntas.json`; vigencia del TRLRHL y de la LGT contrastada; corregido el estado antiguo del banco.
- Tema 11: revisada la recaudación voluntaria y ejecutiva, aplazamiento, compensación, devoluciones y apremio; corregidos el estado del banco y la afirmación errónea de que estaba vacío.
- Tema 12: revisadas las normas generales de los tributos locales, IBI, IAE, IVTM e IIVTNU; contrastado el TRLRHL consolidado, cuya última actualización publicada es de **3 de junio de 2026**.
- En el Tema 12 no se detecta error jurídico material en naturaleza, hecho imponible, no sujeción y sujetos pasivos.
- Corregido `content/la-puebla/tema-12/preguntas.json`: `GENERADO_PENDIENTE_REVISION_USUARIO` pasa a `APROBADO_USUARIO`, con versión **2026-07-25**.
- Corregido `content/la-puebla/tema-12/manual.md`: el banco no está vacío; contiene **12 preguntas revisadas y trazables**.
- Creada `content/la-puebla/tema-12/auditoria-transversal-2026-07-25.md`.

Estado de La Puebla en fase 2: **temas 1–12 en revisión; temas 13–19 pendientes**.

### Hallazgo editorial transversal

Los temas revisados mantienen, con distinta intensidad:

- títulos históricos como «Manual reconstruido» o «Manual modular»;
- varios encabezados `#` dentro de manuales no modulares;
- estados o fechas desalineados entre manual, matriz y banco;
- llamadas destacadas diferentes del patrón `> ⚠️ **¡Foco Examen!:**`;
- metadatos internos de reconstrucción que no deben formar parte del material final de estudio.

La normalización debe preservar la numeración de apartados y las referencias de los bancos de preguntas.

### Seguimiento oficial de convocatorias

Comprobación realizada el **25 de julio de 2026**:

- Diputación de Toledo: el portal oficial mantiene abierto el plazo hasta el **31 de julio de 2026**; no consta lista provisional.
- UC3M: convocatoria abierta del **9 de julio al 5 de agosto de 2026**; mantiene como fecha previsible del ejercicio el **21 de noviembre de 2026 a las 10:00 horas**; no consta lista provisional.
- CPEIS Toledo: permanecen abiertos hasta el **6 de agosto de 2026** los procesos de **4 plazas de Auxiliar Administrativo C2** y **1 plaza de Administrativo C1**.
- La Puebla de Montalbán: no consta lista provisional oficial verificada.

`data/convocatorias.json` mantiene esta comprobación.

> ⚠️ **¡Foco Examen!:** La fecha de la UC3M del **21 de noviembre de 2026** sigue siendo **previsible**, no una citación definitiva del ejercicio.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Estado editorial: **completo**.
- Estado fase 2: **temas 1–12 en revisión; temas 13–19 pendientes**.
- No consta todavía lista provisional oficial verificada.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes abiertas hasta el **31 de julio de 2026**.
- Estado editorial: **40 de 40 temas**.
- Tema 31 alineado con eIDAS 2.
- Estado fase 2: **en revisión transversal**.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Solicitudes hasta el **5 de agosto de 2026**.
- Ejercicio previsto para el **21 de noviembre de 2026 a las 10:00 horas**.
- Estado editorial: **20 de 20 temas**.
- Estado fase 2: **en revisión transversal**.

### CPEIS Toledo

Se mantiene en `SOLO_SEGUIMIENTO`, pendiente de decisión del usuario:

- **4 plazas** de Auxiliar Administrativo C2;
- **1 plaza** de Administrativo C1;
- plazo hasta el **6 de agosto de 2026**.

### Convocatorias archivadas

- Carranque: archivada del desarrollo editorial activo.
- Las Ventas con Peña Aguilera: archivada porque el usuario confirmó que no se presentará.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado fase 2 |
|---|---:|---|
| La Puebla | **19/19** | Temas 1–12 en revisión; 13–19 pendientes |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Fuera de la fase editorial |

## Versión de publicación

- Versión de interfaz: `v0.27.20`.
- Caché del servicio: `opoweb-v2-0.27.20`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Continuar la pasada sistemática de La Puebla desde el Tema 13.
2. Normalizar editorialmente los temas revisados sin romper referencias internas.
3. Completar la revisión transversal de los **20 temas UC3M**.
4. Revisar transversalmente los **40 temas de Diputación**.
5. Mantener seguimiento oficial de La Puebla, Diputación y UC3M.
6. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.