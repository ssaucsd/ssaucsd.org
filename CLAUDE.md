# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SSA (Student Services Association) at UCSD website built with Next.js 16, using the App Router with React 19.

## Commands

```bash
pnpm dev              # Start dev server with Turbo
pnpm build            # Production build
pnpm check            # Run ESLint + TypeScript check
pnpm lint             # ESLint only
pnpm typecheck        # TypeScript check only
pnpm format:check     # Check Prettier formatting
pnpm format:write     # Fix Prettier formatting
```

## Architecture

### Data Layer

- **Supabase** is the sole database layer. Client utilities in `src/utils/supabase/` for browser/server access.
- **Types** are generated from Supabase in `src/db/database.types.ts`.
- **Queries** in `src/queries.ts` use the `"use cache"` directive with `cacheLife("minutes")` for Next.js caching.
- Events are read-only from the frontend; mutations happen in Supabase dashboard.

### UI Components

- `src/components/ui/`: Reusable shadcn/ui components
- `src/app/_components/`: Page-specific components (private to route via underscore prefix)
- Uses `cn()` utility from `src/lib/utils.ts` for Tailwind class merging

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Figtree font via `next/font`
- Theme support via `next-themes` (ThemeProvider in layout)

### Path Aliases

`@/*` maps to `./src/*`

## Environment Variables

Required:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`: Supabase anon key

## Pre-commit Hooks

Husky + lint-staged runs on commit: Prettier formatting, ESLint, and TypeScript checking.
