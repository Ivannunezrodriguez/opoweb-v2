# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 14

> **Estado editorial a 06/11/2026: AUDITADO jurídicamente en fuente documental; NO certificado funcionalmente.** Se consolidan los cotejos previos del manual, las **20 preguntas y 80 alternativas** ya auditadas, la [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), eIDAS reformado y RD 203/2021. Las indicaciones anteriores de `EN_AUDITORIA` describen fases históricas; el cierre actual consta en [informe 14–16](../cierre-editorial-c2-14-16-2026-11-06.md).

**ESTADO ACTUAL: EN_AUDITORIA — sin certificación integral.** Incorporado el **25/10/2026**; la revisión documental del **29/10/2026** y el material reutilizado de La Puebla (julio de 2026) son antecedentes históricos, no pruebas de vigencia ni de exhaustividad. Las **20 preguntas y 80 alternativas** tienen cotejo individual documentado del **05/11/2026**; queda pendiente el cotejo completo del **manual** y la prueba funcional en **navegador real**.

## 1. Epígrafe oficial literal

> **Tema 14. Administración electrónica I. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.**

**Fuente del programa:** BOP Toledo **n.º 197, 14/10/2026, Anexo XI**, código de verificación **2026.00004759**.

## 2. Fuentes y alcance

- **Reglamento (UE) 910/2014 (eIDAS), Reglamento (UE) 2024/1183, Ley 6/2020, Ley 39/2015, Ley 40/2015 y RD 203/2021**.
- Fuente primaria: https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046

**Marco vigente del programa:** eIDAS y su reforma **2024/1183**, Ley **6/2020**, Ley **39/2015**, Ley **40/2015** y RD **203/2021**. Se distingue legislación de desarrollo de las definiciones del Reglamento europeo.

| Inciso del programa | Bloque incorporado |
|---|---|
| 1. conceptos usos | Bloque 1 |
| 2. tipos certificados | Bloque 2 |
| 3. soportes | Bloque 3 |
| 4. prestadores servicios | Bloque 4 |
| 5. administraciones | Bloque 5 |

> ⚠️ **¡Foco Examen!:** El examen se ajusta al epígrafe y la versión concreta del programa. No confundir la terminología de otros temarios ni asumir que una operación o un órgano se rige por reglas de otro producto o norma.

---

## 3. conceptos usos

**Bloque incorporado y revisado para el programa de Diputación C2.**

### 1. Certificado, firma e identificación

Un certificado electrónico es una atestación electrónica que vincula datos de validación con una persona física, una persona jurídica, una entidad o un sitio web, según el tipo de certificado.

La infraestructura usa criptografía asimétrica:

- la **clave privada** crea la firma o sello y debe mantenerse bajo control del titular;
- la **clave pública** permite verificar y se incorpora o referencia en el certificado;
- el certificado vincula esa clave pública con una identidad y con unas condiciones de uso.

El certificado no contiene necesariamente la clave privada. En un archivo software pueden almacenarse juntos certificado y clave privada; en una tarjeta criptográfica la clave privada puede permanecer dentro del chip.

### 2. Identificación electrónica

El artículo 9 de la Ley 39/2015 permite la identificación electrónica mediante sistemas con registro previo que garanticen la identidad. Entre los admitidos figuran:

- certificados cualificados de firma;
- certificados cualificados de sello;
- sistemas de clave concertada;
- otros sistemas admitidos por la Administración con las garantías legales.

La Administración debe permitir, al menos, alguno de los sistemas basados en certificados previstos legalmente.

Identificarse permite acceder, consultar o acreditar quién actúa. No implica por sí mismo que se haya expresado voluntad de firmar un documento.

### 3. Firma electrónica

#### 3.1 Firma electrónica simple

Es el concepto general: datos electrónicos utilizados por una persona para firmar. No se le niegan efectos jurídicos por el mero hecho de ser electrónica, pero su fuerza probatoria depende del sistema y de las circunstancias.

#### 3.2 Firma electrónica avanzada

Debe:

1. estar vinculada al firmante de manera única;
2. permitir identificarlo;
3. crearse utilizando datos bajo su control con alto nivel de confianza;
4. quedar vinculada a los datos firmados de forma que cualquier modificación posterior sea detectable.

#### 3.3 Firma electrónica cualificada

Es una firma avanzada:

- basada en certificado cualificado de firma;
- creada mediante dispositivo cualificado de creación de firma.

Tiene efecto jurídico equivalente a la firma manuscrita en toda la Unión Europea.

No toda firma realizada con certificado es automáticamente cualificada. Deben verificarse el tipo de certificado, el dispositivo y las condiciones de creación.

### 4. Cuándo exige firma la Ley 39/2015

Con carácter general, basta identificar a la persona durante la actuación administrativa. Se exige firma para:

1. formular solicitudes;
2. presentar declaraciones responsables o comunicaciones;
3. interponer recursos;
4. desistir de acciones;
5. renunciar a derechos.

La firma debe acreditar autenticidad de la voluntad y consentimiento e integridad e inalterabilidad del documento.

### 5. Usos del certificado de persona física

Puede emplearse, si la política lo permite, para:

- acceder a una sede electrónica;
- consultar expedientes y notificaciones;
- presentar solicitudes y escritos;
- firmar recursos y declaraciones;
- obtener certificados administrativos;
- realizar trámites tributarios o de Seguridad Social;
- actuar como representante cuando el certificado o el procedimiento acredita la representación.

El certificado acredita la identidad del titular, pero no prueba por sí solo que posea una representación no incorporada ni comprobada por otro medio.

### 6. Representación

La representación puede acreditarse mediante:

- certificado cualificado con atributo de representante;
- apoderamiento inscrito en registro electrónico de apoderamientos;
- comparecencia o documento admitido en Derecho;
- comprobación administrativa de las facultades.

El certificado de representante es una firma de persona física que actúa por una entidad. No debe confundirse con un sello electrónico de la entidad.

### 7. Sello electrónico

El sello electrónico se reserva a personas jurídicas y entidades. Su función típica es garantizar:

- origen del documento;
- integridad;
- vinculación con la entidad creadora del sello.

No expresa por sí mismo una voluntad humana concreta. Es especialmente adecuado para:

- emisión masiva de justificantes;
- copias o certificados automatizados;
- actuaciones administrativas automatizadas;
- documentos generados por sistemas de información.

### 8. Autenticidad, integridad y no repudio

- **Autenticidad:** permite comprobar quién origina o firma.
- **Integridad:** permite detectar alteraciones posteriores.
- **No repudio:** expresión técnica habitual para describir evidencias que dificultan negar la autoría; no elimina la posibilidad de impugnar judicialmente.
- **Confidencialidad:** impide el acceso de terceros no autorizados; normalmente exige cifrado y no se obtiene por el mero hecho de firmar.

Firmar no cifra automáticamente el documento.

### 9. Firma visible y firma criptográfica

La imagen de una rúbrica, un nombre mecanografiado o un recuadro visible en un PDF no constituyen por sí solos la firma criptográfica.

La validez se comprueba analizando la firma electrónica incorporada al documento o asociada a él, el certificado, la cadena de confianza y las evidencias de validación.

### 10. Errores frecuentes

1. Afirmar que certificado y firma son lo mismo.
2. Creer que identificarse equivale siempre a firmar.
3. Considerar que una persona jurídica firma directamente con certificado propio.
4. Confundir sello de entidad con firma de representante.
5. Pensar que la imagen de una firma manuscrita digitalizada es una firma cualificada.
6. Creer que la firma electrónica cifra el contenido.
7. Dar por acreditada cualquier representación solo porque el firmante posee certificado personal.
8. Exigir firma para una mera consulta o acceso cuando basta identificación.

### 11. Supuesto práctico

Una persona entra con certificado en la sede municipal para consultar el estado de un expediente. La identificación es suficiente. Si presenta después un recurso, deberá utilizar un sistema de firma admitido porque el artículo 11.2 de la Ley 39/2015 incluye expresamente la interposición de recursos.


---

## 4. tipos certificados

**Bloque incorporado y revisado para el programa de Diputación C2.**

### 1. Clasificaciones que no deben mezclarse

Los certificados pueden clasificarse por criterios diferentes:

- por nivel: cualificados o no cualificados;
- por titular o función: firma, sello o autenticación de sitio web;
- por relación administrativa: persona física, representante, empleado público o sede;
- por soporte: software, tarjeta, token o dispositivo remoto.

Decir que un certificado es “de tarjeta” describe el soporte, no su función jurídica.

### 2. Certificado de firma electrónica

Vincula datos de validación con una **persona física** y confirma al menos su nombre o pseudónimo.

Permite verificar firmas creadas con la clave privada correspondiente. Cuando es cualificado:

- lo expide un prestador cualificado;
- cumple el anexo I de eIDAS;
- contiene identificación del prestador, titular, período de validez y código único, entre otros datos.

#### Usos habituales

- identificación ante sedes;
- firma de solicitudes, recursos y declaraciones;
- firma de contratos o documentos privados;
- firma como profesional o empleado cuando el certificado incorpora el atributo correspondiente.

### 3. Certificado de persona física

Es un certificado de firma cuyo titular es una persona física actuando en nombre propio.

Puede incluir:

- nombre y apellidos;
- DNI, NIE, NIF u otro identificador permanente cuando proceda;
- pseudónimo claramente indicado;
- clave pública;
- período de validez;
- usos y límites;
- información sobre revocación y prestador.

No acredita automáticamente un cargo, profesión o poder de representación que no figure como atributo o no se compruebe por otra vía.

### 4. Certificado de representante

Es un certificado de firma expedido a una **persona física** que actúa en representación de:

- una persona jurídica;
- una entidad sin personalidad jurídica;
- una entidad en la que sea administrador único o solidario, cuando corresponda.

Debe comprobarse la identidad del representante, la existencia de la entidad, la extensión y vigencia de las facultades y, cuando sea exigible, su inscripción registral.

