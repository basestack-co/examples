import FlagsJS from "@basestack/flags-js-sdk";

const app = document.querySelector<HTMLDivElement>("#main")!;

const sdk = new FlagsJS({
  apiUrl: process.env.BASESTACK_API_URL!,
  projectKey: process.env.BASESTACK_PROJECT_KEY!,
  envKey: process.env.BASESTACK_ENVIRONMENT_KEY!,
});

async function main() {
  try {
    const { enabled } = await sdk.flagAsync("header");

    if (enabled) {
      app.innerHTML = `
        <header>
            <h1>New Feature Header</h1>
        </header>
      `;
    }
  } catch (e) {
    app.innerHTML = `
        <header>
            <h1>Old Header</h1>
        </header>
  `;
  }
}

main();
