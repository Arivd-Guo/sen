import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/Booking.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
