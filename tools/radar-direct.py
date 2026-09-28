"""Read public recruitment listings. No logins, applications or outgoing messages.
First successful read of each page creates a baseline; only new links or notices
explicitly dated after activation are emitted. State is retained across failures.
"""
import argparse, concurrent.futures, datetime as dt, hashlib, html, json, re, sys
import urllib.parse, urllib.request
from html.parser import HTMLParser
from pathlib import Path

RECRUIT = re.compile(r'convoc|plaza|bolsa|selecci[oó]n|contrataci[oó]n|interin|sustituci[oó]n|suplencia|relevo|oferta.*empleo|plan.*empleo|proceso.*selectiv', re.I)
FOLLOWUP = re.compile(r'admitid|excluid|subsan|tribunal|calificaci[oó]n|resultad|nombramiento|aprobados|puntuaci[oó]n|fecha.*examen|llamamiento|pr[oó]rroga|cese|plantilla.*respuestas|lista.*definitiv|lista.*provisional|correcci[oó]n|rectificaci[oó]n|baremaci[oó]n', re.I)
EXCLUDE = re.compile(r'promoci[oó]n interna|turno interno|libre designaci[oó]n|traslados|comisi[oó]n de servicios|licitaci[oó]n|subasta|encomienda de funciones|mejora de empleo|becas?|premios?|subvenciones?', re.I)
NAV = re.compile(r'^(?:inicio|ver|leer m[aá]s|descargar|empleo p[uú]blico|ofertas? de empleo(?: p[uú]blico)?|bolsas?(?: de (?:trabajo|empleo))?(?: vigentes)?|procesos selectivos|convocatorias|sede electr[oó]nica|tabl[oó]n(?: de anuncios)?|recursos humanos|oposiciones|bases generales|documentaci[oó]n|normativa)$',re.I)
ROUTE = re.compile(r'empleo|bolsa|convoc|selecci|tabl[oó]n|tablon|sede electr|recursos humanos|oferta|siguiente|next',re.I)

class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root={'tag':'root','attrs':{},'children':[],'parent':None}; self.stack=[self.root]; self.nodes=[]
    def handle_starttag(self,tag,attrs):
        n={'tag':tag,'attrs':dict(attrs),'children':[],'parent':self.stack[-1]}
        self.stack[-1]['children'].append(n); self.nodes.append(n)
        if tag not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append(n)
    def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs);self.handle_endtag(tag)
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i]['tag']==tag:self.stack=self.stack[:i];break
    def handle_data(self,data):self.stack[-1]['children'].append(data)

def text(n):
    if isinstance(n,str):return n
    if n['tag'] in {'script','style','noscript','svg'}:return ''
    return ' '.join(text(c) for c in n['children'])
def clean(n):return re.sub(r'\s+',' ',text(n)).strip()
def canonical(url):
    u=urllib.parse.urlsplit(html.unescape(url))
    if u.scheme not in {'http','https'} or not u.hostname or u.username:return None
    if u.hostname in {'localhost','127.0.0.1','169.254.169.254'} or re.fullmatch(r'[\d.]+',u.hostname):return None
    params=[(k,v) for k,v in urllib.parse.parse_qsl(u.query,keep_blank_values=True) if not k.lower().startswith(('utm_','fbclid','gclid','jsessionid'))]
    path=re.sub(r';jsessionid=[^/?]*','',u.path,flags=re.I)
    return urllib.parse.urlunsplit((u.scheme,u.netloc.lower(),path,urllib.parse.urlencode(sorted(params)),''))
def digest(s):return hashlib.sha256(s.encode()).hexdigest()[:24]
def get(url):
    if url.startswith('http://'):
        try:return get('https://'+url[7:])
        except Exception:pass
    req=urllib.request.Request(url,headers={'User-Agent':'OpoWeb-Radar/2.0 (public recruitment listings)','Accept':'text/html,application/xhtml+xml'})
    with urllib.request.urlopen(req,timeout=15) as r:
        if 'html' not in r.headers.get('Content-Type','').lower():raise ValueError('NON_HTML')
        raw=r.read(3_000_001)
        if len(raw)>3_000_000:raise ValueError('PAGE_TOO_LARGE')
        return raw.decode(r.headers.get_content_charset() or 'utf-8',errors='replace'),r.url

