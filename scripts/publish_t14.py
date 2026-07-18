from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-07-18"
BASE = ROOT / "content/la-puebla/tema-14"


def read(path):
    return path.read_text(encoding="utf-8")


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def replace_required(path, old, new):
    text = read(path)
    if old not in text:
        raise RuntimeError(f"No se encontró en {path}: {old!r}")
    write(path, text.replace(old, new))

# Estado editorial de todos los documentos teóricos.
for path in BASE.glob("*.md"):
    text = read(path)
    text = text.replace("**Estado:** EN REVISIÓN DEL USUARIO", "**Estado:** APROBADO POR EL USUARIO")
    text = text.replace("`EN_REVISION_USUARIO`", "`APROBADO_USUARIO`")
    write(path, text)

manual = BASE / "manual.md"
text = read(manual)
text = text.replace("**No publicado como tema aprobado.**", "**Publicado tras aprobación expresa del usuario.**")
text = text.replace("- Revisión del usuario: pendiente.", f"- Revisión del usuario: aprobada el {DATE}.")
text = text.replace("- Tema cerrado: **NO**.", "- Tema cerrado: **SÍ**.")
text = text.replace("- Publicación como aprobado: **NO**.", "- Publicación como aprobado: **SÍ**.")
text = text.replace(
    "El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 14 aprobado»**.",
    "La aprobación expresa **«Tema 14 aprobado»** quedó registrada el 18 de julio de 2026."
)
write(manual, text)

feedback = BASE / "feedback.md"
text = read(feedback)
text = text.replace("El tema no está publicado como aprobado. El banco de preguntas permanece vacío.",
                    "El tema ha sido aprobado expresamente por el usuario. El banco de preguntas permanece vacío hasta su revisión específica y trazable.")
text = text.replace(
    "La respuesta debe ser una de estas:\n\n- **«Tema 14 aprobado»**\n- **«Tema 14: cambia o amplía…»**\n\nNo se fusionará mientras permanezca en `APROBADO_USUARIO`.",
    "Aprobación registrada: **«Tema 14 aprobado»**, el 18 de julio de 2026."
)
# La sustitución genérica anterior cambia el último estado; normalizamos el cierre si conserva texto de revisión.
text = text.replace(
    "La respuesta debe ser una de estas:\n\n- **«Tema 14 aprobado»**\n- **«Tema 14: cambia o amplía…»**\n\nNo se fusionará mientras permanezca en APROBADO_USUARIO.",
    "Aprobación registrada: **«Tema 14 aprobado»**, el 18 de julio de 2026."
)
text = text.replace(
    "La respuesta debe ser una de estas:\n\n- **«Tema 14 aprobado»**\n- **«Tema 14: cambia o amplía…»**\n\nNo se fusionará mientras permanezca en `EN_REVISION_USUARIO`.",
    "Aprobación registrada: **«Tema 14 aprobado»**, el 18 de julio de 2026."
)
write(feedback, text)

matrix_path = BASE / "matriz.json"
matrix = json.loads(read(matrix_path))
matrix["estado"] = "APROBADO_USUARIO"
write(matrix_path, json.dumps(matrix, ensure_ascii=False, indent=2) + "\n")

questions_path = BASE / "preguntas.json"
questions = json.loads(read(questions_path))
questions["estado"] = "PENDIENTE_REVISION_POST_APROBACION"
questions["nota"] = "El manual está aprobado. El banco continúa vacío hasta redactar y revisar preguntas con trazabilidad normativa individual."
write(questions_path, json.dumps(questions, ensure_ascii=False, indent=2) + "\n")

write(BASE / "aprobacion.md", """# Tema 14 · Aprobación del usuario

- Estado: `APROBADO_USUARIO`
- Fecha: 18 de julio de 2026
- Expresión registrada: **«Tema 14 aprobado»**

La aprobación se refiere al manual teórico, sus cinco bloques, la matriz y la trazabilidad normativa. No autoriza a generar automáticamente preguntas ni supuestos sin revisión individual.
""")

programme_path = ROOT / "data/programa.json"
programme = json.loads(read(programme_path))
programme["version"] = "0.14.0"
programme["updatedAt"] = DATE
for theme in programme["temas"]:
    if theme["numero"] == 14:
        theme["estado"] = "APROBADO_USUARIO"
        theme["aprobadoEl"] = DATE
        theme["aprobacion"] = "content/la-puebla/tema-14/aprobacion.md"
        break
else:
    raise RuntimeError("No se encontró el tema 14")
write(programme_path, json.dumps(programme, ensure_ascii=False, indent=2) + "\n")

package_path = ROOT / "package.json"
package = json.loads(read(package_path))
package["version"] = "0.14.0"
write(package_path, json.dumps(package, ensure_ascii=False, indent=2) + "\n")

replace_required(ROOT / "index.html", "v0.13.0", "v0.14.0")

