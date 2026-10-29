# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 14

**ESTADO EDITORIAL: BORRADOR ADAPTADO, AUDITORÍA FINAL PENDIENTE.** Fecha de incorporación **25/10/2026**. Material de base tomado de La Puebla (revisado en julio de 2026).

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

## 1. Certificado, firma e identificación

Un certificado electrónico es una atestación electrónica que vincula datos de validación con una persona física, una persona jurídica, una entidad o un sitio web, según el tipo de certificado.

La infraestructura usa criptografía asimétrica:

- la **clave privada** crea la firma o sello y debe mantenerse bajo control del titular;
- la **clave pública** permite verificar y se incorpora o referencia en el certificado;
- el certificado vincula esa clave pública con una identidad y con unas condiciones de uso.

El certificado no contiene necesariamente la clave privada. En un archivo software pueden almacenarse juntos certificado y clave privada; en una tarjeta criptográfica la clave privada puede permanecer dentro del chip.

## 2. Identificación electrónica

El artículo 9 de la Ley 39/2015 permite la identificación electrónica mediante sistemas con registro previo que garanticen la identidad. Entre los admitidos figuran:

- certificados cualificados de firma;
- certificados cualificados de sello;
- sistemas de clave concertada;
- otros sistemas admitidos por la Administración con las garantías legales.

La Administración debe permitir, al menos, alguno de los sistemas basados en certificados previstos legalmente.

Identificarse permite acceder, consultar o acreditar quién actúa. No implica por sí mismo que se haya expresado voluntad de firmar un documento.

## 3. Firma electrónica

### 3.1 Firma electrónica simple

Es el concepto general: datos electrónicos utilizados por una persona para firmar. No se le niegan efectos jurídicos por el mero hecho de ser electrónica, pero su fuerza probatoria depende del sistema y de las circunstancias.

### 3.2 Firma electrónica avanzada

Debe:

1. estar vinculada al firmante de manera única;
2. permitir identificarlo;
3. crearse utilizando datos bajo su control con alto nivel de confianza;
4. quedar vinculada a los datos firmados de forma que cualquier modificación posterior sea detectable.

### 3.3 Firma electrónica cualificada

Es una firma avanzada:

- basada en certificado cualificado de firma;
- creada mediante dispositivo cualificado de creación de firma.

Tiene efecto jurídico equivalente a la firma manuscrita en toda la Unión Europea.

No toda firma realizada con certificado es automáticamente cualificada. Deben verificarse el tipo de certificado, el dispositivo y las condiciones de creación.

## 4. Cuándo exige firma la Ley 39/2015

Con carácter general, basta identificar a la persona durante la actuación administrativa. Se exige firma para:

1. formular solicitudes;
2. presentar declaraciones responsables o comunicaciones;
3. interponer recursos;
4. desistir de acciones;
5. renunciar a derechos.

La firma debe acreditar autenticidad de la voluntad y consentimiento e integridad e inalterabilidad del documento.

## 5. Usos del certificado de persona física

Puede emplearse, si la política lo permite, para:

- acceder a una sede electrónica;
- consultar expedientes y notificaciones;
- presentar solicitudes y escritos;
- firmar recursos y declaraciones;
- obtener certificados administrativos;
- realizar trámites tributarios o de Seguridad Social;
- actuar como representante cuando el certificado o el procedimiento acredita la representación.

El certificado acredita la identidad del titular, pero no prueba por sí solo que posea una representación no incorporada ni comprobada por otro medio.

## 6. Representación

La representación puede acreditarse mediante:

- certificado cualificado con atributo de representante;
- apoderamiento inscrito en registro electrónico de apoderamientos;
- comparecencia o documento admitido en Derecho;
- comprobación administrativa de las facultades.

El certificado de representante es una firma de persona física que actúa por una entidad. No debe confundirse con un sello electrónico de la entidad.

## 7. Sello electrónico

El sello electrónico se reserva a personas jurídicas y entidades. Su función típica es garantizar:

