// node check.js [lab ids...]  -> for each interview lab: starter must not PASS, solution must PASS.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const BASE = process.env.BASE || 'http://localhost:8765';
const meta = JSON.parse(fs.readFileSync(path.join(__dirname, 'labs.json'), 'utf8'));
const ids = process.argv.slice(2).length ? process.argv.slice(2) : meta.map(m => m.id);
async function run(p) {
  await p.click('#run');
  await p.waitForFunction(() => { const s = document.querySelector('#status'); return !document.querySelector('#run').disabled && /Done|error|Error|Stopped/i.test(s.textContent); }, null, { timeout: 120000 });
  return p.evaluate(() => document.querySelector('#console').innerText);
}
(async () => {
  const b = await chromium.launch(); let bad = 0;
  for (const id of ids) {
    const p = await b.newPage();
    await p.addInitScript(() => { try { localStorage.clear(); } catch (e) {} });
    await p.goto(`${BASE}/interview-labs/?lab=${id}`, { waitUntil: 'load' });
    await p.waitForFunction(() => /Ready/.test(document.querySelector('#status').textContent), null, { timeout: 60000 });
    const o1 = await run(p);
    for (let k = 0; k < 4; k++) { await p.click('#show-solution'); if (/Loaded the solution/.test(await p.evaluate(() => document.querySelector('#console').innerText))) break; }
    const o2 = await run(p);
    const startPass = /(^|\n)PASS\b/.test(o1), solPass = /(^|\n)PASS\b/.test(o2);
    const ok = !startPass && solPass; if (!ok) bad++;
    const line = s => (s.split('\n').filter(l => /PASS|FAIL|error|Error|sorry|exited/.test(l)).slice(0, 4).join(' | ') || s.slice(-300).replace(/\n/g, ' | '));
    console.log(`${ok ? 'OK ' : 'BAD'} ${id}\n    starter: ${line(o1).slice(0, 300)}\n    solution: ${line(o2).slice(0, 300)}`);
    await p.close();
  }
  console.log(bad ? `${bad} labs need fixing` : 'all labs OK'); await b.close();
})();
