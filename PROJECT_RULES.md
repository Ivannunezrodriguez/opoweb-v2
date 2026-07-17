# Reglas vinculantes de OpoWeb v2

> **«Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.»**

Estas reglas son obligatorias para todo el proyecto:

1. Se reconstruye **un solo tema cada vez**.
2. Cada tema comienza con el **epígrafe oficial literal**.
3. Debe existir una matriz `inciso → norma → artículos → contenido exigible`.
4. El desarrollo debe explicar reglas, órganos, competencias, plazos, mayorías, requisitos, excepciones y efectos.
5. Se separa materia obligatoria, complemento imprescindible, ampliación útil y contenido ajeno.
6. Las fuentes principales deben ser oficiales y vigentes.
7. No se completan lagunas con invenciones o inferencias no verificadas.
8. Las preguntas y supuestos deben ser trazables a una norma y, cuando proceda, a un artículo concreto.
9. Antes de publicar cada tema se entrega feedback individual al usuario.
10. Un tema solo cambia a `APROBADO_USUARIO` tras la expresión **«Tema X aprobado»**.
11. No se presenta el siguiente tema como cerrado hasta cerrar o dejar expresamente pendiente el anterior.
12. Se prohíben porcentajes o etiquetas de autosuficiencia basados en volumen, palabras, tablas o cantidad de preguntas.
13. La integración continua valida estructura e integridad técnica; la suficiencia pedagógica exige revisión humana.
14. Una convocatoria solo está terminada cuando todos sus temas han sido aprobados individualmente.
15. El repositorio legado `opoweb` sirve únicamente como archivo y fuente de migración controlada.
16. No se migran automáticamente resúmenes, bancos de preguntas, porcentajes, parches ni auditorías históricas.

## Estados permitidos

- `PENDIENTE_RECONSTRUCCION`
- `BORRADOR`
- `EN_REVISION_USUARIO`
- `APROBADO_USUARIO`
- `PUBLICADO`

Cada cambio de estado debe quedar documentado.