"""Convert curated Taro notes into add.py sources.
File format: '@<company-slug>/<experience-slug>' line, then one question per line ('round :: question' optional)."""
import json, re, sys, glob, os
M = 'january february march april may june july august september october november december'.split()
CO = {'qualcomm':'Qualcomm','nvidia':'NVIDIA','intel':'Intel','amd':'AMD','apple':'Apple','broadcom':'Broadcom','marvell-technology':'Marvell',
 'cadence-design-systems':'Cadence','synopsys':'Synopsys','samsung':'Samsung Semiconductor','micron-technology':'Micron','texas-instruments':'Texas Instruments',
 'google':'Google','meta':'Meta','amazon':'Amazon','microsoft':'Microsoft','arm':'Arm','tesla':'Tesla','analog-devices':'Analog Devices','nxp-semiconductors':'NXP',
 'mediatek':'MediaTek','western-digital':'Western Digital','cisco':'Cisco','ibm':'IBM','sifive':'SiFive','tenstorrent':'Tenstorrent','cerebras':'Cerebras','groq':'Groq',
 'siemens':'Siemens EDA','juniper-networks':'Juniper Networks','globalfoundries':'GlobalFoundries','sk-hynix':'SK Hynix','tsmc':'TSMC','etched':'Etched','sambanova':'SambaNova',
 'openai':'OpenAI','jane-street':'Jane Street','citadel':'Citadel','hudson-river-trading':'Hudson River Trading','jump-trading':'Jump Trading','imc-trading':'IMC Trading','optiver':'Optiver',
 'infineon':'Infineon','renesas':'Renesas','xilinx':'AMD','d-matrix':'d-Matrix','rivos':'Rivos','ampere':'Ampere','annapurna-labs':'Amazon','hpe':'HPE','lattice-semiconductor':'Lattice'}
def role(s):
    if re.search(r'verification|-dv-', s): return 'DV'
    if re.search(r'physical-design|layout|-pd-', s): return 'Physical design'
    if re.search(r'dft', s): return 'DFT'
    if re.search(r'analog|mixed-signal|circuit-design|custom-circuit|-circuit', s): return 'Analog'
    if re.search(r'rtl|asic-design|logic-design|digital-design|front-end|design-engineer', s): return 'RTL design'
    if re.search(r'validation|post-silicon|test-engineer|product-engineer', s): return 'Validation'
    if re.search(r'architect|performance|modeling', s): return 'Architecture'
    if re.search(r'fpga', s): return 'FPGA'
    return 'Digital design'
def level(s):
    for rx, l in [(r'intern|co-op', 'Intern'), (r'new-grad|graduate|associate|entry', 'New grad'), (r'principal|staff|director|lead|manager', 'Senior / staff'), (r'senior|sr-', 'Senior')]:
        if re.search(rx, s): return l
    return ''
out = []
for f in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'notes*.txt'))):
    cur = None
    for line in open(f):
        line = line.strip()
        if not line: continue
        if line.startswith('@'):
            k = line[1:].strip('/'); c, s = k.split('/', 1)
            m = re.search(r'(%s)-(\d+)-(\d{4})' % '|'.join(M), s)
            title = re.sub(r'-(%s)-.*' % '|'.join(M), '', s).replace('-', ' ').title()
            cur = {'company': CO.get(c, c.replace('-', ' ').title()), 'role': role(s), 'level': level(s),
                   'date': f"{m.group(3)}-{M.index(m.group(1))+1:02d}" if m else '', 'site': 'Taro',
                   'title': f"{CO.get(c, c)} {title} interview", 'url': f'https://www.jointaro.com/interviews/companies/{k}/', 'qs': []}
            out.append(cur); continue
        rnd, q = (line.split(' :: ', 1) if ' :: ' in line else ('Interview', line))
        cur['qs'].append([rnd, q])
out = [o for o in out if o['qs']]
json.dump(out, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'taro-sources.json'), 'w'), indent=0, ensure_ascii=False)
print(len(out), 'experiences', sum(len(o['qs']) for o in out), 'questions')
