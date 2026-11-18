# La Puebla de Montalbán · Control jurídico-editorial focal de los temas 1–4

**Actuación:** **06/11/2026**, para el examen previsto el **14/11/2026**. **Carácter del cierre:** **INCIDENCIAS DOCUMENTALES RESUELTAS CON RESERVAS**, no nueva aprobación de los temas ni recertificación de las cinco capas de OpoWeb. Las aprobaciones del **17/07/2026** y cotejos de **04/11/2026** son hitos históricos preservados.

## 1. Programa oficial y alcance

| Tema | Programa y base normativa | Cierre original | Mejora verificable realizada |
|---|---|---|---|
| **1** | Constitución, estructura, reforma, derechos, garantías y suspensión; **CE** | **6 incisos**, **12 preguntas/48 alternativas** cotejadas | Desarrollada **disposición transitoria única** de la reforma del **69.3 CE**, **BOE de 20/05/2026**, con tabla de eficacia electoral |
| **2** | **Ley 39/2015, arts. 1–33** | **5 incisos**, **12 preguntas/48 alternativas** cotejadas | Repaso de **arts. 30–33**: plazo mensual, cómputo en inhábil, ampliación, urgencia |
| **3** | **Ley 39/2015, arts. 53–105** | **9 bloques**, **12 preguntas/48 alternativas** cotejadas | Eliminada frase obsoleta «preguntas no creadas»; ampliado cotejo de **art. 96.2–6** |
| **4** | **Ley 39/2015, arts. 106–126** | **7 incisos**, **12 preguntas/48 alternativas** cotejadas | Comparativa de **106, 122, 124 y 125**, destacando requisitos, recursos y plazos |

**Banco de preguntas histórico intacto:** **48 preguntas y 192 alternativas**. Las **8 preguntas nuevas/32 alternativas** están en el [**repaso urgente T01–T04**](REPASO_URGENTE_T01_T04_20261106.md), **solo como material Markdown**, no en la práctica interactiva ni en simulacros; no se afirma que sean oficiales.

## 2. Hallazgos y correcciones reales

### Constitución, reforma de 2026

La [**reforma oficial del art. 69.3, BOE-A-2026-10881**](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10881) y el [**texto consolidado de la CE**](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a69) distinguen:

- **Publicación y vigencia desde 20/05/2026** del nuevo art. **69.3**.
- **Ibiza** y **Formentera**, con **una circunscripción electoral senatorial y un senador por isla** tras la reforma.
- **Eficacia de esa creación pospuesta hasta la convocatoria de las primeras elecciones al Senado posteriores** a la entrada en vigor, según **disposición transitoria única**.

El [**manual del tema 1**](tema-01/manual.md) incorpora **§4.5** con este matiz, y [**fuentes T1**](tema-01/fuentes.md) registra oficialmente la diferencia. La reforma es **la cuarta**: **1992, 2011, 2024 y 2026**.

> ⚠️ **¡Foco Examen!:** La **reforma publicada en 2026** no significa que su **eficacia electoral** prescinda de la **disposición transitoria única**.

### Ley 39/2015, plazos y recursos

| Regla legal | Lo correcto | Trampa |
|---|---|---|
| **Art. 30.4–5** | Meses por **día equivalente**; falta de día: **último del mes**; vencimiento inhábil: **siguiente hábil** | No afirmar **1 de marzo siempre** en notificación de **31 enero** |
| **Art. 32.1, 3** | Ampliación ordinaria de **hasta la mitad**, acordada **antes de vencer** | No ampliar plazo ya vencido |
| **Art. 33.1** | Urgencia **reduce a la mitad**, excepto **solicitudes y recursos** | No reducir todas las fases |
| **Art. 96.2 y 96.5** | En general cabe oposición a simplificada de oficio; **no** para los sancionadores **leves** del **96.5** | No convertir la oposición en absoluta |
| **Art. 96.6** | Resolver simplificado en **30 días**, salvo menor resto de ordinario; audiencia solo ante resolución **desfavorable** | No confundir 30 días con alegaciones o subsanación |
| **Art. 122** | **Alzada**: interposición **1 mes expreso**, resolución **3 meses** | La excepción del **doble silencio** remite a **24.1** |
| **Art. 124** | **Reposición**: interposición **1 mes expreso**, resolución **1 mes** | No dar 3 meses |
| **Art. 125.2** | Extraordinario por **error de hecho documental** **4 años**; otras causas **3 meses** | No confundir revisión extraordinaria y revisión de oficio |
| **Art. 106.1** | Nulidad de actos con requisitos legales, **dictamen favorable del órgano consultivo** cuando procede | No revisar cualquier acto sin límite |

**Fuente normativa:** [**Ley 39/2015 consolidada, BOE-A-2015-10565**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), contrastada en los artículos indicados. Las respuestas de los bancos originales se conservan.

> ⚠️ **¡Foco Examen!:** **Alzada: 1/3 meses; reposición: 1/1 mes**, ambos contra actos expresos para interposición. La **ampliación (32)** aumenta plazo y la **urgencia (33)** lo acorta con excepciones.

## 3. Corrección de contradicciones internas

- [**Tema 3, manual**](tema-03/manual.md) ya no afirma que sus preguntas «no estén creadas»: constan las **12 preguntas/48 opciones** cotejadas **04/11**. Se conserva la aprobación histórica del usuario.
- [**Fuentes tema 1**](tema-01/fuentes.md) y [**fuentes tema 2**](tema-02/fuentes.md) ya no conservan sin aclaración la antigua nota de «distractores pendientes»: queda fechada como antecedente del **02/11** y se indica el cotejo posterior de **04/11**.
- Los cuatro manuales y sus fuentes enlazan el [**repaso urgente**](REPASO_URGENTE_T01_T04_20261106.md) con tablas y ocho microcasos resueltos.
- Se respetan los cuatro bancos en su estado **`APROBADO_USUARIO`**; **no** se actualiza ninguna clave, ningún original ni los simulacros.

## 4. Puerta técnica y bloqueos

[**Prueba de regresión específica**](../../tests/validate-la-puebla-repaso-t01-t04-20261106.mjs) en el flujo de GitHub Actions: recuenta **4 bancos/48 preguntas/192 alternativas**, 8 casos de repaso con 4 opciones cada uno, claves, enlaces entre manuales y repaso, la corrección transitoria de **69.3** y la eliminación de metadatos caducos. **No equivale por sí sola a ejecución CI satisfactoria** hasta que se compruebe el resultado de un run asociado al commit final.

**Pendiente de cierre integral:** examen real el **14/11** con normativa vigente ese día según bases; revisión de eventual cambio normativo posterior a este cotejo; ejecución de CI y navegador real/móvil/WCAG/PWA, comportamiento de tests y simulacros. No se incrementan los contadores globales **58/121 cierres documentales históricos** y **0/121 integrales**.

**Resultado:** **incidencias de vigencia y consistencia detectadas y corregidas** sobre temas históricos ya auditados, **SIN** certificado integral ni nueva aprobación artificial. El siguiente grupo de La Puebla será **temas 5–8** con controles de órganos, competencias y plazos en el BOP y legislación vigente.
