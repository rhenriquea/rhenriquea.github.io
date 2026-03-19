# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Rafael Almeida (rhenriquea.github.io). The site is a static HTML portfolio with a retro synthwave/VHS aesthetic, deployed to GitHub Pages.

## Current State

The repo is transitioning away from a React/CRA-based app to static HTML files. The old React source (`src/`, most of `public/`) has been deleted from the working tree. The current site lives as standalone HTML files in `public/`.

- `public/index_v1.html` — v1 portfolio (single-page, retro CRT/synthwave theme)
- `public/index_v2.html` — v2 portfolio (alternative design iteration)

Both use **Tailwind CSS via CDN** (no build step needed for the HTML itself) with Google Fonts (Inter, Newsreader, Space Grotesk, Monoton) and Material Symbols.

## Build & Deploy

- **Package manager:** Yarn (Berry, with `nodeLinker: node-modules`)
- **Install:** `yarn install` (use `YARN_IGNORE_NODE=1` if on a different Node version than 16.19.1)
- **Build:** `yarn run build`
- **CI on PRs:** `yarn test` and `yarn lint` run via GitHub Actions
- **Deploy:** Pushes to `master` trigger `.github/workflows/publish-gh-pages.yml`, which builds and deploys to the `gh-pages` branch using `peaceiris/actions-gh-pages`

Note: `package.json` currently only has name/version — build/test/lint scripts are not yet defined for the new static HTML approach. The CI workflows reference these scripts and will need updating.

## Design System

The Tailwind config in `index_v2.html` (and v1) defines a Material Design 3-inspired dark color palette with custom semantic tokens (e.g., `surface`, `on-surface`, `primary-container`). Key accent colors:
- Cyan `#00f0ff` — primary/neon
- Pink `#ff2d7b` — secondary/accent
- Yellow `#f8a826` — tertiary/highlight

Custom CSS effects: CRT scanlines, perspective grid, chrome text gradients, starfield backgrounds, VHS tape aesthetics.
