# Estado de auditoría · OpoWeb v2

Última actualización: **27 de julio de 2026**.

## Fase 2 · revisión transversal

Estado: **EN_AUDITORIA**.

El patrón editorial común está definido en `EDITORIAL_GUIDE.md` y el avance verificable se registra en `TRANSVERSAL_REVIEW.md`.

La fase 2 no se considerará cerrada hasta que todos los proyectos activos superen el control editorial, técnico y jurídico transversal.

## Cambios reales acumulados

### La Puebla de Montalbán

- La pasada transversal de los **19 temas** está completada.
- Tema 10: vigencia de TRLRHL y LGT reconfirmada con BOE; `matriz.json` actualizada a `2026-07-27`; banco de **12 preguntas** verificado sin errores materiales; detectada una contradicción pendiente en el manual, que todavía afirma que las preguntas no están creadas.
- Temas 11–19: corregida la contradicción que declaraba vacío un banco que ya contenía **12 preguntas**.
- Temas 13–19: estados de bancos normalizados a `APROBADO_USUARIO` cuando procedía.
- Tema 17: eliminadas reglas absolutas sobre atajos localizados de Word y Writer; banco y matriz alineados.
- Tema 18: eliminadas reglas absolutas sobre atajos localizados de Excel y Calc; matriz alineada.
- Temas 13, 14 y 15: título principal y estado visible normalizados; retirados metadatos internos de aprobación y apartados finales de proceso.
- Tema 15: vigencia técnica contrastada nuevamente con documentación oficial de Microsoft. Windows 10 terminó su soporte ordinario el **14 de octubre de 2025**; las unidades de red siguen dependiendo de conectividad y permisos; la aplicación Escáner de Windows guarda por defecto en la carpeta de digitalizaciones dentro de Imágenes si no se selecciona otro destino.

Estado de La Puebla en fase 2: **19 de 19 temas revisados transversalmente; normalización editorial y controles finales todavía abiertos**.

### Incidencias transversales abiertas

- Dieciséis manuales conservan todavía títulos históricos, estados visibles o mensajes internos que no forman parte del contenido de estudio.
- El manual del Tema 10 mantiene una contradicción verificable sobre la existencia del banco de preguntas.
- Los manuales no modulares deben quedar con un único encabezado `#`.
- Persisten llamadas destacadas no homogéneas frente al patrón `> ⚠️ **¡Foco Examen!:**`.
- Deben validarse enlaces internos, esquemas finales y duplicidades.
- Los bancos de los Temas 6 y 16 usan la clave `pregunta`; debe verificarse el contrato real del frontend antes de unificarla con `enunciado`.
- Ningún tema está todavía marcado como `CERRADO_FASE_2`.

## Seguimiento oficial de convocatorias

Comprobación realizada el **27 de julio de 2026**:

- **CPEIS Toledo:** siguen abiertos hasta el **6 de agosto de 2026** los procesos de **4 plazas de Auxiliar Administrativo C2** y **1 plaza de Administrativo C1**. No consta lista provisional en la página oficial del proceso.
- **Diputación Provincial de Toledo:** el plazo de la convocatoria de **2 plazas de Administrativo C1 por oposición libre** continúa abierto hasta el **31 de julio de 2026**. No consta lista provisional de esta convocatoria.
- **UC3M:** la convocatoria de **34 plazas de Auxiliar Administrativa C2**, con **2 reservadas a discapacidad**, sigue abierta hasta el **5 de agosto de 2026**. La fecha del **21 de noviembre de 2026 a las 10:00** continúa publicada como fecha **previsible**, no como citación definitiva.
- **La Puebla de Montalbán:** no se ha localizado una nueva publicación oficial que altere el estado registrado; sigue sin constar lista provisional verificada.

`data/convocatorias.json` ha sido actualizado con la comprobación del **27 de julio de 2026** y con el avance real de la revisión transversal de La Puebla.

> ⚠️ **¡Foco Examen!:** La fecha de la UC3M del **21 de noviembre de 2026** sigue siendo **previsible**. No debe tratarse como convocatoria definitiva del ejercicio hasta que exista publicación expresa.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Cobertura editorial: **19/19**.
- Estado fase 2: pasada transversal completa; normalización y cierre final pendientes.
- No consta todavía lista provisional oficial verificada.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes abiertas hasta el **31 de julio de 2026**.
- Cobertura editorial: **40/40 temas**.
- Estado fase 2: en revisión transversal.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Solicitudes hasta el **5 de agosto de 2026**.
- Ejercicio previsto para el **21 de noviembre de 2026 a las 10:00 horas**, con carácter previsible.
- Cobertura editorial: **20/20 temas**.
- Estado fase 2: en revisión transversal.

### CPEIS Toledo

Se mantiene en `SOLO_SEGUIMIENTO`, pendiente de decisión del usuario:

- **4 plazas** de Auxiliar Administrativo C2;
- **1 plaza** de Administrativo C1;
- plazo hasta el **6 de agosto de 2026**.

### Convocatorias archivadas

- Carranque: mantenimiento documental, sin desarrollo editorial prioritario.
- Las Ventas con Peña Aguilera: archivada porque el usuario confirmó que no se presentará.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado fase 2 |
|---|---:|---|
| La Puebla | **19/19** | Pasada transversal completa; cierre editorial pendiente |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Fuera de la fase editorial |

## Orden de trabajo vigente

1. Corregir la contradicción y normalizar editorialmente el Tema 10 preservando su numeración y trazabilidad.
2. Continuar la normalización editorial de La Puebla desde el Tema 16.
3. Validar enlaces, llamadas destacadas y esquemas finales de los Temas 13–15.
4. Verificar el contrato del frontend para los bancos de los Temas 6 y 16.
5. Completar la revisión transversal de los **20 temas UC3M**.
6. Revisar transversalmente los **40 temas de Diputación**.
7. Mantener seguimiento oficial de La Puebla, Diputación, UC3M y CPEIS.
8. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.
