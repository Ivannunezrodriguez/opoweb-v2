# Tema 31 · Servicios electrónicos de confianza, firma y certificados electrónicos

## Epígrafe oficial

**Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. Firma electrónica y certificados electrónicos. Usos del certificado electrónico en la administración electrónica. Tipos y soportes. Autoridades certificadoras y servicios que prestan.**

**Estado editorial:** `GENERACION_DESDE_CERO`

## 1. Marco normativo

La regulación española se integra principalmente por:

| Norma | Función |
|---|---|
| Reglamento (UE) nº 910/2014, eIDAS | Marco europeo de identificación electrónica y servicios de confianza |
| **Ley 6/2020, de 11 de noviembre** | Desarrollo nacional de determinados aspectos de los servicios electrónicos de confianza |
| **Ley 39/2015, de 1 de octubre** | Identificación y firma de los interesados ante las Administraciones Públicas |
| **Real Decreto 203/2021, de 30 de marzo** | Desarrollo reglamentario de la actuación y funcionamiento electrónicos del sector público |

La Ley 6/2020 entró en vigor el **13 de noviembre de 2020**.

> ⚠️ **¡Foco Examen!:** La Ley 6/2020 no sustituye al Reglamento eIDAS; lo complementa en el ordenamiento español.

## 2. Servicios electrónicos de confianza

Los servicios de confianza son servicios electrónicos que aportan seguridad jurídica y técnica a las transacciones digitales.

Entre ellos se incluyen:

- creación, verificación y validación de firmas electrónicas;
- creación, verificación y validación de sellos electrónicos;
- sellos de tiempo electrónicos;
- servicios de entrega electrónica certificada;
- certificados para autenticación de sitios web;
- conservación de firmas, sellos o certificados.

| Servicio | Finalidad principal |
|---|---|
| Firma electrónica | Vincular datos con una persona firmante |
| Sello electrónico | Garantizar origen e integridad respecto de una persona jurídica |
| Sello de tiempo | Acreditar que determinados datos existían en un momento concreto |
| Entrega electrónica certificada | Probar envío, recepción, fecha y datos transmitidos |
| Certificado de sitio web | Autenticar un sitio y proteger la comunicación |

> ⚠️ **¡Foco Examen!:** Firma y sello no son equivalentes: la firma se asocia a una persona física; el sello, normalmente, a una persona jurídica.

## 3. Firma electrónica

La firma electrónica son los datos en formato electrónico anejos a otros datos electrónicos o asociados de manera lógica con ellos, utilizados por el firmante para firmar.

### 3.1. Tipos de firma

| Tipo | Requisitos esenciales | Efecto |
|---|---|---|
| Firma electrónica simple | Datos electrónicos usados para firmar | No puede rechazarse solo por ser electrónica |
| Firma electrónica avanzada | Vinculación única, identificación, control exclusivo y detección de cambios | Mayor garantía técnica |
| Firma electrónica cualificada | Firma avanzada creada con dispositivo cualificado y basada en certificado cualificado | Equivale jurídicamente a la firma manuscrita |

La firma avanzada debe:

- estar vinculada al firmante de manera única;
- permitir su identificación;
- haber sido creada utilizando datos bajo su control exclusivo con un alto nivel de confianza;
- estar vinculada a los datos firmados de modo que cualquier modificación ulterior sea detectable.

> ⚠️ **¡Foco Examen!:** Solo la firma electrónica **cualificada** tiene expresamente el efecto jurídico equivalente al de una firma manuscrita.

## 4. Certificados electrónicos

Un certificado electrónico es una declaración electrónica que vincula unos datos de validación de firma o sello con una persona física o jurídica y confirma determinados atributos.

### 4.1. Certificado cualificado de firma electrónica

Es el certificado expedido por un **prestador cualificado de servicios de confianza** que cumple los requisitos del Reglamento eIDAS.

Debe permitir identificar al firmante e incluir, entre otros elementos:

