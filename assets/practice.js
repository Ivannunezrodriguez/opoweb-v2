const app = document.querySelector('#practice-app');
const THEME_KEY = 'opoweb-theme';
const SELECTED_CALL_KEY = 'opoweb-selected-convocatoria';

const CALLS = [
  {
    id: 'la-puebla-auxiliar-administrativo-2026',
    label: 'La Puebla de Montalbán · Auxiliar Administrativo C2',
    shortLabel: 'La Puebla · C2',
    programmeUrl: 'data/programa.json',
    contentRoot: 'content/la-puebla',
    themeCount: 19,
    supuestosUrl: 'content/la-puebla/supuestos-practicos.json',
    simulacrosUrl: 'content/la-puebla/simulacros.json',
    progressKey: 'opoweb-la-puebla-practice-progress-v2',
    legacyProgressKey: 'opoweb-la-puebla-practice-progress-v1',
    questionPrefix: 'LP-T'
  },
  {
    id: 'diputacion-toledo-administrativo-c1-2026',
    label: 'Diputación Provincial de Toledo · Administrativo C1',
    shortLabel: 'Diputación de Toledo · C1',
    programmeUrl: 'data/programa-diputacion-administrativo-2026.json',
    contentRoot: 'content/diputacion-toledo',
    themeCount: 40,
    supuestosUrl: 'content/diputacion-toledo/supuestos-practicos.json',
    simulacrosUrl: 'content/diputacion-toledo/simulacros.json',
    progressKey: 'opoweb-diputacion-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'DIP-T'
  },
  {
    id: 'diputacion-toledo-auxiliar-c2-2026',
    label: 'Diputación Provincial de Toledo · Auxiliar Administrativo C2',
    shortLabel: 'Diputación de Toledo · Auxiliar C2',
    programmeUrl: 'data/programa-diputacion-auxiliar-c2-2026.json',
    contentRoot: 'content/diputacion-toledo-auxiliar-c2',
    themeCount: 20,
    // Sin supuestos ni simulacros publicados todavía; tests temáticos sí disponibles.
    supuestosUrl: null,
    simulacrosUrl: null,
    progressKey: 'opoweb-diputacion-auxiliar-c2-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'DT-C2-T'
  },
  {
    id: 'uc3m-auxiliar-administrativa-c2-2026',
    label: 'Universidad Carlos III de Madrid · Escala Auxiliar Administrativa C2',
    shortLabel: 'UC3M · Auxiliar C2',
    programmeUrl: 'data/programa-uc3m-auxiliar-administrativa-2026.json',
    contentRoot: 'content/uc3m',
    themeCount: 20,
    supuestosUrl: 'content/uc3m/supuestos-practicos.json',
    simulacrosUrl: 'content/uc3m/simulacros.json',
    progressKey: 'opoweb-uc3m-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'UC3M-T'
  },
  {
    id: 'olias-del-rey-auxiliar-edificios-c2-2026',
    label: 'Olías del Rey · Auxiliar de edificios e instalaciones C2',
    shortLabel: 'Olías del Rey · Auxiliar C2',
    programmeUrl: 'data/programa-olias-auxiliar-edificios-2026.json',
    contentRoot: 'content/olias-auxiliar-edificios',
    themeCount: 22,
    supuestosUrl: 'content/olias-auxiliar-edificios/supuestos-practicos.json',
    simulacrosUrl: 'content/olias-auxiliar-edificios/simulacros.json',
    progressKey: 'opoweb-olias-c2-practice-progress-v1',
    legacyProgressKey: null,
    questionPrefix: 'OLIAS-T'
  }
];

let activeCall = null;
let programme = null;
let supuestos = null;
let simulacros = null;
let questionMap = new Map();
let extraRepasos = [];
let extraRepasoErrors = [];


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
    const raw = localStorage.getItem(activeCall.progressKey);
    if (raw) {
      const value = JSON.parse(raw);
      return {
        attempts: Array.isArray(value.attempts) ? value.attempts : [],
        errors: value.errors && typeof value.errors === 'object' ? value.errors : {},
        themeStats: value.themeStats && typeof value.themeStats === 'object' ? value.themeStats : {}
      };
    }
    if (activeCall.legacyProgressKey) {
      const legacy = JSON.parse(localStorage.getItem(activeCall.legacyProgressKey) || '{"attempts":[]}');
      return { ...emptyProgress(), attempts: Array.isArray(legacy.attempts) ? legacy.attempts : [] };
    }
  } catch (_) {}
  return emptyProgress();
}

