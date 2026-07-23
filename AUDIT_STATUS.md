# Estado de auditoría · OpoWeb v2

Última actualización: **23 de julio de 2026**.

## Cambios reales de esta revisión

### La Puebla de Montalbán · Tema 6 corregido en la fuente

Se ha corregido directamente `content/la-puebla/tema-06/manual.md` para reflejar la duración máxima vigente de los programas temporales de personal funcionario interino en Castilla-La Mancha:

- duración máxima total: **cuatro años**;
- posibilidad de prórroga únicamente cuando el nombramiento inicial sea inferior, sin superar ese máximo total.

La fuente ya no contiene las menciones incorrectas a **dos años**.

#### Parche transitorio retirado

Al quedar corregido el Markdown fuente, se han eliminado:

- `assets/tema6-interinidad-correction.js`;
- su carga desde `index.html`;
- su precarga desde `sw.js`.

También se ha retirado el workflow temporal utilizado exclusivamente para aplicar la sustitución segura sobre el archivo extenso.

### Diputación de Toledo · Tema 31 actualizado a eIDAS 2

Se mantiene integrada en el manual principal la reforma introducida por el **Reglamento (UE) 2024/1183**, con Cartera Europea de Identidad Digital, declaraciones electrónicas de atributos, archivo electrónico, libros mayores electrónicos y gestión remota de dispositivos cualificados.

## Estado de convocatorias activas

### La Puebla de Montalbán · Auxiliar Administrativo C2

- Inscripción verificada documentalmente.
- Programa oficial de **19 temas**.
- Estado editorial: **completo, sin rectificación jurídica pendiente en el Tema 6**.
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
- Pendiente revisión transversal, homogeneización y aprobación del usuario.

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
| La Puebla | **19/19** | Completa; incidencia del Tema 6 cerrada |
| Diputación C1 | **40/40** | Tema 31 actualizado a eIDAS 2; OAPGT pendiente |
| UC3M C2 | **20/20** | Primera cobertura completa; pendiente revisión transversal |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Versión de publicación

- Versión de interfaz: `v0.27.15`.
- Caché del servicio: `opoweb-v2-0.27.15`.
- Precarga offline completa de UC3M y Diputación.

## Orden de trabajo vigente

1. Realizar revisión transversal final de los **20 temas UC3M**.
2. Mantener seguimiento de Diputación hasta el **31 de julio de 2026**.
3. Mantener seguimiento del CPEIS hasta el **6 de agosto de 2026** o hasta decisión del usuario.
4. Cerrar OAPGT únicamente con fuente oficial íntegra y verificable.