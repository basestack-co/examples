import { initiativeOverviewFlag } from "./flags";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const showInitiativeOverview = await initiativeOverviewFlag();

  return (
    <main className="page">
      <section className="card muted">
        <h1>
          {showInitiativeOverview
            ? "New initiative overview experience"
            : "Default initiative overview experience"}
        </h1>
        <p>Powered by Basestack + Vercel Flags.</p>
      </section>
    </main>
  );
}
