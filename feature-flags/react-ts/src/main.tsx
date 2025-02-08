import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Feature Flags
import FeatureFlagsProvider from "./libs/feature-flags";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeatureFlagsProvider
      config={{
        baseURL: import.meta.env.VITE_FEATURE_FLAGS_BASE_URL,
        projectKey: import.meta.env.VITE_FEATURE_FLAGS_PROJECT_KEY!,
        environmentKey: import.meta.env.VITE_FEATURE_FLAGS_ENVIRONMENT_KEY!,
      }}
    >
      <App />
    </FeatureFlagsProvider>
  </StrictMode>
);
