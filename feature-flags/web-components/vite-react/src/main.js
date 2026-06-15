import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element #root not found");
}
ReactDOM.createRoot(root).render(
  _jsx(React.StrictMode, { children: _jsx(App, {}) }),
);
