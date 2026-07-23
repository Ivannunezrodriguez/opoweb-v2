# Tema 31 · Servicios electrónicos de confianza, firma y certificados electrónicos

## Epígrafe oficial

**Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. Firma electrónica y certificados electrónicos. Usos del certificado electrónico en la administración electrónica. Tipos y soportes. Autoridades certificadoras y servicios que prestan.**

**Estado editorial:** `AUDITADO_EIDAS_2`

## 1. Marco normativo vigente

La materia se regula principalmente por:

| Norma | Función |
|---|---|
| Reglamento (UE) nº 910/2014, eIDAS | Marco europeo de identificación electrónica y servicios de confianza |
| Reglamento (UE) 2024/1183, eIDAS 2 | Amplía eIDAS y crea el marco europeo de identidad digital |
| Ley 6/2020, de 11 de noviembre | Regula determinados aspectos nacionales de los servicios electrónicos de confianza |
| Ley 39/2015, de 1 de octubre | Identificación y firma ante las Administraciones Públicas |
| Real Decreto 203/2021, de 30 de marzo | Funcionamiento electrónico del sector público |

La Ley 6/2020 entró en vigor el **13 de noviembre de 2020**. No sustituye al Reglamento eIDAS: lo complementa en el ordenamiento español.

El Reglamento (UE) 2024/1183, publicado el **30 de abril de 2024**, modifica eIDAS y amplía el catálogo de servicios de confianza. El texto consolidado del Reglamento 910/2014 incorpora esta reforma desde el **18 de octubre de 2024**.

## 2. Concepto de servicio de confianza

Un servicio de confianza es un servicio electrónico, normalmente prestado a cambio de remuneración, que realiza alguna de las funciones reconocidas por eIDAS.

Tras eIDAS 2, el catálogo comprende:

- expedición y validación de certificados de firma, sello, autenticación web y otros servicios;
- creación y validación de firmas y sellos electrónicos;
- conservación de firmas, sellos y certificados;
- gestión de dispositivos remotos de creación de firma o sello;
- expedición y validación de declaraciones electrónicas de atributos;
- creación y validación de sellos de tiempo;
- entrega electrónica certificada y validación de sus evidencias;
- archivo electrónico de datos y documentos;
- registro de datos en libros mayores electrónicos.

> ⚠️ **Foco examen:** eIDAS 2 no elimina los servicios anteriores; añade nuevos servicios y amplía algunos ya existentes.

## 3. Servicios cualificados y no cualificados

| Clase | Caracterización |
|---|---|
| Servicio no cualificado | Cumple requisitos generales, pero no posee estatus cualificado |
| Servicio cualificado | Prestado por un prestador cualificado y reconocido como tal en la Lista de confianza |

La condición de cualificado no depende de la denominación comercial. Debe constar en la **Lista de confianza** correspondiente.

## 4. Firma electrónica

La firma electrónica son datos electrónicos anejos o asociados lógicamente a otros datos electrónicos utilizados por el firmante para firmar.

### Tipos

| Tipo | Requisitos esenciales | Efecto |
|---|---|---|
| Simple | Datos electrónicos usados para firmar | No puede rechazarse solo por ser electrónica |
| Avanzada | Vinculación única, identificación, control exclusivo y detección de cambios | Mayor garantía técnica |
| Cualificada | Firma avanzada, certificado cualificado y dispositivo cualificado | Equivale jurídicamente a la firma manuscrita |

La firma avanzada debe:

- estar vinculada al firmante de manera única;
- permitir su identificación;
- crearse con datos bajo su control exclusivo y alto nivel de confianza;
- quedar vinculada a los datos de modo que cualquier cambio posterior sea detectable.

## 5. Sello electrónico

El sello electrónico se asocia normalmente a una **persona jurídica** y permite acreditar origen e integridad de los datos.

No debe confundirse con la firma:

- firma: vinculada a persona física firmante;
- sello: vinculado normalmente a persona jurídica u órgano;
- certificado: vincula identidad y datos de validación, pero no es por sí mismo una firma o sello.

## 6. Certificados electrónicos

