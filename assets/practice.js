const app = document.querySelector('#practice-app');
const THEME_KEY = 'opoweb-theme';
const PROGRESS_KEY = 'opoweb-la-puebla-practice-progress-v1';
const PROGRAM_URL = 'data/programa.json';
const SUPUESTOS_URL = 'content/la-puebla/supuestos-practicos.json';
const SIMULACROS_URL = 'content/la-puebla/simulacros.json';

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

function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{"attempts":[]}');
    return { attempts: Array.isArray(value.attempts) ? value.attempts : [] };
  } catch (_) {
    return { attempts: [] };
  }
}

function saveAttempt(attempt) {
  const progress = readProgress();
  progress.attempts.unshift(attempt);
  progress.attempts = progress.attempts.slice(0, 100);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function progressSummary() {
  const attempts = readProgress().attempts;
  const average = attempts.length ? Math.round(attempts.reduce((sum, item) => sum + item.percentage, 0) / attempts.length) : 0;
  const best = attempts.length ? Math.max(...attempts.map(item => item.percentage)) : 0;
  return { attempts, average, best };
}

function formatAttemptDate(value) {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(new Date(value));
}

async function loadQuestionBanks() {
  const banks = await Promise.all(Array.from({ length: 19 }, async (_, index) => {
    const tema = index + 1;
    const response = await fetch(`content/la-puebla/tema-${String(tema).padStart(2, '0')}/preguntas.json`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`No se pudo cargar el banco del tema ${tema}`);
    return response.json();
  }));
  return banks;
}

function renderHistory() {
  const { attempts, average, best } = progressSummary();
  if (!attempts.length) return '<p class="empty-state">Todavía no hay ejercicios corregidos en este dispositivo.</p>';
  return `
    <div class="history-summary">
      <div><span>Intentos</span><strong>${attempts.length}</strong></div>
      <div><span>Media</span><strong>${average}%</strong></div>
      <div><span>Mejor resultado</span><strong>${best}%</strong></div>
    </div>
    <div class="history-list">
      ${attempts.slice(0, 8).map(item => `
        <article class="history-item">
          <div><strong>${escapeHtml(item.title)}</strong><span>${formatAttemptDate(item.completedAt)}</span></div>
          <b>${item.correct}/${item.total} · ${item.percentage}%</b>
        </article>`).join('')}
    </div>`;
}

function questionsForTheme(banks, number) {
  return banks[number - 1]?.preguntas || [];
}

function renderHub(programme, supuestos, simulacros, banks) {
  history.replaceState(null, '', 'practice.html');
  const progress = progressSummary();
  const questionCount = banks.reduce((total, bank) => total + bank.preguntas.length, 0);
  app.innerHTML = `
    <section class="panel intro">
      <div class="intro-row"><div><h2>Centro de entrenamiento</h2><p>Responde primero y corrige al final. Las soluciones muestran justificación, trampa y referencia del manual.</p></div></div>
      <div class="summary-grid">
        <div class="summary-card"><strong>${questionCount}</strong><span>preguntas temáticas</span></div>
        <div class="summary-card"><strong>${supuestos.supuestos.length}</strong><span>supuestos prácticos</span></div>
        <div class="summary-card"><strong>${simulacros.simulacros.length}</strong><span>simulacros</span></div>
      </div>
    </section>
    <section class="panel">
      <div class="section-heading">
        <div><h2>Mi progreso</h2><p class="search-count">Se guarda únicamente en este navegador.</p></div>
        ${progress.attempts.length ? '<button id="reset-progress" class="btn secondary" type="button">Borrar historial</button>' : ''}
      </div>
      ${renderHistory()}
    </section>
    <section class="panel">
      <h2>Test por tema</h2>
      <p class="search-count">Cada test contiene las 12 preguntas auditadas del tema.</p>
      <div class="practice-grid">
        ${programme.temas.map(theme => `
          <button class="practice-card" type="button" data-theme-test="${theme.numero}">
            <span class="badge approved">12 preguntas</span>
            <h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3>
            <p>Corrección final con justificación y foco de examen.</p>
          </button>`).join('')}
      </div>
    </section>
    <section class="panel">
      <h2>Supuestos prácticos</h2>
      <p class="search-count">Casos transversales con aplicación jurídica, tributaria y ofimática.</p>
      <div class="practice-grid">
        ${supuestos.supuestos.map(item => `
          <button class="practice-card" type="button" data-case="${item.id}">
            <span class="badge approved">Temas ${item.temas.join(', ')}</span>
            <h3>${escapeHtml(item.titulo)}</h3>
            <p>${escapeHtml(item.enunciado)}</p>
          </button>`).join('')}
      </div>
    </section>
    <section class="panel">
      <h2>Simulacros transversales</h2>
      <div class="practice-grid">
        ${simulacros.simulacros.map(item => `
          <button class="practice-card" type="button" data-sim="${item.id}">
            <span class="badge approved">${item.preguntas.length} preguntas · ${item.duracionMinutos} min</span>
            <h3>${escapeHtml(item.titulo)}</h3>
            <p>${escapeHtml(item.instrucciones)}</p>
          </button>`).join('')}
      </div>
    </section>`;

  document.querySelector('#reset-progress')?.addEventListener('click', () => {
    if (confirm('¿Borrar todo el historial de resultados guardado en este dispositivo?')) {
      localStorage.removeItem(PROGRESS_KEY);
      renderHub(programme, supuestos, simulacros, banks);
    }
  });
  document.querySelectorAll('[data-theme-test]').forEach(button => {
    button.addEventListener('click', () => openThemeTest(programme, supuestos, simulacros, banks, Number(button.dataset.themeTest)));
  });
  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = supuestos.supuestos.find(item => item.id === button.dataset.case);
      renderExercise([selected], selected.titulo, selected.id, 'supuesto', () => renderHub(programme, supuestos, simulacros, banks));
    });
  });
  const questionMap = new Map(banks.flatMap(bank => bank.preguntas.map(question => [question.id, question])));
  document.querySelectorAll('[data-sim]').forEach(button => {
    button.addEventListener('click', () => {
      const sim = simulacros.simulacros.find(item => item.id === button.dataset.sim);
      const questions = sim.preguntas.map(id => ({ ...questionMap.get(id), titulo: id, temas: [Number(id.slice(4, 6))] }));
      renderExercise(questions, sim.titulo, sim.id, 'simulacro', () => renderHub(programme, supuestos, simulacros, banks), sim.duracionMinutos);
    });
  });
}

