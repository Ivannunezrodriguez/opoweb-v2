import importlib.util
from pathlib import Path
spec=importlib.util.spec_from_file_location('direct',Path(__file__).resolve().parents[1]/'tools/radar-direct.py');d=importlib.util.module_from_spec(spec);spec.loader.exec_module(d)
s={'id':'test','name':'Yuncos','url':'https://yuncos.example/empleo','location':'Yuncos (Toledo)','kind':'municipal','maxPages':2}
body='<html><body><a href="/1">Convocatoria bolsa de limpieza</a><a href="/2">Lista de admitidos bolsa de limpieza</a><a href="/3">Bolsa por promoción interna</a></body></html>'
def get(url):return body,url
r=d.scan(s,{},'2026-09-28',get);assert not r['entries'];assert r['status']['baseline']
body=body.replace('</body>','<a href="/4">Convocatoria sustitución de electricista</a></body>')
r2=d.scan(s,r['state'],'2026-09-28',get);assert len(r2['entries'])==1;assert 'electricista' in r2['entries'][0]['title']
assert not d.scan(s,r2['state'],'2026-09-28',get)['entries']
def failed(url):raise ValueError('Unavailable')
r3=d.scan(s,r2['state'],'2026-09-28',failed);assert r3['state']==r2['state'];assert r3['status']['status']=='ERROR'
body='<ul><li>Fecha de publicación: 28/09/2026 <a href="/5">Convocatoria bolsa de conserjes</a></li></ul>'
assert len(d.scan(s,{},'2026-09-28',get)['entries'])==1
body='<a href="/bad">Fecha examen convocatoria bolsa de conserjes</a>'
assert not d.scan(s,r2['state'],'2026-09-28',get)['entries']
assert d.canonical('https://example.org/x;jsessionid=secret?id=1&utm_source=test#top')=='https://example.org/x?id=1'
assert d.canonical('https://ayto.example/empleo/convocatoria-pública?tipo=oposición')=='https://ayto.example/empleo/convocatoria-p%C3%BAblica?tipo=oposici%C3%B3n'
assert d.canonical('https://ayto.example/empleo/convocatoria-p%C3%BAblica')=='https://ayto.example/empleo/convocatoria-p%C3%BAblica'
assert d.canonical('javascript:alert(1)') is None
assert d.canonical('http://127.0.0.1/') is None
assert len(d.directory_sources('<table><tr><td>Yuncos</td><td>phone</td><td>email</td><td><a href="https://yuncos.example">Web</a></td></tr></table>','https://diputoledo.es'))==1
# Generic route label gets the individual row text, not neighbouring notices.
items=d.links('<table><tr><td>Convocatoria bolsa de limpieza</td><td><a href="/6">Ver</a></td></tr><tr><td>Admitidos</td><td><a href="/7">Ver</a></td></tr></table>',s['url'])
assert d.candidate(items[0]);assert d.candidate(items[1]) is None
# Two hamlets may legitimately publish at the same council URL with the same
# historical source ID. Scan only once so concurrent scans do not race to save
# different page states under the same key.
from copy import deepcopy
shared=deepcopy(s);shared['name']='Otra pedanía';shared['location']='Otra pedanía (Toledo)'
config={'directoryUrl':'https://example.org/no-directory','sources':[s,shared]}
def municipality_page(url):
    if '/no-directory' in url:raise ValueError('directory unavailable')
    return '<html><body><a href="/1">Convocatoria bolsa de conserjes</a></body></html>',url
summary,new_state=d.run(config,{},get_page=municipality_page)
assert len(summary['sourceStatus'])==2,summary['sourceStatus'] # directory + one shared council
assert len(new_state['sources'])==1,new_state['sources']
assert summary['configuredSources']==2,summary
assert summary['uniqueSources']==1,summary
assert summary['sharedSourceAliases']==1,summary
assert summary['checkedAtUtc'].endswith('+00:00'),summary
assert summary['sourceStatus'][0]['source']=='Directorio municipal Toledo'

assert not summary['entries'] # First read establishes the initial baseline
different_url=deepcopy(shared);different_url['url']='https://otro.example/empleo'
try:
    d.run({'directoryUrl':config['directoryUrl'],'sources':[s,different_url]}, {},get_page=municipality_page)
except ValueError as exc:
    assert 'SOURCE_ID_COLLISION' in str(exc)
else:
    raise AssertionError('Different URLs with same ID must not share state')
print('Direct radar: baseline, new-only, shared council aliases, UTC snapshot and collision guard OK')
