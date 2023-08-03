import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// BaseStack Flags SDK
import FlagsJS from "@basestack/flags-js-sdk";
import { FlagsProvider } from "@basestack/flags-react-sdk";

const sdk = new FlagsJS({
  apiUrl: process.env.REACT_APP_BASESTACK_API_URL,
  projectKey: process.env.REACT_APP_BASESTACK_PROJECT_KEY,
  envKey: process.env.REACT_APP_BASESTACK_ENVIRONMENT_KEY,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FlagsProvider
    sdk={sdk}
    onSuccessfulInit={() => console.log("Successful Init FlagsJS SDK")}
  >
    <App />
  </FlagsProvider>
);
