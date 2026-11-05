# Fuentes primarias y control de auditoría · Tema 14

**Epígrafe oficial:** BOP de Toledo **n.º 197, de 14/10/2026**, **Anexo XI**, código **2026.00004759**. Véase reproducción literal en `manual.md`.

## Fuentes legales o técnicas

- https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0910
- https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1183
- https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046
- https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565
- https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566

## Tareas antes de publicar

- [ ] Comprobar las fuentes oficiales aplicables a la fecha de examen.
- [ ] Verificar artículo, plazo, porcentaje, mayorías y órgano cuando proceda; en informática, versión concreta y comportamiento comprobable.
- [ ] Distinguir certificado de firma, certificado de autenticación, certificados cualificados, soporte software/hardware, tipos de prestadores y garantías eIDAS.
- [ ] Eliminar referencias heredadas de la estructura de La Puebla que no correspondan al epígrafe de Diputación C2.
- [x] Cotejar las **20 preguntas y 80 alternativas** del banco, con soluciones verificadas y justificación por opción; **supuestos prácticos y funciones de la web pendientes**.

**Estado editorial actual: EN_AUDITORIA.** Banco **20/80 cotejado individualmente** en [su informe](cotejo-banco-completo-2026-11-05.md); el manual procede de una base anterior y **no se certifica como auditado integralmente**, ni se acreditan pruebas reales de uso de la web.

> ⚠️ **¡Foco Examen!:** Ante diferencias entre explicaciones de un manual y el articulado o documentación técnica oficial, prevalece el texto oficial aplicable al programa.


## Correcciones contrastadas directamente con BOE — 29/10/2026

- **Ley 6/2020, art. 9.2:** consulta pública del estado de validez o revocación del certificado. **No es el art. 10.**
- **Art. 9.3.a:** conservación por prestadores cualificados durante **15 años**.
- **Art. 9.3.b:** seguro mínimo **1.500.000 €**, excepto sector público, más **500.000 €** por tipo de servicio cualificado adicional.
- **Art. 10:** responsabilidad del prestador por las funciones delegadas ante terceros.
- Se ha corregido la pregunta **DT-C2-T14-020** y su fundamentación.

Fuente literal: https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046

**Estado:** revisión del tema **14** en curso; no se publicará como definitivo hasta cotejar el manual restante con eIDAS y las leyes aplicables.

## Cotejo jurídico por bloques — **05/11/2026**

[**Informe de la Ley 6/2020: artículos 4–7 y 9.3**](cotejo-legal-ley6-2020-2026-11-05.md), con **nueve causas de revocación**, suspensiones tasadas, identificación, **5 años**, conservación **15 años**, garantía mínima **1.500.000 € + 500.000 € por tipo adicional** y aviso de cese de **2 meses**. [**Fuente BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046).

> ⚠️ **¡Foco Examen!:** **La revocación del art. 5.1 no equivale a suspensión automática del 5.2**. Certificado cualificado máximo **5 años**, no validez fija. **No se certifican** en este lote las respuestas del banco ni toda la reforma eIDAS.

## Banco completo: **20 preguntas / 80 alternativas** — **05/11/2026**

