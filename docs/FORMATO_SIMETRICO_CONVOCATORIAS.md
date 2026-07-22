# Formato simétrico de convocatorias

Este documento fija el formato base común para las tres convocatorias prioritarias de OpoWeb:

- La Puebla de Montalbán · Auxiliar Administrativo C2.
- Diputación Provincial de Toledo · Administrativo C1.
- Universidad Carlos III de Madrid · Escala Auxiliar Administrativa C2.

## Estructura mínima de cada tema

Cada entrada de tema en el programa debe declarar, como mínimo:

```json
{
  "numero": 1,
  "titulo": "Epígrafe oficial",
  "estado": "BORRADOR",
  "manual": "content/<convocatoria>/tema-01/manual.md",
  "fuentes": "content/<convocatoria>/tema-01/fuentes.md",
  "matriz": "content/<convocatoria>/tema-01/matriz.json",
  "preguntas": "content/<convocatoria>/tema-01/preguntas.json"
}
```

Los campos adicionales, como `bloque`, `capitulos`, `subcapitulos`, `trazabilidad`, `feedback` o `aprobacion`, son compatibles, pero no sustituyen a los cuatro recursos mínimos.

## Estados editoriales comunes

1. `PENDIENTE_RECONSTRUCCION`
2. `BORRADOR`
3. `EN_REVISION_USUARIO`
4. `APROBADO_USUARIO`
5. `PUBLICADO`

Un tema no debe figurar como aprobado o publicado si faltan archivos declarados o si su contenido no ha sido comprobado.

## Contenido de los recursos

### `manual.md`

Desarrollo completo y ajustado al epígrafe oficial.

### `fuentes.md`

Relación de normas, textos consolidados y documentación institucional utilizada, con fecha de revisión.

### `matriz.json`

Control de cobertura del epígrafe: apartados, estado de cobertura, conceptos incluidos, fuentes y aprobación.

### `preguntas.json`

Banco de preguntas tipo test con respuesta correcta, explicación y referencia normativa.

## Regla de simetría

La simetría significa igualdad de estructura y experiencia de uso, no igualdad artificial del contenido. Cada convocatoria mantiene su programa oficial, pero la aplicación carga los mismos tipos de recursos y utiliza los mismos estados editoriales.

## Situación a 22 de julio de 2026

- La Puebla ya utiliza manual, matriz y preguntas en sus temas, con recursos adicionales en varios de ellos.
- Diputación declara manual, fuentes, matriz y preguntas en su programa.
- UC3M ya ha sido adaptada en su programa para declarar los mismos cuatro recursos y los mismos estados editoriales.
- Pendiente: crear y revisar en UC3M los archivos `fuentes.md`, `matriz.json` y `preguntas.json` de cada tema antes de elevar su estado editorial.

## Orden de ejecución

1. Comprobar los veinte manuales UC3M.
2. Crear fuentes y matriz por tema.
3. Crear preguntas por tema con justificación.
4. Comprobar que la interfaz carga los cuatro recursos en las tres convocatorias.
5. Añadir supuestos y simulacros globales con el mismo formato.