La pérdida o terminación del poder obliga a solicitar la revocación. No debe confundirse con un sello electrónico de la entidad.

### 5. Certificado de empleado público

Es un certificado cualificado de firma utilizado por personal al servicio de una Administración.

Puede identificar conjuntamente:

- a la persona titular del puesto o cargo;
- a la Administración u órgano en que presta servicio.

Se usa para firmar actos, informes, comunicaciones y documentos en el ejercicio de las funciones públicas. La Administración determina qué sistemas debe utilizar su personal.

Puede existir certificado con pseudónimo en supuestos legalmente previstos, sin que el prestador deje de conocer la identidad real.

### 6. Certificado de sello electrónico

Vincula datos de validación con una persona jurídica o entidad y permite verificar sellos electrónicos.

En las Administraciones puede utilizarse para:

- identificar a la Administración, organismo u órgano;
- garantizar origen e integridad de documentos;
- firmar actuaciones automatizadas;
- emitir justificantes o certificados de forma masiva.

El certificado de sello incluye normalmente denominación y NIF del suscriptor. No identifica necesariamente a una persona física autora de cada documento.

### 7. Certificado de autenticación de sitio web

Vincula un sitio web con la persona física o jurídica a la que se expide y permite autenticar el sitio.

En las sedes electrónicas sirve para:

- identificar el dominio y la entidad responsable;
- establecer una comunicación cifrada mediante TLS;
- reducir el riesgo de suplantación;
- permitir al navegador comprobar la cadena de confianza.

El Real Decreto 203/2021 exige que las sedes electrónicas se identifiquen mediante certificados cualificados de autenticación de sitio web o medio equivalente; en el ámbito estatal se utilizan certificados cualificados.

Este certificado no sustituye la firma de los documentos administrativos publicados en la sede.

### 8. DNI electrónico

El DNI electrónico permite:

- acreditar electrónicamente la identidad personal;
- firmar documentos electrónicamente.

El chip contiene, entre otros, certificados diferenciados de autenticación y firma. La clave privada asociada se genera y permanece protegida en el chip.

El DNIe es simultáneamente:

- documento físico de identidad;
- soporte criptográfico;
- medio de identificación electrónica;
- dispositivo para crear firmas con sus certificados.

### 9. Certificados de componente

Son certificados técnicos vinculados a servidores, aplicaciones, dispositivos o componentes informáticos. Entre los usos habituales figuran:

- servidores TLS;
- componentes de firma;
- dispositivos o aplicaciones;
- firma de código;
- sellos de entidad.

No todos los certificados de componente son certificados cualificados eIDAS ni sirven para identificar a una persona interesada en un procedimiento administrativo.

### 10. Cualificado y no cualificado

#### Certificado cualificado

Cumple los requisitos eIDAS y lo expide un prestador cualificado dentro de un servicio que figura con estado cualificado en la lista de confianza.

#### Certificado no cualificado

Puede tener validez técnica y jurídica, pero no disfruta automáticamente de las presunciones y efectos reservados a los servicios cualificados.

La Administración puede admitir distintos sistemas conforme a la Ley 39/2015, pero no debe llamarse “cualificado” a un certificado por costumbre comercial.

### 11. Certificado vigente, caducado, suspendido y revocado

- **Vigente:** dentro del período de validez y sin suspensión o revocación.
- **Caducado:** ha finalizado el período de vigencia.
- **Suspendido:** su validez queda temporalmente detenida.
- **Revocado:** su vigencia se extingue antes de la caducidad.

La firma debe analizarse respecto del momento de creación y de las evidencias disponibles. Que el certificado esté hoy caducado no invalida automáticamente una firma correctamente creada y preservada cuando estaba vigente.

### 11 bis. Reglas legales de vigencia, revocación, suspensión e identidad (**Ley 6/2020, artículos 4–7**)

#### Vigencia máxima y terminación del certificado

Los certificados cualificados de **firma electrónica**, **sello electrónico** y **autenticación de sitio web** tienen un período de vigencia **no superior a 5 años** (**art. 4.2**). El prestador puede emitirlos por un tiempo menor, según características y tecnología. La vigencia se extingue por **caducidad** o por **revocación** (**art. 4.1**).

| Situación | ¿Qué ocurre jurídicamente? | Fuente |
|---|---|---|
| **Caducidad** | Extinción al acabar el período de vigencia | **4.1** |
| **Revocación** | Extinción anticipada por causa legal | **5.1** |
| **Suspensión** | Paralización temporal cuando la práctica de certificación la permite; puede terminar en extinción si no se levanta en plazo | **5.2–3** |

> ⚠️ **¡Foco Examen!:** **5 años** es el **máximo legal de los certificados cualificados**, no su duración obligatoria. No confundir la **caducidad** ordinaria con la **revocación** ni con la **suspensión**.

#### Nueve supuestos de revocación: artículo 5.1

| Letra | Causa legal de revocación |
|---|---|
| **a)** | Solicitud del **firmante**, persona representada, tercero autorizado, creador del sello o titular de certificado web |
| **b)** | Violación o peligro del secreto de los datos de creación, o utilización indebida por tercero |
| **c)** | **Resolución judicial o administrativa** que ordene revocar |
| **d)** | Fallecimiento o capacidad judicialmente modificada del firmante; extinción de persona jurídica, disolución de entidad sin personalidad o pérdida de control sobre el dominio web |
| **e)** | Terminación de la **representación** en certificado que incluya tal atributo: **representante y representado** deben solicitar revocación al cesar o modificarse la representación |
| **f)** | Cese de actividad del prestador, salvo transferencia de la gestión de certificados a otro prestador |
| **g)** | Falsedad, inexactitud o alteración de datos verificados, incluido el cargo |
| **h)** | Insuficiencia de seguridad de los mecanismos criptográficos utilizados |
| **i)** | Cualquier otra **causa lícita** prevista en la declaración de prácticas del prestador |

**Suspensión (art. 5.2):** cuando la declaración de prácticas de certificación **prevea suspensión**, se contempla para los supuestos **a), c) y h)** y, si existen **dudas**, para los **b) y g)**. Conforme al **5.3**, la notificación al titular ha de especificar **motivo, fecha y hora**; si transcurre el período de suspensión sin levantarse, se extingue la vigencia.

> ⚠️ **¡Foco Examen!:** **Revocación: nueve letras a)–i)**. **Suspensión: a), c), h), y dudas sobre b) o g)**; no deducir que cualquier causa de revocación permite automáticamente suspender. **Pérdida de poder de representación = art. 5.1.e**, no solo un cambio de uso informal.

#### Identidad, atributos y representación (artículos 6 y 7)

- En certificados cualificados de **firma** y **autenticación web** de **personas físicas**: nombre y apellidos e identificador **DNI/NIE/NIF**, o **pseudónimo señalado inequívocamente**; el código alternativo solo procede cuando legalmente se carece de todos esos identificadores (**art. 6.1.a**).
- En certificados cualificados de **sello** y autenticación web de **personas jurídicas**: **denominación o razón social y NIF**, o código único permanente en el supuesto legal (**art. 6.1.b**).
- Los certificados de **representación** incorporan la identidad del representado e indicación documental de las facultades, incluidos datos registrales cuando la inscripción sea obligatoria (**art. 6.2**).
- La identificación del solicitante y la comprobación de la representación se regulan en el **art. 7**. Puede no exigirse una nueva comprobación de circunstancias permanentes ya verificadas en una relación preexistente cuando concurran las condiciones del **art. 7.6** y la identificación anterior tenga **menos de 5 años**.

| Confusión de examen | Regla correcta |
|---|---|
| **Persona física** frente a **persona jurídica** | **Firma: persona física**; **sello: persona jurídica** |
| **Certificado de representante** frente a **sello** | En el primero **firma una persona física** con facultades representativas |
| **5 años de vigencia máxima** frente a **5 años desde identificación previa** | Son **dos plazos distintos**, **art. 4.2** frente a **art. 7.6** |

> ⚠️ **¡Foco Examen!:** La identificación anterior realizada hace **menos de 5 años**, en el supuesto del **art. 7.6**, puede evitar repetir ciertas comprobaciones; **no prorroga** la vigencia de un certificado más allá del máximo del **art. 4.2**.

**Fuente:** [**Ley 6/2020, artículos 4–7, BOE consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a4).

### 12. Tabla comparativa

| Tipo | Titular o vínculo | Uso principal |
|---|---|---|
| Firma de persona física | Persona física | Identificación y firma personal |
| Representante | Persona física y relación de representación | Actuar por una entidad |
| Empleado público | Persona física y Administración | Firma en ejercicio de funciones públicas |
| Sello electrónico | Persona jurídica, Administración u órgano | Origen e integridad, automatización |
| Autenticación de sitio web | Dominio y titular | Identificar sede o sitio y asegurar canal |
| Componente | Servidor, aplicación o dispositivo | Función técnica específica |

### 13. Errores frecuentes

1. Llamar certificado de persona jurídica a lo que jurídicamente debe ser sello o firma de representante.
2. Creer que el certificado de sede firma actos administrativos.
3. Confundir certificado de empleado público con certificado personal para usos privados.
4. Considerar cualificado cualquier certificado emitido por una empresa conocida.
5. Pensar que un certificado caducado nunca permite validar una firma histórica.
6. Confundir certificado de componente con certificado admisible para un ciudadano.


---

## 5. soportes

**Bloque incorporado y revisado para el programa de Diputación C2.**

### 1. Soporte lógico o software

El certificado y, en su caso, la clave privada pueden almacenarse en:

- almacén de certificados del sistema operativo;
- almacén del navegador;
- llavero criptográfico del dispositivo;
- archivo protegido, habitualmente `PKCS#12`, con extensiones como `.p12` o `.pfx`.

#### Ventajas

- instalación sencilla;
- uso sin lector externo;
- posibilidad de copia de seguridad cuando la clave es exportable.

