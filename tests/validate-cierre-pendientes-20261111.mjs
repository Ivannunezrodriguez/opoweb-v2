import fs from 'node:fs';
import assert from 'node:assert/strict';

const load = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const registry = load('data/cierre-pendientes-2026.json');
assert.equal(registry.pendientes.length, 5, 'Se esperan cinco bloqueos iniciales, sin duplicaciones');
assert.equal(new Set(registry.pendientes.map(item => item.id)).size, 5);
const blocked = [];
for (const item of registry.pendientes) {
  const programme = load(item.programa);
  const topic = programme.temas.find(t => t.numero === item.tema);
  assert.ok(topic, 'No existe el tema de ' + item.id);
  const matrix = load(item.matriz);
  const matrixStatus = matrix.estado ?? matrix.estadoEditorial;
  assert.equal(matrixStatus, topic.estado, 'Estados de programa y matriz no coinciden: ' + item.id);
  assert.ok(Array.isArray(item.bloqueos) && item.bloqueos.length > 0, 'Sin requisitos de auditoría: ' + item.id);
  for (const key of item.bloqueos) {
    assert.ok(registry.criterios[key], 'Criterio sin descripción: ' + key);
    assert.ok(Object.hasOwn(item.evidenciaCierre, key), 'No hay campo para evidencia: ' + key);
    const evidence = item.evidenciaCierre[key];
    if (evidence === null) {
      blocked.push(item.id + ':' + key);
    } else {
      assert.ok(typeof evidence === 'object', 'Evidencia debe ser un objeto: '+item.id+' '+key);
      assert.ok(typeof evidence.ruta === 'string' && evidence.ruta.length > 3, 'Falta ruta: '+key);
      assert.ok(fs.existsSync(evidence.ruta), 'No existe archivo de evidencia '+evidence.ruta);
      assert.ok(typeof evidence.fecha === 'string' && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(evidence.fecha), 'Fecha no documentada: '+key);
      const body = fs.readFileSync(evidence.ruta, 'utf8');
      assert.ok(body.trim().length > 80, 'Evidencia vacía: '+evidence.ruta);
    }
  }
  if (topic.estado === 'AUDITADO') {
    const absent = item.bloqueos.filter(key => item.evidenciaCierre[key] === null);
    assert.equal(absent.length, 0, 'Promoción sin cierre documental de '+item.id+': '+absent.join(', '));
  }
}
console.log('Control de bloqueos: '+registry.pendientes.length+' temas, '+blocked.length+' pruebas todavía pendientes. Sin promoción sin respaldo.');
