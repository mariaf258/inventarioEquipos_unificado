<script lang="ts">
import {EmpleadoServicio} from '@/services/empleados/EmpleadoServicio';
import { ref, onMounted } from 'vue'
import type { Equipo } from '@/utils/interfaces/InterfaceEquipos';



let empleadosModuloTalentoHumano = ref<Equipo[]>([]);
const obtenerDatos = async () => {
    const empleados:Equipo[] = await empleadoServicio.obtenerEmpleados()
    console.log(empleados);



    const empleadosTalentoHumano:Equipo[] = empleados.filter(empleado => /^MLA-TH-\d+$/
    .test(empleado.etiqueta))
    .sort((a, b) => { 
        const numA = parseInt(a.etiqueta.split('-')[2], 10);
        const numB = parseInt(b.etiqueta.split('-')[2], 10);
        return numA - numB;
    });
console.log(empleadosTalentoHumano);
empleadosModuloTalentoHumano.value = empleadosTalentoHumano;
console.log({empleadosModuloTalentoHumano});

}

const empleadoSeleccionado = computed(() =>
    empleadosModuloTalentoHumano.value.find((empleado) => empleado.selected)
);



function selectCard(index: number) {
    empleadosModuloTalentoHumano.value.forEach((empleado, idx) => {
        empleado.selected = idx === index; 
    });
    }

    export class actualizarEmpleado{

    async actualizadoEmpleado() {
    const empleadoSeleccionado = empleadosModuloTalentoHumano.value.find((empleado) => empleado.selected);
    
        if (empleadoSeleccionado) {
            try {
            const response = await EmpleadoServicio.actualizadoEmpleado(
                empleadoSeleccionado.etiqueta,
                empleadoSeleccionado
            );
            console.log("Actualización exitosa:", response);
            } catch (error) {
            console.error("Error al actualizar:", error);
            }
        } else {
            alert("Por favor, selecciona una tarjeta para actualizar.");
        }
    }

}

// mostrar mensajes al pasar el mouse
const mensajeVisible = ref(false)

const mostrarMensaje = () => {
    mensajeVisible.value = true
}

const ocultarMensaje = () => {
    mensajeVisible.value = false
}


</script>


<template>
        <div class="button-add">
            <router-link to="/agregarEmpleado" class="btn btn-primary">Agregar</router-link>

            <router-link v-if="empleadoSeleccionado" :to="/actualizarEmpleado/${empleadoSeleccionado.etiqueta}" @click="actualizadoEmpleado" 
            @mouseover="mostrarMensaje"
            @mouseleave="ocultarMensaje"
            class="btn btn-success">Actualizar</router-link>

            <div v-show="mensajeVisible" class="tooltip">
                Selecciona una tarjeta para actualizar.
            </div>


            
            <button @click="eliminarEmpleado" class="btn btn-danger">Eliminar</button>

            <button v-if="deleteMode" @click="confirmarEliminacion">Confirmar eliminación</button>

            <div v-for="empleado in empleados" :key="empleado.id" 
                :class="{ selected: empleado.selected }" 
                @click="toggleCardSelection(empleado)">
                <h3>{{ empleado.title }}</h3>
            </div>
        </div>
</template>

<style>
@import '/src/assets/botonesEmpleado.css'
</style>