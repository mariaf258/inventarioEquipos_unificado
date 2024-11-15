<script setup lang="ts">
import EquipoDefault from '@/utils/interfaces/InterfaceEquipos';
import UsuariosDefault from '@/utils/interfaces/interfaceUsuarios';
import {EmpleadoServicio} from '@/services/empleados/EmpleadoServicio';
import {alertaCamposEmpleado} from '@/utils/alertaCampos';
import { onMounted, ref } from 'vue';


const empleadoServicio = new EmpleadoServicio();

const datos = new EquipoDefault();
const datosUsuario = new UsuariosDefault();


const crearEmpleado =async()=>{
    if (!alertaCamposEmpleado(datos)) {
        return;
    }
    const respuestaCrear = await empleadoServicio.crearEmpleado(datos)
}

const obtenerEmpleados =async()=>{
    const respuestaObtener = await empleadoServicio.obtenerEmpleados()
}

const actualizadoEmpleado =async(etiqueta: string, empleadoActualizado: UsuariosDefault)=>{
    const respuestaActualizar = await empleadoServicio.actualizadoEmpleado(etiqueta, empleadoActualizado)
}

const eliminarEmpleado =async(etiqueta : string)=>{
    const respuestaEliminar = await empleadoServicio.eliminarEmpleado(etiqueta)
}


// const actualizarEmpleado =async(etiqueta: string, empleadoActualizado: UsuariosDefault)=>{
//     if (empleado.value.etiqueta) {
//             await empleadoServicio.actualizadoEmpleado(
//             empleado.value.etiqueta,
//             empleado.value
//             );
//         } else {
//             await empleadoServicio.crearEmpleado(empleado.value);
//         }
//         await obtenerEmpleados(); // Actualizar lista
//         empleado.value = {}; // Limpiar formulario
//     };


// const empleadoSeleccionado = computed(() =>
//     empleadosModuloTalentoHumano.value.find((empleado) => empleado.selected)
// );


</script>


<template>
    <div id="app4">
        <div class="form4 justify-content-center">
            
            <div class="login">
            <h1>
                ACTUALIZAR EMPLEADO
                <hr />
            </h1>

            <h2>C.I. MINAS LA AURORA S.A.S.</h2>
            <br />
            <h3>DATOS</h3>

            
            <section class="section-empleado">
                <div class="formulario">
                <form class="form-empleado" @submit.prevent="crearEmpleado()">
                <!-- <button class="btn btn-primary-volver" type="submit"> Volver </button> -->

                    <div class="form-group">
                    <input type="name" v-model="datos.name" placeholder="" />
                    <label class="form-label">Nombre Empleado</label>
                    <!-- <input v-model="empleado.name" /> -->

                    </div>
                    
                    <div class="form-group">
                    <input type="post" v-model="datos.post" placeholder="" />
                    <label class="form-label">Cargo del Empleado</label>
                    <!-- <input v-model="empleado.post" /> -->
                    </div>
                    
                    <div class="form-group">
                    <input type="etiqueta" v-model="datos.etiqueta" placeholder="" />
                    <label class="form-label">Etiqueta del Equipo</label>
                    <!-- <input v-model="empleado.etiqueta" readonly /> -->
                    </div>
                    
                    <div class="form-group">
                    <input type="descripcion" v-model="datos.descripcion" placeholder="" />
                    <label class="form-label">Descripción del Equipo</label>
                    <!-- <textarea v-model="empleado.descripcion"></textarea> -->
                    </div>
                    
                    <div class="form-group">
                    <input type="marca" v-model="datos.marca" placeholder="" />
                    <label class="form-label">Marca del Equipo</label>
                    <!-- <input v-model="empleado.marca" /> -->
                    
                    </div>
                    
                    <div class="form-group">
                    <input type="serie" v-model="datos.serie" placeholder="" />
                    <label class="form-label">Serie del Equipo</label>
                    <!-- <input v-model="empleado.serie" /> -->
                    
                    </div>
                    
                    <div class="form-group">
                    <input type="Nserial" v-model="datos.Nserial" placeholder="" />
                    <label class="form-label">Número serial del Equipo</label>
                    <!-- <input v-model="empleado.Nserial" /> -->
                    
                    </div>

                    <div class="form-group">
                    <input type="disco" v-model="datos.disco" placeholder="" />
                    <label class="form-label">Disco del Equipo</label>
                    <!-- <input v-model="empleado.disco" /> -->
                    
                    </div>
                    
                    <div class="form-group">
                    <input type="ram" v-model="datos.ram" placeholder="" />
                    <label class="form-label">Ram del Equipo</label>
                    <!-- <input v-model="empleado.ram" /> -->
                    
                    </div>
                    
                    <div class="form-group">
                    <input type="estado" v-model="datos.estado" placeholder="" />
                    <label class="form-label">Estado del Equipo</label>
                    <!-- <input v-model="empleado.estado" /> -->
                    
                    </div>
                    
                    <div class="form-group">
                    <input type="observacion" v-model="datos.observacion" placeholder="" />
                    <label class="form-label">Observacion del Equipo</label>
                    <!-- <input v-model="empleado.observacion" /> -->
                    
                    </div>
                
                </form>

                    <div class="buttons">

                    <button class="btn btn-success" type="submit" @click="actualizarEmpleado"> Actualizar Empleado </button>

                    </div>

                </div>
                
                
            </section>
            </div>
        </div>
        
        <footer class="footer4 d-flex w-100 justify-content-center">
        <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
    </footer> 
</div>
</template>

<style>
@import '/src/assets/actualizarEmpleado.css'
</style> 
