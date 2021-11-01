import { defineNuxtConfig } from 'nuxt3'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'


export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    css: [
        '~/styles/main.css',
    ],
    plugins: [
        '~/plugins/uno.ts',
    ],
    vite: {
        build: {},
        plugins: [
            UnoCSS({
                presets: [
                    UnocssIcons(),
                ],
            }),
        ],
    },
})
