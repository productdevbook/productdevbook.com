import { defineNuxtConfig } from "nuxt";
import colors from "tailwindcss/colors.js";
import consola from 'consola'


const alias = {}



// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxthq/admin', '@docus/github', 'vue-plausible'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: colors.rose,
          },
        },
      },
    },
  },
  vite: {
    define: {
      'process.env.FORCE_COLOR': {},
      'process.env.NODE_DISABLE_COLORS': {},
      'process.env.NO_COLOR': {},
      'process.env.FORCE_TERM': {}
    }
  },
  generate: {
    routes: []
  },
  alias,
  extends: [
    (process.env.DOCUS_THEME_PATH || './node_modules/@docus/docs-theme')
  ],
  colorMode: {
    preference: "dark",
  },
  theme: {},
  github: {
    owner: "productdevbook",
    repo: "productdevbook.com",
    branch: "main",
  },
});
