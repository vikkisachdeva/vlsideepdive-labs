// The list of labs. To add a lab, add one entry here: it appears in the tab bar
// on every page and as a card on the labs home page.
const LABS = [
  { id: "logic", title: "Logic design labs", href: "/logic/", tag: "Digital logic · 33 labs · quizzes",
    desc: "Logic design fundamentals: gates, NAND/NOR-only design, K-maps, decoders, multiplexers, adders, comparators, flip-flops, counters, shift registers and FSMs." },
  { id: "verilog", title: "Verilog labs", href: "/verilog/", tag: "Simulation · 47 labs · quizzes",
    desc: "Write Verilog, run Icarus Verilog and see waveforms. 47 self-checking labs in 4 parts, from half adders to FIFOs and FSMs, plus ready-to-copy examples." },
  { id: "systemverilog", title: "SystemVerilog labs", href: "/systemverilog/", tag: "SystemVerilog · 12 labs · quizzes",
    desc: "SystemVerilog for design: packages, enums, structs, always_ff, generate, a UART and a small VeriRISC CPU that runs programs." },
  { id: "sva", title: "SVA & coverage labs", href: "/sva/", tag: "Verification · Assertions · 42 labs · quizzes",
    desc: "SystemVerilog Assertions and functional coverage: write properties, see every attempt pass or fail on the waveform, then build covergroups, bins, transitions and crosses and close coverage." },
  { id: "dv", title: "DV labs", href: "/dv/", tag: "Verification · SystemVerilog · 23 labs · quizzes",
    desc: "Design verification weeks 7 to 9: clocks and resets, self-checking testbenches, classes, threads, constrained random, scoreboards, then FIFO, arbiter, APB and UART projects." },
  { id: "synth", title: "Synthesis lab · Yosys", href: "/synth/", tag: "Synthesis · 7 labs · quizzes",
    desc: "Logic synthesis with Yosys: from a 2-to-1 mux to a RISC-V core. See RTL and gate-level diagrams, map to standard cells, read cell and area reports." },
  { id: "cdc", title: "CDC labs", href: "/cdc/", tag: "CDC · 16 labs · quizzes",
    desc: "Clock domain crossing: run a CDC check on RTL and SDC, fix synchronizers, then simulate pulse synchronizers, handshakes and an async FIFO with assertions." },
  { id: "sta", title: "STA and Constraints labs", href: "/sta/", tag: "Timing · quizzes",
    desc: "Static timing analysis with OpenSTA: netlists, SDC, Liberty and SPEF. Setup and hold, exceptions, OCV, multi-corner and power reports." },
  { id: "pd", title: "Physical design labs", href: "/pd/", tag: "Physical design · OpenROAD · 22 labs · quizzes",
    desc: "Floorplan, placement, CTS, routing and signoff with OpenROAD on Sky130: real layouts and reports for every setting, live signoff STA, and a RISC-V project." },
  { id: "tips", title: "Vikas Sachdeva's tips", href: "/tips/", tag: "Tips",
    desc: "Practical tips on verification, timing and chip design from 20 years in EDA." },
];
const labById = (id) => LABS.find((l) => l.id === id);

