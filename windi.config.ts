import { defineConfig } from 'windicss/helpers'
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans].join(','),
            },
        },
    },
    attributify: true,
})