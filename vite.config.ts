import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: [
        // issue #68
        { dir: path.resolve(__dirname, "./src/pages"), baseRoute: "" },
      ],
      extensions: ["vue", "md"],
      extendRoute(route) {
        if (route.name === "components") {
          return {
            ...route,
            beforeEnter: (route: any) => {
              // eslint-disable-next-line no-console
              console.log(route, "route");
            },
          };
        }
      },
    }),
  ],
});
