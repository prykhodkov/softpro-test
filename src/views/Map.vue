<template>
  <div class="map-page py-8">
    <div class="container h-full">
      <div class="map-page__grid h-full">
        <div id="map" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRentalStore } from '@/stores/rentalStore'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const router = useRouter()
const rentalStore = useRentalStore()
const mapContainer = ref(null)
const map = ref(null)

onMounted(() => {
  map.value = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json',
    center: [30.5234, 50.4501],
    zoom: 13
  })

  rentalStore.rentals.forEach(rental => {
    if (!map.value) return

    const marker = new maplibregl.Marker()
      .setLngLat(rental.geometry.coordinates)
      .addTo(map.value)

    const el = marker.getElement()
    el.style.cursor = 'pointer'

    marker.getElement().addEventListener('click', () => {
      router.push(`/property/${rental.id}`)
    })
  })
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})
</script>

<style lang="scss" scoped>
.map-page {
  height: calc(100vh - 64px);

  #map {
    height: 100%;
    width: auto;
  }
}
</style>