// Cards on the labs home page. The STA lab has three tracks, each with its own card.
const HOME_CARDS = [
  labById("logic"),
  labById("verilog"),
  labById("systemverilog"),
  { title: "SVA labs", href: "/sva/?track=sva-basic", tag: "Assertions · 33 labs · quizzes",
    desc: "SystemVerilog Assertions from the basics to real designs: sampling, implication, sequences and repetition, $past and local variables, then FSM, FIFO, memory, arbiter, APB and UART checkers." },
  { title: "Functional coverage labs", href: "/sva/?track=cov-fc", tag: "Coverage · 9 labs · quizzes",
    desc: "Covergroups and coverpoints, explicit, transition, wildcard, ignore and illegal bins, crosses with binsof, instances and options, an APB coverage model and coverage closure." },
  labById("dv"),
  labById("synth"),
  { title: "CDC workshop", href: "/cdc/?track=cdc", tag: "CDC · 9 labs · quizzes",
    desc: "Clock domain crossing: run a CDC check on RTL and SDC, fix synchronizers, then simulate pulse synchronizers, handshakes and an async FIFO with assertions." },
  { title: "Expert CDC & FIFO", href: "/cdc/?track=expert", tag: "CDC · SystemVerilog · 7 labs · quizzes",
    desc: "Consolidation with a metastability model, MCP with acknowledge, Gray code counters, a 2-clock FIFO, gate-level simulation with SDF, and reconvergence in an FSM: waived by mistake, then fixed." },
  { title: "STA basic labs", href: "/sta/?track=basic", tag: "Timing · 8 labs · quizzes",
    desc: "Short examples to start with: setup and hold, I/O constraints, exceptions, OCV, corners, SPEF and power on a real block." },
  { title: "STA workshop", href: "/sta/?track=workshop", tag: "Timing · 15 labs · quizzes",
    desc: "The 8-day STA workshop, from your first timing report to STA on a RISC-V core. Slides and an auto-checked quiz for every lab." },
  { title: "SDC & constraints", href: "/sta/?track=sdc", tag: "Timing · 21 labs · quizzes",
    desc: "Timing constraints hands-on: clocks and generated clocks, clock groups and sense, false and multicycle paths, I/O delays, modes and CDC, up to a full SoC." },
  { title: "Verify constraints", href: "/sta/?track=verify", tag: "Timing · Simulation · 12 labs · quizzes",
    desc: "Check constraints twice: STA and assertions in simulation. Multicycle paths (same clock, slow to fast, fast to slow, clock gating) and exclusive clock groups, each with a passing and a failing design." },
  { title: "Signoff STA", href: "/sta/?track=signoff", tag: "Timing · 9 labs · quizzes",
    desc: "Signoff skills: validating constraints, clocks, timing exceptions, OCV and CRPR, latches, ECO fixes and multi-corner signoff." },
  labById("pd"),
  labById("tips"),
];

(function () {
  const current = document.body.dataset.lab || "";
  const nav = document.getElementById("labs-nav");
  if (nav) {
    const inner = document.createElement("div");
    inner.className = "labs-in";
    const home = document.createElement("a");
    home.href = "/"; home.textContent = "Home";
    if (current === "home") home.setAttribute("aria-current", "page");
    inner.appendChild(home);
    for (const lab of LABS) {
      const a = document.createElement("a");
      a.href = lab.href; a.textContent = lab.title;
      if (lab.id === current) a.setAttribute("aria-current", "page");
      inner.appendChild(a);
    }
    nav.appendChild(inner);
  }
  const cards = document.getElementById("lab-cards");
  if (cards) {
    for (const lab of HOME_CARDS) {
      const a = document.createElement("a");
      a.className = "lab-card"; a.href = lab.href;
      const tag = document.createElement("span"); tag.className = "lab-tag"; tag.textContent = lab.tag;
      const h = document.createElement("span"); h.className = "lab-title"; h.textContent = lab.title;
      const p = document.createElement("span"); p.className = "lab-desc"; p.textContent = lab.desc;
      const go = document.createElement("span"); go.className = "lab-go"; go.textContent = "Open →";
      a.append(tag, h, p, go);
      cards.appendChild(a);
    }
  }
})();

// Accounts and leaderboards (/lb.js), on every page
(function () { const s = document.createElement("script"); s.src = "/lb.js?v=12bd87908e"; s.defer = true; document.head.appendChild(s); })();

