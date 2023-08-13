import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  server: {
    proxy: {
      '/local/': {
        target: 'http://localhost:3050',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
}));
