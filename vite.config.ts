
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base path for GitHub Pages deployment
export default defineConfig({
  base: '/harpazofe.github.io', // GitHub Pages serves files at the root for harpazofek.github.io
  plugins: [react()],
});
