import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: [
                "vue",
                "ufo",
            ]
        }
    }
})
