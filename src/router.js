import { createRouter, createWebHistory } from "vue-router"
import HomePage from './pages/Home.vue'
import DeterminerPage from './pages/Determiner.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/purpose', name: 'determiner', component: DeterminerPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
