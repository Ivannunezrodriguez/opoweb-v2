import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const json = file => JSON.parse(read(file));
const exists = file => fs.existsSync(path.join(root, file));

const programme = json('data/programa.json');
const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
const externalOrAnchor = target => /^(https?:|mailto:|tel:|#)/i.test(target);
const legacyPatterns = [
  /Manual reconstruido/i,
  /Migrado a OpoWeb v2/i,
  /Publicado en OpoWeb v2/i,
  /Regla del proyecto/i
];
const legacyCallPatterns = [
  /^>\s*\*\*(?:Trampa(?: de)? examen|Clave de examen|Idea clave):?\*\*/gim,
  /^>\s*(?:Trampa(?: de)? examen|Clave de examen|Idea clave):/gim
];

const report = [];

for (const theme of programme.temas) {
  const number = theme.numero;
  assert.ok(exists(theme.manual), `Falta manual del tema ${number}`);
  assert.ok(exists(theme.matriz), `Falta matriz del tema ${number}`);
  assert.ok(exists(theme.preguntas), `Falta banco del tema ${number}`);

  const manual = read(theme.manual);
  const bank = json(theme.preguntas);
  const h1 = manual.match(/^#\s+.+$/gm) ?? [];
  const focusCount = (manual.match(/^>\s*⚠️\s*\*\*¡Foco Examen!:\*\*/gim) ?? []).length;
  const schemeHeadings = (manual.match(/^#{2,6}\s+.*(?:esquema|repaso|mapa).*/gim) ?? []).length;

  assert.equal(h1.length, 1, `El tema ${number} debe tener un único H1 y tiene ${h1.length}`);
  assert.equal(h1[0], `# La Puebla de Montalbán · Tema ${number}`, `H1 no normalizado en tema ${number}`);
  assert.ok(manual.includes('**Estado editorial:** PUBLICADO'), `Estado editorial visible incorrecto en tema ${number}`);
  assert.ok(manual.includes('**Fecha de revisión normativa:**'), `Falta fecha de revisión normativa en tema ${number}`);

  for (const pattern of legacyPatterns) {
    assert.ok(!pattern.test(manual), `Metadato histórico detectado en tema ${number}: ${pattern}`);
  }
  for (const pattern of legacyCallPatterns) {
    pattern.lastIndex = 0;
    assert.ok(!pattern.test(manual), `Llamada de examen no normalizada en tema ${number}`);
  }

  assert.equal(bank.estado, 'APROBADO_USUARIO', `Banco del tema ${number} no está APROBADO_USUARIO`);
  assert.equal(bank.preguntas?.length, 12, `El tema ${number} no tiene 12 preguntas`);

  const baseDir = path.dirname(theme.manual);
  let localLinks = 0;
  for (const match of manual.matchAll(markdownLinkRegex)) {
    const rawTarget = match[1].trim();
    const target = rawTarget.split('#')[0];
    if (!target || externalOrAnchor(rawTarget)) continue;
    localLinks += 1;
    const resolved = path.normalize(path.join(baseDir, decodeURIComponent(target)));
    assert.ok(exists(resolved), `Enlace local roto en tema ${number}: ${rawTarget}`);
  }

  report.push({
    tema: number,
    h1: h1.length,
    banco: bank.estado,
    preguntas: bank.preguntas.length,
    llamadasFoco: focusCount,
    encabezadosEsquemaRepaso: schemeHeadings,
    enlacesLocalesVerificados: localLinks
  });
}

console.log(JSON.stringify({
  proyecto: 'La Puebla de Montalbán',
  temasValidados: report.length,
  controles: [
    'H1 único y título normalizado',
    'estado y fecha editorial visibles',
    'ausencia de metadatos históricos',
    'ausencia de llamadas antiguas detectables',
    'banco APROBADO_USUARIO con 12 preguntas',
    'enlaces locales existentes'
  ],
  temas: report,
  estado: 'VALIDACION_EDITORIAL_AUTOMATIZADA_OK'
}, null, 2));
