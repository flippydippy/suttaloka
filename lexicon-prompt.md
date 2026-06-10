# Prompt: Suttāloka dictionary entries from the lexicon (3,535 headwords × 4 languages)

Copy everything below the line into the project that holds the lexicon.

---

You have a lexicon of **3,535 distinct Pāli headwords with Goenka-tradition
glosses**. Your job is to turn every one of them into a full dictionary
entry for Suttāloka, a Pāli sutta reading website where readers tap a word
and a definition sheet opens.

## Workflow — one language at a time, gated

Produce the complete set of 3,535 entries in **one language**, then **STOP
and wait for my explicit go-ahead** before starting the next language. Never
start a language I haven't approved. The order:

1. **English** (start here)
2. **Persian (Farsi)** — only after I approve
3. **Hindi** — only after I approve
4. **Marathi** — only after I approve

Within a language, work batch by batch without asking (≈50 headwords per
file), and report progress as you go (e.g. "en: batch 12/71 done").

## Output files

One JSON file per batch, named by language and number:

```
lexicon-en-batch-01.json, lexicon-en-batch-02.json, …
lexicon-fa-batch-01.json, …
lexicon-hi-batch-01.json, …
lexicon-mr-batch-01.json, …
```

Each file is one JSON object keyed by headword (lowercase, full IAST
diacritics, dictionary stem). Valid JSON, UTF-8, no trailing commas, no
duplicate headwords anywhere in a language's set. Every language set must
cover the identical 3,535 headwords, in the same batch order, so files can
be cross-checked key by key.

### Entry schema

```json
{
  "asaddhammassavana": {
    "meaning": "hearing the untrue teaching; listening to false teachings",
    "summary": "This is a compound word meaning “hearing the untrue teaching” or “listening to false teachings.”",
    "gram": "neuter noun",
    "breakdown": [
      ["a-", "A negative prefix meaning “not” or “un-”."],
      ["saddhamma", "The true teaching or the law of nature (derived from sat, meaning “true/real,” + dhamma, meaning “teaching/law”). Thus, asaddhamma refers to false teachings or teachings contrary to the truth."],
      ["savana", "Listening, hearing, or studying. (The double ss in the middle is a phonetic sandhi doubling where dhamma meets savana.)"]
    ],
    "goenka": "This refers to listening to, reading, or following teachings that are contrary to the natural law of cause and effect (Dhamma). Specifically, it includes teachings that encourage dogmatic belief, blind faith, or ritualism instead of direct, experiential observation of reality as it is (such as the observation of impermanence, anicca, at the level of bodily sensations).",
    "forms": ["asaddhammassavanaṁ"]
  }
}
```

The Persian rendering of the same entry, for register (each language's file
carries the same structure, translated):

```json
{
  "asaddhammassavana": {
    "meaning": "شنیدنِ آموزه‌ی ناراست؛ گوش سپردن به تعالیم نادرست",
    "summary": "واژه‌ای مرکب به معنای «شنیدن آموزه‌ی ناراست» یا «گوش سپردن به تعالیم خلاف حقیقت».",
    "gram": "اسم خنثی",
    "breakdown": [
      ["a-", "پیشوند منفی‌ساز به معنای «نا» یا «غیر»."],
      ["saddhamma", "آموزه‌ی راستین یا قانون طبیعت (از sat به معنای «راست/حقیقی» + dhamma به معنای «آموزه/قانون»)."],
      ["savana", "شنیدن، گوش سپردن، یا مطالعه کردن."]
    ],
    "goenka": "اشاره دارد به گوش سپردن، خواندن یا پیروی از تعالیمی که با قانون طبیعیِ علت و معلول (دَمّا) ناسازگارند…"
  }
}
```

## Field rules

- `meaning` — REQUIRED. Short gloss line; semicolon-separated senses.
- `gram` — short grammar note ("masculine noun", "verb, 3rd person singular
  (pari + √pūr)", "enclitic particle"). Include for every entry.
- `summary` — one orientation sentence; only where it genuinely helps
  (compounds, easily-confused words). Omit otherwise.
- `breakdown` — [part, explanation] pairs: prefixes, roots (√ notation),
  suffixes, sandhi notes. Include for every content word; omit for simple
  particles/pronouns.
- `goenka` — the Goenka-tradition context paragraph. **Build it faithfully
  from the lexicon's own gloss** — expand for readability, but do not invent
  doctrine beyond it. Only for doctrinally significant terms; never force it
  onto grammatical words, numerals, or ordinary verbs.
- `forms` — **English files only** (it is language-independent): known
  irregular inflected forms — vocatives (bhikkhave), suppletive stems,
  common sandhi fusions. Regular case endings are handled by the site's
  stemmer; do not enumerate regular paradigms.
- `note` — if a parse or sense is uncertain, add a `"note"` field starting
  with "uncertain:" so it can be reviewed.

## Entry depth by word type

- **Doctrinal terms** (path factors, defilements, meditation vocabulary):
  full entries — meaning, gram, breakdown, goenka.
- **Ordinary verbs/nouns/adjectives**: meaning, gram, breakdown.
- **Particles, pronouns, numerals, indeclinables**: meaning + gram only.
- **Proper nouns**: meaning with a one-line identification, e.g.
  "Sāvatthī (capital of Kosala)". Brief goenka only for major figures.

## Language and style

All languages: keep Pāli words, morphological parts, roots (√…), and
references in **IAST Latin script** inside the translated text — the site
handles their text direction automatically. Translations are PLAIN TEXT: no
HTML, no markdown. Use proper IAST diacritics everywhere (ā ī ū ṁ ṅ ñ ṭ ḍ ṇ ḷ).
The first element of every breakdown pair stays in Latin script in every
language; only the explanation is translated.

- **English** — clear and precise; the register of a careful translator's
  glossary.
- **Persian** — literary but natural, in the register of Iranian Vipassana
  materials. Terminology anchors already used on the site: bhikkhu = رهرو ·
  bhagavā = آن فرخنده · arahant = وارسته (ارهات) · dosa = بیزاری ·
  taṇhā = طلب · saṅkhāra = سَنکارا (واکنش ذهنی) · vedanā = حس بدنی ·
  anicca = ناپایداری · paññā = خرد · dukkha = رنج · nibbāna = نیبّانا ·
  dhamma = دَمّا.
- **Hindi** — the register of S.N. Goenka's Hindi discourses and VRI
  publications (विपश्यना साहित्य); Devanagari for the translation text.
- **Marathi** — the register of Marathi Vipassana publications; Devanagari
  for the translation text.

## Quality bar

Accuracy over speed. The glosses carry a living tradition — when the
lexicon's gloss and general dictionaries disagree, follow the lexicon and
flag the divergence in a `note`. After finishing a language, produce a short
coverage report (entries written, entries with goenka, entries flagged
uncertain) and STOP for my approval before the next language.
