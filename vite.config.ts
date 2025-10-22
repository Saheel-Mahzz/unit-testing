import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:3000},
test: {
    environment: 'jsdom', // tells Vitest to simulate a browser
    globals: true,        // allows using describe/it/expect without import
    setupFiles: './src/setupTests.ts', // a file to run before all tests
  },
})
