<script setup lang="ts">
import EquipoDefault from '@/utils/interfaces/InterfaceEquipos';
import UsuariosDefault from '@/utils/interfaces/interfaceUsuarios';
import {EmpleadoServicio} from '@/services/empleados/EmpleadoServicio';
import { onMounted, ref } from 'vue';

const empleadoServicio = new EmpleadoServicio();

const datos = new EquipoDefault();
const datosUsuario = new UsuariosDefault();


const crearEmpleado =async()=>{
  const respuestaCrear = await empleadoServicio.crearEmpleado(datos)
}

const obtenerEmpleados =async()=>{
  const respuestaObtener = await empleadoServicio.obtenerEmpleados(datos)
}

const actualizadoEmpleado =async(etiqueta: string, empleadoActualizado: UsuariosDefault)=>{
  const respuestaActualizar = await empleadoServicio.actualizadoEmpleado(etiqueta, empleadoActualizado)
}

const eliminarEmpleado =async(etiqueta : string)=>{
  const respuestaEliminar = await empleadoServicio.eliminarEmpleado(etiqueta)
}


// const actualizarEmpleado =async()=>{
//   if (empleado.value.etiqueta) {
//         await empleadoServicio.actualizadoEmpleado(
//           empleado.value.etiqueta,
//           empleado.value
//         );
//       } else {
//         await empleadoServicio.crearEmpleado(empleado.value);
//       }
//       await obtenerEmpleados(); // Actualizar lista
//       empleado.value = {}; // Limpiar formulario
//     };



</script>


<template>
  <div id="app4">
      <div class="form4 justify-content-center">
        
        <div class="login">
          <h1>
            AGREGAR EMPLEADO
            <hr />
          </h1>

          <h2>C.I. MINAS LA AURORA S.A.S.</h2>
          <br />
          <h3>DATOS</h3>

          
          <section >
            <form @submit.prevent="crearEmpleado()">
              <!-- <button class="btn btn-primary-volver" type="submit"> Volver </button> -->

                <div class="form-group">
                  <input type="name" v-model="datos.name" placeholder="" />
                  <label class="form-label">Nombre Empleado</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;"> * Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="post" v-model="datos.post" placeholder="" />
                  <label class="form-label">Cargo del Empleado</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="etiqueta" v-model="datos.etiqueta" placeholder="" />
                  <label class="form-label">Etiqueta del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="descripcion" v-model="datos.descripcion" placeholder="" />
                  <label class="form-label">Descripción del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="marca" v-model="datos.marca" placeholder="" />
                  <label class="form-label">Marca del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="serie" v-model="datos.serie" placeholder="" />
                  <label class="form-label">Serie del Equipo</label>
                  <!-- <label for="campo" style="color: red; font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="Nserial" v-model="datos.Nserial" placeholder="" />
                  <label class="form-label">Número serial del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>

                <div class="form-group">
                  <input type="disco" v-model="datos.disco" placeholder="" />
                  <label class="form-label">Disco del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="ram" v-model="datos.ram" placeholder="" />
                  <label class="form-label">Ram del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="estado" v-model="datos.estado" placeholder="" />
                  <label class="form-label">Estado del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <div class="form-group">
                  <input type="observacion" v-model="datos.observacion" placeholder="" />
                  <label class="form-label">Observacion del Equipo</label>
                  <!-- <label for="campo" style="color: red;  font-size: 12px;">* Este campo es obligatorio</label> -->
                </div>
                
                <button class="btn btn-primary" type="submit"> Crear Empleado </button>
            
            </form>
          </section>
        </div>
      </div>
    
    <footer class="footer4 d-flex w-100 justify-content-center">
      <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
    </footer> 
</div>
</template>

<style>
@import '/src/assets/agregarEmpleado.css'
</style> 

