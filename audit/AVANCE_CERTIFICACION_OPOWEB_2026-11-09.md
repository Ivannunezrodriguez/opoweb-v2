# OpoWeb — seguimiento de certificación integral (09/11/2026)

## Resultado de esta sesión

**Certificación integral del portal: NO ALCANZADA.** Se ha añadido un bloque de evidencia oficial relativa a OAPGT y un test preventivo, pero no se ha ejecutado/verificado en esta sesión una validación E2E real ni la reconstrucción integral de Estatutos.

| Área | Evidencia incorporada | Resultado |
|---|---|---|
| Diputación C1 T22 | BOP Toledo **92/2023**, delegación de contratación | Evidencia parcial; **EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES** |
| Diputación C2 T6 | Igual publicación y ficha primaria compartida | Evidencia parcial; **BORRADOR** |
| BOP **92/2023** | Delegación **Presidencia → Dirección** para representación y **Consejo Rector → Dirección** para los expedientes **16_2021** y **5_2023** | Contraste textual oficial; **sin captura visual completada** |
| Estatutos OAPGT | Referencias a **art. 9 y art. 10** inconsistentes dentro de ese anuncio | **No resolver por inferencia** |
| CI | Prueba `validate-oapgt-contratacion-2023-20261109.mjs` incorporada a `validate.yml` | Comprobaciones estáticas cotejadas con ficheros; **ejecución GitHub Actions no confirmada** |

Fuente: [BOP Toledo 92/2023, I-2824](https://bop.diputoledo.es/webEbop/DocGet?id=23058163%3B0&insert_number=2824&insert_year=2023). Detalle: [ficha de contratación OAPGT 2023](../content/diputacion-toledo-auxiliar-c2/tema-06/oapgt-contratacion-bop-2023.md).

## Criterios irrenunciables antes de certificar

1. **Cotejo literal de programa**: todos los epígrafes exigidos con artículos, excepciones, órganos, plazos y vigencia legal aplicable.
2. **Fuente primaria**: registro trazable de BOE/BOP/DOCM y consolidación cuando corresponda. **No** certificar Estatutos OAPGT con textos iniciales o extractos históricos.
3. **Banco de preguntas**: todas las respuestas correctas y distractores fundamentados uno a uno; el validador de estructura no es auditoría legal.
4. **Interfaz real**: navegación de todos los temas, tests, supuestos, simulacros, rutas, progreso y estado sin conexión probados en navegadores de escritorio y móvil.
5. **Accesibilidad y seguridad**: comprobación de teclado, lector de pantalla, WCAG, enlaces externos, manejo de datos y persistencia.
6. **CI y despliegue**: comprobar el resultado **del commit concreto** y la publicación final, por separado.
7. **Acta de cierre**: por cada tema e interfaz, fecha, fuente primaria, versión, pruebas reproducibles, defectos corregidos y **aprobación de revisión**. Sin las siete evidencias **no procede estado CERTIFICADO_INTEGRAL**.

## Bloqueos conservados

- **C1 T22 / C2 T6 OAPGT**: texto oficial íntegro de **1996**, corrección, finalización de reforma **2004** y cambios hasta 2026.
- **Olías T13**: fuente íntegra **INE VIAS/PSEU** para municipio **45122**.
- **UC3M**: fecha oficial verificable de publicación de la resolución definitiva, corte legal establecido por la base **primera.7**.
- **Web general**: ejecución E2E, accesibilidad y trazabilidad legal de todos los distractores.

**Nota metodológica:** las cifras históricas de temas **AUDITADO** o **APROBADO_USUARIO** no equivalen por sí solas a certificación integral. La certificación debe sustentarse en evidencias y no en un porcentaje autodeclarado.
