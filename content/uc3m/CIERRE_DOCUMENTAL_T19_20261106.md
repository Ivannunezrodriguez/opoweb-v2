# UC3M · Tema 19 · Ejecución de gastos y cuentas: cierre documental con reservas

**Fecha:** **06/11/2026**. **Objeto:** ejecución de gastos, gestión económico-financiera, ordenación, documentos contables, liquidación y cierre del presupuesto. **Resultado:** **CIERRE DOCUMENTAL REGISTRADO CON RESERVAS**. No se certifica al **100 %** el tema ni se presupone aprobación del usuario.

## 1. Matriz del programa y material

| Bloque exigible | Desarrollo | Fuente primaria |
|---|---|---|
| Ejecución de gastos | [Manual T19](tema-19/manual.md), §§2–12 | [**Normas Básicas UC3M 2026, Vol. I, arts. 15–16**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view) |
| Gestión presupuestaria y económica | §§1–2, 5–9, 12, 15–16 | **LOSU** y [**Ley 5/2025 de Hacienda de Madrid**](https://www.boe.es/buscar/act.php?id=BOE-A-2026-3217) |
| Ordenación de pagos y tesorería | §§3, 14 | **Normas UC3M 2026**; alcance autonómico de Tesorería, **Ley 5/2025, art. 182** |
| Documentos contables | §§4, 13 y ampliación 23 | **UC3M Vol. I, art. 15.2.1**, página 98 |
| Liquidación y resultado | §§17–19 | **Normas UC3M**, contabilidad presupuestaria y reglas de rendición |
| Cierre y cuentas anuales | §§20–21 | **LOSU** y **Ley 5/2025 CM**, contabilidad y rendición aplicable |

[**Matriz de 6 bloques**](tema-19/matriz.json). [**Banco original, 12 preguntas/48 alternativas**](tema-19/preguntas.json), cotejado individualmente en [**revisión de 04/11/2026**](tema-19/cotejo-integral-2026-11-04.md); [**3 ejercicios adicionales/12 alternativas**](../../data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json) del repaso transversal. Total: **15 preguntas interactivas y 60 alternativas**. Los simulacros **70+5** y las claves se conservan sin cambios.

## 2. Fases presupuestarias, documentos y pago

| Figura | Actuación / efecto | Trampa de examen |
|---|---|---|
| **RC** | Retiene o reserva crédito | No reconoce deuda exigible frente a tercero |
| **A** | Autoriza gasto | No determina todavía el acreedor |
| **D** | Dispone o compromete gasto con tercero | Diferente de autorizar |
| **O (UC3M 2026)** | **Propuesta de pago** en el documento contable | **No** equivale a transferencia bancaria |
| **ADO** | Agrupa **autorización + compromiso + propuesta de pago** en nomenclatura UC3M | No confundir con el esquema de otras Administraciones |
| **Pago material** | Tesorería efectúa salida efectiva de fondos | Sucede con gestión y controles propios |
| **Caja fija** | Sistema asimilado para determinados gastos **hasta 5.000 € sin IVA** | No es lo mismo que umbral LCSP de contrato menor |
| **Anticipo a justificar** | Compras/servicios extraordinarios, máximo **12.000 €** y justificación en **1 mes** | No trasladar límites de caja fija |

**Fundamento específico:** [**Normas Básicas de Gestión UC3M 2026, arts. 15.2.1, 16.2 y 16.3**](https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view). El **documento O** fue confirmado en el documento institucional original y corregido en las preguntas T19-005 y T19-006 de una revisión anterior. Aquí se **conserva** esa corrección sin duplicarla.

> ⚠️ **¡Foco Examen!:** **O UC3M = propuesta de pago**. El documento **ADO** no acredita que el acreedor haya recibido el dinero; **5.000 €** de caja fija y **12.000 €** de anticipo son figuras distintas.

## 3. Plazos de contratos y condiciones de aplicación

| Hecho | Régimen aplicable | Precepto |
|---|---|---|
| Conformidad con bienes entregados o servicios prestados | La **Administración** debe aprobar documentos de conformidad **dentro de 30 días** de entrega/prestación, salvo pacto y supuestos legales | **LCSP 198.4** |
| Pago del precio tras conformidad | **30 días** desde aprobación de certificación o documento de conformidad, con requisitos de presentación correcta de factura | **LCSP 198.4** |
| Factura electrónica correcta | Presentación en registro en el plazo general de **30 días** desde entrega/prestación para efectos sobre intereses, según art. 198.4 | **LCSP 198.4** |
| Demora de pago **superior a 4 meses** | El **contratista puede suspender** cumplimiento mediante **preaviso de 1 mes** | **LCSP 198.5** |
| Demora **superior a 6 meses** | El **contratista puede resolver** contrato y reclamar daños en términos legales | **LCSP 198.6** |

Fuente: [**LCSP, Ley 9/2017, art. 198.4–6, BOE consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a198). Son reglas contractuales; no sustituirlas por un plazo interno del documento **O** ni por las **30/60/90/120 jornadas** de seguimiento de facturas **pendientes de cobro por la Universidad** del tema 18.

> ⚠️ **¡Foco Examen!:** **30 días conformidad + 30 días pago** depende de los **hitos legales**; **4 meses con preaviso de 1 mes** permite suspensión, mientras **6 meses** permite resolución. El mero documento **O** no crea un plazo contractual diferente.

## 4. Integridad, cambios y reservas

- **Banco histórico:** **12 preguntas/48 alternativas** cotejadas individualmente en 04/11; mejoradas referencias externas de los **12 ítems** sin alterar enunciados, opciones, literales ni claves.
- **Repaso complementario:** **3 casos/12 alternativas**, sobre **O**, anticipos a justificar y demora de pago; referencias precisadas a los **arts. 15.2.1, 16.3 UC3M y 198.5 LCSP**.
- **CI:** [**prueba de cierre documental T19**](../../tests/validate-uc3m-cierre-t19-20261106.mjs) comprueba **15 ítems/60 opciones**, matrices, cotejos y estados. Su **ejecución efectiva en GitHub Actions** debe verificarse por commit: no se atribuye success anticipadamente.
- **Reserva jurídica:** corte legal de la **base primera.7 UC3M** en publicación primaria de listas definitivas y anuncio de examen **no acreditado aún**, y revisión exhaustiva de cada frase y su aplicación temporal pendientes.
- **Reserva funcional:** navegador E2E, accesibilidad móvil/WCAG, PWA, persistencia, comportamiento de tests y enlaces en dispositivo real **no certificados**.
- **Estado:** `EN_REVISION_USUARIO`, `certificacionIntegral=false`, `aprobacionUsuario=false`. Históricos globales **58/121 documentales / 0/121 integrales** no se alteran sin reconciliar duplicidades.

**Siguiente tema:** UC3M **20**, contratación pública, con especial control de umbrales económicos y plazos.
