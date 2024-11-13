<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import app from '../utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'
import { cerrarSesion } from '../router/index'
import type { Modulos } from '@/utils/interfaces/InterfaceModulos';
import { ModuloServicio } from '@/services/modulos/ModuloServicio';
import ModuloDefault from '@/utils/interfaces/InterfaceModulos'

const moduloServicio = new ModuloServicio();
const db = getFirestore(app)
const router = useRouter();


const isDropdownVisible = ref(false)
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
  console.log("Dropdown visible:", isDropdownVisible.value);
  
}

const crearRegistro = async (idModulo: number, idUsuario: number, name: string, shortName: string) => {
  try {
    const color = generarColorAleatorio();
    const response = await addDoc(collection(db, 'Modulos'), {
      idModulo,
      idUsuario,
      name,
      shortName,
      color,
    })
    console.log('Registro agregado:', { response })
    sections.value.push({
      id: idModulo, 
      name,
      shortName,
      iconClass: 'nuevo-icono', 
      path: shortName.toLowerCase(),
      color,
    });
  } catch (error) {
    console.error('Error al agregar registro: ', error)
  }
}



let ModuloInventario = ref<Modulos[]>([]);
const obtenerDatos = async () => {
  const modulos:Modulos[] = await moduloServicio.obtenerModulos()
  console.log(modulos);

const DatosModuloInventario:Modulos[] = modulos.filter((modulos) => modulos.shortName)
console.log(DatosModuloInventario);
ModuloInventario.value = DatosModuloInventario;
console.log({ModuloInventario});

}

onMounted(() => {
  obtenerDatos()
  // crearRegistro()
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
  color?: string
}

const sections = ref<datosDepartamentos[]>([
  { id: 1, name: 'TALENTO HUMANO', shortName: 'TH', iconClass: 'th', path: 'talentoHumano', color: '#ff6f61'},
  { id: 2, name: 'SAGRILAF', shortName: 'SAG', iconClass: 'sag' , path: 'sagrilaf', color: '#6a5acd'},
  { id: 3, name: 'SEGURIDAD Y SALUD EN EL TRABAJO', shortName: 'SST', iconClass: 'sst' , path: 'sst', color: '#48d1cc'},
  { id: 4, name: 'GERENCIA', shortName: 'GE', iconClass: 'ge' , path: 'gerencia', color: '#2e8b57'},
  { id: 5, name: 'DEPARTAMENTO DE CONTABILIDAD', shortName: 'CT', iconClass: 'ct', path: 'contabilidad', color: '#ffd700' },
  { id: 6, name: 'DIRECCION DE SISTEMAS', shortName: 'DS', iconClass: 'ds' , path: 'sistemas', color: '#4682b4'},
  { id: 7, name: 'DIRECCION DE COMPRAS', shortName: 'CO', iconClass: 'co' , path: 'compras', color: '#da70d6'},
  { id: 8, name: 'DIRECCION TECNICA', shortName: 'DT', iconClass: 'dt', path: 'direccionTecnica', color: '#8b4513' },
  { id: 9, name: 'GESTION DE CALIDAD', shortName: 'GC', iconClass: 'gc', path: 'gestionCalidad', color: '#00fa9a' },
  { id: 10, name: 'COMERCIAL', shortName: 'CM', iconClass: 'cm' , path: 'comercial', color: '#ff8c00'},
  { id: 11, name: 'ADMINISTRACION', shortName: 'AD', iconClass: 'ad' , path: 'administracion', color: '#c71585'},
  { id: 12, name: 'DIRECCION AMBIENTAL', shortName: 'AM', iconClass: 'am' , path: 'ambiental', color: '#32cd32'},
  { id: 13, name: 'DIRECCION DE ARCHIVO', shortName: 'AR', iconClass: 'ar', path: 'archivo', color: '#808080' },
  { id: 14, name: 'JURIDICO', shortName: 'JU', iconClass: 'ju', path: 'juridico', color: '#800000' },
  { id: 15, name: 'AUDIO VISUAL', shortName: 'AV', iconClass: 'av' , path: 'audioVisual', color: '#ff4500'}
])

let filteredSections = ref<datosDepartamentos[]>([])
console.log(filteredSections);


const filtrarModulos = (value:any) => {
  console.log('buscando la variable', value.target.value
  );

  const respuestaInput = value.target.value;


      const respuesta = sections.value.filter(section =>
      section.name.includes(respuestaInput) || section.shortName.includes(respuestaInput)
      )
      filteredSections.value = respuesta

}


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


// color de shortName
<<<<<<< HEAD
const generarColorAleatorio = (): string => {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
  
};
=======
// const generarColorAleatorio = (): string => {
//   const letras = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letras[Math.floor(Math.random() * 16)];
//   }
//   return color;
  
// };

>>>>>>> ddd8a8d (cambios)


</script>

<template>
  <div id="app">
    <div class="sidebar">
      <ul>
        <li class="nav2">
          <router-link  to="/crearModulo">Crear Departamento</router-link>
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
                  C.I. MINAS LA AURORA S.A.S
                </h1>
                <h2>SEDE - ADMINISTRACION</h2>
              </div>

              <div class="header-right">
                <input @input="filtrarModulos"  type="text" id="searchInput" placeholder="Buscar" />
                <div id="results" class="results">
                  <ul>
                
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

          <div v-for="(item, index) in ModuloInventario" :key="index" class="card-modulo" v-bind:item="item as Modulos">
            <div class="card-modulo2" >
              <p :style="{ backgroundColor: generarColorAleatorio() }">{{ item.shortName.toUpperCase() || 'No post provided' }}</p>
              <h2>{{ item.name.toUpperCase() || 'No name provided' }}</h2>
            </div>
          </div>
        </div>
          

      </div>
    </div>
  </div>

</template>




<style>
@import '/src/assets/inventarioEquipos.css'
</style>
