<template>
  <ul class="space-y-4">
    <li
      v-for="(item, index) in rentals"
      :key="index"
      class="p-4 border border-gray-300 rounded shadow-sm hover:bg-gray-50 hover:cursor-pointer"
      @click="goToRental(item.id)"
    >
      <h2 class="text-2xl mb-4">{{ item.name }}</h2>
      <p class="text-gray-600">{{ item.location }}</p>
      <p class="mb-4">{{ item.description }}</p>
      <p class="font-semibold">Ціна: {{ item.price }} грн/міс</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Rental } from '@/types/Rental'

defineProps<{ rentals: Rental[] }>()

const router = useRouter()

const goToRental = (id: string) => {
  router.push(`/property/${id}`)
}
</script>
