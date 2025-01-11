import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"], // Exclude lucide-react from pre-bundling
  },
  build: {
    target: "esnext", // Set the build target
    cssMinify: true, // Ensure CSS is minified during build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separate React dependencies into a vendor chunk
        },
      },
    },
  },
  server: {
    open: true, // Automatically opens the app in the browser
    cors: true, // Enable CORS for the development server
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000", // Cache headers for preview builds
    },
  },
});
