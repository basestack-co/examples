# Vue example

Vue 3 sample using `@basestack/flags-js` with Vite and Bun.

## Stack

- **Framework:** Vue 3 (Composition API)
- **Runtime / package manager:** Bun
- **Bundler:** Vite
- **SDK:** `@basestack/flags-js`
- **Port:** 5175

## What it does

On mount, the app creates a `FlagsSDK` instance and fetches the `header` flag. The template shows whether the flag is enabled and renders its payload as JSON.

See `src/App.vue` for the SDK setup and flag fetch logic.

## Prerequisites

- [Bun](https://bun.sh)
- A running Basestack API (defaults to `http://localhost:4000/v1`)

## Configuration

Update the `FlagsSDK` constructor in `src/App.vue`:

```ts
const sdk = new FlagsSDK({
  baseURL: "http://localhost:4000/v1",
  projectKey: "your-project-key",
  environmentKey: "your-environment-key",
});
```

## Running

```bash
cd feature-flags/javascript/vue
bun install
bun run dev
```

Open [http://localhost:5175](http://localhost:5175).

### Production build

```bash
bun run build
bun run preview
```