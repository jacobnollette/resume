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
- Cover letter: `cover-letter/index.html` — standalone hand-written page (not driven by
  `resume.json`); shares `styles.css`'s `.letter` prose classes.
- Candidate Value Proposition brief: `cvp/index.html` — standalone hand-written page: a
  positioning statement, labeled "value pillar" list, quantified achievement metrics, and an
  ideal-fit summary. Uses the `.pillar-list`/`.metric-list` classes in `styles.css`.
- Executive Impact Profile: `eip/index.html` — standalone hand-written page: a narrative
  career throughline plus labeled "impact area" sections (each grounded in specific
  `resume.json` achievements) and an operating-philosophy close. Uses the `.impact-area`
  classes in `styles.css`.
- Styling: `styles.css`
- Offline fallback: `resume-embed.js` — AUTO-GENERATED from `resume.json` (`window.__RESUME__`).
  Lets the page work when opened directly from disk (`file://`), where `fetch()` is blocked.
  Regenerate with `node build-embed.js`. Never edit it by hand.
- Deployment workflow: `.github/workflows/pages.yml`

## Cross-page navigation
`index.html`, `cover-letter/`, `cvp/`, and `eip/` each render a `.page-nav-link` row (under
the header) linking to the other three pages. When adding or renaming a top-level page, update
this row in all four files — it isn't generated.

## Platform mirrors (`/upwork/`, etc.)
Some outreach channels need their own URL namespace and, per that platform's rules, must not
expose direct contact credentials that let a client route around the platform's fees. Rather
than hand-maintain duplicate HTML per platform, `build-platform-pages.js` generates
`<platform-slug>/resume/`, `<platform-slug>/cover-letter/`, `<platform-slug>/cvp/`, and
`<platform-slug>/eip/` from the real top-level source files, rewriting only what differs: asset
path depth, `canonical`/`og:url`, in-namespace nav links, a `noindex` tag, and — when the
platform config sets `stripContact: true` — the contact line (email/phone dropped, location
kept, same as the `no-contact` strip).

- Source of truth stays `index.html` / `cover-letter/` / `cvp/` / `eip/` / `resume.json`. Never
  hand-edit files under a platform directory (e.g. `upwork/`) — they're marked
  `AUTO-GENERATED` and get overwritten.
- To add a new platform namespace, add an entry to the `PLATFORMS` array in
  `build-platform-pages.js`, then run `node build-platform-pages.js` and commit the generated
  output.
- After editing any top-level source page or `resume.json`, re-run
  `node build-platform-pages.js` so platform mirrors stay in sync, and commit the regenerated
  files alongside the source change.
- The standalone `no-contact/` page is intentionally **not** mirrored per-platform: for a
  platform whose whole namespace already strips contact info (e.g. `upwork/`), a nested
  `.../no-contact/` page would be identical to `.../resume/` — redundant. If a future platform
  needs contact info kept, set `stripContact: false` for it instead.

## CVP / EIP content policy
Every claim in `cvp/index.html` and `eip/index.html` must trace back to a specific fact in
`resume.json` (or its `x_summaryBullets`/highlights) — these are marketing-shaped documents,
which makes fabricated or exaggerated claims easy to introduce by accident. Don't inflate
seniority (e.g. don't imply an executive/management title Jacob didn't hold) — "Executive
Impact Profile" is the requested document genre name, not a claim about org rank. When
`resume.json` changes in a way that affects a claim used in either page (a metric, a bullet,
an employer attribution), update the corresponding page in the same change.

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
- After editing `resume.json` or any top-level source page (`index.html`, `cover-letter/`,
  `cvp/`, `eip/`), run `node build-platform-pages.js` to refresh the platform mirrors (see
  below) and commit the regenerated files.
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