#### Riesgos

- copia no autorizada del archivo;
- malware o acceso al perfil del usuario;
- pérdida de control al compartir equipo;
- exportación sin contraseña o con contraseña débil.

Un archivo `.cer` o `.crt` suele contener solo el certificado y la clave pública. No permite firmar si no se dispone también de la clave privada.

### 2. Tarjeta criptográfica

La tarjeta incorpora un chip capaz de:

- almacenar certificados;
- proteger claves privadas;
- ejecutar operaciones criptográficas sin extraer la clave;
- exigir PIN para autorizar el uso.

Ejemplos:

- DNI electrónico;
- tarjetas corporativas de empleado público;
- tarjetas profesionales.

Normalmente requiere lector y software intermedio o `middleware`. El PIN desbloquea el uso; no es la clave privada.

### 3. Token criptográfico USB

Es un dispositivo específico que realiza funciones similares a una tarjeta con lector integrado.

No debe confundirse con una memoria USB ordinaria:

- en una memoria común, un archivo de certificado puede copiarse como cualquier fichero;
- en un token criptográfico, la clave privada puede ser no exportable y las operaciones se ejecutan dentro del dispositivo.

### 4. DNI electrónico y comunicación sin contacto

El DNIe es una tarjeta criptográfica. Según la versión y el dispositivo, puede usarse mediante:

- lector de tarjetas;
- comunicación de proximidad compatible;
- software y controladores admitidos.

El soporte físico contiene certificados separados para autenticación y firma, además de elementos técnicos internos.

### 5. Firma remota o en la nube

En la **firma remota** los datos de creación de firma se gestionan en una infraestructura segura por cuenta del titular. El usuario autoriza las operaciones con mecanismos de autenticación reforzada. **Cuando se ofrece como gestión cualificada de un dispositivo cualificado de firma remota**, el **artículo 29 bis del Reglamento eIDAS** exige que la prestación corresponda a un **prestador cualificado**; la gestión y eventuales duplicados de seguridad cumplen los límites de **29.1 bis y 29 bis.1.b**.

Puede utilizar:

- contraseña personal;
- aplicación móvil;
- código de un solo uso;
- autenticación multifactor;
- dispositivo remoto cualificado gestionado por prestador cualificado.

La firma remota no significa que la clave privada sea pública ni que el prestador pueda usarla libremente. El sistema debe asegurar control del titular y protección del dispositivo remoto.

Cl@ve puede ofrecer identificación con claves concertadas y, en determinados servicios, firma en la nube con certificados centralizados. Cl@ve no debe equipararse siempre a un certificado instalado localmente.

### 6. Dispositivo móvil

El móvil puede intervenir de varias maneras:

- como segundo factor;
- para autorizar una firma remota;
- como lector de un documento electrónico compatible;
- almacenando claves en un elemento seguro;
- ejecutando una aplicación de identidad o firma.

Que el trámite se complete desde el móvil no determina el nivel jurídico de la firma. Debe analizarse el sistema utilizado.

### 7. Módulo criptográfico y HSM

Un `HSM` es un módulo hardware de seguridad diseñado para generar, custodiar y usar claves criptográficas con controles reforzados.

Se utiliza especialmente para:

- sellos electrónicos de organismos;
- firma automatizada;
- servicios de confianza;
- firma remota;
- autoridades de certificación.

Puede existir en infraestructura propia o como servicio remoto. La cualificación depende de la certificación y del cumplimiento de eIDAS, no de la denominación comercial.

### 8. Copia de seguridad y exportación

#### Certificado software exportable

Debe guardarse una copia cifrada que incluya la clave privada. La contraseña de la copia debe conservarse separadamente.

#### Tarjeta o token

La clave privada suele ser no exportable. La pérdida del dispositivo puede exigir revocación y nueva expedición.

#### Firma remota

La copia y continuidad son responsabilidad del servicio conforme a sus políticas, sin permitir que terceros utilicen la clave en nombre del titular.

No debe enviarse por correo electrónico un archivo que contenga clave privada ni compartir su contraseña.

### 9. Custodia del titular

El titular debe:

1. proteger la clave privada y los medios de acceso;
2. impedir el uso por terceros;
3. comunicar cambios relevantes;
4. solicitar suspensión o revocación ante pérdida o sospecha de compromiso;
5. no usar el certificado tras caducidad, suspensión o revocación;
6. respetar los límites y la política del certificado.

Ceder un certificado y su contraseña a otra persona elimina la garantía de control exclusivo y puede generar responsabilidad.

### 10. Validación técnica del soporte

Para usar un certificado local suelen ser necesarios:

- controlador o proveedor criptográfico;
- almacén de confianza actualizado;
- navegador o aplicación compatible;
- aplicación de firma cuando proceda;
- acceso a servicios de estado del certificado;
- fecha y hora correctas del equipo.

La aplicación `AutoFirma` es una herramienta de firma, no una autoridad certificadora ni un certificado.

### 11. Tabla comparativa

| Soporte | Clave privada | Portabilidad | Riesgo principal |
|---|---|---|---|
| Archivo software | Puede ser exportable | Alta | Copia o robo del archivo |
| Tarjeta criptográfica | Normalmente no exportable | Media | Pérdida y bloqueo de PIN |
| Token USB criptográfico | Normalmente no exportable | Alta | Pérdida física |
| Móvil o elemento seguro | Depende del sistema | Alta | Compromiso del dispositivo |
| Firma remota | Custodiada en infraestructura segura | Muy alta | Suplantación en la autorización |
| HSM institucional | Protegida por hardware | Uso organizativo | Mala administración de permisos |

### 12. Errores frecuentes

1. Confundir una memoria USB con un token criptográfico.
2. Creer que el archivo `.cer` contiene siempre la clave privada.
3. Pensar que el PIN es la clave privada.
4. Afirmar que la firma en nube carece de certificado.
5. Considerar cualificado cualquier servicio remoto.
6. Compartir un certificado de empleado con compañeros.
7. Creer que AutoFirma expide certificados.
8. Pensar que instalar un certificado en varios equipos no aumenta el riesgo.


---

## 6. prestadores servicios

**Bloque incorporado y revisado para el programa de Diputación C2.**

### 1. Terminología vigente

La expresión **autoridad certificadora** o `CA` sigue utilizándose en el ámbito técnico para designar la entidad que emite y firma certificados dentro de una infraestructura de clave pública.

La categoría jurídica vigente es **prestador de servicios de confianza**:

- puede ser persona física o jurídica;
- presta uno o más servicios de confianza;
- puede ser cualificado o no cualificado.

Un **prestador cualificado** es aquel al que el organismo de supervisión ha concedido esa condición para uno o varios servicios concretos.

La condición cualificada no se presume por la marca comercial ni se atribuye automáticamente a todos los servicios de la entidad.

### 2. Autoridad raíz y autoridades subordinadas

#### Autoridad raíz

Es el nivel superior de una jerarquía de certificación. Su certificado suele ser autofirmado y constituye un ancla de confianza.

#### Autoridad subordinada

Emite certificados finales o de otras autoridades bajo la confianza de la raíz.

La cadena de certificación permite verificar:

1. el certificado final;
2. los certificados intermedios;
3. la autoridad raíz confiable.

Una cadena técnicamente correcta no sustituye la comprobación jurídica de que el servicio cualificado figure en la lista de confianza.

### 3. Autoridad u oficina de registro

La autoridad de registro comprueba, según el certificado:

- identidad del solicitante;
- existencia de la entidad;
- representación;
- cargo, profesión o atributo;
- documentación y registros oficiales.

Tras la comprobación, aprueba o tramita la solicitud para que la autoridad de certificación emita el certificado.

Una oficina municipal puede actuar como oficina de registro de un prestador sin convertirse por ello en prestador cualificado ni emitir el certificado.

### 4. Organismo de evaluación de la conformidad

Es un organismo acreditado que evalúa si el prestador y sus servicios cumplen los requisitos aplicables.

Los prestadores cualificados deben someterse ordinariamente a auditoría, a su costa, al menos cada **veinticuatro meses**, sin perjuicio de controles adicionales del organismo supervisor.

La auditoría no concede por sí sola la cualificación: el organismo de supervisión verifica y concede el estado, que debe reflejarse en la lista de confianza.

### 5. Organismo de supervisión

Cada Estado miembro designa un organismo de supervisión.

En España las funciones se ejercen en la estructura del **Ministerio para la Transformación Digital y de la Función Pública**, de acuerdo con la organización administrativa vigente, sin perjuicio de que la Ley 6/2020 conserve la denominación ministerial existente cuando fue aprobada.

Sus funciones incluyen:

- supervisar prestadores cualificados;
- realizar actuaciones posteriores respecto de no cualificados cuando proceda;
- conceder o retirar la cualificación;
- inspeccionar y requerir información;
- mantener y publicar la lista de confianza española;
- recibir notificaciones de incidentes;
- ejercer la potestad sancionadora conforme a la ley.

### 6. Lista de confianza o TSL

La `Trusted Service List` contiene:

- prestadores cualificados establecidos y supervisados en España;
- servicios concretos que tienen estado cualificado;
- situación del servicio;
- certificados y datos necesarios para su comprobación.

Existe una versión legible por personas y otra procesable por máquinas.

Para saber si un servicio es cualificado debe consultarse la TSL. No basta con localizar el nombre de la empresa: hay que comprobar el servicio y su estado.

### 7. Prestadores no cualificados

Pueden iniciar su actividad **sin verificación administrativa previa**, pero deben comunicar el inicio al órgano de supervisión **dentro de los tres meses siguientes** (**Ley 6/2020, art. 12**). En el **mismo plazo de tres meses** deben comunicar las **modificaciones de los datos inicialmente transmitidos** y el **cese**. La Administración publica un **listado diferenciado** del de prestadores cualificados. La comunicación **no concede cualificación** ni convierte el servicio en cualificado. La falta de comunicación en plazo constituye **infracción leve** (**art. 18.4.b**). [BOE, artículos 12 y 18](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a12).

