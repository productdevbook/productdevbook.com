import { app } from "@storybook/vue3";
import '../assets/tailwind.css'
app.component("NuxtLink", {
  props: ["to"],
  methods: {
    log() {
      action("link target")(this.to);
    },
  },
  template: '<div @click="log()"><slot>NuxtLink</slot></div>',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "grey",
        value: "#ccc",
      },
      {
        name: "baby-blue",
        value: "rgba(241, 245, 249, 1)",
      },
      {
        name: "dark",
        value: "#000000",
      },
      {
        name: "light",
        value: "#fff",
      },
    ],
  },
};
