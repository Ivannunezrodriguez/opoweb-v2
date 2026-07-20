const params = new URLSearchParams(location.search);
const requestedTheme = Number(params.get('tema'));
const requestedCall = params.get('convocatoria');
let opened = false;

function practiceUrl(callId, theme = null) {
  const query = new URLSearchParams();
  if (callId) query.set('convocatoria', callId);
  if (Number.isInteger(theme) && theme > 0) query.set('tema', String(theme));
  return `practice.html?${query.toString()}`;
}

function openRequestedTheme() {
  if (opened || !Number.isInteger(requestedTheme) || requestedTheme < 1) return;
  const selector = document.querySelector('#practice-call-selector');
  if (requestedCall && selector && selector.value !== requestedCall) return;
  const button = document.querySelector(`[data-theme-test="${requestedTheme}"]`);
  if (!button) return;
  opened = true;
  const callId = requestedCall || selector?.value;
  history.replaceState(null, '', practiceUrl(callId, requestedTheme));
  button.click();
}

const app = document.querySelector('#practice-app');
new MutationObserver(openRequestedTheme).observe(app, {
  childList: true,
  subtree: true
});

app.addEventListener('change', event => {
  const selector = event.target.closest('#practice-call-selector');
  if (!selector) return;
  opened = true;
  history.replaceState(null, '', practiceUrl(selector.value));
});

app.addEventListener('click', event => {
  const back = event.target.closest('#practice-back');
  if (!back) return;
  const callId = localStorage.getItem('opoweb-selected-convocatoria') || requestedCall;
  history.replaceState(null, '', practiceUrl(callId));
});

openRequestedTheme();