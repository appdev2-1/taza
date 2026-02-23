import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],  // Include .glb files as assets
  root: '.',  // Root directory
  build: {
    outDir: 'dist',  // Output directory for production build
    chunkSizeWarningLimit: 10000,  // Increase chunk size warning limit (in kB)
    rollupOptions: {
      input: 'index.html',  // Specify the correct entry point
      output: {
        manualChunks(id) {
          // Group all node_modules into a single chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // You can add more conditions here to further customize chunking
        },
      },
    },
  },
});
