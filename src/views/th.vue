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
  <div id="app">
    <div class="sidebar">
      <ul>
        <li>
          <a href="@/inventarioEquipos">Inicio</a>
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

        <div class="departamento"><h1>TALENTO HUMANO</h1></div>

        <div class="container-er">
          <div v-for="(item, index) in data" :key="index" class="card">
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
          <a
            href="/new"
            class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
          >
            Agregar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
}

.container-er {
  justify-content: space-around;
  background-color: #f6f6f6;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}

.card {
  z-index: 1;
  width: 202px;
  height: 70px;
  transition: all 0.3s ease;
  perspective: 900px;
  position: relative;
}
.card:hover {
  border: 0px solid white;
  border-radius: 10px 10px 0px 0px;
  z-index: 10;
  transform: scale(1.05);
  border-radius: 0px;
}

.face {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
}
.face:hover {
  border: 0px solid white;
  border-radius: 10px 10px 0px 0px;
}
.face.face1:hover {
  background-color: white !important;
  border: 0px solid white;
  height: 70px;
  border-radius: 10px 10px 0px 0px;
}
.face.face1 {
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 10px;
  color: black;
  width: 100%;
  height: 70px;
  justify-content: space-evenly;
  border: 2px solid transparent;
}

.face.face1 h2 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.card:hover .face.face1 {
  border: 0px solid white;
  background-color: white;
  transform: translateY(0px);
  border: 3px solid rgb(67, 42, 136, 0.4);
}

.face.face1 .icony i {
  font-size: 4rem;
  color: black;
}

.face.face2 {
  z-index: 11;
  position: relative;
  height: 460px;
  width: 300px;
  top: -108px;
  left: 0px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  font-size: 14px;
  box-sizing: border-box;
  border: 3px solid rgb(67, 42, 136, 0.4);
  border-top: 0px solid white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(100px);
  border-radius: 0px 0px 10px 10px;
  opacity: 0;
  visibility: hidden;
  transition:
    transform 0.5s,
    opacity 0.5s;
  visibility: 0.5s;
}

.face2 b {
  width: 300px;
  height: 380px;
  font-weight: bold;
}
.face2 div {
  display: flex;
  justify-content: space-between;
}

.card:hover .face.face2 {
  transform: translateY(100px);
  opacity: 1;
  visibility: visible;
}

.face.face2 h3 {
  margin: 10px 0;
}

.face.face2 p {
  font-size: 14px;
  text-align: center;
}

.show {
  display: block;
}

.sidebar {
  width: 150px;
  height: 100%;
  background: linear-gradient(to bottom, #432a88, #5132aa);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #ccc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.sidebar ul {
  padding: 0;
}

.sidebar ul li {
  padding: 20px;
  margin-top: 80px;
  margin-bottom: -10px;
}

.sidebar ul li:hover {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.sidebar ul li a {
  color: white;
  font-size: 16px;
  text-decoration: none;
}

.sidebar ul img {
  align-items: center;
}

.logo {
  text-align: center;
  padding-bottom: 20px;
  position: relative;
}

.main-content-group {
  padding: 20px;
  flex-grow: 1;
  box-sizing: border-box;
}

.main-content {
  padding: 20px 20px 20px 180px;
  flex-grow: 1;
  box-sizing: border-box;
}

.departamento h1 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #432a88;
  text-align: center;
  text-shadow: 2px 2px 5px rgb(67, 42, 136, 0.4);
}

.separador {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 50px;
  left: 0;
}

.separador-1 {
  margin-top: 20px;
  margin-bottom: 20px;
  top: 0px;
  left: 0;
  width: 80%;
  align-items: center;
  text-align: center;
  margin: 10px auto;
}

header h1 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
}

header h2 {
  font-size: 16px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
}

.header-left {
  flex: 1;
  font-family: Arial, sans-serif;
}

.header-right button {
  align-items: center;
  gap: 10px;
  background-color: #432a88;
}

#searchInput {
  width: 350px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #432a88;
  font-size: 14px;
  position: relative;
  box-shadow: 5px 5px 10px 2px #bdbdbd;
}

.addBtn {
  color: white;
  background-color: #432a88;
  border: 1px solid #432a88;
  box-shadow: 5px 5px 10px 2px #bdbdbd;
  width: 40px;
  height: 30px;
  border-radius: 3px;
}

.addBtn:hover {
  background-color: #432a88;
  border-color: #432a88;
  color: white;
  cursor: pointer;
}

.user {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}

.userIcon {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}

