# Resultado de la puerta de cierre · Fase 2

- Estado: **VALIDACION_CI_FALLIDA**
- Commit validado: `de692caf0b6fae79910ba252ebcad4d25e3624be`
- Fecha UTC: `2026-11-02T17:04:42Z`

```text

> opoweb-v2@0.20.6 test
> node tests/validate.mjs && node tests/validate-la-puebla-editorial.mjs

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

5 !== 3

    at file:///home/runner/work/opoweb-v2/opoweb-v2/tests/validate.mjs:88:8
    at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
    at async node:internal/modules/esm/loader:647:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 5,
  expected: 3,
  operator: 'strictEqual',
  diff: 'simple'
}

Node.js v24.22.1
```
