from pathlib import Path
import json

DATE_ISO = "2026-07-17"
DATE_TEXT = "17 de julio de 2026"


def read(path):
    return Path(path).read_text(encoding="utf-8")


def write(path, text):
    Path(path).write_text(text, encoding="utf-8")


def replace_once(text, old, new, label):
    if text.count(old) != 1:
        raise RuntimeError(f"{label}: se esperaba una coincidencia y hay {text.count(old)}")
    return text.replace(old, new, 1)


# Manual
path = Path("content/la-puebla/tema-10/manual.md")
text = path.read_text(encoding="utf-8")
text = replace_once(
    text,
    "**Estado:** EN REVISIÓN DEL USUARIO  \n**No publicado como tema aprobado.**  \n**Fecha de revisión normativa:** 17 de julio de 2026.",
    "**Estado:** APROBADO POR EL USUARIO  \n**Publicado tras aprobación expresa.**  \n**Fecha de revisión normativa:** 17 de julio de 2026.  \n**Aprobado por el usuario:** 17 de julio de 2026.",
    "cabecera del manual",
)
text = replace_once(
    text,
    "- Revisión del usuario: pendiente.\n- Tema cerrado: **NO**.\n- Publicación como aprobado: **NO**.\n\nEl tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 10 aprobado»**.",
    "- Revisión del usuario: aprobada el 17 de julio de 2026.\n- Tema cerrado: **SÍ, aprobado por el usuario**.\n- Publicación como aprobado: **SÍ**.\n\nEl usuario aprobó expresamente el tema con la respuesta **«Tema 10 aprobado»**.",
    "cierre del manual",
)
path.write_text(text, encoding="utf-8")

# Trazabilidad
path = Path("content/la-puebla/tema-10/articulos.md")
text = path.read_text(encoding="utf-8")
text = replace_once(text, "**Estado:** EN REVISIÓN DEL USUARIO", "**Estado:** APROBADO POR EL USUARIO", "estado de trazabilidad")
path.write_text(text, encoding="utf-8")

# Matriz
path = Path("content/la-puebla/tema-10/matriz.json")
data = json.loads(path.read_text(encoding="utf-8"))
data["estado"] = "APROBADO_USUARIO"
data["aprobadoEl"] = DATE_ISO
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# Preguntas
path = Path("content/la-puebla/tema-10/preguntas.json")
data = json.loads(path.read_text(encoding="utf-8"))
data["estado"] = "PENDIENTE_REVISION_POST_APROBACION"
data["nota"] = "El manual está aprobado. El banco permanece vacío hasta crear y revisar preguntas trazables a artículos concretos del TRLRHL o de la LGT."
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# Aprobación literal
approval = f"""# La Puebla de Montalbán · Tema 10 · Aprobación del usuario

- **Respuesta literal:** «Tema 10 aprobado».
- **Fecha:** {DATE_TEXT}.
- **Estado resultante:** `APROBADO_USUARIO`.
- **Publicación:** autorizada en OpoWeb v2.

## Alcance aprobado

- Constitución española, artículos 31.1 y 133.
- TRLRHL, artículos 6–12: principios locales, delegación, colaboración, beneficios fiscales, compensación y aplicación de la normativa tributaria general.
- LGT, artículos 17–34: obligaciones tributarias.
- LGT, artículos 35–48: obligados tributarios.
- LGT, artículos 58–76: deuda y extinción.
- LGT, artículos 117–140: procedimientos de gestión tributaria.
- Trazabilidad individual y delimitación respecto de los temas 11 y 12.

La aprobación del manual no autoriza la generación automática de preguntas. El banco permanece vacío hasta su revisión específica.
"""
write("content/la-puebla/tema-10/aprobacion.md", approval)

# Programa
path = Path("data/programa.json")
data = json.loads(path.read_text(encoding="utf-8"))
data["version"] = "0.10.0"
data["updatedAt"] = DATE_ISO
theme = next(item for item in data["temas"] if item["numero"] == 10)
theme["estado"] = "APROBADO_USUARIO"
theme["aprobadoEl"] = DATE_ISO
theme["aprobacion"] = "content/la-puebla/tema-10/aprobacion.md"
theme.pop("feedback", None)
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# Package
path = Path("package.json")
data = json.loads(path.read_text(encoding="utf-8"))
data["version"] = "0.10.0"
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# Página
path = Path("index.html")
text = path.read_text(encoding="utf-8")
text = replace_once(text, '<span class="version">v0.9.0</span>', '<span class="version">v0.10.0</span>', "versión del índice")
path.write_text(text, encoding="utf-8")

