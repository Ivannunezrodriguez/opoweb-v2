const ERROR_BANK_PREFIX = 'opoweb-error-bank-v1';
const TEST_HISTORY_PREFIX = 'opoweb-test-history-v1';
const REQUIRED_CORRECT_STREAK = 2;

function currentRoute() {
  const match = location.hash.match(/^#([^/]+)\/tema-(\d+)$/);
  return match ? { callId: match[1], themeNumber: Number(match[2]) } : null;
}

function bankKey(route) {
  return `${ERROR_BANK_PREFIX}:${route.callId}:tema-${route.themeNumber}`;
}

function historyKey(route) {
  return `${TEST_HISTORY_PREFIX}:${route.callId}:tema-${route.themeNumber}`;
}

function readBank(route) {
  try {
    const value = JSON.parse(localStorage.getItem(bankKey(route)) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch (_) {
    return {};
  }
}

function writeBank(route, bank) {
  localStorage.setItem(bankKey(route), JSON.stringify(bank));
}

function seedFromHistory(route) {
  const bank = readBank(route);
  if (bank.__seeded) return bank;
  try {
    const attempts = JSON.parse(localStorage.getItem(historyKey(route)) || '[]');
    (Array.isArray(attempts) ? attempts : []).forEach(attempt => {
      (attempt.wrongQuestions || []).forEach(number => {
        if (!bank[number]) bank[number] = { streak: 0, failures: 1 };
      });
    });
  } catch (_) {}
  bank.__seeded = true;
  writeBank(route, bank);
  return bank;
}

function pendingNumbers(bank) {
  return Object.keys(bank)
    .filter(key => key !== '__seeded' && bank[key])
    .map(Number)
    .filter(Number.isInteger)
    .sort((a, b) => a - b);
}

function updateQuestion(bank, number, correct) {
  if (correct) {
    if (!bank[number]) return;
    bank[number].streak = (Number(bank[number].streak) || 0) + 1;
    if (bank[number].streak >= REQUIRED_CORRECT_STREAK) delete bank[number];
    return;
  }
  bank[number] = {
    streak: 0,
    failures: (Number(bank[number]?.failures) || 0) + 1,
    lastFailure: new Date().toISOString()
  };
}

function questionsPath(route) {
  const roots = {
    'la-puebla-auxiliar-administrativo-2026': 'content/la-puebla',
    'diputacion-toledo-administrativo-c1-2026': 'content/diputacion-toledo',
    'uc3m-auxiliar-administrativa-c2-2026': 'content/uc3m'
  };
  const root = roots[route.callId];
  if (!root) return null;
  return `${root}/tema-${String(route.themeNumber).padStart(2, '0')}/preguntas.json`;
}

function normaliseQuestions(payload) {
  const raw = Array.isArray(payload) ? payload : payload.preguntas || [];
  return raw.map(item => ({
    text: item.pregunta || item.enunciado || '',
    options: item.opciones || [],
    correct: Number(item.correcta ?? item.respuestaCorrecta),
    explanation: item.justificacion || '',
    reference: item.referencia || ''
  }));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function renderPanel() {
  const route = currentRoute();
  const test = document.querySelector('#theme-test');
  if (!route || !test) return;
  const bank = seedFromHistory(route);
  const pending = pendingNumbers(bank);
  let panel = document.querySelector('#error-review-panel');
  if (!panel) {
    panel = document.createElement('section');
    panel.id = 'error-review-panel';
    panel.className = 'error-review-panel';
    test.insertAdjacentElement('afterend', panel);
  }
  const progress = pending.length
    ? `${pending.length} pregunta${pending.length === 1 ? '' : 's'} pendiente${pending.length === 1 ? '' : 's'}`
    : 'Banco de errores vacío';
  panel.innerHTML = `<div class="error-review-heading"><div><p class="eyebrow section-eyebrow">Repaso inteligente</p><h2>Preguntas falladas</h2><p>${progress}. Una pregunta se elimina tras acertarla ${REQUIRED_CORRECT_STREAK} veces seguidas.</p></div><button id="start-error-review" class="btn" type="button" ${pending.length ? '' : 'disabled'}>🎯 Repasar errores</button></div><div id="error-review-slot"></div>`;
  document.querySelector('#start-error-review')?.addEventListener('click', () => startReview(route));
}

async function startReview(route) {
  const slot = document.querySelector('#error-review-slot');
  if (!slot) return;
  slot.innerHTML = '<p class="notice">Cargando preguntas falladas…</p>';
  try {
    const path = questionsPath(route);
    if (!path) throw new Error('Convocatoria no compatible');
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const allQuestions = normaliseQuestions(await response.json());
    const numbers = pendingNumbers(readBank(route)).filter(number => allQuestions[number - 1]);
    if (!numbers.length) {
      renderPanel();
      return;
    }
    slot.innerHTML = `<form id="error-review-form">${numbers.map((number, index) => {
      const question = allQuestions[number - 1];
      return `<fieldset class="question-card"><legend><strong>${index + 1}. ${escapeHtml(question.text)}</strong><small>Pregunta ${number} del test original</small></legend>${question.options.map((option, optionIndex) => `<label class="answer-option"><input type="radio" name="review-${number}" value="${optionIndex}"><span>${escapeHtml(option)}</span></label>`).join('')}<div class="answer-feedback" id="review-feedback-${number}" hidden></div></fieldset>`;
    }).join('')}<button class="btn" type="submit">Corregir repaso</button></form>`;
    document.querySelector('#error-review-form')?.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const bank = readBank(route);
      let correctCount = 0;
      numbers.forEach(number => {
        const question = allQuestions[number - 1];
        const raw = data.get(`review-${number}`);
        const selected = raw === null ? NaN : Number(raw);
        const correct = Number.isInteger(selected) && selected === question.correct;
        if (correct) correctCount += 1;
        updateQuestion(bank, number, correct);
        const feedback = document.querySelector(`#review-feedback-${number}`);
        feedback.hidden = false;
        feedback.className = `answer-feedback ${correct ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `<strong>${correct ? 'Correcta' : 'Incorrecta'}.</strong> ${escapeHtml(question.explanation)}${question.reference ? `<br><small>Referencia: ${escapeHtml(question.reference)}</small>` : ''}`;
      });
      writeBank(route, bank);
      event.currentTarget.querySelectorAll('input').forEach(input => { input.disabled = true; });
      const result = document.createElement('div');
      result.className = 'notice error-review-result';
      result.innerHTML = `<strong>Resultado del repaso: ${correctCount}/${numbers.length}</strong> · quedan ${pendingNumbers(bank).length} preguntas en el banco.`;
      event.currentTarget.prepend(result);
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, { once: true });
  } catch (error) {
    slot.innerHTML = `<p class="notice warning">No se ha podido cargar el repaso: ${escapeHtml(error.message)}.</p>`;
  }
}

function captureNormalTest(form) {
  const route = currentRoute();
  if (!route) return;
  setTimeout(() => {
    const feedback = [...form.querySelectorAll('.answer-feedback')];
    if (!feedback.length || feedback.some(item => item.hidden)) return;
    const bank = seedFromHistory(route);
    feedback.forEach((item, index) => updateQuestion(bank, index + 1, item.classList.contains('correct')));
    writeBank(route, bank);
    renderPanel();
  }, 20);
}

document.addEventListener('submit', event => {
  if (event.target?.id === 'test-form') captureNormalTest(event.target);
}, true);

const observer = new MutationObserver(() => renderPanel());
observer.observe(document.querySelector('#app') || document.body, { childList: true, subtree: true });
window.addEventListener('hashchange', renderPanel);
renderPanel();