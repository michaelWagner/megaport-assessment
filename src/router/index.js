import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FunctionPlayground from '../pages/FunctionPlayground.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/function-playground', component: FunctionPlayground },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
