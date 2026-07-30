import fs from 'node:fs';

const file = 'assets/app.js';
const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const text = original.replace(
  /^\s*if \('serviceWorker' in navigator\) navigator\.serviceWorker\.register\('\.\/sw\.js'\)\.catch\(\(\) => \{\}\);\s*$/m,
  '    // Service worker desactivado: la aplicación usa peticiones directas para evitar bloqueos.'
);

if (text === original) {
  console.log('No se encontró un registro activo de service worker.');
  process.exit(0);
}

fs.writeFileSync(file, text, 'utf8');
console.log('Registro de service worker eliminado de assets/app.js');
