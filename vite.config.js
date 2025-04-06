import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'keeper-notes-app-react-210r.onrender.com'
    ],
  },
})
