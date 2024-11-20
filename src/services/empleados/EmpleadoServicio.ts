import Equipo from '@/utils/interfaces/InterfaceEquipos';
import Usuarios from '@/utils/interfaces/interfaceUsuarios';
import app from '@/utils/firebase'
// import { ref, onMounted } from 'vue'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
const db = getFirestore(app)

export class EmpleadoServicio {
    
    async obtenerEmpleados () : Promise<Equipo[] >{
        try {
            const response = await getDocs(collection(db, 'Equipos'))
            const dataEmpleados = response.docs.map((registro) =>( {
                id : registro.id,   
                ...registro.data()
            }))
            
            console.log({response});
            console.log({dataEmpleados})
            return dataEmpleados ;
        } catch (error) {
            return [];
        }
    }


    // async crearEmpleado(empleado : Equipo){
    //     try {
    //         const response =   await addDoc(collection(db, 'Equipos'), {...empleado})
    //         const empleados = await this.obtenerEmpleados();
    //         const dataEmpleados = empleados.docs.map((registro) => ( {
    //             id : registro.id,   
    //             ...registro.data()
    //         }))

    //         console.log({response});
    //         console.log({dataEmpleados})
    //         return response ;            
    //     } catch (error) {
    //         console.log({error});
            
    //     }
    // }

    async crearEmpleado(empleado: Equipo) {
        try {
            // if (!empleado || Object.keys(empleado).length === 0) {
            //     throw new Error('El objeto empleado está vacío o mal definido.');
            // }
    
            const response = await addDoc(collection(db, 'Equipos'), { ...empleado });
            console.log('Empleado creado correctamente:', response.id);

            const empleados = await this.obtenerEmpleados();
            const dataEmpleados = empleados.docs.map((registro) => ({
                id: registro.id,
                ...registro.data(),
            }));
    
            console.log('Lista actualizada de empleados:', dataEmpleados);
            return response; 
        } catch (error) {
            console.error('Error al crear empleado:', error);
            throw error; 
        }
    }
    

    // async actualizadoEmpleado(id: string, nuevosDatos: object, empleadoActualizado: Usuarios) : Promise<boolean> {
    //     try {
            
    //         await updateDoc(doc(collection(db, 'Equipos'), id), { ...empleadoActualizado });
    //         console.log('Empleado actualizado correctamente', id);
    //         return true; 
    //     } catch (error) {
    //         console.log('Error al actualizar el empleado:', error);
    //         return false; 
    //     }
    // }

    async actualizadoEmpleado(id: string, nuevosDatos: object): Promise<boolean> {
        try {
            if (!id || Object.keys(nuevosDatos).length === 0) {
                throw new Error('ID inválido o datos vacíos.');
            }
    
            const docRef = doc(collection(db, 'Equipos'), id);
            await updateDoc(docRef, nuevosDatos);
            console.log('Empleado actualizado correctamente en Firebase:', id);
            return true;
        } catch (error) {
            console.error('Error al actualizar el empleado:', error);
            return false;
        }
    }
    
    

    async eliminarEmpleado(id: string): Promise<boolean> {
        try {
            console.log('Intentando eliminar empleado con etiqueta:', id);

            const docRef = doc(db, 'Equipos', id); 
            console.log('Referencia al documento:', docRef.path);
            // await deleteDoc(docRef);
            const respuesta = await deleteDoc(docRef);
            console.log(respuesta);
            console.log("respuesta get");
            console.log(await this.obtenerEmpleados());
                        


            
            console.log('Empleado eliminado con éxito.');
            return true;
        } catch (error) {
            console.error('Error al eliminar el empleado:', error);
            return false;
        }
    }
}