- origen del documento;
- integridad;
- vinculación con la entidad creadora del sello.

No expresa por sí mismo una voluntad humana concreta. Es especialmente adecuado para:

- emisión masiva de justificantes;
- copias o certificados automatizados;
- actuaciones administrativas automatizadas;
- documentos generados por sistemas de información.

## 8. Autenticidad, integridad y no repudio

- **Autenticidad:** permite comprobar quién origina o firma.
- **Integridad:** permite detectar alteraciones posteriores.
- **No repudio:** expresión técnica habitual para describir evidencias que dificultan negar la autoría; no elimina la posibilidad de impugnar judicialmente.
- **Confidencialidad:** impide el acceso de terceros no autorizados; normalmente exige cifrado y no se obtiene por el mero hecho de firmar.

Firmar no cifra automáticamente el documento.

## 9. Firma visible y firma criptográfica

La imagen de una rúbrica, un nombre mecanografiado o un recuadro visible en un PDF no constituyen por sí solos la firma criptográfica.

La validez se comprueba analizando la firma electrónica incorporada al documento o asociada a él, el certificado, la cadena de confianza y las evidencias de validación.

## 10. Errores frecuentes

1. Afirmar que certificado y firma son lo mismo.
2. Creer que identificarse equivale siempre a firmar.
3. Considerar que una persona jurídica firma directamente con certificado propio.
4. Confundir sello de entidad con firma de representante.
5. Pensar que la imagen de una firma manuscrita digitalizada es una firma cualificada.
6. Creer que la firma electrónica cifra el contenido.
7. Dar por acreditada cualquier representación solo porque el firmante posee certificado personal.
8. Exigir firma para una mera consulta o acceso cuando basta identificación.

## 11. Supuesto práctico

Una persona entra con certificado en la sede municipal para consultar el estado de un expediente. La identificación es suficiente. Si presenta después un recurso, deberá utilizar un sistema de firma admitido porque el artículo 11.2 de la Ley 39/2015 incluye expresamente la interposición de recursos.


---

## 4. tipos certificados

**Bloque incorporado y revisado para el programa de Diputación C2.**

## 1. Clasificaciones que no deben mezclarse

Los certificados pueden clasificarse por criterios diferentes:

- por nivel: cualificados o no cualificados;
- por titular o función: firma, sello o autenticación de sitio web;
- por relación administrativa: persona física, representante, empleado público o sede;
- por soporte: software, tarjeta, token o dispositivo remoto.

Decir que un certificado es “de tarjeta” describe el soporte, no su función jurídica.

## 2. Certificado de firma electrónica

Vincula datos de validación con una **persona física** y confirma al menos su nombre o pseudónimo.

Permite verificar firmas creadas con la clave privada correspondiente. Cuando es cualificado:

- lo expide un prestador cualificado;
- cumple el anexo I de eIDAS;
- contiene identificación del prestador, titular, período de validez y código único, entre otros datos.

### Usos habituales

- identificación ante sedes;
- firma de solicitudes, recursos y declaraciones;
- firma de contratos o documentos privados;
- firma como profesional o empleado cuando el certificado incorpora el atributo correspondiente.

## 3. Certificado de persona física

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

## 4. Certificado de representante

Es un certificado de firma expedido a una **persona física** que actúa en representación de:

- una persona jurídica;
- una entidad sin personalidad jurídica;
- una entidad en la que sea administrador único o solidario, cuando corresponda.

Debe comprobarse la identidad del representante, la existencia de la entidad, la extensión y vigencia de las facultades y, cuando sea exigible, su inscripción registral.

La pérdida o terminación del poder obliga a solicitar la revocación. No debe confundirse con un sello electrónico de la entidad.

## 5. Certificado de empleado público

Es un certificado cualificado de firma utilizado por personal al servicio de una Administración.

Puede identificar conjuntamente:

- a la persona titular del puesto o cargo;
- a la Administración u órgano en que presta servicio.

