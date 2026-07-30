const app = document.querySelector('#app');
const THEME_KEY = 'opoweb-theme';
const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';
const REQUEST_TIMEOUT_MS = 12000;

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
    trackingUrl: 'data/seguimiento-diputacion-c1.json',
    contentRoot: 'content/diputacion-toledo',
    availableThemes: 40,
    practiceUrl: 'practice.html'
  },
  {
    id: 'uc3m-auxiliar-administrativa-c2-2026',
    label: 'Universidad Carlos III de Madrid · Escala Auxiliar Administrativa C2',
    shortLabel: 'UC3M · Auxiliar C2',
    programmeUrl: 'data/programa-uc3m-auxiliar-administrativa-2026.json',
    trackingUrl: 'data/seguimiento-uc3m.json',
    contentRoot: 'content/uc3m',
    availableThemes: 20,
    practiceUrl: 'practice.html'
  }
];

let activeCall = null;
let activeProgramme = null;
let activeTracking = null;
let activeSearchQuery = '';
let searchBuildToken = 0;
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

async function fetchWithTimeout(url, options = {}, timeout = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
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

function initialiseSearchIndex(programme) {
  searchIndex.clear();
  programme.temas.forEach(theme => searchIndex.set(theme.numero, normalise(theme.titulo)));
}

async function buildSearchIndexInBackground(programme) {
  const token = ++searchBuildToken;
  const available = programme.temas.filter(isThemeAvailable);
  const concurrency = 3;
  let cursor = 0;

  async function worker() {
    while (cursor < available.length && token === searchBuildToken) {
      const theme = available[cursor++];
      try {
        const response = await fetchWithTimeout(themePath(theme, 'manual'), { cache: 'force-cache' }, 8000);
        if (response.ok && token === searchBuildToken) {
          const manualText = await response.text();
          searchIndex.set(theme.numero, normalise(`${theme.titulo}\n${manualText}`));
        }
      } catch (_) {}
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, available.length) }, worker));
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
  if (!activeTracking?.situacionPersonal) return '';
  const personal = activeTracking.situacionPersonal;
  const convocatoria = personal.convocatoria || activeCall.label;
  const siguienteHito = activeTracking.siguienteHito ? `<div><span>Siguiente hito</span><strong>${escapeHtml(activeTracking.siguienteHito)}</strong></div>` : '';
  return `<section class="panel tracking-panel" data-tracking-call="${escapeHtml(activeCall.id)}"><div class="section-heading"><div><p class="eyebrow section-eyebrow">Seguimiento personal</p><h2>Plazos y estado de la OPE</h2></div><span class="status-pill ${personal.inscrito ? 'status-ok' : 'status-warning'}">${personal.inscrito ? '✓ Estoy apuntado' : 'Inscripción no confirmada'}</span></div><div class="personal-status"><div><span>Estado</span><strong>${escapeHtml(personal.estado)}</strong></div><div><span>Convocatoria</span><strong>${escapeHtml(convocatoria)}</strong></div>${siguienteHito}</div><p class="privacy-note">🔒 ${escapeHtml(personal.notaPrivacidad || 'Los datos personales no se publican en el repositorio.')}</p></section>`;
}

