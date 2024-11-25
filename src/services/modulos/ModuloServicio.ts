import Modulo from '@/utils/interfaces/InterfaceModulos';
import app from '@/utils/firebase'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
const db = getFirestore(app)

export class ModuloServicio {

    async obtenerModulos () : Promise<Modulo[]>{
        try {
            const response = await getDocs(collection(db, 'Modulos'))
            const dataModulos = response.docs.map((registro) =>( {
                id : registro.id,   
                ...registro.data()
            }))
            
            console.log({response});
            console.log({dataModulos})
            return dataModulos ;
        } catch (error) {
            return [];
        }
    }
    
    async crearModulo(modulo : Modulo){
        try {
            if (!modulo || Object.keys(modulo).length === 0) {
                throw new Error('Los datos del modulo son inválidos.');
            }

            const { id, ...datosSinId } = modulo;
            const response = await addDoc(collection(db, 'Modulos'), datosSinId);
            console.log('Modulo creado:', response.id);
    

            await this.obtenerModulos();
            return response;
        } catch (error) {
            console.error('Error al crear el modulo:', error);
        }
    }

    async actualizadoModulo(id: string, nuevosDatos: object): Promise<boolean> {
        try {
            if (!id || Object.keys(nuevosDatos).length === 0) {
                throw new Error('ID inválido o datos vacíos.');
            }
    
            const docRef = doc(collection(db, 'Modulos'), id);
            await updateDoc(docRef, nuevosDatos);
            console.log('Modulo actualizado correctamente en Firebase:', id);
            return true;
        } catch (error) {
            console.error('Error al actualizar el modulo:', error);
            return false;
        }
    }

    async eliminarModulo(id: string): Promise<boolean> {
        try {
            console.log('Intentando eliminar el modulo con id:', id);

            const docRef = doc(db, 'Modulos', id); 
            console.log('Referencia al documento:', docRef.path);
            // await deleteDoc(docRef);
            const respuesta = await deleteDoc(docRef);
            console.log(respuesta);
            console.log("respuesta get");
            console.log(await this.obtenerModulos());
                        
            
            console.log('Modulo eliminado con éxito.');
            return true;
        } catch (error) {
            console.error('Error al eliminar el modulo:', error);
            return false;
        }
    }

}