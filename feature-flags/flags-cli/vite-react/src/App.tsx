import { useFlag } from "@basestack/flags-react/client";

export default function App() {
  const { enabled, payload, isLoading } = useFlag("initiative_overview");

  if (isLoading) {
    return <div>Loading flag...</div>;
  }

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Basestack Flags CLI</p>
        <h1>Vite React example project</h1>
        <p className="lede">
          This app includes sample <code>useFlag()</code> hooks and{" "}
          <code>{`<Feature slug="..." />`}</code> usage so the built CLI can
          scan a realistic frontend codebase.
        </p>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2>Hook references</h2>
          <p>{enabled ? "initiative_overview is enabled." : "Disabled."}</p>
          <p>{JSON.stringify(payload)}</p>
        </article>

        {/* <Feature slug="marketing-callout">
          <article className="card accent">
            <h2>Component reference</h2>
            <p>marketing-callout is wrapped in a Feature component.</p>
          </article>
        </Feature> */}
      </section>
    </main>
  );
}
