import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [vue()],

  // pages
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: "/datetime-format-parse/",
});
