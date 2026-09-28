# Radar de empleo público OpoWeb

## Objetivo
Detectar oportunidades públicas que puedan ser compatibles con el perfil de Técnico Superior DAM en toda la provincia de Toledo y en municipios del sur de Madrid.

## Fuentes
1. BOE: API REST oficial de sumarios.
2. Punto de Acceso General: buscador de convocatorias, con filtros por provincia y nivel de titulación y exportación XML/CSV.
3. BOP Toledo: buscador oficial por fecha, anunciante, tipo y texto.
4. BOCM: RSS oficiales de boletines/sumarios.
5. DOCM: sumario oficial y lectura de las ofertas de empleo detectadas.

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

## Alcance solicitado (28/09/2026)
- Solo oportunidades nuevas; sin seguimiento de admitidos, exámenes, resultados o nombramientos.
- Cualquier profesión potencialmente accesible: sin lista cerrada de puestos. Incluye bolsas, sustituciones, suplencias, contratos de relevo, interinidades, planes de empleo y contratación temporal.
- No confundir un anuncio detectado con requisitos cumplidos. Permisos, experiencia, habilitaciones y titulación específica requieren leer las bases.
- El BOP Toledo aporta el ámbito provincial también cuando el municipio no incluye «Toledo» en su nombre.
- Un fallo de una fuente no bloquea las novedades del resto. El JSON registra sourceStatus y conserva las oportunidades anteriores sin volver a notificarlas.
- La deduplicación actual es por identificador de anuncio y fuente; no identifica necesariamente la misma convocatoria publicada en varios boletines.

## Límites de cobertura pendientes
Las cinco fuentes no garantizan exhaustividad. Aún no se consultan directamente todos los tablones/sedes municipales, portales de contratación temporal sanitaria, universidades y empresas públicas. Un aviso exclusivo en esos portales puede no detectarse. BOE/BOP se consultan con ventana de tres días y BOCM/DOCM por último boletín/sumario; una interrupción prolongada puede dejar huecos. No prometer «ninguna oportunidad perdida» hasta ampliar y verificar esas fuentes.
