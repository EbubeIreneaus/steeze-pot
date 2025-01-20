<template>
  <div class="bg-white product-card shadow-md">
    <section>
      <div class="top-image">
        <div class="image-wrapper">
          <nuxt-img src="/img/category/porridge.jpeg" class="image w-full" />

          <div class="absolute bottom-0 text-base left-2 px-3 py-1 bg-secondary z-30 rounded-t-lg">
            <span v-naira="10000"></span>
        </div>
        </div>
      </div>
    </section>

    <section>
      <h3
        class="line-clamp-2 text-ellipsis px-1 text-subtitle1 font-semibold p-2.5"
      >
        <nuxt-link to="/" class="hover:text-slate-500">
          Beef Tenderloin</nuxt-link
        >
      </h3>
      <p class=" px-2 line-clamp-3 text-ellipsis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, mollitia?</p>
      <div class=" mt-1.5">
        <div class="flex justify-between items-center gap-x-3">
          <div class="flex items-center gap-2 text-green-14">
            <q-icon name="star" class="ms-2 block" />
            <span>3</span>
          </div>
          <div class="flex-grow">
            <q-btn unelevated icon="shopping_cart" label="add to cart" no-caps  class="w-full rounded-br-[10px]" color="primary" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product-card {
  border-radius: 10px;
 
}

.top-image {
  .image-wrapper {
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      top: 0;
      bottom: 0;
      width: 100%;
      position: absolute;
      z-index: 1;
      border-radius: 10px 10px 15px 15px;
      background-color: transparentize($color: #000000, $amount: 0.6);
    }

    &:hover .image {
      transform: scale(1.3);
    }

    .image {
      width: 100%;
      border-radius: 10px 10px 15px 15px;
      height: 200px;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s linear;
    }
  }
}
</style>
