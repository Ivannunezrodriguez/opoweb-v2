from pathlib import Path
import json

ROOT = Path('.')
BASE = ROOT / 'content/la-puebla/tema-19'
DATE = '2026-07-18'
VERSION = '0.19.0'


def replace_once(text, old, new, label):
    if old not in text:
        raise SystemExit(f'No se encontró {label}: {old!r}')
    return text.replace(old, new, 1)


def write(path, content):
    Path(path).write_text(content, encoding='utf-8')

# Estados visibles de todos los documentos Markdown del tema.
for path in BASE.glob('*.md'):
    text = path.read_text(encoding='utf-8')
    text = text.replace('**Estado:** EN REVISIÓN DEL USUARIO', '**Estado:** APROBADO POR EL USUARIO')
    write(path, text)

# Manual: cierre y publicación.
manual_path = BASE / 'manual.md'
manual = manual_path.read_text(encoding='utf-8')
manual = replace_once(manual, '**No publicado como tema aprobado.**', '**Publicado como tema aprobado.**', 'publicación del manual')
manual = replace_once(manual, '- Revisión del usuario: pendiente.', '- Revisión del usuario: completada el 18 de julio de 2026.', 'revisión del usuario')
manual = replace_once(manual, '- Tema cerrado: **NO**.', '- Tema cerrado: **SÍ**.', 'cierre del tema')
manual = replace_once(manual, '- Publicación como aprobado: **NO**.', '- Publicación como aprobado: **SÍ**.', 'estado de publicación')
manual = replace_once(
    manual,
    'El tema solo cambiará a `APROBADO_USUARIO` tras la respuesta expresa **«Tema 19 aprobado»**.',
    'El usuario aprobó expresamente el tema mediante **«Tema 19 aprobado»** el 18 de julio de 2026.',
    'frase final del manual'
)
write(manual_path, manual)

# Fuentes y feedback.
sources_path = BASE / 'fuentes.md'
sources = sources_path.read_text(encoding='utf-8')
write(sources_path, sources)

feedback_path = BASE / 'feedback.md'
feedback = feedback_path.read_text(encoding='utf-8')
feedback = replace_once(feedback, '`EN_REVISION_USUARIO`', '`APROBADO_USUARIO`', 'estado del feedback')
feedback = replace_once(
    feedback,
    'El tema no está publicado como aprobado. La versión pública continúa en `0.18.0` y el banco de preguntas permanece vacío.',
    'El tema está aprobado y publicado en la versión `0.19.0`. El banco de preguntas permanece vacío hasta su revisión individual y trazable.',
    'resumen del feedback'
)
feedback = replace_once(
    feedback,
    'La respuesta debe ser una de estas:\n\n- **«Tema 19 aprobado»**\n- **«Tema 19: cambia o amplía…»**\n\nNo se fusionará mientras permanezca en `EN_REVISION_USUARIO`.',
    'Aprobación registrada: **«Tema 19 aprobado»**, el 18 de julio de 2026.\n\nEstado final: `APROBADO_USUARIO`.',
    'cierre del feedback'
)
write(feedback_path, feedback)

# Matriz y preguntas.
matrix_path = BASE / 'matriz.json'
matrix = json.loads(matrix_path.read_text(encoding='utf-8'))
matrix['estado'] = 'APROBADO_USUARIO'
matrix['aprobadoEl'] = DATE
write(matrix_path, json.dumps(matrix, ensure_ascii=False, indent=2) + '\n')

questions_path = BASE / 'preguntas.json'
questions = json.loads(questions_path.read_text(encoding='utf-8'))
questions['estado'] = 'PENDIENTE_REVISION_POST_APROBACION'
questions['nota'] = 'El manual está aprobado. El banco continúa vacío hasta redactar y revisar preguntas vinculadas a funciones concretas y fuentes oficiales o técnicas identificadas.'
write(questions_path, json.dumps(questions, ensure_ascii=False, indent=2) + '\n')