| Supuesto | Regla verificable | Precepto |
|---|---|---|
| Inicio de actividad **no cualificada** | **Sin autorización/verificación previa**; comunicación en **3 meses** desde el inicio | **12** |
| Modificación de datos comunicados o cese | Comunicación en el **mismo plazo de 3 meses** | **12** |
| Incumplimiento de comunicación | **Infracción leve**; no se confunde con la falta de cualificación | **18.4.b** |
| Verificación previa de servicio **cualificado** | Resolución y notificación en **6 meses**; transcurridos, solicitud **desestimable por silencio** | **16.2** |
| Informe anual de actividad del prestador cualificado | Remisión **a más tardar el 1 de febrero** sobre el año civil anterior | **17.3** |

> ⚠️ **¡Foco Examen!:** **Tres meses** para comunicar inicio, modificaciones y cese de servicios **no cualificados**; **seis meses** para resolver la verificación previa de los **cualificados**; **1 de febrero** para el informe anual de los cualificados. Son tres obligaciones diferentes. La comunicación de un prestador no cualificado **no equivale a la inscripción de un servicio cualificado en la TSL**.

**Incidentes y responsabilidad (Ley 6/2020, arts. 10–13):** el prestador responde frente a terceros por las funciones delegadas (**art. 10**), sin perjuicio de las limitaciones tasadas por negligencia del titular o destinatario (**art. 11**). Tanto los prestadores cualificados como los no cualificados deben gestionar y notificar los incidentes legalmente relevantes; el **art. 13.3** exige **ampliar la información en un plazo máximo de un mes** tras la notificación del incidente y, si se ha producido, tras su resolución. Ese mes **no** es el plazo inicial de notificación. [BOE, artículos 10–13](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a13).

Sus servicios no carecen necesariamente de efectos jurídicos. Simplemente no disfrutan de la condición y presunciones reservadas a servicios cualificados.

### 8. Expedición de certificados

El prestador puede expedir certificados para:

- firma electrónica;
- sello electrónico;
- autenticación de sitio web.

Antes de expedir un certificado cualificado debe comprobar identidad y atributos mediante métodos admitidos.

En España, la vigencia máxima de los certificados cualificados es de **cinco años**.

### 9. Consulta de validez y revocación

Los prestadores que expiden certificados deben ofrecer un servicio público de consulta del estado.

Los mecanismos habituales son:

- listas de certificados revocados o `CRL`;
- servicios de consulta en línea, habitualmente `OCSP`;
- servicios de validación integrados.

Según el **art. 24.3 del Reglamento eIDAS**, cuando un **prestador cualificado** que expide **certificados cualificados** decide revocarlos, debe registrar la revocación y publicar su estado de forma oportuna y, en todo caso, dentro de **24 horas** desde la recepción de la solicitud. La revocación produce efectos inmediatamente desde su publicación. **No atribuir este plazo al artículo 9.2 de la Ley 6/2020.**

### 10. Validación de firmas y sellos

El servicio de validación comprueba, entre otros extremos:

- integridad;
- correspondencia de la firma o sello con los datos;
- certificado y cadena;
- estado y vigencia;
- requisitos de firma o sello avanzado;
- dispositivo y servicio cualificado cuando sean exigibles.

La validación cualificada proporciona el resultado de forma fiable y permite detectar problemas relevantes de seguridad.

### 11. Sello de tiempo electrónico

Asocia una fecha y una hora con unos datos para demostrar que existían en ese momento y que no se han alterado.

El sello de tiempo:

- no identifica por sí solo al autor;
- no sustituye la firma;
- aporta evidencia temporal;
- es importante para conservar validez después de la caducidad del certificado.

### 12. Entrega electrónica certificada

Permite transmitir datos electrónicamente y aportar evidencias sobre:

- envío;
- recepción;
- fecha y hora;
- identidad de remitente y destinatario cuando corresponda;
- integridad de los datos transmitidos.

No debe confundirse con cualquier correo electrónico ni con la notificación administrativa por comparecencia en sede.

### 13. Conservación de firmas y sellos

La conservación permite prolongar la fiabilidad de firmas y sellos más allá de los cambios tecnológicos o de la caducidad de los certificados mediante evidencias, resellado y validaciones sucesivas.

No equivale a guardar simplemente el archivo en una carpeta.

La **Ley 6/2020, art. 9.3.a**, exige conservar la información durante **15 años** desde la extinción del certificado o finalización del servicio, con las condiciones legales.

#### Garantías y cese de actividad de los prestadores cualificados (art. 9.3)

| Obligación | Cuantía o plazo | Excepción o detalle |
|---|---|---|
| **Conservación de evidencias** | **15 años** | Desde extinción del certificado o fin del servicio (**9.3.a**) |
| **Seguro de responsabilidad civil** | **1.500.000 €** como mínimo | **Prestadores del sector público exentos** de esta obligación de seguro (**9.3.b**) |
| **Servicios cualificados adicionales** | **500.000 € más por cada tipo de servicio adicional** | Garantía posible mediante **aval bancario o seguro de caución**, con condiciones del precepto |
| **Preaviso de cese** a **clientes y órgano supervisor** | **Al menos 2 meses** antes del cese efectivo | Medio que acredite entrega y recepción efectiva siempre que sea factible (**9.3.c**) |

> ⚠️ **¡Foco Examen!:** **15 años** es el plazo de conservación; **1.500.000 € + 500.000 €** corresponde a garantía económica; **2 meses** es el preaviso de cese. **El sector público está exceptuado del seguro**, no de todas las obligaciones de confianza.

