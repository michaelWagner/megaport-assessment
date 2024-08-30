import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FunctionPlayground from '../pages/FunctionPlayground.vue'

const routes = [
  { path: '/megaport-assessment', component: Home },
  { path: '/megaport-assessment/function-playground', component: FunctionPlayground },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