readme_path = ROOT / "README.md"
readme = read(readme_path)
readme = readme.replace("- Versión: **0.13.0**.", "- Versión: **0.14.0**.")
readme = readme.replace("- Temas 12–13: `APROBADO_USUARIO` el 18 de julio de 2026.", "- Temas 12–14: `APROBADO_USUARIO` el 18 de julio de 2026.")
readme = readme.replace("- Temas 14–19: `PENDIENTE_RECONSTRUCCION`.", "- Temas 15–19: `PENDIENTE_RECONSTRUCCION`.")
readme = readme.replace("│     └─ tema-13/", "│     ├─ tema-13/\n│     └─ tema-14/")
readme = readme.replace(
    "### Tema 13\n\nAdministración electrónica y certificados: identificación frente a firma; firma simple, avanzada y cualificada; sellos; tipos y soportes de certificado; prestadores, autoridades raíz y de registro; listas de confianza; validación, revocación, sellado de tiempo, entrega, conservación y sistemas propios de las Administraciones públicas. Incluye eIDAS actualizado, Ley 6/2020, Leyes 39/2015 y 40/2015 y Real Decreto 203/2021.\n\nLos bancos de preguntas de los trece temas permanecen vacíos",
    "### Tema 13\n\nAdministración electrónica y certificados: identificación frente a firma; firma simple, avanzada y cualificada; sellos; tipos y soportes de certificado; prestadores, autoridades raíz y de registro; listas de confianza; validación, revocación, sellado de tiempo, entrega, conservación y sistemas propios de las Administraciones públicas. Incluye eIDAS actualizado, Ley 6/2020, Leyes 39/2015 y 40/2015 y Real Decreto 203/2021.\n\n### Tema 14\n\nLey 40/2015: órganos administrativos, competencia, órganos colegiados, abstención y recusación; estructura central, ministerial, territorial y exterior de la Administración General del Estado. Incluye los artículos 5–24 y 54–80, el artículo 55 bis sobre presencia equilibrada y la delimitación respecto del sector público institucional.\n\nLos bancos de preguntas de los catorce temas permanecen vacíos"
)
readme = readme.replace(
    "La validación confirma que existen exactamente trece temas aprobados, seis pendientes y que los archivos modulares de los temas 11, 12 y 13 permanecen enlazados y disponibles sin conexión.",
    "La validación confirma que existen exactamente catorce temas aprobados, cinco pendientes y que los archivos modulares de los temas 11, 12, 13 y 14 permanecen enlazados y disponibles sin conexión."
)
write(readme_path, readme)

sw_path = ROOT / "sw.js"
sw = read(sw_path).replace("opoweb-v2-0.13.0", "opoweb-v2-0.14.0")
needle = "  './content/la-puebla/tema-13/bloque-05-administraciones.md'\n"
assets14 = """  './content/la-puebla/tema-13/bloque-05-administraciones.md',
  './content/la-puebla/tema-14/manual.md',
  './content/la-puebla/tema-14/matriz.json',
  './content/la-puebla/tema-14/aprobacion.md',
  './content/la-puebla/tema-14/preguntas.json',
  './content/la-puebla/tema-14/articulos.md',
  './content/la-puebla/tema-14/feedback.md',
  './content/la-puebla/tema-14/bloque-01-organos-competencia.md',
  './content/la-puebla/tema-14/bloque-02-colegiados-abstencion.md',
  './content/la-puebla/tema-14/bloque-03-age-estructura-ministerios.md',
  './content/la-puebla/tema-14/bloque-04-age-organos-ministeriales.md',
  './content/la-puebla/tema-14/bloque-05-age-territorial-exterior.md'
"""
if needle not in sw:
    raise RuntimeError("No se encontró el final de los activos del tema 13")
sw = sw.replace(needle, assets14)
write(sw_path, sw)

tests = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.14.0');
assert.equal(packageJson.version, '0.14.0');
assert.ok(index.includes('v0.14.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
assert.equal(review.length, 0);
assert.deepEqual(pending.map(t => t.numero), [15,16,17,18,19]);
assert.ok(programme.temas.slice(14).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t14 = programme.temas[13];
const base14 = 'content/la-puebla/tema-14';
const matrix14 = json(`${base14}/matriz.json`);
const questions14 = json(`${base14}/preguntas.json`);
assert.equal(t14.capitulos.length, 5);
assert.equal(t14.aprobadoEl, '2026-07-18');
assert.equal(t14.aprobacion, `${base14}/aprobacion.md`);
assert.equal(matrix14.estado, 'APROBADO_USUARIO');
assert.equal(matrix14.cobertura.length, 5);
assert.equal(matrix14.cifras.length, 8);
assert.equal(questions14.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions14.preguntas, []);
assert.ok(read(`${base14}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base14}/aprobacion.md`).includes('Tema 14 aprobado'));

const files14 = [
  'manual.md','matriz.json','aprobacion.md','preguntas.json','articulos.md','feedback.md',
  'bloque-01-organos-competencia.md','bloque-02-colegiados-abstencion.md',
  'bloque-03-age-estructura-ministerios.md','bloque-04-age-organos-ministeriales.md',
  'bloque-05-age-territorial-exterior.md'
];
for (const file of files14) {
  assert.ok(exists(`${base14}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base14}/${file}`), `No precargado ${file}`);
}

const joined14 = files14.filter(f => f.endsWith('.md')).map(f => read(`${base14}/${f}`)).join('\n').toLowerCase();
for (const term of ['competencia es irrenunciable','encomienda de gestión','delegación de firma','órganos colegiados','abstención','recusación','presencia equilibrada','delegados del gobierno','servicios integrados','servicio exterior']) {
  assert.ok(joined14.includes(term), `Falta ${term}`);
}
for (const term of ['| 5 |','| 24 |','| 54 |','| 55 bis |','| 80 |']) {
  assert.ok(read(`${base14}/articulos.md`).includes(term), `Falta trazabilidad ${term}`);
}
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.14.0'"));
assert.equal(exists('.github/workflows/apply-t14-approval.yml'), false);
assert.equal(exists('scripts/publish_t14.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme14Questions: questions14.preguntas.length,
  status: 'TEMA_14_APROBADO_VALIDADO'
}, null, 2));
'''
write(ROOT / "tests/validate.mjs", tests)

# El commit final no conserva utilidades temporales.
(ROOT / ".github/workflows/apply-t14-approval.yml").unlink(missing_ok=True)
Path(__file__).unlink(missing_ok=True)
