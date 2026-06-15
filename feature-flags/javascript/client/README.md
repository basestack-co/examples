# JavaScript client example

Browser-side sample using `@basestack/flags-js` with Vite and Bun.

## Stack

- **Runtime / package manager:** Bun
- **Bundler:** Vite
- **SDK:** `@basestack/flags-js`

## What it does

A minimal single-page app that exercises the JavaScript SDK in the browser:

- Fetches a flag with `getFlag("initiative_overview")`
- Loads preview flags with `getPreviewFlags()`
- Submits sample preview feedback via `submitPreviewFeedback()` (including optional `metadata`)
- Syncs code references via `submitCodeReferences()` (requires a project-scoped API token)

See `src/main.ts` for the full implementation.

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Update the `FlagsSDK` constructor in `src/main.ts`:

```ts
const sdk = new FlagsSDK({
  baseURL: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
  apiKey: "your-project-api-token", // required for submitCodeReferences
});
```

## Running

```bash
cd feature-flags/javascript/client
bun install
bun run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

### Production build

```bash
bun run build
bun run preview
```