<template>
    <div class="max-w-1xl mx-auto bg-gray-200 p-4 rounded-lg">
        <div v-if="loading">loading....</div>
        <div v-if="!loading" v-for="item in result?.framework">{{ item?.title }}</div>
        <div class="flex">
            <figure class="h-20 w-20 m-0">
                <img
                    src="https://nuxtjs.org/design-kit/colored-logo.png"
                    height="80"
                    width="80"
                    alt="logo"
                />
            </figure>
            <div class="flex-col">
                <p class="font-bold">Title</p>
                <p
                    class="font-normal text-pink-600"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis delectus consectetur voluptatem dolorum pariatur a ipsa repellat tenetur magni! Fugit?</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFrameworkQuery } from '~~/types/types'

export default defineComponent({
    setup() {
        const { result, loading } = useFrameworkQuery()
        return {
            result, loading
        }
    },
})
</script>
