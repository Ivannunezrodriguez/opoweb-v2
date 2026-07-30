import fs from 'node:fs';
import path from 'node:path';

// Normalización editorial reproducible e idempotente de los 19 manuales de La Puebla.
const root = process.cwd();
const updated = [];

for (let tema = 1; tema <= 19; tema += 1) {
  const folder = `tema-${String(tema).padStart(2, '0')}`;
  const file = path.join(root, 'content', 'la-puebla', folder, 'manual.md');
  if (!fs.existsSync(file)) continue;

  const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = original.split('\n');
  const body = [];

  for (const line of lines) {
    if (new RegExp(`^# La Puebla de Montalbán · Tema ${tema}(?: · Manual reconstruido)?\\s*$`).test(line)) continue;
    if (/^\*\*Estado(?: editorial)?:\*\*/.test(line)) continue;
    if (/^\*\*(?:Migrado|Publicado).*OpoWeb v2/.test(line)) continue;
    if (/^\*\*Fecha de revisión normativa:\*\*/.test(line)) continue;
    if (/^> \*\*Regla del proyecto:\*\*/.test(line)) continue;
    body.push(line);
  }

  while (body.length && !body[0].trim()) body.shift();

  const normalizedBody = body.map(line => {
    let current = line;

    // El H1 único se inserta en la cabecera; cualquier H1 del cuerpo se rebaja a H2.
    if (/^#\s+/.test(current)) current = current.replace(/^#\s+/, '## ');

    // Normaliza llamadas antiguas tanto en bloque de cita como en texto destacado simple.
    current = current.replace(
      /^>\s*\*\*(?:Trampa(?: de)? examen|Clave de examen|Idea clave):?\*\*\s*/i,
      '> ⚠️ **¡Foco Examen!:** '
    );
    current = current.replace(
      /^\*\*(?:Trampa(?: de)? examen|Clave de examen|Idea clave):?\*\*\s*/i,
      '> ⚠️ **¡Foco Examen!:** '
    );
    current = current.replace(
      /^>\s*(?:Trampa(?: de)? examen|Clave de examen|Idea clave):\s*/i,
      '> ⚠️ **¡Foco Examen!:** '
    );

    return current;
  });

  const header = [
    `# La Puebla de Montalbán · Tema ${tema}`,
    '',
    '**Estado editorial:** PUBLICADO  ',
    '**Fecha de revisión normativa:** 30 de julio de 2026.',
    ''
  ];

  const text = [...header, ...normalizedBody]
    .join('\n')
    .replace(/\n{4,}/g, '\n\n\n');

  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    updated.push(path.relative(root, file));
  }
}

console.log(updated.length ? `Normalizados ${updated.length} manuales:\n${updated.join('\n')}` : 'No hay cambios pendientes.');