approval = '''# Tema 19 · Aprobación del usuario

- Estado: `APROBADO_USUARIO`
- Fecha: 18 de julio de 2026
- Expresión registrada: **«Tema 19 aprobado»**
- Versión de publicación: `0.19.0`

La aprobación se refiere al manual teórico-práctico, sus cinco bloques, la matriz y la trazabilidad de fuentes. No autoriza a generar automáticamente preguntas ni supuestos sin revisión individual.
'''
write(BASE / 'aprobacion.md', approval)

# Programa.
programme_path = ROOT / 'data/programa.json'
programme = json.loads(programme_path.read_text(encoding='utf-8'))
programme['version'] = VERSION
t19 = programme['temas'][18]
t19['estado'] = 'APROBADO_USUARIO'
t19['aprobadoEl'] = DATE
t19['aprobacion'] = 'content/la-puebla/tema-19/aprobacion.md'
write(programme_path, json.dumps(programme, ensure_ascii=False, indent=2) + '\n')

# package.json e index.
package_path = ROOT / 'package.json'
package = json.loads(package_path.read_text(encoding='utf-8'))
package['version'] = VERSION
write(package_path, json.dumps(package, ensure_ascii=False, indent=2) + '\n')

index_path = ROOT / 'index.html'
index = index_path.read_text(encoding='utf-8').replace('v0.18.0', 'v0.19.0')
write(index_path, index)

# Service worker: versión y precarga completa del Tema 19.
sw_path = ROOT / 'sw.js'
sw = sw_path.read_text(encoding='utf-8')
sw = replace_once(sw, "const CACHE = 'opoweb-v2-0.18.0';", "const CACHE = 'opoweb-v2-0.19.0';", 'versión de caché')
assets = [
    'manual.md', 'matriz.json', 'aprobacion.md', 'feedback.md', 'preguntas.json', 'fuentes.md',
    'bloque-01-ordenador-componentes.md', 'bloque-02-perifericos-impresoras.md',
    'bloque-03-escaneres.md', 'bloque-04-almacenamiento-externo-usb.md', 'bloque-05-opticos.md'
]
insert = ''.join(f"  './content/la-puebla/tema-19/{name}',\n" for name in assets[:-1]) + f"  './content/la-puebla/tema-19/{assets[-1]}'\n"
sw = replace_once(sw, "  './content/la-puebla/tema-18/bloque-05-graficos-salida.md'\n];", "  './content/la-puebla/tema-18/bloque-05-graficos-salida.md',\n" + insert + '];', 'precarga del Tema 19')
write(sw_path, sw)

# README.
readme_path = ROOT / 'README.md'
readme = readme_path.read_text(encoding='utf-8')
readme = readme.replace('- Versión: **0.18.0**.', '- Versión: **0.19.0**.')
readme = readme.replace('- Tema 19: `EN_REVISION_USUARIO`.', '- Tema 19: `APROBADO_USUARIO` el 18 de julio de 2026.')
readme = readme.replace('│        ├─ aprobacion.md', '│        ├─ aprobacion.md')
readme = readme.replace(
    'Los bancos de preguntas de los dieciocho temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación del manual no autoriza a rellenarlos automáticamente.',
    'Los bancos de preguntas de los diecinueve temas permanecen vacíos hasta realizar una revisión específica y trazable. La aprobación de los manuales no autoriza a rellenarlos automáticamente.'
)
marker = '### Tema 18\n\nLibreOffice y Microsoft Office II: hojas de cálculo con Microsoft Excel y LibreOffice Calc; libros, hojas, celdas, rangos y formatos XLSX/ODS/CSV; fórmulas, operadores, referencias y funciones; formato condicional, tablas, validación y protección; ordenación, filtros, subtotales y tablas dinámicas; gráficos, impresión, PDF y accesibilidad. Incluye las diferencias operativas esenciales entre Excel y Calc.\n\n'
addition = marker + '### Tema 19\n\nConceptos generales del ordenador personal: hardware, software, firmware y controladores; placa base, CPU, RAM, HDD, SSD, GPU, alimentación, refrigeración y UEFI; periféricos; impresoras y colas; escáneres y OCR; discos externos, memorias USB, sistemas de archivos y expulsión segura; lectores y grabadores de CD y DVD. Incluye las diferencias esenciales entre RAM y almacenamiento, USB-C y versión USB, disco físico y volumen, impresora y cola, escáner y OCR, lector y grabador.\n\n'
readme = replace_once(readme, marker, addition, 'resumen del Tema 19')
readme = readme.replace(
    'La validación confirma que existen exactamente dieciocho temas aprobados y el Tema 19 en revisión; los archivos aprobados permanecen disponibles sin conexión y el Tema 19 no se precarga hasta su aprobación.',
    'La validación confirma que los diecinueve temas están aprobados individualmente y que todos sus archivos modulares permanecen enlazados y disponibles sin conexión.'
)
write(readme_path, readme)

