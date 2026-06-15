## Server Example (Hono + Bun)

This example verifies the SDK works in a server/Bun runtime by exposing Hono routes that call:

- `getFlag("header")`
- `getPreviewFlags()`
- `submitPreviewFeedback(...)`
- `submitCodeReferences(...)`

### Running

```bash
cd examples/server
bun install
PROJECT_KEY=xxx ENVIRONMENT_KEY=yyy API_KEY=zzz bun run dev
```

Then test:

```bash
curl http://localhost:8080
curl http://localhost:8080/preview
curl -X POST http://localhost:8080/preview/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "flagKey": "landing-preview",
    "mood": "HAPPY",
    "rating": 4,
    "description": "Example feedback from server route.",
    "metadata": {
      "source": "examples/server",
      "page": "/landing",
      "sessionId": "abc-123"
    }
  }'
curl -X POST http://localhost:8080/code-refs
```

### Notes

- Dependencies point to the local SDK via `link:../..`. Run `bun run build` from the repo root first so the `dist/` output is fresh.
- Update `src/index.ts` if you want to test other flag slugs or custom behavior.
