import {
  createRouter,
  createWebHistory,
  NavigationGuard,
  NavigationHookAfter,
} from "vue-router";
import * as NProgress from "nprogress";
/**
 * routes are generated using vite-plugin-pages
 * each .vue files located in the ./src/pages are registered as a route
 * @see https://github.com/hannoeru/vite-plugin-pages/blob/main/examples/vue/src/main.ts
 */

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const _routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes: _routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

/**
 * Handle NProgress display on page changes
 */
export const onBeforeEach: NavigationGuard = async (to) => {
  NProgress.start();
};

export const afterEach: NavigationHookAfter = async () => {
  NProgress.done();
};

router.beforeEach(onBeforeEach);
router.afterEach(afterEach);

export default router;