def links(body,base):
    tree=Tree();tree.feed(body);found=[]
    for n in tree.nodes:
        if n['tag']!='a' or not n['attrs'].get('href'):continue
        href=n['attrs']['href'].strip()
        if href.startswith(('#','javascript:','mailto:','tel:')):continue
        url=canonical(urllib.parse.urljoin(base,href))
        if not url:continue
        label=clean(n) or n['attrs'].get('title','') or n['attrs'].get('aria-label','')
        ancestor=n['parent'];context=label
        while ancestor and ancestor['tag'] not in {'body','main','root'}:
            if ancestor['tag'] in {'tr','li','article'}:
                s=clean(ancestor)
                if len(s)<1800:context=s
                break
            ancestor=ancestor['parent']
        found.append({'url':url,'label':label,'context':context})
    return found

def directory_sources(body,url):
    tree=Tree();tree.feed(body);out=[]
    for row in tree.nodes:
        if row['tag']!='tr':continue
        cells=[x for x in row['children'] if isinstance(x,dict) and x['tag']=='td']
        if len(cells)<4:continue
        name=clean(cells[0]); candidates=[]
        def walk(n):
            if isinstance(n,str):return
            if n['tag']=='a' and n['attrs'].get('href'):candidates.append(n['attrs']['href'])
            for c in n['children']:walk(c)
        walk(cells[-1])
        for link in candidates:
            target=canonical(urllib.parse.urljoin(url,link))
            if target and urllib.parse.urlsplit(target).hostname!=urllib.parse.urlsplit(url).hostname:
                out.append({'id':digest(target),'name':name,'url':target,'location':name+' (Toledo)','kind':'municipal','maxPages':5,'provenance':url})
    return out

def candidate(link):
    title=link['label'].strip()
    if (NAV.fullmatch(title) or len(title)<12) and len(link['context'])<700:title=link['context'].strip()
    if len(title)<12 or NAV.fullmatch(title) or not RECRUIT.search(title):return None
    if FOLLOWUP.search(title) or EXCLUDE.search(title) or re.search(r'\bA[12]\b|cerrad[oa]|finalizad[oa]|plazo vencido',title,re.I):return None
    return title[:900]

def publication_date(link):
    # Only explicit publication labels, never a random OEP year or deadline.
    m=re.search(r'(?:publicad[oa]|fecha de publicaci[oó]n)\s*[:\-]?\s*(\d{2})[/-](\d{2})[/-](\d{4})',link['context'],re.I)
    if m:
        try:return dt.date(int(m[3]),int(m[2]),int(m[1])).isoformat()
        except ValueError:pass
    return None

