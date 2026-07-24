# Estado de auditoría · OpoWeb v2

Última actualización: **24 de julio de 2026**.

## Fase 2 · revisión transversal

Estado: **EN_AUDITORIA**.

Se ha iniciado formalmente la revisión transversal de todos los contenidos publicados. El patrón editorial común queda fijado en `EDITORIAL_GUIDE.md` y el avance verificable se registra en `TRANSVERSAL_REVIEW.md`.

La revisión se aplica por bloques para:

- unificar estructura, encabezados y estilo;
- homogeneizar tablas y esquemas;
- eliminar duplicidades relevantes;
- revisar enlaces internos;
- comprobar la trazabilidad de preguntas y supuestos;
- mantener la vigencia jurídica de cada tema.

La fase 2 no se considerará cerrada hasta que todos los proyectos activos superen el control editorial y jurídico transversal.

## Cambios reales de esta revisión

### La Puebla · inicio de la pasada sistemática

- Temas 1 y 2 incorporados al control transversal como `EN_REVISION`.
- Confirmado un patrón editorial común que debe corregirse sin alterar el contenido jurídico:
  - sufijo histórico «Manual reconstruido»;
  - estados editoriales en mayúsculas no normalizados;
  - mensajes internos del proceso de reconstrucción visibles en el manual;
  - varios encabezados de nivel `#` dentro de un mismo documento.
- Creado `TRANSVERSAL_REVIEW.md` para impedir cierres por estimación y registrar cada tema con evidencias.
- Los temas 3 a 19 permanecen pendientes de pasada sistemática.

### Inicio de la fase 2

- Creada `EDITORIAL_GUIDE.md` como norma común de maquetación y revisión.
- Definidos los criterios mínimos de cierre transversal por tema.
- Prioridad de revisión: La Puebla, UC3M y Diputación de Toledo.
- Carranque y Las Ventas con Peña Aguilera quedan fuera del seguimiento activo por decisión del usuario.

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
- CPEIS Toledo: continúa abierto el plazo hasta el **6 de agosto de 2026**.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Estado editorial: **completo**.
- Estado fase 2: **temas 1 y 2 en revisión; temas 3–19 pendientes**.
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

- Carranque: archivada por decisión del usuario.
- Las Ventas con Peña Aguilera: archivada porque el usuario confirmó que no se presentará.

## Estado por proyectos

| Proyecto | Cobertura editorial | Estado fase 2 |
|---|---:|---|
| La Puebla | **19/19** | Temas 1–2 en revisión; 3–19 pendientes |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Fuera de la fase editorial |

## Versión de publicación

- Versión de interfaz: `v0.27.20`.
- Caché del servicio: `opoweb-v2-0.27.20`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Normalizar los Temas 1 y 2 de La Puebla y aplicar el patrón al resto de sus **19 temas**.
2. Completar la revisión transversal de los **20 temas UC3M**.
3. Revisar transversalmente los **40 temas de Diputación**.
4. Mantener seguimiento oficial de La Puebla, Diputación y UC3M.
5. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.
