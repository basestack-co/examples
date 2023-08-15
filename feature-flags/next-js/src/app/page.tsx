"use client";

// BaseStack Flags SDK
import { useFlag } from "@basestack/flags-react";

const Header = () => {
  const { enabled } = useFlag("header");

  if (!enabled) return null;

  return (
    <header className="App-header">
      <h1>Header</h1>
    </header>
  );
};

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <p>BaseStack React Flags SDK</p>
      </section>
    </main>
  );
}
