import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 80,
    },
    proxy: {
      '/api': process.env.VITE_API_BASE_URL,
    },
  },
})