Un certificado electrónico es una declaración electrónica que vincula datos de validación de firma o sello con una persona física o jurídica y confirma determinados atributos.

### Certificados principales

| Certificado | Titular habitual | Uso |
|---|---|---|
| Firma electrónica | Persona física | Firmar documentos y actuaciones |
| Sello electrónico | Persona jurídica | Garantizar origen e integridad |
| Autenticación de sitio web | Titular del sitio | Acreditar identidad del sitio y conexión segura |

Un certificado cualificado debe ser expedido por un prestador cualificado y cumplir los requisitos del Reglamento eIDAS.

## 7. Vigencia, suspensión y revocación

La eficacia de un certificado depende de:

- periodo de validez;
- ausencia de suspensión;
- ausencia de revocación;
- disponibilidad de información actualizada sobre su estado.

La revocación extingue su validez desde el momento legalmente previsto. Un certificado caducado, suspendido o revocado no debe utilizarse como vigente.

## 8. Prestadores y supervisión

El prestador de servicios de confianza puede ser persona física o jurídica. Debe adoptar medidas técnicas y organizativas adecuadas, entre ellas:

- seguridad de sistemas y procesos;
- personal cualificado;
- conservación de información relevante;
- continuidad y cese ordenado;
- comunicación de incidentes;
- garantía financiera cuando proceda.

La supervisión estatal corresponde al órgano competente de la Administración General del Estado. La **Lista de confianza** identifica prestadores cualificados, servicios reconocidos y estado de cada servicio.

## 9. Nuevos servicios de eIDAS 2

### 9.1. Gestión remota de dispositivos cualificados

La gestión de dispositivos remotos de creación de firma o sello pasa a reconocerse expresamente como servicio de confianza. Permite operar claves en infraestructura remota segura manteniendo las garantías de control, autenticación y protección exigidas.

El soporte remoto no convierte automáticamente una firma en cualificada: también deben concurrir certificado cualificado y dispositivo cualificado.

### 9.2. Declaraciones electrónicas de atributos

Permiten acreditar electrónicamente atributos como:

- titulación;
- representación;
- condición profesional;
- edad;
- licencia o habilitación;
- pertenencia a una organización.

Pueden ser cualificadas cuando las expide un prestador cualificado conforme a eIDAS. No sustituyen necesariamente al documento de identidad; acreditan atributos concretos.

### 9.3. Archivo electrónico

El archivo electrónico comprende recepción, almacenamiento, recuperación y eliminación de datos o documentos electrónicos para garantizar:

- durabilidad y legibilidad;
- integridad;
- confidencialidad;
- prueba del origen durante el periodo de conservación.

Los servicios cualificados de archivo electrónico disfrutan de una presunción reforzada de integridad y origen durante el periodo de conservación.

### 9.4. Libros mayores electrónicos

Un libro mayor electrónico es una secuencia de registros electrónicos que garantiza integridad y orden cronológico.

Los registros contenidos en un libro mayor electrónico cualificado gozan de presunción de:

- orden cronológico secuencial único y exacto;
- integridad de los datos.

Puede utilizar tecnologías centralizadas o distribuidas; eIDAS mantiene neutralidad tecnológica.

### 9.5. Validación como servicio autónomo

La reforma reconoce expresamente la validación de certificados, firmas, sellos, sellos de tiempo, entregas certificadas y declaraciones de atributos como servicios de confianza diferenciados.

## 10. Cartera Europea de Identidad Digital

La reforma eIDAS 2 crea el marco de la **Cartera Europea de Identidad Digital**.

Permite a personas físicas y jurídicas:

- identificarse electrónicamente;
- almacenar y presentar datos de identidad;
- compartir atributos de forma selectiva;
- firmar electrónicamente;
- acceder a servicios públicos y privados transfronterizos.

La cartera debe permitir al usuario controlar qué datos comparte. No debe confundirse con un simple certificado software: es un instrumento europeo de identidad y atributos con funciones más amplias.

## 11. Identificación y firma en la Ley 39/2015

La Ley 39/2015 distingue identificación y firma.

### Identificación

