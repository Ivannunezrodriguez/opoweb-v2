# Auditoría transversal · La Puebla · Tema 16

**Fecha:** 29 de julio de 2026  
**Estado:** REVISADO_CON_CAMBIOS_VERIFICADOS

## Alcance

Se han comprobado el manual principal, los cinco bloques modulares, `matriz.json`, `preguntas.json`, las rutas internas y el contrato de lectura del frontend.

## Vigencia técnica

- La aplicación de escritorio **Internet Explorer 11** finalizó su soporte el **15 de junio de 2022** en determinadas versiones de Windows 10.
- Microsoft mantiene el **modo Internet Explorer de Edge al menos hasta 2029** y anuncia un preaviso mínimo de **un año** antes de retirarlo.
- En Microsoft Edge, `Ctrl + Mayús + N` abre una ventana InPrivate; `Ctrl + Mayús + P` abre el diálogo de impresión del sistema.

Fuentes oficiales verificadas:

- Microsoft Lifecycle: fin de soporte de Internet Explorer 11.
- Microsoft Support: métodos abreviados de teclado en Microsoft Edge.

## Manual y matriz

- El epígrafe coincide con el programa oficial publicado en el BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.
- La estructura modular cubre navegación, pestañas, favoritos, historial, descargas, privacidad, seguridad, Edge, Internet Explorer y modo IE.
- La matriz diferencia correctamente Edge, IE11 y modo IE y conserva los atajos diferenciales propensos a pregunta de examen.

## Banco de preguntas

- Estado: `APROBADO_USUARIO`.
- Total: **12 preguntas**.
- Cada pregunta tiene **4 opciones**, índice de respuesta válido, justificación, trampa y referencia.
- La clave `pregunta` es compatible con el frontend actual, que admite `pregunta` o `enunciado`; queda cerrada la incidencia de contrato de datos del Tema 16.

## Resultado

No se detectan errores técnicos materiales en el contenido. Quedan como tareas editoriales generales la homogeneización completa de llamadas `¡Foco Examen!` y la revisión visual final de enlaces y esquemas.
