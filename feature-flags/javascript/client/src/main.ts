// @ts-ignore
import "./style.css";

import { FlagsSDK } from "@basestack/flags-js";

const app = document.querySelector<HTMLDivElement>("#app");

const sdk = new FlagsSDK({
  baseURL: "http://localhost:4000/v1",
  projectKey: "cmnsxbq5a0001fd8ou32ue0cu",
  environmentKey: "cmnsxbq5g0003fd8o78wm67hk",
  apiKey: "your-project-api-token",
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function render() {
  app!.innerHTML = `<p>Fetching flag and preview data...</p>`;

  try {
    const [flag, previewResponse] = await Promise.all([
      sdk.getFlag("initiative_overview"),
      sdk.getPreviewFlags(),
    ]);

    const previewFlagsHtml =
      previewResponse.flags.length === 0
        ? "<p>No preview flags available.</p>"
        : `<ul>${previewResponse.flags
            .map(
              (previewFlag) => `
                <li>
                  <strong>${escapeHtml(previewFlag.previewName)}</strong> (<code>${escapeHtml(previewFlag.slug)}</code>)
                  <details>
                    <summary>Show Preview Content</summary>
                    <div>${escapeHtml(previewFlag.previewContent)}</div>
                  </details>
                </li>
              `,
            )
            .join("")}</ul>`;

    app!.innerHTML = `
      <h1>Flags Client Example</h1>
      <p>Standard flag <code>${flag.slug}</code> is <strong>${
        flag.enabled ? "enabled" : "disabled"
      }</strong></p>
      <pre>${JSON.stringify(flag.payload, null, 2)}</pre>

      <h2>Preview Flags</h2>
      ${previewFlagsHtml}

      <button id="send-feedback" type="button">Send Sample Feedback</button>
      <button id="sync-code-refs" type="button">Sync Sample Code References</button>
      <p id="feedback-result"></p>
      <p id="code-refs-result"></p>
    `;

    const feedbackResult =
      document.querySelector<HTMLParagraphElement>("#feedback-result");
    const codeRefsResult =
      document.querySelector<HTMLParagraphElement>("#code-refs-result");
    const sendFeedbackButton =
      document.querySelector<HTMLButtonElement>("#send-feedback");
    const syncCodeRefsButton =
      document.querySelector<HTMLButtonElement>("#sync-code-refs");

    sendFeedbackButton?.addEventListener("click", async () => {
      const firstPreviewFlag = previewResponse.flags[0];
      if (!firstPreviewFlag) {
        feedbackResult!.textContent =
          "No preview flags available to send feedback.";
        return;
      }

      feedbackResult!.textContent = "Submitting feedback...";

      try {
        const result = await sdk.submitPreviewFeedback({
          flagKey: firstPreviewFlag.slug,
          mood: "HAPPY",
          rating: 4,
          description: "Example feedback from the client sample app.",
          metadata: {
            username: "John Doe",
            source: "examples/client",
            route: window.location.pathname,
            context: {
              experiment: "landing-preview-copy",
            },
          },
        });
        feedbackResult!.textContent = `Feedback submitted: ${result.feedbackId}`;
      } catch (error) {
        feedbackResult!.textContent = `Failed to submit feedback: ${(error as Error).message}`;
      }
    });

    syncCodeRefsButton?.addEventListener("click", async () => {
      codeRefsResult!.textContent = "Syncing code references...";

      try {
        const result = await sdk.submitCodeReferences({
          branch: "main",
          projectName: "examples-client",
          repositoryUrl: "https://github.com/basestack-co/basestack-flags-js",
          references: {
            initiative_overview: [
              {
                filePath: "examples/client/src/main.ts",
                lineNumber: 26,
                lineContent: '      sdk.getFlag("initiative_overview"),',
              },
            ],
          },
        });
        codeRefsResult!.textContent = result.message;
      } catch (error) {
        codeRefsResult!.textContent = `Failed to sync code refs: ${(error as Error).message}`;
      }
    });
  } catch (error) {
    app!.innerHTML = `<p>Failed to load data: ${(error as Error).message}</p>`;
  }
}

render();
