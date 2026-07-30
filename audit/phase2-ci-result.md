# Resultado de la puerta de cierre · Fase 2

- Estado: **VALIDACION_CI_FALLIDA**
- Commit validado: `f3db6b34cae993ae839e75193f3e5742114e166b`
- Fecha UTC: `2026-07-30T19:12:56Z`

```text

> opoweb-v2@0.20.6 test
> node tests/validate.mjs && node tests/validate-la-puebla-editorial.mjs

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: El Tema 6 debe reflejar el máximo total de cuatro años
    at file:///home/runner/work/opoweb-v2/opoweb-v2/tests/validate.mjs:115:8
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:643:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '==',
  diff: 'simple'
}

Node.js v24.18.0
```