**Fuente:** [**Ley 6/2020, art. 9.3, BOE**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046#a9).


### 14. Autenticación de sitio web

El prestador expide certificados que permiten:

- identificar el titular del dominio;
- establecer conexiones seguras;
- comprobar la cadena de confianza;
- reducir la suplantación de sedes y portales.

El candado del navegador acredita una conexión cifrada con el dominio certificado; no garantiza por sí solo que todo el contenido o actuación administrativa sea correcto.

### 15. Firma y sello remotos

El **prestador de confianza** puede gestionar dispositivos remotos de creación de firma o sello por cuenta del titular. **Si se califica el servicio como cualificado**, la gestión de dispositivos de firma se rige por el **art. 29 bis** y la de sello por el **39 bis**: solo un **prestador cualificado** puede prestarla como tal.

Debe garantizar:

- control del titular sobre cada uso;
- autenticación robusta;
- protección de claves;
- trazabilidad;
- cumplimiento de requisitos de dispositivo y servicio cuando se presenta como cualificado.

### 16. Servicios y sistemas del marco eIDAS reformado (**Reglamento 2024/1183**)

La reforma por el **Reglamento (UE) 2024/1183** amplía el **Reglamento (UE) 910/2014**. Deben estudiarse las categorías nuevas, sin confundir **medios de identificación**, **certificados** y **servicios de confianza cualificados**. La versión consolidada de **18/10/2024** integra estas reglas.

#### 16.1 Cartera europea de identidad digital (EUDI Wallet): **art. 5 bis**

La **cartera europea de identidad digital** es un **medio de identificación electrónica** que permite **almacenar, gestionar, validar y presentar datos de identificación y declaraciones electrónicas de atributos**, así como realizar **firmas electrónicas cualificadas** y **sellos cualificados**, cuando corresponda. **No es sinónimo de un certificado de firma** ni de un programa que simplemente lo almacena.

Los **Estados miembros** deberán proporcionar **al menos una cartera** en los **24 meses siguientes a la entrada en vigor de los actos de ejecución** a los que remite el **art. 5 bis.1** y el **art. 5 quater.6**. La norma permite que el Estado la proporcione **directamente**, **por mandato** o **mediante una entidad independiente reconocida por él** (**art. 5 bis.2**).

| Regla | Artículo | Dato de examen |
|---|---|---|
| Provisión de **al menos una cartera** por **Estado miembro** | **5 bis.1** | **24 meses desde la entrada en vigor de los actos de ejecución de referencia**, no desde la publicación de la reforma |
| Uso de la cartera | **5 bis.15** | **Voluntario**: no puede perjudicarse a quien no la utilice |
| Expedición, utilización y revocación para **personas físicas** | **5 bis.13** | **Gratuitas** |
| Certificación de la cartera | **5 quater.4** | Validez máxima de la **certificación de conformidad: 5 años**, con evaluación de vulnerabilidades cada **2 años** |
| Datos de identificación y atributos | **5 bis.4** | Control del usuario y **divulgación selectiva** de datos |
| Firma y sello | **5 bis.4.e** | La cartera puede permitir **firma cualificada** o **sello cualificado**; ello **no** transforma toda operación de identificación en firma |

> ⚠️ **¡Foco Examen!:** **Cartera EUDI ≠ certificado electrónico**. El plazo de **24 meses** es **relativo a actos de ejecución**; la **gratuidad de expedición, uso y revocación** del **art. 5 bis.13** se refiere a **personas físicas**. **Uso voluntario (5 bis.15)** no significa que el Estado pueda omitir ofrecer la cartera.

#### 16.2 Declaraciones electrónicas de atributos: **artículos 45 ter–45 nonies**

Un **atributo** es una cualidad, característica, derecho o permiso de una persona o de un objeto (**art. 3.43**). Una **declaración electrónica de atributos** permite acreditar electrónicamente esas circunstancias; la **cualificada** la expide un **prestador cualificado de servicios de confianza** y cumple el **anexo V**.

| Modalidad | Emisor | Efectos o requisitos |
|---|---|---|
| **Declaración electrónica ordinaria** | Prestador conforme al tipo de servicio | No se rechaza como prueba **solo** por su forma electrónica (**45 ter.1**) |
| **Declaración electrónica cualificada** | **Prestador cualificado** | Tiene los mismos efectos jurídicos que una declaración **lícitamente expedida en papel** (**45 ter.2**) |
| Declaración expedida por, o en nombre de, un **organismo público responsable de fuente auténtica** | **Organismo público competente** o entidad que actúa en su nombre | Se reconoce entre **Estados miembros** como declaración de fuente auténtica (**45 ter.3**) |

**Ejemplos de atributos del anexo VI:** **domicilio**, **edad**, **nacionalidad**, **títulos académicos**, **cualificaciones profesionales**, **facultades de representación** o **licencias**. Los mecanismos de verificación contra **fuentes auténticas** se contemplan en el **art. 45 sexies**, cuando esos datos dependan de fuentes del sector público.

**Limitación fundamental del art. 45 quater:** si la legislación nacional exige **identificación electrónica y autenticación** para acceder a un servicio público, **la mera declaración de atributos no las sustituye**, salvo autorización expresa del **Estado miembro**.

> ⚠️ **¡Foco Examen!:** **Declaración de atributos ≠ certificado de firma ≠ identificación obligatoria**. Una declaración cualificada de titulaciones o poderes acredita **atributos**, pero por sí sola **no sustituye** la identificación exigida para acceder a la sede (**45 quater**).

#### 16.3 Gestión de dispositivos de firma y sello cualificados a distancia: **29 bis y 39 bis**

La gestión de un **dispositivo cualificado de creación de firma electrónica a distancia** como **servicio de confianza cualificado** solo puede prestarla un **prestador cualificado** que cumpla el **artículo 29 bis**. La regulación del servicio equivalente para **sello cualificado remoto** se remite a ese artículo por el **39 bis**.

- La **creación o gestión** de datos de creación y su duplicación de seguridad se efectúan **por cuenta y a solicitud del firmante**, bajo el servicio cualificado (**art. 29.1 bis**).
- La **duplicación de datos** solo se permite con fines de **copia de seguridad**, con seguridad equivalente a los originales y en el **número mínimo necesario** para la continuidad (**art. 29 bis.1.b**).
- No todas las firmas realizadas «en la nube» son **cualificadas**: se necesita verificar **prestador**, **servicio**, **certificado**, **dispositivo cualificado** y modalidad concreta.

| Operación | Calificación |
|---|---|
| Firma ejecutada remotamente sin acreditar dispositivo y servicio cualificados | **No puede calificarse automáticamente de cualificada** |
| Firma **avanzada + certificado cualificado + dispositivo cualificado** | **Firma cualificada** conforme a eIDAS |
| **Gestión cualificada de dispositivo remoto** conforme a **29 bis** | **Servicio de confianza cualificado** específico |

> ⚠️ **¡Foco Examen!:** Un **certificado cualificado** por sí solo **no convierte** una firma en cualificada. **Firma remota ≠ firma cualificada** automáticamente; el servicio de gestión de dispositivos remotos del **art. 29 bis** requiere **prestador cualificado**.

#### 16.4 Archivo electrónico cualificado: **45 decies–45 undecies**

El **servicio de archivo electrónico** permite conservar datos o documentos electrónicos durante el período correspondiente. Si es **cualificado**, el **art. 45 decies.2** atribuye la **presunción de integridad y origen** durante el período de conservación por el **prestador cualificado**. El **art. 45 undecies** exige proteger frente a pérdida o alteración, mantener durabilidad y legibilidad y posibilitar un **informe automatizado** de integridad emitido con **firma o sello cualificado** del prestador.

> ⚠️ **¡Foco Examen!:** **Archivo cualificado (45 decies)** presume **integridad y origen**; **guardar un PDF en una carpeta** no genera esa presunción ni constituye por sí mismo un **servicio de confianza cualificado**.

#### 16.5 Libro mayor electrónico cualificado: **45 duodecies–45 terdecies**

Un **libro mayor electrónico** es una secuencia de registros electrónicos que permite demostrar la **integridad de los registros** y el **orden cronológico**. En la modalidad **cualificada** debe proporcionarlo uno o varios **prestadores cualificados** y asegurar el origen, el orden secuencial único y la detección de alteraciones. El **art. 45 duodecies.2** establece presunción de **unicidad y exactitud del orden cronológico secuencial y de integridad** de los registros.

| Servicio cualificado | Presunción jurídica principal |
|---|---|
| **Archivo electrónico** — **45 decies.2** | **Integridad y origen** de documentos conservados |
| **Libro mayor electrónico** — **45 duodecies.2** | **Unicidad, exactitud del orden cronológico e integridad** |
| **Sello cualificado de tiempo** — **41.2** | **Exactitud de fecha y hora e integridad de los datos asociados** |
| **Entrega electrónica certificada cualificada** — **43.2** | **Integridad, envío/recepción por sujetos identificados y exactitud de fecha y hora** |

> ⚠️ **¡Foco Examen!:** **Libro mayor electrónico cualificado** no es lo mismo que **sello de tiempo**: el primero acredita **orden cronológico secuencial**, mientras que el segundo acredita **fecha/hora e integridad**. Ni uno ni otro sustituye por definición una **firma electrónica personal**.

#### 16.6 Reconocimiento entre Estados miembros: **art. 24 bis**

El artículo **24 bis** introduce una regla expresa de **reconocimiento mutuo** de servicios y productos cualificados entre Estados miembros: **firma y sello cualificados**, dispositivos, certificados, validación y conservación cualificadas, sellos cualificados de tiempo, entrega certificada cualificada, **declaraciones cualificadas de atributos**, **archivo electrónico cualificado** y **libros mayores cualificados**, dentro de sus supuestos respectivos.

La **lista de confianza (art. 22)** sigue siendo imprescindible para comprobar **qué prestador y qué servicio** tiene la **condición cualificada**; no la sustituye una marca comercial o la simple presencia de un certificado raíz instalado.

> ⚠️ **¡Foco Examen!:** El reconocimiento transfronterizo del **24 bis** se refiere a **productos y servicios cualificados concretos**; un prestador que aparece en una TSL **no convierte automáticamente en cualificados todos sus servicios**.

**Normativa primaria:** [eIDAS consolidado **18/10/2024** (Reglamento 910/2014, modificado por Reglamento 2024/1183)](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa). Los textos consolidados son **informativos**; la versión auténtica procede del **DOUE**. Los servicios recién incorporados se estudian como **ampliación contextual necesaria** para comprender el epígrafe «autoridades certificadoras y servicios que prestan», sin desplazar el núcleo de certificado, firma, sello y soporte.


### 17. Obligaciones relevantes del prestador

Entre otras:

- publicar información veraz;
- proteger los datos de creación de firma, sello o autenticación;
- no copiarlos salvo gestión legítima por cuenta del titular;
- ofrecer consulta de validez o revocación;
- comprobar identidad y atributos;
- gestionar riesgos e incidentes;
- conservar evidencias;
- mantener un plan de terminación;
- colaborar con la supervisión.

### 18. Ejemplos de prestadores

La FNMT-RCM es un ejemplo de prestador público que ofrece certificados y servicios. Existen otros prestadores públicos y privados.

No debe memorizarse una lista cerrada de marcas, porque la condición o cartera de servicios puede cambiar. La fuente determinante es la TSL vigente.

### 19. Errores frecuentes

1. Considerar que autoridad de registro y autoridad de certificación son idénticas.
2. Creer que una oficina de acreditación municipal emite el certificado.
3. Llamar cualificados a todos los servicios de un prestador cualificado.
4. Usar una lista comercial en lugar de la TSL.
5. Confundir sello de tiempo con firma.
6. Confundir entrega certificada con correo ordinario.
7. Pensar que conservar es solo almacenar.
8. Memorizar proveedores sin comprobar el servicio concreto y su estado.


---

## 7. administraciones

**Bloque incorporado y revisado para el programa de Diputación C2.**

### 1. Sistemas de identificación y firma del interesado (**Ley 39/2015, arts. 9–11; RD 203/2021, arts. 26–29**)

La **Ley 39/2015** distingue **identificación**, que acredita quién interviene, y **firma**, que permite acreditar la **autenticidad de la expresión de voluntad y consentimiento** y la integridad del documento.

| Actuación | Sistema admitido y regla | Fuente |
|---|---|---|
| **Identificación** | Certificado **cualificado de firma**, certificado **cualificado de sello**, o sistemas adicionales con registro previo y garantías legales | **9.2 Ley 39/2015; 26 RD 203/2021** |
| **Firma** | Firma **cualificada o avanzada** basada en certificado cualificado, **sello cualificado/avanzado** basado en certificado cualificado, u otros sistemas admitidos | **10.2 Ley 39/2015; 29.1 RD 203/2021** |
| Uso de la **identificación como firma** | Solo **cuando lo disponga expresamente la normativa reguladora**, si acredita voluntad y consentimiento | **10.4 Ley 39/2015; 29.5 RD 203/2021** |
| **Firma válida** del interesado | Su **identidad queda acreditada** por el propio acto de firmar | **10.5 Ley 39/2015** |

Tanto para **identificación** como para **firma**, la Administración deberá garantizar la posibilidad de utilizar **alguno** de los sistemas basados en **certificados cualificados** de las letras **a) o b)**, aunque admita otros sistemas (**art. 9.2 y art. 10.2 Ley 39/2015; arts. 26.2 y 29.1 RD 203/2021**). Los requisitos de autorización/comunicación de los **sistemas adicionales de clave concertada** se aplican según la norma y el ámbito administrativo correspondiente.

#### Atributos mínimos de certificados (art. 27 RD 203/2021)

| Certificado usado para identificación | Atributos mínimos |
|---|---|
| **Persona física** | Nombre y apellidos y **DNI**, **NIE**, **número de identificación consular central** o **NIF**, inequívocamente |
| **Representante de persona jurídica** | **Denominación y NIF de la persona jurídica**, junto con nombre y apellidos e identificador de la **persona representante** |
| **Sello de persona jurídica** | **Denominación y NIF de la persona jurídica** |

