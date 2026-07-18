const app = document.querySelector('#practice-app');
const THEME_KEY = 'opoweb-theme';
const PROGRESS_KEY = 'opoweb-la-puebla-practice-progress-v2';
const LEGACY_PROGRESS_KEY = 'opoweb-la-puebla-practice-progress-v1';
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

function emptyProgress() {
  return { attempts: [], errors: {}, themeStats: {} };
}

function readProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const value = JSON.parse(raw);
      return {
        attempts: Array.isArray(value.attempts) ? value.attempts : [],
        errors: value.errors && typeof value.errors === 'object' ? value.errors : {},
        themeStats: value.themeStats && typeof value.themeStats === 'object' ? value.themeStats : {}
      };
    }
    const legacy = JSON.parse(localStorage.getItem(LEGACY_PROGRESS_KEY) || '{"attempts":[]}');
    return { ...emptyProgress(), attempts: Array.isArray(legacy.attempts) ? legacy.attempts : [] };
  } catch (_) {
    return emptyProgress();
  }
}

function writeProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function themeFromQuestionId(id) {
  const match = String(id || '').match(/^LP-T(\d{2})-/);
  return match ? Number(match[1]) : null;
}

function saveAttempt(attempt, results) {
  const progress = readProgress();
  progress.attempts.unshift(attempt);
  progress.attempts = progress.attempts.slice(0, 100);

  results.forEach(result => {
    const theme = themeFromQuestionId(result.id);
    if (!theme) return;
    const key = String(theme);
    const stat = progress.themeStats[key] || { answered: 0, correct: 0 };
    stat.answered += 1;
    if (result.correct) stat.correct += 1;
    progress.themeStats[key] = stat;

    if (result.correct) {
      if (progress.errors[result.id]) {
        progress.errors[result.id].count -= 1;
        progress.errors[result.id].lastCorrectAt = attempt.completedAt;
        if (progress.errors[result.id].count <= 0) delete progress.errors[result.id];
      }
    } else {
      const previous = progress.errors[result.id] || { count: 0, theme };
      previous.count += 1;
      previous.lastWrongAt = attempt.completedAt;
      previous.theme = theme;
      progress.errors[result.id] = previous;
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
      theme: Number(theme),
      answered: stat.answered,
      correct: stat.correct,
      percentage: stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0
    }))
    .filter(item => item.answered > 0)
    .sort((a, b) => a.percentage - b.percentage || b.answered - a.answered);
  return { ...progress, average, best, weakThemes };
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
  return new Map(banks.flatMap(bank => bank.preguntas.map(question => [question.id, question])));
}

function renderHistory(progress) {
  if (!progress.attempts.length) {
    return '<p class="empty-state">Todavía no hay ejercicios corregidos en este dispositivo.</p>';
  }
  return `
    <div class="history-summary">
      <div><span>Intentos</span><strong>${progress.attempts.length}</strong></div>
      <div><span>Media</span><strong>${progress.average}%</strong></div>
      <div><span>Mejor resultado</span><strong>${progress.best}%</strong></div>
    </div>
    <div class="history-list">
      ${progress.attempts.slice(0, 8).map(item => `
        <article class="history-item">
          <div><strong>${escapeHtml(item.title)}</strong><span>${formatAttemptDate(item.completedAt)}</span></div>
          <b>${item.correct}/${item.total} · ${item.percentage}%</b>
        </article>`).join('')}
    </div>`;
}

