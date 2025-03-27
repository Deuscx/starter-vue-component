import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { alias } from '../alias'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: true,
    }),
    Components({
      dts: true,
    }),
  ],
  resolve: {
    alias,
  },
})
