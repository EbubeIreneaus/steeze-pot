<template>
  <main>
    <div class="min-h-screen bg-gray-400">
      <!-- Container -->
      <div class="mx-auto">
        <div class="flex justify-center px-6 py-12">
          <!-- Row -->
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:!block lg:w-5/12 bg-cover rounded-l-lg"
              style="background-image: url('/img/bg/bg-auth.jpg')"
            ></div>

            <div
              class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
            >
              <h3
                class="py-4 text-2xl text-center text-gray-800 dark:text-white"
              >
                Create an Account!
              </h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="email"
                  >
                    Email
                  </label>
                  <q-input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    v-model="user.email"
                    bg-color="transparent"
                    dense
                    borderless
                  />
                </div>
                <div class="mb-4">
                  <div class="">
                    <q-input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      v-model="user.psw"
                      bg-color="transparent"
                      dense
                      borderless
                    />
                  </div>
                </div>
                <div class="mb-1">
                  <div class="">
                    <q-checkbox
                      class="w-full px-3 py-2 mb-3 text-sm"
                      label="Remember me"
                      v-model="user.remember_me"
                      color="accent"
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <q-btn
                    class="w-full px-4 py-2 font-bold text-white bg-accent rounded-full hover:bg-green-800 focus:outline-none focus:shadow-outline"
                    type="button"
                    @click="login"
                    :loading="isLoading"
                  >
                    Login
                  </q-btn>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a class="inline-block text-sm align-baseline" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <router-link
                    to="/auth/register"
                    class="inline-block text-sm align-baseline"
                  >
                    Don't have an account? Sign up
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

<script setup lang="ts">
import { NotifyError } from '~/lib/notify';

definePageMeta({
  layout: false,
});
const isLoading = ref(false);
const router = useRouter()

const user = reactive({
  email: "",
  psw: "",
  remember_me: false,
});

async function login() {
  try {
    isLoading.value = true
    const res = await $fetch<any>('/api/main/users/login', {
      method: 'POST',
      body: JSON.stringify(user)
    })

    if(res.statusCode === 200){
      if (res.token) {
        let cookie = useCookie('token', {secure: true, maxAge: 60 * 60 * 24 * 7, path: '/'})
        cookie.value = res.token
      }
      return router.push('/')
    }

    NotifyError(res.message || res.statusMessage)
  } catch (error: any) {
    NotifyError(error.message)
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
