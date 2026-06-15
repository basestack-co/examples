import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function reloadOnDistChange() {
  return {
    name: "reload-on-dist-change",
    handleHotUpdate({ file, server }) {
      if (file.includes("/dist/")) {
        server.ws.send({ type: "full-reload" });
        return [];
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), reloadOnDistChange()],
  server: {
    port: 5173,
    watch: {
      ignored: ["!**/dist/**"],
    },
  },
  resolve: {
    alias: {
      "@basestack/flags-wc": path.resolve(__dirname, "../../dist"),
      "@wc": path.resolve(__dirname, "../../dist"),
      "@wc/sdk": path.resolve(__dirname, "../../dist/sdk"),
    },
  },
  optimizeDeps: {
    exclude: ["@basestack/flags-wc", "@wc", "@wc/sdk"],
  },
});
