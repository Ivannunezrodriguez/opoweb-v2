const TEST_HISTORY_PREFIX = 'opoweb-test-history-v1';
const MAX_ATTEMPTS_PER_THEME = 50;

function currentRoute() {
  const match = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
  return match ? { callId: match[1], themeNumber: Number(match[2]) } : null;
}

function storageKey(callId, themeNumber) {
  return `${TEST_HISTORY_PREFIX}:${callId}:tema-${themeNumber}`;
}

function readAttempts(callId, themeNumber) {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey(callId, themeNumber)) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (_) {
    return [];
  }
}

function writeAttempt(callId, themeNumber, attempt) {
  const attempts = readAttempts(callId, themeNumber);
  attempts.unshift(attempt);
  localStorage.setItem(storageKey(callId, themeNumber), JSON.stringify(attempts.slice(0, MAX_ATTEMPTS_PER_THEME)));
}

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }).format(new Date(iso));
  } catch (_) {
    return iso;
  }
}

function summary(attempts) {
  if (!attempts.length) return { best: 0, average: 0, latest: null };
  const percentages = attempts.map(item => Number(item.percentage) || 0);
  return {
    best: Math.max(...percentages),
    average: Math.round(percentages.reduce((sum, value) => sum + value, 0) / percentages.length),
    latest: attempts[0]
  };
}

function renderHistory() {
  const route = currentRoute();
  const test = document.querySelector('#theme-test');
  if (!route || !test) return;

  let panel = document.querySelector('#test-history-panel');
  if (!panel) {
    panel = document.createElement('section');
    panel.id = 'test-history-panel';
    panel.className = 'test-history-panel';
    test.querySelector('h2')?.insertAdjacentElement('afterend', panel);
  }

  const attempts = readAttempts(route.callId, route.themeNumber);
  const stats = summary(attempts);
  if (!attempts.length) {
    panel.innerHTML = '<p><strong>Historial:</strong> todavía no has completado ningún intento de este test.</p>';
    return;
  }

  panel.innerHTML = `
    <div class="test-history-summary">
      <div><strong>${attempts.length}</strong><span>intentos</span></div>
      <div><strong>${stats.best}%</strong><span>mejor nota</span></div>
      <div><strong>${stats.average}%</strong><span>media</span></div>
      <div><strong>${stats.latest.percentage}%</strong><span>último</span></div>
    </div>
    <details>
      <summary>Ver últimos resultados</summary>
      <ol class="test-history-list">
        ${attempts.slice(0, 10).map(item => `<li><strong>${item.correct}/${item.total} · ${item.percentage}%</strong><span>${formatDate(item.date)}</span></li>`).join('')}
      </ol>
    </details>`;
}

function saveSubmittedTest(form) {
  const route = currentRoute();
  if (!route) return;

  setTimeout(() => {
    const feedback = [...form.querySelectorAll('.answer-feedback')];
    if (!feedback.length || feedback.some(item => item.hidden)) return;

    const correct = feedback.filter(item => item.classList.contains('correct')).length;
    const total = feedback.length;
    const wrongQuestions = feedback
      .map((item, index) => item.classList.contains('correct') ? null : index + 1)
      .filter(Boolean);

    writeAttempt(route.callId, route.themeNumber, {
      date: new Date().toISOString(),
      correct,
      total,
      percentage: total ? Math.round((correct / total) * 100) : 0,
      wrongQuestions
    });
    renderHistory();
  }, 0);
}

document.addEventListener('submit', event => {
  if (event.target?.id === 'test-form') saveSubmittedTest(event.target);
}, true);

const observer = new MutationObserver(() => renderHistory());
observer.observe(document.querySelector('#app') || document.body, { childList: true, subtree: true });
window.addEventListener('hashchange', renderHistory);
renderHistory();
