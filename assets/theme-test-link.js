const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';

const syncPracticeLink = () => {
  const callId = localStorage.getItem(SELECTED_CALL_KEY) || 'la-puebla-auxiliar-administrativo-2026';
  const headerLink = document.querySelector('.site-header a[href^="practice.html"]');
  if (headerLink) {
    headerLink.hidden = false;
    headerLink.href = `practice.html?convocatoria=${encodeURIComponent(callId)}`;
  }
};

const addThemeTestLink = () => {
  syncPracticeLink();
  const match = location.hash.match(/^#([^/]+)\/tema-(\d+)$/) || location.hash.match(/^#tema-(\d+)$/);
  if (!match) return;
  const callId = match.length === 3 ? match[1] : (localStorage.getItem(SELECTED_CALL_KEY) || 'la-puebla-auxiliar-administrativo-2026');
  const number = Number(match.length === 3 ? match[2] : match[1]);
  const heading = [...document.querySelectorAll('#app h2')].find(node => node.textContent.trim().startsWith(`Tema ${number}.`));
  if (!heading) return;
  const panel = heading.closest('.panel');
  if (!panel || panel.querySelector('[data-theme-test-link]')) return;
  const link = document.createElement('a');
  link.className = 'btn';
  link.dataset.themeTestLink = 'true';
  link.href = `practice.html?convocatoria=${encodeURIComponent(callId)}&tema=${number}`;
  link.textContent = '📝 Hacer test del tema';
  link.setAttribute('aria-label', `Hacer test de 12 preguntas del tema ${number}`);
  const notice = panel.querySelector('.notice');
  if (notice) notice.insertAdjacentElement('afterend', link);
  else panel.append(link);
};

new MutationObserver(addThemeTestLink).observe(document.querySelector('#app'), { childList: true, subtree: true });
addEventListener('hashchange', addThemeTestLink);
addThemeTestLink();
