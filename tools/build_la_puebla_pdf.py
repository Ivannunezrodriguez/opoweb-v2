#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
from pathlib import Path

import markdown
from weasyprint import HTML

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content" / "la-puebla"
OUTDIR = ROOT / "dist"
OUTDIR.mkdir(exist_ok=True)
OUT = OUTDIR / "OpoWeb-La-Puebla-Temario-Completo-2026.pdf"


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def esc(value) -> str:
    return html.escape(str(value), quote=True)


def q_statement(q: dict) -> str:
    return str(q.get("enunciado") or q.get("pregunta") or q.get("texto") or q.get("question") or "[Pregunta sin enunciado]")


def q_options(q: dict) -> list:
    return q.get("opciones") or q.get("respuestas") or q.get("alternativas") or []


def q_correct(q: dict) -> int:
    value = q.get("respuestaCorrecta")
    if value is None:
        value = q.get("correcta")
    if value is None:
        value = q.get("indiceCorrecto")
    if isinstance(value, str) and value.upper() in "ABCD":
        return "ABCD".index(value.upper())
    return int(value)


def q_just(q: dict) -> str:
    return str(q.get("justificacion") or q.get("explicacion") or q.get("fundamento") or "")


def q_trap(q: dict) -> str:
    return str(q.get("trampaExamen") or q.get("trampa") or q.get("focoExamen") or "")


def q_ref(q: dict) -> str:
    return str(q.get("referencia") or q.get("fuente") or q.get("baseLegal") or "")


def options_html(options):
    return "<ol class='options' type='A'>" + "".join(f"<li>{esc(opt)}</li>" for opt in options) + "</ol>"


def answer_letter(idx: int) -> str:
    return "ABCD"[int(idx)] if 0 <= int(idx) < 4 else str(idx)


def md_to_html(text: str) -> str:
    return markdown.markdown(text, extensions=["tables", "fenced_code", "sane_lists", "toc"], output_format="html5")


def strip_source_header(md: str) -> str:
    lines = md.splitlines()
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
        while lines and not lines[0].strip():
            lines.pop(0)
    return "\n".join(lines)


def manual_title(i: int, manual: str) -> str:
    m = re.search(r"\*\*Tema\s+\d+\.\s*(.*?)\*\*", manual, re.S)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else f"Tema {i}"


