# La Puebla de Montalbán · Tema 13 · Manual modular

**Estado:** APROBADO POR EL USUARIO  
**Publicado como tema aprobado.**  
**Fecha de revisión normativa:** 18 de julio de 2026.

> **Tema 13. Administración electrónica I. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.**

Fuente del programa: BOP de Toledo número 82, de 5 de mayo de 2026, código `2026.00001965`.

## 1. Fuentes vigentes utilizadas

- Reglamento (UE) n.º 910/2014, eIDAS, modificado por el Reglamento (UE) 2024/1183 sobre el marco europeo de identidad digital.
- Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza.
- Ley 39/2015, artículos 9 a 12: identificación y firma de las personas interesadas.
- Ley 40/2015, artículos 38 y 40 a 43: sedes, sellos, actuación automatizada y firma del personal público.
- Real Decreto 203/2021, artículos 15 a 21: sistemas, verificación, certificados de sede, sello y firma pública.
- Lista de confianza española de prestadores cualificados de servicios electrónicos de confianza.

La Ley 59/2003 de firma electrónica está derogada. La terminología vigente es la de eIDAS y la Ley 6/2020.

## 2. Estructura del manual

1. [Conceptos, identificación, firma y usos administrativos](bloque-01-conceptos-usos.md)
2. [Tipos de certificados electrónicos](bloque-02-tipos-certificados.md)
3. [Soportes, claves y custodia](bloque-03-soportes.md)
4. [Prestadores, autoridades certificadoras y servicios de confianza](bloque-04-prestadores-servicios.md)
5. [Certificados y sistemas propios de las Administraciones públicas](bloque-05-administraciones.md)
6. [Trazabilidad normativa](articulos.md)
7. [Informe de revisión cerrado](feedback.md)

## 3. Qué es un certificado electrónico

Un certificado electrónico es una atestación electrónica emitida y firmada por un prestador que vincula unos datos de validación —normalmente una clave pública— con una identidad o entidad.

El certificado no es la firma. El certificado permite asociar la clave pública con su titular y verificar determinadas firmas o sellos creados con la clave privada correspondiente.

## 4. Cuatro distinciones obligatorias

### 4.1 Identificación y firma

- **Identificación:** acredita quién accede o actúa.
- **Firma:** acredita la voluntad o consentimiento y protege autenticidad e integridad.

La Ley 39/2015 no exige firmar todos los trámites. El artículo 11.2 reserva la firma, con carácter general, para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir y renunciar a derechos.

### 4.2 Firma y sello

- La **firma electrónica** corresponde a una persona física.
- El **sello electrónico** identifica y garantiza el origen e integridad de documentos emitidos por una persona jurídica, Administración u órgano.

Una persona jurídica no “firma” por sí misma con un certificado de persona jurídica del antiguo modelo: actúa mediante la firma de una persona física representante o utiliza un sello electrónico para los usos que le son propios.

### 4.3 Certificado cualificado y prestador cualificado

Un certificado es cualificado cuando:

1. lo expide un prestador cualificado;
2. cumple los requisitos del anexo correspondiente de eIDAS;
3. el servicio cualificado figura en la lista de confianza.

No basta con que el proveedor se anuncie como autoridad certificadora.

### 4.4 Certificado y soporte

El mismo tipo funcional de certificado puede alojarse en soportes diferentes:

- archivo o almacén software;
- tarjeta criptográfica o DNI electrónico;
- token USB criptográfico;
- dispositivo móvil con elemento seguro;
- dispositivo remoto o servicio de firma en la nube.

El soporte no determina por sí solo que la firma sea cualificada. Deben concurrir certificado cualificado, dispositivo cualificado cuando sea exigible y los restantes requisitos legales.

## 5. Usos administrativos principales

Un certificado puede utilizarse para:

- identificarse ante una sede electrónica;
- firmar solicitudes, recursos, declaraciones y comunicaciones;
- acreditar una representación cuando el certificado incorpora ese atributo;
- firmar documentos como empleado público;
- crear sellos de órgano o entidad;
- identificar una sede mediante certificado de autenticación de sitio web;
- firmar actuaciones administrativas automatizadas;
- comprobar origen e integridad de documentos;
- cifrar o establecer canales seguros cuando el certificado y su política lo permiten.

