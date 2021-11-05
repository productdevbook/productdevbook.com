import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    build: {
        transpile: ['tslib', '@apollo/client', 'ts-invariant']
    }
})
