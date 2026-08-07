import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion', 'gsap', 'lenis'],
          'vendor-icons': ['lucide-react', 'react-icons'],
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
