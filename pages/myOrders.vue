<template>
  <div class="card">
    <div class="card-body">
      <div class="">
        <div>
            <div class="flex justify-between items-center px-2 py-3">
                <h2 class="font-semibold text-xl invisible sm:!visible">ORDERS</h2>
                <div>
                    <select class="select outline-none select-bordered" v-model="display">
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                        <option value="delivered">Delivered</option>
                        <option value="undelevered">Undelivered</option>
                    </select>
                </div>
            </div>
        </div>

        <q-table :columns="column" :rows="orders" separator="none" flat :loading="isLoading"  class="w-full">
            <template v-slot:body="props">
                <q-tr>
                    <q-td class="underline"><nuxt-link :to="`/order/${props.row.id}`">#{{ props.row.id }}</nuxt-link></q-td>
                    <q-td><div v-naira="props.row.totalAmount"></div></q-td>

                    <q-td v-if="props.row.paid"><q-icon color="green-10" name="check_circle" /></q-td>
                    <q-td v-else><q-icon color="red-10" name="cancel" /></q-td>

                    <q-td v-if="props.row.delivered"><q-icon color="green-10" name="check_circle" /></q-td>
                    <q-td v-else><q-icon color="red-10" name="cancel" /></q-td>

                    <q-td>{{ date.formatDate(props.row.createdAt, "MMMM DD, YYYY") }}</q-td>

                </q-tr>
            </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { date, type QTableColumn } from "quasar";

const isLoading = ref(false)
const router = useRouter()
const { user } = useAppStore();

if (!user || !user?.id) {
    router.push('/auth')
}
type displayType = "all" | "paid" | "delivered" | "pending";
const display = ref<displayType>("all");

const { data: orders, error } = await useFetch<any>("/api/main/orders/all?userId="+user?.id);

const column: QTableColumn[] = [
  { name: "id", field: "id", label: "ID", align: "left", sortable: true },
  {
    name: "amount",
    field: "totalAmount",
    label: "Amount",
    align: "left",
    sortable: true,
  },
  { name: "paid", field: "paid", label: "Paid", align: "left", sortable: true },
  {
    name: "delivered",
    field: "delivered",
    label: "Delivered",
    align: "left",
    sortable: true,
  },
  {
    name: "date",
    field: "createdAt",
    label: "Date",
    align: "left",
    sortable: true,
  },
];

async function refetch(){
    try {
        isLoading.value = true
        const res = await $fetch(`/api/main/orders/all?userId=${user?.id}&display=${display.value}`)
        orders.value = res
    } catch (error) {
        console.log(error)
    }finally {
        isLoading.value = false
    }
}

watch(()=>display.value, () => refetch())
</script>

<style scoped></style>
