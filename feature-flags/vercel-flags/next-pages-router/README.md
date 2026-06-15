# Vercel Flags — Next.js Pages Router example

Sample using the [Vercel Flags SDK](https://flags-sdk.dev) with the `@basestack/vercel-flags-sdk-adapter` in a Next.js 16 Pages Router app.

## Stack

- **Framework:** Next.js 16 (Pages Router) + React 19
- **Runtime / package manager:** Bun (or Node.js 18.18+)
- **Packages:** `flags`, `@basestack/vercel-flags-sdk-adapter`, `@edge-runtime/cookies`
- **Port:** 3000 (Next.js default)
- **Bundler:** Webpack (`--webpack` flag in scripts)

## What it does

The Pages Router does not provide `headers()` / `cookies()` helpers the way the App Router does. This example shows how to pass the incoming request into flag evaluation:

- **`libs/flags.ts`** — Basestack adapter and `initiativeOverviewFlag` definition
- **`pages/index.tsx`** — `getServerSideProps` calls `initiativeOverviewFlag(req)`, passing the Next.js request so the Vercel Flags SDK can read headers and cookies

The home page renders whether the `initiative_overview` flag is enabled.

## Prerequisites

- Bun or Node.js 18.18+
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

### Basestack credentials

Edit `libs/flags.ts` with your endpoint, project key, and environment key, or set:

```bash
export BASESTACK_PROJECT_KEY="pk_live_..."
export BASESTACK_ENVIRONMENT_KEY="env_prod_..."
```

### Vercel Flags secret

```bash
export FLAGS_SECRET="$(node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))")"
```

## Running

```bash
cd feature-flags/vercel-flags/next-pages-router
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
bun run build
bun run start
```

> **Note:** Dev, build, and start scripts use the `--webpack` flag because the Pages Router integration relies on webpack-specific behavior for the Vercel Flags SDK.