# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@potidev/react-vulpix-pack` is a React component library built on top of [shadcn/ui](https://ui.shadcn.com/), Radix UI primitives, and Tailwind CSS v4. It ships source TypeScript directly as the dist (no bundling step), and consumers must configure Tailwind to scan `node_modules/@potidev/react-vulpix-pack`.

## Commands

```bash
# Build (clean → copy src to dist → fix path aliases)
npm run build

# Start Storybook dev server (port 6006)
npm run storybook

# Run tests (Storybook stories via Vitest + Playwright/Chromium)
npx vitest

# Rebuild Tailwind CSS output
npm run tailwind-build
npm run tailwind-watch   # watch mode

# Bump version (updates package.json via scripts/set-version.js)
npm run version

# Publish (runs build first automatically)
npm publish
```

## Build Pipeline

The build does **not** use tsup (that config is unused). `npm run build` (via `build.js`) runs three steps:

1. `clear-build` — deletes `dist/`
2. `copy-src-to-dist` — copies `src/` to `dist/`, skipping `*.stories.tsx` / `*.stories.ts` files
3. `tscpaths` — rewrites `@/*` alias imports to relative paths in `dist/`

TypeScript compilation (`tsc --emitDeclarationOnly`) is **not** part of the current build — the library ships `.ts` / `.tsx` source files directly inside `dist/`.

## Architecture

```
src/
  index.ts          # root barrel: re-exports components, contexts, hooks, kit, lib, types, utils
  components/       # low-level shadcn/Radix wrappers (Accordion, Button, Input, Table, …)
  kit/              # higher-level composite components built from primitives
    Alert/
    Button/
    Card/
    Information/
    Inputs/
      InputCurrency/
    Link/
    Stats/
      SimpleChartCard/
      SimpleStatsCard/
      StatisticCard/
  contexts/         # React context providers (ConfirmationDialog, LoaderOverlayProvider, MessageDialog)
  hooks/            # custom hooks (useMobile, useToast, useTableLimitStorage, next/)
  lib/              # shared utilities (cn helper, etc.)
  types/            # shared TypeScript type definitions
  utils/            # general-purpose utilities
  styles/css/       # global.css (Tailwind entry) and compiled tailwind.css
```

**Key conventions:**
- Path alias `@/*` maps to `src/*` (configured in `tsconfig.json`). Use `@/components/Button` style imports inside the library.
- Styling: Tailwind CSS v4 + `class-variance-authority` (CVA) for variant-based component APIs, `clsx` + `tailwind-merge` (`cn`) for conditional class names.
- Component stories live alongside the component in `*.stories.tsx` files and are excluded from the dist.
- Tests run via Vitest's Storybook integration: each story is a test case rendered in a headless Chromium browser.

## Adding a New Component

1. Create `src/components/MyComponent/index.tsx` (and `MyComponent.stories.tsx` if adding a story).
2. Export it from `src/components/index.ts`.
3. For a higher-level composite, place it under `src/kit/` and export from `src/kit/index.ts`.
