const APP = document.querySelector('#app');
const TARGET_ROUTE = /^#la-puebla-auxiliar-administrativo-2026\/tema-6$/;

function replaceText(node, from, to) {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(textNode => {
    if (textNode.nodeValue.includes(from)) {
      textNode.nodeValue = textNode.nodeValue.replaceAll(from, to);
    }
  });
}

function correctProgrammeSection() {
  if (!TARGET_ROUTE.test(location.hash)) return;
  const manual = document.querySelector('#manual');
  if (!manual || manual.dataset.tema6InterinidadCorrected === 'true') return;

  const heading = [...manual.querySelectorAll('h3, h4, h5')]
    .find(node => node.textContent.trim() === 'C. Programa temporal');
  if (!heading) return;

  const section = [];
  let current = heading.nextElementSibling;
  while (current && !/^H[1-5]$/.test(current.tagName)) {
    section.push(current);
    current = current.nextElementSibling;
  }

  section.forEach(node => replaceText(node, 'dos años', 'cuatro años'));

  const durationParagraph = section.find(node => node.textContent.includes('Duración máxima del programa'));
  if (durationParagraph && !manual.querySelector('[data-tema6-legal-note]')) {
    const note = document.createElement('blockquote');
    note.dataset.tema6LegalNote = 'true';
    note.innerHTML = '⚠️ <strong>¡Foco Examen!:</strong> El TREBEP fija un máximo básico de <strong>tres años</strong> y permite una ampliación autonómica de hasta <strong>doce meses más</strong>. La Ley 4/2011 de Castilla-La Mancha establece un máximo total de <strong>cuatro años</strong>.';
    durationParagraph.insertAdjacentElement('afterend', note);
  }

  manual.dataset.tema6InterinidadCorrected = 'true';
}

new MutationObserver(correctProgrammeSection).observe(APP, { childList: true, subtree: true });
addEventListener('hashchange', correctProgrammeSection);
correctProgrammeSection();
