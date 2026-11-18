# Fuentes oficiales · Tema 23

**Estado editorial:** `AUDITADO_JURIDICO_PEDAGOGICO`

## Fuente principal

- **Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales**.
  - BOE-A-1995-24292.
  - Texto consolidado consultado en julio de 2026.
  - Última actualización publicada: **9 de abril de 2026**.
  - Materias utilizadas: derecho de protección, principios preventivos, evaluación, formación, emergencias, vigilancia de la salud, obligaciones, servicios de prevención, consulta, delegados de prevención y Comité de Seguridad y Salud.

## Fuente reglamentaria complementaria

- **Real Decreto 39/1997, de 17 de enero**, por el que se aprueba el Reglamento de los Servicios de Prevención.
  - BOE-A-1997-1853.
  - Texto consolidado consultado en julio de 2026.
  - Última actualización publicada: **17 de octubre de 2025**.
  - Materias utilizadas: modalidades organizativas, funciones de los servicios de prevención y recursos preventivos.

## Control editorial

- Epígrafe contrastado con el programa oficial de la Diputación Provincial de Toledo.
- Contenido redactado de forma autónoma, sin reutilizar temarios de otras convocatorias.
- Los plazos, umbrales, órganos y mayorías se han resaltado en **negrita**.
- No se considera contenido aprobado automáticamente: mantiene el estado `GENERACION_DESDE_CERO` hasta la auditoría global de integración.


## Auditoría de redundancias del banco — **04/11/2026**

Se cotejó el banco de **20 preguntas** con [Ley 31/1995](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) y [RD 39/1997](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853). Se detectó repetición sustantiva en cinco preguntas: Comité trimestral, paralización, **24 horas**, vigilancia de salud y constitución de Comité de **50** empleados ya constaban en otras preguntas.

| ID mantenido | Contenido nuevo, distinto del resto | Fuente principal |
|---|---|---|
| **DIP-T23-015** | Informe ordinario de Delegados en **15 días**, salvo tiempo imprescindible ante riesgo inminente | **LPRL 36.3** |
| **DIP-T23-017** | Medidas de **primeros auxilios, lucha contra incendios y evacuación** | **LPRL 20** |
| **DIP-T23-018** | Obligación de **no inutilizar dispositivos de seguridad** | **LPRL 29.2.3.º** |
| **DIP-T23-019** | Definición y medios de **servicio de prevención** | **LPRL 31.2** |
| **DIP-T23-020** | Servicio de prevención propio **más de 500**, o **250–500** en actividades **anexo I** | **RD 39/1997, 14** |

Se actualizaron **las claves, los textos de pregunta efectivos del render (`pregunta`), `trampa`, referencias, explicaciones y la literalidad correcta**. Se conservaron IDs, cuatro opciones y la distribución de **5 respuestas correctas por letra**. El primer intento de edición generó simultáneamente los campos `pregunta` y `enunciado`; se corrigió inmediatamente, eliminando el campo ambiguo, y se incorporó prueba contra esa regresión. **Auditoría jurídica y pedagógica focal, no certificación íntegra del manual.**

> ⚠️ **¡Foco Examen!:** **Comité 50 empleados** ≠ **servicio propio más de 500**, y **15 días** de informe de delegados ≠ **24 horas** de confirmación/anulación de paralización por **autoridad laboral**.

**Contraste de umbrales:** [LPRL https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) última actualización **09/04/2026**, [Reglamento Servicios Prevención https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853](https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853), **50 Comité** frente **>500 servicio propio**.

[**Informe del bloque C1 20–23**](https://github.com/Ivannunezrodriguez/opoweb-v2/blob/main/content/diputacion-toledo/cotejo-bloque-20-23-2026-11-05.md). **Auditoría jurídico-pedagógica cerrada**, con **20 preguntas, 80 alternativas**. Pruebas de navegador y accesibilidad transversales.

> ⚠️ **¡Foco Examen!:** No confundir normas estatales con las cláusulas especiales de la Diputación ni con excepciones jurídicas.
