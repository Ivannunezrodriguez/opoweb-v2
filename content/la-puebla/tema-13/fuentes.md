# La Puebla · Tema 13 · Fuentes de certificados y servicios de confianza

**Revisión de fuente:** **02/11/2026**, sin auditoría individual completa de todas las preguntas.

- **BOP Toledo núm. 82, 05/05/2026, anuncio 2026-1965, CSV 2026.00001965**.
- [**Reglamento (UE) 910/2014 eIDAS (DOUE-L-2014-81822)**](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822), modificado por [**Reglamento (UE) 2024/1183**](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608).
- [**Ley 6/2020, de servicios electrónicos de confianza (BOE-A-2020-14046)**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). **Derogó Ley 59/2003**.
- [**Ley 39/2015, arts. 9–12**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), identificación y firma.
- [**Ley 40/2015, arts. 38 y 40–43**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566), sellos, sedes y actuaciones automatizadas.
- [**Real Decreto 203/2021, reglamento de actuación electrónica (BOE-A-2021-5032)**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032).

| Concepto | Diferenciación esencial |
|---|---|
| Identificación / firma | Identificar acredita identidad; firmar vincula autoría y voluntad del firmante |
| Certificado / dispositivo | La condición de certificado cualificado **no** resulta solo del soporte |
| Autoridad de registro / certificación | Registro comprueba identidad; prestador certificador expide conforme al servicio |
| Revocación / suspensión | Revocación extingue vigencia; suspensión puede ser temporal |

> ⚠️ **¡Foco Examen!:** La antigua **Ley 59/2003** de firma electrónica fue **derogada**; la regulación base actual comprende **eIDAS** y **Ley 6/2020**, que no deben confundirse.

## Verificación focalizada de plazos eIDAS (2 de noviembre de 2026)

| Fuente oficial | Norma comprobada | Dato |
|---|---|---|
| [**Reglamento (UE) 910/2014 consolidado**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18) | **Art. 20.1 y 20.1 bis**, según reforma de **2024** | Auditoría **al menos cada 24 meses**; preaviso **al menos un mes antes**; informe en **3 días laborables** tras recibirlo |
| [**Reglamento eIDAS, art. 24.3**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18) | Revocación de certificados cualificados | Estado publicado en **24 horas como máximo desde recepción de solicitud**; eficacia desde publicación |
| [**Ley 6/2020, arts. 4.2 y 9.3.a**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) | Vigencia y conservación | **5 años** de vigencia máxima; **15 años** de conservación |

> ⚠️ **¡Foco Examen!:** **24 meses** de auditoría, **1 mes** de preaviso, **3 días laborables** para el informe y **24 horas** para la publicación de la revocación son obligaciones distintas. Se ha comprobado el origen de cada cifra, pero el tema no queda íntegramente recertificado.

**Pendiente:** revisión integral de todos los distractores y de posibles cambios de ejecución técnica posteriores al marco eIDAS consolidado consultado. [Registro editorial](../../../AUDITORIA_CONTINUA.md).

## Revisión focalizada de efectos y obligaciones de prestadores — **04/11/2026**

Fuentes primarias: [**eIDAS consolidado, arts. 25–26**](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A02014R0910-20241018) y [**Ley 6/2020, arts. 9 y 12**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). **Art. 25.1** protege admisión probatoria de firma electrónica no cualificada sin equipararla a manuscrita; **25.2** equipara firma cualificada a manuscrita. **Ley 6/2020, art. 9.3.b:** seguro **1.500.000 €** y **500.000 € por cada servicio cualificado adicional** salvo sector público; **art. 12**: comunicación prestador no cualificado **3 meses** desde inicio. El plazo de 15 años de conservación queda distinguido del máximo de 5 años de vigencia. **Solo contraste parcial; no recertificación integral.**

## Auditoría de definiciones eIDAS y dos preguntas — **04/11/2026**

**Fuente primaria:** [Reglamento (UE) 910/2014 consolidado en EUR-Lex (18/10/2024)](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), **arts. 3.9–10, 3.14, 3.24–25, 25–26 y 35–36**.

