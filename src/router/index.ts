import { createRouter, createWebHistory } from 'vue-router'
import InventarioEquipos from '../views/inventarioEquipos.vue'
import InventarioEquipos_departamentos from '@/views/inventarioEquipos_departamentos.vue'
import InventarioEquipos_login from '@/views/inventarioEquipos_login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InventarioEquipos',
      component: InventarioEquipos
    },
    {
      path: '/departamentos',
      name: 'InventarioEquipos_departamentos',
      component: InventarioEquipos_departamentos
    },
    {
      path: '/login',
      name: 'InventarioEquipos_login',
      component: InventarioEquipos_login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