Se usa para firmar actos, informes, comunicaciones y documentos en el ejercicio de las funciones públicas. La Administración determina qué sistemas debe utilizar su personal.

Puede existir certificado con pseudónimo en supuestos legalmente previstos, sin que el prestador deje de conocer la identidad real.

## 6. Certificado de sello electrónico

Vincula datos de validación con una persona jurídica o entidad y permite verificar sellos electrónicos.

En las Administraciones puede utilizarse para:

- identificar a la Administración, organismo u órgano;
- garantizar origen e integridad de documentos;
- firmar actuaciones automatizadas;
- emitir justificantes o certificados de forma masiva.

El certificado de sello incluye normalmente denominación y NIF del suscriptor. No identifica necesariamente a una persona física autora de cada documento.

## 7. Certificado de autenticación de sitio web

Vincula un sitio web con la persona física o jurídica a la que se expide y permite autenticar el sitio.

En las sedes electrónicas sirve para:

- identificar el dominio y la entidad responsable;
- establecer una comunicación cifrada mediante TLS;
- reducir el riesgo de suplantación;
- permitir al navegador comprobar la cadena de confianza.

El Real Decreto 203/2021 exige que las sedes electrónicas se identifiquen mediante certificados cualificados de autenticación de sitio web o medio equivalente; en el ámbito estatal se utilizan certificados cualificados.

Este certificado no sustituye la firma de los documentos administrativos publicados en la sede.

## 8. DNI electrónico

El DNI electrónico permite:

- acreditar electrónicamente la identidad personal;
- firmar documentos electrónicamente.

El chip contiene, entre otros, certificados diferenciados de autenticación y firma. La clave privada asociada se genera y permanece protegida en el chip.

El DNIe es simultáneamente:

- documento físico de identidad;
- soporte criptográfico;
- medio de identificación electrónica;
- dispositivo para crear firmas con sus certificados.

## 9. Certificados de componente

Son certificados técnicos vinculados a servidores, aplicaciones, dispositivos o componentes informáticos. Entre los usos habituales figuran:

- servidores TLS;
- componentes de firma;
- dispositivos o aplicaciones;
- firma de código;
- sellos de entidad.

No todos los certificados de componente son certificados cualificados eIDAS ni sirven para identificar a una persona interesada en un procedimiento administrativo.

## 10. Cualificado y no cualificado

### Certificado cualificado

Cumple los requisitos eIDAS y lo expide un prestador cualificado dentro de un servicio que figura con estado cualificado en la lista de confianza.

### Certificado no cualificado

Puede tener validez técnica y jurídica, pero no disfruta automáticamente de las presunciones y efectos reservados a los servicios cualificados.

La Administración puede admitir distintos sistemas conforme a la Ley 39/2015, pero no debe llamarse “cualificado” a un certificado por costumbre comercial.

## 11. Certificado vigente, caducado, suspendido y revocado

- **Vigente:** dentro del período de validez y sin suspensión o revocación.
- **Caducado:** ha finalizado el período de vigencia.
- **Suspendido:** su validez queda temporalmente detenida.
- **Revocado:** su vigencia se extingue antes de la caducidad.

La firma debe analizarse respecto del momento de creación y de las evidencias disponibles. Que el certificado esté hoy caducado no invalida automáticamente una firma correctamente creada y preservada cuando estaba vigente.

## 12. Tabla comparativa

| Tipo | Titular o vínculo | Uso principal |
|---|---|---|
| Firma de persona física | Persona física | Identificación y firma personal |
| Representante | Persona física y relación de representación | Actuar por una entidad |
| Empleado público | Persona física y Administración | Firma en ejercicio de funciones públicas |
| Sello electrónico | Persona jurídica, Administración u órgano | Origen e integridad, automatización |
| Autenticación de sitio web | Dominio y titular | Identificar sede o sitio y asegurar canal |
| Componente | Servidor, aplicación o dispositivo | Función técnica específica |

## 13. Errores frecuentes

