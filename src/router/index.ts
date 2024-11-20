import { createRouter, createWebHistory } from 'vue-router'
import InventarioEquipos from '@/views/inventarioEquipos.vue'
import CrearModulo from '@/views/CrearModulo.vue'
import InventarioEquipos_login from '@/views/inventarioEquipos_login.vue'

import talentoHumano from '../views/talentoHumano.vue'
import sagrilaf from '@/views/sagrilaf.vue'
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
import moduloNuevo from '../views/moduloNuevo.vue'

import AgregarEmpleado from '../components/AgregarEmpleado.vue'
import actualizarEmpleado from '../components/actualizarEmpleado.vue'
import eliminarEmpleado from '../components/eliminarEmpleado.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'InventarioEquipos',
      component: InventarioEquipos
    },
    {
      path: '/crearModulo',
      name: 'CrearModulo',
      component: CrearModulo
    },
    {
      path: '/inventarioEquipos_login',
      name: 'InventarioEquipos_login',
      component: InventarioEquipos_login
    },
    {
      path: '/talentoHumano',
      name: 'talentoHumano',
      component: talentoHumano
    },
    {
      path: '/sagrilaf',
      name: 'sagrilaf',
      component: sagrilaf
    },
    {
      path: '/sst',
      name: 'sst',
      component: sst
    },
    {
      path: '/gerencia',
      name: 'gerencia',
      component: gerencia
    },
    {
      path: '/contabilidad',
      name: 'contabilidad',
      component: contabilidad
    },
    {
      path: '/sistemas',
      name: 'sistemas',
      component: sistemas
    },
    {
      path: '/compras',
      name: 'compras',
      component: compras
    },
    {
      path: '/direccionTecnica',
      name: 'direccionTecnica',
      component: direccionTecnica
    },
    {
      path: '/gestionCalidad',
      name: 'gestionCalidad',
      component: gestionCalidad
    },
    {
      path: '/comercial',
      name: 'comercial',
      component: comercial
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: administracion
    },
    {
      path: '/ambiental',
      name: 'ambiental',
      component: ambiental
    },
    {
      path: '/archivo',
      name: 'archivo',
      component: archivo
    },
    {
      path: '/juridico',
      name: 'juridico',
      component: juridico
    },
    {
      path: '/audioVisual',
      name: 'audioVisual',
      component: audioVisual
    },
    {
      path:'/agregarEmpleado',
      name: 'AgregarEmpleado',
      component: AgregarEmpleado
    },
    {
      path:'/actualizarEmpleado',
      name: 'actualizarEmpleado',
      component: actualizarEmpleado
    },
    {
      path:'/eliminarEmpleado',
      name: 'eliminarEmpleado',
      component: eliminarEmpleado
    },
    {
      path:'/moduloNuevo',
      name: 'moduloNuevo',
      component: moduloNuevo
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

let conectado = false;

router.beforeEach((to) => {

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (isAuthenticated && to.path === '/inventarioEquipos_login') {
    return { path: '/' };
  }

  if (!isAuthenticated && to.path !== '/inventarioEquipos_login') {
    return { path: '/inventarioEquipos_login' };
  }
});

function iniciarSesion() {
  conectado = true;
  localStorage.setItem('isAuthenticated', 'true');
}

function cerrarSesion() {
  conectado = false;
  localStorage.removeItem('isAuthenticated');
}


export { iniciarSesion, cerrarSesion }
export default router