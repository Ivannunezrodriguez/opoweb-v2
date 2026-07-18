# Estado de auditoría · OpoWeb v2

Última actualización: **18 de julio de 2026**.

## Convocatoria activa

**La Puebla de Montalbán · cuatro plazas de Auxiliar Administrativo C2**  
Programa oficial: **19 temas**, BOP de Toledo número **82**, de **5 de mayo de 2026**, CSV **2026.00001965**.

## Auditoría en curso

| Bloque | Temas | Estado | Trabajo principal |
|---|---:|---|---|
| Constitución | 1 | `AUDITADO_NORMA_VIGENTE` | Cotejado con la Constitución consolidada y la reforma del artículo **69.3** publicada el **20 de mayo de 2026** |
| Procedimiento administrativo | 2 | `AUDITADO_NORMA_VIGENTE` | Cotejados los artículos **1–33** de la Ley 39/2015; plazos y silencio revisados |
| Procedimiento administrativo | 3–4 | `EN_AUDITORIA` | Iniciación, instrucción, finalización, revisión y recursos de la Ley 39/2015 |
| Régimen local y empleo público | 5–8 | `PENDIENTE_AUDITORIA` | Órganos, competencias, mayorías, LOREG, Ley 4/2011, PRL e igualdad |
| Protección de datos y tributación | 9–12 | `PENDIENTE_AUDITORIA` | RGPD/LOPDGDD, LGT, TRLRHL, recaudación e impuestos municipales |
| Administración electrónica | 13–14 | `PENDIENTE_AUDITORIA` | eIDAS, certificados, Ley 40/2015 y AGE |
| Ofimática y microinformática | 15–19 | `PENDIENTE_AUDITORIA` | Windows 11, Edge, Word/Writer, Excel/Calc y hardware |

## Temas auditados

| Tema | Resultado | Informe |
|---:|---|---|
| 1 | Sin errores de plazo, mayoría o cifra detectados. Confirmadas las **cuatro reformas constitucionales** vigentes hasta julio de 2026. | `content/la-puebla/tema-01/auditoria-2026-07-18.md` |
| 2 | Plazos nucleares correctos. Detectada una corrección editorial: donde decía «tres condiciones acumulativas» deben ser **cuatro**. | `content/la-puebla/tema-02/auditoria-2026-07-18.md` |

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

1. Auditar y corregir los **temas 3–4**.
2. Continuar con **5–8**, **9–12**, **13–14** y **15–19**.
3. Generar preguntas y supuestos únicamente después de que el contenido base esté auditado.
4. Reutilizar los temas comunes en Carranque, Las Ventas con Peña Aguilera y futuras convocatorias mediante una matriz de equivalencias, sin duplicar versiones contradictorias.