# Service worker
path = Path("sw.js")
text = path.read_text(encoding="utf-8")
text = replace_once(text, "const CACHE = 'opoweb-v2-0.9.0';", "const CACHE = 'opoweb-v2-0.10.0';", "versión de caché")
text = replace_once(
    text,
    "  './content/la-puebla/tema-09/articulos.md'\n];",
    "  './content/la-puebla/tema-09/articulos.md',\n  './content/la-puebla/tema-10/manual.md',\n  './content/la-puebla/tema-10/matriz.json',\n  './content/la-puebla/tema-10/aprobacion.md',\n  './content/la-puebla/tema-10/preguntas.json',\n  './content/la-puebla/tema-10/articulos.md'\n];",
    "activos del tema 10",
)
path.write_text(text, encoding="utf-8")

# README
path = Path("README.md")
text = path.read_text(encoding="utf-8")
for old, new, label in [
    ("- Versión: **0.9.0**.", "- Versión: **0.10.0**.", "versión README"),
    ("- Temas 1–9: `APROBADO_USUARIO` el 17 de julio de 2026.", "- Temas 1–10: `APROBADO_USUARIO` el 17 de julio de 2026.", "temas aprobados README"),
    ("- Temas 10–19: `PENDIENTE_RECONSTRUCCION`.", "- Temas 11–19: `PENDIENTE_RECONSTRUCCION`.", "temas pendientes README"),
    ("│     ├─ tema-08/\n│     └─ tema-09/", "│     ├─ tema-08/\n│     ├─ tema-09/\n│     └─ tema-10/", "arquitectura README"),
    ("Los bancos de preguntas de los nueve temas permanecen vacíos", "Los bancos de preguntas de los diez temas permanecen vacíos", "bancos README"),
    ("La validación confirma que existen exactamente nueve temas aprobados, que los otros diez no contienen teoría heredada", "La validación confirma que existen exactamente diez temas aprobados, que los otros nueve no contienen teoría heredada", "validación README"),
]:
    text = replace_once(text, old, new, label)
text = replace_once(
    text,
    "### Tema 9\n\nLey Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales: principios, bases jurídicas, derechos, tratamientos específicos, responsable, encargado, DPD, AEPD, procedimientos, infracciones, régimen de las Administraciones públicas y derechos digitales. Incluye el RGPD como complemento imprescindible y trazabilidad de los artículos 1–97 y 53 bis.\n\nLos bancos de preguntas",
    "### Tema 9\n\nLey Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales: principios, bases jurídicas, derechos, tratamientos específicos, responsable, encargado, DPD, AEPD, procedimientos, infracciones, régimen de las Administraciones públicas y derechos digitales. Incluye el RGPD como complemento imprescindible y trazabilidad de los artículos 1–97 y 53 bis.\n\n### Tema 10\n\nPrincipios de tributación local, delegación, colaboración, beneficios fiscales y compensación; obligaciones y obligados tributarios; deuda, extinción y procedimientos de gestión. Incluye los artículos 6–12 del TRLRHL y los bloques 17–48, 58–76 y 117–140 de la LGT, con trazabilidad individual y delimitación respecto de recaudación y tributos locales concretos.\n\nLos bancos de preguntas",
    "descripción del tema 10",
)
path.write_text(text, encoding="utf-8")

