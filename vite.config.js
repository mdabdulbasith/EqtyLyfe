import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-pdf', 'pdfjs-dist/build/pdf.worker.min.js']
  },
  build: {
    rollupOptions: {
      external: ['pdfjs-dist/build/pdf.worker.min.js']
    }
  }
});
