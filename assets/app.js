const app = document.querySelector('#app');
const THEME_KEY = 'opoweb-theme';
const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';

const CALLS = [
  {
    id: 'la-puebla-auxiliar-administrativo-2026',
    label: 'La Puebla de Montalbán · Auxiliar Administrativo C2',
    shortLabel: 'La Puebla · C2',
    programmeUrl: 'data/programa.json',
    trackingUrl: 'data/seguimiento-la-puebla.json',
    contentRoot: 'content/la-puebla',
    availableThemes: 19,
    practiceUrl: 'practice.html'
  },
  {
    id: 'diputacion-toledo-administrativo-c1-2026',
    label: 'Diputación Provincial de Toledo · Administrativo C1',
    shortLabel: 'Diputación de Toledo · C1',
    programmeUrl: 'data/programa-diputacion-administrativo-2026.json',
    contentRoot: 'content/diputacion-toledo',
    availableThemes: 25,
    practiceUrl: null
  }
];

let activeCall = null;
let activeProgramme = null;
let activeTracking = null;
const searchIndex = new Map();

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/(https:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

function isTableSeparator(line) {
  return /^\|?\s*:?-{3,}/.test(line) && line.includes('|');
}

function tableCells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html = [];
  let index = 0;
  let inCode = false;
  let code = [];

  while (index < lines.length) {
    const line = lines[index];
    if (line.startsWith('```')) {
      if (inCode) { html.push(`<pre>${escapeHtml(code.join('\n'))}</pre>`); code = []; }
      inCode = !inCode;
      index += 1;
      continue;
    }
    if (inCode) { code.push(line); index += 1; continue; }
    if (!line.trim()) { index += 1; continue; }
    if (/^---+$/.test(line.trim())) { html.push('<hr>'); index += 1; continue; }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = Math.min(4, heading[1].length + 1);
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      html.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
      index += 1;
      continue;
    }
    if (line.trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const head = tableCells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      html.push(`<div class="table-wrap"><table><thead><tr>${head.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*-\s+/, ''));
        index += 1;
      }
      html.push(`<ul>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
        index += 1;
      }
      html.push(`<ol>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length && lines[index].trim() &&
      !/^(#{1,4})\s+/.test(lines[index]) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^\s*-\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !lines[index].startsWith('> ') &&
      !lines[index].startsWith('```') &&
      !(lines[index].trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1]))) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
  }
  return html.join('\n');
}

function normalise(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  const button = document.querySelector('#theme-toggle');
  if (button) button.textContent = theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved || preferred);
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

function themePath(theme, kind) {
  if (theme[kind]) return theme[kind];
  const folder = `tema-${String(theme.numero).padStart(2, '0')}`;
  return `${activeCall.contentRoot}/${folder}/${kind}.json`.replace('/manual.json', '/manual.md');
}

function isThemeAvailable(theme) {
  return Boolean(theme.manual) || theme.numero <= activeCall.availableThemes;
}

function themeStatus(theme) {
  return isThemeAvailable(theme) ? 'PUBLICADO' : 'PENDIENTE';
}

function badge(theme) {
  const published = themeStatus(theme) === 'PUBLICADO';
  return `<span class="badge ${published ? 'approved' : 'pending'}">${published ? 'Contenido disponible' : 'Pendiente de desarrollo'}</span>`;
}

function updateHeader() {
  const title = document.querySelector('.site-header h1');
  const subtitle = document.querySelector('.site-header .subtitle');
  const practice = document.querySelector('.site-header a[href="practice.html"]');
  if (title) title.textContent = activeCall.label;
  if (subtitle) subtitle.textContent = 'Fuente editorial única · programa oficial, legislación vigente y trazabilidad.';
  document.title = `OpoWeb v2 · ${activeCall.shortLabel}`;
  if (practice) practice.hidden = !activeCall.practiceUrl;
}

async function buildSearchIndex(programme) {
  searchIndex.clear();
  const available = programme.temas.filter(isThemeAvailable);
  await Promise.all(available.map(async theme => {
    let manualText = '';
    try {
      const response = await fetch(themePath(theme, 'manual'), { cache: 'no-cache' });
      if (response.ok) manualText = await response.text();
    } catch (_) {}
    searchIndex.set(theme.numero, normalise(`${theme.titulo}\n${manualText}`));
  }));
}

