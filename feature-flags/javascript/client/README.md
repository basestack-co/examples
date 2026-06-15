## Client Example (Vite + Bun)

This minimal Vite application uses Bun as the package manager/runtime to verify the SDK works in a browser environment.
It now demonstrates:

- `getFlag("header")`
- `getPreviewFlags()`
- `submitPreviewFeedback(...)` via a sample button click, including optional `metadata`
- `submitCodeReferences(...)` via a sample button click using `apiKey`

### Running

```bash
cd examples/client
bun install
bun run dev
```

Set `VITE_PROJECT_KEY`, `VITE_ENVIRONMENT_KEY`, and a project-scoped API token before starting the dev server if you want the code-refs example to authenticate against a real API.

### Production Build

```bash
bun run build
bun run preview
```

The dependency on `@basestack/flags-js` points to the workspace root via `link:../..`, so be sure to run `bun run build` at the root before trying the example so the `dist/` output exists.
