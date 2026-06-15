import { type EvaluationContext, OpenFeature } from "@openfeature/server-sdk";
import { Hono } from "hono";
import { createBasestackServerProvider } from "@basestack/openfeature-provider/server";

const app = new Hono();

const provider = createBasestackServerProvider({
  apiUrl: "http://localhost:4000/v1",
  projectKey: "cmnt0b9d200095i8o03sj6xb2",
  environmentKey: "cmnt0b9d4000b5i8okonh7wjs",
  prefetch: true,
  refreshIntervalMs: 30_000,
});

OpenFeature.setProvider(provider);

const client = OpenFeature.getClient("YOUR_APP_NAME");

app.get("/experiments/header", async (c) => {
  const targetingKey = c.req.header("x-user-id") ?? "anonymous";
  const context: EvaluationContext = { targetingKey };
  const details = await client.getObjectDetails<{ color?: string }>(
    "header",
    { color: "blue" },
    context,
  );

  return c.json({
    payload: details.value,
    isEnabled: details.variant === "enabled",
    metadata: details.flagMetadata,
  });
});

export default {
  port: 5555,
  fetch: app.fetch,
};
