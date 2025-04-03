import { fileURLToPath, URL } from "node:url";
import viteCompression from "vite-plugin-compression";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";
import svgLoader from "vite-svg-loader";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteCompression({ algorithm: "gzip" }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
