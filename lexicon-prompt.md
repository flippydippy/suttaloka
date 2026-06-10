# Prompt: Pāli lexicon entries for Suttāloka

Copy everything below the line into the other project, attaching
`missing-words.txt`.

---

You are building dictionary entries for Suttāloka, a Pāli sutta reading
website. Readers tap a Pāli word and a definition sheet opens, in English or
Persian (Farsi). Your job: produce entries for every word in the attached
`missing-words.txt`.

## Input

`missing-words.txt` is tab-separated: `surface form  <tab>  frequency  <tab>  sutta refs`.
These are inflected forms exactly as they appear in the texts. **Group all
inflections of the same word under one headword** (e.g. paripūreti,
paripūrenti, paripūro, paripūraṁ, paripūrā → headword *paripūrati* /
*paripūra*) and record every surface form you consumed in that entry's
`forms` array. Every form in the input file must end up in exactly one
entry's `forms`.

## Output format

JSON files of at most ~50 headwords each, named `lexicon-batch-01.json`,
`lexicon-batch-02.json`, … Each file is one object keyed by headword
(lowercase, full IAST diacritics, dictionary stem):

```json
{
  "asaddhammassavana": {
    "forms": ["asaddhammassavanaṁ", "asaddhammassavanan’tissa"],
    "en": {
      "meaning": "hearing the untrue teaching; listening to false teachings",
      "summary": "This is a compound word meaning “hearing the untrue teaching” or “listening to false teachings.”",
      "gram": "neuter noun",
      "breakdown": [
        ["a-", "A negative prefix meaning “not” or “un-”."],
        ["saddhamma", "The true teaching or the law of nature (derived from sat, meaning “true/real,” + dhamma, meaning “teaching/law”). Thus, asaddhamma refers to false teachings or teachings contrary to the truth."],
        ["savana", "Listening, hearing, or studying. (The double ss in the middle is a phonetic sandhi doubling where dhamma meets savana.)"]
      ],
      "goenka": "This refers to listening to, reading, or following teachings that are contrary to the natural law of cause and effect (Dhamma). Specifically, it includes teachings that encourage dogmatic belief, blind faith, or ritualism instead of direct, experiential observation of reality as it is (such as the observation of impermanence, anicca, at the level of bodily sensations)."
    },
    "fa": {
      "meaning": "شنیدنِ آموزه‌ی ناراست؛ گوش سپردن به تعالیم نادرست",
      "summary": "واژه‌ای مرکب به معنای «شنیدن آموزه‌ی ناراست» یا «گوش سپردن به تعالیم خلاف حقیقت».",
      "gram": "اسم خنثی",
      "breakdown": [
        ["a-", "پیشوند منفی‌ساز به معنای «نا» یا «غیر»."],
        ["saddhamma", "آموزه‌ی راستین یا قانون طبیعت (از sat به معنای «راست/حقیقی» + dhamma به معنای «آموزه/قانون»). پس asaddhamma یعنی تعالیم نادرست و خلاف حقیقت."],
        ["savana", "شنیدن، گوش سپردن، یا مطالعه کردن. (تشدید ss در میانه‌ی واژه، هم‌آواییِ صرفیِ محل پیوند dhamma و savana است.)"]
      ],
      "goenka": "اشاره دارد به گوش سپردن، خواندن یا پیروی از تعالیمی که با قانون طبیعیِ علت و معلول (دَمّا) ناسازگارند؛ از جمله تعالیمی که به جای مشاهده‌ی مستقیم و تجربیِ واقعیت همان‌گونه که هست (مانند مشاهده‌ی ناپایداری، anicca، در سطح حس‌های بدنی)، به اعتقاد جزمی، ایمان کورکورانه یا آیین‌پرستی دعوت می‌کنند."
    }
  }
}
```

## Field rules

- `meaning` — REQUIRED in both languages. Short gloss line, lowercase,
  semicolon-separated senses.
- `gram` — short grammar note ("verb, 3rd person singular (pari + √pūr)",
  "masculine noun", "enclitic particle"). Include for every entry.
- `summary` — one orientation sentence. Only when it genuinely helps
  (compounds, easily-confused words); omit otherwise.
- `breakdown` — array of [part, explanation] pairs analysing the word
  morphologically (prefixes, roots with √, suffixes, sandhi notes). Include
  for every content word; omit for simple particles/pronouns.
- `goenka` — a paragraph giving the word's significance in the Goenka
  (Vipassana) tradition: experiential, practice-oriented, referencing
  observation of sensations, anicca, equanimity, the chain of dependent
  origination, etc. where genuinely relevant. ONLY for doctrinally
  significant terms — never force it onto grammatical words, numerals, or
  ordinary verbs.
- `forms` — every surface form from the input list belonging to this
  headword, spelled exactly as in the file (keep capitalisation as given).

## Entry depth by word type

- **Doctrinal terms** (perceptions, defilements, path factors, meditation
  vocabulary): full entries — meaning, gram, breakdown, goenka.
- **Ordinary verbs/nouns/adjectives**: meaning, gram, breakdown. No goenka
  unless the tradition genuinely uses the term.
- **Particles, pronouns, numerals, indeclinables**: meaning + gram only.
- **Proper nouns** (people, places): meaning with a one-line identification,
  e.g. "Sāvatthī (capital of Kosala)". Brief goenka only for major figures.
- **Sandhi fusions that are two words** (e.g. etadahosi = etad + ahosi,
  cāhāro = ca + āhāro): make the headword the meaningful word (ahosi → hoti,
  āhāra) and put the fused surface form in its `forms`; explain the fusion in
  the breakdown if instructive.

## Language and style

- English: clear, precise, the register of a careful translator's glossary.
- Persian: literary but natural Persian in the register of Iranian
  Vipassana materials. Terminology anchors already used on the site:
  bhikkhu = رهرو · bhagavā = آن فرخنده · arahant = وارسته (ارهات) ·
  dosa = بیزاری · taṇhā = طلب · saṅkhāra = سَنکارا (واکنش ذهنی) ·
  vedanā = حس بدنی · anicca = ناپایداری · paññā = خرد ·
  dukkha = رنج · nibbāna = نیبّانا · dhamma = دَمّا.
- Persian text must be PLAIN TEXT (no HTML/markdown). Keep Pāli words,
  roots (√...), and references in Latin script inside Persian sentences —
  the site isolates their direction automatically.
- In breakdowns, the first element of each pair (the morphological part)
  stays in Latin script in BOTH languages; only the explanation is
  translated.
- Use proper IAST diacritics everywhere (ā ī ū ṁ ṅ ñ ṭ ḍ ṇ ḷ).

## Quality bar

- Accuracy over coverage: if a form is ambiguous or you are unsure of the
  parse, still create the entry but add "uncertain:" at the start of a
  `"note"` field so it can be reviewed.
- No duplicate headwords across batch files.
- Valid JSON, UTF-8, no trailing commas.
