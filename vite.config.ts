import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './src/entry.tsx'
      },
      output: {
        entryFileNames: 'main.js'
      }
    },
    manifest: true
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }
});
