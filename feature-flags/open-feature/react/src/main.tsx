import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { OpenFeatureProvider } from "@openfeature/react-sdk";
import { OpenFeature, type Provider } from "@openfeature/web-sdk";
import { createBasestackWebProvider } from "@basestack/openfeature-provider/web";
import App from "./App.tsx";

const provider = createBasestackWebProvider({
  apiUrl: "http://localhost:4000/v1",
  projectKey: "cmnt0b9d200095i8o03sj6xb2",
  environmentKey: "cmnt0b9d4000b5i8okonh7wjs",
  prefetch: true,
  refreshIntervalMs: 30_000,
});

OpenFeature.setProvider(provider as unknown as Provider);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenFeatureProvider>
      <App />
    </OpenFeatureProvider>
  </StrictMode>,
);
