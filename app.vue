<script lang="ts" setup>
onMounted(() => {
  const loader = document.getElementById("loader");
  loader?.classList.add("fade-out");
});

useSeoMeta({
  description:
    "Steeze Pot offers premium food delivery and catering services in Nigeria. Order from a wide variety of freshly prepared meals, from starters to grills, desserts, and more. Book appointments for events or enjoy free delivery on orders above ₦40,000. Experience delicious meals made with passion and top-quality ingredients",
  title:
    "Steeze Pot | Gourmet Meals, Catering & Online Food Delivery in Nigeria",
  ogTitle:
    "Steeze Pot | Gourmet Meals, Catering & Online Food Delivery in Nigeria",
  ogDescription:
    "Steeze Pot offers premium food delivery and catering services in Nigeria. Order from a wide variety of freshly prepared meals, from starters to grills, desserts, and more. Book appointments for events or enjoy free delivery on orders above ₦40,000. Experience delicious meals made with passion and top-quality ingredients",
  ogImage: "https://steeze-pot.netlify.app/img/ogimage.png",
  ogUrl: "https://steeze-pot.com.ng",
  ogType: "website",
  ogSiteName: "Steeze Pot",
  ogLocale: "en-NG",
  twitterTitle:
    "Steeze Pot | Gourmet Meals, Catering & Online Food Delivery in Nigeria",
  twitterDescription:
    "Steeze Pot offers premium food delivery and catering services in Nigeria. Order from a wide variety of freshly prepared meals, from starters to grills, desserts, and more. Book appointments for events or enjoy free delivery on orders above ₦40,000. Experience delicious meals made with passion and top-quality ingredients",
  twitterImage: "https://steeze-pot.netlify.app/img/ogimage.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>

    <div class="loader" id="loader">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: #292d36; /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 80px;
  height: 80px;
  border: 8px solid #ffffd6; /* Darker border for contrast */
  border-top: 8px solid #292d36; /* Accent color */
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Optional Fade-Out Effect */
.loader.fade-out {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.page-enter-from,
.layout-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.page-leave-to,
.layout-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
