#!/usr/bin/env python3
from __future__ import annotations
import argparse, html, json, re
from pathlib import Path
import markdown
from weasyprint import HTML

ROOT=Path(__file__).resolve().parents[1]

def esc(x): return html.escape(str(x), quote=True)
def load(p): return json.loads(p.read_text(encoding='utf-8'))
def qtext(q): return str(q.get('enunciado') or q.get('pregunta') or q.get('texto') or '[Pregunta sin enunciado]')
def qopts(q): return q.get('opciones') or q.get('respuestas') or []
def qidx(q):
    v=q.get('respuestaCorrecta', q.get('correcta', q.get('indiceCorrecto',0)))
    if isinstance(v,str) and v.upper() in 'ABCD': return 'ABCD'.index(v.upper())
    return int(v)
def qjust(q): return str(q.get('justificacion') or q.get('explicacion') or '')
def qtrap(q): return str(q.get('trampaExamen') or q.get('trampa') or q.get('focoExamen') or '')
def qref(q):
    r=q.get('referencia') or q.get('fuente') or q.get('referencias') or ''
    return '; '.join(map(str,r)) if isinstance(r,list) else str(r)
def opts_html(opts): return "<ol class='opts' type='A'>"+''.join(f'<li>{esc(o)}</li>' for o in opts)+'</ol>'
def md_html(t): return markdown.markdown(t,extensions=['tables','fenced_code','sane_lists','toc'],output_format='html5')
def title_from(i,md):
    m=re.search(r'\*\*Tema\s+\d+\.\s*(.*?)\*\*',md,re.S)
    if m: return re.sub(r'\s+',' ',m.group(1)).strip()
    for line in md.splitlines():
        if line.startswith('# '): return re.sub(r'^#\s*','',line).strip()
    return f'Tema {i}'
def strip_h1(md):
    ls=md.splitlines()
    if ls and ls[0].startswith('# '):
        ls=ls[1:]
        while ls and not ls[0].strip(): ls.pop(0)
    return '\n'.join(ls)

