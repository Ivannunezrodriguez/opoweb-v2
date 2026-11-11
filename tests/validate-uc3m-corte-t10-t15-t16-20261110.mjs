import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const programme = json('data/programa-uc3m-auxiliar-administrativa-2026.json');
const dossier = read('content/uc3m/CONTROL_CORTE_T10_T15_T16_20261110.md');

for (const number of [10, 15, 16]) {
  const topic = programme.temas.find(item => item.numero === number);
  assert.ok(topic, 'Falta tema UC3M ' + number);
  assert.equal(topic.estado, 'EN_REVISION_USUARIO', 'No promover sin fecha primaria: T' + number);
  const matrix = json('content/uc3m/tema-' + number + '/matriz.json');
  assert.equal(matrix.estado, 'EN_REVISION_USUARIO', 'Estado matriz indebido: T' + number);
  const cutoff = matrix.controlCorteNormativo20261110;
  assert.ok(cutoff, 'Falta trazabilidad del corte: T' + number);
  assert.equal(cutoff.fechaPublicacionPrimaria, 'NO_ACREDITADA');
  assert.equal(cutoff.fuenteRegla, 'BOE-A-2026-14624 base primera.7');
  assert.equal(cutoff.certificacionIntegral, false);
  assert.ok(cutoff.documentoCotejo.includes('CONTROL_CORTE_T10_T15_T16_20261110.md'));
}
assert.ok(dossier.includes('23/10/2026'), 'Falta vigencia de TREBEP Ley 4/2026');
assert.ok(dossier.includes('08/06/2026'), 'Falta corroboración estatutaria UC3M 2026');
assert.ok(dossier.includes('RD 905/2025'), 'Falta sentencia que afecta RD 822/2021');
assert.ok(dossier.includes('fecha oficial exacta de publicación sigue sin certificarse'));


const t15Matrix = json('content/uc3m/tema-15/matriz.json');
assert.equal(t15Matrix.controlDefensoriaRefundidoLOSU20261110?.certificacionIntegral, false);
assert.equal(t15Matrix.controlDefensoriaRefundidoLOSU20261110?.articuloLOSU, '43.4');
const t15Manual = read('content/uc3m/tema-15/manual.md');
const t15Sources = read('content/uc3m/tema-15/fuentes.md');
assert.ok(t15Manual.includes('Defensoría universitaria: lectura conjunta de Estatutos refundidos y LOSU'));
assert.ok(t15Manual.includes('mitad más uno'));
assert.ok(t15Manual.includes('mayoría simple'));
assert.ok(t15Manual.includes('art. 44.3 LOSU'));
assert.ok(t15Manual.includes('12/04/2026'), 'Falta vencimiento de los 3 años LOSU');
assert.ok(t15Sources.includes('12/04/2026'), 'Falta prueba de fecha transitoria en fuentes');
assert.ok(t15Manual.includes('no puede concluirse únicamente'), 'Falta reserva: vencimiento no es adaptación');
for (const content of [t15Manual, t15Sources]) {
  assert.ok(content.includes('BOCM-20260615-17'), 'Falta fuente oficial de creación de escalas UC3M 2026');
  assert.ok(content.includes('Escala Auxiliar de Servicios e Información'), 'Falta distinción de escala C2 distinta');
  assert.ok(content.includes('Escala Auxiliar Administrativa'), 'Falta identificación de convocatoria C2 34 plazas');
  assert.ok(content.includes('Mismo subgrupo C2 no equivale a misma escala'), 'Falta Foco Examen contra confusión de escalas');
}

