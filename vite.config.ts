import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider:'istanbul',
      reporter: ['text', 'json', 'html']
    },
    globals: true,
    setupFiles: './tests/setup.js'
  }
})
