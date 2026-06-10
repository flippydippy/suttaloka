# Suttāloka data formats

The single reference for every hand-edited format in this project. The
rendering code treats these as contracts — follow them exactly and the site
picks everything up with no code changes.

## 1. The definition sheet (what readers see)

Tapping a Pāli word opens a sheet. **Both languages must render the same
layout**, section for section — English left-to-right, Farsi right-to-left
as one mirrored block (no mixed alignment):

| Order | English | Farsi | Source field |
| :-- | :-- | :-- | :-- |
| 1 | clicked form + `headword: x` | clicked form + `سرواژه: x` | key + matched form |
| 2 | grammar note (small, grey) | یادداشت دستوری | `gram` |
| 3 | meaning line | معنا | `meaning` |
| 4 | italic orientation sentence | جمله‌ی معرفی | `summary` |
| 5 | **MORPHOLOGICAL BREAKDOWN** + bullets | **ساختار واژه** + bullets | `breakdown` |
| 6 | **GOENKA TRADITION CONTEXT** block | **در سنت گوئنکا** block | `goenka` |
| 7 | "In this sutta's glossary — …" footnote | «در واژه‌نامه‌ی این سوتا …» | sutta glossary |

Sections 2, 4–7 appear only when the entry has that field. Words found only
in the sutta's own glossary show the same layout, just sections 1, 3 and 6.

Bidirectional rules (handled by the renderer — but the reason `dictionary-fa.js`
entries must be **plain text**): inside Farsi text, Latin/Pāli runs
(`√vid`, `saṅkhāra`, `AN 10.60`) are auto-wrapped in LTR isolates so they
don't reorder. HTML in a Farsi entry would break this.

## 2. `data/dictionary.js` — English dictionary

```js
"headword": {                       // lowercase, with diacritics, dictionary stem
  meaning: "short gloss line",                       // REQUIRED
  summary: "one-line orientation sentence",          // optional
  gram: "grammar note, e.g. 'feminine noun'",        // optional
  breakdown: [["part", "explanation"], ...],         // optional
  goenka: "Goenka-tradition context paragraph",      // optional
  forms: ["bhikkhave", "vuttamarahatā", ...]         // optional, irregulars only
}
```

- Regular case endings are stripped by the stemmer; list `forms` only for
  irregulars (vocatives, suppletive stems, sandhi fusions).
- `forms` and lookup behaviour live **only here** — never in the Farsi file.

## 3. `data/dictionary-fa.js` — Persian dictionary

Same keys as `dictionary.js`, display fields only:

```js
"headword": {
  meaning: "...", summary: "...", gram: "...",
  breakdown: [["part", "توضیح فارسی"], ...],   // keep the Pāli part Latin
  goenka: "..."
}
```

- **No `forms`, no HTML, plain text only.**
- Per-field fallback: any field (or whole entry) missing here shows the
  English version in its place — so partial translations are fine.
- Keep the first element of each breakdown pair (the Pāli part) in Latin
  script; translate only the explanation.

## 4. Sutta markdown (`<nikāya>/<Slug>/<slug>-en.md`, `-fa.md`)

```
# English Title                      (fa file: # عنوان فارسی)
## Pāḷititle (REF)                   e.g. ## Dosasutta (Iti 2)

> Pāli verse lines as blockquotes
> ...

Translation paragraph(s) for the quote above.

> next Pāli block ...

---

## Glossary                          (fa file: ## واژه‌نامه)
| Pāli (IAST) | Target transliteration | Target gloss | First-chapter occurrence | Goenka-tradition usage |
| :--- | :--- | :--- | :--- | :--- |
| **word** | ... | gloss | ... | context |

---

## Translator Notes                  (fa file: ## یادداشت‌های مترجم)
1. **Topic (*Pāli*)**: note text...
```

- Each `>` block pairs with the translation paragraphs that follow it; the
  en and fa files must have the **same number of Pāli blocks** for the
  Farsi translation to attach.
- `*italics*` / `**bold**` are the only markdown honoured in translations,
  glossary cells, and notes.
- After any edit: `python3 website/build.py` (regenerates `data/suttas.js`),
  and check the printed per-sutta summary (segment count, `+fa` flag).

## 5. `data/meta.js` — blurbs and chapters

```js
window.COLLECTION_META = { "Itivuttaka": { blurb: "one sentence" }, ... };
window.SUTTA_BLURBS   = { "Iti 2": "one sentence", ... };   // keyed by ref
```

Chapter grouping (vagga / saṁyutta / nipāta) is derived from the reference
number via the tables in the same file (`MN_VAGGAS`, `SN_SAMYUTTAS`,
`AN_NIPATAS`, `UD_VAGGAS`, `ITI_NIPATAS`). If a collection page shows a bare
"Vagga N", add that chapter's name to the table. Label format:
`Pāḷiname — English gloss`.
