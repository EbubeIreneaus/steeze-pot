<template>
  <aside class="fixed top-0 z-[9999] h-dvh aside-close bg-secondary overflow-y-auto overflow-x-hidden" :class="open?'aside-open': 'aside-close'">
    <div class="my-12 mx-5">
      <div class="w-28">
        <nuxt-img
          src="/logo.jpg"
          width="60px"
          height="60px"
          format="webp"
          densities="x1"
          alt="Business Logo"
          class="rounded-full"
        />
      </div>

      <div class="my-7">
        <div class="*:inline-block my-1">
          <q-btn
            icon="favorite"
            flat
            size="sm"
            :ripple="false"
            class="!text-black focus:!bg-transparent"
            to="/favorite"
          >
            <q-badge :label="Favorites.size"  floating rounded></q-badge>
          </q-btn>

          <q-btn
            icon="shopping_bag"
            flat
            size="sm"
            :ripple="false"
            class="!text-black focus:!bg-transparent"
            to="/cart"
          >
            <q-badge :label="Cart.CartItems.length" floating class="" rounded></q-badge>
          </q-btn>

          &nbsp;&nbsp;
          <div>
            Cart:
            <span v-naira="Cart.CartTotalPrice" class="text-weight-bold"></span>
          </div>
        </div>
      </div>

      <nav role="navigation" class="mb-5">
        <q-list separator>
          <q-item
            :to="link.href"
            v-for="link in menu"
            :key="link.title"
            class="my-0.5 text-weight-bold"
            exact-active-class="text-grey-6"
            active-class=""
          >
            <q-item-section>{{ link.title }}</q-item-section>
          </q-item>
        </q-list>
      </nav>

      <div class="flex gap-5 px-3 mb-5">
        <a href="#" rel="nofollow"><q-icon name="fa-brands fa-facebook" /></a>
        <a href="#"><q-icon name="fa-brands fa-twitter" /></a>
        <a href="#"><q-icon name="fa-brands fa-instagram" /></a>
        <a href="#"><q-icon name="fa-brands fa-youtube" /></a>
      </div>

      <div class="px-3 font-medium text-gray-500/ mb-4">
        <div class="mb-3">
          <q-icon name="mail" />&nbsp; service@steeze-pot.com.ng
        </div>
        <div><q-icon name="phone" />&nbsp; +234 810 440 3050</div>
      </div>

      <div>Free delivery for all orders above <span v-naira="100000"></span></div>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ menu: any[], open: boolean }>();
const emit = defineEmits(['close'])
const Cart = useCartStore()
const {Favorites} = useFavStore()

onMounted(() => {
  const a = document.querySelectorAll('a')
  const aside = document.querySelector('aside')
  a.forEach((el) => {
    el.addEventListener('click', () => {
      emit('close')
    })
  })
})
</script>

<style scoped>
aside {
    transition: all .1s linear;
}
.aside-close {
    opacity: 0;
    max-width: 0;
}

.aside-open {
    opacity: 1;
    max-width: 80%;
}

</style>
