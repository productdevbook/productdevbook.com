import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["vue", "ufo"],
    },
  },
});