function writeProgress(progress) {
  localStorage.setItem(activeCall.progressKey, JSON.stringify(progress));
}

function themeFromQuestion(question) {
  if (Number.isInteger(question.tema)) return question.tema;
  const match = String(question.id || '').match(/^(?:LP|DIP)-T(\d{2})-/);
  return match ? Number(match[1]) : null;
}

function normaliseQuestion(item, fallbackTheme = null) {
  return {
    id: item.id,
    tema: Number(item.tema ?? fallbackTheme) || null,
    titulo: item.titulo || item.id,
    pregunta: item.pregunta || item.enunciado || '',
    enunciado: item.enunciado && item.pregunta ? item.enunciado : '',
    opciones: item.opciones || [],
    correcta: Number(item.correcta ?? item.respuestaCorrecta),
    justificacion: item.justificacion || item.explicacion || '',
    trampa: item.trampa ?? item.trampaExamen ?? '',
    referencia: item.referencia || (Array.isArray(item.referencias) ? item.referencias.join(' · ') : '')
  };
}

function saveAttempt(attempt, results) {
  const progress = readProgress();
  progress.attempts.unshift(attempt);
  progress.attempts = progress.attempts.slice(0, 100);
  results.forEach(result => {
    // Las preguntas en blanco no son errores y no alteran las estadísticas por tema.
    if (result.answered === false || result.reserve === true) return;
    const theme = themeFromQuestion(result.question);
    if (!theme) return;
    const key = String(theme);
    const stat = progress.themeStats[key] || { answered: 0, correct: 0 };
    stat.answered += 1;
    if (result.correct) stat.correct += 1;
    progress.themeStats[key] = stat;
    if (result.correct) {
      if (progress.errors[result.question.id]) {
        progress.errors[result.question.id].count -= 1;
        if (progress.errors[result.question.id].count <= 0) delete progress.errors[result.question.id];
      }
    } else {
      const previous = progress.errors[result.question.id] || { count: 0, theme };
      previous.count += 1;
      previous.theme = theme;
      previous.lastWrongAt = attempt.completedAt;
      progress.errors[result.question.id] = previous;
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
      theme: Number(theme), answered: stat.answered, correct: stat.correct,
      percentage: stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0
    }))
    .sort((a, b) => a.percentage - b.percentage || b.answered - a.answered);
  return { ...progress, average, best, weakThemes };
}

function formatAttemptDate(value) {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(new Date(value));
}

async function loadQuestionBanks() {
  const banks = await Promise.all(Array.from({ length: activeCall.themeCount }, async (_, index) => {
    const tema = index + 1;
    // T06 contiene preguntas provisionales que dependen de Estatutos OAPGT por confirmar.
    // Excluirlas de la práctica evaluable hasta concluir la verificación jurídica.
    if (activeCall.id === 'diputacion-toledo-auxiliar-c2-2026' && tema === 6) return [];
    const path = `${activeCall.contentRoot}/tema-${String(tema).padStart(2, '0')}/preguntas.json`;
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`No se pudo cargar el banco del tema ${tema}`);
    const payload = await response.json();
    const raw = Array.isArray(payload) ? payload : payload.preguntas || [];
    return raw.map(item => normaliseQuestion(item, tema));
  }));
  return new Map(banks.flat().map(question => [question.id, question]));
}

