import { Hono } from "hono";
import { FlagsSDK } from "@basestack/flags-js";

const app = new Hono();

const sdk = new FlagsSDK({
  baseURL: "http://localhost:4000/v1",
  projectKey: "cmn7m6dev0001338otpfxcwvr",
  environmentKey: "cmn7m6df00003338o7qozotxv",
  apiKey: "your-project-api-token",
});

app.get("/", async (c) => {
  try {
    const flag = await sdk.getFlag("initiative_overview");
    return c.json({
      slug: flag.slug,
      enabled: flag.enabled,
      payload: flag.payload,
    });
  } catch (error) {
    return c.json(
      {
        error: true,
        message: (error as Error).message,
      },
      500,
    );
  }
});

app.get("/preview", async (c) => {
  try {
    const preview = await sdk.getPreviewFlags();
    return c.json(preview);
  } catch (error) {
    return c.json(
      {
        error: true,
        message: (error as Error).message,
      },
      500,
    );
  }
});

app.post("/preview/feedback", async (c) => {
  try {
    const result = await sdk.submitPreviewFeedback({
      flagKey: "initiative_overview",
      mood: "VERY_HAPPY",
      rating: 5,
      description: "Example feedback from the server sample app.",
      metadata: {
        username: "Server User",
        source: "examples/server",
        route: "/preview/feedback",
      },
    });
    return c.json(result, 201);
  } catch (error) {
    return c.json(
      {
        error: true,
        message: (error as Error).message,
      },
      500,
    );
  }
});

app.post("/code-refs", async (c) => {
  try {
    const result = await sdk.submitCodeReferences({
      branch: "main",
      projectName: "examples-server",
      repositoryUrl: "https://github.com/basestack-co/basestack-flags-js",
      references: {
        initiative_overview: [
          {
            filePath: "examples/server/src/index.ts",
            lineNumber: 14,
            lineContent:
              '    const flag = await sdk.getFlag("initiative_overview");',
          },
        ],
      },
    });
    return c.json(result, 201);
  } catch (error) {
    return c.json(
      {
        error: true,
        message: (error as Error).message,
      },
      500,
    );
  }
});

export default {
  fetch: app.fetch,
  port: 8080,
};