1. Llamar certificado de persona jurídica a lo que jurídicamente debe ser sello o firma de representante.
2. Creer que el certificado de sede firma actos administrativos.
3. Confundir certificado de empleado público con certificado personal para usos privados.
4. Considerar cualificado cualquier certificado emitido por una empresa conocida.
5. Pensar que un certificado caducado nunca permite validar una firma histórica.
6. Confundir certificado de componente con certificado admisible para un ciudadano.


---

## 5. soportes

**Bloque incorporado y revisado para el programa de Diputación C2.**

## 1. Soporte lógico o software

El certificado y, en su caso, la clave privada pueden almacenarse en:

- almacén de certificados del sistema operativo;
- almacén del navegador;
- llavero criptográfico del dispositivo;
- archivo protegido, habitualmente `PKCS#12`, con extensiones como `.p12` o `.pfx`.

### Ventajas

- instalación sencilla;
- uso sin lector externo;
- posibilidad de copia de seguridad cuando la clave es exportable.

### Riesgos

- copia no autorizada del archivo;
- malware o acceso al perfil del usuario;
- pérdida de control al compartir equipo;
- exportación sin contraseña o con contraseña débil.

Un archivo `.cer` o `.crt` suele contener solo el certificado y la clave pública. No permite firmar si no se dispone también de la clave privada.

## 2. Tarjeta criptográfica

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

## 3. Token criptográfico USB

Es un dispositivo específico que realiza funciones similares a una tarjeta con lector integrado.

No debe confundirse con una memoria USB ordinaria:

- en una memoria común, un archivo de certificado puede copiarse como cualquier fichero;
- en un token criptográfico, la clave privada puede ser no exportable y las operaciones se ejecutan dentro del dispositivo.

## 4. DNI electrónico y comunicación sin contacto

El DNIe es una tarjeta criptográfica. Según la versión y el dispositivo, puede usarse mediante:

- lector de tarjetas;
- comunicación de proximidad compatible;
- software y controladores admitidos.

El soporte físico contiene certificados separados para autenticación y firma, además de elementos técnicos internos.

## 5. Firma remota o en la nube

En la firma remota, los datos de creación de firma se gestionan en una infraestructura segura por cuenta del titular. El usuario autoriza cada operación mediante mecanismos de autenticación reforzada.

Puede utilizar:

- contraseña personal;
- aplicación móvil;
- código de un solo uso;
- autenticación multifactor;
- dispositivo remoto cualificado gestionado por prestador cualificado.

La firma remota no significa que la clave privada sea pública ni que el prestador pueda usarla libremente. El sistema debe asegurar control del titular y protección del dispositivo remoto.

Cl@ve puede ofrecer identificación con claves concertadas y, en determinados servicios, firma en la nube con certificados centralizados. Cl@ve no debe equipararse siempre a un certificado instalado localmente.

## 6. Dispositivo móvil

El móvil puede intervenir de varias maneras:

- como segundo factor;
- para autorizar una firma remota;
- como lector de un documento electrónico compatible;
- almacenando claves en un elemento seguro;
- ejecutando una aplicación de identidad o firma.

Que el trámite se complete desde el móvil no determina el nivel jurídico de la firma. Debe analizarse el sistema utilizado.

## 7. Módulo criptográfico y HSM

Un `HSM` es un módulo hardware de seguridad diseñado para generar, custodiar y usar claves criptográficas con controles reforzados.

Se utiliza especialmente para:

- sellos electrónicos de organismos;
- firma automatizada;
- servicios de confianza;
- firma remota;
- autoridades de certificación.

Puede existir en infraestructura propia o como servicio remoto. La cualificación depende de la certificación y del cumplimiento de eIDAS, no de la denominación comercial.

## 8. Copia de seguridad y exportación

### Certificado software exportable

Debe guardarse una copia cifrada que incluya la clave privada. La contraseña de la copia debe conservarse separadamente.

### Tarjeta o token

