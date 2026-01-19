# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server at localhost:4321
bun build            # Build production site to ./dist/
bun preview          # Preview production build locally
bun astro check      # Run TypeScript diagnostics
```

## Architecture

This is an Astro 5 static site using the basics template with bun as the package manager.

**Project Structure:**
- `src/pages/` - File-based routing (`.astro` files become routes)
- `src/layouts/` - Page wrapper components (currently `Layout.astro`)
- `src/components/` - Reusable Astro components
- `src/assets/` - Images and assets processed by Astro
- `public/` - Static files served as-is (favicon, etc.)

**Key Patterns:**
- Astro components use frontmatter (`---`) for imports and server-side logic
- Styles are scoped to components by default via `<style>` tags
- TypeScript is configured in strict mode via `astro/tsconfigs/strict`
