<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted, defineComponent, Ref } from 'vue'
import app from '../../utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'

const db = getFirestore(app)
const isDropdownVisible = ref(false)
interface datosEquipos {
  name?: string
  post?: string
  etiqueta?: string
  descripcion?: string
  marca?: string
  serie?: string
  Nserial?: string
  disco?: string
  ram?: string
  estado?: string
  observacion?: string
}
const data = ref<datosEquipos[]>([
  {
    name: 'Liliana',
    post: 'Director Talento Humano',
    etiqueta: 'MLA-TH-001',
    descripcion: 'Torre',
    marca: 'Compumax',
    serie: '',
    Nserial: '102SN56746',
    disco: 'M.2 512GB',
    ram: 'DDR4 16GB 2666Mhz',
    estado: '',
    observacion: ''
  },
  {
    name: 'Wendy Pacheco',
    post: 'Coordinador Talento Humano',
    etiqueta: 'MLA-TH-002',
    descripcion: 'Torre',
    marca: 'HP',
    serie: 'Compaq 6200 Pro MT',
    Nserial: 'MLX2051DP8',
    disco: 'SSD 256 GB - HDD WD 500GB',
    ram: 'DDR3 8GB (2x4GB) 1333Mhz',
    estado: '',
    observacion: ''
  },
  {
    name: 'Mayra Sierra',
    post: 'Coordinador Talento Humano',
    etiqueta: 'MLA-TH-003',
    descripcion: 'All in one',
    marca: 'Dell',
    serie: 'Vostro 360',
    Nserial: '31C9BQ1',
    disco: 'SSD 480GB',
    ram: 'DDR3 4GB 1333Mhz',
    estado: '',
    observacion: ''
  },
  {
    name: 'Nini Johana Blanco',
    post: 'Jefe Responsabilidad Social',
    etiqueta: 'MLA-TH-004',
    descripcion: 'Torre',
    marca: 'HP',
    serie: 'Compaq 6200 Pro MT',
    Nserial: 'MLX2051DP8',
    disco: 'SSD 240GB',
    ram: 'DDR3 4GB 1333Mhz',
    estado: '',
    observacion: ''
  }
])

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const obtenerDatos = async () => {
  try {
    const respuesta = await getDocs(collection(db, 'Equipos'))
    data.value = respuesta.docs.map((registro) => registro.data())
  } catch (error) {
    console.error('Error al obtener datos: ', error)
  }
}

const crearRegistro = async (
  name: string,
  post: string,
  etiqueta: string,
  descripcion: string,
  marca: string,
  serie: string,
  Nserial: string,
  disco: string,
  ram: string,
  estado: string,
  observacion: string
) => {
  try {
    const response = await addDoc(collection(db, 'Equipos'), {
      name,
      post,
      etiqueta,
      descripcion,
      marca,
      serie,
      Nserial,
      disco,
      ram,
      estado,
      observacion
    })
    console.log('Registro agregado:', response)
    obtenerDatos()
  } catch (error) {
    console.error('Error al agregar registro: ', error)
  }
}

onMounted(() => {
  obtenerDatos()
  crearRegistro(
    'Liliana',
    'Director Talento Humano',
    'MLA-TH-001',
    'Torre',
    'Compumax',
    '',
    '102SN56746',
    'M.2 512GB',
    'DDR4 16GB 2666Mhz',
    '',
    ''
  )
  crearRegistro(
    'Wendy Pacheco',
    'Coordinador Talento Humano',
    'MLA-TH-002',
    'Torre',
    'HP',
    'Compaq 6200 Pro MT',
    'MLX2051DP8',
    'SSD 256 GB - HDD WD 500GB',
    'DDR3 8GB (2x4GB) 1333Mhz',
    '',
    ''
  )
  crearRegistro(
    'Mayra Sierra',
    'Coordinador Talento Humano',
    'MLA-TH-003',
    'All in one',
    'Dell',
    'Vostro 360',
    '31C9BQ1',
    'SSD 480GB',
    'DDR3 4GB 1333Mhz',
    '',
    ''
  )
  crearRegistro(
    'Nini Johana Blanco',
    'Jefe Responsabilidad Social',
    'MLA-TH-004',
    'Torre',
    'HP',
    'Compaq 6200 Pro MT',
    'MLX2051DP8',
    'SSD 240GB',
    'DDR3 4GB 1333Mhz',
    '',
    ''
  )
})

onMounted(() => {
  const userIcon = document.getElementById('userIcon')
  const userDropdown = document.getElementById('userDropdown')

  userIcon?.addEventListener('click', () => {
    userDropdown?.classList.toggle('show')
  })
})
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
                  <a class="dropdown-item" href="#">Iniciar Sesión</a>
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
                  C.I. MINAS LA AURORA S.A.S.
                </h1>
                <h2>SEDE - ADMINISTRACION</h2>
              </div>

              <div class="header-right">
                <input type="text" id="searchInput" placeholder="Buscar" />
                <button @click="searchElement" class="btn btn-primary addBtn">
                  <img src="../../public/img/search.png" alt="search" />
                </button>
              </div>
            </div>
          </header>
        </div>

        <div class="departamento"><h1>DIRECCION DE ARCHIVO</h1></div>

        <div class="container-er">
          <div v-for="(item, index) in data" :key="index" class="card1">
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
            </div>
          </div>
        </div>

        <div class="button-add">
          <router-link to="/agregarEmpleado">Agregar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/datosDepartamentos.css'
</style>
