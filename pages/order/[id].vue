<template>
  <div>
    <div
      class="max-w-md bg-slate-100 mx-auto rounded-lg overflow-hidden p-6"
    >
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Order ID: {{ order.id }}
      </h2>
      <p class="text-gray-600">
         Amount:
        <span class="font-semibold" v-naira="order.totalAmount"></span>
      </p>
      <p class="text-gray-600">
        Paid:
        <span class="font-semibold" :class="order.paid?'text-green-500':'text-red-500'">{{
          order.paid ? "Yes" : "No"
        }}</span>
      </p>
      <p class="text-gray-600">
        Delivered:
        <span class=" font-semibold" :class="order.delivered?'text-green-500':'text-red-500'">{{
          order.delivered ? "Yes" : "No"
        }}</span>
      </p>

      <p class="text-gray-600">
        Date:
        <span class=" font-semibold" >{{
          date.formatDate(order.createdAt, "MMMM DD, YYYY")
        }}</span>
      </p>

      <div class="border-t my-4"></div>
      <h3 class="text-lg font-semibold mb-2">Products</h3>
      <div
        class="p-4 bg-gray-50 rounded-lg"
        v-for="p in order.products"
        :key="p.id"
      >
        <p class="text-gray-700 font-medium">{{ p.name }}</p>
        <p class="text-gray-500 text-sm">
          Price: <span v-naira="p.price"></span> | Quantity: {{ p.quantity }}
        </p>
      </div>

      <div class="border-t my-4"></div>
      <h3 class="text-lg font-semibold mb-2">Delivery Address</h3>
      <p class="text-gray-600">
        State: <span class="font-semibold">{{ order.deliveryAddress.state }}</span>
      </p>
      <p class="text-gray-600">
        Area: <span class="font-semibold">{{ order.deliveryAddress.area }}</span>
      </p>
      <p class="text-gray-600">
        Street: <span class="font-semibold">{{ order.deliveryAddress.street  }}</span>
      </p>
      <p class="text-gray-600">
        Bus Stop: <span class="font-semibold">{{ order.deliveryAddress.bustop  }}</span>
      </p>
      <p class="text-gray-600">
        Address: <span class="font-semibold">{{ order.deliveryAddress.address  }}</span>
      </p>

      <div class="flex gap-3 mt-6">
        <button class="btn btn-success flex-1" :disabled="(order.paid && order.delivered)||(!order.paid)">Mark as Delivered</button>
        <button class="btn btn-info flex-1" v-if="!order.paid">Make Payment</button>
        <button class="btn btn-error flex-1" :disabled="order.paid && order.delivered">Cancel Order</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {date} from 'quasar'
const route = useRoute();
const orderID = route.params.id;

const { data: order, error } = await useFetch<any>(
  "/api/main/orders/" + orderID
);
</script>

<style scoped>
li.title {
  font-weight: bolder;
  font-size: 20px;
}

li.res {
  font-weight: 200;
  font-size: 16px;
}
</style>