def scan(source,old,activation,get_page=get):
    pages=dict(old.get('pages',{}));queue=[source['url']];seen=set();entries=[];errors=[];read=0;matches=0;route_count=0
    known_hosts={urllib.parse.urlsplit(source['url']).hostname}
    while queue and len(seen)<source.get('maxPages',5):
        url=queue.pop(0)
        if url in seen:continue
        seen.add(url)
        try:
            body,base=get_page(url)
            if re.search(r'cf-chl-|captcha|access denied|just a moment',body[:12000],re.I):raise ValueError('BLOCKED')
            found=links(body,base)
            if not found:raise ValueError('NO_READABLE_LINKS_OR_JAVASCRIPT')
            read+=1;known_hosts.add(urllib.parse.urlsplit(base).hostname)
            previous=pages.get(url);old_ids=set(previous.get('seen',[])) if previous else set();all_ids=set(old_ids)
            for item in found:
                key=digest(item['url']);all_ids.add(key);title=candidate(item)
                if source['kind']=='national_company':
                    target=re.search(r'toledo|talavera|getafe|legan[eé]s|fuenlabrada|m[oó]stoles|alcorc[oó]n|parla|pinto|valdemoro|aranjuez|humanes|griñ[oó]n|ciempozuelos|navalcarnero|arroyomolinos|san mart[ií]n de la vega',item['context'],re.I)
                    if not target:title=None
                    elif not title and ('jobid=' in item['url'] or '/job/' in item['url']):
                        title=candidate({**item,'label':'Oferta de empleo: '+item['label']})
                if title:
                    matches+=1;published=publication_date(item)
                    if key not in old_ids and (previous is not None or (published and published>=activation)):
                        entries.append({'id':key,'title':title,'source':'DIRECT','url':item['url'],'context':source['name']+' · '+source['location'],'location':source['location'],'publishedAt':published,'searchText':item['context'],'directSourceId':source['id'],'scopeZone':('TOLEDO' if 'Toledo' in source['location'] else 'MADRID_SUR') if source['kind'] in {'regional','university'} else None})
                # Follow listing/seat links, not individual process pages: no follow-up tracking.
                host=urllib.parse.urlsplit(item['url']).hostname
                is_route=not FOLLOWUP.search(item['label']) and not EXCLUDE.search(item['label']) and bool(ROUTE.search(item['label'])) and (NAV.fullmatch(item['label']) or not title)
                official_seat=bool(re.search(r'sede electr|tabl[oó]n',item['label'],re.I))
                if is_route and not re.search(r'\.(pdf|zip|docx?|xlsx?)(?:\?|$)',item['url'],re.I) and (host in known_hosts or official_seat):
                    route_count+=1
                    if item['url'] not in seen and item['url'] not in queue:queue.append(item['url'])
            pages[url]={'seen':sorted(all_ids),'checkedAt':dt.datetime.now(dt.timezone.utc).isoformat()}
        except Exception as e:errors.append({'url':url,'error':str(e)[:180]})
    status='ERROR' if not read else 'PARTIAL' if errors or queue else 'READABLE'
    return {'entries':list({e['id']:e for e in entries}.values()),'state':{'pages':pages},'status':{'source':source['name'],'id':source['id'],'url':source['url'],'status':status,'pagesRead':read,'candidateLinks':matches,'unvisitedListingLinks':len(queue),'errors':errors,'baseline':not bool(old.get('pages'))}}

def run(config,state,get_page=get):
    sources=config['sources'];status=[]
    try:
        body,_=get_page(config['directoryUrl']);discovered=directory_sources(body,config['directoryUrl'])
        if not discovered:raise ValueError('No municipal websites parsed')
        existing={s['url'] for s in sources};sources=sources+[s for s in discovered if s['url'] not in existing]
        status.append({'source':'Directorio municipal Toledo','status':'READABLE','discovered':len(discovered)})
    except Exception as e:status.append({'source':'Directorio municipal Toledo','status':'ERROR','error':str(e)[:180]})
    old=state.get('sources',{});updated=dict(old);entries=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        futures={pool.submit(scan,s,old.get(s['id'],{}),state.get('activatedAt','2026-09-28'),get_page):s for s in sources}
        for future in concurrent.futures.as_completed(futures):
            s=futures[future]
            try:r=future.result()
            except Exception as e:
                status.append({'source':s['name'],'id':s['id'],'status':'ERROR','error':str(e)[:180]});continue
            updated[s['id']]=r['state'];entries+=r['entries'];status.append(r['status'])
            if len(status)%20==0:print(f'Direct radar: {len(status)-1}/{len(sources)} sources checked',file=sys.stderr,flush=True)
    # Same official URL in two listings is one candidate.
    entries=list({e['id']:e for e in entries}.values())
    return {'entries':entries,'sourceStatus':status}, {'schemaVersion':1,'activatedAt':state.get('activatedAt','2026-09-28'),'sources':updated}

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--config',default='data/radar-sources.json');p.add_argument('--state',default='data/radar-direct-state.json');p.add_argument('--output',default='data/radar-direct-latest.json');args=p.parse_args()
    config=json.loads(Path(args.config).read_text());state=json.loads(Path(args.state).read_text()) if Path(args.state).exists() else {}
    result,state=run(config,state)
    Path(args.state).write_text(json.dumps(state,ensure_ascii=False,indent=2)+'\n');Path(args.output).write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'sources':len(result['sourceStatus']),'newCandidates':len(result['entries']),'readable':sum(x['status']=='READABLE' for x in result['sourceStatus']),'partial':sum(x['status']=='PARTIAL' for x in result['sourceStatus']),'errors':sum(x['status']=='ERROR' for x in result['sourceStatus'])}))
