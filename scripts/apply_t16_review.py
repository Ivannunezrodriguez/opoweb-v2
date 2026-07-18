from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
programme_path = ROOT / "data/programa.json"
programme = json.loads(programme_path.read_text(encoding="utf-8"))

assert programme["version"] == "0.15.0"
assert programme["temas"][15]["numero"] == 16

programme["temas"][15] = {
    "numero": 16,
    "titulo": "Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge.",
    "estado": "EN_REVISION_USUARIO",
    "manual": "content/la-puebla/tema-16/manual.md",
    "capitulos": [
        "content/la-puebla/tema-16/bloque-01-conceptos-navegacion.md",
        "content/la-puebla/tema-16/bloque-02-pestanas-favoritos-historial-descargas.md",
        "content/la-puebla/tema-16/bloque-03-privacidad-seguridad.md",
        "content/la-puebla/tema-16/bloque-04-edge-configuracion-herramientas.md",
        "content/la-puebla/tema-16/bloque-05-ie-modo-ie.md",
    ],
    "matriz": "content/la-puebla/tema-16/matriz.json",
    "feedback": "content/la-puebla/tema-16/feedback.md",
    "preguntas": "content/la-puebla/tema-16/preguntas.json",
    "trazabilidad": "content/la-puebla/tema-16/fuentes.md",
}

programme_path.write_text(
    json.dumps(programme, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)

tests = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.15.0');
assert.equal(packageJson.version, '0.15.0');
assert.ok(index.includes('v0.15.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
assert.deepEqual(review.map(t => t.numero), [16]);
assert.deepEqual(pending.map(t => t.numero), [17,18,19]);
assert.ok(programme.temas.slice(16).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t15 = programme.temas[14];
const base15 = 'content/la-puebla/tema-15';
assert.equal(t15.capitulos.length, 5);
assert.equal(t15.aprobadoEl, '2026-07-18');
assert.ok(read(`${base15}/aprobacion.md`).includes('Tema 15 aprobado'));
assert.ok(serviceWorker.includes(`./${base15}/manual.md`));

const t16 = programme.temas[15];
const base16 = 'content/la-puebla/tema-16';
const matrix16 = json(`${base16}/matriz.json`);
const questions16 = json(`${base16}/preguntas.json`);
assert.equal(t16.capitulos.length, 5);
assert.equal(matrix16.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix16.cobertura.length, 5);
assert.equal(matrix16.atajos.length, 15);
assert.equal(matrix16.cifrasTemporales.length, 3);
assert.equal(questions16.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions16.preguntas, []);
assert.ok(read(`${base16}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base16}/feedback.md`).includes('Tema 16 aprobado'));

const files16 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-conceptos-navegacion.md',
  'bloque-02-pestanas-favoritos-historial-descargas.md',
  'bloque-03-privacidad-seguridad.md',
  'bloque-04-edge-configuracion-herramientas.md',
  'bloque-05-ie-modo-ie.md'
];
for (const file of files16) {
  assert.ok(exists(`${base16}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base16}/${file}`), `Tema 16 no debe estar precargado antes de aprobarse: ${file}`);
}

const joined16 = files16.filter(f => f.endsWith('.md')).map(f => read(`${base16}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'internet y web','motor de búsqueda','barra de direcciones','pestaña','favoritos',
  'historial de descargas','cookies','caché','inprivate','smartscreen',
  'microsoft edge','internet explorer 11','modo internet explorer','trident/mshtml',
  'al menos hasta 2029'
]) {
  assert.ok(joined16.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado en Microsoft Edge',
  'Explorar InPrivate en Microsoft Edge',
  'SmartScreen de Microsoft Defender en Edge',
  'Preguntas frecuentes del ciclo de vida de Internet Explorer y Edge',
  'Qué es el modo Internet Explorer'
]) {
  assert.ok(read(`${base16}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.15.0'"));
console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme16Questions: questions16.preguntas.length,
  status: 'TEMA_16_EN_REVISION_VALIDADO'
}, null, 2));
'''

(ROOT / "tests/validate.mjs").write_text(tests, encoding="utf-8")

for relative in [
    ".github/workflows/apply-t16-review.yml",
    "scripts/apply_t16_review.py",
]:
    path = ROOT / relative
    if path.exists():
        path.unlink()
