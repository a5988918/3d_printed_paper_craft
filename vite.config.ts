import { defineConfig } from "vite";

export default defineConfig({
  base: '/3d_printed_paper_craft/',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  assetsInclude: ["**/*.wasm"],
  optimizeDeps: {
    exclude: ["replicad", "replicad-opencascadejs"],
  },
  build: {
    target: "esnext",
  },
});
