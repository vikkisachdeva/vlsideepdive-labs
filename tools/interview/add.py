# add.py <json-file-with-one-source>  -> appends to sources.json (dedupe by url)
import json, sys, os
P = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sources.json')
S = json.load(open(P)) if os.path.exists(P) else []
new = json.load(open(sys.argv[1])) if len(sys.argv) > 1 else json.load(sys.stdin)
for n in (new if isinstance(new, list) else [new]):
    S = [s for s in S if s['url'] != n['url']] + [n]
json.dump(S, open(P, 'w'), indent=1, ensure_ascii=False)
print(len(S), 'sources,', sum(len(s['qs']) for s in S), 'questions')
