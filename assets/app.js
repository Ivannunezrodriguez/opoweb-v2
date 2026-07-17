const app = document.querySelector('#app');
const PROGRAM_URL = 'data/programa.json';

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
    if (!line.trim()) {
      index += 1;
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      html.push('<hr>');
      index += 1;
      continue;
    }

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
  return `<span class="badge ${approved ? 'approved' : 'pending'}">${approved ? 'Aprobado por el usuario' : 'Pendiente de reconstrucción'}</span>`;
}

function renderProgramme(programme) {
  const approved = programme.temas.filter(theme => theme.estado === 'APROBADO_USUARIO' || theme.estado === 'PUBLICADO').length;
  const pending = programme.temas.length - approved;

  app.innerHTML = `
    <section class="panel intro">
      <h2>Estado real del manual</h2>
      <p>Solo se publica como manual lo que ha sido reconstruido y aprobado expresamente. No se han importado resúmenes ni bancos de preguntas del repositorio antiguo.</p>
      <div class="summary-grid">
        <div class="summary-card"><strong>${programme.temas.length}</strong><span>temas oficiales</span></div>
        <div class="summary-card"><strong>${approved}</strong><span>temas aprobados</span></div>
        <div class="summary-card"><strong>${pending}</strong><span>temas pendientes</span></div>
      </div>
    </section>
    <section class="panel">
      <h2>Programa oficial</h2>
      <p class="notice">Fuente: ${escapeHtml(programme.convocatoria.fuentePrograma.publicacion)} · CSV ${escapeHtml(programme.convocatoria.fuentePrograma.codigoVerificacion)}.</p>
      <div class="theme-grid">
        ${programme.temas.map(theme => `
          <button class="theme-card" type="button" data-theme="${theme.numero}">
            ${badge(theme.estado)}
            <h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3>
          </button>
        `).join('')}
      </div>
    </section>`;

  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', () => openTheme(programme, Number(button.dataset.theme)));
  });
}

async function openTheme(programme, number) {
  const theme = programme.temas.find(item => item.numero === number);
  if (!theme) return;
  history.replaceState(null, '', `#tema-${number}`);

  if (theme.estado !== 'APROBADO_USUARIO' && theme.estado !== 'PUBLICADO') {
    app.innerHTML = `
      <div class="toolbar"><button id="back" class="btn secondary" type="button">← Volver al programa</button></div>
      <section class="panel">
        ${badge(theme.estado)}
        <h2>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h2>
        <p class="notice warning">Este tema no contiene teoría heredada. Se reconstruirá desde el epígrafe oficial y se presentará al usuario antes de publicarlo.</p>
      </section>`;
    document.querySelector('#back').addEventListener('click', () => {
      history.replaceState(null, '', location.pathname);
      renderProgramme(programme);
    });
    return;
  }

  app.innerHTML = `
    <div class="toolbar"><button id="back" class="btn secondary" type="button">← Volver al programa</button></div>
    <section class="panel">
      ${badge(theme.estado)}
      <h2>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h2>
      <p class="notice">Aprobado expresamente el ${escapeHtml(theme.aprobadoEl)}. El manual procede de la reconstrucción revisada por el usuario.</p>
    </section>
    <article id="manual" class="panel manual"><p>Cargando manual aprobado…</p></article>`;

  document.querySelector('#back').addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    renderProgramme(programme);
  });

  try {
    const response = await fetch(theme.manual, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    document.querySelector('#manual').innerHTML = renderMarkdown(markdown);
  } catch (error) {
    document.querySelector('#manual').innerHTML = `<p class="notice warning">No se ha podido cargar el manual aprobado: ${escapeHtml(error.message)}.</p>`;
  }
}

async function boot() {
  try {
    const response = await fetch(PROGRAM_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const programme = await response.json();
    const selected = Number(location.hash.match(/^#tema-(\d+)$/)?.[1]);
    if (selected) await openTheme(programme, selected);
    else renderProgramme(programme);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();