const t16Bank = json('content/uc3m/tema-16/preguntas.json');
assert.equal(t16Bank.preguntas.length, 21);
const primary = t16Bank.controlFuentePrimariaPermanencia20261110;
assert.ok(primary, 'Falta control de procedencia UC3M 2018');
assert.equal(primary.corteOficialPrimario, 'NO_ACREDITADO');
assert.equal(primary.respuestasModificadas, 0);
const expectedArticles = {
  '008': 'arts. 5–7',
  '010': 'art. 7.2–3',
  '011': 'arts. 1.1 y 1.3',
  '012': 'art. 1.2.a–b',
  '013': 'art. 2'
};
for (const [suffix, article] of Object.entries(expectedArticles)) {
  const question = t16Bank.preguntas.find(item => item.id === 'UC3M-T16-' + suffix);
  assert.ok(question, 'Falta pregunta T16-' + suffix);
  assert.ok(question.referencia.includes('uc3m.es/ss/Satellite'), 'No usa PDF institucional: T16-' + suffix);
  assert.ok(question.referencia.includes(article), 'No cita artículo: T16-' + suffix);
}
const historicalSources = read('content/uc3m/tema-16/fuentes.md');
assert.ok(historicalSources.includes('Auditoría directa de fuente institucional de permanencia/matrícula'), 'Falta contraste académico T16');


// Blindaje focal: el banco no puede incorporar sin nueva auditoría las normas posteriores al corte probable.
const t10 = json('content/uc3m/tema-10/preguntas.json');
const t15 = json('content/uc3m/tema-15/preguntas.json');
assert.equal(t10.preguntas.length, 12);
assert.equal(t15.preguntas.length, 21);
assert.equal(t16Bank.preguntas.length, 21);
for (const [bank, forbiddenTerms, label] of [
  [t10, ['art. 49.e', 'artículo 49.e', '49.e)'], 'T10 TREBEP 49.e'],
  [t16Bank, ['art. 22.4', 'artículo 22.4', 'RD 905/2025'], 'T16 RD 822/2021 art. 22.4']
]) {
  for (const q of bank.preguntas) {
    const statement = ((q.pregunta || '') + ' ' + (q.referencia || '')).toLowerCase();
    assert.ok(!forbiddenTerms.some(term => statement.includes(term.toLowerCase())),
      'Nuevo supuesto temporal requiere auditoría específica: ' + label + ', ' + q.id);
  }
}
for (const suffix of ['013','014','015','016']) {
  const q = t15.preguntas.find(item => item.id === 'UC3M-T15-' + suffix);
  assert.ok(q, 'Falta pregunta de Defensor '+suffix);
  assert.ok(q.pregunta.includes('Estatutos UC3M refundidos de 2003/2009'),
    'Debe explicitarse la versión estatutaria histórica '+suffix);
  assert.ok(q.referencia.includes('LOSU art. 43.4'), 'Falta reserva LOSU '+suffix);
}
assert.ok(t15.controlPrecaucionLOSU20261111);
assert.equal(t15.controlPrecaucionLOSU20261111.cambiosClave, 0);
assert.ok(dossier.includes('Riesgo temporal a nivel de pregunta'), 'Falta matriz de impacto T10/T16');

const t16Manual = read('content/uc3m/tema-16/manual.md');
for (const file of ['content/uc3m/tema-15/fuentes.md', 'content/uc3m/tema-16/fuentes.md']) {
  const contents = read(file);
  assert.ok(contents.includes('Real Decreto 855/2026'), 'Falta nueva derogación del Estatuto de estudiantes en '+file);
  assert.ok(contents.includes('23/10/2026'), 'Falta entrada en vigor del nuevo Estatuto en '+file);
  assert.ok(contents.includes('RD 1791/2010'), 'Falta reglamento derogado en '+file);
}
assert.ok(t16Manual.includes('Cambio normativo posterior al corte probable: Estatuto del Estudiantado'));
assert.ok(dossier.includes('Nueva norma estatal posterior al corte probable: RD 855/2026'));
for (const bank of [t15,t16Bank]) {
  for(const q of bank.preguntas) {
    const directText=((q.pregunta||'')+' '+(q.referencia||'')).toLowerCase();
    assert.ok(!directText.includes('1791/2010') && !directText.includes('855/2026'),
      'Nueva referencia a estatuto de estudiantes requiere corte temporal expreso: '+q.id);
  }
}


console.log('UC3M T10/T15/T16: corte no acreditado, banco T16 de permanencia trazado a fuente primaria UC3M.');
