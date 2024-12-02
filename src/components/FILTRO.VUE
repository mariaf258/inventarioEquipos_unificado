<template>
    <div>
        <h1>Gestión de Módulos</h1>
    
        <!-- Select para mostrar los módulos -->
        <select v-model="moduloSeleccionado">
            <option v-for="modulo in modulos" :key="modulo.id" :value="modulo.id">
            {{ modulo.nombre }}
            </option>
        </select>
    
        <!-- Botón para eliminar el módulo seleccionado -->
        <button @click="eliminarModuloSeleccionado">Eliminar Módulo</button>
    
        <!-- Mensaje de retroalimentación -->
        <p v-if="mensaje">{{ mensaje }}</p>
        </div>
    </template>
    
    <script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import { ModuloServicio } from '@/services/ModuloServicio';
    
    export default defineComponent({
        name: 'ModuloSelect',
        setup() {
        const moduloServicio = new ModuloServicio();
        const modulos = ref([]);
        const moduloSeleccionado = ref<string | null>(null);
        const mensaje = ref('');
    
        // Cargar los módulos al montar el componente
        const cargarModulos = async () => {
            modulos.value = await moduloServicio.obtenerModulos();
        };
    
        // Eliminar el módulo seleccionado
        const eliminarModuloSeleccionado = async () => {
            if (!moduloSeleccionado.value) {
            mensaje.value = 'Selecciona un módulo para eliminar.';
            return;
            }
            const exito = await moduloServicio.eliminarModulo(moduloSeleccionado.value);
            if (exito) {
            mensaje.value = 'Módulo eliminado correctamente.';
            await cargarModulos(); // Actualizar la lista de módulos
            moduloSeleccionado.value = null; // Reiniciar la selección
            } else {
            mensaje.value = 'Error al eliminar el módulo.';
            }
        };
    
        onMounted(cargarModulos);
    
        return {
            modulos,
            moduloSeleccionado,
            mensaje,
            eliminarModuloSeleccionado,
        };
        },
    });
    </script>
    
    <style scoped>
    button {
        margin-top: 10px;
        padding: 5px 10px;
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
    }
    
    button:hover {
        background-color: darkred;
    }
    
    p {
        color: green;
    }
    </style>
    