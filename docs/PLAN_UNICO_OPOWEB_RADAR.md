# Registro único OpoRadar — avances, pendientes y próximos pasos
**Corte:** 18/11/2026. **Propósito:** evitar tareas repetidas o informes redundantes.

Este documento es el punto de control de **OpoRadar**. El estado editorial de los temarios sigue en `AUDITORIA_CONTINUA.md`; no mezclar los dos proyectos. Cada mejora futura debe actualizar aquí su estado y el enlace al código/prueba.

## Decisiones
- Zona: toda la provincia de Toledo y sur de Madrid; empleo fijo, bolsas, interinidades, sustituciones y contratos temporales.
- La fecha de **detección** no equivale a publicación oficial ni inicio del plazo.
- **30 días** desde la publicación es margen para revisar una ficha incompleta, **no** cierre legal. Los días hábiles se calculan según calendario oficial y rectificaciones, nunca suponiendo 20 por defecto.
- Mantener históricas y cerradas; distinguir **plazo de solicitud** de **situación de participación**.
- No inferir idoneidad solo por subgrupo o por el nombre del puesto.
- No añadir más datos personales al sitio público. Los datos históricos del repo y GitHub Pages necesitan auditoría de privacidad; privatizar el repositorio no retira copias externas anteriores.

## Implementado (no repetir sin detectar defectos concretos)
| ID | Resultado | Estado y evidencia |
|---|---|---|
| R01 | Rastreo BOE/BOP/DOCM/BOCM y sedes municipales | Parcial: `tools/radar*`, cobertura incompleta |
| R02 | Extracción automática PDF/HTML | Parcial: `tools/radar-enrich.mjs`; requiere trazabilidad y pruebas |
| R03 | Filtros por plaza, zona, tipo, estado y texto | Implementado: `assets/radar.js` |
| R04 | Enlace conservador de Radar con convocatorias seguidas | Parcial: `assets/radar-tracking.js`; privacidad pendiente |
| R05 | Colores de inscripción, admisión y caducidad | Implementado: `assets/radar.css` |
| R06 | Ordenación por plazas, cierre, publicación, detección y relevancia | Código publicado: `assets/radar-sort.js`; `tests/radar-sort.mjs` |
| R07 | Avisos visuales de cierre en 7 días o menos | Código publicado, no es notificación por correo |
| R08 | Olías: solicitud de 17/11/2026 declarada por usuario | Registrada, **no** equivale a admisión ni recibo cotejado |
| R09 | Tests de ordenación incluidos en GitHub Actions | Configurados; comprobar ejecución y despliegue real |

## Cola priorizada y criterio de cierre
| ID | Prioridad | Tarea | Estado | Cierre verificable |
|---|---|---|---|---|
| P01 | Crítica | **Privacidad y publicación GitHub Free**: respaldo; crear repositorio privado de desarrollo y uno público solo para Pages; migrar el desarrollo y publicar únicamente artefactos despersonalizados | Pendiente de pasos del propietario | Página accesible, repo fuente privado y fichero público sin datos personales |
| P02 | Crítica | Extraer literalmente plazo, unidad de cómputo y evento de inicio, y detectar conflicto de fuentes | PARCIAL: lector implementado con tests; falta detección cruzada de discrepancias | Tests con ejemplos de bases, plazos relativos y contradicciones |
| P03 | Crítica | Cotejar publicación BOE/BOP/DOCM y calendario de festivos para **fecha exacta**; no inventar cierre | Pendiente | Fuente y fecha verificadas o campo «por comprobar» |
| P04 | Alta | Alertas por cambio de fase: inscripción, subsanación, listas y examen, sin duplicados | Pendiente; avisos actuales solo de nuevas ofertas | Ensayos que demuestren que no se sigue pidiendo inscribirse a quien ya lo hizo |
| P05 | Alta | Panel de seguimiento protegido «Mis oposiciones» | Parcial, actualmente usando manifiesto en repo público | Estados actualizables sin publicar datos privados |
| P06 | Alta | Compatibilidad por requisitos reales (DAM, título mínimo, carné, experiencia) | Pendiente | Explicación por requisito y enlace a bases |
| P07 | Media | Distancias y tiempos reales desde Toledo | Pendiente | Destino confirmado, origen y método reproducible |
| P08 | Media | Separar fijo, bolsas, temporal e interinidades y evitar anuncios repetidos | Parcial | Casos de prueba para cada modalidad y deduplicación entre boletines |
| P09 | Media | Verificar despliegue Pages y ejecución CI tras cambios | Pendiente de validación completa | Workflow correcto y visita E2E a web |

## Próxima acción, sin redundancias
1. Con **GitHub Free**, **NO** hacer privado `opoweb-v2` todavía: GitHub despublicará Pages. Primero preparar alojamiento público separado y una copia privada, sin transferir archivos personales al destino público.
2. Resolver P02 y P03 con pruebas documentales; no corregir fichas únicamente de forma visual.
3. Incorporar P04 solo después de migrar seguimiento privado.

## Registro de acuerdos
- 18/11/2026: se solicita persistir sugerencias, avances y pendientes para evitar reiteraciones.
- 18/11/2026: el propietario confirma **GitHub Free**. Arquitectura objetivo: **fuente privada + web pública mínima despersonalizada**; pendiente ejecución y verificación.

## Avance de la siguiente fase (18/11/2026)
- Nuevo módulo `tools/radar-deadline-rule.mjs` extrae días, naturales/hábiles y boletín de inicio de la regla del anuncio; conserva `deadlineVerified:false`.
- Integrado en `tools/radar-enrich.mjs` y ampliado `tests/radar-enrich.mjs` con ejemplos BOE/BOP. **No calcula todavía fechas finales ni resuelve contradicciones oficiales.**
- Siguiente tarea P03: conectar la fecha real de publicación y calendario de festivos, conservar explicación y fuente; luego pruebas sobre Olías y Diputación. No presentar el extractor como auditoría jurídica final.

## Reutilización del repositorio antiguo — 18/11/2026
- Revisión realizada sobre `Ivannunezrodriguez/opoweb` (público, versión v0.89.2, ~2.2 MB) y `opoweb-v2` (~11.5 MB); se consultaron README, index, JS de app, SW, estilos y pruebas de almacenamiento.
- Decisión: **no importar** los temarios, datos de convocatorias ni la aplicación antigua; podrían introducir contenido desactualizado. Los tests de almacenamiento y SW quedan como referencias de diseño, sin trasladarlos sin necesidad.
- Arquitectura propuesta: renombrar `opoweb` a `opoweb-dev` y establecer visibilidad **privada**, conservando histórico antiguo temporalmente; luego reemplazar su rama de trabajo con copia verificada de v2. `opoweb-v2` conserva nombre, ruta Pages y visibilidad pública; contendrá solo artefactos estáticos despersonalizados tras preparar sincronización.
- **Pendiente de acción del propietario:** renombrar y cambiar visibilidad del repo antiguo desde Settings; no borrar archivos ni modificar `opoweb-v2` antes del backup. GitHub Free requiere repo Pages público. No presentar la migración como realizada.
- Riesgos: contenido privado no puede ser consumido directamente mediante fetch desde Pages. Datos de inscripción ya expuestos en el historial de `opoweb-v2` siguen accesibles como versiones antiguas aunque se deje de publicar el archivo actual. Revisar estrategia de historia/limpieza con backup antes de activar nueva publicación.
