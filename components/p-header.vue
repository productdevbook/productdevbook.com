<template>
<div class="h-20 bg-zinc-700 w-full flex flex-none">
      <button @click="login('github')">Login with GitHub</button>
</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

// Login method using providers
const login = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
  const { error } = await client.auth.signIn({provider: provider})

  if (error) {
    return alert('Something went wrong !')
  }

  router.push('/dashboard')
}
</script>
