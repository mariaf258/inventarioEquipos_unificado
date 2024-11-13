<script setup lang="ts">

</script>


<template>
        <div class="button-add">
            <router-link to="/agregarEmpleado" class="btn btn-primary">Agregar</router-link>
            <button @click="actualizadoEmpleado" class="btn btn-success">Actualizar</button>
            <button @click="enableDeleteMode" class="btn btn-danger">Eliminar</button>
            <button v-if="deleteMode" @click="deleteSelectedCards">Confirmar eliminación</button>

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