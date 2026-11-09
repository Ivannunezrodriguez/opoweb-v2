# Acta de auditoría estructural de los 121 temas — 09/11/2026

## 1. Alcance y método REALMENTE EJECUTADO

Se accedió por **GitHub** a los **cinco manifiestos** de OpoWeb v2 y se leyeron individualmente los **cuatro archivos troncales por cada uno de sus 121 temas**: **manual.md**, **preguntas.json**, **matriz.json** y **fuentes.md** (o la ruta de trazabilidad indicada en el manifiesto). Se examinaron **484 archivos temáticos**, además de los manifiestos. Este cotejo fue **estructural y editorial automatizable**: no se cotejó la corrección jurídica de cada alternativa frente al BOE/BOP/DOCM en esta pasada.

Comprobaciones efectuadas: existencia y lectura de cada archivo, marcadores de examen y tablas de los manuales, JSON parseable de las matrices, número de tema y campo identificable del epígrafe, presencia de cobertura, validez formal de las cuatro opciones de cada pregunta, índice de respuesta, justificación, explicación de trampa y referencia, ausencia de duplicaciones dentro del banco, coherencia de respuesta literal cuando existe, y existencia de URLs en los archivos de fuentes.

## 2. Resultado cuantitativo comprobado

| Programa | Temas/manuales | Matrices | Bancos | Preguntas | Alternativas | Archivos de fuentes |
|---|---:|---:|---:|---:|---:|---:|
| **La Puebla C2** | **19** | **19** | **19** | **228** | **912** | **19** |
| **Diputación C1** | **40** | **40** | **40** | **807** | **3.228** | **40** |
| **Diputación C2** | **20** | **20** | **20** | **409** | **1.636** | **20** |
| **UC3M C2** | **20** | **20** | **20** | **260** | **1.040** | **20** |
| **Olías C2** | **22** | **22** | **22** | **279** | **1.116** | **22** |
| **TOTAL** | **121** | **121** | **121** | **1.983** | **7.932** | **121** |

**Resultado de los controles utilizados:** los **121 manuales** contienen tablas y marcadores **«¡Foco Examen!»**; los **121 bancos** tienen opciones de **cuatro respuestas** por ítem e índices válidos, justificaciones, referencias y trampas; las **121 matrices** tienen bloques de cobertura reconocibles y numeración coherente. Los **121 archivos de fuentes** existen e incluyen enlaces HTTP(S), con **982 apariciones de URL** (repeticiones incluidas, **no** 982 normas distintas). **No se detectaron fallos estructurales en esos controles concretos.**

## 3. Incidencias reparadas y hallazgos

| Incidencia | Reparación aplicada | Estado |
|---|---|---|
| **Diputación C2 T1–T5**: los manuales se encabezaban como **EN_REVISION_USUARIO** en una cabecera antigua, mientras los manifiestos indicaban **AUDITADO** | Alinear las cinco cabeceras a **AUDITADO documental**, con reserva explícita de certificación integral | **Corregida** |
| **Diputación C2 T1, T2, T3, T4, T6 y T7**: archivos `fuentes.md` existentes pero no enlazados en el manifiesto | Añadir las seis rutas comprobadas en `data/programa-diputacion-auxiliar-c2-2026.json` | **Corregida** |
| Matrices históricas con `epigrafe`, `titulo` o `programaOficial` en vez de `epigrafeOficial` | Validador compatible con los cuatro formatos de encabezado | **Criterio armonizado** |
| Preguntas potencialmente evaluables sin fuente primaria suficiente | Se mantiene exclusión de **C1 T22**, **C2 T6** y **Olías T13**, según actuaciones anteriores | **Protección mantenida; bloqueo jurídico abierto** |
| Constitucional T1 de los cinco programas | Cotejo focal adicional contra reforma del **art. 69.3 CE**, publicada el **20/05/2026** | **Contraste jurídico parcial**, acta separada |

Los **982 enlaces contabilizados** no han sido abiertos y contrastados uno a uno: el recuento acredita **presencia documental**, no validez actual, ausencia de enlaces rotos ni primariedad de todas las fuentes.

## 4. Validador reproducible y evidencia CI

Se creó [`tools/audit-121-structural.mjs`](../tools/audit-121-structural.mjs) para repetir los controles automáticamente contra el repositorio entero. Se incorporó a [`.github/workflows/validate.yml`](../.github/workflows/validate.yml), con generación del archivo `audit/generated/audit-121-structural.json` y publicación como artefacto **`audit-121-structural`**.

**Importante:** esta acta resume el cotejo directo de archivos con el conector de GitHub y las comprobaciones ejecutadas durante esta sesión. **No se ha recibido todavía la conclusión verificable de la ejecución de Actions del último commit.** No afirmar **CI verde** ni pruebas de navegador realizadas.

## 5. Qué NO certifica este barrido

| Puerta de certificación integral | Estado a 09/11/2026 |
|---|---|
| Coincidencia literal de **todos los incisos** con cada PDF oficial | **Pendiente de contraste semántico exhaustivo** |
| Vigencia de cada artículo, plazo, órgano, cuantía y distractor conforme a ley exigible | **Pendiente de auditoría jurídica pregunta por pregunta** |
| **OAPGT** original **1996**, corrección, reforma definitiva **2004** y modificaciones posteriores | **Pendiente**: C1 T22 / C2 T6 |
| Listado INE **VIAS/PSEU** de Olías del Rey, T13 | **Pendiente** |
| Publicación primaria de resolución definitiva y corte normativo de **UC3M** | **Pendiente** |
| Ejecución completa satisfactoria de GitHub Actions sobre el commit final | **No acreditada** |
| Tests reales de navegador, móvil, teclado, accesibilidad y funcionamiento sin red | **No acreditados** |

**Dictamen:** **121/121 temas verificados estructuralmente en esta pasada, con los límites expresados**. **0 temas con certificación jurídica-funcional integral demostrada de extremo a extremo**. El dato estructural no permite declarar OpoWeb al **100 % certificado**.

> ⚠️ **¡Foco Examen!:** **Respuesta correcta formal** (índice **0–3**, cuatro opciones, justificación) **no equivale a veracidad jurídica**. Un dato temporal o un órgano competente pueden estar correctamente almacenados y ser incorrectos conforme al BOE aplicable.
