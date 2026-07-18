# La Puebla de Montalbán · Tema 13 · Administración electrónica I

**Estado:** GENERADO Y AUDITADO A NORMA VIGENTE  
**Fecha de revisión normativa:** **18 de julio de 2026**.

> **Tema 13. Administración electrónica I. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.**

Fuente del programa: BOP de Toledo número **82**, de **5 de mayo de 2026**, código `2026.00001965`.

## 1. Normativa vigente y alcance

Normas principales:

- Reglamento (UE) n.º 910/2014 —eIDAS—, modificado por el Reglamento (UE) **2024/1183**, que establece el marco europeo de identidad digital.
- Ley **6/2020, de 11 de noviembre**, reguladora de determinados aspectos de los servicios electrónicos de confianza.
- Ley **39/2015**, especialmente artículos 9, 10, 11, 12, 14, 16 y 43.
- Real Decreto **203/2021**, de actuación y funcionamiento del sector público por medios electrónicos.
- Reglamento de Ejecución (UE) **2026/248**, sobre formatos de firmas y sellos electrónicos avanzados que deben reconocer los organismos del sector público.

La antigua Ley **59/2003, de firma electrónica**, está derogada por la Ley 6/2020 y no debe estudiarse como norma vigente.

> ⚠️ **¡Foco Examen!:** La norma española vigente sobre servicios electrónicos de confianza es la **Ley 6/2020**. La Ley **59/2003** está derogada.

## 2. Identificación, autenticación y firma

| Concepto | Función |
|---|---|
| Identificación electrónica | Permite determinar quién actúa |
| Autenticación | Comprueba electrónicamente la identidad o el origen e integridad de datos |
| Firma electrónica | Vincula al firmante con los datos y expresa una actuación o consentimiento |
| Sello electrónico | Acredita el origen e integridad de datos de una persona jurídica |
| Sello de tiempo | Vincula datos con una fecha y hora determinadas |

Identificarse no equivale necesariamente a firmar. La Administración puede exigir firma solo en los casos establecidos legalmente, como formular solicitudes, presentar declaraciones responsables, interponer recursos, desistir o renunciar.

> ⚠️ **¡Foco Examen!:** El certificado sirve para acreditar una identidad, pero la **firma electrónica** es la operación realizada con los datos de creación de firma. Certificado y firma no son sinónimos.

## 3. Usos del certificado electrónico en la Administración

Un certificado electrónico permite, según su clase y configuración:

- identificarse en sedes electrónicas;
- firmar solicitudes, escritos, declaraciones y recursos;
- consultar expedientes y trámites;
- recibir o acceder a notificaciones electrónicas;
- aportar documentos y obtener justificantes de registro;
- realizar trámites tributarios, padronales, de contratación, subvenciones o empleo público;
- firmar documentos administrativos;
- verificar la identidad de representantes;
- crear sellos electrónicos de órgano o entidad;
- autenticar una sede o sitio web;
- comprobar la integridad y autoría de documentos.

La utilización del certificado no elimina la obligación de comprobar:

- que está vigente;
- que no ha sido revocado;
- que corresponde a la persona o entidad actuante;
- que permite el uso concreto pretendido;
- que la firma puede validarse.

## 4. Certificado electrónico

El certificado electrónico es una declaración electrónica que vincula los datos de validación de una firma o sello con una persona física o jurídica y confirma determinados datos de esa persona.

### Contenido habitual

- identidad del titular;
- identificación del prestador emisor;
- número de serie;
- periodo de validez;
- datos de validación o clave pública;
- algoritmo utilizado;
- límites o condiciones de uso;
- firma o sello del prestador emisor;
- localización del servicio de consulta del estado del certificado.

### Ciclo de vida

1. solicitud;
2. acreditación de identidad;
3. expedición;
4. instalación o entrega;
5. utilización;
6. suspensión, cuando proceda;
7. revocación o caducidad.

Los certificados se extinguen por caducidad al finalizar su vigencia o mediante revocación en los supuestos legales.

> ⚠️ **¡Foco Examen!:** La caducidad llega por el transcurso del periodo de vigencia. La revocación extingue anticipadamente el certificado por una causa legal o contractual.