# Validación final.
tests = r'''import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.19.0');
assert.equal(packageJson.version, '0.19.0');
assert.ok(index.includes('v0.19.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
assert.equal(review.length, 0);
assert.equal(pending.length, 0);

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t19 = programme.temas[18];
const base19 = 'content/la-puebla/tema-19';
const matrix19 = json(`${base19}/matriz.json`);
const questions19 = json(`${base19}/preguntas.json`);
assert.equal(t19.capitulos.length, 5);
assert.equal(t19.aprobadoEl, '2026-07-18');
assert.equal(t19.aprobacion, `${base19}/aprobacion.md`);
assert.equal(matrix19.estado, 'APROBADO_USUARIO');
assert.equal(matrix19.aprobadoEl, '2026-07-18');
assert.equal(matrix19.cobertura.length, 5);
assert.equal(matrix19.diferenciasClave.length, 6);
assert.equal(questions19.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions19.preguntas, []);
assert.ok(read(`${base19}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base19}/aprobacion.md`).includes('Tema 19 aprobado'));
assert.ok(read(`${base19}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base19}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

const files19 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-ordenador-componentes.md','bloque-02-perifericos-impresoras.md',
  'bloque-03-escaneres.md','bloque-04-almacenamiento-externo-usb.md',
  'bloque-05-opticos.md'
];
for (const file of files19) {
  assert.ok(exists(`${base19}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base19}/${file}`), `No precargado ${file}`);
}

const joined19 = files19.filter(f => f.endsWith('.md')).map(f => read(`${base19}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'hardware','software','firmware','controlador','placa base','cpu','memoria ram','hdd','ssd',
  'usb-c','partición','volumen','impresora','inyección de tinta','tóner','cola','escáner',
  'alimentador automático','resolución óptica','ocr','fat32','exfat','ntfs','expulsión segura',
  'cd-rom','cd-r','cd-rw','dvd-rom','dvd-rw','lector','grabador'
]) {
  assert.ok(joined19.includes(term), `Falta ${term}`);
}
for (const source of [
  'Requisitos del sistema de Windows 11','How to Build a Gaming PC','USB Type-C Cable and Connector Specification',
  'Quitar hardware de forma segura en Windows','Agregar o instalar una impresora en Windows',
  'Instalar y usar un escáner en Windows','Grabar y copiar CD'
]) {
  assert.ok(read(`${base19}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.19.0'"));
assert.equal(exists('.github/workflows/apply-t19-approval.yml'), false);
assert.equal(exists('scripts/publish_t19.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme19Questions: questions19.preguntas.length,
  status: 'CONVOCATORIA_LA_PUEBLA_APROBADA_VALIDADA'
}, null, 2));
'''
write(ROOT / 'tests/validate.mjs', tests)

print('Tema 19 aprobado y preparado para publicación')
