# Flags CLI example

React + Vite sample project designed for `@basestack/flags-cli` to scan and sync code references.

## Stack

- **Framework:** React 19
- **Bundler:** Vite
- **Packages:** `@basestack/flags-react`, `@basestack/flags-cli`
- **Port:** Vite default (5173)

## What it does

Provides a realistic frontend codebase for the CLI to discover flag usage:

- **`useFlag("initiative_overview")`** in `src/App.tsx`
- Commented `<Feature slug="marketing-callout">` wrapper (uncomment to add more scan targets)
- **`src/flagsConfig.ts`** — reads credentials from `VITE_*` environment variables
- **`.flagsrc`** — CLI configuration (project key, environment key, API URL, API key)

The app itself renders flag state in the browser. The main purpose is pairing with the CLI to push code references back to Basestack.

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API and a project-scoped API key (for code-reference sync)

## Configuration

### App runtime (`.env`)

```bash
VITE_FEATURE_FLAGS_BASE_URL="http://localhost:4000/v1"
VITE_FEATURE_FLAGS_PROJECT_KEY="your-project-key"
VITE_FEATURE_FLAGS_ENVIRONMENT_KEY="your-environment-key"
```

### CLI (`.flagsrc`)

```json
{
  "projectKey": "your-project-key",
  "environmentKey": "your-environment-key",
  "apiUrl": "http://localhost:4000/v1",
  "apiKey": "your-project-api-token"
}
```

## Running the app

```bash
cd feature-flags/flags-cli/vite-react
bun install
bun run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Using the CLI

From the same directory:

```bash
# Show CLI help
bun run cli:help

# Scan this project and sync code references to Basestack
bun run cli:code-refs

# Run the CLI directly
bun run cli
```

The `code-refs` command walks the source tree, finds `useFlag` and `<Feature>` usages, and reports them to the Basestack API using the credentials in `.flagsrc`.

### Production build

```bash
bun run build
bun run preview
```