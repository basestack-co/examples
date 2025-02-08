import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { FlagsSDK } from "@basestack/flags-js";

// Basic Initialization
// Change the projectKey and environmentKey to match your project and environment
const client = new FlagsSDK({
  baseURL: "http://localhost:3000/api/v1",
  projectKey: "cm5qx25c900048onlrh1eloq5",
  environmentKey: "cm5qx25c900068onlvbtk1cdy",
});

const app = new Hono();

app.get("/", async (c) => {
  const flags = await client.getAllFlags();

  return c.json({ flags });
});

const port = 3004;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
