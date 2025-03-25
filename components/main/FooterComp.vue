<template>
  <footer class="px-4 divide-y bg-primary text-secondary">
    <div
      class="container grid lg:grid-cols-3 gap-4 justify-between py-10 mx-auto space-y-8 lg:space-y-0"
    >
      <div class="lg:col-span-1">
        <a
          rel="noopener noreferrer"
          href="#"
          class="flex space-x-3 lg:justify-start"
        >
          <nuxt-img
            src="/logo.jpg"
            format="webp"
            width="120px"
            densities="x1"
            class="w-32 rounded-full"
            alt="Business Logo"
          />
        </a>
        <div class="my-5 text-body2 text-balance">
          Steeze Pot offers premium food delivery and catering services in
          Nigeria. Order from a wide variety of freshly prepared meals, from
          starters to grills, desserts, and more. Book appointments for events
          or enjoy free delivery on orders above ₦100,000.00 Experience delicious
          meals made with passion and top-quality ingredients.
        </div>
      </div>

      <div
        class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 sm:grid-cols-4 lg:col-span-2"
      >
        <div class="space-y-3">
          <h5 class="tracking-wide uppercase">Product</h5>
          <ul class="space-y-1 *:font-semibold">
            <li class="hover:!text-secondary/50">
              <nuxt-link to="/" href="#">Home</nuxt-link>
            </li>
            <li class="hover:!text-secondary/50">
              <nuxt-link to="/about" href="#">About Us</nuxt-link>
            </li>
            <li class="hover:!text-secondary/50">
              <nuxt-link to="/service" href="#">Our Service</nuxt-link>
            </li>
            <li class="hover:!text-secondary/50">
              <nuxt-link to="/blog" href="#">Blog</nuxt-link>
            </li>
            <li class="hover:!text-secondary/50">
              <nuxt-link to="/appointment" href="#">Book Appointment</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="space-y-3">
          <h5 class="tracking-wide uppercase">Company</h5>
          <ul class="space-y-1 *:font-semibold">
            <li><a rel="noopener noreferrer" href="#">Privacy</a></li>
            <li><a rel="noopener noreferrer" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div class="space-y-3">
          <h5 class="uppercase">Downloads</h5>
          <ul class="space-y-1 *:font-semibold">
            <li><a rel="noopener noreferrer" href="#">Android</a></li>
            <li><a rel="noopener noreferrer" href="#">IOS</a></li>
            <li><a rel="noopener noreferrer" href="#">Windows</a></li>
          </ul>
        </div>
        <div class="space-y-3">
          <div class="uppercase">Social media</div>
          <div class="flex justify-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              class="flex items-center p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-5 h-5 fill-current"
              >
                <path
                  d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
                ></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              class="flex items-center p-1"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-current"
              >
                <path
                  d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                ></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              class="flex items-center p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="w-5 h-5 fill-current"
              >
                <path
                  d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.844-0.885 0.885-1.432 1.781-1.844 2.833-0.396 1.021-0.661 2.177-0.745 3.885-0.073 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.708 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.844 2.833 0.885 0.885 1.781 1.432 2.833 1.844 1.021 0.396 2.177 0.661 3.885 0.745 1.703 0.073 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.708-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.844 0.885-0.885 1.432-1.781 1.844-2.833 0.396-1.021 0.661-2.177 0.745-3.885 0.073-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.708-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.844-2.833-0.885-0.885-1.781-1.432-2.833-1.844-1.021-0.396-2.177-0.661-3.885-0.745-1.703-0.073-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.563 0.073 2.411 0.333 2.974 0.553 0.751 0.292 1.276 0.641 1.844 1.208 0.567 0.567 0.917 1.093 1.208 1.844 0.219 0.563 0.48 1.411 0.553 2.974 0.073 1.688 0.093 2.198 0.093 6.469s-0.021 4.781-0.093 6.469c-0.073 1.563-0.333 2.411-0.553 2.974-0.292 0.751-0.641 1.276-1.208 1.844-0.567 0.567-1.093 0.917-1.844 1.208-0.563 0.219-1.411 0.48-2.974 0.553-1.688 0.073-2.198 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.563-0.073-2.411-0.333-2.974-0.553-0.751-0.292-1.276-0.641-1.844-1.208-0.567-0.567-0.917-1.093-1.208-1.844-0.219-0.563-0.48-1.411-0.553-2.974-0.073-1.688-0.093-2.198-0.093-6.469s0.021-4.781 0.093-6.469c0.073-1.563 0.333-2.411 0.553-2.974 0.292-0.751 0.641-1.276 1.208-1.844 0.567-0.567 1.093-0.917 1.844-1.208 0.563-0.219 1.411-0.48 2.974-0.553 1.688-0.073 2.198-0.093 6.469-0.093z"
                ></path>
                <path
                  d="M16 7.807c-4.528 0-8.193 3.665-8.193 8.193s3.665 8.193 8.193 8.193 8.193-3.665 8.193-8.193-3.665-8.193-8.193-8.193zM16 21.083c-2.805 0-5.083-2.278-5.083-5.083s2.278-5.083 5.083-5.083 5.083 2.278 5.083 5.083-2.278 5.083-5.083 5.083z"
                ></path>
                <path
                  d="M24.323 7.678c0 1.056-0.857 1.911-1.911 1.911s-1.911-0.857-1.911-1.911c0-1.056 0.857-1.911 1.911-1.911s1.911 0.857 1.911 1.911z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 text-sm text-center font-semibold">
      © {{ new Date().getFullYear() }} STEEZEPOT.COM.NG. All rights reserved.
      <br />
      Developed By <a href="https://ebustech.vercel.app" class="underline" target="_blank">Ebustech</a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
