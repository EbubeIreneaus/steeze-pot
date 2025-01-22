<template>
    <main>
  
    </main>
</template>

<script setup lang="ts">
const {Favorites} = useFavStore()

onMounted(() => {
  console.log(Favorites.values().toArray);
})

</script>

<style scoped>

</style>