La clave privada suele ser no exportable. La pérdida del dispositivo puede exigir revocación y nueva expedición.

### Firma remota

La copia y continuidad son responsabilidad del servicio conforme a sus políticas, sin permitir que terceros utilicen la clave en nombre del titular.

No debe enviarse por correo electrónico un archivo que contenga clave privada ni compartir su contraseña.

## 9. Custodia del titular

El titular debe:

1. proteger la clave privada y los medios de acceso;
2. impedir el uso por terceros;
3. comunicar cambios relevantes;
4. solicitar suspensión o revocación ante pérdida o sospecha de compromiso;
5. no usar el certificado tras caducidad, suspensión o revocación;
6. respetar los límites y la política del certificado.

Ceder un certificado y su contraseña a otra persona elimina la garantía de control exclusivo y puede generar responsabilidad.

## 10. Validación técnica del soporte

Para usar un certificado local suelen ser necesarios:

- controlador o proveedor criptográfico;
- almacén de confianza actualizado;
- navegador o aplicación compatible;
- aplicación de firma cuando proceda;
- acceso a servicios de estado del certificado;
- fecha y hora correctas del equipo.

La aplicación `AutoFirma` es una herramienta de firma, no una autoridad certificadora ni un certificado.

## 11. Tabla comparativa

| Soporte | Clave privada | Portabilidad | Riesgo principal |
|---|---|---|---|
| Archivo software | Puede ser exportable | Alta | Copia o robo del archivo |
| Tarjeta criptográfica | Normalmente no exportable | Media | Pérdida y bloqueo de PIN |
| Token USB criptográfico | Normalmente no exportable | Alta | Pérdida física |
| Móvil o elemento seguro | Depende del sistema | Alta | Compromiso del dispositivo |
| Firma remota | Custodiada en infraestructura segura | Muy alta | Suplantación en la autorización |
| HSM institucional | Protegida por hardware | Uso organizativo | Mala administración de permisos |

## 12. Errores frecuentes

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

## 1. Terminología vigente

La expresión **autoridad certificadora** o `CA` sigue utilizándose en el ámbito técnico para designar la entidad que emite y firma certificados dentro de una infraestructura de clave pública.

La categoría jurídica vigente es **prestador de servicios de confianza**:

- puede ser persona física o jurídica;
- presta uno o más servicios de confianza;
- puede ser cualificado o no cualificado.

Un **prestador cualificado** es aquel al que el organismo de supervisión ha concedido esa condición para uno o varios servicios concretos.

La condición cualificada no se presume por la marca comercial ni se atribuye automáticamente a todos los servicios de la entidad.

## 2. Autoridad raíz y autoridades subordinadas

### Autoridad raíz

Es el nivel superior de una jerarquía de certificación. Su certificado suele ser autofirmado y constituye un ancla de confianza.

### Autoridad subordinada

Emite certificados finales o de otras autoridades bajo la confianza de la raíz.

La cadena de certificación permite verificar:

1. el certificado final;
2. los certificados intermedios;
3. la autoridad raíz confiable.

Una cadena técnicamente correcta no sustituye la comprobación jurídica de que el servicio cualificado figure en la lista de confianza.

## 3. Autoridad u oficina de registro

La autoridad de registro comprueba, según el certificado:

- identidad del solicitante;
- existencia de la entidad;
- representación;
- cargo, profesión o atributo;
- documentación y registros oficiales.

Tras la comprobación, aprueba o tramita la solicitud para que la autoridad de certificación emita el certificado.

Una oficina municipal puede actuar como oficina de registro de un prestador sin convertirse por ello en prestador cualificado ni emitir el certificado.

## 4. Organismo de evaluación de la conformidad

Es un organismo acreditado que evalúa si el prestador y sus servicios cumplen los requisitos aplicables.

Los prestadores cualificados deben someterse ordinariamente a auditoría, a su costa, al menos cada **veinticuatro meses**, sin perjuicio de controles adicionales del organismo supervisor.

