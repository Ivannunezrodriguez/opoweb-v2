# Auditoría jurídica · Tema 12 · 18 de julio de 2026

## Resultado

Estado: `AUDITADO_NORMA_VIGENTE`.

Norma principal cotejada:

- Real Decreto Legislativo 2/2004, de 5 de marzo, texto refundido de la Ley Reguladora de las Haciendas Locales.
- Referencia oficial: `BOE-A-2004-4214`.
- Última actualización consolidada indicada en el manual: **3 de junio de 2026**.

## Alcance oficial comprobado

El epígrafe oficial exige:

- normas generales sobre tributos locales;
- Impuesto sobre Bienes Inmuebles;
- Impuesto sobre Actividades Económicas;
- Impuesto sobre Vehículos de Tracción Mecánica;
- Impuesto sobre el Incremento de Valor de los Terrenos de Naturaleza Urbana;
- naturaleza, hecho imponible y sujetos pasivos.

El **ICIO no forma parte del epígrafe oficial del Tema 12**. La referencia al ICIO que figuraba en `AUDIT_STATUS.md` era una descripción incorrecta del alcance y debe eliminarse.

## Verificaciones realizadas

### IBI

- Naturaleza directa, real, periódica, obligatoria y municipal.
- Orden legal del hecho imponible: concesión, superficie, usufructo y propiedad.
- Correcta distinción entre no sujeción, exención y repercusión.
- Sujeto pasivo: titular del derecho que realiza el hecho imponible.

### IAE

- Hecho imponible: mero ejercicio en territorio nacional de actividad empresarial, profesional o artística.
- La actividad puede estar sujeta aunque genere pérdidas o se ejerza sin local.
- Personas físicas: sujetas, pero exentas.
- Exención por cifra de negocios inferior a **1.000.000 de euros**, cuando concurren los requisitos legales.
- Exención por inicio durante los **dos primeros periodos impositivos**.

### IVTM

- Hecho imponible ligado a titularidad y aptitud legal para circular.
- Vehículo apto mientras figure matriculado y no haya causado baja.
- Remolques y semirremolques con carga útil no superior a **750 kg**: no sujetos.
- Sujeto pasivo: persona o entidad a cuyo nombre conste el vehículo en el permiso de circulación.

### IIVTNU

- Impuesto directo, real, instantáneo, municipal y potestativo.
- Grava el incremento de valor del terreno urbano manifestado por transmisión o constitución o transmisión de derecho real de goce.
- Terrenos rústicos: no sujetos.
- Inexistencia acreditada de incremento: no sujeción.
- Transmisión lucrativa: contribuyente adquirente.
- Transmisión onerosa: contribuyente transmitente.
- Si el transmitente oneroso es persona física no residente, el adquirente actúa como sustituto.

## Incidencias

No se detectan errores sustantivos en los bloques del manual.

Se detecta una incidencia de seguimiento:

- `AUDIT_STATUS.md` incluía el **ICIO** dentro del Tema 12, pese a que el epígrafe oficial no lo exige.

## Focos de examen

> ⚠️ **¡Foco Examen!:** En el IBI no tributa siempre el propietario. Debe respetarse el orden **concesión → superficie → usufructo → propiedad**.

> ⚠️ **¡Foco Examen!:** En el IAE una persona física está normalmente **sujeta pero exenta**. No es correcto decir que no realiza el hecho imponible.

> ⚠️ **¡Foco Examen!:** En el IVTM manda el nombre que figura en el **permiso de circulación**, no quién conduce ni quién pagó el vehículo.

> ⚠️ **¡Foco Examen!:** En el IIVTNU, transmisión lucrativa equivale a **adquirente** y transmisión onerosa a **transmitente**. La falta acreditada de incremento produce **no sujeción**, no exención.
