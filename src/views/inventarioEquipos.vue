<script setup lang="ts">

import { ref } from 'vue'
import app from '../../utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'

const db = getFirestore(app)

const isDropdownVisible = ref(false)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const obtenerDatos = async () => {
  try {
    const respuesta = await getDocs(collection(db, 'Modulos'))
    data.value = respuesta.docs.map((registro) => registro.data())
  } catch (error) {
    console.error('Error al obtener datos: ', error)
  }
}

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
}
const sections = ref<datosDepartamentos[]>([
  { id: 1, name: 'TALENTO HUMANO', shortName: 'TH', iconClass: 'th' },
  { id: 2, name: 'SAGRILAF', shortName: 'SAG', iconClass: 'sag' },
  { id: 3, name: 'SEGURIDAD Y SALUD EN EL TRABAJO', shortName: 'SST', iconClass: 'sst' },
  { id: 4, name: 'GERENCIA', shortName: 'GE', iconClass: 'ge' },
  { id: 5, name: 'DEPARTAMENTO DE CONTABILIDAD', shortName: 'CT', iconClass: 'ct' },
  { id: 6, name: 'DIRECCION DE SISTEMAS', shortName: 'DS', iconClass: 'ds' },
  { id: 7, name: 'DIRECCION DE COMPRAS', shortName: 'CO', iconClass: 'co' },
  { id: 8, name: 'DIRECCION TECNICA', shortName: 'DT', iconClass: 'dt' },
  { id: 9, name: 'GESTION DE CALIDAD', shortName: 'GC', iconClass: 'gc' },
  { id: 10, name: 'COMERCIAL', shortName: 'CM', iconClass: 'cm' },
  { id: 11, name: 'ADMINISTRACION', shortName: 'AD', iconClass: 'ad' },
  { id: 12, name: 'DIRECCION AMBIENTAL', shortName: 'AM', iconClass: 'am' },
  { id: 13, name: 'DIRECCION DE ARCHIVO', shortName: 'AR', iconClass: 'ar' },
  { id: 14, name: 'JURIDICO', shortName: 'JU', iconClass: 'ju' },
  { id: 15, name: 'AUDIO VISUAL', shortName: 'AV', iconClass: 'av' }
])

interface departamentoEmpresa {
  id?: number
  name?: string
  shortName?: string
  iconClass?: string
}

const crearRegistro = async () => {
  try {
    const response = await addDoc(collection(db, 'Modulos'), {})
    console.log('Registro agregado:', response)
    obtenerDatos()
  } catch (error) {
    console.error('Error al agregar registro: ', error)
  }
}

function searchElement(Modulo: string, listaModulo: string[]): string {
  const resultado = listaModulo.find((n) => n.toLowerCase() === Modulo.toLowerCase())
  return resultado ? `Modulo encontrado: ${resultado}` : `Modulo "${Modulo}" no encontrado`
}

const listaModulo = [
  'TALENTO HUMANO',
  'SAGRILAF',
  'SEGURIDAD Y SALUD EN EL TRABAJO',
  'GERENCIA',
  'DEPARTAMENTO DE CONTABILIDAD',
  'DIRECCION DE SISTEMAS',
  'DIRECCION DE COMPRAS',
  'DIRECCION TECNICA',
  'GESTION DE CALIDAD',
  'COMERCIAL',
  'ADMINISTRACION',
  'DIRECCION AMBIENTAL',
  'DIRECCION DE ARCHIVO',
  'JURIDICO',
  'AUDIO VISUAL'
]
const ModuloABuscar = 'talento humano'
console.log(searchElement(ModuloABuscar, listaModulo))

</script>

<template>
  <div id="app">
    <div class="sidebar">
      <ul>
        <li>
          <a href="#">Inicio</a>
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
                <input type="text" id="searchInput" placeholder="Buscar" />
                <button @click="searchElement" class="btn btn-primary addBtn">
                  <img src="../../public/img/search.png" alt="search" />
                </button>
                <div id="results" class="results">
                  <ul>
                    <li v-for="(result, index) in searchResults" :key="index">
                      {{ result.titulo }} - {{ result.descripcion }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="card-grid">
          <div class="card" v-for="section in sections" :key="section.id">
            <router-link :to="`/${section.shortName.toLowerCase()}`">
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
#app {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
}

