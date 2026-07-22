const PROGRESS_PREFIX = 'opoweb-study-progress:';
const STATUSES = [
  ['not-started', 'Sin empezar'],
  ['studying', 'En estudio'],
  ['reviewed', 'Repasado'],
  ['mastered', 'Dominado']
];

function currentCallId() {
  const selector = document.querySelector('#call-selector');
  if (selector?.value) return selector.value;
  const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
  return route?.[1] || localStorage.getItem('opoweb-selected-convocatoria') || 'la-puebla-auxiliar-administrativo-2026';
}

function progressKey(callId = currentCallId()) {
  return `${PROGRESS_PREFIX}${callId}`;
}

function readProgress(callId = currentCallId()) {
  try {
    const value = JSON.parse(localStorage.getItem(progressKey(callId)) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch (_) {
    return {};
  }
}

function saveThemeStatus(themeNumber, status, callId = currentCallId()) {
  const progress = readProgress(callId);
  if (status === 'not-started') delete progress[themeNumber];
  else progress[themeNumber] = status;
  localStorage.setItem(progressKey(callId), JSON.stringify(progress));
}

function statusOptions(selected) {
  return STATUSES.map(([value, label]) => `<option value="${value}" ${value === selected ? 'selected' : ''}>${label}</option>`).join('');
}

function availableCards(grid) {
  return [...grid.querySelectorAll('[data-theme]')].filter(card => card.getAttribute('aria-disabled') !== 'true');
}

function renderSummary() {
  const grid = document.querySelector('.theme-grid');
  if (!grid || document.querySelector('.study-progress-panel')) return;
  const cards = availableCards(grid);
  if (!cards.length) return;
  const progress = readProgress();
  const counts = { 'not-started': 0, studying: 0, reviewed: 0, mastered: 0 };
  cards.forEach(card => {
    const status = progress[card.dataset.theme] || 'not-started';
    counts[status] = (counts[status] || 0) + 1;
  });
  const advanced = counts.reviewed + counts.mastered;
  const percentage = Math.round((advanced / cards.length) * 100);
  const panel = document.createElement('section');
  panel.className = 'panel study-progress-panel';
  panel.innerHTML = `<div class="section-heading"><div><p class="eyebrow section-eyebrow">Progreso personal</p><h2>Estado del estudio</h2><p class="search-count">Se calcula sobre ${cards.length} tema${cards.length === 1 ? '' : 's'} con contenido y se guarda únicamente en este dispositivo.</p></div><strong>${percentage}% repasado</strong></div><div class="study-progress-grid"><div class="study-progress-stat"><strong>${counts['not-started']}</strong><span>sin empezar</span></div><div class="study-progress-stat"><strong>${counts.studying}</strong><span>en estudio</span></div><div class="study-progress-stat"><strong>${counts.reviewed}</strong><span>repasados</span></div><div class="study-progress-stat"><strong>${counts.mastered}</strong><span>dominados</span></div></div><div class="study-progress-bar" role="progressbar" aria-label="Progreso de estudio" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}"><span style="width:${percentage}%"></span></div>`;
  grid.closest('.panel')?.before(panel);
}

function decorateThemeCards() {
  const grid = document.querySelector('.theme-grid');
  if (!grid) return;
  const progress = readProgress();
  [...grid.querySelectorAll(':scope > .theme-card')].forEach(card => {
    const number = card.dataset.theme;
    const available = card.getAttribute('aria-disabled') !== 'true';
    const wrapper = document.createElement('div');
    wrapper.className = 'theme-progress-item';
    card.before(wrapper);
    wrapper.append(card);
    const select = document.createElement('select');
    select.className = 'theme-progress-select';
    select.setAttribute('aria-label', `Estado de estudio del tema ${number}`);
    select.innerHTML = available
      ? statusOptions(progress[number] || 'not-started')
      : '<option>Pendiente de contenido</option>';
    select.disabled = !available;
    if (available) {
      select.addEventListener('change', event => {
        event.stopPropagation();
        saveThemeStatus(number, event.target.value);
        refreshProgressUi();
      });
    }
    wrapper.append(select);
  });
}

function renderThemeControl() {
  const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
  if (!route || document.querySelector('.study-status-control')) return;
  const firstPanel = document.querySelector('#app > .panel');
  if (!firstPanel) return;
  const [, callId, themeNumber] = route;
  const current = readProgress(callId)[themeNumber] || 'not-started';
  const control = document.createElement('div');
  control.className = 'study-status-control';
  control.innerHTML = `<label>Mi estado<select id="theme-study-status">${statusOptions(current)}</select></label><span class="study-saved-note">El cambio se guarda automáticamente.</span>`;
  firstPanel.append(control);
  control.querySelector('select').addEventListener('change', event => saveThemeStatus(themeNumber, event.target.value, callId));
}

function refreshProgressUi() {
  document.querySelector('.study-progress-panel')?.remove();
  document.querySelectorAll('.theme-progress-item').forEach(wrapper => {
    const card = wrapper.querySelector('.theme-card');
    if (card) wrapper.replaceWith(card);
  });
  decorateThemeCards();
  renderSummary();
}

function enhance() {
  if (document.querySelector('.theme-grid')) {
    decorateThemeCards();
    renderSummary();
  } else {
    renderThemeControl();
  }
}

let scheduled = false;
const observer = new MutationObserver(() => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    enhance();
  });
});
observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
window.addEventListener('hashchange', enhance);
enhance();