const app = document.querySelector('#practice-app');
const THEME_KEY = 'opoweb-theme';
const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';

const CALLS = [
  {
    id: 'la-puebla-auxiliar-administrativo-2026',
    label: 'La Puebla de Montalbán · Auxiliar Administrativo C2',
    shortLabel: 'La Puebla · C2',
    programmeUrl: 'data/programa.json',
    contentRoot: 'content/la-puebla',
    themeCount: 19,
    supuestosUrl: 'content/la-puebla/supuestos-practicos.json',
    simulacrosUrl: 'content/la-puebla/simulacros.json',
    progressKey: 'opoweb-la-puebla-practice-progress-v2',
    legacyProgressKey: 'opoweb-la-puebla-practice-progress-v1',
    questionPrefix: 'LP-T'
  },
  {
    id: 'diputacion-toledo-administrativo-c1-2026',
    label: 'Diputación Provincial de Toledo · Administrativo C1',
    shortLabel: 'Diputación de Toledo · C1',
    programmeUrl: 'data/programa-diputacion-administrativo-2026.json',
    contentRoot: 'content/diputacion-toledo',
    themeCount: 40,
    supuestosUrl: 'content/diputacion-toledo/supuestos-practicos.json',
    simulacrosUrl: 'content/diputacion-toledo/simulacros.json',
    progressKey: 'opoweb-diputacion-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'DIP-T'
  }
];

let activeCall = null;
let programme = null;
let supuestos = null;
let simulacros = null;
let questionMap = new Map();

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

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

function emptyProgress() {
  return { attempts: [], errors: {}, themeStats: {} };
}

function readProgress() {
  try {
    const raw = localStorage.getItem(activeCall.progressKey);
    if (raw) {
      const value = JSON.parse(raw);
      return {
        attempts: Array.isArray(value.attempts) ? value.attempts : [],
        errors: value.errors && typeof value.errors === 'object' ? value.errors : {},
        themeStats: value.themeStats && typeof value.themeStats === 'object' ? value.themeStats : {}
      };
    }
    if (activeCall.legacyProgressKey) {
      const legacy = JSON.parse(localStorage.getItem(activeCall.legacyProgressKey) || '{"attempts":[]}');
      return { ...emptyProgress(), attempts: Array.isArray(legacy.attempts) ? legacy.attempts : [] };
    }
  } catch (_) {}
  return emptyProgress();
}

function writeProgress(progress) {
  localStorage.setItem(activeCall.progressKey, JSON.stringify(progress));
}

function themeFromQuestion(question) {
  if (Number.isInteger(question.tema)) return question.tema;
  const match = String(question.id || '').match(/^(?:LP|DIP)-T(\d{2})-/);
  return match ? Number(match[1]) : null;
}

function normaliseQuestion(item, fallbackTheme = null) {
  return {
    id: item.id,
    tema: Number(item.tema ?? fallbackTheme) || null,
    titulo: item.titulo || item.id,
    pregunta: item.pregunta || item.enunciado || '',
    enunciado: item.enunciado && item.pregunta ? item.enunciado : '',
    opciones: item.opciones || [],
    correcta: Number(item.correcta ?? item.respuestaCorrecta),
    justificacion: item.justificacion || item.explicacion || '',
    trampa: item.trampa ?? item.trampaExamen ?? '',
    referencia: item.referencia || (Array.isArray(item.referencias) ? item.referencias.join(' · ') : '')
  };
}

function saveAttempt(attempt, results) {
  const progress = readProgress();
  progress.attempts.unshift(attempt);
  progress.attempts = progress.attempts.slice(0, 100);
  results.forEach(result => {
    const theme = themeFromQuestion(result.question);
    if (!theme) return;
    const key = String(theme);
    const stat = progress.themeStats[key] || { answered: 0, correct: 0 };
    stat.answered += 1;
    if (result.correct) stat.correct += 1;
    progress.themeStats[key] = stat;
    if (result.correct) {
      if (progress.errors[result.question.id]) {
        progress.errors[result.question.id].count -= 1;
        if (progress.errors[result.question.id].count <= 0) delete progress.errors[result.question.id];
      }
    } else {
      const previous = progress.errors[result.question.id] || { count: 0, theme };
      previous.count += 1;
      previous.theme = theme;
      previous.lastWrongAt = attempt.completedAt;
      progress.errors[result.question.id] = previous;
    }
  });
  writeProgress(progress);
}

