import { defineNuxtConfig } from "nuxt";
import colors from "tailwindcss/colors.js";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  extends: ["./node_modules/@docus/docs-theme"],
  vite: {
    logLevel: "info",
  },
  modules: ["@nuxthq/admin", "@docus/github", "@nuxt/content"],
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
  colorMode: {
    preference: "dark",
  },
  theme: {
    github: {
      releases: true,
      edit: true,
      root: "content"
    },
  },
  github: {
    owner: 'productdevbook',
    repo: 'productdevbook.com',
    branch: 'main'
  },
  admin: true
});
