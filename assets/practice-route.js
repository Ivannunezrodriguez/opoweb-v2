const params = new URLSearchParams(location.search);
const requestedTheme = Number(params.get('tema'));
const requestedCall = params.get('convocatoria');
let opened = false;

function openRequestedTheme() {
  if (opened || !Number.isInteger(requestedTheme) || requestedTheme < 1) return;
  const selector = document.querySelector('#practice-call-selector');
  if (requestedCall && selector && selector.value !== requestedCall) return;
  const button = document.querySelector(`[data-theme-test="${requestedTheme}"]`);
  if (!button) return;
  opened = true;
  const callId = requestedCall || selector?.value;
  const query = new URLSearchParams();
  if (callId) query.set('convocatoria', callId);
  query.set('tema', String(requestedTheme));
  history.replaceState(null, '', `practice.html?${query.toString()}`);
  button.click();
}

new MutationObserver(openRequestedTheme).observe(document.querySelector('#practice-app'), {
  childList: true,
  subtree: true
});

openRequestedTheme();
