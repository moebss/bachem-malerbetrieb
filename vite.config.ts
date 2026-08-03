import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bachem-malerbetrieb/',
  server: {
    port: 3012,
    host: true
  },
  preview: {
    port: 3012,
    host: true
  }
});
