import fs from 'node:fs';

const additions = new Map([
  [8, `

## 119. Esquema final

| Bloque | Regla que debe quedar memorizada |
|---|---|
| Igualdad efectiva | exige remover desigualdades reales, no solo igualdad formal |
| Presencia equilibrada | cada sexo entre el 40 % y el 60 % |
| Castilla-La Mancha | la Ley 12/2010 se aplica expresamente a las entidades locales |
| Informes autonómicos | periodicidad trienal en los supuestos señalados en el tema |
| Empleo público | igualdad en acceso, promoción, retribución, conciliación y prevención del acoso |
| Empresa | plan de igualdad obligatorio desde 50 personas trabajadoras |

> ⚠️ **¡Foco Examen!:** No deben aplicarse automáticamente a un ayuntamiento los artículos de la Ley Orgánica 3/2007 que se refieren de forma específica a la Administración General del Estado.
`],
  [13, `

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
`],
  [14, `

## 16. Esquema final

| Materia | Regla esencial |
|---|---|
| Competencia | es irrenunciable |
| Delegación | cambia el ejercicio, no la titularidad |
| Avocación | afecta a asuntos concretos y exige motivación |
| Encomienda | solo actividades materiales o técnicas; no encubre contratos |
| Delegación de firma | no altera la competencia ni exige publicación |
| Órgano colegiado | presidente y secretario más, al menos, la mitad de miembros |
| AGE | organización central, territorial y exterior |
| Órganos superiores | ministros y secretarios de Estado |
| Órganos directivos | subsecretarios, secretarios generales, directores y subdirectores generales |

> ⚠️ **¡Foco Examen!:** El Delegado del Gobierno tiene rango de Subsecretario, mientras que el Subdelegado tiene nivel de Subdirector general; el rango no debe confundirse con la dependencia orgánica.
`]
]);

for (const [number, block] of additions) {
  const file = `content/la-puebla/tema-${String(number).padStart(2, '0')}/manual.md`;
  const current = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').trimEnd();
  if (/^##\s+\d+\.\s+Esquema final$/m.test(current)) {
    console.log(`Tema ${number}: esquema final ya existente`);
    continue;
  }
  fs.writeFileSync(file, `${current}${block}\n`, 'utf8');
  console.log(`Tema ${number}: esquema final añadido`);
}
