<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "",
  props: {},
  setup(props) {
    const router = useRouter();
    return { router };
  },
});
</script>

<template>
  <main class="py-10 px-4 text-center dark:text-gray-200 text-teal-700">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">back</button>
    </div>
  </main>
</template>
