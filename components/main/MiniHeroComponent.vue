<template>
  <section class="container mx-auto mb-5 px-5 pt-4 lg:px-0 lg:pt-0">
    <div class="grid lg:grid-cols-12 gap-5 items-center">
      <div class="hidden lg:!inline-block lg:col-span-3">
        <q-btn-dropdown
          icon="menu"
          label="all categories"
          class="w-full py-3 text-weight-bold btn"
          unelevated
          square
          stretch
          dropdown-icon="keyboard_arrow_down"
        ></q-btn-dropdown>
      </div>

      <div class="lg:col-span-6 flex items-center">
        <input
          v-model="kw"
          type="search"
          placeholder="what do you want?"
          class="flex-grow border py-3 px-2"
        />
        <q-btn
          label="search"
          unelevated
          :to="'/search?keyword=' + kw"
          :disable="!kw"
          square
          class="btn py-3 text-white"
        />
      </div>

      <div
        class="py-2 lg:col-span-3 flex justify-normal md:justify-end lg:justify-normal gap-4"
      >
        <div class="w-fit py-3 px-4 rounded-full">
          <q-icon name="phone" />
        </div>
        <div>
          <h5 class="text-weight-bold">+234 810 440 3050</h5>
          <div>24/7 customer support</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const kw = ref("");
</script>

<style scoped></style>
