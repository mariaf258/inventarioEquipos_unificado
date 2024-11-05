<script setup lang="ts">
import { onMounted, ref } from 'vue'
import app from '../utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'

const db = getFirestore(app)

const isDropdownVisible = ref(false)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const obtenerDatos = async () => {
    const respuesta = await getDocs(collection(db, 'Modulos'))
    console.log({ respuesta })
    console.log(respuesta.docs.map(registro => registro.data()))
}

const crearRegistro = async (idModulo: number, idUsuario: number, name: string, shortName: string) => {
  try {
    const response = await addDoc(collection(db, 'Modulos'), {
      idModulo,
      idUsuario,
      name,
      shortName,
    })
    console.log('Registro agregado:', { response })
  } catch (error) {
    console.error('Error al agregar registro: ', error)
  }
}

onMounted(() => {
  obtenerDatos()
  crearRegistro(1, 1, 'TALENTO HUMANO', 'TH')
  console.log(sections);
  
  filteredSections.value = sections.value;
  console.log(filteredSections);
})

document.addEventListener('DOMContentLoaded', () => {
  const userIcon = document.getElementById('userIcon')
  const userDropdown = document.getElementById('userDropdown')

  userIcon?.addEventListener('click', () => {
    userDropdown?.classList.toggle('show')
  })
})

interface datosDepartamentos {
  id?: number
  name?: string
  shortName?: string
  iconClass?: string
  path?: string 
}

const sections = ref<datosDepartamentos[]>([
  { id: 1, name: 'TALENTO HUMANO', shortName: 'TH', iconClass: 'th', path: 'talentoHumano'},
  { id: 2, name: 'SAGRILAF', shortName: 'SAG', iconClass: 'sag' , path: 'sag'},
  { id: 3, name: 'SEGURIDAD Y SALUD EN EL TRABAJO', shortName: 'SST', iconClass: 'sst' , path: 'sst'},
  { id: 4, name: 'GERENCIA', shortName: 'GE', iconClass: 'ge' , path: 'gerencia'},
  { id: 5, name: 'DEPARTAMENTO DE CONTABILIDAD', shortName: 'CT', iconClass: 'ct', path: 'contabilidad' },
  { id: 6, name: 'DIRECCION DE SISTEMAS', shortName: 'DS', iconClass: 'ds' , path: 'sistemas'},
  { id: 7, name: 'DIRECCION DE COMPRAS', shortName: 'CO', iconClass: 'co' , path: 'compras'},
  { id: 8, name: 'DIRECCION TECNICA', shortName: 'DT', iconClass: 'dt', path: 'direccionTecnica' },
  { id: 9, name: 'GESTION DE CALIDAD', shortName: 'GC', iconClass: 'gc', path: 'gestionCalidad' },
  { id: 10, name: 'COMERCIAL', shortName: 'CM', iconClass: 'cm' , path: 'comercial'},
  { id: 11, name: 'ADMINISTRACION', shortName: 'AD', iconClass: 'ad' , path: 'administracion'},
  { id: 12, name: 'DIRECCION AMBIENTAL', shortName: 'AM', iconClass: 'am' , path: 'ambiental'},
  { id: 13, name: 'DIRECCION DE ARCHIVO', shortName: 'AR', iconClass: 'ar', path: 'archivo' },
  { id: 14, name: 'JURIDICO', shortName: 'JU', iconClass: 'ju', path: 'juridico' },
  { id: 15, name: 'AUDIO VISUAL', shortName: 'AV', iconClass: 'av' , path: 'audioVisual'}
])

let filteredSections = ref<datosDepartamentos[]>([])
console.log(filteredSections);


const filtrarModulos = (value:any) => {
  console.log('buscando la variable', value.target.value
  );

  const respuestaInput = value.target.value;

// if(!respuestaInput){
//   filteredSections.value = [...sections.value]
// } else {
      const respuesta = sections.value.filter(section =>
      section.name.toLowerCase().includes(respuestaInput) || section.shortName.toLowerCase().includes(respuestaInput)
      )
      filteredSections.value = respuesta
// }

//       sections.value = sections.value.filter(section =>
//       section.name.toLowerCase().includes(respuestaInput) || section.shortName.toLowerCase().includes(respuestaInput)
//       )
//       filteredSections.value = [...sections.value]
}


</script>

<template>
  <div id="app">
    <div class="sidebar">
      <ul>
        <li>
          <router-link  to="/">Inicio</router-link>
        </li>
        <hr class="separador-1" />
        <li class="nav2">
          <router-link  to="/crearDepartamento">Crear Departamento</router-link>
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
                  <a class="dropdown-item">
                  <router-link  to="/inventarioEquipos_login">Iniciar Sesión</router-link></a>
                  <hr class="dropdown-divider" />
                  <a class="dropdown-item" href="#">Cerrar Sesión</a>
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
                  C.I. MINAS LA AURORA S.A.S
                </h1>
                <h2>SEDE - ADMINISTRACION</h2>
              </div>

              <div class="header-right">
                <input @input="filtrarModulos"  type="text" id="searchInput" placeholder="Buscar" />
                <div id="results" class="results">
                  <ul>
                    <!-- <li v-for="(result, index) in searchResults" :key="index">
                      {{ result.titulo }} - {{ result.descripcion }}
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="card-grid">
          <div class="card" v-for="section in filteredSections" :key="section.id">
            <router-link :to="`/${section.path.toLowerCase()}`">
              <div :class="`card-icon ${section.iconClass}`">{{ section.shortName }}</div>
              <p><b>{{ section.name }}</b></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/inventarioEquipos.css'
</style>
