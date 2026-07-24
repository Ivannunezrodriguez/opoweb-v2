# Estado de auditoría · OpoWeb v2

Última actualización: **24 de julio de 2026**.

## Cambios reales de esta revisión

### UC3M · seguimiento oficial de la convocatoria

El portal oficial de empleo de la Universidad Carlos III de Madrid publica y mantiene vigentes los siguientes datos de la convocatoria de la Escala Auxiliar Administrativa C2:

- plazo de solicitudes: del **9 de julio al 5 de agosto de 2026**, ambos inclusive;
- fecha previsible del ejercicio: **sábado, 21 de noviembre de 2026, a las 10:00 horas**;
- **34 plazas**, de las cuales **2** están reservadas a personas con discapacidad;
- sistema de **concurso-oposición libre**.

El registro interno de convocatorias no contenía el plazo completo ni la fecha previsible del ejercicio. Se ha corregido `data/convocatorias.json` y se ha incorporado la fuente oficial específica de seguimiento.

> ⚠️ **¡Foco Examen!:** La fecha del **21 de noviembre de 2026** tiene carácter **previsible**; no debe tratarse como convocatoria definitiva del ejercicio hasta que se publique el anuncio correspondiente.

### UC3M · revisión transversal editorial

Se mantiene revisado el Tema 17 contra el Real Decreto 534/2024, su modificación por el Real Decreto 535/2026 y la información oficial de admisión UC3M 2026/2027. No se ha detectado en este bloque una nueva incorrección jurídica que exija modificar sus archivos.

Correcciones transversales acumuladas:

- Tema 14: competencias presupuestarias, reserva mínima del **5 %** para investigación y precisión del objetivo del **1 % del PIB**;
- Tema 15: elección, mayoría, mandato, reelección, Adjunto, memoria y órgano asesor del Defensor Universitario;
- Tema 16: ECTS, tiempo parcial, permanencia, convocatorias y porcentajes de evaluación;
- Tema 19: sustitución de la derogada Ley 9/1990 por la vigente Ley 5/2025 de Hacienda de la Comunidad de Madrid.

### Seguimiento de las demás convocatorias

- Diputación de Toledo: continúa abierto el plazo de solicitudes hasta el **31 de julio de 2026**; no consta lista provisional de esta convocatoria.
- La Puebla de Montalbán: no consta lista provisional oficial verificada.
- Carranque: no consta nueva publicación oficial verificada.
- CPEIS Toledo: continúa abierto el plazo hasta el **6 de agosto de 2026**.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Estado editorial: **completo**.
- No consta todavía lista provisional oficial verificada.

### Diputación Provincial de Toledo · Administrativo C1

- **2 plazas** por oposición libre.
- Solicitudes abiertas hasta el **31 de julio de 2026**.
- Estado editorial: **40 de 40 temas**.
- Tema 31 alineado con eIDAS 2.
- Pendiente crítico: fuente oficial íntegra y vigente de los Estatutos del OAPGT.

### Universidad Carlos III de Madrid · Auxiliar Administrativa C2

- **34 plazas**, de ellas **2 reservadas a discapacidad**.
- Sistema: concurso-oposición libre.
- Solicitudes hasta el **5 de agosto de 2026**.
- Ejercicio previsto para el **21 de noviembre de 2026 a las 10:00 horas**.
- Estado editorial: **20 de 20 temas** en revisión transversal.

### Carranque · Auxiliar Administrativo C2

- Usuario inscrito.
- Seguimiento en mantenimiento.
- No consta publicación posterior oficial verificada.

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
| La Puebla | **19/19** | Completa |
| Diputación C1 | **40/40** | Tema 31 actualizado a eIDAS 2; OAPGT pendiente |
| UC3M C2 | **20/20** | Revisión transversal activa; seguimiento oficial actualizado |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.20`.
- Caché del servicio: `opoweb-v2-0.27.20`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Continuar la revisión transversal final de los **20 temas UC3M**.
2. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
3. Mantener seguimiento de UC3M hasta el **5 de agosto de 2026** y posterior publicación de admitidos.
4. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
5. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.
