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
      <p>Solo se publica como manual lo que ha sido reconstruido y aprobado expresamente. Los bancos de preguntas se publican mediante una revisión independiente y trazable.</p>
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

function questionSource(source) {
  if (!source) return '';
  const parts = [source.norma, source.articulos, source.manual].filter(Boolean);
  return parts.map(escapeHtml).join(' · ');
}

function renderQuestionnaire(theme, bank) {
  const test = document.querySelector('#test');
  test.innerHTML = `
    <div class="test-heading">
      <div>
        <span class="badge approved">Banco aprobado</span>
        <h2>Test del Tema ${theme.numero}</h2>
        <p>${bank.preguntas.length} preguntas · una respuesta correcta · sin penalización.</p>
      </div>
    </div>
    <div id="test-result" class="test-result" role="status" aria-live="polite"></div>
    <form id="test-form">
      ${bank.preguntas.map((question, index) => `
        <fieldset class="question-card" data-question="${escapeHtml(question.id)}">
          <legend><span class="question-number">${index + 1}</span>${escapeHtml(question.enunciado)}</legend>
          <div class="option-list">
            ${question.opciones.map(option => `
              <label class="test-option" data-option="${escapeHtml(option.id)}">
                <input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(option.id)}">
                <span class="option-letter">${escapeHtml(option.id)}</span>
                <span>${escapeHtml(option.texto)}</span>
              </label>
            `).join('')}
          </div>
          <div class="question-feedback" hidden></div>
        </fieldset>
      `).join('')}
      <div class="test-actions">
        <button id="correct-test" class="btn" type="submit">Corregir test</button>
        <button id="reset-test" class="btn secondary" type="button">Reiniciar</button>
      </div>
    </form>`;

  const form = document.querySelector('#test-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    correctQuestionnaire(bank);
  });
  document.querySelector('#reset-test').addEventListener('click', () => renderQuestionnaire(theme, bank));
}

function correctQuestionnaire(bank) {
  let correct = 0;
  let answered = 0;

  bank.preguntas.forEach(question => {
    const fieldset = document.querySelector(`[data-question="${CSS.escape(question.id)}"]`);
    const selected = fieldset.querySelector('input:checked')?.value;
    const feedback = fieldset.querySelector('.question-feedback');
    const correctOption = question.opciones.find(option => option.id === question.correcta);

    if (selected) answered += 1;
    if (selected === question.correcta) correct += 1;

    fieldset.querySelectorAll('.test-option').forEach(label => {
      label.classList.remove('correct', 'incorrect');
      const optionId = label.dataset.option;
      if (optionId === question.correcta) label.classList.add('correct');
      if (selected && optionId === selected && selected !== question.correcta) label.classList.add('incorrect');
    });
    fieldset.querySelectorAll('input').forEach(input => { input.disabled = true; });

    const outcome = !selected
      ? '<strong>Sin responder.</strong>'
      : selected === question.correcta
        ? '<strong>Respuesta correcta.</strong>'
        : `<strong>Respuesta incorrecta.</strong> La opción correcta es ${escapeHtml(question.correcta)}: ${escapeHtml(correctOption?.texto ?? '')}`;

    feedback.hidden = false;
    feedback.innerHTML = `
      <p>${outcome}</p>
      <p>${escapeHtml(question.justificacion)}</p>
      <p class="question-source"><strong>Fuente:</strong> ${questionSource(question.fuente)}</p>`;
  });

  const percentage = Math.round((correct / bank.preguntas.length) * 100);
  const unanswered = bank.preguntas.length - answered;
  const result = document.querySelector('#test-result');
  result.className = `test-result ${percentage >= 70 ? 'passed' : 'needs-review'}`;
  result.innerHTML = `<strong>${correct} de ${bank.preguntas.length} correctas (${percentage} %).</strong>${unanswered ? ` ${unanswered} sin responder.` : ''}`;
  document.querySelector('#correct-test').disabled = true;
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      <div class="toolbar theme-tabs" aria-label="Contenido del tema">
        <button id="show-manual" class="btn" type="button" aria-pressed="true">Manual</button>
        <button id="show-test" class="btn secondary" type="button" aria-pressed="false" disabled>Test pendiente</button>
      </div>
    </section>
    <article id="manual" class="panel manual"><p>Cargando manual aprobado…</p></article>
    <section id="test" class="panel test-panel" hidden></section>`;

  document.querySelector('#back').addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    renderProgramme(programme);
  });

  const manualPanel = document.querySelector('#manual');
  const testPanel = document.querySelector('#test');
  const manualButton = document.querySelector('#show-manual');
  const testButton = document.querySelector('#show-test');

  const showView = view => {
    const testVisible = view === 'test';
    manualPanel.hidden = testVisible;
    testPanel.hidden = !testVisible;
    manualButton.classList.toggle('secondary', testVisible);
    testButton.classList.toggle('secondary', !testVisible);
    manualButton.setAttribute('aria-pressed', String(!testVisible));
    testButton.setAttribute('aria-pressed', String(testVisible));
  };
  manualButton.addEventListener('click', () => showView('manual'));

  try {
    const response = await fetch(theme.manual, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    manualPanel.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    manualPanel.innerHTML = `<p class="notice warning">No se ha podido cargar el manual aprobado: ${escapeHtml(error.message)}.</p>`;
  }

  try {
    const response = await fetch(theme.preguntas, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bank = await response.json();
    if (bank.estado === 'APROBADO_USUARIO' && Array.isArray(bank.preguntas) && bank.preguntas.length) {
      testButton.disabled = false;
      testButton.textContent = `Test · ${bank.preguntas.length} preguntas`;
      renderQuestionnaire(theme, bank);
      testButton.addEventListener('click', () => showView('test'));
    } else if (bank.estado === 'EN_REVISION_USUARIO') {
      testButton.textContent = 'Test en revisión';
    }
  } catch {
    testButton.textContent = 'Test no disponible';
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
