import { flag } from "flags/next";
import { createBasestackAdapter } from "@basestack/vercel-flags-sdk-adapter";

const basestack = createBasestackAdapter<boolean>({
  endpoint: "http://localhost:4000/v1",
  projectKey: "cmnt0b9d200095i8o03sj6xb2",
  environmentKey: "cmnt0b9d4000b5i8okonh7wjs",
  resolveValue: (flag) => flag.enabled,
});

export const initiativeOverviewFlag = flag<boolean>({
  key: "initiative_overview",
  adapter: basestack,
  defaultValue: false,
  description: "Shows the next generation initiative overview experience",
});
