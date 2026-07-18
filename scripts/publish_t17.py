from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-17'
DATE = '2026-07-18'
VERSION_OLD = '0.16.0'
VERSION_NEW = '0.17.0'


def read(path):
    return Path(path).read_text(encoding='utf-8')


def write(path, content):
    Path(path).write_text(content, encoding='utf-8')


def replace_required(text, old, new, label):
    if old not in text:
        raise RuntimeError(f'No se encontró el texto esperado en {label}: {old!r}')
    return text.replace(old, new)


# 1. Registro formal de aprobación.
approval = '''# Tema 17 · Aprobación del usuario

- Estado: `APROBADO_USUARIO`
- Fecha: 18 de julio de 2026
- Expresión registrada: **«Tema 17 aprobado»**

La aprobación se refiere al manual teórico-práctico, sus cinco bloques, la matriz y la trazabilidad de fuentes. No autoriza a generar automáticamente preguntas ni supuestos sin revisión individual.
'''
write(BASE / 'aprobacion.md', approval)

# 2. Estados de los documentos Markdown del tema.
for path in BASE.glob('*.md'):
    text = read(path)
    text = text.replace('**Estado:** EN REVISIÓN DEL USUARIO', '**Estado:** APROBADO POR EL USUARIO')
    text = text.replace('`EN_REVISION_USUARIO`', '`APROBADO_USUARIO`')
    write(path, text)

manual_path = BASE / 'manual.md'
manual = read(manual_path)
manual = replace_required(manual, '**No publicado como tema aprobado.**', '**Publicado como tema aprobado.**', 'manual publicación')
manual = replace_required(manual, '- Revisión del usuario: pendiente.', '- Revisión del usuario: completada el 18 de julio de 2026.', 'manual revisión')
manual = replace_required(manual, '- Tema cerrado: **NO**.', '- Tema cerrado: **SÍ**.', 'manual cierre')
manual = replace_required(manual, '- Publicación como aprobado: **NO**.', '- Publicación como aprobado: **SÍ**.', 'manual estado público')
manual = replace_required(
    manual,
    'El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 17 aprobado»**.',
    'El usuario aprobó expresamente el tema mediante la frase **«Tema 17 aprobado»** el 18 de julio de 2026.',
    'manual aprobación'
)
write(manual_path, manual)

feedback_path = BASE / 'feedback.md'
feedback = read(feedback_path)
feedback = replace_required(
    feedback,
    'El tema no está publicado como aprobado. La versión pública continúa en `0.16.0` y el banco de preguntas permanece vacío.',
    'El tema ha sido aprobado por el usuario y se publica en la versión `0.17.0`. El banco de preguntas permanece vacío hasta su revisión específica y trazable.',
    'feedback estado'
)
feedback = replace_required(
    feedback,
    'No se fusionará mientras permanezca en `APROBADO_USUARIO`.',
    'La aprobación expresa quedó registrada el 18 de julio de 2026 mediante la frase **«Tema 17 aprobado»**.',
    'feedback cierre'
)
if '## Aprobación registrada' not in feedback:
    feedback += '\n\n## Aprobación registrada\n\nEl usuario aprobó expresamente el tema el 18 de julio de 2026 mediante la frase **«Tema 17 aprobado»**.\n'
write(feedback_path, feedback)

# 3. Matriz y preguntas.
matrix_path = BASE / 'matriz.json'
matrix = json.loads(read(matrix_path))
matrix['estado'] = 'APROBADO_USUARIO'
matrix['aprobadoEl'] = DATE
write(matrix_path, json.dumps(matrix, ensure_ascii=False, indent=2) + '\n')

questions_path = BASE / 'preguntas.json'
questions = json.loads(read(questions_path))
questions['estado'] = 'PENDIENTE_REVISION_POST_APROBACION'
questions['preguntas'] = []
questions['nota'] = 'El manual está aprobado. El banco continúa vacío hasta redactar y revisar preguntas vinculadas a operaciones concretas y fuentes oficiales de Microsoft o LibreOffice.'
write(questions_path, json.dumps(questions, ensure_ascii=False, indent=2) + '\n')

# 4. Programa público.
programme_path = ROOT / 'data/programa.json'
programme = json.loads(read(programme_path))
programme['version'] = VERSION_NEW
programme['updatedAt'] = DATE
for theme in programme['temas']:
    if theme['numero'] == 17:
        theme['estado'] = 'APROBADO_USUARIO'
        theme['aprobadoEl'] = DATE
        theme['aprobacion'] = 'content/la-puebla/tema-17/aprobacion.md'
        break
else:
    raise RuntimeError('No existe el Tema 17 en data/programa.json')
write(programme_path, json.dumps(programme, ensure_ascii=False, indent=2) + '\n')

# 5. Versión de aplicación.
package_path = ROOT / 'package.json'
package = json.loads(read(package_path))
package['version'] = VERSION_NEW
write(package_path, json.dumps(package, ensure_ascii=False, indent=2) + '\n')

index_path = ROOT / 'index.html'
index = replace_required(read(index_path), 'v0.16.0', 'v0.17.0', 'index.html')
write(index_path, index)

