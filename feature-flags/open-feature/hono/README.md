# OpenFeature — Hono server example

Server-side sample using the [OpenFeature](https://openfeature.dev) server SDK with the `@basestack/openfeature-provider` in a Hono API.

## Stack

- **Runtime / package manager:** Bun
- **Framework:** Hono
- **Packages:** `@openfeature/server-sdk`, `@basestack/openfeature-provider`
- **Port:** 5555

## What it does

Bootstraps the Basestack server provider once at startup and exposes flag evaluations over HTTP:

- Registers `createBasestackServerProvider(...)` as the global OpenFeature provider
- Creates a named OpenFeature client (`YOUR_APP_NAME`)
- **`GET /experiments/header`** — evaluates the `header` flag with request-scoped targeting context (`x-user-id` header, falling back to `"anonymous"`)

Returns JSON with the flag payload, enabled state, and metadata.

See `src/server.ts` for provider setup and the route handler.

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Edit the provider options in `src/server.ts`:

```ts
const provider = createBasestackServerProvider({
  apiUrl: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
  prefetch: true,
  refreshIntervalMs: 30_000,
});
```

The `dev` and `start` scripts load variables from `.env.local` if present. You can also set:

```bash
BASESTACK_PROJECT_KEY=your-project-key
BASESTACK_ENVIRONMENT_KEY=your-environment-key
```

## Running

```bash
cd feature-flags/open-feature/hono
bun install
bun run dev
```

The server listens on `http://localhost:5555`.

### Testing

```bash
# Anonymous evaluation
curl http://localhost:5555/experiments/header

# With targeting context
curl -H "x-user-id: user-123" http://localhost:5555/experiments/header
```

### Production

```bash
bun run start
```