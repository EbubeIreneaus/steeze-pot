<template>
    <div>
        <h2>Hello Wrold</h2>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'admin'
})

const {data: products, error} = await useFetch("/api/admin/product/all")

// if (error.value) {
//     throw createError("Error Fetching Product Data "+ error.value);
    
// }

onMounted(() => {
    console.log('products ', products)
})
</script>

<style scoped>

</style>