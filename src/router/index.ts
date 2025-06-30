import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Property from '@/views/Property.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/map', name: 'Map', component: Map },
  { path: '/property/:id', name: 'Property', component: Property }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router