<!-- <script setup lang="ts">
import botonesEmpleado from '@/components/botonesEmpleado.vue'

    const enableDeleteMode = () => {
        deleteMode.value = !deleteMode.value;
    };
    
    const toggleCardSelection = (empleado: Equipo) => {
        if (deleteMode.value) {
        empleado.selected = !empleado.selected;
        }
    };
    
    const deleteSelectedCards = () => {
        empleadosModuloTalentoHumano.value = empleadosModuloTalentoHumano.value.filter(empleado => {
        if (empleado.selected) {
            papelera.value.push(empleado);
            return false;
        }
        return true;
        });
        deleteMode.value = false;
    };

</script>


<template>
    <div class="button-add">
        <router-link to="/agregarEmpleado" class="btn btn-primary">Agregar</router-link>
            <button @click="$emit('actualizar')" class="btn btn-success">Actualizar</button>
            <button @click="$emit('eliminar')" class="btn btn-danger">Eliminar</button>
            <button v-if="deleteMode" @click="$emit('confirmarEliminacion')">Confirmar eliminación</button>

            <div v-for="empleado in empleados" :key="empleado.id" 
                :class="{ selected: empleado.selected }" 
                @click="toggleCardSelection(empleado)">
                <h3>{{ empleado.title }}</h3>
            </div>
    </div>
</template>

<style>
@import '/src/assets/botonesEmpleado.css'
</style> -->