// Tip box inside a lab: <div class="lab-tip" data-topics="STA,Constraints"></div>
(function () {
  const boxes = document.querySelectorAll(".lab-tip");
  if (!boxes.length) return;
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => /^(https?:|\/)/.test(u) ? `<a href="${u}">${t}</a>` : t);
  const toHtml = (md) => md.split(/\n{2,}/).map((block) => {
    const code = /^```\w*\n([\s\S]*?)\n?```$/.exec(block.trim());
    return code ? `<pre>${esc(code[1])}</pre>` : `<p>${inline(block.trim())}</p>`;
  }).join("");
  fetch("/tips/tips.md", { cache: "no-cache" }).then((r) => (r.ok ? r.text() : "")).then((md) => {
    md = md.replace(/<!--[\s\S]*?-->/g, "");
    const tips = [];
    for (const part of md.split(/^## /m).slice(1)) {
      const lines = part.split("\n");
      const title = lines.shift().trim();
      while (lines.length && !lines[0].trim()) lines.shift();
      const m = /^topic:\s*(.+)$/i.exec((lines[0] || "").trim());
      const topic = m ? m[1].trim() : "";
      if (m) lines.shift();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (title) tips.push({ title, topic, id, body: lines.join("\n").trim() });
    }
    boxes.forEach((box) => {
      const want = (box.dataset.topics || "").split(",").map((t) => t.trim().toLowerCase()).filter(Boolean);
      const list = want.length ? tips.filter((t) => want.includes(t.topic.toLowerCase())) : tips;
      if (!list.length) return;
      let i = Math.floor(Math.random() * list.length);
      const show = () => {
        const t = list[i];
        box.innerHTML = `<div class="lab-tip-head"><span class="lab-tip-label">// Vikas's tip${t.topic ? " · " + esc(t.topic) : ""}</span></div>
          <h3>${esc(t.title)}</h3><div class="lab-tip-body">${toHtml(t.body)}</div>
          <div class="lab-tip-foot">${list.length > 1 ? '<button type="button" class="btn small lab-tip-next">Next tip</button>' : ""}<a href="/tips/#${t.id}">All tips →</a></div>`;
        const next = box.querySelector(".lab-tip-next");
        if (next) next.addEventListener("click", () => { i = (i + 1) % list.length; show(); });
      };
      show();
      box.hidden = false;
    });
  }).catch(() => {});
})();

// "Subscribe to the YouTube channel" popup, shown every time a lab is run.
window.vddSubscribe = function () {
  const old = document.querySelector(".sub-pop");
  if (old) old.remove();
  const box = document.createElement("aside");
  box.className = "sub-pop";
  box.setAttribute("role", "complementary");
  box.setAttribute("aria-label", "Subscribe to vlsideepdive on YouTube");
  box.innerHTML = '<span class="sub-ic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5l12 7-12 7z" fill="#fff"/></svg></span>' +
    '<div><b>Enjoying the lab?</b><p>Subscribe to vlsideepdive on YouTube for free courses and new labs.</p>' +
    '<a class="sub-go" href="https://www.youtube.com/@vlsideepdive?sub_confirmation=1" target="_blank" rel="noopener">Subscribe</a></div>' +
    '<button type="button" class="sub-x" aria-label="Close">×</button>';
  document.body.appendChild(box);
  requestAnimationFrame(() => box.classList.add("show"));
  const close = () => { box.classList.remove("show"); setTimeout(() => box.remove(), 250); };
  box.querySelector(".sub-x").addEventListener("click", close);
  box.querySelector(".sub-go").addEventListener("click", () => setTimeout(close, 300));
};