async function loadExtraRepasos() {
  // Recursos creados por OpoWeb, diferentes de los bancos originales y de los simulacros.
  // Un fallo de esta carga opcional no debe impedir estudiar los tests históricos.
  extraRepasoErrors = [];
  if (activeCall.id !== 'uc3m-auxiliar-administrativa-c2-2026') return [];
  const sources = [
    { url: 'data/uc3m-repasos-complementarios-20261106.json', title: 'Repasos documentales de temas' },
    { url: 'data/uc3m-repaso-temas-13-20-20261106.json', title: 'Repaso final de los temas 13–20' },
    { url: 'data/uc3m-presupuesto-supuestos-20261106.json', title: 'Supuestos de presupuesto UC3M 2026' },
    { url: 'data/uc3m-repaso-juridico-t02-t07-20261106.json', title: 'Contrastes jurídicos · Temas 2 a 7' },
    { url: 'data/uc3m-repaso-presupuesto-contratacion-t18-t20-20261106.json', title: 'Presupuesto y contratación · Temas 18 a 20' }
  ];
  const results = await Promise.all(sources.map(async source => {
    try {
      const response = await fetch(source.url, { cache: 'no-cache' });
      if (!response.ok) throw new Error('No se ha podido leer el recurso complementario.');
      const payload = await response.json();
      const packs = Array.isArray(payload.paquetes)
        ? payload.paquetes
        : [{ id: payload.id, titulo: source.title, preguntas: payload.preguntas }];
      if (!packs.length) throw new Error('Sin paquetes de repaso.');
      return packs.map(pack => {
        if (!pack.id || !Array.isArray(pack.preguntas) || !pack.preguntas.length) {
          throw new Error('Banco complementario sin estructura válida.');
        }
        const preguntas = pack.preguntas.map(item =>
          normaliseQuestion({ ...item, titulo: 'Tema ' + item.tema + ' · ' + pack.titulo })
        );
        if (preguntas.some(q =>
          !q.id || !q.pregunta || !Number.isInteger(q.tema) || q.tema < 1 ||
          q.tema > activeCall.themeCount || q.opciones.length !== 4 ||
          !Number.isInteger(q.correcta) || q.correcta < 0 || q.correcta > 3 ||
          !q.justificacion || !q.referencia
        )) throw new Error('Preguntas complementarias incompletas.');
        return { id: String(pack.id), titulo: String(pack.titulo), preguntas };
      });
    } catch (error) {
      extraRepasoErrors.push(source.title);
      return [];
    }
  }));
  return results.flat();
}

function renderExtraRepasos() {
  if (activeCall.id !== 'uc3m-auxiliar-administrativa-c2-2026') return '';
  const total = extraRepasos.reduce((sum, pack) => sum + pack.preguntas.length, 0);
  const cards = extraRepasos.map(pack => {
    const temas = [...new Set(pack.preguntas.map(q => q.tema))].sort((a, b) => a - b);
    return '<button class="practice-card" type="button" data-extra-repaso="' +
      escapeHtml(pack.id) + '"><span class="badge">' + pack.preguntas.length +
      ' preguntas · Tema' + (temas.length > 1 ? 's ' : ' ') + temas.join(', ') +
      '</span><h3>' + escapeHtml(pack.titulo) +
      '</h3><p>Práctica complementaria. Respuestas razonadas con fuentes.</p></button>';
  }).join('');
  const warning = extraRepasoErrors.length
    ? '<p class="notice">Algunos repasos no han podido cargarse. Los tests ordinarios siguen disponibles.</p>'
    : '';
  return '<section class="panel" id="uc3m-extra-repasos"><h2>Repasos adicionales UC3M</h2>' +
    '<p class="search-count">' + total + ' preguntas de elaboración propia en ' +
    extraRepasos.length + ' bloques, distintas de los tests por tema y de los simulacros.' +
    ' No son exámenes oficiales; el corte normativo de la convocatoria sigue pendiente de contraste primario.</p>' +
    '<div class="practice-grid">' + cards + '</div>' + warning + '</section>';
}

function renderHistory(progress) {
  if (!progress.attempts.length) return '<p class="empty-state">Todavía no hay ejercicios corregidos en este dispositivo.</p>';
  return `<div class="history-summary"><div><span>Intentos</span><strong>${progress.attempts.length}</strong></div><div><span>Media</span><strong>${progress.average}%</strong></div><div><span>Mejor resultado</span><strong>${progress.best}%</strong></div></div><div class="history-list">${progress.attempts.slice(0, 8).map(item => `<article class="history-item"><div><strong>${escapeHtml(item.title)}</strong><span>${formatAttemptDate(item.completedAt)}</span></div><b>${item.notaExamen != null ? `${Number(item.notaExamen).toFixed(2).replace('.', ',')}/10` : `${item.notaDirecta != null ? `${Number(item.notaDirecta).toFixed(2).replace('.', ',')}/70 directa` : `${item.correct}/${item.total} · ${item.percentage}%`}`}</b></article>`).join('')}</div>`;
}

function callSelector() {
  return `<label class="search-box convocatoria-selector"><span>Convocatoria</span><select id="practice-call-selector">${CALLS.map(call => `<option value="${call.id}" ${call.id === activeCall.id ? 'selected' : ''}>${escapeHtml(call.label)}</option>`).join('')}</select></label>`;
}

