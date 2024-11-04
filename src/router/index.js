import { createRouter, createWebHistory } from 'vue-router'
import { Home, AboutUs, Solution, Pricing, Knowledge, Event } from '../modules/pages/index.ts'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about-us',
        component: AboutUs
      },
      {
        path: 'solution',
        component: Solution
      },
      {
        path: 'pricing',
        component: Pricing
      },
      {
        path: 'knowledge',
        component: Knowledge
      },
      {
        path: 'event',
        component: Event
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router