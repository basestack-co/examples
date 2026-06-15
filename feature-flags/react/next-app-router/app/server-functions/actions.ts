"use server";

import type { Flag } from "@basestack/flags-react";
import { fetchFlag } from "@basestack/flags-react/server";
import { flagsConfig } from "../flags-config";

export async function getHeaderFlagAction(slug = "header"): Promise<Flag> {
  return fetchFlag(slug, flagsConfig);
}
