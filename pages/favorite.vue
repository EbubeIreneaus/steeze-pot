<template>
  <main>
    <div v-if="!data?.products || data?.products.length < 1">
      <div class="card">
        <div class="card-body">
          <div class="text-center">
            <h2 class="text-2xl font-semibold">Your favorites is empty</h2>
            <p class="text-gray-500">
              You have no items in your favorites.
              <router-link to="/" class="text-primary font-semibold"
                >Go to kitchen</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card">
        <div
          class="card-body grid xxl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5"
        >
          <div v-for="product in data?.products" :key="product.id">
            <MainProductCard :Product="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { TypesProduct } from "~/types/_Product";

const Fav = useFavStore();
const { user } = useAppStore();

const { data, error, refresh } = await useFetch<{ products: TypesProduct[] }>(
  "/api/main/favorite/all?userId=" + user?.id,
  {}
);


onMounted(() => {
  watch(
  () => Fav.Favorites.size,
  () => {
    refresh();
  }
);
});
</script>

<style scoped></style>