## 5. Tipos de certificados según su finalidad

### Certificado de firma electrónica

Vincula los datos de validación de firma con una **persona física** y confirma, al menos, su nombre o seudónimo.

Usos típicos:

- firmar solicitudes;
- presentar recursos;
- firmar contratos o declaraciones;
- actuar en nombre propio o, cuando conste la representación, en nombre de otra persona.

### Certificado de representante

Permite a una persona física actuar electrónicamente en nombre de una persona jurídica, entidad sin personalidad o Administración, dentro de las facultades acreditadas.

La posesión del certificado no amplía las facultades de representación que realmente tenga su titular.

### Certificado de sello electrónico

Se expide a una **persona jurídica**. Sirve para garantizar el origen y la integridad de los datos, especialmente en actuaciones automatizadas.

### Certificado de autenticación de sitio web

Vincula un sitio web con la persona física o jurídica a la que se expide. Permite comprobar la identidad del sitio y proteger la comunicación cifrada.

### Certificados de empleado público y de órgano

Las Administraciones pueden utilizar certificados para:

- identificar al personal empleado público;
- firmar actuaciones administrativas;
- identificar órganos, organismos o entidades;
- producir actuaciones administrativas automatizadas.

> ⚠️ **¡Foco Examen!:** La firma se asocia principalmente a una **persona física**; el sello electrónico, a una **persona jurídica**. El sello acredita origen e integridad, pero no sustituye en todos los casos a la firma de una persona competente.

## 6. Firma electrónica simple, avanzada y cualificada

| Tipo | Requisitos principales | Efecto característico |
|---|---|---|
| Simple | Datos electrónicos utilizados para firmar | No puede rechazarse solo por ser electrónica |
| Avanzada | Vinculación única, identificación del firmante, control y detección de cambios | Mayor garantía técnica |
| Cualificada | Firma avanzada, certificado cualificado y dispositivo cualificado | Equivale jurídicamente a la firma manuscrita |

Una firma electrónica no puede ser privada de efectos jurídicos o admisibilidad como prueba únicamente por ser electrónica o no ser cualificada.

La firma electrónica **cualificada** tiene el efecto jurídico equivalente al de una firma manuscrita.

## 7. Certificados cualificados y no cualificados

### Certificado cualificado

Es expedido por un **prestador cualificado de servicios de confianza** y cumple los requisitos del Reglamento eIDAS.

### Certificado no cualificado

Puede ser válido para determinados usos, pero no disfruta automáticamente de todas las presunciones y garantías del régimen cualificado.

La cualificación se comprueba mediante las **listas de confianza** oficiales. Los prestadores cualificados pueden utilizar la etiqueta de confianza «UE» para sus servicios cualificados.

> ⚠️ **¡Foco Examen!:** Un certificado no es cualificado solo porque lo anuncie el proveedor. La cualificación debe constar en la **lista de confianza** correspondiente.

## 8. Tipos según el titular

| Titular | Certificado habitual |
|---|---|
| Persona física | Firma electrónica |
| Representante | Representación de persona jurídica o entidad |
| Persona jurídica | Sello electrónico |
| Empleado público | Certificado de empleado público |
| Órgano o sistema administrativo | Sello de órgano o certificado para actuación automatizada |
| Sitio web | Autenticación de sitio web |

## 9. Soportes del certificado electrónico

### Certificado software

Se almacena en el sistema operativo, navegador, aplicación o almacén criptográfico.

Ventajas:

- facilidad de instalación y copia de seguridad controlada;
- uso en trámites desde el equipo autorizado.

Riesgos:

- copia no autorizada;
- pérdida por avería o reinstalación;
- exposición si el equipo está comprometido.

### Tarjeta criptográfica

El certificado y las claves se almacenan en una tarjeta con chip, como el DNI electrónico. Requiere lector o tecnología compatible y, normalmente, un PIN.

### Token criptográfico USB

Dispositivo físico que protege las claves y realiza operaciones criptográficas sin exportarlas ordinariamente.

### Dispositivo móvil o elemento seguro

