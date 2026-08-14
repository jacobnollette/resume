# AGENTS.md

## Project Purpose
This repository hosts a single-page GitHub Pages resume site for `resume.jacobnollette.com`.
The resume content is modeled as **structured JSON** and rendered client-side as a plain,
traditional, single-column resume document (centered header, bold section headings, bullet
lists) — intentionally matching a conventional ATS-friendly Word résumé layout rather than
a stylized/decorative theme.

## Source of Truth
- Resume **data**: `resume.json` — the single editable content file. Follows the
  [JSON Resume](https://jsonresume.org/schema/) standard (`basics`, `work`, `skills`,
  `education`, `volunteer`) plus a few documented extensions (see below).
- Renderer: `resume.js` — pure `Resume.buildResumeHTML(data)` / `Resume.buildHeaderInfoHTML(basics)`
  functions that turn the JSON into HTML. No DOM dependency, so they are unit-testable in Node.
- Site shell: `index.html` — fetches `resume.json` and injects rendered HTML. No content is
  hardcoded here.
- No-contact variant: `no-contact/index.html` — same shell served at `/no-contact/`, but strips
  `basics.email`, `basics.phone`, `basics.url`, and `basics.profiles` client-side before
  rendering (`stripContact`). Marked `noindex`. Content edits still happen only in `resume.json`;
  keep this shell's boot script in sync with `index.html` when changing either.
- Styling: `styles.css`
- Offline fallback: `resume-embed.js` — AUTO-GENERATED from `resume.json` (`window.__RESUME__`).
  Lets the page work when opened directly from disk (`file://`), where `fetch()` is blocked.
  Regenerate with `node build-embed.js`. Never edit it by hand.
- Deployment workflow: `.github/workflows/pages.yml`

## resume.json extensions (beyond the JSON Resume standard)
- `basics.x_summaryBullets[]` — array of strings rendered as the Summary section's bullet
  list, in place of `basics.summary` (which stays as a single-paragraph fallback and for
  machine-readable/ATS consumers that only read the standard `summary` field).
- `work[].highlights[]` — array of plain strings, one bullet each.
- `education[].x_summary` — free-text supplemental description.
- `volunteer[]` — standard JSON Resume array, rendered as the "Job-Related Activities and
  Training" section. Each entry additionally supports `x_tag` — a short parenthetical label
  next to the position (e.g. `"Volunteer"`, `"Side Project"`).
- An empty-string `endDate` (`""`) denotes a present/ongoing role and renders as `Present`.

## Editing Rules
- Edit resume content in `resume.json` only. Do not hardcode resume text in `index.html`.
- After editing `resume.json`, run `node build-embed.js` to refresh `resume-embed.js`
  (only needed for `file://` double-click preview; the deployed site uses `fetch`).
- Keep `resume.json` valid JSON (run `python3 -m json.tool resume.json` or equivalent).
- Preserve ATS-friendly keywords in `basics.summary` and the `skills` keyword arrays.
  Content renders inside semantic tags (h1–h4, p, ul/ol/li, dl), so the page stays readable
  to ATS and screen readers.
- Keep changes static-site compatible (no build system required).
- `logo.png` and `headshot.png` are no longer referenced (the header is plain text-only,
  matching a traditional resume layout) — left in the repo but unused.

## Deployment
- GitHub Actions deploys on push to `main` via `.github/workflows/pages.yml` (uploads the whole
  directory, so `resume.json` and `resume.js` ship automatically).
- GitHub Pages should be configured to use `GitHub Actions` as the source.
- Custom domain target is `resume.jacobnollette.com` (ensure DNS and `CNAME` are in place if needed).

## Quality Checks
- Validate `resume.json` parses and renders after edits.
- Optional Node smoke test: `node -e "const R=require('./resume.js');const d=require('./resume.json');if(!R.buildResumeHTML(d).includes('Professional Experience'))process.exit(1);console.log('ok')"`.
- Keep layout readable on both desktop and mobile.
- Ensure print output remains clean for PDF export.
- `@media print` deliberately overrides `--sans` to a locally-installed system font stack.
  Downloaded webfonts get re-embedded and re-subset by the print pipeline, which previously
  dropped the email's `@` as a missing-glyph box under the old webfont-based theme. Keep print
  on system fonts even though the current theme no longer loads webfonts on screen either.
