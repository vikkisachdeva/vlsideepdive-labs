
## Taro bulk method (Nov 26, 2026)
Taro pages are server-rendered. In a Chrome tab on jointaro.com, fetch
`/interviews/companies/<co>/experiences/?page=N` to list experience slugs, keep hardware roles, then fetch each
experience and read the text under the "Questions" h2 (and "Process"). Curate into `taro/notesNNN.txt`
(`@company/slug` line, then one clean question per line; skip vague topics, behavioural and pure software),
run `python3 taro/conv.py`, then merge `taro/taro-sources.json` into sources.json (skip URLs already present).
About 1150 more hardware experiences were listed but not yet curated on Nov 26 (companies after "tsmc"
alphabetically in the first pass were all read; the second pass list was not).