# Validación
path = Path("tests/validate.mjs")
text = path.read_text(encoding="utf-8")
for old, new, label in [
    ("assert.equal(programme.version, '0.9.0');", "assert.equal(programme.version, '0.10.0');", "versión programa test"),
    ("assert.equal(packageJson.version, '0.9.0');", "assert.equal(packageJson.version, '0.10.0');", "versión package test"),
    ("assert.ok(index.includes('v0.9.0'));", "assert.ok(index.includes('v0.10.0'));", "versión índice test"),
    ("assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4, 5, 6, 7, 8, 9]);", "assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);", "lista aprobados test"),
    ("assert.deepEqual(inReview.map(item => item.numero), [10]);", "assert.deepEqual(inReview, []);", "revisión vacía test"),
    ("assert.equal(pending.length, 9, 'Los temas 11-19 deben permanecer pendientes');", "assert.equal(pending.length, 9, 'Los temas 11-19 deben permanecer pendientes');", "pendientes test"),
    ("const expectedRows = { 1: 6, 2: 5, 3: 9, 4: 7, 5: 8, 6: 6, 7: 7, 8: 8, 9: 8 };", "const expectedRows = { 1: 6, 2: 5, 3: 9, 4: 7, 5: 8, 6: 6, 7: 7, 8: 8, 9: 8, 10: 8 };", "filas test"),
    ("assert.ok(serviceWorker.includes(\"const CACHE = 'opoweb-v2-0.9.0'\"));", "assert.ok(serviceWorker.includes(\"const CACHE = 'opoweb-v2-0.10.0'\"));", "caché test"),
    ("  status: 'TEMA_10_EN_REVISION_VALIDADO'", "  status: 'TEMA_10_APROBADO_VALIDADO'", "estado final test"),
]:
    if old == new:
        if old not in text:
            raise RuntimeError(f"{label}: texto no encontrado")
    else:
        text = replace_once(text, old, new, label)

start = text.index("const theme10 = programme.temas[9];")
end = text.index("assert.ok(serviceWorker.includes(\"const CACHE = 'opoweb-v2-0.10.0'\"));")
approved_block = """const theme10 = programme.temas[9];
const base10 = 'content/la-puebla/tema-10';
const manual10 = read(`${base10}/manual.md`);
const matrix10 = json(`${base10}/matriz.json`);
const questions10 = json(`${base10}/preguntas.json`);
const approval10 = read(`${base10}/aprobacion.md`);
const articles10 = read(`${base10}/articulos.md`);

assert.equal(theme10.estado, 'APROBADO_USUARIO');
assert.equal(theme10.aprobadoEl, '2026-07-17');
assert.equal(theme10.manual, `${base10}/manual.md`);
assert.equal(theme10.matriz, `${base10}/matriz.json`);
assert.equal(theme10.aprobacion, `${base10}/aprobacion.md`);
assert.equal(theme10.preguntas, `${base10}/preguntas.json`);
assert.equal(theme10.trazabilidad, `${base10}/articulos.md`);
assert.equal(matrix10.tema, 10);
assert.equal(matrix10.estado, 'APROBADO_USUARIO');
assert.equal(matrix10.aprobadoEl, '2026-07-17');
assert.equal(matrix10.cobertura.length, 8);
assert.equal(matrix10.trazabilidadArticuloPorArticulo, `${base10}/articulos.md`);
assert.equal(questions10.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions10.preguntas, []);
assert.ok(approval10.includes('«Tema 10 aprobado»'));
assert.ok(approval10.includes('17 de julio de 2026'));
assert.ok(manual10.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual10.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
assert.ok(manual10.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual10.split('\\n').length > 500, 'El manual del tema 10 parece truncado');
assert.ok(articles10.includes('**Estado:** APROBADO POR EL USUARIO'));

for (let article = 6; article <= 12; article += 1) {
  assert.ok(articles10.includes(`| ${article} |`), `Falta TRLRHL ${article}`);
}
for (const [rangeStart, rangeEnd] of [[17, 48], [58, 76], [117, 140]]) {
  for (let article = rangeStart; article <= rangeEnd; article += 1) {
    assert.ok(articles10.includes(`| ${article} |`), `Falta trazabilidad LGT ${article}`);
  }
}
assert.ok(articles10.includes('| 29 bis |'));

for (const marker of [
  'hasta el **5 % de la cuota**',
  'Acuerdo del Pleno',
  'aceptación',
  'publicación',
  'recargo del **1 %**',
  'ejecutivo: **5 %**',
  'apremio reducido: **10 %**',
  'apremio ordinario: **20 %**',
  '**Cuatro años**',
  'día 20 del mes siguiente',
  'día 5 del segundo mes siguiente',
  'comprobación limitada',
  'tasación pericial contradictoria',
  '3 de junio de 2026',
  '21 de diciembre de 2024'
]) {
  assert.ok(manual10.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 10: ${marker}`);
}
assert.ok(serviceWorker.includes('./content/la-puebla/tema-10/articulos.md'));

"""
text = text[:start] + approved_block + text[end:]
text = replace_once(text, "assert.ok(!serviceWorker.includes('tema-10/manual.md'), 'El tema 10 en revisión no debe precargarse en la PWA');\n", "", "retirada de exclusión PWA")
path.write_text(text, encoding="utf-8")
