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

(async function () {
  const token = useCookie("token").value;
  if (!token) {
    return;
  }
  try {
    const { data } = await useFetch<{user: TypesUser}>("/api/main/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.value?.user) {
      App.user = data.value.user;
    }
  } catch (error) {}
})();
</script>

<style scoped></style>
