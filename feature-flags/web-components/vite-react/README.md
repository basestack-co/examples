# Web components example

React + Vite sample demonstrating `@basestack/flags-wc` preview and feedback modals as Stencil web components.

## Stack

- **Framework:** React 19
- **Bundler:** Vite
- **Package:** `@basestack/flags-wc`
- **Port:** 5173

## What it does

Registers Basestack feature-flag web components and drives them from a React app:

- **`registerFeatureFlagComponents()`** — loads the Stencil bundle on mount
- **`<feature-flag-preview-modal>`** — browse and enable feature previews from the Basestack preview API
- **`<feature-flag-feedback-modal>`** — collect mood, rating, and text feedback for a flag (with optional `metadata`)

Buttons in `src/App.tsx` open each modal programmatically. Without valid credentials the modals fall back to mock data.

## Prerequisites

- [Bun](https://bun.sh) or npm
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

```bash
VITE_API_ENDPOINT="http://localhost:4000/v1"
VITE_PROJECT_KEY="your-project-key"
VITE_ENVIRONMENT_KEY="your-environment-key"
```

## Running

```bash
cd feature-flags/web-components/vite-react
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173).

Click **Open feature preview modal** or **Leave feedback for "Preview Notes"** after components finish registering.

### Production build

```bash
bun run build
bun run preview
```