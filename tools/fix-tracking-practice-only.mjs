import fs from 'node:fs';

function save(file, next) {
  const current = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (current === next) return;
  fs.writeFileSync(file, next, 'utf8');
  console.log(`Actualizado: ${file}`);
}

{
  const file = 'assets/app.js';
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
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
  const siguienteHito = activeTracking.siguienteHito ? \`<div><span>Siguiente hito</span><strong>\${escapeHtml(activeTracking.siguienteHito)}</strong></div>\` : '';
  return \`<section class="panel tracking-panel" data-tracking-call="\${escapeHtml(activeCall.id)}"><div class="section-heading"><div><p class="eyebrow section-eyebrow">Seguimiento personal</p><h2>Plazos y estado de la OPE</h2></div><span class="status-pill \${personal.inscrito ? 'status-ok' : 'status-warning'}">\${personal.inscrito ? '✓ Estoy apuntado' : 'Inscripción no confirmada'}</span></div><div class="personal-status"><div><span>Estado</span><strong>\${escapeHtml(personal.estado)}</strong></div><div><span>Convocatoria</span><strong>\${escapeHtml(convocatoria)}</strong></div>\${siguienteHito}</div><p class="privacy-note">🔒 \${escapeHtml(personal.notaPrivacidad || 'Los datos personales no se publican en el repositorio.')}</p></section>\`;
}

function renderProgramme`
  );
  save(file, text);
}

{
  const file = 'assets/practice.js';
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (!text.includes("id: 'uc3m-auxiliar-administrativa-c2-2026'")) {
    text = text.replace("    questionPrefix: 'DIP-T'\n  }\n];", `    questionPrefix: 'DIP-T'
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
  save(file, text);
}