Las Administraciones verifican la identidad mediante sistemas admitidos, entre ellos:

- certificados cualificados de firma;
- certificados cualificados de sello;
- sistemas de clave concertada u otros con registro previo.

### Firma obligatoria

Con carácter general, se exige firma para:

- formular solicitudes;
- presentar declaraciones responsables o comunicaciones;
- interponer recursos;
- desistir de acciones;
- renunciar a derechos.

> ⚠️ **Foco examen:** identificarse no equivale siempre a firmar.

## 12. Actuación administrativa automatizada

Las Administraciones pueden utilizar:

- sello electrónico de órgano;
- código seguro de verificación;
- firma electrónica del empleado público;
- sistemas automatizados previstos legalmente.

| Sistema | Uso habitual |
|---|---|
| Firma del empleado público | Actuación personal del funcionario |
| Sello de órgano | Actuación automatizada o institucional |
| Código seguro de verificación | Contraste en sede electrónica |

## 13. Soportes de certificados y claves

| Soporte | Características |
|---|---|
| Tarjeta criptográfica | Chip físico, como el DNI electrónico |
| Token USB | Custodia claves y ejecuta operaciones criptográficas |
| Certificado software | Instalado en navegador o almacén del sistema |
| Dispositivo remoto o nube | Claves gestionadas en infraestructura segura |
| Dispositivo móvil | Aplicación, elemento seguro o firma remota |

La seguridad depende de la protección de la clave privada, autenticación y control exclusivo. El soporte no determina por sí solo el nivel jurídico de la firma.

## 14. Autoridades certificadoras y servicios

La expresión tradicional «autoridad certificadora» corresponde hoy a los prestadores de servicios de confianza que expiden certificados o prestan servicios relacionados.

Pueden ofrecer:

- expedición y renovación de certificados;
- identificación del solicitante;
- consulta, suspensión y revocación;
- validación de firma y sello;
- sellado de tiempo;
- entrega electrónica certificada;
- conservación y archivo electrónico;
- autenticación de sitios web;
- declaraciones de atributos;
- gestión remota de dispositivos;
- libros mayores electrónicos.

## 15. Responsabilidad y cese

Los prestadores responden por daños causados intencionadamente o por negligencia en el incumplimiento de sus obligaciones. En caso de cese deben:

- comunicarlo a usuarios y autoridad competente;
- asegurar conservación de datos relevantes;
- transferir servicios o registros cuando proceda;
- mantener accesible la información sobre certificados revocados o expirados.

## 16. Tabla final de examen

| Concepto | Regla |
|---|---|
| Ley 6/2020 | Entró en vigor el 13 de noviembre de 2020 |
| eIDAS 2 | Reglamento (UE) 2024/1183 |
| Firma equivalente a manuscrita | Firma electrónica cualificada |
| Titular típico de firma | Persona física |
| Titular típico de sello | Persona jurídica |
| Lista de confianza | Identifica prestadores y servicios cualificados |
| Archivo cualificado | Presunción de integridad y origen |
| Libro mayor cualificado | Presunción de orden cronológico e integridad |
| Declaración de atributos | Acredita atributos concretos |
| Cartera europea | Identidad, atributos y acceso transfronterizo |
| Identificación | No siempre exige firma |
| CSV | Permite contraste en sede electrónica |

## 17. Esquema final

```text
SERVICIOS DE CONFIANZA
├─ Firma y sello
├─ Certificados y validación
├─ Sello de tiempo
├─ Entrega electrónica certificada
├─ Autenticación web
├─ Conservación
├─ Gestión remota de dispositivos
├─ Declaraciones de atributos
├─ Archivo electrónico
└─ Libros mayores electrónicos

ADMINISTRACIÓN ELECTRÓNICA
├─ Identificación
├─ Firma
├─ Sello de órgano
├─ CSV
└─ Actuación automatizada
```

> ⚠️ **Foco examen:** las confusiones más frecuentes son equiparar identificación y firma, confundir certificado con firma, atribuir a toda firma electrónica el efecto de la manuscrita y olvidar los nuevos servicios incorporados por eIDAS 2.