function progressSummary() {
  const progress = readProgress();
  const average = progress.attempts.length
    ? Math.round(progress.attempts.reduce((sum, item) => sum + item.percentage, 0) / progress.attempts.length)
    : 0;
  const best = progress.attempts.length ? Math.max(...progress.attempts.map(item => item.percentage)) : 0;
  const weakThemes = Object.entries(progress.themeStats)
    .map(([theme, stat]) => ({
      theme: Number(theme), answered: stat.answered, correct: stat.correct,
      percentage: stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0
    }))
    .sort((a, b) => a.percentage - b.percentage || b.answered - a.answered);
  return { ...progress, average, best, weakThemes };
}

function formatAttemptDate(value) {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(new Date(value));
}

async function loadQuestionBanks() {
  const banks = await Promise.all(Array.from({ length: activeCall.themeCount }, async (_, index) => {
    const tema = index + 1;
    const path = `${activeCall.contentRoot}/tema-${String(tema).padStart(2, '0')}/preguntas.json`;
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`No se pudo cargar el banco del tema ${tema}`);
    const payload = await response.json();
    const raw = Array.isArray(payload) ? payload : payload.preguntas || [];
    return raw.map(item => normaliseQuestion(item, tema));
  }));
  return new Map(banks.flat().map(question => [question.id, question]));
}

function renderHistory(progress) {
  if (!progress.attempts.length) return '<p class="empty-state">Todavía no hay ejercicios corregidos en este dispositivo.</p>';
  return `<div class="history-summary"><div><span>Intentos</span><strong>${progress.attempts.length}</strong></div><div><span>Media</span><strong>${progress.average}%</strong></div><div><span>Mejor resultado</span><strong>${progress.best}%</strong></div></div><div class="history-list">${progress.attempts.slice(0, 8).map(item => `<article class="history-item"><div><strong>${escapeHtml(item.title)}</strong><span>${formatAttemptDate(item.completedAt)}</span></div><b>${item.correct}/${item.total} · ${item.percentage}%</b></article>`).join('')}</div>`;
}

function callSelector() {
  return `<label class="search-box convocatoria-selector"><span>Convocatoria</span><select id="practice-call-selector">${CALLS.map(call => `<option value="${call.id}" ${call.id === activeCall.id ? 'selected' : ''}>${escapeHtml(call.label)}</option>`).join('')}</select></label>`;
}

function renderHub() {
  const progress = progressSummary();
  const openCases = supuestos.supuestos.filter(item => Array.isArray(item.cuestiones));
  const testCases = supuestos.supuestos.filter(item => !Array.isArray(item.cuestiones));
  app.innerHTML = `
    <section class="panel intro"><div class="intro-row"><div><h2>Centro de entrenamiento · ${escapeHtml(activeCall.shortLabel)}</h2><p>Tests por tema, supuestos prácticos y simulacros con justificación, trampa y referencia.</p></div>${callSelector()}</div><div class="summary-grid"><div class="summary-card"><strong>${supuestos.supuestos.length}</strong><span>supuestos prácticos</span></div><div class="summary-card"><strong>${simulacros.simulacros.length}</strong><span>simulacros</span></div><div class="summary-card"><strong>${progress.attempts.length}</strong><span>intentos guardados</span></div></div></section>
    <section class="panel"><div class="section-heading"><div><h2>Mi progreso</h2><p class="search-count">Se guarda únicamente en este navegador y por convocatoria.</p></div>${progress.attempts.length ? '<button id="reset-progress" class="btn secondary" type="button">Borrar historial</button>' : ''}</div>${renderHistory(progress)}</section>
    <section class="panel"><h2>Test por tema</h2><p class="search-count">Doce preguntas por cada uno de los ${activeCall.themeCount} temas.</p><div class="practice-grid">${programme.temas.map(theme => { const stat = progress.themeStats[String(theme.numero)]; const score = stat?.answered ? `${Math.round((stat.correct / stat.answered) * 100)}% acumulado` : 'Sin intentos'; return `<button class="practice-card" type="button" data-theme-test="${theme.numero}"><span class="badge approved">12 preguntas · ${escapeHtml(score)}</span><h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3></button>`; }).join('')}</div></section>
    <section class="panel"><h2>Supuestos prácticos</h2><p class="search-count">Casos transversales con solución razonada y trazabilidad.</p><div class="practice-grid">${[...testCases, ...openCases].map(item => `<button class="practice-card" type="button" data-case="${item.id}"><span class="badge approved">Temas ${(item.temas || []).join(', ')}</span><h3>${escapeHtml(item.titulo)}</h3><p>${escapeHtml(item.enunciado)}</p></button>`).join('')}</div></section>
    <section class="panel"><h2>Simulacros transversales</h2><div class="practice-grid">${simulacros.simulacros.map(item => `<button class="practice-card" type="button" data-sim="${item.id}"><span class="badge approved">${item.preguntas.length} preguntas · ${item.duracionMinutos} min</span><h3>${escapeHtml(item.titulo)}</h3><p>${escapeHtml(item.instrucciones || 'Corrección al finalizar.')}</p></button>`).join('')}</div></section>`;

  document.querySelector('#practice-call-selector')?.addEventListener('change', event => loadCall(event.target.value));
  document.querySelector('#reset-progress')?.addEventListener('click', () => {
    if (confirm('¿Borrar el historial de esta convocatoria?')) {
      localStorage.removeItem(activeCall.progressKey);
      if (activeCall.legacyProgressKey) localStorage.removeItem(activeCall.legacyProgressKey);
      renderHub();
    }
  });
  document.querySelectorAll('[data-theme-test]').forEach(button => button.addEventListener('click', () => startThemeTest(Number(button.dataset.themeTest))));
  document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
    const selected = supuestos.supuestos.find(item => item.id === button.dataset.case);
    if (Array.isArray(selected.cuestiones)) renderOpenCase(selected);
    else renderExercise([normaliseQuestion(selected)], selected.titulo, selected.id, 'supuesto');
  }));
  document.querySelectorAll('[data-sim]').forEach(button => button.addEventListener('click', () => {
    const sim = simulacros.simulacros.find(item => item.id === button.dataset.sim);
    const questions = sim.preguntas.map(item => typeof item === 'string' ? questionMap.get(item) : normaliseQuestion(item));
    renderExercise(questions.filter(Boolean), sim.titulo, sim.id, 'simulacro', sim.duracionMinutos);
  }));
}

