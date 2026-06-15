# Next.js Pages Router example

Full-stack React sample using `@basestack/flags-react` with the Next.js 16 Pages Router.

## Stack

- **Framework:** Next.js 16 (Pages Router) + React 19
- **Runtime / package manager:** Bun
- **SDK:** `@basestack/flags-react`
- **Port:** 4002

## What it does

Demonstrates server-side flag fetching combined with client-side hooks:

- **`getServerSideProps`** in `pages/index.tsx` calls `fetchFlags(flagsConfig)` and passes flags as page props
- **`pages/_app.tsx`** wraps every page in `FlagsProvider`, seeding it with server-fetched `initialFlags`
- **`useFlag("header")`** on the home page reads the flag on the client (hydrated from server data or fetched on demand)
- **`pages/api/flags.ts`** exposes a `GET /api/flags` endpoint for client-side refresh

Key files:

- `flags-config.ts` — SDK credentials
- `pages/index.tsx` — SSR flag fetch + client hook
- `pages/_app.tsx` — global provider

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Edit `flags-config.ts`:

```ts
export const flagsConfig: SDKConfig = {
  baseURL: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
};
```

## Running

```bash
cd feature-flags/react/next-pages-router
bun install
bun run dev
```

Open [http://localhost:4002](http://localhost:4002).

Test the API route:

```bash
curl http://localhost:4002/api/flags
```

### Production

```bash
bun run build
bun run start
```