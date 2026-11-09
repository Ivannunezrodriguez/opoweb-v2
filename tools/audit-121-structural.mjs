import fs from 'node:fs';

const manifestPaths = [
  'data/programa.json',
  'data/programa-diputacion-administrativo-2026.json',
  'data/programa-diputacion-auxiliar-c2-2026.json',
  'data/programa-uc3m-auxiliar-administrativa-2026.json',
  'data/programa-olias-auxiliar-edificios-2026.json'
];
const read = file => fs.readFileSync(file, 'utf8');
const present = file => typeof file === 'string' && fs.existsSync(file);
const issues = [];
const totals = [];
const add = (level, programme, number, kind, message) => issues.push({ level, programme, number, kind, message });
const allPaths = new Set();

for (const manifest of manifestPaths) {
  const document = JSON.parse(read(manifest));
  const topics = document.temas;
  const data = { programme: manifest, total: topics.length, manuals: 0, matrices: 0, banks: 0, sources: 0, questions: 0, options: 0, statuses: {} };
  const numbers = new Set();
  for (const theme of topics) {
    const n = theme.numero;
    data.statuses[theme.estado] = (data.statuses[theme.estado] || 0) + 1;
    if (!Number.isInteger(n) || numbers.has(n)) add('ERROR', manifest, n, 'numero', 'Tema duplicado o número no entero');
    numbers.add(n);
    if (!theme.titulo?.trim()) add('ERROR', manifest, n, 'titulo', 'Falta el epígrafe del manifiesto');
    for (const kind of ['manual','matriz','preguntas']) {
      const file = theme[kind];
      if (!present(file)) {
        add('ERROR', manifest, n, kind, 'Archivo obligatorio inexistente: ' + String(file));
        continue;
      }
      if (allPaths.has(file)) add('WARN', manifest, n, kind, 'Ruta compartida entre temas: ' + file);
      allPaths.add(file);
      if (kind === 'manual') {
        data.manuals++;
        const text = read(file);
        if (text.length < 400) add('WARN', manifest, n, kind, 'Manual con menos de 400 caracteres');
        const operative = text.slice(0, 2500).match(/Estado editorial operativo[^:]*:\s*([A-Z_]+)/i);
        if (operative && operative[1] !== theme.estado) add('WARN', manifest, n, kind, 'Estado operativo del manual ' + operative[1] + ' distinto al manifiesto ' + theme.estado);
        if (!/¡Foco Examen!|Foco Examen/i.test(text)) add('WARN', manifest, n, kind, 'Sin marcador de Foco Examen');
        if (!/\|[^\n|]+\|/.test(text)) add('WARN', manifest, n, kind, 'Sin tabla Markdown detectable');
        if (!/^#{1,4}\s+\S/m.test(text)) add('WARN', manifest, n, kind, 'Sin encabezados Markdown');
      }
      if (kind === 'matriz') {
        data.matrices++;
        try {
          const mat = JSON.parse(read(file));
          if (mat.tema != null && Number(mat.tema) !== n) add('ERROR', manifest, n, kind, 'Número de tema en matriz no coincide');
          if (!(mat.epigrafeOficial || mat.epigrafe || mat.titulo || mat.programaOficial)) add('WARN', manifest, n, kind, 'La matriz no incorpora título o epígrafe oficial identificable');
          const coverage = mat.filas || mat.cobertura || mat.bloques || mat.apartados || [];
          if (!Array.isArray(coverage) || coverage.length === 0) add('WARN', manifest, n, kind, 'No hay matriz de cobertura en formato de lista estándar');
        } catch (e) { add('ERROR', manifest, n, kind, 'JSON de matriz ilegible: ' + e.message); }
      }
      if (kind === 'preguntas') {
        data.banks++;
        try {
          const bank = JSON.parse(read(file));
          const questions = Array.isArray(bank) ? bank : bank.preguntas;
          if (!Array.isArray(questions) || !questions.length) {
            add('ERROR', manifest, n, kind, 'Banco vacío o sin preguntas');
            continue;
          }
          const ids = new Set();
          for (const q of questions) {
            data.questions++;
            const qid = q.id || '(sin id)';
            if (!q.id || ids.has(q.id)) add('ERROR', manifest, n, kind, 'Identificador vacío/duplicado ' + qid);
            ids.add(q.id);
            const options = q.opciones;
            data.options += Array.isArray(options) ? options.length : 0;
            if (!Array.isArray(options) || options.length !== 4 || options.some(x => typeof x !== 'string' || !x.trim())) add('ERROR', manifest, n, kind, 'Opciones incorrectas en ' + qid);
            const correct = Number(q.correcta ?? q.respuestaCorrecta);
            if (!Number.isInteger(correct) || correct < 0 || correct > 3) add('ERROR', manifest, n, kind, 'Índice correcto incorrecto en ' + qid);
            if (!(q.pregunta || q.enunciado)?.trim()) add('ERROR', manifest, n, kind, 'Enunciado vacío en ' + qid);
            if (!q.justificacion?.trim()) add('ERROR', manifest, n, kind, 'Justificación ausente en ' + qid);
            if (!String(q.trampa ?? q.trampaExamen ?? '').trim()) add('WARN', manifest, n, kind, 'Falta trampa explicada en ' + qid);
            if (!String(q.referencia ?? q.referencias ?? '').trim()) add('WARN', manifest, n, kind, 'Sin referencia de fuente en ' + qid);
            if (q.respuestaLiteral && options?.[correct] !== q.respuestaLiteral) add('ERROR', manifest, n, kind, 'Respuesta literal no coincide con opción elegida: ' + qid);
          }
        } catch (e) { add('ERROR', manifest, n, kind, 'JSON de banco ilegible: ' + e.message); }
      }
    }
    const sourcesFile = theme.fuentes || theme.trazabilidad;
    if (present(sourcesFile)) data.sources++;
    else add('WARN', manifest, n, 'fuentes', 'Sin archivo de fuentes enlazado y existente');
  }
  for (let i = 1; i <= topics.length; i++) if (!numbers.has(i)) add('ERROR', manifest, i, 'numero', 'Falta tema consecutivo');
  totals.push(data);
}

const count = totals.reduce((sum, p) => sum + p.total, 0);
if (count !== 121) add('ERROR', 'GLOBAL', null, 'inventario', 'Inventario != 121; obtenido ' + count);
const report = {
  generatedAt: new Date().toISOString(),
  scope: 'Auditoría ESTRUCTURAL de rutas, JSON, preguntas y maquetación detectable (no cotejo BOE/BOP ni navegador E2E)',
  totals,
  summary: { themes: count, questions: totals.reduce((s,p)=>s+p.questions,0), options: totals.reduce((s,p)=>s+p.options,0), errors: issues.filter(x=>x.level==='ERROR').length, warnings: issues.filter(x=>x.level==='WARN').length },
  issues
};
fs.mkdirSync('audit/generated', { recursive: true });
fs.writeFileSync('audit/generated/audit-121-structural.json', JSON.stringify(report,null,2) + '\n');
console.log(JSON.stringify(report.summary));
for (const issue of issues) console.log(issue.level + ' ' + issue.programme + ' T' + issue.number + ' ' + issue.kind + ': ' + issue.message);
if (report.summary.errors) process.exitCode = 1;
