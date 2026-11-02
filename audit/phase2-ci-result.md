# Resultado de la puerta de cierre · Fase 2

- Estado: **VALIDACION_CI_SUPERADA**
- Commit validado: `4e792e1a5ea634e97d8144607daa8f6e2d917ec7`
- Fecha UTC: `2026-11-02T18:28:24Z`

```text

> opoweb-v2@0.20.6 test
> node tests/validate.mjs && node tests/validate-la-puebla-editorial.mjs && node tests/validate-practice-exam.mjs && node tests/validate-uc3m-exams.mjs

{
  "editorialVersion": "0.19.0",
  "applicationVersion": "0.20.6",
  "approved": 19,
  "generatedQuestions": 228,
  "practicalCases": 20,
  "mockExams": 5,
  "multiCallPractice": "VALIDATED",
  "segregatedProgress": "VALIDATED",
  "navigationHistory": "VALIDATED",
  "progressiveEnhancements": "VALIDATED",
  "serviceWorkerRetired": "VALIDATED",
  "tema6Interinidad": "4_YEARS_SOURCE_VALIDATED",
  "status": "LA_PUEBLA_VALIDATOR_UPDATED"
}
{
  "proyecto": "La Puebla de Montalbán",
  "temasValidados": 19,
  "controles": [
    "H1 único y título normalizado",
    "estado y fecha editorial visibles",
    "ausencia de metadatos históricos",
    "ausencia de llamadas antiguas detectables",
    "banco APROBADO_USUARIO con 12 preguntas",
    "bloque final de esquema o repaso",
    "enlaces locales existentes"
  ],
  "temas": [
    {
      "tema": 1,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 2,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 2,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 3,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 3,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 2,
      "encabezadosEsquemaRepaso": 3,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 4,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 5,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 5,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 3,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 6,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 4,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 7,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 4,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 8,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 4,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 9,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 3,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 10,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 2,
      "encabezadosEsquemaRepaso": 5,
      "enlacesLocalesVerificados": 0
    },
    {
      "tema": 11,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 2,
      "enlacesLocalesVerificados": 8
    },
    {
      "tema": 12,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 1,
      "enlacesLocalesVerificados": 8
    },
    {
      "tema": 13,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 1,
      "enlacesLocalesVerificados": 7
    },
    {
      "tema": 14,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 2,
      "enlacesLocalesVerificados": 7
    },
    {
      "tema": 15,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 2,
      "enlacesLocalesVerificados": 8
    },
    {
      "tema": 16,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 0,
      "encabezadosEsquemaRepaso": 2,
      "enlacesLocalesVerificados": 7
    },
    {
      "tema": 17,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 2,
      "encabezadosEsquemaRepaso": 1,
      "enlacesLocalesVerificados": 7
    },
    {
      "tema": 18,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 1,
      "enlacesLocalesVerificados": 7
    },
    {
      "tema": 19,
      "h1": 1,
      "banco": "APROBADO_USUARIO",
      "preguntas": 12,
      "llamadasFoco": 1,
      "encabezadosEsquemaRepaso": 1,
      "enlacesLocalesVerificados": 7
    }
  ],
  "estado": "VALIDACION_EDITORIAL_AUTOMATIZADA_OK"
}
SIMULACROS_PUEBLA_50_MAS_5_NOTA_Y_BLANCOS_OK
UC3M_3_SIMULACROS_70_5_225_IDS_Y_SCORE_DIRECTO_OK
```
