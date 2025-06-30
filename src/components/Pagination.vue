<template>
  <div class="flex items-center gap-2 justify-center">
    <button
      class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:cursor-pointer"
      :disabled="currentPage === 1"
      @click="goTo(currentPage - 1)"
    >
      Назад
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="px-3 py-1 border border-gray-300 rounded hover:cursor-pointer"
      :class="{ 'bg-blue-500 text-white': page === currentPage }"
      @click="goTo(page)"
    >
      {{ page }}
    </button>

    <button
      class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:cursor-pointer"
      :disabled="currentPage === totalPages"
      @click="goTo(currentPage + 1)"
    >
      Вперед
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  totalItems: number
  itemsPerPage: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
)

const currentPage = computed(() => props.modelValue)

function goTo(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page)
  }
}
</script>
