<template>
  <header class="header flex items-center h-16 w-full py-2 bg-white shadow">
    <div class="container">
      <div class="header__grid flex justify-between items-center">
        <div class="header__logo w-3xs"><img :src="logo" alt="" class="w-full"></div>
        <nav class="header__nav text-lg">
          <RouterLink to="/" class="ml-4 p-1">Home</RouterLink>
          <RouterLink to="/map" class="ml-4 p-1">Map</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import logo from '@/assets/logo.svg'
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    @media only screen and (max-width: 500px) {
      width: 170px;
    }
  }
}
</style>