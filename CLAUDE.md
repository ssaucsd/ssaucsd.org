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

### Database (Drizzle + Neon PostgreSQL)

```bash
pnpm db:generate      # Generate migrations from schema
pnpm db:migrate       # Run migrations
pnpm db:push          # Push schema changes directly
pnpm db:studio        # Open Drizzle Studio
```

## Architecture

### Data Layer

The project uses two database approaches:

- **Drizzle ORM** (`src/index.ts`, `src/queries.ts`): Primary ORM for PostgreSQL via Neon serverless. Schema in `src/db/schema.ts`, tables prefixed with `ssamembers_`.
- **Supabase** (`src/utils/supabase/`): Client utilities for browser/server Supabase access. Types in `src/db/database.types.ts`.

Server queries use the `"use cache"` directive with `cacheLife("minutes")` for Next.js caching.

### UI Components

- `src/components/ui/`: Reusable shadcn/ui components (Button, Card, DropdownMenu, NavigationMenu)
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

- `DATABASE_URL`: Neon PostgreSQL connection string
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`: Supabase anon key

## Pre-commit Hooks

Husky + lint-staged runs on commit: Prettier formatting, ESLint, and TypeScript checking.
