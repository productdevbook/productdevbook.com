<template>
<div class="text-white">
    {{user}}
</div>
</template>
<script setup ts>import { definePageMeta } from '~~/.nuxt/imports';
const user = useSupabaseUser()
definePageMeta({
    layout: 'default'
})
</script>