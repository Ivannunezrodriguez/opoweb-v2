# Tema 13 · Bloque 2 · Tipos de certificados electrónicos

**Estado:** APROBADO POR EL USUARIO

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
