import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<your-repo-name>/', // Replace with your repository name
  plugins: [react()],
  build: {
    target: 'esnext', // Fallback to ES2015 if older browsers need support
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});