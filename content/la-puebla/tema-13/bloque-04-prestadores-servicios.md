# Tema 13 · Bloque 4 · Prestadores, autoridades certificadoras y servicios

**Estado:** APROBADO POR EL USUARIO

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