function renderHub() {
  const progress = progressSummary();
  const examBanner = activeCall.id === 'la-puebla-auxiliar-administrativo-2026'
    ? '<section class="panel"><h2>La Puebla · primer ejercicio, sábado 14/11/2026</h2><p><strong>9:30 h · IES Universidad Laboral de Toledo, Avenida de Europa 28.</strong> Acude con DNI o identificación equivalente.</p><p><strong>50 preguntas titulares + 5 de reserva · 60 minutos · 4 opciones.</strong> Acierto +0,20; error −0,05; blanco 0; se exige un mínimo de 5 sobre 10. El segundo ejercicio es práctico.</p><p>Los simulacros de 50+5 muestran y permiten responder las reservas, pero su nota normal se calcula solo con las 50 titulares. Fuente: bases publicadas en BOP Toledo n.º 82, de 05/05/2026, base undécima, y anuncio del tribunal aportado el 02/11/2026.</p></section>'
    : activeCall.id === 'diputacion-toledo-auxiliar-c2-2026'
      ? '<section class="panel"><h2>Diputación de Toledo · Auxiliar Administrativo C2</h2><p><strong>Entrenamiento por temas del Anexo XI (20 temas).</strong> Son preguntas de preparación, no modelos de examen oficial. El tema 6 (Acuerdo Regulador y Estatutos OAPGT) permanece bloqueado en los tests porque su consolidación normativa está pendiente.</p><p><strong>Sin simulacros oficiales ni supuestos prácticos propios publicados en esta sección todavía.</strong> La convocatoria prevé dos ejercicios eliminatorios; la información sobre el examen y las bases oficiales está en la ficha de la convocatoria.</p></section>'
    : activeCall.id === 'uc3m-auxiliar-administrativa-c2-2026'
      ? '<section class="panel"><h2>UC3M C2 · Ejercicio único 21/11/2026</h2><p><strong>70 preguntas + 5 reservas, 60 minutos, cuatro respuestas.</strong> Puntuación directa = aciertos − errores/3; en blanco 0.</p><p><strong>La nota de corte directa la establece el tribunal.</strong> La puntuación transformada sobre 70 y la condición de aprobado no pueden deducirse de un simulacro. Los tres modelos son entrenamiento creado a partir de preguntas de OpoWeb, no exámenes oficiales. La legislación exigible es la vigente en la fecha de publicación de la resolución de admitidos definitivos y anuncio del ejercicio (base primera.7), no necesariamente el día del examen.</p><p>Fuente: convocatoria de 34 plazas, BOE-A-2026-14624, anexos II y III. Llamamiento oficial: <strong>sábado 21/11/2026, a las 10:00 h, Campus de Getafe</strong>. El aula y el edificio concretos se anunciarán posteriormente; comprueba tu admisión definitiva en la web UC3M.</p></section>'
      : activeCall.id === 'olias-del-rey-auxiliar-edificios-c2-2026'
        ? '<section class="panel"><h2>Olías C2 · Dos pruebas eliminatorias</h2><p><strong>Primera: 50 preguntas del temario, máximo 50 puntos, mínimo 25.</strong> <strong>Segunda: 20 preguntas psicotécnicas, máximo 50 puntos, mínimo 25.</strong> Cada error penaliza un tercio del acierto. Las dos pruebas se realizan consecutivamente el mismo día; el tribunal fijará su duración.</p><p>Los simulacros de 50+20 son <strong>entrenamiento propio de OpoWeb, no exámenes oficiales</strong>. Se califican las dos pruebas por separado, con mínimo 25/50 en cada una. Fuente: BOP Toledo n.º 204 de 23/10/2026, anuncio 4833, bases y anexo II.</p></section>'
        : '';
  const openCases = supuestos.supuestos.filter(item => Array.isArray(item.cuestiones));
  const testCases = supuestos.supuestos.filter(item => !Array.isArray(item.cuestiones));
  app.innerHTML = `
    <section class="panel intro"><div class="intro-row"><div><h2>Centro de entrenamiento · ${escapeHtml(activeCall.shortLabel)}</h2><p>Tests por tema, supuestos prácticos y simulacros con justificación, trampa y referencia.</p></div>${callSelector()}</div><div class="summary-grid"><div class="summary-card"><strong>${supuestos.supuestos.length}</strong><span>supuestos prácticos</span></div><div class="summary-card"><strong>${simulacros.simulacros.length}</strong><span>simulacros</span></div><div class="summary-card"><strong>${progress.attempts.length}</strong><span>intentos guardados</span></div></div></section>
    ${examBanner}
    <section class="panel"><div class="section-heading"><div><h2>Mi progreso</h2><p class="search-count">Se guarda únicamente en este navegador y por convocatoria.</p></div>${progress.attempts.length ? '<button id="reset-progress" class="btn secondary" type="button">Borrar historial</button>' : ''}</div>${renderHistory(progress)}</section>
    <section class="panel"><h2>Test por tema</h2><p class="search-count">Preguntas disponibles por tema de los ${activeCall.themeCount} temas.</p><div class="practice-grid">${programme.temas.map(theme => { const stat = progress.themeStats[String(theme.numero)]; const score = stat?.answered ? `${Math.round((stat.correct / stat.answered) * 100)}% acumulado` : 'Sin intentos'; const count = [...questionMap.values()].filter(q => q.tema === theme.numero).length; return `<button class="practice-card" type="button" data-theme-test="${theme.numero}" ${count ? '' : 'disabled aria-disabled="true"'}><span class="badge">${count ? `${count} preguntas · ${escapeHtml(score)}` : 'Preguntas en revisión jurídica'}</span><h3>Tema ${theme.numero}. ${escapeHtml(theme.titulo)}</h3></button>`; }).join('')}</div></section>
    ${renderExtraRepasos()}
    ${supuestos.supuestos.length ? `<section class="panel"><h2>Supuestos prácticos</h2><p class="search-count">Casos transversales con solución razonada y trazabilidad.</p><div class="practice-grid">${[...testCases, ...openCases].map(item => `<button class="practice-card" type="button" data-case="${item.id}"><span class="badge">Temas ${(item.temas || []).join(', ')}</span><h3>${escapeHtml(item.titulo)}</h3><p>${escapeHtml(item.enunciado)}</p></button>`).join('')}</div></section>` : ''}
    ${simulacros.simulacros.length ? `<section class="panel"><h2>Simulacros transversales</h2><div class="practice-grid">${simulacros.simulacros.map(item => `<button class="practice-card" type="button" data-sim="${item.id}"><span class="badge">${item.preguntas.length} preguntas${item.preguntasReserva?.length ? ' + 5 de reserva' : ''} · ${item.duracionMinutos ? `${item.duracionMinutos} min` : "Duración oficial pendiente"}</span><h3>${escapeHtml(item.titulo)}</h3><p>${escapeHtml(item.instrucciones || 'Corrección al finalizar.')}</p></button>`).join('')}</div></section>` : ''}`;

  document.querySelector('#practice-call-selector')?.addEventListener('change', event => loadCall(event.target.value));
  document.querySelector('#reset-progress')?.addEventListener('click', () => {
    if (confirm('¿Borrar el historial de esta convocatoria?')) {
      localStorage.removeItem(activeCall.progressKey);
      if (activeCall.legacyProgressKey) localStorage.removeItem(activeCall.legacyProgressKey);
      renderHub();
    }
  });
  document.querySelectorAll('[data-theme-test]').forEach(button => button.addEventListener('click', () => startThemeTest(Number(button.dataset.themeTest))));
  document.querySelectorAll('[data-extra-repaso]').forEach(button => button.addEventListener('click', () => {
    const pack = extraRepasos.find(item => item.id === button.dataset.extraRepaso);
    if (pack) renderExercise(pack.preguntas, pack.titulo, pack.id, 'repaso');
  }));
  document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
    const selected = supuestos.supuestos.find(item => item.id === button.dataset.case);
    if (Array.isArray(selected.cuestiones)) renderOpenCase(selected);
    else renderExercise([normaliseQuestion(selected)], selected.titulo, selected.id, 'supuesto');
  }));
  document.querySelectorAll('[data-sim]').forEach(button => button.addEventListener('click', () => {
    const sim = simulacros.simulacros.find(item => item.id === button.dataset.sim);
    const questions = sim.preguntas.map(item => typeof item === 'string' ? questionMap.get(item) : normaliseQuestion(item));
    const reserves = (sim.preguntasReserva || []).map(item => typeof item === 'string' ? questionMap.get(item) : normaliseQuestion(item));
    renderExercise([...questions.filter(Boolean), ...reserves.filter(Boolean)], sim.titulo, sim.id, 'simulacro', sim.duracionMinutos, questions.length);
  }));
}

