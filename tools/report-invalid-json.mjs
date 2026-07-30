import fs from 'node:fs';
import path from 'node:path';

const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.endsWith('.json')) files.push(full);
  }
}
walk('data');
walk('content');

const errors = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  try {
    JSON.parse(text);
  } catch (error) {
    errors.push({ file, error: error.message });
  }
}

const report = [
  '# Diagnóstico de JSON',
  '',
  `Archivos comprobados: **${files.length}**.`,
  `Errores encontrados: **${errors.length}**.`,
  '',
  ...errors.map(item => `- \`${item.file}\`: ${item.error}`),
  ''
].join('\n');
fs.writeFileSync('JSON_ERRORS.md', report, 'utf8');
console.log(report);