No debe afirmarse que todo certificado sirve para cualquier finalidad. El uso permitido depende de su tipo, política, campos de uso y condiciones del prestador.

## 6. Jerarquía de confianza

En una infraestructura de clave pública intervienen habitualmente:

- una autoridad raíz;
- una o varias autoridades subordinadas de certificación;
- autoridades u oficinas de registro que comprueban identidad y atributos;
- servicios de validación;
- titulares y terceros que confían en el certificado.

La autoridad de registro verifica y tramita la solicitud; la autoridad de certificación emite y firma el certificado. Pueden pertenecer a la misma organización, pero sus funciones no son idénticas.

## 7. Vigencia, suspensión y revocación

La Ley 6/2020 establece que los certificados se extinguen por caducidad o revocación. Los certificados cualificados no pueden tener una vigencia superior a **cinco años**.

Debe solicitarse revocación, entre otros supuestos, cuando:

- se pierde o compromete la clave privada;
- cambia o termina una representación;
- los datos dejan de ser correctos;
- fallece el firmante o se extingue la entidad titular del sello;
- existe orden judicial o administrativa;
- el mecanismo criptográfico deja de ofrecer seguridad suficiente.

La suspensión es temporal. La revocación extingue la vigencia. Un certificado caducado o revocado no debe utilizarse para nuevas firmas.

## 8. Validación

Validar no consiste únicamente en comprobar que una firma “se ve bien”. Debe verificarse, según el caso:

- integridad del documento;
- correspondencia entre firma y datos firmados;
- identidad reflejada en el certificado;
- vigencia del certificado en el momento relevante;
- estado de revocación o suspensión;
- cadena de confianza;
- política y uso permitido;
- sellos de tiempo y evidencias de conservación.

El Real Decreto 203/2021 prevé una plataforma estatal de verificación de certificados disponible para el sector público.

## 9. Lista de confianza

Cada Estado miembro mantiene una lista de confianza o `TSL` con los prestadores cualificados y los servicios concretos que tienen condición cualificada.

La lista no es un catálogo genérico de empresas. La cualificación se atribuye a servicios determinados. Un prestador puede ofrecer simultáneamente servicios cualificados y no cualificados.

## 10. Servicios de confianza

El marco eIDAS comprende, entre otros:

- expedición de certificados de firma;
- expedición de certificados de sello;
- certificados de autenticación de sitio web;
- creación, validación y verificación de firmas y sellos;
- sellos de tiempo;
- entrega electrónica certificada;
- conservación de firmas y sellos;
- gestión de dispositivos remotos de firma o sello;
- archivo electrónico;
- atestaciones electrónicas de atributos;
- libros mayores electrónicos.

Los últimos servicios proceden del marco eIDAS actualizado. Se estudian como ampliación vigente, sin desarrollar la cartera europea de identidad digital completa, que excede el epígrafe.

## 11. Cifras que deben memorizarse

| Materia | Regla |
|---|---:|
| Vigencia máxima de certificado cualificado en España | 5 años |
| Conservación de información por prestador cualificado | 15 años desde extinción o fin del servicio |
| Auditoría ordinaria del prestador cualificado | Al menos cada 24 meses |
| Publicación del estado de revocación cualificada | Como máximo 24 horas desde la solicitud |

## 12. Delimitación

No se desarrolla de forma completa:

- el funcionamiento criptográfico matemático;
- todos los formatos de firma XAdES, PAdES y CAdES;
- el Esquema Nacional de Seguridad;
- la cartera europea de identidad digital;
- la contratación privada y la prueba procesal completa;
- el régimen íntegro de infracciones y sanciones de la Ley 6/2020.

## 13. Estado real

- Manual modular: creado.
- Cinco bloques: preparados.
- Matriz y trazabilidad: documentos separados.
- Banco de preguntas: vacío.
- Revisión del usuario: aprobada el 18 de julio de 2026.
- Tema cerrado: **SÍ, aprobado por el usuario**.
- Publicación como aprobado: **SÍ**.

Frase de aprobación registrada: **«Tema 13 aprobado»**.