// Video badges: a video played on this site through YouTube's player API counts the seconds actually
// played (skipping ahead does not count). Watching 90% or more of a video earns its badge.
// Progress: localStorage vdd-videos-v1 { id: { d: duration, s: "0101…" one char per second } };
// badges: vdd-badges-v1 { id: { title, at } } (lb.js syncs them to the leaderboard and offers to share).
window.vddVideo = (function () {
  const VKEY = "vdd-videos-v1", BKEY = "vdd-badges-v1", NEED = 0.9;
  const jget = (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}") || {}; } catch (_) { return {}; } };
  const jset = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} };
  const badges = () => jget(BKEY);
  let apiP = null;
  function api() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    return apiP || (apiP = new Promise((res, rej) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) try { prev(); } catch (_) {} res(window.YT); };
      const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; s.async = true; s.onerror = () => rej(new Error("YouTube API")); document.head.appendChild(s);
      setTimeout(() => rej(new Error("YouTube API timeout")), 12000);
    }));
  }
  function share(id) { const v = jget(VKEY)[id]; if (!v || !v.d || !v.s) return 0; let n = 0; for (const c of v.s) if (c === "1") n++; return Math.min(1, n / Math.max(1, Math.floor(v.d) - 1)); }
  function label(el, id) {
    if (!el) return;
    if (badges()[id]) { el.className = "vbadge done"; el.textContent = "🏅 Badge earned"; return; }
    const f = share(id);
    el.className = "vbadge"; el.textContent = f > 0.01 ? `🏅 ${Math.round(f * 100)}% watched: watch it all to earn a badge` : "🏅 Watch the whole video to earn a badge";
  }
  function plainFrame(btn, v, cls) {
    const f = document.createElement("iframe"); f.className = cls; f.title = v.title || "YouTube video";
    f.src = "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"; f.allowFullscreen = true;
    btn.replaceWith(f);
  }
  // Replace a thumbnail button by a tracked player. statusEl shows the badge progress.
  function play(btn, v, cls, statusEl) {
    const holder = document.createElement("div"); holder.className = cls; btn.replaceWith(holder);
    const host = document.createElement("div"); holder.appendChild(host);
    api().then((YT) => {
      let timer = null, last = null, dirty = false;
      const rec = () => { const all = jget(VKEY); return all[v.id] || { d: 0, s: "" }; };
      let r = rec();
      const save = () => { if (!dirty) return; const all = jget(VKEY); all[v.id] = r; jset(VKEY, all); dirty = false; label(statusEl, v.id); };
      const check = () => {
        if (badges()[v.id] || !r.d) return;
        if (share(v.id) >= NEED) { const b = badges(); b[v.id] = { title: v.title || "vlsideepdive video", at: Date.now() }; jset(BKEY, b); label(statusEl, v.id); }
      };
      const tick = (p) => {
        const d = p.getDuration(), t = p.getCurrentTime();
        if (d > 0 && r.d !== Math.round(d)) { r.d = Math.round(d); if (r.s.length < r.d) r.s = r.s.padEnd(r.d, "0"); dirty = true; }
        if (last !== null && t > last && t - last <= 2.5) {   // normal playback (up to 2x speed); a jump is a seek
          const a = Math.floor(last), b = Math.min(Math.floor(t), r.d - 1);
          if (b >= a) { const arr = r.s.split(""); for (let i = a; i <= b; i++) arr[i] = "1"; r.s = arr.join(""); dirty = true; }
        }
        last = t;
      };
      const p = new YT.Player(host, {
        host: "https://www.youtube-nocookie.com", videoId: v.id, width: "100%", height: "100%",
        playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
        events: {
          onReady: (e) => { try { e.target.getIframe().title = v.title || "YouTube video"; e.target.playVideo(); } catch (_) {} },
          onStateChange: (e) => {
            clearInterval(timer);
            if (e.data === YT.PlayerState.PLAYING) { last = p.getCurrentTime(); timer = setInterval(() => { tick(p); if (dirty && Math.random() < 0.25) { save(); check(); } }, 1000); }
            else { tick(p); last = null; save(); check(); }
          },
        },
      });
      addEventListener("pagehide", () => { save(); check(); });
    }).catch(() => { holder.replaceWith(btn); plainFrame(btn, v, cls); });
  }
  return { play, label, badges };
})();

