<template>
  <div
    class="h-screen flex justify-center items-center bg-slate-50"
    v-if="status === 'success'"
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
import { NotifyError } from "~/lib/notify";

definePageMeta({
  layout: false,
});
const router = useRouter();
const route = useRoute();

const { tx_ref, status } = route.query;

if (!status || status !== "success") {
  NotifyError("Transaction failed, please try again", "top-right");
  setTimeout(() => {
    router.push("/");
  }, 2000);
}
// verify transaction
</script>

<style scoped></style>
