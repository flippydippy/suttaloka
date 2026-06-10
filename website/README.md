# Suttāloka — Pāli Sutta Library

A static website for reading the suttas with Pāli and translation side by side,
full-text search, and tap-to-define Pāli vocabulary.

## Run it locally

```bash
node website/serve.js          # then open http://localhost:8741
```

(or any static server — `npx serve website`, etc. It's plain HTML/CSS/JS,
no build step, so you can also host it on GitHub Pages / Netlify as-is.)

## Features

- **Library & search** — each collection is a horizontally scrolling shelf
  (with arrow buttons when it overflows) ending in a "View all" tile; that
  opens a dedicated collection page grouped by chapter (vagga / saṁyutta /
  nipāta) with sticky headers and its own filter box. One-line descriptions
  per collection and per sutta. Instant full-text search over titles,
  translations, and Pāli. Diacritic-insensitive: typing `panna` finds
  *paññā*. Press `/` to focus search.
- **Three reading modes** — Side by side · Stacked · Translation only
  (side-by-side collapses to stacked automatically on narrow screens).
- **Tap any Pāli word** — a definition sheet slides up from the bottom with
  the headword, meaning, morphological breakdown, and Goenka-tradition
  context. Inflected and sandhi-fused forms (e.g. `anāgāmitāyā”ti`,
  `asaddhammassavanan’tissa`) are resolved to their headwords by a small
  stemmer plus per-entry `forms` lists. Words missing from the main
  dictionary fall back to the sutta's own glossary.
- **EN / FA toggle** — suttas that have a Farsi translation can be read in
  either language (Farsi renders right-to-left in Vazirmatn). The glossary
  and translator notes switch language too, parsed from the `واژه‌نامه` and
  `یادداشت‌های مترجم` sections of the `-fa.md` file; the definition sheet
  shows the active language's sutta gloss beneath the English dictionary
  entry.
- **Light / dusk themes**, adjustable text size, reading-progress bar.
  Preferences persist in localStorage.

## Adding a sutta

> **Important:** the site reads from the generated `data/suttas.js`, not from
> the markdown directly — re-run `python3 website/build.py` whenever you add
> or edit a sutta, or the change won't appear on the site.

1. Create the usual folder under its nikāya, e.g.
   `itivuttaka/Iti-16-pathamasekha-sutta/`, with `<slug>-en.md`
   (and optionally `<slug>-fa.md`) in the existing format:
   `# English Title`, `## Pāḷititle (REF)`, Pāli as `>` blockquotes,
   translation paragraphs between them, then optional `---` + `## Glossary`
   table + `## Translator Notes`.
2. Rebuild the data file:

   ```bash
   python3 website/build.py
   ```

   The build picks up **both languages automatically**: the English glossary
   and notes from `## Glossary` / `## Translator Notes` in the `-en.md`
   file, and the Farsi ones from `## واژه‌نامه` / `## یادداشت‌های مترجم` in
   the `-fa.md` file. It prints a summary line per sutta (segment count and
   a `+fa` flag) — check it to confirm the new sutta parsed as expected.

3. Optionally add a one-sentence description for the new sutta in
   `website/data/meta.js` under `SUTTA_BLURBS`, keyed by its reference
   (e.g. `"Iti 16": "…"`). Suttas without a blurb just show no description.
   Chapter grouping (vagga / saṁyutta / nipāta) is derived automatically
   from the reference number using the tables in the same file — extend
   them if a new chapter shows up as a bare "Vagga N".

## Adding dictionary words

Edit `website/data/dictionary.js`. Entry shape:

```js
"headword": {
  meaning: "short gloss",
  summary: "optional one-line orientation",
  gram: "optional grammar note",
  breakdown: [["part", "explanation"], ...],
  goenka: "Goenka-tradition context paragraph",
  forms: ["irregular", "inflected", "forms"]
}
```

Regular case endings are stripped automatically, so `forms` is only needed
for irregulars (vocatives like *bhikkhave*, suppletive stems, fused
compounds).

## Files

| File | Purpose |
| :--- | :--- |
| `index.html`, `styles.css`, `app.js` | the site |
| `data/suttas.js` | generated from the markdown — don't edit by hand |
| `data/dictionary.js` | hand-authored Pāli dictionary |
| `data/meta.js` | hand-authored collection/sutta blurbs + chapter tables |
| `build.py` | markdown → `data/suttas.js` |
| `serve.js` | tiny static server for local preview |
