import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const load = (path) => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const index = load('data/uc3m-24-bloques-20261119.json');
const sources = [
  'data/uc3m-repasos-complementarios-20261106.json',
  'data/uc3m-repaso-temas-13-20-20261106.json',
  'data/uc3m-presupuesto-supuestos-20261106.json',
  'data/uc3m-repaso-juridico-t02-t07-20261106.json',
  'data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json'
];
const packs = sources.flatMap(path => {
  const value = load(path);
  return Array.isArray(value.paquetes)
    ? value.paquetes
    : [{ id: value.id, preguntas: value.preguntas }];
});
const byId = new Map(packs.map(pack => [pack.id, pack]));
assert.equal(byId.size, packs.length, 'No puede haber IDs de paquete repetidos.');
assert.equal(index.blocks.length, 24, 'Debe haber exactamente 24 apartados.');
assert.equal(index.total, 24);
assert.equal(new Set(index.blocks.map(b => b.id)).size, 24, 'No puede haber IDs de apartado repetidos.');
assert.deepEqual([...new Set(index.blocks.map(b => b.tema))].sort((a,b)=>a-b), [8,9,10,11,12,13,14,15,18]);
const questionIds = new Set();
for (const pack of packs) {
  assert.ok(Array.isArray(pack.preguntas) && pack.preguntas.length, 'Paquete vacío ' + pack.id);
  for (const q of pack.preguntas) {
    assert.ok(q.id && !questionIds.has(q.id), 'Pregunta duplicada o sin ID: ' + q.id);
    questionIds.add(q.id);
    assert.ok(q.pregunta && q.justificacion && q.referencia, 'Pregunta incompleta: ' + q.id);
    assert.equal(q.opciones?.length, 4, 'No tiene cuatro opciones: ' + q.id);
    assert.ok(Number.isInteger(q.correcta) && q.correcta >= 0 && q.correcta <= 3, 'Clave inválida: ' + q.id);
  }
}
for (const block of index.blocks) {
  assert.ok(existsSync(resolve(root, block.material)), 'No existe material ' + block.material);
  const pack = byId.get(block.practicaPackId);
  assert.ok(pack, 'Paquete inexistente: ' + block.practicaPackId);
  assert.ok(pack.preguntas.some(q => q.tema === block.tema), 'Enlace sin preguntas del tema ' + block.tema);
}
const js = readFileSync(resolve(root, 'assets/practice.js'), 'utf8');
const page = readFileSync(resolve(root, 'uc3m-24-bloques.html'), 'utf8');
const practice = readFileSync(resolve(root, 'practice.html'), 'utf8');
assert.match(js, /requestedPack\.preguntas\.filter\(question => question\.tema === filterTema\)/, 'No existe filtro por tema.');
assert.match(js, /params\.get\('temaRepaso'\)/, 'Falta lectura del tema en la URL.');
assert.match(js, /repasoQuery/, 'No se conserva el enlace profundo.');
assert.match(page, /temaRepaso=/, 'No se incluye el filtro en el enlace.');
assert.match(practice, /practice\.js\?v=/, 'Sin versión de caché para el motor.');
console.log('OK: 24 apartados, 9 temas, ' + packs.length + ' paquetes, ' + questionIds.size + ' preguntas existentes y enlaces temáticos válidos.');
