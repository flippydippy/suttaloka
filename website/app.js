/* Suttāloka — reader logic */
(function () {
  "use strict";

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  const SUTTAS = window.SUTTAS || [];
  // Full generated lexicon underneath, hand-curated entries on top.
  const DICT = Object.assign({}, window.PALI_LEXICON_EN || {}, window.PALI_DICT || {});

  /* ───────── translation languages ───────── */

  const LANGS = {
    en: { label: "English", native: "English", rtl: false },
    fa: { label: "Persian", native: "فارسی", rtl: true },
    hi: { label: "Hindi", native: "हिन्दी", rtl: false },
  };

  // Per-language definition overlays. fa/hi lexicons are big, so they are
  // fetched only when the reader first switches to that language.
  const OVERLAYS = { en: null };
  const overlayLoading = {};
  function overlayFor(lang) {
    if (lang === "fa")
      return Object.assign({}, window.PALI_LEXICON_FA || {}, window.PALI_DICT_FA || {});
    if (lang === "hi") return Object.assign({}, window.PALI_LEXICON_HI || {});
    return null;
  }
  function ensureLang(lang, done) {
    if (lang === "en" || window["PALI_LEXICON_" + lang.toUpperCase()]) {
      OVERLAYS[lang] = OVERLAYS[lang] || overlayFor(lang);
      done();
      return;
    }
    if (overlayLoading[lang]) { overlayLoading[lang].push(done); return; }
    overlayLoading[lang] = [done];
    const sc = document.createElement("script");
    sc.src = "data/lexicon-" + lang + ".js";
    sc.onload = () => {
      OVERLAYS[lang] = overlayFor(lang);
      overlayLoading[lang].forEach((f) => f());
      delete overlayLoading[lang];
    };
    sc.onerror = () => { overlayLoading[lang].forEach((f) => f()); delete overlayLoading[lang]; };
    document.head.appendChild(sc);
  }

  const COLLECTION_COLORS = {
    "Majjhima Nikāya": "#a85a32",
    "Saṁyutta Nikāya": "#2f6b5e",
    "Aṅguttara Nikāya": "#7a5aa0",
    "Khuddakapāṭha": "#b06f14",
    "Udāna": "#356a92",
    "Itivuttaka": "#9c4a62",
  };

  /* ───────── helpers ───────── */

  const fold = (s) =>
    s.toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/ṁ|ṃ/g, "m"); // ṁ ṃ already covered by NFD, belt & braces

  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const stripTags = (s) => s.replace(/<[^>]+>/g, "");

  /* ───────── dictionary lookup ───────── */

  // Index of inflected forms -> headword
  const FORM_INDEX = {};
  for (const [hw, e] of Object.entries(DICT)) {
    (e.forms || []).forEach((f) => { FORM_INDEX[f.toLowerCase()] = hw; });
  }

  const ENDINGS = [
    "āyāti", "ānaṁ", "asmiṁ", "amhi", "asmā", "amhā", "assa",
    "āya", "āyaṁ", "ehi", "ebhi", "esu", "ena", "āni", "ato", "āsu", "āhi",
    "ābhi", "āyo", "iyā", "iyo", "inā", "ino", "īsu", "ūsu", "uno", "unā",
    "aṁ", "iṁ", "uṁ", "ā", "o", "e", "ṁ", "i", "ī", "u", "ū",
  ];
  const RESTORE = ["", "a", "ā", "i", "u", "ti", "tā"];

  function cleanToken(raw) {
    // strip punctuation & quotes around the word
    let t = raw.replace(/^[“”"'‘’\(\[…—–\-]+|[“”"'‘’\)\]\.,;:!?…—–]+$/g, "");
    return t;
  }

  function lookupCandidates(token) {
    const seen = new Set();
    const out = [];
    const push = (c) => { if (c && c.length > 1 && !seen.has(c)) { seen.add(c); out.push(c); } };

    const t = token.toLowerCase();
    // base variants: the token itself, and (for quote fusions like
    // anāgāmitāyā”ti or asaddhammassavanan’tissa) the part before the quote
    const variants = [t];
    const beforeQuote = t.split(/[’'‘”“"]/)[0];
    if (beforeQuote && beforeQuote !== t) variants.push(beforeQuote);

    for (const v of variants) {
      push(v);
      if (/nti$/.test(v)) { push(v.replace(/nti$/, "ṁ")); push(v.replace(/nti$/, "")); }
      if (/ti$/.test(v) && v.length > 4) push(v.slice(0, -2));
      // sandhi -n for -ṁ (aniccan -> aniccaṁ -> anicca)
      if (/n$/.test(v)) { push(v.slice(0, -1)); push(v.slice(0, -1) + "ṁ"); }
      // shortened final long vowels before 'ti: anāgāmitāyā -> anāgāmitāya
      if (/ā$/.test(v)) push(v.slice(0, -1) + "a");
    }

    const bases = Array.from(seen);
    for (const b of bases) {
      for (const end of ENDINGS) {
        if (b.endsWith(end) && b.length - end.length >= 3) {
          const stem = b.slice(0, b.length - end.length);
          for (const r of RESTORE) push(stem + r);
        }
      }
    }
    return out;
  }

  function lookupWord(rawToken, sutta) {
    const token = cleanToken(rawToken);
    if (!token) return null;
    const candidates = lookupCandidates(token);

    let entry = null, headword = null;
    for (const c of candidates) {
      if (DICT[c]) { entry = DICT[c]; headword = c; break; }
      if (FORM_INDEX[c]) { headword = FORM_INDEX[c]; entry = DICT[headword]; break; }
    }

    // sutta-glossary fallback / enrichment (in the active reading language)
    let glossHit = null;
    const glossSrc = sutta &&
      (document.body.dataset.lang === "fa" && sutta.glossaryFa && sutta.glossaryFa.length
        ? sutta.glossaryFa : sutta.glossary);
    if (glossSrc) {
      const cset = new Set(candidates.map(fold));
      cset.add(fold(token));
      glossHit = glossSrc.find((g) => {
        const gw = fold(g.word);
        if (cset.has(gw)) return true;
        // also match if a candidate starts with the glossary headword (compounds)
        return candidates.some((c) => fold(c).startsWith(gw) && gw.length >= 4);
      }) || null;
    }
    if (!entry && !glossHit) return { token, found: false };
    return { token, found: true, headword, entry, glossHit };
  }

  /* ───────── search index ───────── */

  const INDEX = SUTTAS.map((s) => {
    const transText = s.segments.map((g) => stripTags(g.trans)).join("\n");
    const paliText = s.segments.map((g) => g.pali).join("\n");
    return {
      s,
      title: fold(s.title + " " + s.paliTitle + " " + s.ref),
      trans: transText, transF: fold(transText),
      pali: paliText, paliF: fold(paliText),
    };
  });

  function markMatch(text, q) {
    // Find q in the diacritic-folded text, then map the hit back to the
    // original string by walking it and accumulating folded length.
    const idx = fold(text).indexOf(q);
    if (idx < 0) return esc(text);
    let oi = 0, fi = 0, startO = -1, endO = text.length;
    while (oi < text.length && fi <= idx + q.length) {
      if (fi === idx && startO < 0) startO = oi;
      fi += fold(text[oi]).length;
      oi += 1;
      if (fi >= idx + q.length) { endO = oi; break; }
    }
    if (startO < 0) return esc(text);
    return esc(text.slice(0, startO)) + "<mark>" + esc(text.slice(startO, endO)) + "</mark>" + esc(text.slice(endO));
  }

  function runSearch(qRaw) {
    const q = fold(qRaw.trim());
    const resultsEl = $("#results"), libEl = $("#library");
    if (q.length < 2) {
      resultsEl.hidden = true; libEl.hidden = false;
      return;
    }
    const hits = [];
    for (const it of INDEX) {
      let score = 0, where = null, snipText = null, isPali = false;
      if (it.title.includes(q)) { score = 100; }
      const ti = it.transF.indexOf(q);
      const pi = it.paliF.indexOf(q);
      if (ti >= 0) { score += 40; where = "trans"; }
      if (pi >= 0) { score += 30; if (!where) { where = "pali"; isPali = true; } }
      if (!score) continue;

      if (where === "trans") {
        const c = contextAround(it.trans, it.transF, q);
        snipText = c;
      } else if (where === "pali") {
        snipText = contextAround(it.pali, it.paliF, q);
      }
      hits.push({ s: it.s, score, snipText, isPali });
    }
    hits.sort((a, b) => b.score - a.score);

    resultsEl.hidden = false; libEl.hidden = true;
    if (!hits.length) {
      resultsEl.innerHTML = `<p class="no-hits">Nothing found for “${esc(qRaw)}” — try a shorter stem, e.g. <i>anicc</i></p>`;
      return;
    }
    resultsEl.innerHTML =
      `<p class="r-head">${hits.length} sutta${hits.length > 1 ? "s" : ""} found</p>` +
      hits.map((h) => `
        <button class="rcard" data-id="${h.s.id}">
          <span class="ref">${esc(h.s.ref)} · ${esc(h.s.collection)}</span>
          <h3>${esc(h.s.title)} <i style="font-weight:400">· ${esc(h.s.paliTitle)}</i></h3>
          ${h.snipText ? `<p class="snip ${h.isPali ? "pali-snip" : ""}">…${markMatch(h.snipText, q)}…</p>` : ""}
        </button>`).join("");
    $$(".rcard", resultsEl).forEach((b) =>
      b.addEventListener("click", () => { location.hash = "#/sutta/" + b.dataset.id; })
    );
  }

  function contextAround(text, foldedText, q, width = 150) {
    const i = foldedText.indexOf(q);
    if (i < 0) return null;
    // map folded index to original index (1:1 only if no combining chars before;
    // walk to be safe)
    let oi = 0, fi = 0;
    while (oi < text.length && fi < i) { fi += fold(text[oi]).length; oi++; }
    const start = Math.max(0, oi - Math.floor(width / 2));
    return text.slice(start, start + width).replace(/\s+/g, " ").trim();
  }

  /* ───────── home rendering ───────── */

  // How many suttas a home shelf holds before deferring to "View all".
  const SHELF_MAX = 12;

  const COLLECTION_META = window.COLLECTION_META || {};
  const SUTTA_BLURBS = window.SUTTA_BLURBS || {};
  const chapterFor = window.chapterFor || (() => null);

  function cardHTML(s, color) {
    const blurb = SUTTA_BLURBS[s.ref];
    return `
      <button class="card" data-id="${s.id}" style="--ccol:${color}">
        <span class="ref">${esc(s.ref)}</span>
        <h3>${esc(s.title)}</h3>
        <span class="pt">${esc(s.paliTitle)}</span>
        ${blurb ? `<p class="blurb">${esc(blurb)}</p>` : ""}
      </button>`;
  }

  function wireLibraryClicks() {
    $$(".card[data-id]", $("#library")).forEach((b) =>
      b.addEventListener("click", () => { location.hash = "#/sutta/" + b.dataset.id; })
    );
    $$("[data-col]", $("#library")).forEach((b) =>
      b.addEventListener("click", () => { location.hash = "#/col/" + b.dataset.col; })
    );
  }

  function renderLibrary() {
    const groups = {};
    for (const s of SUTTAS) (groups[s.collection] = groups[s.collection] || []).push(s);
    $("#library").innerHTML = Object.entries(groups).map(([col, list], gi) => {
      const color = COLLECTION_COLORS[col] || "#b06f14";
      const slug = list[0].abbr.toLowerCase();
      const shown = list.slice(0, SHELF_MAX);
      const meta = COLLECTION_META[col];
      return `
      <section class="shelf" style="animation-delay:${0.07 * gi + 0.08}s">
        <div class="shelf-head">
          <div class="shelf-info">
            <button class="shelf-title" data-col="${slug}">
              ${esc(col)} <span class="count">${list.length}</span>
              <svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>
            </button>
            ${meta && meta.blurb ? `<p class="col-blurb">${esc(meta.blurb)}</p>` : ""}
          </div>
          <div class="shelf-nav" hidden>
            <button class="snav" data-dir="-1" aria-label="Scroll back">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 19 8 12l7-7"/></svg>
            </button>
            <button class="snav" data-dir="1" aria-label="Scroll forward">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        <div class="shelf-row">
          ${shown.map((s) => cardHTML(s, color)).join("")}
          ${list.length >= 4 ? `
          <button class="more-tile" data-col="${slug}">
            View all ${list.length}
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>` : ""}
        </div>
      </section>`;
    }).join("");
    wireLibraryClicks();

    // shelf arrows: only shown when the row actually overflows
    $$(".shelf", $("#library")).forEach((shelf) => {
      const row = $(".shelf-row", shelf);
      const nav = $(".shelf-nav", shelf);
      nav.hidden = row.scrollWidth <= row.clientWidth + 8;
      $$(".snav", nav).forEach((b) =>
        b.addEventListener("click", () =>
          row.scrollBy({ left: (+b.dataset.dir) * row.clientWidth * 0.85, behavior: "smooth" })
        )
      );
    });
  }

  function renderCollection(slug) {
    const list = SUTTAS.filter((s) => s.abbr.toLowerCase() === slug);
    if (!list.length) { renderLibrary(); return; }
    const col = list[0].collection;
    const color = COLLECTION_COLORS[col] || "#b06f14";
    const meta = COLLECTION_META[col];

    // group by chapter (vagga / saṁyutta / nipāta), preserving sutta order;
    // collections whose chapterFor returns null render as one flat grid
    const chapters = [];
    for (const s of list) {
      const label = chapterFor(s.abbr, s.ref);
      const last = chapters[chapters.length - 1];
      if (last && last.label === label) last.items.push(s);
      else chapters.push({ label, items: [s] });
    }
    const grouped = chapters.some((c) => c.label);

    const body = grouped
      ? chapters.map((c) => `
          <section class="vagga">
            ${c.label ? `<h3 class="vagga-head">${esc(c.label)}</h3>` : ""}
            <div class="cards">${c.items.map((s) => cardHTML(s, color)).join("")}</div>
          </section>`).join("")
      : `<div class="cards">${list.map((s) => cardHTML(s, color)).join("")}</div>`;

    $("#library").innerHTML = `
      <div class="col-page">
        <button class="crumb-back" id="colBack">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 19 8 12l7.5-7"/></svg>
          All collections
        </button>
        <div class="col-page-head">
          <span class="dot big" style="background:${color}"></span>
          <h2>${esc(col)}</h2>
          <span class="count">${list.length} sutta${list.length > 1 ? "s" : ""}</span>
        </div>
        ${meta && meta.blurb ? `<p class="col-blurb in-col-page">${esc(meta.blurb)}</p>` : ""}
        <div class="searchbox col-filter">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
          <input id="colFilter" type="search" placeholder="Filter within ${esc(col)}…" autocomplete="off" spellcheck="false">
        </div>
        ${body}
      </div>`;
    $$(".card[data-id]", $("#library")).forEach((b) =>
      b.addEventListener("click", () => { location.hash = "#/sutta/" + b.dataset.id; })
    );
    $("#colBack").addEventListener("click", () => { location.hash = ""; });
    $("#colFilter").addEventListener("input", (e) => {
      const q = fold(e.target.value.trim());
      $$(".card[data-id]", $("#library")).forEach((c) => {
        const s = SUTTAS.find((x) => x.id === c.dataset.id);
        c.hidden = !!q && !fold(s.title + " " + s.paliTitle + " " + s.ref).includes(q);
      });
      // hide chapters whose every card is filtered out
      $$(".vagga", $("#library")).forEach((v) => {
        v.hidden = !$$(".card[data-id]", v).some((c) => !c.hidden);
      });
    });
  }

  /* ───────── reader rendering ───────── */

  let current = null;

  function wrapPali(text) {
    // wrap each word in a clickable span; keep punctuation/whitespace as-is
    return text.split(/(\s+)/).map((tok) => {
      if (/^\s+$/.test(tok) || !tok) return esc(tok);
      const core = cleanToken(tok);
      if (!core || !/[a-zA-ZāīūṁṃṅñṭḍṇḷĀĪŪṀṄÑṬḌṆḶ]/.test(core)) return esc(tok);
      return `<span class="w" data-w="${esc(core)}">${esc(tok)}</span>`;
    }).join("");
  }

  function renderSutta(s) {
    current = s;
    $("#crumbRef").textContent = s.ref;

    const lang = document.body.dataset.lang;
    // Sutta translations exist in en/fa; for other languages the text falls
    // back to English while word definitions follow the chosen language.
    const transNote = lang !== "en" && !(lang === "fa" && s.hasFa)
      ? `<p class="trans-note">${lang === "fa"
          ? "ترجمه‌ی متن این سوتا هنوز فارسی نشده است — متن انگلیسی است؛ معنیِ واژه‌ها فارسی باز می‌شود."
          : "इस सुत्त का अनुवाद अभी हिन्दी में नहीं है — पाठ अंग्रेज़ी में है; शब्द-अर्थ हिन्दी में खुलेंगे।"}</p>`
      : "";
    const segs = s.segments.map((g, i) => {
      const trans = lang === "fa" && g.fa ? g.fa : g.trans;
      const rtl = lang === "fa" && g.fa ? ' dir="rtl"' : "";
      return `
      <div class="seg-row" style="animation-delay:${Math.min(i, 10) * 0.04}s">
        <div class="pali" lang="pi">${wrapPali(g.pali)}</div>
        <div class="trans"${rtl}>${trans}</div>
      </div>`;
    }).join("");

    // glossary + notes follow the active translation language when available
    const useFaGloss = lang === "fa" && s.glossaryFa && s.glossaryFa.length;
    const useFaNotes = lang === "fa" && s.notesFa && s.notesFa.length;
    const glossList = useFaGloss ? s.glossaryFa : s.glossary;
    const notesList = useFaNotes ? s.notesFa : s.notes;

    const gloss = glossList.length ? `
      <section class="tail-sec${useFaGloss ? " fa" : ""}"${useFaGloss ? ' dir="rtl" lang="fa"' : ""}>
        <h4>${useFaGloss ? "واژه‌نامه" : "Glossary"}</h4>
        <div class="gloss-cols">
          ${glossList.map((g) => `
            <div class="gloss-item" data-w="${esc(g.word)}">
              <b>${esc(g.word)}</b> — <span class="g-gloss">${g.gloss}</span>
              ${g.goenka ? `<span class="g-gx">${g.goenka}</span>` : ""}
            </div>`).join("")}
        </div>
      </section>` : "";

    const notes = notesList.length ? `
      <section class="tail-sec${useFaNotes ? " fa" : ""}"${useFaNotes ? ' dir="rtl" lang="fa"' : ""}>
        <h4>${useFaNotes ? "یادداشت‌های مترجم" : "Translator notes"}</h4>
        <ol class="notes-list">${notesList.map((n) => `<li>${n}</li>`).join("")}</ol>
      </section>` : "";

    // one-time hint: the Pāli text is tappable
    const HINT_L10N = {
      en: ["Tap any <span class=\"w demo\">Pāli word</span> in the text to open its meaning, word-structure, and Goenka-tradition context.", "Got it"],
      fa: ["روی هر <span class=\"w demo\">واژه‌ی پالی</span> در متن بزنید تا معنی، ساختار واژه و توضیح سنت گوئنکا باز شود.", "متوجه شدم"],
      hi: ["पाठ में किसी भी <span class=\"w demo\">पालि शब्द</span> पर टैप करें — उसका अर्थ, शब्द-विश्लेषण और गोयन्का परम्परा का संदर्भ खुलेगा।", "समझ गया"],
    };
    const hl = HINT_L10N[lang] || HINT_L10N.en;
    const hint = localStorage.getItem("sl-taphint") ? "" : `
      <div class="tap-hint"${lang === "fa" ? ' dir="rtl" lang="fa"' : ""}>
        <span class="tap-ic" aria-hidden="true">☝︎</span>
        <p>${hl[0]}</p>
        <button id="hintDismiss">${hl[1]}</button>
      </div>`;

    $("#page").innerHTML = `
      <div class="title-block">
        <span class="t-ref">${esc(s.collection)} · ${esc(s.ref)}</span>
        <h2>${esc(lang === "fa" && s.titleFa ? s.titleFa : s.title)}</h2>
        <div class="t-pali">${esc(s.paliTitle)}</div>
      </div>
      <div class="rule-orn"><span>❁</span></div>
      ${hint}${transNote}
      <div class="segs">${segs}</div>
      <div class="end-orn">✦ ✦ ✦</div>
      ${gloss}${notes}`;

    // word taps
    $$(".w", $("#page")).forEach((el) =>
      el.addEventListener("click", (ev) => { ev.stopPropagation(); openSheetFor(el); })
    );
    const hintBtn = $("#hintDismiss");
    if (hintBtn) hintBtn.addEventListener("click", () => {
      localStorage.setItem("sl-taphint", "1");
      const h = $(".tap-hint", $("#page"));
      h.classList.add("bye");
      setTimeout(() => h.remove(), 300);
    });
    $$(".gloss-item", $("#page")).forEach((el) =>
      el.addEventListener("click", () => openSheetForWord(el.dataset.w))
    );
  }

  /* ───────── definition sheet ───────── */

  const sheet = $("#sheet");
  let sheetSeq = 0;

  // sheet UI labels per language
  const SHEET_L10N = {
    en: { hw: "headword:", bd: "Morphological breakdown", gx: "Goenka tradition context", gl: "In this sutta's glossary" },
    fa: { hw: "سرواژه:", bd: "ساختار واژه", gx: "در سنت گوئنکا", gl: "در واژه‌نامه‌ی این سوتا" },
    hi: { hw: "मूल शब्द:", bd: "शब्द-विश्लेषण", gx: "गोयन्का परम्परा का संदर्भ", gl: "इस सुत्त की शब्दावली में" },
  };

  // Wrap Latin/Pāli runs (incl. √ roots and references like "AN 10.60") in
  // LTR isolates so they don't get reordered inside right-to-left Persian
  // text — without this, "√vid" renders as "vid√". Plain text only.
  const LATIN_RUN = /[A-Za-z√0-9ĀĪŪṀṄÑṬḌṆḶāīūṁṅñṭḍṇḷ][A-Za-z√0-9.’'\- ĀĪŪṀṄÑṬḌṆḶāīūṁṅñṭḍṇḷ]*[A-Za-z√0-9ĀĪŪṀṄÑṬḌṆḶāīūṁṅñṭḍṇḷ]|[A-Za-z√0-9]/g;
  const faText = (s) => esc(s).replace(LATIN_RUN, '<bdi dir="ltr">$&</bdi>');

  function renderEntryHTML(res) {
    const { token, headword, glossHit } = res;
    const lang = document.body.dataset.lang;
    // in fa/hi mode, overlay that language's entry (per-field fallback to
    // English for anything not yet translated)
    const ov = lang !== "en" && OVERLAYS[lang] && headword ? OVERLAYS[lang][headword] : null;
    const entry = res.entry && ov ? Object.assign({}, res.entry, ov) : res.entry;
    const useL = ov ? lang : (lang === "fa" && !res.entry ? "fa" : "en");
    const isFa = useL === "fa";
    const L = SHEET_L10N[useL];
    // the whole sheet renders in ONE direction so labels, text, and bullets
    // line up the same way the English sheet does — Pāli stays LTR via <bdi>
    const text = isFa ? faText : esc;
    const useFa = isFa; // RTL wrapper applies to Persian only (Hindi is LTR)

    let html = `<h3 class="sheet-word"><bdi dir="ltr">${esc(token)}</bdi>`;
    if (headword && fold(headword) !== fold(token))
      html += ` <span class="hw">${L.hw} <i><bdi dir="ltr">${esc(headword)}</bdi></i></span>`;
    html += `</h3>`;

    if (entry) {
      if (entry.gram) html += `<p class="sheet-gram">${text(entry.gram)}</p>`;
      html += `<p class="sheet-meaning">${text(entry.meaning)}</p>`;
      if (entry.summary) html += `<p class="sheet-summary">${text(entry.summary)}</p>`;
      if (entry.breakdown && entry.breakdown.length) {
        html += `<p class="sheet-sec">${L.bd}</p><ul class="bd-list">` +
          entry.breakdown.map(([p, d]) => `<li><b dir="ltr">${esc(p)}</b> — ${text(d)}</li>`).join("") +
          `</ul>`;
      }
      if (entry.goenka) {
        html += `<p class="sheet-sec">${L.gx}</p>
                 <p class="sheet-gx">${text(entry.goenka)}</p>`;
      }
    }

    // show the sutta's own gloss when it adds something: a different headword,
    // or (in Farsi mode without a translated entry) the Farsi rendering
    if (glossHit && (!entry || fold(glossHit.word) !== fold(headword || "") ||
        (lang !== "en" && !ov))) {
      html += `<p class="sheet-glossnote">${L.gl} — <b><bdi dir="ltr">${esc(glossHit.word)}</bdi></b>: ${glossHit.gloss}${glossHit.goenka ? ` <span class="g-gx">${glossHit.goenka}</span>` : ""}</p>`;
    }

    if (!entry && glossHit) {
      // glossary-only entry: same layout as a full entry, minus the
      // sections the glossary doesn't have
      html = `<h3 class="sheet-word"><bdi dir="ltr">${esc(token)}</bdi> <span class="hw">${L.hw} <i><bdi dir="ltr">${esc(glossHit.word)}</bdi></i></span></h3>
        <p class="sheet-meaning">${glossHit.gloss}</p>` +
        (glossHit.goenka ? `<p class="sheet-sec">${L.gx}</p><p class="sheet-gx">${glossHit.goenka}</p>` : "");
    }

    return `<div class="entry${useFa ? " fa" : ""}${useL === "hi" ? " hi" : ""}"${useFa ? ' dir="rtl" lang="fa"' : useL === "hi" ? ' lang="hi"' : ""}>${html}</div>`;
  }

  function openSheetFor(el) {
    const res = lookupWord(el.dataset.w, current);
    if (!res) return;

    // highlight this word + identical tokens
    $$(".w.hl").forEach((w) => w.classList.remove("hl"));
    const key = fold(cleanToken(el.dataset.w));
    $$(".w").forEach((w) => { if (w.dataset.w && fold(cleanToken(w.dataset.w)) === key) w.classList.add("hl"); });

    let html;
    if (!res.found) {
      const lang = document.body.dataset.lang;
      const nf = lang === "fa"
        ? `<p class="sheet-nf" dir="rtl" lang="fa">این واژه هنوز در واژه‌نامه نیست. واژه‌های پالی صرف‌های فراوان دارند —
           واژه‌ای کوتاه‌تر و هم‌خانواده را لمس کنید، یا واژه‌نامه‌ی پایین متن را ببینید.</p>`
        : lang === "hi"
        ? `<p class="sheet-nf" lang="hi">यह शब्द अभी शब्दकोश में नहीं है। पालि शब्दों के अनेक रूप होते हैं —
           कोई छोटा, मिलता-जुलता शब्द टैप करें, या पाठ के नीचे की शब्दावली देखें।</p>`
        : `<p class="sheet-nf">Not in the dictionary yet. Pāli words are heavily inflected —
           try tapping a shorter, related word, or check the sutta's glossary below the text.</p>`;
      html = `<h3 class="sheet-word">${esc(res.token)}</h3>` + nf;
    } else {
      html = renderEntryHTML(res);
    }
    $("#sheetBody").innerHTML = html;
    sheet.hidden = false;
    const seq = ++sheetSeq;
    requestAnimationFrame(() => { if (seq === sheetSeq) sheet.classList.add("open"); });
  }

  function openSheetForWord(word) {
    openSheetFor({ dataset: { w: word } });
  }

  function closeSheet() {
    ++sheetSeq; // cancel any pending open animation
    sheet.classList.remove("open");
    $$(".w.hl").forEach((w) => w.classList.remove("hl"));
    setTimeout(() => { if (!sheet.classList.contains("open")) sheet.hidden = true; }, 240);
  }

  $("#sheetClose").addEventListener("click", closeSheet);
  // click anywhere outside the sheet (and not on another Pali word) closes it
  document.addEventListener("click", (e) => {
    if (sheet.hidden) return;
    if (e.target.closest(".sheet-card, .w, .gloss-item")) return;
    closeSheet();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) closeSheet();
    if (e.key === "/" && $("#home") && !$("#home").hidden && document.activeElement !== $("#searchInput")) {
      e.preventDefault(); $("#searchInput").focus();
    }
  });

  /* ───────── view mode / language / theme / font size ───────── */

  $$(".seg [data-mode]").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".seg [data-mode]").forEach((x) => x.classList.toggle("on", x === b));
      document.body.dataset.view = b.dataset.mode;
      localStorage.setItem("sl-view", b.dataset.mode);
    })
  );

  const langList = $("#langList"), langBtn = $("#langBtn");
  function setLang(l) {
    if (!LANGS[l]) l = "en";
    document.body.dataset.lang = l;
    $("#langLabel").textContent = LANGS[l].native;
    $$("#langList button").forEach((x) => x.classList.toggle("on", x.dataset.lang === l));
    localStorage.setItem("sl-lang", l);
    // fetch the language's lexicon if needed, then re-render so glossaries,
    // open sheets, and notes follow the new language
    ensureLang(l, () => { if (current) renderSutta(current); });
  }
  function toggleLangList(open) {
    const o = open === undefined ? langList.hidden : open;
    langList.hidden = !o;
    langBtn.setAttribute("aria-expanded", String(o));
  }
  langBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleLangList(); });
  $$("#langList button").forEach((b) =>
    b.addEventListener("click", () => { toggleLangList(false); setLang(b.dataset.lang); })
  );
  document.addEventListener("click", (e) => {
    if (!langList.hidden && !e.target.closest(".lang-menu")) toggleLangList(false);
  });

  let reading = parseFloat(localStorage.getItem("sl-size")) || 18.5;
  const applySize = () => document.documentElement.style.setProperty("--reading", reading + "px");
  applySize();
  $("#fontPlus").addEventListener("click", () => { reading = Math.min(24, reading + 1); applySize(); localStorage.setItem("sl-size", reading); });
  $("#fontMinus").addEventListener("click", () => { reading = Math.max(15, reading - 1); applySize(); localStorage.setItem("sl-size", reading); });

  function toggleTheme() {
    const t = document.body.dataset.theme === "light" ? "dusk" : "light";
    document.body.dataset.theme = t;
    localStorage.setItem("sl-theme", t);
  }
  $("#themeBtn").addEventListener("click", toggleTheme);
  $("#themeBtn2").addEventListener("click", toggleTheme);

  /* ───────── router ───────── */

  function route() {
    const ms = location.hash.match(/^#\/sutta\/(.+)$/);
    const mc = location.hash.match(/^#\/col\/(.+)$/);
    closeSheet();
    if (ms) {
      const s = SUTTAS.find((x) => x.id === decodeURIComponent(ms[1]));
      if (s) {
        $("#home").hidden = true;
        $("#reader").hidden = false;
        renderSutta(s);
        window.scrollTo(0, 0);
        return;
      }
    }
    current = null;
    $("#reader").hidden = true;
    $("#home").hidden = false;
    $("#results").hidden = true;
    $("#library").hidden = false;
    $("#searchInput").value = "";
    if (mc) renderCollection(decodeURIComponent(mc[1]));
    else renderLibrary();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  $("#backBtn").addEventListener("click", () => { location.hash = ""; });

  /* ───────── scroll progress ───────── */

  document.addEventListener("scroll", () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    $("#progress").style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  }, { passive: true });

  /* ───────── init ───────── */

  const savedTheme = localStorage.getItem("sl-theme");
  if (savedTheme) document.body.dataset.theme = savedTheme;
  const savedView = localStorage.getItem("sl-view");
  if (savedView) {
    document.body.dataset.view = savedView;
    $$(".seg [data-mode]").forEach((x) => x.classList.toggle("on", x.dataset.mode === savedView));
  }
  const savedLang = localStorage.getItem("sl-lang");
  if (savedLang) setLang(savedLang);

  $("#searchInput").addEventListener("input", (e) => runSearch(e.target.value));
  route();
})();
