<template>
  <div class="home-page py-8">
    <div class="container h-full overflow-y-auto">
        <div class="home-page__grid flex flex-col justify-start items-start h-full w-full">
          <SearchInput
            v-model="searchQuery"
            :debounce="true"
            placeholder="Пошук за назвою"
            class="w-full mb-8"
          />
          <List :rentals="paginatedRentals" class="w-full mb-8" />
          <Pagination
            v-if="filteredRentals.length > itemsPerPage"
            v-model="currentPage"
            :total-items="filteredRentals.length"
            :items-per-page="itemsPerPage"
            class="w-full mt-auto"
          />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import List from '@/components/List.vue'
  import SearchInput from '@/components/SearchInput.vue'
  import Pagination from '@/components/Pagination.vue'
  import { useRentalStore } from '@/stores/rentalStore'

  const searchQuery = ref('')
  const currentPage = ref(1)
  const itemsPerPage = 3

  const rentalStore = useRentalStore()
  const filteredRentals = computed(() => {
    const q = searchQuery.value.toLowerCase().trim()
    const all = rentalStore.rentals

    if (!q) return all

    return all.filter(r =>
      r.name.toLowerCase().includes(q)
    )
  })

  const paginatedRentals = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return filteredRentals.value.slice(start, start + itemsPerPage)
  })

  watch(searchQuery, () => {
    currentPage.value = 1
  })
</script>

<style lang="scss" scoped>
.home-page {
  height: calc(100vh - 64px);
}
</style>