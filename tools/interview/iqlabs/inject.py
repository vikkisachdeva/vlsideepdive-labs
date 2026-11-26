"""Inject the interview labs into verilog/app.js (idempotent) and write labs.json for indexes.
usage: python3 inject.py <repo>"""
import json, os, re, sys, glob, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = sys.argv[1]
mods = []
for f in sorted(glob.glob(os.path.join(HERE, 'g_*.py'))):
    spec = importlib.util.spec_from_file_location(os.path.basename(f)[:-3], f); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); mods.append(m)
ORDER = ['iq-gates', 'iq-arith', 'iq-seq', 'iq-fsm', 'iq-mem', 'iq-sv']
mods.sort(key=lambda m: ORDER.index(m.G[0]))
NOTE = "Interview questions as hands-on labs: each lab is a question candidates reported. Complete the TODOs, run, and get PASS. A ✓ marks the labs you have passed."
groups, labs, about, meta = [], [], {}, []
for m in mods:
    gid, gtitle = m.G
    groups.append({'id': gid, 'title': gtitle, 'note': NOTE})
    for n, l in enumerate(m.LABS, 1):
        labs.append({'id': l['id'], 'group': gid, 'tag': f"{gtitle} · Lab {n}", 'title': l['title'], 'std': '2012',
                     'design': l['design'], 'tb': l['tb'], 'solution': {'design': l['sol'], **({'tb': l['soltb']} if l.get('soltb') else {})}})
        about[l['id']] = {'problem': l['problem'], 'tasks': l['tasks'], 'learn': l['learn']}
        meta.append({'id': l['id'], 'title': l['title'], 'group': gtitle, 'n': n, 'q': l['q'], 'tasks': l['tasks'], 'problem': l['problem']})
js = '/*IQ-BEGIN*/var IQG=%s,IQL=%s,IQA=%s;/*IQ-END*/' % (json.dumps(groups), json.dumps(labs), json.dumps(about))
p = os.path.join(REPO, 'verilog/app.js'); s = open(p).read()
s = re.sub(r'/\*IQ-BEGIN\*/.*?/\*IQ-END\*/', '', s, flags=re.S)
anchor = 'var ee=document.body.dataset.lab;'
assert s.count(anchor) == 1
s = s.replace(anchor, js + anchor)
def once(old, new):
    global s
    if new in s: return
    assert s.count(old) == 1, old; s = s.replace(old, new)
once('var Mn=ee==="sva"||ee==="dv",', 'var Mn=ee==="sva"||ee==="dv"||ee==="iq",')
once('yn=t=>se?hn(t):hn(t)?!1:ee==="sva"?', 'yn=t=>se?hn(t):hn(t)?!1:ee==="iq"?t.startsWith("iq-"):t.startsWith("iq-")?!1:ee==="sva"?')
once('...Qe,...nn,...on];', '...Qe,...nn,...on,...IQL];')
once('var wn={...ze,...tn,...dn}', 'var wn={...ze,...tn,...dn,...IQA}')
once('...an.map(t=>({...t,note:"Write the architecture', '...IQG,...an.map(t=>({...t,note:"Write the architecture')
open(p, 'w').write(s)
json.dump(meta, open(os.path.join(HERE, 'labs.json'), 'w'), indent=1, ensure_ascii=False)
print(len(groups), 'groups', len(labs), 'labs')
