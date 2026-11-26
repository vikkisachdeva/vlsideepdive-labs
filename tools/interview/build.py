"""Build interview-questions.json for the site from sources.json (questions reported in public
interview-experience posts). Adds a topic and up to 2 practice links (labs/videos) per question.
usage: python3 build.py <repo-dir>"""
import json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = sys.argv[1]
S = json.load(open(os.path.join(HERE, 'sources.json')))
labs = json.load(open(os.path.join(REPO, 'share-index.json')))
vids = json.load(open(os.path.join(REPO, 'all-videos.json')))['videos']

TOPICS = [  # first match wins
 ('Behavioral & projects', r'\b(project|role and responsib|challenging|deadline|why intel|tell me about)\b'),
 ('CDC & metastability', r'synchroni|metastab|clock domain|cdc\b|gray'),
 ('STA & timing', r'\bsetup\b|\bhold\b|skew|jitter|static timing|\bsta\b|timing violation|crosstalk|uncertainty'),
 ('Physical design', r'congestion|floorplan|placement|routing|physical design|stick diagram|clock gating|fuse'),
 ('DFT', r'\bdft\b|scan'),
 ('SystemVerilog & UVM', r'uvm|systemverilog|fork|constraint|clocking block|program block|virtual interface|scoreboard|testbench|verification plan|emulation|formal'),
 ('Verilog & RTL', r'verilog|rtl|blocking|latch (get|is) inferred|lint|synthesis|always block|sensitivity|combinational loop|case statement|fifo|sticky register'),
 ('CMOS & analog', r'cmos|transistor|nmos|pmos|mos\b|diode|breakdown|op-amp|ring oscillator|punch|inverter|nand or nor|threshold|fanout|depletion'),
 ('Computer architecture', r'cache|tlb|virtual memory|pipelin|mesi|dma|microprocessor|microcontroller|watchdog|sram|dram|memory|chips do you need|stack'),
 ('Protocols', r'uart|spi|i2c|pcie|axi|ahb|osi'),
 ('Programming', r'\b(c program|program|merge sort|binary search|array|python|c\+\+|algorithm|string)\b'),
 ('Digital logic', r'.'),
]
ROLE_ORDER = ['RTL design', 'Digital design', 'DV', 'Physical design', 'Analog']

STOP = set('a an the and or of in to for on with is are be you your what how why which does do it its at by as from that this when then than into using use only two one explain design write describe difference between'.split())
KEY = {'divider-freq','async-reset','clock-gating','johnson-counter','sticky','skew','setup','hold','skew','jitter','synchronizer','metastability','fifo','gray','mealy','moore','fsm','detector','mux','multiplexer','nand','nor','xor','xnor','latch','flip-flop','counter','divider','cmos','inverter','blocking','non-blocking','uvm','constraint','fork','assertion','coverage','cache','pipelining','gating','crosstalk','congestion','cts','scan','dft','sta','cdc','subtractor','full-adder','decoder','encoder','johnson','oscillator','sticky','arbiter','axi','ahb','apb','uart','spi','i2c',}
def toks(s): return [t for t in re.findall(r'[a-z0-9][a-z0-9+-]*', s.lower()) if t not in STOP and len(t) > 1]
PHRASES = [(r'clock domain crossing|\\bcdc\\b', 'cdc'), (r'2-ff|two-flop|2-flop|synchroni', 'synchronizer'), (r'frequency divider|divide-by|divider', 'divider-freq'),
           (r'(asynchronous|synchronous|async|sync) (and|vs\\.?|versus) (asynchronous|synchronous|async|sync) reset|reset', 'async-reset'), (r'clock gating', 'clock-gating'),
           (r'johnson', 'johnson-counter'), (r'full adder|adder', 'full-adder'), (r'skew', 'skew')]
def keyset(s):
    ks = set(toks(s)) & KEY
    if re.search(r'flip.?flop', s, re.I): ks.add('flip-flop')
    for rx, k in PHRASES:
        if re.search(rx, s, re.I): ks.add(k)
    return ks
targets = []
for lid, l in labs.items():
    if l['u'].startswith('/interview-labs/'): continue
    targets.append({'t': l['n'], 'u': l['u'], 'k': 'lab', 'ks': keyset(l['n'] + ' ' + ' '.join(l.get('q', [])))})
