from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-18'
DATE = '2026-07-18'
VERSION_OLD = '0.17.0'
VERSION_NEW = '0.18.0'


def read(path):
    return Path(path).read_text(encoding='utf-8')


def write(path, content):
    Path(path).write_text(content, encoding='utf-8')


def replace_required(text, old, new, label):
    if old not in text:
        raise RuntimeError(f'No se encontró el texto esperado en {label}: {old!r}')
    return text.replace(old, new)


# 1. Registro formal de aprobación.
approval = '''# Tema 18 · Aprobación del usuario

- Estado: `APROBADO_USUARIO`
- Fecha: 18 de julio de 2026
- Expresión registrada: **«Tema 18 aprobado»**

La aprobación se refiere al manual teórico-práctico, sus cinco bloques, la matriz y la trazabilidad de fuentes. No autoriza a generar automáticamente preguntas ni supuestos sin revisión individual.
'''
write(BASE / 'aprobacion.md', approval)

# 2. Estados de los documentos Markdown del tema.
md_files = [
    'manual.md', 'feedback.md', 'fuentes.md',
    'bloque-01-entorno-datos-formatos.md',
    'bloque-02-formulas-funciones.md',
    'bloque-03-formato-validacion.md',
    'bloque-04-datos-analisis.md',
    'bloque-05-graficos-salida.md',
]
for name in md_files:
    path = BASE / name
    text = read(path)
    text = text.replace('**Estado:** EN REVISIÓN DEL USUARIO', '**Estado:** APROBADO POR EL USUARIO')
    text = text.replace('`EN_REVISION_USUARIO`', '`APROBADO_USUARIO`')
    write(path, text)

manual_path = BASE / 'manual.md'
manual = read(manual_path)
manual = manual.replace('**No publicado como tema aprobado.**', '**Publicado como tema aprobado.**')
manual = manual.replace('- Revisión del usuario: pendiente.', '- Revisión del usuario: completada el 18 de julio de 2026.')
manual = manual.replace('- Tema cerrado: **NO**.', '- Tema cerrado: **SÍ**.')
manual = manual.replace('- Publicación como aprobado: **NO**.', '- Publicación como aprobado: **SÍ**.')
manual = manual.replace(
    'El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 18 aprobado»**.',
    'El usuario aprobó expresamente el tema mediante la frase **«Tema 18 aprobado»** el 18 de julio de 2026.'
)
write(manual_path, manual)

feedback_path = BASE / 'feedback.md'
feedback = read(feedback_path)
feedback = feedback.replace(
    'El tema no está publicado como aprobado. La versión pública continúa en `0.17.0` y el banco de preguntas permanece vacío.',
    'El tema ha sido aprobado por el usuario y se publica en la versión `0.18.0`. El banco de preguntas permanece vacío hasta su revisión específica y trazable.'
)
feedback = feedback.replace(
    'No se fusionará mientras permanezca en `APROBADO_USUARIO`.',
    'La aprobación expresa quedó registrada el 18 de julio de 2026 mediante la frase **«Tema 18 aprobado»**.'
)
if '## Aprobación registrada' not in feedback:
    feedback += '\n\n## Aprobación registrada\n\nEl usuario aprobó expresamente el tema el 18 de julio de 2026 mediante la frase **«Tema 18 aprobado»**.\n'
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
    if theme['numero'] == 18:
        theme['estado'] = 'APROBADO_USUARIO'
        theme['aprobadoEl'] = DATE
        theme['manual'] = 'content/la-puebla/tema-18/manual.md'
        theme['capitulos'] = [
            'content/la-puebla/tema-18/bloque-01-entorno-datos-formatos.md',
            'content/la-puebla/tema-18/bloque-02-formulas-funciones.md',
            'content/la-puebla/tema-18/bloque-03-formato-validacion.md',
            'content/la-puebla/tema-18/bloque-04-datos-analisis.md',
            'content/la-puebla/tema-18/bloque-05-graficos-salida.md',
        ]
        theme['matriz'] = 'content/la-puebla/tema-18/matriz.json'
        theme['feedback'] = 'content/la-puebla/tema-18/feedback.md'
        theme['preguntas'] = 'content/la-puebla/tema-18/preguntas.json'
        theme['trazabilidad'] = 'content/la-puebla/tema-18/fuentes.md'
        theme['aprobacion'] = 'content/la-puebla/tema-18/aprobacion.md'
        break
else:
    raise RuntimeError('No existe el Tema 18 en data/programa.json')
write(programme_path, json.dumps(programme, ensure_ascii=False, indent=2) + '\n')

# 5. Versión de aplicación.
package_path = ROOT / 'package.json'
package = json.loads(read(package_path))
package['version'] = VERSION_NEW
write(package_path, json.dumps(package, ensure_ascii=False, indent=2) + '\n')

index_path = ROOT / 'index.html'
index = replace_required(read(index_path), 'v0.17.0', 'v0.18.0', 'index.html')
write(index_path, index)

