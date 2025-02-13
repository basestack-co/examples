import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Feature Flags
import FeatureFlagsProvider from "@/libs/feature-flags";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FeatureFlagsProvider
          config={{
            baseURL: process.env.NEXT_PUBLIC_FEATURE_FLAGS_BASE_URL,
            projectKey: process.env.NEXT_PUBLIC_FEATURE_FLAGS_PROJECT_KEY!,
            environmentKey:
              process.env.NEXT_PUBLIC_FEATURE_FLAGS_ENVIRONMENT_KEY!,
          }}
        >
          {children}
        </FeatureFlagsProvider>
      </body>
    </html>
  );
}
