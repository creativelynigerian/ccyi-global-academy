import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: '/login',  // Opens login page on npm run dev
    host: true,
  },
  preview: {
    port: 3000,
    open: '/login',
  }
})
