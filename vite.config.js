import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birthday_scavenger_hunt/',
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
