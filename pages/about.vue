<template>
  <main>
    <div
      class="card rounded-none -mt-5 bg-[url('/img/bg/about.jpg')] bg-cover bg-center h-60 sm:h-52 lg:h-40 relative before:absolute before:z-20 before:size-full before:top-0 before:left-0 before:bg-slate-900/50"
    >
      <div class="card-body absolute z-50 size-full">
        <h1 class="text-3xl font-semibold text-secondary">About Us</h1>
        <p class="text-secondary">
          At Steeze Pot, food isn't just what we do—it’s our passion and a way
          of bringing people together. With years of experience in the culinary
          world, we specialize in crafting meals that are not only delicious but
          also tell a story of love, flavor, and dedication.
        </p>
      </div>
    </div>

    <div class="my-10">
      <div class="grid md:grid-cols-2 items-center px-7 gap-5">
        <div class="order-2 md:order-1">
          <h2 class="text-4xl font-semibold">Our Journey</h2>
          <br />
          <p class="text-subtitle1">
            Founded by Mildred Amuche, <strong>Steeze Pot</strong> was born out
            of a deep love for <strong>cooking</strong> and sharing joy through
            <strong>food</strong>. What began as a small family kitchen serving
            friends and neighbors has now grown into a full-service
            <strong>catering business</strong>, trusted by individuals and
            organizations to deliver memorable dining experiences.
          </p>
          <div class="my-4">
            <h2 class="text-2xl font-semibold py-2">What We Offer</h2>
            <ul class="*:mb-3">
              <li>
                <strong>Personal Chef Services</strong>: Experience the luxury
                of having a professional chef prepare restaurant-quality meals
                in the comfort of your home. Perfect for intimate dinners,
                family gatherings, or special celebrations.
              </li>
              <li>
                <strong>Event Catering</strong>: Make your events unforgettable
                with our exceptional catering services. From birthdays and
                weddings to corporate meetings, we deliver delicious food that
                leaves a lasting impression.
              </li>
              <li>
                <strong>Meal Planning</strong>: Enjoy stress-free mealtime with
                our customized meal planning. We design menus to suit your
                lifestyle, nutritional goals, and family preferences, ensuring
                every meal is a delight.
              </li>
              <li>
                <strong>Customized Meal Prep</strong>: Busy schedule? Let us
                handle the cooking! Our meal prep services provide you with
                nutritious, home-cooked meals tailored to your dietary needs and
                preferences.
              </li>
            </ul>
          </div>

          <ClientOnly>
            <div class="flex gap-5 w-full ">
              <div class="text-center max-w-[200px] w-full py-4 bg-slate-50 rounded-md">
                <CountUp
                  end-val="200"
                  :options="{ enableScrollSpy: true, suffix: '+' }"
                  class="text-2xl font-semibold"
                />
                <span class="text-subtitle1">Happy Clients</span>
              </div>

              <div class="text-center max-w-[200px] w-full  py-4 bg-slate-50 rounded-md">
                <CountUp
                  end-val="3"
                  :options="{ enableScrollSpy: true, suffix: '+' }"
                  class="text-2xl font-semibold"
                />
                <span class="text-subtitle1">Years of Experience</span>
              </div>
            </div>
          </ClientOnly>
        </div>
        <div class="order-1 md:order-2">
          <nuxt-img
            src="/img/bg/about-2.jpg"
            alt="About Us"
            width="500"
            height="500"
            densities="x1"
            format="webp"
            quality="80"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <MainOurteam />
    <MainReviews />
  </main>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";

useSeoMeta({
  description:
    " Learn about Steeze Pot, a premium food delivery and catering brand offering authentic Nigerian and continental dishes. Discover our story, mission, and commitment to delivering exceptional flavors and memorable dining moments.",
  title: "About Steeze Pot - Elevating Nigerian Culinary Experiences",
  ogTitle: "About Steeze Pot - Elevating Nigerian Culinary Experiences",
  ogDescription:
    " Learn about Steeze Pot, a premium food delivery and catering brand offering authentic Nigerian and continental dishes. Discover our story, mission, and commitment to delivering exceptional flavors and memorable dining moments.",
  ogImage: "https://steeze-pot.vercel.app/img/ogimage.jpg",
  ogUrl: "https://steeze-pot.com.ng/about",
  ogType: "website",
  ogSiteName: "Steeze Pot",
  ogLocale: "en_NG",
});
</script>
