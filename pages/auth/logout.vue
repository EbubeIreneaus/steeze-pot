<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    const cookie = useCookie('token')
    const router = useRouter()
    cookie.value = null
    router.push('/auth/login')
  
</script>

<style scoped>

</style>