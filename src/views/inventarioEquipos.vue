<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import app from '../utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'
import { cerrarSesion } from '../router/index'
import type { Modulos } from '@/utils/interfaces/InterfaceModulos';
import { ModuloServicio } from '@/services/modulos/ModuloServicio';
import { sections } from '@/utils/sesionesDepartamentos.js'



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
    await addDoc(collection(db, 'Modulos'),  { idModulo, idUsuario, name, shortName, color });
    sections.value.push({
      id: idModulo,
      name,
      shortName,
      iconClass: 'nuevo-icono',
      path: shortName.toLowerCase(),
      color,
    });
  } catch (error) {
    console.error('Error al agregar registro: ', error);
  }
};



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
  console.log(sections.value);
  
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


let filteredSections = ref<any[]>([])
console.log(filteredSections);


const filtrarModulos = (value:any) => {
  console.log('buscando la variable', value.target.value
  );

  const respuestaInput = value.target.value.toLowerCase();


      const respuestaSections = sections.value.filter(section =>
      section.name.toLowerCase().includes(respuestaInput) || section.shortName.toLowerCase().includes(respuestaInput)
      );

      const respuestaModuloInventario = ModuloInventario.value.filter(modulo =>
      modulo.name.toLowerCase().includes(respuestaInput) || modulo.shortName.toLowerCase().includes(respuestaInput)
      );

      filteredSections.value = [
        ...respuestaSections,
        ...respuestaModuloInventario.map(item => ({
          id:item.idModulo,
          name:item.name,
          shortName:item.shortName,
          iconClass: 'nuevo-icono', 
          path: item.shortName.toLowerCase(),
          color:generarColorAleatorio(),
        }))
      ]

    

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

const generarColorAleatorio = (): string => {
  const letras = '0123456789ABCDEF';
  return `#${Array.from({ length: 6 }, () => letras[Math.floor(Math.random() * 16)]).join('')}`;
};



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
              <div :class="`card-icon ${section.iconClass}`" :style="{ backgroundColor: section.color }">{{ section.shortName.toUpperCase() }}</div>
              <p><b>{{ section.name.toUpperCase() }}</b></p>
            </router-link>
          </div>
          <div class="card" v-for="modulo in ModuloInventario" :key="modulo.idModulo">
            <router-link :to="`/${modulo.shortName.toLowerCase()}`">
              <div class="card-icon" :style="{ backgroundColor:  generarColorAleatorio()}">{{ modulo.shortName.toUpperCase() }}</div>
              <p><b>{{ modulo.name.toUpperCase() }}</b></p>
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
