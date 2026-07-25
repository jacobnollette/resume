# AGENTS.md

## Project Purpose
This repository hosts a single-page GitHub Pages resume site for `resume.jacobnollette.com`.
The resume content is modeled as **structured JSON** and rendered client-side as a
typographically-typeset, JSON-styled document.

## Source of Truth
- Resume **data**: `resume.json` — the single editable content file. Follows the
  [JSON Resume](https://jsonresume.org/schema/) standard (`basics`, `work`, `skills`,
  `projects`, `education`) plus a few documented extensions (see below).
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
- `work[].x_groups[]` — `{ name, highlights[] }`. Use when a role's bullets are organized
  under sub-headings (e.g. "CI/CD & Release Engineering"). Rendered in place of `work[].highlights`.
- `work[].highlights[]` — each item is either a plain string **or** `{ text, notes[] }`,
  where `notes[]` render as indented sub-bullets beneath the main highlight.
- `education[].x_summary` — free-text supplemental description.
- An empty-string `endDate` (`""`) denotes a present/ongoing role and renders as `Present`.

## Editing Rules
- Edit resume content in `resume.json` only. Do not hardcode resume text in `index.html`.
- After editing `resume.json`, run `node build-embed.js` to refresh `resume-embed.js`
  (only needed for `file://` double-click preview; the deployed site uses `fetch`).
- Keep `resume.json` valid JSON (run `python3 -m json.tool resume.json` or equivalent).
- Preserve ATS-friendly keywords in `basics.summary` and the `skills` keyword arrays.
  Content renders inside semantic tags (h1–h4, p, ul/ol/li, dl); decorative JSON punctuation
  is `aria-hidden`, so the page stays readable to ATS and screen readers.
- Keep changes static-site compatible (no build system required).

## Deployment
- GitHub Actions deploys on push to `main` via `.github/workflows/pages.yml` (uploads the whole
  directory, so `resume.json` and `resume.js` ship automatically).
- GitHub Pages should be configured to use `GitHub Actions` as the source.
- Custom domain target is `resume.jacobnollette.com` (ensure DNS and `CNAME` are in place if needed).

## Quality Checks
- Validate `resume.json` parses and renders after edits.
- Optional Node smoke test: `node -e "const R=require('./resume.js');const d=require('./resume.json');if(!R.buildResumeHTML(d).includes('experience'))process.exit(1);console.log('ok')"`.
- Keep layout readable on both desktop and mobile.
- Ensure print output remains clean for PDF export.
- `@media print` deliberately overrides `--mono`/`--sans`/`--serif` to locally-installed font
  stacks. Downloaded webfonts get re-embedded and re-subset by the print pipeline, which dropped
  the email's `@` as a missing-glyph box. Keep print on system fonts; screen keeps IBM Plex /
  Source Serif.
