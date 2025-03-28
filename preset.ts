import type { Preset } from 'unocss/index'

export function presetUnocss(): Preset {
  return {
    name: 'starter-vue-component-preset',
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  }
}
