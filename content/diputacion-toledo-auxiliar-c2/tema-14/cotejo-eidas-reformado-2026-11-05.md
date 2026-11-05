# Diputación Provincial de Toledo C2 · Tema 14

## Cotejo eIDAS reformado: cartera EUDI y nuevos servicios de confianza

**Fecha de contraste:** **05/11/2026**. **Estado editorial:** **EN_AUDITORIA**, pendiente certificación integral. **Programa oficial:** BOP Toledo **197/2026**, **14/10/2026**, Anexo XI, CSV **2026.00004759**.

**Normativa primaria cotejada:**
- [**Reglamento (UE) 910/2014, texto consolidado de 18/10/2024**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa).
- [**Reglamento (UE) 2024/1183**, modificación eIDAS de identidad digital europea](https://eur-lex.europa.eu/eli/reg/2024/1183/oj?locale=es).
- [**Ley 6/2020**, prestación nacional de servicios electrónicos de confianza](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046).

El texto consolidado es **informativo**; para efectos jurídicos prevalece el **DOUE**. El epígrafe del programa trata usos, tipos, soportes, autoridades certificadoras y **servicios que prestan**; los nuevos servicios se incluyen con extensión proporcionada sin sustituir ese núcleo.

### 1. Hallazgo y solución

El manual anterior mencionaba **archivo, atributos, libros mayores, firma remota y cartera** solo como lista de denominaciones bajo «Nuevos servicios». El opositor necesitaba abrir eIDAS para averiguar **qué hace cada uno, el órgano proveedor, el efecto jurídico y la trampa de examen**. La revisión sustituye esa lista por seis subapartados de desarrollo, tablas comparativas y focos, además de precisar gestión cualificada de firma y sello remotos en sus apartados anteriores.

| Regulación | Distinción jurídica incorporada | Consecuencia para test |
|---|---|---|
| **5 bis.1–2** | **Estado miembro** ofrece al menos una **cartera EUDI** de tres formas; obligación dentro de **24 meses** desde entrada en vigor de determinados actos de ejecución | No contar desde la mera publicación de **2024/1183** |
| **5 bis.4, .13, .15** | Cartera permite identificarse, compartir selectivamente atributos y firmar/sellar cuando proceda; **gratuidad de expedición, uso y revocación para personas físicas**; uso **voluntario** | **Cartera ≠ certificado de firma** |
| **5 quater.4** | Certificación de conformidad de la cartera válida hasta **5 años**, evaluación vulnerabilidades cada **2 años** | Distinta de vigencia del certificado cualificado de la **Ley 6/2020, 4.2** |
| **45 ter.1–3** | Declaración de atributos normal o cualificada, o emitida por organismo responsable de fuente auténtica, y sus efectos | **Certificado de firma ≠ declaración de atributos** |
| **45 quater** | Declaración de atributos no reemplaza identificación/autenticación electrónica exigidas en servicio público salvo autorización expresa del Estado miembro | No aceptar «cualquier declaración de atributos vale para entrar en sede» |
| **45 quinquies y sexies** | Declaración cualificada conforme al **anexo V**; verificación de ciertos atributos contra fuentes auténticas del sector público | Distinguir prestador **cualificado** y fuente **auténtica** |
| **29.1 bis, 29 bis, 39 bis** | Servicio cualificado de gestión de dispositivo remoto de **firma** o **sello** prestado por prestador **cualificado**; duplicación de datos solo para **copia de seguridad** con garantías | **Firma en nube no siempre cualificada** |
| **45 decies–undecies** | **Archivo electrónico cualificado**: presunción de **integridad y origen** durante conservación | Un archivo PDF guardado no equivale a servicio cualificado |
| **45 duodecies–terdecies** | **Libro mayor electrónico cualificado**: presunción de **unicidad, secuencia cronológica exacta e integridad** | Diferente de **sello de tiempo** |
| **24 bis** | Reconocimiento entre Estados miembros de diversos **productos/servicios cualificados** | Cualificación debe comprobarse por **servicio concreto** en TSL |

> ⚠️ **¡Foco Examen!:** **24 meses** del **5 bis.1** = plazo **desde actos de ejecución de referencia**, no necesariamente el mismo plazo que la **certificación de cartera (máximo 5 años)**. El **sello de tiempo cualificado (41.2)** presume **fecha/hora e integridad**, el **archivo cualificado (45 decies.2)** presume **origen e integridad**, y el **libro mayor cualificado (45 duodecies.2)** presume **orden secuencial, unicidad e integridad**.

### 2. Matriz de origen del artículo al contenido

| Fuente exacta | Apartado del manual T14 | Resultado |
|---|---|---|
| **Reglamento eIDAS 5 bis; 5 quater** | **16.1** | Cartera EUDI, provisión, uso, gratuidad, control, plazos condicionados |
| **Reglamento eIDAS 3.43–45; 45 ter–nonies; anexos V–VII** | **16.2** | Declaraciones de atributos, prestadores, prueba e identificación |
| **Reglamento eIDAS 29, 29 bis, 39 bis** | **16.3**, firma y sello remotos | Prestación cualificada, custodia y duplicados |
| **Reglamento eIDAS 45 decies–undecies** | **16.4** | Archivo cualificado y presunciones |
| **Reglamento eIDAS 45 duodecies–terdecies** | **16.5** | Libro mayor cualificado |
| **Reglamento eIDAS 24 bis** | **16.6** | Reconocimiento transfronterizo |
| **Reglamento eIDAS 22 y 24** | Secciones anteriores de prestadores y TSL | Permanecen en revisión, sin atribuirles certificación integral |

### 3. Verificaciones estructurales y límites

**Banco T14:** **20 preguntas / 80 opciones** con informe individual en [`cotejo-banco-completo-2026-11-05.md`](cotejo-banco-completo-2026-11-05.md), sin modificación en este lote. Esta revisión **no** sustituye el cotejo integral de las demás páginas del manual, las normas nacionales y los nuevos actos de ejecución de eIDAS, ni demuestra navegación, móvil, PWA o accesibilidad.

**Estado operativo:** **EN_AUDITORIA**, sin promover el tema a `AUDITADO`. **Próximo lote:** verificación del resto de obligaciones de prestadores, Ley 39/2015 en administraciones electrónicas y revisión de coherencia de las distintas secciones del manual.
