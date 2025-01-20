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
          <!-- <q-btn
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
          /> -->
        </div>
      </div>

      <!-- render this on server for seo -->
      <!-- <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5" >
        <div v-for="x in 10" :key="x">
          <MainProductCard />
        </div>
      </div> -->

      <!-- <ClientOnly>
          <swiper-container :init="false" ref="swipe_container_id" class="px-5">
            <swiper-slide v-for="x in 10" :key="x">
              <MainProductCard />
            </swiper-slide>
          </swiper-container>
      </ClientOnly> -->
    </div>
  </section> 
</template>

<script setup lang="ts">
const uniqueId = '011';

defineProps<{ header: string }>();

  // const swiper = useSwiper(swipe_container_id, {
  //   slidesPerView: 1,
  //   spaceBetween: 15,

  //   breakpoints: {
  //     420: {
  //       slidesPerView: 2,
  //       spaceBetween: 8,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     1020: {
  //       slidesPerView: 4,
  //     },
  //   },
  //   navigation: {
  //     nextEl: `#${uniqueId}-swiper-next`,
  //     prevEl: `#${uniqueId}-swiper-prev`,
  //   },
  // });
// onMounted(() => {
//   const swiper = new Swiper(swipeContainer, {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//     enabled: true,
//     bulletActiveClass: "text-red-500",
//   },
//   breakpoints: {
//     360: {
//       slidesPerView: 4,
//     },

//     640: {
//       slidesPerView: 5,
//     },

//     720: {
//       slidesPerView: 6,
//     },
//     992: {
//       slidesPerView: 7,
//     },
//     1020: {
//       slidesPerView: 8,
//     },
//     1200: {
//       slidesPerView: 10,
//     },
//   },
// });
// })
</script>

<style scoped></style>
