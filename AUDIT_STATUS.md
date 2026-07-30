# Estado de auditoría · OpoWeb v2

Última actualización: **30 de julio de 2026**.

## Fase 2

Estado: **EN_AUDITORIA**. La pasada transversal de La Puebla alcanza **19/19 temas**, pero ningún tema está todavía marcado como `CERRADO_FASE_2`.

## Cambios verificados

### La Puebla de Montalbán

- Tema 1: vigencia constitucional reconfirmada tras la reforma del artículo 69.3 publicada el **20 de mayo de 2026**; matriz y banco de **12 preguntas** normalizados.
- Tema 2: vigencia de la Ley 39/2015 reconfirmada; matriz y banco de **12 preguntas** normalizados.
- Tema 3: vigencia de los artículos 53–105 de la Ley 39/2015 reconfirmada; matriz y banco de **12 preguntas** verificados y normalizados a `APROBADO_USUARIO`.
- Tema 4: vigencia de los artículos 106–126 de la Ley 39/2015 y especialidad local reconfirmadas; matriz y banco de **12 preguntas** normalizados.
- Tema 5: vigencia de la Ley 7/1985 y de la LOREG reconfirmada; matriz y banco de **12 preguntas** normalizados.
- Tema 6: matriz y banco actualizados; contrato frontend verificado para `pregunta/enunciado`, `correcta/respuestaCorrecta` y `trampa/trampaExamen`.
- Tema 7: vigencia de la Ley 31/1995 y del Reglamento de los Servicios de Prevención reconfirmada; matriz y banco de **12 preguntas** normalizados a **30 de julio de 2026**.
- Tema 8: vigencia de la Ley 12/2010 de Castilla-La Mancha y de la Ley Orgánica 3/2007 reconfirmadas; matriz y banco de **12 preguntas** normalizados a **30 de julio de 2026**.
- Tema 9: vigencia de la Ley Orgánica 3/2018 y coordinación con el RGPD reconfirmadas; matriz y banco de **12 preguntas** normalizados a **30 de julio de 2026**.
- Temas 1–19: portadas, jerarquía principal y llamadas explícitas normalizadas mediante proceso reproducible.
- Se ha incorporado `tests/validate-la-puebla-editorial.mjs` al comando `npm test`. El control comprueba H1 único, portada, ausencia de metadatos históricos, llamadas antiguas detectables, banco aprobado con 12 preguntas y existencia de enlaces locales.
- La carga masiva de manuales al abrir la portada quedó eliminada y la segunda captura confirmó tiempos de red inferiores a dos segundos.
- Tras introducir estrategias de caché, una navegación controlada por `sw.js` quedó en estado `pending`, impidiendo incluso cargar la portada.
- Como medida de recuperación, `sw.js` se ha convertido en un service worker de retirada: elimina todas las cachés, se desregistra y no incorpora listener `fetch`.
- `index.html` incorpora además una limpieza defensiva de registros y cachés antes de iniciar la aplicación. La versión visible pasa a `v0.27.25`.

Estado de La Puebla: **19/19 revisados; bancos de preguntas 1–19 y portadas 1–19 alineados; cierre editorial todavía pendiente**.

### Incidencias abiertas

- Confirmar en GitHub Pages que la portada vuelve a cargar sin navegación `pending`.
- Confirmar que no queda ningún service worker controlando el sitio.
- Repetir la apertura de un tema y la prueba de scroll rápido sin caché de aplicación.
- Ejecutar y verificar en CI el validador editorial y de enlaces.
- Revisar esquemas o bloques de repaso ausentes o no homogéneos.
- Comprobación visual y técnica final del despliegue.

## Seguimiento oficial de convocatorias

Comprobación realizada el **30 de julio de 2026**:

- **Diputación de Toledo · Administrativo C1:** el portal oficial mantiene abierto el plazo hasta el **31 de julio de 2026**; no consta lista provisional de esta convocatoria.
- **UC3M · Auxiliar Administrativa C2:** convocatoria abierta hasta el **5 de agosto de 2026**; la fecha del ejercicio del **21 de noviembre de 2026 a las 10:00** continúa siendo **previsible**, no definitiva; no consta lista provisional.
- **CPEIS Toledo:** no se ha verificado una nueva lista provisional; permanece en solo seguimiento.
- **La Puebla de Montalbán:** no se ha verificado una nueva publicación oficial que altere el estado registrado.
- **Carranque:** no se ha verificado una publicación posterior que altere el estado registrado.

`data/convocatorias.json` queda actualizado a **30 de julio de 2026**.

## Estado por proyectos

| Proyecto | Cobertura | Estado |
|---|---:|---|
| La Puebla | **19/19** | Revisión transversal completa; cierre editorial pendiente |
| Diputación C1 | **40/40** | En revisión; OAPGT pendiente de fuente íntegra |
| UC3M C2 | **20/20** | En revisión transversal |
| CPEIS | Solo seguimiento | Pendiente de decisión del usuario |

## Orden de trabajo

1. Recuperar y verificar la carga normal de GitHub Pages sin service worker.
2. Repetir apertura de tema y prueba de scroll.
3. Ejecutar y verificar el validador editorial y de enlaces de La Puebla.
4. Corregir esquemas residuales según su informe.
5. Ejecutar comprobación visual y técnica final del despliegue.
6. Continuar UC3M y Diputación.
