<template>
    <div class="mx-auto max-w-[600px] space-y-10">
        <div class="mt-10">
            <div v-if="loading">loading....</div>
            <div v-else="result" class="flex space-x-4">
                <span
                    v-for="item in result.framework"
                    :key="item?.id"
                    class="bg-gray-200 py-2 px-3 rounded-md text-gray-900 font-medium"
                >
                    <!-- <img :src="item." alt=""> -->
                    {{ item?.title }}
                </span>
            </div>
        </div>
        <div class="max-w-1xl mx-auto bg-gray-200 p-4 rounded-lg">
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
                        class="font-normal text-yellow-600"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis delectus consectetur voluptatem dolorum pariatur a ipsa repellat tenetur magni! Fugit?</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFrameworksQuery } from '~/types/types'


export default defineComponent({
    setup() {
        const { result, loading } = useFrameworksQuery()
        return {
            result, loading
        }
    },
})
</script>
