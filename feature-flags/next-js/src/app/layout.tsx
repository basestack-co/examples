"use client";

// BaseStack Flags SDK
import FlagsJS from "@basestack/flags-js-sdk";
import { FlagsProvider } from "@basestack/flags-react-sdk";

const sdk = new FlagsJS({
  apiUrl: process.env.NEXT_PUBLIC_BASESTACK_API_URL!,
  projectKey: process.env.NEXT_PUBLIC_BASESTACK_PROJECT_KEY!,
  envKey: process.env.NEXT_PUBLIC_BASESTACK_ENVIRONMENT_KEY!,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FlagsProvider
          sdk={sdk}
          onSuccessfulInit={() => console.log("Successful Init FlagsJS SDK")}
        >
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}
