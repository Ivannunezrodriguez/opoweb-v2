# Radar de empleo público OpoWeb

## Objetivo
Detectar oportunidades públicas que puedan ser compatibles con el perfil de Técnico Superior DAM en toda la provincia de Toledo y en municipios del sur de Madrid.

## Fuentes
1. BOE: API REST oficial de sumarios.
2. Punto de Acceso General: buscador de convocatorias, con filtros por provincia y nivel de titulación y exportación XML/CSV.
3. BOP Toledo: buscador oficial por fecha, anunciante, tipo y texto.
4. BOCM: RSS oficiales de boletines/sumarios.
5. DOCM: conector pendiente de estabilizar antes de automatizarlo; no se hará scraping frágil sin prueba.

## Regla de compatibilidad
- CUMPLE: solo cuando las bases permiten una titulación que el perfil satisface.
- REVISAR: publicación detectada pero requisitos completos todavía no verificados.
- NO_CUMPLE: requisito incompatible o acceso no libre.
- No se infiere compatibilidad únicamente de C1/C2/B.

## Alertas
El workflow se ejecuta dos veces al día. GitHub Actions no garantiza ejecución al minuto exacto. El correo solo se envía para altas nuevas.

## Secretos
- RADAR_EMAIL: destinatario.
- RESEND_API_KEY: clave privada de Resend.
- RADAR_FROM: remitente verificado opcional.

Nunca guardar correo ni API keys en archivos versionados.
