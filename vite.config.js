import MillionCompiler from "@million/lint";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [MillionCompiler.vite(), react(), TanStackRouterVite()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  // base: "xavier-kirkpatrick.github.io",
});
