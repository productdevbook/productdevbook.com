import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    build: {
        transpile: ['tslib', '@apollo/client', 'ts-invariant'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})
