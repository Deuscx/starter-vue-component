import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import { presetUnocss } from '../preset'

export default defineConfig({
  presets: [
    presetUno({
      preflight: false,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetUnocss(),
  ],
})
