# Auditoría transversal · La Puebla · Tema 13

Fecha: **25 de julio de 2026**.

## Alcance revisado

- `manual.md`
- `matriz.json`
- `preguntas.json`
- bloques modulares y trazabilidad declarados en la matriz
- vigencia jurídica de eIDAS, Ley 6/2020, Leyes 39/2015 y 40/2015 y Real Decreto 203/2021

## Resultado jurídico

La cobertura es coherente con el epígrafe oficial: usos del certificado electrónico, diferencia entre identificación y firma, tipos y soportes, prestadores y autoridades de registro, lista de confianza, validación, revocación y servicios electrónicos de confianza.

Se confirma la incorporación del Reglamento (UE) 2024/1183, que amplía el marco eIDAS con archivo electrónico, declaraciones electrónicas de atributos y libros mayores electrónicos. También se confirma la plataforma estatal de verificación prevista en el artículo 16 del Real Decreto 203/2021.

No se detecta en esta pasada una incorrección jurídica material.

## Incidencias editoriales y de estado

1. El título conserva la etiqueta histórica `Manual modular`.
2. El estado visible del manual no utiliza literalmente los estados normalizados del proyecto.
3. El manual afirma que el banco está vacío, pero `preguntas.json` contiene 12 preguntas completas y trazables.
4. `preguntas.json` mantiene el estado `GENERADO_PENDIENTE_REVISION_USUARIO`, mientras la matriz y el manual registran aprobación del usuario.
5. La fecha del banco y de la matriz es anterior a esta auditoría.
6. Deben validarse todos los enlaces de los cinco bloques modulares antes del cierre de fase 2.

## Decisión de fase 2

Estado: **EN_REVISION**.

La revisión jurídica está superada, pero el tema no puede marcarse `CERRADO_FASE_2` hasta corregir la contradicción del banco, normalizar los estados visibles y validar los enlaces internos de los bloques.