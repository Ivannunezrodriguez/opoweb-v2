const DIPUTACION_CALL_ID = 'diputacion-toledo-administrativo-c1-2026';
const TRACKING_URL = 'data/seguimiento-diputacion-c1.json';
let trackingData = null;
let loading = false;

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

async function loadTracking() {
  if (trackingData || loading) return trackingData;
  loading = true;
  try {
    const response = await fetch(TRACKING_URL, { cache: 'no-cache' });
    if (response.ok) trackingData = await response.json();
  } catch (_) {
    trackingData = null;
  } finally {
    loading = false;
  }
  return trackingData;
}

function isDiputacionSelected() {
  const selector = document.querySelector('#call-selector');
  if (selector) return selector.value === DIPUTACION_CALL_ID;
  return localStorage.getItem('opoweb-selected-convocatoria') === DIPUTACION_CALL_ID;
}

async function renderDiputacionTracking() {
  const app = document.querySelector('#app');
  if (!app) return;

  const existing = document.querySelector('#diputacion-tracking-panel');
  if (!isDiputacionSelected()) {
    existing?.remove();
    return;
  }

  if (existing || !document.querySelector('.panel.intro')) return;
  const data = await loadTracking();
  if (!data || !isDiputacionSelected()) return;

  const personal = data.situacionPersonal;
  const panel = document.createElement('section');
  panel.id = 'diputacion-tracking-panel';
  panel.className = 'panel tracking-panel';
  panel.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow section-eyebrow">Seguimiento personal</p>
        <h2>Plazos y estado de la OPE</h2>
      </div>
      <span class="status-pill status-ok">✓ Estoy apuntado</span>
    </div>
    <div class="personal-status">
      <div><span>Estado</span><strong>${escapeHtml(personal.estado)}</strong></div>
      <div><span>Convocatoria</span><strong>${escapeHtml(personal.convocatoria)}</strong></div>
      <div><span>Plazo</span><strong>6–31 de julio de 2026</strong></div>
      <div><span>Siguiente hito</span><strong>${escapeHtml(data.siguienteHito)}</strong></div>
    </div>
    <p class="privacy-note">🔒 ${escapeHtml(personal.notaPrivacidad)}</p>
  `;

  document.querySelector('.panel.intro')?.insertAdjacentElement('afterend', panel);
}

const observer = new MutationObserver(() => {
  queueMicrotask(renderDiputacionTracking);
});

observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
document.addEventListener('change', event => {
  if (event.target?.id === 'call-selector') queueMicrotask(renderDiputacionTracking);
});

renderDiputacionTracking();
