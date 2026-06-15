import type { Flag } from "@basestack/flags-react";
import { FlagsProvider } from "@basestack/flags-react/client";
import { fetchFlags } from "@basestack/flags-react/server";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { flagsConfig } from "./flagsConfig";

async function bootstrap() {
  const container = document.getElementById("root");

  if (!container) {
    throw new Error("Root container #root was not found.");
  }

  // Optionally preload flags before rendering
  // This reduces loading states and improves initial render performance
  let initialFlags: Flag[] = [];

  try {
    initialFlags = await fetchFlags(flagsConfig);
  } catch (error) {
    console.error("Failed to preload flags", error);
    // App will still work, flags will be fetched on-demand
  }

  const root = createRoot(container);

  root.render(
    <StrictMode>
      <FlagsProvider
        config={flagsConfig}
        initialFlags={initialFlags}
        preload={initialFlags.length === 0}
      >
        <App />
      </FlagsProvider>
    </StrictMode>,
  );
}

void bootstrap();
