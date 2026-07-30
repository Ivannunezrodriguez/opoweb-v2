import fs from 'node:fs';
import path from 'node:path';

// Relanzamiento 2026-07-30: corrige seguimiento, práctica y escapes JSON inválidos.
function writeIfChanged(file, next) {
  const current = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (current === next) return false;
  fs.writeFileSync(file, next, 'utf8');
  console.log(`Actualizado: ${file}`);
  return true;
}

function repairInvalidJsonEscapes() {
  const roots = ['data', 'content'];
  const files = [];
  const walk = dir => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && full.endsWith('.json')) files.push(full);
    }
  };
  roots.forEach(walk);

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    try {
      JSON.parse(original);
      continue;
    } catch (firstError) {
      const repaired = original.replace(/\\(?!["\\/bfnrtu])/g, '\\\\');
      try {
        JSON.parse(repaired);
      } catch (secondError) {
        throw new Error(`${file}: ${secondError.message}`);
      }
      writeIfChanged(file, repaired);
      console.log(`JSON reparado: ${file} (${firstError.message})`);
    }
  }
}

function patchApp() {
  const file = 'assets/app.js';
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const original = text;

  text = text.replace(
    "programmeUrl: 'data/programa-diputacion-administrativo-2026.json',\n    contentRoot: 'content/diputacion-toledo',\n    availableThemes: 40,\n    practiceUrl: null",
    "programmeUrl: 'data/programa-diputacion-administrativo-2026.json',\n    trackingUrl: 'data/seguimiento-diputacion-c1.json',\n    contentRoot: 'content/diputacion-toledo',\n    availableThemes: 40,\n    practiceUrl: 'practice.html'"
  );

  text = text.replace(
    "programmeUrl: 'data/programa-uc3m-auxiliar-administrativa-2026.json',\n    contentRoot: 'content/uc3m',\n    availableThemes: 0,\n    practiceUrl: null",
    "programmeUrl: 'data/programa-uc3m-auxiliar-administrativa-2026.json',\n    trackingUrl: 'data/seguimiento-uc3m.json',\n    contentRoot: 'content/uc3m',\n    availableThemes: 20,\n    practiceUrl: 'practice.html'"
  );

  text = text.replace(
    /function renderTracking\(\) \{[\s\S]*?\n\}\n\nfunction renderProgramme/,
    `function renderTracking() {
  if (!activeTracking?.situacionPersonal) return '';
  const personal = activeTracking.situacionPersonal;
  const convocatoria = personal.convocatoria || activeCall.label;
  const siguienteHito = activeTracking.siguienteHito
    ? \`<div><span>Siguiente hito</span><strong>\${escapeHtml(activeTracking.siguienteHito)}</strong></div>\`
    : '';
  return \`<section class="panel tracking-panel" data-tracking-call="\${escapeHtml(activeCall.id)}"><div class="section-heading"><div><p class="eyebrow section-eyebrow">Seguimiento personal</p><h2>Plazos y estado de la OPE</h2></div><span class="status-pill \${personal.inscrito ? 'status-ok' : 'status-warning'}">\${personal.inscrito ? '✓ Estoy apuntado' : 'Inscripción no confirmada'}</span></div><div class="personal-status"><div><span>Estado</span><strong>\${escapeHtml(personal.estado)}</strong></div><div><span>Convocatoria</span><strong>\${escapeHtml(convocatoria)}</strong></div>\${siguienteHito}</div><p class="privacy-note">🔒 \${escapeHtml(personal.notaPrivacidad || 'Los datos personales no se publican en el repositorio.')}</p></section>\`;
}

function renderProgramme`
  );

  if (text === original) console.log('assets/app.js ya estaba actualizado');
  else writeIfChanged(file, text);
}

function patchRuntimeEnhancements() {
  const file = 'assets/runtime-enhancements.js';
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  text = text.replace("  './diputacion-tracking.js',\n", '');
  writeIfChanged(file, text);
}

function patchPractice() {
  const file = 'assets/practice.js';
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const marker = "  {\n    id: 'diputacion-toledo-administrativo-c1-2026',";
  if (!text.includes("id: 'uc3m-auxiliar-administrativa-c2-2026'")) {
    const endMarker = "    questionPrefix: 'DIP-T'\n  }\n];";
    text = text.replace(endMarker, `    questionPrefix: 'DIP-T'
  },
  {
    id: 'uc3m-auxiliar-administrativa-c2-2026',
    label: 'Universidad Carlos III de Madrid · Escala Auxiliar Administrativa C2',
    shortLabel: 'UC3M · Auxiliar C2',
    programmeUrl: 'data/programa-uc3m-auxiliar-administrativa-2026.json',
    contentRoot: 'content/uc3m',
    themeCount: 20,
    supuestosUrl: 'content/uc3m/supuestos-practicos.json',
    simulacrosUrl: 'content/uc3m/simulacros.json',
    progressKey: 'opoweb-uc3m-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'UC3M-T'
  }
];`);
  }
  if (!text.includes(marker)) throw new Error('No se ha localizado la configuración de Diputación en practice.js');
  writeIfChanged(file, text);
}

repairInvalidJsonEscapes();
patchApp();
patchRuntimeEnhancements();
patchPractice();