# 6. README.
readme_path = ROOT / 'README.md'
readme = read(readme_path)
readme = replace_required(readme, '- Versión: **0.17.0**.', '- Versión: **0.18.0**.', 'README versión')
readme = replace_required(
    readme,
    '- Temas 12–17: `APROBADO_USUARIO` el 18 de julio de 2026.\n- Temas 18–19: `PENDIENTE_RECONSTRUCCION`.',
    '- Temas 12–18: `APROBADO_USUARIO` el 18 de julio de 2026.\n- Tema 19: `PENDIENTE_RECONSTRUCCION`.',
    'README estados'
)
readme = replace_required(
    readme,
    '│     ├─ tema-16/\n│     └─ tema-17/',
    '│     ├─ tema-16/\n│     ├─ tema-17/\n│     └─ tema-18/',
    'README arquitectura'
)
insert_marker = 'Los bancos de preguntas de los diecisiete temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación del manual no autoriza a rellenarlos automáticamente.'
tema18_section = '''### Tema 18

LibreOffice y Microsoft Office II: hojas de cálculo con Microsoft Excel y LibreOffice Calc; libros, hojas, celdas, rangos y formatos XLSX/ODS/CSV; fórmulas, operadores, referencias y funciones; formato condicional, tablas, validación y protección; ordenación, filtros, subtotales y tablas dinámicas; gráficos, impresión, PDF y accesibilidad. Incluye las diferencias operativas esenciales entre Excel y Calc.

Los bancos de preguntas de los dieciocho temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación del manual no autoriza a rellenarlos automáticamente.'''
readme = replace_required(readme, insert_marker, tema18_section, 'README Tema 18')
readme = replace_required(
    readme,
    'La validación confirma que existen exactamente diecisiete temas aprobados, dos pendientes y que los archivos modulares de los temas 11, 12, 13, 14, 15, 16 y 17 permanecen enlazados y disponibles sin conexión.',
    'La validación confirma que existen exactamente dieciocho temas aprobados, un tema pendiente y que los archivos modulares de los temas 11, 12, 13, 14, 15, 16, 17 y 18 permanecen enlazados y disponibles sin conexión.',
    'README validación'
)
write(readme_path, readme)

# 7. Service worker y disponibilidad sin conexión.
sw_path = ROOT / 'sw.js'
sw = replace_required(read(sw_path), "const CACHE = 'opoweb-v2-0.17.0';", "const CACHE = 'opoweb-v2-0.18.0';", 'sw cache')
marker = "  './content/la-puebla/tema-17/bloque-05-revision-salida.md'\n];"
replacement = """  './content/la-puebla/tema-17/bloque-05-revision-salida.md',
  './content/la-puebla/tema-18/manual.md',
  './content/la-puebla/tema-18/matriz.json',
  './content/la-puebla/tema-18/aprobacion.md',
  './content/la-puebla/tema-18/preguntas.json',
  './content/la-puebla/tema-18/fuentes.md',
  './content/la-puebla/tema-18/feedback.md',
  './content/la-puebla/tema-18/bloque-01-entorno-datos-formatos.md',
  './content/la-puebla/tema-18/bloque-02-formulas-funciones.md',
  './content/la-puebla/tema-18/bloque-03-formato-validacion.md',
  './content/la-puebla/tema-18/bloque-04-datos-analisis.md',
  './content/la-puebla/tema-18/bloque-05-graficos-salida.md'
];"""
sw = replace_required(sw, marker, replacement, 'sw assets Tema 18')
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

assert.equal(programme.version, '0.18.0');
assert.equal(packageJson.version, '0.18.0');
assert.ok(index.includes('v0.18.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
assert.equal(review.length, 0);
assert.deepEqual(pending.map(t => t.numero), [19]);
assert.ok(!programme.temas[18].manual);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t18 = programme.temas[17];
const base18 = 'content/la-puebla/tema-18';
const matrix18 = json(`${base18}/matriz.json`);
const questions18 = json(`${base18}/preguntas.json`);
assert.equal(t18.capitulos.length, 5);
assert.equal(t18.aprobadoEl, '2026-07-18');
assert.equal(t18.aprobacion, `${base18}/aprobacion.md`);
assert.equal(matrix18.estado, 'APROBADO_USUARIO');
assert.equal(matrix18.aprobadoEl, '2026-07-18');
assert.equal(matrix18.cobertura.length, 5);
assert.equal(matrix18.atajosComparados.length, 12);
assert.equal(matrix18.diferenciasClave.length, 5);
assert.equal(questions18.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions18.preguntas, []);
assert.ok(read(`${base18}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base18}/aprobacion.md`).includes('Tema 18 aprobado'));
assert.ok(read(`${base18}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base18}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

const files18 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-datos-formatos.md','bloque-02-formulas-funciones.md',
  'bloque-03-formato-validacion.md','bloque-04-datos-analisis.md',
  'bloque-05-graficos-salida.md'
];
for (const file of files18) {
  assert.ok(exists(`${base18}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base18}/${file}`), `No precargado ${file}`);
}

const joined18 = files18.filter(f => f.endsWith('.md')).map(f => read(`${base18}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft excel','libreoffice calc','xlsx','ods','csv','referencia relativa',
  'referencia absoluta','referencia mixta','formato condicional','validación de datos',
  'tabla de excel','tabla dinámica','piloto de datos','gráfico','área de impresión',
  'proteger hoja','texto alternativo'
]) {
  assert.ok(joined18.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Excel','Información general sobre fórmulas en Excel',
  'Direcciones y referencias, absolutas y relativas','Crear tablas dinámicas',
  'Calc Guide 24.2 · Gráficos'
]) {
  assert.ok(read(`${base18}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.18.0'"));
assert.equal(exists('.github/workflows/apply-t18-approval.yml'), false);
assert.equal(exists('scripts/publish_t18.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme18Questions: questions18.preguntas.length,
  status: 'TEMA_18_APROBADO_VALIDADO'
}, null, 2));
'''
write(ROOT / 'tests/validate.mjs', tests)

# 9. Eliminar herramientas temporales antes de la publicación final.
for temp in [ROOT / '.github/workflows/apply-t18-approval.yml', ROOT / 'scripts/publish_t18.py']:
    if temp.exists():
        temp.unlink()
