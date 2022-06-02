import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  build: {
    postcss: {
      plugins: {
        "tailwindcss/nesting": {},
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["vue", "ufo"],
    },
  },
});
