<script setup lang="ts">
import { ref } from 'vue';
import type { Equipo } from '@/utils/interfaces/InterfaceEquipos';


let filteredEmpleados = ref<Equipo[]>([])
console.log(filteredEmpleados);


const filtrarEmpleado = (value:any) => {
    console.log('buscando la variable', value.target.value
    );

    const respuestaInput = value.target.value;


        const respuesta = empleados.value.filter(empleado =>
        empleado.name.includes(respuestaInput) || empleado.etiqueta.includes(respuestaInput)
        )
        filteredEmpleados.value = respuesta

}

onMounted(() => {
    obtenerDatos()
    // crearRegistro()
    console.log(empleados);
    
    filteredEmpleados.value = empleados.value;
    console.log(filteredEmpleados);
})

</script>
<!-- 
<template>
        <div class="header-right">
                    <input @input="filteredEmpleados" type="text" id="searchInput" placeholder="Buscar Empleado" />
                <div id="results" class="results">

                </div>
                
        </div>

</template> -->