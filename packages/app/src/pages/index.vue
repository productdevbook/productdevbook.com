<template>
  <div class="max-w-sm">
    There are many developers who develop the best product and cannot make
    themselves heard. They will now be able to announce them and the best
    libraries to developers. (soon)
  </div>
  <template v-if="loading"></template>
  <template v-if="!loading && result">
    <div class="text-white">
      {{ result }}
    </div>
  </template>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useFrameworkQuery } from "~/generated/graphql";
export default defineComponent({
  props: {},
  setup(props) {
    const { result, loading, error } = useFrameworkQuery();
    return { result, loading, error };
  },
});
</script>