function sourceText(programme) {
  const c = programme.convocatoria || {};
  if (c.fuentePrograma) return `${c.fuentePrograma.publicacion} · CSV ${c.fuentePrograma.codigoVerificacion}`;
  return `${c.bop || 'Programa oficial'} · CSV ${c.codigoVerificacion || 'no indicado'}`;
}

function callSelector() {
  return `<label class="search-box convocatoria-selector"><span>Convocatoria</span><select id="call-selector">${CALLS.map(call => `<option value="${call.id}" ${call.id === activeCall.id ? 'selected' : ''}>${escapeHtml(call.label)}</option>`).join('')}</select></label>`;
}

function renderTracking() {
  if (!activeTracking) return '';
  const personal = activeTracking.situacionPersonal;
  return `<section class="panel tracking-panel"><div class="section-heading"><div><p class="eyebrow section-eyebrow">Seguimiento personal</p><h2>Plazos y estado de la OPE</h2></div><span class="status-pill ${personal.inscrito ? 'status-ok' : 'status-warning'}">${personal.inscrito ? '✓ Estoy apuntado' : 'Inscripción no confirmada'}</span></div><div class="personal-status"><div><span>Estado</span><strong>${escapeHtml(personal.estado)}</strong></div><div><span>Convocatoria</span><strong>4 plazas · C2 · concurso-oposición libre</strong></div></div><p class="privacy-note">🔒 ${escapeHtml(personal.notaPrivacidad)}</p></section>`;
}

function renderProgramme(query = '') {
  const themes = activeProgramme.temas;
  const available = themes.filter(isThemeAvailable).length;
  const pending = themes.length - available;
  const term = normalise(query.trim());
  const visible = term
    ? themes.filter(theme => normalise(theme.titulo).includes(term) || searchIndex.get(theme.numero)?.includes(term))
    : themes;

  app.innerHTML = `<section class="panel intro"><div class="intro-row"><div><h2>${escapeHtml(activeCall.shortLabel)}</h2><p>Programa oficial de <strong>${themes.length} temas</strong>. Los temas disponibles se cargan directamente desde el repositorio.</p></div>${callSelector()}</div><div class="summary-grid"><div class="summary-card"><strong>${themes.length}</strong><span>temas oficiales</span></div><div class="summary-card"><strong>${available}</strong><span>con contenido</span></div><div class="summary-card"><strong>${pending}</strong><span>pendientes</span></div></div></section>${renderTracking()}<section class="panel"><div class="section-heading"><div><h2>Programa oficial</h2><p class="notice">Fuente: ${escapeHtml(sourceText(activeProgramme))}.</p></div><label class="search-box"><span>Buscar</span><input id="theme-search" type="search" placeholder="Plazos, recursos, contratos, Windows…" value="${escapeHtml(query)}" autocomplete="off"></label></div><p class="search-count">${term ? `${visible.length} resultado(s)` : 'Busca en títulos y en el contenido de los manuales disponibles.'}</p><div class="theme-grid">${visible.map(theme => `<button class="theme-card" type="button" data-theme="${theme.numero}" ${isThemeAvailable(theme) ? '' : 'aria-disabled="true"'}>${badge(theme)}<h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3></button>`).join('')}</div></section>`;

  document.querySelector('#call-selector')?.addEventListener('change', event => loadCall(event.target.value));
  document.querySelector('#theme-search')?.addEventListener('input', event => renderProgramme(event.target.value));
  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', () => {
      const theme = activeProgramme.temas.find(item => item.numero === Number(button.dataset.theme));
      if (theme && isThemeAvailable(theme)) openTheme(theme);
    });
  });
}

function normaliseQuestions(payload) {
  const raw = Array.isArray(payload) ? payload : payload.preguntas || [];
  return raw.map(item => ({
    id: item.id,
    text: item.pregunta || item.enunciado,
    options: item.opciones || [],
    correct: Number(item.correcta),
    explanation: item.justificacion || '',
    trap: item.trampa || '',
    reference: item.referencia || ''
  }));
}

function renderTest(theme, questions) {
  return `<section id="theme-test" class="panel"><h2>Test del Tema ${theme.numero}</h2><p class="search-count">${questions.length} preguntas. Responde y corrige al final.</p><form id="test-form">${questions.map((question, qIndex) => `<fieldset class="question-card"><legend><strong>${qIndex + 1}. ${escapeHtml(question.text)}</strong></legend>${question.options.map((option, oIndex) => `<label class="answer-option"><input type="radio" name="q-${qIndex}" value="${oIndex}"><span>${escapeHtml(option)}</span></label>`).join('')}<div class="answer-feedback" id="feedback-${qIndex}" hidden></div></fieldset>`).join('')}<button class="btn" type="submit">Corregir test</button></form></section>`;
}

