"""Add interview labs to the site indexes, homepage count, hashtags and cache-busting hashes. usage: python3 integrate.py <repo>"""
import json, re, hashlib, glob, os, sys
R = sys.argv[1]; os.chdir(R)
meta = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'labs.json')))
si = json.load(open('share-index.json')); li = json.load(open('lab-index.json'))
for m in meta:
    t = m['title']
    si[m['id']] = {'t': 'iq', 'g': f"{m['group']} · Lab {m['n']}", 'n': t, 'u': f"/interview-labs/?lab={m['id']}",
                   'p': ['Solved a real interview question as a lab: ' + t, 'Wrote and ran the answer in the simulator', 'Passed the self-checking testbench'],
                   'q': ['Solve a real interview question: ' + t, 'Write and run the answer in the simulator', 'Pass the self-checking testbench'], 'd': 'M'}
    li[m['id']] = 'iq'
json.dump(si, open('share-index.json', 'w'), ensure_ascii=False, separators=(',', ':'))
json.dump(li, open('lab-index.json', 'w'), separators=(',', ':'))
lb = open('lb.js').read()
if 'iq:"#' not in lb:
    lb = lb.replace('pd:"#PhysicalDesign #OpenROAD",', 'pd:"#PhysicalDesign #OpenROAD",iq:"#InterviewPrep #VLSI",', 1); open('lb.js', 'w').write(lb)
total = 'see index.html (update the Hands-on labs number by hand)'
def hsh(p): return hashlib.md5(open(p, 'rb').read()).hexdigest()[:10]
hv = {'/verilog/app.js': hsh('verilog/app.js'), '/labs.js': hsh('labs.js'), 'lb.js': hsh('lb.js')}
for f in glob.glob('**/*.html', recursive=True):
    if f.startswith(('node_modules', 'tools')): continue
    s = open(f).read(); o = s
    s = re.sub(r'/verilog/app\.js\?v=[0-9a-f]+', '/verilog/app.js?v=' + hv['/verilog/app.js'], s)
    s = re.sub(r'/labs\.js\?v=[0-9a-f]+', '/labs.js?v=' + hv['/labs.js'], s)
    if s != o: open(f, 'w').write(s)
l = open('labs.js').read(); l2 = re.sub(r'lb\.js\?v=[0-9a-f]+', 'lb.js?v=' + hv['lb.js'], l)
if l2 != l:
    open('labs.js', 'w').write(l2); hv['/labs.js'] = hsh('labs.js')
    for f in glob.glob('**/*.html', recursive=True):
        s = open(f).read(); s2 = re.sub(r'/labs\.js\?v=[0-9a-f]+', '/labs.js?v=' + hv['/labs.js'], s)
        if s2 != s: open(f, 'w').write(s2)
print('labs total', total, hv)
