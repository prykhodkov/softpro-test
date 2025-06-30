<template>
  <div class="property-page py-8" v-if="rental">
    <div class="container">
      <div class="home-page__grid p-4 border border-gray-300 rounded shadow-sm hover:bg-gray-50 hover:cursor-pointer">
        <h1 class="text-2xl mb-4">{{ rental.name }}</h1>
        <p class="text-gray-600">{{ rental.location }}</p>
        <p class="mb-4">{{ rental.description }}</p>
        <p class="font-semibold">Ціна: {{ rental.price }} грн/міс</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Приміщення не знайдено.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRentalStore } from '@/stores/rentalStore'
import { computed } from 'vue'

const route = useRoute()
const store = useRentalStore()

const rental = computed(() =>
  store.rentals.find((r) => r.id === route.params.id)
)
</script>

<style lang="scss" scoped>
.property-page {
  height: calc(100vh - 64px);
}
</style>