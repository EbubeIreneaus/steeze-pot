<template>
  <header class="bg-primary text-white">
    <div class="bg-secondary">
      <div
        class="flex justify-end md:justify-between items-center max-w-[90%] mx-auto py-3 text-black"
      >
        <div class="hidden md:!flex justify-between gap-5">
          <div>service@steezepot.com.ng</div>
          <q-separator vertical />
          <div class="hidden lg:!inline-block">
            Free Deliveries for all Order of ₦40,000.00
          </div>
        </div>

        <div class="flex justify-end lg:!justify-between items-center gap-5">
          <ul class="hidden lg:!flex gap-4">
            <a href="">
              <li><q-icon name="fa-brands fa-facebook" /></li>
            </a>
            <a href="">
              <li><q-icon name="fa-brands fa-tiktok" /></li>
            </a>
            <a href="">
              <li><q-icon name="fa-brands fa-instagram" /></li>
            </a>
            <a href="">
              <li><q-icon name="fa-brands fa-twitter" /></li>
            </a>
          </ul>
          <!-- <q-separator vertical /> -->
          <div v-if="!user">
            <router-link to="/auth/login">
              <q-icon name="account_circle" /> &nbsp;
              <span>Login</span>
            </router-link>
          </div>
          <div v-else>
            <q-btn-dropdown
              icon="account_circle"
              :label="user?.firstname"
              flat
              dense
              class="capitalize"
            dropdown-icon=""
              no-caps
            >
              <q-list>
                <q-item to="/">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item to="/favorite">
                  <q-item-section>Favourites</q-item-section>
                </q-item>
                <q-item to="/myOrders">
                  <q-item-section>Orders</q-item-section>
                </q-item>
                <q-item to="/auth/logout">
                  <q-item-section>Signout</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
    </div>

    <!-- header nav -->
    <nav role="navigation">
      <div
        class="container flex justify-between items-center mx-auto lg:!py-4 p-4"
      >
        <div class="">
          <nuxt-img
            src="/logo.jpg"
            width="60"
            height="60"
            fill="cover"
            format="webp"
            densities="x1"
            alt="Business Logo"
            class="rounded-full"
          />
        </div>

        <ul class="*:inline *:px-4 hidden lg:!block">
          <li
            v-for="menu in MenuLinks"
            :key="menu.title"
            class="text-weight-bold spacing"
          >
            <RouterLink
              :to="menu.href"
              exact-active-class="text-grey-6"
              class="hover:text-gray-500"
              >{{ menu.title }}</RouterLink
            >
          </li>
        </ul>

        <div class="*:inline-block hidden lg:!block">
          <q-btn
            icon="favorite"
            flat
            size="sm"
            :ripple="false"
            class="focus:!bg-transparent"
            color="secondary"
            to="/favorite"
          >
            <q-badge :label="Favorites.size" class="" floating rounded></q-badge>
          </q-btn>

          <q-btn
            icon="shopping_cart"
            flat
            size="sm"
            :ripple="false"
            color="secondary"
            class=" focus:!bg-transparent"
            to="/cart"
          >
            <q-badge :label="Cart.CartItems.length" floating  rounded></q-badge>
          </q-btn>

          &nbsp;&nbsp;
          <div>
            Cart:
            <span v-naira="Cart.CartTotalPrice" class="text-weight-bold"></span>
          </div>
        </div>

        <div class="border rounded-md lg:!hidden">
          <q-btn icon="menu" @click="openAside = !openAside" unelevated />
        </div>
      </div>
    </nav>

    <div class="*:inline-block my-1 text-center lg:!hidden">
      <q-btn
        icon="favorite"
        flat
        size="sm"
        :ripple="false"
        class=" focus:!bg-transparent"
        color="secondary"
        to="/favorite"
      >
        <q-badge :label="Favorites.size" floating rounded></q-badge>
      </q-btn>

      <q-btn
        icon="shopping_cart"
        flat
        size="sm"
        :ripple="false"
        class="focus:!bg-transparent"
        color="secondary"
        to="/cart"
      >
        <q-badge :label="Cart.CartItems.length" floating rounded></q-badge>
      </q-btn>

      &nbsp;&nbsp;
      <div>
        Cart:
        <span v-naira="Cart.CartTotalPrice" class="text-weight-bold"></span>
      </div>
    </div>

    <MainMiniHeroComponent />
  </header>

  <MainSidebar :menu="MenuLinks" :open="openAside" />
</template>

<script setup lang="ts">

const openAside = ref(false)
const MenuLinks = [
  { title: 'HOME', href: '/', icon: '', sublink: [] },
  { title: 'ABOUT US', href: '/about', icon: '', sublink: [] },
  // { title: 'OUR SERVICE', href: '/about', icon: '', sublink: [] },
  { title: 'BLOG', href: '/blog', icon: '', sublink: [] },
  { title: 'BOOK APPOINTMENT', href: '/appointment', icon: '', sublink: [] },
  { title: 'CONTACT', href: '/contact', icon: '', sublink: [] },
];
const Cart = useCartStore()
const {user} = useAppStore()
const {Favorites} = useFavStore()
onMounted(() => {
  console.log(Cart.CartTotalPrice)
})
</script>

<style scoped></style>