// YouTube videos inside a lab: <section class="lab-videos" data-src="videos.txt"></section>
// The list lives in a plain text file next to the lab: one YouTube link per line, optional title after "|".
// A line "[track-id]" starts videos for one track only (the page sets <body data-track>); "[all]" goes back
// to videos for every track. Videos for a track are shown instead of the general ones when it has any.
(function () {
  const sections = document.querySelectorAll(".lab-videos");
  if (!sections.length) return;
  const idOf = (url) => {
    const m = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/.exec(url) || /^([A-Za-z0-9_-]{11})$/.exec(url);
    return m ? m[1] : null;
  };
  // On a lab page: a card like the Subscribe one, a few seconds after the page opens, once per page per visit,
  // when the lab has a video whose badge is not earned yet. "Watch now" scrolls to it and starts it.
  let offered = false;
  function offerBadge(sec, vids) {
    if (offered) return;
    const todo = vids.find((v) => !window.vddVideo.badges()[v.id]); if (!todo) return;
    const key = "vdd-badge-pop:" + location.pathname;
    try { if (sessionStorage.getItem(key)) return; } catch (_) {}
    offered = true;
    setTimeout(() => {
      if (document.querySelector(".sub-pop, .lb-modal-bg")) return;   // another card or a dialog is open
      try { sessionStorage.setItem(key, "1"); } catch (_) {}
      const box = document.createElement("aside");
      box.className = "sub-pop badge-pop"; box.setAttribute("role", "complementary"); box.setAttribute("aria-label", "Earn a badge");
      box.innerHTML = '<span class="sub-ic" aria-hidden="true">🏅</span>' +
        '<div><b>Watch the full video to earn a badge</b><p>Watch this lab\'s video to the end here on the site: the badge goes on your leaderboard profile and you can share it on LinkedIn.</p>' +
        '<button type="button" class="sub-go">Watch now</button></div>' +
        '<button type="button" class="sub-x" aria-label="Close">×</button>';
      document.body.appendChild(box);
      requestAnimationFrame(() => box.classList.add("show"));
      const close = () => { box.classList.remove("show"); setTimeout(() => box.remove(), 250); };
      box.querySelector(".sub-x").addEventListener("click", close);
      box.querySelector(".sub-go").addEventListener("click", () => {
        close();
        sec.scrollIntoView({ behavior: "smooth", block: "center" });
        const thumb = sec.querySelector(`.video[data-vid="${todo.id}"] .video-thumb`);
        if (thumb) setTimeout(() => thumb.click(), 400);
      });
    }, 6000);
  }
  sections.forEach((sec) => {
    const grid = sec.querySelector(".video-grid");
    let all = null;
    const render = () => {
      if (!all) return;
      const track = document.body.dataset.track || "";
      const own = all.filter((v) => v.track && v.track === track);
      const vids = own.length ? own : all.filter((v) => !v.track);
      grid.innerHTML = "";
      sec.querySelector(".video-empty").hidden = !!vids.length;
      for (const v of vids) {
        const card = document.createElement("div"); card.className = "video";
        const btn = document.createElement("button"); btn.type = "button"; btn.className = "video-thumb";
        btn.setAttribute("aria-label", "Play video" + (v.title ? ": " + v.title : ""));
        btn.style.backgroundImage = `url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)`;
        btn.innerHTML = '<span class="video-play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5l12 7-12 7z" fill="#fff"/></svg></span>';
        const badge = document.createElement("span");
        btn.addEventListener("click", () => window.vddVideo.play(btn, v, "video-frame", badge));
        card.appendChild(btn); card.dataset.vid = v.id;
        const cap = document.createElement("a"); cap.className = "video-title";
        cap.href = `https://www.youtube.com/watch?v=${v.id}`; cap.textContent = v.title || "Watch on YouTube";
        card.appendChild(cap);
        window.vddVideo.label(badge, v.id); card.appendChild(badge);
        grid.appendChild(card);
      }
      offerBadge(sec, vids);
    };
    document.addEventListener("vdd-track", render);
    fetch(sec.dataset.src, { cache: "no-cache" }).then((r) => (r.ok ? r.text() : "")).then((txt) => {
      all = []; let track = "";
      for (const raw of txt.split("\n")) {
        const line = raw.trim();
        if (!line || line.startsWith("#")) continue;
        const h = /^\[([\w-]+)\]$/.exec(line);
        if (h) { track = h[1] === "all" ? "" : h[1]; continue; }
        const [url, ...rest] = line.split("|");
        const id = idOf(url.trim());
        if (id) all.push({ id, title: rest.join("|").trim(), track });
      }
      render();
    }).catch(() => { sec.querySelector(".video-empty").hidden = false; });
  });
})();