# 6. README.
readme_path = ROOT / 'README.md'
readme = read(readme_path)
readme = replace_required(readme, '- Versión: **0.16.0**.', '- Versión: **0.17.0**.', 'README versión')
readme = replace_required(readme, '- Temas 12–16: `APROBADO_USUARIO` el 18 de julio de 2026.\n- Temas 17–19: `PENDIENTE_RECONSTRUCCION`.', '- Temas 12–17: `APROBADO_USUARIO` el 18 de julio de 2026.\n- Temas 18–19: `PENDIENTE_RECONSTRUCCION`.', 'README estados')
readme = replace_required(readme, '│     └─ tema-16/', '│     ├─ tema-16/\n│     └─ tema-17/', 'README arquitectura')
marker = 'Los bancos de preguntas de los dieciséis temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación del manual no autoriza a rellenarlos automáticamente.'
tema17 = '''### Tema 17

LibreOffice y Microsoft Office I: procesamiento de textos con Microsoft Word y LibreOffice Writer; entorno y formatos DOCX/ODT; edición, búsqueda y corrección; formato directo, párrafos, estilos y listas; páginas, secciones, encabezados, tablas e imágenes; comentarios, control de cambios, combinación de correspondencia, impresión, PDF y accesibilidad. Incluye las diferencias operativas esenciales entre Word y Writer.

Los bancos de preguntas de los diecisiete temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación del manual no autoriza a rellenarlos automáticamente.'''
readme = replace_required(readme, marker, tema17, 'README Tema 17')
readme = replace_required(readme, 'La validación confirma que existen exactamente dieciséis temas aprobados, tres pendientes y que los archivos modulares de los temas 11, 12, 13, 14, 15 y 16 permanecen enlazados y disponibles sin conexión.', 'La validación confirma que existen exactamente diecisiete temas aprobados, dos pendientes y que los archivos modulares de los temas 11, 12, 13, 14, 15, 16 y 17 permanecen enlazados y disponibles sin conexión.', 'README validación')
write(readme_path, readme)

# 7. Service worker y disponibilidad sin conexión.
sw_path = ROOT / 'sw.js'
sw = replace_required(read(sw_path), "const CACHE = 'opoweb-v2-0.16.0';", "const CACHE = 'opoweb-v2-0.17.0';", 'sw cache')
marker = "  './content/la-puebla/tema-16/bloque-05-ie-modo-ie.md'\n];"
replacement = """  './content/la-puebla/tema-16/bloque-05-ie-modo-ie.md',
  './content/la-puebla/tema-17/manual.md',
  './content/la-puebla/tema-17/matriz.json',
  './content/la-puebla/tema-17/aprobacion.md',
  './content/la-puebla/tema-17/preguntas.json',
  './content/la-puebla/tema-17/fuentes.md',
  './content/la-puebla/tema-17/feedback.md',
  './content/la-puebla/tema-17/bloque-01-entorno-formatos.md',
  './content/la-puebla/tema-17/bloque-02-edicion-busqueda.md',
  './content/la-puebla/tema-17/bloque-03-formato-estilos.md',
  './content/la-puebla/tema-17/bloque-04-paginas-objetos.md',
  './content/la-puebla/tema-17/bloque-05-revision-salida.md'
];"""
sw = replace_required(sw, marker, replacement, 'sw assets Tema 17')
write(sw_path, sw)

# 8. Validación final para el estado aprobado.
tests = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.17.0');
assert.equal(packageJson.version, '0.17.0');
assert.ok(index.includes('v0.17.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
assert.equal(review.length, 0);
assert.deepEqual(pending.map(t => t.numero), [18,19]);
assert.ok(programme.temas.slice(17).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t17 = programme.temas[16];
const base17 = 'content/la-puebla/tema-17';
const matrix17 = json(`${base17}/matriz.json`);
const questions17 = json(`${base17}/preguntas.json`);
assert.equal(t17.capitulos.length, 5);
assert.equal(t17.aprobadoEl, '2026-07-18');
assert.equal(t17.aprobacion, `${base17}/aprobacion.md`);
assert.equal(matrix17.estado, 'APROBADO_USUARIO');
assert.equal(matrix17.aprobadoEl, '2026-07-18');
assert.equal(matrix17.cobertura.length, 5);
assert.equal(matrix17.atajosComparados.length, 12);
assert.equal(matrix17.diferenciasClave.length, 5);
assert.equal(questions17.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions17.preguntas, []);
assert.ok(read(`${base17}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base17}/aprobacion.md`).includes('Tema 17 aprobado'));
assert.ok(read(`${base17}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base17}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

const files17 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-formatos.md','bloque-02-edicion-busqueda.md',
  'bloque-03-formato-estilos.md','bloque-04-paginas-objetos.md',
  'bloque-05-revision-salida.md'
];
for (const file of files17) {
  assert.ok(exists(`${base17}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base17}/${file}`), `No precargado ${file}`);
}

const joined17 = files17.filter(f => f.endsWith('.md')).map(f => read(`${base17}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft word','libreoffice writer','docx','odt','guardar como','formato directo',
  'estilos de página','saltos de sección','vincular al anterior','combinación de correspondencia',
  'control de cambios','exportar a pdf','texto alternativo','navegador'
]) {
  assert.ok(joined17.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Word','Atajos de teclado para LibreOffice Writer',
  'Funcionalidades de LibreOffice Writer','Combinar correspondencia','Exportar a PDF'
]) {
  assert.ok(read(`${base17}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.17.0'"));
assert.equal(exists('.github/workflows/apply-t17-approval.yml'), false);
assert.equal(exists('scripts/publish_t17.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme17Questions: questions17.preguntas.length,
  status: 'TEMA_17_APROBADO_VALIDADO'
}, null, 2));
'''
write(ROOT / 'tests/validate.mjs', tests)

# 9. Eliminar herramientas temporales antes de la publicación final.
for temp in [ROOT / '.github/workflows/apply-t17-approval.yml', ROOT / 'scripts/publish_t17.py']:
    if temp.exists():
        temp.unlink()
