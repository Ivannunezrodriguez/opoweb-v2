import fs from 'node:fs';

const file = 'assets/app.js';
const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
let text = original;

// No descargar ni normalizar todos los manuales al abrir el programa.
// La búsqueda inicial queda limitada a los títulos, evitando 19/40 peticiones y trabajo de CPU en segundo plano.
text = text.replace(
  /^\s*buildSearchIndexInBackground\(activeProgramme\);\s*$/m,
  '  // Índice completo desactivado al arrancar: evita cargar todos los manuales y bloquear el scroll.'
);

text = text.replace(
  'Busca en títulos al instante; el contenido se indexa en segundo plano.',
  'Busca por el título del tema. El manual se carga solo al abrirlo.'
);

if (text === original) {
  console.log('No hay cambios pendientes en assets/app.js');
  process.exit(0);
}

fs.writeFileSync(file, text, 'utf8');
console.log('Optimización de carga aplicada a assets/app.js');
