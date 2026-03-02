# AGENTS.md

## Project Purpose
This repository hosts a single-page GitHub Pages resume site for `resume.jacobnollette.com`.

## Source of Truth
- Resume content: `resume.md`
- Site shell: `index.html`
- Styling: `styles.css`
- Deployment workflow: `.github/workflows/pages.yml`

## Editing Rules
- Keep `resume.md` as the primary editable content file.
- Do not hardcode resume text in `index.html`; it should continue loading `resume.md`.
- Preserve ATS-friendly keywords when revising summary and competency sections.
- Keep changes static-site compatible (no build system required).

## Deployment
- GitHub Actions deploys on push to `main` via `.github/workflows/pages.yml`.
- GitHub Pages should be configured to use `GitHub Actions` as the source.
- Custom domain target is `resume.jacobnollette.com` (ensure DNS and `CNAME` file are in place if needed).

## Quality Checks
- Verify links and markdown rendering after significant content edits.
- Keep layout readable on both desktop and mobile.
- Ensure print output remains clean for PDF export.
