<template>
  <div
    class="h-screen flex justify-center items-center bg-slate-50"
    v-if="status === 'completed'"
  >
    <div class="card card-bordered max-w-lg w-full">
      <div class="card-body">
        <div class="text-center">
          <q-icon name="fa fa-spinner" size="lg" class="mb-3 animate-spin" />
          <p>verifying transaction, please wait....</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NotifyError, NotifySuccess } from "~/lib/notify";

definePageMeta({
  layout: false,
});
const router = useRouter();
const route = useRoute();

const { tx_ref, status, transaction_id } = route.query;

if (!status || status !== "completed") {
  NotifyError("Transaction failed, please try again", "top-right");
  setTimeout(() => {
    router.push("/");
  }, 2000);
}

// verify transaction
async function verify() {
  try {
    const data = await $fetch<any>("/api/main/checkout/verify", {
      method: "post",
      body: { tx_ref, status, transaction_id },
    });

    if (data.statusCode === 200) {
      NotifySuccess("Payment Confirmed", "top-right");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  } catch (error) {
    NotifyError("Payment Unsucessful", "top-right");
    setTimeout(() => {
        router.push("/");
      }, 3000);
  }
}
onMounted(() => {
  verify();
});
</script>

<style scoped></style>
