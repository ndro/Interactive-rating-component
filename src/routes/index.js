import { createRouter, createWebHistory } from 'vue-router'

import Rating from '../pages/rating.vue'
import ThankYou from '../pages/thankyou.vue'

const routes = [
  {
    path: '/',
    name: 'Rating',
    component: Rating
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = createRouter({
  history: createWebHistory('/interactive-rating-component'),
  routes
})

export default router