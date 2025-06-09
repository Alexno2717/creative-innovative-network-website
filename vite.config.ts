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
    rollupOptions: {
      input: {
        main: './src/entry.tsx'
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    manifest: true,
    copyPublicDir: true
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }
});
