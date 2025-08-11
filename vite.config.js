import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Interior/', // 👈 move this out of `server`
  server: {
    host: true,
    port: 5000,
  },
});
