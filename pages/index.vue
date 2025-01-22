<template>
  <main>
    <MainFoodCategorySlide />
    <MainProductListSection
      :header="category.name"
      :Products="category.products"
      v-for="category in data?.categories"
      :key="category.id"
    />
  </main>
</template>

<script setup lang="ts">
const categories = [
  { id: 0, title: "Starter", value: "starter", src: "starter.jpg" },
  { id: 1, title: "Rice", value: "rice", src: "rice.jpg" },
  { id: 2, title: "Sauce", value: "sauce", src: "sauce.jpeg" },
  { id: 3, title: "Soup", value: "soup", src: "soup.jpeg" },
  { id: 4, title: "Stew", value: "stew", src: "stew.jpeg" },
  { id: 5, title: "Pasta", value: "pasta", src: "Pasta.jpg" },
  { id: 6, title: "Grill", value: "grill", src: "grill.jpg" },
  { id: 7, title: "Desert", value: "Desert", src: "desert.jpg" },
  { id: 8, title: "Snack", value: "snack", src: "snack.jpg" },
  { id: 9, title: "Mocktail", value: "mocktail", src: "mocktail.jpg" },
  { id: 10, title: "Breakfast", value: "breakfast", src: "breakfast.jpg" },
  { id: 11, title: "Porridge", value: "porridge", src: "porridge.jpeg" },
  { id: 12, title: "Sallad", value: "sallad", src: "sallad.jpg" },
  { id: 13, title: "Sides", value: "sides", src: "sides.jpeg" },
];

type TypesData = {
  categories: {
    name: string;
    id: number;
    src: string;
    alt: string;
    products: [];
  }[];
};

const { data, error, status } = useFetch<TypesData>("/api/main/product/all");
</script>

<style scoped></style>