function renderSmartTraining(progress) {
  const errorEntries = Object.entries(progress.errors)
    .sort((a, b) => b[1].count - a[1].count || String(b[1].lastWrongAt).localeCompare(String(a[1].lastWrongAt)));
  const weak = progress.weakThemes.slice(0, 5);
  return `
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow section-eyebrow">Entrenamiento inteligente</p>
          <h2>Fallos y temas débiles</h2>
          <p class="search-count">Los fallos pendientes disminuyen cuando respondes correctamente la misma pregunta.</p>
        </div>
        ${errorEntries.length ? `<button id="train-errors" class="btn" type="button">Repasar ${errorEntries.length} fallo(s)</button>` : ''}
      </div>
      ${errorEntries.length ? `
        <div class="smart-summary">
          <div><span>Preguntas pendientes</span><strong>${errorEntries.length}</strong></div>
          <div><span>Reincidencias</span><strong>${errorEntries.reduce((sum, [, item]) => sum + item.count, 0)}</strong></div>
          <div><span>Tema más débil</span><strong>${weak[0] ? `Tema ${weak[0].theme} · ${weak[0].percentage}%` : 'Sin datos'}</strong></div>
        </div>` : '<p class="empty-state">No hay preguntas falladas pendientes. Los nuevos errores aparecerán aquí tras corregir un ejercicio.</p>'}
      ${weak.length ? `
        <div class="weak-theme-list">
          ${weak.map(item => `
            <button class="weak-theme" type="button" data-weak-theme="${item.theme}">
              <span><strong>Tema ${item.theme}</strong><small>${item.correct}/${item.answered} aciertos acumulados</small></span>
              <b>${item.percentage}%</b>
            </button>`).join('')}
        </div>` : ''}
    </section>`;
}

function renderHub(programme, supuestos, simulacros, questionMap) {
  const progress = progressSummary();
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
        <div class="summary-card"><strong>${progress.attempts.length}</strong><span>intentos guardados</span></div>
      </div>
    </section>
    ${renderSmartTraining(progress)}
    <section class="panel">
      <div class="section-heading">
        <div><h2>Mi progreso</h2><p class="search-count">Se guarda únicamente en este navegador.</p></div>
        ${progress.attempts.length ? '<button id="reset-progress" class="btn secondary" type="button">Borrar historial</button>' : ''}
      </div>
      ${renderHistory(progress)}
    </section>
    <section class="panel">
      <h2>Test por tema</h2>
      <p class="search-count">Doce preguntas auditadas por cada uno de los 19 temas oficiales.</p>
      <div class="practice-grid">
        ${programme.temas.map(theme => {
          const stat = progress.themeStats[String(theme.numero)];
          const score = stat?.answered ? `${Math.round((stat.correct / stat.answered) * 100)}% acumulado` : 'Sin intentos';
          return `<button class="practice-card" type="button" data-theme-test="${theme.numero}">
            <span class="badge approved">12 preguntas · ${escapeHtml(score)}</span>
            <h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3>
            <p>Realiza el test completo del tema y guarda el resultado en tu historial.</p>
          </button>`;
        }).join('')}
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

  const backToHub = () => renderHub(programme, supuestos, simulacros, questionMap);
  document.querySelector('#reset-progress')?.addEventListener('click', () => {
    if (confirm('¿Borrar todo el historial, fallos y estadísticas guardados en este dispositivo?')) {
      localStorage.removeItem(PROGRESS_KEY);
      localStorage.removeItem(LEGACY_PROGRESS_KEY);
      backToHub();
    }
  });
  document.querySelector('#train-errors')?.addEventListener('click', () => {
    const ids = Object.entries(progress.errors)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([id]) => id)
      .filter(id => questionMap.has(id));
    const questions = ids.map(id => questionMap.get(id));
    renderExercise(questions, 'Repaso de preguntas falladas', 'LP-ERRORES', 'errores', backToHub);
  });
  document.querySelectorAll('[data-weak-theme]').forEach(button => {
    button.addEventListener('click', () => startThemeTest(Number(button.dataset.weakTheme), questionMap, backToHub));
  });
  document.querySelectorAll('[data-theme-test]').forEach(button => {
    button.addEventListener('click', () => startThemeTest(Number(button.dataset.themeTest), questionMap, backToHub));
  });
  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = supuestos.supuestos.find(item => item.id === button.dataset.case);
      renderExercise([selected], selected.titulo, selected.id, 'supuesto', backToHub);
    });
  });
  document.querySelectorAll('[data-sim]').forEach(button => {
    button.addEventListener('click', () => {
      const sim = simulacros.simulacros.find(item => item.id === button.dataset.sim);
      const questions = sim.preguntas.map(id => ({ ...questionMap.get(id), titulo: id }));
      renderExercise(questions, sim.titulo, sim.id, 'simulacro', backToHub, sim.duracionMinutos);
    });
  });
}