La auditoría no concede por sí sola la cualificación: el organismo de supervisión verifica y concede el estado, que debe reflejarse en la lista de confianza.

## 5. Organismo de supervisión

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

## 6. Lista de confianza o TSL

La `Trusted Service List` contiene:

- prestadores cualificados establecidos y supervisados en España;
- servicios concretos que tienen estado cualificado;
- situación del servicio;
- certificados y datos necesarios para su comprobación.

Existe una versión legible por personas y otra procesable por máquinas.

Para saber si un servicio es cualificado debe consultarse la TSL. No basta con localizar el nombre de la empresa: hay que comprobar el servicio y su estado.

## 7. Prestadores no cualificados

Pueden iniciar su actividad sin verificación administrativa previa, pero deben comunicarla en el plazo legal y están sujetos a obligaciones de seguridad y supervisión posterior.

Sus servicios no carecen necesariamente de efectos jurídicos. Simplemente no disfrutan de la condición y presunciones reservadas a servicios cualificados.

## 8. Expedición de certificados

El prestador puede expedir certificados para:

- firma electrónica;
- sello electrónico;
- autenticación de sitio web.

Antes de expedir un certificado cualificado debe comprobar identidad y atributos mediante métodos admitidos.

En España, la vigencia máxima de los certificados cualificados es de **cinco años**.

## 9. Consulta de validez y revocación

Los prestadores que expiden certificados deben ofrecer un servicio público de consulta del estado.

Los mecanismos habituales son:

- listas de certificados revocados o `CRL`;
- servicios de consulta en línea, habitualmente `OCSP`;
- servicios de validación integrados.

La revocación cualificada debe registrarse y publicarse de forma oportuna y, en todo caso, dentro de las **veinticuatro horas** siguientes a la recepción de la solicitud. Es efectiva desde su publicación.

## 10. Validación de firmas y sellos

El servicio de validación comprueba, entre otros extremos:

- integridad;
- correspondencia de la firma o sello con los datos;
- certificado y cadena;
- estado y vigencia;
- requisitos de firma o sello avanzado;
- dispositivo y servicio cualificado cuando sean exigibles.

La validación cualificada proporciona el resultado de forma fiable y permite detectar problemas relevantes de seguridad.

## 11. Sello de tiempo electrónico

Asocia una fecha y una hora con unos datos para demostrar que existían en ese momento y que no se han alterado.

El sello de tiempo:

- no identifica por sí solo al autor;
- no sustituye la firma;
- aporta evidencia temporal;
- es importante para conservar validez después de la caducidad del certificado.

## 12. Entrega electrónica certificada

Permite transmitir datos electrónicamente y aportar evidencias sobre:

- envío;
- recepción;
- fecha y hora;
- identidad de remitente y destinatario cuando corresponda;
- integridad de los datos transmitidos.

No debe confundirse con cualquier correo electrónico ni con la notificación administrativa por comparecencia en sede.

## 13. Conservación de firmas y sellos

La conservación permite prolongar la fiabilidad de firmas y sellos más allá de los cambios tecnológicos o de la caducidad de los certificados mediante evidencias, resellado y validaciones sucesivas.

No equivale a guardar simplemente el archivo en una carpeta.

La Ley 6/2020 exige al prestador cualificado conservar determinada información relativa a los servicios durante **quince años** desde la extinción del certificado o finalización del servicio.

## 14. Autenticación de sitio web

El prestador expide certificados que permiten:

- identificar el titular del dominio;
- establecer conexiones seguras;
- comprobar la cadena de confianza;
- reducir la suplantación de sedes y portales.

El candado del navegador acredita una conexión cifrada con el dominio certificado; no garantiza por sí solo que todo el contenido o actuación administrativa sea correcto.

## 15. Firma y sello remotos

El prestador puede gestionar dispositivos remotos de creación de firma o sello por cuenta del titular.

Debe garantizar:

