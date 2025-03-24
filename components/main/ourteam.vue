<template>
  <div class="py-20 mx-auto mb-10 bg-slate-200">
    <h2
      class="text-4xl font-semibold text-center text-slate-900 mb-10 uppercase "
    >
      Meet Our Team
    </h2>
    <div class="">
      <div>
        <div class="flex flex-col md:flex-row md:justify-evenly gap-x-5 gap-y-10">
          <figure class="max-w-[180px] mx-auto">
            <nuxt-img
              src="/img/team/mildred.jpg"
              alt="About Us"
              width="180"
              height="180"
              densities="x1"
              format="webp"
              quality="80"
              class="rounded-full"
            />
            <figcaption class="text-center text-subtitle1 font-semibold mt-2">
              Mildred Amuche <br />
              <span class="text-subtitle2 italic">Chef / CEO</span>
            </figcaption>
          </figure>

          <figure class="max-w-[180px] mx-auto">
            <nuxt-img
              src="/img/team/mildred.jpg"
              alt="About Us"
              width="180"
              height="180"
              densities="x1"
              format="webp"
              quality="80"
              class="rounded-full"
            />
            <figcaption class="text-center text-subtitle1 font-semibold mt-2">
             Imelda Alfred <br />
              <span class="text-subtitle2 italic">Cook</span>
            </figcaption>
          </figure>

          <figure class="max-w-[180px] mx-auto">
            <nuxt-img
              src="/img/team/ebube.jpg"
              alt="About Us"
              width="180"
              height="180"
              densities="x1"
              format="webp"
              quality="80"
              class="rounded-full object-cover object-center"
            />
            <figcaption class="text-center text-subtitle1 font-semibold mt-2">
              Okigwe Ebube <br />
              <span class="text-subtitle2 italic">IT / Marketing Expert</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
