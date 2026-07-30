import fs from 'node:fs';
import path from 'node:path';

// Normalización editorial reproducible e idempotente de las portadas históricas.
const root = process.cwd();
const updated = [];

for (let tema = 1; tema <= 9; tema += 1) {
  const folder = `tema-${String(tema).padStart(2, '0')}`;
  const file = path.join(root, 'content', 'la-puebla', folder, 'manual.md');
  if (!fs.existsSync(file)) continue;

  const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = original.split('\n');
  const body = [];

  for (const line of lines) {
    if (/^# La Puebla de Montalbán · Tema \d+(?: · Manual reconstruido)?\s*$/.test(line)) continue;
    if (/^\*\*Estado(?: editorial)?:\*\*/.test(line)) continue;
    if (/^\*\*(?:Migrado|Publicado).*OpoWeb v2/.test(line)) continue;
    if (/^\*\*Fecha de revisión normativa:\*\*/.test(line)) continue;
    if (/^> \*\*Regla del proyecto:\*\*/.test(line)) continue;
    body.push(line);
  }

  while (body.length && !body[0].trim()) body.shift();

  const header = [
    `# La Puebla de Montalbán · Tema ${tema}`,
    '',
    '**Estado editorial:** PUBLICADO  ',
    '**Fecha de revisión normativa:** 30 de julio de 2026.',
    ''
  ];

  const text = [...header, ...body]
    .join('\n')
    .replace(/\n{4,}/g, '\n\n\n');

  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    updated.push(path.relative(root, file));
  }
}

console.log(updated.length ? `Normalizados ${updated.length} manuales:\n${updated.join('\n')}` : 'No hay cambios pendientes.');
