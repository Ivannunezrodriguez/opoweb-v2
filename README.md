# OpoWeb v2

Nueva plataforma de estudio para oposiciones administrativas, reconstruida desde cero tras archivar el repositorio legado `opoweb`.

## Regla principal

> **«Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.»**

Las reglas completas están en [`PROJECT_RULES.md`](PROJECT_RULES.md).

## Estado actual

- Convocatoria inicial: **La Puebla de Montalbán · cuatro plazas de Auxiliar Administrativo C2**.
- Programa oficial: **19 temas**.
- Tema 1: `APROBADO_USUARIO` el 17 de julio de 2026.
- Temas 2–19: `PENDIENTE_RECONSTRUCCION`.
- Preguntas heredadas: **0**.
- Resúmenes heredados: **0**.
- Porcentajes históricos de completitud: **eliminados**.

## Fuente del programa

BOP de Toledo número 82, de 5 de mayo de 2026, código de verificación `2026.00001965`.

El programa literal está registrado en [`data/programa.json`](data/programa.json).

## Arquitectura

```text
opoweb-v2/
├─ assets/
│  ├─ app.js
│  ├─ icon.svg
│  └─ styles.css
├─ content/
│  └─ la-puebla/
│     └─ tema-01/
│        ├─ manual.md
│        ├─ matriz.json
│        ├─ aprobacion.md
│        └─ preguntas.json
├─ data/
│  └─ programa.json
├─ tests/
│  └─ validate.mjs
├─ PROJECT_RULES.md
├─ index.html
├─ manifest.json
└─ sw.js
```

No existen manifiestos con centenares de scripts, módulos versionados superpuestos ni parches de interfaz. La aplicación lee directamente datos y contenido declarativo.

## Criterio de publicación

Un tema debe aportar epígrafe literal, matriz normativa, desarrollo sistemático, fuentes oficiales, trazabilidad y aprobación expresa del usuario. Las pruebas automáticas comprueban integridad, pero no sustituyen la revisión humana.

## Desarrollo local

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080`.

## Validación

```bash
npm test
```

La validación confirma que solo existe un tema aprobado, que los otros dieciocho no contienen teoría heredada y que el manual aprobado no está truncado.