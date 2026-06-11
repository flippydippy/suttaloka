#!/usr/bin/env python3
"""Merge the per-language lexicon batches into the site's data files.

Reads website/data/incoming/<lang>/lexicon-<lang>-batch-*.json (one JSON
object per batch, keyed by headword) and writes website/data/lexicon-<lang>.js
exposing window.PALI_LEXICON_<LANG>.

The hand-curated entries in dictionary.js / dictionary-fa.js are NOT touched:
app.js merges them on top of the lexicon at runtime, so a curated entry
always wins over a generated one for the same headword.

Run from anywhere:  python3 website/build_lexicon.py
"""

import json
from pathlib import Path

DATA = Path(__file__).resolve().parent / "data"
LANGS = ["en", "fa", "hi"]

def main():
    for lang in LANGS:
        indir = DATA / "incoming" / lang
        if not indir.is_dir():
            print(f"skip {lang}: {indir} missing")
            continue
        merged = {}
        files = sorted(indir.glob(f"lexicon-{lang}-batch-*.json"))
        for f in files:
            batch = json.loads(f.read_text(encoding="utf-8"))
            for k, v in batch.items():
                if k in merged:
                    raise SystemExit(f"duplicate headword {k!r} in {f.name}")
                merged[k] = v
        out = DATA / f"lexicon-{lang}.js"
        payload = json.dumps(merged, ensure_ascii=False, separators=(",", ":"))
        out.write_text(
            f"window.PALI_LEXICON_{lang.upper()} = {payload};\n", encoding="utf-8"
        )
        print(f"{lang}: {len(merged)} entries from {len(files)} batches -> {out.name} "
              f"({out.stat().st_size // 1024} KB)")

if __name__ == "__main__":
    main()
