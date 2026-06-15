# Vercel Flags — Next.js App Router example

Sample using the [Vercel Flags SDK](https://flags-sdk.dev) with the `@basestack/vercel-flags-sdk-adapter` in a Next.js 16 App Router app.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Runtime / package manager:** Bun (or Node.js 18.18+)
- **Packages:** `flags`, `@basestack/vercel-flags-sdk-adapter`
- **Port:** 3000 (Next.js default)

## What it does

Defines Basestack-backed flags using the Vercel Flags `flag()` API and evaluates them in React Server Components:

- **`app/flags.ts`** — creates a Basestack adapter and exports `initiativeOverviewFlag`
- **`app/page.tsx`** — awaits `initiativeOverviewFlag()` in a Server Component to toggle page copy
- **`app/actions.ts`** — server action that re-evaluates the flag before processing a form
- **`app/api/runtime-flags/route.ts`** — `GET` endpoint returning the current flag value

The adapter maps Basestack flag state to a boolean via `resolveValue: (flag) => flag.enabled`.

## Prerequisites

- Bun or Node.js 18.18+
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

### Basestack credentials

Edit `app/flags.ts` with your endpoint, project key, and environment key.

### Vercel Flags secret

The Vercel Flags SDK requires a signing secret. Set it when running locally:

```bash
export FLAGS_SECRET="$(node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))")"
```

Optionally override Basestack keys via environment variables:

```bash
export BASESTACK_PROJECT_KEY="pk_live_..."
export BASESTACK_ENVIRONMENT_KEY="env_prod_..."
```

## Running

```bash
cd feature-flags/vercel-flags/next-app-router
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Test the runtime flags endpoint:

```bash
curl http://localhost:3000/api/runtime-flags
```

### Production

```bash
bun run build
bun run start
```