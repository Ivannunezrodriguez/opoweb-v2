# Diputación de Toledo C2 · Tema 14 — cotejo de identificación y firma en las Administraciones

**Fecha:** **05/11/2026**. **Epígrafe oficial:** Administración electrónica I. Usos del certificado electrónico en la administración electrónica. Tipos y soportes. Autoridades certificadoras y servicios. **Programa:** BOP Toledo **197/2026**, Anexo XI, CSV **2026.00004759**.

**Normas cotejadas:** [Ley 39/2015, arts. 9–12](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), última actualización publicada **06/11/2024**; [RD 203/2021, arts. 16–23, 26–30](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032), última actualización publicada **02/04/2025**. Ambos consolidados son **informativos**, y la publicación oficial prevalece para fines jurídicos. Se diferencia la regla estatal particular de la regla general a todas las Administraciones.

## 1. Auditoría de ocho apartados del manual

| Artículo origen | Carencia del contenido previo | Ampliación jurídicamente fundamentada |
|---|---|---|
| **9–11 Ley 39/2015; 26–29 RD 203/2021** | Sistemas de identificación y firma muy generales | Contraste de **identificarse**, **firmar**, identificación con firma ya practicada (**10.5**) y conversión excepcional de identificación en firma por **norma expresa (10.4)**. Atributos del **27 RD** para persona física, jurídica y representación |
| **12 Ley 39/2015; 30 RD** | Asistencia sin trazabilidad de consentimiento ni entrega de documentación | **Funcionario habilitado**, interesado **no obligado**, consentimiento **expreso y por escrito**, **copia del consentimiento**, y registro y habilitación del trámite en la **AGE** |
| **18 RD** | Certificado de sede solo como TLS | Regla general de **certificado cualificado de autenticación web o medio equivalente**; particular **AGE**: certificado **cualificado**, condición de sede visible y dominio **`.gob.es`** |
| **19 RD** | Sello de órgano y publicidad explicados sin emisor del acto de creación | En la **AGE**, resolución de **Subsecretaría** o **Presidencia/Dirección del organismo**, publicada en sede, con titular, datos técnicos, validación y actuaciones |
| **20–21 RD; 41–42 Ley 40/2015** | CSV descrito sin plazo ni requisitos de aprobación | **Verificación directa y gratuita**, código **único**, nuevo código cuando se altera el documento; en **AGE**, **resolución** y **dos informes previos** (**CCN y SGAD**), disponibilidad para verificación en sede **al menos 5 años** (**21.4.e**) |
| **23 RD** | Pseudónimo presentado sin identificar la figura reglamentaria | **Certificado de empleado público con número de identificación profesional**, para **información clasificada, seguridad pública, defensa nacional u otras causas tasadas**; solicitud por **Subsecretaría/Presidencia/Dirección**, identidad custodiada y revelación por **petición oficial** |
| **16 RD** | Plataforma @firma resumida como servicio genérico | **SGAD** órgano responsable, verificación **libre y gratuita para el sector público**, acceso mediante **adhesión**, declaración de prácticas gratuita y colaboración de **prestadores cualificados** |
| **17 RD** | Política de firma sin órgano aprobador ni publicación | En la **AGE**, **resolución de la Secretaría de Estado de Digitalización e Inteligencia Artificial**, publicación en **BOE** y **PAGe**, interoperabilidad con políticas particulares |

## 2. Diferencias de plazos y garantías propensas a error

| Expresión | Naturaleza real | Norma |
|---|---|---|
| **5 años máximo** | Vigencia del **certificado cualificado** (no tiene que durar 5 años necesariamente) | **Ley 6/2020, 4.2** |
| **Al menos 5 años** | Disponibilidad para **verificar CSV en sede de la AGE**; mayor plazo por norma especial | **RD 203/2021, 21.4.e** |
| **Registro de funcionarios habilitados** | Requisito organizativo y de trazabilidad; la persona también debe dar **consentimiento expreso** | **Ley 39/2015, 12; RD 203/2021, 30** |
| **Firma y sello administrativos** | Instrumentos de **origen e integridad documental**, no equivalentes a **certificado de autenticación de sitio web** | **RD 203/2021, 18–21** |

> ⚠️ **¡Foco Examen!:** El período **máximo** de certificado (**5 años**, Ley 6/2020) y el período **mínimo** de verificación CSV en **AGE** (**5 años**, RD 203/2021) son opuestos. El **CSV** no es un **certificado** ni toda firma con certificado es **cualificada**.

## 3. Contraste de órganos competentes

| Órgano | Competencia atribuida en texto reglamentario |
|---|---|
| **Secretaría General de Administración Digital (SGAD)** | Responsable de **plataforma de verificación** y sus condiciones de adhesión (**16**) |
| **Subsecretaría del Ministerio** o **Presidencia/Dirección del organismo público** | Autoriza creación de **sellos estatales** (**19.3**) y **CSV estatal** con informes previos correspondientes (**21.4**); puede solicitar certificado con número profesional (**23.2**) |
| **Centro Criptológico Nacional** y **SGAD** | **Informes previos** para utilización del sistema CSV en AGE (**21.4**) |
| **Secretaría de Estado de Digitalización e Inteligencia Artificial** | Aprueba política estatal de firma por **resolución** publicada en **BOE** y **PAGe** (**17.3**, denominación literal del texto reglamentario) |

> ⚠️ **¡Foco Examen!:** El **prestador de certificados**, el **órgano estatal que crea el sello o CSV** y la **plataforma que lo verifica** son sujetos distintos. La firma electrónica de un empleado no es el sello de la Administración.

## 4. Resultado editorial y límites

Los **ocho apartados** se ampliaron en el [manual](manual.md), sin alterar el [banco T14](preguntas.json), previamente cotejado en **20 preguntas / 80 alternativas, A5/B5/C5/D5**. Este cotejo se limita a los requisitos y distinciones expresamente documentados y **no supone certificación integral del tema**, de todos los epígrafes del manual ni de sus funciones en navegador. No se han comprobado experiencias reales de móvil, PWA o accesibilidad.

**Siguiente fase:** concluir la coherencia restante del manual con legislación eIDAS/Ley 6/2020 y RD 203/2021, y pruebas funcionales de la web con evidencia reproducible antes de promover el tema a **AUDITADO**.
