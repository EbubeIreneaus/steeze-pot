<template>
  <div class="lg:px-10 px-5 ">
    <div class="swiper category-swiper">
      <div
      class="swiper-wrapper"
      >
        <nuxt-link :to="`#${cat.value.toLowerCase()}`" class="swiper-slide" v-for="cat in categories" :key="cat.id">
          <figure class="w-fit">
            <nuxt-img
              :src="`/img/category/${cat.src}`"
              width="90"
              height="90"
              format="webp"
              fit="cover"
              densties="x1"
              class="rounded-full w-[90px] h-[80px]"
            />
            <figcaption class="text-caption font-semibold text-center">
              {{ cat.title }}
            </figcaption>
          </figure>
        </nuxt-link>
      </div>
    </div>
    <div class="pagination text-center mt-3"></div>
  </div>
</template>

<script setup lang="ts">
 import Swiper from 'swiper'
import 'swiper/css';
const categories = [
  { id: 0, title: "Starter", value: "starter", src: "starter.jpg" },
  { id: 1, title: "Rice", value: "rice", src: "rice.jpg" },
  { id: 2, title: "Sauce", value: "sauce", src: "sauce.jpeg" },
  { id: 3, title: "Soup", value: "soup", src: "soup.jpeg" },
  { id: 4, title: "Stew", value: "stew", src: "stew.jpeg" },
  { id: 5, title: "Pasta", value: "pasta", src: "pasta.jpg" },
  { id: 6, title: "Grill", value: "grill", src: "grill.jpg" },
  { id: 7, title: "Desert", value: "Desert", src: "desert.jpg" },
  { id: 8, title: "Snack", value: "snack", src: "snack.jpg" },
  { id: 9, title: "Mocktail", value: "mocktail", src: "mocktail.jpg" },
  { id: 10, title: "Breakfast", value: "breakfast", src: "breakfast.jpg" },
  { id: 11, title: "Porridge", value: "porridge", src: "porridge.jpeg" },
  { id: 12, title: "Sallad", value: "sallad", src: "sallad.jpg" },
  { id: 13, title: "Sides", value: "sides", src: "sides.jpeg" },
];

const breakpoints = {
  360: {
    slidesPerView: 4,
  },

  640: {
    slidesPerView: 5,
  },

  720: {
    slidesPerView: 6,
  },
  992: {
    slidesPerView: 7,
  },
  1020: {
    slidesPerView: 8,
  },
  1200: {
    slidesPerView: 10,
  },
};

// const swiper = useSwiper(swipeContainer, {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//     enabled: true,
//     bulletActiveClass: "text-red-500",
//   },

// });


onMounted(() => {
  const swiper = new Swiper('.category-swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: breakpoints,
    enabled: true
  })
})
</script>

<style scoped></style>
