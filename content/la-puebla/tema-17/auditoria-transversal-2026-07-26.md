# Auditoría transversal · Tema 17 · 26 de julio de 2026

## Alcance revisado

- `manual.md`
- `matriz.json`
- `preguntas.json`
- cinco bloques modulares
- `fuentes.md`

## Cobertura técnica

El contenido cubre de forma coherente el epígrafe oficial sobre procesamiento de texto con Microsoft Word y LibreOffice Writer:

- creación, apertura, edición, guardado, impresión y exportación;
- formatos `.docx`, `.odt`, `.dotx` y `.ott`;
- formato directo, estilos, listas, tablas, imágenes, encabezados y pies;
- saltos de sección en Word y estilos de página en Writer;
- revisión ortográfica, comentarios, control de cambios y combinación de correspondencia;
- diferencias de interfaz y métodos abreviados dependientes de la configuración.

## Verificación de fuentes

Se contrastaron fuentes primarias de Microsoft y The Document Foundation. Microsoft mantiene Word para Microsoft 365 y Word 2024 como referencias actuales y confirma el uso de saltos de sección para aplicar diseños diferentes dentro de un documento.

Se detectó una incidencia relevante: las páginas oficiales de soporte de Microsoft en español no ofrecen actualmente una información completamente uniforme sobre determinados atajos localizados. Según la página o la variante lingüística, aparecen combinaciones distintas para **Seleccionar todo** y **Guardar**. Además, Word y Writer permiten personalización y pueden variar por idioma y versión.

Por ello, no es técnicamente seguro presentar como regla universal que Word utiliza siempre `Ctrl + A` y `Ctrl + S` mientras Writer utiliza siempre `Ctrl + E` y `Ctrl + G`.

## Cambios aplicados

1. `manual.md`
   - fecha de revisión técnica actualizada a **26 de julio de 2026**;
   - corregida la afirmación «Banco de preguntas: vacío»;
   - el estado real refleja ahora **12 preguntas revisadas y trazables**;
   - retiradas las equivalencias absolutas de atajos localizados;
   - añadida advertencia `¡Foco Examen!` sobre idioma, versión y personalización.

2. `preguntas.json`
   - estado normalizado a `APROBADO_USUARIO` y versión `2026-07-26`;
   - sustituidas las preguntas 8 y 9, que dependían de atajos localizados discutibles, por preguntas estables sobre contexto de los atajos y diferencia entre guardar y exportar;
   - se mantienen **12 preguntas**, respuesta única, justificación y trazabilidad.

## Incidencias abiertas

- `matriz.json` conserva todavía las equivalencias antiguas de atajos y debe alinearse con esta corrección.
- El título visible conserva la expresión histórica «Manual modular».
- Deben validarse conjuntamente los enlaces relativos de los cinco bloques y `fuentes.md` durante la normalización global.
- Las llamadas destacadas de los bloques deben homogeneizarse al patrón OpoWeb sin alterar referencias internas.

## Resultado

**Tema 17 revisado transversalmente con errores técnicos corregidos.** Permanece en `EN_REVISION` hasta alinear `matriz.json`, completar la normalización editorial y superar los controles generales de cierre de la fase 2.