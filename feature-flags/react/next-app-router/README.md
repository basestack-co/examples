# Next.js App Router example

Full-stack React sample using `@basestack/flags-react` with the Next.js 16 App Router.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Runtime / package manager:** Bun
- **SDK:** `@basestack/flags-react`, `@basestack/flags-wc` (via modals provider)
- **Port:** 4001

## What it does

Shows several App Router integration patterns:

### Home page (`app/page.tsx`)

- Client-side `useFlag("initiative_overview")` with typed payload
- `useFeatureFlagModals()` for preview and feedback modals
- Conditional `<Feature slug="initiative_overview">` wrapper

### Root layout (`app/layout.tsx`)

- Server-side `fetchFlags()` in a React Server Component
- `FlagsProvider` + `FeatureFlagModalsProvider` via `app/Providers.tsx`
- `FlagsHydrationScript` to hydrate pre-fetched flags on the client

### Server functions (`app/server-functions/`)

- Server Component that lists flags from `fetchFlags()`
- Server Action (`getHeaderFlagAction`) calling `fetchFlag()` from `@basestack/flags-react/server`

### API route (`app/api/flags/route.ts`)

- `GET /api/flags` returns all flags as JSON

Key config files:

- `app/flags-config.ts` — SDK credentials
- `app/flags-wc-config.ts` — labels and theme for preview/feedback modals

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)
- `@basestack/flags-wc` installed (pulled in transitively by `@basestack/flags-react` for modal support)

## Configuration

Edit `app/flags-config.ts` with your project and environment keys.

Modal copy and theme can be customized in `app/flags-wc-config.ts`.

## Running

```bash
cd feature-flags/react/next-app-router
bun install
bun run dev
```

Open [http://localhost:4001](http://localhost:4001).

Other routes:

- [http://localhost:4001/server-functions](http://localhost:4001/server-functions) — server actions demo
- [http://localhost:4001/api/flags](http://localhost:4001/api/flags) — flags API

### Production

```bash
bun run build
bun run start
```