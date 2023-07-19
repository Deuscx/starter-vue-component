import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    optimizeDeps: {
        disabled: true,
    },
    test: {
        include: ['test/**/*.test.ts'],
        environment: 'jsdom',
        deps: {
            inline: [
                '@vue',
            ],
        },
        // ...
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
    },
})