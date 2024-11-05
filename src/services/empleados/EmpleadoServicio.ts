import Equipo from '@/utils/interfaces/InterfaceEquipos';
import app from '@/utils/firebase'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'
const db = getFirestore(app)

export class EmpleadoServicio {
    
    async obtenerEmpleados (empleado : Equipo){
        try {
            const response = await getDocs(collection(db, 'Equipos'), {...empleado})
            const empleados = await this.actualizadoEmpleado();
            const dataEmpleados = empleados.docs.map((registro) => registro.data())
            
            console.log({response});
            console.log({dataEmpleados})
            return response ;
        } catch (error) {
            console.log({error});
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

    actualizadoEmpleado(){
        return "actualizando empleado";

    }

    eliminarEmpleado(){
        return "eliminando empleado";
    }

}

