# Estado de auditoría · OpoWeb v2

Última actualización: **26 de julio de 2026**.

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

### La Puebla · Temas 10–17

- Tema 10: revisados `manual.md`, `matriz.json` y `preguntas.json`; vigencia del TRLRHL y de la LGT contrastada; corregido el estado antiguo del banco.
- Tema 11: revisada la recaudación voluntaria y ejecutiva, aplazamiento, compensación, devoluciones y apremio; corregidos el estado del banco y la afirmación errónea de que estaba vacío.
- Tema 12: revisadas las normas generales de los tributos locales, IBI, IAE, IVTM e IIVTNU; contrastado el TRLRHL consolidado, cuya última actualización publicada es de **3 de junio de 2026**.
- Tema 13: revisados certificados electrónicos, identificación, firma, tipos, soportes, prestadores, lista de confianza, validación y servicios de confianza; no se detectó error jurídico material.
- Tema 14: revisados órganos administrativos, competencia, órganos colegiados, abstención, recusación y estructura central, territorial y exterior de la Administración General del Estado; corregido el estado antiguo del banco.
- Tema 15: revisados Explorador de archivos, creación, copia, movimiento, borrado, unidades locales y de red, impresión y digitalización; corregidos el estado del banco y la afirmación errónea de que estaba vacío.
- Tema 16: revisados Microsoft Edge, Internet Explorer 11, modo IE, navegación, historial, descargas, privacidad, InPrivate y seguridad; corregido el estado antiguo del banco.
- Tema 17: revisados Microsoft Word y LibreOffice Writer, formatos, edición, estilos, diseño de página, revisión, combinación, impresión y PDF.
- En el Tema 17 se detectó una incidencia técnica: las fuentes oficiales en español no son uniformes en determinados atajos localizados de Word, por lo que no era seguro presentar como universales las parejas `Ctrl + A`/`Ctrl + S` frente a `Ctrl + E`/`Ctrl + G`.
- Corregido `content/la-puebla/tema-17/manual.md`: retiradas las equivalencias absolutas, añadida advertencia de versión, idioma y personalización y reflejado el banco real de **12 preguntas**.
- Corregido `content/la-puebla/tema-17/preguntas.json`: se sustituyeron las preguntas 8 y 9, dependientes de atajos localizados discutibles, por preguntas estables sobre contexto de atajos y diferencia entre guardar y exportar.
- Corregido `content/la-puebla/tema-17/auditoria-transversal-2026-07-26.md` para reflejar el hallazgo real.
- `content/la-puebla/tema-17/matriz.json` sigue pendiente de alineación con esta corrección.
- Permanecen abiertas en los Temas 13, 14 y 16 las contradicciones de sus manuales, que declaran vacío un banco con 12 preguntas; también queda pendiente validar enlaces modulares y normalizar títulos visibles.

Estado de La Puebla en fase 2: **temas 1–17 en revisión; temas 18–19 pendientes**.

### Hallazgo editorial transversal

Los temas revisados mantienen, con distinta intensidad:

- títulos históricos como «Manual reconstruido» o «Manual modular»;
- varios encabezados `#` dentro de manuales no modulares;
- estados o fechas desalineados entre manual, matriz y banco;
- llamadas destacadas diferentes del patrón `> ⚠️ **¡Foco Examen!:**`;
- metadatos internos de reconstrucción que no deben formar parte del material final de estudio.

La normalización debe preservar la numeración de apartados y las referencias de los bancos de preguntas.

### Seguimiento oficial de convocatorias

Comprobación realizada el **26 de julio de 2026**:

- CPEIS Toledo mantiene abiertos hasta el **6 de agosto de 2026** los procesos de **4 plazas de Auxiliar Administrativo C2** y **1 plaza de Administrativo C1**; no consta aún lista provisional en la página oficial del proceso.
- UC3M mantiene en su boletín oficial la convocatoria de Auxiliar Administrativa C2 publicada el **9 de julio de 2026**; no se ha localizado una lista provisional posterior.
- No se ha localizado una nueva publicación oficial que modifique el estado registrado de La Puebla de Montalbán o de la Diputación Provincial de Toledo.

`data/convocatorias.json` no requiere modificación en esta revisión.

> ⚠️ **¡Foco Examen!:** La fecha de la UC3M del **21 de noviembre de 2026** sigue siendo **previsible**, no una citación definitiva del ejercicio.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Estado editorial: **completo**.
- Estado fase 2: **temas 1–17 en revisión; temas 18–19 pendientes**.
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
| La Puebla | **19/19** | Temas 1–17 en revisión; 18–19 pendientes |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Fuera de la fase editorial |

## Versión de publicación

- Versión de interfaz: `v0.27.20`.
- Caché del servicio: `opoweb-v2-0.27.20`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Alinear `content/la-puebla/tema-17/matriz.json` con la corrección de atajos.
2. Continuar la pasada sistemática de La Puebla desde el Tema 18.
3. Corregir las contradicciones editoriales abiertas en los Temas 13, 14 y 16.
4. Normalizar editorialmente los temas revisados sin romper referencias internas.
5. Completar la revisión transversal de los **20 temas UC3M**.
6. Revisar transversalmente los **40 temas de Diputación**.
7. Mantener seguimiento oficial de La Puebla, Diputación y UC3M.
8. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.