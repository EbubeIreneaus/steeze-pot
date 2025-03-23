<template>
  <main>
    <div>
      <section class="" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div
              class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
            >
              <p
                class="text-base font-semibold uppercase tracking-wide text-primary"
              >
                Contact
              </p>
              <h2
                class="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl"
              >
                Get in Touch
              </h2>
              <p
                class="mx-auto mt-4 max-w-3xl text-xl text-gray-600"
              >
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-gray-600">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3
                        class="mb-2 text-lg font-medium leading-6 text-gray-900"
                      >
                        Our Address
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Block 38 julius Berger camp, kubwa
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Abuja, Nigeria
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                        ></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 "
                      >
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mobile: <a href="tel:+2348104403050">+234 810 440 3050</a>
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mail: <a href="mailto:service@steeze-pot.com.ng">service@steeze-pot.com.ng</a>
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 "
                      >
                        Working hours
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold ">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label
                        ><input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label
                        ><input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label
                      ><textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full btn btn-primary px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244273872!2d7.367464835462986!3d9.024416368785994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1726014110014!5m2!1sen!2sng"
          height="500"
          style="border: 0; width: 100%"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  description:
    "Reach out to Steeze Pot for inquiries, orders, or customer support. Call, email, or send a message — we're available 24/7 to meet your food and catering needs.",
  title: "Contact Steeze Pot - We're Here to Serve You",
  ogTitle: "Contact Steeze Pot - We're Here to Serve You",
  ogDescription:
    "Reach out to Steeze Pot for inquiries, orders, or customer support. Call, email, or send a message — we're available 24/7 to meet your food and catering needs.",
  ogUrl: "https://steeze-pot.com.ng/contact",
});
</script>

<style scoped></style>
