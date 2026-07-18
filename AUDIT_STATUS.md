# Estado de auditoría · OpoWeb v2

Última actualización: **18 de julio de 2026**.

## Convocatoria activa

**La Puebla de Montalbán · cuatro plazas de Auxiliar Administrativo C2**  
Programa oficial: **19 temas**, BOP de Toledo número **82**, de **5 de mayo de 2026**, CSV **2026.00001965**.

## Auditoría en curso

| Bloque | Temas | Estado | Trabajo principal |
|---|---:|---|---|
| Constitución | 1 | `AUDITADO_NORMA_VIGENTE` | Cotejado con la Constitución consolidada y la reforma del artículo **69.3** publicada el **20 de mayo de 2026** |
| Procedimiento administrativo | 2–4 | `AUDITADO_NORMA_VIGENTE` | Cotejados los artículos **1–126** de la Ley 39/2015; plazos, silencio, caducidad, revisión y recursos revisados |
| Régimen local | 5 | `AUDITADO_NORMA_VIGENTE` | Verificados órganos, competencias, mayorías, funcionamiento y régimen electoral local conforme a LRBRL y LOREG vigentes |
| Empleo público, PRL e igualdad | 6–8 | `EN_AUDITORIA` | Ley 4/2011 de empleo público de Castilla-La Mancha, Ley 31/1995 y normativa de igualdad |
| Protección de datos y tributación | 9–12 | `PENDIENTE_AUDITORIA` | RGPD/LOPDGDD, LGT, TRLRHL, recaudación e impuestos municipales |
| Administración electrónica | 13–14 | `PENDIENTE_AUDITORIA` | eIDAS, certificados, Ley 40/2015 y AGE |
| Ofimática y microinformática | 15–19 | `PENDIENTE_AUDITORIA` | Windows 11, Edge, Word/Writer, Excel/Calc y hardware |

## Temas auditados

| Tema | Resultado | Informe |
|---:|---|---|
| 1 | Sin errores de plazo, mayoría o cifra detectados. Confirmadas las **cuatro reformas constitucionales** vigentes hasta julio de 2026. | `content/la-puebla/tema-01/auditoria-2026-07-18.md` |
| 2 | Plazos nucleares correctos. Detectada una corrección editorial: donde decía «tres condiciones acumulativas» deben ser **cuatro**. | `content/la-puebla/tema-02/auditoria-2026-07-18.md` |
| 3 | Revisados los artículos **53–105**. Confirmados los plazos de iniciación, prueba, audiencia, información pública, tramitación simplificada y ejecución. | `content/la-puebla/tema-03/auditoria-2026-07-18.md` |
| 4 | Revisados los artículos **106–126** y la competencia local. Confirmados los plazos de revisión, lesividad, alzada, reposición y revisión extraordinaria. | `content/la-puebla/tema-04/auditoria-2026-07-18.md` |
| 5 | Verificados municipio, provincia, organización, funcionamiento, competencias y elecciones locales. Las reformas publicadas en **junio y julio de 2026** no alteran el núcleo desarrollado. | `content/la-puebla/tema-05/auditoria-2026-07-18.md` |

## Criterios aplicados a cada tema

- Epígrafe oficial literal.
- Matriz de cobertura normativa o técnica.
- Comprobación contra fuente oficial vigente.
- Revisión de **plazos**, **mayorías**, **cuantías** y **órganos competentes**.
- Tablas comparativas para conceptos confundibles.
- Bloques `¡Foco Examen!` solo cuando exista una trampa concreta.
- Revisión responsive en móvil y tableta.
- Registro del cambio mediante versión y commit.

## Mejoras de plataforma

| Mejora | Estado |
|---|---|
| Modo claro/oscuro persistente | Implementado |
| Diseño para móvil y tableta | Implementado |
| Buscador sobre títulos y contenido | Implementado |
| Apartado de plazos y estado personal de la OPE | Implementado |
| Historial y control de versiones Git | Activo |
| Catálogo de documentos oficiales | En preparación |
| Alojamiento de copias oficiales verificables | Pendiente de incorporar únicamente documentos públicos, nunca documentación personal |
| Tests y supuestos trazables | Pendiente tras auditoría del contenido base |

## Orden de trabajo

1. Auditar y corregir los **temas 6–8**.
2. Continuar con **9–12**, **13–14** y **15–19**.
3. Generar preguntas y supuestos únicamente después de que el contenido base esté auditado.
4. Reutilizar los temas comunes en Carranque, Las Ventas con Peña Aguilera y futuras convocatorias mediante una matriz de equivalencias, sin duplicar versiones contradictorias.
