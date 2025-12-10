import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
>>>>>>> bc819da (final changes)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
<<<<<<< HEAD
=======
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@tanstack/react-query",
    ],
    esbuildOptions: {
      resolveExtensions: [".jsx", ".js", ".ts", ".tsx"],
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
>>>>>>> bc819da (final changes)
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
