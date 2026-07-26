# Auditoría transversal · Tema 18 · 26 de julio de 2026

## Alcance revisado

- `manual.md`
- `matriz.json`
- `preguntas.json`
- cinco bloques modulares
- `fuentes.md`

## Cobertura técnica

El contenido cubre de forma coherente el epígrafe oficial sobre elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc:

- libros, hojas, filas, columnas, celdas, rangos y referencias;
- formatos nativos `.xlsx`, `.ods`, plantillas y compatibilidad;
- fórmulas, operadores, referencias relativas, absolutas y mixtas;
- funciones básicas y errores frecuentes;
- formato, validación, ordenación, filtros, subtotales y tablas dinámicas;
- gráficos, impresión, exportación a PDF, protección y accesibilidad;
- diferencias estructurales entre Excel y Calc.

## Verificación de fuentes

Se contrastaron el epígrafe oficial del BOP de Toledo número 82, de 5 de mayo de 2026, y las referencias primarias de Microsoft y The Document Foundation recogidas en `fuentes.md` y `matriz.json`.

No se detectó error técnico material en el núcleo del tema. La comparación entre Excel y Calc, el tratamiento de referencias, la distinción entre formato y valor, el comportamiento de los filtros y la naturaleza del CSV son coherentes y examinables.

## Cambios aplicados

1. `manual.md`
   - fecha de revisión técnica actualizada a **26 de julio de 2026**;
   - corregida la afirmación «Banco de preguntas: vacío»;
   - el estado real refleja ahora **12 preguntas revisadas y trazables**.

2. `preguntas.json`
   - estado normalizado de `GENERADO_PENDIENTE_REVISION_USUARIO` a `APROBADO_USUARIO`;
   - versión actualizada a `2026-07-26`;
   - se conservan las **12 preguntas**, respuestas, justificaciones, trampas y referencias.

## Incidencias abiertas

- El título visible conserva la expresión histórica «Manual modular».
- Deben validarse conjuntamente los enlaces relativos de los cinco bloques y `fuentes.md` durante la normalización global.
- Las llamadas destacadas de los bloques deben homogeneizarse al patrón OpoWeb sin alterar referencias internas.
- Los atajos localizados de `matriz.json` requieren una revisión conjunta con el criterio aplicado en el Tema 17 para evitar afirmaciones absolutas dependientes del idioma o configuración.

## Resultado

**Tema 18 revisado transversalmente con cambios verificados.** Permanece en `EN_REVISION` hasta completar la normalización editorial y los controles generales de cierre de la fase 2.