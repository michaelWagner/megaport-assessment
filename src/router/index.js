import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CodeSandbox from '../pages/CodeSandbox.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/code-sandbox', component: CodeSandbox },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
