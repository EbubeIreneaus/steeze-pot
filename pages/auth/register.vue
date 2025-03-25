<template>
  <main>
    <div class="h-screen bg-gray-400">
      <!-- Container -->
      <div class="mx-auto">
        <div class="flex justify-center px-6 py-12">
          <!-- Row -->
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <!-- Col -->
            <div
              class="w-full h-auto bg-gray-400 hidden lg:!block lg:w-5/12 bg-cover rounded-l-lg"
              style="background-image: url('/img/bg/bg-auth.jpg')"
            ></div>
            <!-- Col -->
            <div
              class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
            >
              <h3 class="py-4 text-2xl text-center text-primary">
                Create an Account!
              </h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div
                  class="mb-4 grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5"
                >
                  <q-input
                    v-model="user.firstname"
                    label="firstname"
                    aria-placeholder="firstname"
                    filled
                    dense
                  />
                  <q-input
                    v-model="user.lastname"
                    label="lastname"
                    aria-placeholder="lastname"
                    filled
                    dense
                  />
                  <q-input
                    type="email"
                    v-model="user.email"
                    label="email"
                    aria-placeholder="email"
                    class=""
                    filled
                    dense
                  />
                  <q-input
                    type="tel"
                    v-model="user.phone"
                    label="phone"
                    aria-placeholder="phone number"
                    class=""
                    filled
                    dense
                  />

                  <q-input
                    type="password"
                    v-model="user.psw"
                    label="password"
                    aria-placeholder="password"
                    filled
                    dense
                  />
                  <q-input
                    type="password"
                    v-model="confirm"
                    label="confirm"
                    aria-placeholder="confirm password"
                    filled
                    dense
                  />
                </div>
                <div class="mb-6 mt-3 text-center">
                  <p class="text-sm text-left text-gray-600">
                    By signing up, you agree to our
                    <nuxt-link to="/terms-of-service" class="font-semibold text-primary"
                      >terms of service</nuxt-link
                    >
                    and
                    <nuxt-link to="/privacy-policy" class="font-semibold text-primary"
                      >privacy policies</nuxt-link
                    >
                  </p>
                  <br />

                  <q-btn
                    class="w-full px-4 py-2 font-bold text-white bg-accent rounded-full hover:bg-green-800 focus:outline-none focus:shadow-outline"
                    type="button"
                    flat
                    @click="register"
                    :loading="isLoading"
                  >
                    Register Account
                  </q-btn>
                </div>
                <hr class="mb-6 border-t" />

                <div class="text-center">
                  <router-link
                    to="/auth/login"
                    class="inline-block text-sm align-baseline"
                  >
                    Already have an account? Login!
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { NotifyError } from "~/lib/notify";

definePageMeta({
  layout: false,
});
const router = useRouter();
const confirm = ref("");
const isLoading = ref(false);

const user = reactive({
  firstname: "",
  lastname: "",
  email: "",
  psw: "",
  phone: "",
});

function validatePsw() {
  if (user.psw.length < 6) {
    alert("password must be upto six characters long");
    return false;
  }
  if (user.psw != confirm.value) {
    alert("mismatch password, check password and try again");
    return false;
  }
  return true;
}

async function register() {
  if (!validatePsw()) return;
  try {
    isLoading.value = true;
    const res = await $fetch<any>("/api/main/users/register", {
      method: "PUT",
      body: JSON.stringify(user),
    });
    if (res.statusCode === 201) {
      if (res.token) {
        let cookie = useCookie("token", {
          secure: true,
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
        cookie.value = res.token;
      }
      return router.push("/");
    }
    console.log(res)
    NotifyError(res.message || res.statusMessage);
  } catch (error: any) {
    NotifyError(error.message);
  } finally {
    isLoading.value = false;
  }
}
</script>