function activateTest(questions) {
  document.querySelector('#test-form')?.addEventListener('submit', event => {
    event.preventDefault();
    let correctCount = 0;
    questions.forEach((question, index) => {
      const selected = Number(new FormData(event.currentTarget).get(`q-${index}`));
      const hasAnswer = Number.isInteger(selected);
      const correct = hasAnswer && selected === question.correct;
      if (correct) correctCount += 1;
      const feedback = document.querySelector(`#feedback-${index}`);
      feedback.hidden = false;
      feedback.className = `answer-feedback ${correct ? 'correct' : 'incorrect'}`;
      feedback.innerHTML = `<strong>${correct ? 'Correcta' : 'Incorrecta'}.</strong> ${escapeHtml(question.explanation)}${question.trap ? `<br><em>Trampa: ${escapeHtml(question.trap)}</em>` : ''}${question.reference ? `<br><small>Referencia: ${escapeHtml(question.reference)}</small>` : ''}`;
    });
    const result = document.createElement('div');
    result.className = 'notice';
    result.innerHTML = `<strong>Resultado: ${correctCount}/${questions.length}</strong> · ${Math.round((correctCount / questions.length) * 100)} %`;
    event.currentTarget.prepend(result);
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

async function openTheme(theme) {
  history.replaceState(null, '', `#${activeCall.id}/tema-${theme.numero}`);
  app.innerHTML = `<div class="toolbar sticky-toolbar"><button id="back" class="btn secondary" type="button">← Programa</button><button id="top" class="btn secondary" type="button">↑ Inicio</button></div><section class="panel">${badge(theme)}<h2>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h2><p class="notice">Contenido conectado a la convocatoria ${escapeHtml(activeCall.shortLabel)}.</p></section><article id="manual" class="panel manual"><p>Cargando manual…</p></article><section id="test-slot"></section>`;
  document.querySelector('#back').addEventListener('click', () => { history.replaceState(null, '', location.pathname); renderProgramme(); });
  document.querySelector('#top').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  try {
    const [manualResponse, questionsResponse] = await Promise.all([
      fetch(themePath(theme, 'manual'), { cache: 'no-cache' }),
      fetch(themePath(theme, 'preguntas'), { cache: 'no-cache' })
    ]);
    if (!manualResponse.ok) throw new Error(`Manual: HTTP ${manualResponse.status}`);
    document.querySelector('#manual').innerHTML = renderMarkdown(await manualResponse.text());
    if (questionsResponse.ok) {
      const questions = normaliseQuestions(await questionsResponse.json());
      if (questions.length) {
        document.querySelector('#test-slot').innerHTML = renderTest(theme, questions);
        activateTest(questions);
      }
    }
  } catch (error) {
    document.querySelector('#manual').innerHTML = `<p class="notice warning">No se ha podido cargar el tema: ${escapeHtml(error.message)}.</p>`;
  }
}

async function loadCall(id, selectedTheme = null) {
  activeCall = CALLS.find(call => call.id === id) || CALLS[0];
  localStorage.setItem(SELECTED_CALL_KEY, activeCall.id);
  updateHeader();
  app.innerHTML = '<section class="panel"><h2>Cargando convocatoria…</h2></section>';
  const programmeResponse = await fetch(activeCall.programmeUrl, { cache: 'no-cache' });
  if (!programmeResponse.ok) throw new Error(`Programa: HTTP ${programmeResponse.status}`);
  activeProgramme = await programmeResponse.json();
  activeTracking = null;
  if (activeCall.trackingUrl) {
    try {
      const response = await fetch(activeCall.trackingUrl, { cache: 'no-cache' });
      if (response.ok) activeTracking = await response.json();
    } catch (_) {}
  }
  await buildSearchIndex(activeProgramme);
  if (selectedTheme) {
    const theme = activeProgramme.temas.find(item => item.numero === selectedTheme);
    if (theme && isThemeAvailable(theme)) return openTheme(theme);
  }
  renderProgramme();
}

async function boot() {
  initTheme();
  try {
    const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
    const saved = localStorage.getItem(SELECTED_CALL_KEY);
    await loadCall(route?.[1] || saved || CALLS[0].id, route ? Number(route[2]) : null);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();