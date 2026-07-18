const addThemeTestLink = () => {
  const match = location.hash.match(/^#tema-(\d+)$/);
  if (!match) return;
  const number = Number(match[1]);
  const heading = [...document.querySelectorAll('#app h2')].find(node => node.textContent.trim().startsWith(`Tema ${number}.`));
  if (!heading) return;
  const panel = heading.closest('.panel');
  if (!panel || panel.querySelector('[data-theme-test-link]')) return;
  const link = document.createElement('a');
  link.className = 'btn';
  link.dataset.themeTestLink = 'true';
  link.href = `practice.html?tema=${number}`;
  link.textContent = '📝 Hacer test del tema';
  link.setAttribute('aria-label', `Hacer test de 12 preguntas del tema ${number}`);
  const notice = panel.querySelector('.notice');
  if (notice) notice.insertAdjacentElement('afterend', link);
  else panel.append(link);
};

new MutationObserver(addThemeTestLink).observe(document.querySelector('#app'), { childList: true, subtree: true });
addEventListener('hashchange', addThemeTestLink);
addThemeTestLink();
