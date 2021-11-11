<template>
    <div>
        <div v-if="loading">loading....</div>
        <div v-else-if="result" class="flex space-x-4">
            <span
                v-for="item in result.framework"
                :key="item?.id"
                class="bg-gray-200 py-2 px-3 rounded-md text-gray-900 font-medium"
            >
                <!-- <img :src="item." alt=""> -->
                {{ item?.title }}
                {{ item?.logo }}
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFrameworksQuery } from '~/types/types'


export default defineComponent({
    setup() {
        const { result, loading } = useFrameworksQuery()
        console.log(result.value)
        return {
            result, loading
        }
    },
})
</script>
