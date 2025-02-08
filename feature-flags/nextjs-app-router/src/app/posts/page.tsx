"use client";

import { useState, useEffect, useContext } from "react";
// Feature Flags Context
import { FeatureFlagsContext } from "@/libs/feature-flags";
import { Flag } from "@basestack/flags-js";

export default function Posts() {
  const [flags, setFlags] = useState<Flag[]>([]);
  const context = useContext(FeatureFlagsContext);

  useEffect(() => {
    async function fetchAllFlags() {
      const data = await context?.client.getAllFlags();
      setFlags(data?.flags ?? []);
    }
    fetchAllFlags();
  }, []);

  if (!flags) return <div>Loading...</div>;

  return (
    <ul>
      {flags.map((flag, index) => {
        return (
          <li key={index}>{`Slug: ${flag.slug} Enabled: ${flag.enabled}`}</li>
        );
      })}
    </ul>
  );
}
