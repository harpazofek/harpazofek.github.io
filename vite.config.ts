
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with your GitHub repository name
export default defineConfig({
  base: '/your-repo-name/', // Change 'your-repo-name' to your actual repository name
  plugins: [react()],
});
