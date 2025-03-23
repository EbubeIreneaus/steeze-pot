<template>
  <main>
    <div class="my-10">
      <div class="card max-w-xl mx-auto">
        <div class="card-body">
          <div class="mb-3">
            <h1 class="text-3xl font-semibold">Book appointment with us.</h1>
            <p class="text-subtitle1">
              Our team will get in touch with you within one(1) hours
            </p>
          </div>

          <q-form @submit="PlaceBooking">
            <q-select
              v-model="form.type"
              :options="['Birthday', 'Home Service', 'House Party', 'Others']"
              filled
              borderless
              label="Event Type"
              aria-placeholder="what kind of event?"
              dense
              class="mb-4"
            />

            <q-input
              v-model="form.fullname"
              filled
              borderless
              label="Fullname"
              aria-placeholder="Fullname"
              dense
              class="mb-3"
            />

            <q-input
              v-model="form.email"
              type="email"
              filled
              borderless
              label="Email Address"
              aria-placeholder="Email Adress"
              dense
              class="mb-4"
            />

            <q-input
              v-model="form.phone"
              type="tel"
              filled
              borderless
              label="Phone Number"
              aria-placeholder="Phone number"
              dense
              class="mb-4"
            />

            <div class="flex flex-row flex-nowrap gap-3 mb-3">
              <q-input
                v-model="form.date"
                type="date"
                filled
                borderless
                label="Event Date"
                aria-placeholder="Event Date"
                dense
                class="mb-4 w-full"
              />

              <q-input
                v-model="form.time"
                type="time"
                filled
                borderless
                label="Event Time"
                aria-placeholder="Event Time"
                dense
                class="mb-4 w-full"
              />
            </div>

            <q-select
              v-model="form.state"
              type="text"
              :options="countries"
              filled
              borderless
              label="State"
              aria-placeholder="State"
              dense
              class="mb-4"
            />

            <div class="flex flex-nowrap gap-3">
              <q-select
                v-model="form.area"
                :options="areas"
                filled
                borderless
                label="Area"
                aria-placeholder="Area"
                dense
                class="mb-4 w-full"
              />
              <q-input
                v-model="form.bustop"
                type="text"
                filled
                borderless
                label="Bustop"
                aria-placeholder="Bustop"
                dense
                class="mb-4 w-full"
              />
            </div>
            <q-input
              v-model="form.address"
              type="text"
              multiple
              filled
              borderless
              label="Address"
              aria-placeholder="Address"
              dense
              class="mb-4"
            />

            <div>
              <p class="text-caption my-2">
                On submit, you give us consent to contant you regarding this
                appointment.
              </p>
              <q-btn
                class="btn btn-primary px-10"
                label="submit"
                type="submit"
                :loading="isLoading"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { CountriesList } from "~/lib/country";
import Swal from 'sweetalert2'
import { NotifyError } from "~/lib/notify";
const isLoading = ref(false);

useSeoMeta({
  description:
    "Schedule catering services or book a private chef for your next event. Steeze Pot provides tailored food services for weddings, parties, corporate events, and more.",
  title: "Book Catering or Private Chef | Steeze Pot",
  ogTitle: "Book Catering or Private Chef | Steeze Pot",
  ogDescription:
    "Schedule catering services or book a private chef for your next event. Steeze Pot provides tailored food services for weddings, parties, corporate events, and more.",
  ogUrl: "https://steeze-pot.com.ng/appointment",
});


const form = reactive({
  type: "",
  fullname: "",
  email: "",
  phone: "",
  state: "",
  area: "",
  address: "",
  date: "",
  time: "",
  bustop: "",
});

const countries = CountriesList.map((c) => c.name);
const areas = ref([]);

watch(
  () => form.state,
  (val) => {
    form.area = "-----select state---------";
    const country = CountriesList.find((c) => c.name == val);
    areas.value = country?.lgas as [];
  }
);

async function PlaceBooking() {
  isLoading.value = true;
  try {
    const res = await $fetch<any>("/api/main/appointment/new", {
      method: "POST",
      body: form,
    });

    if(res.statusCode === 201){
       const {isConfirmed} = await Swal.fire({
            icon: 'success',
            title: 'Appointment Booking',
            text: 'we have recieve your appointment, our team will get in touch with you as soon as possible.',
            confirmButtonText: 'okay 🤝',
            
        })
        
        if (isConfirmed) {
         return location.reload()
        }

        return
    }

    return NotifyError(res.data, 'top-right')

  } catch (error: any) {
    return NotifyError(error.statusMessage, 'top-right')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped></style>
