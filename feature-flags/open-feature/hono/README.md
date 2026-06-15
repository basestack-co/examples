# Hono API example

A tiny Hono server that resolves feature flags via the BaseStack server provider and re-exposes them through JSON routes. This mirrors the architecture shown in your existing `/flags` service.

## Setup

```bash
cd examples/hono
cp .env.example .env.local # replace with your project/environment keys
bun install
bun run dev
```

Environment variables:

```
BASESTACK_PROJECT_KEY=proj_xxx
BASESTACK_ENVIRONMENT_KEY=env_xxx
```

## Highlights

- Initializes the server provider once, caches it, and exposes the OpenFeature client across routes.
- Adds a `/flags/:slug` route that returns the evaluation details for any flag.
- Demonstrates mixing the evaluations with request-scoped context (e.g., `targetingKey`).
