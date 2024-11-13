<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ModuloServicio } from '@/services/modulos/ModuloServicio'
import type { Modulos } from '@/utils/interfaces/InterfaceModulos'

const moduloServicio = new ModuloServicio()
const name = ref<string>('')
const shortName = ref<string>('')

const crearModulo = async () => {
  const nuevoModulo: Modulos = { name: name.value, shortName: shortName.value }
  await moduloServicio.crearModulo(nuevoModulo)
  console.log('Nuevo módulo creado:', nuevoModulo)
  name.value = ''
  shortName.value = ''
}

onMounted(() => {
  obtenerModulos()
})

const obtenerModulos = async () => {
  const modulos: Modulos[] = await moduloServicio.obtenerModulos()
  console.log(modulos)
}


</script>

<template>

  <div id="app2">
<<<<<<< HEAD
    <!-- <button class="btn btn-primary"><router-link to="/"><img src="../../public/img/icon-park-left.png" alt=""></router-link></button> -->
    
=======
      <div class="button-btn">
        <a><router-link to="/" class="btn btn-primary">Volver</router-link></a>
        
      </div>    
>>>>>>> ddd8a8d (cambios)

      <div class="form2 justify-content-center">
        
        <div class="login">
          <h1>
            CREAR DEPARTAMENTO
            <hr />
          </h1>

          <h2>C.I. MINAS LA AURORA S.A.S.</h2>
          <br />
          <h3>DATOS</h3>

          <section class="form-2">
            <form class="form-2" @submit.prevent="crearModulo()">
            <div class="form-group">
              <input type="name" v-model="name" placeholder="" />
              <label class="form-label">Nombre departamento</label>
            </div>
            <div class="form-group">
              <input type="shortName" v-model="shortName" placeholder="" />
              <label class="form-label">Nombre corto</label>
            </div>

            <button class="btn btn-primary" type="submit">Agregar</button>

            </form>
          </section>
          
        </div>
      </div>
    
    <footer class="footer d-flex w-100 justify-content-center">
      <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
    </footer> 
</div>
</template>

<style>
@import '/src/assets/crearModulo.css'
</style> 
