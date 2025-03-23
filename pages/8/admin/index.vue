<template>
  <div class="card card-compact bg-gradient-to-br min-h-dvh from-slate-50 to-slate-300">
    <div class="card-body max-w-2xl grid grid-cols-2 mx-auto my-10">
      <nuxt-link
        to="/8/admin/product"
        class=" bg-primary text-slate-100"
      >
       Products <div class="badge badge-success">+99</div>
      </nuxt-link>

      <nuxt-link
        to="/8/admin/products"
        class=" bg-primary text-slate-100"
      >
       Orders <div class="badge badge-info">+99</div>
      </nuxt-link>

      <nuxt-link
        to="/8/admin/products"
        class=" bg-primary text-slate-100"
      >
       Appointments <div class="badge badge-info">+99</div>
      </nuxt-link>

      <nuxt-link
        to="/8/admin/products"
        class="bg-primary text-slate-100"
      >
       Messages <div class="badge badge-info">+99</div>
      </nuxt-link>

      <nuxt-link
        to="/8/admin/products"
        class="bg-primary text-slate-100"
      >
       Users <div class="badge badge-success">+99</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

</script>

<style scoped>
a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%;
}

@media (max-width: 640px) {
  a{
    font-size: 1rem;
  }
}
</style>