**Hallazgo jurídico real:** la formulación original atribuía a **toda firma electrónica** garantías plenas de autoría, voluntad e integridad, y a cualquier **sello** una garantía jurídica indistinta. La definición general de firma de **art. 3.10** no contiene todos los requisitos técnicos de **art. 26** para firma avanzada. Además, la **presunción legal** de integridad/corrección del origen del **art. 35.2** se reconoce específicamente al **sello electrónico cualificado**, sin excluir por ello el valor probatorio de sellos no cualificados (**art. 35.1**).

| Pregunta revisada | Redacción nueva y resultado | Fundamentación |
|---|---|---|
| **LP-T13-001** | Certificado de **firma** vincula validación con **persona física**; firma = **datos que utiliza el firmante para firmar** | **eIDAS 3.9–10, 3.14 y 26** |
| **LP-T13-003** | Firma creada por **persona física**; **sello cualificado** con presunción expresa sobre **integridad y corrección del origen** | **eIDAS 3.24, 35.1–2 y 36** |

Se han corregido manual, esquema y banco de preguntas manteniendo IDs y posiciones; son **2 claves y su formulación contrastadas**, no las otras 10 preguntas ni el tema completo.

> ⚠️ **¡Foco Examen!:** **Firma simple ≠ firma avanzada ≠ firma cualificada**. En los **sellos**, la presunción de origen e integridad solo está atribuida expresamente al **cualificado** por el **art. 35.2**; el sello no cualificado **no** pierde automáticamente toda eficacia jurídica.

## Auditoría de unicidad de alternativa correcta — **04/11/2026**, lote LP-T13-004/009

Se detectaron **dos preguntas de respuesta múltiple encubierta** pese a que el test fija una sola clave. **LP-T13-004** pedía elegir el único requisito que «no basta» para obtener un certificado cualificado: los requisitos positivos A, C y D **tampoco bastan aisladamente**. Se transformó en «¿qué afirmación es INCORRECTA?» con tres verdades legales y publicidad comercial como única falsedad.

**LP-T13-009** pedía qué comprobación «no basta» para validar: verificar integridad, vigencia o cadena **tampoco es suficiente aisladamente**. Ahora pregunta qué indicio **no es una comprobación técnica** (la imagen visual de rúbrica). Se conserva la distinción entre **controles técnicos parciales** y **validación completa**. Ambas correcciones preservan IDs, claves y posiciones del banco equilibrado.

**Fuentes:** [eIDAS original y reformas](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822), [eIDAS 2024](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) (**arts. 3, 22, 26, 28 y 32**) y [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). **Estado: control focal de unicidad; las 12 preguntas no están certificadas integralmente**.

> ⚠️ **¡Foco Examen!:** En preguntas con **«no basta por sí solo»**, varias medidas parciales pueden ser insuficientes: el opositor no debe verse obligado a elegir arbitrariamente una de varias respuestas válidas.

## Cotejo integral de banco y programa — **04/11/2026**

Se ha contrastado una a una **12 respuestas correctas y sus 36 distractores** con sus reglas oficiales correspondientes, y se ha revisado cobertura de los **cinco incisos** y bloques documentales. El resultado es [**informe de cotejo de 48 opciones**](cotejo-integral-2026-11-04.md). Corrección adicional: **LP-T13-008** distingue revocación jurídica (vigencia extinta) de imposibilidad técnica de firmar; la clave privada no desaparece y las firmas históricas válidas no se anulan necesariamente. Fundamento: [**Ley 6/2020 art. 4**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) y [**eIDAS art. 24.3 y 32.1**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa).

**Alcance de cierre:** **jurídico-editorial** del contenido exigible en el programa; la **verificación funcional real** en móvil/escritorio queda como control técnico separado y no se presume. La revisión no equivale a garantía de inexistencia absoluta de cambios legislativos futuros.

> ⚠️ **¡Foco Examen!:** Revocación publicada: el certificado **ya no es vigente** para firmas futuras; no significa que la clave sea técnicamente inutilizable ni que toda firma anterior quede invalidada.