.userIcon-white {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

nav h1 {
  color: #432a88;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0;
  text-shadow: 2px 2px 5px rgb(67, 42, 136, 0.4);
}

.card {
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 300px;
}

.card:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.card-body {
  display: flex;
  align-items: center;
}

button.btn-link {
  color: #000;
  font-size: 18px;
}

.button-add {
  text-align: right;
  float: right;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.button-add a {
  color: white;
  background-color: #432a88;
  border: 1px solid #432a88;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 3px;
  height: 35px;
  width: 70px;
  text-align: center;
  text-decoration: none;
}

.button-add a:hover {
  background-color: white;
  color: #432a88;
  border: 1px solid #432a88;
}

.dropdown-menu {
  position: absolute;
  top: 0px;
  right: 0;
  background-color: rgba(67, 42, 136, 0.8);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 10px;
  z-index: 1;
  min-width: 150px;
  transition: all 0.3s ease;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  width: 100%;
  margin-top: 20px;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-top: 30px;
}

.dropdown-menu li:hover {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0%;
  width: 100%;
}

.dropdown-menu li:last-child {
  margin-bottom: 10px;
}

.dropdown-menu hr {
  margin-bottom: 10px;
}

.dropdown-divider li hr {
  margin-bottom: 10px;
}

.dropdown-item {
  margin: 15px 25px 0px 0px;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: rgb(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

@media screen and (max-width: 1200px) {
  /* .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  } */

  .header-container {
    flex-direction: column;
    text-align: center;
  }

  .header-right {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .sidebar {
    width: 150px;
    height: auto;
    padding: 10px;
    text-align: center;
  }

  .content {
    justify-content: flex-start;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 1050px) {
  /* .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  } */

  .header-container {
    flex-direction: column;
    text-align: center;
  }

  .header-right {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .sidebar {
    width: 150px;
    height: auto;
    padding: 10px;
    text-align: center;
  }

  .content {
    justify-content: flex-start;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 1030px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    padding: 10px;
  }

  .sidebar {
    display: flex;
    flex: 1;
    width: 150px;
  }

  .face.face1 {
    width: 300px;
  }

  .content {
    padding: 10px;
    justify-content: center;
  }

  .card {
    width: 300px;
    max-width: 100%;
  }

  .header-right input {
    width: 100%;
  }

  #searchInput {
    width: 250px;
  }

  .addBtn {
    height: 29px;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    /* right: -100px; */
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .logo img {
    width: 50px;
  }

  .header-right button {
    padding: 8px 15px;
  }

  .card {
    z-index: 1;
    width: 300px;
    height: 60px;
  }

  .face.face1 {
    position: relative;
    /* top: 0; */
    width: 300px;
    top: -10px;
  }

  .face.face2 {
    padding: 10px;
    top: -10px;
    /* left: -1px; */
  }

  .card:hover .face.face2 {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }

  .header-right input {
    font-size: 14px;
    padding: 8px;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    /* right: -500px; */
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    padding: 5px;
  }

  .card {
    margin-bottom: 15px;
    width: 300px;
    padding: 10px;
    height: 70px;
  }

  .face.face1 {
    padding: 10px;
    margin-left: -10px;
  }

  .face.face2 {
    padding: 10px;
    top: -10px;
    left: -10px;
  }

  .header-right input {
    width: 90%;
  }

  .button-add a {
    width: 100%;
  }

  .logo img {
    width: 50px;
  }

  .header-right button {
    padding: 8px 15px;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: -300px;
  }

  .dropdown-menu {
    position: absolute;
    top: 0px;
    right: -309px;
    background-color: rgba(67, 42, 136, 0.8);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 10px;
    z-index: 1;
    min-width: 150px;
    transition: all 0.3s ease;
  }

  .separador {
    width: 700px;
  }

  .separador-1 {
    width: 100%;
  }

  .addBtn {
    height: 29px;
  }
}

@media screen and (max-width: 320px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    flex-direction: column;
  }

  .sidebar {
    display: none;
  }

  .header-right input {
    width: 100%;
  }

  .card {
    width: 300px;
  }

  .logo img {
    text-align: center;
    width: 50px;
  }

  .face.face1 {
    width: 100px;
  }

  .content {
    padding: 10px;
    justify-content: center;
  }

  .userIcon {
    position: relative;
    top: 10px;
    right: -500px;
  }

  .userIcon-white {
    position: relative;
    top: 10px;
    right: -500px;
  }

  #searchInput {
    width: 250px;
  }

  .addBtn {
    height: 29px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 319px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    padding: 10px;
  }

  .sidebar {
    display: flex;
    flex: 1;
    width: 150px;
    height: 900vh;
  }

  .logo img {
    text-align: center;
    width: 50px;
  }

  .face.face1 {
    position: relative;
    width: 300px;
    top: -10px;
  }

  .face.face2 {
    position: relative;
    width: 300px;
    top: 100px;
  }

  .content {
    padding: 10px;
    justify-content: center;
  }

  .card {
    width: 300px;
  }

  .header-right input {
    width: 100%;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: -400px;
  }

  .userIcon-white {
    position: relative;
    top: 10px;
    right: -500px;
  }

  #searchInput {
    width: 200px;
  }

  .addBtn {
    height: 29px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 230px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    padding: 10px;
  }

  .sidebar {
    display: flex;
    flex: 1;
    width: 100px;
    height: 900vh;
  }

  .logo img {
    text-align: center;
    width: 50px;
  }

  .face.face1 {
    position: relative;
    width: 300px;
    top: -10px;
  }

  .content {
    padding: 10px;
    justify-content: center;
  }

  .card {
    width: 300px;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: -500px;
  }

  .header-right input {
    width: 100%;
  }

  #searchInput {
    width: 200px;
  }

  .addBtn {
    height: 29px;
  }

  .separador-1 {
    width: 100%;
  }
}
</style>
