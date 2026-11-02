# Resultado de la puerta de cierre · Fase 2

- Estado: **VALIDACION_CI_FALLIDA**
- Commit validado: `91f805282fd3f619f202444f3d271fdd7ba6ab17`
- Fecha UTC: `2026-11-02T19:44:55Z`

```text

> opoweb-v2@0.20.6 test
> node tests/validate.mjs && node tests/validate-la-puebla-editorial.mjs && node tests/validate-practice-exam.mjs && node tests/validate-uc3m-exams.mjs

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: Enlace roto en tema 5: fuentes.md
    at file:///home/runner/work/opoweb-v2/opoweb-v2/tests/validate.mjs:57:12
    at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
    at async node:internal/modules/esm/loader:647:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '==',
  diff: 'simple'
}

Node.js v24.22.1
```