Puede utilizarse una aplicación, tarjeta SIM, elemento seguro o solución de identidad móvil, según el sistema y sus garantías.

### Firma centralizada o en la nube

Los datos de creación de firma se gestionan mediante sistemas remotos seguros, bajo control del firmante y, cuando se trate de firma cualificada, por un prestador y dispositivo que cumplan los requisitos eIDAS.

### Cartera europea de identidad digital

El marco eIDAS actualizado incorpora las carteras europeas de identidad digital para identificación, acreditación de atributos y realización de firmas o sellos en los términos de la normativa europea.

> ⚠️ **¡Foco Examen!:** El soporte puede ser software, tarjeta, token, dispositivo móvil o sistema remoto. El tipo de soporte no determina por sí solo que la firma sea simple, avanzada o cualificada.

## 10. Clave pública y clave privada

Los certificados utilizan criptografía asimétrica:

- **clave privada:** permanece bajo control del titular y se utiliza para crear la firma;
- **clave pública:** permite validar la firma y se vincula al titular mediante el certificado.

La clave privada debe protegerse frente a copia, pérdida y uso ajeno. El titular debe solicitar la revocación cuando sospeche que la clave privada ha quedado comprometida.

Nunca debe compartirse:

- el PIN;
- la contraseña de exportación;
- la clave privada;
- el dispositivo sin control adecuado.

## 11. Autoridades certificadoras y prestadores de confianza

La expresión tradicional «autoridad certificadora» se corresponde hoy, jurídicamente, con el **prestador de servicios de confianza** que expide certificados y presta otros servicios regulados.

### Prestador cualificado

Es el prestador al que el organismo de supervisión ha concedido la cualificación para uno o varios servicios y que figura en la lista de confianza.

### Autoridad de registro

Realiza o colabora en la identificación y comprobación de los solicitantes antes de la expedición. Puede formar parte del prestador o actuar por delegación.

### Organismo de supervisión

En España, la supervisión estatal de los servicios de confianza corresponde al departamento ministerial competente conforme a la Ley 6/2020. Mantiene y publica información sobre prestadores y servicios dentro del marco nacional y europeo.

### Lista de confianza

Relaciona los prestadores cualificados y los servicios cualificados reconocidos. Es la referencia para comprobar la cualificación real de un servicio.

## 12. Servicios que prestan

Los prestadores pueden ofrecer:

- expedición de certificados de firma;
- expedición de certificados de sello;
- certificados de autenticación de sitios web;
- creación, validación y verificación de firmas y sellos;
- sellos de tiempo electrónicos;
- servicios de entrega electrónica certificada;
- conservación de firmas, sellos y certificados;
- validación del estado de certificados;
- identificación y registro de solicitantes;
- gestión remota de datos de creación de firma;
- revocación y publicación del estado de vigencia.

Un prestador puede ser cualificado para unos servicios y no para otros. Debe comprobarse cada servicio concreto en la lista de confianza.

> ⚠️ **¡Foco Examen!:** La cualificación se concede al **servicio concreto**, no de forma indiscriminada a toda actividad del prestador.

## 13. Obligaciones del prestador

Entre otras:

- verificar la identidad antes de expedir certificados cualificados;
- facilitar información veraz y comprensible;
- mantener medios técnicos y organizativos seguros;
- conservar la documentación durante el plazo legal;
- comunicar incidentes y cambios cuando proceda;
- disponer de servicios de consulta del estado de los certificados;
- revocar certificados cuando concurra causa;
- proteger datos personales;
- asumir responsabilidad por las funciones delegadas en terceros.

Los prestadores no cualificados establecidos en España deben comunicar el inicio de su actividad en el plazo de **tres meses** previsto por la Ley 6/2020.

## 14. Obligaciones del titular

El titular debe:

- aportar información exacta;
- custodiar los datos de creación de firma;
- impedir el uso por terceros;
- utilizar el certificado conforme a sus límites;
- solicitar revocación ante pérdida, robo o sospecha de compromiso;
- comprobar la vigencia cuando actúe como parte usuaria;
- mantener actualizados los datos cuya modificación afecte al certificado.

## 15. Revocación, suspensión y validación

