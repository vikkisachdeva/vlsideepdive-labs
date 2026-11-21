// The list of labs. To add a lab, add one entry here: it appears in the tab bar
// on every page and as a card on the labs home page.
const LABS = [
  { id: "verilog", title: "Verilog simulator", href: "/verilog/", tag: "Simulation",
    desc: "Write Verilog or SystemVerilog, run Icarus Verilog and see waveforms. Ready-to-copy examples: counters, FSMs, FIFOs, CDC synchronizers." },
  { id: "synth", title: "Synthesis lab · Yosys", href: "/synth/", tag: "Synthesis · 7 labs · quizzes",
    desc: "Logic synthesis with Yosys: from a 2-to-1 mux to a RISC-V core. See RTL and gate-level diagrams, map to standard cells, read cell and area reports." },
  { id: "sta", title: "STA lab · OpenSTA", href: "/sta/", tag: "Timing",
    desc: "Static timing analysis with OpenSTA: netlists, SDC, Liberty and SPEF. Setup and hold, exceptions, OCV, multi-corner and power reports." },
  { id: "tips", title: "Vikas Sachdeva's tips", href: "/tips/", tag: "Tips",
    desc: "Practical tips on verification, timing and chip design from 20 years in EDA." },
];
const labById = (id) => LABS.find((l) => l.id === id);

// Cards on the labs home page. The STA lab has three tracks, each with its own card.
const HOME_CARDS = [
  labById("verilog"),
  labById("synth"),
  { title: "STA basic labs", href: "/sta/?track=basic", tag: "Timing · OpenSTA",
    desc: "Short examples to start with: setup and hold, I/O constraints, exceptions, OCV, corners, SPEF and power on a real block." },
  { title: "STA workshop", href: "/sta/?track=workshop", tag: "Timing · 15 labs · quizzes",
    desc: "The 8-day STA workshop, from your first timing report to STA on a RISC-V core. Slides and an auto-checked quiz for every lab." },
  { title: "Signoff STA", href: "/sta/?track=signoff", tag: "Timing · 9 labs · quizzes",
    desc: "Signoff skills: validating constraints, clocks, timing exceptions, OCV and CRPR, latches, ECO fixes and multi-corner signoff." },
  labById("tips"),
];

(function () {
  const current = document.body.dataset.lab || "";
  const nav = document.getElementById("labs-nav");
  if (nav) {
    const inner = document.createElement("div");
    inner.className = "labs-in";
    const home = document.createElement("a");
    home.href = "/"; home.textContent = "All labs";
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
    // First card: the YouTube channel. The player shows the channel's uploads playlist,
    // so it always starts on the newest video without any manual update.
    const yt = document.createElement("div");
    yt.className = "lab-card yt-card";
    yt.innerHTML = '<span class="lab-tag">YouTube · free courses</span>' +
      '<span class="lab-title">vlsideepdive on YouTube</span>' +
      '<div class="yt-frame"><iframe loading="lazy" title="Latest vlsideepdive videos" ' +
      'src="https://www.youtube-nocookie.com/embed/videoseries?list=UU6WZe5aEnmKg0zTW_nL4VjQ&rel=0" ' +
      'allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' +
      '<span class="lab-desc">All courses are free. The player starts on the newest upload.</span>' +
      '<div class="yt-actions"><a class="yt-sub" href="https://www.youtube.com/@vlsideepdive?sub_confirmation=1" target="_blank" rel="noopener">Subscribe</a>' +
      '<a class="lab-go" href="https://www.youtube.com/@vlsideepdive/videos" target="_blank" rel="noopener">All videos →</a></div>';
    cards.appendChild(yt);
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

// YouTube videos inside a lab: <section class="lab-videos" data-src="videos.txt"></section>
// The list lives in a plain text file next to the lab: one YouTube link per line, optional title after "|".
(function () {
  const sections = document.querySelectorAll(".lab-videos");
  if (!sections.length) return;
  const idOf = (url) => {
    const m = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/.exec(url) || /^([A-Za-z0-9_-]{11})$/.exec(url);
    return m ? m[1] : null;
  };
  sections.forEach((sec) => {
    const grid = sec.querySelector(".video-grid");
    fetch(sec.dataset.src, { cache: "no-cache" }).then((r) => (r.ok ? r.text() : "")).then((txt) => {
      const vids = [];
      for (const raw of txt.split("\n")) {
        const line = raw.trim();
        if (!line || line.startsWith("#")) continue;
        const [url, ...rest] = line.split("|");
        const id = idOf(url.trim());
        if (id) vids.push({ id, title: rest.join("|").trim() });
      }
      if (!vids.length) { sec.querySelector(".video-empty").hidden = false; return; }
      for (const v of vids) {
        const card = document.createElement("div"); card.className = "video";
        const btn = document.createElement("button"); btn.type = "button"; btn.className = "video-thumb";
        btn.setAttribute("aria-label", "Play video" + (v.title ? ": " + v.title : ""));
        btn.style.backgroundImage = `url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)`;
        btn.innerHTML = '<span class="video-play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5l12 7-12 7z" fill="#fff"/></svg></span>';
        btn.addEventListener("click", () => {
          const f = document.createElement("iframe");
          f.src = `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`;
          f.title = v.title || "YouTube video";
          f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          f.allowFullscreen = true; f.className = "video-frame";
          btn.replaceWith(f);
        });
        card.appendChild(btn);
        const cap = document.createElement("a"); cap.className = "video-title";
        cap.href = `https://www.youtube.com/watch?v=${v.id}`; cap.textContent = v.title || "Watch on YouTube";
        card.appendChild(cap);
        grid.appendChild(card);
      }
    }).catch(() => { sec.querySelector(".video-empty").hidden = false; });
  });
})();
