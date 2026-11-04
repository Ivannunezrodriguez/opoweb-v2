# La Puebla de Montalbán · Tema 13

**Estado editorial:** PUBLICADO  
**Revisión editorial histórica:** 30 de julio de 2026.  
**Control jurídico focalizado del Reglamento eIDAS (arts. 20 y 24):** 2 de noviembre de 2026, sin recertificación integral.

## Tema 13 · Administración electrónica I


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

### 4.5 Efectos jurídicos de la firma — **eIDAS art. 25**

| Tipo de firma | Qué dice la norma | Qué **no** debe deducirse |
|---|---|---|
| Firma electrónica **no cualificada** | No se le pueden negar efectos jurídicos ni admisión como prueba **solo por ser electrónica o no cualificada** (**art. 25.1**) | No equivale automáticamente a firma manuscrita ni garantiza por sí sola la admisión en cualquier trámite |
| Firma electrónica **cualificada** | Tiene efecto jurídico **equivalente al de la firma manuscrita** (**art. 25.2**) | La equivalencia no significa que cualquier imagen de firma en un PDF sea firma cualificada |

La **firma avanzada** exige vínculo único con el firmante, identificarlo, datos de creación bajo su control exclusivo con alto grado de confianza y relación con el documento que permita detectar modificaciones (**art. 26**). Para firma **cualificada** se añaden los requisitos reglamentarios: **certificado cualificado** y **dispositivo cualificado de creación de firma**. Son categorías jurídicas, no nombres de formatos de archivo.

> ⚠️ **¡Foco Examen!:** **Art. 25.1:** no puede rechazarse una firma solo por ser electrónica/no cualificada. **Art. 25.2:** solo la firma **cualificada** obtiene equivalencia legal expresa con la manuscrita. **Certificado cualificado sin dispositivo cualificado** no basta por sí solo para convertir cualquier firma en cualificada.

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

### Obligaciones de los prestadores conforme a la **Ley 6/2020, arts. 9 y 12**

Además de las comprobaciones de identidad, el **prestador que expide certificados** ha de mantener **un servicio de consulta pública de validez y revocación** (**art. 9.2**).

| Régimen | Condición test |
|---|---|
| **Prestador cualificado** | Conservar información de servicios **15 años** desde extinción del certificado o fin del servicio (**art. 9.3.a**) |
| **Prestador cualificado privado** | Seguro de responsabilidad civil de **al menos 1.500.000 €**, y **500.000 € más por cada tipo de servicio cualificado adicional** (**art. 9.3.b**); **excepción** cuando pertenece al sector público |
| **Prestador no cualificado** | **No** necesita verificación administrativa previa para iniciar; debe **comunicar la actividad en 3 meses** desde su inicio y cambios o cese en igual plazo (**art. 12**) |

Estas obligaciones de **prestadores** no son las condiciones técnicas del **titular de un certificado** ni deben trasladarse a una oficina de registro municipal por el solo hecho de verificar identidades.

> ⚠️ **¡Foco Examen!:** **15 años = conservación de evidencias**, **5 años = vigencia máxima del certificado cualificado**, **3 meses = comunicación de prestador no cualificado**. El seguro de **1,5 M€ + 0,5 M€ por tipo de servicio adicional** no se impone a **prestadores del sector público**.

## 11. Cifras que deben memorizarse

| Materia | Regla | Fuente normativa |
|---|---|---|
| Vigencia máxima de certificado cualificado en España | **5 años** | **Ley 6/2020, art. 4.2** |
| Conservación de información por prestador cualificado | **15 años** desde extinción del certificado o finalización del servicio | **Ley 6/2020, art. 9.3.a** |
| Auditoría ordinaria de prestadores cualificados | **Al menos cada 24 meses**, a su costa | **Reglamento eIDAS, art. 20.1** |
| Preaviso de auditoría planificada a la autoridad supervisora | **Con al menos un mes de antelación** a la auditoría planificada | **eIDAS, art. 20.1 bis** |
| Remisión del informe de evaluación tras recibirlo | Dentro de **3 días laborables** | **eIDAS, art. 20.1** |
| Publicación del estado de revocación de un certificado cualificado | Sin demora y, en todo caso, dentro de las **24 horas** siguientes a recibir la solicitud; la revocación tiene efecto **inmediato desde su publicación** | **eIDAS, art. 24.3** |

### Diferencias de cómputo que suelen aparecer en los test

- **24 meses**: periodicidad máxima entre auditorías ordinarias del prestador cualificado.
- **1 mes de antelación**: comunicación previa de la auditoría planificada al organismo de supervisión.
- **3 días laborables**: entrega del informe de conformidad tras recibirlo.
- **24 horas**: comunicación pública del estado de revocación desde la recepción de la solicitud; **no** significa **24 meses**.

> ⚠️ **¡Foco Examen!:** No mezclar los **24 meses** de auditoría con las **24 horas** de publicación de la revocación. La normativa eIDAS actualizada distingue también el **preaviso de un mes** y los **tres días laborables** para enviar el informe de conformidad.

## 12. Delimitación

No se desarrolla de forma completa:

- el funcionamiento criptográfico matemático;
- todos los formatos de firma XAdES, PAdES y CAdES;
- el Esquema Nacional de Seguridad;
- la cartera europea de identidad digital;
- la contratación privada y la prueba procesal completa;
- el régimen íntegro de infracciones y sanciones de la Ley 6/2020.

## 13. Esquema final

| Concepto | Idea esencial |
|---|---|
| Identificación | acredita quién actúa |
| Firma electrónica | acredita voluntad, autenticidad e integridad |
| Sello electrónico | garantiza origen e integridad de una persona jurídica u órgano |
| Certificado cualificado | lo expide un prestador cualificado y figura en la lista de confianza |
| Soporte | puede ser software, tarjeta, token, móvil o dispositivo remoto |
| Revocación | extingue la vigencia; la suspensión es temporal |
| Validación | comprueba integridad, identidad, vigencia, cadena y estado de revocación |

> ⚠️ **¡Foco Examen!:** Certificado, firma, sello y soporte son conceptos distintos; disponer de un certificado no significa que cualquier uso o firma sea automáticamente cualificado.

