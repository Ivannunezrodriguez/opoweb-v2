const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';

const REVIEW_CONFIG = {
  'la-puebla-auxiliar-administrativo-2026': {
    progressKey: 'opoweb-la-puebla-practice-progress-v2'
  },
  'diputacion-toledo-administrativo-c1-2026': {
    progressKey: 'opoweb-diputacion-practice-progress-v1'
  }
};

function readReviewProgress(callId) {
  const key = REVIEW_CONFIG[callId]?.progressKey;
  if (!key) return { errors: {}, themeStats: {} };
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    return {
      errors: value.errors && typeof value.errors === 'object' ? value.errors : {},
      themeStats: value.themeStats && typeof value.themeStats === 'object' ? value.themeStats : {}
    };
  } catch (_) {
    return { errors: {}, themeStats: {} };
  }
}

function renderReviewPanel() {
  const app = document.querySelector('#practice-app');
  const selector = document.querySelector('#practice-call-selector');
  const hubIntro = app?.querySelector('.panel.intro');
  if (!app || !selector || !hubIntro || app.querySelector('[data-practice-review]')) return;

  const callId = selector.value || localStorage.getItem(SELECTED_CALL_KEY);
  const progress = readReviewProgress(callId);
  const errors = Object.values(progress.errors);
  const weakThemes = Object.entries(progress.themeStats)
    .map(([theme, stat]) => ({
      theme: Number(theme),
      answered: Number(stat.answered) || 0,
      correct: Number(stat.correct) || 0,
      percentage: stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0
    }))
    .filter(item => item.answered > 0)
    .sort((a, b) => a.percentage - b.percentage || b.answered - a.answered)
    .slice(0, 5);

  const pendingCount = errors.length;
  const repeatedCount = errors.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
  const panel = document.createElement('section');
  panel.className = 'panel';
  panel.dataset.practiceReview = 'true';
  panel.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow section-eyebrow">Entrenamiento inteligente</p>
        <h2>Errores y temas débiles</h2>
        <p class="search-count">Los datos pertenecen exclusivamente a la convocatoria seleccionada.</p>
      </div>
    </div>
    <div class="smart-summary">
      <div><span>Preguntas pendientes</span><strong>${pendingCount}</strong></div>
      <div><span>Reincidencias</span><strong>${repeatedCount}</strong></div>
      <div><span>Tema más débil</span><strong>${weakThemes[0] ? `Tema ${weakThemes[0].theme} · ${weakThemes[0].percentage}%` : 'Sin datos'}</strong></div>
    </div>
    ${weakThemes.length ? `<div class="weak-theme-list">${weakThemes.map(item => `
      <button class="weak-theme" type="button" data-review-theme="${item.theme}">
        <span><strong>Tema ${item.theme}</strong><small>${item.correct}/${item.answered} aciertos acumulados</small></span>
        <b>${item.percentage}%</b>
      </button>`).join('')}</div>` : '<p class="empty-state">Aún no hay resultados suficientes para detectar temas débiles.</p>'}
  `;
  hubIntro.insertAdjacentElement('afterend', panel);
}

const app = document.querySelector('#practice-app');
new MutationObserver(renderReviewPanel).observe(app, { childList: true, subtree: true });

app.addEventListener('click', event => {
  const button = event.target.closest('[data-review-theme]');
  if (!button) return;
  document.querySelector(`[data-theme-test="${button.dataset.reviewTheme}"]`)?.click();
});

app.addEventListener('change', event => {
  if (!event.target.closest('#practice-call-selector')) return;
  queueMicrotask(renderReviewPanel);
});

renderReviewPanel();