El [**cotejo individual de las veinte preguntas y sus ochenta opciones**](cotejo-banco-completo-2026-11-05.md) identifica la **respuesta correcta A–D**, la explicación individual de **las cuatro alternativas (una correcta y tres distractores)** y la referencia normativa o técnica pertinente. Se ha conservado la distribución de respuestas **A5/B5/C5/D5**. Fuentes principales: [**Ley 39/2015**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [**eIDAS consolidado 18/10/2024**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) y [**FNMT FAQ 1213**](https://www.sede.fnmt.gob.es/ca/preguntas-frecuentes/problemas-y-dudas/-/asset_publisher/fVZppcBHj0oa/content/1213-que-diferencia-hay-entre-solicitar-un-certificado-en-tarjeta-criptografica-y-solicitarlo-en-software-).

> ⚠️ **¡Foco Examen!:** Que el **banco 20/80** disponga de cotejo por alternativa **no** acredita que se haya auditado jurídicamente todo el **manual** o el funcionamiento real de la web. Estado del tema: **EN_AUDITORIA**.


## eIDAS reformado — cartera europea, declaraciones de atributos y servicios cualificados (**05/11/2026**)

[**Informe jurídico y matriz de origen por artículo**](cotejo-eidas-reformado-2026-11-05.md). El manual contiene seis nuevos subapartados que confrontan:
- [**Reglamento 910/2014 consolidado, 18/10/2024**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa), modificado por [**2024/1183**](https://eur-lex.europa.eu/eli/reg/2024/1183/oj?locale=es).
- **Cartera EUDI:** **art. 5 bis**, al menos una por **Estado miembro**, plazo de **24 meses desde entrada en vigor de actos de ejecución**, uso **voluntario**, gratuita para **personas físicas** en expedición, uso y revocación; **5 quater** certificación máxima de **5 años** y control de vulnerabilidad cada **2 años**.
- **Atributos:** **arts. 45 ter–nonies**, reconocimiento de declaraciones cualificadas y de organismos responsables de fuente auténtica; **45 quater** impide sustituir automáticamente identificación obligatoria.
- **Firma y sello cualificados a distancia:** **29 bis y 39 bis**, gestión por prestador cualificado; duplicado de claves solo para **seguridad** bajo requisitos tasados.
- **Archivo electrónico y libros mayores cualificados:** **45 decies–undecies** y **45 duodecies–terdecies**; distinguir presunciones de integridad/origen y de secuencia cronológica, respectivamente.
- **Reconocimiento europeo:** **art. 24 bis**, con servicios **cualificados concretos**, comprobables mediante TSL.

> ⚠️ **¡Foco Examen!:** **Cartera europea ≠ certificado de firma**, **declaración de atributos ≠ identificación obligatoria**, **firma en nube ≠ cualificada automáticamente**. El plazo de **24 meses** de cartera no comienza simplemente en la publicación de la reforma.

**Alcance:** cotejo jurídico-documental de la reforma, sin certificación integral del manual ni pruebas de navegación real.


## Administración electrónica: cotejo agrupado RD 203/2021 y Ley 39/2015 — **05/11/2026**

[**Informe de los ocho apartados de identificación y firma administrativa**](cotejo-rd203-administraciones-2026-11-05.md). Contraste sobre [**Ley 39/2015, arts. 9–12**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) y [**RD 203/2021 consolidado, arts. 16–23 y 26–30**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032), actualizado **02/04/2025**.

| Fuente | Dato concreto de examen |
|---|---|
| **RD 203/2021, 16** | **SGAD**, plataforma de verificación **gratuita para el sector público**; acceso mediante adhesión |
| **RD 203/2021, 17** | Política estatal por **resolución de Secretaría de Estado de Digitalización e Inteligencia Artificial**; publicación en **BOE y PAGe** |
| **RD 203/2021, 18** | Sede general: certificado cualificado **o equivalente**; sede **AGE**: certificado cualificado, dominio **`.gob.es`** |
| **RD 203/2021, 19** | Crear sello estatal: resolución de **Subsecretaría / Presidencia / Dirección**; publicación en sede |
| **RD 203/2021, 20–21** | Actuación automatizada con sello o **CSV**; verificación **directa y gratuita**; CSV distinto tras cambios; **mínimo 5 años** de comprobación en sede **AGE** |
| **RD 203/2021, 23** | Certificado de **empleado con número profesional** en condiciones tasadas, identidad custodiada y revelación oficial |
| **RD 203/2021, 27** | Atributos del certificado de persona física, jurídica y representante |
| **RD 203/2021, 30** | Firma por funcionario habilitado para interesado no obligado: **identidad, consentimiento expreso escrito y entrega de copia** |

> ⚠️ **¡Foco Examen!:** **Vigencia máxima de certificado de 5 años (Ley 6/2020)** y **disponibilidad mínima de CSV durante 5 años en sede estatal (RD 203/2021)** son normas distintas. La sede web no firma el documento por el hecho de tener HTTPS.

**Estado editorial:** cotejo jurídico-documental de ocho apartados; T14 continúa **EN_AUDITORIA**, sin navegador real ni certificación integral.

## Firma del personal y entornos cerrados — cotejo **05/11/2026**

[**Informe de contraste de los artículos 22, 24 y 25 del RD 203/2021**](cotejo-rd203-personal-entornos-2026-11-05.md), con [**RD 203/2021 consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032) y [**Ley 40/2015, arts. 43–44**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566).

| Supuesto | Regla comprobada |
|---|---|
| **Firma de empleado público** | **Art. 22.3**: los certificados de empleado público **serán cualificados** |
| **Personal AGE** | **24.1–2**: identificación conforme al **ENS**; certificados cualificados para firmar y para relacionarse con otra Administración **cuando los admita** |
| **Repositorios de identidad de personal** | **24.3–4**: acceso a servicios y aplicaciones, **sin equivaler por sí solo a firmar una resolución** |
| **Entorno cerrado en una Administración** | **25.2**: fija condiciones **esa Administración** |
| **Entre Administraciones diferentes** | **25.3**: condiciones mediante **convenio** |
| **Ámbito estatal del art. 25.2** | **25.4**: condiciones fijadas por la **Secretaría General de Administración Digital** |

> ⚠️ **¡Foco Examen!:** **Firma del empleado ≠ autenticación de acceso a una aplicación**. **Convenio** para comunicaciones cerradas **entre Administraciones**, no necesariamente dentro de la misma. **ENS** y **ENI** tienen funciones distintas.

**Estado:** cotejo focal realizado, **manual integral pendiente**, banco **20/80 sin modificaciones**, funcionamiento y navegador real **sin certificar**.
