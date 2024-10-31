import { createRouter, createWebHistory } from 'vue-router'
import InventarioEquipos from '../views/InventarioEquipos.vue'
import CrearDepartamento from '../views/CrearDepartamento.vue'
import InventarioEquipos_login from '../views/InventarioEquipos_login.vue'

import talentoHumano from '../views/talentoHumano.vue'
import sag from '../views/sag.vue'
import sst from '../views/sst.vue'
import gerencia from '../views/gerencia.vue'
import contabilidad from '../views/contabilidad.vue'
import sistemas from '../views/sistemas.vue'
import compras from '../views/compras.vue'
import direccionTecnica from '../views/direccionTecnica.vue'
import gestionCalidad from '../views/gestionCalidad.vue'
import comercial from '../views/comercial.vue'
import administracion from '../views/administracion.vue'
import ambiental from '../views/ambiental.vue'
import archivo from '../views/archivo.vue'
import juridico from '../views/juridico.vue'
import audioVisual from '../views/audioVisual.vue'

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
      path: '/talentoHumano',
      // name: 'talentoHumano',
      component: talentoHumano
    },
    {
      path: '/sag',
      // name: 'sag',
      component: sag
    },
    {
      path: '/sst',
      // name: 'sst',
      component: sst
    },
    {
      path: '/gerencia',
      // name: 'gerencia',
      component: gerencia
    },
    {
      path: '/contabilidad',
      // name: 'contabilidad',
      component: contabilidad
    },
    {
      path: '/sistemas',
      // name: 'sistemas',
      component: sistemas
    },
    {
      path: '/compras',
      // name: 'compras',
      component: compras
    },
    {
      path: '/direccionTecnica',
      // name: 'direccionTecnica',
      component: direccionTecnica
    },
    {
      path: '/gestionCalidad',
      // name: 'gestionCalidad',
      component: gestionCalidad
    },
    {
      path: '/comercial',
      // name: 'comercial',
      component: comercial
    },
    {
      path: '/administracion',
      // name: 'administracion',
      component: administracion
    },
    {
      path: '/ambiental',
      // name: 'ambiental',
      component: ambiental
    },
    {
      path: '/archivo',
      // name: 'archivo',
      component: archivo
    },
    {
      path: '/juridico',
      // name: 'juridico',
      component: juridico
    },
    {
      path: '/audioVisual',
      // name: 'audioVisual',
      component: audioVisual
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
