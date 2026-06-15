# JavaScript server example

Server-side sample using `@basestack/flags-js` with Hono and Bun.

## Stack

- **Runtime / package manager:** Bun
- **Framework:** Hono
- **SDK:** `@basestack/flags-js`
- **Port:** 8080

## What it does

A small HTTP API that evaluates flags on the server and exposes them as JSON routes:

| Route | Method | SDK call |
| --- | --- | --- |
| `/` | GET | `getFlag("initiative_overview")` |
| `/preview` | GET | `getPreviewFlags()` |
| `/preview/feedback` | POST | `submitPreviewFeedback(...)` |
| `/code-refs` | POST | `submitCodeReferences(...)` |

See `src/index.ts` for route handlers and SDK setup.

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Update the `FlagsSDK` constructor in `src/index.ts` with your project key, environment key, and API token (needed for code-reference sync).

## Running

```bash
cd feature-flags/javascript/server
bun install
bun run dev
```

The server starts on `http://localhost:8080` with file watching enabled.

### Testing the routes

```bash
curl http://localhost:8080
curl http://localhost:8080/preview
curl -X POST http://localhost:8080/preview/feedback
curl -X POST http://localhost:8080/code-refs
```

### Production

```bash
bun run start
```