> ⚠️ **¡Foco Examen!:** **Identificación ≠ firma**. El **art. 10.5** permite entender identificada a la persona que **ya ha firmado** con un sistema válido; la conversión inversa **identificación → firma** requiere **norma expresa y acreditación de voluntad** (**10.4**). La **representación** exige datos del **representado y representante**, no solo el NIF de la empresa.

### 2. Asistencia en el uso de medios electrónicos (**Ley 39/2015, art. 12; RD 203/2021, art. 30**)

La **Administración Pública** debe asistir a quienes **no estén obligados** a relacionarse electrónicamente (**art. 14.2–3 Ley 39/2015**) y lo soliciten. La asistencia comprende, especialmente, **identificación y firma**, **presentación de solicitudes** y **obtención de copias auténticas**.

Cuando la persona carezca de los medios electrónicos necesarios, puede intervenir **personal funcionario público habilitado**, bajo condiciones acumulativas:

1. La persona interesada se **identifica ante el funcionario habilitado**.
2. Presta **consentimiento expreso** para que se practique la identificación o firma por funcionario.
3. Debe quedar constancia para caso de discrepancia o litigio. El **art. 30.1 RD 203/2021** exige constancia **por escrito** y entrega a la persona interesada de **la documentación del trámite** y **copia del consentimiento cumplimentado y firmado**.
4. En el ámbito de la **Administración General del Estado**, el funcionario debe estar inscrito en el **Registro de Funcionarios Habilitados** y el trámite estar **previamente habilitado** por el departamento u organismo (**art. 30.2**).

| Situación | ¿Puede firmar el funcionario? |
|---|---|
| Interesado **no obligado**, sin medios electrónicos, identificado y con consentimiento expreso | **Sí**, en los trámites y condiciones habilitados |
| Interesado **obligado a relacionarse electrónicamente** conforme al art. 14.2–3 | La vía de asistencia con firma sustitutoria del **art. 12.2** no se le aplica por esa sola condición |
| Falta de consentimiento o identificación ante funcionario | **No** se cumplen las condiciones legales |

> ⚠️ **¡Foco Examen!:** **Funcionario habilitado** no equivale a cualquier empleado. Son esenciales la **identificación presencial**, el **consentimiento expreso**, la **constancia escrita** y la entrega de **copia** al ciudadano, según **art. 30.1**. No se pide al ciudadano la **clave privada** ni el **PIN**.

### 3. Certificado de sede electrónica (**RD 203/2021, art. 18**)

La **sede electrónica** es una dirección electrónica cuya titularidad corresponde a una **Administración Pública, organismo público o entidad de derecho público**, en el ejercicio de sus competencias. Para identificarse y garantizar una comunicación segura, las **sedes** y las **sedes asociadas** usan **certificados cualificados de autenticación de sitio web o medio equivalente** (**18.1**).

**Especialidad estatal:** las sedes electrónicas de la **AGE** y sus sedes asociadas se identificarán mediante **certificados cualificados de autenticación de sitio web** (**18.2**). Su dirección incluirá el nombre de dominio **`.gob.es`** y su condición de sede debe figurar de forma **visible e inequívoca**.

| Ámbito | Identificación de la sede |
|---|---|
| **Regla general** | Certificado cualificado de autenticación web **o medio equivalente** (**18.1**) |
| **AGE y sedes asociadas** | Certificado **cualificado de autenticación web**; dominio **`.gob.es`** (**18.2**) |
| **Firma de un acto administrativo** | Certificado web **no** sustituye el **sello** o la **firma electrónica** del documento |

> ⚠️ **¡Foco Examen!:** La alternativa **«certificado cualificado de web o medio equivalente»** corresponde a la **regla general (18.1)**, mientras que la **AGE (18.2)** exige **certificado cualificado** y dominio **`.gob.es`**. **HTTPS no es firma del acto administrativo**.

### 4. Sello electrónico de Administración u órgano (**RD 203/2021, art. 19**)

Las **Administraciones Públicas**, organismos y órganos pueden identificarse mediante **sello electrónico** basado en **certificado cualificado**, conforme al **art. 40 de la Ley 40/2015** y **art. 19 RD 203/2021**.

El certificado incluye **NIF** y **denominación** y, cuando corresponda, la identidad del titular del órgano. La relación de sellos debe ser **pública y accesible electrónicamente**, con datos del certificado, **prestador** y medios de comprobación.

En la **AGE**, la creación del sello requiere **resolución de la persona titular de la Subsecretaría del Ministerio**, o de la **Presidencia o Dirección del organismo o entidad** competente; se publica en la **sede o sede asociada** correspondiente (**19.3**).

| Requisito de la resolución de creación estatal | Contenido (**art. 19.3**) |
|---|---|
| **Titular del sello** | Órgano u organismo responsable y Ministerio de adscripción |
| **Datos técnicos** | Características del sistema de firma y certificado |
| **Validación** | Servicio de verificación del certificado |
| **Alcance** | **Actuaciones y procedimientos** en que puede utilizarse |

> ⚠️ **¡Foco Examen!:** El **sello de órgano** no es una **firma personal** ni un **certificado de autenticación web**. Su creación en la **AGE** se publica en **sede electrónica** y se autoriza por la **Subsecretaría** o el órgano director correspondiente, **no** automáticamente por la autoridad certificadora.

### 5. Actuación administrativa automatizada y CSV (**Ley 40/2015, art. 42; RD 203/2021, arts. 20–21**)

Existe actuación administrativa automatizada cuando un sistema ejecuta una actuación **íntegramente por medios electrónicos** sin intervención **directa de un empleado público** en cada caso. Con carácter previo se designan los **órganos responsables de especificaciones, programación, mantenimiento, supervisión y control de calidad**, y el competente a efectos de **impugnación** (**art. 41.2 Ley 40/2015**).

Puede autenticarse mediante **sello electrónico de Administración u órgano** o **código seguro de verificación (CSV)** vinculado al órgano o entidad, con comprobación de integridad en su **sede electrónica** (**art. 20.1 RD 203/2021**).

#### Requisitos del CSV (art. 21)

| Requisito | Regla legal |
|---|---|
| **Verificación** | **Directa y gratuita** por la persona interesada en **sede o sede asociada** (**21.1**) |
| **Unicidad** | **Código único** para cada documento (**21.2.b**) |
| **Alteración documental** | Documento modificado → **nuevo documento y CSV diferente** (**21.2.c**) |
| **Acceso** | Restringido a quien dispone del **CSV**, sin perjuicio de garantías adicionales (**21.2.e**) |
| **Interoperabilidad entre Administraciones** | Puede superponerse **sello electrónico** al CSV cuando así lo determinen las partes (**21.3**) |
| **Plazo de verificación en sede, AGE** | **Al menos 5 años**, salvo norma especial que exija **plazo superior** (**21.4.e**) |

En el ámbito **estatal**, el uso del CSV requiere **resolución de la Subsecretaría del Ministerio** o de la **Presidencia/Dirección del organismo**, con **informes previos del Centro Criptológico Nacional y de la Secretaría General de Administración Digital** (**21.4**). La resolución delimita actuaciones, responsables, normativa, sede de comprobación y **plazo de disponibilidad**. Transcurrido ese plazo, el interesado debe solicitar la verificación al **órgano emisor** conforme a **21.4.e**.

| «5 años» | ¿A qué se refiere? |
|---|---|
| **Ley 6/2020, 4.2** | **Vigencia máxima** de un **certificado cualificado** |
| **RD 203/2021, 21.4.e** | **Disponibilidad mínima** para comprobar **CSV en sede estatal** |

> ⚠️ **¡Foco Examen!:** El **CSV no es un certificado electrónico**. Su verificación en sede estatal debe mantenerse durante **al menos 5 años** (**art. 21.4.e**) y un documento **modificado exige CSV nuevo** (**21.2.c**). El **plazo mínimo de CSV** no es la **vigencia máxima de un certificado**.

### 6. Firma del empleado público (**RD 203/2021, art. 22**)

Cuando la actuación administrativa por medios electrónicos **no** se realiza mediante actuación automatizada de los artículos **20 y 21**, se aplica la firma electrónica del **titular del órgano competente** o del **empleado público** mediante el que se ejerza la competencia (**art. 22.1**).

**Cada Administración Pública** determina los sistemas de firma de su personal. Estos sistemas pueden identificar conjuntamente a la persona titular del puesto o cargo y a la Administración u órgano donde presta servicios (**22.2**).

Los **certificados electrónicos de empleado público serán cualificados** y se ajustarán al **Esquema Nacional de Interoperabilidad** y a la legislación de identificación y firma (**22.3**). No debe equipararse automáticamente cualquier sistema interno de acceso de empleado a un certificado cualificado de firma.

El **art. 22.4** añade una regla para las **entidades de derecho privado vinculadas o dependientes** cuando tramitan procedimientos ejerciendo **potestades administrativas**: la Administración correspondiente determina los medios de firma admitidos.

#### Especialidad estatal: identificación y firma (**art. 24 RD 203/2021**)

Para el personal de la **Administración General del Estado** y sus organismos y entidades públicas vinculadas o dependientes, hay que diferenciar **identificación en sistemas** de **firma electrónica de actuaciones**.

| Cuestión | Regla del artículo **24** | Trampa de examen |
|---|---|---|
| **Identificación** | Sistemas de la **Ley 39/2015** adecuados al nivel de seguridad del trámite conforme al **Esquema Nacional de Seguridad** (**24.1**) | No todos los trámites exigen el mismo sistema |
| **Firma** | Puede emplear **certificados electrónicos cualificados facilitados específicamente al personal** (**24.2**) | No equivale a un certificado de autenticación web |
| **Uso del certificado de empleado** | Para desempeñar el **puesto** y sus trámites; también para relacionarse con otras Administraciones **cuando estas lo admitan** (**24.2**) | Ni exclusivamente uso interno ni uso privado indiscriminado |
| **Repositorios de identidad de personal** | Pueden identificar al personal ante **servicios y aplicaciones internos**, cumpliendo el **Esquema Nacional de Seguridad** (**24.3–4**) | Acceder a una aplicación **no supone firmar** un acto administrativo |

