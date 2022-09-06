// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calculator: resolve(__dirname, 'calculator.html'),
        playground: resolve(__dirname, 'playground.html')
      }
    }
  }
})