const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';
const PRACTICE_CALLS = new Set([
  'la-puebla-auxiliar-administrativo-2026',
  'diputacion-toledo-administrativo-c1-2026'
]);

const activeCallId = () => {
  const route = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
  return route?.[1] || localStorage.getItem(SELECTED_CALL_KEY) || 'la-puebla-auxiliar-administrativo-2026';
};

const syncPracticeLink = () => {
  const callId = activeCallId();
  const headerLink = document.querySelector('.site-header a[href^="practice.html"]');
  if (!headerLink) return;

  const supported = PRACTICE_CALLS.has(callId);
  headerLink.hidden = !supported;
  if (supported) headerLink.href = `practice.html?convocatoria=${encodeURIComponent(callId)}`;
};

const addThemeTestLink = () => {
  syncPracticeLink();
  const match = location.hash.match(/^#([^/]+)\/tema-(\d+)$/) || location.hash.match(/^#tema-(\d+)$/);
  if (!match) return;

  const callId = match.length === 3 ? match[1] : activeCallId();
  const number = Number(match.length === 3 ? match[2] : match[1]);
  const heading = [...document.querySelectorAll('#app h2')].find(node => node.textContent.trim().startsWith(`Tema ${number}.`));
  if (!heading) return;

  const panel = heading.closest('.panel');
  if (!panel || panel.querySelector('[data-theme-test-link]')) return;

  const link = document.createElement('a');
  link.className = 'btn';
  link.dataset.themeTestLink = 'true';

  if (PRACTICE_CALLS.has(callId)) {
    link.href = `practice.html?convocatoria=${encodeURIComponent(callId)}&tema=${number}`;
    link.textContent = '📝 Hacer test del tema';
    link.setAttribute('aria-label', `Abrir el test del tema ${number}`);
  } else {
    link.href = '#theme-test';
    link.textContent = '📝 Ir al test del tema';
    link.setAttribute('aria-label', `Ir al test incluido en el tema ${number}`);
    link.addEventListener('click', event => {
      const test = document.querySelector('#theme-test');
      if (!test) return;
      event.preventDefault();
      test.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const notice = panel.querySelector('.notice');
  if (notice) notice.insertAdjacentElement('afterend', link);
  else panel.append(link);
};

new MutationObserver(addThemeTestLink).observe(document.querySelector('#app'), { childList: true, subtree: true });
addEventListener('hashchange', addThemeTestLink);
addThemeTestLink();