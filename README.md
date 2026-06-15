![Basestack Pattern Background](https://i.imgur.com/Cund9sW.jpg)

# Basestack Platform Examples

Runnable sample applications that show how to integrate Basestack feature flags across frameworks, runtimes, and SDKs. Each example is self-contained — pick the stack that matches your project, install dependencies, and run it locally.

## Repository layout

Examples are grouped by product area under the repository root. Today the collection lives entirely under `feature-flags/`, organized by integration approach:

```
examples/
└── feature-flags/
    ├── javascript/          # @basestack/flags-js (framework-agnostic)
    ├── react/               # @basestack/flags-react
    ├── vercel-flags/        # Vercel Flags SDK + Basestack adapter
    ├── open-feature/        # OpenFeature + Basestack provider
    ├── web-components/      # @basestack/flags-wc (preview & feedback modals)
    └── flags-cli/           # @basestack/flags-cli (code reference scanning)
```

Within each folder, every subdirectory is a complete, runnable project with its own `package.json`.

## How to run an example

1. **Choose an example** from the table below (or browse `feature-flags/` by SDK and framework).
2. **Change into that directory** — for example:
   ```bash
   cd feature-flags/react/react-vite
   ```
3. **Install dependencies** (most examples use [Bun](https://bun.sh)):
   ```bash
   bun install
   ```
4. **Start the dev server**:
   ```bash
   bun run dev
   ```
5. **Point credentials at your Basestack project** — each example ships with placeholder project/environment keys. Replace them in the relevant config file (see [Configuration](#configuration)) with your own values, or set environment variables where noted.

Examples do not share a root workspace or lockfile. Install and run them independently.

## What's included

### JavaScript SDK (`@basestack/flags-js`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| Browser client | `feature-flags/javascript/client` | Vite + TypeScript | Vite default (5173) | `getFlag`, `getPreviewFlags`, `submitPreviewFeedback`, `submitCodeReferences` |
| Server API | `feature-flags/javascript/server` | Hono + Bun | 8080 | Server-side flag evaluation, preview flags, feedback, and code-reference endpoints |
| Vue | `feature-flags/javascript/vue` | Vue 3 + Vite | Vite default (5173) | `FlagsSDK` in a Vue composition API app |

### React SDK (`@basestack/flags-react`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| React + Vite | `feature-flags/react/react-vite` | React 19 + Vite | 4004 | `FlagsProvider`, `useFlag`, server-side `fetchFlags` bootstrap |
| Next.js App Router | `feature-flags/react/next-app-router` | Next.js 16 | 4001 | Server `fetchFlags`, `FlagsHydrationScript`, `useFlag`, `<Feature>`, preview/feedback modals |
| Next.js Pages Router | `feature-flags/react/next-pages-router` | Next.js 16 | 4002 | `getServerSideProps` + `fetchFlags`, client `useFlag` via provider |

### Vercel Flags SDK (`@basestack/vercel-flags-sdk-adapter`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| Next.js App Router | `feature-flags/vercel-flags/next-app-router` | Next.js 16 | 3000 | `flag()` definitions with a Basestack adapter, server-side evaluation |
| Next.js Pages Router | `feature-flags/vercel-flags/next-pages-router` | Next.js 16 | 3000 | Pages Router `getServerSideProps` with `headers`/`cookies` wiring for the Vercel Flags SDK |

### OpenFeature (`@basestack/openfeature-provider`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| React | `feature-flags/open-feature/react` | React 19 + Vite | Vite default (5173) | Web provider, `OpenFeatureProvider`, `useFlag`, `useBooleanFlagValue` |
| Hono server | `feature-flags/open-feature/hono` | Hono + Bun | 5555 | Server provider, targeting context, `getObjectDetails` |

### Web components (`@basestack/flags-wc`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| Preview & feedback modals | `feature-flags/web-components/vite-react` | React 19 + Vite | Vite default (5173) | `registerFeatureFlagComponents`, `<feature-flag-preview-modal>`, `<feature-flag-feedback-modal>` |

Copy `.env.example` to `.env` and set `VITE_API_ENDPOINT`, `VITE_PROJECT_KEY`, and `VITE_ENVIRONMENT_KEY` for live data.

### Flags CLI (`@basestack/flags-cli`)

| Example | Path | Stack | Port | Demonstrates |
| --- | --- | --- | --- | --- |
| Code reference scanning | `feature-flags/flags-cli/vite-react` | React 19 + Vite | Vite default (5173) | Sample `useFlag` / `<Feature>` usage for the CLI to scan; run `bun run cli:code-refs` to sync references |

## Configuration

Most examples assume a local Basestack API at `http://localhost:4000/v1`. Update the `baseURL` / `endpoint` / `apiUrl` in each example's config file if your API runs elsewhere.

| Integration | Where to set credentials |
| --- | --- |
| `@basestack/flags-js` | Inline in source (`FlagsSDK` constructor) or `VITE_*` env vars for the client example |
| `@basestack/flags-react` | `flags-config.ts` / `flagsConfig.ts` in each React example |
| Vercel Flags adapter | `app/flags.ts` or `libs/flags.ts` |
| OpenFeature provider | Provider setup in `main.tsx` or `server.ts` |
| Web components | `.env` file (`VITE_API_ENDPOINT`, `VITE_PROJECT_KEY`, `VITE_ENVIRONMENT_KEY`) |

For the Vercel Flags Pages Router example, also set:

```bash
export BASESTACK_PROJECT_KEY="pk_live_..."
export BASESTACK_ENVIRONMENT_KEY="env_prod_..."
export FLAGS_SECRET="..."
```

Code-reference and feedback examples that call authenticated APIs need a project-scoped API token (`apiKey` in the JS SDK, or the equivalent in your environment).

## Prerequisites

- [Bun](https://bun.sh) (recommended — used by most example scripts)
- Node.js 18.18+ (required by the Vercel Flags Next.js examples)
- A running Basestack API and project credentials (examples include placeholder keys for structure; swap in your own to fetch real flag data)

## Contributing

Found a bug or want to add an example? Open an issue or pull request. Issue templates are in `.github/ISSUE_TEMPLATE/`.

## License

MIT — see [LICENSE](LICENSE).