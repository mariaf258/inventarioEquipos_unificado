import Equipo from '@/utils/interfaces/InterfaceEquipos';
import Usuarios from '@/utils/interfaces/interfaceUsuarios';
import app from '@/utils/firebase'
import { ref, onMounted } from 'vue'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore'
const db = getFirestore(app)

export class EmpleadoServicio {
    
    async obtenerEmpleados () : Promise<Equipo[] >{
        try {
            const response = await getDocs(collection(db, 'Equipos'))
            const dataEmpleados = response.docs.map((registro) => registro.data())
            
            console.log({response});
            console.log({dataEmpleados})
            return dataEmpleados ;
        } catch (error) {
            return [];
        }
    }


    async crearEmpleado(empleado : Equipo){
        try {
            const response =   await addDoc(collection(db, 'Equipos'), {...empleado})
            const empleados = await this.obtenerEmpleados();
            const dataEmpleados = empleados.docs.map((registro) => registro.data())

            console.log({response});
            console.log({dataEmpleados})
            return response ;            
        } catch (error) {
            console.log({error});
            
        }
    }

    async actualizadoEmpleado(etiqueta: string, empleadoActualizado: Usuarios){
        try {
            const response = await updateDoc(collection(db, 'Usuarios', etiqueta), { ...empleadoActualizado })
            
            console.log({response});
        } catch (error) {
            console.log({ error });
        }

    }

    async eliminarEmpleado(etiqueta : string ){
        try {
            const response = await deleteDoc(collection(db, 'Usuarios', etiqueta))

            console.log({response});
        } catch (error) {
            console.log({ error });
        }

    }

}


// onMounted(() => {
    
//     filteredEquipo.value = Equipo.value;
//     console.log(filteredEquipo);
// })


// let filteredEquipo = ref<Equipo[]>([])
// console.log(filteredEquipo);


//     const filtrarEquipos = (value:any) => {
//     console.log('buscando la variable', value.target.value
//     );

//     const respuestaInput = value.target.value;


//     const respuesta = Equipo.value.filter(Equipo =>
//         Equipo.name.toLowerCase().includes(respuestaInput) || Equipo.Nserial.toLowerCase().includes(respuestaInput)
//         )
//         filteredEquipo.value = respuesta

// }

