<template>
  <section class="mb-10">
    <div class="">
      <div class="flex justify-between px-2 py-5">
        <h2
          role="heading"
          class="text-3xl font-extrabold uppercase bg-gradient-to-r from-primary to-slate-500 bg-clip-text text-transparent"
        >
          {{ header }}
        </h2>

        <div>
          <q-btn
            icon="fa fa-angle-left"
            unelevated
            dense
            :id="uniqueId + '-swiper-prev'"
          />
          <q-btn
            icon="fa fa-angle-right"
            unelevated
            dense
            :id="uniqueId + '-swiper-next'"
          />
        </div>
      </div>

      <!-- render this on server for seo -->
      <!-- <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5" >
        <div v-for="x in 10" :key="x">
          <MainProductCard />
        </div>
      </div> -->

     <div class="px-5">
      <div class="swiper" :id="uniqueId">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="product in Products" :key="product.id">
              <MainProductCard :Product="product" />
          </div>
        </div>
      </div>
     </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css'
import type { TypesProduct } from "~/types/_Product";


const uniqueId = useId();

defineProps<{ header: string, Products: TypesProduct[] }>();

onMounted(() => {
  
  const swiper = new Swiper(`#${uniqueId}`, {
    slidesPerView: 1,
    spaceBetween: 15,
    enabled: true,
    direction: 'horizontal',
    modules: [Navigation],
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: `#${uniqueId}-swiper-next`,
      prevEl: `#${uniqueId}-swiper-prev`,
    },
  });
});
</script>

<style scoped></style>
