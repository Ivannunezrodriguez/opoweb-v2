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
- Corregido el `service worker` para ignorar solicitudes con esquemas no `http/https` o ajenas al origen. Esto evita el error `Cache.put` con solicitudes `chrome-extension://` observado en navegador.
- Los recursos `js`, `json`, `md`, `html`, `css` y `svg` utilizan estrategia `stale-while-revalidate`; la navegación conserva `network-first` con tiempo máximo de espera de 4,5 segundos.
- La primera captura de red mostró **51 peticiones** y descarga en segundo plano de todos los `manual.md`, con finalización cercana a **17 segundos**.
- Se desactivó la construcción automática del índice completo. La portada ya no solicita todos los manuales; el contenido se carga al abrir cada tema.
- La segunda captura del usuario confirma que ya no aparecen peticiones masivas a `manual.md`; la red finaliza aproximadamente en **1,43 s**, con `DOMContentLoaded` alrededor de **195 ms** y `load` alrededor de **777 ms**.
- El tiempo de red ya no explica por sí solo la sensación de lentitud. Para reducir trabajo del hilo principal, los módulos secundarios de progreso, historial, revisión de errores y enlaces de test se cargan ahora en tiempo ocioso mediante `assets/runtime-enhancements.js`.
- La versión visible y la caché se actualizan a `v0.27.23` / `opoweb-v2-0.27.23`.
- Se mantiene `content-visibility:auto` en bloques del manual y tarjetas de preguntas, y se retiró `backdrop-filter` de la barra fija.

Estado de La Puebla: **19/19 revisados; bancos de preguntas 1–19 y portadas 1–19 alineados; cierre editorial todavía pendiente**.

### Incidencias abiertas

- Verificar en el despliegue la versión visible `v0.27.23` y la carga diferida de módulos secundarios.
- Repetir prueba de scroll con DevTools cerrado y en ventana privada para separar coste de extensiones del coste propio de OpoWeb.
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

1. Confirmar en GitHub Pages la versión `v0.27.23` y la carga diferida.
2. Repetir la prueba de scroll sin DevTools y en ventana privada.
3. Ejecutar y verificar el validador editorial y de enlaces de La Puebla.
4. Corregir esquemas residuales según su informe.
5. Ejecutar comprobación visual y técnica final del despliegue.
6. Continuar UC3M y Diputación.
