<script setup lang="ts">
import ModuloDefault from '@/utils/interfaces/InterfaceModulos';
import { ModuloServicio } from '@/services/empleados/ModuloServicio';
import { ref, onMounted } from 'vue'
import type { Modulo } from '@/utils/interfaces/InterfaceModulos';

const moduloServicio = new ModuloServicio();

const datos = new ModuloDefault();


const crearModulo =async()=>{
  const respuestaCrear = await moduloServicio.crearModulo(datos)
}

const obtenerModulos =async()=>{
  const respuestaObtener = await moduloServicio.obtenerModulos(datos)
}

const actualizadoModulo =async(shortName: string, moduloActualizado: ModuloDefault)=>{
  const respuestaActualizar = await moduloServicio.actualizadoModulo(shortName, moduloActualizado)
}

const eliminarModulo =async(shortName : string )=>{
  const respuestaEliminar = await moduloServicio.eliminarModulo(shortName)
}


// const actualizarDatos =async(id: string, empleadoActualizado: UsuariosDefault)=>{
//   const respuestaActualizar = await empleadoServicio.actualizadoEmpleado(id, empleadoActualizado)
//   console.log(respuestaActualizar);
  
// }

onMounted(() => {
  obtenerDatos()

})

</script>

<template>

  <div id="app2">
    <!-- <button class="btn btn-primary"><router-link to="/"><img src="../../public/img/icon-park-left.png" alt=""></router-link></button> -->

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
              <input @input="filtrarEquipos" type="name" v-model="name" placeholder="Buscar" />
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