for v in vids:
    if 'Walkthrough' in v['title'] or 'Short' in v['title']: continue
    targets.append({'t': v['title'], 'u': 'https://www.youtube.com/watch?v=' + v['id'], 'k': 'video', 'ks': keyset(v['title'])})
def links(q):
    qk = keyset(q)
    if not qk: return []
    scored = []
    for t in targets:
        ov = qk & t['ks']
        if len(ov) >= 2 or (len(ov) == 1 and len(qk) == 1 and len(t['ks']) <= 3):
            nums = set(re.findall(r'\d+', q)) & set(re.findall(r'\d+', t['t']))
            scored.append((len(ov) - 0.1 * len(t['ks'] - qk) + 0.5 * len(nums) + (0.3 if t['k'] == 'lab' else 0), t))
    scored.sort(key=lambda x: -x[0])
    out, kinds = [], set()
    for _, t in scored:
        if t['k'] in kinds: continue
        out.append({'t': t['t'], 'u': t['u'], 'k': t['k']}); kinds.add(t['k'])
        if len(out) == 2: break
    return out

# Interview labs (iq-*): each has a regex of the questions it answers. Checked first.
IQ = json.load(open(os.path.join(REPO, 'tools/interview/iq-labs.json')))
EXIST = [  # existing labs that answer common questions the keyword matcher misses
 (r'asynchronous fifo|async fifo|async-fifo|fifo.{0,30}(clock domains|two clock)', 'p4-afifo'),
 (r'\bfifo\b', 'p4-fifo'),
 (r'traffic.?light', 'l33-traffic'),
 (r'divide.{0,10}(by )?(3|three)|divide-by-3', 'p4-div3'),
 (r'two-flop synchronizer|2-ff synchron|synchronizer', 'cdc-fix'),
]
def explicit(q):
    out = []
    for m in IQ:
        if re.search(m['q'], q, re.I): out.append({'t': m['title'], 'u': '/interview-labs/?lab=' + m['id'], 'k': 'lab'})
        if len(out) == 2: break
    for rx, lid in EXIST:
        if len(out) >= 2: break
        if lid in labs and re.search(rx, q, re.I) and not any(lid in o['u'] for o in out):
            out.append({'t': labs[lid]['n'], 'u': labs[lid]['u'], 'k': 'lab'})
    return out
def all_links(q):
    out = explicit(q)
    for l in links(q):
        if len(out) >= 3: break
        if not any(o['u'] == l['u'] for o in out) and not (l['k'] == 'lab' and sum(o['k'] == 'lab' for o in out) >= 2): out.append(l)
    return out

Q = []
for s in S:
    for rnd, q in s['qs']:
        topic = next(n for n, rx in TOPICS if re.search(rx, q, re.I))
        Q.append({'q': q, 'c': s['company'], 'r': s.get('role', ''), 'rd': rnd, 'lv': s.get('level', ''), 'y': s.get('date', '')[:4],
                  'tp': topic, 'src': s['url'], 'sn': s.get('site', ''), 'st': s.get('title', ''), 'p': all_links(q)})
# same question reported more than once (same company, normalized text) -> count
def norm(t): return re.sub(r'[^a-z0-9]+', ' ', t.lower()).strip()
seen = {}
for x in Q:
    k = (x['c'], norm(x['q']))
    if k in seen: seen[k]['n'] = seen[k].get('n', 1) + 1; seen[k].setdefault('more', []).append(x['src'])
    else: seen[k] = x
Q = list(seen.values())
Q.sort(key=lambda x: (x['c'], x['tp'], x['q']))
out = {'updated': max(s.get('added', '') for s in S) or '', 'sources': len(S), 'questions': Q}
json.dump(out, open(os.path.join(REPO, 'interview-questions.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
from collections import Counter
print(len(Q), 'questions', Counter(x['c'] for x in Q).most_common(), Counter(x['tp'] for x in Q).most_common(), sum(1 for x in Q if x['p']), 'with practice links')

# keep the homepage banner count current
ip = os.path.join(REPO, 'index.html'); h = open(ip).read()
h2 = re.sub(r'(<b data-iq-count>)[^<]*(</b>)', lambda m: m.group(1) + f'{len(Q):,}' + m.group(2), h)
if h2 != h: open(ip, 'w').write(h2)
