#!/usr/bin/env python3
"""Parse the sutta markdown files into website/data/suttas.js.

Re-run this whenever a sutta is added or edited — the site reads the
generated data file, not the markdown. Each sutta folder holds <slug>-en.md
(and optionally <slug>-fa.md) where Pali verses are blockquotes and
translation paragraphs follow each quote. Glossaries and translator notes
are picked up in both languages automatically: "## Glossary" /
"## Translator Notes" in the English file, "## واژه‌نامه" /
"## یادداشت‌های مترجم" in the Farsi file.

Run from anywhere:  python3 website/build.py
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(__file__).resolve().parent / "data" / "suttas.js"

COLLECTIONS = [
    ("majjhima-nikaya", "Majjhima Nikāya", "MN"),
    ("samyutta-nikaya", "Saṁyutta Nikāya", "SN"),
    ("anguttara-nikaya", "Aṅguttara Nikāya", "AN"),
    ("khuddakapatha", "Khuddakapāṭha", "Kp"),
    ("udana", "Udāna", "Ud"),
    ("itivuttaka", "Itivuttaka", "Iti"),
]


def md_inline(text):
    """Minimal markdown -> HTML for translation paragraphs and notes."""
    text = (text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"\*(.+?)\*", r"<i>\1</i>", text)
    return text


def parse_md(path):
    """Return dict with title, pali_title, ref, segments, glossary, notes."""
    raw = path.read_text(encoding="utf-8")
    lines = raw.splitlines()

    title = ""
    subtitle = ""
    body_start = 0
    for i, ln in enumerate(lines):
        if ln.startswith("# ") and not title:
            title = ln[2:].strip()
        elif ln.startswith("## ") and not subtitle:
            subtitle = ln[3:].strip()
            body_start = i + 1
            break

    m = re.match(r"^(.*?)\s*\(([^)]+)\)", subtitle)
    pali_title = m.group(1).strip() if m else subtitle
    ref = m.group(2).strip() if m else ""

    # Body runs until a standalone --- (glossary/notes follow).
    body_lines, tail_lines = [], []
    in_tail = False
    for ln in lines[body_start:]:
        if not in_tail and ln.strip() == "---":
            in_tail = True
            continue
        (tail_lines if in_tail else body_lines).append(ln)

    # Group body into blocks: quote-blocks (Pali) and text-blocks (translation).
    blocks = []  # (kind, text)
    cur_kind, cur = None, []

    def flush():
        nonlocal cur, cur_kind
        if cur and any(s.strip() for s in cur):
            text = "\n".join(cur).strip()
            blocks.append((cur_kind, text))
        cur, cur_kind = [], None

    for ln in body_lines:
        if ln.startswith(">"):
            content = ln[1:].lstrip(" ")
            if cur_kind != "q":
                flush()
                cur_kind = "q"
            cur.append(content)
        elif not ln.strip():
            if cur_kind == "q":
                flush()
            elif cur_kind == "t":
                cur.append("")
        else:
            if cur_kind != "t":
                flush()
                cur_kind = "t"
            cur.append(ln.rstrip())
    flush()

    # Pair: each quote block opens a segment; following text blocks attach.
    segments = []
    for kind, text in blocks:
        if kind == "q":
            segments.append({"pali": text, "trans": ""})
        else:
            if segments:
                prev = segments[-1]["trans"]
                segments[-1]["trans"] = (prev + "\n\n" + text).strip()
            else:
                segments.append({"pali": "", "trans": text})

    for seg in segments:
        seg["trans"] = md_inline(seg["trans"])

    # Glossary + translator notes from the tail.
    glossary, notes = [], []
    tail = "\n".join(tail_lines)
    gsec = re.search(r"## (?:Glossary|واژه‌نامه)\n(.*?)(?:\n## |\Z)", tail, re.S)
    if gsec:
        for row in gsec.group(1).splitlines():
            row = row.strip()
            if not row.startswith("|") or set(row) <= {"|", " ", ":", "-"}:
                continue
            cells = [c.strip() for c in row.strip("|").split("|")]
            if len(cells) < 3 or cells[0].lower().startswith("pāli"):
                continue
            word = re.sub(r"\*+", "", cells[0]).strip()
            glossary.append({
                "word": word,
                "gloss": md_inline(cells[2]) if len(cells) > 2 else "",
                "goenka": md_inline(cells[4]) if len(cells) > 4 else "",
            })
    nsec = re.search(r"## (?:Translator Notes|یادداشت‌های مترجم)\n(.*?)\Z", tail, re.S)
    if nsec:
        for item in re.split(r"\n(?=\d+\.\s)", nsec.group(1).strip()):
            item = re.sub(r"^\d+\.\s*", "", item.strip())
            if item:
                notes.append(md_inline(item))

    return {
        "title": title, "paliTitle": pali_title, "ref": ref,
        "segments": segments, "glossary": glossary, "notes": notes,
    }


def ref_sort_key(ref):
    nums = [float(n) for n in re.findall(r"\d+(?:\.\d+)?", ref)]
    return nums + [0, 0]


def main():
    suttas = []
    for folder, display, abbr in COLLECTIONS:
        cdir = ROOT / folder
        if not cdir.is_dir():
            continue
        for sdir in sorted(cdir.iterdir()):
            if not sdir.is_dir():
                continue
            en_files = [p for p in sdir.glob("*-en.md") if "-narrative-" not in p.name]
            if not en_files:
                continue
            en = parse_md(en_files[0])
            fa_files = [p for p in sdir.glob("*-fa.md") if "-narrative-" not in p.name]
            fa = parse_md(fa_files[0]) if fa_files else None

            if fa and len(fa["segments"]) == len(en["segments"]):
                for i, seg in enumerate(en["segments"]):
                    seg["fa"] = fa["segments"][i]["trans"]
            ref = en["ref"]
            if not ref:
                fm = re.match(r"^([A-Za-z]+)-([\d.]+)", sdir.name)
                ref = f"{fm.group(1)} {fm.group(2)}" if fm else sdir.name
            entry = {
                "id": sdir.name.lower(),
                "ref": ref,
                "collection": display,
                "abbr": abbr,
                "title": en["title"],
                "paliTitle": en["paliTitle"],
                "titleFa": fa["title"] if fa else "",
                "hasFa": bool(fa and "fa" in en["segments"][0]) if en["segments"] else False,
                "segments": en["segments"],
                "glossary": en["glossary"],
                "notes": en["notes"],
                "glossaryFa": fa["glossary"] if fa else [],
                "notesFa": fa["notes"] if fa else [],
            }
            suttas.append(entry)

    order = {name: i for i, (_, name, _) in enumerate(COLLECTIONS)}
    suttas.sort(key=lambda s: (order[s["collection"]], ref_sort_key(s["ref"])))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(suttas, ensure_ascii=False, indent=1)
    OUT.write_text("window.SUTTAS = " + payload + ";\n", encoding="utf-8")
    total_seg = sum(len(s["segments"]) for s in suttas)
    print(f"Wrote {len(suttas)} suttas, {total_seg} segments -> {OUT}")
    for s in suttas:
        fa_flag = " +fa" if s["hasFa"] else ""
        print(f"  {s['ref']:<12} {s['title']}  ({len(s['segments'])} seg{fa_flag})")


if __name__ == "__main__":
    main()
