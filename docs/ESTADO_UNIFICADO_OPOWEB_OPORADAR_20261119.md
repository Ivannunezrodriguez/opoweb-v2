# Registro unificado de pendientes — OpoWeb y OpoRadar

**Corte de conciliación:** 19/11/2026. **Repositorio operativo:** [opoweb-v2](https://github.com/Ivannunezrodriguez/opoweb-v2). **Repositorio documental heredado:** [opoweb-dev](https://github.com/Ivannunezrodriguez/opoweb-dev).

Este documento es un **índice de conciliación**. La **cola editable y única de tareas** es [`data/plan-trabajo.json`](../data/plan-trabajo.json), visualizada en [`plan.html`](../plan.html). Las pruebas normativas de cierre permanecen exclusivamente en [`data/cierre-pendientes-2026.json`](../data/cierre-pendientes-2026.json). No abrir otros registros paralelos.

## 1. Fuente y autoridad de los documentos

| Fuente | Ubicación | Función | Política |
|---|---|---|---|
| Plan único | `opoweb-v2/data/plan-trabajo.json` | Estados, responsables lógicos, criterios de cierre, orden y nuevas mejoras | **Canónico para tareas** |
| Bloqueos normativos | `opoweb-v2/data/cierre-pendientes-2026.json` | Cinco temas retenidos y evidencias exigidas | **Canónico para prueba jurídica** |
| Cinco manifiestos de temario | `opoweb-v2/data/programa*.json` | Estado declarado por tema | Fuente de estados por convocatoria |
| Auditoría histórica | [`opoweb-dev/AUDITORIA_CONTINUA.md`](https://github.com/Ivannunezrodriguez/opoweb-dev/blob/main/AUDITORIA_CONTINUA.md) | Cronología detallada de auditorías, más de 750.000 caracteres | **Archivo histórico**: no reanudar desde encabezados antiguos |
| Cierre documental de 11/11 | [`opoweb-dev/docs/CIERRE_OPERATIVO_2026-11-11.md`](https://github.com/Ivannunezrodriguez/opoweb-dev/blob/main/docs/CIERRE_OPERATIVO_2026-11-11.md) | Relación razonada de cinco bloqueos, cambios CI y fuentes | Evidencia histórica vigente solo hasta su corte |
| Normas editoriales | [`opoweb-dev/PROJECT_RULES.md`](https://github.com/Ivannunezrodriguez/opoweb-dev/blob/main/PROJECT_RULES.md) | Literalidad, fuentes, estructura, límites de publicación | Mantener vinculadas sin crear nuevas versiones contradictorias |
| Plan antiguo C2 | [`opoweb-dev/content/diputacion-toledo-auxiliar-c2/PLAN_EDITORIAL_Y_AUDITORIA.md`](https://github.com/Ivannunezrodriguez/opoweb-dev/blob/main/content/diputacion-toledo-auxiliar-c2/PLAN_EDITORIAL_Y_AUDITORIA.md) | Decisión de posponer OAPGT T06 al final | Respetar decisión, no ejecutar desde plan histórico |
| Cobertura UC3M | [`opoweb-dev/content/uc3m/COTEJO_LAGUNAS_MATRICES_20_TEMAS_20261106.md`](https://github.com/Ivannunezrodriguez/opoweb-dev/blob/main/content/uc3m/COTEJO_LAGUNAS_MATRICES_20_TEMAS_20261106.md) | 24 bloques con material de repaso, no integrado necesariamente en tests | Nueva tarea de integración; no contar como preguntas disponibles |
| OpoRadar | `opoweb-v2/assets/radar.js`, `data/radar-profile.json`, `data/convocatorias.json` | Feed y objetivos de empleo | Distinguir oportunidades nuevas de seguimiento |

**No borrar ni compactar** `AUDITORIA_CONTINUA.md` sin inventariar primero sus dependencias; el cierre histórico identifica al menos 56 enlaces o validadores referenciándolo. No duplicar manuales en dos repositorios ni usar el histórico como estado actual.

## 2. Contraste de manifiestos (leídos en opoweb-v2)

| Programa | AUDITADO | Otros estados |
|---|---:|---|
| La Puebla C2 (19) | **19** | **0** |
| Olías del Rey C2 (22) | **22** | **0** |
| Diputación C1 (40) | **39** | T22 `EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES` |
| Diputación C2 (20) | **19** | T06 `BORRADOR` |
| UC3M C2 (20) | **17** | T10, T15, T16 `EN_REVISION_USUARIO` |
| **TOTAL (121)** | **116** | **5** |

**Límite:** estos estados son **declaraciones de auditoría documental**, **no 116 certificaciones jurídicas integrales**. Certificación funcional E2E/móvil/WCAG/PWA demostrada de los 121: **ninguna** en el dossier consultado. El CI de un commit anterior no valida el HEAD actual.

## 3. Pendientes consolidados, sin duplicarlos

### A. La Puebla (P1)
- Visor de examen **entregado**, pero los enunciados **5–9** no están en las fotografías recibidas.
- La pregunta **26** tiene posible doble alternativa correcta conforme al art. 21 LRBRL. No afirmar que el Tribunal la haya anulado.
- Plantilla provisional/definitiva y cinco reservas por cotejar antes de publicar un **simulacro histórico íntegro**.
- Revisar que la nota parcial no se confunda con nota oficial; recuento completo solo con plantilla y respuestas del opositor.

### B. Los cinco bloqueos jurídico-editoriales (P2)
- **Diputación C1 T22 y C2 T06 (OAPGT):** la aprobación inicial de 21/12/2004 no prueba definitiva; documentos estatutarios **1996/2011 ya aportados**; comprobar cadena de eficacia y acuerdo regulador íntegro vigente. Divergencia `12.1.8` (2022) frente a `12.2.l.8` (2026) sin presumir equivalencia. La errata del Decreto **2026-003964** sí está resuelta.
- **UC3M T10:** fecha primaria de publicación de definitivos, corte y aplicación temporal de TREBEP, banco **12 preguntas / 48 opciones**.
- **UC3M T15:** fecha de definitivos, adaptación estatutaria LOSU o inexistencia comprobada y banco **21/84**.
- **UC3M T16:** fecha de definitivos, efectos de RD 822/2021 y normas universitarias, nuevo Estatuto del Estudiantado RD 855/2026 solo si cae dentro del corte, banco **21/84**.
- **107 preguntas / 428 alternativas** de estos cinco bancos superaron controles **estructurales** en la auditoría de 11/11, **no** cotejo jurídico íntegro.
- **UC3M: 24 bloques de 9 temas** con repaso adicional en Markdown, sin incorporación comprobada al motor evaluable. Integrarlos como recurso complementario con trazabilidad y tests cuando proceda; evitar inflar las cifras de preguntas.

### C. Radar (P3)
- **Olías:** conflicto de **plazas (BOP versus BOE/DOCM)** y de **20 días naturales frente a hábiles**; no declarar resuelta sin rectificación oficial o criterio acreditado. Tratar como incidencia administrativa, no como tema sexto pendiente.
- **El Viso:** comprobar BOE propio de expediente **2860/2026**, no reutilizar anuncio anterior del expediente **1589/2026**.
- Ampliar fuentes para bolsas, nombramientos interinos, sustituciones, personal temporal y empleos potencialmente accesibles en Toledo y sur de Madrid. El perfil permite C1, C2, AP y B **solo con titulación compatible**.
- Aplicar perfil `newOnly: true` a notificaciones de oportunidades; los procesos ya presentados pertenecen a seguimiento personal, no a ofertas nuevas.
- Registrar cobertura real, fuentes fallidas y fecha de última lectura; una fuente que responde no acredita revisión exhaustiva.

### D. Calidad del producto y coordinación de repositorios (P4)
- **CI HEAD**: comprobar ejecución y corregir fallos reales; hubo historial de aserciones frágiles por cache busting y desajustes de tests.
- **E2E, WCAG, móvil y PWA**: pruebas reales pendientes; no afirmar offline por la presencia de `sw.js`.
- Revisar flujo de **preguntas de reserva**, puntuación, persistencia, selección de convocatoria y diferencias `correcta`/`respuestaCorrecta`.
- Eliminar bifurcación de estado: **`opoweb-v2` recibe el plan operativo; `opoweb-dev` conserva evidencias y su historia**. Promover contenido solo tras comprobar necesidad y diferencias; no sobrescribir archivos enteros por duplicación.
- Revisar referencias antiguas con recuentos desfasados de 79/97 temas y textos sobre cuatro programas: conservarlas como archivo histórico y **no replicar su estado como vigente**.

## 4. Prioridad y regla de trabajo

1. **UC3M C2:** en el archivo histórico consta examen **21/11/2026**; contrastar vigencia de esa fecha con fuente oficial antes de avisar. Priorizar repaso utilizable y bloqueo de corte si procede.
2. **Diputación C1:** atención al examen registrado para **15/12/2026**, repaso y calidad de tests; mantener T22 bloqueado.
3. **La Puebla:** corregir incidencias reales y transformar examen en simulacro cuando existan fuentes.
4. **OpoRadar:** impedir oportunidades falsas o plazos infundados; mejorar cobertura y deduplicación.
5. **Diputación C2 T06:** continuar aplazado al final del bloque C2, tal como consta en el plan de 29/10/2026; no olvidarlo.
6. **QA transversal:** un solo lote sustantivo por cambio, con evidencia y prueba cuando sea posible.

**Regla de cierre:** ningún enlace aislado o prueba mecánica convierte por sí solo una tarea legal en HECHO. Antes de añadir tareas buscar su ID/objetivo en `plan-trabajo.json`; anotar hallazgos nuevos en la tarea existente cuando solo amplíen alcance. Los documentos antiguos son fuentes, no nuevas colas de trabajo.
