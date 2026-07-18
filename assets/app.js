const app = document.querySelector('#app');
const PROGRAM_URL = 'data/programa.json';
const TRACKING_URL = 'data/seguimiento-la-puebla.json';
const THEME_KEY = 'opoweb-theme';
const searchIndex = new Map();

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/(https:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

function isTableSeparator(line) {
  return /^\|?\s*:?-{3,}/.test(line) && line.includes('|');
}

function tableCells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html = [];
  let index = 0;
  let inCode = false;
  let code = [];

  while (index < lines.length) {
    const line = lines[index];
    if (line.startsWith('```')) {
      if (inCode) {
        html.push(`<pre>${escapeHtml(code.join('\n'))}</pre>`);
        code = [];
      }
      inCode = !inCode;
      index += 1;
      continue;
    }
    if (inCode) {
      code.push(line);
      index += 1;
      continue;
    }
    if (!line.trim()) { index += 1; continue; }
    if (/^---+$/.test(line.trim())) { html.push('<hr>'); index += 1; continue; }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = Math.min(4, heading[1].length + 1);
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      html.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
      index += 1;
      continue;
    }
    if (line.trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const head = tableCells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      html.push(`<div class="table-wrap"><table><thead><tr>${head.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*-\s+/, ''));
        index += 1;
      }
      html.push(`<ul>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
        index += 1;
      }
      html.push(`<ol>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (
      index < lines.length && lines[index].trim() &&
      !/^(#{1,4})\s+/.test(lines[index]) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^\s*-\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !lines[index].startsWith('> ') &&
      !lines[index].startsWith('```') &&
      !(lines[index].trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1]))
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
  }
  return html.join('\n');
}

function badge(status) {
  const approved = status === 'APROBADO_USUARIO' || status === 'PUBLICADO';
  return `<span class="badge ${approved ? 'approved' : 'pending'}">${approved ? 'Contenido publicado' : 'Pendiente de auditoría'}</span>`;
}

function normalise(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function formatDate(value) {
  if (!value) return 'Fecha pendiente';
  return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
    .format(new Date(`${value}T12:00:00`));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  const button = document.querySelector('#theme-toggle');
  if (button) {
    button.textContent = theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
    button.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved || preferred);
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

async function buildSearchIndex(programme) {
  await Promise.all(programme.temas.map(async theme => {
    let manualText = '';
    if (theme.manual) {
      try {
        const response = await fetch(theme.manual, { cache: 'no-cache' });
        if (response.ok) manualText = await response.text();
      } catch (_) {}
    }
    searchIndex.set(theme.numero, normalise(`${theme.titulo}\n${manualText}`));
  }));
}

function renderTracking(tracking) {
  const personal = tracking.situacionPersonal;
  return `
    <section class="panel tracking-panel" id="seguimiento-ope">
      <div class="section-heading">
        <div>
          <p class="eyebrow section-eyebrow">Seguimiento personal</p>
          <h2>Plazos y estado de la OPE</h2>
          <p class="search-count">Actualizado el ${formatDate(tracking.actualizadoEl)}.</p>
        </div>
        <span class="status-pill ${personal.inscrito ? 'status-ok' : 'status-warning'}">${personal.inscrito ? '✓ Estoy apuntado' : 'Inscripción no confirmada'}</span>
      </div>
      <div class="personal-status">
        <div><span>Estado</span><strong>${escapeHtml(personal.estado)}</strong></div>
        <div><span>Fecha de presentación</span><strong>${formatDate(personal.fechaPresentacion)}</strong></div>
        <div><span>Convocatoria</span><strong>4 plazas · C2 · concurso-oposición libre</strong></div>
      </div>
      <p class="privacy-note">🔒 ${escapeHtml(personal.notaPrivacidad)}</p>
      <div class="timeline">
        ${tracking.hitos.map(item => `
          <article class="timeline-item ${item.estado}">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div>
              <p class="timeline-date">${formatDate(item.fecha)}</p>
              <h3>${escapeHtml(item.titulo)}</h3>
              <p>${escapeHtml(item.detalle)}</p>
            </div>
          </article>`).join('')}
      </div>
      <details class="sources-details">
        <summary>Fuentes oficiales del seguimiento</summary>
        <ul>${tracking.fuentes.map(source => `<li><strong>${escapeHtml(source.nombre)}:</strong> ${escapeHtml(source.referencia)}</li>`).join('')}</ul>
      </details>
    </section>`;
}

function renderProgramme(programme, tracking, query = '') {
  const approved = programme.temas.filter(theme => theme.estado === 'APROBADO_USUARIO' || theme.estado === 'PUBLICADO').length;
  const pending = programme.temas.length - approved;
  const term = normalise(query.trim());
  const visibleThemes = term
    ? programme.temas.filter(theme => searchIndex.get(theme.numero)?.includes(term) || normalise(theme.titulo).includes(term))
    : programme.temas;

  app.innerHTML = `
    <section class="panel intro">
      <div class="intro-row">
        <div>
          <h2>Manual oficial de La Puebla</h2>
          <p>Auditoría jurídica y técnica continua sobre el programa oficial de <strong>19 temas</strong>, sin incorporar contenido no verificado.</p>
        </div>
        <div class="quick-actions">
          <a class="btn secondary" href="#seguimiento-ope">Plazos de la OPE</a>
          <a class="btn secondary" href="docs/oficiales/la-puebla/" aria-label="Abrir documentos oficiales">Documentos oficiales</a>
        </div>
      </div>
      <div class="summary-grid">
        <div class="summary-card"><strong>${programme.temas.length}</strong><span>temas oficiales</span></div>
        <div class="summary-card"><strong>${approved}</strong><span>publicados</span></div>
        <div class="summary-card"><strong>${pending}</strong><span>pendientes de auditoría</span></div>
      </div>
    </section>
    ${renderTracking(tracking)}
    <section class="panel">
      <div class="section-heading">
        <div><h2>Programa oficial</h2><p class="notice">Fuente: ${escapeHtml(programme.convocatoria.fuentePrograma.publicacion)} · CSV ${escapeHtml(programme.convocatoria.fuentePrograma.codigoVerificacion)}.</p></div>
        <label class="search-box"><span>Buscar</span><input id="theme-search" type="search" placeholder="Plazos, recursos, IBI, Word…" value="${escapeHtml(query)}" autocomplete="off"></label>
      </div>
      <p id="search-count" class="search-count">${term ? `${visibleThemes.length} resultado(s)` : 'Busca en títulos y contenido completo de los manuales.'}</p>
      <div class="theme-grid">
        ${visibleThemes.map(theme => `
          <button class="theme-card" type="button" data-theme="${theme.numero}">
            ${badge(theme.estado)}
            <h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3>
          </button>
        `).join('') || '<p class="empty-state">No hay resultados. Prueba con otro término.</p>'}
      </div>
    </section>`;

  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', () => openTheme(programme, tracking, Number(button.dataset.theme)));
  });
  const search = document.querySelector('#theme-search');
  search?.addEventListener('input', event => renderProgramme(programme, tracking, event.target.value));
}

