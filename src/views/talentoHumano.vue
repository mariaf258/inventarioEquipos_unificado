<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import EquipoDefault from '@/utils/interfaces/InterfaceEquipos';
import UsuariosDefault from '@/utils/interfaces/interfaceUsuarios';
import {EmpleadoServicio} from '@/services/empleados/EmpleadoServicio';
import { ref, onMounted } from 'vue'
import type { Equipo } from '@/utils/interfaces/InterfaceEquipos';
import { cerrarSesion } from '../router/index'
import { useRouter } from 'vue-router'

const empleadoServicio = new EmpleadoServicio()
const isDropdownVisible = ref(false)
const router = useRouter();

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

let empleadosModuloTalentoHumano = ref<Equipo[]>([]);
const obtenerDatos = async () => {
  const empleados:Equipo[] = await empleadoServicio.obtenerEmpleados()
  console.log(empleados);
  // EquipoDefault.value = empleados;
  // filteredEquipoDefault.value = empleados;

const empleadosTalentoHumano:Equipo[] = empleados.filter(empleado => /^MLA-TH-\d+$/
  .test(empleado.etiqueta))
  .sort((a, b) => { 
      const numA = parseInt(a.etiqueta.split('-')[2], 10);
      const numB = parseInt(b.etiqueta.split('-')[2], 10);
      return numA - numB;
    });
console.log(empleadosTalentoHumano);
empleadosModuloTalentoHumano.value = empleadosTalentoHumano;
console.log({empleadosModuloTalentoHumano});

}



onMounted(() => {
  obtenerDatos()
  // filteredEquipoDefault.value = EquipoDefault.value;
  // console.log(filteredEquipoDefault);
  
})

  const userIcon = document.getElementById('userIcon')
  const userDropdown = document.getElementById('userDropdown')

  userIcon?.addEventListener('click', () => {
    userDropdown?.classList.toggle('show')
  })

//   const EquipoDefault = ref<Equipo[]>([]);
//   const filteredEquipoDefault = ref<Equipo[]>([])
// console.log(filteredEquipoDefault);


// const filtrarEmpleados = (Event:Event) => {
//   console.log('buscando el empleado')
//   const target = Event.target as HTMLInputElement;
//   const respuestaInput = target.value.toLowerCase();


//       const respuesta = EquipoDefault.value.filter((equipo) =>
//       equipo.name?.toLowerCase().includes(respuestaInput) || equipo.etiqueta?.toLowerCase().includes(respuestaInput)
//       )
//       filteredEquipoDefault.value = respuesta

// }


// Cerrar Sesion
const logout = () => {
  console.log('Cerrando sesión...');
  
  localStorage.removeItem('savedUsername')
  localStorage.removeItem('savedPassword')
  localStorage.removeItem('rememberCredentials')
  router.replace('/inventarioEquipos_login')

cerrarSesion();
  router.replace('/inventarioEquipos_login');
}


</script>

<template>
  <div id="app1">
    <div class="sidebar">
      <ul>
        <li>
          <a><router-link  to="/">Inicio</router-link></a>
        </li>
        <hr class="separador-1" />
      </ul>

      <div class="logo">
        <img src="../../public/img/logo-mla.png" alt="Logo" class="logo-img" />
      </div>
    </div>

    <div class="main-content-group">
      <div class="main-content">
        <div class="header-right">
          <nav class="navbar bg-body-tertiary fixed-top">
            <img
              src="../../public/img/user.png"
              alt="user"
              @click="toggleDropdown"
              class="userIcon"
            />
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <ul v-show="isDropdownVisible" class="dropdown-menu">
                  <img
                    src="../../public/img/user-white.png"
                    alt="user"
                    @click="toggleDropdown"
                    class="userIcon-white"
                  />
                  <a class="dropdown-item" @click="logout">Cerrar Sesión</a>
                </ul>
              </ul>
            </div>
          </nav>

          <hr class="separador" />
          <header>
            <div class="header-container">
              <div class="header-left">
                <h1>
                  INVENTARIO DE EQUIPOS<br />
                  C.I. MINAS LA AURORA S.A.S.
                </h1>
                <h2>SEDE - ADMINISTRACION</h2>
              </div>

              <div class="header-right">
                <input @input="filtrarEmpleados" type="text" id="searchInput" placeholder="Buscar Empleado" />
                <div id="results" class="results"></div>
              </div>
            </div>
          </header>
        </div>

        <div class="departamento"><h1>TALENTO HUMANO</h1></div>

        <div class="container-er">
          <div v-for="(item, index) in empleadosModuloTalentoHumano" :key="index" class="card1" v-bind:item="item as Equipo">
            <div class="face face1">
              <img
                src="../../public/img/user-solid.png"
                alt="User"
                style="width: 50px; margin-right: 10px"
              />
              <div>
                <h2>{{ item.name || 'No name provided' }}</h2>
                <p>{{ item.post || 'No post provided' }}</p>
              </div>
              <div class="icony">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
            <div class="face face2">
              <b>ETIQUETA:</b> {{ item.etiqueta }}<br />
              <b>DESCRIPCION:</b> {{ item.descripcion }}<br />
              <b>MARCA:</b> {{ item.marca }}<br />
              <b>LINEA/SERIE:</b> {{ item.serie }}<br />
              <b>No. SERIAL:</b> {{ item.Nserial }}<br />
              <b>DISCO DURO:</b> {{ item.disco }}<br />
              <b>RAM:</b> {{ item.ram }}<br />
              <b>ESTADO:</b> {{ item.estado || 'No state provided' }}<br />
              <b>OBSERVACIONES:</b> {{ item.observacion || 'No observations' }}

              <!-- <div class="button-add">
                <router-link to="/agregarEmpleado">Actualizar</router-link>
              </div> -->
            </div>
          </div>
        </div>

        <div class="button-add">
          <router-link to="/agregarEmpleado" class="btn btn-primary">Agregar</router-link>
          <router-link to="#" class="btn btn-danger">Eliminar</router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/datosDepartamentos.css'
</style>