body,
html {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  background-color: white;
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
  padding: 50px 0px 0px 0px;
}

.sidebar ul {
  padding: 0;
}

.sidebar ul li {
  padding: 20px;
  margin-bottom: -10px;
}

.sidebar ul li:hover {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.sidebar ul li a {
  color: white;
  font-size: 16px;
}

.sidebar ul img {
  align-items: center;
}

.sidebar ul li .nav2{
  padding: 20px;
  margin-top: -20px;
  margin-bottom: -10px;
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

.separador {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  position: absolute;
  z-index: 0;
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
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.header-left {
  flex: 1;
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.header-right {
  align-items: center;
  gap: 10px;
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
  border-color: #432a88;
  box-shadow: 5px 5px 10px 2px #bdbdbd;
}

.addBtn:hover {
  background-color: #432a88;
  border-color: #432a88;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  text-shadow: #0000;
}

.card {
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 4px #432a88;
  border: 4px solid rgb(67, 42, 136, 0.4);
}

.card-icon {
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 10%;
  display: inline-block;
  padding: 10px;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
}

.th {
  background-color: #ff6f61;
}
.sag {
  background-color: #6a5acd;
}
.sst {
  background-color: #48d1cc;
}
.ge {
  background-color: #2e8b57;
}
.ct {
  background-color: #ffd700;
}
.ds {
  background-color: #4682b4;
}
.co {
  background-color: #da70d6;
}
.dt {
  background-color: #8b4513;
}
.gc {
  background-color: #00fa9a;
}
.cm {
  background-color: #ff8c00;
}
.ad {
  background-color: #c71585;
}
.am {
  background-color: #32cd32;
}
.ar {
  background-color: #808080;
}
.ju {
  background-color: #800000;
}
.av {
  background-color: #ff4500;
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

.a{
  color: white;
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

@media screen and (max-width: 1300px) {
  .header-container {
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    width: 630px;
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

  .separador {
    width: 1000px;
  }

  .separador-1 {
    width: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .header-container {
    flex-direction: column;
    text-align: center;
    width: 630px;
  }

  .header-right {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 20px;
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
    right: -200px;
  }

  .separador {
    width: 1300px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 1050px) {
  .main-content {
    padding: 20px 20px 20px 240px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    flex-direction: column;
    text-align: center;
    width: 630px;
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
    right: -30px;
  }

  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .separador {
    width: 1100px;
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
    width: 630px;
  }

  .sidebar {
    display: flex;
    flex: 1;
  }

  .content {
    padding: 10px;
    justify-content: center;
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
    right: -190px;
  }

  .dropdown-menu {
    position: absolute;
    top: 0px;
    right: -200px;
    background-color: rgba(67, 42, 136, 0.8);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 10px;
    z-index: 1;
    min-width: 150px;
    transition: all 0.3s ease;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .separador {
    width: 990px;
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

  .header-right input {
    font-size: 14px;
    padding: 8px;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: -380px;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .separador {
    width: 990px;
  }

  .separador-1 {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .main-content {
    padding: 20px 20px 20px 200px;
    flex-grow: 1;
    box-sizing: border-box;
  }

  .header-container {
    padding: 5px;
    width: 420px;
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
    right: -310px;
  }

  .dropdown-menu {
    position: absolute;
    top: 0px;
    right: -320px;
    background-color: rgba(67, 42, 136, 0.8);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 10px;
    z-index: 1;
    min-width: 150px;
    transition: all 0.3s ease;
  }

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
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
    width: 420px;
  }

  .sidebar {
    display: none;
  }

  .header-right input {
    width: 100%;
  }

  .logo img {
    text-align: center;
    width: 50px;
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

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .separador {
    width: 700px;
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
    width: 420px;
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

  .content {
    padding: 10px;
    justify-content: center;
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

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .separador {
    width: 700px;
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
    width: 420px;
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

  .content {
    padding: 10px;
    justify-content: center;
  }

  .userIcon {
    position: absolute;
    top: 10px;
    right: -500px;
  }

  .header-right input {
    width: 100%;
  }

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .separador {
    width: 700px;
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
