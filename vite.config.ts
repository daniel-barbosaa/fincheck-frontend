import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "dist/bundle-analysis.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: true,
    }),
    sentryVitePlugin({
      org: "myprojects-ih",
      project: "fincheck",
      sourcemaps: {
        filesToDeleteAfterUpload: ["**/*.map"]
      }
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          sentry: ["@sentry/react"],
        },
      },
    },
    sourcemap: true,
  },
});
