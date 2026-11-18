const escapeText = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

document.addEventListener('submit', event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || form.id !== 'test-form') return;

  event.preventDefault();
  event.stopImmediatePropagation();

  const questionCards = [...form.querySelectorAll('.question-card')];
  let correctCount = 0;
  let unansweredCount = 0;

  questionCards.forEach((card, index) => {
    const selectedInput = form.querySelector(`input[name="q-${index}"]:checked`);
    const feedback = card.querySelector(`#feedback-${index}`);
    if (!feedback) return;

    const questionData = window.opowebCurrentQuestions?.[index];
    if (!questionData) {
      feedback.hidden = false;
      feedback.className = 'answer-feedback incorrect';
      feedback.innerHTML = '<strong>No se ha podido corregir esta pregunta.</strong>';
      return;
    }

    if (!selectedInput) {
      unansweredCount += 1;
      feedback.hidden = false;
      feedback.className = 'answer-feedback unanswered';
      feedback.innerHTML = `<strong>Sin responder.</strong> La respuesta correcta era: ${escapeText(questionData.options[questionData.correct])}.<br>${escapeText(questionData.explanation)}${questionData.reference ? `<br><small>Referencia: ${escapeText(questionData.reference)}</small>` : ''}`;
      return;
    }

    const selected = Number(selectedInput.value);
    const isCorrect = selected === questionData.correct;
    if (isCorrect) correctCount += 1;

    feedback.hidden = false;
    feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `<strong>${isCorrect ? 'Correcta' : 'Incorrecta'}.</strong> ${isCorrect ? '' : `La respuesta correcta era: ${escapeText(questionData.options[questionData.correct])}.<br>`}${escapeText(questionData.explanation)}${questionData.trap ? `<br><em>Trampa: ${escapeText(questionData.trap)}</em>` : ''}${questionData.reference ? `<br><small>Referencia: ${escapeText(questionData.reference)}</small>` : ''}`;
  });

  form.querySelector('[data-test-result]')?.remove();
  const answeredCount = questionCards.length - unansweredCount;
  const percentage = questionCards.length ? Math.round((correctCount / questionCards.length) * 100) : 0;
  const result = document.createElement('div');
  result.className = 'notice';
  result.dataset.testResult = 'true';
  result.innerHTML = `<strong>Resultado: ${correctCount}/${questionCards.length}</strong> · ${percentage} %<br><small>Respondidas: ${answeredCount} · Sin responder: ${unansweredCount}</small>`;
  form.prepend(result);
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, true);

// El test se genera dinámicamente. Guardamos sus datos cuando aparece en la página.
const observer = new MutationObserver(() => {
  const form = document.querySelector('#test-form');
  if (!form || form.dataset.answerFixReady === 'true') return;

  const themeMatch = location.hash.match(/tema-(\d+)$/);
  const callMatch = location.hash.match(/^#([^/]+)/);
  if (!themeMatch || !callMatch) return;

  const callId = callMatch[1];
  const themeNumber = String(themeMatch[1]).padStart(2, '0');
  const roots = {
    'la-puebla-auxiliar-administrativo-2026': 'content/la-puebla',
    'diputacion-toledo-administrativo-c1-2026': 'content/diputacion-toledo',
    'uc3m-auxiliar-administrativa-c2-2026': 'content/uc3m'
  };
  const root = roots[callId];
  if (!root) return;

  form.dataset.answerFixReady = 'true';
  fetch(`${root}/tema-${themeNumber}/preguntas.json`, { cache: 'no-cache' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error(`HTTP ${response.status}`)))
    .then(payload => {
      const raw = Array.isArray(payload) ? payload : payload.preguntas || [];
      window.opowebCurrentQuestions = raw.map(item => ({
        options: item.opciones || [],
        correct: Number(item.correcta ?? item.respuestaCorrecta),
        explanation: item.justificacion || '',
        trap: item.trampa ?? item.trampaExamen ?? '',
        reference: item.referencia || ''
      }));
    })
    .catch(() => {
      window.opowebCurrentQuestions = [];
    });
});

observer.observe(document.body, { childList: true, subtree: true });
