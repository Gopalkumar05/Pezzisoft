import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimize build for production
    rollupOptions: {
  output: {
    manualChunks(id) {
      if (id.includes("node_modules")) {
        if (
          id.includes("react") ||
          id.includes("react-dom") ||
          id.includes("react-router-dom")
        ) {
          return "vendor";
        }

        if (
          id.includes("framer-motion") ||
          id.includes("react-icons") ||
          id.includes("swiper")
        ) {
          return "ui";
        }

        return "vendor";
      }
    },
  },
},
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})