def build(slug,title,subtitle,outname):
    content=ROOT/'content'/slug; outdir=ROOT/'dist'; outdir.mkdir(exist_ok=True)
    tdirs=sorted([p for p in content.glob('tema-*') if p.is_dir()], key=lambda p:int(p.name.split('-')[1]))
    temas=[]; byid={}
    for td in tdirs:
        i=int(td.name.split('-')[1]); mp=td/'manual.md'; qp=td/'preguntas.json'
        if not mp.exists(): continue
        m=mp.read_text(encoding='utf-8'); qb=load(qp) if qp.exists() else {'preguntas':[]}
        temas.append((i,m,qb))
        for q in qb.get('preguntas',[]):
            if q.get('id'): byid[q['id']]=q
    sup=load(content/'supuestos-practicos.json') if (content/'supuestos-practicos.json').exists() else {'supuestos':[]}
    sims=load(content/'simulacros.json') if (content/'simulacros.json').exists() else {'simulacros':[]}
    parts=[]
    parts.append(f"<section class='cover'><div class='brand'>OpoWeb</div><h1>{esc(title)}</h1><h2>{esc(subtitle)}</h2><div class='cover-sub'>Temario completo · Tests · Supuestos prácticos · Simulacros · Soluciones</div><div class='cover-meta'>Edición imprimible · Agosto de 2026</div><div class='cover-note'>Fuente editorial única: contenido publicado en el repositorio OpoWeb.</div></section>")
    parts.append("<section class='page' id='indice'><h1>Índice general</h1><div class='toc'>")
    for i,m,_ in temas: parts.append(f"<p><a href='#t{i:02d}'><strong>Tema {i}.</strong> {esc(title_from(i,m))}</a></p>")
    parts.append("<p class='sep'><a href='#tests'><strong>Tests por tema</strong></a></p>")
    if sup.get('supuestos'): parts.append("<p><a href='#supuestos'><strong>Supuestos prácticos</strong></a></p>")
    if sims.get('simulacros'): parts.append("<p><a href='#simulacros'><strong>Simulacros</strong></a></p>")
    parts.append("<p><a href='#soluciones'><strong>Soluciones</strong></a></p></div></section>")
    parts.append("<section class='page'><h1>Cómo usar este PDF</h1><p>El documento reproduce el contenido editorial existente en OpoWeb. Cada tema comienza en página nueva; los tests aparecen sin respuesta inmediata y las soluciones se agrupan al final.</p></section>")
    for i,m,_ in temas:
        parts.append(f"<section class='page chapter' id='t{i:02d}'><div class='kicker'>TEMA {i}</div><h1>{esc(title_from(i,m))}</h1>{md_html(strip_h1(m))}</section>")
    parts.append("<section class='page' id='tests'><h1>Tests por tema</h1><p class='lead'>Las respuestas y justificaciones se encuentran al final.</p></section>")
    for i,_,qb in temas:
        qs=qb.get('preguntas',[])
        if not qs: continue
        parts.append(f"<section class='page'><h1>Test · Tema {i}</h1>")
        for n,q in enumerate(qs,1): parts.append(f"<div class='q'><div class='qnum'>{n}. {esc(qtext(q))}</div>{opts_html(qopts(q))}</div>")
        parts.append('</section>')
    if sup.get('supuestos'):
        parts.append("<section class='page' id='supuestos'><h1>Supuestos prácticos</h1><p class='lead'>Resuelve antes de consultar la corrección.</p></section>")
        for n,sp in enumerate(sup['supuestos'],1):
            parts.append(f"<section class='case'><h2>Supuesto {n}. {esc(sp.get('titulo',''))}</h2><p><strong>Temas:</strong> {esc(', '.join(map(str,sp.get('temas',[]))))}</p><div class='box'>{esc(sp.get('enunciado',''))}</div>")
            if sp.get('cuestiones'):
                for j,c in enumerate(sp['cuestiones'],1): parts.append(f"<div class='q'><div class='qnum'>{j}. {esc(c.get('pregunta',''))}</div></div>")
            elif sp.get('pregunta'):
                parts.append(f"<div class='q'><div class='qnum'>{esc(sp.get('pregunta',''))}</div>{opts_html(sp.get('opciones',[]))}</div>")
            parts.append('</section>')
    if sims.get('simulacros'):
        parts.append("<section class='page' id='simulacros'><h1>Simulacros</h1><p class='lead'>Corrección agrupada al final.</p></section>")
        for sim in sims['simulacros']:
            parts.append(f"<section class='page'><h1>{esc(sim.get('titulo','Simulacro'))}</h1><p><strong>Duración:</strong> {esc(sim.get('duracionMinutos',''))} minutos.</p>")
            for n,item in enumerate(sim.get('preguntas',[]),1):
                q=byid.get(item) if isinstance(item,str) else item
                if not q: continue
                parts.append(f"<div class='q'><div class='qnum'>{n}. {esc(qtext(q))}</div>{opts_html(qopts(q))}</div>")
            parts.append('</section>')
    parts.append("<section class='page' id='soluciones'><h1>Soluciones y justificaciones</h1></section>")
    for i,_,qb in temas:
        qs=qb.get('preguntas',[])
        if not qs: continue
        parts.append(f"<section class='page'><h1>Soluciones · Test Tema {i}</h1>")
        for n,q in enumerate(qs,1):
            opts=qopts(q); idx=qidx(q); ans=opts[idx] if 0<=idx<len(opts) else '[Respuesta no disponible]'
            parts.append(f"<div class='sol'><h3>{n}. {'ABCD'[idx] if 0<=idx<4 else idx} · {esc(ans)}</h3><p><strong>Justificación:</strong> {esc(qjust(q))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(qtrap(q))}</div><p class='ref'><strong>Referencia:</strong> {esc(qref(q))}</p></div>")
        parts.append('</section>')
    if sup.get('supuestos'):
        parts.append("<section class='page'><h1>Soluciones · Supuestos prácticos</h1>")
        for n,sp in enumerate(sup['supuestos'],1):
            parts.append(f"<div class='sol'><h2>Supuesto {n}. {esc(sp.get('titulo',''))}</h2>")
            if sp.get('cuestiones'):
                for j,c in enumerate(sp['cuestiones'],1): parts.append(f"<h3>{j}. {esc(c.get('pregunta',''))}</h3><p>{esc(c.get('respuesta',''))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(c.get('trampa',''))}</div><p class='ref'><strong>Referencia:</strong> {esc(qref(c))}</p>")
            else:
                opts=sp.get('opciones',[]); idx=int(sp.get('respuestaCorrecta',0)); ans=opts[idx] if idx<len(opts) else ''
                parts.append(f"<h3>{'ABCD'[idx] if idx<4 else idx} · {esc(ans)}</h3><p>{esc(sp.get('justificacion',''))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(sp.get('trampaExamen',''))}</div><p class='ref'><strong>Referencia:</strong> {esc(sp.get('referencia',''))}</p>")
            parts.append('</div>')
        parts.append('</section>')
    if sims.get('simulacros'):
        for sim in sims['simulacros']:
            parts.append(f"<section class='page'><h1>Soluciones · {esc(sim.get('titulo','Simulacro'))}</h1>")
            for n,item in enumerate(sim.get('preguntas',[]),1):
                q=byid.get(item) if isinstance(item,str) else item
                if not q: continue
                opts=qopts(q); idx=qidx(q); ans=opts[idx] if idx<len(opts) else ''
                parts.append(f"<div class='sol'><h3>{n}. {'ABCD'[idx] if idx<4 else idx} · {esc(ans)}</h3><p><strong>Justificación:</strong> {esc(qjust(q))}</p><div class='focus'><strong>⚠ ¡Foco Examen!:</strong> {esc(qtrap(q))}</div><p class='ref'><strong>Referencia:</strong> {esc(qref(q))}</p></div>")
            parts.append('</section>')
    css="""
    @page{size:A4;margin:18mm 17mm 19mm 18mm;@top-left{content:'OpoWeb · "+title+"';font-size:8pt;color:#667085}@bottom-center{content:'OpoWeb · Agosto 2026 · Página ' counter(page) ' de ' counter(pages);font-size:8pt;color:#667085}}@page:first{margin:0;@top-left{content:none}@bottom-center{content:none}}
    html{font-family:'DejaVu Sans',Arial,sans-serif;color:#1f2937;font-size:10.2pt;line-height:1.47}body{margin:0}a{color:#174ea6;text-decoration:none}h1,h2,h3{color:#17365d;break-after:avoid}h1{font-size:19pt;margin:0 0 8mm}h2{font-size:14pt;margin:7mm 0 3mm;border-bottom:1px solid #d0d5dd;padding-bottom:1mm}h3{font-size:11.5pt}.page{break-before:page}.cover{height:297mm;padding:50mm 28mm 25mm;box-sizing:border-box;background:#17365d;color:white}.cover .brand{font-size:18pt;font-weight:700;margin-bottom:28mm}.cover h1{font-size:29pt;color:white;margin-bottom:5mm}.cover h2{font-size:21pt;color:#eaf2ff;border:0}.cover-sub{font-size:14pt;line-height:1.45}.cover-meta{margin-top:45mm;font-weight:700}.cover-note{margin-top:8mm;color:#d9e7f7}.kicker{font-size:9pt;letter-spacing:1.8px;font-weight:800;color:#667085;margin-bottom:3mm}.chapter>h1{border-left:4px solid #315d8a;padding-left:4mm}.chapter blockquote{margin:4mm 0;padding:3mm 4mm;border-left:4px solid #e59a00;background:#fff8e7;break-inside:avoid}table{width:100%;border-collapse:collapse;margin:4mm 0 5mm;font-size:8.7pt;break-inside:avoid-page}th,td{border:1px solid #cfd6df;padding:2.1mm;vertical-align:top}th{background:#edf3f9;color:#17365d}.toc p{margin:0 0 2.2mm;border-bottom:1px dotted #d0d5dd;padding-bottom:1.4mm}.sep{margin-top:7mm!important}.lead{font-size:11pt;color:#475467}.q{margin:0 0 7mm;break-inside:avoid}.qnum{font-weight:700;color:#111827;margin-bottom:2mm}.opts{margin-top:1mm;padding-left:8mm}.case{margin-bottom:9mm;break-inside:avoid-page}.box{background:#f8fafc;border:1px solid #dce3ea;padding:3mm;margin:2mm 0 3mm}.sol{margin-bottom:7mm;padding-bottom:5mm;border-bottom:1px solid #e4e7ec;break-inside:avoid}.focus{margin:3mm 0 4mm;padding:3mm 3.5mm;background:#fff4df;border-left:4px solid #e59a00;break-inside:avoid}.ref{font-size:8.6pt;color:#667085}pre{white-space:pre-wrap;background:#f6f8fa;padding:3mm;font-size:8.4pt}code{font-family:'DejaVu Sans Mono',monospace;font-size:8.5pt}
    """
    doc=f"<!doctype html><html lang='es'><head><meta charset='utf-8'><title>{esc(title)}</title><style>{css}</style></head><body>{''.join(parts)}</body></html>"
    out=outdir/outname
    (outdir/(Path(outname).stem+'.html')).write_text(doc,encoding='utf-8')
    HTML(string=doc,base_url=str(ROOT)).write_pdf(str(out)); print(out)

if __name__=='__main__':
    ap=argparse.ArgumentParser(); ap.add_argument('--slug',required=True); ap.add_argument('--title',required=True); ap.add_argument('--subtitle',required=True); ap.add_argument('--out',required=True); a=ap.parse_args(); build(a.slug,a.title,a.subtitle,a.out)
