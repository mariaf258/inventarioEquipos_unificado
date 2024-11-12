import Modulo from '@/utils/interfaces/InterfaceModulos';
import app from '@/utils/firebase'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore'
const db = getFirestore(app)

export class ModuloServicio {

    async obtenerModulos () : Promise<Modulo[]>{
        try {
            const response = await getDocs(collection(db, 'Modulos'))
            const dataModulos = response.docs.map((registro) => registro.data())
        
            console.log({response});
            console.log({dataModulos})
            return dataModulos ;
        } catch (error) {
            return [];
        }
    }
    
    async crearModulo(departamento : Modulo){
        try {
            const response =   await addDoc(collection(db, 'Modulos'), {...departamento})
            const departamentos = await this.obtenerModulos();
            const dataModulos = departamentos.docs.map((registro) => registro.data())

            console.log({response});
            console.log({dataModulos})
            return response ;            
        } catch (error) {
            console.log({error});
        }
    }

    async actualizadoModulo(shortName: string, moduloActualizado: Modulo){
        try {
            const response = await updateDoc(collection(db, 'Modulos', shortName), { ...moduloActualizado })

            console.log({response});
        } catch (error) {
            console.log({ error });
        }

    }

    async eliminarModulo(shortName : string ){
        try {
            const response = await deleteDoc(collection(db, 'Modulos', shortName))

            console.log({response});
        } catch (error) {
            console.log({ error });
        }

    }

}