- indicación de que se expide como certificado cualificado;
- identificación del prestador;
- datos del firmante;
- datos de validación de firma;
- periodo de validez;
- código único de identidad del certificado;
- firma o sello electrónico avanzado del prestador.

### 4.2. Certificados de sello y de autenticación de sitio web

| Certificado | Titular habitual | Uso |
|---|---|---|
| Certificado de firma | Persona física | Firmar documentos y actuaciones |
| Certificado de sello | Persona jurídica | Garantizar origen e integridad |
| Certificado de autenticación web | Titular de un sitio | Acreditar identidad del sitio y conexión segura |

> ⚠️ **¡Foco Examen!:** El certificado no es la firma; el certificado vincula la identidad con los datos de validación utilizados para verificarla.

## 5. Expedición, vigencia, suspensión y revocación

Antes de expedir un certificado cualificado, el prestador debe verificar la identidad y, cuando proceda, los atributos específicos del solicitante.

La eficacia del certificado está condicionada a:

- su periodo de validez;
- que no esté suspendido;
- que no haya sido revocado;
- que el prestador mantenga disponible información actualizada sobre su estado.

La revocación extingue la validez del certificado desde el momento previsto legalmente y debe hacerse constar en los servicios de consulta de estado.

> ⚠️ **¡Foco Examen!:** Un certificado caducado, suspendido o revocado no debe utilizarse como si estuviera vigente.

## 6. Prestadores de servicios de confianza

El prestador es la persona física o jurídica que presta uno o varios servicios de confianza.

Puede ser:

| Clase | Caracterización |
|---|---|
| Prestador no cualificado | Presta servicios sin estatus cualificado |
| Prestador cualificado | Ha obtenido el reconocimiento formal tras la supervisión correspondiente |

Los prestadores deben actuar con diligencia y adoptar medidas técnicas y organizativas adecuadas, entre ellas:

- seguridad de sistemas y procesos;
- personal con conocimientos y experiencia suficientes;
- conservación de información relevante;
- mecanismos de continuidad y cese;
- comunicación de incidentes cuando proceda;
- seguro o garantía equivalente en los casos exigidos.

## 7. Autoridad de supervisión y lista de confianza

La supervisión estatal de los prestadores de servicios electrónicos de confianza corresponde al órgano competente de la **Administración General del Estado** en materia de servicios electrónicos de confianza.

La **Lista de confianza** identifica los prestadores cualificados y los servicios cualificados que ofrecen.

La inclusión en la Lista de confianza permite comprobar:

- identidad del prestador;
- servicio cualificado reconocido;
- estado del servicio;
- certificados o datos técnicos asociados.

> ⚠️ **¡Foco Examen!:** Para que un servicio tenga condición de cualificado debe constar como tal en la Lista de confianza correspondiente.

## 8. Uso en la Administración electrónica

La Ley 39/2015 distingue entre identificación y firma.

### 8.1. Identificación

Las Administraciones deben verificar la identidad de los interesados. Entre los sistemas admisibles están:

- certificados electrónicos cualificados de firma;
- certificados cualificados de sello;
- sistemas de clave concertada u otros admitidos con registro previo.

### 8.2. Firma

La firma se exige cuando sea necesario acreditar:

- autenticidad de la voluntad;
- consentimiento;
- integridad e inalterabilidad del documento.

Con carácter general, la firma es obligatoria para:

- formular solicitudes;
- presentar declaraciones responsables o comunicaciones;
- interponer recursos;
- desistir de acciones;
- renunciar a derechos.

> ⚠️ **¡Foco Examen!:** Identificarse no equivale siempre a firmar. La firma solo se exige en los supuestos previstos legalmente.

## 9. Actuación administrativa automatizada y sellos

Las Administraciones pueden utilizar sistemas de sello electrónico para actuaciones automatizadas y para garantizar autenticidad e integridad.

Los sistemas habituales incluyen:

- sello electrónico basado en certificado cualificado;
- código seguro de verificación;
- firma electrónica del empleado público;
- firma automatizada del órgano o entidad.

