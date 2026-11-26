# Interview questions

`sources.json` holds questions reported in public interview-experience posts (one entry per post:
company, role, level, date, site, url, and the questions with their round). Nothing here is
written by us: each question comes from the linked post, kept short and close to how it was reported.
Glassdoor, LinkedIn and Blind are not used (their terms forbid scraping, and most posts need a login).

To add a post: `python3 add.py new.json`, then `python3 build.py ../..` to rebuild
`/interview-questions.json` (topics and practice links to labs and videos are added automatically).
