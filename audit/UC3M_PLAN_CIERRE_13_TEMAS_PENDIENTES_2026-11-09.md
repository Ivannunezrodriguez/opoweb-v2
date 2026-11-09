# UC3M C2 — Acta de avance y cierre pendiente, 09/11/2026

## Estado publicado

**7/20 temas `AUDITADO` con acta individual**: **T1, T2, T3, T4, T5, T6 y T9**. **13/20 `EN_REVISION_USUARIO`**. **0/20 `CERTIFICADO_INTEGRAL` con E2E y CI completos acreditados.**

| Tema auditado | Norma o fuente oficial | Acta |
|---|---|---|
| **T1** Constitución | **BOE-A-1978-31229**; reforma **BOE-A-2026-10881** | [Acta T1](UC3M_T01_AUDITORIA_CONSTITUCIONAL_2026-11-09.md) |
| **T2 y T3** Procedimiento | **Ley 39/2015**, actualización publicada **06/11/2024** | [T2](UC3M_T02_AUDITORIA_LEY39_2026-11-09.md), [T3](UC3M_T03_AUDITORIA_LEY39_2026-11-09.md) |
| **T4 y T5** Régimen jurídico y electrónico | **Ley 40/2015**, actualización publicada **02/08/2024** | [T4](UC3M_T04_AUDITORIA_LEY40_2026-11-09.md), [T5](UC3M_T05_AUDITORIA_LEY40_2026-11-09.md) |
| **T6** Protección de datos | **RGPD** y **LO 3/2018** (última actualización de esta: **27/12/2025**) | [Acta T6](UC3M_T06_AUDITORIA_RGPD_LOPDGDD_2026-11-09.md) |
| **T9** Ofimática | **Microsoft Word/Excel 2019** y ayuda oficial de **Google** | [Acta T9](UC3M_T09_AUDITORIA_TECNICO_EDITORIAL_2026-11-09.md) |

El estado **AUDITADO** refleja revisión jurídico-editorial o técnico-editorial del tema concreto; **no** aprobación por el usuario ni certificación de funcionamiento real. Las preguntas históricas conservan sus claves y alternativas, salvo mejoras explicativas de dos ítems: **T01-008** (eficacia electoral diferida del **art. 69.3 CE**) y **T06-011** (excepción de notificación de violaciones según **RGPD 33**).

## Trece temas que deben completar auditoría jurídica

| Tema | Fuente principal / foco | Bloqueo antes de promover |
|---|---|---|
| **T7** | **Ley 10/2019, Transparencia Comunidad de Madrid** | Vigencia autonómica y excepciones de publicidad/acceso |
| **T8** | **LO 3/2007**, protocolos y **III Plan de Igualdad UC3M** | Normativa UC3M exacta y distractores del banco ampliado |
| **T10** | **TREBEP, RDL 5/2015** | Régimen de personal y última vigencia al corte |
| **T11** | **RD 364/1995; Ley 53/1984** | Ámbito AGE frente a UC3M, compatibilidad y plazos |
| **T12** | **Ley 31/1995**, prevención de riesgos | Redacción tras reforma publicada **09/04/2026** |
| **T13** | **LO 2/2023, LOSU** | Cambios y vigencia de gobernanza y docencia |
| **T14** | **LOSU** estudiantado, PDI y PTGAS | Derechos, porcentajes, excepciones y normativa de empleo |
| **T15** | **Decretos 1/2003 y 95/2009**, Estatutos UC3M | Cotejo de reformas, órganos, mayorías y plazos |
| **T16** | **RD 822/2021**, régimen de estudios UC3M | Sentencia del TS sobre modificador **RD 905/2025**, BOE **23/10/2026**, con incertidumbre de corte |
| **T17** | **RD 534/2024** y normativa UC3M | Admisión, disposiciones y redacciones universitarias |
| **T18** | Presupuesto de **UC3M** | Importes anuales y órganos competentes de autorización |
| **T19** | Ejecución y gestión del presupuesto **UC3M** | Cifras, fases de gasto, fiscalización y delegaciones |
| **T20** | **Ley 9/2017, LCSP**, contratación universitaria | Umbrales, procedimientos, órgano y reglas exactas al corte |

**Obstáculo transversal:** la base **primera.7** de [**BOE-A-2026-14624**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624) exige la legislación vigente cuando se publica la **resolución definitiva de admitidos que anuncia el examen**. El portal oficial confirma que hay resolución definitiva, **sin acreditar en el contenido accesible su fecha exacta de publicación**. No usar la fecha del examen **21/11/2026** como sustituta. Para los primeros siete temas auditados se ha cotejado específicamente que las versiones de sus normas/fabricantes examinadas no dependen de una modificación posterior al intervalo conocido del corte.

> ⚠️ **¡Foco Examen!:** La modificación legislativa posterior a una **fecha oficial de corte** puede quedar fuera del examen, y una nulidad judicial requiere análisis temporal adicional. **AUDITADO jurídico** y **CERTIFICADO_INTEGRAL** exigen controles diferentes.

## Control preventivo

El flujo [`.github/workflows/validate.yml`](../.github/workflows/validate.yml) incorpora [`tests/validate-uc3m-audited-gate-20261109.mjs`](../tests/validate-uc3m-audited-gate-20261109.mjs), que exige acta y fuente en los temas auditados y rechaza la promoción masiva sin evidencias. **Su ejecución completa en GitHub Actions no se ha confirmado en esta sesión.**

**Resultado final:** **7 temas auditados; 13 pendientes; certificación integral no alcanzada**.
