# Tema 13 · Bloque 3 · Soportes, claves y custodia

**Estado:** EN REVISIÓN DEL USUARIO

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