- control del titular sobre cada uso;
- autenticación robusta;
- protección de claves;
- trazabilidad;
- cumplimiento de requisitos de dispositivo y servicio cuando se presenta como cualificado.

## 16. Nuevos servicios del marco eIDAS actualizado

El Reglamento modificado incorpora también:

- archivo electrónico;
- atestaciones electrónicas de atributos;
- libros mayores electrónicos;
- gestión cualificada de dispositivos remotos;
- servicios relacionados con la cartera europea de identidad digital.

Para este tema basta conocer su existencia y finalidad general. Su desarrollo técnico completo queda fuera del epígrafe.

## 17. Obligaciones relevantes del prestador

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

## 18. Ejemplos de prestadores

La FNMT-RCM es un ejemplo de prestador público que ofrece certificados y servicios. Existen otros prestadores públicos y privados.

No debe memorizarse una lista cerrada de marcas, porque la condición o cartera de servicios puede cambiar. La fuente determinante es la TSL vigente.

## 19. Errores frecuentes

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

## 1. Sistemas de identificación y firma del interesado

Los artículos 9 y 10 de la Ley 39/2015 permiten utilizar, entre otros:

- certificado cualificado de firma electrónica;
- certificado cualificado de sello electrónico en los supuestos admitidos;
- sistemas de clave concertada;
- otros sistemas con registro previo y garantías suficientes.

La Administración puede admitir sistemas adicionales, pero debe garantizar la posibilidad de usar los sistemas legalmente previstos basados en certificados en los términos establecidos.

## 2. Asistencia en el uso de medios electrónicos

El artículo 12 de la Ley 39/2015 obliga a prestar asistencia a quienes no estén obligados a relacionarse electrónicamente y la soliciten.

Un funcionario habilitado puede realizar identificación o firma por la persona interesada cuando:

- esta carece de medios;
- se identifica ante el funcionario;
- presta consentimiento expreso;
- queda constancia para casos de discrepancia o litigio.

La asistencia no autoriza a pedir al ciudadano su clave privada o PIN.

## 3. Certificado de sede electrónica

La sede electrónica es una dirección electrónica cuya titularidad corresponde a una Administración, organismo o entidad pública en el ejercicio de sus competencias.

El certificado de autenticación de sitio web de sede permite:

- identificar el dominio;
- vincularlo con la Administración responsable;
- establecer comunicación segura;
- facilitar la comprobación por el navegador.

No es un certificado de empleado ni un sello para firmar resoluciones.

## 4. Sello electrónico de Administración u órgano

Las Administraciones pueden identificarse mediante sello electrónico basado en certificado cualificado.

El certificado debe incluir al menos:

- denominación del suscriptor;
- NIF;
- indicación de que se trata de sello;
- datos técnicos y de validación exigibles.

La relación de sellos usados por cada Administración debe ser pública y accesible electrónicamente, con información suficiente para verificarlos.

## 5. Actuación administrativa automatizada

Existe cuando un sistema realiza íntegramente una actuación sin intervención directa de un empleado público en cada caso.

Puede firmarse mediante:

- sello electrónico de Administración, organismo u órgano;
- código seguro de verificación o `CSV` vinculado a la Administración, con comprobación en sede.

Antes deben determinarse:

- órgano responsable de definir especificaciones;
- órgano responsable de programación, mantenimiento y supervisión;
- órgano responsable a efectos de impugnación;
- sistema de firma utilizado.

El CSV no es un certificado electrónico. Es un código que permite contrastar un documento con el original disponible en la sede.

## 6. Firma del empleado público

Cuando la actuación no es automatizada, la Administración actúa mediante la firma electrónica de:

- la persona titular del órgano competente;
- el empleado público a través del cual se ejerce la competencia.

La Administración determina los sistemas admitidos para su personal.

Los certificados de empleado público:

- son cualificados;
- pueden identificar conjuntamente persona, puesto y Administración;
- deben ajustarse a la normativa de interoperabilidad y firma;
- se usan en el ejercicio de funciones públicas.

