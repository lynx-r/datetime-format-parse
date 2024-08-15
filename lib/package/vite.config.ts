import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "DatetimeFormatter",
      fileName: "datetime-format-parse",
    },
  },
});
