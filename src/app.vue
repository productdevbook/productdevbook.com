<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'
InitApp()
const locale = useState<string>('locale.i18n')

useHead({
  title: 'productdevbook',
  meta: [
    {
      name: 'description',
      content: 'My App',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://rsms.me/inter/inter.css',
    },
  ],
})
</script>

<template>
  <Html :lang="locale">
    <Body
      class="bg-zinc-900 h-full w-full text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
