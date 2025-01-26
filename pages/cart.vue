<template>
  <main>
    <div class="my-10 mx-auto q-px-md">
      <div>
        <div class="!overflow-x-auto" v-if="Cart.CartItems.length > 0">
          <div
            class="lg:max-w-5xl md:max-w-3xl max-w-2xl mx-auto block"
            v-auto-animate
          >
            <div class="w-full overflow-x-auto">
              <div class="">
                <div
                  v-for="(item, index) in Cart.CartItems"
                  :key="item.id"
                  class="bg-slate-50 rounded-lg mb-3 px-2"
                >
                  <div
                    class="grid md:grid-cols-4 grid-cols-1 gap-y-4 md:items-center"
                  >
                    <div class="py-3 font-semibold">
                      <nuxt-img
                        :src="`/img/products/${item.image}`"
                        class="w-16 rounded-lg"
                        width="64px"
                        densities="x1"
                        :alt="item.imageAlt || item.name"
                      />
                    </div>
                    <div class="md:py-7 font-semibold">
                      <span class="capitalize">{{ item.name }}</span>
                    </div>
                    <div>
                      <div class="flex items-center w-fit">
                        <q-btn
                          icon="remove"
                          unelevated
                          color="red-10"
                          @click="item.quantity--"
                          dense
                          size="sm"
                        />
                        <q-input
                          v-model="item.quantity"
                          :error="item.quantity < 1"
                          standout
                          borderless
                          class="w-16 h-7"
                          dense
                          input-style="text-align: center; height: 28px;"
                          :disable="item.quantity <= 1"
                        />
                        <q-btn
                          icon="add"
                          unelevated
                          color="green-10"
                          dense
                          @click="item.quantity++"
                          size="sm"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center gap-x-2 font-bold">
                        <span v-naira="item.price"></span>
                        <q-icon name="close" />
                        <span>{{ item.quantity }}</span>
                      </div>
                      <q-btn
                        label="remove product"
                        dense
                        flat
                        no-caps
                        :ripple="false"
                        text-color="red-14"
                        @click="Cart.removeItem(item.id)"
                        class="!p-0"
                      >
                        <q-tooltip>remove {{ item.name }} from cart</q-tooltip>
                      </q-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <q-btn label="proceed to checkout" color="primary" to="/checkout" unelevated class="btn mt-7" />
          </div>
        </div>

        <div v-else>
          <div class="card">
            <div class="card-body">
              <div class="text-center">
                <h2 class="text-2xl font-semibold">Your cart is empty</h2>
                <p class="text-gray-500">
                  You have no items in your cart.
                  <router-link to="/" class="text-primary font-semibold"
                    >Go to kitchen</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const Cart = useCartStore();
</script>

<style scoped></style>
