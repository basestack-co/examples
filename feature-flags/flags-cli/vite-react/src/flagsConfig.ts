import type { SDKConfig } from "@basestack/flags-react";

export const flagsConfig: SDKConfig = {
  baseURL: import.meta.env.VITE_FEATURE_FLAGS_BASE_URL,
  projectKey: import.meta.env.VITE_FEATURE_FLAGS_PROJECT_KEY!,
  environmentKey: import.meta.env.VITE_FEATURE_FLAGS_ENVIRONMENT_KEY!,
};
