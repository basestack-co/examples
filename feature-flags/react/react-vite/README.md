# React + Vite example

Client-side React sample using `@basestack/flags-react` with Vite and Bun.

## Stack

- **Framework:** React 19
- **Runtime / package manager:** Bun
- **Bundler:** Vite
- **SDK:** `@basestack/flags-react`
- **Port:** 4004 (dev), 4173 (preview)

## What it does

Demonstrates the React SDK in a SPA:

- Preloads flags on startup with `fetchFlags()` from `@basestack/flags-react/server`
- Wraps the app in `FlagsProvider` with `initialFlags` and fallback `preload`
- Reads a flag in a component with `useFlag("header")`, including `enabled`, `payload`, `isLoading`, and `refresh()`

Key files:

- `src/flagsConfig.ts` — SDK credentials
- `src/main.tsx` — bootstrap and provider setup
- `src/App.tsx` — `useFlag` usage

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Edit `src/flagsConfig.ts`:

```ts
export const flagsConfig: SDKConfig = {
  baseURL: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
};
```

## Running

```bash
cd feature-flags/react/react-vite
bun install
bun run dev
```

Open [http://localhost:4004](http://localhost:4004).

### Production build

```bash
bun run build
bun run preview
```

Preview runs on [http://localhost:4173](http://localhost:4173).