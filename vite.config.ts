import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  // на GitHub Pages сайт лежит в подпапке, локально база остаётся корневой
  base: process.env.GITHUB_ACTIONS ? '/banki-test/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    host: true
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsInlineLimit: 4096
  }
})