### Revocación

Extingue la vigencia antes de la fecha de caducidad. Puede producirse por:

- solicitud del titular;
- pérdida o compromiso de la clave;
- inexactitud o modificación relevante de datos;
- fallecimiento o extinción del titular;
- resolución administrativa o judicial;
- incumplimiento de condiciones;
- cese del prestador sin continuidad adecuada.

### Suspensión

Interrumpe temporalmente la eficacia cuando la ley o la política del certificado lo permitan.

### Validación

Antes de confiar en una firma se comprueba:

- integridad del documento;
- identidad vinculada;
- vigencia temporal;
- cadena de certificación;
- estado de revocación;
- cualificación del certificado y del prestador;
- sello de tiempo, cuando exista.

## 16. Formatos de firma y documentos

Formatos habituales:

| Formato | Uso típico |
|---|---|
| PAdES | Documentos PDF |
| XAdES | Documentos XML |
| CAdES | Firma de ficheros binarios |
| ASiC | Contenedor de documentos y firmas |

Desde **2026**, los organismos del sector público deben reconocer los formatos de firmas y sellos electrónicos avanzados conforme al Reglamento de Ejecución (UE) **2026/248** y sus especificaciones técnicas.

## 17. Aplicación práctica municipal

### Solicitud presentada por una persona física

Puede identificarse y firmar con certificado personal admitido por la sede.

### Trámite de una sociedad

Actúa una persona física mediante certificado de representante o mediante representación inscrita o acreditada por otro medio válido.

### Documento generado automáticamente

Puede incorporar sello electrónico de órgano y código seguro de verificación cuando el sistema jurídico y técnico lo permita.

### Notificación electrónica

El certificado puede utilizarse para acceder al contenido, pero la notificación se rige además por la Ley 39/2015 y por el sistema de comparecencia empleado.

### Certificado caducado

No puede utilizarse para producir una nueva firma válida después de su caducidad. La validación de una firma anterior requiere analizar el momento de firma y las evidencias de conservación o sello de tiempo.

## 18. Cuadro final de examen

| Pregunta | Respuesta |
|---|---|
| Norma española vigente | Ley **6/2020** |
| Norma europea básica | Reglamento eIDAS **910/2014**, modificado en **2024** |
| Firma equivalente a manuscrita | Firma electrónica **cualificada** |
| Titular típico de firma | Persona física |
| Titular típico de sello | Persona jurídica |
| Comprobación de cualificación | Lista de confianza |
| Caducidad | Fin del periodo de vigencia |
| Revocación | Extinción anticipada |
| Plazo de comunicación de actividad no cualificada | **3 meses** |
| Formato habitual PDF | PAdES |

## 19. Errores frecuentes

1. Estudiar la Ley 59/2003 como vigente.
2. Confundir certificado, identificación y firma.
3. Pensar que cualquier firma electrónica equivale a la manuscrita.
4. Llamar firma de persona jurídica al sello electrónico sin matices.
5. Creer que todo certificado emitido por un prestador conocido es cualificado.
6. Compartir PIN o exportar la clave privada sin protección.
7. Confundir caducidad y revocación.
8. Creer que un certificado de representante crea facultades que no existen.
9. Confundir soporte físico con nivel jurídico de firma.
10. No comprobar la lista de confianza y el estado de revocación.

> ⚠️ **¡Foco Examen!:** La trampa más habitual es afirmar que toda firma electrónica tiene el mismo valor que la manuscrita. Esa equivalencia legal corresponde a la **firma electrónica cualificada**.

## 20. Fuentes oficiales

- Reglamento (UE) n.º 910/2014, referencia `DOUE-L-2014-81822`.
- Reglamento (UE) 2024/1183, referencia `DOUE-L-2024-80608`.
- Reglamento de Ejecución (UE) 2026/248, referencia `DOUE-L-2026-80141`.
- Ley 6/2020, referencia `BOE-A-2020-14046`, última actualización publicada el **9 de mayo de 2023**.
- Ley 39/2015, referencia `BOE-A-2015-10565`.
- Real Decreto 203/2021, referencia `BOE-A-2021-5032`.
