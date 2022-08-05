import { defineNuxtConfig } from "nuxt";
import colors from "tailwindcss/colors.js";


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  extends: ['./node_modules/@docus/docs-theme'],
  github: {
    owner: "productdevbook",
    repo: "productdevbook.com",
    branch: "main",
  },
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
  colorMode: {
    preference: "dark",
  },
});