function startThemeTest(theme, questionMap, onBack) {
  const prefix = `LP-T${String(theme).padStart(2, '0')}-`;
  const questions = [...questionMap.values()].filter(question => question.id.startsWith(prefix));
  renderExercise(questions, `Test del Tema ${theme}`, `LP-TEMA-${String(theme).padStart(2, '0')}`, 'tema', onBack);
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
    <section class="panel">
      <h2>${escapeHtml(title)}</h2>
      <p class="notice">Responde todas las preguntas y pulsa <strong>Corregir</strong>. Las soluciones no se muestran antes de finalizar.</p>
    </section>
    <form id="exercise-form" class="exercise-list">
      ${items.map((item, index) => renderQuestion(item, index)).join('')}
    </form>`;

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
          <label class="option-row">
            <input type="radio" name="q-${index}" value="${optionIndex}">
            <span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span>
          </label>`).join('')}
      </div>
      <div class="solution" hidden></div>
    </fieldset>`;
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
    const isCorrect = selectedIndex === item.respuestaCorrecta;
    if (selected) answered += 1;
    if (isCorrect) correct += 1;
    if (themeFromQuestionId(item.id)) results.push({ id: item.id, correct: isCorrect });
    card.classList.add(isCorrect ? 'question-correct' : 'question-wrong');
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
  const completedAt = new Date().toISOString();
  saveAttempt({
    id: metadata.exerciseId,
    type: metadata.type,
    title: metadata.title,
    correct,
    answered,
    total: items.length,
    percentage,
    completedAt,
    failedQuestionIds: results.filter(item => !item.correct).map(item => item.id)
  }, results);
  const result = document.createElement('section');
  result.className = 'panel result-panel';
  result.innerHTML = `
    <h2>Resultado: ${correct}/${items.length} · ${percentage}%</h2>
    <p>Respondidas: ${answered}. En blanco: ${items.length - answered}. Resultado y fallos guardados en este dispositivo.</p>
    <div class="score-bar" aria-label="Porcentaje de aciertos"><span style="width:${percentage}%"></span></div>`;
  document.querySelector('#exercise-form').prepend(result);
  document.querySelector('#finish').disabled = true;
  document.querySelector('#finish').textContent = 'Corregido';
  scrollTo({ top: 0, behavior: 'smooth' });
}

async function boot() {
  initTheme();
  try {
    const [programmeResponse, supuestosResponse, simulacrosResponse, questionMap] = await Promise.all([
      fetch(PROGRAM_URL, { cache: 'no-cache' }),
      fetch(SUPUESTOS_URL, { cache: 'no-cache' }),
      fetch(SIMULACROS_URL, { cache: 'no-cache' }),
      loadQuestionBanks()
    ]);
    if (!programmeResponse.ok) throw new Error('No se pudo cargar el programa');
    if (!supuestosResponse.ok) throw new Error('No se pudieron cargar los supuestos');
    if (!simulacrosResponse.ok) throw new Error('No se pudieron cargar los simulacros');
    const [programme, supuestos, simulacros] = await Promise.all([
      programmeResponse.json(), supuestosResponse.json(), simulacrosResponse.json()
    ]);
    const selectedTheme = Number(new URLSearchParams(location.search).get('tema'));
    if (selectedTheme >= 1 && selectedTheme <= 19) {
      startThemeTest(selectedTheme, questionMap, () => {
        history.replaceState(null, '', 'practice.html');
        renderHub(programme, supuestos, simulacros, questionMap);
      });
    } else {
      renderHub(programme, supuestos, simulacros, questionMap);
    }
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();