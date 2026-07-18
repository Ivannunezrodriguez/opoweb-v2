const app = document.querySelector('#practice-app');
const THEME_KEY = 'opoweb-theme';
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

async function loadQuestionBanks() {
  const banks = await Promise.all(Array.from({ length: 19 }, async (_, index) => {
    const tema = index + 1;
    const response = await fetch(`content/la-puebla/tema-${String(tema).padStart(2, '0')}/preguntas.json`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`No se pudo cargar el banco del tema ${tema}`);
    return response.json();
  }));
  return new Map(banks.flatMap(bank => bank.preguntas.map(question => [question.id, question])));
}

function renderHub(supuestos, simulacros, questionMap) {
  app.innerHTML = `
    <section class="panel intro">
      <div class="intro-row">
        <div>
          <h2>Centro de entrenamiento</h2>
          <p>Responde primero y corrige al final. Las soluciones muestran justificación, trampa y referencia del manual.</p>
        </div>
      </div>
      <div class="summary-grid">
        <div class="summary-card"><strong>${supuestos.supuestos.length}</strong><span>supuestos prácticos</span></div>
        <div class="summary-card"><strong>${simulacros.simulacros.length}</strong><span>simulacros</span></div>
        <div class="summary-card"><strong>${questionMap.size}</strong><span>preguntas auditadas</span></div>
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

  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = supuestos.supuestos.find(item => item.id === button.dataset.case);
      renderExercise([selected], 'Supuesto práctico', () => renderHub(supuestos, simulacros, questionMap));
    });
  });
  document.querySelectorAll('[data-sim]').forEach(button => {
    button.addEventListener('click', () => {
      const sim = simulacros.simulacros.find(item => item.id === button.dataset.sim);
      const questions = sim.preguntas.map(id => ({ ...questionMap.get(id), titulo: id, temas: [Number(id.slice(4, 6))] }));
      renderExercise(questions, sim.titulo, () => renderHub(supuestos, simulacros, questionMap), sim.duracionMinutos);
    });
  });
}

function renderExercise(items, title, onBack, durationMinutes = null) {
  let remaining = durationMinutes ? durationMinutes * 60 : null;
  let timerId = null;
  app.innerHTML = `
    <div class="toolbar sticky-toolbar practice-toolbar">
      <button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button>
      ${durationMinutes ? '<strong id="timer" class="timer" aria-live="polite"></strong>' : ''}
      <button id="finish" class="btn" type="button">Corregir</button>
    </div>
    <section class="panel">
      <h2>${escapeHtml(title)}</h2>
      <p class="notice">Responde todas las preguntas y pulsa <strong>Corregir</strong>. Las soluciones no se muestran antes de finalizar.</p>
    </section>
    <form id="exercise-form" class="exercise-list">
      ${items.map((item, index) => renderQuestion(item, index)).join('')}
    </form>`;

  const back = document.querySelector('#practice-back');
  back.addEventListener('click', () => {
    if (timerId) clearInterval(timerId);
    onBack();
  });
  document.querySelector('#finish').addEventListener('click', () => finishExercise(items, timerId));

  if (durationMinutes) {
    const timer = document.querySelector('#timer');
    const updateTimer = () => {
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timer.textContent = `⏱ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      if (remaining <= 300) timer.classList.add('timer-warning');
      if (remaining <= 0) {
        clearInterval(timerId);
        finishExercise(items, null);
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
          <label class="option-row">
            <input type="radio" name="q-${index}" value="${optionIndex}">
            <span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span>
          </label>`).join('')}
      </div>
      <div class="solution" hidden></div>
    </fieldset>`;
}

function finishExercise(items, timerId) {
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
  const result = document.createElement('section');
  result.className = 'panel result-panel';
  result.innerHTML = `
    <h2>Resultado: ${correct}/${items.length} · ${percentage}%</h2>
    <p>Respondidas: ${answered}. En blanco: ${items.length - answered}.</p>
    <div class="score-bar" aria-label="Porcentaje de aciertos"><span style="width:${percentage}%"></span></div>`;
  document.querySelector('#exercise-form').prepend(result);
  document.querySelector('#finish').disabled = true;
  document.querySelector('#finish').textContent = 'Corregido';
  scrollTo({ top: 0, behavior: 'smooth' });
}

async function boot() {
  initTheme();
  try {
    const [supuestosResponse, simulacrosResponse, questionMap] = await Promise.all([
      fetch(SUPUESTOS_URL, { cache: 'no-cache' }),
      fetch(SIMULACROS_URL, { cache: 'no-cache' }),
      loadQuestionBanks()
    ]);
    if (!supuestosResponse.ok) throw new Error('No se pudieron cargar los supuestos');
    if (!simulacrosResponse.ok) throw new Error('No se pudieron cargar los simulacros');
    const [supuestos, simulacros] = await Promise.all([supuestosResponse.json(), simulacrosResponse.json()]);
    renderHub(supuestos, simulacros, questionMap);
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();