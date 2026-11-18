# Auditoría transversal · Tema 16 · 26 de julio de 2026

## Alcance

Revisión de `manual.md`, `matriz.json`, `preguntas.json` y trazabilidad técnica del Tema 16 de La Puebla de Montalbán.

## Fuentes oficiales contrastadas

- Microsoft Lifecycle: fin de soporte de la aplicación de escritorio Internet Explorer 11 para determinadas versiones de Windows 10 el 15 de junio de 2022.
- Microsoft Lifecycle: el modo Internet Explorer de Microsoft Edge mantiene soporte al menos hasta 2029 y Microsoft anuncia un preaviso mínimo de un año antes de su retirada.
- Microsoft Support: al cerrar todas las ventanas InPrivate se eliminan datos locales de navegación de esa sesión, pero permanecen los favoritos creados y los archivos descargados.

## Resultado técnico

No se detecta error técnico material en la delimitación entre Internet Explorer 11, Microsoft Edge y el modo IE. La explicación de URL, pestañas, favoritos, historial, descargas, cookies, caché, InPrivate, HTTPS, SmartScreen, perfiles y compatibilidad heredada es coherente con las fuentes oficiales revisadas.

## Banco de preguntas

El banco contiene 12 preguntas trazables al manual y figura en estado `APROBADO_USUARIO`, versión `2026-07-26`.

## Corrección aplicada

Se corrigió en `manual.md` la afirmación histórica «Banco de preguntas: vacío», sustituyéndola por «12 preguntas revisadas y trazables». También se actualizó la fecha de revisión técnica al 26 de julio de 2026.

## Incidencias editoriales abiertas

- `manual.md` conserva el título histórico «Manual modular».
- Deben validarse los enlaces de los cinco bloques y de `fuentes.md` durante la normalización final.
- El banco utiliza la clave `pregunta`, mientras otros temas utilizan `enunciado`; no se modifica sin comprobar previamente el contrato del frontend.

## Estado de fase 2

Tema 16: `EN_REVISION`. La contradicción del banco queda resuelta, pero no puede marcarse `CERRADO_FASE_2` hasta completar los controles comunes.