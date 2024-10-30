import { createRouter, createWebHistory } from 'vue-router'
import InventarioEquipos from '../views/InventarioEquipos.vue'
import CrearDepartamento from '../views/CrearDepartamento.vue'
import InventarioEquipos_login from '../views/InventarioEquipos_login.vue'
import th from '../views/th.vue'
import AgregarEmpleado from '../views/AgregarEmpleado.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'InventarioEquipos',
      component: InventarioEquipos
    },
    {
      path: '/crearDepartamento',
      // name: 'CrearDepartamento',
      component: CrearDepartamento
    },
    {
      path: '/inventarioEquipos_login',
      // name: 'InventarioEquipos_login',
      component: InventarioEquipos_login
    },
    {
      path: '/th',
      // name: 'th',
      component: th
    },
    {
      path:'/agregarEmpleado',
      // name: 'AgregarEmpleado',
      component: AgregarEmpleado
    },
    {
      path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
