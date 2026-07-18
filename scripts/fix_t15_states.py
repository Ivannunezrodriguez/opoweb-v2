from pathlib import Path

files = [
    Path('content/la-puebla/tema-15/bloque-01-explorador-rutas.md'),
    Path('content/la-puebla/tema-15/bloque-02-operaciones-archivos.md'),
    Path('content/la-puebla/tema-15/bloque-03-unidades-locales-red.md'),
    Path('content/la-puebla/tema-15/bloque-04-impresion.md'),
    Path('content/la-puebla/tema-15/bloque-05-digitalizacion.md'),
]

for path in files:
    text = path.read_text(encoding='utf-8')
    old = '**Estado:** EN REVISIÓN DEL USUARIO'
    new = '**Estado:** APROBADO POR EL USUARIO'
    if old not in text:
        raise SystemExit(f'No se encontró el estado obsoleto en {path}')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')

print('Estados del Tema 15 corregidos')
