import { registerFeatureFlagComponents } from "@basestack/flags-wc";
import { useEffect, useState } from "react";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerFeatureFlagComponents().then(() => setReady(true));
  }, []);

  return (
    <main className="page">
      <header>
        <h1>Feature Flag Preview Modal (React + Vite)</h1>
        <p>
          This example registers the Stencil web component from{" "}
          <code>dist/</code> and uses the Basestack preview endpoint. Provide{" "}
          <code>VITE_PROJECT_KEY</code> or <code>VITE_ENVIRONMENT_KEY</code> in
          a <code>.env</code> file to see live data; otherwise mock data is
          shown. The feedback modal sends optional <code>metadata</code> as a
          direct component prop.
        </p>
      </header>

      <section className="demo">
        <button
          type="button"
          onClick={() => {
            const modal = document.querySelector("feature-flag-preview-modal");
            if (modal) {
              (modal as any).open = true;
            }
          }}
          disabled={!ready}
        >
          Open feature preview modal
        </button>

        <feature-flag-preview-modal
          theme="light"
          api-endpoint={`${import.meta.env.VITE_API_ENDPOINT}/flags/preview`}
          project-key={import.meta.env.VITE_PROJECT_KEY}
          environment-key={import.meta.env.VITE_ENVIRONMENT_KEY}
          heading="Feature Preview"
          subtitle="Select and enable previews that fit your workflow."
          selection-prompt="Choose a preview to view"
          selection-placeholder="Select a feature on the left to see more details."
          enable-label="Enable"
          enabled-label="Disable"
          loading-label="Loading feature previews…"
          empty-title-label="No feature previews are currently available."
          empty-description-label="No feature flags available at the moment."
          empty-action-label="Dismiss"
          preview-badge-label="Preview"
          expires-soon-label="Expiring soon"
          learn-more-label="Learn more"
        />

        <button
          type="button"
          onClick={() => {
            const modal = document.querySelector("feature-flag-feedback-modal");
            if (modal) {
              (modal as any).open = true;
              (modal as any).metadata = {
                user: { id: "usr_demo_002", email: "demo2@basestack.co" },
                payment: {
                  customerId: "cus_demo_002",
                  plan: "lite",
                  trial: true,
                },
                context: { source: "vanilla-html" },
              };
            }
          }}
          disabled={!ready}
          style={{ marginTop: "18px" }}
        >
          Leave feedback for “Preview Notes”
        </button>

        <feature-flag-feedback-modal
          theme="light"
          api-endpoint={`${import.meta.env.VITE_API_ENDPOINT}/flags/preview/feedback`}
          flag-key="preview_notes"
          project-key={import.meta.env.VITE_PROJECT_KEY}
          environment-key={import.meta.env.VITE_ENVIRONMENT_KEY}
          feature-name="Preview Notes"
          heading="Feedback"
          mood-prompt="How did this feature make you feel?"
          rating-prompt="How would you rate the quality of this feature?"
          feedback-label="Your Feedback"
          feedback-placeholder="Is there anything you'd like to share? We appreciate your insights."
          submit-label="Submit Feedback"
          privacy-policy-url="https://basestack.co/legal/privacy"
          privacy-policy-label="To help keep your data safe, please don’t include any personal or sensitive information."
          privacy-policy-link-label="More details"
        />
      </section>
    </main>
  );
}

export default App;
