# Estado de auditoría · OpoWeb v2

Última actualización: **23 de julio de 2026**.

## Cambios reales de esta revisión

### UC3M · corrección transversal del Tema 19

Durante la revisión transversal de los 20 temas se ha detectado una referencia jurídica derogada en:

- `content/uc3m/tema-19/fuentes.md`;
- `content/uc3m/tema-19/matriz.json`.

Ambos archivos citaban la **Ley 9/1990, de 8 de noviembre, reguladora de la Hacienda de la Comunidad de Madrid**, como norma vigente del régimen presupuestario.

La Ley 9/1990 quedó derogada con efectos de **1 de enero de 2026** por la disposición derogatoria única de la **Ley 5/2025, de 23 de diciembre, de Hacienda de la Comunidad de Madrid** (`BOE-A-2026-3217`).

La referencia ha sido sustituida por la Ley 5/2025 y se ha añadido un control de vigencia expreso para impedir que la norma derogada vuelva a tratarse como fuente vigente del Presupuesto UC3M 2026.

### La Puebla de Montalbán · Tema 6

Se mantiene corregida directamente la fuente del Tema 6 con la duración máxima total de **cuatro años** para los programas temporales de personal funcionario interino en Castilla-La Mancha. El parche transitorio de interfaz ya está retirado.

### Diputación de Toledo · Tema 31

Se mantiene integrada en el manual principal la reforma introducida por el **Reglamento (UE) 2024/1183**, con Cartera Europea de Identidad Digital, declaraciones electrónicas de atributos, archivo electrónico, libros mayores electrónicos y gestión remota de dispositivos cualificados.

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
- Estado editorial: **20 de 20 temas** en `EN_REVISION_USUARIO`.
- Revisión transversal iniciada.
- Primera incidencia transversal corregida: sustitución de la derogada Ley 9/1990 por la vigente Ley 5/2025 en el Tema 19.

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
| La Puebla | **19/19** | Completa |
| Diputación C1 | **40/40** | Tema 31 actualizado a eIDAS 2; OAPGT pendiente |
| UC3M C2 | **20/20** | Revisión transversal iniciada; Tema 19 corregido |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.16`.
- Caché del servicio: `opoweb-v2-0.27.16`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Continuar la revisión transversal final de los **20 temas UC3M**.
2. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
3. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
4. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.