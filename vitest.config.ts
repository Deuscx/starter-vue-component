import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitest/config'
import { alias } from './alias'

export default defineConfig({
  plugins: [
    Vue(),
    Unocss(),
  ],
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
  },
})