function openThemeTest(programme, supuestos, simulacros, banks, number) {
  const theme = programme.temas.find(item => item.numero === number);
  const questions = questionsForTheme(banks, number);
  if (!theme || questions.length !== 12) return;
  history.replaceState(null, '', `practice.html?tema=${number}`);
  renderExercise(
    questions.map(question => ({ ...question, titulo: question.id })),
    `Test Tema ${number}. ${theme.titulo}`,
    `LP-TEMA-${String(number).padStart(2, '0')}`,
    'tema',
    () => renderHub(programme, supuestos, simulacros, banks)
  );
}

function renderExercise(items, title, exerciseId, type, onBack, durationMinutes = null) {
  let remaining = durationMinutes ? durationMinutes * 60 : null;
  let timerId = null;
  app.innerHTML = `
    <div class="toolbar sticky-toolbar practice-toolbar">
      <button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button>
      ${durationMinutes ? '<strong id="timer" class="timer" aria-live="polite"></strong>' : ''}
      <button id="finish" class="btn" type="button">Corregir</button>
    </div>
    <section class="panel"><h2>${escapeHtml(title)}</h2><p class="notice">Responde todas las preguntas y pulsa <strong>Corregir</strong>. Las soluciones no se muestran antes de finalizar.</p></section>
    <form id="exercise-form" class="exercise-list">${items.map((item, index) => renderQuestion(item, index)).join('')}</form>`;

  document.querySelector('#practice-back').addEventListener('click', () => {
    if (timerId) clearInterval(timerId);
    onBack();
  });
  document.querySelector('#finish').addEventListener('click', () => finishExercise(items, timerId, { exerciseId, title, type }));

  if (durationMinutes) {
    const timer = document.querySelector('#timer');
    const updateTimer = () => {
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timer.textContent = `⏱ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      if (remaining <= 300) timer.classList.add('timer-warning');
      if (remaining <= 0) {
        clearInterval(timerId);
        finishExercise(items, null, { exerciseId, title, type });
        return;
      }
      remaining -= 1;
    };
    updateTimer();
    timerId = setInterval(updateTimer, 1000);
  }
  scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion(item, index) {
  const enunciado = item.enunciado || item.pregunta || '';
  const prompt = item.pregunta && item.enunciado ? `${item.enunciado} ${item.pregunta}` : enunciado;
  return `
    <fieldset class="panel question-card" data-question="${index}">
      <legend><span>${index + 1}</span> ${escapeHtml(item.titulo || item.id)}</legend>
      <p class="question-text">${escapeHtml(prompt)}</p>
      <div class="option-list">
        ${item.opciones.map((option, optionIndex) => `
          <label class="option-row"><input type="radio" name="q-${index}" value="${optionIndex}"><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span></label>`).join('')}
      </div>
      <div class="solution" hidden></div>
    </fieldset>`;
}

function finishExercise(items, timerId, metadata) {
  if (document.querySelector('#finish')?.disabled) return;
  if (timerId) clearInterval(timerId);
  let correct = 0;
  let answered = 0;
  items.forEach((item, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const selected = card.querySelector('input:checked');
    const selectedIndex = selected ? Number(selected.value) : null;
    if (selected) answered += 1;
    if (selectedIndex === item.respuestaCorrecta) correct += 1;
    card.classList.add(selectedIndex === item.respuestaCorrecta ? 'question-correct' : 'question-wrong');
    card.querySelectorAll('input').forEach(input => { input.disabled = true; });
    card.querySelectorAll('.option-row').forEach((row, optionIndex) => {
      if (optionIndex === item.respuestaCorrecta) row.classList.add('correct-option');
      if (selectedIndex === optionIndex && optionIndex !== item.respuestaCorrecta) row.classList.add('wrong-option');
    });
    const solution = card.querySelector('.solution');
    solution.hidden = false;
    solution.innerHTML = `
      <p><strong>Respuesta correcta:</strong> ${String.fromCharCode(65 + item.respuestaCorrecta)}. ${escapeHtml(item.opciones[item.respuestaCorrecta])}</p>
      <p><strong>Justificación:</strong> ${escapeHtml(item.justificacion)}</p>
      <blockquote>⚠️ <strong>¡Foco Examen!:</strong> ${escapeHtml(item.trampaExamen)}</blockquote>
      <p class="reference"><strong>Referencia:</strong> ${escapeHtml(item.referencia)}</p>`;
  });

  const percentage = Math.round((correct / items.length) * 100);
  saveAttempt({ id: metadata.exerciseId, type: metadata.type, title: metadata.title, correct, answered, total: items.length, percentage, completedAt: new Date().toISOString() });
  const result = document.createElement('section');
  result.className = 'panel result-panel';
  result.innerHTML = `<h2>Resultado: ${correct}/${items.length} · ${percentage}%</h2><p>Respondidas: ${answered}. En blanco: ${items.length - answered}. Resultado guardado en este dispositivo.</p><div class="score-bar" aria-label="Porcentaje de aciertos"><span style="width:${percentage}%"></span></div>`;
  document.querySelector('#exercise-form').prepend(result);
  document.querySelector('#finish').disabled = true;
  document.querySelector('#finish').textContent = 'Corregido';
  scrollTo({ top: 0, behavior: 'smooth' });
}

async function boot() {
  initTheme();
  try {
    const [programmeResponse, supuestosResponse, simulacrosResponse, banks] = await Promise.all([
      fetch(PROGRAM_URL, { cache: 'no-cache' }),
      fetch(SUPUESTOS_URL, { cache: 'no-cache' }),
      fetch(SIMULACROS_URL, { cache: 'no-cache' }),
      loadQuestionBanks()
    ]);
    if (!programmeResponse.ok) throw new Error('No se pudo cargar el programa');
    if (!supuestosResponse.ok) throw new Error('No se pudieron cargar los supuestos');
    if (!simulacrosResponse.ok) throw new Error('No se pudieron cargar los simulacros');
    const [programme, supuestos, simulacros] = await Promise.all([programmeResponse.json(), supuestosResponse.json(), simulacrosResponse.json()]);
    const selectedTheme = Number(new URLSearchParams(location.search).get('tema'));
    if (selectedTheme >= 1 && selectedTheme <= 19) openThemeTest(programme, supuestos, simulacros, banks, selectedTheme);
    else renderHub(programme, supuestos, simulacros, banks);
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();
