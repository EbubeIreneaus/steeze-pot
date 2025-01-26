<template>
  <div class="py-20 mx-auto">
    <h2 class="text-4xl font-semibold text-center text-slate-900 mb-4 uppercase">
       What Our Clients Say
    </h2>
    <div class="swiper review-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide card bg-slate-50" v-for="review in reviews" :key="review.name">
          <div class="card-body">
            <p class="text-subtitle1">
             {{ review.content }}
            </p>
            <p class="text-subtitle2 italic text-primary">
              {{ review.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const reviews = [
  {
    name: "Adeola Adebayo",
    content:
      "The food was absolutely delicious, and the presentation was amazing! I couldn’t have asked for a better catering experience. Highly recommend!",
  },
  {
    name: "Chinonso Okeke",
    content:
      "Their services exceeded my expectations. The meals were flavorful, and the attention to detail was remarkable. I will definitely be using their services again.",
  },
  {
    name: "Funke Abiola",
    content:
      "I loved everything about the experience! The custom cakes were not only beautiful but also tasted heavenly. They made my event so special.",
  },
  {
    name: "Ibrahim Suleiman",
    content:
      "Amazing food and exceptional service! Every guest at my event complimented the catering. You have gained a loyal customer.",
  },
  {
    name: "Ngozi Uche",
    content:
      "Their meal prep service has been a lifesaver for my busy schedule. The food is always fresh, healthy, and delicious. Thank you for making my life easier!",
  },
];

onMounted(() => {
    new Swiper('.review-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        modules: [Pagination],
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
})
</script>

<style scoped></style>
