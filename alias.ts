import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@deuscx/starter-vue-component': r('./packages/ui/src/'),
}
