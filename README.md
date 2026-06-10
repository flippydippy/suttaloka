# Suttāloka

A reading room for the Buddha's discourses — Pāli and translation side by
side, with full-text search and a tap-a-word Pāli dictionary.

**Read it here: https://flippydippy.github.io/suttaloka/**

## What's in this repo

| Path | Contents |
| :--- | :--- |
| `majjhima-nikaya/`, `samyutta-nikaya/`, `anguttara-nikaya/`, `khuddakapatha/`, `udana/`, `itivuttaka/` | Sutta sources: one folder per sutta with English (`-en.md`) and Farsi (`-fa.md`) translations alongside the Pāli, plus glossaries and translator notes |
| `website/` | The site itself — see [website/README.md](website/README.md) for features, how to add suttas and dictionary entries, and the publishing routine |
| `.github/workflows/pages.yml` | Deploys `website/` to GitHub Pages on every push to `main` |

## Publishing routine

```bash
python3 website/build.py    # regenerate site data from the markdown
git add -A && git commit -m "describe the change"
git push                    # GitHub Pages redeploys automatically (~1 min)
```

Translations follow the Goenka (Vipassana) tradition's understanding of the
Pāli terms.
