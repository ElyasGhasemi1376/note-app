import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/note-app/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
