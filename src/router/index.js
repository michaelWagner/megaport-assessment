import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../pages/Splash.vue'
import BakedGoods from '../pages/BakedGoods.vue'
import CodeSandbox from '../pages/CodeSandbox.vue'

const routes = [
  { path: '/', component: Splash },
  { path: '/baked-goods', component: BakedGoods },
  { path: '/code-sandbox', component: CodeSandbox },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
