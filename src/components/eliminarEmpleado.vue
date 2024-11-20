<script setup lang="ts">
import EquipoDefault from '@/utils/interfaces/InterfaceEquipos';
import { EmpleadoServicio } from '@/services/empleados/EmpleadoServicio';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from "vue-router";


const empleadoServicio = new EmpleadoServicio();

const cards = ref<EquipoDefault[]>([]);
const selectedCard = ref<EquipoDefault | null>(null);



const filtroMLA = /^MLA-TH-\d+$/;

const filteredCards = computed(() => {
    return cards.value.filter((card) => filtroMLA.test(card.etiqueta));
});


onMounted(async () => {
    await obtenerEmpleados();
});


const obtenerEmpleados = async () => {
    const respuestaObtener = await empleadoServicio.obtenerEmpleados();
    if (respuestaObtener) {
        cards.value = respuestaObtener;
        console.log(cards.value);
    }
};

// Abre formulario con datos de una card
const openUpdateForm = (card: EquipoDefault) => {
    console.log(card);
    
};

// Eliminar 
const eliminarCard = async (etiqueta: string | undefined) => {
    if (!etiqueta) {
        alert('No se puede eliminar: etiqueta no válida.');
        return;
    }

    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este empleado?');
    if (!confirmacion) return;

    console.log('Etiqueta a eliminar:', etiqueta); 
    const respuestaEliminar = await empleadoServicio.eliminarEmpleado(etiqueta);

    if (!respuestaEliminar) {
        const index = cards.value.findIndex((card) => card.etiqueta === etiqueta);
        if (index !== -1) {
            cards.value.splice(index, 1);
        }
        alert('Empleado eliminado correctamente.');
    } else {
        alert('Error al eliminar el empleado.');
    }
};


const cancelUpdate = () => {
    selectedCard.value = null;
};

//boton volver

// const volver = () => {
//     router.back(); 
// };


</script>

<template>
    <div id="app4">

        <div class="button-btn">
            <a><router-link to="/talentoHumano" class="btn btn-primary">Volver</router-link></a>
            <!-- <a class="btn btn-primary" @click.prevent="volver">Volver</a> -->

        </div>  

        <div class="form4 justify-content-center">
        <div class="login">
            <h1>ELIMINAR EMPLEADO</h1>
            <hr />
            <h2>C.I. MINAS LA AURORA S.A.S.</h2>
            <br />
            <!-- <h6>SELECCIONAR EMPLEADO</h6> -->
            

            <select class="form-select" 
            v-model="selectedCard"
            aria-label="Default select example">
                <option disabled value="">Seleccione empleado</option>
                <option
                class="card-delete"
                v-for="card in filteredCards"
                :key="card.etiqueta"
                :value="card"
                @click="openUpdateForm(card)"
            >
                <h4>{{ card.name }} - </h4>
                <p>{{ card.descripcion }}</p>
            </option>
            </select>


            <section v-if="selectedCard" class="section-delete">
                <div class="formulario">
                
                    <div class="buttons-delete">
                        <button 
                        class="btn btn-danger" 
                        type="submit" 
                        :disabled="!selectedCard"
                        @click="eliminarCard(selectedCard?.id)"
                    >
                        Eliminar Cambios
                    </button>

                        <button class="btn btn-primary" type="button" @click="cancelUpdate">Cancelar</button>
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
@import '/src/assets/eliminarEmpleado.css';
</style>
