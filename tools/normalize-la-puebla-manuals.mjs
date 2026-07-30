import fs from 'node:fs';
import path from 'node:path';

// Normalización editorial reproducible de las portadas históricas de La Puebla.
const root = process.cwd();
const updated = [];

for (let tema = 1; tema <= 9; tema += 1) {
  const folder = `tema-${String(tema).padStart(2, '0')}`;
  const file = path.join(root, 'content', 'la-puebla', folder, 'manual.md');
  if (!fs.existsSync(file)) continue;

  const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  let text = original;

  text = text.replace(
    new RegExp(`^# La Puebla de Montalbán · Tema ${tema}(?: · Manual reconstruido)?\\s*$`, 'm'),
    `# La Puebla de Montalbán · Tema ${tema}`
  );

  const lines = text.split('\n');
  const cleaned = [];
  let headerInserted = false;

  for (const line of lines) {
    if (/^\*\*Estado:\*\*/.test(line)) {
      if (!headerInserted) {
        cleaned.push('**Estado editorial:** PUBLICADO  ');
        cleaned.push('**Fecha de revisión normativa:** 30 de julio de 2026.');
        headerInserted = true;
      }
      continue;
    }
    if (/^\*\*(?:Migrado|Publicado) en OpoWeb v2/.test(line)) continue;
    if (/^\*\*Fecha de revisión normativa:\*\*/.test(line)) {
      if (!headerInserted) {
        cleaned.push('**Estado editorial:** PUBLICADO  ');
        cleaned.push('**Fecha de revisión normativa:** 30 de julio de 2026.');
        headerInserted = true;
      }
      continue;
    }
    if (/^> \*\*Regla del proyecto:\*\*/.test(line)) continue;
    cleaned.push(line);
  }

  text = cleaned.join('\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/^(# La Puebla[^\n]+)\n{3,}/, '$1\n\n');

  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    updated.push(path.relative(root, file));
  }
}

console.log(updated.length ? `Normalizados ${updated.length} manuales:\n${updated.join('\n')}` : 'No hay cambios pendientes.');