def build():
    temas = []
    qbyid = {}
    for i in range(1, 20):
        tdir = CONTENT / f"tema-{i:02d}"
        manual_path = tdir / "manual.md"
        questions_path = tdir / "preguntas.json"
        if not manual_path.exists() or not questions_path.exists():
            raise FileNotFoundError(f"Falta contenido obligatorio del tema {i}: {tdir}")
        manual = manual_path.read_text(encoding="utf-8")
        qb = load_json(questions_path)
        temas.append((i, manual, qb))
        for q in qb.get("preguntas", []):
            if q.get("id"):
                qbyid[q["id"]] = q

    supuestos = load_json(CONTENT / "supuestos-practicos.json")
    simulacros = load_json(CONTENT / "simulacros.json")
    parts = []

    parts.append("""
    <section class="cover">
      <div class="brand">OpoWeb</div>
      <h1>Auxiliar Administrativo</h1>
      <h2>La Puebla de Montalbán</h2>
      <div class="cover-sub">Temario completo · Tests · Supuestos prácticos · Simulacros · Soluciones</div>
      <div class="cover-meta">Edición imprimible · Agosto de 2026</div>
      <div class="cover-note">Fuente editorial: contenido publicado y auditado en OpoWeb. Programa oficial: Anexo I de las bases publicadas en el BOP de Toledo núm. 82, de 5 de mayo de 2026.</div>
    </section>
    """)

    parts.append("<section class='page-break' id='indice'><h1>Índice general</h1><div class='toc'>")
    for i, manual, _ in temas:
        parts.append(f"<p><a href='#tema-{i:02d}'><strong>Tema {i}.</strong> {esc(manual_title(i, manual))}</a></p>")
    parts.append("<p class='toc-sep'><a href='#tests'><strong>Tests por tema</strong></a></p>")
    parts.append("<p><a href='#supuestos'><strong>20 supuestos prácticos</strong></a></p>")
    parts.append("<p><a href='#simulacros'><strong>3 simulacros transversales</strong></a></p>")
    parts.append("<p><a href='#soluciones'><strong>Soluciones y justificaciones</strong></a></p></div></section>")

    parts.append("""
    <section class="page-break intro">
      <h1>Cómo usar este PDF</h1>
      <p>Este documento reproduce en formato imprimible el contenido editorial de OpoWeb para La Puebla de Montalbán. Los temas mantienen la estructura, tablas, avisos y referencias de los manuales publicados en el repositorio.</p>
      <ul><li>Cada tema comienza en página nueva.</li><li>Los tests se presentan sin solución inmediata.</li><li>Los supuestos y simulacros comienzan en secciones independientes.</li><li>Todas las soluciones, justificaciones, trampas de examen y referencias se agrupan al final.</li></ul>
      <div class="focus"><strong>⚠ ¡Foco Examen!:</strong> En la convocatoria se exige conocer la legislación vigente en el momento de las pruebas. Antes del examen debe comprobarse que la edición del PDF coincide con la última revisión normativa publicada en OpoWeb.</div>
    </section>
    """)

    for i, manual, _ in temas:
        parts.append(f"<section class='chapter page-break' id='tema-{i:02d}'><div class='chapter-kicker'>TEMA {i}</div><h1>{esc(manual_title(i, manual))}</h1>{md_to_html(strip_source_header(manual))}</section>")

    parts.append("<section class='page-break' id='tests'><h1>Tests por tema</h1><p class='lead'>12 preguntas por tema. Las respuestas y justificaciones están agrupadas al final del PDF.</p></section>")
    for i, _, qb in temas:
        parts.append(f"<section class='page-break test-section' id='test-{i:02d}'><h1>Test · Tema {i}</h1>")
        for n, q in enumerate(qb.get("preguntas", []), 1):
            parts.append(f"<div class='question'><div class='qnum'>{n}. {esc(q_statement(q))}</div>{options_html(q_options(q))}</div>")
        parts.append("</section>")

    parts.append("<section class='page-break' id='supuestos'><h1>20 supuestos prácticos</h1><p class='lead'>Resuelve cada caso sin consultar la solución. La corrección completa está al final.</p></section>")
    for n, sp in enumerate(supuestos.get("supuestos", []), 1):
        parts.append(f"<section class='case'><h2>Supuesto {n}. {esc(sp.get('titulo',''))}</h2><p><strong>Temas:</strong> {esc(', '.join(map(str, sp.get('temas', []))))}</p><div class='case-text'>{esc(sp.get('enunciado',''))}</div><div class='qnum'>{esc(sp.get('pregunta',''))}</div>{options_html(sp.get('opciones', []))}</section>")

    parts.append("<section class='page-break' id='simulacros'><h1>Simulacros transversales</h1><p class='lead'>Tres simulacros de 30 preguntas. Corrección al final.</p></section>")
    for sim in simulacros.get("simulacros", []):
        parts.append(f"<section class='page-break sim'><h1>{esc(sim.get('titulo',''))}</h1><p><strong>Duración:</strong> {esc(sim.get('duracionMinutos',''))} minutos.</p><p>{esc(sim.get('instrucciones',''))}</p>")
        for n, qid in enumerate(sim.get("preguntas", []), 1):
            q = qbyid.get(qid)
            if not q:
                parts.append(f"<div class='question'><div class='qnum'>{n}. [No se encontró {esc(qid)} en los bancos temáticos]</div></div>")
                continue
            parts.append(f"<div class='question'><div class='qnum'>{n}. {esc(q_statement(q))}</div>{options_html(q_options(q))}</div>")
        parts.append("</section>")

    parts.append("<section class='page-break' id='soluciones'><h1>Soluciones y justificaciones</h1><p class='lead'>Todas las respuestas se concentran aquí para evitar revelar la solución durante el estudio.</p></section>")

    for i, _, qb in temas:
        parts.append(f"<section class='page-break solutions'><h1>Soluciones · Test Tema {i}</h1>")
        for n, q in enumerate(qb.get("preguntas", []), 1):
            opts = q_options(q)
            try:
                idx = q_correct(q)
                answer = opts[idx]
            except Exception:
                idx, answer = 0, "[Respuesta no normalizada]"
            parts.append(f"<div class='solution'><h3>{n}. {answer_letter(idx)} · {esc(answer)}</h3><p><strong>Justificación:</strong> {esc(q_just(q))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(q_trap(q))}</div><p class='ref'><strong>Referencia:</strong> {esc(q_ref(q))}</p></div>")
        parts.append("</section>")

    parts.append("<section class='page-break solutions'><h1>Soluciones · Supuestos prácticos</h1>")
    for n, sp in enumerate(supuestos.get("supuestos", []), 1):
        idx = int(sp.get("respuestaCorrecta", 0))
        opts = sp.get("opciones", [])
        ans = opts[idx] if 0 <= idx < len(opts) else "[Respuesta no disponible]"
        parts.append(f"<div class='solution'><h3>Supuesto {n}. {answer_letter(idx)} · {esc(ans)}</h3><p><strong>Justificación:</strong> {esc(sp.get('justificacion',''))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(sp.get('trampaExamen',''))}</div><p class='ref'><strong>Referencia:</strong> {esc(sp.get('referencia',''))}</p></div>")
    parts.append("</section>")

    for sim in simulacros.get("simulacros", []):
        parts.append(f"<section class='page-break solutions'><h1>Soluciones · {esc(sim.get('titulo',''))}</h1>")
        for n, qid in enumerate(sim.get("preguntas", []), 1):
            q = qbyid.get(qid)
            if not q:
                parts.append(f"<div class='solution'><h3>{n}. {esc(qid)} · no encontrada</h3></div>")
                continue
            opts = q_options(q)
            try:
                idx = q_correct(q)
                ans = opts[idx]
            except Exception:
                idx, ans = 0, "[Respuesta no normalizada]"
            parts.append(f"<div class='solution'><h3>{n}. {answer_letter(idx)} · {esc(ans)} <span class='qid'>({esc(qid)})</span></h3><p><strong>Justificación:</strong> {esc(q_just(q))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(q_trap(q))}</div><p class='ref'><strong>Referencia:</strong> {esc(q_ref(q))}</p></div>")
        parts.append("</section>")

    css = r"""
    @page { size: A4; margin: 18mm 17mm 19mm 18mm; @top-left { content: "OpoWeb · Auxiliar Administrativo · La Puebla de Montalbán"; font-size: 8pt; color: #667085; } @top-right { content: string(chapter); font-size: 8pt; color: #667085; } @bottom-center { content: "OpoWeb · Edición agosto 2026 · Página " counter(page) " de " counter(pages); font-size: 8pt; color: #667085; } }
    @page:first { margin: 0; @top-left { content: none; } @top-right { content: none; } @bottom-center { content: none; } }
    html { font-family: "DejaVu Sans", Arial, sans-serif; color: #1f2937; font-size: 10.3pt; line-height: 1.48; } body { margin: 0; }
    a { color: #174ea6; text-decoration: none; } h1, h2, h3, h4 { color: #17365d; break-after: avoid; }
    h1 { font-size: 19pt; line-height: 1.15; margin: 0 0 8mm; string-set: chapter content(); } h2 { font-size: 14.2pt; margin: 7mm 0 3mm; border-bottom: 1px solid #d0d5dd; padding-bottom: 1.3mm; } h3 { font-size: 11.5pt; margin: 5mm 0 2mm; }
    p { margin: 0 0 3mm; } ul, ol { margin-top: 1.5mm; margin-bottom: 3mm; } li { margin-bottom: 1.2mm; } strong { color: #111827; } .page-break { break-before: page; }
    .cover { height: 297mm; padding: 50mm 28mm 25mm; box-sizing: border-box; background: #17365d; color: white; } .cover .brand { font-size: 18pt; font-weight: 700; letter-spacing: 0.8px; margin-bottom: 28mm; } .cover h1 { font-size: 31pt; color: white; margin-bottom: 5mm; } .cover h2 { font-size: 23pt; color: #eaf2ff; border: 0; margin: 0 0 10mm; padding: 0; } .cover-sub { font-size: 14pt; max-width: 145mm; line-height: 1.45; } .cover-meta { margin-top: 46mm; font-size: 11pt; font-weight: 700; } .cover-note { margin-top: 8mm; font-size: 9pt; line-height: 1.5; color: #d9e7f7; max-width: 145mm; }
    .chapter-kicker { font-size: 9pt; letter-spacing: 1.8px; font-weight: 800; color: #667085; margin-bottom: 3mm; } .chapter > h1 { border-left: 4px solid #315d8a; padding-left: 4mm; } .chapter blockquote { margin: 4mm 0; padding: 3mm 4mm; border-left: 4px solid #f3b33d; background: #fff8e7; break-inside: avoid; }
    table { width: 100%; border-collapse: collapse; margin: 4mm 0 5mm; font-size: 8.8pt; break-inside: avoid-page; } th, td { border: 1px solid #cfd6df; padding: 2.2mm; vertical-align: top; } th { background: #edf3f9; color: #17365d; font-weight: 700; }
    code { font-family: "DejaVu Sans Mono", monospace; font-size: 8.6pt; background: #f2f4f7; padding: 0.2mm 0.8mm; } pre { white-space: pre-wrap; background: #f6f8fa; border: 1px solid #e1e5ea; padding: 3mm; font-size: 8.4pt; break-inside: avoid; }
    .focus { margin: 3mm 0 4mm; padding: 3mm 3.5mm; background: #fff4df; border-left: 4px solid #e59a00; break-inside: avoid; } .toc p { margin: 0 0 2.4mm; border-bottom: 1px dotted #d0d5dd; padding-bottom: 1.5mm; } .toc-sep { margin-top: 7mm !important; } .lead { font-size: 11pt; color: #475467; margin-bottom: 7mm; }
    .question { margin: 0 0 7mm; break-inside: avoid; } .qnum { font-weight: 700; color: #111827; margin-bottom: 2mm; } .options { margin-top: 1mm; padding-left: 8mm; } .options li { padding-left: 1mm; } .case { margin-bottom: 9mm; break-inside: avoid; } .case-text { background: #f8fafc; border: 1px solid #dce3ea; padding: 3mm; margin: 2mm 0 3mm; }
    .solution { margin-bottom: 7mm; padding-bottom: 5mm; border-bottom: 1px solid #e4e7ec; break-inside: avoid; } .solution h3 { margin-top: 0; } .ref { font-size: 8.7pt; color: #667085; } .qid { font-size: 8pt; color: #667085; font-weight: 400; }
    """

    document = f"<!doctype html><html lang='es'><head><meta charset='utf-8'><title>OpoWeb · La Puebla · Temario completo 2026</title><style>{css}</style></head><body>{''.join(parts)}</body></html>"
    (OUTDIR / "OpoWeb-La-Puebla-Temario-Completo-2026.html").write_text(document, encoding="utf-8")
    HTML(string=document, base_url=str(ROOT)).write_pdf(str(OUT))
    print(OUT)


if __name__ == "__main__":
    build()