**Fuente:** [**RD 203/2021, arts. 22 y 24, BOE consolidado**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032#a2-4) y [**Ley 40/2015, art. 43**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a43).

> ⚠️ **¡Foco Examen!:** **Identificación de empleado ≠ firma de resolución**. El **art. 22** establece la regla general y que los **certificados de empleado público son cualificados**; el **art. 24** contiene especialidades de la **AGE**, incluida la admisión de certificados de empleado en relaciones con otras Administraciones. **No** confundir el **Esquema Nacional de Seguridad** (nivel de identificación) con el **Esquema Nacional de Interoperabilidad** (requisitos del certificado).

### 6 bis. Intercambio electrónico en entornos cerrados (**Ley 40/2015, art. 44; RD 203/2021, art. 25**)

Como figura distinta de los certificados y firmas individuales, la normativa permite que los **documentos electrónicos transmitidos en entornos cerrados de comunicación** sean válidos para autenticar e identificar **emisores y receptores**, bajo garantías específicas.

| Participantes | ¿Quién establece las condiciones? | Contenido o control mínimo |
|---|---|---|
| Órganos de **la misma Administración Pública** | **Esa Administración** (**25.2**) | Relación de **emisores y receptores autorizados** y naturaleza de los datos |
| Órganos de **Administraciones Públicas distintas** | **Convenio** entre las Administraciones (**25.3**) | Condiciones y garantías acordadas |
| **Ámbito estatal**, para el supuesto del **25.2** | **Secretaría General de Administración Digital** (**25.4**) | Determina las condiciones y garantías de ese entorno |
| **En todos los casos** | Administraciones responsables | Seguridad del entorno y protección de datos conforme al **Esquema Nacional de Seguridad** (**25.5**) |

Esto **no** significa que un canal cerrado sea por sí mismo una sede electrónica ni un certificado cualificado, ni elimina la necesidad de **firma del acto** cuando la actuación administrativa lo exija.

**Fuentes:** [**Ley 40/2015, art. 44**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566#a44) y [**RD 203/2021, art. 25**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032#a2-7).

> ⚠️ **¡Foco Examen!:** **Misma Administración = condiciones de esa Administración**; **Administraciones diferentes = convenio**; en la **AGE**, las condiciones del supuesto de comunicación interna del **25.2** corresponden a la **Secretaría General de Administración Digital**. No convertir el **convenio** en requisito para toda comunicación interna.

### 7. Certificado de empleado público con número de identificación profesional (**RD 203/2021, art. 23**)

No debe confundirse un **pseudónimo genérico** con el sistema reglamentario de **«certificados electrónicos de empleado público con número de identificación profesional»** (**art. 23**). Son **certificados cualificados** que permiten utilizar un **número de identificación profesional** por razones legalmente justificadas.

El **prestador cualificado** puede consignar ese número **a petición de la Administración** cuando el empleado actúe en asuntos relativos a **información clasificada**, **seguridad pública**, **defensa nacional** u otras actuaciones con **anonimato legalmente justificado** (**23.1**).

| Materia | Órgano o límite |
|---|---|
| **Solicitud en la AGE** | **Subsecretaría del Ministerio** o **Presidencia/Dirección del organismo** donde sirve el empleado (**23.2**) |
| **Conservación de identidad real** | **Administración solicitante**, que custodia documentación de identidad (**23.3**) |
| **Uso y alcance** | Misma capacidad funcional que certificado de empleado, **limitado a actuaciones que justificaron su emisión** (**23.4**) |
| **Revelación de la identidad** | **Autoridades públicas competentes y órganos judiciales** pueden solicitarla mediante **petición oficial** (**23.5**) |

> ⚠️ **¡Foco Examen!:** El nombre reglamentario es **«certificado con número de identificación profesional»**, no un certificado «anónimo». **Prestador cualificado** expide, pero la **Administración** conoce la identidad; solo se usa en **actuaciones justificadas** y puede solicitarse su revelación oficialmente.

### 8. Plataforma de verificación (**RD 203/2021, art. 16**)

La **AGE** dispondrá de una plataforma para comprobar **vigencia y contenido** de **certificados cualificados** admitidos en el sector público. La **Secretaría General de Administración Digital (SGAD)** es el **órgano responsable**, y la plataforma se pone a disposición de **todo el sector público** mediante el correspondiente **instrumento de adhesión** (**16.1**).

| Elemento | Dato test |
|---|---|
| **Órgano responsable** | **Secretaría General de Administración Digital**, conforme a la denominación del texto reglamentario |
| **Destinatarios de verificación** | **Sector público** |
| **Coste para sector público** | Verificación **libre y gratuita** |
| **Acceso de otras Administraciones** | **Adhesión** mediante instrumento correspondiente |
| **Prestadores cualificados** | Acceso electrónico **gratuito** para comprobar vigencia de certificados expedidos en virtud de su cualificación (**16.3**) |
| **Transparencia** | Declaración de prácticas de validación **pública y gratuita** (**16.2**) |

La plataforma estatal conocida como **`@firma`** realiza servicios de **validación**; no se convierte por ello en **prestador emisor de certificados** ni en una **lista de confianza de prestadores cualificados**.

> ⚠️ **¡Foco Examen!:** **SGAD = responsable de plataforma de verificación**; **prestador = emite certificados**; **lista de confianza = identifica servicios cualificados**. El art. **16** exige gratuidad **para el sector público**, no promete todos los servicios de firma gratuitos a cualquier usuario.

### 9. Política de firma y certificados (**RD 203/2021, art. 17**)

La **política de firma electrónica y certificados** fija directrices y normas técnicas de identificación, uso de certificados y firma para la **Administración General del Estado** y sus organismos, sin sustituir el marco **eIDAS**.

Debe incorporar, como mínimo, según el **17.2**, **ámbito de aplicación**, **requisitos de las firmas presentadas** y especificaciones técnicas/operativas de los servicios de confianza asociados a los sistemas de identificación y autenticación.

| Fase | Órgano y formalidad |
|---|---|
| **Aprobación de la política estatal** | **Resolución de la persona titular de la Secretaría de Estado de Digitalización e Inteligencia Artificial** (**17.3**, denominación literal del reglamento) |
| **Publicidad de política estatal** | **BOE** y **sede electrónica del Punto de Acceso General electrónico (PAGe)** (**17.3**) |
| **Políticas particulares de Administraciones** | Deben respetar requisitos de **interoperabilidad** de la política marco, con ficheros de implementación conforme al Reglamento |

**Formatos y perfiles** (por ejemplo **PAdES**, **XAdES** o **CAdES**) son cuestiones técnicas de **cómo se incorpora la firma**; **no determinan por sí solos** que sea **cualificada**.

> ⚠️ **¡Foco Examen!:** **Política estatal (art. 17)** se aprueba por **resolución** y se publica en **BOE y PAGe**; un **formato PAdES o XAdES** no acredita por sí solo **firma cualificada**, prestador cualificado o identidad del firmante.

### 10. Formatos de firma como complemento

Los formatos habituales incluyen:

- `PAdES`, asociado especialmente a PDF;
- `XAdES`, basado en XML;
- `CAdES`, basado en estructuras CMS;
- firmas sobre documentos o firmas separadas.

El epígrafe no exige desarrollar todos sus perfiles, pero debe entenderse que formato, certificado y soporte son conceptos diferentes.

### 11. Identificación de la sede y firma del documento

Un ciudadano puede encontrarse simultáneamente con:

1. certificado TLS de la sede, que identifica el sitio y cifra el canal;
2. certificado personal, que le permite identificarse o firmar;
3. certificado de empleado, con el que se firma una resolución;
4. sello de órgano, con el que se genera un justificante automatizado;
5. CSV, con el que se contrasta una copia.

Cada elemento cumple una función distinta.

### 12. Copias auténticas

Las copias electrónicas auténticas deben permitir comprobar:

- órgano que las expide;
- autenticidad e integridad;
- relación con el original;
- sistema de firma o sello;
- posibilidad de verificación cuando exista CSV.

Escanear un documento y añadir una imagen de firma no crea por sí mismo una copia auténtica.

### 13. Registro electrónico

Al presentar un escrito, el sistema puede generar un recibo firmado o sellado que contenga:

- número de registro;
- fecha y hora;
- identificación del presentador;
- relación de documentos adjuntos;
- huella o evidencia de integridad.

El justificante debe conservarse. Su sello o CSV permite probar la presentación.

### 14. Notificaciones y certificados

El certificado puede usarse para acceder a una notificación o firmar una comparecencia, pero:

- la notificación electrónica es una institución procedimental;
- el certificado es uno de los medios de identificación o firma;
- la entrega electrónica certificada eIDAS no sustituye automáticamente el régimen de notificaciones de la Ley 39/2015.

### 15. Caso práctico municipal

Un programa genera automáticamente un certificado de empadronamiento solicitado en sede:

- el ciudadano se identifica con certificado o sistema admitido;
- el sistema consulta los datos;
- el documento se genera sin firma manual individual;
- puede firmarse con sello de órgano o mediante CSV;
- el ciudadano verifica su autenticidad en la sede.

No es necesario que un empleado introduzca su certificado personal en cada emisión automatizada.

### 16. Errores frecuentes

1. Confundir certificado de sede con sello de órgano.
2. Afirmar que el CSV es un certificado.
3. Usar certificado personal de un empleado para procesos automatizados masivos.
4. Pedir al ciudadano su PIN para asistirle.
5. Considerar que `@firma` o AutoFirma expiden certificados.
6. Confundir firma de empleado con sello de entidad.
7. Pensar que la notificación electrónica es un servicio de entrega eIDAS sin más.
8. Creer que escanear y estampar una imagen produce copia auténtica.


## ANEXO · Cifras, diferencias y comprobaciones de examen (**29/10/2026**)

| Cuestión | Regla jurídica contrastada | Fuente |
|---|---|---|
| **Identificación** | La **Administración** comprueba la identidad y admite sistemas del art. **9** | **Ley 39/2015**, art. **9** |
| **Firma obligatoria** | Solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia | **Ley 39/2015**, art. **11.2** |
| **Certificados cualificados** | Vigencia máxima **5 años**, no necesariamente duración fija | **Ley 6/2020**, art. **4.2** |
| **Caducidad** | Al agotarse la vigencia, el certificado se extingue | **Ley 6/2020**, art. **4.1** |
| **Revocación** | Entre otras causas, compromiso o riesgo sobre datos de creación de firma o sello | **Ley 6/2020**, art. **5.1.b** |
| **Consulta de revocación** | Los prestadores emisores dispondrán de un servicio de consulta del estado accesible al público | **Ley 6/2020**, art. **9.2** |
| **Lista de confianza** | Identifica prestadores **cualificados** y servicios **cualificados** ofrecidos | **Reglamento eIDAS**, art. **22** |

> ⚠️ **¡Foco Examen!:** **Caducidad** es el fin del período de vigencia; **revocación** puede producirse anticipadamente por compromiso de la clave. El límite de **5 años** no obliga a emitir certificados con esa duración.

### Firma, sello y autenticación de sitio

| Instrumento | Titularidad/finalidad | Error habitual |
|---|---|---|
| **Certificado de firma electrónica** | Relacionado con **persona física** firmante | Atribuir la firma personal a la empresa |
| **Certificado de sello electrónico** | Relacionado con **persona jurídica** creadora del sello | Considerarlo firma manuscrita del gerente |
| **Certificado de autenticación de web** | Relaciona el **sitio web** con una entidad identificada | Confundir HTTPS con garantía de veracidad de todo contenido |
| **Tarjeta criptográfica** | Puede guardar clave privada no exportable | Confundir clave pública y privada |
| **Firma remota** | Operación criptográfica mediante servicio y controles de autorización | Creer que firma remota equivale a enviar clave por email |

> ⚠️ **¡Foco Examen!:** Una imagen escaneada de una rúbrica no equivale por sí misma a una **firma electrónica criptográfica verificable**. La presencia de un candado HTTPS no garantiza la legitimidad de los contenidos de una página.

**Fuentes oficiales:** [eIDAS](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0910), [reforma eIDAS de 2024](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1183), [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565).

**Control editorial:** revisión normativa focal sobre arts. **4**, **5**, **9** y **10** de la **Ley 6/2020**; la comprobación íntegra del resto del manual y las pruebas de interfaz siguen pendientes.


### Corrección normativa documentada — **29/10/2026**

El servicio de consulta del estado de validez o revocación corresponde al **artículo 9.2 de la Ley 6/2020**. El **artículo 10** regula, en cambio, la **responsabilidad ante terceros** del prestador de confianza por funciones delegadas. El plazo de conservación de información de **15 años** y la garantía ordinaria mínima de **1.500.000 €** aparecen en el **artículo 9.3.a–b** de la misma norma, con sus salvedades legales.

| Artículo correcto | Materia | Cifra u obligación |
|---|---|---|
| **9.2** | Consulta pública del estado del certificado | Servicio accesible al público |
| **9.3.a** | Conservación por prestadores cualificados | **15 años** desde extinción del certificado o finalización del servicio |
| **9.3.b** | Garantía de responsabilidad civil | **1.500.000 €** mínimo, salvo prestador del sector público; **500.000 €** por cada tipo adicional de servicio cualificado |
| **10** | Responsabilidad por funciones delegadas | El prestador responde frente a terceros |

> ⚠️ **¡Foco Examen!:** La consulta del estado del certificado está en **9.2**, no en **10**. El **10** no trata plazos de consulta, sino **responsabilidad del prestador**.

**Fuente:** [BOE, Ley 6/2020, artículos 9 y 10](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046).


> ⚠️ **¡Foco Examen!:** El límite de **24 horas** de publicación de la revocación es del **artículo 24.3 eIDAS** para prestadores cualificados emisores de certificados cualificados; el **art. 9.2 de la Ley 6/2020** regula la disponibilidad de consulta del estado de certificados.


## Cierre documentado del certificado electrónico — **06/11/2026**

**Fuentes primarias revisadas:** [**Ley 39/2015, arts. 9–12**](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), [**Ley 6/2020**](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046) (última actualización publicada **09/05/2023**), [**Reglamento eIDAS 910/2014**](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa) con texto consolidado **18/10/2024**, y [**RD 203/2021**](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032) para desarrollo reglamentario administrativo. Los trabajos parciales previos del **05/11** ya incluyen cotejo de **Ley 6/2020**, reformas eIDAS y uso de certificados del personal, entornos cerrados y red de servicios.

### Cuatro figuras, cuatro funciones distintas

| Figura | Titular y finalidad | Norma y error de test |
|---|---|---|
| **Certificado cualificado de firma electrónica** | Acredita vínculo entre datos de validación y **persona física** firmante | **eIDAS arts. 3 y 28**; la firma expresa consentimiento/voluntad cuando procede |
| **Certificado cualificado de sello electrónico** | Identifica creador del sello **persona jurídica** | **eIDAS arts. 3 y 38**; sello no equivale a firma de persona física |
| **Certificado de autenticación de sitio web** | Vincula sitio y titular físico/jurídico bajo condiciones del certificado | **eIDAS art. 3**; HTTPS no firma por sí solo todas las resoluciones |
| **DNI electrónico** | Soporte oficial de identificación y, cuando corresponde, firma con sus certificados | Un **soporte** no sustituye el requisito de certificado vigente y clave bajo control |
| **Prestador de servicios de confianza** | Proporciona servicios y, cuando proceda, expide/gestiona certificados | Puede ser **cualificado** o **no cualificado**; lista de confianza según **eIDAS art. 22** |

> ⚠️ **¡Foco Examen!:** **Identificar** a un usuario no equivale a **firmar** un recurso: la **Ley 39/2015 art. 11.2** exige firma en las actuaciones que enumera. **Persona física = firmante**; **persona jurídica = creadora del sello**.

### Vigencia, suspensión, revocación y prestador

| Regla | Dato oficial y órgano | Fuente |
|---|---|---|
| Vigencia máxima de certificado **cualificado** | **5 años**; puede tener menor duración real | **Ley 6/2020 art. 4.2** |
| **Caducidad** | Extinción al alcanzar fin del período de validez | **Ley 6/2020 art. 4.1** |
| **Revocación** | Solicitud del titular o causa tasada; incluye peligro del secreto de datos, representación extinguida, resolución judicial/administrativa | **Ley 6/2020 art. 5.1** |
| **Suspensión** | Causas **a, c, h**, o dudas sobre **b y g** del art. 5.1, **cuando la declaración de prácticas permita suspensión** | **Ley 6/2020 art. 5.2** |
| Consulta pública de estado de certificados expedidos | Servicio accesible al público a cargo del **prestador** | **Ley 6/2020 art. 9.2** |
| Conservación documental por prestadores **cualificados** | **15 años** tras extinción certificado o finalización servicio, supuestos establecidos | **Ley 6/2020 art. 9.3.a** |
| Garantía de responsabilidad civil | **1.500.000 €** mínimo, salvo prestador **del sector público**, más **500.000 €** por tipo adicional de servicio cualificado en condiciones legales | **Ley 6/2020 art. 9.3.b** |
| Auditoría de prestadores cualificados | **Al menos cada 24 meses** por entidad de evaluación de conformidad | **eIDAS art. 20.1** |

> ⚠️ **¡Foco Examen!:** **5 años** (vigencia máxima de certificado), **15 años** (conservación), **24 meses** (auditoría de prestador) son **tres plazos distintos**. Suspensión no es revocación automática; el **art. 10 de Ley 6/2020** regula responsabilidad por funciones delegadas, no la consulta de validez del **art. 9.2**.

### Soportes y oficina pública: clasificación completa

| Medio/entorno | Qué resuelve | Límite importante |
|---|---|---|
| **Archivo software (p. ej. P12/PFX)** | Alojamiento de certificado y, según configuración, clave exportable protegida | Copia posible no siempre equivale a misma seguridad que clave hardware |
| **Tarjeta criptográfica / USB token** | Clave privada susceptible de declararse **no exportable** | Tener conector USB no convierte cualquier memoria en dispositivo criptográfico |
| **Firma remota** | Operación criptográfica gestionada por servicio remoto con requisitos de autenticación y control | No implica guardar fichero de clave privada en ordenador local |
| **Firma por funcionario habilitado** | Asistencia al interesado en supuestos reglamentarios; acreditación de identidad, consentimiento expreso y copia | **RD 203/2021 art. 30**; no suprime la responsabilidad de firmar válidamente |
| **Entorno cerrado dentro de una Administración** | Condiciones fijadas por esa **Administración** | **RD 203/2021 art. 25.2** |
| **Entorno cerrado entre Administraciones** | Condiciones por **convenio** | **RD 203/2021 art. 25.3** |

> ⚠️ **¡Foco Examen!:** Un archivo con imagen manuscrita pegada en PDF no acredita por sí solo **firma electrónica válida**. En **entornos cerrados interadministrativos** la regla del **convenio** no debe extrapolarse al caso de una sola Administración.

**Alcance:** consolidación jurídico-editorial de los incisos del **Tema 14**, con fuentes y cotejos previos extensos. [Informe de cierre del lote](../cierre-editorial-c2-14-16-2026-11-06.md). **Banco histórico de 20 preguntas / 80 opciones conservado**; pruebas funcionales reales siguen separadas.
