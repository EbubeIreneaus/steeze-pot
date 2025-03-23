<template>
    <header class="flex justify-between items-center py-2 px-10 bg-gradient-to-tr from-slate-400 to to-primary uppercase">
        <nuxt-link to="/8/admin" class="text-slate>100"><h2 class="text-4xl font-bold">Admin DB</h2></nuxt-link>
        <div>

        </div>
    </header>
      <slot></slot>
      <footer class="flex justify-between items-center py-3 sm:px-10 px-3 bg-gradient-to-tr from-slate-400 to to-primary uppercase">
        <span>&copy; {{ new Date().getFullYear() }} Steeze-Pot</span>
        <span>Developed By <a href="https://ebustech.vercel.app" target="_blank" rel="noopener noreferrer" class="font-semibold">Ebustech</a></span>
      </footer>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped></style>
  