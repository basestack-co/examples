# OpenFeature — React example

Client-side sample using the [OpenFeature](https://openfeature.dev) web SDK with the `@basestack/openfeature-provider` in a React + Vite app.

## Stack

- **Framework:** React 19
- **Bundler:** Vite
- **Packages:** `@openfeature/web-sdk`, `@openfeature/react-sdk`, `@basestack/openfeature-provider`
- **Port:** Vite default (5173)

## What it does

Initializes the Basestack web provider and evaluates flags through OpenFeature React hooks:

- **`src/main.tsx`** — creates `createBasestackWebProvider(...)`, registers it with `OpenFeature.setProvider()`, and wraps the app in `OpenFeatureProvider`
- **`src/App.tsx`** — reads `initiative_overview` with both `useFlag()` (full evaluation details) and `useBooleanFlagValue()` (boolean shorthand)

The provider prefetches flags on startup and refreshes every 30 seconds.

## Prerequisites

- [Bun](https://bun.sh) or npm
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Edit the provider options in `src/main.tsx`:

```ts
const provider = createBasestackWebProvider({
  apiUrl: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
  prefetch: true,
  refreshIntervalMs: 30_000,
});
```

## Running

```bash
cd feature-flags/open-feature/react
bun install
bun run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

### Production build

```bash
bun run build
bun run preview
```