# Resultado de la puerta de cierre · Fase 2

- Estado: **VALIDACION_CI_FALLIDA**
- Commit validado: `ddf7b8fe5b222753bd0dbe5a4daa32c5631be4df`
- Fecha UTC: `2026-11-02T17:01:28Z`

```text

> opoweb-v2@0.20.6 test
> node tests/validate.mjs && node tests/validate-la-puebla-editorial.mjs

{
  "editorialVersion": "0.19.0",
  "applicationVersion": "0.20.6",
  "approved": 19,
  "generatedQuestions": 228,
  "practicalCases": 20,
  "mockExams": 3,
  "multiCallPractice": "VALIDATED",
  "segregatedProgress": "VALIDATED",
  "navigationHistory": "VALIDATED",
  "progressiveEnhancements": "VALIDATED",
  "serviceWorkerRetired": "VALIDATED",
  "tema6Interinidad": "4_YEARS_SOURCE_VALIDATED",
  "status": "LA_PUEBLA_VALIDATOR_UPDATED"
}
node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: Falta fecha de revisión normativa en tema 12
    at file:///home/runner/work/opoweb-v2/opoweb-v2/tests/validate-la-puebla-editorial.mjs:41:10
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
