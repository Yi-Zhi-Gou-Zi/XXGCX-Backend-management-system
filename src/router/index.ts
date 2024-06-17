// 创建一个路由器
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      name : 'login',
      path : '/login',
      component : () => import('@/views/Login.vue')
    },
    {
      name : 'register',
      path : '/register',
      component : () => import('@/views/Register.vue')
    }
    
  ]
})

export default router