async function openTheme(programme, tracking, number) {
  const theme = programme.temas.find(item => item.numero === number);
  if (!theme) return;
  history.replaceState(null, '', `#tema-${number}`);

  app.innerHTML = `
    <div class="toolbar sticky-toolbar">
      <button id="back" class="btn secondary" type="button">← Programa</button>
      <button id="top" class="btn secondary" type="button">↑ Inicio</button>
    </div>
    <section class="panel">
      ${badge(theme.estado)}
      <h2>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h2>
      <p class="notice">Versión editorial sometida a auditoría de norma vigente y fuentes oficiales.</p>
    </section>
    <article id="manual" class="panel manual"><p>Cargando manual…</p></article>`;

  document.querySelector('#back').addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    renderProgramme(programme, tracking);
  });
  document.querySelector('#top').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  try {
    const response = await fetch(theme.manual, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    document.querySelector('#manual').innerHTML = renderMarkdown(markdown);
  } catch (error) {
    document.querySelector('#manual').innerHTML = `<p class="notice warning">No se ha podido cargar el manual: ${escapeHtml(error.message)}.</p>`;
  }
}

async function boot() {
  initTheme();
  try {
    const [programmeResponse, trackingResponse] = await Promise.all([
      fetch(PROGRAM_URL, { cache: 'no-cache' }),
      fetch(TRACKING_URL, { cache: 'no-cache' })
    ]);
    if (!programmeResponse.ok) throw new Error(`Programa: HTTP ${programmeResponse.status}`);
    if (!trackingResponse.ok) throw new Error(`Seguimiento: HTTP ${trackingResponse.status}`);
    const [programme, tracking] = await Promise.all([programmeResponse.json(), trackingResponse.json()]);
    await buildSearchIndex(programme);
    const selected = Number(location.hash.match(/^#tema-(\d+)$/)?.[1]);
    if (selected) await openTheme(programme, tracking, selected);
    else renderProgramme(programme, tracking);

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();
