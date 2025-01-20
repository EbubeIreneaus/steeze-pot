<template>
  <section class="w-full bg-secondary hidden lg:!block">
    <div
      class="grid lg:grid-cols-2 gap-y-5 lg:min-h-[calc(100vh-80px)]  justify-between size-full border-4 content-center items-center"
    >
      <div class="text-primary px-5 py-20 lg:py-3">
        <h1 class="md:text-5xl sm:text-4xl text-3xl text-black uppercase font-extrabold">
          Steeze Pot delivers so many steeze in one meal
        </h1>
        <p class="text-xl my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum
          nesciunt corporis sequi vero dignissimos dicta fugit, esse accusantium
          placeat?
        </p>
        <q-btn label="hire us" class="btn btn-primary px-14" />
      </div>
      <div class="!p-0 bg-white max-w-md w-full mx-auto hidden lg:!block">
        <q-carousel
          transition-next="slide-left"
          transition-prev="slide-right"
          autoplay
          animated
          transition-duration="500"
          infinite
          swipeable
          v-model="slide"
          class=""
        >
          <q-carousel-slide name="1" class=" p-0">
            <nuxt-img
              src="/img/bg/bg-1.jpeg"
              sizes="400px"
              densities="x1"
              format="webp"
              fill="cover"
              class="h-full rounded-md"
            />
          </q-carousel-slide>

          <q-carousel-slide name="2" class=" p-0">
            <nuxt-img
              src="/img/bg/bg-2.jpg"
              sizes="400px"
              densities="x1"
              format="webp"
              fill="cover"
              class="h-full rounded-md"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const slide = ref("1");
</script>

<style scoped></style>
