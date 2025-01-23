<template>
  <div>
    <MainHeaderSec />
    <slot></slot>
    <MainFooterComp />
  </div>
</template>

<script setup lang="ts">
import type { TypesUser } from "~/types/_user";
const App = useAppStore();
const Fav = useFavStore();

(async function () {
  const token = useCookie("token").value;
  if (!token) {
    return;
  }
  try {
    const [user, favorites] = await Promise.all([
      useFetch<{ user: TypesUser }>("/api/main/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data),

      useFetch<{ products: number[] }>("/api/main/favorite/ids", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data),
    ]);

    if (user.value?.user) {
      App.user = user.value.user;
    }

    if (favorites.value?.products) {
      for (const id of favorites.value.products) {
        Fav.Favorites.add(id);
      }
    }
  } catch (error) {}
})();

onMounted(() => {
  console.log([...Fav.Favorites]);
});
</script>

<style scoped></style>
