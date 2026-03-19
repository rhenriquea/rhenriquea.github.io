# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Rafael Almeida (rhenriquea.github.io). A React single-page app with a retro synthwave/VHS aesthetic, deployed to GitHub Pages.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite (outputs to `build/`)
- **Styling:** SCSS + Tailwind CSS 3 (with PostCSS + autoprefixer)
- **Linting:** ESLint with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins
- **Package manager:** Yarn (Berry, with `nodeLinker: node-modules`)
- **Node version:** 20

## Build & Deploy

- **Install:** `yarn install`
- **Dev server:** `yarn dev`
- **Build:** `yarn run build` (runs `tsc -b && vite build`)
- **Preview:** `yarn preview`
- **Lint:** `yarn lint`
- **Test:** `yarn test`
- **CI on PRs:** `yarn test` and `yarn lint` run via GitHub Actions (`.github/workflows/pr-test-and-lint.yml`)
- **Deploy:** Pushes to `master` trigger `.github/workflows/publish-gh-pages.yml`, which builds and deploys to the `gh-pages` branch using `peaceiris/actions-gh-pages`

## Project Structure

```
src/
├── main.tsx                # Entry point
├── App.tsx                 # Root component (composes all sections)
├── styles/
│   ├── index.scss          # Entry — Tailwind directives + partial imports
│   ├── _variables.scss     # Single source of truth for theme tokens
│   ├── _effects.scss       # CRT, starfield, chrome text, scrollbar, reveal
│   ├── _tracklist.scss     # Tracklist / job cards
│   ├── _education.scss     # Degree cards + certificate grid
│   ├── _konami.scss        # Konami overlay
│   └── _footer.scss        # Footer languages
├── components/
│   ├── Nav.tsx             # Fixed top navigation
│   ├── Hero.tsx            # Hero with typewriter effect
│   ├── Profile.tsx         # Photo, bio, coords, stats
│   ├── Tracklist.tsx       # Cassette header + expandable job cards
│   ├── Skills.tsx          # Poster-style skill cards
│   ├── ImpactTape.tsx      # VHS impact highlight cards
│   ├── Education.tsx       # Degrees + certificates
│   ├── Footer.tsx          # Contact info, links, languages
│   └── KonamiOverlay.tsx   # Easter egg overlay
├── hooks/
│   ├── useTypewriter.ts    # Cycling typewriter text
│   ├── useKonamiCode.ts    # Konami code detection
│   └── useScrollReveal.ts  # IntersectionObserver for reveal animations
└── data/
    └── jobs.ts             # Job entries (typed interface + array)
```

Legacy static HTML files (`public/index_v1.html`, `public/index_v2.html`, `public/index_v3.html`) are kept for reference but are not part of the built app.

## Code Conventions

### Components

Export components as const arrow functions using `React.FC`, with a default export:

```tsx
const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

export default MyComponent;
```

### Functions & Hooks

Export functions and hooks as const arrow functions:

```ts
export const useMyHook = () => {
  // ...
};

export const myHelper = (arg: string): number => {
  // ...
};
```

### General

- Prefer `const` arrow functions over `function` declarations for all exports
- Use TypeScript strict mode — no `any` types
- Keep components focused — one component per file
- Data arrays and interfaces live in `src/data/`
- Custom hooks live in `src/hooks/`
- **Avoid repeating patterns** — when multiple JSX elements share the same structure (e.g., a list of cards, nav links, stat boxes), extract the data into an array and use `.map()` instead of duplicating markup. If the repeated block is complex, extract it into its own component.
- **Separation of concerns** — don't let a single file concentrate multiple responsibilities. Keep data, logic, and presentation separate. Data arrays belong in `src/data/`, reusable logic in `src/hooks/`, and each component should own a single piece of UI. When a component grows to handle multiple concerns (e.g., fetching data, managing complex state, and rendering a large template), split it into smaller, focused modules.

## Styling

### Tailwind-first approach

**Always prefer Tailwind CSS utility classes over custom SCSS.** Only write custom SCSS when it is proven that Tailwind classes cannot achieve the desired result (e.g., complex multi-step animations, pseudo-element content, CSS effects with no Tailwind equivalent like `background-clip: text`).

Before writing custom SCSS, consider:
1. Can this be done with existing Tailwind utilities? (use them directly)
2. Can this be done by extending `tailwind.config.js`? (add a custom utility/color/animation there)
3. Only if neither works, write custom SCSS.

### Theme configuration

- **`tailwind.config.js`** is the central place for all theme configuration: colors, font families, border radii, animations, keyframes. Extend the theme here rather than scattering one-off values in JSX or SCSS.
- **`src/styles/_variables.scss`** mirrors the theme tokens as SCSS variables for use in custom SCSS that Tailwind can't handle. When adding a new token, add it to both `tailwind.config.js` and `_variables.scss` to keep them in sync.
- Never hardcode color values, font stacks, or breakpoints in component files or SCSS partials — always reference the central config.

### SCSS file organization

- `src/styles/index.scss` is the entry file — it contains the Tailwind directives (`@tailwind base/components/utilities`) and `@import`s all partials.
- Each concern gets its own partial (e.g., `_tracklist.scss`, `_education.scss`). When adding a new section that genuinely needs custom CSS, create a new `_partial.scss` and add it to `index.scss`.
- Every SCSS partial imports variables via `@use "variables" as *`.

### SCSS guidelines (for styles that can't be Tailwind)

- **Use SCSS variables** from `_variables.scss` — e.g., `$pink` not `#ff2d7b`, `$font-mono` not `"DM Mono", monospace`, `$breakpoint-md` not `768px`.
- **Use Sass features** — nesting, `&` parent selectors, `rgba($color, alpha)` with SCSS variables. Keep selectors shallow (max 3 levels deep).
- **Responsive breakpoints** use `$breakpoint-md` from variables in `@media` rules inside SCSS files. In JSX, use Tailwind's `md:` prefix.

## Design System

Tailwind config (`tailwind.config.js`) defines a Material Design 3-inspired dark color palette with custom semantic tokens (e.g., `surface`, `on-surface`, `primary-container`). Key accent colors:
- Cyan `#00f0ff` — primary/neon
- Pink `#ff2d7b` — secondary/accent
- Yellow `#f8a826` — tertiary/highlight

Custom visual effects in `src/styles/`: CRT scanlines, perspective grid, chrome text gradients, starfield backgrounds, VHS tape aesthetics.
