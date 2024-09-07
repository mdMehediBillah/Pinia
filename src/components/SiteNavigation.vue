<template>
  <header class="sticky top-0 bg-cyan-600 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 justify-between"
    >
      <router-link
        :to="{ name: 'home' }"
        class="text-2xl font-bold flex items-center gap-2"
      >
        <div>
          <img src="../assets/Pinialogo.svg" alt="pinia logo" class="w-8" />
        </div>
        <span class="text-3xl pt-2 rotate-3">Pinia</span>
      </router-link>

      <div class="flex gap-4">
        <router-link :to="{ name: 'home' }" class="hover:underline">
          Home
        </router-link>
        <router-link :to="{ name: 'about' }" class="hover:underline">
          About
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