function startThemeTest(theme) {
  const questions = [...questionMap.values()].filter(question => question.tema === theme);
  renderExercise(questions, `Test del Tema ${theme}`, `${activeCall.id}-TEMA-${String(theme).padStart(2, '0')}`, 'tema');
}

function renderOpenCase(item) {
  app.innerHTML = `<div class="toolbar sticky-toolbar practice-toolbar"><button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button><button id="reveal-case" class="btn" type="button">Mostrar soluciones</button></div><section class="panel"><h2>${escapeHtml(item.titulo)}</h2><p class="notice">${escapeHtml(item.enunciado)}</p></section><div class="exercise-list">${item.cuestiones.map((question, index) => `<article class="panel question-card"><h3>${index + 1}. ${escapeHtml(question.pregunta)}</h3><textarea rows="5" aria-label="Respuesta a la cuestión ${index + 1}" placeholder="Redacta tu respuesta antes de mostrar la solución"></textarea><div class="solution" hidden><p><strong>Solución orientativa:</strong> ${escapeHtml(question.respuesta)}</p><blockquote>⚠️ <strong>¡Foco Examen!:</strong> ${escapeHtml(question.trampa)}</blockquote><p class="reference"><strong>Referencias:</strong> ${escapeHtml((question.referencias || []).join(' · '))}</p></div></article>`).join('')}</div>`;
  document.querySelector('#practice-back').addEventListener('click', renderHub);
  document.querySelector('#reveal-case').addEventListener('click', event => {
    document.querySelectorAll('.solution').forEach(node => { node.hidden = false; });
    document.querySelectorAll('textarea').forEach(node => { node.disabled = true; });
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = 'Soluciones mostradas';
  });
  scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExercise(items, title, exerciseId, type, durationMinutes = null, primaryCount = items.length) {
  const oliaModel = String(exerciseId).startsWith('OLIAS-SIM-');
  const deadline = durationMinutes ? Date.now() + durationMinutes * 60000 : null;
  let timerId = null;
  app.innerHTML = `<div class="toolbar sticky-toolbar practice-toolbar"><button id="practice-back" class="btn secondary" type="button">← Entrenamiento</button>${durationMinutes ? '<strong id="timer" class="timer" aria-live="polite"></strong>' : ''}<button id="finish" class="btn" type="button">Corregir</button></div><section class="panel"><h2>${escapeHtml(title)}</h2><p class="notice">Responde las que consideres oportunas y pulsa <strong>Corregir</strong>. Si hay penalización por errores, dejar una pregunta en blanco no penaliza.</p></section><form id="exercise-form" class="exercise-list">${items.map((item, index) => `${oliaModel && index === 50 ? '<section class="panel"><h3>Segunda prueba · Psicotécnicos (20 preguntas)</h3><p>Corregidos con mínimo independiente 25/50.</p></section>' : ''}${index === primaryCount ? '<section class="panel"><h3>Preguntas de reserva (R1–R5)</h3><p>Respóndelas dentro de los mismos 60 minutos. No computan en la nota salvo que el tribunal anule preguntas titulares; el simulador muestra su corrección por separado.</p></section>' : ''}${renderQuestion(item, index, index >= primaryCount, primaryCount)}`).join('')}</form>`;
  document.querySelector('#practice-back').addEventListener('click', () => { if (timerId) clearInterval(timerId); renderHub(); });
  document.querySelector('#finish').addEventListener('click', () => finishExercise(items, timerId, { exerciseId, title, type, primaryCount }));
  if (durationMinutes) {
    const timer = document.querySelector('#timer');
    const updateTimer = () => {
      // El reloj real evita que los intervalos retrasados (móvil en segundo plano) regalen tiempo.
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timer.textContent = `⏱ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      if (remaining <= 300) timer.classList.add('timer-warning');
      if (remaining <= 0) { clearInterval(timerId); finishExercise(items, null, { exerciseId, title, type, primaryCount }); return; }
    };
    updateTimer();
    timerId = setInterval(updateTimer, 1000);
  }
  scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion(item, index, isReserve = false, primaryCount = 0) {
  const questionLabel = isReserve ? 'R' + (index - primaryCount + 1) : String(index + 1);
  const prompt = item.enunciado ? `${item.enunciado} ${item.pregunta}` : item.pregunta;
  return `<fieldset class="panel question-card" data-question="${index}"><legend><span>${questionLabel}</span> ${escapeHtml(item.titulo || item.id)}</legend><p class="question-text">${escapeHtml(prompt)}</p><div class="option-list">${item.opciones.map((option, optionIndex) => `<label class="option-row"><input type="radio" name="q-${index}" value="${optionIndex}"><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span></label>`).join('')}</div><div class="solution" hidden></div></fieldset>`;
}

function finishExercise(items, timerId, metadata) {
  if (document.querySelector('#finish')?.disabled) return;
  if (timerId) clearInterval(timerId);
  const primaryCount = metadata.primaryCount ?? items.length;
  let correct = 0;
  let answered = 0;
  let reserveCorrect = 0;
  let reserveAnswered = 0;
  const results = [];
  items.forEach((item, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const selected = card.querySelector('input:checked');
    const selectedIndex = selected ? Number(selected.value) : null;
    const isCorrect = selectedIndex === item.correcta;
    const isReserve = index >= primaryCount;
    if (isReserve) {
      if (selected) reserveAnswered += 1;
      if (isCorrect) reserveCorrect += 1;
    } else {
      if (selected) answered += 1;
      if (isCorrect) correct += 1;
    }
    results.push({ question: item, correct: isCorrect, answered: Boolean(selected), reserve: isReserve });
    card.classList.add(isCorrect ? 'question-correct' : selected ? 'question-wrong' : 'question-unanswered');
    card.querySelectorAll('input').forEach(input => { input.disabled = true; });
    card.querySelectorAll('.option-row').forEach((row, optionIndex) => {
      if (optionIndex === item.correcta) row.classList.add('correct-option');
      if (selectedIndex === optionIndex && optionIndex !== item.correcta) row.classList.add('wrong-option');
    });
    const solution = card.querySelector('.solution');
    solution.hidden = false;
    solution.innerHTML = `<p><strong>Respuesta correcta:</strong> ${String.fromCharCode(65 + item.correcta)}. ${escapeHtml(item.opciones[item.correcta])}</p><p><strong>Justificación:</strong> ${escapeHtml(item.justificacion)}</p>${item.trampa ? `<blockquote>⚠️ <strong>¡Foco Examen!:</strong> ${escapeHtml(item.trampa)}</blockquote>` : ''}${item.referencia ? `<p class="reference"><strong>Referencia:</strong> ${escapeHtml(item.referencia)}</p>` : ''}`;
  });
  const percentage = Math.round((correct / primaryCount) * 100);
  const examFormat = metadata.type === 'simulacro'
    ? simulacros?.simulacros?.find(sim => sim.id === metadata.exerciseId)?.tipoPuntuacion
    : null;
  const officialExam = examFormat === 'EXAMEN_LA_PUEBLA_2026';
  const uc3mExam = examFormat === 'EXAMEN_UC3M_2026';
  const oliaExam = examFormat === 'EXAMEN_OLIAS_2026' && primaryCount === 70 && items.length === 70;
  const oliaPart = (from, to, weight) => {
    const subset = results.slice(from, to);
    const hits = subset.filter(r => r.answered && r.correct).length;
    const misses = subset.filter(r => r.answered && !r.correct).length;
    return { hits, misses, blank: subset.length - hits - misses, score: Number(((hits - misses / 3) * weight).toFixed(2)) };
  };
  const theory = oliaExam ? oliaPart(0, 50, 1) : null;
  const psych = oliaExam ? oliaPart(50, 70, 2.5) : null;
  const oliaPass = oliaExam && theory.score >= 25 && psych.score >= 25;
  const errors = answered - correct;
  // Solo modelo La Puebla: +0,20/acierto, -0,05/error, 0/en blanco; reservas fuera de la nota.
  const examGrade = officialExam ? Number(Math.max(0, correct * 0.2 - errors * 0.05).toFixed(2)) : null;
  // UC3M: nota DIRECTA A-E/3; no declarar APTO ni inferir transformación, su corte lo fija el tribunal.
  const directScore = uc3mExam ? Number((correct - errors / 3).toFixed(2)) : null;
  const completedAt = new Date().toISOString();
  saveAttempt({ id: metadata.exerciseId, type: metadata.type, title: metadata.title, correct, answered, total: primaryCount, percentage, notaExamen: examGrade, notaDirecta: directScore, notaOliasTeoria: theory?.score, notaOliasPsico: psych?.score, completedAt }, results);
  const result = document.createElement('section');
  result.className = 'panel result-panel';
  result.innerHTML = `<h2>${officialExam ? `Nota de examen: ${examGrade.toFixed(2).replace('.', ',')}/10 · ${examGrade >= 5 ? 'APTO' : 'NO APTO'}` : uc3mExam ? `Puntuación directa UC3M: ${directScore.toFixed(2).replace('.', ',')}/70 · corte pendiente del tribunal` : oliaExam ? `Olías C2: teoría ${theory.score.toFixed(2).replace('.', ',')}/50 · psicotécnico ${psych.score.toFixed(2).replace('.', ',')}/50 · ${oliaPass ? 'SUPERADOS ambos mínimos de entrenamiento' : 'NO superados ambos mínimos de entrenamiento'}` : `Resultado: ${correct}/${primaryCount} · ${percentage}%`}</h2><p>Aciertos: ${correct}. Errores: ${errors}. En blanco: ${primaryCount - answered}.${officialExam ? ' Criterio: +0,20 por acierto, -0,05 por error, 0 en blanco. Las 5 reservas están excluidas de esta nota.' : uc3mExam ? ' UC3M: puntuación directa = aciertos − errores/3. La calificación transformada y la superación dependen del corte que determine el tribunal; este simulacro NO declara APTO. Las reservas no puntúan salvo anulaciones oficiales.' : oliaExam ? ` Olías: teoría ${theory.hits} aciertos, ${theory.misses} errores y ${theory.blank} en blanco; psicotécnico ${psych.hits} aciertos, ${psych.misses} errores y ${psych.blank} en blanco. Aciertos menos un tercio por error, cada parte sobre 50 puntos; entrenamiento no determina el aprobado oficial.` : ''}${items.length > primaryCount ? ` Reservas respondidas: ${reserveAnswered}/${items.length - primaryCount}; reservas acertadas: ${reserveCorrect}/${items.length - primaryCount}.` : ''} Resultado guardado en este dispositivo.</p><div class="score-bar" aria-label="Porcentaje de aciertos"><span style="width:${percentage}%"></span></div>`;
  document.querySelector('#exercise-form').prepend(result);
  document.querySelector('#finish').disabled = true;
  document.querySelector('#finish').textContent = 'Corregido';
  scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadCall(id) {
  activeCall = CALLS.find(call => call.id === id) || CALLS[0];
  localStorage.setItem(SELECTED_CALL_KEY, activeCall.id);
  history.replaceState(null, '', `practice.html?convocatoria=${encodeURIComponent(activeCall.id)}`);
  document.title = `OpoWeb v2 · Práctica · ${activeCall.shortLabel}`;
  app.innerHTML = '<section class="panel intro"><h2>Cargando entrenamiento…</h2></section>';
  const [programmeResponse, supuestosResponse, simulacrosResponse, banks] = await Promise.all([
    fetch(activeCall.programmeUrl, { cache: 'no-cache' }),
    activeCall.supuestosUrl ? fetch(activeCall.supuestosUrl, { cache: 'no-cache' }) : Promise.resolve(null),
    activeCall.simulacrosUrl ? fetch(activeCall.simulacrosUrl, { cache: 'no-cache' }) : Promise.resolve(null),
    loadQuestionBanks()
  ]);
  if (!programmeResponse.ok || (supuestosResponse && !supuestosResponse.ok) || (simulacrosResponse && !simulacrosResponse.ok)) throw new Error('No se pudieron cargar todos los recursos de práctica');
  [programme, supuestos, simulacros] = await Promise.all([
    programmeResponse.json(),
    supuestosResponse ? supuestosResponse.json() : Promise.resolve({ supuestos: [] }),
    simulacrosResponse ? simulacrosResponse.json() : Promise.resolve({ simulacros: [] })
  ]);
  questionMap = banks;
  extraRepasos = await loadExtraRepasos();
  const selectedTheme = Number(new URLSearchParams(location.search).get('tema'));
  if (selectedTheme >= 1 && selectedTheme <= activeCall.themeCount) startThemeTest(selectedTheme);
  else renderHub();
}

async function boot() {
  initTheme();
  try {
    const params = new URLSearchParams(location.search);
    await loadCall(params.get('convocatoria') || localStorage.getItem(SELECTED_CALL_KEY) || CALLS[0].id);
  } catch (error) {
    app.innerHTML = `<section class="panel"><h2>Error de carga</h2><p>${escapeHtml(error.message)}</p></section>`;
  }
}

boot();
