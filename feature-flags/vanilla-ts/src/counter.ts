import { FlagsSDK } from "@basestack/flags-js";

const client = new FlagsSDK({
  baseURL: import.meta.env.VITE_FEATURE_FLAGS_BASE_URL,
  projectKey: import.meta.env.VITE_FEATURE_FLAGS_PROJECT_KEY!,
  environmentKey: import.meta.env.VITE_FEATURE_FLAGS_ENVIRONMENT_KEY!,
});

export async function setupCounter(element: HTMLButtonElement) {
  const { flags } = await client.getAllFlags();

  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = JSON.stringify(flags);
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