No deben utilizarse para actuaciones privadas ajenas al puesto.

## 7. Certificado con pseudónimo

Puede utilizarse cuando resulte legalmente adecuado proteger la identidad pública del empleado, por ejemplo en determinadas funciones especialmente sensibles.

El pseudónimo debe constar como tal. El prestador y la Administración conservan la información necesaria para determinar la identidad real ante órganos competentes.

No constituye anonimato absoluto.

## 8. Plataforma de verificación

El Real Decreto 203/2021 prevé una plataforma de la Administración General del Estado para comprobar gratuitamente, para el sector público:

- vigencia;
- contenido;
- estado de los certificados cualificados admitidos.

Los prestadores cualificados deben facilitar acceso electrónico y gratuito para la verificación de la vigencia de sus certificados.

La plataforma estatal más conocida es `@firma`, que presta servicios de validación e integración. No expide por ello certificados a los ciudadanos.

## 9. Política de firma y certificados

La política de firma establece:

- ámbito de aplicación;
- formatos admitidos;
- requisitos de firmas presentadas;
- reglas de validación;
- certificados aceptados;
- conservación de evidencias;
- servicios y perfiles técnicos.

La política no sustituye a eIDAS ni puede atribuir condición cualificada a un servicio que no la tenga.

## 10. Formatos de firma como complemento

Los formatos habituales incluyen:

- `PAdES`, asociado especialmente a PDF;
- `XAdES`, basado en XML;
- `CAdES`, basado en estructuras CMS;
- firmas sobre documentos o firmas separadas.

El epígrafe no exige desarrollar todos sus perfiles, pero debe entenderse que formato, certificado y soporte son conceptos diferentes.

## 11. Identificación de la sede y firma del documento

Un ciudadano puede encontrarse simultáneamente con:

1. certificado TLS de la sede, que identifica el sitio y cifra el canal;
2. certificado personal, que le permite identificarse o firmar;
3. certificado de empleado, con el que se firma una resolución;
4. sello de órgano, con el que se genera un justificante automatizado;
5. CSV, con el que se contrasta una copia.

Cada elemento cumple una función distinta.

## 12. Copias auténticas

Las copias electrónicas auténticas deben permitir comprobar:

- órgano que las expide;
- autenticidad e integridad;
- relación con el original;
- sistema de firma o sello;
- posibilidad de verificación cuando exista CSV.

Escanear un documento y añadir una imagen de firma no crea por sí mismo una copia auténtica.

## 13. Registro electrónico

Al presentar un escrito, el sistema puede generar un recibo firmado o sellado que contenga:

- número de registro;
- fecha y hora;
- identificación del presentador;
- relación de documentos adjuntos;
- huella o evidencia de integridad.

El justificante debe conservarse. Su sello o CSV permite probar la presentación.

## 14. Notificaciones y certificados

El certificado puede usarse para acceder a una notificación o firmar una comparecencia, pero:

- la notificación electrónica es una institución procedimental;
- el certificado es uno de los medios de identificación o firma;
- la entrega electrónica certificada eIDAS no sustituye automáticamente el régimen de notificaciones de la Ley 39/2015.

## 15. Caso práctico municipal

Un programa genera automáticamente un certificado de empadronamiento solicitado en sede:

- el ciudadano se identifica con certificado o sistema admitido;
- el sistema consulta los datos;
- el documento se genera sin firma manual individual;
- puede firmarse con sello de órgano o mediante CSV;
- el ciudadano verifica su autenticidad en la sede.

No es necesario que un empleado introduzca su certificado personal en cada emisión automatizada.

## 16. Errores frecuentes

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
| **Consulta de revocación** | Los prestadores emisores dispondrán de un servicio público de consulta del estado | **Ley 6/2020**, art. **10.2** |
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

**Control pendiente:** revisión individual íntegra del texto de los cinco bloques y pruebas de interfaz. No se declara auditoría definitiva del manual solo por añadir estas tablas.
