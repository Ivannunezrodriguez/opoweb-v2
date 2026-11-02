# OpoWeb v2 — Auditoría continua de fiabilidad

**Fecha base:** 02/11/2026. **Objetivo:** disponer de manuales, tests y supuestos autosuficientes por convocatoria, auditados contra fuentes oficiales y probados en la web. Este fichero es una **cola de trabajo**, no una certificación de que los materiales estén completos.

## Alcance activo y prioridad

| Prioridad | Convocatoria | Temas en manifiesto | Estado documental declarado | Fiabilidad íntegra |
|---|---|---:|---|---|
| 1 | Diputación Toledo · Auxiliar C2 | **20** | **19 PUBLICADO**, **1 BORRADOR**, pero varias notas mencionan pruebas pendientes | **No certificada** |
| 2 | La Puebla de Montalbán · Auxiliar C2 | **19** | **19 APROBADO_USUARIO**; se requiere mantenimiento normativo y verificación global de la aplicación | **No certificada a 02/11/2026** |
| 3 | UC3M · Auxiliar C2 | **20** | **20 EN_REVISION_USUARIO** | **No certificada** |
| 4 | Diputación Toledo · Administrativo C1 | **40** | **40 GENERACION_DESDE_CERO**, en auditoría progresiva | **No certificada** |

**Total: 99 temas en cuatro programas activos.** La cobertura por número de archivos no equivale a aprobación jurídica. Otras convocatorias de seguimiento, o descartadas, quedan fuera de esta auditoría editorial salvo nueva instrucción.

## Condiciones necesarias para cerrar un tema

- [ ] Epígrafe cotejado literalmente con **anexo del programa oficial** y comprobadas modificaciones de la convocatoria.
- [ ] Matriz **inciso del programa → ley/versión → artículo → regla → evidencia** y cobertura íntegra de todos los incisos.
- [ ] Plazos, mayorías, cuantías, órganos, excepciones y requisitos contrastados con **BOE/DOCM/BOP** o publicaciones institucionales oficiales aplicables y vigentes.
- [ ] Manual estructurado, sin contradicciones, con tablas comparativas y bloques **¡Foco Examen!** donde existan trampas reales.
- [ ] Banco de preguntas con respuesta correcta única, alternativas plausibles, justificación, trampa y referencia verificable a la norma o manual.
- [ ] Supuestos prácticos exigidos por la convocatoria (cuando procedan) documentados y corregidos.
- [ ] JSON analizado, enlaces verificados, navegación, renderizado, buscador y tests de la aplicación comprobados.
- [ ] Control final de cambios, revisión editorial y **aprobación expresa del usuario** cuando así lo requieran las reglas del proyecto.

**Prohibido marcar «100 % fiable» solo por alcanzar un número de documentos o preguntas.**

## Hallazgos comprobados y acciones

### A. Diputación Toledo · Auxiliar C2 · Tema 6 (bloqueante)

El tema aún no puede considerarse completo sin texto íntegro y vigente del **Acuerdo Regulador** y **Estatutos del OAPGT**.

- **02/11/2026:** comprobación visual del anuncio oficial de reforma estatutaria del **BOP 284, 14/12/2011**. Acredita cambios en los artículos **1, 4.a), 8 bis, 14.d).1** y la disposición adicional.
- Fuente editorial añadida: [ficha de reforma estatutaria 2011](content/diputacion-toledo-auxiliar-c2/tema-06/estatutos-2011-verificado.md); enlazada en el manual y en fuentes.
- **Pendiente:** cotejar el texto inicial **BOP 235, 11/10/1996**, identificar **todas** sus modificaciones y acreditar vigencia a la fecha de examen; comprobar íntegros acuerdo laboral de **2023** y reformas de **2025–2026**. Hasta entonces, no generar como ciertas composiciones/quórums pendientes.

### B. Diputación Toledo · Administrativo C1 · Tema 5

- **02/11/2026:** corregida la trampa sobre subsanación de representación: el **art. 5.6 Ley 39/2015** establece **10 días**; el **art. 30.2** determina su cómputo **hábil** por regla general, salvo excepción legal. Contrastado con [texto consolidado oficial](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565).
- Manual y pregunta **DIP-T05-003** corregidos; revisión integral aún pendiente.

### C. Diagnósticos de calidad y estados

- El archivo `JSON_ERRORS.md` es una fotografía antigua: mencionaba un fallo en `content/diputacion-toledo/tema-34/preguntas.json`. A **02/11/2026**, ese **archivo concreto** se ha podido analizar correctamente como JSON; el diagnóstico global de **172 archivos** no se ha repetido todavía.
- **Diputación C2:** el manifiesto marca **19 temas PUBLICADO**, mientras las notas editoriales registran **pruebas de navegador pendientes**. «Contenido disponible» no debe interpretarse como «fiabilidad verificada».

## Próxima cola (ordenada)

1. **Diputación C2 Tema 6:** conseguir la cadena oficial completa de Estatutos y acuerdo laboral; redactar matriz normativa y auditar las preguntas existentes.
2. **Diputación C2 Temas 1–5 y 7–20:** auditoría jurídica sistemática, tests, fuentes y funcionamiento real.
3. **La Puebla C2:** cotejo legal actualizado de 19 temas y pruebas de navegación, preguntas y supuestos.
4. **UC3M C2:** cotejo de 20 temas, fuentes autonómicas/universitarias, tests y supuestos.
5. **Diputación C1:** continuar Tema 5 y sucesivos, resolver carencias OAPGT del Tema 22, revisar íntegramente los 40 temas.
6. **CI técnica transversal:** validar JSON, vínculos, carga de contenido, modo offline, evaluaciones, respuestas y datos del progreso del usuario.

**Regla de reanudación:** la siguiente ejecución debe leer este archivo y los estados *actuales* de GitHub; escoger tareas pendientes sin volver a asumir como cerrada una auditoría parcial.