function startThemeTest(theme) {
  const questions = [...questionMap.values()].filter(question => question.tema === theme);
  renderExercise(questions, `Test del Tema ${theme}`, `${activeCall.id}-TEMA-${String(theme).padStart(2, '0')}`, 'tema');
}

function renderOpenCase(item) {
  app.innerHTML = `<div class="toolbar sticky-toolbar practice-toolbar"><button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button><button id="reveal-case" class="btn" type="button">Mostrar soluciones</button></div><section class="panel"><h2>${escapeHtml(item.titulo)}</h2><p class="notice">${escapeHtml(item.enunciado)}</p></section><div class="exercise-list">${item.cuestiones.map((question, index) => `<article class="panel question-card"><h3>${index + 1}. ${escapeHtml(question.pregunta)}</h3><textarea rows="5" aria-label="Respuesta a la cuestión ${index + 1}" placeholder="Redacta tu respuesta antes de mostrar la solución"></textarea><div class="solution" hidden><p><strong>Solución orientativa:</strong> ${escapeHtml(question.respuesta)}</p><blockquote>⚠️ <strong>¡Foco Examen!:</strong> ${escapeHtml(question.trampa)}</blockquote><p class="reference"><strong>Referencias:</strong> ${escapeHtml((question.referencias || []).join(' · '))}</p></div></article>`).join('')}</div>`;
  document.querySelector('#practice-back').addEventListener('click', renderHub);
  document.querySelector('#reveal-case').addEventListener('click', event => {
    document.querySelectorAll('.solution').forEach(node => { node.hidden = false; });
    document.querySelectorAll('textarea').forEach(node => { node.disabled = true; });
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = 'Soluciones mostradas';
  });
  scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExercise(items, title, exerciseId, type, durationMinutes = null) {
  let remaining = durationMinutes ? durationMinutes * 60 : null;
  let timerId = null;
  app.innerHTML = `<div class="toolbar sticky-toolbar practice-toolbar"><button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button>${durationMinutes ? '<strong id="timer" class="timer" aria-live="polite"></strong>' : ''}<button id="finish" class="btn" type="button">Corregir</button></div><section class="panel"><h2>${escapeHtml(title)}</h2><p class="notice">Responde todas las preguntas y pulsa <strong>Corregir</strong>.</p></section><form id="exercise-form" class="exercise-list">${items.map((item, index) => renderQuestion(item, index)).join('')}</form>`;
  document.querySelector('#practice-back').addEventListener('click', () => { if (timerId) clearInterval(timerId); renderHub(); });
  document.querySelector('#finish').addEventListener('click', () => finishExercise(items, timerId, { exerciseId, title, type }));
  if (durationMinutes) {
    const timer = document.querySelector('#timer');
    const updateTimer = () => {
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timer.textContent = `⏱ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      if (remaining <= 300) timer.classList.add('timer-warning');
      if (remaining <= 0) { clearInterval(timerId); finishExercise(items, null, { exerciseId, title, type }); return; }
      remaining -= 1;
    };
    updateTimer();
    timerId = setInterval(updateTimer, 1000);
  }
  scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion(item, index) {
  const prompt = item.enunciado ? `${item.enunciado} ${item.pregunta}` : item.pregunta;
  return `<fieldset class="panel question-card" data-question="${index}"><legend><span>${index + 1}</span> ${escapeHtml(item.titulo || item.id)}</legend><p class="question-text">${escapeHtml(prompt)}</p><div class="option-list">${item.opciones.map((option, optionIndex) => `<label class="option-row"><input type="radio" name="q-${index}" value="${optionIndex}"><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span></label>`).join('')}</div><div class="solution" hidden></div></fieldset>`;
}

function finishExercise(items, timerId, metadata) {
  if (document.querySelector('#finish')?.disabled) return;
  if (timerId) clearInterval(timerId);
  let correct = 0;
  let answered = 0;
  const results = [];
  items.forEach((item, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const selected = card.querySelector('input:checked');
    const selectedIndex = selected ? Number(selected.value) : null;
    const isCorrect = selectedIndex === item.correcta;
    if (selected) answered += 1;
    if (isCorrect) correct += 1;
    results.push({ question: item, correct: isCorrect });
    card.classList.add(isCorrect ? 'question-correct' : 'question-wrong');
    card.querySelectorAll('input').forEach(input => { input.disabled = true; });
    card.querySelectorAll('.option-row').forEach((row, optionIndex) => {
      if (optionIndex === item.correcta) row.classList.add('correct-option');
      if (selectedIndex === optionIndex && optionIndex !== item.correcta) row.classList.add('wrong-option');
    });
    const solution = card.querySelector('.solution');
    solution.hidden = false;
    solution.innerHTML = `<p><strong>Respuesta correcta:</strong> ${String.fromCharCode(65 + item.correcta)}. ${escapeHtml(item.opciones[item.correcta])}</p><p><strong>Justificación:</strong> ${escapeHtml(item.justificacion)}</p>${item.trampa ? `<blockquote>⚠️ <strong>¡Foco Examen!:</strong> ${escapeHtml(item.trampa)}</blockquote>` : ''}${item.referencia ? `<p class="reference"><strong>Referencia:</strong> ${escapeHtml(item.referencia)}</p>` : ''}`;
  });
  const percentage = Math.round((correct / items.length) * 100);
  const completedAt = new Date().toISOString();
  saveAttempt({ id: metadata.exerciseId, type: metadata.type, title: metadata.title, correct, answered, total: items.length, percentage, completedAt }, results);
  const result = document.createElement('section');
  result.className = 'panel result-panel';
  result.innerHTML = `<h2>Resultado: ${correct}/${items.length} · ${percentage}%</h2><p>Respondidas: ${answered}. En blanco: ${items.length - answered}. Resultado guardado en este dispositivo.</p><div class="score-bar" aria-label="Porcentaje de aciertos"><span style="width:${percentage}%"></span></div>`;
  document.querySelector('#exercise-form').prepend(result);
  document.querySelector('#finish').disabled = true;
  document.querySelector('#finish').textContent = 'Corregido';
  scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadCall(id) {
  activeCall = CALLS.find(call => call.id === id) || CALLS[0];
  localStorage.setItem(SELECTED_CALL_KEY, activeCall.id);
  history.replaceState(null, '', `practice.html?convocatoria=${encodeURIComponent(activeCall.id)}`);
  document.title = `OpoWeb v2 · Práctica · ${activeCall.shortLabel}`;
  app.innerHTML = '<section class="panel intro"><h2>Cargando entrenamiento…</h2></section>';
  const [programmeResponse, supuestosResponse, simulacrosResponse, banks] = await Promise.all([
    fetch(activeCall.programmeUrl, { cache: 'no-cache' }),
    fetch(activeCall.supuestosUrl, { cache: 'no-cache' }),
    fetch(activeCall.simulacrosUrl, { cache: 'no-cache' }),
    loadQuestionBanks()
  ]);
  if (!programmeResponse.ok || !supuestosResponse.ok || !simulacrosResponse.ok) throw new Error('No se pudieron cargar todos los recursos de práctica');
  [programme, supuestos, simulacros] = await Promise.all([programmeResponse.json(), supuestosResponse.json(), simulacrosResponse.json()]);
  questionMap = banks;
  const selectedTheme = Number(new URLSearchParams(location.search).get('tema'));
  if (selectedTheme >= 1 && selectedTheme <= activeCall.themeCount) startThemeTest(selectedTheme);
  else renderHub();
}

async function boot() {
  initTheme();
  try {
    const params = new URLSearchParams(location.search);
    await loadCall(params.get('convocatoria') || localStorage.getItem(SELECTED_CALL_KEY) || CALLS[0].id);
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();