| Sistema | Uso habitual |
|---|---|
| Firma del empleado público | Actuación personal del funcionario |
| Sello de órgano | Actuación automatizada o institucional |
| Código seguro de verificación | Contraste mediante sede electrónica |

## 10. Soportes del certificado

Los certificados y claves pueden alojarse en distintos soportes:

| Soporte | Características |
|---|---|
| Tarjeta criptográfica | Dispositivo físico con chip, como el DNI electrónico |
| Token USB criptográfico | Custodia claves y ejecuta operaciones criptográficas |
| Certificado software | Instalado en navegador, sistema o almacén de certificados |
| Dispositivo remoto o en la nube | Claves gestionadas en infraestructura segura con autenticación reforzada |
| Dispositivo móvil | Uso mediante aplicación, elemento seguro o firma remota |

La seguridad depende de la protección de la clave privada, del control exclusivo del firmante y de los mecanismos de autenticación.

> ⚠️ **¡Foco Examen!:** El soporte no determina por sí solo que la firma sea cualificada; también importan el certificado y el dispositivo de creación utilizado.

## 11. Autoridades certificadoras y servicios prestados

La expresión tradicional «autoridad certificadora» se corresponde actualmente con los **prestadores de servicios de confianza** que expiden certificados.

Sus servicios pueden comprender:

- expedición y renovación de certificados;
- identificación del solicitante;
- validación del estado de certificados;
- suspensión y revocación;
- sellado de tiempo;
- conservación de firmas y sellos;
- autenticación de sitios web;
- entrega electrónica certificada;
- atención al usuario y publicación de políticas de certificación.

En España existen prestadores públicos y privados incluidos en la Lista de confianza cuando sus servicios tienen condición cualificada.

## 12. Responsabilidad

Los prestadores responden por los daños causados de forma intencionada o negligente por incumplimiento de sus obligaciones.

En los prestadores cualificados existe una presunción reforzada de responsabilidad, sin perjuicio de la prueba de que el daño no fue causado de forma intencionada o negligente.

También pueden establecer límites de uso del certificado, siempre que sean reconocibles por terceros.

## 13. Conservación y cese de actividad

Los prestadores deben conservar la información necesaria durante el periodo legalmente exigible y adoptar medidas para garantizar la continuidad o finalización ordenada del servicio.

En caso de cese deben:

- comunicarlo a usuarios y autoridad competente;
- garantizar la conservación de datos relevantes;
- transferir servicios o registros cuando proceda;
- mantener accesible la información sobre certificados revocados o expirados.

## 14. Tabla final de conceptos test

| Concepto | Regla |
|---|---|
| Entrada en vigor de la Ley 6/2020 | **13 de noviembre de 2020** |
| Firma equivalente a manuscrita | Firma electrónica cualificada |
| Firma avanzada | Identifica, vincula, controla y detecta cambios |
| Titular típico de firma | Persona física |
| Titular típico de sello | Persona jurídica |
| Certificado | Vincula identidad y datos de validación |
| Lista de confianza | Identifica prestadores y servicios cualificados |
| Solicitudes y recursos | Requieren firma |
| Identificación | No siempre exige firma |
| CSV | Permite contrastar autenticidad en sede electrónica |

## 15. Esquema final

```text
SERVICIOS DE CONFIANZA
├─ Firma electrónica
│  ├─ Simple
│  ├─ Avanzada
│  └─ Cualificada = firma manuscrita
├─ Sello electrónico
├─ Sello de tiempo
├─ Entrega certificada
├─ Certificado web
└─ Conservación

CERTIFICADOS
├─ Firma: persona física
├─ Sello: persona jurídica
├─ Sitio web
├─ Vigencia
├─ Suspensión
└─ Revocación

ADMINISTRACIÓN ELECTRÓNICA
├─ Identificación
├─ Firma
├─ Sello de órgano
├─ CSV
└─ Actuación automatizada
```

> ⚠️ **¡Foco Examen!:** Las confusiones más frecuentes son equiparar identificación y firma, confundir certificado con firma, y atribuir a toda firma electrónica el efecto equivalente a la manuscrita.