function renderProgramme(query = activeSearchQuery) {
  activeSearchQuery = query;
  const themes = activeProgramme.temas;
  const available = themes.filter(isThemeAvailable).length;
  const pending = themes.length - available;
  const term = normalise(query.trim());
  const visible = term
    ? themes.filter(theme => normalise(theme.titulo).includes(term) || searchIndex.get(theme.numero)?.includes(term))
    : themes;

  app.innerHTML = `<section class="panel intro"><div class="intro-row"><div><h2>${escapeHtml(activeCall.shortLabel)}</h2><p>Programa oficial de <strong>${themes.length} temas</strong>. Los temas disponibles se cargan directamente desde el repositorio.</p></div>${callSelector()}</div><div class="summary-grid"><div class="summary-card"><strong>${themes.length}</strong><span>temas oficiales</span></div><div class="summary-card"><strong>${available}</strong><span>con contenido</span></div><div class="summary-card"><strong>${pending}</strong><span>pendientes</span></div></div></section>${renderTracking()}<section class="panel"><div class="section-heading"><div><h2>Programa oficial</h2><p class="notice">Fuente: ${escapeHtml(sourceText(activeProgramme))}.</p></div><label class="search-box"><span>Buscar</span><input id="theme-search" type="search" placeholder="Plazos, recursos, contratos, Windows…" value="${escapeHtml(query)}" autocomplete="off"></label></div><p class="search-count">${term ? `${visible.length} resultado(s)` : 'Busca por el título del tema. El manual se carga solo al abrirlo.'}</p><div class="theme-grid">${visible.map(theme => `<button class="theme-card" type="button" data-theme="${theme.numero}" ${isThemeAvailable(theme) ? '' : 'aria-disabled="true"'}>${badge(theme)}<h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3></button>`).join('')}</div></section>`;

  document.querySelector('#call-selector')?.addEventListener('change', event => {
    activeSearchQuery = '';
    history.pushState({ view: 'programme', callId: event.target.value }, '', location.pathname);
    loadCall(event.target.value);
  });
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
    correct: Number(item.correcta ?? item.respuestaCorrecta),
    explanation: item.justificacion || '',
    trap: item.trampa ?? item.trampaExamen ?? '',
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

async function loadManual(theme) {
  const manual = document.querySelector('#manual');
  if (!manual) return;
  manual.innerHTML = '<p>Cargando manual…</p>';
  try {
    const response = await fetchWithTimeout(themePath(theme, 'manual'), { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    manual.innerHTML = renderMarkdown(await response.text());
  } catch (error) {
    const message = error.name === 'AbortError' ? 'La carga ha tardado demasiado.' : `No se ha podido cargar el manual: ${error.message}.`;
    manual.innerHTML = `<p class="notice warning">${escapeHtml(message)}</p><button id="retry-manual" class="btn secondary" type="button">Reintentar manual</button>`;
    document.querySelector('#retry-manual')?.addEventListener('click', () => loadManual(theme));
  }
}

async function loadQuestions(theme) {
  const slot = document.querySelector('#test-slot');
  if (!slot) return;
  slot.innerHTML = '<section class="panel"><p>Cargando test…</p></section>';
  try {
    const response = await fetchWithTimeout(themePath(theme, 'preguntas'), { cache: 'no-cache' });
    if (!response.ok) {
      if (response.status === 404) { slot.innerHTML = ''; return; }
      throw new Error(`HTTP ${response.status}`);
    }
    const questions = normaliseQuestions(await response.json());
    if (!questions.length) { slot.innerHTML = ''; return; }
    slot.innerHTML = renderTest(theme, questions);
    activateTest(questions);
  } catch (error) {
    const message = error.name === 'AbortError' ? 'El test está tardando demasiado.' : `No se ha podido cargar el test: ${error.message}.`;
    slot.innerHTML = `<section class="panel"><p class="notice warning">${escapeHtml(message)}</p><button id="retry-test" class="btn secondary" type="button">Reintentar test</button></section>`;
    document.querySelector('#retry-test')?.addEventListener('click', () => loadQuestions(theme));
  }
}

function openTheme(theme, { push = true } = {}) {
  const url = `#${activeCall.id}/tema-${theme.numero}`;
  if (push) history.pushState({ view: 'theme', callId: activeCall.id, theme: theme.numero }, '', url);
  app.innerHTML = `<div class="toolbar sticky-toolbar"><button id="back" class="btn secondary" type="button">← Programa</button><button id="top" class="btn secondary" type="button">↑ Inicio</button></div><section class="panel">${badge(theme)}<h2>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h2><p class="notice">Contenido conectado a la convocatoria ${escapeHtml(activeCall.shortLabel)}.</p></section><article id="manual" class="panel manual"><p>Cargando manual…</p></article><section id="test-slot"></section>`;
  document.querySelector('#back')?.addEventListener('click', () => history.back());
  document.querySelector('#top')?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  loadManual(theme);
  loadQuestions(theme);
}

async function loadTracking() {
  activeTracking = null;
  if (!activeCall.trackingUrl) return;
  try {
    const response = await fetchWithTimeout(activeCall.trackingUrl, { cache: 'no-cache' }, 6000);
    if (response.ok) {
      activeTracking = await response.json();
      if (!location.hash.includes('/tema-')) renderProgramme(activeSearchQuery);
    }
  } catch (_) {}
}

async function loadCall(id, selectedTheme = null, { preserveHistory = false } = {}) {
  activeCall = CALLS.find(call => call.id === id) || CALLS[0];
  localStorage.setItem(SELECTED_CALL_KEY, activeCall.id);
  updateHeader();
  app.innerHTML = '<section class="panel"><h2>Cargando convocatoria…</h2></section>';

  const programmeResponse = await fetchWithTimeout(activeCall.programmeUrl, { cache: 'no-cache' });
  if (!programmeResponse.ok) throw new Error(`Programa: HTTP ${programmeResponse.status}`);
  activeProgramme = await programmeResponse.json();
  initialiseSearchIndex(activeProgramme);

  if (!preserveHistory && !selectedTheme) {
    history.replaceState({ view: 'programme', callId: activeCall.id }, '', location.pathname);
  }

  renderProgramme();
  loadTracking();
  // Índice completo desactivado al arrancar: evita cargar todos los manuales y bloquear el scroll.
  if (selectedTheme) {
    const theme = activeProgramme.temas.find(item => item.numero === selectedTheme);
    if (theme && isThemeAvailable(theme)) openTheme(theme, { push: false });
  }
}

async function restoreFromHistory(state) {
  try {
    const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
    const callId = state?.callId || route?.[1] || localStorage.getItem(SELECTED_CALL_KEY) || CALLS[0].id;
    const themeNumber = state?.view === 'theme' ? state.theme : (route ? Number(route[2]) : null);

    if (!activeCall || activeCall.id !== callId || !activeProgramme) {
      await loadCall(callId, themeNumber, { preserveHistory: true });
      return;
    }

    if (themeNumber) {
      const theme = activeProgramme.temas.find(item => item.numero === Number(themeNumber));
      if (theme && isThemeAvailable(theme)) openTheme(theme, { push: false });
    } else {
      renderProgramme(activeSearchQuery);
      scrollTo({ top: 0 });
    }
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

async function boot() {
  initTheme();
  try {
    const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
    const saved = localStorage.getItem(SELECTED_CALL_KEY);
    const callId = route?.[1] || saved || CALLS[0].id;

    if (route) {
      history.replaceState({ view: 'programme', callId }, '', location.pathname);
      await loadCall(callId, null, { preserveHistory: true });
      const theme = activeProgramme.temas.find(item => item.numero === Number(route[2]));
      if (theme && isThemeAvailable(theme)) openTheme(theme);
    } else {
      history.replaceState({ view: 'programme', callId }, '', location.pathname);
      await loadCall(callId, null, { preserveHistory: true });
    }

    window.addEventListener('popstate', event => restoreFromHistory(event.state));
    // Service worker desactivado: la aplicación usa peticiones directas para evitar bloqueos.
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p><button class="btn secondary" type="button" onclick="location.reload()">Reintentar</button></section>`;
  }
}

boot();
