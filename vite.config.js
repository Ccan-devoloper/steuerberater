import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// base: "./" -> lauffähig unter jeder Subdomain und unter GitHub Pages
export default defineConfig({
  base: "./",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  build: { outDir: "dist", sourcemap: false },
});
