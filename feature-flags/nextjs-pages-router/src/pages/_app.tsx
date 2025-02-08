import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Feature Flags
import FeatureFlagsProvider from "@/libs/feature-flags";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FeatureFlagsProvider
      config={{
        baseURL: process.env.NEXT_PUBLIC_FEATURE_FLAGS_BASE_URL,
        projectKey: process.env.NEXT_PUBLIC_FEATURE_FLAGS_PROJECT_KEY!,
        environmentKey: process.env.NEXT_PUBLIC_FEATURE_FLAGS_ENVIRONMENT_KEY!,
      }}
    >
      <Component {...pageProps} />
    </FeatureFlagsProvider>
  );
}
