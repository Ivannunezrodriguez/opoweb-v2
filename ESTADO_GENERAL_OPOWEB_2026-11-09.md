# OpoWeb v2 — Estado general y auditoría pormenorizada

**Fecha de corte del presente informe:** 09/11/2026. **Repositorio:** [Ivannunezrodriguez/opoweb-v2](https://github.com/Ivannunezrodriguez/opoweb-v2). **Portal:** [OpoWeb](https://ivannunezrodriguez.github.io/opoweb-v2/).

**Metodología:** recuperación de manifiestos de los cinco programas y del árbol GitHub; inspección de `README.md`, `package.json`, `index.html`, `practice.html`, `radar.html`, `manifest.json`, `sw.js`; lectura de los logs del flujo `Validar OpoWeb v2` y corrección de aserciones desactualizadas en tres ficheros de tests (en un cuarto cambio se ajustan dos claves históricas del validador, no las del banco).

## 1. Conclusión ejecutiva

OpoWeb es una **plataforma de estudio sustancialmente implementada**, con **cinco convocatorias, 121 temas registrados, 121 bancos de preguntas por tema** y **122 archivos `manual.md`** en el árbol (uno más que el número de temas; no asumir automáticamente un manual por tema en ese recuento). La plataforma contiene páginas para temario, práctica y radar, y ejecuta validaciones automáticas. **No es correcto calificarla como fuente de estudio jurídicamente certificada al 100 %**, ni asegurar que todos sus flujos están probados en navegador.

| Indicador | Cantidad/resultado | Lectura |
|---|---:|---|
| Programas | **5** | Todos aparecen en manifiestos de datos |
| Temas | **121** | 19+40+20+22+20 |
| Temas con `AUDITADO` actual | **79/121 = 65,29 %** | 39 C1 + 19 C2 Diputación + 21 Olías |
| Temas `APROBADO_USUARIO` históricos | **19** | La Puebla, julio 2026, sin recertificación jurídica global de noviembre |
| Temas con desarrollo documental bajo reserva | **20** | UC3M; formalmente `EN_REVISION_USUARIO` |
| Temas con bloqueo documental | **3** | Olías T13, C1 T22, Diputación C2 T6 |
| Temas con certificación integral demostrada | **0/121** | Requiere cotejo jurídico exhaustivo y pruebas funcionales |
| Ficheros bajo GitHub (`blob`) | **950** | Inventario de árbol a esta revisión, no contenido validado |
| Tests `.mjs` en `tests/` | **96** | Existencia de scripts; no todos se ejecutan necesariamente en cada workflow |
| Flujos GitHub Actions `.yml` | **13** | No equivalen a 13 validaciones completas |

## 2. Estado exacto de las cinco convocatorias

### 2.1. Olías del Rey — Auxiliar de edificios e instalaciones C2

- **22/22 temas con manual elaborado**; **21 `AUDITADO`** y **T13 `EN_AUDITORIA`**.
- **279 preguntas temáticas** (264 originales + ampliaciones de **6 T5** y **9 T13**), **40 psicotécnicas** y **2 modelos de simulacro de 50 preguntas teóricas + 20 psicotécnicas**.
- **Bloqueo T13:** no se ha verificado el inventario oficial íntegro de vías del INE para municipio **45122**, edición de julio de 2026. No certificar el callejero completo.
- **Incidencia independiente de bases:** documentos BOP/BOE no coinciden respecto a **4/1 plazas** ni a **20 días naturales/hábiles** de solicitud. No declarar resolución oficial inexistente.
- **Acción CI de hoy:** [tests `validate-olias-programme.mjs` y `validate-olias-practice.mjs`](tests/) actualizados a **279** manteniendo validación de opciones, claves, psicotécnicos y simulacros.

> ⚠️ **¡Foco Examen!:** La fecha de convocatoria, número de plazas y plazo de solicitud son datos administrativos que requieren aclaración oficial; el estado de un banco de preguntas no resuelve por sí mismo la discrepancia de bases.

### 2.2. Diputación Toledo — Administrativo C1

- **40 temas**, **39 `AUDITADO`** y **T22 `EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES`**.
- **807 preguntas temáticas**, sumando ampliación de **4** preguntas documentadas del **T22** a los **803** ítems anteriores. **24** de las **807** son del T22 OAPGT.
- **Bloqueo T22:** texto **íntegro** de Estatutos del Organismo Autónomo Provincial de Gestión Tributaria (OAPGT), junto con correcciones y reformas (1996 y posteriores), aún no reconstruido como versión legal de referencia. Hay cotejos parciales BOP de 2011, 2019 y 2024; **no sustituyen** el articulado íntegro.
- **Acción CI de hoy:** reparado `tests/validate-diputacion-c1-t20-t23-cotejo-20261105.mjs`: prueba las **80 preguntas históricas de T20–23** y las **4 nuevas** del T22; sus opciones correctas se comprueban por texto y posición. Las preguntas **T22-001 y T22-002** conservan sus respuestas literales, pero tenían diferente posición tras equilibrado del banco; se actualizó la expectativa del test, sin cambiar el banco.

### 2.3. Diputación Toledo — Auxiliar Administrativo C2

- **20 temas**, **19 `AUDITADO`** y **T6 `BORRADOR`**.
- **4 plazas** reflejadas en el manifiesto: **3** turno libre y **1** reserva por discapacidad, **Anexo XI**.
- Bloqueo T6 común a C1 T22: **Estatutos OAPGT** y competencias precisas. El cierre del resto de materias es **documental-editorial**, no garantía integral de normativa actualizada al día del examen.

### 2.4. La Puebla de Montalbán — Auxiliar Administrativo C2

- **19/19 `APROBADO_USUARIO`**, aprobación histórica asociada a julio de 2026.
- Manuales y bancos creados; revisiones focales de legislación y preguntas realizadas en noviembre, además de simulacros.
- **No equiparar 19 aprobaciones históricas a 19 recertificaciones jurídico-funcionales actuales.**
- El `README.md` anterior mezclaba cifras/estados de octubre y noviembre; se ha sustituido el bloque de estado.

### 2.5. UC3M — Escala Auxiliar Administrativa C2

- **20/20** con `estadoRevisionDocumental=DESARROLLO_COMPLETO_CON_RESERVA_CORTE`; **20/20** mantienen formalmente `estado=EN_REVISION_USUARIO`.
- **260 preguntas temáticas**, **3 simulacros de 70 titulares + 5 reservas**, **60 minutos** y penalización de **1/3** por respuesta errónea en puntuación directa.
- **34 plazas**, con **2** de reserva por discapacidad, según manifiesto; ejercicio anunciado para **21/11/2026, 10:00, Getafe**. Los datos operativos requieren comprobación oficial más próxima al examen.
- **Bloqueo legal mayor:** base **primera.7** de las bases [BOE-A-2026-14624](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) vincula norma exigible a la **fecha de publicación de la resolución definitiva de admitidos y anuncio del ejercicio**. Se ha manejado **01/10/2026** por fuente secundaria, **sin recuperación del documento primario que confirme su publicación**. No convertir esa fecha en certificada.
- Temas 16 (RD 822/2021 y nulidad RD 905/2025) y 20 (LCSP: contratos, procedimientos y mesas) tienen ampliaciones jurídicas recientes, pero no revisión legal final de las 260 preguntas contra una fecha primaria de corte.

## 3. Estado técnico y funcionamiento

| Componente | Evidencia disponible | Límite de lo acreditado |
|---|---|---|
| Página principal `index.html` | Existe y carga estilos y `assets/app.js` | No hay prueba E2E de navegador real de todos los temas |
| Práctica `practice.html` | Interfaz de tests, simulacros y progreso; scripts y validadores | No se han probado todos los recorridos reales en móvil |
| Radar `radar.html` | Página y scripts de radar, con validadores de fixtures | Fiabilidad/frescura de convocatorias necesita seguimiento de fuentes |
| PWA `manifest.json` | Aplicación `standalone`, icono y punto de entrada | **Offline no garantizado**: `sw.js` borra cachés y se da de baja |
| Compatibilidad de JavaScript | Syntax checks y controles en CI | Sintaxis válida no garantiza ausencia de errores en ejecución real |
| Estado local de tests | Scripts verifican historial/progreso y separación por convocatoria | Persistencia real entre sesiones, dispositivos o perfiles no ensayada integralmente |
| Accesibilidad | Atributos ARIA visibles en páginas | No hay auditoría WCAG móvil/lector de pantalla certificada |
| Publicación GitHub Pages | Flujo independiente de despliegue | Despliegue exitoso **no** equivale a aprobación de contenido |
| Auditoría continua | Registro `AUDITORIA_CONTINUA.md` y trazabilidad de commits | Historial largo incluye datos obsoletos: consultar últimas entradas |

### 3.1. Hallazgo CI real y corrección

Se examinó el fallo del [workflow del commit `d9c468d`](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42576574826). La interrupción obedecía al validador histórico C1 que esperaba **20** preguntas T22 pese a haber **24**. Tras reparación, otra ejecución mostró dos **posiciones** esperadas antiguas en T22-001/002, aunque la respuesta literal se conservó. Corregida la expectativa, se superó C1; apareció a continuación un inventario antiguo de Olías (**264** en test frente a **279** en banco). Actualizados los dos tests de Olías.

**Resultado acreditado:** [**Validar OpoWeb v2**, ejecución 42577252425, commit `518e2326d5f2`](https://github.com/Ivannunezrodriguez/opoweb-v2/actions/runs/42577252425): **success**, **67 pasos correctos, 0 fallidos**. Los pasos incluyen pruebas por convocatoria, sintaxis, integridad y controles de práctica; ese flujo **no es una certificación E2E ni legal**. Los cambios posteriores al SHA indicado deben volver a validarse.

## 4. Problemas y riesgos ordenados por prioridad

| Prioridad | Riesgo | Impacto | Condición de cierre |
|---|---|---|---|
| **P0** | Fecha jurídica oficial de corte UC3M sin resolución primaria | Reglas alteradas por reformas podrían entrar/salir indebidamente del test | Documento oficial y fecha de publicación; comparación norma por norma |
| **P0** | Olías: discrepancia de plazas y plazo entre BOP/BOE | Riesgo administrativo de inscripción/plaza | Rectificación o aclaración oficial |
| **P1** | Estatutos OAPGT íntegros para C1 T22 y C2 T6 | Competencias, órganos y procedimientos potencialmente incompletos | Texto original más reformas y cotejo integral |
| **P1** | Callejero INE Olías T13 | Cobertura de denominaciones y vías sin prueba de exhaustividad | Fichero INE oficial VIAS/PSEU del municipio |
| **P1** | Ausencia de auditoría jurídica final por distractor y epígrafe | Riesgo de errores test aun con JSON válido | Control literal de 121 bancos y todos los apartados |
| **P1** | Sin pruebas E2E integrales en móvil y navegador | Errores de navegación, almacenamiento, renderizado | Plan de prueba real de temario, práctica y radar |
| **P2** | Offline desactivado | Estudio sin red no garantizado | Diseñar y probar estrategia de servicio offline |
| **P2** | README, indicadores y textos de estado potencialmente desfasados | Percepción falsa de cierre | Sincronizar paneles y documentación con manifiestos |

## 5. Siguiente secuencia recomendada

1. **No añadir más ampliaciones de LCSP T20** si no corrigen una laguna real. La fase actual debe concentrarse en calidad y certificados.
2. **Prioridad jurídica:** resolver publicación primaria UC3M de listas definitivas y contrastar la versión normativa aplicable a T16 y T20, después todos los temas.
3. **Prioridad de cierre de convocatorias:** Olías T13 (INE), Diputación C1 T22 y C2 T6 (Estatutos OAPGT), conservando reservas cuando no haya fuente íntegra.
4. **Prioridad técnica:** mantener GitHub Actions en verde, añadir E2E móvil/escritorio, probar persistencia y revisar WCAG y los enlaces en interfaz.
5. **Métricas fieles:** `AUDITADO`, `APROBADO_USUARIO`, `DESARROLLO_COMPLETO_CON_RESERVA_CORTE`, `BORRADOR` y `EN_AUDITORIA` son categorías diferentes. **No mostrar «100 % terminado» usando exclusivamente presencia de archivos o éxito de CI**.

> ⚠️ **¡Foco Examen!:** OpoWeb puede ser el **centro único editorial** de preparación solo cuando las respuestas de test, el programa literal, los textos normativos y su aplicación temporal estén trazados y probados. Los resultados de validación informática son necesarios, pero no suficientes.
