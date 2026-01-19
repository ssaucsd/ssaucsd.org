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

This is the SSA at UCSD website - an Astro 5 static site with React integration, Tailwind CSS 4, and Supabase backend.

**Tech Stack:**
- **Framework:** Astro 5 with React integration for interactive components
- **Styling:** Tailwind CSS 4 (via Vite plugin)
- **Backend:** Supabase (PostgreSQL database with real-time capabilities)
- **Type Safety:** TypeScript in strict mode
- **SEO:** Sitemap generation + Schema.org structured data

**Project Structure:**
- `src/pages/` - File-based routing; `.astro` files become routes; `[id].astro` for dynamic routes
- `src/layouts/` - Page wrapper components (Layout.astro with SEO, meta tags)
- `src/components/` - Mixed component types:
  - `.astro` files for static components (BoardMemberCard, EventCard, etc.)
  - `.tsx` files for interactive React components (Navbar, ThemeToggle, Hero, etc.)
- `src/lib/` - Utility modules:
  - `supabase.ts` - Supabase client + data fetching functions (getEvents, getEventById, etc.)
  - `schemas.ts` - Schema.org structured data generators for SEO
  - `utils.ts` - General utilities (cn for class merging, etc.)
- `src/data/` - Static data files (board.ts with board member information)
- `src/assets/` - Images and assets processed by Astro's image optimization
- `src/styles/` - Global styles (global.css)
- `public/` - Static files served as-is

**Key Patterns:**
- Astro components use frontmatter (`---`) for imports and server-side logic
- React components are used for client-side interactivity (add `client:load` directive)
- Supabase queries run at build time for static generation
- Environment variables for Supabase: `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`
- Tailwind utilities combined with `cn()` from `src/lib/utils.ts`
- Schema.org structured data injected via `<script type="application/ld+json">`
- Image domains whitelisted in `astro.config.mjs` for Supabase storage
